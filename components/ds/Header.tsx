"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useId, useState } from "react";
import { cn } from "@/lib/utils";
import { Brand } from "./Brand";
import { Button } from "./Button";
import { APPLY_HREF, PHONE_DISPLAY, PHONE_TEL } from "./constants";

const NAV = [
    { href: "/credite/credit-pentru-afaceri-mici", label: "Credite afaceri", lead: true },
    { href: "/credite/credit-pentru-nevoi-personale", label: "Credite personale" },
    { href: "/calculator-credit", label: "Calculator" },
];

/**
 * 76px sticky header on a translucent bg with a bottom hairline. Nav and phone
 * never wrap; the right group is pinned. Under 981px the nav collapses behind a
 * mono "Meniu" button while phone + CTA stay visible (phone moves into the menu
 * under 400px; the wordmark hides under 560px).
 */
export function Header() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);
    const menuId = useId();

    const linkClass = (active: boolean) => cn("transition-colors duration-200 hover:text-text", active ? "text-text" : "text-text-3");

    const renderNav = (mobile: boolean) =>
        NAV.map((item) => {
            const current = pathname === item.href;
            const highlighted = item.lead || current;
            const cls = cn(linkClass(highlighted), mobile && "flex min-h-hit items-center border-b border-line text-[17px]");
            return current ? (
                <span key={item.href} aria-current="page" className={cls}>
                    {item.label}
                </span>
            ) : (
                <Link key={item.href} href={item.href} className={cls} onClick={() => setOpen(false)}>
                    {item.label}
                </Link>
            );
        });

    return (
        <header className="sticky top-0 z-50 border-b border-line bg-header backdrop-blur-md">
            <div className="ds-shell flex h-header flex-nowrap items-center gap-7 max-ds-sm:gap-4">
                <Brand size="header" />
                <nav aria-label="Principal" className="flex flex-none items-center gap-6 text-small whitespace-nowrap max-ds-lg:hidden">
                    {renderNav(false)}
                </nav>
                <div className="min-w-3 flex-1" />
                <div className="flex flex-none items-center gap-5 max-ds-sm:gap-3">
                    <a href={PHONE_TEL} className="font-figure text-small whitespace-nowrap hover:text-brand max-[399px]:hidden">
                        {PHONE_DISPLAY}
                    </a>
                    <Button variant="paper" size="sm" href={APPLY_HREF} className="max-ds-sm:px-4">
                        Solicită credit
                    </Button>
                    <button
                        type="button"
                        aria-expanded={open}
                        aria-controls={menuId}
                        onClick={() => setOpen((v) => !v)}
                        className="hidden h-hit min-w-hit items-center justify-center border border-line-strong px-3 font-figure text-eyebrow uppercase tracking-[0.08em] transition-colors hover:border-brand max-ds-lg:inline-flex"
                    >
                        {open ? "Închide" : "Meniu"}
                    </button>
                </div>
            </div>
            <nav id={menuId} aria-label="Meniu" hidden={!open} className="border-t border-line ds-lg:hidden">
                <div className="ds-shell flex flex-col pb-4">
                    {renderNav(true)}
                    <a href={PHONE_TEL} className="flex min-h-hit items-center font-figure text-[17px] hover:text-brand">
                        {PHONE_DISPLAY}
                    </a>
                </div>
            </nav>
        </header>
    );
}
