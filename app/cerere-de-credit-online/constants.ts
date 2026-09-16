import type { CerereFormValues } from "./schema";

/** Moldova mobile: 9 digits, starts with 06 or 07 */
export const MOLDOVA_MOBILE_REGEX = /^0[67]\d{7}$/;

export const TERMEN_OPTIONS = ["6", "12", "16", "24", "36", "48"] as const;

export const SCOP_OPTIONS = ["Pentru nevoi personale", "Pentru afaceri", "Refinanțare", "Procurare bun imobil", "Altele"] as const;

export type StepKind = "gate" | "form" | "submit";

export const STEPS: {
    label: string;
    kind: StepKind;
    fields: (keyof CerereFormValues)[];
}[] = [
    { label: "Fidejusor", kind: "gate", fields: ["have_garant"] },
    { label: "Vizită în oficiu", kind: "gate", fields: ["in_oficiu"] },
    { label: "Date despre credit", kind: "form", fields: ["suma", "termen", "scopul_creditului"] },
    { label: "Date personale", kind: "form", fields: ["nume", "prenume", "adresa_domiciliu", "telefon"] },
    { label: "Venit & credite", kind: "form", fields: ["venituri", "are_alte_credite", "locul_de_munca"] },
    { label: "Bunuri & trimitere", kind: "submit", fields: ["are_bunuri"] },
];
