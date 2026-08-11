// Nav scroll effect
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
});

// Mobile nav toggle
const toggle = document.getElementById('navToggle');
const links = document.getElementById('navLinks');
if (toggle && links) {
  // Initialize ARIA attributes
  toggle.setAttribute('aria-expanded', 'false');
  toggle.setAttribute('aria-controls', 'navLinks');

  const toggleMenu = (forceState) => {
    const isOpen = forceState !== undefined ? forceState : links.classList.contains('open');
    const newState = !isOpen;
    links.classList.toggle('open', newState);
    toggle.setAttribute('aria-expanded', String(newState));
  };

  toggle.addEventListener('click', () => toggleMenu());

  // Close on link click
  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => toggleMenu(true));
  });

  // Support Escape key to close and restore focus
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && links.classList.contains('open')) {
      toggleMenu(true);
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

document.querySelectorAll('.project-card, .cs-section, .cs-cols, .img-grid-2, .img-grid-3, .img-full, .result-bar').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);

  // Prevent keyboard focus traps by immediately revealing the element if it or any of its children receive focus.
  el.addEventListener('focusin', () => {
    el.style.opacity = '1';
    el.style.transform = 'translateY(0)';
  });
});
