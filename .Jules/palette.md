## 2026-09-08 - Accessible Mobile Disclosure Menu Pattern
**Learning:** Hamburger navigation menus require dynamic `aria-expanded` state tracking and Escape key dismissal with focus restoration to `#navToggle` to ensure screen reader and keyboard accessibility.
**Action:** When working with disclosure components or mobile menus, always pair `aria-expanded` state updates with `Escape` key listeners that explicitly return focus to the toggle element.
