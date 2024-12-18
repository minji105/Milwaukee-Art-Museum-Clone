gsap.registerPlugin(ScrollToPlugin);

const cardsList = document.querySelectorAll('.cards');

cardsList.forEach(cards => {
  let isDown1 = false;
  let startX1;
  let scrollLeft1;

  cards.addEventListener('mousedown', e => {
    isDown1 = true;
    startX1 = e.pageX - cards.offsetLeft;
    scrollLeft1 = cards.scrollLeft;
    cards.style.cursor = 'grabbing';
    e.preventDefault();
  });

  cards.addEventListener('mouseleave', () => {
    isDown1 = false;
  });

  cards.addEventListener('mouseup', () => {
    isDown1 = false;
    cards.style.cursor = 'grab';
  });

  cards.addEventListener('mousemove', e => {
    if (!isDown1) return;
    e.preventDefault();
    const x = e.pageX - cards.offsetLeft;
    const walk = x - startX1;

    gsap.to(cards, {
      scrollLeft: scrollLeft1 - walk,
      ease: "power1.out", 
      duration: 1 
    });
  });
});
