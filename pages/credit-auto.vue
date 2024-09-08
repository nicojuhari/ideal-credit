<script setup>
useHead({
    title: 'Credit Auto - pentru mașina visurilor tale',
    titleTemplate: '%pageTitle',
    meta: [
        { name: 'description', content: 'Oferim credit auto persoanelor fizice și juridice din Republica Moldova, pentru cumpărarea mașinii dorite, cu dobânzi mici și fără comisioane.' },
        { name: 'keywords', content: 'credit auto, credit auto md, credit rapid, credit Moldova, credit online, împrumut' }
    ],
})

const list = [
    {
        name: 'Destinația',
        description: 'cumpărarea unui automobil nou sau folosit'
    },
    {
        name: 'Termen',
        description: 'pînă la 60 de luni, cu posibilitatea de prelungire'
    },
    {
        name: 'Suma',
        description: '50% - 80%, din costul automobilului'
    }
]

const benefits = [
    'Dobânzi fixe',
    'Fără comisioane',
    'Pînă la 80%, din costul automobilului',
    'Pentru cumpărarea unui automobil nou sau folosit',
]

</script>
<template>
    <div class="mb-6">
        <div class="py-14 md:py-28 bg-in-squares">
            <div class="container grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-6">
                <div class="flex flex-col md:col-span-8 h-full justify-center">
                    <h1 class="hero-title text-center md:text-left">Credit Auto</h1>
                    <h2 class="subtitle mt-2 text-center md:text-left">Credite pentru procurarea mașinii dorite.
                    </h2>
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
            <h2 class="card-title text-center">Ce este un credit auto?</h2>
            <p>Un credit auto este un împrumut acordat persoanelor fizice și juridice pentru cumpărarea unei mașini noi
                sau second-hand.</p>
            <p>Suma finanțată variază în funcție de valoarea automobilului, situația financiară și istoria creditară al
                clientului. Puteți obține pînă la 80% din valoarea mașinii.</p>
            <p>Creditul auto poate fi oferit cu sau fără gaj. Cele cu gaj presupun ca mașina achiziționată devine
                garanția creditului.</p>
            <p class="mb-0">
                Beneficiile cheie ale unui credit auto:
            </p>
            <ul class="list-outside list-disc ml-6">
                <li><strong>Accesibilitate:</strong> Poți achiziționa o mașină mai performantă, mai sigură sau mai
                    spațioasă decât ți-ai permite din economii. Acest lucru îți poate îmbunătăți calitatea vieții,
                    oferind siguranță sporită familiei, acces la locuri de muncă mai îndepărtate sau facilitând
                    transportul pentru afacerea ta.</li>
                <li><strong>Plăți lunare predictibile:</strong> Spre deosebire de costurile fluctuante de combustibil și
                    mentenanță, ratele lunare fixe ale creditului oferă predictibilitate și ușurează gestionarea
                    bugetului.</li>
                <li><strong>Construirea istoricului de credit:</strong> Rambursarea corectă a creditului poate contribui
                    la îmbunătățirea scorului de credit, ajutându-te să obții condiții mai avantajoase pentru viitoarele
                    finanțări.</li>
                <li><strong>Credit auto cu gaj:</strong> Mașina devine garanția creditului, ceea ce poate duce la
                    dobânzi mai mici.</li>
            </ul>
            <p class="mt-6 mb-0 font-bold">Contactează-ne pentru mai multe informații și îți vom oferi toate detaliile
                necesare pentru a te bucura de mașina dorită cât mai curînd.</p>
        </div>
        <div class="container mt-4 md:mt-6">
            <CalculatorCredit />
        </div>
        <div class="container card light mt-4 md:mt-6">
            <CallToAction />
        </div>
    </div>
</template>