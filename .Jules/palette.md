## 2025-08-31 - Mobile Navigation Keyboard Accessibility and ARIA Disclosure Pattern
**Learning:** For disclosure components like mobile nav toggles, screen reader users rely on `aria-expanded` and `aria-controls` to understand control state. Additionally, keyboard users expect `Escape` to close overlay disclosures and return focus to the toggle element.
**Action:** When working on navigation menus or modal-like overlays, ensure `aria-controls` points to the target container, `aria-expanded` is dynamically updated, and `Escape` key handling restores focus to the triggering element.
