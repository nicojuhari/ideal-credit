import Container from "@/components/ds/Container";
import Accent from "@/components/ds/Accent";
import Figure from "@/components/ds/Figure";
import { OFFICES } from "@/lib/constants";

const chisinau = OFFICES.find((o) => o.city.includes("Chișinău"))!;
const causeni = OFFICES.find((o) => o.city.includes("Căușeni"))!;

export default function ClosingCta() {
    return (
        <div className="dc-section dc-section--cta">
            <Container>
                <div className="grid items-center gap-16" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))" }}>
                    <div>
                        <h2 className="text-[clamp(42px,6vw,72px)] font-semibold leading-[.98] tracking-[-.042em] text-dc-text">
                            Gata să <Accent>discutăm?</Accent>
                        </h2>
                        <p className="mt-5 max-w-[480px] text-[19px] leading-[1.55] text-dc-text-muted">
                            Decizie rapidă, în timpul programului de lucru. Dacă nu are sens pentru tine, o spunem direct.
                        </p>
                    </div>
                    <div className="flex flex-col gap-3">
                        <a
                            href={`tel:${chisinau.mobile}`}
                            className="flex items-center justify-between gap-5 bg-dc-accent px-8 py-[26px] text-dc-on-accent"
                        >
                            <Figure size="md">{chisinau.mobileDisplay}</Figure>
                            <span className="text-xs">CHIȘINĂU →</span>
                        </a>
                        <a
                            href={`tel:${causeni.mobile}`}
                            className="flex items-center justify-between gap-5 border border-dc-line px-8 py-[26px] text-dc-text"
                        >
                            <Figure size="md">{causeni.mobileDisplay}</Figure>
                            <span className="text-xs text-dc-text-muted">CĂUȘENI →</span>
                        </a>
                        <a
                            href="/cerere-de-credit-online"
                            className="flex items-center justify-between gap-5 border border-dc-line px-8 py-[26px] text-dc-text"
                        >
                            <span className="text-[19px] font-semibold">Cerere online</span>
                            <Figure size="ordinal" className="text-dc-text-muted">
                                5 MIN →
                            </Figure>
                        </a>
                    </div>
                </div>
            </Container>
        </div>
    );
}
