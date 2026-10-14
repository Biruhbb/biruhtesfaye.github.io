## 2026-10-14 - Mobile Nav ARIA & Escape Key Dismissal
**Learning:** Mobile navigation toggle buttons need dynamic state tracking (`aria-expanded`, `aria-controls`) and keyboard dismissal handling (`Escape` key press closing menu and returning focus) to ensure screen reader clarity and keyboard accessibility.
**Action:** Always provide explicit `aria-expanded` attributes on disclosure buttons and restore focus to the trigger element when closing modals/overlays via keyboard.
