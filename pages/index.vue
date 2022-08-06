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
        <div class="container">
            <div class="card dark">
                <CalculatorCredit />
            </div>
        </div>
        <div class="container">
            <h2 class="subtitle text-center">Credite de consum persoanelor fizice<br>și pentru business</h2>
            <CreditConditions />
        </div>
        <div class="container cs-blur relative">
            <h2 class="subtitle text-center mt-24 md:mt-36">Reduceri la dobîndă pîna la 25% pentru
                clienții care achită în termen
                creditul. </h2>
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