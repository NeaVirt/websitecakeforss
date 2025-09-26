// Navigation toggle functionality for mobile
document.addEventListener('DOMContentLoaded', function() {
  const btn = document.querySelector('.nav__toggle');
  const nav = document.querySelector('#primary-nav');
  const links = document.querySelectorAll('.nav__link');
  
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
  // Generate organic per-link stardust textures
  if (links && links.length) {
    links.forEach(link => {
      try {
        const rect = link.getBoundingClientRect();
        const width = Math.max(Math.ceil(rect.width), 60);
        const height = Math.max( Math.ceil(rect.height), 32);
        const dpr = Math.min(Math.max(window.devicePixelRatio || 1, 1), 2);

        const canvas = document.createElement('canvas');
        canvas.width = Math.floor(width * dpr);
        canvas.height = Math.floor(height * dpr);
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        ctx.scale(dpr, dpr);

        // Transparent background
        ctx.clearRect(0, 0, width, height);

        // Random speckles
        const numDots = Math.floor((width * height) / 90); // density
        for (let i = 0; i < numDots; i++) {
          const x = Math.random() * width;
          const y = Math.random() * height;
          // Prefer small dots, hard-cap max size for elegance
          const useSmall = Math.random() < 0.85;
          let size = useSmall ? (Math.random() * 0.1 + 0.45) : (Math.random() * 1.3 + 0.9);
          size = Math.min(size, 1.4);
          const hue = 35 + Math.random() * 10; // golden range
          const sat = 70 + Math.random() * 20;
          const light = 50 + Math.random() * 20;
          const alpha = 0.25 + Math.random() * 0.35;
          ctx.fillStyle = `hsla(${hue} ${sat}% ${light}% / ${alpha})`;
          ctx.beginPath();
          ctx.arc(x, y, size, 0, Math.PI * 2);
          ctx.fill();

          // occasional glow
          /*if (Math.random() < 0.05) {
            const glow = ctx.createRadialGradient(x, y, 0, x, y, size * 2.2);
            glow.addColorStop(0, `hsla(${hue} ${sat}% ${light + 10}% / 0.20)`);
            glow.addColorStop(1, 'rgba(0,0,0,0)');
            ctx.fillStyle = glow;
            ctx.beginPath();
            ctx.arc(x, y, size * 2.2, 0, Math.PI * 2);
            ctx.fill();
          }*/
        }

        const dataUrl = canvas.toDataURL('image/png');
        link.style.setProperty('--stardust-bg', `url(${dataUrl})`);
      } catch (err) {
        console.warn('Stardust generation failed:', err);
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
