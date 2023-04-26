<script setup>
    useHead({
    title: 'Credite rapide pentru nevoi personale și afaceri',
    meta: [
        { name: 'description', content: 'Organizația de Creditare Nebancară "Ideal Credit" SRL oferă credite rapide, cu dobânzi avantajoase și fără comisioane ascunse. Soluții rapide și ușoare pentru nevoile tale financiare în Chișinău, Republica Moldova.' },
        { name: 'keywords', content: 'Credite rapide, credite nebancare, împrumut, credite nevoi personale, credite Chișinău, credite Moldova, credite pentru afaceri' },
    ],
})
</script>
<template>
    <div>
        <HomeHeroComp />
        <div class="container relative">
            <TipuriCredite/>
        </div>
        <div class="container mt-4 md:mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <Beneficii class="md:min-h-[440px]"/>
            <CreditConditions class="md:min-h-[440px]" />
        </div>
        <div class="container mt-4 md:mt-6">
            <CalculatorCredit />
        </div>
        <div class="container mt-4 md:mt-6">
            <CallToAction class="card light"/>
        </div>
        <div class="container mt-4 md:mt-6">
            <PaymentMethods class="md:min-h-[440px]" />
        </div>
        <div class="container mt-4 md:mt-6 mb-6">
                <h3 class="title text-center pt-12 md:pt-16">Întrebări frecvente  </h3>
                <FAQ />
            </div>
    </div>
</template>