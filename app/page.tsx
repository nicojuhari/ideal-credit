import type { Metadata } from "next";

import HeroHome from "@/components/home/HeroHome";
import Analysis from "@/components/home/Analysis";
import BusinessCredits from "@/components/home/BusinessCredits";
import Calculator from "@/components/home/Calculator";
import Process from "@/components/home/Process";
import ReturningClients from "@/components/home/ReturningClients";
import ProductFaq from "@/components/product/ProductFaq";
import ClosingCta from "@/components/home/ClosingCta";
import MobileCallBar from "@/components/includes/MobileCallBar";
import { FAQ_ITEMS, SITE_DESCRIPTION } from "@/lib/constants";

import { faqSchema } from "@/lib/schema";

export const metadata: Metadata = {
    title: "Credite nebancare în Moldova, fără comisioane | Ideal Credit",
    description:
        SITE_DESCRIPTION,
    alternates: { canonical: "https://idealcredit.md/" },
    openGraph: {
        type: "website",
        locale: "ro_MD",
        siteName: "Ideal Credit",
        url: "https://idealcredit.md/",
        title: "Credite nebancare în Moldova, fără comisioane | Ideal Credit",
        description:
            SITE_DESCRIPTION,
    },
};

export default function HomePage() {
    return (
        <div className="dc bg-dc-bg">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            <HeroHome />
            <Analysis />
            <BusinessCredits />
            <Calculator />
            <Process />
            <ReturningClients />
            {/* faqSchema above covers these 6 items, so no second FAQPage here. */}
            <ProductFaq items={FAQ_ITEMS.slice(0, 6)} schema={false} />
            <ClosingCta />
            <MobileCallBar />
        </div>
    );
}
