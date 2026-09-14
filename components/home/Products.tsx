import Section from "@/components/ds/Section";
import ListRow from "@/components/ds/ListRow";
import Accent from "@/components/ds/Accent";

const BASE = "/credite/";

const business = [
    { name: "Afaceri mici", desc: "Capital rapid pentru SRL, ÎI și antreprenori.", href: BASE + "credit-pentru-afaceri-mici" },
    { name: "Credit investițional", desc: "Echipamente, extindere spațiu, modernizare utilaj.", href: BASE + "credit-investitional" },
    { name: "Credit agricol", desc: "Pentru fermieri, producători și activități agricole sezoniere.", href: BASE + "credit-pentru-agricultura" },
];

const personal = [
    { name: "Nevoi personale", desc: "Pentru orice cheltuială planificată sau urgentă.", href: BASE + "credit-pentru-nevoi-personale" },
    { name: "Reparație / Renovare", desc: "Reparația locuinței cu rate fixe și costuri clare de la început.", href: BASE + "credit-pentru-reparatie" },
    { name: "Automobil", desc: "Finanțare pentru automobil nou sau second-hand.", href: BASE + "credit-pentru-automobil" },
];

export default function Products() {
    return (
        <Section
            id="produse"
            title={
                <>
                    Toate <Accent>produsele</Accent> de credit
                </>
            }
        >
            <div className="grid gap-12" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}>
                <div>
                    <h3 className="border-b border-dc-line pb-4 text-xs font-bold uppercase tracking-[.14em] text-dc-text-dim">
                        Pentru persoane juridice
                    </h3>
                    {business.map((p) => (
                        <ListRow key={p.href} href={p.href} title={p.name} description={p.desc} />
                    ))}
                </div>
                <div>
                    <h3 className="border-b border-dc-line pb-4 text-xs font-bold uppercase tracking-[.14em] text-dc-text-dim">
                        Pentru persoane fizice
                    </h3>
                    {personal.map((p) => (
                        <ListRow key={p.href} href={p.href} title={p.name} description={p.desc} />
                    ))}
                </div>
            </div>
        </Section>
    );
}
