const swiper = new Swiper('.latest__slider', {
	slidesPerView: 3,
	spaceBetween: 60,
	loop: true,
	navigation: {
		nextEl: '.arrow__right',
		prevEl: '.arrow__left',
	},
});