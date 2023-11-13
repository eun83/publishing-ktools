$(document).ready(function () {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 10) { // Adjust the scroll position when the class should be added
      $('header').addClass('fixed-header');
    } else {
      $('header').removeClass('fixed-header');
    }
  });
    
  // web
  $('.gnb > .gnb_layout').on('mouseover click', function() {
      $('.gnb > .gnb_layout').addClass('open');

      return false;
  });
  $('.gnb').mouseleave(function(){
      $('.gnb > .gnb_layout').removeClass('open');
  });
  
  $('.btn_all_menu_open').click(function(){
      $('.all_menu').addClass('active');
      $('body').css("overflow","hidden");
  });

  $('.btn_all_menu_close').click(function(){
      $('.all_menu').removeClass('active');
      $('body').css("overflow","");
  });

  // search
  $('.btn_top_search_open').click(function(){
      $('.search_wrap').addClass('active');
  });

  $('.btn_top_search_close').click(function(){
      $('.search_wrap').removeClass('active');
  });

  $('#gnb > ul > li').mouseenter(function(){
      $('.search_wrap').hide().removeClass('active').show();
  });
  
  // mobile
  $('.all_menu > .gnb_layout > li').click(function(){
      let $me = $(this);
      if($me.is($me.parent().find('.current'))){
          // 이전 선택한 대상과 같은 경우 닫기
          $me.removeClass('current');
      } else {
          // 이전 선택한 대상과 다른 경우 새로 열기
          $me.siblings().removeClass('current');
          $me.addClass('current');
      }
      return false;
  });
});