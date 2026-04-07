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

export const cerereSchema = z.object({
  // Step 1
  suma: numericString("Suma")
    .refine((v) => Number(v) >= 10000, "Suma minimă este 10.000 MDL")
    .refine((v) => Number(v) <= 300000, "Suma maximă este 300.000 MDL"),
  termen: numericString("Termenul")
    .refine((v) => Number(v) >= 6, "Termenul minim este 6 luni")
    .refine((v) => Number(v) <= 60, "Termenul maxim este 60 luni"),
  scopul_creditului: z.string().min(1, "Scopul creditului este obligatoriu"),

  // Step 2
  nume: z.string().min(3, "Numele trebuie să conțină cel puțin 3 caractere"),
  prenume: z.string().min(3, "Prenumele trebuie să conțină cel puțin 3 caractere"),
  adresa_domiciliu: z.string().min(3, "Adresa de reședință este obligatorie"),
  telefon: z
    .string()
    .min(1, "Telefon este obligatoriu")
    .regex(/^\d{9}$/, "Telefonul trebuie să conțină 9 cifre"),

  // Step 3
  venituri: optionalNumericString("Venitul"),
  datorii: optionalNumericString("Datoriile"),
  locul_de_munca: z
    .string()
    .min(3, "Locul de muncă trebuie să conțină cel puțin 3 caractere"),
  bunuri: z.array(z.string()).min(1, "Acest câmp este obligatoriu"),

  // Step 4
  terms: z.literal(true, { message: "Acceptați condițiile." }),
  have_garant: z.literal(true, { message: "Este necesar cel puțin un fidejusor." }),
  in_oficiu: z.literal(true, { message: "Prezența în oficiu este obligatorie." }),
});

export type CerereFormValues = z.input<typeof cerereSchema>;

export const STEPS: { label: string; fields: (keyof CerereFormValues)[] }[] = [
  { label: "Date despre credit", fields: ["suma", "termen", "scopul_creditului"] },
  { label: "Date personale", fields: ["nume", "prenume", "adresa_domiciliu", "telefon"] },
  { label: "Date financiare", fields: ["venituri", "datorii", "locul_de_munca", "bunuri"] },
  { label: "Declarații", fields: ["terms", "have_garant", "in_oficiu"] },
];

export const BUNURI_OPTIONS = [
  "Casă sau Apartament",
  "Terenuri (agricole sau pentru construcție)",
  "Garaj, cameră în cămin, altele ...",
  "Nu am nimic",
];
