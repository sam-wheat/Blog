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
