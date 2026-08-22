## 2026-06-20 - Accessible Mobile Navigation & Focus States
**Learning:** Mobile navigation hamburger buttons require explicit `aria-expanded` state tracking and `aria-controls` linkage for screen reader users, while visible `:focus-visible` indicators ensure seamless keyboard navigation across interactive dark-mode components.
**Action:** Always maintain `aria-expanded` sync in JS event handlers when toggling overlays, and declare `:focus-visible` outlines with high-contrast accent colors and offsets.
