/** Shared contact facts for the v4 chrome. */
export const PHONE_TEL = "tel:+37361252777";
export const PHONE_DISPLAY = "0612 52 777";
export const BRAND_NAME = "Ideal Credit";
export const LOGO_SRC = "/ideal-credit-logo.svg";
export const APPLY_HREF = "/cerere-de-credit-online";

/** CTA target carrying the live calculator values. */
export function applyHref(amount?: number, term?: number): string {
    if (amount == null || term == null) return APPLY_HREF;
    return `${APPLY_HREF}?amount=${amount}&term=${term}`;
}
