<script setup>
useHead({
    title: 'Credite pentru Afaceri',
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
                <h1 class="text-center hero-title">Credite pentru afaceri</h1>
                <UiHeroSectionCTA />
            </div>
        </div>
        <div class="container relative card light text-lg">
            <div class="card-title text-center">Despre credit</div>
            <p>Creditul pentru afaceri este o modalitate prin care compania ta poate accesa o finanțare rapidă și ușoară pentru a-și îndeplini obiectivele financiare.</p>
            <p>Fie că ai nevoie de capital de lucru pentru a-ți susține afacerea, sau de finanțare pentru a investi în echipamente sau alte active, noi îți oferim soluțiile potrivite.</p>
            <p>În plus, oferim rate dobânzi avantajoase și perioade de rambursare flexibile, astfel încât să nu pui presiune pe fluxul de numerar al companiei tale.</p>
            <p>Contactează-ne acum pentru a afla mai multe despre cum te putem ajuta să îți duci afacerea la nivelul următor.</p>
        </div>
        <div class="container mt-4 md:mt-6">
            <CalculatorCredit />
        </div>
        <div class="container card light mt-4 md:mt-6">
            <CallToAction />
        </div>
</div></template>