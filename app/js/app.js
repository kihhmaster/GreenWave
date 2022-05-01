// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'
// import '~/node_modules/mmenu-light/dist/mmenu-light.js'
import { Swiper, Parallax, Mousewheel, Pagination, Scrollbar, Navigation, Controller, Autoplay, FreeMode } from 'swiper'
Swiper.use([ Parallax, Mousewheel,  Pagination, Scrollbar, Navigation, Controller, Autoplay, FreeMode] )
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
		freeMode: true,
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
	const tvSlider1 = new Swiper('.tv__slider--1', {
		slidesPerView: 6,
		spaceBetween: 10,
		speed: 2500,
		freeMode: true,
		loop: true,
		pagination: false,
		centeredSlides: true,
		slidesPerView: 'auto',
		autoplay: {
			delay: 0,
			// reverseDirection: true,
		},
		// breakpoints: {
		// 	'1200': {
		// 		slidesPerView: 5,
		// 		spaceBetween: 20,
		// 	},
		// 	'992': {
		// 		slidesPerView: 4,
		// 		spaceBetween: 20,
		// 	},
		// 	'576': {
		// 		slidesPerView: 2,
		// 		spaceBetween: 10,
		// 	},
		// 	'400': {
		// 		slidesPerView: 1,
		// 		spaceBetween: 10,
		// 	},
		// }			
	})
	const tvSlider2 = new Swiper('.tv__slider--2', {
		slidesPerView: 6,
		spaceBetween: 10,
		speed: 2500,
		freeMode: true,
		loop: true,
		pagination: false,
		centeredSlides: true,
		slidesPerView: 'auto',
		autoplay: {
			delay: 0,
			reverseDirection: true,
		},
	
	})
	const tvSlider3 = new Swiper('.tv__slider--3', {
		slidesPerView: 6,
		spaceBetween: 10,
		speed: 2500,
		freeMode: true,
		loop: true,
		pagination: false,
		centeredSlides: true,
		slidesPerView: 'auto',
		autoplay: {
			delay: 0,
			// reverseDirection: true,
		},
		
	})
	const videoSlider = new Swiper('.video__slider', {
		slidesPerView: 5,
		spaceBetween: 30,
		speed: 500,
		freeMode: true,
		loop: true,
		pagination: false,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
		},		
	})
	

	///popUP--finifh
})
