$(document).ready(function() {

	/*var pageHeight = $(window).height();
	var adjustedHeight = pageHeight * .70;

	$('.stories-parent').height(adjustedHeight);*/

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

	$('.homepage-circles').on('click', function() {
		classie.add(this, 'active-circle');
		classie.add($('#camera')[0], 'camera-circle-animation');
		classie.add($('#text')[0], 'text-circle-animation');
		classie.add($('#video')[0], 'video-circle-animation');
		var m = setTimeout(function() { 
			classie.add($('#modal-bg-parent')[0], 'in') 
			classie.add($('#featured-modal')[0], 'in') 
		}, 1000);
	});


});