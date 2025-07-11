<script setup>
import { 
    financialServiceSchema, 
    localBusinessChisinauSchema, 
    localBusinessCauseniSchema, 
    howToSchema 
} from '~/utils/schema'

useHead({
    title: 'Credite nebancare pentru afaceri și nevoi personale',
    titleTemplate: '%pageTitle | Ideal Credit',
})

useSchemaOrg([
    financialServiceSchema,
    localBusinessChisinauSchema,
    localBusinessCauseniSchema,
    howToSchema
])
</script>
<template>
    <div class="py-8 md:py-16 relative">
        <div class="bg-squares -mt-[1px]"></div>
        <div class="container grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div class="flex flex-col lg:col-span-8 h-full justify-center text-center lg:text-left">
                <UiRecenziiButton />
                <h1 class="font-medium text-7xl lg:text-[100px] leading-none my-10 lg:my-6">Credite <br>nebancare<span class="text-brand-500 font-extralight text-[50%] lg:text-[35%] block mt-2 lg:mt-0"> pentru afaceri și nevoi personale </span></h1>
                <p class="text-gray-400 text-xl">Rapid, transparent, cu dobânzi fixe<br class="lg:hidden"> și fără comisioane ascunse.</p>
            </div>
            <div class="lg:col-span-4 gap-6 flex flex-col justify-end">
                <UiButtonsCTA toHeroSection />
            </div>
        </div>
    </div>
    <div class="container">
        <TipuriCredite />
    </div>
    <div class="container mt-4 md:mt-6">
        <CalculatorCredit />
    </div>
    <div class="container mt-4 md:mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <LazyHowItWorks />
        <LazyCreditConditions />
    </div>
    
    <div class="container mt-4 md:mt-6">
        <LazyPaymentMethods />
    </div>
    <div class="container mt-4 md:mt-6">
        <LazyShortAboutUs />
    </div>
    <div class="container mt-4 md:mt-6">
        <RecenziiClient />
    </div>
    <div class="container my-4 md:my-6">
        <h4 class="title text-center pt-8">Întrebări frecvente</h4>
        <LazyFAQ />
    </div>
</template>