// Nav scroll effect
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
});

// Mobile nav toggle
const toggle = document.getElementById('navToggle');
const links = document.getElementById('navLinks');
if (toggle && links) {
  // Initialize ARIA accessibility attributes
  toggle.setAttribute('aria-expanded', 'false');
  toggle.setAttribute('aria-controls', 'navLinks');
  toggle.querySelectorAll('span').forEach(span => span.setAttribute('aria-hidden', 'true'));

  const setMenuOpenState = (open) => {
    if (open) {
      links.classList.add('open');
      toggle.setAttribute('aria-expanded', 'true');
    } else {
      links.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  };

  toggle.addEventListener('click', () => {
    const isOpen = links.classList.contains('open');
    setMenuOpenState(!isOpen);
  });

  // Close on link click
  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => setMenuOpenState(false));
  });

  // Close on Escape key press and restore focus to toggle button
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && links.classList.contains('open')) {
      setMenuOpenState(false);
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
});
