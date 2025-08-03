/*
 * Copyright (c) 2019 ThemesHolder
 * Author: ThemesHolder
 * This file is made for CURRENT TEMPLATE
*/
jQuery(document).ready(function(){

    "use strict";


        //=================
        // Scroll It active
        //=================
        $.scrollIt({
            upKey: 38, // key code to navigate to the next section
            downKey: 40, // key code to navigate to the previous section
            easing: 'linear', // the easing function for animation
            scrollTime: 1300, // how long (in ms) the animation takes
            activeClass: 'active', // class given to the active nav element
            onPageChange: null, // function(pageIndex) that is called when page is changed
            topOffset: -70, // offste (in px) for fixed top navigation
        });
       
        //==================
        // Sticky Menu
        //==================
        $(window).on('scroll', function() {
            if ($(this).scrollTop() > 400) {
                $('.sticky-header').addClass("sticky animated fadeInDown");
            } else {
                $('.sticky-header').removeClass("sticky animated fadeInDown");
            }
        });

       
        //==================
        // Pricing Table Tab
        //==================
        $('#myTab li:last-child a').on('click', function (e) {
          e.preventDefault()
          $(this).tab('show')
        });
       
        //==============
        // Mobile mneu
        //==============
        $('.main-menu').slicknav({
            prependTo: '#mobile-menu',
            label: '',
        });
       
        //=========================  
        // Active Service Carousel
        //==========================
        $(".active-service-carousl").owlCarousel({
            items: 3,
            loop: true,
            margin: 30,
            dots: true,
            autoplay: false,
            autoplayTimeout: 4000,
            responsive: {
 
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                }            }
 
        });
       
        //======================
        // Active team Carousel
        //=======================
        $(".active-team-carousl").owlCarousel({
            items: 3,
            loop: false,
            margin: 30,
            dots: true,
            autoplay: true,
            autoplayTimeout: 4000,
            responsive: {
 
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                }
            }
 
        });
       
        //=================
        // Testimonial
        //==================
        $(".testimonial-active").owlCarousel({
            items: 1,
            loop: true,
            margin: 30,
            nav: true,
            dots: false,
            navText: ["<i class='flaticon-back'></i>", "<i class=flaticon-next></i"],
            autoplay: false,
            animateOut: 'slideOutUp',
            animateIn: 'slideInUp',
            lazyLoad: true,
            autoplayTimeout: 4000,
            autoplaySpeed: 3000,
            tagePadding: 30,
            smartSpeed: 450
        });
       
        //================
        // Active Isotope
        //===============
        $('.grid').isotope({
            itemSelector: '.grid-item',
            layoutMode: 'fitRows'
        });
       
        // Isotope click function
        $('.filter-button-group ul li').click(function() {
            $('.filter-button-group ul li').removeClass('active');
            $(this).addClass('active');
 
            var selector = $(this).attr('data-filter');
            $('.grid').isotope({
                filter: selector
            });
            return false;
        });  
    });
 
    $(window).on ('load', function (){
        //================
        //  Preloader
        //================
        setTimeout(function() {
            $('.main-site').addClass('loaded');
        }, 500);
    });

        //================
        // Scroll To Top
        //===============

        $(window).on ('scroll', function () {
            if ($(this).scrollTop() > 300) {
                $('.scrollup').fadeIn();
            } else {
                $('.scrollup').fadeOut();
            }
        });

        $('.scrollup').on ('click', function () {
            $("html, body").animate({
                scrollTop: 0
            }, 1500);
            return false;
        });
 
       
 
