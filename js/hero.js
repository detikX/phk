const hero = document.querySelector('.hero');
const lines = gsap.utils.toArray('.hero-chunk');
const linesContent = gsap.utils.toArray(".hero-chunk span");
const styles = [{
    y: 90,
    scale: 1.3,
    color: "#28afb0"
}, {
    y: 82,
    scale: 1.15,
    color: "#ffbf47"
}, {
    y: 68,
    scale: 0.93,
    color: "#7592a1"
}
];
linesContent.forEach((el, i) => gsap.set(el, styles[i]));

const smoother = (window.smoother = ScrollSmoother.create({
    smooth: 1.5,
    effects: true,
    wrapper: '.page__wrapper',
    content: '.page__content',
}));

gsap.to(lines, {
    y: i => distortion(i, hero.offsetHeight * 0.35, 0.18),
    scale: i => distortion(i, 1.75, 0.3) + 1,
    autoAlpha: 0,
    scrollTrigger: {
        trigger: hero,
        start: `top top`,
        end: '65% top',
        scrub: true,
    },
});

gsap.to(linesContent, {
    y: 0,
    scale: 1,
    autoAlpha: 1,
    duration: 0.625,
    delay: 0.5,
    stagger: {
        ease: 'power1.inOut',
        amount: 0.5,
    }
});


function distortion(i, base, exp = 1) {
    return base * ((lines.length - i) / lines.length) ** exp;
}