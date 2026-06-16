"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function TrustBadge() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/3 backdrop-blur px-4 py-1.5 text-xs md:text-sm text-white"
        >
            <span className="flex items-center gap-0.5 text-brand-500">
                <Star size={12} fill="currentColor" /> 4.9
            </span>
            <span className="text-white/20">•</span>
            <span>Din 2010</span>
            <span className="text-white/20">•</span>
            <span className="text-green-400 font-medium">Credite pentru succes!</span>
        </motion.div>
    );
}
