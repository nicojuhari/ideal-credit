<script setup>
    const benefits = [
        'Dobânzi fixe și avantajoase',
        'Fără comisioane',
        'Reduceri pentru clienți fideli',
        'Transparență și claritate',
    ]
</script>
<template>
    <div class="pt-12 pb-6 md:pt-24 md:pb-12">
        <div class="container grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-6">
            <div class="flex flex-col md:col-span-8 h-full justify-center">
                <h1 class="hero-title text-center md:text-left">Credite rapide</h1>
                <h2 class="subtitle mt-2 text-center md:text-left">Oferim credite pentru nevoi personale și afaceri.</h2>
                <UiBenefitsList :benefits="benefits" class="mt-8" />
                <UiRecenziiButton class="mt-8 md:mt-auto" />
            </div>
            <div class="md:col-span-4 cs-blur cs-blur--center">
                <UiHeroSectionCTA />
                <UiCalculatorCreditCTA class="mt-4" />
            </div>
        </div>
    </div>
</template>