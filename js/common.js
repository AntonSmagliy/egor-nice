$(document).ready(function(){
  $('.sliders').slick({
  	prevArrow: '<i class="fa fa-angle-left" aria-hidden="true"></i>',
	nextArrow: '<i class="fa fa-angle-right" aria-hidden="true"></i>'
  });
  $('.mob-menu').click(function(e){
	e.preventDefault();
	$('#overlay').css('display', 'block');
	$('nav').addClass('dbbl');
	$('body').css('overflow', 'hidden');
	$('.of_wrap').css('overflow', 'hidden');
  });
  $('#overlay').click(function(e){
  	$('nav').removeClass('dbbl');
  	$(this).css('display', 'none');
  	$('body').css('overflow', 'auto');
  	$('.of_wrap').css('overflow', 'auto');
  });
  	
});
	