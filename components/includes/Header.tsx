"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu as List, X, Phone, ChevronDown, MessageCircle, PencilLine } from "lucide-react";
import Logo from "@/components/icons/Logo";
import { useFacebookPixel } from "@/hooks/useFacebookPixel";
import Container from "@/components/ds/Container";
import { ButtonPrimary } from "@/components/ds/Button";
import { cn } from "@/lib/utils";

type CreditItem = { href: string; label: string; desc: string };

const businessProducts: CreditItem[] = [
    {
        href: "/credite/credit-pentru-afaceri",
        label: "Afaceri",
        desc: "Capital rapid pentru SRL, ÎI și antreprenori.",
    },
    {
        href: "/credite/credit-investitional",
        label: "Credit investițional",
        desc: "Echipamente, extindere, modernizare.",
    },
    {
        href: "/credite/credit-pentru-agricultura",
        label: "Agricultură",
        desc: "Pentru fermieri și producători agricoli.",
    },
];

const personalProducts: CreditItem[] = [
    {
        href: "/credite/credit-pentru-nevoi-personale",
        label: "Nevoi personale",
        desc: "Pentru orice scop, fără destinație fixă.",
    },
    {
        href: "/credite/credit-pentru-reparatie",
        label: "Reparație",
        desc: "Renovează locuința cu condiții clare.",
    },
    {
        href: "/credite/credit-pentru-automobil",
        label: "Automobil",
        desc: "Finanțare pentru vehicul nou sau rulat.",
    },
];

const simpleLinks = [
    { href: "/calculator-credit", label: "Calculator" },
    { href: "/despre-noi", label: "Despre noi" },
    { href: "/contacte", label: "Contacte" },
];

function ProductLink({ item }: { item: CreditItem }) {
    return (
        <Link href={item.href} className="group flex flex-col gap-0.5 p-3 transition-colors hover:bg-white/5">
            <span className="text-[15px] font-semibold text-dc-text">{item.label}</span>
            <span className="text-xs leading-snug text-dc-text-muted">{item.desc}</span>
        </Link>
    );
}

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [creditOpen, setCreditOpen] = useState(false);
    const pathname = usePathname();
    const { trackEvent } = useFacebookPixel();

    useEffect(() => {
        setTimeout(() => {
            setMenuOpen(false);
            setCreditOpen(false);
        }, 0);
        document.body.classList.remove("menu-open");
    }, [pathname]);

    const toggleMenu = () => {
        setMenuOpen((prev) => {
            const next = !prev;
            document.body.classList.toggle("menu-open", next);
            return next;
        });
    };

    const isCreditActive = pathname.startsWith("/credite");

    return (
        <header className="dc sticky top-0 z-10 min-h-[72px] border-b border-dc-line bg-dc-bg">
            <Container className="flex min-h-[72px] items-center justify-between gap-6">
                <Link href="/" title="Ideal Credit - Credite pentru succes!" className="flex items-center gap-[11px]">
                    <Logo className="w-9" />
                    <span className="text-base font-medium tracking-[-.01em] text-dc-text">Ideal Credit</span>
                </Link>

                {/* Desktop nav */}
                <nav className="hidden items-center gap-7 md:flex">
                    <div className="relative" onMouseEnter={() => setCreditOpen(true)} onMouseLeave={() => setCreditOpen(false)}>
                        <button
                            type="button"
                            className={cn(
                                "flex items-center gap-1 text-[15px] transition-colors hover:text-dc-text",
                                isCreditActive ? "text-dc-text" : "text-dc-text-muted",
                            )}
                            onClick={() => setCreditOpen((v) => !v)}
                            aria-expanded={creditOpen}
                        >
                            Credite
                            <span className={cn("transition-transform duration-150", creditOpen && "rotate-180")}>
                                <ChevronDown size={14} />
                            </span>
                        </button>

                        <div
                            inert={!creditOpen}
                            className={cn(
                                "absolute left-1/2 top-full -translate-x-1/2 pt-3 opacity-0 transition-opacity duration-150",
                                creditOpen && "opacity-100",
                            )}
                        >
                            <div className="w-[560px] border border-dc-line bg-dc-surface">
                                <div className="grid grid-cols-2 p-3">
                                    <div className="border-r border-dc-line pr-3">
                                        <p className="mb-1.5 px-3 text-[11px] uppercase tracking-[.1em] text-dc-text-muted">
                                            Pentru persoane juridice
                                        </p>
                                        {businessProducts.map((p) => (
                                            <ProductLink key={p.href} item={p} />
                                        ))}
                                    </div>
                                    <div className="pl-3">
                                        <p className="mb-1.5 px-3 text-[11px] uppercase tracking-[.1em] text-dc-text-muted">
                                            Pentru persoane fizice
                                        </p>
                                        {personalProducts.map((p) => (
                                            <ProductLink key={p.href} item={p} />
                                        ))}
                                    </div>
                                </div>
                                <div className="flex items-center justify-between border-t border-dc-line px-6 py-3">
                                    <span className="text-xs text-dc-text-muted">Toate soluțiile de credit</span>
                                    <Link
                                        href="/credite"
                                        className="text-[15px] uppercase tracking-[.04em] text-dc-accent underline underline-offset-4"
                                    >
                                        Vezi toate →
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {simpleLinks.map((link) => {
                        const active = pathname === link.href;
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                title={link.label}
                                className={cn(
                                    "text-[15px] transition-colors hover:text-dc-text",
                                    active ? "text-dc-text" : "text-dc-text-muted",
                                )}
                            >
                                {link.label}
                            </Link>
                        );
                    })}
                </nav>

                {/* Right cluster */}
                <div className="hidden items-center gap-[18px] md:flex">
                    <a
                        href="tel:+37361252777"
                        onClick={() => trackEvent("Contact")}
                        className="font-dc-mono text-[15px] font-medium text-dc-text transition-colors hover:text-white"
                    >
                        0612 52 777
                    </a>
                    <ButtonPrimary href="/cerere-de-credit-online" size="nav">
                        Cerere online
                    </ButtonPrimary>
                </div>

                {/* Mobile burger */}
                <button
                    onClick={toggleMenu}
                    aria-label="Deschide meniu"
                    aria-expanded={menuOpen}
                    className="flex border border-dc-line p-2 text-dc-text md:hidden"
                >
                    <List size={20} />
                </button>
            </Container>

            {/* Mobile fullscreen sheet */}
            <div
                inert={!menuOpen}
                className={cn(
                    "fixed top-0 left-0 z-50 flex h-dvh w-full translate-x-full flex-col overflow-y-auto bg-dc-bg opacity-0 transition-[opacity,transform] duration-200 ease-in-out",
                    menuOpen && "translate-x-0 opacity-100",
                )}
            >
                <div className="sticky top-0 z-10 flex items-center justify-between border-b border-dc-line bg-dc-bg px-6 py-4">
                    <Link
                        href="/"
                        title="Ideal Credit - Credite pentru succes!"
                        className="flex items-center gap-[11px]"
                        onClick={toggleMenu}
                    >
                        <Logo className="w-9" />
                        <span className="text-base font-medium tracking-[-.01em] text-dc-text">Ideal Credit</span>
                    </Link>

                    <button onClick={toggleMenu} aria-label="Închide meniu" className="border border-dc-line p-2 text-dc-text">
                        <X size={20} />
                    </button>
                </div>

                <div className="px-6 py-2">
                    <p className="mt-4 mb-1 px-1 text-xs uppercase tracking-[.1em] text-dc-text-muted">Pentru persoane juridice</p>
                    {businessProducts.map((p) => (
                        <Link key={p.href} href={p.href} className="block p-3 hover:bg-white/5">
                            <span className="text-base font-medium text-dc-text">{p.label}</span>
                        </Link>
                    ))}

                    <p className="mt-5 mb-1 px-1 text-xs uppercase tracking-[.1em] text-dc-text-muted">Pentru persoane fizice</p>
                    {personalProducts.map((p) => (
                        <Link key={p.href} href={p.href} className="block p-3 hover:bg-white/5">
                            <span className="text-base font-medium text-dc-text">{p.label}</span>
                        </Link>
                    ))}

                    <p className="mt-5 mb-1 px-1 text-xs uppercase tracking-[.1em] text-dc-text-muted">Companie</p>
                    {simpleLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            title={link.label}
                            className="block p-3 text-lg font-medium text-dc-text hover:bg-white/5"
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                <div className="mt-auto mb-8 space-y-3 px-6">
                    <a
                        href="tel:+37361252777"
                        onClick={() => trackEvent("Contact")}
                        className="flex h-11 w-full items-center justify-center gap-2 border border-dc-line text-[15px] font-semibold text-dc-text"
                    >
                        <Phone size={16} /> 0612 52 777
                    </a>
                    <ButtonPrimary href="/cerere-de-credit-online" className="w-full">
                        <PencilLine size={18} /> Cerere online
                    </ButtonPrimary>
                    <a
                        href="https://wa.me/+37361252777"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => trackEvent("Contact")}
                        className="flex h-11 w-full items-center justify-center gap-2 border border-dc-line text-[15px] font-semibold text-dc-text"
                    >
                        <MessageCircle size={18} /> WhatsApp
                    </a>
                </div>
            </div>
        </header>
    );
}
