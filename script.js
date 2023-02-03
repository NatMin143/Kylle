const swiper1 = new Swiper('.swiper1', {
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next1',
        prevEl: '.swiper-button-prev1',
      },
    spaceBetween: 10,
    slidesPerView: 1,
    allowTouchMove: true,
    breakpoints: {
        290: {
            slidesPerView: "1"
        },
        768: {
            slidesPerView: "2"
        },
        992: {
            slidesPerView: "3"
        }
    }
});

const hamburger =  document.querySelector(".hamburger-menu");
const xButton = document.querySelector(".x-button");
const menuItems = document.querySelector(".mobile-menu");

hamburger.addEventListener('click', () => {
    menuItems.style.display = "flex";
})

xButton.addEventListener('click', () => {
    menuItems.style.display = "none"
})