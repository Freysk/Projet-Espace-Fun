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
  if (window.matchMedia("(min-width: 800px)").matches) {
    var $swiperXtra = $('.moreActivities__pagination').add('.moreActivities__btn-next').add('.moreActivities__btn-prev');

    $swiperContainer.removeClass('swiper-container')
    .children('.moreActivities__items-list').removeClass('swiper-wrapper')
    .children('.moreActivities__item').removeClass('swiper-slide');
    $swiperXtra.hide();
  } else {
  }
})

$('.option__btn').click(function(){
  
  var $blockEl = $(this).parent('.option__block-el'),
  $blockElSib = $blockEl.siblings('.option__block-el');
  if ($blockEl.hasClass('.option__block-el-right')) {
    $blockEl.removeClass('option__block-el-visible');
    $blockElSib.addClass('option__block-el-visible');
  } else {
    console.log($(this).parent('.option__block-el'));
    $blockEl.removeClass('option__block-el-visible');
    $blockElSib.addClass('option__block-el-visible');
  }
})
