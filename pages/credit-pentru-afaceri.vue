<script setup>
useHead({
    title: 'Credit pentru Afaceri - finanțare rapidă și avantajoasă',
    titleTemplate: '%pageTitle',
    meta: [
        { name: 'description', content: 'Investește în afacerea ta, cu ajutorul creditelor noastre pentru afaceri. Acordăm credite cu dobânzi avantajoase și fără comisioane! Aplică online.' },
        { name: 'keywords', content: 'credit pentru afaceri, business credit, credit rapid, credite Moldova, credit online, împrumuturi' }
    ],
})


const benefits = [
    'Dobânzi fixe',
    'Fără comisioane',
    'Maxim 300 000 MDL',
    'Investiții în dezvoltarea afacerii',
]

</script>
<template>
    <div class="mb-6">
        <div class="py-14 md:py-28 bg-in-squares">
            <div class="container grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-6">
                <div class="flex flex-col md:col-span-8 h-full justify-center">
                    <h1 class="hero-title text-center md:text-left">Credit pentru afaceri</h1>
                    <h2 class="subtitle mt-2 text-center md:text-left">Credite pentru finanțare rapidă și avantajoasă.
                    </h2>
                    <UiBenefitsList :benefits="benefits" class="my-12 md:my-10" />
                    <UiRecenziiButton class="mt-auto" />
                </div>
                <div class="md:col-span-4 cs-blur cs-blur--center grid items-center">
                    <UiButtonsCTA toHeroSection />
                    <UiCalculatorCreditCTA class="mt-4" />
                </div>
            </div>
        </div>
        <div class="container mb-4 md:mb-6">
            <CreditConditions />
        </div>
        <div class="container relative card light text-lg">
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
                        <NuxtLink to="/refinantare-credite">Refinanțarea datoriilor:</NuxtLink>
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
        <div class="container mt-4 md:mt-6">
            <CalculatorCredit />
        </div>
        <div class="container card light mt-4 md:mt-6">
            <CallToAction />
        </div>
    </div>
</template>