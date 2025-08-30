<script setup>
import { 
    financialServiceSchema, 
    localBusinessChisinauSchema, 
    localBusinessCauseniSchema, 
    howToSchema 
} from '~/utils/schema'

useHead({
    title: 'Credite Nebancare în Moldova - Rapid și Simplu | Ideal Credit',
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
    <section class="relative">
        <div class="bg-squares -mt-[1px]"></div>
        <div class="container mt-8 md:mt-12">
            <UiRecenziiButton  class="mb-12 md:mb-16"/>
            <h1 class="font-semibold text-center text-6xl md:text-8xl">Credite Nebancare<span class="font-extralight text-gray-400 text-[35%] block mt-2"> pentru afaceri și nevoi personale</span></h1>
            <UiButtonsCTA class="mt-12 md:mt-16"/>
            <div class="cs-blur cs-blur--center z-[-1]"></div>
            <CalculatorCredit class="mt-12 md:mt-24"/>
        </div>
    </section>
   
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