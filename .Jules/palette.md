## 2025-02-23 - Mobile Navigation ARIA State and Keyboard Close
**Learning:** Mobile toggle buttons require dynamic `aria-expanded` attributes and explicit keyboard event handling (`Escape` key closing with focus restoration) so screen reader and keyboard users can navigate mobile menus cleanly without focus traps.
**Action:** Always pair `aria-expanded` and `aria-controls` on mobile toggles, sync attribute states in JavaScript, and add `Escape` key handling that returns focus to the toggle element.
