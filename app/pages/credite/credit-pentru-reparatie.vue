<script setup>
import ShortAboutUs from '~/components/ShortAboutUs.vue';

useHead({
    title: 'Credit pentru reparație - casă sau apartament | Ideal Credit',
    titleTemplate: '%pageTitle',
    meta: [
        { name: 'description', content: 'Credit pentru reparația casei sau apartament. Obține banii rapid și renovează-ți locuința acum. Dobândă fixă și sume flexibile. Aplică online!' },
        { name: 'keywords', content: 'credit pentru reparație, credit rapid, credit de consum, credit Moldova, credit Chișinău, credite nebancare' }
    ],
})

const creditConditionsSchema = ['Vârsta între 23 și 55 de ani', 'Venit confirmat și stabil', 'Bun imobil în proprietate', 'Responsabilitate financiară']



</script>
<template>
    <div class="relative pt-10 md:pt-12">
        <div class="bg-squares -mt-[1px]"></div>
        <div class="container">
            <UiRecenziiButton class="mb-16"/>
            <h1 class="font-semibold text-center text-4xl md:text-8xl">Credit pentru reparație</h1>
            <p class="text-center mt-6 px-4 md:px-0 text-gray-400 md:text-xl md:max-w-xl mx-auto text-lg font-light">Obține un credit pentru reparația casei sau apartamentului tău. Renovează-ți locuința acum și trăiește din plin.</p>
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
            <h2 class="card-title text-center">Ce este creditul pentru reparație?</h2>
            <p>Credit destinat lucrărilor de reparație și renovare pentru casă sau apartament. Îţi oferă rapid bani pentru materiale de construcție sau plata meșterilor, fără birocrație.</p>
            <h3 class="text-2xl pt-4">Când poți folosi banii</h3>
            <ul class="list-outside list-disc ml-6 text-gray-400">
                <li>Reparații instalații (apă, gaz, electrice)</li>
                <li>Finisaje - zugrăveli, parchet, gresie, faianță</li>
                <li>Schimbare ferestre și uși</li>
                <li>Mobilare sau dotări pentru spațiul renovat</li>
                <li>Reparații urgente - scurgeri, infiltrații, defecțiuni</li>
            </ul>
            <h3 class="text-2xl pt-4">Ce primești concret</h3>
            <ul class="list-outside list-disc ml-6 text-gray-400">
                <li>Aprobarea rapidă - decizie în câteva ore</li>
                <li>Sume flexibile - alegi cât îţi trebuie pentru proiect</li>
                <li>Dobândă fixă și clară - știi costul total din start</li>
                <li>Începi lucrările imediat, fără întârzieri care cresc costurile</li>
            </ul>
        </div>
    </section>
    <section class="container">
        <ShortAboutUs/>
    </section>
</template>