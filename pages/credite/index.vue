<script setup lang="ts">
    useHead({
    title: 'Credite de la Ideal Credit',
    titleTemplate: '%pageTitle',
    meta: [
        { name: 'description', content: 'Credite pentru persoane fizice și juridice în Moldova. Soluții financiare urgente pentru nevoi personale sau investiții în afaceri - simplu și sigur!' },
        { name: 'keywords', content: 'credite, credit nebancare, credit de consum, credit Moldova, credit Chișinău, împrumuturi rapide' }
    ],
})
</script>
<template>
        <section class="container">
            <h1 class="font-semibold text-center text-6xl md:text-8xl">Credite</h1>
            <h2 class="text-center mt-4 px-4 md:px-0 text-gray-400 md:text-xl md:max-w-xl mx-auto text-lg font-light">Finanțare simplă pentru nevoi personale și afaceri.</h2>
        </section>
        <section class="container">
            <ServiciiList />
        </section>
        <section class="container">
            <ShortAboutUs/>
        </section>
</template>