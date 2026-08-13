// Nav scroll effect
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
});

// Mobile nav toggle
const toggle = document.getElementById('navToggle');
const links = document.getElementById('navLinks');
if (toggle && links) {
  // Set initial ARIA attributes if not present in markup
  if (!toggle.hasAttribute('aria-expanded')) toggle.setAttribute('aria-expanded', 'false');
  if (!toggle.hasAttribute('aria-controls')) toggle.setAttribute('aria-controls', 'navLinks');

  const setMenuState = (isOpen) => {
    if (isOpen) {
      links.classList.add('open');
      toggle.setAttribute('aria-expanded', 'true');
    } else {
      links.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  };

  toggle.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = links.classList.contains('open');
    setMenuState(!isOpen);
  });

  // Close on link click
  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => setMenuState(false));
  });

  // Support Escape key to close and restore focus
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && links.classList.contains('open')) {
      setMenuState(false);
      toggle.focus();
    }
  });

  // Close menu if clicking outside of nav
  document.addEventListener('click', (e) => {
    if (links.classList.contains('open') && !toggle.contains(e.target) && !links.contains(e.target)) {
      setMenuState(false);
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

  // Instantly reveal element on focus to prevent focus trap
  el.addEventListener('focusin', () => {
    el.style.opacity = '1';
    el.style.transform = 'translateY(0)';
  });
});
