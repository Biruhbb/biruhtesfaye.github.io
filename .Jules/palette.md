## 2025-05-10 - Dynamic Disclosure Accessibility on Mobile Navigation
**Learning:** Mobile navigation toggles without dynamic `aria-expanded` attributes leave screen reader users without feedback when opening or closing disclosure menus. Additionally, keyboard users require `Escape` key handling to close overlays and return focus.
**Action:** Always programmatically set and synchronize `aria-expanded` and `aria-controls` on menu toggles, and handle `Escape` key presses to dismiss menus and return focus to the toggle element.
