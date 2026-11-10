import Container from "@/components/ds/Container";
import Accent from "@/components/ds/Accent";

const benefits = ["Dobândă mai mică", "Credit fără fidejusor"];

export default function ReturningClients() {
    return (
        <section className="dc-section">
            <Container>
                <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-24">
                    {/* The number and its caption read as one statement. */}
                    <div>
                        <p className="dc-num text-[104px] leading-[.85] tracking-[-.06em] text-dc-text lg:text-[clamp(120px,11vw,168px)]">
                            4<span className="text-[#4a4a4a]">/</span>10
                        </p>
                        <h2 className="mt-6 max-w-[18ch] text-[28px] font-semibold leading-[1.12] tracking-[-.025em] text-dc-text lg:text-[clamp(30px,2.6vw,38px)]">
                            clienți revin pentru <Accent>un nou credit.</Accent>
                        </h2>
                    </div>

                    <div className="min-w-0 border-l-0 border-dc-line lg:border-l lg:pl-16">
                        <p className="max-w-[40ch] text-lg leading-[1.55] text-dc-text md:text-[21px]">
                            Lucrăm cu clienții pe termen lung. Dacă ai achitat la timp primul credit, la următorul poți primi condiții mai
                            bune:
                        </p>
                        <ul className="mt-7 border-t border-dc-line">
                            {benefits.map((b) => (
                                <li key={b} className="flex items-center gap-4 border-b border-dc-line py-5 text-xl font-semibold text-dc-text">
                                    <span className="block h-2 w-2 shrink-0 bg-dc-proof" aria-hidden />
                                    {b}
                                </li>
                            ))}
                        </ul>
                        <p className="mt-8 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                            <span className="dc-num text-[32px] text-dc-accent">4,9</span>
                            <span className="text-dc-accent" aria-hidden>
                                ★★★★★
                            </span>
                            <span className="text-[15px] text-dc-text-muted">nota medie pe Google</span>
                        </p>
                    </div>
                </div>
            </Container>
        </section>
    );
}
