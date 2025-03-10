$(document).ready(function () {
    AOS.init();
    // new WOW().init();

    // setTimeout(() => {
    //     $(".preloader").slideUp(1000);
    //     $(".preloader").remove();

    // }, 1500);
    // new WOW().init();
})


$('.employee').slick({
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    fade: true,
    arrows: false,
    cssEase: 'linear'
});

gsap.timeline({
    scrollTrigger: {
        trigger: ".box",
        start: "center center",
        end: "bottom top",
        scrub: 1,
        pin: true
    }
})
    .from(".text1", {
        x: innerWidth * 1
    })
    .from(".text2", {
        x: innerWidth * -1
    })
    .from(".angkax", {
        y: innerHeight * 1,
        rotate: 360
    })



