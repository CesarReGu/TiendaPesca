document.addEventListener('DOMContentLoaded', () => {
  const observerOpts = {
    root: null,
    rootMargin: '0px 0px -10% 0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOpts);

  // Elementos a animar
  const els = document.querySelectorAll(
    '.service-item, .card, .contact-info, .contact-map'
  );

  els.forEach(el => {
    el.classList.add('hidden');
    observer.observe(el);
  });
});
