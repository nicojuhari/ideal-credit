"use client";

import { useState } from "react";
import Container from "@/components/ds/Container";
import Stack from "@/components/ds/Stack";
import Accent from "@/components/ds/Accent";
import { ButtonText } from "@/components/ds/Button";

export type FaqItem = { question: string; answer: string };

export default function ProductFaq({
    items,
    marker = "Întrebări",
    title = (
        <>
            Întrebări <Accent>frecvente</Accent>
        </>
    ),
    id = "faq",
}: {
    items: FaqItem[];
    marker?: string;
    title?: React.ReactNode;
    id?: string;
}) {
    const [open, setOpen] = useState(0);

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
        <div className="dc-section" id={id}>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            <Container>
                <div className="flex flex-wrap items-end justify-between gap-10">
                    <div>
                        <p className="flex items-start gap-2.5 text-xs font-medium uppercase tracking-[.1em] text-dc-text-muted">
                            <span className="mt-[3px] block h-[9px] w-[9px] shrink-0 bg-dc-proof" aria-hidden />
                            {marker}
                        </p>
                        <h2 className="mt-5 text-[clamp(34px,4vw,50px)] font-semibold leading-none tracking-[-.035em] text-dc-text">
                            {title}
                        </h2>
                    </div>
                    <ButtonText href="/contacte">Scrie-ne →</ButtonText>
                </div>

                <Stack className="mt-14">
                    {items.map((item, i) => {
                        const isOpen = open === i;
                        return (
                            <div key={item.question}>
                                <button
                                    type="button"
                                    onClick={() => setOpen(isOpen ? -1 : i)}
                                    aria-expanded={isOpen}
                                    className="grid w-full items-center gap-5 px-8 py-[26px] text-left text-dc-text"
                                    style={{ gridTemplateColumns: "44px 1fr 20px" }}
                                >
                                    <span className="font-dc-mono text-xs text-dc-text-muted">{String(i + 1).padStart(2, "0")}</span>
                                    <span className="text-xl font-medium">{item.question}</span>
                                    <span className="font-dc-mono text-right text-dc-text">{isOpen ? "−" : "+"}</span>
                                </button>
                                {isOpen && (
                                    <p className="max-w-[820px] pb-7 pr-8 pl-24 text-[17px] leading-[1.7] text-dc-text-muted">
                                        {item.answer}
                                    </p>
                                )}
                            </div>
                        );
                    })}
                </Stack>
            </Container>
        </div>
    );
}
