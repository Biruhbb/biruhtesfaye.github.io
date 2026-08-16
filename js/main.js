// Nav scroll effect
const nav = document.getElementById('nav');
if (nav) {
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  });
}

// Mobile nav toggle
const toggle = document.getElementById('navToggle');
const links = document.getElementById('navLinks');
if (toggle && links) {
  toggle.setAttribute('aria-controls', 'navLinks');
  if (!toggle.hasAttribute('aria-expanded')) {
    toggle.setAttribute('aria-expanded', 'false');
  }

  const setMenuOpen = (open) => {
    links.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  };

  toggle.addEventListener('click', () => {
    const isOpen = links.classList.contains('open');
    setMenuOpen(!isOpen);
  });

  // Close on link click
  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => setMenuOpen(false));
  });

  // Close on Escape key press
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && links.classList.contains('open')) {
      setMenuOpen(false);
      toggle.focus();
    }
  });
}

// Fade in on scroll & handle focus for scroll-animated elements
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

  // Instantly show element on focusin to prevent focus traps
  el.addEventListener('focusin', () => {
    el.style.opacity = '1';
    el.style.transform = 'translateY(0)';
  });

  observer.observe(el);
});
