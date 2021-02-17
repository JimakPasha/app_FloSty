$(function () {

  $('.description-slider__inner').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="images/arrow-prev.svg" alt="назад"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/arrow-next.svg" alt="вперёд"></button>'
  });

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
  
  $('.hitpro-slider__items').slick({
    dots: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="images/arrow-prev.svg" alt="назад"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/arrow-next.svg" alt="вперёд"></button>'
  });


  $('.reviews__inner').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="images/arrow-prev.svg" alt="назад"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/arrow-next.svg" alt="вперёд"></button>'
  });


  $('.filter__title').on('click', function () {
    if($('.filter').hasClass('one')){
      $('.filter__title').not($(this)).removeClass('active');
      $('.filter__form').not($(this).next()).slideUp(250);
    }
    $(this).toggleClass('active').next().slideToggle(250);
  });

  $('.recommend__inner').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="images/arrow-prev.svg" alt="назад"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/arrow-next.svg" alt="вперёд"></button>'
  });

  $('.shop-content__select, .product-one__num-input').styler();

  $('.similar__inner').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="images/arrow-prev.svg" alt="назад"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/arrow-next.svg" alt="вперёд"></button>'
  });

  
});