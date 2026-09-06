import Link from "next/link";
import { BRAND_NAME, LOGO_SRC } from "./constants";
import { cn } from "@/lib/utils";

/**
 * Logo + wordmark. The round mark is the ONLY curve in the design: it is never
 * placed inside a container, and nothing else echoes it. The <img> stays
 * alt="" because the wordmark text carries the name.
 */
export function Brand({ size = "header", className }: { size?: "header" | "footer"; className?: string }) {
    return (
        <Link href="/" className={cn("flex shrink-0 items-center gap-2.5", className)}>
            {/* eslint-disable-next-line @next/next/no-img-element -- static SVG, no optimisation needed */}
            <img src={LOGO_SRC} alt="" width={size === "header" ? 34 : 30} height={size === "header" ? 34 : 30} className="block w-auto" style={{ height: size === "header" ? 34 : 30 }} />
            <span className={cn("font-semibold tracking-[-0.02em] whitespace-nowrap", size === "header" ? "text-[19px] max-[559px]:hidden" : "text-[17px]")}>{BRAND_NAME}</span>
        </Link>
    );
}
