<article>

Those who have played the game DOOM will recognize the BFG9000 as an enormous weapon that delivers a highly destructive round.  In the war on software defects there is no single analogy for the BFG9000.  There are, however, a variety of "big gun" techniques for dispatching bugs and defects.  Almost all of these techniques center around identifying and fixing root cause issues.  Fixing a root cause issue can have a beneficial impact as a result of the fix itself, or, as is often the case, it will bring to light other deficiencies that exist as a result of the root.  In either case, fixing a root cause issue can deliver a massively beneficial result - often with relatively little effort or risk.  

## Go big and get lucky

From a purely statistical standpoint, hunting down root cause issues puts the odds on your side.  The [Pareto Principle](https://www.investopedia.com/terms/p/paretoprinciple.asp) states that eighty percent of consequences come from twenty percent of causes.  Pareto's principal is highly applicable in the domain of troubleshooting software defects.  This is good news for most software developers because it means that for a given application, correcting a few critical deficiencies will result in a cascade of beneficial results.  

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
* Unusually complex or verbose code
* Fragile code i.e. implementing minor changes causes breakage elsewhere in the application.
* Difficult to work on - small improvements are often blocked by deficiencies in code that is only remotely related.

As a contractor or new employee you may be tasked with stabilizing an application with the characteristics and symptoms described above.  It is possible you will have not have a good understanding of the business domain and certainly you will not have a full understanding of the more complex business logic.  You will probably be asking yourself "How do I solve this problem?  Where do I begin?"

If you walk around the company and talk to the developers who wrote the code you might hear some of them say things like "We need to implement SOLID design principals".  Others might say "We should create Microservices".  You might also hear "We need to write testable code and unit tests".  All of these suggestions will most likely be true to some to extent.  However, the fact remains that these objectives are a step removed from your immediate goal which is to stabilize the code base and assure the company can use the program for their immediate day-to-day needs.  To get to the heart of the matter you need to first target two primary enemies: _Garbage data and redundant code_.  

To be clear, re-architecting, implementing SOLID principals, and writing unit/integration tests are great ways to clean up and renew an application. Your __first pass__ however, should be focused on closing the door on bad data and removing redundant code.  These types of deficiencies are almost always root causes and pointers to where further attention should be directed. 

## Know your enemy

#### Garbage in, garbage out

Garbage in, garbage out (GIGO) is one of the oldest axioms in computing.  By preventing garbage data from ever entering your database you can avoid validating it again and again throughout application layers.

Sources of garbage data include:

* Improper database schema - wrongly nullable fields, wrongly typed fields, missing PK's, FK's, and unique constraints.
* Duplicate data.
* Multiple entry points for data.
* Swallowing exceptions.
* Missing validation rules.
* Not programming defensively - making assumptions on behalf of the user, open ended if and case statements.

#### Don't repeat yourself

Don't Repeat Yourself (DRY) is the mother of all architectural principals.  Redundant code is caused by failing to factor code correctly and/or failing to place code in the correct application layer.  Redundant code is often found in:
* Controllers
* WPF .svc files
* Stored procedures
* Report definition files

It is worth noting that it is possible to build a large enterprise application with no knowledge or regard for SOLID principals.  There are thousands of such applications in use today.  Building an enterprise application with no regard for DRY is much more difficult.  The application begins to work against itself almost immediately.  The size of the code base begins to grow exponentially as the application grows and it soon becomes impossible to scale.


## Lock and load

Your first mission is to analyze your database schema - not from the perspective of a DBA, but as a user of the application.  You have a single objective:  to verify the schema implements every possible safeguard to ensure data is always in a valid state.

As a developer your ongoing objective - in theory - is to make sure your database is absolutely pristine at all times.  However, maintaining a pristine database is much like maintaining a highly normalized database.  While normalizing your database is a worthy goal, normalization eventually reaches a point where there is a diminishing return in terms of usability and performance.  In the same sense, in practice you will encounter certain edge cases where maintaining a pristine database will not be achievable or desirable.  If or when this happens and you decide to allow your database to become less than pristine you will want to make sure the bar for doing so is very high.  

A full discussion of how to design and maintain a database is beyond the scope of this article.  However there are a couple of points you can take away from this section:

* Be aware of your priorities and objectives in terms of maintaining your database schema.
* Spend a lot of design time in this area.  
* Defend your objectives relentlessly.  Explore every option before making any concession.
* The cost of getting it wrong here is high.



## Get to it  

Tip: If your database platform is Microsoft SQL Server, you can generate a script of your database.  In SSMS, right click on the database and click Tasks, than click Generate Scripts.  Choose all database objects and save the script to a single file.  You can use this file in several of the exercises in this section.  There are a number of tools made to analyze database schemas.  If you have a favorite please leave a comment.  

#### Check for invalid data types
Scan each column in each table and make sure the data type is correct.  

#### Check for improperly nullable columns
This is one of the most important exorcises you can undertake to repair a broken or poorly maintained schema.  If your application suffers from data that mysteriously disappears you should prepare to spend some time here.  The goal is to check each column that allows null values and determine if the column should actually allow null values.  There is nothing inherently wrong with nullable columns 


`(\) NULL)|(\] NULL)`

Centralize validation routines in business logic layer - don't repeat business logic in presentation - you only have to maintain it there.

Nullable fields - move to different table.  Is it used in WHERE or Group by
Check for correct data types in tables
Use strong typing.  The compiler is your best friend
use foreign keys and unique constraints
Don't throw if cust name is blank - throw if ordertype is not found in enum
Only catch errors you handle
Use an ORM

Afterthought:  
Only the paranoid survive
</article>
