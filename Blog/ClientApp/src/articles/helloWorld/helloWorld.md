﻿<style>
    .greybox {
        background-image: url("/articles/helloWorld/fractal1.jpg"); background-position:center;
        padding: 2vh 2vw 2vh 2vw;
        color:white;
        font-family:'Copperplate Gothic';
        font-size:xx-large;
        margin:.5vh 8vw 0vh 8vw;
    }
    ul {
        margin:auto;
        width:30vw;
        text-align:center;
    }
</style>
<article>

<figure style="float:right;">
    <img src="articles/helloWorld/Machine.jpg" style="max-width:40vw;margin:0vh 0vw .5vh .5vw;" />
</figure>

Developing and maintaining this website is one of the ways I stay current with new tools and technologies as they become available.  I regularly tear
the site down and rebuild it from scratch using some new technology
I wish to learn.
<br>
Previous versions of this site were created using a variety of web technologies.  I wrote two versions using various releases of ASP.NET MVC,  a 
Silverlight version, and a version using Angular 1.  Along the way I've incorporated Task Parallel Library and several different versions of Entity Framework.  This version is my sixth iteration and
this time I've chosen Angular 2 and .Net core as my new technologies of choice.<br>
In hindsight, using .Net core and Angular 2 was a
foolish endeavor.  At the time I started writing the site, both Angular 2 and .Net core were in the "Release Candidate" phases of their development.  One would
think a framework versioned as a release candidate is in fact a release candidate.  But such was not the case.  As it turned out,
.Net core RC1 became a prolonged affair that turned into RC2 before becoming version 1.0.  Angular 2 is having an even more difficult time than .Net.
As I write this, the Angular team has still not crossed the finish line with a 1.0 release.
Angular had to give up on their Router component late in the game which proved to be a major setback.  The team
has just released RC6, having just introduced modules which did not appear until RC5.<br>
One of the reasons I decided to try Angular 2 early on was its support for Typescript.  Typescript proved to be a great help in learning Angular and it was
generally helpful in building the site.  I had some early problems with RxJS but nothing show stopping.  Two other tools that I used for the first time and
that proved to be invaluable are Webpack and SystemJS.  I am going to move the site to Azure as soon as I have a free moment and I will update my blog to
chronicle the experience.  
Here are some of the tools I used to build this site:   
<br>
  
<div class="greybox">

+ .Net core
+ Angular 2
+ Typescript
+ RxJS
+ Webpack
+ SystemJS
+ Entity Framework core

</div>

</article>