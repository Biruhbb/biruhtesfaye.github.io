## 2025-07-11 - Mobile Navigation & Keyboard Focus
**Learning:** For static sites without a dev server, mobile navigation must explicitly manage `aria-expanded` in the main JS file. High-contrast focus indicators using `:focus-visible` with an offset ensure accessibility on dark backgrounds without affecting mouse users.
**Action:** Always include `aria-expanded` and `:focus-visible` when reviewing or building navigation components. Mark decorative contact icons as `aria-hidden`.
