export default defineNuxtConfig({
    app: {
        head: { 
            htmlAttrs: {
                lang: 'ro'
            },
            title: 'Credite Nebancare în Moldova. Solicită un Credit Rapid, Online!',
            link: [
                { rel: 'icon', type:'image/x-icon', href: '/favicon.ico' },
                { rel: 'shortcut icon', type:'image/png', sizes:"32x32", href:"/favicon-32x32.png" },
                { rel: 'shortcut icon', type:'image/png', sizes:"16x16", href:"/favicon-16x16.png" },
                { rel: 'apple-touch-icon', sizes:"180x180", href:"/apple-touch-icon.png" },
                { rel: "preconnect", href: "https://fonts.googleapis.com" },
                { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: '' },
                { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,100..900&display=swap" },
            ],
            meta: [
                { name: 'description', content: 'Ideal Credit oferă credite nebancare persoanelor fizice și juridice din Moldova, pentru nevoi personale și afaceri. Aplică pentru un Credit Rapid, Online!' },
                { name: 'keywords', content: 'credit rapid, credite nebancare, credit online, împrumut rapid, credit nevoi personale, credit Chișinău Moldova, credite md, credit avantajos' },
                { name: 'google-site-verification', content: "xSvHXCUVs_GmLMJ17te-PeWngkTtzV-pDoMRviDCcV0"}
            ],
        },
    },
    modules: ['@nuxtjs/tailwindcss', '@formkit/nuxt', '@nuxtjs/seo', [ "@storyblok/nuxt", { accessToken: 'HkdYYsU6W0SQKNL9nL1seQtt' }], '@nuxt/icon'],
    css: ['@/assets/css/main.css'],
    tailwindcss: {
        cssPath: '~/assets/css/main.css',
    },
    icon: {
        serverBundle: {
            collections: ['ph']
        },
        mode: 'svg',
    },
    runtimeConfig: {
        siteUrl: 'https://idealcredit.md',
        icm_api_url: process.env.NUXT_ICM_API_URL,
        secret_key: process.env.NUXT_SECRET_KEY,
        storyblok_mode: process.env.storyblok_mode as 'draft' | 'published',
        public: {
            siteUrl: 'https://idealcredit.md',
            siteName: 'Ideal Credit',
            siteDescription: 'Ideal Credit oferă credite nebancare persoanelor fizice și juridice din Moldova, pentru nevoi personale și afaceri. Aplică pentru un Credit Rapid, Online!',
            language: 'ro-RO', // prefer more explicit language codes like `en-AU` over `en`
            fb_pixel_id: 2254113158275780,
            gtag_id: 'G-YXDZGPPXPH'
        }
    },

    site: {
        url: process.env.NUXT_BASE_URL || 'https://idealcredit.md',
        name: 'Ideal Credit',
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

  compatibilityDate: '2024-09-04'
})