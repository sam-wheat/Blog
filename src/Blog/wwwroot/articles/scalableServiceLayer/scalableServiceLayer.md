# Building a scalable, testable service layer with Entity Framework Core, Autofac, and AdaptiveClient

## Introduction
Most developers know Entity Framework Core as a powerful ORM that is widely used for creating business applications.  Autofac is a dependency injection library known for its robustness and flexibility.  Entity Framework Core and Autofac work wonderfully together - however it is up to the developer to devise a specific implementation.  Such implementations often involve repetitive work, they do not adhere to any known patterns, and often do not exploit the full utility either of these libraries provide.

AdaptiveClient and its related library, AdaptiveClient.EntityFramework, describe a pattern for using Entity Framework Core and Autofac together. AdaptiveClient allows the developer to create loosely coupled services that are resolved at runtime using keys. Each key is a simple string that is associated with a connection string.  When a user makes a call to a particular service, AdaptiveClient identifies a server that is available and able to handle the request.  Using the keys that are associated with the connection string for the selected server, AdaptiveClient instructs Autofac how to resolve and inject all required dependencies for the called service.  This process, when described in words, may seem lengthy and complex.  However it is typically very efficient and describes how dependency injection services such as Autofac are commonly used.  

AdptiveClient defines three simple keys that are used in the resolution of service components.  These keys are stored in a json configuration file along with the connection strings that are used by the application.  AdaptiveClient provides a simple API for using these keys to register and resolve components .  AdaptiveClient also provides utilities for working with Entity Framework Core objects such as migrations and initializers.

Many applications are tightly coupled to a DBMS or protocol.  This means that if a required server such as a DBMS or web API server is unavailable the application fails. AdaptiveClient, however, provides fall back capabilities that allow the developer to automatically resolve services that are appropriate for the users connection type.  For example, a user who normally connects via a corporate LAN may make fast, in-process calls to a database server that is on the same LAN.  When the user attempts a connection from a remote location that database server will not be available.  AdaptiveClient will detect the failure to connect to the DBMS and will automatically fall back to a web API server if configured to do so.  This fall back process happens transparently to the user and requires no other configuration than proper registration of the correct components for the connection type.

## What problems does AdaptiveClient solve?
1. A software company makes a web based order management system that is designed to run on both Microsoft SQL Server or MySQL.  One of the controllers in the product looks like this:

&nbsp;  
  
    public OrdersController : Controller
    {
        private IOrderProcessor orderProcessor;
		
	    public OrdersController(IOrderProcessor orderProcessor)
	    {
		    this.orderProcessor = orderProcessor;
	    }

	    [Post]
	    public void SaveOrder (Order order)
	    {
		    orderProcessor.SaveOrder(order);
	    }
    }

Note that an instance of IOrderProcessor is injected into the controller.  The SaveOrder method on IOrderProcessor is called when a user POSTs an order.  The company maintains two implementations of IOrderProcessor due to differences in MSSQL and MySQL:

	public MSSQL_OrderProcessor : IOrderProcessor
	{
		public void SaveOrder(Order order)
		{
			// MSSQL specific code here
		}
	}

	public MySQL_OrderProcessor : IOrderProcessor
	{
		public void SaveOrder(Order order)
		{
			// MySQL specific code here
		}
	}

Given the above two implementations of IOrderProcessor, what pattern might be used to insure the correct implementation is injected based on the configured choice of database platforms?  AdaptiveClient solves this problem by allowing each implementation of IOrderProcessor to be registered with a specific database provider (in this example, MSSQL or MySQL).  Each database provider is associated with a specific connection string.  When the application is started and a connection string is chosen AdaptiveClient is able to use the name of the database provider to resolve the correct implementation of IOrderProcessor.

2. The same software company makes a version of their software that is designed to run on servers located on-site at their customer's warehouses.  Workers in the warehouse who use tablets want to make fast calls to database services over the local area network.  Users who connect remotely using an Internet connection will access database services via a RESTful API.  A ViewModel in the company's application looks like this:

&nbsp;

	public Class OrderViewModel
	{
		private IOrdersService ordersService;
		
		public OrderViewModel(IOrdersService ordersService)
		{
			this.ordersService = ordersService;
		}
		
		public void SaveOrder(Order order)
		{
			ordersService.SaveOrder(order);
		}
	}

Implementations of IOrdersService are shown below.  The first implementation requires access to a database server over a local area network or VPN.  The second implementation assumes LAN connectivity is not available and makes a web API call (orders of magnitude slower):


    public class OrdersService : IOrdersService
    {
       public void SaveOrder(Order order)
       {
          using(sqlConnection...)
          {
            // write order to db
          }
       }
    }

&nbsp;

    public class HTTP_OrdersService : IOrdersService
	{
       public void SaveOrder(Order order)
       {
          // POST the oder via the web API
          string url = "http://.../orders";
          var content = new FormUrlEncodedContent(order);
          client.Post(url, content);
       }
	}
 
Given the above two implementations of IOrdersService, what pattern might be used to ensure that a worker in the warehouse who has access to the LAN receives OrdersService while a remote user receives HTTP_OrdersService?  AdaptiveClient solves this problem by allowing URLs to be stored and used as connection strings.  Each connection string is given a type property which indicates if it is a standard database connection string or a URL. OrdersService and HTTP_OrdersService are registered with the DI container using the connection string type as a key.  When a user starts the application their connectivity is assessed and a connection string is chosen (in this example it may be a standard database connection string or a URL).  Using the connection string type as a key, AdaptiveClient is able resolve the correct implementation of IOrdersService.

## Basic concepts and components
Every dependency injection framework, including Autofac, is basically a dictionary that allows a developer to resolve (look up) a type or instance using a key (often an interface).  More elaborate keys can be used when necessary to resolve specific implementations of interfaces.  For example consider a class that processes shipments based on the requirements of an individual freight carrier:

    public class USPS_ShipmentProcessor : IShipmentProcessor
    {
        public void Ship(Order order) { // ship using USPS logic }
    }

    public class FedEx_ShipmentProcessor : IShipmentProcessor
    {
        public void Ship(Order order) { // ship using FexEx logic }
    }

The above two classes may be registered with the DI container as follows:

    Register<USPS_ShipmentProcessor>().Keyed<IShipmentProcessor>("USPS");
    Register<FedEx_ShipmentProcessor>().Keyed<IShipmentProcessor>("FedEx");
    
An instance of IShipmentProcessor may be resolved as shown below, where order.Carrier is a string like "USPS" or "FedEx":

    IShipmentProcessor = container.ResolveKeyed<IShipmentProcessor>(order.Carrier);
  

Having discussed the role of keys in resolving dependencies we now focus on three keys used by AdaptiveClient: **API_Name**, **EndPointType**, and **ProviderName**.  Each of these keys is a simple string that you define.  The keys you define are than used as properties of a modified connection string class known as an **EndPointConfiguration**.  EndPointConfiguration is the lynchpin of AdaptiveClient.  It is basically the glue that allows various objects to be registered, resolved, and linked at runtime. The structure of the EndPointConfiguration class is shown below to illustrate the use of API_Name, EndPointType, and ProviderName. EndPointConfiguration will be discussed at length in the section below.

    public class EndPointConfiguration : IEndPointConfiguration
    {
	    public string Name { get; set; }
	    public string API_Name { get; set; }
	    public int Preference { get; set; }
	    public String EndPointType { get; set; }
	    public string ConnectionString { get; set; }
	    public string ProviderName { get; set; }
	    public Dictionary<string, string> Parameters { get; set; }
	    public bool IsActive { get; set; }
    }

### API_Name
An API name is arbitrary name that describes an API.  Just as the name of a database describes the collection of tables and other objects it contains, so too does an API name describe the collection of services exposed by the API.  The name of a database used by an API is often a good choice as a name for the API itself.

API_Name is used in two ways:  
1. When EndPointConfigurations are registered they are grouped by API_Name.  API_Name becomes a key to access any one of the EndPointConfigurations associated with an API.

2. When a service (OrdersService) is registered its interface (IOrdersService) is automatically registered to an API_Name. When the service is resolved, AdaptiveClient resolves the API_Name also and is able to provide implementations of the service that are appropriate for the type of connection.

  It is recommended that you create a class as shown below to define your API name(s) as constants:

````csharp
public class API_Name
{
	public const string BackOffice = "BackOffice";
	public const string StoreFront = "StoreFront";
}
````

### EndPointType
EndPointType describes how and where a connection string is used.  For example, most connection strings are used to connect to some kind of DBMS.  However we may also think of a URL as a connection string to a web API, or a path and filename as a connection string to a flat file repository.  You may use any name that is meaningful for your application.  

It is recommended that you create a class as shown below to define your EndPointType(s) as constants:

````csharp
public class EndPointType
{
	public const string DBMS = "DBMS";
	public const string HTTP = "HTTP";
}
````

### ProviderName
ProviderName is simply a key that further defines an EndPointType.  For example, if an EndPointType is defined that describes a connection string for a DBMS, ProviderName might be defined as "MSSQL" or "MySQL".  You may use any name that is meaningful for your application.  

It is recommended that you create a class as shown below to define your ProviderNames as constants:

````csharp
public class DataBaseProviderName
{
	public const string MSSQL = "MSSQL";
	public const string SQLite = "SQLite";
	public const string MySQL = "MySQL";
}
````

When you register a service, you register it using both EndPointType and ProviderName as keys.  This allows you to resolve implementations of your services that are specific to certain protocols (named pipes/http) and/or platforms (MSSQL/MySQL).


### EndPointConfiguration
EndpointConfigurations are defined in a json configuration similar to the one shown below:
````json
{
    "EndPointConfigurations": [
    {
        "Name": "StoreFront_SQLServer",
        "IsActive": "true",
        "API_Name": "StoreFront",
        "Preference": "10",
        "EndPointType": "InProcess",
        "ProviderName": "MSSQL",
        "ConnectionString": "Data Source=.\\SQLSERVER;Initial Catalog=AdaptiveClientEF_StoreFront;Integrated Security=True;MultipleActiveResultSets=True;"
    },

    {
        "Name": "BackOffice_SQLServer",
        "IsActive": "true",
        "API_Name": "BackOffice",
        "Preference": "10",
        "EndPointType": "InProcess",
        "ProviderName": "MSSQL",
        "ConnectionString": "Data Source=.\\SQLSERVER;Initial Catalog=AdaptiveClientEF_BackOffice;Integrated Security=True;MultipleActiveResultSets=True;"
    },

    {
        "Name": "StoreFront_MySQL",
        "IsActive": "true",
        "API_Name": "StoreFront",
        "Preference": "20",
        "EndPointType": "InProcess",
        "ProviderName": "MySQL",
        "ConnectionString": "Server=localhost;Database=AdaptiveClientEF_StoreFront;Uid=x;Pwd=x;SslMode=none;"
    },

    {
        "Name": "BackOffice_MySQL",
        "IsActive": "true",
        "API_Name": "BackOffice",
        "Preference": "20",
        "EndPointType": "InProcess",
        "ProviderName": "MySQL",
        "ConnectionString": "Server=localhost;Database=AdaptiveClientEF_BackOffice;Uid=x;Pwd=x;SslMode=none"
    }
    ]
}
````


AdaptiveClient includes a utility for reading Endpoints.json and instantiating EndPointConfiguration objects.  Properties of the EndPointConfiguration class are discussed here:
* **Name** - Any unique name.
* **API_Name** - An API_Name used to group connection strings and resolve services.
* **Preference** - A number that indicates the preference of one connection string versus another within the same API (lower is better).  AdaptiveClient attempts to use more preferred connection strings first and may fall back to lesser preferred connection strings if configured to do so.
* **EndPointType** - A string that identifies the type of connection string.  Examples are "DBMS" or "HTTP".  Also used as a key to resolve services that are specific to the indicated type.
* **ConnectionString** - A platform-specific connection string, a URL, or any other string required to connect to a remote server.
* **ProviderName** - A string that further describes the connection string.  Examples are "MSSQL" or "MySQL".  Also used as a key to resolve services that are specific to the indicated ProviderName.
* **Parameters** - Not currently used by AdaptiveClient.  May be removed in a future release.
* **IsActive** - A convenient boolean flag for enabling or disabling an EndPointConfiguration.  By default AdapativeClient only loads EndPointConfigurations where IsActive is true.


    
## How AdaptiveClient resolves a service from start to finish
![How AdaptiveClient resolves a service from start to finish](https://raw.githubusercontent.com/leaderanalytics/AdaptiveClient/master/LeaderAnalytics.AdaptiveClient/docs/HowAdaptiveClientWorks.png)


## Architecting your application
AdaptiveClient is intended to work with an n-tier style application.  Follow the design recommendation below to create components that can be resolved and used by AdaptiveClient.

You should have projects similar to the following for your service layer:

|Project Name|Type|Description|References|
|---|---|---|
|MyApp.Services|Library|Contains DbContext and classes that define each of your services (OrdersService, ProductsService, etc.). All business logic is written here.|Domain, Model|
|MyApp.Domain|Library|Contains interfaces (IOrdersService, IProductsService) and low level domain objects such as classes for key constants (API_Name, EndPointType, etc). No code here.|Model|
|MyApp.Model|Library|Contains DTO clases (Order, Product, Client, etc.).  Minimize code in DTO classes (formatting only).  No code here.|N/A|


If you want to expose a web API, a web UI, or a desktop UI you should create optional projects as described below.  In order to use AdaptiveClient successfully you should never put business logic in a controller or a ViewModel.  You should never attempt to access your DbContext directly from outside your Services project.  These design guidelines are recommended even if you do not use AdaptiveClient.
 
|Project Name|Type|Description|References|
|---|---|---|
|MyApp.API|Web Application|Controllers for exposing REST/WCF API.|Services, Domain, Model|
|MyApp.Web|Web Application|Controllers for exposing Web UI.|Services, Domain, Model|
|MyApp.WPF|Desktop Application|Views, ViewModels, controls.|Services, Domain, Model|


## Implementing AdaptiveClient in your application
1. Define keys - Define API_Name, EndPointType, and ProviderName as described above.
2. Define Endpoints - Create a file called something like EndPoints.json to define your EndPointConfigurations.  See example file above.
3. Register required components -  You will need to register your EndPoints, your services, and possibly one or more IEndPointValidator implementations (see AdaptiveClient.HttpEndPointValidator and AdaptiveClient.InProcessEndPointValidator).  If you use Entity Framework you will also need to register your DbContexts and DbContextOptions.  
4. Register optional components - Registering a ServiceManifest is optional but is highly recommended even if you have a small number of services. If you use EF migrations you should register one or more MigrationContexts.  Use a MigrationContext to easily drop and re-create your database and apply migrations as necessary.  You may also want to register a DatabaseInitalizer if you seed your database when it is created or when a migration is applied.

## Sample Application

````csharp
