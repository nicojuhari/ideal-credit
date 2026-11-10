import Link from "next/link";
import Container from "@/components/ds/Container";
import Accent from "@/components/ds/Accent";
import { sectionTitle } from "@/components/ds/SplitSection";

const credits = [
    {
        title: "Capital de lucru",
        body: "Plătești salariile, furnizorii și marfa până încasezi banii de la clienți.",
        cta: "Credit pentru afaceri",
        href: "/credite/credit-pentru-afaceri",
    },
    {
        title: "Investiții",
        body: "Cumperi echipament, utilaje sau transport pentru afacere.",
        cta: "Credit investițional",
        href: "/credite/credit-investitional",
    },
    {
        title: "Agricultură",
        body: "Cumperi semințe și tehnică sau plătești lucrările de sezon. Ratele se potrivesc cu perioada recoltei.",
        cta: "Credit pentru agricultură",
        href: "/credite/credit-pentru-agricultura",
    },
    {
        title: "Afacere nouă",
        body: "Finanțăm și afaceri cu 4–6 luni de activitate, dacă au încasări constante pe cont.",
        cta: "Credit pentru afaceri",
        href: "/credite/credit-pentru-afaceri",
    },
];

export default function BusinessCredits() {
    return (
        <section className="dc-section">
            <Container>
                <div className="flex flex-wrap items-end justify-between gap-6">
                    <h2 className={sectionTitle}>
                        Credite pentru <Accent>afacerea ta.</Accent>
                    </h2>
                    <p className="max-w-[36ch] text-[17px] leading-[1.6] text-dc-text-muted md:text-lg">
                        Pentru SRL, ÎI și gospodării țărănești. De la <span className="font-dc-mono text-dc-text">50.000</span> până la{" "}
                        <span className="font-dc-mono text-dc-text">500.000</span> lei.
                    </p>
                </div>

                <div className="mt-12 grid gap-px border border-dc-line bg-dc-line sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
                    {credits.map((c, i) => (
                        <Link
                            key={c.title}
                            href={c.href}
                            className="group flex flex-col bg-dc-bg p-6 transition-colors hover:bg-dc-surface sm:min-h-[260px] sm:p-8"
                        >
                            <span className="hidden font-dc-mono text-[13px] text-dc-text-muted sm:block">
                                {String(i + 1).padStart(2, "0")}
                            </span>
                            <span className="text-xl font-semibold tracking-[-.02em] text-dc-text sm:mt-auto sm:text-2xl">{c.title}</span>
                            <span className="mt-2.5 text-[15px] leading-[1.55] text-dc-text-muted">{c.body}</span>
                            <span className="mt-5 text-sm text-dc-accent">{c.cta} →</span>
                        </Link>
                    ))}
                </div>

                <Link
                    href="/credite"
                    className="flex flex-wrap items-center justify-between gap-3 border-b border-dc-line py-6 text-base text-dc-text-muted transition-colors hover:text-dc-text"
                >
                    <span>Avem credite și pentru nevoi personale: renovare, automobil, alte cheltuieli.</span>
                    <span className="text-dc-text">Vezi creditele personale →</span>
                </Link>
            </Container>
        </section>
    );
}
