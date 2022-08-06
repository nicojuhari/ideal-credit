import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    app: {
        head: { 
                htmlAttrs: {
                    lang: 'ro'
                },
                title: 'Credite rapide pentru consum și bunsiness - Ideal Credit',
                link: [
                    { rel: 'icon', type:'image/x-icon', href:'/favicon.io' }
                ],
                meta: [
                    { name: 'description', content: 'Credite rapide pentru consum și bunsiness, Chișinău, Republica Moldova' },
                    { name: 'keywords', content: 'Credite rapide, credite nebancare, împrumut, credite Chișinău, credite md'},
                    { name: 'google-site-verification', content: "xSvHXCUVs_GmLMJ17te-PeWngkTtzV-pDoMRviDCcV0"}
                ],
            },
    },
    modules: ['@nuxtjs/tailwindcss','@formkit/nuxt'],
    css: ['@/assets/css/main.css'],
    nitro: {
        prerender: {
        routes: ['/', '/despre-noi', '/contacte']
        }
    }
})
