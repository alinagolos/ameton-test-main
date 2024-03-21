var slides = document.querySelector('.faq__list');
var slideWidth = document.querySelector('.faq__item').offsetWidth + 24;
var currentIndex = 0;
function updateSlidePosition() {
  var newPosition = -currentIndex * slideWidth;
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
document.querySelectorAll('.info__spoiler-header').forEach(function (el) {
  el.addEventListener('click', function () {
    var content = el.nextElementSibling;
    if (content.style.maxHeight) {
      document.querySelectorAll('.info__spoiler-text').forEach(function (el) {
        el.style.maxHeight = null;
      });
    } else {
      document.querySelectorAll('.info__spoiler-text').forEach(function (el) {
        el.style.maxHeight = null;
      });
      content.style.maxHeight = content.scrollHeight + 'px';
    }
  });
});
