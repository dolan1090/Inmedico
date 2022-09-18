// SmartMenus init
$(function() {
  $('#main-menu').smartmenus({
    subMenusSubOffsetX: 6,
    subMenusSubOffsetY: -8
  });
});

// SmartMenus mobile menu toggle button
$(function() {
  var $mainMenuState = $('#main-menu-state');
  if ($mainMenuState.length) {
    // animate mobile menu
    $mainMenuState.change(function(e) {
      var $menu = $('#main-menu');
      if (this.checked) {
        $menu.hide().slideDown(250, function() { $menu.css('display', ''); });
      } else {
        $menu.show().slideUp(250, function() { $menu.css('display', ''); });
      }
    });
    // hide mobile menu beforeunload
    $(window).bind('beforeunload unload', function() {
      if ($mainMenuState[0].checked) {
        $mainMenuState[0].click();
      }
    });
  }
});

// Fix bug
var btn_close_topmenu = document.querySelector("#main-menu-state");
var main_topmenu = document.querySelector("#main-menu");
btn_close_topmenu.onclick = function () {
  if (!main_topmenu.classList.contains('show-mn')) {
    main_topmenu.classList.add('show-mn');
  } else {
    main_topmenu.classList.remove('show-mn');
  };    
};

// End Menu main


var menu_product_cat = document.querySelectorAll('.product-c .menu-product-cat li');
for (var i = 0; i < menu_product_cat.length; i++) {
  var sub_menu_product_cat = menu_product_cat[i].querySelector('ul');
  if (sub_menu_product_cat!=null) {
    var icon_down = document.createElement("i");
    icon_down.classList.add("fa");
    icon_down.classList.add("fa-angle-down");
    menu_product_cat[i].insertBefore(icon_down, sub_menu_product_cat);

    var li_container = icon_down.parentElement;
    var sub_menu2 = li_container.querySelector("ul"); 

    icon_down.onclick = function () {
     if (!sub_menu2.classList.contains('show')) {
      sub_menu2.classList.add("show");
    } else {
      sub_menu2.classList.remove("show");
    };      
  }
  
} else {}  
};
// End menu category


var swiper = new Swiper(".mySwiper1", {
  autoHeight: true,
  pagination: {
    el: ".mySwiper1 .swiper-pagination",
    clickable: true,
  },
});

// window.onload = function()
// {
//   document.querySelector(".slide-main-h .swiper-wrapper").style.height = 'auto';
// };

// var swiper2 = new Swiper(".mySwiper2", {
//   // autoHeight: true,
//   navigation: {    
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   effect: "flip",
//   grabCursor: true,
// });

$(document).ready(function(){
  $('.slide-health-h').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
        // infinite: false,
        centerMode: true,
        focusOnSelect: true,
        arrows: true,
        prevArrow:"<div class='slick-prev pull-left'><i class='fa fa-angle-left'></i></div>",
        nextArrow:"<div class='slick-next pull-right'><i class='fa fa-angle-right'></i></div>",
        responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
          }
        },
        ],
      });
});

var swiper3 = new Swiper(".mySwiper-kh", {
  slidesPerView: 6,
  spaceBetween: 20,
  freeMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    992: {
      slidesPerView: 6,
      spaceBetween: 50,
    },
    768: {
      slidesPerView: 6,
      spaceBetween: 40,
    },
    576: {
      slidesPerView: 6,
      spaceBetween: 30,
    },
  },
});


var swiper4 = new Swiper(".swipercard-news-other", {
  slidesPerView: 1,
  spaceBetween: 10,
  freeMode: true,
  navigation: {
    nextEl: ".news-other .swiper-button-next",
    prevEl: ".news-other .swiper-button-prev",
  },
  breakpoints: {
    992: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
  },
});

var swiper5 = new Swiper(".mySwipercard-lvkd", {
  slidesPerView: 1,
  spaceBetween: 10,
  freeMode: true,
  breakpoints: {
    992: {
      slidesPerView: 5,
      spaceBetween: 23,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
  },
});

// End slide