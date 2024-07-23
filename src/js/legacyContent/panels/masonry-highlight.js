jQuery(function () {
  var $ = jQuery
    , $grid = $('.masonry-grid')
    , filtering = $( '.topic-filter' ).length
    , highlightClass = 'card--highlight'
  ;

  // initalize masonry
  $grid.masonry({
      itemSelector:    '.masonry-item'
    , columnWidth:     '.masonry-sizer'
    , gutter:          16
    , percentPosition: true
  });
  // ping masonry after each image loads
  $grid.imagesLoaded().progress( function() { $grid.masonry('layout'); } );

  function highlight( $cards, highlightType ) {
    var smallScreen = ( SUNEWS.size() == 'xs' );

    $cards.each( function ( index, card ) {
      var $card      = $(card)
        , breakpoint = SUNEWS.size()
      ;
      $card.attr( 'aria-hidden', 'false' );
      $card.addClass( highlightClass );
      $card.find( 'a, iframe' ).each( function ( idx, elem ) {$( elem ).removeAttr( 'tabindex' ); } );
      if ( highlightType == 'hide' || breakpoint == 'xs' ) {
        $card.css( 'display', 'block' ).css( 'height', 'auto' );
      }
    } );
    $grid.masonry( 'layout' );
  };

  function lowlight( $cards, highlightType ) {
    $cards.each( function ( index, card ) {
      var $card      = $(card)
        , breakpoint = SUNEWS.size()
      ;
      $card.attr( 'aria-hidden', 'true' );
      $card.removeClass( highlightClass );
      $card.find( 'a, iframe' ).each( function ( idx, elem ) {
        $( elem ).attr( 'tabindex', '-1' );
      } );
      if ( highlightType == 'hide' || breakpoint == 'xs' ) {
        $card.css( 'display', 'none' ).css( 'height', '0px' );
      } else {
        $card.css( 'display', 'block' ).css( 'height', 'auto' );
      }
    });
  };

  $('.panel.masonry-highlight .topic-filter input').click( function () {
    var topic          = $(this).attr( 'data-topic' )
      , clickedAll     = topic == 'all'
      , $panel         = $(this).closest('.panel.masonry-highlight')
      , highlightType  = $panel.attr( 'data-highlight' )
      , allCards       = '.panel.card'
      , topicCards     = '.panel.card[data-topic="' + topic + '"]'
    ;
    if ( clickedAll ) {
      highlight( $panel.find( allCards   ), highlightType );
    } else {
      lowlight(  $panel.find( allCards   ), highlightType );
      highlight( $panel.find( topicCards ), highlightType );
    }
  });

  function handleFirstTab(e) {
    if (e.keyCode === 9) {
      document.body.classList.add('user-is-tabbing');

      window.removeEventListener('keydown', handleFirstTab);
      window.addEventListener('mousedown', handleMouseDownOnce);
    }
  }

  function handleMouseDownOnce() {
    document.body.classList.remove('user-is-tabbing');

    window.removeEventListener('mousedown', handleMouseDownOnce);
    window.addEventListener('keydown', handleFirstTab);
  }

  if ( filtering ) {
    window.addEventListener( 'keydown', handleFirstTab );

    $( window ).on( 'resizeEnd', function () {
      $( '.topic-filter' ).find( 'input:checked' ).click();
    } );
  }
});