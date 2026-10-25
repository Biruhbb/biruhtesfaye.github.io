## 2025-10-25 - Mobile Navigation Toggle ARIA & Escape Key Handling
**Learning:** Vanilla JS mobile menus require explicit initialization of `aria-expanded="false"` and `aria-controls="navLinks"` on the toggle button alongside an `Escape` key listener that closes the menu and returns focus to the toggle button.
**Action:** Always pair `aria-expanded` state synchronization with `Escape` keypress focus restoration on custom mobile menu toggles.
