## 2026-11-07 - Accessible Keyboard Focus & Reduced Motion System

**Learning:** In dark-themed minimalist portfolios, default browser focus rings are often either invisible or clashing with the dark background. Adding a global `:focus-visible` rule targeting keyboard users with a high-contrast theme accent (`var(--accent)`), offset, and border radius maintains clean aesthetics for pointer interactions while making keyboard navigation distinct and accessible. Pairing animated entrance transforms with `@media (prefers-reduced-motion: reduce)` protects users sensitive to motion sickness.
**Action:** Always provide explicit `:focus-visible` outlines using brand tokens and include reduced-motion media query overrides for animations and smooth scrolling.
