export default defineNuxtConfig({
    app: {
        head: { 
            htmlAttrs: {
                lang: 'ro'
            },
            title: 'Credite rapide pentru nevoi personale și afaceri',
            link: [
                { rel: 'icon', type:'image/x-icon', href: '/favicon.ico' },
                { rel: 'shortcut icon', type:'image/png', sizes:"32x32", href:"/favicon-32x32.png" },
                { rel: 'shortcut icon', type:'image/png', sizes:"16x16", href:"/favicon-16x16.png" },
                { rel: 'apple-touch-icon', sizes:"180x180", href:"/apple-touch-icon.png" }
            ],
            meta: [
                { name: 'description', content: 'Credite rapide pentru nevoi personale și afaceri în Chișinău, Republica Moldova cu dobânzi avantajoase și fără comisioane ascunse' },
                { name: 'keywords', content: 'Credite rapide, credite nebancare, împrumut, credite nevoi personale, credite Chișinău, credite Moldova, credite pentru afaceri' },
                { name: 'google-site-verification', content: "xSvHXCUVs_GmLMJ17te-PeWngkTtzV-pDoMRviDCcV0"}
            ],
        },
    },
    modules: ['@nuxtjs/tailwindcss','@formkit/nuxt', 'nuxt-simple-sitemap', 'nuxt-icon'],
    extends: [
        'nuxt-seo-kit'
    ],
    css: ['@/assets/css/main.css'],
    runtimeConfig: {
        siteUrl: 'https://idealcredit.md',
        public: {
            siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://idealcredit.md',
            siteName: 'Ideal Credit',
            siteDescription: 'Credite rapide pentru nevoi personale și afaceri în Chișinău, Republica Moldova cu dobânzi avantajoase și fără comisioane ascunse',
            language: 'ro-RO', // prefer more explicit language codes like `en-AU` over `en`
        }
    },
    sitemap: {
        siteUrl: "https://idealcredit.md",
        trailingSlash: false
    }
})
