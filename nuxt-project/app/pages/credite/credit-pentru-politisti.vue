<script setup>
// import ShortAboutUs from '~/components/ShortAboutUs.vue';
// import { businessCreditSchema, personalLoanSchema } from '@/utils/schema'

useHead({
    title: 'Credit pentru polițiști - angajați sau pensionari MAI | Ideal Credit',
    titleTemplate: '%pageTitle',
    meta: [
        { name: 'description', content: 'Credit pentru polițiști — împrumut personal pentru angajați și pensionari MAI din Moldova. Aprobat rapid, rate fixe și fără comisioane ascunse.' },
        { name: 'keywords', content: 'credit pentru polițiști, credit de consum, credit Moldova, credite nebancare, împrumuturi rapide' }
    ],
})

// useSchemaOrg([
    
//     personalLoanSchema
// ])

const creditConditionsSchema =   [
    'Vârsta între 23 și 65 ani',
    'Angajat (minim 12 luni) sau pensionar MAI',
    'Buletin de identitate valabil',
    'Fără datorii la alte credite',
]

</script>
<template>
    <div class="relative pt-10 md:pt-12">
        <div class="bg-squares -mt-[1px]"></div>
        <div class="container">
            <UiRecenziiButton class="mb-16"/>
            <h1 class="font-semibold text-center text-5xl md:text-8xl">Credit pentru polițiști</h1>
            <p class="text-center mt-6 px-4 md:px-0 text-gray-400 md:text-xl md:max-w-xl mx-auto text-lg font-light">Credit pentru polițiști sau pensionari MAI din Republica Moldova - bani pentru urgențe și cheltuieli personale.</p>
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
            <h2 class="card-title text-center">Ce este un credit pentru polițiști?</h2>
            <p>Un împrumut de consum destinat polițiștilor activi sau pensionari (ofițeri, subofițeri, agenți de pază, inspectori etc.) din Republica Moldova</p>
            <h3 class="text-2xl pt-4">Când poți folosi banii</h3>
            <ul class="list-outside list-disc ml-6 text-gray-400">
                <li>Urgențe - plata facturilor sau cheltuieli neașteptate</li>
                <li>Sănătate - tratamente, stomatologie pentru tine sau rude</li>
                <li>Educație - cursuri sau specializare profesională</li>
                <li>Locuință - reparații, renovări sau mobilare</li>
                <li>Alte nevoi personale - vacanțe, nunți, cumpărături mari sau alte cheltuieli planificate</li>
            </ul>
            <h3 class="text-2xl pt-4">Beneficii specifice pentru polițiști</h3>
            <ul class="list-outside list-disc ml-6 text-gray-400">
                <li>Aprobare rapidă - decizie în 1-3 ore, în funcție de documente</li>
                <li>Rate fixe și transparente - plătești suma din contract lună de lună, fără surprize</li>
                <li>Condiții adaptate salariului și turelor - evaluăm venitul, orele suplimentare și statutul profesional pentru o ofertă corectă</li>
            </ul>
            <h3 class="text-2xl pt-4">Eligibilitate (orientativ)</h3>
            <ul class="list-outside list-disc ml-6 text-gray-400">
                <li>Cetățean al RM, angajat sau pensionar al Ministerului Afacerilor Interne</li>
                <li>Venit stabil și confirmat</li>
                <li>Istoric de credit pozitiv</li>
                <li>Pot fi cerute documente suplimentare în funcție de suma solicitată</li>
            </ul>
        </div>
    </section>
    <section>
        <ShortAboutUs/>
    </section>
</template>