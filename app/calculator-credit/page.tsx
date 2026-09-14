import type { Metadata } from "next";
import { Suspense } from "react";
import Container from "@/components/ds/Container";
import Accent from "@/components/ds/Accent";
import CalculatorCreditPage from "./CalculatorCreditPage";

export const metadata: Metadata = {
    title: "Calculator Credit Online | Ideal Credit",
    description:
        "Calculează rata lunară, graficul de rambursare și costul total al creditului. Alege suma, termenul și tipul de rambursare potrivit pentru tine.",
    alternates: { canonical: "https://idealcredit.md/calculator-credit" },
};

export default function Page() {
    return (
        <div className="dc bg-dc-bg">
            <div className="relative isolate dc-section dc-section--hero !pb-16">
                <div className="dc-bg-squares" aria-hidden />
                <Container>
                    <div className="mx-auto flex max-w-[640px] flex-col items-center gap-5 text-center">
                        <h1 className="text-[44px] md:text-[64px] font-bold leading-[1.05] tracking-[-.03em] text-dc-text">
                            Calculator <Accent>credit</Accent> online
                        </h1>
                        <p className="text-[19px] leading-relaxed text-dc-text-muted">
                            Calculează rata lunară, costul total și graficul complet de rambursare. Alege suma, termenul și tipul de
                            rambursare potrivit pentru tine.
                        </p>
                    </div>
                </Container>
            </div>
            <Suspense>
                <CalculatorCreditPage />
            </Suspense>
        </div>
    );
}
