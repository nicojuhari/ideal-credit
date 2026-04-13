"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { ShieldCheck, Zap, Eye, TrendingUp, HeartHandshake } from "lucide-react";
import { yearsSinceFoundation } from "@/lib/utils";

function YearsCounter() {
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true, margin: "-20%" });
    const mv = useMotionValue(0);
    const rounded = useTransform(mv, (v) => Math.round(v));
    const target = yearsSinceFoundation;

    useEffect(() => {
        if (!inView) return;
        const c = animate(mv, target, { duration: 1.6, ease: "easeOut" });
        return c.stop;
    }, [inView, mv, target]);

    return (
        <motion.span ref={ref} className="tabular-nums">
            {rounded}
        </motion.span>
    );
}

type Cell = {
    title: string;
    body: string;
    icon: React.ComponentType<{ size?: number; className?: string }>;
    className: string;
};

const cells: Cell[] = [
    {
        title: "Condiții transparente",
        body: "Dobânzi fixe, zero comisioane ascunse - toate costurile înainte de semnare.",
        icon: Eye,
        className: "md:col-span-2",
    },
    {
        title: "Decizie rapidă",
        body: "Dosarul complet primit dimineața - răspunsul îl ai înainte de prânz.",
        icon: Zap,
        className: "",
    },
    {
        title: "Rambursare anticipată gratuită",
        body: "Plătești dobânda doar pentru perioada folosită. Nicio penalitate la achitare înainte de termen.",
        icon: TrendingUp,
        className: "",
    },
];

export default function WhyBento() {
    return (
        <section className="container">
            <h2 className="title text-center">De ce Ideal Credit?</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[minmax(160px,auto)]">
                {/* Featured years cell */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="relative md:row-span-2 rounded-xl p-px bg-linear-to-br from-brand-500/60 via-brand-500/10 to-transparent overflow-hidden"
                >
                    <div className="relative h-full rounded-xl bg-black-600/90 p-6 flex flex-col justify-between overflow-hidden">
                        {/* Decorative rings */}
                        <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full border border-brand-500/20" />
                        <div className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full border border-brand-500/15" />
                        <div className="pointer-events-none absolute -right-24 -bottom-24 h-64 w-64 rounded-full bg-brand-500/5 blur-3xl" />

                        <div className="relative">
                            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-gray-500">
                                <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
                                Din 2010
                            </span>
                        </div>
                        <div className="relative">
                            <div className="text-[6.5rem] md:text-[8rem] leading-none font-semibold text-brand-gradient">
                                <YearsCounter />
                            </div>
                            <div className="mt-2 text-lg text-white">ani de experiență</div>
                            <p className="mt-4 text-sm text-gray-500 max-w-xs">
                                Finanțare nebancară de încredere pentru persoane fizice și afaceri din Moldova.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {cells.map((cell, i) => {
                    const Icon = cell.icon;
                    return (
                        <motion.div
                            key={cell.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-10%" }}
                            transition={{ duration: 0.45, delay: 0.05 + i * 0.05, ease: "easeOut" }}
                            className={`group relative rounded-xl border border-white/5 bg-black-600/70 p-5 hover:border-white/15 hover:bg-black-600 transition-colors duration-300 ${cell.className}`}
                        >
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-500/10 text-green-500">
                                <Icon size={20} />
                            </div>
                            <h3 className="mt-4 text-lg text-white">{cell.title}</h3>
                            <p className="mt-1 text-sm text-gray-500 leading-relaxed">{cell.body}</p>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}
