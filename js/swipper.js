// Swiper Slide 
var swiper = new Swiper(".slide-swp", {
    pagination: {
        el: ".swiper-pagination",
        dynamicBullests: true,
        clickable: true          // click to change 
    },
    autoplay:{
        delay:3000,
    },
    loop:true,
});


// Swiper Slide Sale-Slide
var swiper = new Swiper(".sale-section", {
    slidesPerView: 4,
    spaceBetween: 30,
    autoplay:{
        delay:3000,
    },
    navigation:{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev"
    },
    loop:true,
});

// Swiper Slide Slide-Product
var swiper = new Swiper(".product-swip", {
    slidesPerView: 3,
    spaceBetween: 30,
    autoplay:{
        delay:3000,
    },
    navigation:{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev"
    },
    loop:true,
});
