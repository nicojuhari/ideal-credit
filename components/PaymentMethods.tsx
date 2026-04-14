"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Globe, Banknote, Landmark, Mailbox, Sparkles } from "lucide-react";

type Method = {
    title: string;
    description: React.ReactNode;
    icon: React.ComponentType<{ size?: number; className?: string }>;
    recommended?: boolean;
};

const methods: Method[] = [
    {
        title: "Online Banking",
        description: "Transfer bancar/de pe card pe contul IBAN al Ideal Credit.",
        icon: Globe,
        recommended: true,
    },
    {
        title: "În numerar",
        description: (
            <>
                În unul din{" "}
                <Link href="/contacte#adresa-oficiilor" className="link">
                    oficiile companiei
                </Link>{" "}
                Ideal Credit.
            </>
        ),
        icon: Banknote,
    },
    {
        title: "Bancă",
        description: "La orice filială a băncii VictoriaBank din țară.",
        icon: Landmark,
    },
    {
        title: "Poșta",
        description: "La orice oficiu poștal din Republica Moldova.",
        icon: Mailbox,
    },
];

function FloatingCoins() {
    return (
        <div className="relative w-full h-72 md:h-full min-h-64 select-none" aria-hidden>
            {/* Ambient glow */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div
                    className="h-48 w-48 rounded-full opacity-20 blur-[60px]"
                    style={{ background: "radial-gradient(circle, #ff9a00 0%, transparent 70%)" }}
                />
            </div>

            {/* Large center coin */}
            <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
                <svg width="110" height="110" viewBox="0 0 110 110" fill="none">
                    <circle cx="55" cy="55" r="53" stroke="#ff9a00" strokeWidth="1.5" strokeOpacity="0.15" />
                    <circle
                        cx="55"
                        cy="55"
                        r="46"
                        fill="#ff9a00"
                        fillOpacity="0.07"
                        stroke="#ff9a00"
                        strokeWidth="1.5"
                        strokeOpacity="0.3"
                    />
                    <circle cx="55" cy="55" r="36" fill="#ff9a00" fillOpacity="0.1" stroke="#ff9a00" strokeWidth="1" strokeOpacity="0.5" />
                    <text
                        x="55"
                        y="58"
                        textAnchor="middle"
                        fill="#ff9a00"
                        fillOpacity="0.85"
                        fontSize="13"
                        fontWeight="700"
                        fontFamily="system-ui, sans-serif"
                        letterSpacing="1"
                    >
                        MDL
                    </text>
                </svg>
            </motion.div>

            {/* Top-right coin */}
            <motion.div
                className="absolute top-6 right-8 md:right-12"
                animate={{ y: [0, -7, 0], rotate: [0, 4, 0] }}
                transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
            >
                <svg width="68" height="68" viewBox="0 0 68 68" fill="none">
                    <circle
                        cx="34"
                        cy="34"
                        r="32"
                        fill="#ff9a00"
                        fillOpacity="0.06"
                        stroke="#ff9a00"
                        strokeWidth="1.5"
                        strokeOpacity="0.3"
                    />
                    <circle cx="34" cy="34" r="24" fill="#ff9a00" fillOpacity="0.08" stroke="#ff9a00" strokeWidth="1" strokeOpacity="0.4" />
                    <text
                        x="34"
                        y="39"
                        textAnchor="middle"
                        fill="#ff9a00"
                        fillOpacity="0.7"
                        fontSize="11"
                        fontWeight="700"
                        fontFamily="system-ui, sans-serif"
                    >
                        MDL
                    </text>
                </svg>
            </motion.div>

            {/* Bottom-left coin */}
            <motion.div
                className="absolute bottom-8 left-6 md:left-10"
                animate={{ y: [0, -12, 0], rotate: [0, -3, 0] }}
                transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 1.6 }}
            >
                <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
                    <circle
                        cx="28"
                        cy="28"
                        r="26"
                        fill="#ff9a00"
                        fillOpacity="0.06"
                        stroke="#ff9a00"
                        strokeWidth="1.5"
                        strokeOpacity="0.25"
                    />
                    <circle
                        cx="28"
                        cy="28"
                        r="19"
                        fill="#ff9a00"
                        fillOpacity="0.08"
                        stroke="#ff9a00"
                        strokeWidth="1"
                        strokeOpacity="0.35"
                    />
                    <text
                        x="28"
                        y="32"
                        textAnchor="middle"
                        fill="#ff9a00"
                        fillOpacity="0.6"
                        fontSize="9"
                        fontWeight="700"
                        fontFamily="system-ui, sans-serif"
                    >
                        MDL
                    </text>
                </svg>
            </motion.div>

            {/* Small accent coin top-left */}
            <motion.div
                className="absolute top-10 left-10 md:left-16"
                animate={{ y: [0, -6, 0], opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
            >
                <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
                    <circle
                        cx="17"
                        cy="17"
                        r="15.5"
                        fill="#ff9a00"
                        fillOpacity="0.07"
                        stroke="#ff9a00"
                        strokeWidth="1.5"
                        strokeOpacity="0.3"
                    />
                    <circle cx="17" cy="17" r="10" fill="#ff9a00" fillOpacity="0.1" />
                </svg>
            </motion.div>

            {/* Tiny coin bottom-right */}
            <motion.div
                className="absolute bottom-10 right-6 md:right-16"
                animate={{ y: [0, -8, 0], opacity: [0.5, 0.9, 0.5] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 2.2 }}
            >
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
                    <circle
                        cx="13"
                        cy="13"
                        r="12"
                        fill="#ff9a00"
                        fillOpacity="0.08"
                        stroke="#ff9a00"
                        strokeWidth="1.5"
                        strokeOpacity="0.3"
                    />
                    <circle cx="13" cy="13" r="7" fill="#ff9a00" fillOpacity="0.12" />
                </svg>
            </motion.div>

            {/* Floating dots / particles */}
            {[
                { cx: "35%", cy: "25%", r: 2.5, delay: 0 },
                { cx: "70%", cy: "60%", r: 2, delay: 1.2 },
                { cx: "20%", cy: "65%", r: 1.5, delay: 0.7 },
                { cx: "75%", cy: "30%", r: 2, delay: 2 },
                { cx: "50%", cy: "80%", r: 1.5, delay: 1.5 },
            ].map((dot, i) => (
                <motion.div
                    key={i}
                    className="absolute rounded-full bg-brand-500"
                    style={{
                        left: dot.cx,
                        top: dot.cy,
                        width: dot.r * 2,
                        height: dot.r * 2,
                        opacity: 0.25,
                    }}
                    animate={{ y: [0, -6, 0], opacity: [0.2, 0.5, 0.2] }}
                    transition={{ duration: 3 + i * 0.4, repeat: Infinity, ease: "easeInOut", delay: dot.delay }}
                />
            ))}
        </div>
    );
}

export default function PaymentMethods() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left: visual */}
            <div className="rounded-2xl border border-white/5 bg-black-600/40 overflow-hidden">
                <FloatingCoins />
            </div>

            {/* Right: list */}
            <div className="flex flex-col gap-1">
                {methods.map((item, i) => {
                    const Icon = item.icon;
                    return (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, x: 16 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-10%" }}
                            transition={{ duration: 0.4, delay: i * 0.08, ease: "easeOut" }}
                            className="group flex items-start gap-4 p-4 rounded-xl hover:bg-white/3 transition-colors"
                        >
                            <div
                                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-colors ${
                                    item.recommended
                                        ? "bg-green-500/15 text-green-500"
                                        : "bg-white/5 text-gray-500 group-hover:bg-white/10 group-hover:text-white"
                                }`}
                            >
                                <Icon size={20} />
                            </div>
                            <div className="flex-1 min-w-0 pt-0.5">
                                <div className="flex items-center gap-2 flex-wrap">
                                    <h3 className="text-base font-medium text-white">{item.title}</h3>
                                    {item.recommended && (
                                        <span className="inline-flex items-center gap-1 rounded-full bg-green-500/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-green-500">
                                            <Sparkles size={9} />
                                            Recomandat
                                        </span>
                                    )}
                                </div>
                                <p className="mt-0.5 text-sm text-gray-500 leading-relaxed">{item.description}</p>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}
