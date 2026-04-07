"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

export default function MainCTA({ className }: { className?: string }) {
    return (
        <MotionLink
            href="/cerere-de-credit-online"
            title="Cerere de credit online"
            initial={{ opacity: 0, y: 12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className={`rounded-full overflow-hidden px-4 justify-center gap-3 max-w-48 group hover:bg-brand-400/10 flex mx-auto items-center border border-brand-500 text-brand-500 h-10 transition-colors duration-300 ${className ?? ""}`}
        >
            <span className="truncate">Cerere Online</span>
            <motion.span
                initial={{ opacity: 0, x: -4, y: 4 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
                className="inline-flex shrink-0"
            >
                <ArrowUpRight
                    size={20}
                    className="shrink-0 will-change-transform group-hover:-translate-y-0.5 group-hover:translate-x-1 transition-transform duration-500 ease-out"
                />
            </motion.span>
        </MotionLink>
    );
}
