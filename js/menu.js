document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle');
  const menu   = document.querySelector('#nav-menu');
  const overlay = document.createElement('div');

  overlay.className = 'menu-overlay';
  document.body.appendChild(overlay);

  function openMenu() {
    toggle.setAttribute('aria-expanded', 'true');
    menu.classList.add('active');
    overlay.classList.add('active');
  }

  function closeMenu() {
    toggle.setAttribute('aria-expanded', 'false');
    menu.classList.remove('active');
    overlay.classList.remove('active');
  }

  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    expanded ? closeMenu() : openMenu();
  });

  // al hacer clic fuera del menú
  overlay.addEventListener('click', closeMenu);
});
