"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import CalculatorCredit from "@/components/CalculatorCredit";

export default function HeroHome() {
    return (
        <div className="relative pt-10 md:pt-16 pb-10 md:pb-16">
            {/* Backgrounds */}
            <div className="bg-squares -mt-px" />
            <div className="pointer-events-none absolute inset-0 -z-1" aria-hidden>
                <div
                    className="absolute left-[-10%] top-[-10%] h-112 w-md rounded-full opacity-[0.08] blur-[120px]"
                    style={{ background: "radial-gradient(circle, #ff9a00 0%, transparent 70%)" }}
                />
                <div
                    className="absolute right-[-10%] bottom-[-20%] h-128 w-lg rounded-full opacity-[0.06] blur-[140px]"
                    style={{ background: "radial-gradient(circle, #ffb347 0%, transparent 70%)" }}
                />
            </div>

            <div className="container">
                <div className="grid lg:grid-cols-12 gap-10 items-center">
                    {/* Left column */}
                    <div className="lg:col-span-7">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="inline-flex items-center mx-auto gap-2 rounded-full border border-white/10 bg-white/3 backdrop-blur px-4 py-1.5 text-xs md:text-sm text-white/80"
                        >
                            <span className="flex items-center gap-0.5 text-green-500">
                                <Star size={12} fill="currentColor" /> 4.9
                            </span>
                            <span className="text-white/20">•</span>
                            <span>Sute de clienți mulțumiți</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.05, ease: "easeOut" }}
                            className="mt-6 font-semibold tracking-tight text-5xl md:text-[68px] leading-[1.02]"
                        >
                            Credite nebancare <span className="text-brand-gradient">pentru afaceri</span>
                            <span className="text-white/90 md:inline-flex"> și consum.</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.12, ease: "easeOut" }}
                            className="mt-6 text-lg text-white/60 font-light max-w-xl"
                        >
                            Dobânda fixă, costuri transparente și fără comisioane ascunse. Pachet minim și decizie rapidă.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.18, ease: "easeOut" }}
                            className="mt-8 flex flex-wrap items-center gap-4"
                        >
                            <Link
                                href="/credite/credit-pentru-afaceri-mici"
                                className="group inline-flex items-center gap-2 h-12 px-5 rounded-full border border-white/15 text-white hover:bg-white/5 transition-all text-sm"
                            >
                                Credit pentru afacere
                                <ArrowRight size={16} />
                            </Link>
                            <Link
                                href="/credite/credit-pentru-nevoi-personale"
                                className="group inline-flex items-center gap-2 h-12 px-5 rounded-full border border-white/15 text-white hover:bg-white/5 transition-all text-sm"
                            >
                                Credit personal
                                <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
                            </Link>
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
                        <div className="relative rounded-2xl p-px bg-linear-to-br from-brand-500/50 via-brand-500/10 to-transparent">
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
