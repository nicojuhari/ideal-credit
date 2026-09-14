import Container from "@/components/ds/Container";
import Accent from "@/components/ds/Accent";
import { ButtonSecondary } from "@/components/ds/Button";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

export type FaqItem = { question: string; answer: string };

export default function ProductFaq({ items, id = "faq" }: { items: FaqItem[]; id?: string }) {
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
        <section className="dc-section" id={id}>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            <Container>
                <div className="grid gap-16" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))" }}>
                    <div className="max-w-[420px] self-start md:sticky md:top-24">
                        <div className="flex flex-col gap-3.5">
                            <h2 className="text-[28px] md:text-[40px] font-bold leading-[1.1] tracking-[-.025em] text-dc-text">
                                Întrebări <Accent>frecvente</Accent>
                            </h2>
                            <p className="text-dc-text-muted leading-relaxed">
                                Nu găsești răspunsul? Scrie-ne, îți răspundem într-un timp scurt.
                            </p>
                        </div>
                        <ButtonSecondary href="/contacte" className="mt-6">
                            Contactează-ne
                        </ButtonSecondary>
                    </div>

                    <Accordion className="w-full">
                        {items.map((item, i) => (
                            <AccordionItem key={item.question} value={`faq-${i}`} className="border-dc-line">
                                <AccordionTrigger className="py-[18px] text-base font-medium text-dc-text hover:no-underline hover:text-white">
                                    {item.question}
                                </AccordionTrigger>
                                <AccordionContent className="pb-[18px] text-sm leading-relaxed text-dc-text-muted">
                                    {item.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </Container>
        </section>
    );
}
