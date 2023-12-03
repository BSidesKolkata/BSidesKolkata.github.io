jQuery(document).ready(function($) {
  "use strict";
  
  //Naeep Hover Script
  $('.naeep-upcoming-day, .event-info-item, .naeep-price-item, .naeep-service-item, .naeep-news-item, .naeep-gallery-item, .naeep-contact-item, .naeep-team-item, .naeep-testimonial-item, .naeep-video-wrap, .naeep-history-item, .naeep-event-item, .naeep-ticket-item').hover (
    function() {
      $(this).addClass('naeep-hover');
    },
    function() {
      $(this).removeClass('naeep-hover');
    }
  );

  //Naeep Team Hover Script
  $('.trigger-icon').on ({
    mouseenter : function() {
      $(this).parents(".naeep-team-item").addClass('icon-trigger');
    },
    mouseleave : function() {
      $(this).parents(".naeep-team-item").removeClass('icon-trigger');
    }
  });

  //Owl Carousel Slider Script
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
      autoplaySpeed : ($carousel.data('autoplay-speed') !== undefined) ? $carousel.data('autoplay-speed') : false,
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
      slideTransition: 'linear',
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

  // Match Height Script
  $('.naeep-item').matchHeight();

  //Naeep Masonry Script
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

  //Naeep Popup Picture Script
  $('.naeep-popup').magnificPopup ({
    delegate: 'a',
    type: 'image',
    closeOnContentClick: false,
    closeBtnInside: false,
    mainClass: 'mfp-with-zoom mfp-img-mobile',
    closeMarkup:'<div class="mfp-close" title="%title%"></div>',
    image: {
      verticalFit: true,
      titleSrc: function(item) {
        return item.el.attr('title') + ' &middot; <a class="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank">image source</a>';
      }
    },
    gallery: {
      enabled: true,
      arrowMarkup:'<div title="%title%" class="mfp-arrow mfp-arrow-%dir%"></div>',
    },
    zoom: {
      enabled: true,
      duration: 300,
      opener: function(element) {
        return element.find('*');
      }
    }
  });

  //Naeep Magnific Popup Video Script
  $('.naeep-popup-video').magnificPopup ({
    mainClass: 'mfp-fade',
    type: 'iframe',
    closeMarkup:'<div class="mfp-close" title="%title%"></div>',
    iframe: {
      patterns: {
        youtube: {
          index: 'youtube.com/', 
          id: function(url) {        
            var m = url.match(/[\\?\\&]v=([^\\?\\&]+)/);
            if ( !m || !m[1] ) return null;
            return m[1];
          },
          src: 'https://www.youtube.com/embed/%id%?autoplay=1'
        },
        vimeo: {
          index: 'vimeo.com/', 
          id: function(url) {        
            var m = url.match(/(https?:\/\/)?(www.)?(player.)?vimeo.com\/([a-z]*\/)*([0-9]{6,11})[?]?.*/);
            if ( !m || !m[5] ) return null;
            return m[5];
          },
          src: 'https://player.vimeo.com/video/%id%?autoplay=1'
        },
        dailymotion: {
          index: 'dailymotion.com/',
          id: function(url) {        
            var m = url.match(/^.+dailymotion.com\/(video|hub)\/([^_]+)[^#]*(#video=([^_&]+))?/);
            if ( !m || !m[2] ) return null;
            return m[2];
          },
          src: 'https://iframespot.blogspot.com/ncr/?m=0&type=dv&url=https%3A%2F%2Fwww.dailymotion.com%2Fembed%2Fvideo%2F%id%%3Fapi%3D0%26autoplay%3D1%26info%3D0%26logo%3D0%26social%3D0%26related%3D0'
        }
      }
    }
  });
  if ($('div').hasClass('naeep-popup')) {
    $('.naeep-popup').find('a').attr("data-elementor-open-lightbox","no");
  }
  //Naeep Add Class In Previous Items
  $('.naeep-process-item').hover(function() {
    $(this).prevAll('.naeep-process-item').toggleClass('process-done');
    $(this).toggleClass('process-done');
  });

  $('.naeep-tab-links a').on('click', function(e) {
    var currentAttrValue = $(this).attr('href');

    // Show/Hide Tabs
    $('.naeep-tab-content ' + currentAttrValue).fadeIn(400).siblings().hide().stop(true, true);

    // Change/remove current tab to active
    $(this).parent('li').addClass('active').siblings().removeClass('active');

    // Match Height Script
    $('.naeep-item').matchHeight();

    e.preventDefault();
  });

  setTimeout(function() {
    $('.naeep-cta').addClass('active');
  }, 6000);
  $('.cta-close').click(function() {
    $('.naeep-cta').fadeOut('normal', function() {
      $(this).remove();
      $('.naeep-cta').removeClass('active');
    });
  });

  $(window).load(function() {
    if($('div').hasClass('swiper-slides')) {
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
    }
  });

  //Sticky Sidebar Script
  $('.proeep-sticky-sidebar').theiaStickySidebar ({
    additionalMarginTop: 150,
  });

});