// AOS
AOS.init({
	duration: 1000,
	once: "true"
});

$('.faq-item .faq-item-header').on('click', function () {
	if ($(this).hasClass('active')) {
		$(this).removeClass('active');
		$(this)
			.siblings('.faq-item-content')
			.slideUp(200);
	} else {
		$('.faq-item .faq-item-header').removeClass('active');
		$(this).addClass('active');
		$('.faq-item-content').slideUp(200);
		$(this)
			.siblings('.faq-item-content')
			.slideDown(200);
	}
});

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