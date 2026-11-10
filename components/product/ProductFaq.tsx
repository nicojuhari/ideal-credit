"use client";

import { useState } from "react";
import Link from "next/link";
import SplitSection from "@/components/ds/SplitSection";
import Accent from "@/components/ds/Accent";

export type FaqItem = { question: string; answer: string };

export default function ProductFaq({
    items,
    title = (
        <>
            Întrebări <Accent>frecvente.</Accent>
        </>
    ),
    id = "faq",
    schema = true,
}: {
    items: FaqItem[];
    /** Kept for older callers; the redesign shows no marker. */
    marker?: string;
    title?: React.ReactNode;
    id?: string;
    /** Set false when the page already emits its own FAQPage schema. */
    schema?: boolean;
}) {
    const [open, setOpen] = useState(0);

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: items.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
    };

    return (
        <SplitSection
            id={id}
            title={title}
            aside={
                <Link href="/contacte" className="mt-6 inline-block text-[15px] text-dc-accent underline underline-offset-4">
                    Ai altă întrebare? Scrie-ne →
                </Link>
            }
        >
            {schema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
            <div className="border-b border-dc-line">
                {items.map((item, i) => {
                    const isOpen = open === i;
                    return (
                        <div key={item.question} className="border-t border-dc-line">
                            <button
                                type="button"
                                onClick={() => setOpen(isOpen ? -1 : i)}
                                aria-expanded={isOpen}
                                className="flex w-full items-start justify-between gap-6 py-6 text-left text-dc-text"
                            >
                                <span className="text-lg font-semibold tracking-[-.01em] sm:text-xl">{item.question}</span>
                                <span className={`font-dc-mono text-lg ${isOpen ? "text-dc-accent" : "text-dc-text-muted"}`} aria-hidden>
                                    {isOpen ? "−" : "+"}
                                </span>
                            </button>
                            {/* Always in the HTML so search engines and AI agents read every answer; hidden only visually. */}
                            <p hidden={!isOpen} className="max-w-[62ch] pb-7 text-[17px] leading-[1.65] text-dc-text-muted">
                                {item.answer}
                            </p>
                        </div>
                    );
                })}
            </div>
        </SplitSection>
    );
}
