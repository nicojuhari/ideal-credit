import type { Metadata } from "next";
import { localBusinessChisinauSchema, localBusinessCauseniSchema } from "@/lib/schema";

export const metadata: Metadata = {
    title: "Contacte | Ideal Credit",
    description:
        "Contactează Ideal Credit - telefon, email și adresele oficiilor din Chișinău și Căușeni. Răspundem rapid la orice întrebare despre credite.",
    alternates: { canonical: "https://idealcredit.md/contacte" },
};

export default function ContacteLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify([localBusinessChisinauSchema, localBusinessCauseniSchema]),
                }}
            />
            {children}
        </>
    );
}
