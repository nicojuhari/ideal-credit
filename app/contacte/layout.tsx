import type { Metadata } from "next";
import { localBusinessChisinauSchema, localBusinessCauseniSchema } from "@/lib/schema";

export const metadata: Metadata = {
 title:"Vorbim Direct | Contactele Ideal Credit",
 description:
"Vorbim direct - sună, scrie pe WhatsApp sau lasă un mesaj. Telefon, email și adresele oficiilor Ideal Credit din Chișinău și Căușeni.",
 alternates: { canonical:"https://idealcredit.md/contacte" },
 openGraph: {
  type: "website",
  locale: "ro_MD",
  siteName: "Ideal Credit",
  title: "Vorbim Direct | Contactele Ideal Credit",
  description:
"Vorbim direct - sună, scrie pe WhatsApp sau lasă un mesaj. Telefon, email și adresele oficiilor Ideal Credit din Chișinău și Căușeni.",
  images: [{ url: "https://idealcredit.md/ideal-credit-og.webp", alt: "Credite nebancare pentru afaceri și nevoi personale" }],
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
