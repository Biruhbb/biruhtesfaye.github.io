# Palette's Journal - Critical UX/Accessibility Learnings

## 2026-06-20 - Portfolio Scroll Animation Focus Traps
**Learning:** Adding IntersectionObserver scroll-based animations (fade-in, transform) can lead to keyboard focus traps if elements or their interactive descendants receive focus before the element is fully visible or scrolled into view. Tabbing through interactive elements should instantly reveal them.
**Action:** In `js/main.js`, ensure `focusin` event listeners are added to animated elements/parents so that they instantly become visible (`opacity: 1`, `transform: translateY(0)`) when focused, or when a child of theirs is focused.

## 2026-06-20 - Global Focus Ring Styling in Dark Themes
**Learning:** Standard browser outline focus rings are often low-contrast or visually disjointed on dark theme portfolio backgrounds. Designing a custom, highly visible focus style using `outline` ensures proper keyboard accessibility.
**Action:** Ensure custom `:focus-visible` styles with a clear high-contrast outline (`outline: 2px solid var(--accent) !important; outline-offset: 4px !important;`) are globally defined in `css/style.css`.
