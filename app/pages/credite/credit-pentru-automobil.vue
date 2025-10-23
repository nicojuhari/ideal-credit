<script setup>
import ShortAboutUs from '~/components/ShortAboutUs.vue';

useHead({
    title: 'Credit pentru automobil | Ideal Credit',
    titleTemplate: '%pageTitle',
    meta: [
        { name: 'description', content: 'Credit pentru cumpărarea sau repararea automobilului. Obține rapid banii necesari, cu dobândă fixă și condiții transparente. Aplică online!' },
        { name: 'keywords', content: 'credit pentru automobil, credit rapid, credit de consum, credit Moldova, credit Chișinău, credite nebancare' }
    ],
})

const creditConditionsSchema = ['Vârsta între 23 și 55 de ani', 'Venit confirmat și stabil', 'Buletin de identitate valabil', 'Responsabilitate financiară']



</script>
<template>
    <div class="relative pt-10 md:pt-12">
        <div class="bg-squares -mt-[1px]"></div>
        <div class="container">
            <UiRecenziiButton class="mb-16"/>
            <h1 class="font-semibold text-center text-4xl md:text-8xl">Credit pentru automobil</h1>
            <p class="text-center mt-6 px-4 md:px-0 text-gray-400 md:text-xl md:max-w-xl mx-auto text-lg font-light">Cumpără sau repară mașina fără complicații. Finanțare rapidă, condiții clare și dobândă fixă.</p>
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
            <h2 class="card-title text-center">Ce este creditul pentru automobil?</h2>
            <p>Credit destinat achiziției, reparației sau modernizării unui automobil. Îți oferă rapid bani pentru cumpărarea unei mașini noi sau second-hand, reparații tehnice, piese, sau montaj accesorii, fără birocrație inutilă.</p>
            <h3 class="text-2xl pt-4">Când poți folosi banii</h3>
            <ul class="list-outside list-disc ml-6 text-gray-400">
                <li>Cumpărare automobil nou sau second-hand</li>
                <li>Reparații tehnice majore (motor, cutie, suspensie)</li>
                <li>Service și întreținere curentă (discuri, plăcuțe, ulei, filtre)</li>
                <li>Înlocuire anvelope, baterie, sau alte piese urgente</li>
            </ul>
            <h3 class="text-2xl pt-4">Ce primești concret</h3>
            <ul class="list-outside list-disc ml-6 text-gray-400">
                <li>Aprobarea rapidă - decizie în ore, contract semnat simplu</li>
                <li>Sume flexibile - alegi cât ai nevoie, în funcție de valoarea mașinii și scop</li>
                <li>Dobândă fixă și clară - costul total se știe din start, fără surprize</li>
                <li>Perioade de rambursare adaptate - opțiuni pe termen scurt și mediu</li>
                <li>Posibilitate de garantare cu vehicul sau alte garanții (după caz)</li>
            </ul>
        </div>
    </section>
    <section class="container">
        <ShortAboutUs/>
    </section>
</template>