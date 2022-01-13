(function ($): void {
  $('.testimonials-container').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: $('.back'),
    nextArrow: $('.next'),
    speed: 1000,
  });
})(jQuery);
