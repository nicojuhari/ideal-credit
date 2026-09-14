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
    title: "Toate Produsele de Credit | Ideal Credit Moldova",
    description:
        "Credite nebancare pentru afaceri și persoane fizice în Moldova. Capital de lucru, investiții, refinanțare, credit personal - dobândă fixă, decizie rapidă.",
    alternates: { canonical: "https://idealcredit.md/credite" },
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
            <div className="relative isolate dc-section dc-section--hero">
                <div className="dc-bg-squares" aria-hidden />
                <Container>
                    <div className="flex flex-col items-center gap-7 text-center">
                        <h1 className="text-[56px] md:text-[88px] font-bold leading-[1.02] tracking-[-.03em] text-dc-text">
                            <Accent>Credite</Accent>
                        </h1>
                        <p className="max-w-xl text-[19px] leading-relaxed text-dc-text-muted">
                            Finanțare pentru afaceri și persoane fizice. Dobândă fixă, costuri clare, decizie rapidă.
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-4">
                            <ButtonPrimary href="/cerere-de-credit-online">Cerere online</ButtonPrimary>
                            <ButtonSecondary href="/contacte">Contactează-ne</ButtonSecondary>
                        </div>
                    </div>
                </Container>
            </div>

            <Products />
            <ProductFaq items={hubFaqItems} />
            <WhyUs />
            <ClosingCta />
        </div>
    );
}
