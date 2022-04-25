// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'
// import '~/node_modules/mmenu-light/dist/mmenu-light.js'
import { Swiper, Parallax, Mousewheel, Pagination, Scrollbar, Navigation, Controller, Autoplay} from 'swiper'
Swiper.use([ Parallax, Mousewheel, Pagination, Scrollbar, Navigation, Controller, Autoplay ])
document.addEventListener('DOMContentLoaded', () => {
	let cross = document.querySelector('.cross'),
	    overlay = document.querySelector('.overlay'),
			hamburger = document.querySelector('.hamburger--img')

	hamburger.addEventListener('click', ()=>{
	overlay.style.display = "flex"
	});

	cross.addEventListener('click', ()=>{
	overlay.style.display = "none"
	});
	// Custom JS

	const sliderTop = new Swiper('.slider__top', {
		speed: 800,
		// autoHeight: true,
		loop: false,
		autoplay: {
			delay: 3000,
		},
		slidesPerView: 1,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
		},		
	})

})
