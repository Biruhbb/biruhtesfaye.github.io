## 2026-09-21 - Copy-to-Clipboard on Contact Links
**Learning:** Desktop users clicking `mailto:` or `tel:` links are often disrupted by unexpected system handler popups or unconfigured default app errors. Providing dedicated copy-to-clipboard buttons with inline visual feedback allows effortless clipboard interaction.
**Action:** When displaying contact details (email/phone), pair clickable links with accessible copy buttons (`data-copy`, `aria-label`, `:focus-visible`) and temporary state feedback ("Copied!").
