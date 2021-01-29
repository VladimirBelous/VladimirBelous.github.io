var mySwiperS = new Swiper('.sliderMain', {
    
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',

    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });

  var mySwiperS = new Swiper('.sliderBestseller', {

    slidesPerView: 5,
    spaceBetween: 20,

    
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',

    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });

  var mySwiperS2 = new Swiper('.slider2', {

    slidesPerView: 5,

    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',

    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });

