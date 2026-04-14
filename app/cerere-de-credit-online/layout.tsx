import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Cerere de Credit Online | Aplică în 5 Minute | Ideal Credit",
    description:
        "Completează cererea de credit online în câteva minute. Evaluăm rapid și te contactăm în 2-3 ore. Fără vizite la birou, fără documente în avans.",
    alternates: { canonical: "https://idealcredit.md/cerere-de-credit-online" },
};

export default function CerereLayout({ children }: { children: React.ReactNode }) {
    return children;
}
