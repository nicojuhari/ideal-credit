import dynamic from "next/dynamic";
import type { FaqItem } from "@/components/FAQ";

export type { FaqItem };

const FAQ = dynamic(() => import("@/components/FAQ"));

interface CreditFAQProps {
    items: FaqItem[];
    title?: string;
}

export default function CreditFAQ({ items, title = "Întrebări frecvente" }: CreditFAQProps) {
    const schema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: items.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
            <section className="container">
                <h2 className="title text-center">{title}</h2>
                <FAQ items={items} />
            </section>
        </>
    );
}
