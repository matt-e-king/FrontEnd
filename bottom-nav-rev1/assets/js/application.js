$(document).ready(function() {

	$(".nau-video").fitVids();

	$('#stories-slider').carousel({
  		interval: false
	});

	var footerBtn = $('.footer-btn');
	var bottomNav = $('.bottom-nav')[0]; 
	var bottomLinks = $('.bottom-links')[0]; 

	footerBtn.on('click', function() {
		classie.toggle(this, 'flip');
	});

	$('.stories-collapse').on('shown.bs.collapse', function() {
		classie.add(bottomLinks, 'in');
	});

	$('.stories-collapse').on('hide.bs.collapse', function() {
		classie.remove(bottomLinks, 'in');
	});


});