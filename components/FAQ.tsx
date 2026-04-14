"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Search, MessageCircle, ArrowRight } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FAQ_ITEMS } from "@/lib/constants";

export type FaqItem = { question: string; answer: string };


function normalize(s: string) {
    return s
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
}

export default function FAQ({ items }: { items?: FaqItem[] }) {
    const [query, setQuery] = useState("");
    const source = items ?? FAQ_ITEMS;

    const filtered = useMemo(() => {
        const q = normalize(query.trim());
        if (!q) return source;
        return source.filter((item) => normalize(item.question).includes(q) || normalize(String(item.answer)).includes(q));
    }, [query, source]);

    return (
        <div className="max-w-3xl mx-auto">
            {/* Search */}
            <div className="relative mb-6">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Caută în întrebări…"
                    className="w-full h-12 pl-11 pr-4 rounded-full bg-black-600/70 border border-white/10 text-white placeholder:text-gray-500 outline-none focus:border-brand-500/50 focus:bg-black-600 transition-colors"
                />
            </div>

            {/* Accordion */}
            <div className="rounded-xl border border-white/5 bg-black-600/60 px-2 md:px-5">
                <AnimatePresence mode="wait">
                    {filtered.length > 0 ? (
                        <motion.div
                            key="list"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <Accordion className="w-full">
                                {filtered.map((item, i) => (
                                    <AccordionItem key={item.question} value={`item-${i}`} className="border-white/5">
                                        <AccordionTrigger className="text-left text-base md:text-lg font-medium hover:text-brand-500 hover:no-underline py-5 aria-expanded:text-brand-500">
                                            {item.question}
                                        </AccordionTrigger>
                                        <AccordionContent className="text-gray-500 text-sm md:text-base leading-relaxed pb-5">
                                            {item.answer}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="empty"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="py-10 text-center text-gray-500 text-sm"
                        >
                            Niciun rezultat pentru &quot;{query}&quot;.
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* No-answer CTA */}
            <div className="mt-6 rounded-xl border border-white/5 bg-black-600/70 p-5 md:p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-500/10 text-green-500">
                        <MessageCircle size={18} />
                    </div>
                    <div>
                        <div className="text-white font-medium">Nu găsești răspuns?</div>
                        <p className="text-sm text-gray-500 mt-0.5">Scrie-ne, îți răspundem într-un timp scurt și te ghidăm pas cu pas.</p>
                    </div>
                </div>
                <Link
                    href="/contacte"
                    className="mx-auto inline-flex items-center gap-2 h-10 px-4 rounded-full bg-green-800 text-white font-semibold text-sm hover:brightness-110 transition-all whitespace-nowrap"
                >
                    Contactează-ne
                    <ArrowRight size={14} />
                </Link>
            </div>
        </div>
    );
}
