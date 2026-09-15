import type { Metadata } from "next";
import { localBusinessChisinauSchema, localBusinessCauseniSchema } from "@/lib/schema";

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
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessChisinauSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessCauseniSchema) }} />
            {children}
        </>
    );
}
