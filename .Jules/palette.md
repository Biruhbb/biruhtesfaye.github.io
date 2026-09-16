## 2025-09-16 - Accessible Skip Link & Landmark Navigation Pattern
**Learning:** Adding a visible-on-focus skip link targeting `<main id="main-content" tabindex="-1">` along with dynamic `aria-expanded` and Escape key handling on mobile menus significantly improves screen reader navigation and keyboard usability across static HTML portfolio sites.
**Action:** Always include a skip link as the first child of `<body>`, wrap page content in `<main id="main-content" tabindex="-1">`, and attach keyboard Escape handlers to overlay navigation toggles.
