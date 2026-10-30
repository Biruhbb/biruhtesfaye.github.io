## 2026-10-30 - Keyboard Focus Rings on Dark Themes
**Learning:** On dark-themed applications (e.g. background `#111111`), default browser outline indicators (`rgb(16, 16, 16)`) are practically invisible against dark surfaces, making keyboard navigation unusable.
**Action:** Always provide explicit `:focus-visible` styling with `--accent` color and `outline-offset` for interactive elements (`a`, `button`, `.project-card`, `.contact-link`).
