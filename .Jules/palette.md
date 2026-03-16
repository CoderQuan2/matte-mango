# Palette's UX Journal

## 2026-03-16 - [Button Accessibility and Minimum Touch Targets]
**Learning:** When adding loading states to buttons, the button's width often collapses or shifts depending on the text (e.g., "Download PDF" vs "Downloading..."). This layout shift can be jarring. Additionally, icon-only or flex buttons easily fall below the 44px minimum touch target recommendation for mobile accessibility.
**Action:** Always enforce a `min-width` and `min-height` (e.g., `min-width: 180px`, `min-height: 48px`) on interactive buttons that swap inner content to prevent layout shifts during state changes and to ensure robust mobile tap targets. Always accompany visual loading spinners with `aria-busy="true"` so screen readers immediately announce the state change without waiting for DOM text to be read.
