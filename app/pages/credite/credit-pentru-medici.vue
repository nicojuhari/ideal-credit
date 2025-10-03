<script setup>
import ShortAboutUs from '~/components/ShortAboutUs.vue';
import { personalLoanSchema } from '@/utils/schema'

useHead({
    title: 'Credit pentru medici | Rapid și Avantajos | Ideal Credit',
    titleTemplate: '%pageTitle',
    meta: [
        { name: 'description', content: 'Credit pentru medici — condiții speciale, dobânzi avantajoase și aprobare rapidă. Soluții transparente pentru medicii din Republica Moldova. Aplică online!' },
        { name: 'keywords', content: 'credit pentru medici, credit de consum, credit Moldova, credite nebancare, împrumuturi rapide' }
    ],
})

useSchemaOrg([
    // businessCreditSchema,
    personalLoanSchema
])

const creditConditionsSchema =   [
    'Vârsta între 23 și 55 ani',
    'Angajat oficial, minim 24 de luni',
    'Buletin de identitate valabil',
    'Fără restanțe la alte credite',
]

</script>
<template>
    <div class="relative pt-10 md:pt-12">
        <div class="bg-squares -mt-[1px]"></div>
        <div class="container">
            <UiRecenziiButton class="mb-16"/>
            <h1 class="font-semibold text-center text-5xl md:text-8xl">Credit pentru medici</h1>
            <p class="text-center mt-6 px-4 md:px-0 text-gray-400 md:text-xl md:max-w-xl mx-auto text-lg font-light">Credit pentru medici - împrumut personal cu rată adaptată și rambursare ușoară pentru cheltuieli personale sau urgente.</p>
            <UiMainCTA class="mt-16"/>
            <div class="cs-blur cs-blur--center z-[-1]"></div>
            <CalculatorCredit class="mt-18 md:mt-24"/>
        </div>
    </div>
    <section class="container">
        <h2 class="title text-center">Condițiile de creditare</h2>
        <ul class="w-full grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <li v-for="item in creditConditionsSchema" class="flex text-xl items-center gap-2 card">
                <UIcon name="i-ph-check" class="w-5 h-5 flex-shrink-0 text-green-400" />
                <span>{{ item }}</span>
            </li>
        </ul>
        <UiInfo class="mt-6">În funcție de evaluarea riscului de credit, se va solicita garanții adiționale: fidejusiune sau gaj imobil.</UiInfo>
    </section>
     <section class="container">
        <LazyHowItWorks />
    </section>
    <section>
        <div class="container text-lg space-y-4">
            <h2 class="card-title text-center">Ce este un credit pentru medici?</h2>
            <p>Un împrumut de consum destinat medicilor angajați în cadrul Ministerului Sănătății (medici, asistenți medicali, rezidenți etc.) din Republica Moldova.</p>
            <p>Credit pentru medici - oferă acces rapid la bani pentru nevoi personale, cu documentație simplificată și condiții adaptate veniturilor și programului din sistemul medical.</p>
            <h3 class="text-2xl pt-4">Când poți folosi banii</h3>
            <ul class="list-outside list-disc ml-6 text-gray-400">
                <li>Urgențe medicale sau personale - plata tratamentelor, intervențiilor sau cheltuieli neașteptate</li>
                <li>Sănătate - stomatologie, terapii pentru tine sau membrii familiei</li>
                <li>Educație - cursuri, conferințe, specializări medicale</li>
                <li>Locuință - reparații, renovări sau mobilare</li>
                <li>Transport - reparație sau cumpărare automobil</li>
                <li>Alte nevoi personale - vacanțe, nunți, plata facturilor sau orice altă cheltuială</li>
            </ul>
            <h3 class="text-2xl pt-4">Beneficii specifice pentru medici</h3>
            <ul class="list-outside list-disc ml-6 text-gray-400">
                <li>Aprobare rapidă - decizie în 1-3 ore, în funcție de documente</li>
                <li>Rate fixe și transparente - știi exact cât plătești lunar, fără surprize</li>
                <li>Condiții adaptate veniturilor medicale - luăm în calcul salariul și statutul profesional pentru oferte reale</li>
                <li>Fără comisioane ascunse - contract clar, dobândă fixă pe toată durata</li>
                <li>Flexibilitate - sume între 10.000 și 150.000 lei, pe perioade de până la 5 ani</li>
            </ul>
            <h3 class="text-2xl pt-4">Eligibilitate (orientativ)</h3>
            <ul class="list-outside list-disc ml-6 text-gray-400">
                <li>Cetățean al RM, angajat în sectorul medical</li>
                <li>Venit stabil și confirmat (fluturaș de salariu, adeverință)</li>
                <li>Istorie de credit pozitivă (verificare în biroul de credit)</li>
                <li>Alte documente pot fi solicitate în funcție de suma cerută</li>
            </ul>
        </div>
    </section>
    <section>
        <ShortAboutUs/>
    </section>
</template>