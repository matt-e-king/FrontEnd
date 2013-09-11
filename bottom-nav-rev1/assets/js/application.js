$(document).ready(function() {

	/*var pageHeight = $(window).height();
	var adjustedHeight = pageHeight * .70;

	$('.stories-parent').height(adjustedHeight);*/

	$('#stories-slider').carousel({
  		interval: false
	});

	var footerBtn = $('.footer-btn');

	footerBtn.on('click', function() {
		classie.toggle(this, 'flip');
	});


});