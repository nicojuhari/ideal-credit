import type { Metadata } from "next";
import Container from "@/components/ds/Container";
import Accent from "@/components/ds/Accent";
import { ButtonPrimary, ButtonSecondary } from "@/components/ds/Button";
import Products from "@/components/home/Products";
import ProductFaq from "@/components/product/ProductFaq";
import type { FaqItem } from "@/components/product/ProductFaq";
import WhyUs from "@/components/home/WhyUs";
import ClosingCta from "@/components/home/ClosingCta";

export const metadata: Metadata = {
    title: "Soluții de Credit pentru Fiecare Situație | Ideal Credit",
    description:
        "6 soluții de credit pentru fiecare situație: afaceri, investiții, agricultură, auto, reparație și nevoi personale. Dobândă fixă, decizie rapidă.",
    alternates: { canonical: "https://idealcredit.md/credite" },
    openGraph: {
        type: "website",
        locale: "ro_MD",
        siteName: "Ideal Credit",
        title: "Soluții de Credit pentru Fiecare Situație | Ideal Credit",
        description:
            "6 soluții de credit pentru fiecare situație: afaceri, investiții, agricultură, auto, reparație și nevoi personale. Dobândă fixă, decizie rapidă.",
        images: [{ url: "https://idealcredit.md/ideal-credit-og.webp", alt: "Credite nebancare pentru afaceri și nevoi personale" }],
    },
};

const hubFaqItems: FaqItem[] = [
    {
        question: "Ce este o organizație de creditare nebancară (OCN)?",
        answer: "O OCN este o instituție financiară autorizată și supravegheată de CNPF, care oferă credite fără a fi bancă. Procesul de aprobare este mai rapid (2-3 ore pentru persoane fizice, 1-2 zile lucrătoare pentru afaceri), documentația este mai simplă, iar analiza dosarului este adaptată situației reale a fiecărui client.",
    },
    {
        question: "Cât timp durează aprobarea unui credit?",
        answer: "Pentru persoane fizice, răspundem în 2-3 ore. Pentru credite de afaceri, analiza dosarului durează 1-2 zile lucrătoare. Dacă documentele sunt complete, fondurile pot fi disponibile în aceeași zi sau ziua lucrătoare următoare.",
    },
    {
        question: "Există comisioane ascunse?",
        answer: "Nu. Toate costurile - dobânda, DAE și orice penalități posibile - sunt prezentate clar înainte de semnarea contractului. Ce citești în contract, aia plătești.",
    },
    {
        question: "Pot obține credit dacă am un profil mai puțin standard?",
        answer: "Da. Analizăm situația reală, nu doar un scor de credit. Luăm în considerare istoricul de activitate, fluxul de numerar și capacitatea actuală de rambursare.",
    },
];

export default function CreditePage() {
    return (
        <div className="dc bg-dc-bg">
            <div className="dc-section dc-section--hero">
                <Container className="flex flex-col items-center gap-8 text-center">
                    <p className="flex items-start gap-2.5 text-xs font-medium uppercase tracking-[.1em] text-dc-text-muted">
                        <span className="mt-[3px] block h-[9px] w-[9px] shrink-0 bg-dc-proof" aria-hidden />
                        Registrul de soluții · 6 credite
                    </p>
                    <h1 className="max-w-[900px] text-[clamp(52px,9vw,124px)] font-semibold leading-[.92] tracking-[-.048em] text-dc-text">
                        Credite pentru <Accent>fiecare situație.</Accent>
                    </h1>
                    <p className="max-w-[620px] text-[19px] leading-[1.55] text-dc-text-muted">
                        Finanțare pentru afaceri și persoane fizice. Dobândă fixă, costuri clare, decizie rapidă.
                    </p>
                    <div className="flex flex-wrap justify-center gap-3.5">
                        <ButtonPrimary href="/cerere-de-credit-online">Cerere online</ButtonPrimary>
                        <ButtonSecondary href="/contacte">Contactează-ne</ButtonSecondary>
                    </div>
                </Container>
            </div>

            <Products />
            <ProductFaq
                marker="Întrebări"
                title={
                    <>
                        Întrebări despre <Accent>credite</Accent>
                    </>
                }
                items={hubFaqItems}
            />
            <WhyUs />
            <ClosingCta />
        </div>
    );
}
