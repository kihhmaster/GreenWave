// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'
// import '~/node_modules/mmenu-light/dist/mmenu-light.js'
import { Swiper, Parallax, Mousewheel, Pagination, Scrollbar, Navigation, Controller, Autoplay, FreeMode } from 'swiper'
Swiper.use([ Parallax, Mousewheel,  Pagination, Scrollbar, Navigation, Controller, Autoplay, FreeMode] )
document.addEventListener('DOMContentLoaded', () => {

	// Custom JS

	const sliderTop = new Swiper('.slider__top', {
		speed: 800,
		// autoHeight: true,
		loop: true,
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
			clickable: true,
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
		setWrapperSize: true,
		autoplay: {
			delay: 0,
			// reverseDirection: true,
		},		
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
		setWrapperSize: true,
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
		setWrapperSize: true,
		autoplay: {
			delay: 0,
			// reverseDirection: true,
			disableOnInteraction: true,
		},
		freeModeMomentum: false,
		
	})
	const videoSlider = new Swiper('.video__slider', {
		spaceBetween: 30,
		speed: 600,
		freeMode: true,
		loop: true,
		pagination: false,
		initialSlide: 0,
		setWrapperSize: true,
		centeredSlides: true,
		slidesPerView: 'auto',
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		// autoplay: {
		// 	delay: 3000,
		// },
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			clickable: true,
		},		
	})
	
	///popUP--finifh
		// accordions
		const accordions = document.querySelectorAll(".accordion");

		const openAccordion = (accordion) => {
			const content = accordion.querySelector(".accordion__content");
			accordion.classList.add("accordion__active");
			content.style.maxHeight = content.scrollHeight + "px";
		};
	
		const closeAccordion = (accordion) => {
			const content = accordion.querySelector(".accordion__content");
			accordion.classList.remove("accordion__active");
			content.style.maxHeight = null;
		};
	
		accordions.forEach((accordion) => {
			const intro = accordion.querySelector(".accordion__intro");
			const content = accordion.querySelector(".accordion__content");
	
			intro.onclick = () => {
				if (content.style.maxHeight) {
					closeAccordion(accordion);
				} else {
					accordions.forEach((accordion) => closeAccordion(accordion));
					openAccordion(accordion);
				}
			};
		});
	
		// accordions
})
