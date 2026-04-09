"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { TrendingUp, ArrowRight, ShieldCheck, LineChart } from "lucide-react";

export default function InvestorStrip() {
  return (
    <section className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative overflow-hidden rounded-3xl border border-white/10 bg-black-700/60 p-8 md:p-12"
      >
        {/* Decorative accents */}
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full opacity-20 blur-3xl"
          style={{ background: "radial-gradient(circle, #ff9a00 0%, transparent 70%)" }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -left-16 -bottom-24 h-72 w-72 rounded-full opacity-10 blur-3xl"
          style={{ background: "radial-gradient(circle, #ffb347 0%, transparent 70%)" }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage: "radial-gradient(ellipse 60% 50% at 50% 50%, #000 40%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(ellipse 60% 50% at 50% 50%, #000 40%, transparent 100%)",
          }}
        />

        <div className="relative grid md:grid-cols-[1.5fr_1fr] gap-8 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-3 py-1 text-xs font-medium text-brand-500">
              <TrendingUp size={12} /> Pentru investitori
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight">
              Investește alături de{" "}
              <span className="text-brand-gradient">Ideal Credit</span>
            </h2>
            <p className="mt-3 text-white/60 max-w-xl">
              16 ani de activitate, portofoliu diversificat și randamente atractive.
              Descoperă oportunități de parteneriat cu una dintre cele mai de încredere
              companii nebancare din Moldova.
            </p>

            <div className="mt-5 flex flex-wrap gap-4 text-sm text-white/55">
              <div className="flex items-center gap-2">
                <ShieldCheck size={14} className="text-brand-500" />
                Autorizat CNPF
              </div>
              <div className="flex items-center gap-2">
                <LineChart size={14} className="text-brand-500" />
                Creștere constantă
              </div>
            </div>
          </div>

          <div className="md:text-right">
            <Link
              href="/contacte"
              className="inline-flex items-center gap-2 h-12 px-6 rounded-full bg-brand-gradient text-black font-semibold shadow-glow hover:brightness-110 transition-all"
            >
              Contactează-ne
              <ArrowRight size={16} />
            </Link>
            <p className="mt-3 text-xs text-white/40">
              Discuție confidențială, fără angajament.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
