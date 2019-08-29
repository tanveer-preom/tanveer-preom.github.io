jQuery(window).on('load', function() {
	"use strict";

	jQuery('.preloader-wrapper').fadeOut('slow');
});


(function() {
	"use strict";


	// Triggering PopOver
	$('[data-toggle="popover"]').popover();

	
	// Triggering Carousel Slider
	$('.carousel').carousel({interval: false});

	
	// Triggering Tooltip
	$('[data-toggle="tooltip"]').tooltip();


	// Owl Carousel - Blog Caorusel
	if (!$('#blog-section').hasClass('strips__strip--expanded')) {
		$('#blog-section .strip__content').on('click', function() {

			function owlCarousel() {
				
				$('#blog-carousel').owlCarousel({
					loop:true,
					margin:15,
					nav:true,
					navText: ['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>'],
					responsive:{
						0:{ items:1 },
						800:{ items:2 },
						1200:{ items:3 },
					}
				});

				$('[data-toggle="tooltip"]').tooltip();

			}
			setTimeout(owlCarousel, 400);

		});
	}


	var winWidth = $(window).width();
	var resumeCarousel = $('#resume-carousel');

	// Owl Carousel - Resume Caorusel
	if ( winWidth >= 1000) {
		if (!$('#resume-section').hasClass('strips__strip--expanded')) {
			$('#resume-section .strip__content').on('click', function() {

				function owlCarousel() {

					resumeCarousel.owlCarousel({
						loop:false,
						margin:15,
						nav:true,
						navText: ['<i class="fa fa-chevron-left fa-2x"></i>','<i class="fa fa-chevron-right fa-2x"></i>'],
						items: 1
					});

				}
				setTimeout(owlCarousel, 400);

			});
		}
		resumeCarousel.on('changed.owl.carousel', function(event) {
			$('.progress-counter').counterUp({
				delay: 10,
				time: 1000
			});
		});
	} else {
		$('.progress-counter').counterUp({
			delay: 10,
			time: 1000
		});
	}



	// Portfolio Hexagon Function
	function u(a) {
		g(a.find("canvas.hex")[0].getContext("2d"), a.find("img")[0], 0);
		j || g(a.find("canvas.circ")[0].getContext("2d"), a.find("img")[0], 0);
		if (!j) {
			var c = a.find("canvas.bang")[0].getContext("2d");
			a.find("img");
			c.clearRect(0, 0, 200, 195);
			c.save();
			c.beginPath();
			c.moveTo(108.5, 4);
			c.arcTo(186, 49.5, 186, 73.5, 24);
			c.arcTo(186, 144.5, 162, 168.5, 24);
			c.arcTo(99.5, 198, 89.5, 192, 24);
			c.arcTo(13, 148.5, 13, 120.5, 24);
			c.arcTo(13, 51.5, 37, 30.5, 24);
			c.arcTo(93.5, 2, 109.5, 2, 24);
			c.closePath();
			c.clip();
			c.fillStyle = "rgba(0,0,0,.85)";
			c.fill();
			c.restore()
		}
		a.find("img").css("display", "none");
		a.data({
			step: 0
		});
		j || a.on('hover', function () {
			var c = a.find("canvas.hex")[0].getContext("2d"),
				b = a.find("img")[0],
				d = a.data("step"),
				e = $(this);
			Jacked.special(this, {
				callback: function (a, f) {
					d = 70 * f;
					g(c, b, d);
					e.data("step", d)
				}
			})
		}, function () {
			var c = a.find("canvas.hex")[0].getContext("2d"),
				b = a.find("img")[0],
				d = a.data("step"),
				e = $(this);
			Jacked.special(this, {
				callback: function (a, f) {
					d = 70 - 70 * f;
					g(c, b, d);
					e.data("step", d)
				}
			})
		})
	}
	function g(a, c, b) {
		a.clearRect(0, 0, 200, 195);
		a.save();
		a.beginPath();
		a.moveTo(108.5, 4);
		a.arcTo(186, 49.5, 186, 73.5, 24);
		a.arcTo(186 - b / 2, 144.5 - b / 2, 162 - b, 168.5 - b / 2, 24);
		a.arcTo(99.5 - b, 198 - b / 2 - b / 8.75, 89.5 - b, 192 - b / 2, 24);
		a.arcTo(13, 148.5, 13, 120.5, 24);
		a.arcTo(13, 51.5, 37, 30.5, 24);
		a.arcTo(93.5, 2, 109.5, 2, 24);
		a.closePath();
		a.clip();
		a.drawImage(c, 0, 0);
		a.restore()
	}
	$(".portfolio-hexagon").children("div").each(function () {
		$(this).find("img")[0].complete ? (
			$(this).find('a').prepend('<canvas class="hex" width="200" height="195"></canvas>'),
			g($(this).find("canvas")[0].getContext("2d"), $(this).find("img")[0], 0),
			$(this).find("img").css("display", "none")) : $(this).find("img").on('load', function () {
				$(this).parent().append('<canvas class="hex" width="200" height="195"></canvas>');
				g($(this).parent().find("canvas")[0].getContext("2d"),
					$(this).parent().find("img")[0], 0);
					$(this).css("display", "none")
		})
	});

	// Initiating Isotope to Portfolio (Hexagon)
	if (!$('#portfolio-section').hasClass('strips__strip--expanded')) {
		$(this).find('.strip__content').on('click', function() {
			function isotope() {

				$('.portfolio-items').isotope({
					itemSelector: '.portfolio-item',
					layoutMode: 'fitRows',
					percentPosition: true,
				});

			}
			setTimeout(isotope, 600);
		});
	}
	// Isotope Portfolio filter buttons
	$('.filter-button-group').on( 'click', 'button', function() {
		var filterValue = $(this).attr('data-filter');

		$('.filter-button-group button').removeClass('active');
		$(this).addClass('active');
		$('.portfolio-items').isotope({ filter: filterValue });
	});
	
	// Initiating Portfolio Lightbox - Simple-Lightbox
	var portfolioItems = $('.portfolio-items .portfolio-item a');
	var portfolioLightbox = portfolioItems.simpleLightbox({
		closeText		:	'<i class="fa fa-close fa-2x"></i>',
		navText			:	['<i class="fa fa-chevron-left fa-2x"></i>','<i class="fa fa-chevron-right fa-2x"></i>'],
		captionSelector	:	'h2'
	});
	portfolioItems.on('show.simplelightbox', function() {
		// Hide Close & Nav button on lightbox open
		$('.strip__close--show').fadeOut('fast');
		$('.floating-nav').fadeOut('fast');

		$('.el__close-btn').fadeOut('fast'); // v3-template close btn
		
		//console.log('Modal Opened');
	});
	portfolioItems.on('closed.simplelightbox', function() {
		// Show Close & Nav button on lightbox close
		$('.strip__close--show').fadeIn('fast');
		$('.floating-nav').fadeIn('fast');

		$('.el__close-btn').fadeIn('fast'); // v3-template close btn

		//console.log('Modal Closed');
	});


	// Iniating Floating Nav
	var active1 = false;
	var active2 = false;
	var active3 = false;
	var active4 = false;

	$('.floating-nav').on('click', function() {
		$(this).find('.fa-bars').toggleClass('hidden');
		$(this).find('.fa-close').toggleClass('hidden');

		$(this).next('.nav-overlay').delay(1000).fadeToggle('fast');
		$('.strip__close--show').delay(1000).fadeToggle('fast');
	
		if (!active1) $(this).find('.icon01').css({'opacity':'1', 'transform': 'translate(0px,125px)'});
			else $(this).find('.icon01').css({'opacity':'0', 'transform': 'none'}); 
		if (!active2) $(this).find('.icon02').css({'opacity':'1', 'transform': 'translate(60px,105px)'});
			else $(this).find('.icon02').css({'opacity':'0', 'transform': 'none'});
		if (!active3) $(this).find('.icon03').css({'opacity':'1', 'transform': 'translate(105px,60px)'});
			else $(this).find('.icon03').css({'opacity':'0', 'transform': 'none'});
		if (!active4) $(this).find('.icon04').css({'opacity':'1', 'transform': 'translate(125px,0px)'});
			else $(this).find('.icon04').css({'opacity':'0', 'transform': 'none'});
		
		active1 = !active1;
		active2 = !active2;
		active3 = !active3;
		active4 = !active4;	  
	});


	// jScrollPane
	if ( winWidth >= 1000) {

		//$('.scroll-pane').jScrollPane();
		$('.modal').on('shown.bs.modal', function (e) { // This event fires immediately when the show instance method is called. If caused by a click, the clicked element is available as the relatedTarget property of the event.
			var mouse_scroll = $('.mouse_scroll');
			mouse_scroll.delay(600).fadeIn('slow');

			$('.scroll-pane').bind('jsp-scroll-y', function(event, scrollPositionY, isAtTop, isAtBottom) {
				if(scrollPositionY > 150) { 
					mouse_scroll.fadeOut('slow');
				}
			}).jScrollPane();
		});
		
	}


	// SVG Interactive Map
	var forEach = function(array, callback, scope) {
		for (var i = 0; i < array.length; i++) {
			callback.call(scope, i, array[i]); // passes back stuff we need
		}
	};
	var randomIntFromInterval = function(min, max) { return Math.floor(Math.random() * (max - min + 1) + min); }
	var $mapPins = document.querySelectorAll('#map-shape g');

	/* Setup timelines attached to each map pin */
	forEach($mapPins, function(index, value) {
		/* Group opacity timeline */
		value.groupTimeline = new TimelineMax({
			paused: true
		});
		value.groupTimeline
			.to(value, 0.25, {
				opacity: 0
			});
		/* Pulse animation */
		var pinTimeline = new TimelineMax({
			repeat: -1,
			delay: randomIntFromInterval(1, 3),
			repeatDelay: randomIntFromInterval(0, 1)
		});
		pinTimeline.
		to(value.querySelector('.Pin-back'), 3, {
			scale: 50,
			transformOrigin: 'center center',
			opacity: 0
		});
	});

	forEach(document.querySelectorAll('.js-location-nav [data-location]'), function(index, value) {
		value.addEventListener('mouseenter', function(e) {
			var location = e.target.getAttribute('data-location');
			/* Hide other map pins */
			forEach($mapPins, function(index, value) {
				if (value.getAttribute('data-location') !== location) {
					value.groupTimeline.play();
				}
			});
		}, false);
		value.addEventListener('mouseleave', function(e) {
			/* Reverse all hidden map pins */
			forEach($mapPins, function(index, value) {
				value.groupTimeline.reverse();
			});
		}, false);
	});


})(jQuery);