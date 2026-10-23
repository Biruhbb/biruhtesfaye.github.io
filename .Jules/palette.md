## 2025-02-18 - Dynamic ARIA State & Keyboard Traps in Vanilla Mobile Navigations
**Learning:** Pure HTML/CSS mobile hamburger menus that toggle classes (e.g. `.open`) without state management leave screen reader users unaware of expansion state and lock keyboard users if `Escape` key handlers and focus management are missing.
**Action:** In vanilla JS sites, centralize mobile nav toggle logic to set `aria-expanded`, `aria-controls`, `aria-hidden` on decorative spans, and attach global `Escape` listeners that restore focus to `#navToggle`.
