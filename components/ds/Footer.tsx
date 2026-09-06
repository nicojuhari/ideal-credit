import Link from "next/link";
import { Brand } from "./Brand";
import { EyebrowLabel } from "./EyebrowLabel";
import { PHONE_DISPLAY, PHONE_TEL } from "./constants";

const PRODUCTS = [
    { href: "/credite/credit-pentru-afaceri-mici", label: "Afaceri mici" },
    { href: "/credite/credit-capital-de-lucru", label: "Capital de lucru" },
    { href: "/credite/credit-investitional", label: "Credit investițional" },
    { href: "/credite/refinantare", label: "Refinanțare" },
];

const COMPANY = [
    { href: "/despre-noi", label: "Despre noi" },
    { href: "/calculator-credit", label: "Calculator credit" },
    { href: "/blog", label: "Ghiduri" },
    { href: "/contacte", label: "Contacte" },
];

const LEGAL = [
    { href: "/terms", label: "Termeni" },
    { href: "/cookies", label: "Cookies" },
    { href: "/privacy", label: "Confidențialitate" },
    { href: "/autoritatea-de-supraveghere", label: "Autoritatea de supraveghere" },
];

const linkClass = "transition-colors duration-200 hover:text-text";

/** Brand column + Produse / Companie / Oficii, then the legal line. Hairline on top. */
export function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className="border-t border-line">
            <div className="ds-shell grid grid-cols-[minmax(0,1.4fr)_repeat(3,minmax(0,1fr))] gap-10 py-14 max-ds-md:grid-cols-2 max-ds-sm:grid-cols-1 max-ds-sm:gap-8 max-ds-sm:py-10">
                <div>
                    <Brand size="footer" />
                    <p className="mt-4 max-w-[260px] text-meta leading-[1.6] text-text-3">Organizație de creditare nebancară. Credite pentru afaceri și consum în Moldova.</p>
                </div>
                <nav aria-label="Produse" className="flex flex-col gap-3 text-meta text-text-3">
                    <EyebrowLabel tone="paper" tracking="tight" className="text-fine">
                        Produse
                    </EyebrowLabel>
                    {PRODUCTS.map((l) => (
                        <Link key={l.href} href={l.href} className={linkClass}>
                            {l.label}
                        </Link>
                    ))}
                </nav>
                <nav aria-label="Companie" className="flex flex-col gap-3 text-meta text-text-3">
                    <EyebrowLabel tone="paper" tracking="tight" className="text-fine">
                        Companie
                    </EyebrowLabel>
                    {COMPANY.map((l) => (
                        <Link key={l.href} href={l.href} className={linkClass}>
                            {l.label}
                        </Link>
                    ))}
                </nav>
                <div className="flex flex-col gap-3 text-meta text-text-3">
                    <EyebrowLabel tone="paper" tracking="tight" className="text-fine">
                        Oficii
                    </EyebrowLabel>
                    <span>Căușeni · str. M. Eminescu 17</span>
                    <span>Chișinău · str. Ginta Latină 18</span>
                    <a href={PHONE_TEL} className="font-figure text-text hover:text-brand">
                        {PHONE_DISPLAY}
                    </a>
                </div>
            </div>
            <div className="ds-shell flex flex-wrap items-baseline justify-between gap-x-8 gap-y-3 pb-12 text-fine text-text-3 max-ds-sm:pb-8">
                <p>© {year} OCN Ideal Credit SRL. Conform Legii nr. 202/2013, dobânda anuală nu depășește 50%.</p>
                <nav aria-label="Legal" className="flex flex-wrap gap-x-5 gap-y-2">
                    {LEGAL.map((l) => (
                        <Link key={l.href} href={l.href} rel={l.href === "/autoritatea-de-supraveghere" ? "nofollow" : undefined} className={linkClass}>
                            {l.label}
                        </Link>
                    ))}
                </nav>
            </div>
        </footer>
    );
}
