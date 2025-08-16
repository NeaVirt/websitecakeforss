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

// Add smooth scrolling for navigation links with error handling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const href = this.getAttribute('href');
    const target = document.querySelector(href);
    
    if (target) {
      target.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    } else {
      console.warn('Target element not found:', href);
    }
  });
});

// Close mobile menu when clicking outside
document.addEventListener('click', function(e) {
  const nav = document.querySelector('#primary-nav');
  const btn = document.querySelector('.nav__toggle');
  
  if (nav && btn && !e.target.closest('.nav__toggle') && !e.target.closest('#primary-nav')) {
    nav.removeAttribute('data-open');
    btn.setAttribute('aria-expanded', 'false');
  }
});

// Add scroll effect to header with error handling
window.addEventListener('scroll', function() {
  const header = document.querySelector('.site-header');
  if (header) {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }
});
