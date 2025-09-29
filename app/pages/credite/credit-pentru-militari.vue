<script setup>
import ShortAboutUs from '~/components/ShortAboutUs.vue';
import { businessCreditSchema, personalLoanSchema } from '@/utils/schema'

useHead({
    title: 'Credit pentru militari în Moldova | Ideal Credit',
    titleTemplate: '%pageTitle',
    meta: [
        { name: 'description', content: 'Credit pentru militari în Moldova — condiții clare, decizie rapidă și dobândă transparentă. Sume flexibile până la 300.000 lei. Aplică online!' },
        { name: 'keywords', content: 'credit pentru militari, credit de consum, credit Moldova, credite nebancare, împrumuturi rapide' }
    ],
})

useSchemaOrg([
    businessCreditSchema,
    personalLoanSchema
])

const creditConditionsSchema =   [
    'Vârsta între 23 și 65 ani',
    'Angajat al Ministerului Apărării, de minim 12 luni',
    'Buletin de identitate valabil',
    'Fără restanțe la alte credite',
]

</script>
<template>
    <div class="relative pt-10 md:pt-12">
        <div class="bg-squares -mt-[1px]"></div>
        <div class="container">
            <UiRecenziiButton class="mb-16"/>
            <h1 class="font-semibold text-center text-5xl md:text-8xl">Credit pentru militari</h1>
            <p class="text-center mt-6 px-4 md:px-0 text-gray-400 md:text-xl md:max-w-xl mx-auto text-lg font-light">Oferim credit pentru militarii din Republica Moldova - condiții clare, decizie rapidă și dobândă transparentă.</p>
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
            <h2 class="card-title text-center">Ce este un credit pentru militari?</h2>
            <p>Este un împrumut de consum pentru angajații sau pensionarii Ministerului Apărării (ofițeri, subofițeri, soldați, ...).</p>
            <p>Acest credit oferă acces rapid la bani pentru cheltuieli planificate sau urgente, cu documentație simplificată și condiții clare, concepute pentru rutina salarială specifică din armată.</p>
            <h3 class="text-2xl pt-4">Când poți folosi banii</h3>
            <ul class="list-outside list-disc ml-6 text-gray-400">
                <li>Urgențe: plata facturilor sau intervenții neprevăzute</li>
                <li>Sănătate: tratamente, stomatologie pentru tine sau familie</li>
                <li>Locuință: reparații mici, renovări sau mobilare</li>
                <li>Familie și evenimente: vacanțe, nunți, educație copii</li>
                <li>Transport: reparații auto sau achiziție vehicul mic</li>
                <li>Alte nevoi personale: orice cheltuială urgentă sau planificată</li>
            </ul>
            <h3 class="text-2xl pt-4">Beneficii specifice pentru militari</h3>
            <ul class="list-outside list-disc ml-6 text-gray-400">
                <li>Aprobare rapidă: decizie în 1-24 ore, în funcție de documente</li>
                <li>Rate fixe și transparente: știi exact cât plătești lunar</li>
                <li>Condiții adaptate venitului militar: evaluăm salariul și vechimea în structuri pentru oferte reale</li>
                <li>Fără comisioane ascunse: contract clar, dobândă fixă pe perioada stabilită</li>
                <li>Flexibilitate: sume între 10.000 și 300.000 lei, pe perioade de până la 5 ani</li>
            </ul>
            <h3 class="text-2xl pt-4">Eligibilitate (orientativ)</h3>
            <ul class="list-outside list-disc ml-6 text-gray-400">
                <li>Cetățean al RM, angajat în structurile militare sau rezervă activă (pensionar)</li>
                <li>Venit stabil și confirmat</li>
                <li>Responsabilitate financiară</li>
                <li>Alte documente la solicitare, în funcție de sumă</li>
            </ul>
        </div>
    </section>
    <section>
        <ShortAboutUs/>
    </section>
</template>