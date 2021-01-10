$(function (){
  $('.products__items').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    dots: true,
    draggable: true,
    infinite: false,
    prevArrow: '<button type="button" class="slick-prev"><svg width="17" height="30" viewBox="0 0 17 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 1L2 15L16 29" stroke="#E2E2E2" stroke- width="2" stroke - linecap="round" /></svg ></button>',
    nextArrow: '<button type="button" class="slick-next"><svg width="17" height="30" viewBox="0 0 17 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 29L15 15L1 0.999998" stroke="#E2E2E2" stroke- width="2" stroke - linecap="round" /></svg ></button>',
  });
  $('.types__items').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    dots: true,
    draggable: true,
    infinite: false,
    prevArrow: '<button type="button" class="slick-prev"><svg width="17" height="30" viewBox="0 0 17 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 1L2 15L16 29" stroke="#E2E2E2" stroke- width="2" stroke - linecap="round" /></svg ></button>',
    nextArrow: '<button type="button" class="slick-next"><svg width="17" height="30" viewBox="0 0 17 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 29L15 15L1 0.999998" stroke="#E2E2E2" stroke- width="2" stroke - linecap="round" /></svg ></button>',
  });
  $('.tabs__btn ').on('click', function () {
    $('.tabs__btn ').removeClass('tabs__btn--active');
    $(this).addClass('tabs__btn--active');
  });
  var mixer = mixitup('main',{
    animation: {
      enable: false,
    }
  });
});



