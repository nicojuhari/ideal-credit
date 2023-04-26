<script setup>
useHead({
    title: 'Credite Imobiliare | Ideal Credit',
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
            <p>Ai decis să cumperi o locuință pentru familia ta sau poate să investești într-un imobil pentru afaceri?</p>
            <p>Cu sigurantă cumpărarea unui imobil poate fi o experiență entuziasmantă, dar și stresantă, deoarece implică multe decizii importante in special partea financiară.</p>
            <p class="mb-0">Un credit ipotecar este o opțiune populară pentru finanțarea cumpărării unui imobil, iar noi iți oferim opțiunea de creditare care se potrivește cu nevoile și situația ta financiară.</p>
        </div>
        <div class="container mt-4 md:mt-6">
            <CalculatorCredit />
        </div>
        <div class="container card light mt-4 md:mt-6">
            <CallToAction />
        </div>
</div></template>