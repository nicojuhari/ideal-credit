import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contacte Ideal Credit | Telefon, Email și Adrese",
    description:
        "Vorbim direct - sună, scrie pe WhatsApp sau lasă un mesaj. Telefon, email și adresele oficiilor Ideal Credit din Chișinău și Căușeni.",
    alternates: { canonical: "https://idealcredit.md/contacte" },
    openGraph: {
        type: "website",
        locale: "ro_MD",
        siteName: "Ideal Credit",
        url: "https://idealcredit.md/contacte",
        title: "Contacte Ideal Credit | Telefon, Email și Adrese",
        description:
            "Vorbim direct - sună, scrie pe WhatsApp sau lasă un mesaj. Telefon, email și adresele oficiilor Ideal Credit din Chișinău și Căușeni.",
    },
};

export default function ContacteLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
