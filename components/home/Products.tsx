import Section from "@/components/ds/Section";
import Accent from "@/components/ds/Accent";
import NumberedRow from "@/components/ds/NumberedRow";

const BASE = "/credite/";

const products = [
    { name: "Afaceri mici", desc: "Capital rapid pentru SRL, ÎI și antreprenori.", href: BASE + "credit-pentru-afaceri-mici" },
    { name: "Investițional", desc: "Echipamente, extindere spațiu, modernizare utilaj.", href: BASE + "credit-investitional" },
    { name: "Agricol", desc: "Pentru fermieri, producători și activități sezoniere.", href: BASE + "credit-pentru-agricultura" },
    { name: "Nevoi personale", desc: "Pentru orice cheltuială planificată sau urgentă.", href: BASE + "credit-pentru-nevoi-personale" },
    { name: "Reparație / Renovare", desc: "Reparația locuinței cu rate fixe și costuri clare.", href: BASE + "credit-pentru-reparatie" },
    { name: "Automobil", desc: "Finanțare pentru automobil nou sau second-hand.", href: BASE + "credit-pentru-automobil" },
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
                    <NumberedRow
                        key={p.href}
                        index={i}
                        title={p.name}
                        desc={p.desc}
                        href={p.href}
                        gridCols="44px minmax(0,1.1fr) minmax(0,1.4fr)"
                        titleClassName="font-semibold"
                        descClassName="text-[15px] leading-[1.55]"
                    />
                ))}
            </div>
        </Section>
    );
}
