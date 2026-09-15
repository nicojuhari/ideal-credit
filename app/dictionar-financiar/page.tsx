import type { Metadata } from "next";
import Container from "@/components/ds/Container";
import Accent from "@/components/ds/Accent";
import Stack from "@/components/ds/Stack";
import NumberedRow from "@/components/ds/NumberedRow";
import { GLOSSARY_LINKS } from "@/lib/constants";

export const metadata: Metadata = {
    title: "Dicționar financiar | Ideal Credit",
    description:
        "Dicționarul financiar Ideal Credit explică pe înțelesul tuturor: credit, dobândă, DAE, garanție, fidejusiune și alți 13 termeni.",
    alternates: { canonical: "https://idealcredit.md/dictionar-financiar" },
    openGraph: {
        type: "website",
        locale: "ro_MD",
        siteName: "Ideal Credit",
        url: "https://idealcredit.md/dictionar-financiar",
        title: "Dicționar financiar | Ideal Credit",
        description:
            "Dicționarul financiar Ideal Credit explică pe înțelesul tuturor: credit, dobândă, DAE, garanție, fidejusiune și alți 13 termeni.",
    },
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
                            <NumberedRow
                                key={item.name}
                                index={i}
                                title={item.name}
                                desc={item.desc}
                                titleAs="h2"
                                gridCols="44px minmax(0,1fr) minmax(0,1.5fr)"
                            />
                        ))}
                    </Stack>
                </Container>
            </div>
        </div>
    );
}
