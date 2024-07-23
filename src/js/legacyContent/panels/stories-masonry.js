jQuery(function () {
  var $grid = jQuery('.masonry-grid');
  // initalize masonry
  $grid.masonry({
      itemSelector:    '.masonry-item'
    , columnWidth:     '.masonry-item'
    , gutter:          16
    , percentPosition: true
  });
  
  // ping masonry after each image loads
  $grid.imagesLoaded().progress( function() {
    $grid.masonry('layout');
  });
});