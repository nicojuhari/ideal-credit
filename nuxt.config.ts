export default defineNuxtConfig({
    app: {
        head: { 
            htmlAttrs: {
                lang: 'ro'
            },
            title: 'Credite nebancare pentru afaceri și nevoi personale',
            link: [
                { rel: 'icon', type:'image/x-icon', href: '/favicon.ico' },
                { rel: 'shortcut icon', type:'image/png', sizes:"32x32", href:"/favicon-32x32.png" },
                { rel: 'shortcut icon', type:'image/png', sizes:"16x16", href:"/favicon-16x16.png" },
                { rel: 'apple-touch-icon', sizes:"180x180", href:"/apple-touch-icon.png" },
            ],
            meta: [
                { name: 'description', content: 'Ideal Credit oferă credite avantajoase pentru persoane fizice și juridice din Moldova. Obține finanțare rapidă pentru nevoi personale sau afaceri. Aplică online!' },
                { name: 'keywords', content: 'credit rapid, credite nebancare, credit online, împrumut rapid, credit nevoi personale, credit Chișinău Moldova, credite md, credit avantajos' },
                { name: 'google-site-verification', content: "xSvHXCUVs_GmLMJ17te-PeWngkTtzV-pDoMRviDCcV0"}
            ],
        },
    },
    modules: ['@nuxt/ui', '@formkit/nuxt', '@nuxtjs/seo', [ "@storyblok/nuxt", { accessToken: 'HkdYYsU6W0SQKNL9nL1seQtt' }]],
    css: ['@/assets/css/main.css'],
    runtimeConfig: {
        siteUrl: 'https://idealcredit.md',
        icm_api_url: process.env.NUXT_ICM_API_URL,
        secret_key: process.env.NUXT_SECRET_KEY,
        storyblok_mode: process.env.storyblok_mode as 'draft' | 'published',
        public: {
            siteUrl: 'https://idealcredit.md',
            siteName: 'Ideal Credit',
            siteDescription: 'Ideal Credit oferă credite avantajoase pentru persoane fizice și juridice din Moldova. Obține finanțare rapidă pentru nevoi personale sau afaceri. Aplică online!',
            language: 'ro-RO', // prefer more explicit language codes like `en-AU` over `en`
            fb_pixel_id: 2254113158275780,
            gtag_id: 'G-YXDZGPPXPH'
        }
    },
    routeRules : {
        '/': { prerender: true },
        '/credit-pentru-nevoi-personale': { prerender: true },
        '/credit-pentru-afaceri': { prerender: true },
        '/credit-de-consum': { redirect: '/credit-pentru-nevoi-personale',  },
    },
    site: {
        url: process.env.NUXT_BASE_URL || 'https://idealcredit.md',
        name: 'Ideal Credit',
    },
    ui: {
        colorMode: false
    },

    sitemap: {
    // exclude all URLs that start with /secret
        exclude: ['/autoritatea-de-supraveghere'],
        sources: [
            '/api/__sitemap__/urls',
        ]
    },
    devServer: {
        port: 3001
    },

    compatibilityDate: '2024-11-06',

    nitro: {
        routeRules: {
            '/credit-auto': { redirect: { to: '/credit-pentru-nevoi-personale', statusCode: 301 } },
            '/credit-ipotecar': { redirect: { to: '/credit-pentru-nevoi-personale', statusCode: 301 } }
        }
    }
})