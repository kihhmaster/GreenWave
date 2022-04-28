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
	const videoSlider = new Swiper('.video__slider', {
		speed: 800,
		// autoHeight: true,
		loop: false,
		// autoplay: {
		// 	delay: 3000,
		// },
		slidesPerView: 6,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
		},		
	})
	let internetTariffButton = document.querySelector('.internet__tariff--button')
	let internetMap = document.querySelector('.internet__map')
	let interneMapButton = document.querySelector('.internet__map__button')

	internetTariffButton.addEventListener('click', ()=> {
		internetMap.classList.remove('hidden')
		internetMap.classList.remove('animate__fadeOut')
		internetMap.classList.add('animate__fadeIn')
		
		
	})
	interneMapButton.addEventListener('click', ()=> {
		internetMap.classList.remove('animate__fadeIn')
		internetMap.classList.add('animate__fadeOut')
		setTimeout(hiddenDely, 900);
	})

	function hiddenDely() {
		internetMap.classList.add('hidden')
	}
	
	

	

	///popUP--finifh
})
