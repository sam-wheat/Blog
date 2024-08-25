<article>

_Oh, that cement is just, it's there for the weight, dear_

_- Mack the Knife_
	

In August, 2024, Bureau of Labor Statistics [estimated that they will revise March 2024 nonfarm payroll downward by 818 thousand](https://www.bls.gov/web/empsit/cesprelbmk.htm).  This is a sizable revision, and the press release was covered by major news organizations as well as [Yahoo Finance](https://finance.yahoo.com/news/us-employment-falls-by-818000-in-latest-government-revision-144414848.html). The Yahoo article was [posted on Reddit](https://old.reddit.com/r/Economics/comments/1exrwx1/us_employment_falls_by_818000_in_latest/).  It did not take long for some Redditors to speculate that the large revision may have been somehow tied to the upcoming election.

In response to some of the comments on Reddit, I decided to analyze the revision history of nonfarm payroll to determine if there was any pattern that might indicate some kind of political influence or bias.

When employment data is first released to the public it is widely covered by the press and often moves markets in one direction or another.  Conversely, revisions to employment data are rarely covered by the press.  They have to be very significant - such as the August 21, 2024 revision - to gain any attention at all.

Due to the relative obscurity of revisions, an argument can theoretically be made that a reporting agency such as BLS has a bias against a President or party if they under-report employment numbers than quietly revise them upward.  The opposing argument can be made by claiming said reporting agency is over-reporting employment numbers and quietly revising them downward.

To determine if there is any truth to the allegation that revisions to employment data might be motivated by a political bias, I acquired revision history for the nonfarm payroll series from [ALFRED](https://alfred.stlouisfed.org/).  I imported the data into a database, filtered out irrelevant data, and grouped the remaining data by election year so it could be summarized and compared to other election years.  

<a href="assets/img/Payems_Analysis.xlsx">Data for this article</a>

<figure>
    <img src="assets/img/payems1.png" style="max-width:60vw;margin:0vh 0vw .5vh .5vw;" />
</figure>

#### How to read this analysis

* For each election year and President, revision data for the four years following the election year is summarized in the rightmost five columns.

* Net Revisions is the difference between positive revisions and the absolute value of negative revisions.

* Positive Revisions are the sum of every qualifying revision where the revised value is greater than the previously released value.  Qualifying revisions are defined below.

* Negative Revisions are the sum of every qualifying revision where the revised value is less than the previously released value.

* Counts are the number of Positive / Negative revisions respectively.

* Large negative revisions might be used to argue that BLS has a positive bias for some President or party and that they are over-reporting employment numbers and quietly revising them downward.  

* Large positive revisions might be used to argue that BLS has a negative bias against a President or party and that they are under-reporting employment numbers and quietly revising them upward.



#### How this analysis was prepared

If you take nothing else away from this analysis, you should acquire an appreciation for how data vintages add enormous value to economic data models.  Working with vintage data is often difficult, however free, open source tools like [Observer Desktop](https://vyntix.com/Downloads) greatly simplify the task as you will see in the following paragraphs (disclaimer - I wrote Observer Desktop and my company publishes it and maintains it).  


To get the revision history for nonfarm payroll, I went to the Archival of Economic Data (ALFRED) - a data repository that is maintained by the St. Louis Federal Reserve. ALFRED maintains data, including revisions, for thousands of data series.  The series identifier for nonfarm payroll is `PAYEMS`.  The revision history for `PAYEMS` can be downloaded [here](https://alfred.stlouisfed.org/series/downloaddata?seid=PAYEMS).  This is the data I used to prepare this analysis.  The dataset I used contains vintages up to and including August 2, 2024.


A couple of quick notes on revisions to economic data and how they are published:

As documented [here](https://www.bls.gov/opub/btn/volume-2/revisions-to-jobs-numbers.htm), revisions to employment data are not only common, they are expected.  Revisions to many economic data series - such as business production, growth, cost, and profitability - are expected for the same reasons.

A version of a data series is called a vintage.  A vintage is an immutable snapshot of a data series as it existed at a given moment in time.  Whenever new releases are added to the series or when revisions to existing releases are created, a new vintage is created.  Each vintage is identified by a [Vintage Date](https://fred.stlouisfed.org/docs/api/fred/series_vintagedates.html) which is simply the release date for the new vintage.

To analyze the series data for `PAYEMS`, I needed to get it from a spreadsheet into a database.  I used [Observer Desktop](https://vyntix.com/Downloads) to accomplish this task with just a few mouse clicks.  

With the observation data in a database, I was able to write a bit of SQL to group the data as needed.

First, each vintage is assigned an election year.  This is done by finding the most recent election year that is less than the year of the vintage date of the release.

Each vintage for a given observation period is compared to a prior vintage if one exists.  If no prior vintage exists for the observation period, the row is an initial release and is not considered in this analysis. Only revisions are considered.

Qualifying revisions - BLS often revises data that is very old.  For this analysis however,  only  revisions to data where the year of the observation period is greater than the assigned election year are included.  This ensures we only consider revisions made to observations that are within the term of the incumbent President.

### SQL

If you use [Observer Desktop](https://vyntix.com/Downloads) you can run the following SQL against the `FRED_Staging` table.


```sql

declare @electionyears table(ElectionYear int);
insert into @electionyears (ElectionYear) values (1956),(1960),(1964),(1968),(1972),(1976),(1980),(1984),(1988),(1992),(1996),(2000),(2004),(2008),(2012),(2016),(2020),(2024);

;with revisions as 
(
    select 
    *
    , Value - LastValue as Change
    from
    (
        select 
        ObsDate
        ,VintageDate
        ,Value
        ,lag(VintageDate) over (partition by ObsDate order by vintagedate) as LastVintageDate
        ,lag(Value)  over (partition by ObsDate order by vintagedate) as LastValue
        ,(select max(ElectionYear) from @electionyears e where e.ElectionYear < year(VintageDate)) as ElectionYear -- Election year relative to when revision is released (VintageDate).
        from Observations o
        where symbol = 'payems'
        
    ) data
    where LastVintageDate is not null	-- We are not interested in the first release - only revisions.
    and year(ObsDate) > ElectionYear	-- We are only concerned with revisions to observations made within the term of the incumbent
),
PositiveRevisions as
(
    select count(*) as RevisionCount
    ,min(Change) as MinRevision
    ,max(Change) as MaxRevision
    ,avg(Change) as AvgRevision
    from revisions
    where (Change) > 0
),
NegativeRevisions as
(
    select count(*) as RevisionCount
    ,min(Change) as MinRevision
    ,max(Change) as MaxRevision
    ,avg(Change) as AvgRevision
    from revisions
    where (Change) <  0
),
DetailData as 
(
    select * from revisions
),
YearGroupings as
(
    select
    Year(VintageDate) as Year
    ,sum(case when Change > 0 then Change else 0 end) as PositiveRev
    ,sum(case when Change < 0 then Change else 0 end) as NegativeRev
    ,sum(case when Change > 0 then 1 else 0 end) as PositiveRevCount
    ,sum(case when Change < 0 then 1 else 0 end) as NegativeRevCount
    from revisions
    group by year(VintageDate)

),
ElectionYearGroupings as
(
    select
    ElectionYear
    ,sum(case when Change > 0 then Change else 0 end) as PositiveRev
    ,sum(case when Change < 0 then Change else 0 end) as NegativeRev
    ,sum(case when Change > 0 then 1 else 0 end) as PositiveRevCount
    ,sum(case when Change < 0 then 1 else 0 end) as NegativeRevCount
    from revisions
    group by ElectionYear
)
-- Choose one line and uncomment it as desired:
-- select * from PositiveRevisions union all select * from NegativeRevisions
-- select * from YearGroupings order by Year
-- select * from DetailData order by VintageDate, ObsDate
-- select * from ElectionYearGroupings order by ElectionYear

```

</article>
