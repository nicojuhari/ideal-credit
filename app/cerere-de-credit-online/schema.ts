import { z } from "zod";
import { MOLDOVA_MOBILE_REGEX, TERMEN_OPTIONS, SCOP_OPTIONS } from "./constants";

const numericString = (label: string) =>
    z
        .string()
        .min(1, `${label} este obligatoriu`)
        .refine((v) => !isNaN(Number(v)), `${label} trebuie să conțină doar cifre`);

const optionalNumericString = (label: string) => z.string().refine((v) => v === "" || !isNaN(Number(v)), `${label} trebuie să conțină doar cifre`);

export const cerereSchema = z.object({
    // Gates (asked first)
    have_garant: z.boolean({ error: "Selectați Da sau Nu" }).refine((v) => v === true, "Este necesar cel puțin un fidejusor."),
    in_oficiu: z.boolean({ error: "Selectați Da sau Nu" }).refine((v) => v === true, "Prezența în oficiu este obligatorie."),

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
    locul_de_munca: z.string().min(3, "Locul de muncă trebuie să conțină cel puțin 3 caractere"),
    are_bunuri: z.boolean({ error: "Selectați Da sau Nu" }),

    // Set true on submit (no checkbox)
    terms: z.boolean().refine((v) => v === true, "Acceptați condițiile."),
});

export type CerereFormValues = z.input<typeof cerereSchema>;
