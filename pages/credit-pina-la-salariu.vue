<script setup>
import ShortAboutUs from '~/components/ShortAboutUs.vue';
import { personalLoanSchema } from '~/utils/schema'
useHead({
    title: 'Credit pînă la salariu | Credit urgent | Ideal Credit',
    titleTemplate: '%pageTitle',
    meta: [
        { name: 'description', content: 'Credit pînă la salariu pentru persoanele angajate oficial și cu venit constant. Aprobare rapidă, dobânzi avantajoase și transparență totală. Aplică online!' },
        { name: 'keywords', content: 'credit pînă la salariu, credit rapid, credit de consum, credit Moldova, credit Chișinău, credite nebancare' }
    ],
})

const creditConditionsSchema = [
    'Vârsta de la 23 de ani',
    'Salariu oficial stabil',
    'Buletin de identitate valabil',
    'Responsabilitate financiară',]



useSchemaOrg([
    personalLoanSchema
])

</script>
<template>
    <div class="relative pt-10 md:pt-12">
        <div class="bg-squares -mt-[1px]"></div>
        <div class="container">
            <UiRecenziiButton class="mb-16"/>
            <h1 class="font-semibold text-center text-4xl md:text-8xl">Credit pînă la salariu</h1>
            <p class="text-center mt-6 px-4 md:px-0 text-gray-400 md:text-xl md:max-w-xl mx-auto text-lg font-light">Oferim credit pînă la salariu pentru persoanele angajate oficial. Soluția perfectă pentru cheltuieli neprevăzute.</p>
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
        <UiInfo class="mt-6">Dacă lucrezi la același angajator de mai mult timp, aprobarea creditului va fi mult mai rapidă</UiInfo>
    </section>
    <section class="container">
        <LazyHowItWorks />
    </section>
    <section>
        <div class="container text-lg space-y-4">
            <h2 class="card-title text-center">Ce este un credit pînă la salariu?</h2>
            <p>Este un credit pe termen scurt destinat persoanelor cu salariu oficial. Îţi oferă bani rapid pentru cheltuieli urgente, până primeşti salariul. Nu are destinaţie fixă — foloseşti banii pentru ce ai nevoie..</p>
            <h3 class="text-2xl pt-4">Când poți folosi banii</h3>
            <ul class="list-outside list-disc ml-6 text-gray-400">
                <li>Urgenţe: plata facturilor, reparaţii neaşteptate</li>
                <li>Sănătate: consultaţii, tratamente, stomatologie</li>
                <li>Transport: reparaţii auto sau cheltuieli cu deplasarea la serviciu</li>
                <li>Familie: cheltuieli pentru copii sau părinţi</li>
                <li>Cash-flow personal: elimină golul financiar până la ziua de plată</li>
            </ul>
            <h3 class="text-2xl pt-4">Beneficii pentru tine</h3>
            <ul class="list-outside list-disc ml-6 text-gray-400">
                <li>Aprobare rapidă: decizie în 1-3 ore</li>
                <li>Bani în cont sau cash imediat după semnarea contractului</li>
                <li>Rate fixe: ştii exact cât plăteşti lunar</li>
                <li>Transparent: fără comisioane ascunse</li>
                <li>Condiţii flexibile: suma şi perioada se adaptează la salariul tău</li>
            </ul>
        </div>
        
    </section>
    <section class="container">
        <ShortAboutUs/>
    </section>
</template>