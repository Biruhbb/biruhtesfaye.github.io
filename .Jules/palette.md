## 2026-08-28 - Focus Visible Outline on Dark Themes
**Learning:** In dark mode user interfaces without native focus indicators, interactive links and buttons can become completely invisible to keyboard navigation users.
**Action:** Always provide custom `:focus-visible` outline styles using a prominent design system accent color (`--accent`) with `outline-offset` to ensure clear focus visibility for keyboard users while preserving hover behavior for pointer interactions.
