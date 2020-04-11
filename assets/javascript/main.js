// Preloader
$(window).on('load', function (event) {
    $('.preloader').delay(400).fadeOut(400);
});

// Navbar
window.onscroll = () => {
  const nav = document.querySelector('#navbar');
  if(this.scrollY <= 200) nav.className = 'nav-container pullDown'; else nav.className = 'nav-container pullDown scroll';
};

// Zoom in on scroll
AOS.init({
  duration: 800, // values from 0 to 3000, with step 50ms
});

// Carousel (slider)
jQuery(document).ready(function ($) {

  var interval;
  interval = setInterval(function () {
    moveRight();
  }, 4000);

  $('._slider').mouseover(function(){
    clearInterval(interval);
  });

  $('._slider').mouseleave(function(){
    interval = setInterval(function () {
      moveRight();
      }, 4000);
  });

  var slideCount = $('._slider ul li').length;
  var slideWidth = $('._slider ul li').width();
  var slideHeight = $('._slider ul li').height();
  var sliderUlWidth = slideCount * slideWidth;

  $('._slider').css({ width: slideWidth, height: slideHeight });

  $('._slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });

    $('._slider ul li:last-child').prependTo('._slider ul');

    function moveLeft() {
        $('._slider ul').animate({
            left: + slideWidth
        }, 800, function () {
            $('._slider ul li:last-child').prependTo('._slider ul');
            $('._slider ul').css('left', '');
        });
    };

    function moveRight() {
        $('._slider ul').animate({
            left: - slideWidth
        }, 800, function () {
            $('._slider ul li:first-child').appendTo('._slider ul');
            $('._slider ul').css('left', '');
        });
    };
});

// Carousel (Bootstrap)
// $('.carousel').carousel({
//   interval: 2000
// })

// Owl Carousel
// $(document).ready(function(){
//   $(".owl-carousel-1").owlCarousel({
//     items:4,
//     loop:true,
//     margin:10,
//     autoplay:true,
//     autoplayTimeout:3000,
//     autoplayHoverPause:true
//   });
// });

// $(document).ready(function(){
//   $(".owl-carousel-2").owlCarousel({
//     items:4,
//     loop:true,
//     margin:10,
//     autoplay:true,
//     autoplayTimeout:3000,
//     autoplayHoverPause:true
//   });
// });
