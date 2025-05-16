document.addEventListener('DOMContentLoaded', () => {
  const slides = Array.from(document.querySelectorAll('.hero-carousel .slide'));
  let current   = 0;
  const interval = 5000; // 5s entre slides

  function showSlide(idx) {
    slides.forEach((s, i) => {
      s.classList.toggle('show', i === idx);
    });
  }

  function nextSlide() {
    current = (current + 1) % slides.length;
    showSlide(current);
  }

  // inicia estado
  showSlide(current);
  // bucle
  setInterval(nextSlide, interval);
});
