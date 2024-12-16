const headline = document.getElementById("headline");

window.addEventListener("scroll", ()=> {
  const scrollY=window.scrollY;

  headline.style.transform = `translateY(${scrollY * - 2}px)`;
})