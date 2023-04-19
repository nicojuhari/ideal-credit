<script setup>
const howToPay = [
    'În unul din oficiile companiei Ideal Credit',
    'Prin intermediul băncii "VictoriaBank"',
    'La orice oficiu poștal din Republica Moldova',
]

</script>
<template>
    <div>
        <HomeHeroComp />
        <div class="container relative">
            <TipuriCredite/>
        </div>
        <div class="container mt-4 md:mt-6">
                    <Beneficii/>
                    <!-- <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                        <Beneficii/>
                        <TipuriCredite/>
                    </div> -->
                    <div class="card mt-4 md:mt-6">
                        <CalculatorCredit />
                    </div>
                </div>
        <div class="container mt-4 md:mt-6 grid grid-cols-1 md:grid-cols-2 items-center gap-4 md:gap-6">
            <CreditConditions />
            <CreditConditions />
        </div>
        <div class="container cs-blur relative">
            <h2 class="subtitle text-center mt-24 md:mt-36">Reduceri la dobîndă pentru
                clienții cu istorie creditară pozitivă </h2>
            <div class="card mt-16 md:mt-24">
                <h3 class="subtitle text-center mb-8">Metode de achitare</h3>
                <ul class="pl-6">
                    <li v-for="item in howToPay" class="text-lg my-2 list-disc">{{ item }}.</li>
                </ul>
                <div class="mt-8 cs-notice">Mai multe detalii primiți la semnarea contractului </div>
            </div>
        </div>
    </div>
</template>