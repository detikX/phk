gsap.registerPlugin(ScrollTrigger);

let footer = document.querySelector(".jendela"),
    getOverlap = () => Math.min(window.innerHeight, footer.offsetHeight), // we never want it to overlap more than the height of the screen
    adjustFooterOverlap = () => footer.style.marginTop = -getOverlap() + "px"; // adjusts the margin-top of the footer to overlap the proper amount

adjustFooterOverlap();

// to make it responsive, re-calculate the margin-top on the footer when the ScrollTriggers revert
ScrollTrigger.addEventListener("revert", adjustFooterOverlap);

// magic
ScrollTrigger.create({
    trigger: footer,
    start: () => "top " + (window.innerHeight - getOverlap()),
    end: () => "+=" + getOverlap(),
    pin: true,
});
