"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FileText, MessageSquareText, FileSignature } from "lucide-react";

const steps = [
    {
        title: "Solicită un credit",
        text: "Online, prin telefon, Viber/WhatsApp sau la unul din oficiile noastre.",
        icon: FileText,
    },
    {
        title: "Primești răspunsul",
        text: "rapid, în doar câteva ore în timpul programului de lucru.",
        icon: MessageSquareText,
    },
    {
        title: "Semnezi contractul",
        text: "în oficiu și primești banii imediat, dacă decizia este pozitivă.",
        icon: FileSignature,
    },
];

export default function HowItWorks() {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start 80%", "end 60%"],
    });
    const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);
    const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return (
        <section ref={ref} className="container">
            <h2 className="card-title text-center">Obține un credit în 3 pași simpli</h2>

            <div className="relative">
                {/* Desktop horizontal progress line */}
                <div className="hidden md:block absolute left-[16.666%] right-[16.666%] top-7 h-[2px] bg-white/5 rounded-full overflow-hidden">
                    <motion.div style={{ scaleX, transformOrigin: "left" }} className="h-full w-full bg-brand-gradient" />
                </div>

                {/* Mobile vertical progress line */}
                <div className="md:hidden absolute left-7 top-7 bottom-7 w-[2px] bg-white/5 rounded-full overflow-hidden">
                    <motion.div style={{ scaleY, transformOrigin: "top" }} className="h-full w-full bg-brand-gradient" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 relative">
                    {steps.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-10%" }}
                                transition={{ duration: 0.5, delay: index * 0.12, ease: "easeOut" }}
                                className="relative flex md:flex-col gap-4 md:gap-0 items-start md:items-center md:text-center"
                            >
                                {/* Numbered circle */}
                                <div className="relative z-10 shrink-0">
                                    <div className="h-14 w-14 rounded-full bg-brand-gradient p-[2px] shadow-glow-sm">
                                        <div className="h-full w-full rounded-full bg-black-700 flex items-center justify-center">
                                            <span className="text-brand-gradient text-xl font-bold">{index + 1}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="md:mt-5 md:px-4">
                                    <div className="flex md:justify-center items-center gap-2 text-white">
                                        <Icon size={16} className="text-brand-500 md:hidden" />
                                        <h3 className="text-lg md:text-xl">{item.title}</h3>
                                    </div>
                                    <p className="mt-2 text-sm text-gray-500 leading-relaxed max-w-xs md:mx-auto">{item.text}</p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
