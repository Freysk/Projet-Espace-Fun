var swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 30,
  keyboard: {
    enabled: true,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

var $windMod = $('.module-wind');
$windMod.click(function(){
  $(this).toggleClass('active');
  if (!$windMod.hasClass('active')) {
    $('.module-wind__btn').html('+');
  } else {
    $('.module-wind__btn').html('-');
  }
});