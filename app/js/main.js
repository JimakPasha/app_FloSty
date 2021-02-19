$(function () {

// ---------- ПЛАВНЫЙ СКРОЛЛ НА ГЛАВНОЙ ----------

  $('.footer__list--home a').on('click', function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 800);
  });

// ------- СЛАЙДЕР В ОПИСАНИИ PRODUCT-PAGE -------

  $('.description-slider__inner').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="images/arrow-prev.svg" alt="назад"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/arrow-next.svg" alt="вперёд"></button>'
  });

// ----- СЛАЙДЕР В PRODUCT-ONE PRODUCT-PAGE ------

  $('.product-slide__thumb').slick({
    asNavFor:'.product-slide__big',
    focusOnSelect: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    vertical: true,
    draggable: false
  });
  $('.product-slide__big').slick({
    asNavFor: '.product-slide__thumb',
    draggable: false,
    arrows: false,
    fade: true
  });

// --------------- ФОРМА ОТПРАВКИ ----------------

  //E-mail Ajax Send
  $("form").submit(function () { //Change
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "mail.php", //Change
      data: th.serialize()
    }).done(function () {
      alert("Cпасибо! Мы свяжемся с вами:)");
      setTimeout(function () {
        // Done Functions
        th.trigger("reset");
      }, 1000);
    });
    return false;
  });
  
// ------------ СЛАЙДЕР ХИТ ПРОДАЖ ---------------

  $('.hitpro-slider__items').slick({
    dots: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="images/arrow-prev.svg" alt="назад"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/arrow-next.svg" alt="вперёд"></button>',
    responsive: [
      {
        breakpoint: 1070,
        settings: {
          arrows: false
        }
      }
    ]
  });

// -------------- СЛАЙДЕР ОТЗЫВЫ -----------------

  $('.reviews__inner').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="images/arrow-prev.svg" alt="назад"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/arrow-next.svg" alt="вперёд"></button>',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 1070,
        settings: {
          arrows: false,
          slidesToShow: 1
        }
      }
    ]
  });

// ------------ ФИЛЬТРА В SHOP-PAGE --------------

  $('.filter__title').on('click', function () {
    if($('.filter').hasClass('one')){
      $('.filter__title').not($(this)).removeClass('active');
      $('.filter__form').not($(this).next()).slideUp(250);
    }
    $(this).toggleClass('active').next().slideToggle(250);
  });

// ------------ СЛАЙДЕР РЕКОМЕНДАЦИИ -------------

  $('.recommend__inner').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="images/arrow-prev.svg" alt="назад"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/arrow-next.svg" alt="вперёд"></button>'
  });

// ------------ СТИЛИЗАЦИЯ ИНПУТОВ ---------------

  $('.shop-content__select, .product-one__num-input').styler();

// -------- СЛАЙДЕР ПОХОЖИЕ В PRODUCT-PAGE -------

  $('.similar__inner').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="images/arrow-prev.svg" alt="назад"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/arrow-next.svg" alt="вперёд"></button>'
  });

  
});