<article>

This article is a concise, practical guide to finding and fixing root cause errors in your code.


A company with a large, complex code base hires you to fix their code.  The problems they are having include intermittent crashes and invalid and conflicting reports.  Implementing minor upgrades is time consuming and often causes cascading waves of breakages.  You know relatively little about the company or their domain.  The code is vast and to you, indecipherable.  

How do you solve this problem?  Where do you begin?  

If you walk around the company and talk to the developers who wrote the code you might hear some of them say things like "We need to implement SOLID design principals".  Others might say "We should create Micro Services".  You might also hear "We need to write testable code and unit tests".  All of these suggestions will most likely be true to some to extent.  However, the fact remains these objectives are a step removed from your immediate goal which is to stabilize the code base and assure the company can use the program for their immediate day-to-day needs.  

## .

When facing a problem that is unknown, large, and extremely complex you want to direct your resources carefully such that you do the greatest amount improvement with the least amount of change.  After you get things stabilized and you gain a better understanding of the system and the problems you will want to take a broader scope such as re-architecting.  But for now you are in search-and-destroy mode which requires identification and elimination of specific problems.

## Where to aim first

There are two primary enemies you need to target: Garbage data and redundant code.  These two enemies are breeding grounds of more abstract enemies such as SOLID violations.  By 

Garbage In, Garbage Out (GIGO) is one of the oldest and well-documented axioms in computing.  One would think that a concept so widely known and understood would be guarded against vigilantly by every qualified developer.  Truth be told, it is rare to find code where a developer saves to disk with no validation done beforehand.  The real entryways for garbage are far more insidious.  Blinded by words such as "Flexibility", and "High-availability" the developer is sometimes seduced and the door is left open. Other times the mode of entry is an ambiguous, redundant, or contradictory business requirement.  The developer tries to implement an impossible or poorly defined requirement and as a result  

Don't repeat yourself (DRY) is the mother of all architectural patterns
All other patterns and practices are means to achieve this end.  




Centralize validation routines in business logic layer - don't repeat business logic in presentation - you only have to maintain it there.

Nullable fields - move to different table.  Is it used in WHERE or Group by
Check for correct data types in tables
Use strong typing.  The compiler is your best friend
use foreign keys and unique constraints
Don't throw if cust name is blank - throw if ordertype is not found in enum
Only catch errors you handle
</article>
