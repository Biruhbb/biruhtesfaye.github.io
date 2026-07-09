## 2025-05-14 - [Mobile Navigation Accessibility]
**Learning:** In static sites with custom mobile menus, developers often forget to communicate the menu state (`expanded`/`collapsed`) to assistive technologies. Using `aria-expanded` in conjunction with `display: none` or `visibility: hidden` ensures screen reader users know the button toggles content.
**Action:** Always pair mobile menu toggle logic with `aria-expanded` attribute updates in JavaScript.
