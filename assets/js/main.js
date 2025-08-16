// Navigation toggle functionality for mobile
document.addEventListener('DOMContentLoaded', function() {
  const btn = document.querySelector('.nav__toggle');
  const nav = document.querySelector('#primary-nav');
  if (btn && nav) {
    btn.addEventListener('click', function() {
      const open = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!open));
      if (!open) {
        nav.setAttribute('data-open', '');
      } else {
        nav.removeAttribute('data-open');
      }
    });
  }
});
