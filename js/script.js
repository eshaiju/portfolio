$(document).ready(function(){

    function menuSlide() {
        var $menbox = $('.menu_box li');
        if ($menbox.hasClass('bounceInDown')) {
            $menbox.removeClass("bounceInDown");
            $menbox.addClass("fadeOutUp");
        } else {
            $menbox.addClass("bounceInDown");
            $menbox.removeClass("fadeOutUp");
        }
    }

    $('.nav-toggle').click(function(){
        $(this).toggleClass("active");
        $(".overlay-boxify").toggleClass("open");

        menuSlide();
    });

    /* When user clicks a link */
    $(".menu_box li a").click(function() {
        $(".nav-toggle").toggleClass("active");
        $(".overlay-boxify").toggleClass("open");

        menuSlide();
    });

    /* When user clicks outside */
    $(".overlay").click(function() {
        $(".nav-toggle").toggleClass("active");
        $(".overlay-boxify").toggleClass("open");

        menuSlide();
    });
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//preload page script

$(window).on('load', function () {
    var $preloader = $('#page-preloader'),
        $spinner   = $preloader.find('.spinner'),
        $textspiner = $('#text_spiner');
    $textspiner.fadeOut();
    $spinner.fadeOut();
    $preloader.delay(350).fadeOut('slow');
    $('.caption_main').addClass('fadeInDown');
});


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//wow animation plugin init
var wow = new WOW(
    {
        boxClass:     'wow',      // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset:       0,          // distance to the element when triggering the animation (default is 0)
        mobile:       true,       // trigger animations on mobile devices (default is true)
        live:         true,       // act on asynchronously loaded content (default is true)
        callback:     function(box) {
            // the callback is fired every time an animation is started
            // the argument that is passed in is the DOM node being animated
        }
    }
);
wow.init();

/***************** Smooth Scrolling ******************/

$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            $('html,body').animate({
                scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    }
});