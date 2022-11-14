<script setup>
useHead({
    title: 'Refinanțare Credite | Credite Rapide Online',
    meta: [
        { name: 'description', content: 'Oferim credite pentru refinanțarea altor credite mai scumpe, cu dobînzi avantajoase și fără comisioane ascunse' },
        { name: 'keywords', content: 'refinanțare credite, credite Moldova, credite rapide, credite online, împrumuturi' }
    ],
})
</script>
<template>
    <div class="cs-blur">
        <div class="container my-10 md:my-20">
            <h1 class="text-center hero-title">Refinanțare Credite</h1>
            <div class="text-2xl md:text-4xl text-center mt-20">cu <span class="text-[90px] md:text-[120px] font-bold">0%</span> comision</div>
            <div class="flex flex-col md:flex-row gap-6 justify-center items-center md:items-end mt-12 md:mt-16">
                <UiPhoneButton/>
            </div>
        </div>
        <div class="container">
            <h2 class="subtitle text-center">Credite pentru refinanțare cu dobînzi
                avantajoase și fară comisioane ascunse</h2>
            <CreditConditions />
        </div>
        <div class="container">
            <div class="card mt-10 md:mt-20 ">
                <CalculatorCredit/>
            </div>
        </div>
    </div>
</template>