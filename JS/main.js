
$(function(){

   // スクロール時のイベント
   $(window).scroll(function() {
    // fadeinクラスに対して順に処理を行う
    $('.fadein').each(function() {
      // スクロールした距離
      let scroll = $(window).scrollTop();
      // fadeinクラスの要素までの距離
      let target = $(this).offset().top;
      // 画面の高さ
      let windowHeight = $(window).height();
      // fadeinクラスの要素が画面下にきてから200px通過した
      // タイミングで要素を表示
      if (scroll > target - windowHeight + 200) {
        $(this).css('opacity','1');
        $(this).css('transform','translateY(0)');
      }
    });
  });
  
  $('#humberger--js, .header__menu-link').on("click",function() {
    //ハンバーガーボタンの変形
    $(this).css('z-index','110')
    $('#bar-top--js').toggleClass("active-top");
    $('#bar-middle--js').toggleClass("active-middle");
    $('#bar-bottom--js').toggleClass("active-bottom");

    //メニューの開閉
    $("#mask--js").toggleClass('open');

    //メニューがにゅんってなる動き
    if($('#mask-wrapper--js').hasClass('off')) {
      $('#mask-wrapper--js').removeClass('off');
      $('#mask-wrapper--js').animate({'marginLeft' : '500px'}, 450).addClass('on');
      $(".header__bar").css("background", "#fff");
    }else{
      $('#mask-wrapper--js').addClass('off');
      $('#mask-wrapper--js').animate({'marginLeft' : '0px'}, 300).removeClass('on');
      $(".header__bar").css("background", "#000");
    }
  });

  /*pickup*/
  $('#multiple-items').slick({
    arrows: false,
    centerMode: true,
    centerPadding: '100px',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
         settings: {
          centerPadding: '50px',
          slidesToShow: 1
        }
      }
    ]
  });
});