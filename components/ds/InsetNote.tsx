import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** `inset`-filled note block, 15px body, max-width 900px. Used for the guarantor rules. */
export function InsetNote({ children, className }: { children: ReactNode; className?: string }) {
    return <div className={cn("max-w-[900px] bg-inset px-[34px] py-[26px] text-small text-text-2 max-ds-sm:px-5 max-ds-sm:py-5", className)}>{children}</div>;
}
