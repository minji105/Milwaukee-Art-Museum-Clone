const headline = document.getElementById("headline");
const header = document.querySelector("header");
const topButton = document.getElementById("topButton");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  headline.style.transform = `translateY(${scrollY * - 2}px)`;

  if (scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
})

topButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
})

const lenis = new Lenis({
  duration: 1.5,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
});

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)