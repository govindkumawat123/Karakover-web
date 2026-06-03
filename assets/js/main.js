$(document).ready(function () {
  $(".ct_menu_bar").click(function () {
    $("main").addClass("ct_show");
  });

  $(".ct_close_sidebar").click(function () {
    $("main").removeClass("ct_show");
  });

  $(".ct_setting_filter_btn").click(function () {
    $(".ct_setting_popup").addClass("active");
  });
  $(".ct_close_btn121").click(function () {
    $(".ct_setting_popup").removeClass("active");
  });


  $(".ct_ads_slider").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });
  $(".ct_drums_slider").owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      767: {
        items: 2,
      },
      991: {
        items: 2,
      },
      1199: {
        items: 3,
      },
      1200: {
        items: 5,
      },
    },
  });
});




$(window).on("load", function () {

  $(".screen-loader-center").fadeOut();

});
 