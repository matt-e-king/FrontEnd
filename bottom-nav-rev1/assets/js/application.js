$(document).ready(function() {

	/*var pageHeight = $(window).height();
	var adjustedHeight = pageHeight * .70;

	$('.stories-parent').height(adjustedHeight);*/

	$('#stories-slider').carousel({
  		interval: false
	});

	var footerBtn = $('.footer-btn');
	var bottomNav = $('.bottom-nav')[0];

	footerBtn.on('click', function() {
		classie.toggle(this, 'flip');
	});

	/*$('.stories-collapse').on('shown.bs.collapse', function() {
		classie.add(bottomNav, 'bottom-nav-add');
	});

	$('.stories-collapse').on('hidden.bs.collapse', function() {
		classie.remove(bottomNav, 'bottom-nav-add');
	});*/


});