"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useTransform, animate, useReducedMotion } from "framer-motion";
import { ShieldCheck, ArrowRight, Star } from "lucide-react";
import CalculatorCredit from "@/components/CalculatorCredit";
import { yearsSinceFoundation } from "@/lib/utils";

function Counter({ to, suffix = "", decimals = 0 }: { to: number; suffix?: string; decimals?: number }) {
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true, margin: "-20%" });
    const reduced = useReducedMotion();
    const mv = useMotionValue(reduced ? to : 0);
    const rounded = useTransform(mv, (v) => v.toFixed(decimals));

    useEffect(() => {
        if (!inView || reduced) return;
        const controls = animate(mv, to, { duration: 1.4, ease: "easeOut" });
        return controls.stop;
    }, [inView, mv, to, reduced]);

    return (
        <span className="tabular-nums">
            <motion.span ref={ref}>{rounded}</motion.span>
            {suffix}
        </span>
    );
}

const stats: { value: number; suffix?: string; label: string; decimals?: number }[] = [
    { value: 1000, suffix: "+", label: "clienți serviți" },
    { value: 4.9, suffix: "/5", label: "rating Google", decimals: 1 },
    { value: 4, suffix: "%", label: "dobândă lunară" },
];

export default function HeroHome() {
    return (
        <div className="relative pt-10 md:pt-16 pb-10 md:pb-16">
            {/* Backgrounds */}
            <div className="bg-squares -mt-px" />
            <div className="pointer-events-none absolute inset-0 -z-[1]" aria-hidden>
                <div
                    className="absolute left-[-10%] top-[-10%] h-[28rem] w-[28rem] rounded-full opacity-[0.08] blur-[120px]"
                    style={{ background: "radial-gradient(circle, #ff9a00 0%, transparent 70%)" }}
                />
                <div
                    className="absolute right-[-10%] bottom-[-20%] h-[32rem] w-[32rem] rounded-full opacity-[0.06] blur-[140px]"
                    style={{ background: "radial-gradient(circle, #ffb347 0%, transparent 70%)" }}
                />
            </div>

            <div className="container">
                <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
                    {/* Left column */}
                    <div className="lg:col-span-7">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="inline-flex items-center mx-auto gap-2 rounded-full border border-white/10 bg-white/3 backdrop-blur px-4 py-1.5 text-xs md:text-sm text-white/80"
                        >
                            <ShieldCheck size={14} className="text-brand-500" />
                            <span>{yearsSinceFoundation} ani în piață</span>
                            <span className="text-white/20">•</span>
                            <span className="flex items-center gap-0.5 text-green-500">
                                <Star size={12} fill="currentColor" /> 4.9
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.05, ease: "easeOut" }}
                            className="mt-6 font-semibold tracking-tight text-5xl md:text-7xl leading-[1.02]"
                        >
                            Credite <span className="text-brand-gradient">Nebancare</span>
                            <br />
                            <span className="text-white/90">pentru afaceri și consum.</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.12, ease: "easeOut" }}
                            className="mt-6 text-lg text-white/60 font-light max-w-xl"
                        >
                            Dobânzi fixe și fără comisioane ascunse - finanțare rapidă și de încredere în Republica Moldova.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.18, ease: "easeOut" }}
                            className="mt-8 flex flex-wrap items-center gap-3"
                        >
                            <Link
                                href="/cerere-de-credit-online"
                                className="group inline-flex items-center gap-2 h-12 px-5 rounded-full border border-white/15 text-white hover:bg-white/5 transition-all"
                            >
                                Solicită un credit
                                <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
                            </Link>
                        </motion.div>

                        {/* Trust stats */}
                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.26, ease: "easeOut" }}
                            className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-xl"
                        >
                            {stats.map((s) => (
                                <div key={s.label} className="flex flex-col">
                                    <span className="text-2xl md:text-3xl font-semibold text-white">
                                        <Counter to={s.value} suffix={s.suffix} decimals={s.decimals} />
                                    </span>
                                    <span className="text-xs md:text-sm text-white/50 mt-1">{s.label}</span>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Right column — calculator */}
                    <motion.div
                        id="calculator"
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
                        className="lg:col-span-5 relative"
                    >
                        {/* Gradient border wrapper */}
                        <div className="relative rounded-2xl p-[1px] bg-gradient-to-br from-brand-500/60 via-brand-500/10 to-transparent">
                            <div className="rounded-2xl bg-black-600/90 backdrop-blur-xl shadow-glow">
                                <CalculatorCredit />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
