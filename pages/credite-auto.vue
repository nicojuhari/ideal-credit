<script setup>
useHead({
    title: 'Credite Auto | Ideal Credit',
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
            <div class="card-title text-center">Despre credit</div>
            <p>Creditul auto este o modalitate convenabilă de a-ți cumpăra mașina dorită chiar dacă nu ai suficienți bani acum.</p>
            <p>Creditul auto este un produs financiar flexibil și convenabil oferit de compania noastră.</p>
            <p>În plus, oferim opțiuni de garanție flexibile și personalizate, pentru a ne asigura că clienții noștri au parte de cea mai bună experiență de împrumut posibilă.</p>
            <p class="mb-0">Contactează-ne pentru mai multe informații și îți vom oferi toate detaliile necesare pentru a te bucura de mașina visurilor tale cât mai curînd.</p>
        </div>
        <div class="container mt-4 md:mt-6">
            <CalculatorCredit />
        </div>
        <div class="container card light mt-4 md:mt-6">
            <CallToAction />
        </div>
    </div>
</template>