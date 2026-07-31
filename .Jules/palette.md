# Palette's UX & Accessibility Journal

## 2026-06-29 - Scroll Animation Invisible Focus Traps
**Learning:** In highly animated portfolio sites, using scroll-based element reveals (like setting `opacity: 0` and `transform: translateY(20px)` on `.project-card` or sections) can create serious focus traps. If a keyboard user tabs through the page, they can focus interactive elements inside these invisible sections, making it impossible to see where focus is currently located.
**Action:** Always intercept focus via a `focusin` event listener on scroll-animated containers to instantly reveal them (setting `opacity: 1` and `transform: translateY(0)`), completely bypassing the transition delay/intersection logic for keyboard-only users.

## 2026-06-29 - Focus States in Dark-Themed Portfolios
**Learning:** Standard browser outlines (or thin grey outlines) are extremely difficult to see against deep dark backgrounds like `#111111`. Without a custom high-contrast focus indicator, keyboard-only users are effectively locked out of navigating the portfolio confidently.
**Action:** Implement a prominent `:focus-visible` ring utilizing a high-contrast theme token (like `var(--accent)`) with a clean `outline-offset` to keep the focus state extremely clear, modern, and aligned with the brand aesthetic.
