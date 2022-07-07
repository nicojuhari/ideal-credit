<script setup>
import { ref, watchEffect, computed } from 'vue'
    import { createGrafic } from '../utils/grafic';
    import { calcDAE } from '../utils/dae'

    const creditSuma = ref(5000)
    const creditTermen = ref(12)

    const graficCalculat = ref(null)
    const dae = ref(0)
    const dobindaTotal = ref(0)


    const tarife = {
        comision: 0,
        dobinda: [4, 3.5, 3],
        penalitate: 0.1
    }


    watchEffect(() => {
        if(creditTermen.value < 6) creditTermen.value = 6
        if(creditTermen.value > 48) creditTermen.value = 48
        
        if(creditSuma.value < 1000) creditSuma.value = 1000
        if(creditSuma.value > 300000) creditSuma.value = 300000
        graficCalculat.value = createGrafic(creditSuma.value, creditTermen.value, 4, new Date())
        dae.value = calcDAE(graficCalculat.value, creditSuma.value)
        dobindaTotal.value = graficCalculat.value.reduce((acc, rata) => rata.dobinda_rata + acc, 0)
    })

    const creditComision = computed(() => {
        return tarife.comision * +creditSuma.value / 100;
    })

    const creditPenalitate = computed(() => {
        return (tarife.penalitate * +creditSuma.value / 100).toFixed(2)
    })


</script>
<template>
    <section>
        <div class="container">
            <h2 class="text-center my-8 text-2xl">Calculator de Credit</h2>
            <div class="flex flex-col md:flex-row gap-6 justify-center my-10 max-w-xl w-full mx-auto">
                <div class="flex-grow">
                    <div class="mb-1">Suma</div>
                    <input type="number" v-model="creditSuma" class="border rounded p-2 border-gray-800 w-full"
                        step="100" min="1000" />
                    <div class="text-sm text-center text-brand font-semibold">1 000 - 300 000 MDL</div>
                </div>
                <div class="flex-grow">
                    <div class="mb-1">Perioada</div>
                    <input type="number" v-model="creditTermen" class="border rounded p-2 border-gray-800 w-full"
                        step="1" min="6" />
                    <div class="text-sm text-center text-brand font-semibold">6 - 48 luni</div>
                </div>
            </div>
            <div class="text-center my-5 text-lg">Costurile creditului</div>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-6 my-6 justify-center flex-wrap text-center">
                <div class="flex flex-col gap-4 p-4 items-center justify-center border rounded">
                    <div>Comision de acordare</div>
                    <div>0 MDL</div>
                </div>
                <div class="flex flex-col gap-4 p-4 items-center justify-center border rounded">
                    <div>Penalitate*</div>
                    <div>{{creditPenalitate}} MDL/zi</div>
                </div>
                <div class="flex flex-col gap-4 p-4 items-center justify-center border rounded">
                    <div>Dobinda lunara</div>
                    <div>{{ tarife.dobinda[0] }} %</div>
                </div>
                <div class="flex flex-col gap-4 p-4 items-center justify-center border rounded">
                    <div>Dobinda anuala medie</div>
                    <div>{{ tarife.dobinda[0] * 12 }} %</div>
                </div>
            </div>
            <div class="grid grid-cols-2 md:grid-cols-3 gap-6 my-6 justify-center flex-wrap text-center">
                <div class="flex flex-col gap-4 p-4 items-center justify-center border rounded">
                    <div>Dobinda totala</div>
                    <div>{{ dobindaTotal }} MDL</div>
                </div>
                <div class="flex flex-col gap-4 p-4 items-center justify-center border rounded">
                    <div>DAE</div>
                    <div>{{ dae }} %</div>
                </div>
                <div
                    class="flex flex-col gap-4 p-4 items-center justify-center border rounded col-span-2 md:col-span-1">
                    <div>Costul total al creditului**</div>
                    <div>{{ dobindaTotal + creditComision }} MDL</div>
                </div>
            </div>
            <div>
                <div class="mt-6"><strong>*</strong> În cazul neachitării ratei lunare sau alte plăți în termenul
                    specificat
                    în Contract, Organizația percepe o penalitate în mărime de 0,1 % din valoarea totală a creditului
                    pentru fiecare zi de întîrziere. <span class="font-bold">Exemplu: Suma creditului 10000 lei x 0,1% = 10
                        lei/zi</span>
                </div>
                <div class="mt-6"><strong>**</strong> Organizația ține cont de faptul că dobînda de credit anuală
                    specificată în
                    contractul de credit să nu depășească 50 % anual, iar toate celelalte plăți aferente (comisioane,
                    taxe, penalități, dobînzi de întîrziere și orice alt tip de plată), cu excepția dobînzii, să nu
                    depășească 0,04 % din valoarea totală a creditului pentru o zi de credit.
                </div>
            </div>
            <div>
                <div class="text-center my-5 text-lg">Graficul de rambursare</div>
                <GraficTable :grafic="graficCalculat" :dobindaTotal="dobindaTotal" :credit="creditSuma" />
            </div>
        </div>
    </section>
</template>