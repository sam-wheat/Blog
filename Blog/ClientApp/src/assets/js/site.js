
(function (window) {

  $(document).ready(function () {
    window.initJS();
  });

  window.highlight = function (hljs) {
    var allPre, i, j;
    allPre = document.getElementsByTagName("pre");

    for (i = 0, j = allPre.length; i < j; i++) {
      hljs.highlightBlock(allPre[i]);
    }
  }
})(window)

!(function (window) {
  window.initJS = function () {
    "use strict";
     

    if ($('.typed').length) {
      var typed_strings = $(".typed").data('typed-items');
      typed_strings = typed_strings.split(',')
      new Typed('.typed', {
        strings: typed_strings,
        loop: true,
        typeSpeed: 25,
        backSpeed: 10,
        backDelay: 5000
      });
    }


    // Smooth scroll for the navigation menu and links with .scrollto classes
    $(document).on('click', '.nav-menu a, .scrollto', function (e) {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        e.preventDefault();
        var target = $(this.hash);
        if (target.length) {

          var scrollto = target.offset().top;

          $('html, body').animate({
            scrollTop: scrollto
          }, 1500, 'easeInOutExpo');

          if ($(this).parents('.nav-menu, .mobile-nav').length) {
            $('.nav-menu .active, .mobile-nav .active').removeClass('active');
            $(this).closest('li').addClass('active');
          }

          if ($('body').hasClass('mobile-nav-active')) {
            $('body').removeClass('mobile-nav-active');
            $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          }
          return false;
        }
      }
    });

    $(document).on('click', '.mobile-nav-toggle', function (e) {
      $('body').toggleClass('mobile-nav-active');
      $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
    });

    $(document).click(function (e) {
      var container = $(".mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
        }
      }
    });

    // Navigation active state on scroll
    var nav_sections = $('section');
    var main_nav = $('.nav-menu, #mobile-nav');

    $(window).on('scroll', function () {
      var cur_pos = $(this).scrollTop() + 20;

      nav_sections.each(function () {
        var top = $(this).offset().top;
        var bottom = top + $(this).outerHeight();

        if (top > cur_pos || bottom < cur_pos) {
          return true; // continue
        }
        var thisDataTarget = null;
        var activeDataTarget = null;
        var thisNav = main_nav.find('button[data-target="#' + $(this).attr('id') + '"]').parent('li').first();
        var activeNav = main_nav.find('li.active').first();

        if (thisNav.length)
          thisDataTarget = $(thisNav).find('button').attr('data-target');

        if (activeNav.length)
          activeDataTarget = $(activeNav).find('button').attr('data-target');

        if (thisNav.length && activeNav.length) {
          if (thisDataTarget !== activeDataTarget) {
            $(activeNav).removeClass('active');
            $(thisNav).addClass('active');

          }
        }
        else if (thisNav.length) {
          $(thisNav).addClass('active');

        }
        else if (activeNav.length) {
          $(activeNav).removeClass('active');
        }

      });
    });

    // Back to top button
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        $('.back-to-top').fadeIn('slow');
      } else {
        $('.back-to-top').fadeOut('slow');
      }
    });

    $('.back-to-top').click(function () {
      $('html, body').animate({
        scrollTop: 0
      }, 1500, 'easeInOutExpo');
      return false;
    });

    // jQuery counterUp
    $('[data-toggle="counter-up"]').counterUp({
      delay: 10,
      time: 1000
    });

    // Skills section
    $('.skills-content').waypoint(function () {
      $('.progress .progress-bar').each(function () {
        $(this).css("width", $(this).attr("aria-valuenow") + '%');
      });
    }, {
      offset: '80%'
    });

    // Porfolio isotope and filter
    $(window).on('load', function () {
      var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
      });

      $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('filter-active');
        $(this).addClass('filter-active');

        portfolioIsotope.isotope({
          filter: $(this).data('filter')
        });
      });

      // Initiate venobox (lightbox feature used in portofilo)
      $(document).ready(function () {
        $('.venobox').venobox();
      });
    });

    // Testimonials carousel (uses the Owl Carousel library)
    $(".testimonials-carousel").owlCarousel({
      autoplay: true,
      autoplaySpeed: 2500,
      autoplayTimeout: 2500,
      dots: true,
      loop: true,
      responsive: {
        0: {
          items: 2
        },
        768: {
          items: 3
        },
        900: {
          items: 4
        }
      }
    });

    // Portfolio details carousel
    $(".portfolio-details-carousel").owlCarousel({
      autoplay: true,
      dots: true,
      loop: true,
      items: 1
    });

    // Initi AOS
    AOS.init({
      duration: 1000,
      easing: "ease-in-out-back"
    });
  }
})(window);
