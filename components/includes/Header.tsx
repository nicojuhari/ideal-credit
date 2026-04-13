"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "framer-motion";
import {
    Menu as List,
    X,
    Phone,
    ChevronDown,
    Briefcase,
    Sprout,
    Car,
    User,
    Hammer,
    Wallet,
    ArrowRight,
    TrendingUp,
    Building2,
    RefreshCw,
    BadgeCheck,
} from "lucide-react";
import Logo from "@/components/icons/Logo";
import ButtonsCTA from "@/components/ui/ButtonsCTA";
import { useFacebookPixel } from "@/hooks/useFacebookPixel";

type CreditItem = {
    href: string;
    label: string;
    desc: string;
    icon: React.ComponentType<{ size?: number; className?: string }>;
};

const businessProducts: CreditItem[] = [
    {
        href: "/credite/credit-pentru-afaceri-mici",
        label: "Afaceri mici",
        desc: "Capital rapid pentru SRL, ÎI și antreprenori.",
        icon: Briefcase,
    },
    {
        href: "/credite/credit-capital-de-lucru",
        label: "Capital de lucru",
        desc: "Salarii, furnizori, stoc - flux de numerar stabil.",
        icon: TrendingUp,
    },
    {
        href: "/credite/credit-investitional",
        label: "Credit investițional",
        desc: "Echipamente, extindere, modernizare.",
        icon: Building2,
    },
    {
        href: "/credite/refinantare",
        label: "Refinanțare",
        desc: "Consolidezi datoriile, reduci rata lunară.",
        icon: RefreshCw,
    },
    {
        href: "/credite/credit-pentru-agricultura",
        label: "Agricultură",
        desc: "Pentru fermieri și producători agricoli.",
        icon: Sprout,
    },
];

const personalProducts: CreditItem[] = [
    {
        href: "/credite/credit-pentru-nevoi-personale",
        label: "Nevoi personale",
        desc: "Pentru orice scop, fără destinație fixă.",
        icon: User,
    },
    {
        href: "/credite/credit-pina-la-salariu",
        label: "Până la salariu",
        desc: "Sumă mică, rambursare rapidă.",
        icon: Wallet,
    },
    {
        href: "/credite/credit-pentru-reparatie",
        label: "Reparație",
        desc: "Renovează locuința cu condiții clare.",
        icon: Hammer,
    },
    {
        href: "/credite/credit-pentru-automobil",
        label: "Automobil",
        desc: "Finanțare pentru vehicul nou sau rulat.",
        icon: Car,
    },
    {
        href: "/credite/credit-pentru-bugetari",
        label: "Bugetari",
        desc: "Condiții speciale pentru angajați la stat.",
        icon: BadgeCheck,
    },
];

const simpleLinks = [
    { href: "/despre-noi", label: "Despre noi" },
    { href: "/blog", label: "Blog" },
    { href: "/contacte", label: "Contacte" },
];

function ProductLink({ item }: { item: CreditItem }) {
    const Icon = item.icon;
    return (
        <Link href={item.href} className="group flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-500/10 text-brand-500 group-hover:bg-brand-500/20 transition-colors">
                <Icon size={18} />
            </span>
            <span className="flex flex-col min-w-0">
                <span className="flex items-center gap-1.5 text-sm font-medium text-white">{item.label}</span>
                <span className="text-xs text-gray-500 leading-snug mt-0.5">{item.desc}</span>
            </span>
        </Link>
    );
}

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [creditOpen, setCreditOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();
    const { trackEvent } = useFacebookPixel();
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 8));

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
        <motion.header
            className="sticky top-0 z-30 border-b border-white/5 backdrop-blur-xl"
            animate={{
                backgroundColor: scrolled ? "rgba(11,11,11,0.85)" : "rgba(17,17,17,0.6)",
                height: scrolled ? 56 : 68,
            }}
            transition={{ type: "tween", duration: 0.25, ease: "easeOut" }}
        >
            <div className="flex justify-between items-center gap-4 h-full container">
                <Link href="/" title="Ideal Credit" className="flex items-center gap-2">
                    <Logo className="w-8 md:w-10" />
                </Link>

                {/* Desktop nav */}
                <nav className="items-center gap-1 hidden md:flex">
                    {/* Credite dropdown */}
                    <div className="relative" onMouseEnter={() => setCreditOpen(true)} onMouseLeave={() => setCreditOpen(false)}>
                        <button
                            type="button"
                            className="flex items-center gap-1 px-3 py-2 rounded-full text-white hover:text-white transition-colors"
                            onClick={() => setCreditOpen((v) => !v)}
                            aria-expanded={creditOpen}
                        >
                            Credite
                            <motion.span animate={{ rotate: creditOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                                <ChevronDown size={16} />
                            </motion.span>
                        </button>

                        <AnimatePresence>
                            {creditOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: 8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 8 }}
                                    transition={{ duration: 0.18, ease: "easeOut" }}
                                    className="absolute left-1/2 -translate-x-1/2 top-full pt-3"
                                >
                                    <div
                                        className="w-170 rounded-xl border border-white/10 bg-black-600 backdrop-blur-xl shadow-glow"
                                        style={{ boxShadow: "0 20px 60px -20px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.04)" }}
                                    >
                                        <div className="grid grid-cols-2 gap-0 p-3">
                                            {/* Business column */}
                                            <div className="pr-3 border-r border-white/5">
                                                <div className="text-[10px] uppercase tracking-widest text-gray-500 font-medium mb-1.5 px-3">
                                                    Pentru afaceri
                                                </div>
                                                {businessProducts.map((p) => (
                                                    <ProductLink key={p.href} item={p} />
                                                ))}
                                            </div>

                                            {/* Personal column */}
                                            <div className="pl-3">
                                                <div className="text-[10px] uppercase tracking-widest text-gray-500 font-medium mb-1.5 px-3">
                                                    Pentru persoane fizice
                                                </div>
                                                {personalProducts.map((p) => (
                                                    <ProductLink key={p.href} item={p} />
                                                ))}
                                            </div>
                                        </div>

                                        <div className="px-6 py-3 border-t border-white/5 flex items-center justify-between">
                                            <span className="text-xs text-gray-500">Toate produsele de credit</span>
                                            <Link
                                                href="/credite"
                                                className="flex items-center gap-1 text-sm text-brand-500 hover:text-brand-400 transition-colors"
                                            >
                                                Vezi toate <ArrowRight size={14} />
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
                            className="px-3 py-2 rounded-full text-white hover:text-white transition-colors"
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                {/* Right cluster */}
                <div className="hidden md:flex items-center gap-2">
                    <a
                        href="tel:+37378805060"
                        onClick={() => trackEvent("Contact")}
                        className="inline-flex items-center gap-2 h-10 px-4 rounded-full border border-brand-500/10 bg-brand-500/5 text-brand-500 hover:text-brand-500 hover:border-brand-500/40 transition-colors text-base font-medium"
                    >
                        <Phone size={16} /> 078 80 50 60
                    </a>
                </div>

                {/* Mobile burger */}
                <div className="flex md:hidden">
                    <button
                        onClick={toggleMenu}
                        aria-label="Deschide meniu"
                        className="p-2 bg-black-400 cursor-pointer rounded-full text-white"
                    >
                        <List size={20} />
                    </button>
                </div>
            </div>

            {/* Mobile fullscreen sheet */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        key="mobile-menu"
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ type: "tween", duration: 0.25, ease: "easeInOut" }}
                        className="fixed top-0 left-0 bg-black-800 w-full flex flex-col z-50 h-dvh overflow-y-auto"
                    >
                        <div className="flex items-center justify-between py-3 px-4 border-b border-white/5">
                            <Link href="/" className="flex items-center gap-2" onClick={toggleMenu}>
                                <Logo className="w-8" />
                            </Link>
                            <button onClick={toggleMenu} aria-label="Închide meniu" className="p-2 rounded-full bg-black-400 text-white">
                                <X size={20} />
                            </button>
                        </div>

                        <div className="px-4 py-2">
                            {/* Business section */}
                            <div className="text-xs uppercase tracking-wider text-gray-500 mt-4 mb-2 px-1">Pentru afaceri</div>
                            <div className="grid grid-cols-1 gap-0.5">
                                {businessProducts.map((p, i) => {
                                    const Icon = p.icon;
                                    return (
                                        <motion.div
                                            key={p.href}
                                            initial={{ opacity: 0, x: 16 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.03 + i * 0.025 }}
                                        >
                                            <Link href={p.href} className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5">
                                                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-500/10 text-brand-500">
                                                    <Icon size={18} />
                                                </span>
                                                <span className="flex items-center gap-1.5 text-base font-medium">{p.label}</span>
                                            </Link>
                                        </motion.div>
                                    );
                                })}
                            </div>

                            {/* Personal section */}
                            <div className="text-xs uppercase tracking-wider text-gray-500 mt-5 mb-2 px-1">Pentru persoane fizice</div>
                            <div className="grid grid-cols-1 gap-0.5">
                                {personalProducts.map((p, i) => {
                                    const Icon = p.icon;
                                    return (
                                        <motion.div
                                            key={p.href}
                                            initial={{ opacity: 0, x: 16 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.15 + i * 0.025 }}
                                        >
                                            <Link href={p.href} className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5">
                                                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-500/10 text-brand-500">
                                                    <Icon size={18} />
                                                </span>
                                                <span className="flex items-center gap-1.5 text-base font-medium">{p.label}</span>
                                            </Link>
                                        </motion.div>
                                    );
                                })}
                            </div>

                            {/* Company links */}
                            <div className="text-xs uppercase tracking-wider text-gray-500 mt-5 mb-2 px-1">Companie</div>
                            {simpleLinks.map((link, i) => (
                                <motion.div
                                    key={link.href}
                                    initial={{ opacity: 0, x: 16 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.35 + i * 0.05 }}
                                >
                                    <Link
                                        href={link.href}
                                        title={link.label}
                                        className="flex w-full font-medium text-lg p-3 rounded-xl hover:bg-white/5"
                                    >
                                        {link.label}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="mt-auto mb-8 space-y-4 text-center px-4"
                        >
                            <a
                                href="tel:+37378805060"
                                onClick={() => trackEvent("Contact")}
                                className="w-full max-w-[320px] flex mx-auto justify-center items-center gap-2 h-10 px-4 rounded-full border border-brand-500/10 bg-brand-500/5 text-brand-500 hover:text-brand-500 hover:border-brand-500/40 transition-colors text-base font-medium"
                            >
                                <Phone size={16} /> 078 80 50 60
                            </a>
                            <ButtonsCTA />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
