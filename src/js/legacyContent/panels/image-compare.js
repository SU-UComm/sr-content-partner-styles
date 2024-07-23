document.addEventListener('DOMContentLoaded', function() {
  $ = jQuery;

  $(window).bind( 'resizeEnd', function() {
    $('.juxtapose').width( $(window).width() );
  } );

});

// hook up event tracking after juxtapose.js finished building our elements
window.addEventListener( 'load', function( ev ) {
  var $slider      = $( '.panel.image-compare .juxtapose .jx-slider' )
    , $control     = $slider.find( '.jx-control' )
    , $leftImg     = $slider.find( '.jx-left img' )
    , $rightImg    = $slider.find( '.jx-right img' )
    , $leftImgSrc  = $leftImg.attr( 'src' )
  ;

  $slider.attr(   'data-ga-category', 'Image Compare Panel' );
  $control.attr(  'data-ga-action',   'Click slider'        ).attr( 'data-ga-label', $leftImgSrc );
  $leftImg.attr(  'data-ga-action',   'Click left image'    ).attr( 'data-ga-label', $leftImgSrc );
  $rightImg.attr( 'data-ga-action',   'Click right image'   ).attr( 'data-ga-label', $leftImgSrc );

  $control.click(  SUNEWS.trackClick );
  $leftImg.click(  SUNEWS.trackClick );
  $rightImg.click( SUNEWS.trackClick );
});
