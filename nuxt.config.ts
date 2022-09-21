// import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    app: {
        head: { 
                htmlAttrs: {
                    lang: 'ro'
                },
                title: 'Credite rapide de consum și pentru business - Ideal Credit',
                link: [
                    { rel: 'icon', type:'image/x-icon', href: '/favicon.ico' },
                    { rel: 'shortcut icon', type:'image/png', sizes:"32x32", href:"/favicon-32x32.png" },
                    { rel: 'shortcut icon', type:'image/png', sizes:"16x16", href:"/favicon-16x16.png" },
                    { rel: 'apple-touch-icon', sizes:"180x180", href:"/apple-touch-icon.png" }
                ],
                meta: [
                    { name: 'description', content: 'Credite rapide de consum și pentru business, Chișinău, Republica Moldova' },
                    { name: 'keywords', content: 'Credite rapide, credite nebancare, împrumut, credite Chișinău, credite md, credite pentru business' },
                    { name: 'google-site-verification', content: "xSvHXCUVs_GmLMJ17te-PeWngkTtzV-pDoMRviDCcV0"}
                ],
            },
    },
    modules: ['@nuxtjs/tailwindcss','@formkit/nuxt'],
    css: ['@/assets/css/main.css'],
    // nitro: {
    //     prerender: {
    //     routes: ['/', '/despre-noi', '/contacte']
    //     }
    // }
})
