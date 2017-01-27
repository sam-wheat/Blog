<article>

```cs
public partial class MainWindow : Window
{
    private IAdaptiveClient<IUsersService> client;

    public MainWindow(IAdaptiveClient<IUsersService> client)
    {
        this.client = client;
    }

    public async Task<IActionResult> Login(int userID)
    {
        // AdaptiveClient will use an in-process connection to the database 
        // server on the local area network if it is available.
        // Otherwise it will fall back to another server that can handle the request (WebAPI, WCF, etc.):
        User user = await client.CallAsync(x => x.GetUser(userID));
    }
}
```

&nbsp;


#### [Get AdaptiveClient](https://github.com/leaderanalytics/AdaptiveClient)

---
#### [Get the end-to-end demo](https://github.com/leaderanalytics/AdaptiveClientDemo)

---

#### [Get the nuget package](http://www.nuget.org/packages/LeaderAnalytics.AdaptiveClient/)

---

## What it does
Rather than make a service call directly to a specific server or type of server you make a call using `AdaptiveClient` instead.  `AdaptiveClient` will attempt to execute the call using the most preferred server.  If the call fails `AdaptiveClient` will make successive attempts, each time falling back to other servers of the same type or other types.  For example, a mobile user who is on-site and connected to a local area network will enjoy the performance of an in-process connection directly to the database server.  If the user tries to re-connect from a remote location `AdaptiveClient` will attempt a LAN connection again but will fall back to a WebAPI server when the LAN connection fails.  Should the WebAPI connection fail, `AdaptiveClient` may attempt to connect to other WebAPI servers, a WCF server, or any other server as configured.

## Who will benefit from using it
* `AdaptiveClient` is ideally targeted to organizations that need to give local users access to their APIs over a local area network but who also wish to expose their APIs to remote users.
* Developers who want to implement retry and/or fall back logic when making service calls.


## How it works
`AdaptiveClient` is a design pattern that leverages [n-tier architecture](https://en.wikipedia.org/wiki/Multitier_architecture) and a dependency injection container.  The client and utility classes included in the [download](https://github.com/leaderanalytics/AdaptiveClient) assist you in implementing the pattern.  The [download](https://github.com/leaderanalytics/AdaptiveClient) includes a client implementation based on Autofac.  You should be able to implement similar functionality using other DI containers.  
The functionality provided by `AdaptiveClient` comes primarily from the four classes shown below and their supporting classes:

    EndPointConfiguration

An `EndPointConfiguration` (a.k.a EndPoint for short) is a class `AdaptiveClient` uses to maintain connection parameters for servers it communicates with: 

* **Name**: Name of the EndPoint: DevServer01, QASloth02, etc.
* **API_Name**:  Name of the application or API exposed by the EndPoint: OurCompanyApp, xyz.com, etc.  NOT the name of a contract or interface.
* **Preference**:  Number that allows ClientFactory to rank this EndPoint.  Lower numbers are ranked higher (more preferred).
* **EndPointType**:  May be one of the following:  InProcess, WebAPI, WCF, ESB.  Assists ClientFactory in determining if the EndPoint is alive.  Multiple EndPointConfigurations of the same `EndPointType` may be defined for an API_Name.
* **ConnectionString**:  Connection string OR URL if pointing to a HTTP server.
* **Parameters**:  Not used at this time.
* **IsActive**:  Set this value to false to prevent using this `EndPointConfiguration`.  

&nbsp;

    ClientFactory


Given an interface and a collection of `EndPointConfiguration` objects,  `ClientFactory` will iterate over the EndPoints starting with the most preferred.  Upon finding an available EndPoint `ClientFactory` will return a suitable client that implements the desired interface.


    RegistrationHelper

RegistrationHelper is one of two Autofac-specific classes.  `RegistrationHelper` hides the complexity of registering  `EndPointConfiguration` objects and clients with the DI container.  Usage is discussed in the Getting Started section.  

    AdaptiveClient

`AdaptiveClient`  is the second of the two Autofac-specific classes.  `AdaptiveClient` is little more than a wrapper around ClientFactory that insures that objects created within one of the `AdaptiveClient.Call()` methods are created and disposed within an Autofac LifetimeScope.  If you choose to use the `AdaptiveClient` pattern with a DI container other than Autofac you can use `ClientFactory` as required instead of `AdaptiveClient` and implement scope logic as required by your DI container. 


## How `AdaptiveClient` resolves a client from start to finish: 

<div style="max-width:800px;margin:auto;">

![alt an image](https://raw.githubusercontent.com/leaderanalytics/AdaptiveClient/master/LeaderAnalytics.AdaptiveClient/docs/HowAdaptiveClientWorks.png)

</div>


## Getting started



1. Define your `EndPointConfiguration` objects.  See appsettings.development.json in WebAPIServer project of the Demo application.


2. Register your `EndPointConfiguration` objects. Use RegistrationHelper as shown in the section below.

3. Register your domain services and clients as shown in the section below.  See also the AdaptiveClientModule file in the Application.Services project of the Demo application.  

4. Accept `IAdaptiveClient<T>` or `IClientFactory<T>` in your constructor wherever you need a client.  `IAdaptiveClient` calls `IClientFactory` internally and it disposes the objects it creates within the Call method.


##### Using `RegistrationHelper`


Follow the two steps below to register your `EndPointConfiguration` objects and clients.

 
1. Register the entire collection of `EndPointConfiguration` objects for an API or Application:

```cs
RegistrationHelper registrationHelper = new RegistrationHelper(builder);
IEnumerable<IEndPointConfiguration> endPoints = ... // read endpoints from config file 
registrationHelper.RegisterEndPoints(endPoints);
```
  
 * `EndPointConfiguration` objects must be registered **before** clients are registered.
 * `RegistrationHelper` only registers clients and `EndPointConfiguration` objects.  You must register other objects in your application as you normally do using your DI container.
  
2. Register each combination of client and `EndPointType` that is implemented by your application.  Three examples are shown below but only EndPointTypes you actually use are required:      


```cs
string apiName = "OurCompanyAPI";
// client that communicates directly with the database (the service itself)
registrationHelper.Register<MyApp.Services.UsersService, IUsersService>(EndPointType.InProcess, apiName);
// WebAPI client 
registrationHelper.Register<MyApp.WebAPIClient.UsersClient, IUsersService>(EndPointType.WebAPI, apiName);
// WCF client 
registrationHelper.Register<MyApp.WCFClient.UsersClient, IUsersService>(EndPointType.WCF, apiName);
```

 

## Tips & FAQs

* `AdaptiveClient` is designed to work with an n-tier architecture. Make sure your application has clean separation of layers. Generally this means your business logic should reside entirely in your service layer - not in controllers, code-behind, or view models.

* Create clients in their own assemblies as required.  Clients must implement the same interfaces as their server counterparts and the services they access.  Register clients the same way services are registered.  See the Application.WebAPIClient project for an example.

* Will `AdaptiveClient` make multiple hops to resolve a client? Yes, see the demo at the link below.

* Can I force `AdaptiveClient` to use a certain EndPoint and bypass the fallback logic? Yes. You can set the IsActive flag to false for EndPointConfigurations you dont want to use.  You can also supply one or more EndPoint names in your call to `AdaptiveClient` or ClientFactory:

```cs
User user = await client.CallAsync(x => x.GetUser(userID), "MyEndPointName");
```

&nbsp;


## `AdaptiveClient` Use Case and Technical Description

The following is only for those interested in the design and inner workings of `AdaptiveClient`. You do not need to read this to use `AdaptiveClient` successfully.

### Use Case

A developer is tasked with writing an application that will be used by a company to support their internal operations.  Primary users will be several thousand company employees.  Employees will use the application while on-site at the company offices.  There are few hundred users who will need remote access.  One of the design requirements is that on-site users access data directly from the database server on the company's local area network.  Remote users will access data via a Web API.  To meet this requirement the developer will need to instantiate the correct data access client based on the users location.  The developer will want an approach that is simple, flexible, and generic.  What architecture will allow the developer to meet these objectives?  

To answer this question we look at the components of a hypothetical WPF application.  We assume this application is designed using standard n-tier architecture consisting of a presentation layer, a business logic layer, and a data access layer.

Lets say the application needs to save a User object to the database.  In the business logic layer we have
 `UsersService`.  This service communicates directly with the database and will only work over a local area network.  We can think of `UsersService` as a client also because it directly wraps the call to the database.  

```cs
namespace Application.Services
{
    public class UsersService : BaseService, IUsersService
    {
        // ...
			
        public async Task<int> SaveUser(User user)
        {
            db.Users.Add(user);
            await db.SaveChangesAsync();
            return user.ID;
        }
    }
}
```
	
To access `UsersService` over the web we write a WebAPI client that looks like this:
```cs

namespace Application.WebAPIClient
{
    public class UsersClient : BaseClient, IUsersService
    {

        public async Task<int> SaveUser(User user)
        {
            string json = JsonConvert.SerializeObject(user);
            StringContent content = new StringContent(json, System.Text.Encoding.UTF8, "application/json");
            HttpResponseMessage msg = await httpClient.PostAsync("users/saveuser", content);
            return Convert.ToInt32(await msg.Content.ReadAsStringAsync());
        }
    }
}
```


The presentation layer of the application might look like this:

```cs
namespace WPFApplication
{
	public partial class MainWindow : Window
	{
		
		private IUsersService usersClient;
			
		public MainWindow(IUsersService usersClient)
		{
			this.usersClient = usersClient;
			InitializeComponent();
			InitializeAsync();
		}

		public async Task InitializeAsync()
		{
			int id = await usersClient.SaveUser(new User { Name = "Bob" });
			// ...
		}
	}
}
```

Looking at the code for the presentation layer we see that `MainWindow` accepts anything that implements `IUsersService` as a client.  This means we can inject either of the two clients shown above because both clients implement `IUsersService`.  

If the user is connected to the LAN we can inject an instance of `UsersService` and the user can access the database directly.  

If we only have HTTP access we inject an instance of `WebAPIClient` and serialize the data before sending it over the wire.  On the LAN side, the server that handles the `WebAPIClient` request creates an instance of `UsersService` to do its work.  

Having described a data client to use when the user is connected to the LAN and a client to use when the user is remote, we now come to the problem of "How do we inject the correct client for each user?"  It turns out this is not a trivial problem to solve.  There are a number of related issues, not the least of which is knowing which servers to contact, knowing how to contact each server, knowing in what order to contact the servers, and knowing how to construct the object graph when an appropriate server is found.  

Before we go any further lets state our objective in precise terms:  We want to inject an implementation of `IUsersService` (a client) into the presentation layer of our application that is most appropriate for the type of connectivity the user currently has.  We want the ability to try the fastest client first, than fall back if we must.  We also want this to be a generic approach so we can add clients of various types if we need to. For example, in addition to the WebAPI client we might also want to write a WCF client.  As long as the client implements `IUsersService` we should be able to inject that client into our application.  

### Technical Description

In researching this problem I found that I had to look no further than my DI container for an answer.  Thanks to powerful DI containers like Autofac and others, we can craft a solution to this problem that is both simple and minimally invasive.  In fact, the solution below can be thought of as an extension to the DI container with a couple of supporting classes thrown in.  "Why the DI container?" you might ask.  The answer is that this is primarily a component resolution and injection problem.  When a client is requested we need to know what servers to test as well as how to test those servers.  We need to assemble the correct components for each test, and upon finding a working client, we need to return that client to the requester.  All of these tasks fall squarely within the domain of the DI container. Rather than reinvent the wheel we will put any one of a number of well designed DI containers to good use.

This technical description is based on the Autofac implementation of `AdaptiveClient` because it is the only implementation available as of this writing.  Note, however, that the `AdaptiveClient` pattern and supporting infrastructure are DI container agnostic.

This technical description is divided into two parts:  Registration which is done at design time, and Resolution which is done at run time.  `AdaptiveClient` supporting classes are described where they are first used.

#### Registration

For this example let us say there are three different kinds of connectivity we want to test for:  In-process (LAN, direct connection to database), WebAPI, and WCF.  We create an enum that identifies each server that implements any of our connectivity types:

```cs
public enum EndPointType
{
    InProcess,
    WebAPI,
    WCF    
}
```

To effectively use a server we need to know much more information about it than a simple connection string can provide.  We move our connection strings out of app.config and put them in a json file where we can give them some useful properties.  We give them a name to make them unique.  We add an API_Name property that indicates what API the server exposes.  Preference indicates the relative ranking of one connection to another.  Lower numbers mean better performance or reliability and are preferred.  `EndPointType` tells us what type of server the connection is for.

```json
{
    "EndPointConfigurations": [
    {
        "Name": "Application_SQL",
        "IsActive": "true",
        "API_Name": "OurCompanyAPI",
        "Preference": "10",
        "EndPointType": "InProcess",
        "ConnectionString": "Data Source=.\\SQLEXPRESS;Initial Catalog=..."
    },
    {
        "Name": "Application_WebAPI",
        "IsActive": "true",
        "API_Name": "OurCompanyAPI",
        "Preference": "20",
        "EndPointType": "WebAPI",
        "ConnectionString": "http://localhost:61426/api/"
    },
    {
        "Name": "Application_WCF",
        "IsActive": "true",
        "API_Name": "OurCompanyAPI",
        "Preference": "30",
        "EndPointType": "WCF",
        "ConnectionString": "http://localhost:61401/"
    },
    {
        "Name": "Their_Server",
        "IsActive": "true",
        "API_Name": "Some_Vendor_API",
        "Preference": "10",
        "EndPointType": "WCF",
        "ConnectionString": "http://them.com:54321/"
    }]
}
```

The example JSON configuration file above shows connection strings for various APIs including one that connects to a hypothetical vendor.  Note EndPointType corresponds to the `EndPointType` enum.  Since these objects are more than connection strings we will refer to them as `EndPointConfiguration` objects (or EndPoints for short).

When `AdaptiveClient` parses the `EndPointConfiguration` configuration file it creates an object that implements  `IPerimeter` for each group of EndPoints with an identical API_Name.  

For the configuration file shown above two `IPerimiter` objects will be created: one for "OurCompanyAPI" and one for "Some_Vendor_API".  `IPerimeter` is a simple interface consisting of an API_Name property and collection of `EndPointConfiguration` items:

```cs
public interface IPerimeter
{
    string API_Name { get; }
    IList<IEndPointConfiguration> EndPoints { get; }
}
```

When service interfaces are registered with `AdaptiveClient`, `AdaptiveClient` actually performs several registrations.  

One of the registrations is to register each `Perimeter` using the type of the interface as a key.  Registrations might look something like this (only pseudo code for Autofac registrations is shown because the actual code is lengthy and distractive):

```cs
Register instance of Perimeter named "OurCompanyAPI" with the key typeof(IUsersService)
Register instance of Perimeter named "OurCompanyAPI" with the key typeof(IOrdersService)
Register instance of Perimeter named "OurCompanyAPI" with the key typeof(ISomeOtherService)
Register instance of Perimeter named "Some_Vendor_API" with the key typeof(IVendorService) 
```

The other registration `AdaptiveClient` performs is to register each client implementation using an interface and an `EndPointType` as a key.  The purpose for this is discussed in the resolution section.  In pseudo code registrations might look something like this:

```cs
Register IUsersService plus EndPointType.InProcess to resolve to an instance of Application.Services.UsersService
Register IUsersService plus EndPointType.WebAPI to resolve to an instance of Application.WebAPIClient.UsersClient
Register IUsersService plus EndPointType.WCF to resolve to an instance of Application.WCFClient.UsersClient
```
	

#### Resolution

When the developer requests a client implementation of an interface, `AdaptiveClient` performs several steps.

First, the type of the requested interface is used as a key to resolve an `IPerimiter` object.  Recall that `IPerimiter` contains a list of all the `EndPointConfiguration` objects (i.e. servers) that expose the requested interface.   

Second, `AdaptiveClient` invokes an an instance of `IClientFactory`, passing it the list of `EndPointConfiguration` objects resolved in the previous step (code for `ClientFactory` is omitted for brevity but can be download from [Github](https://github.com/leaderanalytics/AdaptiveClient/blob/master/LeaderAnalytics.AdaptiveClient/src/LeaderAnalytics.AdaptiveClient/ClientFactory.cs)).  `ClientFactory` does what its name implies.  It iterates the list of `EndPointConfiguration` objects in order of preference and tries to find a live server.  When a live server is found its `EndPointType` is saved. .

Finally, the type of the requested interface and the `EndPointType` of the available server are used as keys to resolve a concrete implementation of the requested interface.


---

#### [Get AdaptiveClient](https://github.com/leaderanalytics/AdaptiveClient)

---
#### [Get the end-to-end demo](https://github.com/leaderanalytics/AdaptiveClientDemo)

---

#### [Get the nuget package](http://www.nuget.org/packages/LeaderAnalytics.AdaptiveClient/)


</article>