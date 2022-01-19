(function ($): void {
  $('.portfolio-main').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.portfolio-teaser',
  });
  $('.portfolio-teaser').slick({
    slidesToShow: 8,
    slidesToScroll: 1,
    asNavFor: '.portfolio-main',
    dots: false,
    centerMode: false,
    focusOnSelect: true,
  });
})(jQuery);
