
$(function() {

	let hamburger = $('#hamburger-icon');
	let nav = $('header nav');
  hamburger.click(function() {
     hamburger.toggleClass('active');
     // nav.toggleClass('active');
     // $('nav').toggleClass('active');
     return false;
  });

  $('#hamburger-icon').click(function(){
     $('.mtoggle').toggleClass('active')
   });

  $(function () {
  $('.fotorama').fotorama();
});
});
