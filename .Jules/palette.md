## 2025-02-20 - Decorative Glyphs & External Links
**Learning:** Decorative unicode glyphs (e.g. ✉, ✆, ✓) in link containers and status indicators are read aloud by screen readers unless hidden with `aria-hidden="true"`. External links opening in a new tab require explicit `aria-label` screen reader announcements and `rel="noopener noreferrer"` security attributes.
**Action:** Always mark standalone decorative icon/glyph spans with `aria-hidden="true"` and pair `target="_blank"` links with `aria-label="... (opens in a new tab)"`.
