import { z } from "zod";

const numericString = (label: string) =>
  z
    .string()
    .min(1, `${label} este obligatoriu`)
    .refine((v) => !isNaN(Number(v)), `${label} trebuie să conțină doar cifre`);

const optionalNumericString = (label: string) =>
  z
    .string()
    .refine((v) => v === "" || !isNaN(Number(v)), `${label} trebuie să conțină doar cifre`);

/** Moldova mobile: 9 digits, starts with 06 or 07 */
export const MOLDOVA_MOBILE_REGEX = /^0[67]\d{7}$/;

export const TERMEN_OPTIONS = ["6", "12", "16", "24", "36", "48"] as const;

export const SCOP_OPTIONS = [
  "Pentru nevoi personale",
  "Pentru afaceri",
  "Refinanțare",
  "Procurare bun imobil",
  "Altele",
] as const;

export const cerereSchema = z.object({
  // Gates (asked first)
  have_garant: z
    .boolean({ error: "Selectați Da sau Nu" })
    .refine((v) => v === true, "Este necesar cel puțin un fidejusor."),
  in_oficiu: z
    .boolean({ error: "Selectați Da sau Nu" })
    .refine((v) => v === true, "Prezența în oficiu este obligatorie."),

  // Credit
  suma: numericString("Suma")
    .refine((v) => Number(v) >= 10000, "Suma minimă este 10.000 MDL")
    .refine((v) => Number(v) <= 300000, "Suma maximă este 300.000 MDL"),
  termen: z.enum(TERMEN_OPTIONS, { error: "Selectați termenul" }),
  scopul_creditului: z.enum(SCOP_OPTIONS, { error: "Selectați scopul creditului" }),

  // Personal
  nume: z.string().min(3, "Numele trebuie să conțină cel puțin 3 caractere"),
  prenume: z.string().min(3, "Prenumele trebuie să conțină cel puțin 3 caractere"),
  adresa_domiciliu: z.string().min(3, "Adresa de reședință este obligatorie"),
  telefon: z
    .string()
    .min(1, "Telefonul este obligatoriu")
    .regex(MOLDOVA_MOBILE_REGEX, "Introduceți un număr mobil din Moldova (06xxxxxxx sau 07xxxxxxx)"),

  // Financial
  venituri: optionalNumericString("Venitul"),
  are_alte_credite: z.boolean({ error: "Selectați Da sau Nu" }),
  locul_de_munca: z
    .string()
    .min(3, "Locul de muncă trebuie să conțină cel puțin 3 caractere"),
  are_bunuri: z.boolean({ error: "Selectați Da sau Nu" }),

  // Set true on submit (no checkbox)
  terms: z.boolean().refine((v) => v === true, "Acceptați condițiile."),
});

export type CerereFormValues = z.input<typeof cerereSchema>;

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
