var Expand = (function() {
	"use strict";
	
	var body = $('body'),
		winWidth = $(window).width(),
		winHeight = $(window).height(),
		tile = $('.strips__strip'),
		tileHeader = $('.strips__strip .strip__header'),
		tileLink = $('.strips__strip > .strip__content'),
		tileText = tileLink.find('.strip__inner-content'),
		stripClose = $('.strip__close');

	var expanded  = false;

	var open = function() {
		var tile = $(this).parent();
		var ExpandedtileHeight = tile.find('.strip__inner-content').height();

		if (!expanded) {
			body.addClass('section-expanded');
			tile.addClass('strips__strip--expanded');
			
			// add delay to inner text
			tileText.css('transition', 'all .5s .3s cubic-bezier(0.23, 1, 0.32, 1)');
			tileHeader.fadeOut('fast');
			stripClose.addClass('strip__close--show');
			stripClose.css('transition', 'all .6s 1s cubic-bezier(0.23, 1, 0.32, 1)');
			expanded = true;

			if ( $(this).find('.strip__inner-content').height() > winHeight && winWidth >= 992  ) {
				$('body').addClass('content-expanded');
			}
		}
	}

	var close = function() {
		if (expanded) {
			body.removeClass('section-expanded');
			tile.removeClass('strips__strip--expanded');
			
			// remove delay from inner text
			tileText.css('transition', 'all 0.15s 0 cubic-bezier(0.23, 1, 0.32, 1)');
			tileHeader.fadeIn('fast');
			stripClose.removeClass('strip__close--show');
			stripClose.css('transition', 'all 0.2s 0s cubic-bezier(0.23, 1, 0.32, 1)');
			$('[data-toggle="popover"]').popover('hide');
			expanded = false;

			$('body').removeClass('content-expanded');
		}
	}

	var bindActions = function() {
		tileLink.on('click', open);
		stripClose.on('click', close);
	}

	var init = function() {
		bindActions();
	}

	return {
		init: init
	}

}());

Expand.init();