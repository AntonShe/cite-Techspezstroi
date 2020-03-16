var windowWidth = window.screen.width;

var swiper = new Swiper('.swiper-container', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  slidesPerView: (windowWidth <=768) ? 1 :
  ( windowWidth <= 1200) ? 2 : 3,
  spaceBetween: windowWidth <= 768 ? 20 : 30
});

var swiperProjects = new Swiper('.swiper-projects', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  slidesPerView: (windowWidth) <=768 ? 1 :
  (windowWidth) <=1200 ? 2 : 4,
  spaceBetween: windowWidth <= 1200 ? 194 : 30
  
});

var swiperCertificates = new Swiper('.swiper-certificates', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  slidesPerView: (windowWidth <=768) ? 2 :
  (windowWidth <=1200) ? 4 : 6,
  spaceBetween: windowWidth <= 1200 ? 15 : 30
});

var menuButton = document.querySelector(".menu__button");
var menu = document.querySelector(".menu__list");
var subMenu = document.querySelector(".menu__sub-list");
var subMenuButton = document.querySelector(".menu__item--sub");

menuButton.addEventListener("click", function() {  
  menu.classList.toggle("menu__list--show");
  
  menuButton.classList.toggle("menu__button--change");
});

subMenuButton.addEventListener("click", function() {


  subMenu.classList.toggle("menu__sub-list--show");
  
  subMenuButton.classList.toggle("menu__item--change");
});