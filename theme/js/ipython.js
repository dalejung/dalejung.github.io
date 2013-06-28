function toggleImageSize() {
  $('div.ipynb img').bind('click', function(e) {
    var par = $(this)[0].parentNode;
    if ($(this).hasClass('fullsize')) {
      $(this).removeClass('fullsize');
    } else {
      $(this).addClass('fullsize');
    }
  });
}

$.domReady(function() {
  toggleImageSize();
})
