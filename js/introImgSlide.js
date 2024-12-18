const images = document.querySelectorAll('.img-slide > img');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let currentIndex = 0;
const imageCount = images.length;
const intervalTime = 4000;

function showImage(index) {
  images.forEach((img, i) => {
    img.classList.remove('active');
    if (i === index) {
      img.classList.add('active');
    }
  });
}

function showNextImage() {
  currentIndex = (currentIndex + 1) % imageCount;
  showImage(currentIndex);
}

function showPrevImage() {
  currentIndex = (currentIndex - 1 + imageCount) % imageCount;
  showImage(currentIndex);
}

showImage(currentIndex);
let slideshowInterval = setInterval(showNextImage, intervalTime);

nextButton.addEventListener('click', () => {
  clearInterval(slideshowInterval);
  showNextImage();
  slideshowInterval = setInterval(showNextImage, intervalTime);
});

prevButton.addEventListener('click', () => {
  clearInterval(slideshowInterval);
  showPrevImage();
  slideshowInterval = setInterval(showNextImage, intervalTime);
});