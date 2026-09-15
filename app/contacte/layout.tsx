import type { Metadata } from "next";
import { localBusinessChisinauSchema, localBusinessCauseniSchema } from "@/lib/schema";

export const metadata: Metadata = {
 title:"Contactele companiei de creditare Ideal Credit",
 description:
"Contactează Ideal Credit - telefon, email și adresele oficiilor din Chișinău și Căușeni. Răspundem rapid la orice întrebare despre credite.",
 alternates: { canonical:"https://idealcredit.md/contacte" },
 openGraph: {
  type: "website",
  locale: "ro_MD",
  siteName: "Ideal Credit",
  title: "Contactele companiei de creditare Ideal Credit",
  description:
"Contactează Ideal Credit - telefon, email și adresele oficiilor din Chișinău și Căușeni. Răspundem rapid la orice întrebare despre credite.",
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
