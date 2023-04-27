<script setup>
useHead({
    title: 'Credite Imobiliare',
    meta: [
        { name: 'description', content: 'Ideal Credit oferă credite imobiliare (ipotecare) pentru procurarea unei locuințe sau a unui imobil pentru afaceri' },
        { name: 'keywords', content: 'credite imobiliare, credite rapide, credite Moldova, credite Chișinău, credite online, împrumuturi' }
    ],
})

</script>
<template>
    <div class="mb-6">
        <div class="bg-in-squares py-20 md:py-40">
            <div class="container cs-blur pb-4">
                <h1 class="text-center hero-title">Credite imobiliare</h1>
                <UiHeroSectionCTA />
            </div>
        </div>
        <div class="container relative card light text-lg">
            <div class="card-title text-center">Despre credit</div>
            <p>Creditul imobiliar poate fi o opțiune excelentă pentru cumpărarea sau construcția unei locuințe pentru familia ta sau pentru o investiție într-un imobil pentru afaceri.</p>
            <p class="mb-0">Noi îți oferim rata dobînzii fixă și opțiunea de creditare care se potrivește cu nevoile și situația ta financiară.</p>
        </div>
        <div class="container mt-4 md:mt-6">
            <CalculatorCredit />
        </div>
        <div class="container card light mt-4 md:mt-6">
            <CallToAction />
        </div>
</div></template>