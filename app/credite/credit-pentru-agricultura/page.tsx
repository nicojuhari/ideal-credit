import type { Metadata } from "next";
import CalculatorCredit from "@/components/CalculatorCredit";
import HowItWorks from "@/components/HowItWorks";
import ShortAboutUs from "@/components/ShortAboutUs";
import Info from "@/components/ui/Info";
import RecenziiButton from "@/components/ui/RecenziiButton";
import MainCTA from "@/components/ui/MainCTA";
import { Check } from "lucide-react";
import { creditConditionsSchema, businessCreditSchema } from "@/lib/schema";

export const metadata: Metadata = {
    title: "Credit pentru agricultură | Ideal Credit",
    description:
        "Credit pentru agricultură - finanțare pentru tehnică, semințe, îngrășăminte, pesticide și lucrări agricole. Condiții simple și transparente!",
    alternates: { canonical: "https://idealcredit.md/credite/credit-pentru-agricultura" },
};

export default function CreditAgriculturaPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessCreditSchema) }} />
            <div className="relative pt-10 md:pt-12">
                <div className="bg-squares -mt-px" />
                <div className="container">
                    <RecenziiButton className="mb-16" />
                    <h1
                        className="font-semibold text-center text-5xl md:text-8xl"
                        dangerouslySetInnerHTML={{ __html: "Credit pentru<br />agricultură" }}
                    />
                    <p className="text-center mt-6 px-4 md:px-0 text-gray-400 md:text-xl md:max-w-xl mx-auto text-lg font-light">
                        Credit pentru agricultură - tehnică, semințe, îngrășăminte, pesticide și lucrări agricole. Proces simplu și
                        transparent.
                    </p>
                    <MainCTA className="my-18 md:mb-24" />
                    <div className="cs-blur cs-blur--center z-[-1]" />
                    <CalculatorCredit />
                </div>
            </div>
            <section className="container">
                <h2 className="title text-center">Condițiile de creditare</h2>
                <ul className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    {creditConditionsSchema.pj.list.map((item) => (
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
                    <h2 className="card-title text-center">Ce este un credit pentru agricultură?</h2>
                    <p>
                        Este un împrumut pentru fermieri și companii agricole (SRL, ÎI) care au nevoie de capital pentru cumpărarea tehnicii
                        agricole sau achiziția de inputuri.
                    </p>
                    <h3 className="text-2xl pt-4">Scopuri principale</h3>
                    <ul className="list-outside list-disc ml-6 text-gray-400">
                        <li>Tehnică și utilaje: tractoare, combine, remorci, sisteme irigații</li>
                        <li>Inputuri: semințe, îngrășăminte, pesticide</li>
                        <li>Lucrări agricole: arat, semănat, recoltare</li>
                        <li>Capital de lucru: plata salariilor, furnizorilor</li>
                    </ul>
                    <h3 className="text-2xl pt-4">Beneficii pentru agricultori</h3>
                    <ul className="list-outside list-disc ml-6 text-gray-400">
                        <li>Acces rapid la capital</li>
                        <li>Termeni flexibili</li>
                        <li>Viteză și transparență: decizie în 1-3 ore</li>
                    </ul>
                </div>
            </section>
            <ShortAboutUs />
        </>
    );
}
