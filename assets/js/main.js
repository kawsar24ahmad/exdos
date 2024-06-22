(function($){
        "use strict";

        // data bg img 
        $("[data-background]").each(function(){
          $(this).css("background-image", "url("+$(this).attr("data-background")+")")
        })
        // data bg color 
        $("[data-bg-color]").each(function(){
          $(this).css("background-color", $(this).attr("data-bg-color"))
        })

        // popup image 
        $('.popup-image').magnificPopup({
          type:'image'
        });
        $('.popup-video').magnificPopup({
          type:'iframe'
        });

        //  Initialize Swiper 
   
          var swiper = new Swiper(".tp-testimonial-active", {
            slidesPerView: 1,
            spaceBetween: 30,
            keyboard: {
              enabled: true,
            },
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
            navigation: {
              nextEl: ".tp-swiper-test-button-next",
              prevEl: ".tp-swiper-test-button-prev",
            },
          });
  
          // brand slider top
          var swiper = new Swiper(".tp-brand-top-active", {
            slidesPerView: 'auto',
            spaceBetween: 80,
            centeredSlides: true,
            loop:true,
            freemode:true,
            speed:4000,
            allowTouchMove:false,
            autoplay: {
              delay: 1,
              disableOnInteraction: true,
            },
            
          });
          // tp-brand-title-active
          var swiper = new Swiper(".tp-brand-title-active", {
            slidesPerView: 'auto',
            spaceBetween: 40,
            centeredSlides: true,
            loop:true,
            freemode:true,
            speed:4000,
            allowTouchMove:false,
            autoplay: {
              delay: 1,
              disableOnInteraction: true,
            },
            
          });


          // brand slider bottom
          var swiper = new Swiper(".tp-brand-bottom-active", {
            slidesPerView: 'auto',
            spaceBetween: 80,
            centeredSlides: true,
            loop:true,
            freemode:true,
            speed:4000,
            allowTouchMove:false,
            autoplay: {
              delay: 1,
              disableOnInteraction: true,
            },
            
          });

          // team slider 
          var swiper = new Swiper(".mySwiper", {
            slidesPerView: 4,
            spaceBetween: 30,
            keyboard: {
              enabled: true,
            },
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
            navigation: {
              nextEl: ".tp-team-swiper-button-next",
              prevEl: ".tp-team-swiper-button-prev",
            },
            breakpoints: {
              0: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              576: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              992: {
                slidesPerView: 3,
              },
              1200: {
                slidesPerView: 4,
              },
            },
          });
         
})(jQuery);