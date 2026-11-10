import type { Metadata } from "next";
import { Suspense } from "react";
import PageHero from "@/components/ds/PageHero";
import Accent from "@/components/ds/Accent";
import CalculatorCreditPage from "./CalculatorCreditPage";

export const metadata: Metadata = {
    title: "Calculator de credit online | Ideal Credit",
    description:
        "Alege suma și termenul și vezi rata lunară, dobânda totală, DAE și graficul complet de plăți. La Ideal Credit plătești doar dobânda.",
    alternates: { canonical: "https://idealcredit.md/calculator-credit" },
    openGraph: {
        type: "website",
        locale: "ro_MD",
        siteName: "Ideal Credit",
        url: "https://idealcredit.md/calculator-credit",
        title: "Calculator de credit online | Ideal Credit",
        description:
            "Alege suma și termenul și vezi rata lunară, dobânda totală, DAE și graficul complet de plăți. La Ideal Credit plătești doar dobânda.",
    },
};

export default function Page() {
    return (
        <div className="dc bg-dc-bg">
            <PageHero
                className="!pb-12 lg:!pb-16"
                breadcrumb={[
                    { name: "Acasă", url: "https://idealcredit.md/" },
                    { name: "Calculator credit", url: "https://idealcredit.md/calculator-credit" },
                ]}
                eyebrow="Fără comisioane · plătești doar dobânda"
                title={
                    <>
                        Calculator de credit <Accent>online.</Accent>
                    </>
                }
                subtitle="Alege suma și termenul. Vezi rata lunară, dobânda totală și graficul complet de plăți."
            />
            <Suspense>
                <CalculatorCreditPage />
            </Suspense>
        </div>
    );
}
