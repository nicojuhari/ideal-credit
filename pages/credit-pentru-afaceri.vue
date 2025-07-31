<script setup>
import { businessCreditSchema, personalLoanSchema } from '~/utils/schema'

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
            <h1 class="font-semibold text-center text-8xl md:text-[160px]">Credit <span class="font-extralight text-gray-400 text-[40%] block mt-2"> pentru afaceri</span></h1>
            <UiButtonsCTA class="mt-12 md:mt-16"/>
            <div class="cs-blur cs-blur--center z-[-1]"></div>
            <CalculatorCredit class="mt-12 md:mt-26"/>
        </div>
    </section>
     <section class="container">
        <LazyHowItWorks />
    </section>
    <section>
        <div class="container text-lg">
            <h2 class="card-title text-center">Ce este un credit pentru afaceri?</h2>
            <div>Un credit pentru afaceri este un împrumut financiar acordat către o companie sau un antreprenor pentru
                a finanța diverse nevoi legate de activitatea economică.</div>
            <p class="mt-6 mb-0">Scopul creditelor pentru afaceri:</p>
            <ul class="list-outside list-disc ml-6 mb-6">
                <li><span class="font-bold">Startup-uri:</span> Finanțarea cheltuielilor inițiale pentru lansarea unei
                    noi afaceri.</li>
                <li><span class="font-bold">Dezvoltare:</span> Investiții în extinderea afacerii existente, modernizare,
                    marketing, tehnologie sau angajarea de personal suplimentar.</li>
                <li><span class="font-bold">Capital de lucru:</span> Acoperirea cheltuielilor curente ale afacerii
                    (salarii, furnizori, utilități) în perioadele cu fluxul de numerar fluctuant.</li>
                <li><span class="font-bold underline">
                    <span>Refinanțarea datoriilor:</span>
                    </span> Consolidarea și restructurarea datoriilor existente spre condiții mai avantajoase.</li>
            </ul>
            <p class="mt-6 mb-0">Beneficiile creditelor pentru afaceri:</p>
            <ul class="list-outside list-disc ml-6 mb-6">
                <li><span class="font-bold">Accelerarea creșterii:</span> Posibilitatea de a investi în dezvoltarea
                    afacerii fără a utiliza exclusiv fonduri proprii..</li>
                <li><span class="font-bold">Îmbunătățirea fluxului de numerar:</span> Acoperirea cheltuielilor curente
                    și gestionarea mai eficientă a capitalului de lucru.</li>
                <li><span class="font-bold">Flexibilitate financiară:</span> Finanțarea unor proiecte sau nevoi
                    neprevăzute care apar în desfășurarea activității.</li>
                <li><span class="font-bold">Posibilitatea de a profita de oportunități:</span> Achiziționarea de
                    echipamente noi, extinderea pe noi piețe etc.</li>
            </ul>
            <p>Un credit pentru afaceri poate fi un instrument valoros pentru dezvoltarea și succesul companiei tale,
                însă decizia de a lua un împrumut trebuie luată responsabil, evaluând atent riscurile și beneficiile.
            </p>
            <p>Noi, oferim rate dobânzi avantajoase și perioade de rambursare flexibile, astfel încât să nu pui presiune
                pe fluxul de numerar al companiei tale.</p>
            <p>Contactează-ne acum pentru a afla mai multe despre cum te putem ajuta să îți duci afacerea la nivelul
                următor.</p>
        </div>
    </section>
</template>