<script setup>
import ShortAboutUs from '~/components/ShortAboutUs.vue';
import { businessCreditSchema, personalLoanSchema, creditConditionsSchema } from '~/utils/schema'

useHead({
    title: 'Credit pentru afaceri | Investiții sau Cash-Flow | Ideal Credit',
    titleTemplate: '%pageTitle',
    meta: [
        { name: 'description', content: 'Credit pentru afaceri în Moldova cu aprobare rapidă și condiții clare. Finanțare pentru investiții, echipamente sau capital de lucru, fără birocrație!' },
        { name: 'keywords', content: 'credit pentru afaceri, business credit, credit rapid, credit Moldova, credit online, împrumuturi nebancare' }
    ],
})

useSchemaOrg([
    businessCreditSchema,
    personalLoanSchema
])

</script>
<template>
    <div class="relative pt-10 md:pt-12">
        <div class="bg-squares -mt-[1px]"></div>
        <div class="container">
            <UiRecenziiButton class="mb-16"/>
            <h1 class="font-semibold text-center text-4xl md:text-8xl">Credit pentru afaceri</h1>
            <p class="text-center mt-6 px-4 md:px-0 text-gray-400 md:text-xl md:max-w-xl mx-auto text-lg font-light">Credit pentru afaceri - bani rapizi pentru investiții, echipamente sau capital de lucru. Proces simplu și consultanță gratuită.</p>
            <UiMainCTA class="mt-16"/>
            <div class="cs-blur cs-blur--center z-[-1]"></div>
            <CalculatorCredit class="mt-12 md:mt-24"/>
        </div>
    </div>
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
            <div>Un credit pentru afaceri este un împrumut dedicat companiilor și antreprenorilor. Îți oferă banii necesari pentru orice etapă a afacerii, de la lansare până la dezvoltare sau refinanțare.</div>
            <h3 class="text-2xl pt-4">Scopuri principale</h3>
            <ul class="list-outside list-disc ml-6 text-gray-400">
                <li>Startup-uri: finanțează lansarea afacerii - înregistrare, echipamente, stoc inițial.</li>
                <li>Dezvoltare: modernizare spațiu, marketing sau angajări.</li>
                <li>Capital de lucru: acoperi salarii, furnizori și facturi în perioade cu flux de numerar variabil.</li>
                <li>Refinanțare: consolidezi creditele vechi într-o singură rată, la costuri mai mici.</li>
            </ul>
            <h3 class="text-2xl pt-4">Beneficii pentru afacerea ta</h3>
            <ul class="list-outside list-disc ml-6">
                <li>Creștere rapidă: investești fără să golești conturile proprii.</li>
                <li>Flux de numerar stabil: eviți probleme în operațiunile zilnice.</li>
                <li>Flexibilitate: adaptezi suma și termenii în funcție de proiect.</li>
                <li>Oportunități noi: intri pe piețe noi sau cumperi echipamente performante.</li>
            </ul>
        </div>
    </section>
    <section>
        <ShortAboutUs/>
    </section>
</template>