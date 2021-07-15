
    var forNew = $('.portfolio');
    forNew.owlCarousel();
    // Go to the next item
    $('.owl-prev').click(function () {
      forNew.trigger('next.owl.carousel');
    })
    // Go to the previous item
    $('.owl-next').click(function () {
      // With optional speed parameter
      // Parameters has to be in square bracket '[]'
      forNew.trigger('prev.owl.carousel', [300]);
    })


    var blog = $(".blog");
    blog.owlCarousel({
      loop: true,
      nav: true,
      dots: true,
      animateIn: 'fadeInRight',
      animateOut: 'fadeInRight',
      autoplay: true,
      items: 3,

    });
    $('.owl-prev').click(function () {
      blog.trigger('next.owl.carousel');
    })
    // Go to the previous item
    $('.owl-next').click(function () {
      // With optional speed parameter
      // Parameters has to be in square bracket '[]'
      blog.trigger('prev.owl.carousel', [300]);
    })






