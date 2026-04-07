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
    title: "Credit pentru polițiști - angajați sau pensionari MAI | Ideal Credit",
    description:
        "Credit pentru polițiști — împrumut personal pentru angajați și pensionari MAI din Moldova. Aprobat rapid, rate fixe și fără comisioane ascunse.",
    alternates: { canonical: "https://idealcredit.md/credite/credit-pentru-politisti" },
};

export default function CreditPolitistiPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personalLoanSchema) }} />
            <div className="relative pt-10 md:pt-12">
                <div className="bg-squares -mt-[1px]" />
                <div className="container">
                    <RecenziiButton className="mb-16" />
                    <h1
                        className="font-semibold text-center text-5xl md:text-8xl"
                        dangerouslySetInnerHTML={{ __html: "Credit pentru polițiști" }}
                    />
                    <p className="text-center mt-6 px-4 md:px-0 text-gray-400 md:text-xl md:max-w-xl mx-auto text-lg font-light">
                        Credit pentru polițiști sau pensionari MAI din Republica Moldova - bani pentru urgențe și cheltuieli personale.
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
                        "Vârsta între 23 și 65 ani",
                        "Angajat (minim 12 luni) sau pensionar MAI",
                        "Buletin de identitate valabil",
                        "Fără datorii la alte credite",
                    ].map((item) => (
                        <li key={item} className="flex text-xl items-center gap-2 card">
                            <Check className="w-5 h-5 flex-shrink-0 text-green-400" strokeWidth={3} />
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
                    <h2 className="card-title text-center">Ce este un credit pentru polițiști?</h2>
                    <p>Un împrumut de consum destinat polițiștilor activi sau pensionari din Republica Moldova.</p>
                    <h3 className="text-2xl pt-4">Când poți folosi banii</h3>
                    <ul className="list-outside list-disc ml-6 text-gray-400">
                        <li>Urgențe - plata facturilor sau cheltuieli neașteptate</li>
                        <li>Sănătate - tratamente, stomatologie</li>
                        <li>Educație - cursuri sau specializare profesională</li>
                        <li>Locuință - reparații, renovări sau mobilare</li>
                    </ul>
                    <h3 className="text-2xl pt-4">Beneficii specifice pentru polițiști</h3>
                    <ul className="list-outside list-disc ml-6 text-gray-400">
                        <li>Aprobare rapidă - decizie în 1-3 ore</li>
                        <li>Rate fixe și transparente</li>
                        <li>Condiții adaptate salariului</li>
                    </ul>
                </div>
            </section>
            <ShortAboutUs />
        </>
    );
}
