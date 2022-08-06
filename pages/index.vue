<script setup>
const howToPay = [
    'În unul din oficiile companiei Ideal Credit',
    'Prin intermediul băncii "VictoriaBank"',
    'La orice oficiu poștal din Republica Moldova',

]
</script>
<template>
    <div class="mb-6">
        <HomeHeroComp />
        <div class="container">
            <div class="card dark">
                <CalculatorCredit />
            </div>
        </div>
        <div class="container">
            <div class="subtitle text-center mt-24 md:mt-36">Pentru a primi un credit de consum sau business,<br
                    class="hidden md:block">este
                nevoie de ...</div>
            <CreditConditions class="mt-12 md:mt-24" />
        </div>
        <div class="container cs-blur relative">
            <div class="subtitle text-center mt-24 md:mt-36">Reduceri la dobîndă pîna la 25% pentru
                clienții<br class="hidden md:block">care achită în termen
                creditul. </div>
            <div class="card mt-16 md:mt-24">
                <h2 class="subtitle text-center mb-8">Metode de achitare</h2>
                <ul class="pl-6">
                    <li v-for="item in howToPay" class="text-lg my-2 list-disc">{{ item }}.</li>
                </ul>
                <div class="mt-8 cs-notice">Mai multă informație și rechizitele necesare le primiți la
                    semnarea contractului</div>
            </div>
        </div>
    </div>
</template>