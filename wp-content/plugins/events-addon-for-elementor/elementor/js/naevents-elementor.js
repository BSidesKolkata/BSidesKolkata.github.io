/*
Template Name: Events Addon for Elementor
Author: NicheAddon
Version: 1.0.0
Email: support@nicheaddon.com
*/

(function($){
'use strict';

/*----- ELEMENTOR LOAD FUNTION CALL ---*/

$( window ).on( 'elementor/frontend/init', function() {
	//Owl Carousel Slider Script
	var owl_carousel = function(){
		$('.owl-carousel').each( function() {
	    var $carousel = $(this);
	    var $items = ($carousel.data('items') !== undefined) ? $carousel.data('items') : 1;
	    var $items_tablet = ($carousel.data('items-tablet') !== undefined) ? $carousel.data('items-tablet') : 1;
	    var $items_mobile_landscape = ($carousel.data('items-mobile-landscape') !== undefined) ? $carousel.data('items-mobile-landscape') : 1;
	    var $items_mobile_portrait = ($carousel.data('items-mobile-portrait') !== undefined) ? $carousel.data('items-mobile-portrait') : 1;
	    $carousel.owlCarousel ({
	      loop : ($carousel.data('loop') !== undefined) ? $carousel.data('loop') : true,
	      items : $carousel.data('items'),
	      margin : ($carousel.data('margin') !== undefined) ? $carousel.data('margin') : 0,
	      dots : ($carousel.data('dots') !== undefined) ? $carousel.data('dots') : true,
	      nav : ($carousel.data('nav') !== undefined) ? $carousel.data('nav') : false,
	      navText : ["<div class='slider-no-current'><span class='current-no'></span><span class='total-no'></span></div><span class='current-monials'></span>", "<div class='slider-no-next'></div><span class='next-monials'></span>"],
	      autoplay : ($carousel.data('autoplay') !== undefined) ? $carousel.data('autoplay') : false,
	      autoplayTimeout : ($carousel.data('autoplay-timeout') !== undefined) ? $carousel.data('autoplay-timeout') : 5000,
	      animateIn : ($carousel.data('animatein') !== undefined) ? $carousel.data('animatein') : false,
	      animateOut : ($carousel.data('animateout') !== undefined) ? $carousel.data('animateout') : false,
	      mouseDrag : ($carousel.data('mouse-drag') !== undefined) ? $carousel.data('mouse-drag') : true,
	      autoWidth : ($carousel.data('auto-width') !== undefined) ? $carousel.data('auto-width') : false,
	      autoHeight : ($carousel.data('auto-height') !== undefined) ? $carousel.data('auto-height') : false,
	      center : ($carousel.data('center') !== undefined) ? $carousel.data('center') : false,
	      responsiveClass: true,
	      dotsEachNumber: true,
	      smartSpeed: 600,
	      autoplayHoverPause: true,
	      responsive : {
	        0 : {
	          items : $items_mobile_portrait,
	        },
	        480 : {
	          items : $items_mobile_landscape,
	        },
	        768 : {
	          items : $items_tablet,
	        },
	        992 : {
	          items : $items,
	        }
	      }
	    });
	    var totLength = $('.owl-dot', $carousel).length;
	    $('.total-no', $carousel).html(totLength);
	    $('.current-no', $carousel).html(totLength);
	    $carousel.owlCarousel();
	    $('.current-no', $carousel).html(1);
	    $carousel.on('changed.owl.carousel', function(event) {
	      var total_items = event.page.count;
	      var currentNum = event.page.index + 1;
	      $('.total-no', $carousel ).html(total_items);
	      $('.current-no', $carousel).html(currentNum);
	    });
	  });
	}; // end

	//Events Addon for Elementor Preloader Script
  $('.naeep-preloader').fadeOut(500);

	var item_hover_class = function( selector ){
		$(selector).on({
		  mouseenter : function() {
			$(this).addClass('naeep-hover');
		  },
		  mouseleave : function() {
			$(this).removeClass('naeep-hover');
		  }
		});
	};

	var item_prev_class = function( selector ){
		$(selector).on({
		  mouseenter : function() {
			$(this).prevAll(selector).addClass('process-done');
			$(this).addClass('process-done');
		  },
		  mouseleave : function() {
			$(this).prevAll(selector).removeClass('process-done');
			$(this).removeClass('process-done');
		  }
		});
	};

	//Events Addon for Elementor Services
	elementorFrontend.hooks.addAction( 'frontend/element_ready/naevents_basic_services.default', function($scope, $){
		item_hover_class('.naeep-service-item');
	} );
	//Events Addon for Elementor Blog
	elementorFrontend.hooks.addAction( 'frontend/element_ready/naevents_basic_blog.default', function($scope, $){
		item_hover_class('.naeep-news-item');
    $('.naeep-item').matchHeight ({
      property: 'height'
    });
	} );
	//Events Addon for Elementor Gallery
	elementorFrontend.hooks.addAction( 'frontend/element_ready/naevents_basic_gallery.default', function($scope, $){
		item_hover_class('.naeep-gallery-item');
		$('.masonry-wrap').each(function(i, gridContainer) {
      var $gridContainer = $(gridContainer);
      var $grid = $gridContainer.find('.naeep-masonry').imagesLoaded(function() {
        $grid.isotope ({
          itemSelector: '.masonry-item',
          layoutMode: 'packery',
          percentPosition: true,
          isFitWidth: true,
        })
      });
      $gridContainer.find('.masonry-filters').on('click', 'li a', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope ({
          filter: filterValue,
        });
      });
    });
    $('.masonry-filters').each( function( i, buttonGroup ) {
      var $buttonGroup = $(buttonGroup);
      $buttonGroup.on( 'click', 'li a', function() {
        $buttonGroup.find('.active').removeClass('active');
        $(this).addClass('active');
      });
    });
	} );
	//Events Addon for Elementor Contact
	elementorFrontend.hooks.addAction( 'frontend/element_ready/naevents_basic_contact.default', function($scope, $){
		item_hover_class('.naeep-contact-item');
	} );
	//Events Addon for Elementor Process
	elementorFrontend.hooks.addAction( 'frontend/element_ready/naevents_basic_process.default', function($scope, $){
	  item_prev_class('.naeep-process-item');
	} );
	//Events Addon for Elementor Team
	elementorFrontend.hooks.addAction( 'frontend/element_ready/naevents_basic_team.default', function($scope, $){
	  item_hover_class('.naeep-team-item');
    //Naeep Team Hover Script
    $('.trigger-icon').on('hover', function(e) {
      $(this).parents(".naeep-team-item").toggleClass('icon-trigger');
    });
	} );
	//Events Addon for Elementor Testimonials
	elementorFrontend.hooks.addAction( 'frontend/element_ready/naevents_basic_testimonials.default', function($scope, $){
	  item_hover_class('.naeep-testimonial-item');
		owl_carousel();
	} );
	//Events Addon for Elementor Video Popup
	elementorFrontend.hooks.addAction( 'frontend/element_ready/naevents_basic_video.default', function($scope, $){
	  item_hover_class('.naeep-video-wrap');
	} );
	//Events Addon for Elementor History
	elementorFrontend.hooks.addAction( 'frontend/element_ready/naevents_basic_history.default', function($scope, $){
	  // item_hover_class('.naeep-history-item');
		owl_carousel();
		$('.naeep-item').matchHeight ({
	    property: 'height'
	  });
	} );
	//Events Addon for Elementor Slider
	elementorFrontend.hooks.addAction( 'frontend/element_ready/naevents_basic_slider.default', function($scope, $){
		//Fame Swiper Slider Script
    $('.swiper-slides').each(function (index) {
      //Fame Swiper Slider Script
      var animEndEv = 'webkitAnimationEnd animationend';
      var swipermw = $('.swiper-container.swiper-mousewheel').length ? true : false;
      var swiperkb = $('.swiper-container.swiper-keyboard').length ? true : false;
      var swipercentered = $('.swiper-container.swiper-center').length ? true : false;
      var swiperautoplay = $('.swiper-container').data('autoplay');
      var swiperloop = $('.swiper-container').data('loop');
      var swipermousedrag = $('.swiper-container').data('mousedrag');
      var swipereffect = $('.swiper-container').data('effect');
      var swiperclikable = $('.swiper-container').data('clickpage');
      var swiperspeed = $('.swiper-container').data('speed');

      //Fame Swiper Slides Script
      var swiper = new Swiper($(this), {
        autoplay: swiperautoplay,
        effect: swipereffect,
        speed: swiperspeed,
        loop: swiperloop,
        paginationClickable: swiperclikable,
        watchSlidesProgress: true,
        simulateTouch: swipermousedrag,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        mousewheelControl: swipermw,
        keyboardControl: swiperkb,
      });
      swiper.on('slideChange', function (s) {
        var currentSlide = $(swiper.slides[swiper.activeIndex]);
          var elems = currentSlide.find('.animated')
          elems.each(function() {
            var $this = $(this);
            var animationType = $this.data('animation');
            $this.addClass(animationType, 100).on(animEndEv, function() {
              $this.removeClass(animationType);
            });
          });
      });
    });
	} );
	// Events Addon for Elementor Countdown
	elementorFrontend.hooks.addAction( 'frontend/element_ready/naevents_unique_countdown.default', function($scope, $){
  	    //Countdown Script
    var $countdown = $scope.find('.naeep-countdown.static, .naeep-countdown.dynamic');
    var date = $countdown.data("date");
    var format = $countdown.data("format");
    var count_format = format ? format : 'dHMS';
    // Plural Labels
    var years = $countdown.data("years");
    var months = $countdown.data("months");
    var weeks = $countdown.data("weeks");
    var days = $countdown.data("days");
    var hours = $countdown.data("hours");
    var minutes = $countdown.data("minutes");
    var seconds = $countdown.data("seconds");
    // Singular Labels
    var year = $countdown.data("year");
    var month = $countdown.data("month");
    var week = $countdown.data("week");
    var day = $countdown.data("day");
    var hour = $countdown.data("hour");
    var minute = $countdown.data("minute");
    var second = $countdown.data("second");
    var timezone = $countdown.data("timezone");

    var austDay = new Date();
    austDay = new Date(date);
    
    if(timezone){
        var offset = parseInt(timezone);
    } else {
        var offset = (new Date().getTimezoneOffset() / 60);
        offset = parseInt(offset);
    }

    $countdown.countdown({
      until: $.countdown.UTCDate(offset, austDay),
      labels: [years,months,weeks,days,hours,minutes,seconds],
      labels1: [year,month,week,day,hour,minute,second],
      format: count_format
    });

    // Fake COuntdown Script
    var $countdown_fake = $scope.find('.naeep-countdown.fake');
    $('.naeep-countdown.fake').each( function() {
      var $countdown_fake = $(this);
      var date = $countdown_fake.data("date");
      var today = new Date();
      var newdate = new Date();
      newdate.setDate(today.getDate() + date);
      var mm = today.getMonth() + 1; //January is 0!
      var yyyy = today.getFullYear();
      today =  new Date(newdate);

      // Plural Labels
      var years = $countdown_fake.data("years");
      var months = $countdown_fake.data("months");
      var weeks = $countdown_fake.data("weeks");
      var days = $countdown_fake.data("days");
      var hours = $countdown_fake.data("hours");
      var minutes = $countdown_fake.data("minutes");
      var seconds = $countdown_fake.data("seconds");
      // Singular Labels
      var year = $countdown_fake.data("year");
      var month = $countdown_fake.data("month");
      var week = $countdown_fake.data("week");
      var day = $countdown_fake.data("day");
      var hour = $countdown_fake.data("hour");
      var minute = $countdown_fake.data("minute");
      var second = $countdown_fake.data("second");

      $countdown_fake.countdown({
        until: $.countdown.UTCDate(offset, today),
        labels: [years,months,weeks,days,hours,minutes,seconds],
        labels1: [year,month,week,day,hour,minute,second]
      });
    });
	} );
	// Events Addon for Elementor Organizer
	elementorFrontend.hooks.addAction( 'frontend/element_ready/naevents_unique_organizer.default', function($scope, $){
		$('.naeep-item').matchHeight ({
	    property: 'height'
	  });
	} );
	//Events Addon for Elementor Event
	elementorFrontend.hooks.addAction( 'frontend/element_ready/naevents_unique_event.default', function($scope, $){
	  item_hover_class('.naeep-event-item');
		$('.naeep-item').matchHeight ({
	    property: 'height'
	  });
	} );
	//Events Addon for Elementor Schedule
  elementorFrontend.hooks.addAction( 'frontend/element_ready/naevents_unique_schedule.default', function($scope, $){
    owl_carousel();
    $('.naeep-item').matchHeight ({
      property: 'height'
    });
  } );
  //Events Addon for Elementor Venues
  elementorFrontend.hooks.addAction( 'frontend/element_ready/naevents_unique_venues.default', function($scope, $){
    $('.naeep-item').matchHeight ({
      property: 'height'
    });
  } );
	//Events Addon for Elementor Sessions
	elementorFrontend.hooks.addAction( 'frontend/element_ready/naevents_unique_sessions.default', function($scope, $){
		$('.naeep-item').matchHeight ({
	    property: 'height'
	  });
	} );
	//Events Addon for Elementor Schedule Tab
	elementorFrontend.hooks.addAction( 'frontend/element_ready/naevents_unique_schedule_tab.default', function($scope, $){
		$('.naeep-tab-links a').on('click', function(e) {
	    var currentAttrValue = $(this).attr('href');
	    $('.naeep-tab-content ' + currentAttrValue).fadeIn(400).siblings().hide().stop(true, true);
	    $(this).parent('li').addClass('active').siblings().removeClass('active');
      $('.naeep-item').matchHeight ({
        property: 'height'
      });
	    e.preventDefault();
	  });
	  $('.naeep-item').matchHeight ({
	    property: 'height'
	  });
	} );
	//Events Addon for Elementor Discussion
	elementorFrontend.hooks.addAction( 'frontend/element_ready/naevents_unique_discussion.default', function($scope, $){
		$('.naeep-tab-links a').on('click', function(e) {
	    var currentAttrValue = $(this).attr('href');
	    $('.naeep-tab-content ' + currentAttrValue).fadeIn(400).siblings().hide().stop(true, true);
	    $(this).parent('li').addClass('active').siblings().removeClass('active');
	    e.preventDefault();
	  });
	  $('.naeep-item').matchHeight ({
	    property: 'height'
	  });
	} );
	// Events Addon for Elementor Conference
	elementorFrontend.hooks.addAction( 'frontend/element_ready/naevents_unique_conference.default', function($scope, $){
    //Countdown Script
    var $countdown = $scope.find('.naeep-countdown.static, .naeep-countdown.dynamic');
    var date = $countdown.data("date");
    var format = $countdown.data("format");
    var count_format = format ? format : 'dHMS';
    // Plural Labels
    var years = $countdown.data("years");
    var months = $countdown.data("months");
    var weeks = $countdown.data("weeks");
    var days = $countdown.data("days");
    var hours = $countdown.data("hours");
    var minutes = $countdown.data("minutes");
    var seconds = $countdown.data("seconds");
    // Singular Labels
    var year = $countdown.data("year");
    var month = $countdown.data("month");
    var week = $countdown.data("week");
    var day = $countdown.data("day");
    var hour = $countdown.data("hour");
    var minute = $countdown.data("minute");
    var second = $countdown.data("second");
    var timezone = $countdown.data("timezone");

    var austDay = new Date();
    austDay = new Date(date);
    
    if(timezone){
        var offset = parseInt(timezone);
    } else {
        var offset = (new Date().getTimezoneOffset() / 60);
        offset = parseInt(offset);
    }

    $countdown.countdown({
      until: $.countdown.UTCDate(offset, austDay),
      labels: [years,months,weeks,days,hours,minutes,seconds],
      labels1: [year,month,week,day,hour,minute,second],
      format: count_format
    });

    // Fake COuntdown Script
    var $countdown_fake = $scope.find('.naeep-countdown.fake');
    $('.naeep-countdown.fake').each( function() {
      var $countdown_fake = $(this);
      var date = $countdown_fake.data("date");
      var today = new Date();
      var newdate = new Date();
      newdate.setDate(today.getDate() + date);
      var mm = today.getMonth() + 1; //January is 0!
      var yyyy = today.getFullYear();
      today =  new Date(newdate);

      // Plural Labels
      var years = $countdown_fake.data("years");
      var months = $countdown_fake.data("months");
      var weeks = $countdown_fake.data("weeks");
      var days = $countdown_fake.data("days");
      var hours = $countdown_fake.data("hours");
      var minutes = $countdown_fake.data("minutes");
      var seconds = $countdown_fake.data("seconds");
      // Singular Labels
      var year = $countdown_fake.data("year");
      var month = $countdown_fake.data("month");
      var week = $countdown_fake.data("week");
      var day = $countdown_fake.data("day");
      var hour = $countdown_fake.data("hour");
      var minute = $countdown_fake.data("minute");
      var second = $countdown_fake.data("second");

      $countdown_fake.countdown({
        until: $.countdown.UTCDate(offset, today),
        labels: [years,months,weeks,days,hours,minutes,seconds],
        labels1: [year,month,week,day,hour,minute,second]
      });
    });  	
	} );
	//Events Addon for Elementor Pricing
	elementorFrontend.hooks.addAction( 'frontend/element_ready/naevents_unique_pricing.default', function($scope, $){
	  item_hover_class('.naeep-price-item');
	  $('.naeep-item').matchHeight ({
	    property: 'height'
	  });
	} );
	//Events Addon for Elementor Call To Action
	elementorFrontend.hooks.addAction( 'frontend/element_ready/naevents_unique_call_action.default', function($scope, $){
	  setTimeout(function() {
	    $('.naeep-cta').addClass('active');
	  }, 100);
	  $('.cta-close').click(function() {
	    $('.naeep-cta').fadeOut('normal', function() {
	      $(this).remove();
	      $('.naeep-cta').removeClass('active');
	    });
	  });
	} );
	//Events Addon for Elementor Info Box
	elementorFrontend.hooks.addAction( 'frontend/element_ready/naevents_unique_infobox.default', function($scope, $){
	  item_hover_class('.event-info-item');
	  $('.event-info-item').matchHeight ({
	    property: 'height'
	  });
	} );
	//Events Addon for Elementor Upcomming
	elementorFrontend.hooks.addAction( 'frontend/element_ready/naevents_unique_upcoming.default', function($scope, $){
	  item_hover_class('.naeep-upcoming-day');
	} );
  //Events Addon for Elementor Ticket
  elementorFrontend.hooks.addAction( 'frontend/element_ready/naevents_unique_ticket.default', function($scope, $){
    item_hover_class('.naeep-ticket-item');
  } );

  // The Events Calendar
	// Events Addon for Elementor Countdown
	elementorFrontend.hooks.addAction( 'frontend/element_ready/naevents_tec_countdown.default', function($scope, $){
  	//Countdown Script
  	var $countdown = $scope.find('.naeep-countdown.static, .naeep-countdown.dynamic');
    
      var date = $countdown.data("date");
      var format = $countdown.data("format");
      var count_format = format ? format : 'dHMS';
      // Plural Labels
      var years = $countdown.data("years");
      var months = $countdown.data("months");
      var weeks = $countdown.data("weeks");
      var days = $countdown.data("days");
      var hours = $countdown.data("hours");
      var minutes = $countdown.data("minutes");
      var seconds = $countdown.data("seconds");
      // Singular Labels
      var year = $countdown.data("year");
      var month = $countdown.data("month");
      var week = $countdown.data("week");
      var day = $countdown.data("day");
      var hour = $countdown.data("hour");
      var minute = $countdown.data("minute");
      var second = $countdown.data("second");
      var timezone = $countdown.data("timezone");

      var austDay = new Date();
      austDay = new Date(date);
      
      if(timezone){
      	var offset = parseInt(timezone);
      } else {
      	var offset = (new Date().getTimezoneOffset() / 60);
      	offset = parseInt(offset);
      }

      $countdown.countdown({
        until: $.countdown.UTCDate(offset, austDay),
        labels: [years,months,weeks,days,hours,minutes,seconds],
        labels1: [year,month,week,day,hour,minute,second],
        format: count_format
      });

    // Fake COuntdown Script
    var $countdown_fake = $scope.find('.naeep-countdown.fake');
    $('.naeep-countdown.fake').each( function() {
      var $countdown_fake = $(this);
      var date = $countdown_fake.data("date");
      var today = new Date();
      var newdate = new Date();
      newdate.setDate(today.getDate() + date);
      var mm = today.getMonth() + 1; //January is 0!
      var yyyy = today.getFullYear();
      today =  new Date(newdate);

      // Plural Labels
      var years = $countdown_fake.data("years");
      var months = $countdown_fake.data("months");
      var weeks = $countdown_fake.data("weeks");
      var days = $countdown_fake.data("days");
      var hours = $countdown_fake.data("hours");
      var minutes = $countdown_fake.data("minutes");
      var seconds = $countdown_fake.data("seconds");
      // Singular Labels
      var year = $countdown_fake.data("year");
      var month = $countdown_fake.data("month");
      var week = $countdown_fake.data("week");
      var day = $countdown_fake.data("day");
      var hour = $countdown_fake.data("hour");
      var minute = $countdown_fake.data("minute");
      var second = $countdown_fake.data("second");

      $countdown_fake.countdown({
        until: $.countdown.UTCDate(offset, today),
        labels: [years,months,weeks,days,hours,minutes,seconds],
        labels1: [year,month,week,day,hour,minute,second]
      });
    });
	} );
	//Events Addon for Elementor Call To Action
	elementorFrontend.hooks.addAction( 'frontend/element_ready/naevents_tec_call_action.default', function($scope, $){
	  setTimeout(function() {
	    $('.naeep-cta').addClass('active');
	  }, 100);
	  $('.cta-close').click(function() {
	    $('.naeep-cta').fadeOut('normal', function() {
	      $(this).remove();
	      $('.naeep-cta').removeClass('active');
	    });
	  });
	} );
	// Events Addon for Elementor Conference
	elementorFrontend.hooks.addAction( 'frontend/element_ready/naevents_tec_conference.default', function($scope, $){
  	//Countdown Script
  	var $countdown = $scope.find('.naeep-countdown.static, .naeep-countdown.dynamic');
    var date = $countdown.data("date");
    var format = $countdown.data("format");
    var count_format = format ? format : 'dHMS';
    // Plural Labels
    var years = $countdown.data("years");
    var months = $countdown.data("months");
    var weeks = $countdown.data("weeks");
    var days = $countdown.data("days");
    var hours = $countdown.data("hours");
    var minutes = $countdown.data("minutes");
    var seconds = $countdown.data("seconds");
    // Singular Labels
    var year = $countdown.data("year");
    var month = $countdown.data("month");
    var week = $countdown.data("week");
    var day = $countdown.data("day");
    var hour = $countdown.data("hour");
    var minute = $countdown.data("minute");
    var second = $countdown.data("second");
    var timezone = $countdown.data("timezone");

    var austDay = new Date();
    austDay = new Date(date);
    
    if(timezone){
    	var offset = parseInt(timezone);
    } else {
    	var offset = (new Date().getTimezoneOffset() / 60);
    	offset = parseInt(offset);
    }

    $countdown.countdown({
      until: $.countdown.UTCDate(offset, austDay),
      labels: [years,months,weeks,days,hours,minutes,seconds],
      labels1: [year,month,week,day,hour,minute,second],
      format: count_format
    });

    // Fake COuntdown Script
    var $countdown_fake = $scope.find('.naeep-countdown.fake');
    $('.naeep-countdown.fake').each( function() {
      var $countdown_fake = $(this);
      var date = $countdown_fake.data("date");
      var today = new Date();
      var newdate = new Date();
      newdate.setDate(today.getDate() + date);
      var mm = today.getMonth() + 1; //January is 0!
      var yyyy = today.getFullYear();
      today =  new Date(newdate);

      // Plural Labels
      var years = $countdown_fake.data("years");
      var months = $countdown_fake.data("months");
      var weeks = $countdown_fake.data("weeks");
      var days = $countdown_fake.data("days");
      var hours = $countdown_fake.data("hours");
      var minutes = $countdown_fake.data("minutes");
      var seconds = $countdown_fake.data("seconds");
      // Singular Labels
      var year = $countdown_fake.data("year");
      var month = $countdown_fake.data("month");
      var week = $countdown_fake.data("week");
      var day = $countdown_fake.data("day");
      var hour = $countdown_fake.data("hour");
      var minute = $countdown_fake.data("minute");
      var second = $countdown_fake.data("second");

      $countdown_fake.countdown({
        until: $.countdown.UTCDate(offset, today),
        labels: [years,months,weeks,days,hours,minutes,seconds],
        labels1: [year,month,week,day,hour,minute,second]
      });
    });
  });

	//Events Addon for Elementor Event
	elementorFrontend.hooks.addAction( 'frontend/element_ready/naevents_tec_event.default', function($scope, $){
	  item_hover_class('.naeep-event-item');
		$('.naeep-item').matchHeight ({
	    property: 'height'
	  });
	} );
	//Events Addon for Elementor Info Box
	elementorFrontend.hooks.addAction( 'frontend/element_ready/naevents_tec_infobox.default', function($scope, $){
	  item_hover_class('.event-info-item');
	  $('.event-info-item').matchHeight ({
	    property: 'height'
	  });
	} );
	// Events Addon for Elementor Organizer
	elementorFrontend.hooks.addAction( 'frontend/element_ready/naevents_tec_organizer.default', function($scope, $){
		$('.naeep-item').matchHeight ({
	    property: 'height'
	  });
	} );
	//Events Addon for Elementor Schedule
	elementorFrontend.hooks.addAction( 'frontend/element_ready/naevents_tec_schedule.default', function($scope, $){
		owl_carousel();
		$('.naeep-item').matchHeight ({
	    property: 'height'
	  });
	} );
	//Events Addon for Elementor Sessions
	elementorFrontend.hooks.addAction( 'frontend/element_ready/naevents_tec_sessions.default', function($scope, $){
		$('.naeep-item').matchHeight ({
	    property: 'height'
	  });
	} );
	//Events Addon for Elementor Upcomming
  elementorFrontend.hooks.addAction( 'frontend/element_ready/naevents_tec_upcoming.default', function($scope, $){
    item_hover_class('.naeep-upcoming-day');
  } );
  //Events Addon for Elementor Call To Action
  elementorFrontend.hooks.addAction( 'frontend/element_ready/naevents_aoec_call_action.default', function($scope, $){
    setTimeout(function() {
      $('.naeep-cta').addClass('active');
    }, 100);
    $('.cta-close').click(function() {
      $('.naeep-cta').fadeOut('normal', function() {
        $(this).remove();
        $('.naeep-cta').removeClass('active');
      });
    });
  } );

  // Event Organiser
  //Events Addon for Elementor Call To Action
  elementorFrontend.hooks.addAction( 'frontend/element_ready/naevents_eo_call_action.default', function($scope, $){
    setTimeout(function() {
      $('.naeep-cta').addClass('active');
    }, 100);
    $('.cta-close').click(function() {
      $('.naeep-cta').fadeOut('normal', function() {
        $(this).remove();
        $('.naeep-cta').removeClass('active');
      });
    });
  } );
  // Events Addon for Elementor Conference
  elementorFrontend.hooks.addAction( 'frontend/element_ready/naevents_eo_conference.default', function($scope, $){
    //Countdown Script
    $('.naeep-countdown.static, .naeep-countdown.dynamic').each( function() {
      var $countdown = $(this);
      var date = $countdown.data("date");
      var format = $countdown.data("format");
      var count_format = format ? format : 'dHMS';
      // Plural Labels
      var years = $countdown.data("years");
      var months = $countdown.data("months");
      var weeks = $countdown.data("weeks");
      var days = $countdown.data("days");
      var hours = $countdown.data("hours");
      var minutes = $countdown.data("minutes");
      var seconds = $countdown.data("seconds");
      // Singular Labels
      var year = $countdown.data("year");
      var month = $countdown.data("month");
      var week = $countdown.data("week");
      var day = $countdown.data("day");
      var hour = $countdown.data("hour");
      var minute = $countdown.data("minute");
      var second = $countdown.data("second");

      var austDay = new Date();
      austDay = new Date(date);

      $countdown.countdown({
        until: austDay,
        labels: [years,months,weeks,days,hours,minutes,seconds],
        labels1: [year,month,week,day,hour,minute,second],
        format: count_format,
      });
    });

    // Fake COuntdown Script
    $('.naeep-countdown.fake').each( function() {
      var $countdown = $(this);
      var date = $countdown.data("date");
      var today = new Date();
      var newdate = new Date();
      newdate.setDate(today.getDate() + date);
      var mm = today.getMonth() + 1; //January is 0!
      var yyyy = today.getFullYear();
      today =  new Date(newdate);

      // Plural Labels
      var years = $countdown.data("years");
      var months = $countdown.data("months");
      var weeks = $countdown.data("weeks");
      var days = $countdown.data("days");
      var hours = $countdown.data("hours");
      var minutes = $countdown.data("minutes");
      var seconds = $countdown.data("seconds");
      // Singular Labels
      var year = $countdown.data("year");
      var month = $countdown.data("month");
      var week = $countdown.data("week");
      var day = $countdown.data("day");
      var hour = $countdown.data("hour");
      var minute = $countdown.data("minute");
      var second = $countdown.data("second");

      $('.naeep-countdown.fake').countdown({
        until: today,
        labels: [years,months,weeks,days,hours,minutes,seconds],
        labels1: [year,month,week,day,hour,minute,second],
      });
    });
  } );
  // Events Addon for Elementor Countdown
  elementorFrontend.hooks.addAction( 'frontend/element_ready/naevents_eo_countdown.default', function($scope, $){
    //Countdown Script
    $('.naeep-countdown.static, .naeep-countdown.dynamic').each( function() {
      var $countdown = $(this);
      var date = $countdown.data("date");
      var format = $countdown.data("format");
      var count_format = format ? format : 'dHMS';
      // Plural Labels
      var years = $countdown.data("years");
      var months = $countdown.data("months");
      var weeks = $countdown.data("weeks");
      var days = $countdown.data("days");
      var hours = $countdown.data("hours");
      var minutes = $countdown.data("minutes");
      var seconds = $countdown.data("seconds");
      // Singular Labels
      var year = $countdown.data("year");
      var month = $countdown.data("month");
      var week = $countdown.data("week");
      var day = $countdown.data("day");
      var hour = $countdown.data("hour");
      var minute = $countdown.data("minute");
      var second = $countdown.data("second");

      var austDay = new Date();
      austDay = new Date(date);

      $countdown.countdown({
        until: austDay,
        labels: [years,months,weeks,days,hours,minutes,seconds],
        labels1: [year,month,week,day,hour,minute,second],
        format: count_format,
      });
    });

    // Fake COuntdown Script
    $('.naeep-countdown.fake').each( function() {
      var $countdown = $(this);
      var date = $countdown.data("date");
      var today = new Date();
      var newdate = new Date();
      newdate.setDate(today.getDate() + date);
      var mm = today.getMonth() + 1; //January is 0!
      var yyyy = today.getFullYear();
      today =  new Date(newdate);

      // Plural Labels
      var years = $countdown.data("years");
      var months = $countdown.data("months");
      var weeks = $countdown.data("weeks");
      var days = $countdown.data("days");
      var hours = $countdown.data("hours");
      var minutes = $countdown.data("minutes");
      var seconds = $countdown.data("seconds");
      // Singular Labels
      var year = $countdown.data("year");
      var month = $countdown.data("month");
      var week = $countdown.data("week");
      var day = $countdown.data("day");
      var hour = $countdown.data("hour");
      var minute = $countdown.data("minute");
      var second = $countdown.data("second");

      $('.naeep-countdown.fake').countdown({
        until: today,
        labels: [years,months,weeks,days,hours,minutes,seconds],
        labels1: [year,month,week,day,hour,minute,second],
      });
    });
  } );
  //Events Addon for Elementor Event
  elementorFrontend.hooks.addAction( 'frontend/element_ready/naevents_eo_event.default', function($scope, $){
    item_hover_class('.naeep-event-item');
    $('.naeep-item').matchHeight ({
      property: 'height'
    });
  } );
  //Events Addon for Elementor Info Box
  elementorFrontend.hooks.addAction( 'frontend/element_ready/naevents_eo_infobox.default', function($scope, $){
    item_hover_class('.event-info-item');
    $('.event-info-item').matchHeight ({
      property: 'height'
    });
  } );
  //Events Addon for Elementor Schedule
  elementorFrontend.hooks.addAction( 'frontend/element_ready/naevents_eo_schedule.default', function($scope, $){
    owl_carousel();
    $('.naeep-item').matchHeight ({
      property: 'height'
    });
  } );
  //Events Addon for Elementor Upcomming
  elementorFrontend.hooks.addAction( 'frontend/element_ready/naevents_eo_upcoming.default', function($scope, $){
    item_hover_class('.naeep-upcoming-day');
  } );

  // Event Organiser
  //Events Addon for Elementor Call To Action
  elementorFrontend.hooks.addAction( 'frontend/element_ready/naevents_em_call_action.default', function($scope, $){
    setTimeout(function() {
      $('.naeep-cta').addClass('active');
    }, 100);
    $('.cta-close').click(function() {
      $('.naeep-cta').fadeOut('normal', function() {
        $(this).remove();
        $('.naeep-cta').removeClass('active');
      });
    });
  } );
  // Events Addon for Elementor Conference
  elementorFrontend.hooks.addAction( 'frontend/element_ready/naevents_em_conference.default', function($scope, $){
    //Countdown Script
    $('.naeep-countdown.static, .naeep-countdown.dynamic').each( function() {
      var $countdown = $(this);
      var date = $countdown.data("date");
      var format = $countdown.data("format");
      var count_format = format ? format : 'dHMS';
      // Plural Labels
      var years = $countdown.data("years");
      var months = $countdown.data("months");
      var weeks = $countdown.data("weeks");
      var days = $countdown.data("days");
      var hours = $countdown.data("hours");
      var minutes = $countdown.data("minutes");
      var seconds = $countdown.data("seconds");
      // Singular Labels
      var year = $countdown.data("year");
      var month = $countdown.data("month");
      var week = $countdown.data("week");
      var day = $countdown.data("day");
      var hour = $countdown.data("hour");
      var minute = $countdown.data("minute");
      var second = $countdown.data("second");

      var austDay = new Date();
      austDay = new Date(date);

      $countdown.countdown({
        until: austDay,
        labels: [years,months,weeks,days,hours,minutes,seconds],
        labels1: [year,month,week,day,hour,minute,second],
        format: count_format,
      });
    });

    // Fake COuntdown Script
    $('.naeep-countdown.fake').each( function() {
      var $countdown = $(this);
      var date = $countdown.data("date");
      var today = new Date();
      var newdate = new Date();
      newdate.setDate(today.getDate() + date);
      var mm = today.getMonth() + 1; //January is 0!
      var yyyy = today.getFullYear();
      today =  new Date(newdate);

      // Plural Labels
      var years = $countdown.data("years");
      var months = $countdown.data("months");
      var weeks = $countdown.data("weeks");
      var days = $countdown.data("days");
      var hours = $countdown.data("hours");
      var minutes = $countdown.data("minutes");
      var seconds = $countdown.data("seconds");
      // Singular Labels
      var year = $countdown.data("year");
      var month = $countdown.data("month");
      var week = $countdown.data("week");
      var day = $countdown.data("day");
      var hour = $countdown.data("hour");
      var minute = $countdown.data("minute");
      var second = $countdown.data("second");

      $('.naeep-countdown.fake').countdown({
        until: today,
        labels: [years,months,weeks,days,hours,minutes,seconds],
        labels1: [year,month,week,day,hour,minute,second],
      });
    });
  } );
  // Events Addon for Elementor Countdown
  elementorFrontend.hooks.addAction( 'frontend/element_ready/naevents_em_countdown.default', function($scope, $){
    //Countdown Script
    $('.naeep-countdown.static, .naeep-countdown.dynamic').each( function() {
      var $countdown = $(this);
      var date = $countdown.data("date");
      var format = $countdown.data("format");
      var count_format = format ? format : 'dHMS';
      // Plural Labels
      var years = $countdown.data("years");
      var months = $countdown.data("months");
      var weeks = $countdown.data("weeks");
      var days = $countdown.data("days");
      var hours = $countdown.data("hours");
      var minutes = $countdown.data("minutes");
      var seconds = $countdown.data("seconds");
      // Singular Labels
      var year = $countdown.data("year");
      var month = $countdown.data("month");
      var week = $countdown.data("week");
      var day = $countdown.data("day");
      var hour = $countdown.data("hour");
      var minute = $countdown.data("minute");
      var second = $countdown.data("second");

      var austDay = new Date();
      austDay = new Date(date);

      $countdown.countdown({
        until: austDay,
        labels: [years,months,weeks,days,hours,minutes,seconds],
        labels1: [year,month,week,day,hour,minute,second],
        format: count_format,
      });
    });

    // Fake COuntdown Script
    $('.naeep-countdown.fake').each( function() {
      var $countdown = $(this);
      var date = $countdown.data("date");
      var today = new Date();
      var newdate = new Date();
      newdate.setDate(today.getDate() + date);
      var mm = today.getMonth() + 1; //January is 0!
      var yyyy = today.getFullYear();
      today =  new Date(newdate);

      // Plural Labels
      var years = $countdown.data("years");
      var months = $countdown.data("months");
      var weeks = $countdown.data("weeks");
      var days = $countdown.data("days");
      var hours = $countdown.data("hours");
      var minutes = $countdown.data("minutes");
      var seconds = $countdown.data("seconds");
      // Singular Labels
      var year = $countdown.data("year");
      var month = $countdown.data("month");
      var week = $countdown.data("week");
      var day = $countdown.data("day");
      var hour = $countdown.data("hour");
      var minute = $countdown.data("minute");
      var second = $countdown.data("second");

      $('.naeep-countdown.fake').countdown({
        until: today,
        labels: [years,months,weeks,days,hours,minutes,seconds],
        labels1: [year,month,week,day,hour,minute,second],
      });
    });
  } );

  //Events Addon for Elementor Schedule List
  elementorFrontend.hooks.addAction( 'frontend/element_ready/naevents_unique_schedule_list.default', function($scope, $){
    $('.naeep-item').matchHeight ({
      property: 'height'
    });
  } );

  //Events Addon for Elementor event_listing
  elementorFrontend.hooks.addAction( 'frontend/element_ready/naevents_tec_event_listing.default', function($scope, $){
    owl_carousel();
  } );

  //Swiper slider init from elementor
  var SwiperSliderInit = function ($scope, $) {
  	let slider_el = $scope.find(".swiper-slides");
  	if (slider_el.length === 0)
  		return;
  	let settings = $scope.data('settings');
    let autoplay_speed = settings.carousel_autoplay_timeout ? settings.carousel_autoplay_timeout : 5000;
    let swiperautoplay = settings.carousel_autoplay ? { delay: autoplay_speed } : false;
    let swiperloop = settings.carousel_loop ? settings.carousel_loop : false;
    let swipermousedrag = settings.carousel_mousedrag ? settings.carousel_mousedrag : false;
    let swiperspeed = settings.carousel_speed ? settings.carousel_speed : 500;
    let swiperanimation = settings.carousel_effect ? settings.carousel_effect : 'slide';
  	let interleaveOffset = 0.5;
    let animEndEv = 'webkitAnimationEnd animationend';
    let swipermw = $scope.find('.swiper-mousewheel').length ? true : false;
    let swiperkb = $scope.find('.swiper-keyboard').length ? true : false;
    let swipercentered = $scope.find('.swiper-center').length ? true : false;
  	let nextEl = $scope.find('.swiper-button-next');
  	let prevEl = $scope.find('.swiper-button-prev');
  	let el = $scope.find('.swiper-pagination');

  	// Init elementor swiper
  	const Swiper = elementorFrontend.utils.swiper;
  	initSwiper();
  	
  	async function initSwiper() {
  		let slidervar = await new Swiper( slider_el, {
        pagination: {
          el: el,
          clickable: true,
        },
        navigation: {
          nextEl: nextEl,
          prevEl: prevEl,
        },
  			autoplay: swiperautoplay,
  			speed: swiperspeed,
  			effect: swiperanimation,
        watchSlidesProgress: true,
        simulateTouch: swipermousedrag,
  			loop: swiperloop,
        mousewheelControl: swipermw,
        keyboardControl: swiperkb
  		});
      slidervar.on('slideChange', function (s) {
        let currentSlide = $(slidervar.slides[slidervar.activeIndex]);
        let elems = currentSlide.find('.animated')
        elems.each(function() {
          let $this = $(this);
          let animationType = $this.data('animation');
          $this.addClass(animationType, 100).on(animEndEv, function() {
            $this.removeClass(animationType);
          });
        });
      });
  	};
  }

  //Events Addon for Elementor event_slider
  elementorFrontend.hooks.addAction( 'frontend/element_ready/naevents_tec_event_slider.default', SwiperSliderInit );
  elementorFrontend.hooks.addAction( 'frontend/element_ready/naevents_mec_event_slider.default', SwiperSliderInit );

} );

})(jQuery);