$(".has-sub").click(function () {
  $(this).siblings().find(".sub-menu").hide(300);

  $(this).find(".sub-menu").slideToggle(300);
});

$("#show-nav-bar").click(function () {
  $(".nav-bar__menu").slideToggle(300);
});

$(".nav-bar__cta-has-sub").click(function () {
  $(this).parent().siblings().find(".nav-bar__cta-sub").hide(300);

  $(this).parent().find(".nav-bar__cta-sub").slideToggle(300);
});
