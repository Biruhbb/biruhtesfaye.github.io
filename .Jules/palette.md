## 2026-08-23 - Dynamic Mobile Overlay Accessibility & Escape Key Dismissal
**Learning:** Custom hamburger menus in static websites often toggle visibility CSS classes without syncing `aria-expanded` attributes or handling keyboard dismissal, breaking accessible navigation.
**Action:** Always maintain two-way `aria-expanded` state on navigation toggles and attach an `Escape` key event listener to close open mobile overlays and return focus to the toggle button.
