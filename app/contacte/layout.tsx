import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contacte: telefon, e-mail și adrese | Ideal Credit",
    description:
        "Sună sau scrie pe WhatsApp. Oficii în Căușeni și Chișinău, deschise luni–vineri, 8:30–16:30. Telefon, e-mail și adrese pe hartă.",
    alternates: { canonical: "https://idealcredit.md/contacte" },
    openGraph: {
        type: "website",
        locale: "ro_MD",
        siteName: "Ideal Credit",
        url: "https://idealcredit.md/contacte",
        title: "Contacte: telefon, e-mail și adrese | Ideal Credit",
        description:
            "Sună sau scrie pe WhatsApp. Oficii în Căușeni și Chișinău, deschise luni–vineri, 8:30–16:30. Telefon, e-mail și adrese pe hartă.",
    },
};

export default function ContacteLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
