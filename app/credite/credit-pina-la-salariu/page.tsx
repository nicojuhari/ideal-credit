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
    title: "Credit pînă la salariu | Credit urgent | Ideal Credit",
    description:
        "Credit pînă la salariu pentru persoanele angajate oficial și cu venit constant. Aprobare rapidă, dobânzi avantajoase și transparență totală. Aplică online!",
    alternates: { canonical: "https://idealcredit.md/credite/credit-pina-la-salariu" },
};

export default function CreditPinaLaSalariuPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personalLoanSchema) }} />
            <div className="relative pt-10 md:pt-12">
                <div className="bg-squares -mt-px" />
                <div className="container">
                    <RecenziiButton className="mb-16" />
                    <h1
                        className="font-semibold text-center text-5xl md:text-8xl"
                        dangerouslySetInnerHTML={{ __html: "Credit pînă la salariu" }}
                    />
                    <p className="text-center mt-6 px-4 md:px-0 text-gray-400 md:text-xl md:max-w-xl mx-auto text-lg font-light">
                        Oferim credit pînă la salariu pentru persoanele angajate oficial. Soluția perfectă pentru cheltuieli neprevăzute.
                    </p>
                    <MainCTA className="my-18 md:mb-24" />
                    <div className="cs-blur cs-blur--center z-[-1]" />
                    <CalculatorCredit />
                </div>
            </div>
            <section className="container">
                <h2 className="title text-center">Condițiile de creditare</h2>
                <ul className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    {[
                        "Vârsta de la 23 de ani",
                        "Salariu oficial stabil",
                        "Buletin de identitate valabil",
                        "Responsabilitate financiară",
                    ].map((item) => (
                        <li key={item} className="flex text-xl items-center gap-2 card">
                            <Check className="w-5 h-5 shrink-0 text-green-400" strokeWidth={3} />
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
                <Info className="mt-6">Dacă lucrezi la același angajator de mai mult timp, aprobarea creditului va fi mult mai rapidă</Info>
            </section>
            <section className="container">
                <HowItWorks />
            </section>
            <section>
                <div className="container text-lg space-y-4">
                    <h2 className="card-title text-center">Ce este un credit pînă la salariu?</h2>
                    <p>
                        Este un credit pe termen scurt destinat persoanelor cu salariu oficial. Îţi oferă bani rapid pentru cheltuieli
                        urgente, până primeşti salariul.
                    </p>
                    <h3 className="text-2xl pt-4">Când poți folosi banii</h3>
                    <ul className="list-outside list-disc ml-6 text-gray-400">
                        <li>Urgenţe - plata facturilor, reparaţii neaşteptate</li>
                        <li>Sănătate - consultaţii, tratamente, stomatologie</li>
                        <li>Transport - reparaţii auto</li>
                        <li>Familie - cheltuieli pentru copii sau părinţi</li>
                    </ul>
                    <h3 className="text-2xl pt-4">Beneficii pentru tine</h3>
                    <ul className="list-outside list-disc ml-6 text-gray-400">
                        <li>Aprobare rapidă - decizie în 1-3 ore</li>
                        <li>Rate fixe - ştii exact cât plăteşti lunar</li>
                        <li>Transparent - fără comisioane ascunse</li>
                    </ul>
                </div>
            </section>
            <ShortAboutUs />
        </>
    );
}
