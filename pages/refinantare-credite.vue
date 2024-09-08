<script setup>

useHead({
    title: 'Credit pentru refinanțarea altor credite mai scumpe ',
    titleTemplate: '%pageTitle',
    meta: [
        { name: 'description', content: 'Oferim credit pentru refinanțarea altor credite mai scumpe, cu dobânzi avantajoase, fără comisioane și pe un termen mai lung.' },
        { name: 'keywords', content: 'refinanțare credite, credite Moldova, credite rapide, credite online, împrumuturi' }
    ],
})

const benefits = [
    'Dobânzi fixe și avantajoase',
    'Fără comisioane',
    'Pentru toate tipurile de credite',
    'Pînă la 100%, din datoriile existente',
]
</script>
<template>
    <div class="mb-6">
        <div class="pt-12 pb-6 md:pt-24 md:pb-12 bg-in-squares">
            <div class="container grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-6">
                <div class="flex flex-col md:col-span-8 h-full justify-center">
                    <h1 class="hero-title text-center md:text-left">Credit Refinanțare</h1>
                    <h2 class="subtitle mt-2 text-center md:text-left">Credite pentru refinanțarea altor credite mai
                        scumpe.</h2>
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
        <div class="container text-lg relative">
            <div class="card light">
                <h2 class="card-title text-center">Ce este un credit pentru refinanțare?</h2>
                <p>Creditul pentru refinanțare este un tip de împrumut care înlocuiește un credit existent cu unul nou,
                    de regulă cu condiții mai favorabile.</p>
                <p class="mb-0">
                    Scopul refinanțării:
                </p>
                <ul class="list-outside list-disc ml-6">
                    <li>Consolidarea mai multor datorii într-un singur împrumut.</li>
                    <li>Obținerea unei dobânzi mai mici și/sau un termen de rambursare mai lung.</li>
                </ul>
                <p class="mt-6 mb-0">
                    Beneficiile refinanțării:
                </p>
                <ul class="list-outside list-disc ml-6">
                    <li><strong>Reducerea cheltuielilor:</strong> Dobânzi mai mici pot însemna economii semnificative pe
                        durata creditului.</li>
                    <li><strong>Simplificarea gestionării datoriilor:</strong> Un singur credit în loc de mai multe
                        ușurează planificarea și plățile.</li>
                    <li><strong>Prelungirea perioadei de rambursare:</strong> Termene mai lungi pot oferi o
                        flexibilitate sporită în gestionarea bugetului.</li>
                    <li><strong>Posibilitatea refinanțării cu istoric negativ:</strong> Persoanele cu istoric financiar
                        problematic pot beneficia de restructurarea datoriilor prin refinanțare.</li>
                </ul>
                <p class="mt-6">Un credit pentru refinanțare este o soluție financiară eficientă pentru cei care doresc
                    să-și reorganizeze datoriile existente sau să obțină condiții mai favorabile pentru împrumuturile
                    lor.</p>
                <p class="mb-0 font-bold">Contactează-ne acum pentru a afla mai multe despre cum te putem ajuta să ai o
                    situație financiară mai bună.</p>
            </div>
        </div>
        <div class="container mt-4 md:mt-6">
            <CalculatorCredit />
        </div>
        <div class="container mt-4 md:mt-6">
            <CallToAction class="card light" />
        </div>
    </div>
</template>