<article>

Those who have played the game DOOM will recognize the BFG9000 as an enormous weapon that delivers a highly destructive round.  In the war on software defects there is no single analogy for the BFG9000.  There are, however, a variety of "big gun" techniques for dispatching bugs and defects.  Almost all of these techniques center around identifying and fixing high-value issues.  Fixing a high-value issue can have a beneficial impact as a result of the fix itself, or, as is often the case, it will bring to light other deficiencies that exist as a result of the high-value cause.  In either case, fixing a high-value issue can deliver a massively beneficial result - often with relatively little effort or risk.  

## Go big and get lucky

From a purely statistical standpoint, hunting down high-value issues puts the odds on your side.  The [Pareto Principle](https://www.investopedia.com/terms/p/paretoprinciple.asp) states that eighty percent of consequences come from twenty percent of causes.  Pareto's principal is highly applicable in the domain of troubleshooting software defects.  This is good news for most software developers because it means that for a given application, correcting a few critical deficiencies will result in a cascade of beneficial results.  

## Where to find trouble

Not every application is a target for big gun troubleshooting.  Prime candidates tend to have these characteristics:

* Large code base, lots of business logic
* Multiple integrated platforms such as order management, CRM, accounting, etc.
* Many domain entities
* Many ETL processes.
* Large number of reports.
* Older application, subject of numerous and/or ongoing improvements.

Symptoms the application is distressed include:

* Slow execution
* Incorrect data
* Numerous exceptions
* Unusually complex or verbose code
* Fragile code i.e. implementing minor changes causes breakage elsewhere in the application.
* Difficult to work on - small improvements are often blocked by deficiencies in code that is only remotely related.

As a contractor or new employee you may be tasked with stabilizing an application with the characteristics and symptoms described above.  It is possible you will have not have a good understanding of the business domain and certainly you will not have a full understanding of the more complex business logic.  You will probably be asking yourself "How do I solve this problem?  Where do I begin?"

If you walk around the company and talk to the developers who wrote the code you might hear some of them say things like "We need to implement SOLID design principals."  Others might say "We should create Microservices."  You might also hear "We need to write testable code and unit tests."  All of these suggestions will most likely be true to some to extent.  However, all of these objectives are a step removed from your immediate goal which is to stabilize the code base and ensure the application is usable for the company's daily needs.  To get to the heart of the matter you need to first target two primary enemies: *Garbage data and redundant code*.  The reasons for this are twofold:

The first reason is that these types of deficiencies are often root causes and/or pointers to where further attention should be directed. 

The second reason has to do with practicality.  Using the methods described below you can spot high-value targets with little or no domain knowledge and no special tools.  If you know how to use "Find All" in your text editor you are good to go.

## Know your enemy

#### Garbage in, garbage out

Garbage in, garbage out (GIGO) is one of the oldest axioms in computing.  By preventing garbage data from ever entering your database you can avoid validating it and cleansing it again and again throughout application layers.

Sources of garbage data include:

* Improper database schema - wrongly nullable fields, wrongly typed fields, missing PK's, FK's, and unique constraints.
* Duplicate data.
* Multiple entry points for data.
* Swallowing exceptions.
* Missing or conflicting validation rules.
* Not programming defensively - making assumptions on behalf of the user, open ended if and case statements.

#### Don't repeat yourself

Don't Repeat Yourself (DRY) is the mother of all architectural principals. DRY literally means that every responsibility within your system is represented exactly once.  
 
Redundant code is caused by copy/pasting code or writing it twice.  Primary drivers of DRY violations are failing to factor code correctly and failing to place code in the correct application layer.  Redundant code is often found in:
* Controllers
* WCF .svc files
* Stored procedures
* Report definition files

These days it is common to code for style points rather than practicality or usefulness.  Whoever can cite a cool acronym or architectural fad in support of their code will win favor from the group.  Unfortunately, the glitter has long ago faded for DRY. It receives little attention in the headlines yet it remains the single most important driver of application design.  Some developers may be surprised to learn that building an enterprise application with no regard for DRY is a difficult if not impossible task, whereas building an enterprise application with no regard for SOLID is far more achievable.  Repeated DRY violations will quickly cause an application to begin to work against itself.  The size of the code base will grow exponentially as the application grows and it will soon become impossible to scale.  SOLID violations, while by no means desirable or benign, are not nearly as destructive.  In fact there are thousands of applications in use today that were written long before SOLID was popularized.  

The above paragraph is meant only to underscore the importance of DRY - not to compare DRY versus SOLID.  Such a comparison is not a valid concept at all.  DRY and SOLID are distinct yet complimentary principals.  Writing SOLID code does not in any way guarantee that the code is also DRY and vice versa.  To make a naively simple example say we have the following class:

````csharp
public class DRY_but_not_SOLID
{
  public void ResponsibilityA()
  {
    //...
    ResponsibilityB();
  }

  private void ResponsibilityB()
  {
    //...
  }
}
````
The above code violates the Single Responsibility Principle however it is DRY as long as it is represented only once within a system.  Eventually the developer may need code that performs ResponsibilityA only.  If the developer creates a copy of the above class than a DRY violation occurs even if the code is modified to be SOLID compliant:

````csharp
public class SOLID_but_not_DRY
{
  public void ResponsibilityA()
  {
    //...
  }
}
````


## Check your database schema

Your first mission is to analyze your database schema - not from the perspective of a DBA, but as a user of the application.  You have a single objective: to verify the schema implements every possible safeguard to ensure data is always in a valid state.


<div style="background-color:lightblue;padding:12px;margin:10px;">
Tip: If your database platform is Microsoft SQL Server, you can generate a script of your database.  In SSMS, right click on the database and click Tasks, than click Generate Scripts.  Choose all database objects and save the script to a single file.  You can use this file in several of the exercises in this section.  
</div>


#### Check for invalid data types, primary keys, foreign keys, and unique constraints

This may seem obvious but you should be using primary keys and foreign keys correctly.  If your primary key does not capture the unique characteristics of a row consider using a unique constraint.  Scan each column in each table and make sure the data type is correct.  The constraint checks done by your DBMS are a powerful weapon against a wide variety bugs.  Keep your DBMS working for you to the greatest extent possible at all times.

#### Check for improperly nullable columns
This is one of the most important exorcises you can undertake to repair a broken or poorly maintained schema.  If your application suffers from data integrity problems you should plan to spend some time here.  The goal is to check each column that allows a null value and determine if the column should actually be nullable.  

Nullable columns should be avoided if at all possible.  One of the problems with nullable columns is that they bypass required value checking done by the DBMS.  As mentioned previously you want to keep the DBMS working for you at all times.  With that said, there is nothing inherently wrong with nullable columns - certain data elements are not always mandatory and thats just the way it is.  

If you find a nullable column in your database, check to see if the column is used in the WHERE, GROUP BY, or ORDER BY clause of any query.  If it is, that is a good sign that the column should not be nullable.  If you are casting the value to a non-nullable type in your code that is another sign the column should not be nullable.

When you check nullable columns on your database you get some very valuable information as a free byproduct of your analysis.  While this information may not be directly tied to the validity of your data you should take notes for future work you may want to do.  If you conclude a column MUST be nullable you should look carefully at the reasoning behind your conclusion as it may be a sign that you can better normalize or restructure your database.  This is best explained with an example.  Suppose you have a table called ORDERS that has a schema that looks like this:

````sql
[ID] [int] IDENTITY(1,1) NOT NULL,
[CustomerID] [int] NOT NULL,
[OrderDate] [datetime2](0) NOT NULL,
[ShipDate] [datetime2](0) NULL,
[OrderAmount] [decimal](30, 6) NOT NULL,
[Notes] [nvarchar](3000) NULL,
// More columns...
````

In the table above the ShipDate column is nullable.  An argument can be made that the column should be nullable because at the time an order is placed the ship date does not yet exist and cannot be known with certainty.  That argument is entirely correct and would seem to support the column being nullable.  But there is a deeper issue here, and that is that the ShipDate column does not belong on the ORDERS table.  It belongs on a SHIPMENTS table and it should not be nullable.  The only flag that calls for further investigation is the fact that the ShipDate column is nullable.

<div style="background-color:lightblue;padding:12px;margin:10px;">
Tip: If you created a script file of your database you can use <a href="https://notepad-plus-plus.org">Notepad++</a> to quickly find NULL columns.  Open your file in Notepad++ and press Ctrl+F. Paste this into the "Find what" box: <code>(\) NULL)|(\] NULL)</code>. Set Search Mode to Regualar expression, then click "Find All in Current Document".
</div>

## Clean up your data

#### Guard the perimiter

As a developer your ongoing objective is to make sure your database has valid, current, and complete data at all times.  One of the best ways to do this is to establish a single point of entry for each of your domain entities and enforce your validation rules at that point.  For example a method to insert or update a Customer object may look like this:

````csharp
// This is the only method that inserts or updates the customer table.
public string SaveCustomer(Customer customer)
{
  if(customer == null)
    throw new ArgumentNullException("customer");

  // all incoming Customer objects are validated here
  string errorMessage = ValidateCustomer(customer);

  if(! String.IsNullOrEmpty(errorMessage))
    return errorMessage;
  
  if(customer.ID == 0)
    // Insert...
  else
    // Update...

  return errorMessage;
}
````

Some developers will encounter edge cases where maintaining perfect data at all times will not be achievable or desirable.  Maintaining a pristine database is much like maintaining a highly normalized database.  Normalization is a worthy endeavor however it eventually reaches a point where usability and performance begin to diminish.  In the same sense, a hyper-vigilant approach to data cleanliness may at some point begin to conflict with the objectives of the business.  If this happens and you decide to allow your database to become less than pristine you will want to make sure the bar for doing so is very high.  Once you start mixing bad data with good you find yourself in the position of "guarding from within" which means your internal business logic becomes responsible for separating clean data from dirty.

A full discussion of how to design and maintain a database is beyond the scope of this article.  However there are a couple of points you can take away from this section:

* Be aware of your priorities and objectives in terms of maintaining a clean database.
* Defend your objectives relentlessly.  Explore every option before making any concession to allow dirty data or partial data into your database.
* Spend a lot of design time in this area.  
* The cost of getting it wrong here is high.


## Finding the enemy in code



#### Get out of your own way - organize your business logic

Loosely defined, business logic is any code that depends on or operates on a domain entity such as an Order, Client, Product, etc.  Business logic belongs in one place only - the business logic layer.  Business logic libraries are .dll files that can be referenced by higher level layers or wrapped by some transport-specific layer such as REST or WCF.  

Factoring business logic out of the presentation layer and into the business logic layer is an essential first step if you want to scale your application.  Business logic that is incorrectly placed in the presentation layer - such as a controller or view model -  is unusable to other controllers or view models that may need to call it.  The presentation layer becomes a breeding grounds for DRY violations when business logic is placed there.  The way to mitigate that obstacle is to move business logic to the lower level business logic layer where is accessible to all presentation objects. 

It is not uncommon to find seventy percent or more of your application's code in the business logic layer.  Controllers and view models should be very thin and serve little purpose other than to map presentation functions to the business logic layer.

If you have a large and complex business logic layer consider using a facade or a variation thereof.  See [AdaptiveClient](https://github.com/leaderanalytics/AdaptiveClient) for examples.


#### Don't juggle a live grenade - if your app throws stop processing

A common problem found in many code bases today is incorrect error handling.  The problem is rooted in a thought process called "Log and continue" that holds dear three deeply flawed beliefs:  

* More `try` / `catch` blocks somehow make code more resilient.
* Exceptions should be logged and execution should continue.
* Exceptions should not be thrown when internal low-level code encounters unexpected or invalid business logic.

These falsehoods, individually and collectively, are directly responsible for a multitude of afflictions which include:

* Errors that are difficult or literally impossible to trace.
* Corrupt data.
* Bloated, complex, and unnecessary error handling routines.
* Propagation of ambiguous and/or contradictory logic.

The correct approach to error handling is embodied in a pattern called Fail Fast which proposes these guidelines:

* Fewer `try`/`catch` blocks are better.  Exceptions should flow up to a global exception handler.
* `try`/`catch` blocks should only be used to catch specific errors that are actually handled in some way.
* Unhandled exceptions should be logged and execution should stop.
* An exception should be thrown immediately when internal low-level code encounters unexpected or invalid business logic. 

With regard to the last point above - don't be afraid to throw Exceptions when there is an expectation of compliance in your code.  Consider the following two methods:

````csharp
public Customer GetCustomerByID(int id)
{
    Customer c = db.Customers.FirstOrDefault(x => x.ID == id);
    return c;
}
````
In the code above you should not throw if the passed id is not found.  This is a public method.  There is no expectation the user knows a valid ID from an invalid one.

````csharp
private void ProcessOrder(Order order)
{
  Customer c = GetCustomerByID(order.CustomerID);

  if(c == null)
    throw new Exception($"Invalid customer ID: {order.CustomerID}"); 

  c.YTDOrders += order.Amount;
}
````
In the code above there is an expectation the customer ID on the order is correct.  Definitely throw if order.CustomerID is not found!  If an upstream change causes order.CustomerID to become invalid this code will likely catch that error in QA.

The code shown below is the wrong way to do it.  This error is common because developers are afraid to throw exceptions.  If an upstream change causes order.CustomerID to become invalid the error will most likely be discovered by the end user - after data corruption has occurred.  


````csharp
private void ProcessOrder(Order order)
{
  Customer c = GetCustomerByID(order.CustomerID);

  // Horror
  if(c != null)
    c.YTDOrders += order.Amount;
  else
    Log.Error($"Invalid customer ID: {order.CustomerID}"); 
}
````

#### Use the compiler, Luke 
 
If there is any single analogy for the BFG9000 in computing MSBUILD.exe would surely be it.  Your compiler is the most powerful weapon you have.  Very technically speaking, failing to use the compiler effectively is probably not tied directly to garbage data or redundant code.  However the compiler is such an effective weapon that this article would not be complete if it did not exhort you to use it to your fullest advantage.  Early in your troubleshooting project you should check for and fix any code that passes or expects as a parameter an object of type `object`.  Avoid the `dynamic` keyword, and avoid using JavaScript. Except for the presentation layer.

</article>
