const slides = document.querySelector('.faq__list');
const slideWidth = document.querySelector('.faq__item').offsetWidth + 24;
let currentIndex = 0;
function updateSlidePosition() {
  const newPosition = -currentIndex * slideWidth;
  slides.style.transform = `translateX(${newPosition}px)`;
}
function nextSlide() {
  if (currentIndex < 4) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  updateSlidePosition();
}

document.querySelectorAll('.info__spoiler-header').forEach((el) => {
  el.addEventListener('click', () => {
    let content = el.nextElementSibling;
    if (content.style.maxHeight) {
      document
        .querySelectorAll('.info__spoiler-text')
        .forEach((el) => (el.style.maxHeight = null));
    } else {
      document
        .querySelectorAll('.info__spoiler-text')
        .forEach((el) => (el.style.maxHeight = null));
      content.style.maxHeight = content.scrollHeight + 'px';
    }
  });
});
