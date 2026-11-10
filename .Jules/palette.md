# Palette's Journal

## 2026-11-10 - Keyboard Focus & Motion Accessibility
**Learning:** Default dark-themed web interfaces without explicit `:focus-visible` outlines make keyboard navigation invisible against dark backgrounds (#111111). Supplying an outline matching the design system's accent color (`var(--accent)`) with an offset provides clear accessibility without overriding custom component `border-radius`. Additionally, pairing this with `prefers-reduced-motion` provides essential accommodations for users with vestibular/motion disorders while keeping changes minimal (<20 lines).
**Action:** Always provide `:focus-visible` with `outline-offset` and include a `prefers-reduced-motion` override for all transitions/animations when working with dark theme portfolios.
