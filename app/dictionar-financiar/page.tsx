import type { Metadata } from "next";
import Container from "@/components/ds/Container";
import Accent from "@/components/ds/Accent";
import Stack from "@/components/ds/Stack";
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
                    <p className="flex items-start gap-2.5 text-xs font-medium uppercase tracking-[.1em] text-dc-text-muted">
                        <span className="mt-[3px] block h-[9px] w-[9px] shrink-0 bg-dc-proof" aria-hidden />
                        <span className="font-dc-mono">{String(GLOSSARY_LINKS.length).padStart(2, "0")}</span> termeni
                    </p>
                    <h1 className="mt-7 max-w-[1000px] text-[clamp(52px,9vw,124px)] font-semibold leading-[.92] tracking-[-.048em] text-dc-text">
                        Dicționar <Accent>financiar.</Accent>
                    </h1>
                    <p className="mt-7 max-w-[620px] text-[19px] leading-[1.55] text-dc-text-muted">
                        Termenii financiari și de creditare cei mai des întâlniți, explicați pe înțelesul tuturor.
                    </p>
                </Container>
            </div>

            <div className="pb-24">
                <Container>
                    <Stack>
                        {GLOSSARY_LINKS.map((item, i) => (
                            <div
                                key={item.name}
                                className="grid items-baseline gap-7 p-8"
                                style={{ gridTemplateColumns: "44px minmax(0,1fr) minmax(0,1.5fr)" }}
                            >
                                <span className="font-dc-mono text-xs text-dc-text-muted">{String(i + 1).padStart(2, "0")}</span>
                                <h2 className="text-xl tracking-[-.025em] text-dc-text">{item.name}</h2>
                                <p className="text-[17px] leading-[1.6] text-dc-text-muted">{item.desc}</p>
                            </div>
                        ))}
                    </Stack>
                </Container>
            </div>
        </div>
    );
}
