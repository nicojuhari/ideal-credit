<script setup>
import { 
    financialServiceSchema, 
    localBusinessChisinauSchema, 
    localBusinessCauseniSchema, 
    howToSchema 
} from '~/utils/schema'

useHead({
    title: 'Credite Nebancare în Moldova | Rapid și Avantajos | Ideal Credit',
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
    <div class="relative pt-10 md:pt-12">
        <div class="bg-squares -mt-[1px]"></div>
        <div class="container">
            <UiRecenziiButton class="mb-16"/>
            <h1 class="font-semibold text-center text-6xl md:text-8xl">Credite Nebancare</h1>
            <p class="text-center mt-6 px-4 md:px-0 text-gray-400 md:text-xl md:max-w-xl mx-auto text-lg font-light">Oferim credite nebancare în Moldova cu dobânzi fixe, fără comisioane ascunse, rapid și avantajos.</p>
            <UiMainCTA class="mt-16"/>
            <div class="cs-blur cs-blur--center z-[-1]"></div>
            <CalculatorCredit class="mt-18 md:mt-24"/>
        </div>
    </div>
   
    <section class="container">
        <h2 class="title text-center">Condițiile de creditare</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <CreditConditions type="pj" />
            <CreditConditions type="pf" />
        </div>
        <UiInfo class="mt-6">În funcție de evaluarea riscului de credit, se va solicita informații suplimentare și/sau garanții: fidejusiune sau gaj imobil.</UiInfo>
    </section>
    <section class="container">
        <HowItWorks />
    </section>
    <section class="container">
        <h2 class="title text-center">Tipuri de credite</h2>
        <ServiciiList/>
    </section>
    <section class="container">
        <h2 class="title text-center">Metode de achitare a creditului</h2>
        <PaymentMethods />
    </section>
    <ShortAboutUs />
    <section class="container" id="recenzii">
        <RecenziiClient />
    </section>
    <section class="container">
        <h2 class="title text-center">Întrebări frecvente</h2>
        <FAQ />
    </section>
</template>