<article>

Those who have played the game DOOM will recognize the BFG9000 as an enormous weapon that delivers a highly destructive round.  In the war on software defects there is no single analogy for the BFG9000.  There are, however, a variety of "big gun" techniques for dispatching bugs and defects.  Almost all of these techniques center around identifying and fixing root cause issues.  Fixing a root cause issue can have a beneficial impact as a result of the fix itself, or, as is often the case, it will bring to light other deficiencies that exist as a result of the root.  In either case, fixing a root cause issue can deliver a massively beneficial result - often with relatively little effort or risk.  

## Go big and get lucky

From a purely statistical standpoint, hunting down root cause issues puts the odds on your side.  The [Pareto Principle](https://www.investopedia.com/terms/p/paretoprinciple.asp) states that eighty percent of consequences come from twenty percent of causes.  Pareto's principal is highly applicable in the domain of troubleshooting software defects.  This is good news for most software developers because it means that for a given application, correcting a few critical deficiencies will result in a cascade of beneficial results.  

## Identifying high yield targets

Not every application is a target for big gun troubleshooting.  Prime candidates tend to have these characteristics:

* Large code base, lots of business logic
* Multiple integrated platforms such as order management, CRM, accounting, etc.
* Many ETL processes.
* Large number of reports.
* Older application, subject of numerous and/or ongoing improvements.

Symptoms the application is distressed include:

* Slow execution
* Unusually complex or verbose code
* Fragile code i.e. implementing minor changes causes breakage elsewhere in the application.
* Difficult to work on - small improvements are often blocked by deficiencies by code that is only remotely related.

 


## Know your enemy

As a contractor or new employee you may be tasked with stabilizing an application with the characteristics and symptoms described above.  It is possible you will have not have a good understanding of the business domain and certainly you will not have a full understanding of the more complex business logic.  You will probably be asking yourself "How do I solve this problem?  Where do I begin?".

If you walk around the company and talk to the developers who wrote the code you might hear some of them say things like "We need to implement SOLID design principals".  Others might say "We should create Microservices".  You might also hear "We need to write testable code and unit tests".  All of these suggestions will most likely be true to some to extent.  However, the fact remains that these objectives are a step removed from your immediate goal which is to stabilize the code base and assure the company can use the program for their immediate day-to-day needs.  To get to the heart of the matter you only need to target two primary enemies: Garbage data and redundant code.  

### Garbage in, garbage out

Garbage In, Garbage Out (GIGO) is one of the oldest and well-documented axioms in computing.  One would think that a concept so widely known and understood would be guarded against vigilantly by every qualified developer.  Most developers take many precautions however the entryways for garbage data are many, and they are insidious.  Blinded by words such as "Flexibility", and "Fault-tolerance" the developer is sometimes seduced and the door is left open. Other times the mode of entry is an ambiguous, redundant, or contradictory business requirement.  In order to implement an impossible or poorly defined requirement the developer relaxes data validation rules and as a result ambiguous or incorrect data is allowed in.

### Don't repeat yourself

[Don't repeat yourself](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself) (DRY) is the mother of all architectural principals.  All other architectural patterns exist to achieve this end.  Before attempting to implement SOLID principles, code must be DRY first.  Not because DRY is "better" than SOLID, but because DRY is first in the progression of achieving sustainable and scalable code.


`(\) NULL)|(\] NULL)`

Centralize validation routines in business logic layer - don't repeat business logic in presentation - you only have to maintain it there.

Nullable fields - move to different table.  Is it used in WHERE or Group by
Check for correct data types in tables
Use strong typing.  The compiler is your best friend
use foreign keys and unique constraints
Don't throw if cust name is blank - throw if ordertype is not found in enum
Only catch errors you handle
Use an ORM
</article>
