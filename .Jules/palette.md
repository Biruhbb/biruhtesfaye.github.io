## 2026-10-28 - Mobile Nav Accessibility & Keyboard Navigation
**Learning:** Mobile navigation menus should expose dynamic `aria-expanded` attributes and support `Escape` key dismissal with focus restoration to maintain accessibility for screen reader and keyboard users.
**Action:** Always bind `Escape` keydown listeners and manage `aria-expanded` attributes dynamically on mobile hamburger toggle buttons.
