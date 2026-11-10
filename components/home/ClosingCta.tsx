import Link from "next/link";
import Container from "@/components/ds/Container";
import { OFFICES } from "@/lib/constants";

const chisinau = OFFICES.find((o) => o.city.includes("Chișinău"))!;
const causeni = OFFICES.find((o) => o.city.includes("Căușeni"))!;

// Orange closing card, shared by the home page and every credit page.
export default function ClosingCta() {
    return (
        <section className="dc-section">
            <Container>
                <div className="grid items-end gap-10 bg-dc-accent p-6 text-dc-on-accent sm:p-12 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-16 lg:p-16">
                    <div>
                        <h2 className="text-[36px] font-semibold leading-[1.02] tracking-[-.04em] sm:text-[clamp(40px,4.6vw,68px)]">
                            Spune-ne ce vrei să faci cu banii.
                        </h2>
                        <p className="mt-5 max-w-[46ch] text-[17px] leading-[1.55] sm:text-[19px]">
                            Îți spunem ce sumă și ce termen ți se potrivesc și cât costă.
                            Discuția este gratuită și nu te obligă la nimic.
                        </p>
                    </div>
                    <div className="flex flex-col gap-3">
                        {[
                            { city: "Chișinău", o: chisinau },
                            { city: "Căușeni", o: causeni },
                        ].map(({ city, o }) => (
                            <a
                                key={city}
                                href={`tel:${o.mobile}`}
                                className="flex min-h-[60px] items-center justify-between gap-6 bg-dc-bg px-5 text-dc-text transition-colors hover:bg-[#1a1a1a] sm:min-h-16 sm:px-6"
                            >
                                <span className="text-sm text-dc-text-muted">{city}</span>
                                <span className="dc-num text-lg sm:text-xl">
                                    {o.mobileDisplay}
                                </span>
                            </a>
                        ))}
                        <div className="mt-1 flex flex-wrap items-center justify-between gap-2 text-[13px]">
                            <span className="font-dc-mono">Luni–vineri, 8:30–16:30</span>
                            <Link
                                href="/cerere-de-credit-online"
                                className="font-semibold underline underline-offset-4"
                            >
                                Cerere online →
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
