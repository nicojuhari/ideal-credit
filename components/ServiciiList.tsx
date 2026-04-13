import Link from "next/link";
import { Briefcase, TrendingUp, Building2, RefreshCw, Sprout, User, Wallet, Hammer, Car, BadgeCheck } from "lucide-react";

type Product = {
    href: string;
    label: string;
    desc: string;
    icon: React.ComponentType<{ size?: number; className?: string }>;
};

const businessProducts: Product[] = [
    {
        href: "/credite/credit-pentru-afaceri-mici",
        label: "Afaceri mici",
        desc: "Capital rapid pentru SRL, ÎI și antreprenori.",
        icon: Briefcase,
    },
    {
        href: "/credite/credit-capital-de-lucru",
        label: "Capital de lucru",
        desc: "Salarii, furnizori, stoc - flux de numerar fără întreruperi.",
        icon: TrendingUp,
    },
    {
        href: "/credite/credit-investitional",
        label: "Credit investițional",
        desc: "Echipamente, extindere spațiu, modernizare utilaj.",
        icon: Building2,
    },
    {
        href: "/credite/refinantare",
        label: "Refinanțare",
        desc: "Consolidezi datoriile existente, reduci rata lunară.",
        icon: RefreshCw,
    },
    {
        href: "/credite/credit-pentru-agricultura",
        label: "Credit agricol",
        desc: "Pentru fermieri, producători și activități agricole sezoniere.",
        icon: Sprout,
    },
];

const personalProducts: Product[] = [
    {
        href: "/credite/credit-pentru-nevoi-personale",
        label: "Nevoi personale",
        desc: "Pentru orice cheltuială planificată sau urgentă.",
        icon: User,
    },
    {
        href: "/credite/credit-pina-la-salariu",
        label: "Până la salariu",
        desc: "Sumă mică acoperită rapid, rambursare la următorul salariu.",
        icon: Wallet,
    },
    {
        href: "/credite/credit-pentru-reparatie",
        label: "Reparație / Renovare",
        desc: "Reparația locuinței cu rate fixe și costuri clare de la început.",
        icon: Hammer,
    },
    {
        href: "/credite/credit-pentru-automobil",
        label: "Automobil",
        desc: "Finanțare pentru automobil nou sau second-hand.",
        icon: Car,
    },
    {
        href: "/credite/credit-pentru-bugetari",
        label: "Bugetari",
        desc: "Condiții speciale pentru medici, militari și polițiști.",
        icon: BadgeCheck,
    },
];

function ProductCard({ product }: { product: Product }) {
    const Icon = product.icon;
    return (
        <Link
            href={product.href}
            className="group flex items-start gap-4 p-4 rounded-xl border border-white/5 bg-black-600/50 hover:border-white/15 hover:bg-black-600 transition-colors duration-200"
        >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-500/10 text-brand-500 group-hover:bg-brand-500/20 transition-colors">
                <Icon size={20} />
            </span>
            <span className="flex flex-col min-w-0">
                <span className="text-base font-medium text-white/90 group-hover:text-white transition-colors">{product.label}</span>
                <span className="mt-0.5 text-sm text-white/60 leading-snug">{product.desc}</span>
            </span>
        </Link>
    );
}

export default function ServiciiList() {
    return (
        <section className="container">
            <h2 className="title text-center">Toate produsele de credit</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                {/* Business */}
                <div>
                    <h3 className="text-xs uppercase tracking-widest text-white/40 font-medium mb-3 px-1">Pentru afaceri</h3>
                    <div className="space-y-2">
                        {businessProducts.map((p) => (
                            <ProductCard key={p.href} product={p} />
                        ))}
                    </div>
                </div>

                {/* Personal */}
                <div>
                    <h3 className="text-xs uppercase tracking-widest text-white/40 font-medium mb-3 px-1">Pentru persoane fizice</h3>
                    <div className="space-y-2">
                        {personalProducts.map((p) => (
                            <ProductCard key={p.href} product={p} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
