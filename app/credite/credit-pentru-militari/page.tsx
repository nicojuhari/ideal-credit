import type { Metadata } from "next";
import ServiceHero from "@/components/ServiceHero";
import HowItWorks from "@/components/HowItWorks";
import WhyBento from "@/components/WhyBento";
import Info from "@/components/ui/Info";
import { Check } from "lucide-react";
import { personalLoanSchema } from "@/lib/schema";

export const metadata: Metadata = {
    title: "Credit pentru militari în Moldova | Ideal Credit",
    description:
        "Credit pentru militari în Moldova - condiții clare, decizie rapidă și dobândă transparentă. Sume flexibile până la 300.000 lei. Aplică online!",
    alternates: { canonical: "https://idealcredit.md/credite/credit-pentru-militari" },
};

export default function CreditMilitariPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personalLoanSchema) }} />
            {/* Hero */}
            <ServiceHero
                title={"Credit pentru militari"}
                subtitle="Oferim credit pentru militarii din Republica Moldova - condiții clare, decizie în 2-3 ore și dobândă transparentă."
            />
            <section className="container">
                <h2 className="title text-center">Condițiile de creditare</h2>
                <ul className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    {[
                        "Vârsta între 23 și 65 ani",
                        "Angajat al Ministerului Apărării, de minim 12 luni",
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
                    <h2 className="card-title text-center">Ce este un credit pentru militari?</h2>
                    <p>Este un împrumut de consum pentru angajații sau pensionarii Ministerului Apărării.</p>
                    <h3 className="text-2xl pt-4">Când poți folosi banii</h3>
                    <ul className="list-outside list-disc ml-6 text-gray-500">
                        <li>Urgențe - plata facturilor sau intervenții neprevăzute</li>
                        <li>Sănătate - tratamente, stomatologie</li>
                        <li>Locuință - reparații mici, renovări sau mobilare</li>
                        <li>Alte nevoi personale</li>
                    </ul>
                    <h3 className="text-2xl pt-4">Beneficii specifice pentru militari</h3>
                    <ul className="list-outside list-disc ml-6 text-gray-500">
                        <li>Aprobare rapidă - decizie în 2-3 ore</li>
                        <li>Rate fixe și transparente</li>
                        <li>Condiții adaptate venitului militar</li>
                        <li>Fără comisioane ascunse</li>
                    </ul>
                </div>
            </section>
            <WhyBento />
        </>
    );
}
