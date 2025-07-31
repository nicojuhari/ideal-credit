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
    <section class="relative">
        <div class="bg-squares -mt-[1px]"></div>
        <div class="container mt-16 md:mt-24">
            <h1 class="font-semibold text-center text-6xl md:text-8xl">Credite Nebancare<span class="font-extralight text-brand-500 text-[34%] md:text-[40%] block mt-2"> pentru afaceri și nevoi personale</span></h1>
            <UiRecenziiButton  class="my-14 md:my-16"/>
            <!-- <p class="text-brand-500 text-xl mt-12 md:mt-16">Rapid, Transparent și Avantajos</p> -->
            <!-- <UiButtonsCTA class="mt-12 md:mt-16"/> -->
            <div class="cs-blur cs-blur--center z-[-1]"></div>
            <CalculatorCredit/>
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