var windowWidth = window.screen.width;

var menuButton = document.querySelector(".menu__button");
var menu = document.querySelector(".menu__list");
var subMenu = document.querySelector(".menu__sub-list");
var subMenuButton = document.querySelector(".menu__item--sub");

var swiper = new Swiper('.swiper-container', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {

    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },

    770: {
      slidesPerView: 2,
      spaceBetween: 30
    },

    1200: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  }
});

var swiperProjects = new Swiper('.swiper-projects', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {

    320: {
      slidesPerView: 1,
      spaceBetween: 0
    },

    540: {
      slidesPerView: 2,
      spaceBetween: 0
    },

    770: {
      slidesPerView: 2,
      spaceBetween: 194
    },

    1200: {
      slidesPerView: 4,
      spaceBetween: 30
    }
  }
  
});

var swiperCertificates = new Swiper('.swiper-certificates', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {

    320: {
      slidesPerView: 2,
      spaceBetween: 15
    },

    540: {
      slidesPerView: 3,
      spaceBetween: 15
    },

    770: {
      slidesPerView: 4,
      spaceBetween: 15
    },

    1200: {
      slidesPerView: 6,
      spaceBetween: 30
    }
  }
});

menuButton.addEventListener("click", function() {  
  menu.classList.toggle("menu__list--show");
  
  menuButton.classList.toggle("menu__button--change");
});

subMenuButton.addEventListener("click", function() {


  subMenu.classList.toggle("menu__sub-list--show");
  
  subMenuButton.classList.toggle("menu__item--change");
});

lightGallery(document.getElementById('lightgallery'), {
  mode: 'lg-fade',
  color: 'white'
});

var modalButton = document.querySelector(".header__button");
var modalContainer = document.querySelector(".modal-feedback__container");
var modalClose = document.querySelector(".modal-feedback__button-close");
var modal = document.querySelector(".modal-feedback");

modalButton.addEventListener("click", function(evt) {  
  evt.preventDefault;
  modalContainer.classList.toggle("modal-feedback__container--show");

  modalButton.classList.toggle("header__button--change");
});

modalClose.addEventListener("click", function(evt){
	evt.preventDefault;
  modalContainer.classList.remove("modal-feedback__container--show");

  modalButton.classList.toggle("header__button--change");
});

modalContainer.addEventListener("click", function(evt){
	evt.preventDefault;
  modalContainer.classList.remove("modal-feedback__container--show");

  modalButton.classList.toggle("header__button--change");
});

modal.addEventListener('click', function(evt) {
    evt.stopPropagation();
});

$("#tel").mask("+7(999)999-9999", {autoclear: false});

$.validator.addMethod("minlengthphone", function(value, element){
  return value.replace(/\D+/g, '').length > 10;
},
"Введите номер полностью");

$.validator.addMethod("requirephone", function(value, element){
  return value.replace(/\D+/g, '').length > 1;
},
"Введите ваш телефон");

$('#modalForm').validate({
  rules:{
    phone: {
      minlengthphone:true,
      requirephone:true,
      required:true
    },

    name: {
      required:true      
    },
  },

  messages: {
    phone: {
      required: "Введите ваш телефон"
    },
    name: {
      required: "Введите ваше имя"
    }
  }
});

// $("#myForm").validate({
//   rules: {
//     email: {
//       required: true,
//       email: true
//     },
//     name: {
//       required: true,
//       minlength: 5
//     }
//   }
// });