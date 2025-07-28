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
            <h1 class="font-semibold text-6xl md:text-8xl my-10 lg:my-6">Credite Nebancare<span class="font-extralight text-brand-500 text-[35%] md:text-[35%] block mt-2"> pentru afaceri și nevoi personale</span></h1>
            <p class="text-gray-400 text-lg mt-10">Rapid, transparent, cu dobânzi fixe<br class="lg:hidden"> și fără comisioane.</p>
            <div class="cs-blur cs-blur--center"></div>
            <UiButtonsCTA class="my-6 md:my-8"/>
            <CalculatorCredit class="mt-6 md:mt-8"/>
        </div>
        <div class="container grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div class="lg:col-span-4 gap-6 flex flex-col justify-end">
              
            </div>
        </div>
    </div>
   
    <section class="container">
        <UiBadgeForSection class="mb-6">Condițiile de creditare</UiBadgeForSection>
        <h2 class="title text-center">Ce credite oferim?</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <CreditConditions type="pj" />
            <CreditConditions type="pf" />
        </div>
        <UiInfo class="mt-6">În funcție de evaluarea riscului de credit, se va solicita garanții adiționale: fidejusiune sau gaj imobil.</UiInfo>
    </section>
    <section class="container">
        <LazyHowItWorks />
    </section>
    <section class="container">
        <UiBadgeForSection class="mb-6">Metode de achitare</UiBadgeForSection>
        <h2 class="title text-center">Cum rambursezi creditul?</h2>
        <LazyPaymentMethods />
    </section>
    <section class="container">
        <LazyShortAboutUs />
    </section>
    <section class="container">
        <RecenziiClient />
    </section>
    <section class="container">
        <UiBadgeForSection class="mb-6">F.A.Q</UiBadgeForSection>
        <h3 class="title text-center">Întrebări frecvente</h3>
        <LazyFAQ />
    </section>
</template>