new Swiper('.image-slider',{

    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
    pagination: {
       el: '.swiper-pagination',
       clickable: true,
  },
    loop: true,
    
    autoplay: {
        delay: 4500,
    },
    
}); 