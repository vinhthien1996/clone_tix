$('.video').magnificPopup({
  type: 'iframe',
  image: {
    markup: '<div class="mfp-figure">' +
      '<div class="mfp-close"></div>' +
      '<div class="mfp-img"></div>' +
      '<div class="mfp-bottom-bar">' +
      '<div class="mfp-title"></div>' +
      '<div class="mfp-counter"></div>' +
      '</div>' +
      '</div>', // Popup HTML markup. `.mfp-img` div will be replaced with img tag, `.mfp-close` by close button

    cursor: 'mfp-zoom-out-cur', // Class that adds zoom cursor, will be added to body. Set to null to disable zoom out cursor.

    titleSrc: 'title', // Attribute of the target element that contains caption for the slide.
    // Or the function that should return the title. For example:
    // titleSrc: function(item) {
    //   return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
    // }

    verticalFit: true, // Fits image in area vertically

    tError: '<a href="%url%">The image</a> could not be loaded.' // Error message
  },
  iframe: {
    markup: '<div class="mfp-iframe-scaler">' +
      '<div class="mfp-close"></div>' +
      '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
      '<div class="mfp-title">Some caption</div>' +
      '</div>'
  },
  callbacks: {
    markupParse: function (template, values, item) {
      values.title = item.el.attr('title');
    }
  }
});

$(".mCarousel__container").slick({
  autoplay: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  prevArrow: "<img src='./img/back.png' width='50' class='left' />",
  nextArrow: "<img src='./img/next.png' width='50' class='right' />",
});

$(".movies_list__container").slick({
  autoplay: false,
  slidesPerRow: 4,
  rows: 2,
  prevArrow: "<img src='./img/back.png' width='50' class='left' />",
  nextArrow: "<img src='./img/next.png' width='50' class='right' />",
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        dots: true,
        arrows: false
      }
    }
  ]
});

$(".app__slider__container").slick({
  autoplay: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: false,
  prevArrow: false,
  nextArrow: false,
});

$(".students__carousel").slick({
  autoplay: false,
  slidesToShow: 5,
  slidesToScroll: 5,
  prevArrow: '<i class="fa fa-angle-left left"></i>',
  nextArrow: '<i class="fa fa-angle-right right"></i>',
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 576,
      settings: {
        arrows: false,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

$(".services__carousel").slick({
  autoplay: false,
  slidesToShow: 3,
  slidesToScroll: 3,
  prevArrow: '<i class="fa fa-angle-left left"></i>',
  nextArrow: '<i class="fa fa-angle-right right"></i>',
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        dots: true
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true
      }
    },
    {
      breakpoint: 576,
      settings: {
        arrows: false,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

$(".intro__bottom__carousel").slick({
  autoplay: false,
  slidesToShow: 3,
  slidesToScroll: 3,
  prevArrow: '<i class="fa fa-angle-left left"></i>',
  nextArrow: '<i class="fa fa-angle-right right"></i>',
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 576,
      settings: {
        arrows: false,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});