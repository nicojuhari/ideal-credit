<script setup>

    const benefits = [
        // 'Reduceri pentru clienții fideli',
        'Transparent și rapid',
        'Fără comisioane ascunse',
        'Dobânzi fixe și avantajoase',
    ]

</script>
<template>
    <div class="py-8 md:py-16 relative">
        <div class="bg-squares -mt-[1px]"></div>
        <div class="container grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div class="flex flex-col lg:col-span-8 h-full justify-center text-white text-center lg:text-left">
                <UiRecenziiButton />
                <h1 class="font-semibold text-7xl lg:text-7xl leading-none my-12 lg:my-8">Credite<br>nebancare <span class="text-brand-500 font-light text-[40%] lg:text-[40%] block mt- lg:mt-2"> pentru afaceri și nevoi personale</span></h1>
                <UiBenefitsList :benefits="benefits"/>
            </div>
            <div class="lg:col-span-4 cs-blurs cs-blur--center grid items-center gap-6">
                <UiButtonsCTA toHeroSection />
                <UiCalculatorCreditCTA />
            </div>
        </div>
    </div>
    <div class="container grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <HowItWorks />
        <LazyCreditConditions />
    </div>
    <div class="container mt-4 md:mt-6">
        <LazyTipuriCredite />
    </div>
    <div class="container mt-4 md:mt-6">
        <LazyShortAboutUs />
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
        <h2 class="title text-center pt-12 md:pt-16">Întrebări Frecvente</h2>
        <LazyFAQ />
    </div>
</template>