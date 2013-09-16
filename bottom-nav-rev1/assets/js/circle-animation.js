var homePageAnimation = function(circleObjs) {
  
  this.circleObjs = circleObjs;

  this.init();

}

homePageAnimation.prototype = {

	init : function() {

		var that = this;

		this.createCircles();

		//listeners
		$('.homepage-circles').on('click', function() {
			that.animate($(this)[0]);
		});

	}

	, createCircles : function() {

		var that = this;

		//builds the homepage circle buttons 
	    $.each(that.circleObjs, function(i, item) {

	    	$('body').prepend("<button type='button' id='"+item.type+"' href='#"+item.type+"-tab' data-toggle='tab' class='homepage-circles circle-hover btn btn-default hidden-xs' style='left:"+item.x+"; top:"+item.y+";'><i class='"+item.icon+"'></i></button>");

	  	});

	}

	, animate : function(that) {

		classie.add(that, 'active-circle');
		classie.add($('#featured-modal')[0], 'layer-two');
		classie.add($('#modal-bg-parent')[0], 'layer-one'); 
		classie.add($('#camera')[0], 'layer-three');
		classie.remove($('#camera')[0], 'circle-hover');
		classie.add($('#video')[0], 'layer-three');
		classie.remove($('#video')[0], 'circle-hover');
		classie.add($('#article')[0], 'layer-three');
		classie.remove($('#article')[0], 'circle-hover');
		classie.add($('#camera')[0], 'camera-circle-animation');
		classie.add($('#article')[0], 'article-circle-animation');
		classie.add($('#video')[0], 'video-circle-animation');
		var m = setTimeout(function() { 
			classie.add($('#modal-bg-parent')[0], 'in') 
			classie.add($('#featured-modal')[0], 'in') 
		}, 1000);

	}

}


  	//end of building circles on homepage