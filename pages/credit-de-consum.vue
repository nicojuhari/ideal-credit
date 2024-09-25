<script setup>
useHead({
    title: 'Credit de Consum pentru diverse nevoi personale',
    titleTemplate: '%pageTitle',
    meta: [
        { name: 'description', content: 'Oferim credit de consum persoanelor fizice din R. Moldova, pentru nevoi personale, rapid și simplu. Aplică online pentru un credit bun și avantajos!' },
        { name: 'keywords', content: 'credit de consum, credite rapide, credite Moldova, credite Chișinău, credite online, împrumuturi' }
    ],
})

const benefits = [
    'Fără comisioane',
    'Dobânzi fixe și mici',
    'Până la 100 000 MDL',
    'Pentru necesități urgente',
]

</script>
<template>
    <div class="mb-6">
        <div class="py-14 md:py-28 bg-in-squares">
            <div class="container grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-6">
                <div class="flex flex-col md:col-span-8 h-full justify-center">
                    <h1 class="hero-title text-center md:text-left">Credit de Consum</h1>
                    <h2 class="subtitle mt-2 text-center md:text-left">Credite pentru nevoi personale și pînă la
                        salariu.</h2>
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
        <div class="container relative card light text-lg mt-4 md:mt-6">
            <h2 class="card-title text-center">Ce este un credit de consum ?</h2>
            <p>Un credit de consum este o sumă de bani împrumutată de la o instituție financiară bancară sau nebancară,
                de către o persoană fizică pentru a finanța diverse nevoi personale.</p>
            <p class="mb-0">Spre deosebire de un <NuxtLink to="/credit-ipotecar" class="underline">credit ipotecar
                </NuxtLink>, care este destinat achiziționării unei locuințe, creditul de consum poate fi utilizat
                pentru o gamă largă de scopuri, cum ar fi:</p>
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
            <p class="mt-6">Creditul de consum poate fi un instrument util doar dacă vă permiteți rambursarea lui în
                condiții convenabile.</p>
            <p class="mb-0 font-bold">Contactează-ne acum pentru a afla mai multe despre cum te putem ajuta.</p>
        </div>
        <div class="container mt-4 md:mt-6">
            <LazyCalculatorCredit />
        </div>
        <div class="container card light mt-4 md:mt-6">
            <LazyCallToAction />
        </div>
    </div>
</template>