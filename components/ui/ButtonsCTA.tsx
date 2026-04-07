"use client";

import Link from "next/link";
import { MessageCircle, PencilLine } from "lucide-react";
import { useFacebookPixel } from "@/hooks/useFacebookPixel";

export default function ButtonsCTA() {
  const { trackEvent } = useFacebookPixel();

  return (
    <div className="flex flex-col sm:flex-row justify-center items-center gap-6 relative max-w-[320px] md:max-w-none mx-auto">
      <Link
        href="/cerere-de-credit-online"
        title="Cerere de credit online"
        className="flex items-center justify-center gap-2 w-full sm:w-[180px] h-10 px-4 rounded-full border border-brand-500 text-brand-500 hover:bg-brand-500/10 transition-colors duration-300 font-medium"
      >
        <PencilLine size={18} />
        <span className="truncate">Cerere online</span>
      </Link>
      <a
        href="https://wa.me/+37378805060"
        target="_blank"
        rel="noopener noreferrer"
        title="Scrieți-ne pe WhatsApp"
        onClick={() => trackEvent("Contact")}
        className="flex items-center justify-center gap-2 w-full sm:w-[180px] h-10 px-4 rounded-full border border-[#14ac4c] text-[#14ac4c] hover:bg-[#14ac4c]/10 transition-colors duration-300 font-medium"
      >
        <MessageCircle size={18} />
        <span className="truncate">WhatsApp</span>
      </a>
    </div>
  );
}
