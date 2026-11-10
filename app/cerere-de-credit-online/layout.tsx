import type { Metadata } from "next";

export const metadata: Metadata = {
 title:"Cerere de credit online, în 5 minute | Ideal Credit",
 description:
"Completezi cererea de credit online în 5 minute. Te sunăm și îți spunem ce acte trebuie. La oficiu vii doar ca să semnezi contractul.",
 alternates: { canonical:"https://idealcredit.md/cerere-de-credit-online" },
 openGraph: {
  type: "website",
  locale: "ro_MD",
  siteName: "Ideal Credit",
  url: "https://idealcredit.md/cerere-de-credit-online",
  title: "Cerere de credit online, în 5 minute | Ideal Credit",
  description:
"Completezi cererea de credit online în 5 minute. Te sunăm și îți spunem ce acte trebuie. La oficiu vii doar ca să semnezi contractul.",
 },
};

export default function CerereLayout({ children }: { children: React.ReactNode }) {
 return children;
}
