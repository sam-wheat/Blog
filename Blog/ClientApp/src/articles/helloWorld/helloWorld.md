<article>

<figure style="float:right;">
    <img src="articles/helloWorld/Machine.jpg" style="max-width:40vw;margin:0vh 0vw .5vh .5vw;" />
</figure>

Developing and maintaining this website is one of the ways I stay current with new tools and technologies as they become available.  I regularly tear the site down and rebuild it from scratch using some new technology I wish to learn.

Previous versions of this site were created using a variety of web technologies.  I wrote two versions using various releases of ASP.NET MVC, a Silverlight version, and a version using Angular JS.  I even wrote a version using Angular 2 and dotnet core when both were still in beta.  What an experience that was!  Along the way I've incorporated Task Parallel Library and several different versions of Entity Framework into the API. 

The version prior to this one was written in Angular 6 and dotnet core 2.  This version is Angular 9 and dotnet core 3.1.  There are no real fundamental changes between Angular 6 and 9 so I decided to introduce some bootstrap animation and a few node packages to add some pizazz to the site.

One thing I wanted to do with this version of the site is use Docker to deploy it.  I got the containers all wired up and working but when it came time to consider billing options with Azure I just could not justify the cost.   This site has a website component and an API component.  Running under IIS on Azure I only need a single billable App Service because I can run the API as a virtual app under the site.  Using containers I need two App Services or I need to use Kubernetes which requires a virtual machine.  This is still an open item on my backlog.  I may find a workaround even if it means I have to forgo a few containerization best practices.


You can download the source code for this site [here](https://github.com/sam-wheat/Blog).
</article>
