"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Banknote, Globe, Landmark, Mailbox, Sparkles } from "lucide-react";

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

export default function PaymentMethods() {
    return (
        <div className="space-y-0 max-md:divide-y divide-white/5 grid grid-cols-1 md:grid-cols-2 gap-6">
            {methods.map((item, i) => {
                const Icon = item.icon;
                return (
                    <motion.div
                        key={item.title}
                        initial={{ opacity: 0, x: -12 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-10%" }}
                        transition={{ duration: 0.4, delay: i * 0.08, ease: "easeOut" }}
                        className="group flex items-start gap-4 py-5"
                    >
                        <div
                            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors ${
                                item.recommended ? "bg-brand-500/15 text-brand-500" : "bg-white/5 text-gray-500 group-hover:bg-white/15"
                            }`}
                        >
                            <Icon size={18} />
                        </div>

                        <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-1">
                                <h3 className="text-lg text-white">{item.title}</h3>
                                {item.recommended && (
                                    <span className="inline-flex items-center gap-1 rounded-full bg-brand-gradient px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-black">
                                        <Sparkles size={9} />
                                        Recomandat
                                    </span>
                                )}
                            </div>
                            <p className="mt-1 text-sm text-gray-500 leading-relaxed">{item.description}</p>
                        </div>
                    </motion.div>
                );
            })}
        </div>
    );
}
