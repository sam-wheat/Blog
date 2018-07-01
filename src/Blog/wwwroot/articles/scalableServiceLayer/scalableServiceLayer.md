<style>
    table {
        border-collapse:collapse;
    }
   
    table th tr td {
     
    }

    th {
        font-weight:bold;
        background-color:grey;
    }

    th, td {
        border:solid 1px black;
        padding:8px;
    }

    tr {
        background-color:lightgrey;
    }

    tr:nth-child(even) {
        background-color:#F2F2F2;
    }
</style>
<article>

## Introduction

AdaptiveClient puts a spin on the well-known repository pattern where a connection string is read from a configuration file and is passed down through the stack to the data access layer.  A problem with this approach is that if the application is unable to establish a connection with the server it usually fails or becomes severely limited in its capabilities.  

With AdaptiveClient, the process of connecting to a server is reversed.  First, the application asks AdaptiveClient to find a working server that handles calls for a specific API. Upon locating a server, AdaptiveClient resolves the services and components necessary to communicate with that server.  If a call to the server subsequently fails, AdaptiveClient may (optionally) fall back to any number of other servers.  The servers in the fall back chain may be of any type.   This means that AdaptiveClient may initially connect to a MSSQL server, than fall back to a MySQL server, than fall back to a WebAPI server, than a WCF server.  

You might think that constructing an application that is flexible enough to handle connectivity across multiple transports and providers would be complex and difficult.  It is, however, a fairly simple task. This kind of flexibility is actually a byproduct of using a simple design pattern with two very powerful tools you might already know of and use: Autofac and Entity Framework Core.  Even if your application does not require multiple database platforms or fallback capabilities, AdaptiveClient is still useful in allowing you to build a loosely coupled service layer composed of granular, interdependent services that can be mocked and tested.

Most developers know Entity Framework Core as a powerful ORM that is widely used to develop business applications.  Autofac is a dependency injection library known for its robustness and flexibility.  Entity Framework Core and Autofac work wonderfully together - however creating a true synergy requires a little creativity. That is where AdaptiveClient enters the picture.

AdaptiveClient is a utility that provides a pattern for using Entity Framework Core and Autofac together.  AdaptiveClient eliminates much of the tedium and complexity related to registering and resolving services. It also provides utilities for working with specific Entity Framework Core objects.  Most importantly, however, AdaptiveClient allows the developer to create and use loosely coupled services that potentially target any type of transport or storage technology.  For example, a developer may create individual implementations of a given service interface that target Microsoft SQL Server, Oracle MySQL, REST, WebAPI, WCF, and so on.  AdaptiveClient abstracts away the details of resolving the correct implementation and provides a single access point for all services regardless of the underlying storage or transport technology.
  
AdaptiveClient provides a simple API that centralizes and streamlines the registration and resolution of dependencies.  Three keys are used to identify service implementations and register them in the dependency injection container.  These keys are implemented as metadata properties of the connection strings that are used by the application.  They are stored in a JSON configuration file along with the connection strings they describe.  When an implementation of a specific service is requested, AdaptiveClient first identifies a server that is able to handle the request.  Then, using the keys that are associated with the connection string for the selected server, AdaptiveClient instructs Autofac how to resolve and inject all required dependencies for the called service.

## What problems does AdaptiveClient solve?

1. A large investment firm maintains dozens of databases on multiple platforms.  The service layer that exposes these databases consists of thousands of highly inter-dependent classes.  How might these classes be structured such that they are loosely coupled, testable, and reusable?  AdaptiveClient solves this problem by providing a Service Manifest object which is essentially a list of services (not a DI container) that can be injected into any other service.  AdaptiveClient provides the infrastructure for registering the services so they can easily be resolved by any consuming API or application. 


2. A software company makes a web based order management system that is designed to run on both Microsoft SQL Server and MySQL.  One of the controllers in the product looks like this:

````csharp
public class OrdersController : Controller
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
````
Note that an instance of IOrderProcessor is injected into the controller.  The SaveOrder method on IOrderProcessor is called when a user POSTs an order.  The company maintains two implementations of IOrderProcessor due to differences in MSSQL and MySQL:
````csharp
public class MSSQL_OrderProcessor : IOrderProcessor
{
    public void SaveOrder(Order order)
    {
	    // MSSQL specific code here
    }
}

public class MySQL_OrderProcessor : IOrderProcessor
{
    public void SaveOrder(Order order)
    {
	    // MySQL specific code here
    }
}
````
Given the above two implementations of IOrderProcessor, what pattern might be used to insure the correct implementation is injected based on the configured choice of database platforms?  AdaptiveClient solves this problem by allowing each implementation of IOrderProcessor to be registered with a specific database provider (in this example, MSSQL or MySQL).  Each database provider is associated with a specific connection string.  When the application is started and a connection string is chosen AdaptiveClient is able to use the name of the database provider to resolve the correct implementation of IOrderProcessor.

3. The same software company makes a version of their software that is designed to run on servers located on-site at their customer's warehouses.  Workers in the warehouse who use tablets want to make fast calls to database services over the local area network.  Users who connect remotely using an Internet connection will access database services via a RESTful API.  A ViewModel in the company's application looks like this:

````csharp
public class OrderViewModel
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
````
Implementations of IOrdersService are shown below.  The first implementation requires access to a database server over a local area network or VPN.  The second implementation assumes LAN connectivity is not available and makes a web API call (orders of magnitude slower):

````chsharp
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
```` 
Given the above two implementations of IOrdersService, what pattern might be used to ensure that a worker in the warehouse who has access to the LAN receives OrdersService while a remote user receives HTTP_OrdersService?  AdaptiveClient solves this problem by allowing URLs to be stored and used as connection strings.  Each connection string is given a type property which indicates if it is a standard database connection string or a URL. OrdersService and HTTP_OrdersService are registered with the DI container using the connection string type as a key.  When a user starts the application their connectivity is assessed and a connection string is chosen (in this example it may be a standard database connection string or a URL).  Using the connection string type as a key, AdaptiveClient is able resolve the correct implementation of IOrdersService.

## Basic concepts and components
Every dependency injection framework, including Autofac, is basically a dictionary that allows a developer to resolve (look up) a type or instance using a key (often an interface).  More elaborate keys can be used when necessary to resolve specific implementations of interfaces.  For example consider a class that processes shipments based on the requirements of an individual freight carrier:
````csharp
public class USPS_ShipmentProcessor : IShipmentProcessor
{
    public void Ship(Order order) { // ship using USPS logic }
}

public class FedEx_ShipmentProcessor : IShipmentProcessor
{
    public void Ship(Order order) { // ship using FedEx logic }
}
````
The above two classes may be registered with the DI container as follows:
````csharp
Register<USPS_ShipmentProcessor>().Keyed<IShipmentProcessor>("USPS");
Register<FedEx_ShipmentProcessor>().Keyed<IShipmentProcessor>("FedEx");
````    
A specific instance of IShipmentProcessor may be resolved as shown below:
````csharp
// Process an order using USPS logic:
order.Carrier = "USPS";
IShipmentProcessor orderProcessor = container.ResolveKeyed<IShipmentProcessor>(order.Carrier);
````  
AdaptiveClient uses keys in much the same way as the hypothetical OrderProcessor in the preceding example.  Here is an example of how a service is registered using the AdaptiveClient RegistrationHelper class:
````csharp
registrationHelper.RegisterService<MSSQL_OrdersService, IOrdersService>(EndPointType.DBMS, API_Name.StoreFront, ProviderName.MSSQL);
registrationHelper.RegisterService<MySQL_OrdersService, IOrdersService>(EndPointType.DBMS, API_Name.StoreFront, ProviderName.MySQL);
registrationHelper.RegisterService<WebAPI_OrdersService, IOrdersService>(EndPointType.HTTP, API_Name.StoreFront, ProviderName.WebAPI);
````
In the example above we are registering three different implementations of `IOrdersService` using the interface as a key.  The three additional keys passed as parameters to the method tell AdaptiveClient which instance of `IOrdersService` to resolve when a making a call to a specific server - in this example the server might be an MSSQL server, a MySQL server or a WebAPI server.   

The three keys used by AdaptiveClient are: **API_Name**, **EndPointType**, and **ProviderName**.  These keys are implemented as properties of a modified connection string class known as an `EndPointConfiguration`.  **EndPointConfiguration is the lynchpin of AdaptiveClient** .  It is basically the glue that allows various objects to be registered, resolved, and linked at runtime. 

API_Name, EndPointType, and ProviderName are keys that you define. The values for each key are simple strings.  You associate each of the connection strings in your application with a value for each of those keys using an instance of EndPointConfiguration as described in the preceding paragraph.  You also register your services using a value for each key.  When you need to make a call to a database server or a web API server AdaptiveClient is able to use to the keys associated with the connection string to resolve the correct implementation of your service for the server being called.


### EndPointConfiguration
````csharp
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
````
EndPointConfigurations for your application are defined in a json configuration file similar to the one shown below.  AdaptiveClient includes a utility for reading this file and instantiating EndPointConfiguration objects.
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
        "ConnectionString": "Data Source=.\\SQLSERVER;Initial Catalog=AdaptiveClientEF_StoreFront;"
    },

    {
        "Name": "BackOffice_SQLServer",
        "IsActive": "true",
        "API_Name": "BackOffice",
        "Preference": "10",
        "EndPointType": "InProcess",
        "ProviderName": "MSSQL",
        "ConnectionString": "Data Source=.\\SQLSERVER;Initial Catalog=AdaptiveClientEF_BackOffice;"
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
    },

    {
      "Name": "StoreFront_WebAPI",
      "IsActive": "true",
      "API_Name": "StoreFront",
      "Preference": "30",
      "EndPointType": "HTTP",
      "ProviderName": "WebAPI",
      "ConnectionString": "http://localhost:59260/api/StoreFront/"
    }
  ]
}
````
`EndPointConfiguration` Properties:
* **Name** - Any unique name.
* **API_Name** - An API_Name used to group connection strings and resolve services.
* **Preference** - A number that indicates the preference of one connection string versus another within the same API (lower is better).  AdaptiveClient attempts to use more preferred connection strings first and may fall back to lesser preferred connection strings if configured to do so.
* **EndPointType** - A string that identifies the type of connection string.  Examples are "DBMS" or "HTTP".  Also used as a key to resolve services that are specific to the indicated type.
* **ConnectionString** - A platform-specific connection string, a URL, or any other string required to connect to a remote server.
* **ProviderName** - A string that further describes the connection string.  Examples are "MSSQL" or "MySQL".  Also used as a key to resolve services that are specific to the indicated ProviderName.
* **Parameters** - Not currently used by AdaptiveClient.  May be removed in a future release.
* **IsActive** - A convenient boolean flag for enabling or disabling an EndPointConfiguration.  By default AdapativeClient only loads EndPointConfigurations where IsActive is true.

Further discussion of API_Name, EndPointType, and ProviderName is provided below as these properties are used extensively by AdaptiveClient.

### API_Name
````csharp
public class API_Name
{
    public const string BackOffice = "BackOffice";
    public const string StoreFront = "StoreFront";
}
````
An API name is arbitrary name that describes an API.  Just as the name of a database describes the collection of tables and other objects it contains, so too does an API name describe the collection of services exposed by the API.  The name of a database used by an API is often a good choice as a name for the API itself.

API_Name is used in two ways:  
1. When EndPointConfigurations are registered they are grouped by API_Name.  API_Name becomes a key to access any one of the EndPointConfigurations associated with an API.

2. When a service (OrdersService) is registered its interface (IOrdersService) is automatically registered to an API_Name. When the service is resolved, AdaptiveClient resolves the API_Name also and is able to provide implementations of the service that are appropriate for the type of connection.

### EndPointType
````csharp
public class EndPointType
{
    public const string DBMS = "DBMS";
    public const string HTTP = "HTTP";
}
````
EndPointType describes how and where a connection string is used.  For example, most connection strings are used to connect to some kind of DBMS.  However we may also think of a URL as a connection string to a web API, or a path and filename as a connection string to a flat file repository.  You may use any name that is meaningful for your application.  

### ProviderName
````csharp
public class ProviderName
{
    public const string MSSQL = "MSSQL";
    public const string SQLite = "SQLite";
    public const string MySQL = "MySQL";
}
````
ProviderName is simply a key that further defines an EndPointType.  For example, if an EndPointType is defined that describes a connection string for a DBMS, ProviderName might be defined as "MSSQL" or "MySQL".  You may use any name that is meaningful for your application.  

When you register a service, you register it using both EndPointType and ProviderName as keys.  This allows you to resolve implementations of your services that are specific to certain protocols (named pipes/http) and/or platforms (MSSQL/MySQL).
    
## How AdaptiveClient resolves a service from start to finish

<div style="max-width:800px;margin:auto;">

![How AdaptiveClient resolves a service from start to finish](https://raw.githubusercontent.com/leaderanalytics/AdaptiveClient/master/LeaderAnalytics.AdaptiveClient/docs/AdaptiveClient2.png)

</div>


## Architecting your application
AdaptiveClient is intended to work with an n-tier style application.  Follow the design recommendation below to create components that can be resolved and used by AdaptiveClient.

You should have projects similar to the following for your service layer:

|Project Name|Type|Description|References|
|---|---|---|
|MyApp.Services|Library|Contains DbContext and classes that define each of your services (OrdersService, ProductsService, etc.). All business logic is written here.|Domain, Model|
|MyApp.Domain|Library|Contains interfaces (IOrdersService, IProductsService) and low level domain objects such as classes for key constants (API_Name, EndPointType, etc). No code here.|Model|
|MyApp.Model|Library|Contains DTO clases (Order, Product, Client, etc.).  Minimize code in DTO classes (formatting only).  No code here.|N/A|


If you want to expose a web API, a web UI, or a desktop UI you should create optional projects as described below.  In order to use AdaptiveClient successfully you should never put business logic in a controller or a ViewModel.  **The most important requirement for implementing AdaptiveClient successfully is that all business logic be consolidated in the service layer.**  Also, you should never attempt to access your DbContext directly from outside your Services project.  These design guidelines are recommended even if you do not use AdaptiveClient.
 
|Project Name|Type|Description|References|
|---|---|---|
|MyApp.API|Web Application|Controllers for exposing REST/WCF API.|Services, Domain, Model|
|MyApp.Web|Web Application|Controllers for exposing Web UI.|Services, Domain, Model|
|MyApp.WPF|Desktop Application|Views, ViewModels, controls.|Services, Domain, Model|


## Implementing AdaptiveClient in your application
1.  Install Nuget packages:
    * [Autofac](https://www.nuget.org/packages/Autofac/)
    * [AdaptiveClient](https://www.nuget.org/packages/AdaptiveClient/)
    * [AdaptiveClient.EntityFrameworkCore](https://www.nuget.org/packages/AdaptiveClient.EntityFrameworkCore/)
    * [AdaptiveClient.Utilities](https://www.nuget.org/packages/AdaptiveClient.Utilities/) (optional)
2. Define keys - Define API_Name, EndPointType, and ProviderName as described above.  These keys should be defined in the Domain layer of your app.
3. Define Endpoints - Create a file called something like EndPoints.json to define your EndPointConfigurations.  See example file above.
4. Register required components -  You will need to register your EndPoints, your services, and possibly one or more `IEndPointValidator` implementations.  If you use Entity Framework you will also need to register `DbContext` and `DbContextOptions`.  See the section below and the example application.
5. Register optional components - Registering a `ServiceManifest` is optional but recommended even if you have a small number of services. If you use EF migrations you should register one or more `MigrationContexts`.  Use a `MigrationContext` to easily drop and re-create your database and apply migrations as necessary.  You may also want to register a `DatabaseInitalizer` if you seed your database when it is created or when a migration is applied.

## Sample Application

The [Zamagon demo](https://github.com/leaderanalytics/AdaptiveClient.EntityFramework.Zamagon) illustrates using AdaptiveClient with a Web application, a WPF application, and a Web API.  The following excerpts are taken from that application.

In the code below an AdaptiveClient `RegistrationHelper` object is instantiated.  It is used to register modules in referenced library projects (example in the following section).  

After creating the container, AdaptiveClient loops through the collection of EndPoints.  It creates the database if necessary or applies migrations where the EndPoint has a connection string that points to a database server.  This bit of code is useful in integration test projects where you wish to drop and re-create multiple databases before each test.

````csharp
// This method gets called by the runtime. Use this method to add services to the container.
public IServiceProvider ConfigureServices(IServiceCollection services)
{
    services.AddMvc();

    services.AddDistributedMemoryCache();

    services.AddSession(options =>
    {
        // Set a short timeout for easy testing.
        //options.IdleTimeout = TimeSpan.FromSeconds(10);
        //options.Cookie.HttpOnly = true;
    });

    // Autofac & AdaptiveClient
    IEnumerable<IEndPointConfiguration> endPoints = EndPointUtilities.LoadEndPoints("EndPoints.json");
    ContainerBuilder builder = new ContainerBuilder();
    builder.Populate(services);
    builder.RegisterModule(new LeaderAnalytics.AdaptiveClient.EntityFrameworkCore.AutofacModule());
    RegistrationHelper registrationHelper = new RegistrationHelper(builder);

    registrationHelper
        .RegisterEndPoints(endPoints)
        .RegisterModule(new Zamagon.Services.Common.AdaptiveClientModule())
        .RegisterModule(new Zamagon.Services.BackOffice.AdaptiveClientModule())
        .RegisterModule(new Zamagon.Services.StoreFront.AdaptiveClientModule());

            
    var container = builder.Build();
    IDatabaseUtilities databaseUtilities = container.Resolve<IDatabaseUtilities>();
            
    // Create all databases or apply migrations
    foreach (IEndPointConfiguration ep in endPoints.Where(x => x.EndPointType == EndPointType.DBMS))
        databaseUtilities.CreateOrUpdateDatabase(ep).Wait();

    return container.Resolve<IServiceProvider>();
}
````

The [Zamagon demo](https://github.com/leaderanalytics/AdaptiveClient.EntityFramework.Zamagon) is written to run against both MySQL and MSSQL databases.  The code below shows how services and Entity Framework objects are registered.

````csharp
public class AdaptiveClientModule : IAdaptiveClientModule
{
    public void Register(RegistrationHelper registrationHelper)
    {
        // --- StoreFront Services ---

        registrationHelper

        // MSSQL
        .RegisterService<StoreFront.MSSQL.OrdersService, IOrdersService>(EndPointType.DBMS, API_Name.StoreFront, DataBaseProviderName.MSSQL)
        .RegisterService<StoreFront.MSSQL.ProductsService, IProductsService>(EndPointType.DBMS, API_Name.StoreFront, DataBaseProviderName.MSSQL)
            
        // MySQL
        .RegisterService<StoreFront.MySQL.OrdersService, IOrdersService>(EndPointType.DBMS, API_Name.StoreFront, DataBaseProviderName.MySQL)
        .RegisterService<StoreFront.MySQL.ProductsService, IProductsService>(EndPointType.DBMS, API_Name.StoreFront, DataBaseProviderName.MySQL)

        // WebAPI
        .RegisterService<StoreFront.WebAPI.OrdersService, IOrdersService>(EndPointType.HTTP, API_Name.StoreFront, DataBaseProviderName.WebAPI)
        .RegisterService<StoreFront.WebAPI.ProductsService, IProductsService>(EndPointType.HTTP, API_Name.StoreFront, DataBaseProviderName.WebAPI)

        // DbContexts
        .RegisterDbContext<Database.Db>(API_Name.StoreFront)

        // Migration Contexts
        .RegisterMigrationContext<Database.Db_MSSQL>(API_Name.StoreFront, DataBaseProviderName.MSSQL)
        .RegisterMigrationContext<Database.Db_MySQL>(API_Name.StoreFront, DataBaseProviderName.MySQL)

        // Database Initializers
        .RegisterDatabaseInitializer<SFDatabaseInitializer>(API_Name.StoreFront, DataBaseProviderName.MSSQL)
        .RegisterDatabaseInitializer<SFDatabaseInitializer>(API_Name.StoreFront, DataBaseProviderName.MySQL) 

        // Service Manifests
        .RegisterServiceManifest<SFServiceManifest, ISFServiceManifest>(EndPointType.DBMS, API_Name.StoreFront, DataBaseProviderName.MSSQL)
        .RegisterServiceManifest<SFServiceManifest, ISFServiceManifest>(EndPointType.DBMS, API_Name.StoreFront, DataBaseProviderName.MySQL)
        .RegisterServiceManifest<SFServiceManifest, ISFServiceManifest>(EndPointType.HTTP, API_Name.StoreFront, DataBaseProviderName.WebAPI);
    }
}
````
</article>