// ハンバーガーメニュー
$(function () {
  $('.gnav-open').on('click',function(){
    $(this).toggleClass('active');

      if($(this).hasClass('active')) {
      $('.gnav').addClass('active');
        $('body').addClass('fixed');
      } else {
        $('.gnav').removeClass('active');
        $('body').removeClass('fixed');
      }
  });
});

// スライダー
$(".slider").slick({
  autoplay: true,
  autoplaySpeed: 3000,
  arrows :false,
  infinite: true,
});
