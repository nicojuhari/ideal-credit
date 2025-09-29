<script setup>
import ShortAboutUs from '~/components/ShortAboutUs.vue';
import { personalLoanSchema, creditConditionsSchema } from '~/utils/schema'
useHead({
    title: 'Credit pentru nevoi personale | Ideal Credit',
    titleTemplate: '%pageTitle',
    meta: [
        { name: 'description', content: 'Credit pentru nevoi personale în Moldova cu dobânda fixă. Obține un credit pentru cheltuieli urgente, pînă la salariu sau planuri personale. Aplică Online!' },
        { name: 'keywords', content: 'credit pentru nevoi personale, credit rapid, credit de consum, credit Moldova, credit Chișinău, credite nebancare' }
    ],
})



useSchemaOrg([
    personalLoanSchema
])

</script>
<template>
    <div class="relative pt-10 md:pt-12">
        <div class="bg-squares -mt-[1px]"></div>
        <div class="container">
            <UiRecenziiButton class="mb-16"/>
            <h1 class="font-semibold text-center text-4xl md:text-8xl">Credit pentru nevoi personale</h1>
            <p class="text-center mt-6 px-4 md:px-0 text-gray-400 md:text-xl md:max-w-xl mx-auto text-lg font-light">Obține un credit pentru nevoi personale rapid și ușor, perfect pentru cheltuieli urgente sau proiecte mici.</p>
            <UiMainCTA class="mt-16"/>
            <div class="cs-blur cs-blur--center z-[-1]"></div>
            <CalculatorCredit class="mt-18 md:mt-24"/>
        </div>
    </div>
    <section class="container">
        <h2 class="title text-center">Condițiile de creditare</h2>
        <ul class="w-full grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <li v-for="item in creditConditionsSchema.pf.list" class="flex text-xl items-center gap-2 card">
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
            <h2 class="card-title text-center">Ce este un credit pentru nevoi personale?</h2>
            <p>Este un credit de consum destinat persoanelor fizice. Îţi pune la dispoziţie bani rapid, fără destinaţie fixă, pentru orice cheltuieli planificate sau neprevăzute.</p>
            <h3 class="text-2xl pt-4">Când poți folosi banii</h3>
            <ul class="list-outside list-disc ml-6 text-gray-400">
                <li>Achiziţii de bunuri: electrocasnice, mobilă, electronice</li>
                <li>Sănătate: tratamente medicale, stomatologie</li>
                <li>Locuință: renovări mici, reparații</li>
                <li>Familie: vacanțe, nunți, evenimente</li>
                <li>Urgențe: plata facturilor sau <NuxtLink to="/credit-pina-la-salariu" title="Credit pînă la salariu" class="link">credit pînă la salariu</NuxtLink></li>
            </ul>
            <h3 class="text-2xl pt-4">Beneficii pentru tine</h3>
            <ul class="list-outside list-disc ml-6 text-gray-400">
                <li>Aprobare rapidă: decizie în 1-3 ore</li>
                <li>Rate fixe: știi exact cât plătești lunar</li>
                <li>Dobândă negociabilă: se ajustează în funcție de situația ta financiară</li>
                <li>Documentație minimă: buletin + adeverință de venit( dacă este nevoie)</li>
                <li>Plată imediată: banii în cont sau cash după semnarea contractului</li>
            </ul>
        </div>
        
    </section>
    <section class="container">
        <ShortAboutUs/>
    </section>
</template>