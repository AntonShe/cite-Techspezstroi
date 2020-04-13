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


// index.html - главное меню

$(".menu__button").click(function(){   
  $(".menu__list").toggleClass("menu__list--show");
  $(this).toggleClass("menu__button--change");
});

$(".menu__item--sub").click(function(){ 
  $(".menu__sub-list").toggleClass("menu__sub-list--show");
  $(this).toggleClass("menu__item--change");
});


// index.html - галерея

lightGallery(document.getElementById('lightgallery'), {
  mode: 'lg-fade',
  color: 'white'
});


// index.html - валидация формы, маска

$(".phone-mask").mask("+7(999)999-9999", {autoclear: false});

$.validator.addMethod("minlengthphone", function(value, element){
  return value.replace(/\D+/g, '').length > 10;
},
"Введите номер полностью");

$.validator.addMethod("requirephone", function(value, element){
  return value.replace(/\D+/g, '').length > 1;
},
"Введите ваш телефон");

$(".validate-modal").validate({
  rules:{
    phone: {
      minlengthphone:true,
      requirephone:true,
      required:true
    },

    name: {
      required:true      
    },

    agreement: {
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

$(".validate-contacts").validate({
  rules:{
    phone: {
      minlengthphone:true,
      requirephone:true,
      required:true
    },

    name: {
      required:true      
    },

    agreement: {
      required:true      
    }
  },

  messages: {
    phone: {
      required: "Введите ваш телефон"
    },
    name: {
      required: "Введите ваше имя"
    },
    agreement: {
      required: ""    
    }
  }
});


// index.html - модальное окно

$(".header__button").click(function(){  
  $(".modal-feedback__container").toggleClass("modal-feedback__container--show");
  $(this).toggleClass("header__button--change");
});

$(".modal-feedback__button-close").click(function(){ 
  $(".modal-feedback__container").removeClass("modal-feedback__container--show");
  $(".header__button").toggleClass("header__button--change");
});

$(".modal-feedback__container").click(function(evt){
	evt.preventDefault();
  $(this).removeClass("modal-feedback__container--show");

  $(".header__button").classList.toggle("header__button--change");
});

$(".modal-feedback").click(function(evt){
    evt.stopPropagation();
});


//contacts.html - адреса

$('.address__item').hide();
$('.address__item:first').show();

$('.address__button').click(function(){

  $('.address__item').hide(400);

  if ($(this).next().css('display') == 'none') {
    $(this).next().show(400);
  }

  $('.address__button').removeClass("address__button--active");
  $(this).toggleClass("address__button--active");
});

//пагинация(стили)




