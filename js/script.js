$(function () {
  // スムーススクロール
  $('a[href^="#"]').on("click", function() {
      var speed = 600;
      var headerH = $(".l-header").height();
      var href= $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top - headerH;
      $('body,html').animate({scrollTop:position}, speed, 'swing');
      return false;
  });

  // ハンバーガーメニュー
  $('.p-gnav__btn').on('click',function(){
    $(this).toggleClass('active');

      if($(this).hasClass('active')) {
      $('.p-gnav').addClass('active');
        $('body').css('overflow-y', 'hidden');
      } else {
        $('.p-gnav').removeClass('active');
        $('body').css('overflow-y', 'auto');
      }
  });
  $('.p-gnav ul li a').click(function () {
    $('.p-gnav').removeClass('active');
    $('.p-gnav__btn').removeClass('active');
    $('body').css('overflow-y', 'auto');
  });

  // メインビジュアル遅延
  const $windowH = $(window).height();
  const $target = $(".p-mainVisual__slider");
  const $top = $target.offset().top;
  $(window).on("scroll", function () {
    const $scroll = $(this).scrollTop();
    const $position = 200 * (0 - ($top - $scroll) / $windowH);

    $top - $windowH < $scroll && $target.css({ top: $position + "px" })
  });

  // テキスト
  $('.c-mtext').each(function () {
    $(this).children().addBack().contents().each(function () {
      if (this.nodeType == 3) {
        $(this).replaceWith($(this).text().replace(/(\S)/g, '<span>$1</span>'));
      }
    });

    $(this).on('inview', function () {
      $(this).css({ 'opacity': 1 });
      $(this).addClass('c-mtextinview');
      for (var i = 0; i <= $(this).children('span').length; i++) {
        $(this).children('span').eq(i).delay(150 * i).animate({ 'opacity': 1 }, 800);
      };
    });
  });


  ///////////////////////////
  // スライダー
  /////////////////////////////
  // メインイジュアル
  $(".p-mainVisual__slider").slick({
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
    swipe: false,
  })

  // スライダー
  $(".p-visual__slider").slick({
    autoplay: true,
    autoplaySpeed: 0,
    speed: 6000,
    cssEase: "linear",
    slidesToShow: 3,
    swipe: true,
    arrows: false,
    pauseOnHover:false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  })

  // メニュー
  $(".p-menu__slider").slick({
    infinite: true, //無限ループ
    autoplay: true, //自動再生
    autoplaySpeed: 5000,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor:".p-menu__thumbnail",
    fade: true,
    prevArrow: '<div class="prev-arrow"><span>Prev</span></div>',
    nextArrow: '<div class="next-arrow"><span>Next</span></div>'
  });

  // メニューサムネイル
  $(".p-menu__thumbnail").slick({
    slidesToShow: 5,
    asNavFor: ".p-menu__slider",
    focusOnSelect: true, // サムネイルクリックを有効化
  });

});


$(window).on('scroll', function () {
  const $scroll = $(window).scrollTop();
  const $windowH = $(window).height();

  // ヘッダー背景固定
  if ($(this).scrollTop() > 800) {
    $('.l-header').addClass('active');
  } else {
    if ($('.l-header').hasClass('active')) {
      $('.l-header').removeClass('active');
    }
  }

  // ページトップボタン
  if ($(this).scrollTop() > 300) {
    $('.l-footer__arrow').addClass('active');
  } else {
    if ($('.l-footer__arrow').hasClass('active')) {
      $('.l-footer__arrow').removeClass('active');
    }
  }

  // アニメーション
  $('.c-viewline').each(function(){
  const $target = $(this).offset().top + 150;
  if ($scroll >= $target - $windowH){
    $(this).addClass('active');
    }
  });

  $('.c-opacity').each(function(){
  const $target = $(this).offset().top + 200;
  if ($scroll >= $target - $windowH){
    $(this).addClass('active');
    }
  });

  $('.p-concept__wrapper').each(function(){
  const $target = $(this).offset().top + 50;
  if ($scroll >= $target - $windowH){
    $(this).addClass('active');
    }
  });

  $('.c-fadeIn').each(function(){
  const $target = $(this).offset().top + 100;
  if ($scroll >= $target - $windowH){
    $(this).addClass('active');
    }
  });

  $('.c-fadeUp').each(function(){
  const $target = $(this).offset().top + 100;
  if ($scroll >= $target - $windowH){
    $(this).addClass('c-fadeUpIn');
    }
  });

});
