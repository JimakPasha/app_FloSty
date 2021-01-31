$(function () {
  
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

  $('.shop-content__select').styler();

});