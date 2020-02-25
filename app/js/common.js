$(window).on('load', function () {
	$('body, html').scrollTop(0)
})
// Animation title block with scroll.
$.fn.isInViewport = function () {
	var breakConstant = 50;

	var elementTop = $(this).offset().top;
	var elementBottom = elementTop + $(this).outerHeight();

	var viewportTop = $(window).scrollTop();
	var viewportBottom = viewportTop + $(window).height();

	return elementBottom > (viewportTop + breakConstant) && (elementTop + breakConstant) < viewportBottom;

};

// AOS
AOS.init({
	duration: 1000,
	once: "true"
});

//Vivus
if ($('#square').length > 0) {
	var startSquare = true;
	$(window).on('resize scroll load', function () {
		if ($('#about').isInViewport()) {
			// $(this).addClass('animation-true');
			if (startSquare) {
				startSquare = false;
				new Vivus('square', {
					type: 'oneByOne',
					duration: 100
				});
			}
		}
	});
}
$('#toggle').on('click', function () {
	mobileMenu(this);
});
//Hamburger.
function mobileMenu($this) {
	var $thisJQ = $($this),
		$wrapperMenu = $('.menu nav'),
		$boxBtn = $('.toggle-wrapper'),
		$body = $('body'),
		$html = $('html');

	if ($thisJQ.hasClass('active')) {
		$wrapperMenu.removeClass('active');
		$thisJQ.removeClass('active');
		$boxBtn.removeClass('active');
		$body.removeClass('hidden');
		$html.removeClass('hidden');
	} else {
		$thisJQ.addClass('active');
		$wrapperMenu.addClass('active');
		$boxBtn.addClass('active');
		$body.addClass('hidden');
		$html.addClass('hidden');

	}
}
$('.toggle-wrapper').on('click', function () {
	mobileMenu($(this).find('#toggle'));
});