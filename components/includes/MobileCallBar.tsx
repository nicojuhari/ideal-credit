"use client";

import { useFacebookPixel } from "@/hooks/useFacebookPixel";

// Mobile-only action bar. Render it as the LAST child of a page: it sticks to the bottom
// of the screen while the page content scrolls, and stops before the footer.
export default function MobileCallBar() {
    const { trackEvent } = useFacebookPixel();

    return (
        <div className="sticky bottom-0 z-10 grid grid-cols-2 gap-2 border-t border-dc-line bg-dc-bg/95 p-3 md:hidden">
            <a
                href="tel:+37361252777"
                onClick={() => trackEvent("Contact")}
                className="flex min-h-[50px] items-center justify-center bg-dc-accent text-[15px] font-semibold text-dc-on-accent"
            >
                Sună acum
            </a>
            <a href="#calculator" className="flex min-h-[50px] items-center justify-center border border-dc-line text-[15px] font-semibold text-dc-text">
                Calculează rata
            </a>
        </div>
    );
}
