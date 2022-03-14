$(function () {
    $('#search-btn').click(function () { 
        
        $('.search-form').toggleClass('active');
        
        $('.shopping-cart').removeClass('active');
        $('.login-form').removeClass('active');
        $('.register-form').removeClass('active');
    });

    $('#cart-btn').click(function () { 
        
        $('.shopping-cart').toggleClass('active');
        $('.search-form').removeClass('active');
        $('.login-form').removeClass('active');
        $('.register-form').removeClass('active');
    });
    $('#user-btn').click(function () { 
        
        $('.login-form').toggleClass('active');
        $('.search-form').removeClass('active');
        $('.shopping-cart').removeClass('active');
        $('.register-form').removeClass('active');
    });
    $('#register-form-control').click(function () { 
        
        $('.register-form').toggleClass('active');
        $('.search-form').removeClass('active');
        $('.shopping-cart').removeClass('active');
        $('.login-form').removeClass('active');
    });
    $('#login-form-control').click(function () { 
        
        $('.login-form').toggleClass('active');
        $('.search-form').removeClass('active');
        $('.shopping-cart').removeClass('active');
        $('.register-form').removeClass('active');
    });
    
    $('#register-now').click(function () { 
        
        $('.login-form').toggleClass('active');
        $('.search-form').removeClass('active');
        $('.shopping-cart').removeClass('active');
        $('.register-form').removeClass('active');
    });
    $('.fa-times').click(function () { 
        $('.login-form').removeClass('active');
        $('.shopping-cart').removeClass('active');
        $('.register-form').removeClass('active');
    });
//    setInterval(()=>{
//         $('.shopping-cart').removeClass('active');
//         $('.search-form').removeClass('active');
//    },10000);
    $(window).scroll(function () { 
        $('.login-form').removeClass('active');
        $('.search-form').removeClass('active');
        $('.shopping-cart').removeClass('active');
        $('.register-form').removeClass('active');
    });

  
    var swiper = new Swiper(".product-slide", {
        loop: true,
        spaceBetween: 20,
       autoplay: {
           delay:7500,
           disableOnInteraction: false,
       },
       centerSlide: true,
        breakpoints: {
          0: {
            slidesPerView: 1,
         
          },
          768: {
            slidesPerView: 2,
           
          },
          1020: {
            slidesPerView: 3,
           
          },
        },
      });
      var swiper = new Swiper(".review-slide", {
        loop: true,
        spaceBetween: 20,
       autoplay: {
           delay:7500,
           disableOnInteraction: false,
       },
       centerSlide: true,
        breakpoints: {
          0: {
            slidesPerView: 1,
         
          },
          768: {
            slidesPerView: 2,
           
          },
          1020: {
            slidesPerView: 3,
           
          },
        },
      });
});