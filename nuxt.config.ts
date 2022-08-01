import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    app: {
        head: { 
                htmlAttrs: {
                    lang: 'ro'
                },
                title: 'Credite nebancare pentru consum și afaceri - Ideal Credit',
                link: [
                    { rel: 'icon', type:'image/x-icon', href:'/favicon.io' }
                ],
                meta: [
                    { name: 'description', content: 'Credite nebancare pentru consum și afaceri, Chișinău, Republica Moldova' },
                    { name: 'keywords', content: 'Credite rapide, credite nebancare, credite Chișinău, credite md'},
                    { name: 'google-site-verification', content: "xSvHXCUVs_GmLMJ17te-PeWngkTtzV-pDoMRviDCcV0"}
                ],
            },
    },
    modules: ['@nuxtjs/tailwindcss'],
    css: ['@/assets/css/main.css'],
    nitro: {
        prerender: {
        routes: ['/', '/despre-noi', '/contacte']
        }
    }
})
