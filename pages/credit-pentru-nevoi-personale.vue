<script setup>
import { personalLoanSchema, creditConditionsSchema } from '~/utils/schema'
useHead({
    title: 'Credit pentru nevoi personale - rapid și transparent',
    meta: [
        { name: 'description', content: 'Obține creditul ideal pentru nevoile tale personale, cu soluții flexibile și fără comisioane ascunse. Alege Ideal Credit pentru realizarea visurilor tale. Aplică online!' },
        { name: 'keywords', content: 'credit pentru nevoi personale, credit rapid, credit de consum, credite Moldova, credite Chișinău, credite online, împrumuturi' }
    ],
})



useSchemaOrg([
    personalLoanSchema
])

</script>
<template>
    <section class="relative">
        <div class="bg-squares -mt-[1px]"></div>
        <div class="container mt-8 md:mt-12">
            <UiRecenziiButton  class="mb-12 md:mb-16"/>
            <h1 class="font-semibold text-center leading-none text-[44px] md:text-[110px]">Credit pentru<br class="hidden md:block"> nevoi personale</h1>
            <UiButtonsCTA class="mt-12 md:mt-16"/>
            <div class="cs-blur cs-blur--center z-[-1]"></div>
            <CalculatorCredit class="mt-12 md:mt-24"/>
        </div>
    </section>
    <section class="container">
        <UiBadgeForSection class="mb-6">Condițiile de creditare</UiBadgeForSection>
        <h2 class="title text-center">Ce trebuie?</h2>
        <div class="w-full grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div v-for="item in creditConditionsSchema.pf.list" class="flex text-xl items-center gap-2 card">
                <UIcon name="i-ph-check-circle-bold" class="w-5 h-5 flex-shrink-0 text-blue-500" />
                <span>{{ item }}</span>
            </div>
        </div>
        <UiInfo class="mt-6">În funcție de evaluarea riscului de credit, se va solicita garanții adiționale: fidejusiune sau gaj imobil.</UiInfo>
    </section>
    <section class="container">
        <LazyHowItWorks />
    </section>
    <section>
        <div class="container text-lg space-y-4">
            <h2 class="card-title text-center">Ce este un credit pentru nevoi personale?</h2>
            <div>Un credit de consum nebancar destinat persoanelor fizice. Îţi pune la dispoziţie bani rapid, fără destinaţie fixă, pentru orice cheltuieli planificate sau neprevăzute.</div>
            <h3 class="text-2xl font-bold pt-4">Când îl poţi folosi:</h3>
            <ul class="list-outside list-disc ml-6">
                <li>Achiziţii de bunuri: electrocasnice, mobilă, electronice</li>
                <li>Cheltuieli medicale şi stomatologice</li>
                <li>Renovarea locuinţei sau mici reparaţii</li>
                <li>Vacanţe şi evenimente de familie</li>
                <li>Pînă la salariu</li>
            </ul>
            <h3 class="text-2xl font-bold pt-4">Beneficii pentru tine</h3>
            <ul class="list-outside list-disc ml-6">
                <li><strong>Aprobare rapidă:</strong> decizie în 24-48 ore</li>
                <li><strong>Rate fixe:</strong> cost predictibil lunar</li>
                <li><strong>Fără comisioane ascunse:</strong> transparenţă totală</li>
                <li><strong>Negociere dobândă:</strong> în funcție de profilul tău financiar</li>
            </ul>
            <h3 class="text-2xl font-bold pt-4">De ce să alegi Ideal Credit?</h3>
            <ul class="list-outside list-disc ml-6">
                <li>Experienţă locală din 2010</li>
                <li>Rata de aprobare: 80%</li>
                <li>Consultanţă gratuită la fiecare pas</li>
                <li>Documentaţie minimă: buletin și adeverință venit</li>
                <li>Bani în cont sau la mână imediat după semnare</li>
            </ul>
        </div>

    </section>
</template>