# Palette Journal

## 2026-08-11 - Mobile Navigation & Focus Accessibility
**Learning:** Animated CSS items and interactive elements hidden by scroll or collapse overlays can create severe keyboard navigation focus traps and low contrast visibility in dark mode portfolios if proper `:focus-visible` outline treatments and event handlers aren't explicitly established.
**Action:** Always provide explicit global `:focus-visible` overrides referencing the brand's primary/accent color token with a clean offset. Integrate `focusin` event handlers on any elements styled with scroll fade-in transitions (`opacity: 0`) to instantly reveal them on focus, and implement proper ARIA state-management/keyboard dismissals (`Escape` key support) for full accessibility.
