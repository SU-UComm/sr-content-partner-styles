$(function() {
  //Add Modernizr test
  Modernizr.addTest('isios', function(){
    return navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? true : false
  });

  $('[data-video-url]').each(function (i, el) {

    var $this = $(this)
      , videoURL     = $this.data( "video-url" ) + '?rel=0&autoplay=1&autohide=1'
      , theContainer = $this.closest( '.video-container' )
      , theVideo     = theContainer.find( 'video'  )
      , theIframe    = theContainer.find( 'iframe'  )
      , theOverlay   = theContainer.find( '.overlay-content'  )
      ;
    $this.click(function(ev) {
      ev.preventDefault();
      ev.stopPropagation();
      theIframe.attr( 'src', videoURL ).removeClass( 'hidden' );
      theVideo.remove();
      theOverlay.remove();
    });

    if (Modernizr.isios) {
      $this.click();
    }
  });
});
