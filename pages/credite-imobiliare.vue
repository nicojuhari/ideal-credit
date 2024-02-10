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
            <h2 class="card-title text-center">Ce este un credit imobiliar?</h2>
            <p>Un credit imobiliar reprezintă un tip de împrumut acordat persoanelor fizice pentru cumpărarea sau construcția unui imobil, cum ar fi o casă sau un apartament.</p>
            <p>Poate fi o modalitate excelentă de a investi într-un imobil destinat afacerilor.</p>
            <p>Prin intermediul acestui credit, poți accesa o sumă mare de bani pe o perioadă mai lungă, pe care o poți rambursa în rate lunare. Astfel, poți îndeplini visul de a avea o locuință proprie fără a fi necesar să plătești întreaga sumă dintr-o singură dată.</p>
            <p class="mb-0">Noi îți oferim rata dobânzii fixă și opțiunea de creditare care se potrivește cu nevoile și situația ta financiară.</p>
        </div>
        <div class="container mt-4 md:mt-6">
            <CalculatorCredit />
        </div>
        <div class="container card light mt-4 md:mt-6">
            <CallToAction />
        </div>
</div></template>