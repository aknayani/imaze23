// toggle icon navbars
let menuIcon = document.querySelector('#menu-icon');
let navbars = document.querySelector('.navbars');
let body = document.body;

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbars.classList.toggle('active');

    if (navbars.classList.contains('active')) {
        // Open the navbars with a smooth animation
        navbars.style.maxHeight = navbars.scrollHeight + 'px';
        navbars.style.opacity = 1;
    } else {
        // Close the navbars with a smooth animation
        navbars.style.maxHeight = '0';
        navbars.style.opacity = 0;
    }
};

window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        navbars.style.maxHeight = ''; 
        navbars.style.opacity = ''; 
    }
});
function closenavbars() {
    menuIcon.classList.remove('bx-x');
    navbars.classList.remove('active');
    navbars.style.maxHeight = '0';
    navbars.style.opacity = '0';
}

body.addEventListener('click', (event) => {
    if (navbars.classList.contains('active') && event.target !== menuIcon && !navbars.contains(event.target)) {
        closenavbars();
    }
});

document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper(".swiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2,
      slideShadows: true
    },
    spaceBetween: 60,
    loop: true,
    autoplay: {
      delay: 1500, // Delay between slides in milliseconds (5 seconds)
      disableOnInteraction: false, // Prevent autoplay from stopping when user interacts with the slider
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    nextButton: '#js-prev1',
   prevButton: '#js-next1',
  });
});

document.addEventListener('DOMContentLoaded', function () {
  var swiper = new Swiper(".swiper1", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2,
    slideShadows: true
  },
  spaceBetween: 60,
  loop: true,
  autoplay: {
    delay: 4000, // Delay between slides in milliseconds (5 seconds)
    disableOnInteraction: false, // Prevent autoplay from stopping when user interacts with the slider
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  }
});
});


