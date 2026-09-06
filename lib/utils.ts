import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

/*
 * tailwind-merge must know the v4 design tokens (design-system/tokens.css),
 * otherwise `text-bg` (a colour) and `text-small` (a size) look like two
 * font-sizes and one of them gets dropped. Keep these lists in sync with tokens.css.
 */
const DS_COLORS = [
  "bg", "surface", "section", "inset", "hover", "text", "text-2", "text-3", "brand", "brand-light", "quote", "verdict-low",
  "line", "line-strong", "line-chip", "line-control", "line-dot", "brand-border", "row-hover", "ink-muted", "header",
];
const DS_TEXT = [
  "h1", "h1-service", "h2", "h2-cta", "h3-product", "h3-check", "h3-card", "h3-step", "h3-row", "h3-guide", "panel-title",
  "pullquote", "lead", "body", "row-title", "row", "small", "meta", "fine", "eyebrow", "strip",
  "figure-xl", "figure-lg", "figure-md", "figure", "figure-sm", "figure-xs",
];
const DS_SPACING = ["shell", "header", "card", "card-product", "card-check", "card-guide", "btn-sm", "btn", "btn-md", "btn-lg", "btn-xl", "hit"];
const DS_FONTS = ["ui", "figure"];

const twMerge = extendTailwindMerge({
  extend: {
    theme: {
      color: DS_COLORS,
      text: DS_TEXT,
      spacing: DS_SPACING,
      font: DS_FONTS,
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

//years one market from 15.04.2010
export const yearsSinceFoundation = (() => {
  const founded = new Date("2010-04-15");
  const today = new Date();
  let years = today.getFullYear() - founded.getFullYear();
  // Adjust if anniversary hasn't occurred yet this year
  if (today.getMonth() < founded.getMonth() || (today.getMonth() === founded.getMonth() && today.getDate() < founded.getDate())) {
    years--;
  }
  return years;
})();
