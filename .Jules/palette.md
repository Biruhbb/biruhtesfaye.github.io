## 2026-08-04 - Invisible Focus Traps in Scroll-Animated Layouts
**Learning:** Scroll-based animations (e.g. elements with opacity: 0 and translate transitions controlled by IntersectionObserver) can hide interactive elements from screen. Keyboard users navigating with Tab can focus on these hidden elements, causing confusion and "invisible focus traps" where the keyboard focus disappears.
**Action:** Add a `focusin` event listener to any elements hidden via scroll-animation to instantly make them visible (e.g., opacity: 1, transform: none) if they or their child elements receive keyboard focus.

## 2026-08-04 - Dark Theme Keyboard Focus Indicators
**Learning:** Dark-themed websites often fail basic accessibility (WCAG 2.1 SC 2.4.7 Focus Visible) because default browser outlines have poor contrast against dark backgrounds.
**Action:** Always specify explicit focus-visible styles (e.g., `:focus-visible { outline: 2px solid var(--accent); outline-offset: 4px; }`) to ensure prominent and high-contrast indicators on interactive elements.
