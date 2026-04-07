import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

export default function MainCTA({ className }: { className?: string }) {
  return (
    <Link
      href="/cerere-de-credit-online"
      title="Cerere de credit online"
      className={`rounded-full overflow-hidden px-4 justify-center gap-3 max-w-[190px] group hover:bg-brand-400/10 flex mx-auto items-center border border-brand-500 text-brand-500 h-10 transition-colors duration-300 ${className ?? ""}`}
    >
      <span className="truncate">Cerere Online</span>
      <ArrowUpRight
        size={20}
        className="shrink-0 will-change-transform group-hover:-translate-y-0.5 group-hover:translate-x-1 transition-transform duration-500 ease-out animate-[cta-slide-up_0.6s_ease-out_0.8s_both]"
        style={{
          animation: "cta-slide-up 0.6s ease-out 0.8s both",
        }}
      />
    </Link>
  );
}
