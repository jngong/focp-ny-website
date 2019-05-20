$(function(){
  console.log("ready");

  // jQuery code for mobile menu
  $('#mobile-menu-button').click(function () {
      if ($('.nav-container').hasClass('showing')) {
        $('.nav-container').removeClass('showing').addClass('hiding')
      } else {
        $('.nav-container').removeClass('hiding').addClass('showing')
      }
    })

  // jQuery code for fancybox.
  // If wanting to add more options add attributes to the function.

  $('[data-fancybox="gallery-aboutus"], [data-fancybox="gallery-pavilion"], [data-fancybox="gallery-ballfield"]').fancybox({
    buttons : [
      'zoom',
      'slideShow',
      'thumbs',
      'share',
      'close'
    ],
  });


  // jQuery code for slick function
  // $('.your-class').slick({
  //   setting-name: setting-value
  // });

  $('.picture-gallery-container').slick({
    dots: true,
    arrows: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });


});
