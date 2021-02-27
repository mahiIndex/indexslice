jQuery(document).ready(function($) {
    $(function() {
        "use strict";
        var sticky = $('.sticky'),
            scroll = $(window).scrollTop();
        if (scroll >= 20) sticky.addClass('fix');
        else sticky.removeClass('fix');
        $(window).on('scroll', function() {
            var sticky = $('.sticky'),
                scroll = $(window).scrollTop();
            if (scroll >= 5) sticky.addClass('fix');
            else sticky.removeClass('fix');
        });
        $('nav.main_nav').children().clone().appendTo(".mobile-nav");
        $('a.cd-nav-trigger').on('click', function(e) {
            e.preventDefault();
            var b = $('body'),
                nav = $('nav'),
                sb = $('.social-button');
            if (b.hasClass('open')) {
                nav.removeClass('pf');
                b.addClass('slideclose');
                setTimeout(function() {
                    b.removeClass('open');
                }, 100);
            } else {
                b.addClass('open').removeClass('slideclose');
                sb.removeClass('fadeInUp');
                setTimeout(function() {
                    nav.addClass('pf');
                    sb.addClass('fadeInUp');
                }, 400);
            }
        });
        $('#testimonial-slider').owlCarousel({
            loop: true,
            items: 1,
            nav: false,
            dots: true
        });
    });
    $(function() {
        'use strict';
        $('.item, .f_t').matchHeight();
        $('.item').hover(function() {
            $(this).siblings().toggleClass('faded_item');
        });
        $('.item-gal').hover(function() {
            $(this).parent().siblings().toggleClass('faded_item');
        });
        $('.item .button2').hover(function() {
            $(this).parent().parent().toggleClass('button_ready');
        });
        setTimeout(function() {
            $('a[href^="#"]').on('click', function(event) {
                var target = $(this.getAttribute('href'));
                if (target.length) {
                    event.preventDefault();
                    setTimeout(function() {
                        var b = $('body');
                        $('nav').removeClass('pf');
                        b.addClass('slideclose');
                        setTimeout(function() {
                            b.removeClass('open');
                        }, 100);
                    }, 1);
                    $('html, body').stop().animate({
                        scrollTop: target.offset().top - 20
                    }, 500);
                }
            });
        }, 100);

      if (getHash() != null) {
        	checkForScrolling();
       }


		// return hash if so or null if hash is empty
		function getHash() {
		    var hash = window.location.hash.replace('#', '');
		    if (hash != '') {
		        return hash;
		    } else {
		        return null;
		    }
		}

		// this function handles your scrolling
		function checkForScrolling() {
		    // first get your element by attribute selector
		    var elem = $('[data-anchor="' + getHash() + '"]');
		    console.log(elem);
		    
		    // cheeck if element exists
		    if (elem.length > 0) {
		        $('html, body').stop().animate({
		            scrollTop: elem.offset().top - 20
		        }, 300);
		    }
		}

    });
});


