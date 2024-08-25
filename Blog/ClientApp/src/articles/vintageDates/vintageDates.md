<article>

Many short-term traders search for patterns in price data that have predictive value.  For example, price history is often compared to a sine wave with a frequency that appears to be consistent over time.  

Finding price patterns that repeat consistently is a difficult task, however.  Prices often change direction or move in the same direction for extended periods for reasons that cannot be attributed to a historical pattern.  

There are many explanations for why prices move one way or another.  For many assets, changes in the economic environment are the most common explanation because the economic environment often has a broad impact and a long-term effect on asset valuations.

From a practical standpoint, using economic data to back test and predict changes in asset prices is often difficult.  Economic data is often difficult to obtain in a usable format and it is often not the same frequency as the trade history of the asset being analyzed.  

The most challenging part of using economic data for back testing is that economic data typically only includes the period being observed and the value for the period – it does not include the date the value was released to the public.  This makes it difficult or impossible to tie the release of the economic data to a change in the price of an asset on a specific date.  The image below shows an example series that was downloaded from FRED, a widely used repository of economic data.  Here we see the period being observed and the observed value.  The date the information is released - which is the date it might impact the market - is not shown. 

<figure>
    <img src="assets/img/observations.png" style="max-width:40vw;margin:0vh 0vw .5vh .5vw;" />
</figure>

Unknown to many traders, the Federal Reserve Bank of St. Louis maintains a database called [ALFRED](https://alfred.stlouisfed.org), which is an acronym for Archival Economic Data.  This database maintains a column called Vintage Date which is [defined as](https://fred.stlouisfed.org/docs/api/fred/series_vintagedates.html) “…the release dates for a series excluding release dates when the data for the series did not change”.  By matching a series vintage date to a trade date for an asset, it is possible to observe how a change in an economic series (such as unemployment, consumer spending, GDP, etc.) impacts the price of that asset.  Of course, changes in asset prices are attributable to many different factors for any given time period.  However, being able to compare price changes to some economic data series over many periods may provide some insight into whether the economic data has any predictive value.  The image below shows data downloaded from FRED that includes the vintage date.  


<figure>
    <img src="assets/img/observations_with_vintage_date.png" style="max-width:40vw;margin:0vh 0vw .5vh .5vw;" />
</figure>

Vintage dates serve another important purpose – and that is to track revisions to data.  Unlike transaction data for trades, economic data is frequently revised.  When data is revised, a vintage is created for the release of the revised data value.  In the image above note that there are several vintages for the observation period 1978-10-01.  Each of these vintage dates represents the release of a revision. 

Federal Reserve Bank of St. Louis maintains an [API](https://fred.stlouisfed.org/docs/api/fred/) which is free and available to the public.  Users can access this API to download series metadata, observations, and vintage dates.  

The FRED API is a little tricky to work with.  The documentation isn’t great and in [some cases the data returned is not consistent with what the documentation says it should be](https://vyntix.com/docs/fred-client/latest/queriesvsfred.html).  

There are several FRED API clients available on GitHub that make using the FRED API easier.  Not every FRED client supports downloading vintage dates so check the documentation carefully. 


[Python Client for FRED® API](https://github.com/avelkoski/FRB)

[pyfredapi - Python library for the Federal Reserve Economic Data (FRED) API](https://github.com/gw-moore/pyfredapi)

[Ruby wrapper for the St. Louis Fedeeral Reserve Economic Data Fred API](https://github.com/phuphighter/fred)

[A client for the St. Louis Fed's FRED Economic Data API, written in Go](https://github.com/fnlbhq/fred)

[Vyntix FredClient](https://github.com/leaderanalytics/Vyntix.Fred.FredClient) by Leader Analytics is specifically designed to ensure that vintage dates are acquired correctly from the FRED API.  Vyntix FredClient is also distributed as a [nuget package](https://www.nuget.org/packages/LeaderAnalytics.Vyntix.Fred.FredClient) that you can use in your code. Leader Analytics also provides [Observer CLI](https://vyntix.com/Downloads), a utility for downloading data from the FRED API and saving it in a database.



 









</article>