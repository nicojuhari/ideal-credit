import type { Metadata } from "next";
import Container from "@/components/ds/Container";
import Accent from "@/components/ds/Accent";
import { GLOSSARY_LINKS } from "@/lib/constants";

export const metadata: Metadata = {
    title: "Dicționar financiar | Ideal Credit",
    description:
        "Termeni financiari și de creditare explicați pe înțelesul tuturor: credit, dobândă, DAE, garanție, fidejusiune și alți 13 termeni.",
    alternates: { canonical: "https://idealcredit.md/dictionar-financiar" },
};

export default function DictionarFinanciarPage() {
    return (
        <div className="dc bg-dc-bg">
            <div className="dc-section dc-section--hero">
                <Container>
                    <h1 className="text-[40px] md:text-[64px] font-bold leading-[1.04] tracking-[-.03em] text-dc-text">
                        Dicționar <Accent>financiar</Accent>
                    </h1>
                    <p className="mt-5 max-w-[640px] text-[19px] leading-relaxed text-dc-text-muted">
                        Termenii financiari și de creditare cei mai des întâlniți, explicați pe înțelesul tuturor.
                    </p>
                </Container>
            </div>

            <div className="dc-section">
                <Container>
                    <div className="grid gap-x-10 gap-y-8" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
                        {GLOSSARY_LINKS.map((item) => (
                            <div key={item.name} className="border-t border-dc-line pt-5">
                                <h2 className="text-[17px] font-bold text-dc-text">{item.name}</h2>
                                <p className="mt-1.5 text-sm leading-relaxed text-dc-text-muted">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </Container>
            </div>
        </div>
    );
}
