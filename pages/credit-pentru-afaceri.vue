<script setup>
import { businessCreditSchema, personalLoanSchema, creditConditionsSchema } from '~/utils/schema'

useHead({
    title: 'Credit pentru afaceri - rapid și transparent',
    meta: [
        { name: 'description', content: 'Investește în afacerea ta cu soluții de credit flexibile și avantajoase. Acordăm credite rapide, fără comisioane ascunse și cu dobânzi competitive. Aplică online!' },
        { name: 'keywords', content: 'credit pentru afaceri, business credit, credit rapid, credite Moldova, credit online, împrumuturi' }
    ],
})

useSchemaOrg([
    businessCreditSchema,
    personalLoanSchema
])

</script>
<template>
    <section class="relative">
        <div class="bg-squares -mt-[1px]"></div>
        <div class="container mt-10 md:mt-14">
            <UiRecenziiButton  class="mb-10 md:mb-14"/>
            <h1 class="font-semibold text-center text-5xl md:text-[120px]">Credit pentru afaceri</h1>
            <UiButtonsCTA class="mt-12 md:mt-16"/>
            <div class="cs-blur cs-blur--center z-[-1]"></div>
            <CalculatorCredit class="mt-12 md:mt-26"/>
        </div>
    </section>
    <section class="container">
        <UiBadgeForSection class="mb-6">Condițiile de creditare</UiBadgeForSection>
        <h2 class="title text-center">Ce trebuie?</h2>
        <div class="w-full grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div v-for="item in creditConditionsSchema.pj.list" class="flex text-xl items-center gap-2 card">
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
            <h2 class="card-title text-center">Ce este un credit pentru afaceri?</h2>
            <div>Un credit pentru afaceri e un împrumut nebancar dedicat companiilor și antreprenorilor. Îți oferă capitalul necesar pentru orice etapă a afacerii.</div>
            <h3 class="text-2xl font-bold pt-4">Scopuri principale</h3>
            <ul class="list-outside list-disc ml-6 mb-6">
                <li><strong>Startup-uri:</strong> finanțează costurile de lansare (înregistrare, echipamente, stoc inițial).</li>
                <li><strong>Dezvoltare:</strong> modernizare spațiu, achiziție tehnologie, marketing, angajări.</li>
                <li><strong>Capital de lucru:</strong> acoperi salarii, furnizori și utilități în perioadele cu lichidități fluctuante.</li>
                <li><strong>Refinanțarea:</strong> consolidezi creditele vechi într-o singură rată la costuri mai mici.</li>
            </ul>
            <h3 class="text-2xl font-bold pt-4">Beneficii pentru afacerea ta</h3>
            <ul class="list-outside list-disc ml-6 mb-6">
                <li><strong>Creștere accelerată:</strong> investești rapid fără să golești conturile proprii.</li>
                <li><strong>Flux de numerar stabil:</strong> eviți blocajele în operațiuni zilnice.</li>
                <li><strong>Flexibilitate:</strong> adaptezi suma și termenii în funcție de proiect.</li>
                <li><strong>Oportunități noi:</strong> intri pe piețe noi sau cumperi echipamente performante.</li>
            </ul>
            <h3 class="text-2xl font-bold pt-4">De ce să alegi Ideal Credit?</h3>
            <ul class="list-outside list-disc ml-6 mb-6">
                <li>Dobândă fixă, negociabilă la cerere</li>
                <li>Aprobarea cererii în 24-48 ore</li>
                <li>Documentație minimă: certificat de înregistrare, situație financiară simplificată</li>
                <li>Fără comisioane ascunse</li>
                <li>Consultanță gratuită la fiecare pas</li>
            </ul>
        </div>
    </section>
</template>