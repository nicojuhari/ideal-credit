<script setup>
    useHead({
    title: 'Credite rapide cu dobânzi mici și fără comisioane',
    titleTemplate: '%pageTitle',
    meta: [
        { name: 'description', content: 'Oferim credite rapide nebancare, pentru nevoi personale și afaceri în Chișinău, Republica Moldova. Aplică online, pentru un credit bun de la Ideal Credit!' },
        { name: 'keywords', content: 'credit rapid, credit online, împrumut, credit nevoi personale, credit Chișinău Moldova, credit online md, credit avantajos' },
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
            
        </div>
        <div class="container mt-4 md:mt-6 mb-6">
            <h3 class="title text-center pt-12 md:pt-16">Metode de achitare</h3>
            <p class="max-w-[600px] mx-auto text-center pb-4">Vă oferim soluții rapide, eficiente și ieftine pentru rambursarea creditului.</p>
            <PaymentMethods />
        </div>
        <div class="container mt-4 md:mt-6 mb-6">
            <h3 class="title text-center pt-12 md:pt-16">Întrebări Frecvente</h3>
            <p class="max-w-[600px] mx-auto text-center pb-4">Iată câteva dintre cele mai frecvente întrebări și răspunsuri la acestea, care vă pot ajuta să înțelegeți mai bine opțiunile noastre de creditare.</p>
            <FAQ />
        </div>
    </div>
</template>