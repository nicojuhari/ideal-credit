"use client";

import Link from "next/link";
import Logo from "@/components/icons/Logo";
import { useFacebookPixel } from "@/hooks/useFacebookPixel";
import { OFFICES } from "@/lib/constants";
import Container from "@/components/ds/Container";
import Note from "@/components/ds/Note";
import { ButtonPrimary } from "@/components/ds/Button";

const groups = [
    {
        title: "Afaceri",
        links: [
            { href: "/credite/credit-pentru-afaceri", label: "Credit pentru afaceri" },
            { href: "/credite/credit-investitional", label: "Credit investițional" },
            { href: "/credite/credit-pentru-agricultura", label: "Credit pentru agricultură" },
        ],
    },
    {
        title: "Persoane fizice",
        links: [
            { href: "/credite/credit-pentru-nevoi-personale", label: "Nevoi personale" },
            { href: "/credite/credit-pentru-reparatie", label: "Reparație" },
            { href: "/credite/credit-pentru-automobil", label: "Automobil" },
        ],
    },
    {
        title: "Ideal Credit",
        links: [
            { href: "/despre-noi", label: "Despre noi" },
            { href: "/calculator-credit", label: "Calculator" },
            { href: "/dictionar-financiar", label: "Dicționar financiar" },
            { href: "/cerere-de-credit-online", label: "Cerere online" },
            { href: "/contacte", label: "Contacte" },
        ],
    },
];

const legalLinks = [
    { href: "/autoritatea-de-supraveghere", label: "Autoritatea de supraveghere" },
    { href: "/terms", label: "Termeni" },
    { href: "/privacy", label: "Confidențialitate" },
    { href: "/cookies", label: "Cookies" },
];

const offices = [
    { city: "Chișinău", o: OFFICES.find((o) => o.city.includes("Chișinău"))! },
    { city: "Căușeni", o: OFFICES.find((o) => o.city.includes("Căușeni"))! },
];

const groupTitle = "mb-4 text-xs font-medium uppercase tracking-[.12em] text-dc-text-muted";

export default function Footer() {
    const { trackEvent } = useFacebookPixel();

    return (
        <footer className="dc overflow-hidden pt-14 sm:pt-20">
            <Container>
                <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,2.2fr)] lg:gap-20">
                    <div className="max-w-[360px]">
                        <Link href="/" className="flex items-center gap-[11px]">
                            <Logo className="w-9" />
                            <span className="text-base font-semibold tracking-[-.01em] text-dc-text">Ideal Credit</span>
                        </Link>
                        <p className="mt-5 text-[15px] leading-[1.6] text-dc-text-muted">
                            Companie de creditare nebancară din Moldova, din 2010. Credite pentru afaceri și nevoi personale.
                        </p>
                        <ButtonPrimary href="/cerere-de-credit-online" className="mt-7">
                            Cerere online
                        </ButtonPrimary>
                    </div>

                    <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4">
                        {groups.map((g) => (
                            <div key={g.title}>
                                <p className={groupTitle}>{g.title}</p>
                                <ul className="flex flex-col gap-1 text-[15px]">
                                    {g.links.map((l) => (
                                        <li key={l.href}>
                                            <Link href={l.href} className="block py-1.5 text-[#c8c8c8] transition-colors hover:text-white">
                                                {l.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                        <div className="col-span-2 md:col-span-1">
                            <p className={groupTitle}>Oficii</p>
                            <div className="flex flex-col gap-5 text-[15px] leading-[1.5]">
                                {offices.map(({ city, o }) => (
                                    <div key={city}>
                                        <p className="text-dc-text">{city}</p>
                                        <p className="text-dc-text-muted">
                                            {o.address}
                                        </p>
                                        <a
                                            href={`tel:${o.mobile}`}
                                            onClick={() => trackEvent("Contact")}
                                            className="inline-block py-1 font-dc-mono text-sm text-dc-accent"
                                        >
                                            {o.mobileDisplay}
                                        </a>
                                    </div>
                                ))}
                                <p className="font-dc-mono text-[13px] text-dc-text-muted">Luni–vineri, 8:30–16:30</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-14 border border-dc-line px-6 py-7 sm:mt-16">
                    <p className="text-xs uppercase tracking-[.1em] text-dc-text-muted">La creditele pentru persoane fizice respectăm legea nr. 202/2013:</p>
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

                <div className="mt-10 flex flex-col gap-4 border-t border-dc-line py-6 text-[13px] text-dc-text-muted sm:flex-row sm:flex-wrap sm:justify-between">
                    <span>© {new Date().getFullYear()} OCN „Ideal Credit” SRL · IDNO 1010608000541</span>
                    <nav aria-label="Informații legale" className="flex flex-wrap gap-x-6 gap-y-2">
                        {legalLinks.map((l) => (
                            <Link key={l.href} href={l.href} className="py-1 transition-colors hover:text-white">
                                {l.label}
                            </Link>
                        ))}
                    </nav>
                </div>
            </Container>
            <p
                aria-hidden
                className="px-6 pb-8 pt-4 text-[56px] font-semibold leading-[.86] tracking-[-.055em] text-[#161616] sm:text-center sm:text-[clamp(56px,8.4vw,132px)] lg:whitespace-nowrap"
            >
                Credite pentru succes
            </p>
        </footer>
    );
}
