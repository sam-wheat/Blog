<style>
    .greybox {
        background-image: url("/articles/helloWorld/fractal1.jpg"); background-position:center;
        padding: 2vh 2vw 2vh 2vw;
        
        margin:.5vh 8vw 0vh 8vw;
    }
    .greybox li {
        margin:auto;
        width:30vw;
        text-align:center;
        color:white;
        font-family:'Copperplate Gothic';
        font-size:xx-large;
    }
</style>
<article>

<figure style="float:right;">
    <img src="articles/helloWorld/Machine.jpg" style="max-width:40vw;margin:0vh 0vw .5vh .5vw;" />
</figure>

Developing and maintaining this website is one of the ways I stay current with new tools and technologies as they become available.  I regularly tear the site down and rebuild it from scratch using some new technology I wish to learn.

Previous versions of this site were created using a variety of web technologies.  I wrote two versions using various releases of ASP.NET MVC, a Silverlight version, and a version using Angular JS.  Along the way I've incorporated Task Parallel Library and several different versions of Entity Framework.  I wrote a version using Angular 2 and .net core when both were still in beta.  What an experience that was!

This version is my seventh iteration and this time I've chosen Angular 6 as my new technology of choice.  Compared to the wild west days when .net core was in beta this iteration was a walk in the park - although not completely free of distractions.   The .net core tooling and templates are much improved as is Visual Studio 2018.  Angular 6 has not changed much except it is much more polished than Angular 2.  What I appreciate most is the WebPack integration which has worked surprisingly well.  There were many breaking changes in RxJS.  I could not get debugging to work in Visual Studio so I learned the new features in RxJS 6 via alert statements.  Typescript has continued to mature nicely. it is the only thing that makes JavaScript development bearable.  

You can download the source code for this site [here](https://github.com/sam-wheat/Blog).

I am going to move the site to Azure as soon as I have a free moment and I will update my blog to document the experience.  
Here are some of the tools I used to build this site:   
<br>
  
<div class="greybox">

+ .Net core
+ Angular 6
+ Typescript
+ RxJS
+ Webpack
+ SystemJS
+ Entity Framework Core

</div>

</article>
