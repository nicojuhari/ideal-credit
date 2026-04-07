<script setup>
import ShortAboutUs from '~/components/ShortAboutUs.vue';
import { businessCreditSchema, creditConditionsSchema } from '@/utils/schema'

useHead({
    title: 'Credit pentru agricultură | Ideal Credit',
    titleTemplate: '%pageTitle',
    meta: [
        { name: 'description', content: 'Credit pentru agricultură - finanțare pentru tehnică, semințe, îngrășăminte, pesticide și lucrări agricole. Condiții simple și transparente!' },
        { name: 'keywords', content: 'credit pentru agricultură, business credit, credit rapid, credit Moldova, credit online, împrumuturi nebancare' }
    ],
})

useSchemaOrg([
    businessCreditSchema,
])

</script>
<template>
    <div class="relative pt-10 md:pt-12">
        <div class="bg-squares -mt-[1px]"></div>
        <div class="container">
            <UiRecenziiButton class="mb-16"/>
            <h1 class="font-semibold text-center text-5xl md:text-8xl">Credit pentru<br> agricultură</h1>
            <p class="text-center mt-6 px-4 md:px-0 text-gray-400 md:text-xl md:max-w-xl mx-auto text-lg font-light">Credit pentru agricultură - tehnică, semințe, îngrășăminte, pesticide și lucrări agricole. Proces simplu și transparent.</p>
            <UiMainCTA class="mt-16"/>
            <div class="cs-blur cs-blur--center z-[-1]"></div>
            <CalculatorCredit class="mt-18 md:mt-24"/>
        </div>
    </div>
    <section class="container">
        <h2 class="title text-center">Condițiile de creditare</h2>
        <ul class="w-full grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <li v-for="item in creditConditionsSchema.pj.list" class="flex text-xl items-center gap-2 card">
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
            <h2 class="card-title text-center">Ce este un credit pentru agricultură?</h2>
            <p>Este un împrumut pentru fermieri și companii agricole (SRL, ÎI) care au nevoie de capital pentru cumpărarea tehnicii agricole, achiziția de semințe și fertilizanți sau plata lucrărilor sezoniere.</p>
            <h3 class="text-2xl pt-4">Scopuri principale</h3>
            <ul class="list-outside list-disc ml-6 text-gray-400">
                <li>Tehnică și utilaje: tractoare, combine, remorci, pluguri, sisteme irigații</li>
                <li>Inputuri: semințe, îngrășăminte, pesticide</li>
                <li>Lucrări agricole: arat, semănat, recoltare, lucrări sezonieră contractate</li>
                <li>Capital de lucru: plata salariilor, furnizorilor, carburant, reparații urgente</li>
                <li>Refinanțare: consolidarea creditelor vechi într-un contract cu costuri mai bune</li>
            </ul>
            <h3 class="text-2xl pt-4">Beneficii pentru agricultori</h3>
            <ul class="list-outside list-disc ml-6 text-gray-400">
                <li>Acces rapid la capital: până la 400.000 lei pentru nevoi reale</li>
                <li>Termeni flexibili: negociem suma, perioada și garanțiile pentru situația ta</li>
                <li>Viteză și transparență: decizie preliminară în 1-3 ore; eliberare a banilor în 2-4 zile. Fără comisioane ascunse</li>
                <li>Plată adaptată sezonului: posibilitate de grafic de rambursare potrivit perioadei de recoltare</li>
            </ul>
            <h3 class="text-2xl pt-4">Criterii esențiale de eligibilitate (orientativ)</h3>
            <ul class="list-outside list-disc ml-6 text-gray-400">
                <li>Formă juridică: SRL sau ÎI înregistrate în Republica Moldova</li>
                <li>Vechime în activitate: minim 6 luni</li>
                <li>Cont bancar activ pe numele firmei și extrase bancare pentru ultimele 3-6 luni</li>
                <li>Dovada activității agricole: facturi, contracte de vânzare, declarații fiscale, registru de producție</li>
                <li>Garanții: garanție personală sau bun imobil/echipament, în funcție de suma solicitată</li>
            </ul>
        </div>
    </section>
    <section>
        <ShortAboutUs/>
    </section>
</template>