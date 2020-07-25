$(function(){

 $('.slider').slick({
    fade: true,
    arrows: false,
    dots: true,
    dotsClass: 'slick-dots',
    autoplay: true,
    autoplaySpeed: 10000
 });

 $('.slider-thue').slick({
   slidesToShow: 3,
   slidesToScroll: 1,
   nextArrow: '<img class="slick-arrows arrow-next" src="images/arrow-next.png" alt="" >',
   prevArrow: '<img class="slick-arrows arrow-pref" src="images/Arrow-prev.png" alt="" >',
   autoplay: 2000
});

 $('.testimonials-slider').slick({
   fade: true,
   arrows: false,
   dots: true,
   dotsClass: 'slick-dots slick-dors--testimonials',
   autoplay: true,
   autoplaySpeed: 10000
 });

 $('.footer-slider').slick({
  arrows: false,
  dots: true,
  dotsClass: 'slick-dots-down',
  autoplay: true,
  autoplaySpeed: 10000
});

 
});