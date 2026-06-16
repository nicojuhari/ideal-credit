import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const withMDX = createMDX({});

const nextConfig: NextConfig = {
    pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],

    trailingSlash: false,

    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "a.storyblok.com",
            },
        ],
    },

    async redirects() {
        return [
            // ── existing product redirects ──────────────────────────────────
            { source: "/credit-de-consum", destination: "/credite/credit-pentru-nevoi-personale", permanent: true },
            { source: "/credit-pentru-afaceri", destination: "/credite/credit-pentru-afaceri-mici", permanent: true },
            { source: "/credite/credit-pentru-afaceri", destination: "/credite/credit-pentru-afaceri-mici", permanent: true },
            { source: "/credit-pentru-afaceri-mici", destination: "/credite/credit-pentru-afaceri-mici", permanent: true },
            { source: "/credit-pentru-nevoi-personale", destination: "/credite/credit-pentru-nevoi-personale", permanent: true },
            { source: "/credit-pina-la-salariu", destination: "/credite/credit-pina-la-salariu", permanent: true },
            { source: "/credite/credit-pentru-medici", destination: "/credite/credit-pentru-bugetari", permanent: true },
            { source: "/credite/credit-pentru-militari", destination: "/credite/credit-pentru-bugetari", permanent: true },
            { source: "/credite/credit-pentru-politisti", destination: "/credite/credit-pentru-bugetari", permanent: true },
            { source: "/credit-capital-de-lucru", destination: "/credite/credit-capital-de-lucru", permanent: true },
            { source: "/credit-investitional", destination: "/credite/credit-investitional", permanent: true },
            { source: "/refinantare", destination: "/credite/refinantare", permanent: true },

            // ── blog: old Storyblok slugs → new static slugs ───────────────
            {
                source: "/blog/cum-sa-alegi-cel-mai-bun-credit-nebancar-pentru-afaceri",
                destination: "/blog/cum-alegi-credit-nebancar-pentru-afaceri",
                permanent: true,
            },
            {
                source: "/blog/istoria-de-credit-si-impactul-asupra-finantelor-tale",
                destination: "/blog/istoricul-de-credit-si-sansele-tale",
                permanent: true,
            },
            {
                source: "/blog/scorul-de-credit-si-de-ce-conteaza",
                destination: "/blog/istoricul-de-credit-si-sansele-tale",
                permanent: true,
            },
            {
                source: "/blog/credite-doar-cu-buletinul-mituri-vs-realitate",
                destination: "/blog/credit-cu-buletinul-ce-cere-ideal-credit",
                permanent: true,
            },
            {
                source: "/blog/ce-este-un-credit-rapid-si-cand-avem-nevoie-de-el",
                destination: "/blog/credit-rapid-decizie-in-ore",
                permanent: true,
            },
            {
                source: "/blog/dobanda-si-care-sunt-costurile-reale-ale-unui-credit",
                destination: "/blog/costul-real-al-unui-credit-nebancar",
                permanent: true,
            },
            // ── blog: deleted posts → blog listing ─────────────────────────
            { source: "/blog/istoria-aparitiei-banilor-si-rolul-lor-in-dezvoltarea-economica", destination: "/blog", permanent: true },
            { source: "/blog/de-la-imprumuturi-in-antichitate-la-finantarea-moderna", destination: "/blog", permanent: true },
            { source: "/blog/ce-se-intampla-daca-nu-poti-rambursa-un-credit", destination: "/blog", permanent: true },
        ];
    },
};

export default withMDX(nextConfig);
