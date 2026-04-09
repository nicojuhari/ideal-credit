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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {methods.map((item, i) => {
        const Icon = item.icon;
        return (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.45, delay: i * 0.06, ease: "easeOut" }}
            className={`group relative rounded-2xl border bg-black-600/70 p-5 transition-all hover:-translate-y-1 ${
              item.recommended
                ? "border-brand-500/40 shadow-glow-sm"
                : "border-white/5 hover:border-white/15"
            }`}
          >
            {item.recommended && (
              <span className="absolute -top-2 right-4 inline-flex items-center gap-1 rounded-full bg-brand-gradient px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-black">
                <Sparkles size={10} />
                Recomandat
              </span>
            )}

            <div
              className={`flex h-11 w-11 items-center justify-center rounded-xl transition-colors ${
                item.recommended
                  ? "bg-brand-500/15 text-brand-500"
                  : "bg-white/[0.04] text-white/70 group-hover:bg-white/[0.08]"
              }`}
            >
              <Icon size={20} />
            </div>
            <h3 className="mt-4 text-base font-medium text-white">{item.title}</h3>
            <p className="mt-1.5 text-sm text-white/55 leading-relaxed">{item.description}</p>
          </motion.div>
        );
      })}
    </div>
  );
}
