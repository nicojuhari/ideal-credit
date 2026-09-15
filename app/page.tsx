import type { Metadata } from "next";

import HeroHome from "@/components/home/HeroHome";
import Solutions from "@/components/home/Solutions";
import Calculator from "@/components/home/Calculator";
import WhyUs from "@/components/home/WhyUs";
import Products from "@/components/home/Products";
import Process from "@/components/home/Process";
import RecenziiClient from "@/components/RecenziiClient";
import Faq from "@/components/home/Faq";
import ClosingCta from "@/components/home/ClosingCta";

import { financialServiceSchema, howToSchema, faqSchema } from "@/lib/schema";

export const metadata: Metadata = {
    title: "Credite pentru succes - afaceri și nevoi personale | Ideal Credit",
    description:
        "Credite nebancare pentru afaceri și persoane fizice din Moldova. Dobândă fixă, fără comisioane ascunse, decizie rapidă și aplicare online.",
    alternates: { canonical: "https://idealcredit.md/" },
    openGraph: {
        type: "website",
        locale: "ro_MD",
        siteName: "Ideal Credit",
        title: "Credite pentru succes - afaceri și nevoi personale | Ideal Credit",
        description:
            "Credite nebancare pentru afaceri și persoane fizice din Moldova. Dobândă fixă, fără comisioane ascunse, decizie rapidă și aplicare online.",
        images: [{ url: "https://idealcredit.md/ideal-credit-og.webp", alt: "Credite nebancare pentru afaceri și nevoi personale" }],
    },
};

export default function HomePage() {
    return (
        <div className="dc bg-dc-bg">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(financialServiceSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            <HeroHome />
            <Solutions />
            <Calculator />
            <WhyUs />
            <Products />
            <Process />
            <RecenziiClient />
            <Faq />
            <ClosingCta />
        </div>
    );
}
