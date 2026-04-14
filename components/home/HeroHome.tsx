"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import CalculatorCredit from "@/components/CalculatorCredit";

export default function HeroHome() {
    return (
        <div className="relative pt-10 md:pt-16 pb-10 md:pb-16">
            {/* Backgrounds */}
            <div className="bg-squares -mt-px" />
            <div className="pointer-events-none absolute inset-0 -z-1 overflow-hidden" aria-hidden>
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
                        <div className="text-center md:text-left">
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/3 backdrop-blur px-4 py-1.5 text-xs md:text-sm text-white"
                            >
                                <span className="flex items-center gap-0.5 text-green-500">
                                    <Star size={12} fill="currentColor" /> 4.9
                                </span>
                                <span className="text-white/20">•</span>
                                <span>Sute de clienți mulțumiți</span>
                            </motion.div>
                        </div>

                        <motion.h1
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.05, ease: "easeOut" }}
                            className="mt-6 font-medium tracking-tight text-[52px] md:text-[68px] leading-[1.02] text-center md:text-left"
                        >
                            Credite nebancare <span className="text-brand-gradient">pentru afaceri</span>
                            <span className="text-white inline-flex"> și consum</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.12, ease: "easeOut" }}
                            className="mt-6 text-lg text-gray-500 font-light max-w-xl text-center md:text-left mx-auto md:mx-0"
                        >
                            Dobânda fixă, condiții clare, fără comisioane ascunse și decizie rapidă.
                        </motion.p>
                    </div>

                    {/* Right column - calculator */}
                    <motion.div
                        id="calculator"
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
                        className="lg:col-span-5 relative"
                    >
                        {/* Gradient border wrapper */}
                        <div className="relative rounded-xl p-px bg-linear-to-br from-brand-500/50 via-brand-500/10 to-transparent">
                            <div className="rounded-xl bg-black-600/90 backdrop-blur-xl shadow-glow">
                                <CalculatorCredit />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
