<script setup>
    useHead({
        title: 'Credit Rapid și Avantajos în Chișinău, Moldova. Aplică Online!',
        titleTemplate: '%pageTitle',
        meta: [
            { name: 'description', content: 'Ideal Credit din Moldova, oferă credite nebancare pentru nevoi personale și afaceri, cu dobânzi fixe și fără comisioane ascunse. Aplică rapid online!' },
            { name: 'keywords', content: 'credit rapid, credit online, împrumut, credit nevoi personale, credit Chișinău Moldova, credit online md, credit online rapid' },
        ],
    })

    const benefits = [
        'Dobânzi fixe și avantajoase',
        'Fără comisioane ascunse',
        'Reduceri pentru clienții fideli',
        'Transparență și claritate',
    ]

</script>
<template>
    <div class="mb-6">
        <div class="py-14 md:py-28 bg-in-squares">
            <div class="container grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-6">
                <div class="flex flex-col md:col-span-8 h-full justify-center">
                    <h1 class="hero-title text-center md:text-left">Credit Rapid</h1>
                    <h2 class="subtitle mt-2 text-center md:text-left">Credite nebancare pentru nevoi personale și afaceri.
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
        <div class="container grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <HowItWorks />
            <LazyCreditConditions />
        </div>
        <!-- <div class="container mt-4 md:mt-6">
            <HowItWorks />
        </div>
        <div class="container mt-4 md:mt-6 cs-blur">
            <LazyCreditConditions />
        </div> -->
        <div class="container mt-4 md:mt-6">
           <LazyTipuriCredite />
        </div>
        <div class="container mt-4 md:mt-6">
            <LazyCalculatorCredit />
        </div>
        <div class="container mt-4 md:mt-6">
            <LazyCallToAction class="card light" />
        </div>
        <div class="container mt-4 md:mt-6">
           
            <LazyPaymentMethods />
        </div>
        <div class="container mt-4 md:mt-6">
            <h4 class="title text-center pt-12 md:pt-16">Întrebări Frecvente</h4>
            <LazyFAQ />
        </div>
    </div>
</template>