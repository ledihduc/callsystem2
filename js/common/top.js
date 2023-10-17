$(function($) {
  var itemHeights = [];
  var returnHeight;

  $(function(){
    $(".grad-item").each(function(){
      var thisHeight = $(this).height();
      itemHeights.push(thisHeight);
      $(this).addClass("is-hide");
      returnHeight = $(this).height();
    });
  });

  $(".js-acco-btn").click(function(){
    if(!$(this).hasClass("is-show")) {
      var index = $(this).index(".js-acco-btn");
      var addHeight = itemHeights[index];
      $(this).addClass("is-show").next().animate({height: addHeight},200).removeClass("is-hide");
    } else {
      $(this).removeClass("is-show").next().animate({height: returnHeight},200).addClass("is-hide");
    }
  });

  $('.js-slider').slick({
    dots: true,
    variableWidth: true,
    slidesToShow: 3,
    slidesToScroll: 3,
  
    responsive: [
      {
        breakpoint: 640,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        },
      },
    ],
  });
});