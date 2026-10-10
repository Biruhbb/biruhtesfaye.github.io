## 2026-10-10 - Mobile Navigation Accessibility and Keyboard Focus States
**Learning:** Dark theme portfolios often omit `:focus-visible` outlines, rendering keyboard focus invisible. Dynamic `aria-expanded` and Escape key handling on mobile toggle buttons ensure screen readers and keyboard users can easily close overlaid mobile menus and return focus predictably.
**Action:** Always pair mobile menu toggles with dynamic `aria-expanded` attributes and keyboard `Escape` handlers that return focus to the toggle element.
