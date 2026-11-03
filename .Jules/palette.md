## 2026-11-03 - Accessible Keyboard Focus & Reduced Motion System

**Learning:** The portfolio lacked visible focus indicators on links and buttons, and had scroll-linked transitions that could cause discomfort to users with motion sensitivity. Adding a global `:focus-visible` outline using the existing design accent (`var(--accent)`) ensures high-contrast keyboard navigability without altering mouse-click aesthetics.
**Action:** Always define `:focus-visible` with `outline-offset` using theme tokens and pair animation transitions with `@media (prefers-reduced-motion: reduce)` across static sites.
