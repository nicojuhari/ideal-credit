import type { Metadata } from "next";
import { Suspense } from "react";
import Container from "@/components/ds/Container";
import Accent from "@/components/ds/Accent";
import CalculatorCreditPage from "./CalculatorCreditPage";

export const metadata: Metadata = {
    title: "Calculator Credit Online | Ideal Credit",
    description:
        "Calculator credit online: calculează rata lunară, graficul de rambursare și costul total. Alege suma, termenul și tipul de rambursare potrivit.",
    alternates: { canonical: "https://idealcredit.md/calculator-credit" },
    openGraph: {
        type: "website",
        locale: "ro_MD",
        siteName: "Ideal Credit",
        url: "https://idealcredit.md/calculator-credit",
        title: "Calculator Credit Online | Ideal Credit",
        description:
            "Calculator credit online: calculează rata lunară, graficul de rambursare și costul total. Alege suma, termenul și tipul de rambursare potrivit.",
    },
};

export default function Page() {
    return (
        <div className="dc bg-dc-bg">
            <div className="dc-section dc-section--hero !pb-16">
                <Container>
                    <p className="flex items-start gap-2.5 text-xs font-medium uppercase tracking-[.1em] text-dc-text-muted">
                        <span className="mt-[3px] block h-[9px] w-[9px] shrink-0 bg-dc-proof" aria-hidden />
                        Calculator
                    </p>
                    <h1 className="mt-7 max-w-[1000px] text-[clamp(52px,9vw,124px)] font-semibold leading-[.92] tracking-[-.048em] text-dc-text">
                        Calculator <Accent>credit</Accent> online
                    </h1>
                    <p className="mt-7 max-w-[620px] text-[19px] leading-[1.55] text-dc-text-muted">
                        Calculează rata lunară, costul total și graficul complet de rambursare. Alege suma, termenul și tipul de
                        rambursare potrivit pentru tine.
                    </p>
                </Container>
            </div>
            <Suspense>
                <CalculatorCreditPage />
            </Suspense>
        </div>
    );
}
