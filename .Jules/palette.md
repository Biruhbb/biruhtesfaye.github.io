# Palette's UX Journal

## 2026-06-20 - Invisible Focus in Scroll-Animated Elements
**Learning:** Scroll-based fade-in animations on focusable elements (like cards, section containers, or buttons) create a keyboard accessibility failure. Keyboard users tabbing through the site can focus on invisible/faded-out (`opacity: 0`) elements before they scroll into view, leaving the user with a lost focus indicator.
**Action:** Always attach a `focusin` event listener to any elements hidden or transformed by scroll-animations, forcing them to transition immediately to their fully visible and interactive state (`opacity: 1`, `transform: translateY(0)`) upon receiving focus.

## 2026-06-20 - Global Focus-Visible in Dark-Themed Portfolios
**Learning:** Browser-default focus rings are often virtually invisible (e.g. dark blue or grey) against dark (#111111) backgrounds, which breaks WCAG keyboard navigation guidelines.
**Action:** Apply a global, consistent `:focus-visible` ring utilizing the theme's key high-contrast accent color (`var(--accent)`) with an offset to provide a crisp, accessible indicator.
