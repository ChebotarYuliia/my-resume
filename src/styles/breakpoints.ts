// Single source of truth for breakpoints — consumed directly in .ts/.tsx,
// and mirrored into SCSS via `yarn generate:breakpoints`
// (scripts/generate-breakpoints-scss.mjs -> src/styles/_breakpoints.generated.scss).
export const BREAKPOINTS = {
  mobile: 480,
  tablet: 768,
  desktop: 1024,
  wide: 1300,
} as const;
