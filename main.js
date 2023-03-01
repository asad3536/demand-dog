
//Sticky Header Background Color

const header=document.querySelector(".header");

document.addEventListener('scroll',()=>{
  if(window.scrollY>20){

    header.classList.add("header-bg")
  }
  else{
    header.classList.remove("header-bg")
  }


})



const swiper = new Swiper('.swiper', {
    slidesPerView: 6,
    spaceBetween: 10,
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 4,
        spaceBetween: 40
      }
    }
  });

  const featuresSlider = new Swiper('.features-slider', {
    slidesPerView: 3,
    spaceBetween: 47,
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 1,
        spaceBetween: 30
      },
      // when window width is >= 640px
      700: {
        slidesPerView: 2,
        spaceBetween: 30
      },

      900:{
        slidesPerView: 2,
        spaceBetween: 30
      }
      ,

      1000: {
        slidesPerView: 3,
        spaceBetween: 40
      }
    }
  });


  const servicesSlider = new Swiper('.services-slider', {
    slidesPerView: 4,
    spaceBetween: 47,
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },


    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 1,
        spaceBetween: 30
      },
      // when window width is >= 640px
      700: {
        slidesPerView: 2,
        spaceBetween: 30
      },

      900:{
        slidesPerView: 2,
        spaceBetween: 30
      }
      ,

      1000: {
        slidesPerView: 4,
        spaceBetween: 40
      }
    }
  });


  
  const gallerySlider = new Swiper('.gallery-slider', {
    slidesPerView: 3.5,
    spaceBetween: 30,
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });