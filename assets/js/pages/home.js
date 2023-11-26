

// Homebanner Slider

var swiper = new Swiper(".mySwiper", {
  loop:true,
  pagination: {
    el: ".swiper-pagination1",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next1",
    prevEl: ".swiper-button-prev1",
  },
});




// Our Holiday Packages Slider
var swiper1 = new Swiper(".swiper-container-newlimited", {
  // loop: true,
  slidesPerView: 1.1,
  spaceBetween: 15,

  navigation: {
    nextEl: ".swiper-button-next2",
    prevEl: ".swiper-button-prev2"
  },
  
  breakpoints: {
    1600: {
      slidesPerView: 4.71,
      spaceBetween: 25
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 25
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 25
    },
    600: {
      slidesPerView: 2,
      spaceBetween: 20
    }
  },
 
});


// Testimonial  Slider
var swiper2 = new Swiper(".swiper-container-testimonial", {
  // loop: true,
  slidesPerView: 1,
  spaceBetween: 15,

 
  
  breakpoints: {
 
    1200: {
      slidesPerView: 1.9,
      spaceBetween: 30
    },
    992: {
      slidesPerView: 1,
      spaceBetween: 25
    },
    600: {
      slidesPerView: 1,
      spaceBetween: 20
    }
  },
 
});


// Themed Vacation Packages Click active 

const slides = document.querySelectorAll('.click-slider .slide')

for(const slide of slides){
    slide.addEventListener('click', () => {
        clearActiveClasses()
        slide.classList.add('active')
    })
}

function clearActiveClasses() {
    slides.forEach((slide) => {
        slide.classList.remove('active')
    })
}



// Select box Intialisation

$("#single").select2({
  minimumResultsForSearch: -1,
});

$("#single1").select2({
  minimumResultsForSearch: -1,
});



// Show More section
  var myLinks = document.getElementsByClassName("morelink");
  var showContent = document.getElementsByClassName("contentbox")[0];
  for (var i = 0; i < myLinks.length; i++) {
      myLinks[i].addEventListener("click", function() {
          showContent.classList.add("show");
      });
  }













//animation
// just "anim" in your element
// window.addEventListener("load", () => {
  function isInViewport(el, gap) {
    let top = el.offsetTop;
    let left = el.offsetLeft;
    let height = el.offsetHeight;
    // console.log(el.offsetParent);
    while (el.offsetParent) {
        el = el.offsetParent;
        top += el.offsetTop;
        left += el.offsetLeft;
    }
    return (
        (window.pageYOffset + window.innerHeight - gap) >= (top) &&
        (window.pageYOffset) <= (height + top)
    );
}



let getElem = document.querySelectorAll('.anime, .customanim');
//please change as per the design
const breakPoints = {
    desktop: 100,
    laptop: 80,
    tab: 50,
    mobile: 20
};
let targetGap;
window.innerWidth >= 1200 ? targetGap = breakPoints.desktop :
    window.innerWidth >= 1024 ? targetGap = breakPoints.laptop :
    window.innerWidth >= 768 ? targetGap = breakPoints.tab :
    targetGap = breakPoints.mobile;

function anim() {
    getElem.forEach(element => {
        isInViewport(element, targetGap) ? element.classList.add("visible") : null;
    })
}
getElem.length > 0 ? (window.addEventListener('scroll', anim, false)) : null;
getElem.length > 0 ? anim() : null;
// }, false);
