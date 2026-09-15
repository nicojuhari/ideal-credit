import type { Metadata } from "next";

export const metadata: Metadata = {
 title:"Cerere de Credit Online | Aplică în 5 Minute | Ideal Credit",
 description:
"Completează cererea de credit online în câteva minute. Evaluăm rapid și te contactăm în 2-3 ore. Fără vizite la birou, fără documente în avans.",
 alternates: { canonical:"https://idealcredit.md/cerere-de-credit-online" },
 openGraph: {
  type: "website",
  locale: "ro_MD",
  siteName: "Ideal Credit",
  title: "Cerere de Credit Online | Aplică în 5 Minute | Ideal Credit",
  description:
"Completează cererea de credit online în câteva minute. Evaluăm rapid și te contactăm în 2-3 ore. Fără vizite la birou, fără documente în avans.",
  images: [{ url: "https://idealcredit.md/ideal-credit-og.webp", alt: "Credite nebancare pentru afaceri și nevoi personale" }],
 },
};

export default function CerereLayout({ children }: { children: React.ReactNode }) {
 return children;
}
