(function ($) {
    "use strict"

    //* Scroll To Content
    function _scroll_to(selector, id) {
        $(selector).click(function () {

            if ($('.menu-button').hasClass("close")) {
                $('.menu-button').addClass('open').removeClass('close')
                $('.nav-bar').addClass('close').removeClass('open')
            }

            $('html, body').animate({
                scrollTop: $(id).offset().top
            }, 1500);

            $(".nav-bar a.home_link").removeClass("active")
            $(".nav-bar a.future_events_link").removeClass("active")
            $(".nav-bar a.code_of_conduct_link").removeClass("active")

            $(selector).addClass("active")

        });
    }
    _scroll_to(".nav-bar a.home_link", "#home")
    _scroll_to(".nav-bar a.future_events_link", "#future_events")
    _scroll_to(".nav-bar a.code_of_conduct_link", "#code_of_conduct")
    _scroll_to("button.get_started", "#event")

    //* The sliders
    function _slider(selector, items_0, items_900, items_1200) {
        $(selector).owlCarousel({
            nav: false,
            mouseDrag: true,
            touchDrag: true,
            pullDrag: true,
            rtl: false,
            loop: true,
            margin: 30,
            items: 3,
            autoplay: false,
            smartSpeed: 700,
            dots: true,
            responsiveClass: true,
            responsive: {
                0: {
                    items: items_0
                },
                900: {
                    items: items_900
                },
                1200: {
                    items: items_1200
                }
            }
        })
    }

    //* The reasons slider
    _slider('.reasons .owl-carousel', 1, 2, 3)
    //* The reasons slider
    _slider('.code-of-conduct .owl-carousel', 1, 1, 1)

    //* Fixing the footer at the bottom
    if ($(document.body).height() < $(window).height()) {
        $('footer').attr('style', 'position: fixed!important; bottom: 0px;');
    }

    // Change link color onscrolling the page
    $(window).on("scroll", () => {
        if ($(document).scrollTop() < $(".future-events").offset().top - 20) {
            $(".nav-bar a.home_link").addClass("active")
            $(".nav-bar a.future_events_link").removeClass("active")
            $(".nav-bar a.code_of_conduct_link").removeClass("active")
        } else {
            if ($(document).scrollTop() >= ($(".future-events").offset().top - 10) && $(document).scrollTop() < ($(".code-of-conduct").offset().top - 20)) {
                $(".nav-bar a.home_link").removeClass("active")
                $(".nav-bar a.future_events_link").addClass("active")
                $(".nav-bar a.code_of_conduct_link").removeClass("active")
            } else {
                if ($(document).scrollTop() >= ($(".code-of-conduct").offset().top - 10)) {
                    $(".nav-bar a.home_link").removeClass("active")
                    $(".nav-bar a.future_events_link").removeClass("active")
                    $(".nav-bar a.code_of_conduct_link").addClass("active")
                }
            }
        }
    })

    $('.menu-button').click(function () {
        if ($(this).hasClass("close")) {
            $(this).addClass('open').removeClass('close')
            $('.nav-bar').addClass('close').removeClass('open')
        } else {
            $(this).addClass('close').removeClass('open')
            $('.nav-bar').addClass('open').removeClass('close')
        }
    })

})(jQuery);
