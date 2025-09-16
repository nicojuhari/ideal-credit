<script setup>
import ShortAboutUs from '~/components/ShortAboutUs.vue';
import { businessCreditSchema, personalLoanSchema, creditConditionsSchema } from '~/utils/schema'

useHead({
    title: 'Credit pentru afaceri mici | Ideal Credit',
    titleTemplate: '%pageTitle',
    meta: [
        { name: 'description', content: 'Oferim credit pentru afaceri mici în Moldova - dosar minim, decizie în 1-3 ore și eliberare rapidă a banilor. Garanții flexibile și consultanță gratuită!' },
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
            <h1 class="font-semibold text-center text-5xl md:text-8xl">Credit pentru<br> afaceri mici</h1>
            <p class="text-center mt-6 px-4 md:px-0 text-gray-400 md:text-xl md:max-w-xl mx-auto text-lg font-light">Credit pentru afaceri mici - capital rapid pentru dezvoltarea afacerilor. Susținem afacerile mici să devină mari.</p>
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
            <h2 class="card-title text-center">Ce este un credit pentru afaceri mici?</h2>
            <p>Este un împrumut dedicat firmelor mici (SRL, ÎI) care au nevoie de capital rapid pentru dezvoltare, capital de lucru sau refinanțare.</p>
            <p>Ideal Credit oferă soluții pentru afacerile mici cu sume până la 400 000 lei și perioadă de rambursare până la 48 luni.</p>
            <h3 class="text-2xl pt-4">Scopuri principale</h3>
            <ul class="list-outside list-disc ml-6 text-gray-400">
                <li>Startup-uri: acoperă costuri de lansare (înregistrare, echipamente, stoc inițial)</li>
                <li>Dezvoltare: achiziție echipamente sau extindere canal vânzări</li>
                <li>Capital de lucru sau refinanțare</li>
            </ul>
            <h3 class="text-2xl pt-4">Beneficii pentru afacerea ta</h3>
            <ul class="list-outside list-disc ml-6 text-gray-400">
                <li>Acces rapid la capital: până la 400.000 lei pentru investiții concrete</li>
                <li>Termeni flexibili: negociem suma, perioada și garanțiile în funcție de necesitate</li>
                <li>Viteză și transparență: decizie preliminară în 1-3 ore; eliberare 2-4 zile; fără birocrație</li>
                <li>Suport practic: consultanță pentru alegerea sumei și a graficului de rambursare</li>
            </ul>
            <h3 class="text-2xl pt-4">Criterii esențiale de eligibilitate (orientativ)</h3>
            <ul class="list-outside list-disc ml-6 text-gray-400">
                <li>Formă juridică: SRL sau ÎI înregistrate în RM</li>
                <li>Vechime în activitate: minim 6 luni</li>
                <li>Cont bancar activ pe numele firmei și extrase bancare 3-6 luni</li>
                <li>Flux de numerar - facturi, contracte, declarații fiscale</li>
                <li>Garanții: garanție personală sau bun imobil, în funcție de sumă</li>
            </ul>
        </div>
    </section>
    <section>
        <ShortAboutUs/>
    </section>
</template>