import type { ReactNode } from "react";

type Item = { question: string; answer: ReactNode };

/** FAQPage JSON-LD built from the FAQ actually rendered on the page. */
export function faqPageSchema(items: Item[]) {
    return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: items.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: { "@type": "Answer", text: typeof item.answer === "string" ? item.answer : String(item.answer) },
        })),
    };
}
