
$(function() {

	let hamburger = $('#hamburger-icon');
	let nav = $('header nav');
  hamburger.click(function() {
     hamburger.toggleClass('active');
     // nav.toggleClass('active');
     // $('nav').toggleClass('active');
     return false;
  });

  $(window).scroll(function() {
    if ($(this).scrollTop() > $(this).height()) {
      $('.top-btn').addClass('active');
    } else {
      $('.top-btn').removeClass('active')
    }
  });

  $('.top-btn').click(function() {
    $('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing');
  });

  $('#hamburger-icon').click(function(){
     $('.mtoggle').toggleClass('active')
   });

  $(function () {
  $('.fotorama').fotorama();
});
});
