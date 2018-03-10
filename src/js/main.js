var $menu = $('.modalMenu'),
    $burger = $('.burger'),
    $swiperContainer = $('.moreActivities__swiper');

$burger.click(function(){
  if (window.matchMedia("(max-width: 1024px)").matches) {
    $menu.fadeToggle(100)
      .css({  
        'display':'flex',
        'flex-direction':'row',
        'align-items':'center',
        'justify-content':'center'
      });
    $burger.toggleClass('active');
  } 
})

$(document).ready(function() {
  if (window.matchMedia("(min-width: 580px)").matches) {
    var $swiperXtra = $('.moreActivities__pagination').add('.moreActivities__btn-next').add('.moreActivities__btn-prev');
    
    $swiperContainer.removeClass('swiper-container')
    .children('.moreActivities__items-list').removeClass('swiper-wrapper')
    .children('.moreActivities__item').removeClass('swiper-slide');
    $swiperXtra.hide();
  } else {
    /* L'affichage est inférieur à 600px de large */
  }
})

// //Changement du menu au Scroll
// var $closeBtn = $('.navbar__link--btn-close');

// $closeBtn.click(function () {
//   $menu.toggleClass('modalMenu--inactive');
//   if ($menu.hasClass('modalMenu--inactive')) {
//     $(this).removeClass('fa-angle-right')
//       .addClass('fa-angle-left')
//       .prepend('<span class="bodytext"> Menu</span>');
//   } else {
//     $(this).removeClass('fa-angle-left').addClass('fa-angle-right').empty();
//   }
// })

// $(window).scroll(function(){
//   var $scrollTopPosition = $(window).scrollTop();
//   var $windowHeight = $(window).height();
//   if ($scrollTopPosition > $windowHeight) {
//     $menu.addClass('modalMenu--inactive').css({'position':'fixed', 'right':'0'});
//   } else {
//     $menu.removeClass('modalMenu--inactive');
//     $closeBtn.removeClass('fa-angle-left').addClass('fa-angle-right').empty();
//   }
// })