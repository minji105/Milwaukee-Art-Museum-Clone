gsap.registerPlugin(ScrollToPlugin);

const cardsList = document.querySelectorAll('.cards');

cardsList.forEach(cards => {
  let isDown = false;
  let startX;
  let scrollLeft;

  cards.addEventListener('mousedown', e => {
    isDown = true;
    startX = e.pageX - cards.offsetLeft;
    scrollLeft = cards.scrollLeft;
    cards.style.cursor = 'grabbing';
    e.preventDefault();
  });

  cards.addEventListener('mouseleave', () => {
    isDown = false;
  });

  cards.addEventListener('mouseup', () => {
    isDown = false;
    cards.style.cursor = 'grab';
  });

  cards.addEventListener('mousemove', e => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - cards.offsetLeft;
    const walk = x - startX;

    gsap.to(cards, {
      scrollLeft: scrollLeft - walk,
      ease: "power1.out", 
      duration: 1 
    });
  });
});
