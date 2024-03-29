export default defineNuxtConfig({
    app: {
        head: { 
            htmlAttrs: {
                lang: 'ro'
            },
            title: 'Credite rapide cu dobânzi mici și fără comisioane',
            script: [
                { src: 'https://cdn.splitbee.io/sb.js', async: true}
            ],
            link: [
                { rel: 'icon', type:'image/x-icon', href: '/favicon.ico' },
                { rel: 'shortcut icon', type:'image/png', sizes:"32x32", href:"/favicon-32x32.png" },
                { rel: 'shortcut icon', type:'image/png', sizes:"16x16", href:"/favicon-16x16.png" },
                { rel: 'apple-touch-icon', sizes:"180x180", href:"/apple-touch-icon.png" }
            ],
            meta: [
                { name: 'description', content: 'Oferim credite rapide nebancare, pentru nevoi personale și afaceri în Chișinău, Republica Moldova. Aplică online, pentru un credit bun de la Ideal Credit!' },
                { name: 'keywords', content: 'credit rapid, credit online, împrumut, credit nevoi personale, credit Chișinău Moldova, credit online md, credit avantajos' },
                { name: 'google-site-verification', content: "xSvHXCUVs_GmLMJ17te-PeWngkTtzV-pDoMRviDCcV0"}
            ],
        },
    },
    modules: [ 
        '@nuxtjs/tailwindcss', 
        '@formkit/nuxt', 
        '@nuxtjs/seo',
        'nuxt-icon', 
        [ "@storyblok/nuxt", { accessToken: 'HkdYYsU6W0SQKNL9nL1seQtt' }]
    ],
    css: ['@/assets/css/main.css'],
    tailwindcss: {
        cssPath: '~/assets/css/main.css',
    },
    runtimeConfig: {
        siteUrl: 'https://idealcredit.md',
        icm_api_url: process.env.NUXT_ICM_API_URL,
        secret_key: process.env.NUXT_SECRET_KEY,
        storyblok_mode: process.env.storyblok_mode as 'draft' | 'published',
        public: {
            siteUrl: 'https://idealcredit.md',
            siteName: 'Ideal Credit',
            siteDescription: 'Oferim credite rapide nebancare, pentru nevoi personale și afaceri în Chișinău, Republica Moldova. Aplică online, pentru un credit bun de la Ideal Credit!',
            language: 'ro-RO', // prefer more explicit language codes like `en-AU` over `en`
        }
    },
    site: {
        url: process.env.NUXT_BASE_URL || 'https://idealcredit.md',
        name: 'Ideal Credit',
    },
    sitemap: {
    // exclude all URLs that start with /secret
        exclude: ['/autoritatea-de-supraveghere'],
    }
})
