import type { Metadata } from "next";
import CalculatorCredit from "@/components/CalculatorCredit";
import HowItWorks from "@/components/HowItWorks";
import ShortAboutUs from "@/components/ShortAboutUs";
import Info from "@/components/ui/Info";
import RecenziiButton from "@/components/ui/RecenziiButton";
import MainCTA from "@/components/ui/MainCTA";
import { Check } from "lucide-react";
import { personalLoanSchema } from "@/lib/schema";

export const metadata: Metadata = {
    title: "Credit pentru medici | Rapid și Avantajos | Ideal Credit",
    description:
        "Credit pentru medici - condiții speciale, dobânzi avantajoase și aprobare rapidă. Soluții transparente pentru medicii din Republica Moldova. Aplică online!",
    alternates: { canonical: "https://idealcredit.md/credite/credit-pentru-medici" },
};

export default function CreditMediciPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personalLoanSchema) }} />
            <div className="relative pt-10 md:pt-12">
                <div className="bg-squares -mt-px" />
                <div className="container">
                    <RecenziiButton className="mb-16" />
                    <h1
                        className="font-semibold text-center text-5xl md:text-8xl"
                        dangerouslySetInnerHTML={{ __html: "Credit pentru medici" }}
                    />
                    <p className="text-center mt-6 px-4 md:px-0 text-gray-400 md:text-xl md:max-w-xl mx-auto text-lg font-light">
                        Credit pentru medici - împrumut personal cu rată adaptată și rambursare ușoară pentru cheltuieli personale sau
                        urgente.
                    </p>
                    <MainCTA className="my-16" />
                    <div className="cs-blur cs-blur--center z-[-1]" />
                    <CalculatorCredit />
                </div>
            </div>
            <section className="container">
                <h2 className="title text-center">Condițiile de creditare</h2>
                <ul className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    {[
                        "Vârsta între 23 și 55 ani",
                        "Angajat oficial, minim 24 de luni",
                        "Buletin de identitate valabil",
                        "Fără restanțe la alte credite",
                    ].map((item) => (
                        <li key={item} className="flex text-xl items-center gap-2 card">
                            <Check className="w-5 h-5 shrink-0 text-green-400" strokeWidth={3} />
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
                <Info className="mt-6">
                    În funcție de evaluarea riscului de credit, se va solicita garanții adiționale: fidejusiune sau gaj imobil.
                </Info>
            </section>
            <section className="container">
                <HowItWorks />
            </section>
            <section>
                <div className="container text-lg space-y-4">
                    <h2 className="card-title text-center">Ce este un credit pentru medici?</h2>
                    <p>Un împrumut de consum destinat medicilor angajați în cadrul Ministerului Sănătății din Republica Moldova.</p>
                    <h3 className="text-2xl pt-4">Când poți folosi banii</h3>
                    <ul className="list-outside list-disc ml-6 text-gray-400">
                        <li>Urgențe medicale sau personale</li>
                        <li>Sănătate - stomatologie, terapii pentru tine sau familie</li>
                        <li>Educație - cursuri, conferințe, specializări medicale</li>
                        <li>Locuință - reparații, renovări sau mobilare</li>
                    </ul>
                    <h3 className="text-2xl pt-4">Beneficii specifice pentru medici</h3>
                    <ul className="list-outside list-disc ml-6 text-gray-400">
                        <li>Aprobare rapidă - decizie în 1-3 ore</li>
                        <li>Rate fixe și transparente</li>
                        <li>Condiții adaptate veniturilor medicale</li>
                        <li>Fără comisioane ascunse</li>
                    </ul>
                </div>
            </section>
            <ShortAboutUs />
        </>
    );
}
