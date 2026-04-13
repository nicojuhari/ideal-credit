import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
            {
                source: "/credit-de-consum",
                destination: "/credite/credit-pentru-nevoi-personale",
                permanent: true,
            },
            {
                source: "/credit-pentru-afaceri",
                destination: "/credite/credit-pentru-afaceri-mici",
                permanent: true,
            },
            {
                source: "/credite/credit-pentru-afaceri",
                destination: "/credite/credit-pentru-afaceri-mici",
                permanent: true,
            },
            {
                source: "/credit-pentru-afaceri-mici",
                destination: "/credite/credit-pentru-afaceri-mici",
                permanent: true,
            },
            {
                source: "/credit-pentru-nevoi-personale",
                destination: "/credite/credit-pentru-nevoi-personale",
                permanent: true,
            },
            {
                source: "/credit-pina-la-salariu",
                destination: "/credite/credit-pina-la-salariu",
                permanent: true,
            },
            {
                source: "/blog/scorul-de-credit-si-de-ce-conteaza",
                destination: "/blog/istoria-de-credit-si-impactul-asupra-finantelor-tale",
                permanent: true,
            },
            {
                source: "/credite/credit-pentru-medici",
                destination: "/credite/credit-pentru-bugetari",
                permanent: true,
            },
            {
                source: "/credite/credit-pentru-militari",
                destination: "/credite/credit-pentru-bugetari",
                permanent: true,
            },
            {
                source: "/credite/credit-pentru-politisti",
                destination: "/credite/credit-pentru-bugetari",
                permanent: true,
            },
            {
                source: "/credit-capital-de-lucru",
                destination: "/credite/credit-capital-de-lucru",
                permanent: true,
            },
            {
                source: "/credit-investitional",
                destination: "/credite/credit-investitional",
                permanent: true,
            },
            {
                source: "/refinantare",
                destination: "/credite/refinantare",
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
