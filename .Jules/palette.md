## 2026-07-28 - Preventing Invisible Focus Traps on Scroll-Animated Elements
**Learning:** Elements animated on scroll (e.g., hidden initially with opacity: 0 and transform: translateY(20px)) can receive keyboard focus before they scroll into view. This creates an invisible focus trap where keyboard users are unable to see where their focus has landed.
**Action:** Always add a `focusin` event listener to scroll-animated elements or container components that instantly reveals them (setting opacity: 1 and resetting transform) when they or any of their descendants receive focus.
