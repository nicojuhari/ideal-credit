<script setup>
import { 
    financialServiceSchema, 
    localBusinessChisinauSchema, 
    localBusinessCauseniSchema, 
    howToSchema 
} from '~/utils/schema'

useHead({
    title: 'Credite nebancare pentru afaceri și nevoi personale',
    titleTemplate: '%pageTitle',
})

useSchemaOrg([
    financialServiceSchema,
    localBusinessChisinauSchema,
    localBusinessCauseniSchema,
    howToSchema
])
</script>
<template>
    <div class="pb-6 md:pb-8 relative">
        <div class="bg-squares -mt-[1px]"></div>
        <div class="container pt-16 md:pt-24 text-center overflow-hidden">
            <!-- <UiRecenziiButton /> -->
            <h1 class="font-semibold text-6xl md:text-8xl my-10 lg:my-6">Credite Nebancare<span class="font-extralight text-gray-400 text-[35%] md:text-[35%] block mt-2"> pentru afaceri și nevoi personale</span></h1>
            <p class="text-brand-500 text-lg mt-10">Rapid, transparent, cu dobânzi fixe<br class="lg:hidden"> și fără comisioane.</p>
            <div class="cs-blur cs-blur--center"></div>
          
            <CalculatorCredit class="mt-12 md:mt-16"/>
        </div>
        <div class="container grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div class="lg:col-span-4 gap-6 flex flex-col justify-end">
              
            </div>
        </div>
    </div>
    <div class="container">
        <TipuriCredite />
    </div>
    <div class="container mt-4 md:mt-6">
        
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