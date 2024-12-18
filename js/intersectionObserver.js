const imgSections = document.querySelectorAll(".img-section");
const imgs = document.querySelectorAll(".img");

let isIntersectingMap = new Map();

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      isIntersectingMap.set(entry.target, entry.isIntersecting);
    });
  },
  { threshold: 0.1 } 
);

imgSections.forEach((section) => observer.observe(section));

window.addEventListener("scroll", () => {
  imgSections.forEach((section, index) => {
    if (!isIntersectingMap.get(section)) return; 

    requestAnimationFrame(() => {
      const scrollY = window.scrollY;
      const offsetTop = section.offsetTop;

      imgs[index].style.transform = `translateY(${(scrollY - offsetTop) * 0.2}px)`;
    });
  });
});