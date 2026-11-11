import Container from "@/components/ds/Container";
import Accent from "@/components/ds/Accent";
import ValueRow from "@/components/ds/ValueRow";
import { ButtonPrimary, ButtonSecondary } from "@/components/ds/Button";
import { CALCULATOR_MONTHLY_RATE } from "@/lib/constants";
import { yearsSinceFoundation } from "@/lib/utils";

const proof = [
    { figure: `${yearsSinceFoundation}`, unit: "ani", label: "de activitate, din 2010" },
    { figure: "1–2", unit: "zile", label: "decizia pentru afaceri" },
    { figure: "4,9", unit: "★", label: "nota medie pe Google" },
    { figure: "2", unit: "oficii", label: "Căușeni și Chișinău" },
];

export default function HeroHome() {
    return (
        <section className="dc-section dc-section--hero">
            <Container>
                <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_380px] lg:gap-24">
                    <div>
                        <p className="flex items-center gap-2.5 text-xs font-medium uppercase tracking-[.12em] text-dc-text-muted">
                            <span className="block h-2 w-2 shrink-0 bg-dc-proof" aria-hidden />
                            Companie de creditare nebancară · din 2010
                        </p>
                        <h1 className="mt-6 max-w-[17ch] text-[clamp(40px,5.4vw,80px)] font-semibold leading-[1.02] tracking-[-.04em] text-dc-text">
                            Credite nebancare <Accent>în Moldova.</Accent>
                        </h1>
                        <p className="mt-7 max-w-[42ch] text-lg leading-[1.55] text-[#c8c8c8] md:text-xl">
                            Pentru afaceri și nevoi personale, de la 10.000 la 500.000 lei. Fără comisioane, rapid și transparent.
                        </p>
                        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                            <ButtonPrimary href="/cerere-de-credit-online">Cerere online</ButtonPrimary>
                            <ButtonSecondary href="#calculator">Calculează rata</ButtonSecondary>
                        </div>
                    </div>

                    <aside aria-label="Costul creditului" className="border border-dc-line bg-dc-surface p-6 sm:p-9">
                        <p className="text-[26px] font-semibold leading-[1.15] tracking-[-.02em] text-dc-text sm:text-3xl">
                            Plătești doar <Accent>dobânda.</Accent>
                        </p>
                        <div className="mt-6 border-t border-dc-line">
                            <ValueRow label="Dobânda fixă" value={`${CALCULATOR_MONTHLY_RATE}% pe lună`} proof />
                            <ValueRow label="Comision de acordare" value="0 lei" />
                            <ValueRow label="Comision lunar" value="0 lei" />
                            <ValueRow label="Achitare înainte de termen" value="0 lei" />
                        </div>
                    </aside>
                </div>

                <dl className="mt-16 grid grid-cols-2 gap-px border-y border-dc-line bg-dc-line lg:mt-24 lg:grid-cols-4">
                    {proof.map((p) => (
                        <div key={p.label} className="flex flex-col-reverse bg-dc-bg py-6 pr-4 even:pl-5 sm:py-8 lg:pl-8 lg:first:pl-0">
                            <dt className="mt-2 text-[14px] leading-snug text-dc-text-muted sm:text-[15px]">{p.label}</dt>
                            <dd className="flex items-baseline gap-2">
                                <span className="dc-num text-[34px] tracking-[-.03em] text-dc-text sm:text-[48px]">{p.figure}</span>
                                <span className={p.unit === "★" ? "text-lg text-dc-accent" : "text-base text-dc-text-muted sm:text-lg"}>
                                    {p.unit}
                                </span>
                            </dd>
                        </div>
                    ))}
                </dl>
            </Container>
        </section>
    );
}
