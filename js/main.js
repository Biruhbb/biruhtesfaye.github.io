// Nav scroll effect
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
});

// Mobile nav toggle
const toggle = document.getElementById('navToggle');
const links = document.getElementById('navLinks');
if (toggle && links) {
  const updateAria = () => {
    const isOpen = links.classList.contains('open');
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  };

  toggle.addEventListener('click', () => {
    links.classList.toggle('open');
    updateAria();
  });
  // Close on link click
  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      links.classList.remove('open');
      updateAria();
    });
  });

  // Support Escape key to close and restore focus
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && links.classList.contains('open')) {
      links.classList.remove('open');
      updateAria();
      toggle.focus();
    }
  });
}

// Fade in on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = '1';
      e.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.08 });

const animatedElements = document.querySelectorAll('.project-card, .cs-section, .cs-cols, .img-grid-2, .img-grid-3, .img-full, .result-bar');

animatedElements.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);

  // Prevent invisible focus traps by instantly showing element if it or its descendants are focused
  el.addEventListener('focusin', () => {
    el.style.opacity = '1';
    el.style.transform = 'translateY(0)';
  });
});
