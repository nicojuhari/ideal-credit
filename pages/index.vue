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
        <div class="container mt-4 md:mt-6 mb-6">
            <PaymentMethods class="md:min-h-[440px]" />
        </div>
    </div>
</template>