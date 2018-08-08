(function (window) {
  

  window.initJS = function ($) {

    $("#btnShowWorkExp").on("click", "", function () {
      $("#divWorkExperience").toggle("slow");
      return false;
    });
  }

  window.runAnimation = function ($) {
    $('#myCarousel').carousel();
  }


  window.highlight = function (hljs) {
    alert(hljs);
    var allPre, i, j;
    allPre = document.getElementsByTagName("pre");

    for (i = 0, j = allPre.length; i < j; i++) {
      hljs.highlightBlock(allPre[i]);
    }
  }

  $(window).ready(function () {
    window.runAnimation($);
  });

})(window);
