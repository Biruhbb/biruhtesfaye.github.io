## 2025-05-15 - Accessibility foundations for static portfolio
**Learning:** For static sites without component systems, accessibility improvements (like skip-to-content links and ARIA state management) must be applied consistently across all HTML files. Standardizing the primary container ID (e.g., `#main-content`) simplifies the implementation of skip links.
**Action:** Always verify that `#main-content` exists and is correctly targeted by skip links on all pages. Ensure JavaScript correctly synchronizes ARIA states (`aria-expanded`) with visual state changes.
