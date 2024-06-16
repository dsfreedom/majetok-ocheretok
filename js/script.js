$(document).ready(function() {
  function adjustHeaderHeight() {
    var topBarHeight = $('.top-bar').outerHeight();
    $('.header').css('height', 'calc(100vh - ' + topBarHeight + 'px)');
  }

  $(window).on('resize', adjustHeaderHeight);
  adjustHeaderHeight();
});
