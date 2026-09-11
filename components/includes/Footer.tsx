"use client";

import Link from "next/link";
import Logo from "@/components/icons/Logo";
import { useFacebookPixel } from "@/hooks/useFacebookPixel";
import { OFFICES } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Container from "@/components/ds/Container";

const productLinks = [
    { href: "/credite/credit-pentru-nevoi-personale", label: "Nevoi personale" },
    { href: "/credite/credit-pentru-automobil", label: "Automobil" },
    { href: "/credite/credit-pentru-reparatie", label: "Reparație" },
    { href: "/credite/credit-pentru-afaceri-mici", label: "Afaceri mici" },
    { href: "/credite", label: "Toate creditele" },
];

const companyLinks = [
    { href: "/despre-noi", label: "Despre noi" },
    { href: "/calculator-credit", label: "Calculator credit" },
    { href: "/contacte", label: "Contacte" },
    { href: "/blog", label: "Blog" },
    { href: "/cerere-de-credit-online", label: "Cerere online" },
];

const legalLinks = [
    { href: "/terms", label: "Termeni" },
    { href: "/cookies", label: "Cookies" },
    { href: "/privacy", label: "Confidențialitate" },
    { href: "/autoritatea-de-supraveghere", label: "Autoritatea de Supraveghere" },
    { href: "/dictionar-financiar", label: "Dicționar financiar" },
];

const socials = [
    {
        href: "https://www.instagram.com/idealcredit.md/",
        title: "Instagram",
        path: "M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z",
    },
    {
        href: "https://www.facebook.com/idealcredit.md",
        title: "Facebook",
        path: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,191.63V152h24a8,8,0,0,0,0-16H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,0-16H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0,0,16h24v63.63a88,88,0,1,1,16,0Z",
    },
    {
        href: "https://www.linkedin.com/company/idealcredit/",
        title: "LinkedIn",
        path: "M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z",
    },
];

function FooterLinkGroup({ title, links }: { title: string; links: { href: string; label: string; className?: string }[] }) {
    return (
        <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-dc-text-dim">{title}</p>
            <ul className="space-y-2.5">
                {links.map((l) => (
                    <li key={l.href}>
                        <Link
                            href={l.href}
                            rel={l.href === "/autoritatea-de-supraveghere" ? "nofollow" : undefined}
                            className={cn("text-sm text-dc-text-muted hover:text-white transition-colors", l.className)}
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
        <footer className="dc border-t border-dc-line pt-20 pb-10">
            <Container className="flex flex-col gap-16">
                {/* Link grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10">
                    <div className="col-span-2 min-w-[260px] space-y-4">
                        <Link href="/" className="flex items-center gap-2.5">
                            <Logo className="w-7" />
                            <span className="text-base font-extrabold tracking-[-.01em] text-dc-text">Ideal Credit</span>
                        </Link>
                        <p className="text-sm text-dc-text-dim max-w-[280px]">Credite nebancare pentru afaceri și consum în Moldova.</p>
                        <div className="flex gap-4 items-center">
                            {socials.map((s) => (
                                <a
                                    key={s.title}
                                    href={s.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title={`Ideal Credit pe ${s.title}`}
                                    className="text-dc-text-muted hover:text-white transition-colors"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 256 256">
                                        <path d={s.path} />
                                    </svg>
                                </a>
                            ))}
                        </div>
                    </div>

                    <FooterLinkGroup title="Produse" links={productLinks} />
                    <FooterLinkGroup title="Companie" links={companyLinks} />
                    <FooterLinkGroup
                        title="Legal"
                        links={legalLinks.map((l) =>
                            l.href === "/autoritatea-de-supraveghere" ? { ...l, className: "underline" } : l,
                        )}
                    />
                </div>

                {/* Offices */}
                <div className="grid gap-5" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
                    {OFFICES.map((office) => (
                        <div key={office.id} className="rounded-dc-card border border-dc-line bg-dc-surface p-6">
                            <div className="flex items-baseline gap-2.5">
                                <span className="text-[17px] font-bold text-dc-text">{office.city.replace(/^(or\.|m\.)\s*/, "")}</span>
                                <span className="text-xs text-dc-text-dim">{office.title}</span>
                            </div>
                            <p className="mt-3 text-sm text-dc-text-muted">
                                {office.street}, {office.addressNumbers}
                            </p>
                            <p className="mt-1 text-xs text-dc-text-dim">Luni – Vineri · 08:30 – 16:30</p>
                            <a
                                href={`tel:${office.mobile}`}
                                onClick={() => trackEvent("Contact")}
                                className="mt-1.5 inline-block text-sm font-bold text-dc-text hover:text-white"
                            >
                                {office.mobileDisplay}
                            </a>
                        </div>
                    ))}
                </div>

                {/* Extras din lege */}
                <div className="border-t border-b border-dc-line py-8">
                    <p className="mb-3 text-sm font-semibold text-dc-text">Extras din lege</p>
                    <div className="text-sm text-dc-text-muted space-y-3">
                        <p>În Legea nr. 202/2013 privind contractele de credit pentru consumatori, au fost impuse limite cu privire la:</p>
                        <ul className="list-disc pl-5 space-y-1.5">
                            <li>Rata maximală a dobânzii anuale specificate în contractul de credit să nu fie mai mare de 50%.</li>
                            <li>
                                Toate celelalte plăți aferente (comisioane, taxe, penalități, dobânzi de întârziere și orice alt tip de
                                plată), cu excepția dobânzii, să nu depășească 0,04% /zi din valoarea totală a creditului pentru termenul
                                de utilizare efectivă a creditului.
                            </li>
                            <li>
                                Costul total al creditului (care include dobânzi, comisioane, taxe, penalități, dobânzi de întârziere și
                                orice alt tip de plată) să nu fie mai mare decât valoarea debursată conform contractului (cu excepția
                                contractelor ipotecare).
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-dc-text-dim">
                    <span>
                        © {new Date().getFullYear()} Organizația de Creditare Nebancară <strong className="text-dc-text-muted">Ideal Credit</strong> SRL
                    </span>
                    <span>Toate drepturile rezervate.</span>
                </div>
            </Container>
        </footer>
    );
}
