<script setup>
useHead({
    title: 'Credit Ipotecar - procurarea sau construcția bunurilor imobile',
    titleTemplate: '%pageTitle',
    meta: [
        { name: 'description', content: 'Oferim credit ipotecar pentru procurarea unei locuințe sau construcție, pentru cumpărarea terenurilor cu destinație locativă. Dobânzi mici și termeni flexibili.' },
        { name: 'keywords', content: 'credit imobiliar, credite ipotecar, credit ipotecar Moldova, credite Chișinău, credit online, împrumuturi' }
    ],
})

const benefits = [
    'Dobânzi fixe',
    'Fără comisioane',
    'Pînă la 120 de luni',
    'Pînă la 100% din costul proiectului',
]

</script>
<template>
    <div class="mb-6">
        <div class="py-14 md:py-28 bg-in-squares">
            <div class="container grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-6">
                <div class="flex flex-col md:col-span-8 h-full justify-center">
                    <h1 class="hero-title text-center md:text-left">Credit Ipotecar</h1>
                    <h2 class="subtitle mt-2 text-center md:text-left">Credite pentru procurarea sau construcția
                        bunurilor imobile.</h2>
                    <UiBenefitsList :benefits="benefits" class="my-12 md:my-10" />
                    <UiRecenziiButton class="mt-auto" />
                </div>
                <div class="md:col-span-4 cs-blur cs-blur--center grid items-center">
                    <UiButtonsCTA toHeroSection />
                    <UiCalculatorCreditCTA class="mt-4" />
                </div>
            </div>
        </div>
        <div class="container mb-4 md:mb-6">
            <CreditConditions />
        </div>
        <div class="container relative card light text-lg">
            <h2 class="card-title text-center">Ce este un credit ipotecar?</h2>
            <p>Un credit ipotecar reprezintă un tip de împrumut acordat unei persoane fizice pentru procurarea sau
                construcția unui bun imobil cu destinație locativă, cum ar fi: </p>
            <ul class="list-outside list-disc ml-6 mb-6">
                <li>Casă</li>
                <li>Apartament</li>
                <li>Teren pentru construcții locative</li>
            </ul>
            <p>De obicei, proprietatea imobiliară care a fost cumpărată este acceptată ca garanție; cu toate acestea,
                orice alt tip de bunuri imobile este permis.</p>
            <p class="mt-6 mb-0">Beneficiile unui împrumut ipotecar:</p>
            <ul class="list-outside list-disc ml-6 mb-6">
                <li>Devii proprietar a locuinței dorite</li>
                <li>Acces la sume mai mari de bani pe o perioadă mai lungă</li>
                <li>Ratele dobânzilor mai mici în comparaţie cu alte tipuri de credite</li>
                <li>Posibilitatea de deduceri fiscale la plata dobânzilor</li>

            </ul>
            <p>Un credit ipotecar avantajos te ajută să-ți achiziționezi o casă sau un apartament fără să plătești toată
                suma dintr-o dată, și scapi de chirii costisitoare în continuare.</p>
            <p>Ideal Credit te ajută să îți realizezi visul de a avea o locuință proprie. Îți oferim o rată a dobânzii
                fixă și o opțiune de creditare personalizată, adaptată perfect la nevoile și situația ta financiară.</p>
            <p>Contactează-ne astăzi, pentru a afla mai multe despre ofertele noastre și pentru a obține o consultanță
                gratuită!</p>
        </div>
        <div class="container mt-4 md:mt-6">
            <LazyCalculatorCredit />
        </div>
        <div class="container card light mt-4 md:mt-6">
            <LazyCallToAction />
        </div>
    </div>
</template>