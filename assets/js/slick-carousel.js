
$(document).ready(function(){
  $('.single-item').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    //variableWidth: true,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 4800,
    adaptiveHeight: false,
    arrows: true,
    dots: true,
    infinite: true,
    speed: 1200,
    fade: true,
    cssEase: 'ease-in-out',
    // responsive: [
    // {
    //   breakpoint: 1024,
    //   settings: {
    //     slidesToShow: 3,
    //     slidesToScroll: 3,
    //     infinite: true,
    //     dots: true
    //   }
    // },
    // {
    //   breakpoint: 600,
    //   settings: {
    //     slidesToShow: 2,
    //     slidesToScroll: 2
    //   }
    // },
    // {
    //   breakpoint: 480,
    //   settings: {
    //     slidesToShow: 1,
    //     slidesToScroll: 1
    //   }
    // }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  // ]
    appendDots: $('.carousel-controller')
  });
});
