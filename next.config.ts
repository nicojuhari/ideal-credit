import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
    trailingSlash: false,
    pageExtensions: ["ts", "tsx", "mdx"],
    // Rust MDX compiler (Turbopack-compatible) with native GFM support -
    // remark-gfm can't be used here since its plugin functions aren't
    // serializable across the Turbopack loader boundary.
    experimental: {
        mdxRs: { mdxType: "gfm" },
    },

    async redirects() {
        return [
            // ── existing product redirects ──────────────────────────────────
            { source: "/credit-de-consum", destination: "/credite/credit-pentru-nevoi-personale", permanent: true },
            { source: "/credit-pentru-afaceri", destination: "/credite/credit-pentru-afaceri", permanent: true },
            { source: "/credit-pentru-afaceri-mici", destination: "/credite/credit-pentru-afaceri", permanent: true },
            { source: "/credite/credit-pentru-afaceri-mici", destination: "/credite/credit-pentru-afaceri", permanent: true },
            { source: "/credit-pentru-nevoi-personale", destination: "/credite/credit-pentru-nevoi-personale", permanent: true },
            { source: "/credit-pina-la-salariu", destination: "/credite/credit-pentru-nevoi-personale", permanent: true },
            { source: "/credite/credit-pina-la-salariu", destination: "/credite/credit-pentru-nevoi-personale", permanent: true },
            { source: "/credite/credit-pentru-bugetari", destination: "/credite/credit-pentru-nevoi-personale#bugetari", permanent: true },
            { source: "/credite/credit-pentru-medici", destination: "/credite/credit-pentru-nevoi-personale#bugetari", permanent: true },
            { source: "/credite/credit-pentru-militari", destination: "/credite/credit-pentru-nevoi-personale#bugetari", permanent: true },
            { source: "/credite/credit-pentru-politisti", destination: "/credite/credit-pentru-nevoi-personale#bugetari", permanent: true },
            { source: "/credit-capital-de-lucru", destination: "/credite/credit-pentru-afaceri#capital-de-lucru", permanent: true },
            { source: "/credite/credit-capital-de-lucru", destination: "/credite/credit-pentru-afaceri#capital-de-lucru", permanent: true },
            { source: "/credit-investitional", destination: "/credite/credit-investitional", permanent: true },
            { source: "/refinantare", destination: "/credite/credit-pentru-nevoi-personale#consolidare", permanent: true },
            { source: "/credite/refinantare", destination: "/credite/credit-pentru-nevoi-personale#consolidare", permanent: true },

            // ── blog: removed 2026-10-29, every old slug → closest product/info page ──
            { source: "/blog", destination: "/credite", permanent: true },
            { source: "/blog/firme-mici-nu-iau-credit-de-la-banca", destination: "/credite/credit-pentru-afaceri", permanent: true },
            { source: "/blog/dobanzi-mari-nu-doar-moldova", destination: "/credite/credit-pentru-afaceri", permanent: true },
            { source: "/blog/sepa-transfer-euro-moldova", destination: "/credite/credit-pentru-afaceri", permanent: true },
            { source: "/blog/ce-este-inflatia", destination: "/dictionar-financiar", permanent: true },
            {
                source: "/blog/cum-sa-alegi-cel-mai-bun-credit-nebancar-pentru-afaceri",
                destination: "/credite/credit-pentru-afaceri",
                permanent: true,
            },
            {
                source: "/blog/cum-alegi-credit-nebancar-pentru-afaceri",
                destination: "/credite/credit-pentru-afaceri",
                permanent: true,
            },
            {
                source: "/blog/istoria-de-credit-si-impactul-asupra-finantelor-tale",
                destination: "/credite/credit-pentru-nevoi-personale",
                permanent: true,
            },
            {
                source: "/blog/scorul-de-credit-si-de-ce-conteaza",
                destination: "/credite/credit-pentru-nevoi-personale",
                permanent: true,
            },
            {
                source: "/blog/istoricul-de-credit-si-sansele-tale",
                destination: "/credite/credit-pentru-nevoi-personale",
                permanent: true,
            },
            {
                source: "/blog/credite-doar-cu-buletinul-mituri-vs-realitate",
                destination: "/credite/credit-pentru-nevoi-personale",
                permanent: true,
            },
            {
                source: "/blog/credit-cu-buletinul-ce-cere-ideal-credit",
                destination: "/credite/credit-pentru-nevoi-personale",
                permanent: true,
            },
            {
                source: "/blog/ce-este-un-credit-rapid-si-cand-avem-nevoie-de-el",
                destination: "/despre-noi",
                permanent: true,
            },
            { source: "/blog/credit-rapid-decizie-in-ore", destination: "/despre-noi", permanent: true },
            {
                source: "/blog/dobanda-si-care-sunt-costurile-reale-ale-unui-credit",
                destination: "/calculator-credit",
                permanent: true,
            },
            { source: "/blog/costul-real-al-unui-credit-nebancar", destination: "/calculator-credit", permanent: true },
            { source: "/blog/ocn-vs-banca-credit-afaceri-moldova", destination: "/credite/credit-pentru-afaceri", permanent: true },
            {
                source: "/blog/documente-necesare-credit-afaceri-moldova",
                destination: "/credite/credit-pentru-afaceri",
                permanent: true,
            },
            { source: "/blog/ghid-credit-afaceri-ocn-moldova", destination: "/credite/credit-pentru-afaceri", permanent: true },
            // everything else under /blog (no direct successor) → credite hub; must stay last
            { source: "/blog/:path*", destination: "/credite", permanent: true },
        ];
    },
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
