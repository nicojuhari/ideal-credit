"use client";

import Link from "next/link";
import { Phone, ShieldCheck, MapPin } from "lucide-react";
import Logo from "@/components/icons/Logo";
import { useFacebookPixel } from "@/hooks/useFacebookPixel";
import { OFFICES, GLOSSARY_LINKS } from "@/lib/constants";

const productLinks = [
  { href: "/credite/credit-pentru-nevoi-personale", label: "Nevoi personale" },
  { href: "/credite/credit-pina-la-salariu", label: "Până la salariu" },
  { href: "/credite/credit-pentru-automobil", label: "Automobil" },
  { href: "/credite/credit-pentru-reparatie", label: "Reparație" },
  { href: "/credite/credit-pentru-afaceri-mici", label: "Afaceri mici" },
  { href: "/credite", label: "Toate creditele" },
];

const companyLinks = [
  { href: "/despre-noi", label: "Despre noi" },
  { href: "/contacte", label: "Contacte" },
  { href: "/blog", label: "Blog" },
  { href: "/cerere-de-credit-online", label: "Cerere online" },
];

const legalLinks = [
  { href: "/terms", label: "Termeni" },
  { href: "/cookies", label: "Cookies" },
  { href: "/privacy", label: "Confidențialitate" },
  { href: "/autoritatea-de-supraveghere", label: "Autoritatea de Supraveghere" },
];

export default function Footer() {
    const { trackEvent } = useFacebookPixel();

    return (
        <footer className="relative border-t border-white/5 bg-black-700/40 pt-16 pb-10">
            {/* Top: 4-col brand + nav groups */}
            <div className="container grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 pb-10 border-b border-white/5">
                {/* Brand column */}
                <div className="col-span-2 lg:col-span-2 space-y-5">
                    <Link href="/" className="flex items-center gap-3">
                        <Logo className="w-8" />
                        <span className="text-xl font-semibold">Ideal Credit</span>
                    </Link>
                    <p className="text-sm text-white/55 max-w-xs leading-relaxed">
                        Credite nebancare în Moldova pentru afaceri și persoane fizice, din 2010.
                    </p>
                    <div className="flex gap-3 items-center">
                        {[
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
                        ].map((s) => (
                            <a
                                key={s.title}
                                href={s.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                title={`Ideal Credit pe ${s.title}`}
                                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] text-white/70 hover:text-brand-500 hover:border-brand-500/40 transition-colors"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 256 256">
                                    <path d={s.path} />
                                </svg>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Produse */}
                <div>
                    <p className="text-xs uppercase tracking-wider text-white/40 mb-4">Produse</p>
                    <ul className="space-y-2.5">
                        {productLinks.map((l) => (
                            <li key={l.href}>
                                <Link href={l.href} className="text-sm text-white/70 hover:text-brand-500 transition-colors">
                                    {l.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Companie */}
                <div>
                    <p className="text-xs uppercase tracking-wider text-white/40 mb-4">Companie</p>
                    <ul className="space-y-2.5">
                        {companyLinks.map((l) => (
                            <li key={l.href}>
                                <Link href={l.href} className="text-sm text-white/70 hover:text-brand-500 transition-colors">
                                    {l.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Legal */}
                <div>
                    <p className="text-xs uppercase tracking-wider text-white/40 mb-4">Legal</p>
                    <ul className="space-y-2.5">
                        {legalLinks.map((l) => (
                            <li key={l.href}>
                                <Link
                                    href={l.href}
                                    rel={l.href === "/autoritatea-de-supraveghere" ? "nofollow" : undefined}
                                    className="text-sm text-white/70 hover:text-brand-500 transition-colors"
                                >
                                    {l.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Offices row */}
            <div className="container py-10 grid grid-cols-1 md:grid-cols-3 gap-6 border-b border-white/5">
                {OFFICES.map((oficiu) => (
                    <div
                        key={oficiu.id}
                        className="rounded-2xl border border-white/5 bg-black-600/60 p-5"
                    >
                        <div className="flex items-center gap-2 text-sm font-medium text-white">
                            <MapPin size={14} className="text-brand-500" />
                            {oficiu.title}
                        </div>
                        <p className="text-sm text-white/55 mt-2 leading-relaxed">
                            {oficiu.city}, {oficiu.street},<br />
                            {oficiu.addressNumbers}
                        </p>
                        <p className="text-xs text-white/40 mt-2">Luni – Vineri · 08:30 – 16:30</p>
                        <a
                            href={`tel:${oficiu.mobile}`}
                            onClick={() => trackEvent("Contact")}
                            className="mt-4 inline-flex items-center gap-2 h-9 px-3 rounded-full border border-white/10 text-white/90 hover:text-brand-500 hover:border-brand-500/40 transition-colors text-sm font-medium"
                        >
                            <Phone size={14} />
                            {oficiu.mobileDisplay}
                        </a>
                    </div>
                ))}
            </div>

            {/* Regulator strip */}
            <div className="container py-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 border-b border-white/5 text-xs text-white/40">
                <span className="inline-flex items-center gap-1.5">
                    <ShieldCheck size={14} className="text-white/60" />
                    Autorizat de CNPF
                </span>
                <span className="h-1 w-1 rounded-full bg-white/15" />
                <span>Membru OCN</span>
                <span className="h-1 w-1 rounded-full bg-white/15" />
                <span>Date protejate GDPR</span>
                <span className="h-1 w-1 rounded-full bg-white/15" />
                <span>16 ani de activitate</span>
            </div>

            {/* Legal excerpt */}
            <div className="container mt-12">
                <p className="mb-6 text-xl text-center">Extras din lege</p>
                <p className="mb-4 pl-6">
                    În Legea nr. 202/2013 privind contractele de credit pentru consumatori, au fost impuse limite cu privire la:
                </p>
                <ul className="list-outside list-disc ml-6 space-y-1.5 text-gray-400">
                    <li>Rata maximală a dobânzii anuale specificate în contractul de credit să nu fie mai mare de 50%.</li>
                    <li>
                        Toate celelalte plăți aferente (comisioane, taxe, penalități, dobânzi de întârziere și orice alt tip de plată), cu
                        excepția dobânzii, să nu depășească 0,04% /zi din valoarea totală a creditului pentru termenul de utilizare efectivă
                        a creditului.
                    </li>
                    <li>
                        Costului total al creditului (care include dobânzi, comisioane, taxe, penalități, dobânzi de întârziere și orice alt
                        tip de plată) să nu fie mai mare decât valoarea debursată conform contractului (cu excepția contractelor ipotecare).
                    </li>
                </ul>
            </div>

            {/* Glossary */}
            <div className="container mt-12">
                <p className="mb-6 text-xl text-center">Dicționar financiar</p>
                <ul className="list-outside list-disc ml-6 space-y-2.5 text-gray-400">
                    {GLOSSARY_LINKS.map((item) => (
                        <li key={item.name}>
                            <span className="font-bold">{item.name} - </span>
                            {item.desc}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Copyright */}
            <div className="container mt-10 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/40">
                <span>
                    &copy; {new Date().getFullYear()} Organizația de Creditare Nebancară{" "}
                    <strong className="text-white/60">Ideal Credit</strong> SRL
                </span>
                <span>Toate drepturile rezervate.</span>
            </div>
        </footer>
    );
}
