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
		autoplay: {
			delay: 3000,
		},
		// slidesPerView: 3,
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
	
	

	///popUP
	let popupBg = document.querySelector('.popup__bg'); // Фон попап окна
	let popupBgTwo = document.querySelector('.popup__bg__two'); // Фон попап окна
	let popup = document.querySelector('.popup'); // Само окно
	let popupTwo = document.querySelector('.popupTwo'); // Само окн
	let openPopupButtons = document.querySelectorAll('.open-popup'); // Кнопки для показа окна
	let openPopupButtonsTwo = document.querySelectorAll('.open-popup__two'); // Кнопки для показа окна
	let closePopupButton = document.querySelector('.close-popup'); // Кнопка для скрытия окна
	let closePopupButtonTwo = document.querySelector('.close-popup__two'); // Кнопка для скрытия окна

	openPopupButtons.forEach((button) => { // Перебираем все кнопки
    button.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
        e.preventDefault(); // Предотвращаем дефолтное поведение браузера
        popupBg.classList.add('active'); // Добавляем класс 'active' для фона
        popup.classList.add('active'); // И для самого окна
    })
	});
	openPopupButtonsTwo.forEach((button) => { // Перебираем все кнопки
    button.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
        e.preventDefault(); // Предотвращаем дефолтное поведение браузера
        popupBgTwo.classList.add('active'); // Добавляем класс 'active' для фона
        popupTwo.classList.add('active'); // И для самого окна
    })
	});
	closePopupButton.addEventListener('click',() => { // Вешаем обработчик на крестик
    popupBg.classList.remove('active'); // Убираем активный класс с фона
    popup.classList.remove('active'); // И с окна
	});
	closePopupButtonTwo.addEventListener('click',() => { // Вешаем обработчик на крестик
    popupBgTwo.classList.remove('active'); // Убираем активный класс с фона
    popupTwo.classList.remove('active'); // И с окна
	});
	document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
    if(e.target === popupBg) { // Если цель клика - фот, то:
        popupBg.classList.remove('active'); // Убираем активный класс с фона
        popup.classList.remove('active'); // И с окна
    }
	});
	document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
    if(e.target === popupBgTwo) { // Если цель клика - фот, то:
			popupBgTwo.classList.remove('active'); // Убираем активный класс с фона
			popupTwo.classList.remove('active'); // И с окна
    }
	});
	// document.body.onclick = () => {
	// 	// Найти все открытые <details>
	// 	document.body.querySelectorAll('.first__level[open]')
	// 		// И закрыть каждый из них
	// 		.forEach(e => e.open = false)
	// }

	///popUP--finifh
})
