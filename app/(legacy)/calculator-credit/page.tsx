import type { Metadata } from "next";
import { Suspense } from "react";
import CalculatorCreditPage from "./CalculatorCreditPage";

export const metadata: Metadata = {
    title: "Calculator Credit Online | Ideal Credit",
    description:
        "Calculează rata lunară, graficul de rambursare și costul total al creditului. Alege suma, termenul și tipul de rambursare potrivit pentru tine.",
    alternates: { canonical: "https://idealcredit.md/calculator-credit" },
};

export default function Page() {
    return (
        <div>
            <div className="bg-squares"></div>
            <div className="container pt-10 md:pt-16 pb-10">
                <h1 className="text-3xl md:text-4xl font-semibold">Calculator Credit Online</h1>
                <p className="mt-3 text-sm leading-relaxed max-w-lg">
                    Calculează rata lunară, costul total și graficul complet de rambursare. Alege suma, termenul și tipul de rambursare
                    potrivit pentru tine.
                </p>
            </div>
            <Suspense>
                <CalculatorCreditPage />
            </Suspense>
        </div>
    );
}
