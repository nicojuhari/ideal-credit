import type { Metadata } from "next";
import Link from "next/link";
import dynamic from "next/dynamic";
import ServiciiList from "@/components/ServiciiList";
import WhyBento from "@/components/WhyBento";
import { ArrowRight } from "lucide-react";
import type { FaqItem } from "@/components/FAQ";

const FAQ = dynamic(() => import("@/components/FAQ"));

export const metadata: Metadata = {
    title: "Toate Produsele de Credit | Ideal Credit Moldova",
    description:
        "Credite nebancare pentru afaceri și persoane fizice în Moldova. Capital de lucru, investiții, refinanțare, credit personal - dobândă fixă, decizie rapidă.",
    alternates: { canonical: "https://idealcredit.md/credite" },
};

const hubFaqItems: FaqItem[] = [
    {
        question: "Care este diferența dintre un credit nebancar și un credit bancar?",
        answer: "Un credit nebancar este acordat de o instituție financiară nebancară (OCN), autorizată și supravegheată de CNPF. Principala diferență față de bănci: procesul de aprobare este mai rapid (2-3 ore pentru persoane fizice, 1-2 zile lucrătoare pentru afaceri), documentația este mai simplă și evaluarea este mai flexibilă - acceptăm clienți refuzați de bănci.",
    },
    {
        question: "Cât timp durează aprobarea unui credit?",
        answer: "Pentru persoane fizice, răspundem în 2-3 ore. Pentru credite de afaceri, evaluarea durează 1-2 zile lucrătoare. Dacă documentele sunt complete, fondurile pot fi disponibile în aceeași zi sau ziua lucrătoare următoare.",
    },
    {
        question: "Există comisioane ascunse?",
        answer: "Nu. Toate costurile - dobânda, DAE și orice penalități posibile - sunt prezentate clar înainte de semnarea contractului. Ce citești în contract, aia plătești.",
    },
    {
        question: "Pot obține credit dacă am fost refuzat de bancă?",
        answer: "Da. Evaluăm situația reală, nu doar un scor de credit. Analizăm istoricul de activitate, fluxul de numerar și capacitatea actuală de rambursare. Mulți dintre clienții noștri au primit finanțare după un refuz bancar.",
    },
];

export default function CreditePage() {
    return (
        <>
            <section className="container pt-10 md:pt-12">
                <h1 className="font-semibold text-center text-6xl md:text-8xl">Credite</h1>
                <p className="text-center mt-4 px-4 md:px-0 text-gray-500 md:text-xl md:max-w-xl mx-auto text-lg font-light">
                    Finanțare pentru afaceri și persoane fizice. Dobândă fixă, costuri clare, decizie rapidă.
                </p>
                <div className="flex flex-wrap justify-center gap-3 mt-8">
                    <Link
                        href="/cerere-de-credit-online"
                        className="inline-flex items-center gap-2 h-11 px-6 rounded-full bg-brand-gradient text-black font-semibold text-sm shadow-glow-sm hover:brightness-110 transition-all"
                    >
                        Cerere online <ArrowRight size={15} />
                    </Link>
                    <Link
                        href="/contacte"
                        className="inline-flex items-center gap-2 h-11 px-6 rounded-full border border-white/15 text-white hover:bg-white/5 transition-all text-sm"
                    >
                        Contactează-ne
                    </Link>
                </div>
            </section>
            <ServiciiList />

            <section className="container">
                <h2 className="title text-center">Întrebări frecvente</h2>
                <FAQ items={hubFaqItems} />
            </section>

            <WhyBento />
        </>
    );
}
