import type { Metadata } from "next";
import Link from "next/link";
import CalculatorCredit from "@/components/CalculatorCredit";
import HowItWorks from "@/components/HowItWorks";
import ShortAboutUs from "@/components/ShortAboutUs";
import Info from "@/components/ui/Info";
import RecenziiButton from "@/components/ui/RecenziiButton";
import MainCTA from "@/components/ui/MainCTA";
import { Check } from "lucide-react";
import { personalLoanSchema, creditConditionsSchema } from "@/lib/schema";

export const metadata: Metadata = {
    title: "Credit pentru nevoi personale | Ideal Credit",
    description:
        "Credit pentru nevoi personale în Moldova cu dobânda fixă. Obține un credit pentru cheltuieli urgente, pînă la salariu sau planuri personale. Aplică Online!",
    alternates: { canonical: "https://idealcredit.md/credite/credit-pentru-nevoi-personale" },
};

export default function CreditNevoiPersonalePage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personalLoanSchema) }} />
            <div className="relative pt-10 md:pt-12">
                <div className="bg-squares -mt-px" />
                <div className="container">
                    <RecenziiButton className="mb-16" />
                    <h1 className="font-semibold text-center text-4xl md:text-8xl">Credit pentru nevoi personale</h1>
                    <p className="text-center mt-6 px-4 md:px-0 text-gray-400 md:text-xl md:max-w-xl mx-auto text-lg font-light">
                        Obține un credit pentru nevoi personale rapid și ușor, perfect pentru cheltuieli urgente sau proiecte mici.
                    </p>
                    <MainCTA className="my-18 md:mb-24" />
                    <div className="cs-blur cs-blur--center z-[-1]" />
                    <CalculatorCredit />
                </div>
            </div>
            <section className="container">
                <h2 className="title text-center">Condițiile de creditare</h2>
                <ul className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    {creditConditionsSchema.pf.list.map((item) => (
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
                    <h2 className="card-title text-center">Ce este un credit pentru nevoi personale?</h2>
                    <p>
                        Este un credit de consum destinat persoanelor fizice. Îţi pune la dispoziţie bani rapid, fără destinaţie fixă,
                        pentru orice cheltuieli planificate sau neprevăzute.
                    </p>
                    <h3 className="text-2xl pt-4">Când poți folosi banii</h3>
                    <ul className="list-outside list-disc ml-6 text-gray-400">
                        <li>Achiziţii de bunuri: electrocasnice, mobilă, electronice</li>
                        <li>Sănătate: tratamente medicale, stomatologie</li>
                        <li>
                            Locuință: renovări mici,{" "}
                            <Link href="/credite/credit-pentru-reparatie" title="Credit pentru reparație" className="link">
                                reparații
                            </Link>
                        </li>
                        <li>Familie: vacanțe, nunți, evenimente</li>
                        <li>
                            Urgențe: plata facturilor sau{" "}
                            <Link href="/credite/credit-pina-la-salariu" title="Credit pînă la salariu" className="link">
                                credit pînă la salariu
                            </Link>
                        </li>
                    </ul>
                    <h3 className="text-2xl pt-4">Beneficii pentru tine</h3>
                    <ul className="list-outside list-disc ml-6 text-gray-400">
                        <li>Aprobare rapidă: decizie în 1-3 ore</li>
                        <li>Rate fixe: știi exact cât plătești lunar</li>
                        <li>Dobândă negociabilă</li>
                        <li>Documentație minimă: buletin + adeverință de venit</li>
                        <li>Plată imediată: banii după semnarea contractului</li>
                    </ul>
                </div>
            </section>
            <ShortAboutUs />
        </>
    );
}
