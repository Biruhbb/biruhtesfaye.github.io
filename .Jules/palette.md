## 2025-05-15 - Mobile Navigation Accessibility in Vanilla JS
**Learning:** In a vanilla JavaScript environment without a state-driven framework, accessibility attributes like `aria-expanded` must be manually synchronized in every event listener that modifies the UI state (e.g., both the main toggle button and individual navigation links that close the menu).
**Action:** When implementing mobile menus, identify all interaction points that can open or close the menu and ensure they all update the corresponding ARIA attributes to keep the accessibility tree in sync with the visual state.
