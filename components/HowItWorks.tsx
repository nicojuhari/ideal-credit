"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FileText, MessageSquareText, Wallet, Check } from "lucide-react";

const steps = [
  {
    title: "Depune cererea",
    text: "Completezi o cerere scurtă online, la telefon sau în oficiu. Fără hârtii inutile.",
    icon: FileText,
  },
  {
    title: "Primești decizia",
    text: "Analizăm solicitarea și îți comunicăm răspunsul în mai puțin de 3 ore.",
    icon: MessageSquareText,
  },
  {
    title: "Ridici banii",
    text: "Semnezi contractul și primești banii în cont sau numerar — în aceeași zi.",
    icon: Wallet,
  },
];

function PhoneMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[280px] aspect-[9/18]">
      {/* Ambient glow */}
      <div
        aria-hidden
        className="absolute -inset-8 rounded-[3rem] opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(124,92,255,0.28) 0%, transparent 70%)",
        }}
      />

      {/* Device frame */}
      <div
        className="relative h-full w-full rounded-[2.5rem] border border-white/10 p-2 shadow-2xl"
        style={{ background: "var(--surface-3)" }}
      >
        {/* Screen */}
        <div
          className="relative h-full w-full overflow-hidden rounded-[2rem] border border-white/[0.06]"
          style={{ background: "var(--surface-1)" }}
        >
          {/* Notch */}
          <div className="absolute left-1/2 top-2 h-5 w-20 -translate-x-1/2 rounded-full bg-black/80" />

          <div className="flex h-full flex-col px-5 pt-10 pb-5">
            <p className="text-[10px] uppercase tracking-[0.18em] text-white/40">
              Calculator credit
            </p>
            <p className="mt-2 text-sm text-white/70">Suma dorită</p>

            <div className="mt-1 flex items-baseline gap-1">
              <span className="text-3xl font-semibold text-white tabular-nums">50 000</span>
              <span className="text-xs text-white/45">MDL</span>
            </div>

            {/* Faux slider */}
            <div className="mt-3 h-1 w-full rounded-full bg-white/8 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "58%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.1, ease: "easeOut", delay: 0.2 }}
                className="h-full"
                style={{ background: "var(--accent-cool)" }}
              />
            </div>

            <p className="mt-5 text-sm text-white/70">Termen</p>
            <div className="mt-1 text-xl font-medium text-white">24 luni</div>
            <div className="mt-3 h-1 w-full rounded-full bg-white/8 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "40%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.1, ease: "easeOut", delay: 0.35 }}
                className="h-full"
                style={{ background: "var(--accent-cool)" }}
              />
            </div>

            {/* Result card — the one orange element */}
            <div className="mt-auto rounded-xl border border-white/[0.08] bg-black/30 p-3">
              <p className="text-[10px] uppercase tracking-wider text-white/40">
                Prima rată
              </p>
              <div className="mt-1 flex items-baseline gap-1">
                <span className="text-2xl font-semibold text-brand-gradient tabular-nums">
                  4 285
                </span>
                <span className="text-xs text-white/50">MDL/lună</span>
              </div>
              <div className="mt-3 h-9 w-full rounded-full bg-brand-gradient flex items-center justify-center text-[11px] font-semibold text-black">
                Cere creditul
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 75%", "end 55%"],
  });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={ref}>
      <p className="text-[11px] uppercase tracking-[0.2em] text-white/40 text-center mb-3">
        <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand-500 mr-2 align-middle" />
        Cum funcționează
      </p>
      <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-center text-white mb-14">
        Credit în 3 pași simpli
      </h2>

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <PhoneMockup />

        <div className="relative">
          {/* Vertical progress line (indigo) */}
          <div className="absolute left-6 top-6 bottom-6 w-[2px] rounded-full bg-white/[0.06] overflow-hidden">
            <motion.div
              style={{
                scaleY,
                transformOrigin: "top",
                background:
                  "linear-gradient(to bottom, var(--accent-cool), rgba(124,92,255,0.2))",
              }}
              className="h-full w-full"
            />
          </div>

          <ol className="space-y-8">
            {steps.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.li
                  key={s.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.5, delay: i * 0.12, ease: "easeOut" }}
                  className="relative flex gap-5 items-start"
                >
                  {/* Number node */}
                  <div
                    className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/10"
                    style={{ background: "var(--surface-2)" }}
                  >
                    <span
                      className="text-sm font-semibold tabular-nums"
                      style={{ color: "var(--accent-cool)" }}
                    >
                      0{i + 1}
                    </span>
                  </div>

                  <div className="pt-1.5">
                    <div className="flex items-center gap-2 text-white">
                      <Icon size={16} className="text-white/50" />
                      <h3 className="text-lg md:text-xl font-medium">{s.title}</h3>
                    </div>
                    <p className="mt-2 text-sm md:text-base text-white/55 leading-relaxed max-w-md">
                      {s.text}
                    </p>
                  </div>
                </motion.li>
              );
            })}
          </ol>

          <div className="mt-8 pl-[68px] flex items-center gap-2 text-xs text-white/45">
            <Check size={14} className="text-[color:var(--success)]" />
            Zero comisioane ascunse · Decizie transparentă
          </div>
        </div>
      </div>
    </div>
  );
}
