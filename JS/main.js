
$(function(){
  
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

//pickupの自動スクロール
  $('#jquery-ui-draggable').draggable({
    axis: 'x',
  });
});