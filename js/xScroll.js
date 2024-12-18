gsap.registerPlugin(ScrollTrigger);

const xScroll = document.querySelector(".x-grid ul");
const totalWidth = xScroll.scrollWidth;

gsap.to(xScroll, {
  x: () => -(totalWidth - window.innerWidth / 1.1),
  ease: "none",
  scrollTrigger: {
    trigger: ".x-scroll",
    start: "top 10%",
    end: () => `+=${totalWidth}`,
    scrub: 0.1,
    pin: true,
    anticipatePin: 1,
  },
});
