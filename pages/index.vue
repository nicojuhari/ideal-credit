<script setup>
    useHead({
    title: 'Credite rapide pentru nevoi personale și afaceri',
    meta: [
        { name: 'description', content: 'Ideal Credit oferă credite rapide de consum, auto, imobiliare și pentru afaceri cu dobânzi fixe și fără comisioane ascunse, în Chișinău, Republica Moldova' },
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
                <h3 class="title text-center pt-12 md:pt-16">FAQ</h3>
                <p class="max-w-[600px] mx-auto text-center pb-4">Iată câteva întrebări frecvente și răspunsurile asociate, care vă pot ajuta să înțelegeți mai bine opțiunile de creditare oferite de compania noastră</p>
                <FAQ />
            </div>
    </div>
</template>