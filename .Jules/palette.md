# Palette's Journal

## 2026-03-06 - Dynamic ARIA Attributes in Static Multi-page Portfolios
**Learning:** In static vanilla websites with multiple files, manually adding ARIA attributes (like `aria-expanded` and `aria-controls`) to common components (such as a navigation bar) is error-prone and hard to maintain. Managing ARIA states and keyboard interactions (Escape key closing and focus restoration) dynamically in a single global `js/main.js` file is significantly cleaner and ensures 100% compliance across all pages.
**Action:** Always write a dynamic global script to enhance static HTML navigation components rather than duplicating stateful attributes in every single static page.

## 2026-03-06 - Preventing Invisible Focus Traps in Scroll Animations
**Learning:** Scroll animations that set elements to `opacity: 0` and transform them off-screen create a severe keyboard accessibility issue: users can tab into invisible elements before they are scrolled into view. Adding a simple `focusin` listener on the animated wrapper to instantly show the container once focused resolves this issue without disrupting the visual design.
**Action:** For all future projects with fade-in/slide-in scroll animations, attach a bubbling `focusin` listener to the animated containers to instantly trigger full visibility when focused.
