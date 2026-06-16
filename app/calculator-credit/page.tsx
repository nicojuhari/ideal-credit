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
        <Suspense>
            <CalculatorCreditPage />
        </Suspense>
    );
}
