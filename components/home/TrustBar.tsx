"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Landmark, Lock, CalendarClock } from "lucide-react";

const items = [
  { icon: ShieldCheck, label: "Autorizat de CNPF" },
  { icon: Landmark, label: "Membru OCN" },
  { icon: Lock, label: "Date protejate GDPR" },
  { icon: CalendarClock, label: "16 ani de activitate" },
];

export default function TrustBar() {
  return (
    <div className="relative border-y border-white/5 bg-black-700/40">
      <div className="container py-5">
        <ul className="flex flex-wrap items-center justify-center md:justify-between gap-x-8 gap-y-3">
          {items.map(({ icon: Icon, label }, i) => (
            <motion.li
              key={label}
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.4, delay: i * 0.05, ease: "easeOut" }}
              className="flex items-center gap-2 text-sm text-white/45"
            >
              <Icon size={16} className="text-white/60" />
              <span>{label}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
}
