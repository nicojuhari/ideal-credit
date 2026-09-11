"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu as List, X, Phone, ChevronDown, MessageCircle, PencilLine } from "lucide-react";
import Logo from "@/components/icons/Logo";
import { useFacebookPixel } from "@/hooks/useFacebookPixel";
import Container from "@/components/ds/Container";
import { ButtonPrimary } from "@/components/ds/Button";

type CreditItem = { href: string; label: string; desc: string };

const businessProducts: CreditItem[] = [
    { href: "/credite/credit-pentru-afaceri-mici", label: "Afaceri mici", desc: "Capital rapid pentru SRL, ÎI și antreprenori." },
    { href: "/credite/credit-investitional", label: "Credit investițional", desc: "Echipamente, extindere, modernizare." },
    { href: "/credite/credit-pentru-agricultura", label: "Agricultură", desc: "Pentru fermieri și producători agricoli." },
];

const personalProducts: CreditItem[] = [
    { href: "/credite/credit-pentru-nevoi-personale", label: "Nevoi personale", desc: "Pentru orice scop, fără destinație fixă." },
    { href: "/credite/credit-pentru-reparatie", label: "Reparație", desc: "Renovează locuința cu condiții clare." },
    { href: "/credite/credit-pentru-automobil", label: "Automobil", desc: "Finanțare pentru vehicul nou sau rulat." },
];

const simpleLinks = [
    { href: "/calculator-credit", label: "Calculator" },
    { href: "/despre-noi", label: "Despre noi" },
    { href: "/blog", label: "Blog" },
    { href: "/contacte", label: "Contacte" },
];

function ProductLink({ item }: { item: CreditItem }) {
    return (
        <Link href={item.href} className="group flex flex-col gap-0.5 p-3 rounded-dc-control hover:bg-white/5 transition-colors">
            <span className="text-sm font-semibold text-dc-text">{item.label}</span>
            <span className="text-xs leading-snug text-dc-text-dim">{item.desc}</span>
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

    return (
        <header className="dc sticky top-0 z-30 h-[68px] border-b border-dc-line bg-[rgba(11,11,12,.85)] backdrop-blur-[14px]">
            <Container className="flex h-full items-center justify-between gap-4">
                <Link href="/" title="Ideal Credit - Credite pentru succes!" className="flex items-center gap-2.5">
                    <Logo className="w-[30px]" />
                    <span className="text-[17px] font-extrabold tracking-[-.01em] text-dc-text">Ideal Credit</span>
                </Link>

                {/* Desktop nav */}
                <nav className="hidden md:flex items-center gap-7">
                    <div className="relative" onMouseEnter={() => setCreditOpen(true)} onMouseLeave={() => setCreditOpen(false)}>
                        <button
                            type="button"
                            className="flex items-center gap-1 text-sm font-medium text-dc-text-muted hover:text-dc-text transition-colors"
                            onClick={() => setCreditOpen((v) => !v)}
                            aria-expanded={creditOpen}
                        >
                            Credite
                            <motion.span animate={{ rotate: creditOpen ? 180 : 0 }} transition={{ duration: 0.15 }}>
                                <ChevronDown size={15} />
                            </motion.span>
                        </button>

                        <AnimatePresence>
                            {creditOpen && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.12 }}
                                    className="absolute left-1/2 -translate-x-1/2 top-full pt-3"
                                >
                                    <div className="w-[560px] rounded-dc-card border border-dc-line bg-dc-surface">
                                        <div className="grid grid-cols-2 p-3">
                                            <div className="pr-3 border-r border-dc-line">
                                                <p className="mb-1.5 px-3 text-[10px] font-semibold uppercase tracking-widest text-dc-text-dim">
                                                    Pentru afaceri
                                                </p>
                                                {businessProducts.map((p) => (
                                                    <ProductLink key={p.href} item={p} />
                                                ))}
                                            </div>
                                            <div className="pl-3">
                                                <p className="mb-1.5 px-3 text-[10px] font-semibold uppercase tracking-widest text-dc-text-dim">
                                                    Pentru persoane fizice
                                                </p>
                                                {personalProducts.map((p) => (
                                                    <ProductLink key={p.href} item={p} />
                                                ))}
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between border-t border-dc-line px-6 py-3">
                                            <span className="text-xs text-dc-text-dim">Toate produsele de credit</span>
                                            <Link href="/credite" className="text-sm font-medium text-dc-text hover:text-white">
                                                Vezi toate →
                                            </Link>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {simpleLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            title={link.label}
                            className="text-sm font-medium text-dc-text-muted hover:text-dc-text transition-colors"
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                {/* Right cluster */}
                <div className="hidden md:flex items-center gap-4">
                    <a
                        href="tel:+37361252777"
                        onClick={() => trackEvent("Contact")}
                        className="text-sm font-semibold text-dc-text hover:text-white transition-colors"
                    >
                        0612 52 777
                    </a>
                    {/* <ButtonPrimary href="/cerere-de-credit-online" size="nav">
                        Solicită un credit
                    </ButtonPrimary> */}
                </div>

                {/* Mobile burger */}
                <button
                    onClick={toggleMenu}
                    aria-label="Deschide meniu"
                    aria-expanded={menuOpen}
                    className="flex md:hidden p-2 rounded-dc-control border border-dc-line text-dc-text"
                >
                    <List size={20} />
                </button>
            </Container>

            {/* Mobile fullscreen sheet */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        key="mobile-menu"
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ type: "tween", duration: 0.2, ease: "easeInOut" }}
                        className="fixed top-0 left-0 z-50 flex h-dvh w-full flex-col overflow-y-auto bg-dc-bg"
                    >
                        <div className="flex items-center justify-between border-b border-dc-line px-6 py-4">
                            <Link href="/" className="flex items-center gap-2.5" onClick={toggleMenu}>
                                <Logo className="w-[30px]" />
                                <span className="text-[17px] font-extrabold tracking-[-.01em] text-dc-text">Ideal Credit</span>
                            </Link>
                            <button
                                onClick={toggleMenu}
                                aria-label="Închide meniu"
                                className="p-2 rounded-dc-control border border-dc-line text-dc-text"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        <div className="px-6 py-2">
                            <p className="mt-4 mb-1 px-1 text-xs uppercase tracking-wider text-dc-text-dim">Pentru afaceri</p>
                            {businessProducts.map((p) => (
                                <Link key={p.href} href={p.href} className="block p-3 rounded-dc-control hover:bg-white/5">
                                    <span className="text-base font-medium text-dc-text">{p.label}</span>
                                </Link>
                            ))}

                            <p className="mt-5 mb-1 px-1 text-xs uppercase tracking-wider text-dc-text-dim">Pentru persoane fizice</p>
                            {personalProducts.map((p) => (
                                <Link key={p.href} href={p.href} className="block p-3 rounded-dc-control hover:bg-white/5">
                                    <span className="text-base font-medium text-dc-text">{p.label}</span>
                                </Link>
                            ))}

                            <p className="mt-5 mb-1 px-1 text-xs uppercase tracking-wider text-dc-text-dim">Companie</p>
                            {simpleLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    title={link.label}
                                    className="block p-3 rounded-dc-control text-lg font-medium text-dc-text hover:bg-white/5"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>

                        <div className="mt-auto mb-8 space-y-3 px-6">
                            <a
                                href="tel:+37361252777"
                                onClick={() => trackEvent("Contact")}
                                className="flex h-11 w-full items-center justify-center gap-2 rounded-dc-control border border-dc-line-strong text-sm font-semibold text-dc-text"
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
                                className="flex h-11 w-full items-center justify-center gap-2 rounded-dc-control border border-dc-line-strong text-sm font-semibold text-dc-text"
                            >
                                <MessageCircle size={18} /> WhatsApp
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
