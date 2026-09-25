## 2026-09-25 - High-Contrast Focus Rings in Dark-Themed Portfolios
**Learning:** Default browser focus rings on dark theme backgrounds (`--bg: #111111`) are virtually invisible, failing WCAG 2.4.7 for keyboard users.
**Action:** Always map `:focus-visible` to the design system's accent token (`var(--accent)` or `#3d8c5e`) with explicit `outline-offset` to ensure sharp visibility without affecting mouse click interactions.
