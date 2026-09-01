## 2026-09-01 - Mobile Nav Accessibility & Keyboard Dismissal
**Learning:** Mobile disclosure navigation toggles require clear state indicators (`aria-expanded`, `aria-controls`) for screen readers and keyboard shortcut support (`Escape` key listener) to dismiss open menus while restoring focus to the trigger element.
**Action:** Always pair mobile menu toggle triggers with dynamic `aria-expanded` state synchronization and `Escape` key focus-restoration logic.
