<script setup>
useHead({
    title: 'Credit de Consum pentru diverse nevoi personale',
    titleTemplate: '%pageTitle',
    meta: [
        { name: 'description', content: 'Oferim credit de consum persoanelor fizice din R. Moldova, pentru nevoi personale, rapid și simplu. Aplică online pentru un credit bun și avantajos!' },
        { name: 'keywords', content: 'credit de consum, credite rapide, credite Moldova, credite Chișinău, credite online, împrumuturi' }
    ],
})

const list = [
    {
        name: 'Destinația',
        description: 'necesități personale curente și urgente'
    },
    {
        name: 'Termen',
        description: 'pînă la 60 de luni, cu posibilitatea de prelungire'
    },
    {
        name: 'Suma',
        description: 'maxim 100 000 MDL'
    }
]

</script>
<template>
    <div class="mb-6">
        <div class="bg-in-squares py-20 md:py-40">
            <div class="container cs-blur pb-4">
                 <h1 class="text-center hero-title">Credit de Consum
                    <span class="subtitle flex justify-center mt-2">pentru diverse nevoi personale</span>
                </h1>
                <UiHeroSectionCTA/>
            </div>
        </div>
        <div class="container my-6 relative">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                <div v-for="item in list" :key="item.name" class="bg-brand-black px-4 py-8 rounded-lg flex-grow" :title="item.name">
                    <div class="mb-6 font-medium text-brand-color text-lg">{{ item.name }}</div>
                    <div> {{ item.description }}</div>
                </div>
            </div>
        </div>
        <div class="container relative card light text-lg mt-4 md:mt-6">
            <h2 class="card-title text-center">Ce este un credit de consum ?</h2>
            <p>Un credit de consum este o sumă de bani împrumutată de la o instituție financiară bancară sau nebancară, de către o persoană fizică pentru a finanța diverse nevoi personale.</p>
            <p class="mb-0">Spre deosebire de un <NuxtLink to="/credit-ipotecar" class="underline">credit ipotecar</NuxtLink>, care este destinat achiziționării unei locuințe, creditul de consum poate fi utilizat pentru o gamă largă de scopuri, cum ar fi:</p>
            <ul class="list-outside list-disc ml-6">
                <li>Achiziționarea de bunuri (electrocasnice, mobilă)</li>
                <li>Finanțarea unor cheltuieli medicale</li>
                <li>Acoperirea costurilor pentru educație</li>
                <li>Renovarea locuinței (reparație)</li>
                <li>Vacanțe (călătorii)</li>
            </ul>
            <p class="mt-6 mb-0">Beneficiile creditului de consum:</p>
            <ul class="list-outside list-disc ml-6">
                <li>Acces rapid la o sumă de bani semnificativă</li>
                <li>Posibilitatea de a finanța cheltuieli neprevăzute</li>
                <li>Flexibilitate în utilizarea banilor</li>
                <li>Rambursare în rate lunare fixe</li>
            </ul>
            <p class="mt-6">Creditul de consum poate fi un instrument util doar dacă vă permiteți rambursarea lui în condiții convenabile.</p>
            <p class="mb-0 font-medium">Contactează-ne acum pentru a afla mai multe despre cum te putem ajuta.</p>
        </div>
        <div class="container mt-4 md:mt-6">
            <CalculatorCredit />
        </div>
        <div class="container card light mt-4 md:mt-6">
             <CallToAction/>
        </div>
    </div>
</template>