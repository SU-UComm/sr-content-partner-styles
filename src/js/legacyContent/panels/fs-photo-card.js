document.addEventListener('DOMContentLoaded', function() {
    $ = jQuery;
  
    // Added to Fix slides:
    if ($('.slide').length === 0){ return false; }

    $('.slide').each( function( idx, elem ) {
      var elemId       = $(elem).attr('id')
        , expandText   = ( typeof(fsPhotoCardOpts)=='object' && typeof(fsPhotoCardOpts[elemId]=='object' ) ) ? fsPhotoCardOpts[elemId]['expandText']   : 'Continue Reading'
        , collapseText = ( typeof(fsPhotoCardOpts)=='object' && typeof(fsPhotoCardOpts[elemId]=='object' ) ) ? fsPhotoCardOpts[elemId]['collapseText'] : 'Collapse'
        , expandLink   = '<a href="#">' + expandText   + ' <span class="fa fa-chevron-down"></span></a>'
        , collapseLink = '<a href="#">' + collapseText + ' <span class="fa fa-chevron-up"></span></a>'
        , readmoreElem = $(elem).find('.slide-content')
      ;
  
      if ($(window).width() < 640) {
        $(readmoreElem).readmore({
          startOpen:    false,
          embedCSS:     false,
          moreLink:     expandLink,
          lessLink:     collapseLink,
          beforeToggle: function (trigger, element, expanded) {
            if (expanded) { // The "Close" link was clicked
              $('html, body').animate({scrollTop: element.offset().top - 150}, {duration: 300});
            }
          },
          afterToggle: function( trigger, element, expanded ) {
            element.css("height","");
            element.css("max-height","");
          }
        });
  
      } else {
  
        $(readmoreElem).readmore({
          startOpen:    true,
          embedCSS:     false,
          moreLink:     expandLink,
          lessLink:     collapseLink,
          beforeToggle: function (trigger, element, expanded) {
            if (expanded) { // The "Close" link was clicked
              $('html, body').animate({scrollTop: element.offset().top - 150}, {duration: 300});
            }
          },
          afterToggle: function( trigger, element, expanded ) {
              element.css("height","");
              element.css("max-height","");
          }
        });
      }
    });
  
  } );
  
  window.addEventListener('load', function() {
    $ = jQuery;
  
    // Added to Fix slides:
    if ($('.slide').length === 0){ return false; }

    var logToConsole = window.location.host != "news.stanford.edu"; // log everywhere but production
    function maybeLog( msg ) { if ( logToConsole ) console.log( msg ); }
  
    maybeLog('initialize photo card styles...');
  
    $( '.slide .slide-content' ).removeClass('fixed relative initial').css("height","").css("max-height","");
    $( '.slide .slide-image'   ).removeClass('initial');
  
    /**
     ** ----------------------------------------------------------------------------
     ** Slide choreography with Waypoints
     **/
  
    maybeLog('initialize waypoints...');
  
    Waypoint.refreshAll();
  
    var waypoints = $('.slide').waypoint(function(direction) {
  
      maybeLog( '----\n' + this.element.id + ' hit 0% from top of window, going ' + direction);
  
      var slideContent = '#' + this.element.id + ' .slide-content',
          slideImage   = '#' + this.element.id + ' .slide-image'
      ;
  
      if (direction == 'down') {
        $( slideContent ).removeClass('fixed relative');
        maybeLog( slideContent + ' - remove .fixed.relative');
        $( slideImage ).addClass('fixed-bg');
        maybeLog( slideImage + ' - add .fixed-bg');
      }
  
      if (direction == 'up') {
        $( slideContent ).addClass('fixed').css('top', '');
        maybeLog( slideContent + ' - add .fixed');
        $( slideImage ).removeClass('fixed-bg');
        maybeLog( slideImage + ' - remove .fixed-bg');
      }
  
    }, {
      offset: '0%'
    });
  
    var waypoints = $('.slide').waypoint(function(direction) {
      maybeLog( '----\n' + '#' + this.element.id + ' hit 100% - 100 from top of window, going ' + direction );
  
      var slideContent = '#' + this.element.id + ' .slide-content';
  
      if ( direction == 'down' ) {
        $( slideContent ).removeClass('relative').addClass( 'fixed' );
        maybeLog( slideContent + ' - remove .relative, add .fixed' );
      }
      else if ( direction == 'up' ) {
        $( slideContent ).removeClass('fixed').addClass('relative');
        maybeLog( slideContent + ' - remove .fixed, add .relative' );
      }
    }, {
      offset: function() {
        return $(window).height() - 100;
      }
    });
  
    var waypoints = $('.slide').waypoint(function(direction) {
      maybeLog( '----\n' + this.element.id + ' hit 100% from top of window, going ' + direction );
  
      var slideContent = '#' + this.element.id + ' .slide-content';
  
      if (direction == 'down') {
        $( slideContent ).removeClass('fixed initial').addClass('relative');
        maybeLog( slideContent + ' - remove .fixed.initial, add .relative');
      }
  
      if (direction == 'up') {
        //$( slideContent ).addClass('fixed');
        //maybeLog( slideContent + ' - add .fixed');
      }
    }, {
      offset: '100%'
    });
  
  
    $(window).bind( 'resizeEnd', function() {
  
      $( '.slide' ).each(function() {
        // temporarily stores current classes as data attributes
        $( '.slide-content.fixed' ).attr( 'data-fixed', 'fixed' );
        $( '.slide-content.relative' ).attr( 'data-relative', 'relative' );
        // temporarily removes current state
        $( '.slide-content' ).removeClass( 'fixed').removeClass('relative' ).removeClass('initial');
      });
  
      // refreshes waypoint markers
      Waypoint.refreshAll();
  
      $( '.slide' ).each(function() {
        // restores state values after refreshing waypoints
        $( '[data-fixed="fixed"]').addClass('fixed').removeAttr( 'data-fixed', 'fixed' );
        $( '[data-relative="relative"]').addClass('relative').removeAttr( 'data-relative', 'relative' );
      });
  
      maybeLog( "----\nrefresh waypoints after browser is done resizing." );
    } );
  
    /**
     ** End Slide Choreography
     ** ----------------------------------------------------------------------------
     **/
  
    /**
     ** ----------------------------------------------------------------------------
     ** Show slide content when deep-linking to a specific slide.
     ** Only do this when content overlays the photo card, i.e. when the window.width >= 640.
     **/
  
    if ( window.location.hash.length > 1 && $(window).width() >= 640 ) { //
      maybeLog( '----\nreacting to location.hash ' + window.location.hash + '...' );
  
      var $slide = $( window.location.hash );
      if ( $slide.length && $slide.hasClass( 'slide' ) ) { // if we deep-linked to an actual slide
        maybeLog( 'starting on slide ' + window.location.hash.substr( 1 ) );
        var $slideImage   = $slide.find( '.slide-image' ),
            $slideContent = $slide.find( '.slide-content' ),
            scHeight      = $slideContent.height() - parseInt( $slideContent.css( 'padding-bottom' ) ),
            winHeight     = window.innerHeight - 125, // -125 gives us little space between the top of the content and the top of the viewport
            scrollBy      = ( scHeight < winHeight ) ? scHeight : winHeight
        ;
        $slideImage.addClass( 'fixed-bg' ); // do this now here to keep the slide below from partially displaying when slide content is short
        maybeLog( 'added .fixed-bg to slide image' );
        setTimeout( function () { // Firefox seems to need a few milliseconds to settle before we scroll the slide-content into view
          maybeLog( '----\nscrolling slide content into view - scrollBy = ' + scrollBy + 'px' );
          $( 'html,body' ).stop().animate( { scrollTop: '+=' + scrollBy }, 350 );
        }, 50 );
      }
    }
  
  } );