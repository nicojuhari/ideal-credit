"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function MainCTA({ className }: { className?: string }) {
    return (
        <Link
            href="/cerere-de-credit-online"
            title="Cerere de credit online"
            className={`rounded-lg overflow-hidden px-4 justify-center gap-3 group hover:bg-green-600 flex items-center border bg-green-700 text-white h-12 transition-colors duration-400 w-full ${className ?? ""}`}
        >
            <span className="truncate text-lg">Solicită un credit</span>

            <ArrowUpRight
                size={20}
                className="shrink-0 will-change-transform group-hover:-translate-y-0.5 group-hover:translate-x-1 transition-transform duration-400 ease-out"
            />
        </Link>
    );
}
