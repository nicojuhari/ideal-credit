"use client";

import Link from "next/link";
import Logo from "@/components/icons/Logo";
import { useFacebookPixel } from "@/hooks/useFacebookPixel";
import { OFFICES } from "@/lib/constants";
import Container from "@/components/ds/Container";
import Note from "@/components/ds/Note";

const productLinks = [
    { href: "/credite", label: "Toate creditele" },
    { href: "/credite/credit-pentru-afaceri", label: "Afaceri" },
    { href: "/credite/credit-investitional", label: "Investițional" },
    { href: "/credite/credit-pentru-agricultura", label: "Agricultură" },
    { href: "/credite/credit-pentru-nevoi-personale", label: "Nevoi personale" },
    { href: "/credite/credit-pentru-automobil", label: "Automobil" },
    { href: "/credite/credit-pentru-reparatie", label: "Reparație" },
];

const companyLinks = [
    { href: "/despre-noi", label: "Despre noi" },
    { href: "/calculator-credit", label: "Calculator" },
    { href: "/dictionar-financiar", label: "Dicționar financiar" },
    { href: "/blog", label: "Dincolo de Cifre" },
    { href: "/contacte", label: "Contacte" },
    { href: "/cerere-de-credit-online", label: "Cerere online" },
    { href: "/autoritatea-de-supraveghere", label: "Autoritatea de Supraveghere" },
];

const legalLinks = [
    { href: "/terms", label: "Termeni" },
    { href: "/privacy", label: "Confidențialitate" },
    { href: "/cookies", label: "Cookies" },
];

const chisinau = OFFICES.find((o) => o.city.includes("Chișinău"))!;
const causeni = OFFICES.find((o) => o.city.includes("Căușeni"))!;

function FooterLinkGroup({ title, links }: { title: string; links: { href: string; label: string }[] }) {
    return (
        <div>
            <p className="mb-3.5 text-xs uppercase tracking-[.1em] text-dc-text-muted">{title}</p>
            <ul className="flex flex-col gap-[11px] text-[15px]">
                {links.map((l) => (
                    <li key={l.href}>
                        <Link
                            title={l.label}
                            href={l.href}
                            className="text-dc-text-muted transition-colors duration-[120ms] hover:text-white"
                        >
                            {l.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default function Footer() {
    const { trackEvent } = useFacebookPixel();

    return (
        <footer className="dc dc-section dc-section--footer border-t border-dc-line">
            <Container className="flex flex-col gap-14">
                <div className="grid gap-10" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
                    <div className="flex flex-col gap-4">
                        <Link href="/" className="flex items-center gap-[11px]">
                            <Logo className="w-9" />
                            <span className="text-[15px] font-medium text-dc-text">Ideal Credit</span>
                        </Link>
                        <p className="max-w-[280px] text-[15px] leading-[1.6] text-dc-text-muted">
                            Credite pentru succes în afaceri și nevoi personale.
                        </p>
                    </div>

                    <FooterLinkGroup title="Soluții" links={productLinks} />
                    <FooterLinkGroup title="Companie" links={companyLinks} />

                    <div>
                        <p className="mb-3.5 text-xs uppercase tracking-[.1em] text-dc-text-muted">Oficii</p>
                        <p className="text-[15px] leading-[1.6] text-dc-text-muted">
                            {causeni.city.replace(/^(or\.|m\.)\s*/, "")} · {causeni.street} {causeni.addressNumbers}
                            <br />
                            <a
                                href={`tel:${causeni.mobile}`}
                                onClick={() => trackEvent("Contact")}
                                className="font-dc-mono text-dc-text transition-colors duration-[120ms] hover:text-white"
                            >
                                {causeni.mobileDisplay}
                            </a>
                        </p>
                        <p className="mt-6 text-[15px] leading-[1.6] text-dc-text-muted">
                            {chisinau.city.replace(/^(or\.|m\.)\s*/, "")} · {chisinau.street} {chisinau.addressNumbers}
                            <br />
                            <a
                                href={`tel:${chisinau.mobile}`}
                                onClick={() => trackEvent("Contact")}
                                className="font-dc-mono text-dc-text transition-colors duration-[120ms] hover:text-white"
                            >
                                {chisinau.mobileDisplay}
                            </a>
                        </p>
                    </div>
                </div>

                <div className="border border-dc-line px-6 py-8">
                    <p className="text-xs uppercase tracking-[.1em] text-dc-text-muted">
                        Noi respectăm ce spune legea, în special legea nr. 202/2013:
                    </p>
                    <Note className="mt-4 max-w-[900px]">
                        <ol className="space-y-1.5 !list-disc list-inside text-xs">
                            <li>rata maximală a dobânzii anuale specificate în contract nu poate depăși 50%</li>
                            <li>
                                toate celelalte plăți aferente (comisioane, taxe, penalități, dobânzi de întârziere) nu pot depăși 0,04%/zi
                                din valoarea totală a creditului
                            </li>
                            <li>costul total al creditului nu poate depăși valoarea debursată (cu excepția contractelor ipotecare)</li>
                        </ol>
                    </Note>
                </div>

                <div className="flex flex-wrap justify-between gap-5 text-xs tracking-[.06em] text-dc-text-muted uppercase">
                    <span>© {new Date().getFullYear()} Ideal Credit SRL</span>
                    <span className="flex flex-wrap gap-6">
                        {legalLinks.map((l) => (
                            <Link
                                key={l.href}
                                href={l.href}
                                className="text-dc-text-muted transition-colors duration-[120ms] hover:text-white"
                            >
                                {l.label}
                            </Link>
                        ))}
                    </span>
                </div>
            </Container>
        </footer>
    );
}
