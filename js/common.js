$(document).ready(function(){
  $('.sliders').slick({
  	prevArrow: '<i class="fa fa-angle-left" aria-hidden="true"></i>',
	nextArrow: '<i class="fa fa-angle-right" aria-hidden="true"></i>'
  });
  // $('.mob-menu').click(function(e){
	// e.preventDefault();
	// $('#overlay').css('display', 'block');
	// $('nav').addClass('dbbl');
	// $('body').css('overflow', 'hidden');
	// $('.of_wrap').css('overflow', 'hidden');
  // });
  $('.mob-menu').click(function(e){
  e.preventDefault();
  $('#overlay').toggleClass('dbbl');
  $('nav').toggleClass('dbbl');
  $('body').toggleClass('ovrlhdn');
  $('.of_wrap').toggleClass('ovrlhdn');
  });
  $('#overlay').click(function(e){
  	$('nav').toggleClass('dbbl');
  	$(this).toggleClass('dbbl');
  	$('body').toggleClass('ovrlhdn');
  	$('.of_wrap').toggleClass('ovrlhdn');
  });

});
