import Link from "next/link";
import Section from "@/components/ds/Section";
import Accent from "@/components/ds/Accent";

const BASE = "/credite/";

const products = [
    { name: "Afaceri mici", desc: "Capital rapid pentru SRL, ÎI și antreprenori.", who: "Juridice", href: BASE + "credit-pentru-afaceri-mici" },
    {
        name: "Investițional",
        desc: "Echipamente, extindere spațiu, modernizare utilaj.",
        who: "Juridice",
        href: BASE + "credit-investitional",
    },
    {
        name: "Agricol",
        desc: "Pentru fermieri, producători și activități sezoniere.",
        who: "Juridice",
        href: BASE + "credit-pentru-agricultura",
    },
    {
        name: "Nevoi personale",
        desc: "Pentru orice cheltuială planificată sau urgentă.",
        who: "Fizice",
        href: BASE + "credit-pentru-nevoi-personale",
    },
    {
        name: "Reparație / Renovare",
        desc: "Reparația locuinței cu rate fixe și costuri clare.",
        who: "Fizice",
        href: BASE + "credit-pentru-reparatie",
    },
    { name: "Automobil", desc: "Finanțare pentru automobil nou sau second-hand.", who: "Fizice", href: BASE + "credit-pentru-automobil" },
];

export default function Products() {
    return (
        <Section
            id="produse"
            marker="Produse"
            title={
                <>
                    Registrul de <Accent>produse</Accent>
                </>
            }
        >
            <div className="border-t border-dc-line">
                {products.map((p, i) => (
                    <Link
                        key={p.href}
                        href={p.href}
                        className="grid items-center gap-7 border-b border-dc-line px-8 py-7 transition-colors hover:bg-dc-surface"
                        style={{ gridTemplateColumns: "44px minmax(0,1.1fr) minmax(0,1.4fr) auto" }}
                    >
                        <span className="font-dc-mono text-xs text-dc-text-muted">{String(i + 1).padStart(2, "0")}</span>
                        <span className="text-xl font-semibold tracking-[-.025em] text-dc-text">{p.name}</span>
                        <span className="text-[15px] leading-[1.55] text-dc-text-muted">{p.desc}</span>
                        <span className="text-xs uppercase tracking-[.1em] text-dc-text-muted">{p.who} →</span>
                    </Link>
                ))}
            </div>
        </Section>
    );
}
