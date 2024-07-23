// define the SNAPP_Gallery module
// must be loaded at the bottom of the page, after the <div class="pwsp">, because
// waiting for $(document).ready() introduces an unacceptably long delay
var SNAPP_Gallery = (function ($) {
  var gallery   = {} // the module, i.e. the object returned by this anonymous function
    , pswp           // the instance of PhotoSwipe
    , modal          // the DOM element that PhotoSwipe runs in
    , lastFocus      // the element that had focus when PhotoSwipe was launched
    , layout         // style of gallery - currently support 'default' and 'grid'
    ;


  /**
   * private - build the list of gallery items for PhotoSwipe
   * @returns {Array}
   */
  function getItems($gallery) {
    var items = [];
    $gallery.find('figure').each(function () {
      var link     = $(this).children('a')[0]
        , $link    = $(link)
        , $href    = $link.attr('href')
        , $size    = $link.data('size').split('x')
        , $width   = $size[0]
        , $height  = $size[1]
        , $caption = $(this).children('figcaption').html()
        , item = {
              src:   $href
            , w:     $width
            , h:     $height
            , title: $caption
          }
        ;
      items.push(item);
    });
    return items;
  }

  /**
   * private - configure a gallery:
   *   rearrange gallery images into 4 photo grip;
   *   add overlay, count icon, fullscreen button;
   *   register click handlers that launch PhotoSwipe
   * invoked at init time on each $('.t-gallery')
   */
  function initGallery() {
    var $gallery = $(this)
      , items    = getItems($gallery)
      , image    = []
      ;

    $.each(items, function (index, value) {
      image[index] = new Image();
      image[index].src = value['src'];
    });

    if ( layout == 'default' ) {
      var count = $gallery.children('figure').length
        , fourthFig = $gallery.children('figure')[3]
        , fourthA = $(fourthFig).children('a')[0];
      $(fourthA).prepend('<p class="see-all">See all ' + count + ' photos</p>');
      $(fourthFig).nextAll().addClass("hidden");

      $gallery.next('.gallery-counter').append("<i class='fa fa-camera'></i><span class='sr-only'>Photos Total</span> " + count);
      $gallery.next('.gallery-counter').next('.gallery-fullscreen').click(function () {
        $gallery.find('a').eq(0).trigger('click');
      });
    }

    $gallery.on('click', 'a', function (event) {
      event.preventDefault();

      var $index = ( layout == 'default' ) ? 0 : $(this).parent().index(); // $(this).index()
      var options = {
          index: $index
        , bgOpacity: 0.97
        , showHideOpacity: true
      };

      pswp = new PhotoSwipe(modal[0], PhotoSwipeUI_Default, items, options);
      pswp.init();
      pswp.listen('destroy', modalClose);
    });
  };

  /**
   * private - housekeeping when the modal is opened (by clicking an image or the fullscreen button)
   * invoked by clicking on an element that launches the gallery
   * @param event
   */
  function modalOpen(event) {
    event.preventDefault();

    // remember where the focus was when we opened the modal so we can restore it when the modal closes
    lastFocus = $(this);

    // tell screen readers the main page content is currently inaccessible (due to modal)
    $("#su-content, #footer").attr("aria-hidden", "true");

    // constrain tabbing to the modal
    $('a, input, textarea, button, iframe, [tabIndex]').each(function () {
      var element = $(this);
      var tabIndex = element.attr("tabIndex");
      element.attr('tabIndex', -1);
    });
    $(".pswp__button--close, .pswp__button--share, .pswp__button--fs, .pswp__button--zoom, .pswp__button--arrow--left, .pswp__button--arrow--right").attr("tabIndex", 0);

    // tell screen readers about the state of stuff in the modal
    $(".pswp__button--zoom").attr("aria-hidden", "true");
    $(".pswp__item").eq(1).attr("aria-hidden", "true");
    $(".pswp__item").eq(0).attr("aria-hidden", "false");
    $(".pswp__item").eq(2).attr("aria-hidden", "false");
  };

  /**
   * private - restore state when the gallery is closed
   * invoked by 'listen'ing for PhotoSwipe's 'destroy' shout
   */
  function modalClose() {
    // tell screen readers the page content is visible again
    $("#su-content, #footer").attr("aria-hidden", "false");

    // restore tab-ability to onscreen elements
    $('a, input, textarea, button, iframe, .gallery-fullscreen').each(function () {
      var element = $(this);
      element.attr('tabIndex', 0);
    });

    // put the focus back where it was when we opened the modal
    lastFocus.focus();
  };

  /**
   * public - initialize the gallery
   */
  gallery.init = function ( targetLayout ) {
    modal  = $(".pswp");
    layout = targetLayout;

    $('.t-gallery').each(initGallery);
    $(".t-gallery a, .gallery-fullscreen").click(modalOpen);

    // allow keyboard users to use ENTER to click on the fullscreen icon
    $('.gallery-fullscreen').keyup(function(ev){
      if (ev.which == 13) this.click();
    });
  }; // gallery.init()

  return gallery; // return the object that is the module
}(jQuery));

SNAPP_Gallery.init( SNAPP_Gallery_Options.layout ); // invoked immediately, not on DOM ready :( , so load this script at the bottom of the page
