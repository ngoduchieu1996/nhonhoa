$(".has-sub").click(function () {
  $(this).siblings().find(".sub-menu").hide(500);

  $(this).find(".sub-menu").slideToggle(500).css("display", "flex");
});
