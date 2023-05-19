<script setup>
useHead({
    title: 'Credite Auto',
    meta: [
        { name: 'description', content: 'Ideal Credit oferă credite auto pentru a-ți cumpăra mașina dorită chiar dacă nu ai suficienți bani acum' },
        { name: 'keywords', content: 'credite auto, credite rapide, credite Moldova, credite Chișinău, credite online, împrumuturi' }
    ],
})

</script>
<template>
    <div class="mb-6">
        <div class="bg-in-squares py-20 md:py-40">
            <div class="container cs-blur pb-4">
                <h1 class="text-center hero-title">Credite auto</h1>
                <UiHeroSectionCTA />
            </div>
        </div>
        <div class="container relative card light text-lg">
            <h2 class="card-title text-center">Ce este un credit auto?</h2>
            <p>Un credit auto este un împrumut acordat persoanelor fizice pentru cumpărarea unei mașini noi sau second-hand.</p>
            <p>Cu ajutorul acestui credit, ai posibilitatea să obții suma de bani integrală sau parțială de care ai nevoie.</p>
            <p>Astfel, un credit auto facilitează accesul la un autovehicul, oferind flexibilitate și confort financiar pentru a-ți îndeplini visul de a avea propria mașină, chiar dacă nu ai suficienți bani acum.</p>
            <p class="mb-0">Contactează-ne pentru mai multe informații și îți vom oferi toate detaliile necesare pentru a te bucura de mașina dorită cât mai curînd.</p>
        </div>
        <div class="container mt-4 md:mt-6">
            <CalculatorCredit />
        </div>
        <div class="container card light mt-4 md:mt-6">
            <CallToAction />
        </div>
    </div>
</template>