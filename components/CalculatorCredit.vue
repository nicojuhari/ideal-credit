<script setup>
import { ref, watchEffect, computed } from 'vue'
    import { createGrafic } from '../utils/grafic';
    import { calcDAE } from '../utils/dae'

    const creditSuma = ref(10000)
    const creditTermen = ref(12)

    const graficCalculat = ref(null)
    const dae = ref(0)
    const dobindaTotal = ref(0)

    const showModal= ref(false)


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

const changeCreditSuma = (e) => {
    console.log(e.target.value)
    if (e.target.value < 1000) {
        creditSuma.value = 1000
        e.target.value = 1000
    }
    
    if (e.target.value > 300000) return creditSuma.value = 300000
    creditSuma.value = e.target.value
}

    const creditPenalitate = computed(() => {
        return (tarife.penalitate * +creditSuma.value / 100).toFixed(2)
    })


</script>
<template>
    <h3 class="subtitle text-center mb-8">Calculator de Credit</h3>
    <div class="grid gap-6 md:gap-10 grid-cols-1 md:grid-cols-2">
        <div>
            <div class="mt-6">
                <div class="flex gap-4 justify-between items-center mb-1">
                    <div>Suma</div>
                    <div class=""><span class="font-semibold text-3xl">{{creditSuma}}</span> <span
                            class="text-white text-opacity-60">MDL</span>
                    </div>
                </div>
                <input id="medium-range" type="range" v-model="creditSuma" min="1000" max="300000" step="100"
                    class="mb-2 w-full h-1 bg-white bg-opacity-80 rounded-lg appearance-none cursor-pointer border-0 p-0">
                <div class="flex gap-6 justify-between text-white text-opacity-60 text-sm">
                    <div>1000</div>
                    <div>300 000</div>
                </div>
            </div>
            <div class="mt-6">
                <div class="flex gap-4 justify-between items-center mb-1">
                    <div>Termen</div>
                    <div class=""><span class="font-semibold text-3xl">{{ creditTermen }}</span> <span
                            class="text-white text-opacity-60">luni</span>
                    </div>
                </div>
                <input id="medium-range" type="range" v-model="creditTermen" min="6" max="48" step="1"
                    class="mb-2 w-full h-1 bg-white bg-opacity-80 rounded-lg appearance-none cursor-pointer border-0 p-0">
                <div class="flex gap-6 justify-between text-white text-opacity-60 text-sm">
                    <div>6</div>
                    <div>48</div>
                </div>
            </div>
        </div>
        <div class="flex flex-col">
            <div class="grid place-content-center mt-6">
                <div
                    class="w-44 h-44 grid place-content-center gap-4 border-4 rounded-full text-center border-white border-opacity-30">
                    <div class="text-white text-opacity-60">Prima rată</div>
                    <div class="text-brand-color subtitle">{{ graficCalculat[0].credit_rata +
                        graficCalculat[0].dobinda_rata}}</div>
                    <div><span class="text-white text-opacity-60">MDL</span></div>
                </div>
            </div>
            <div class="flex justify-center mt-6">
                <div class="bg-brand-color text-brand-color bg-opacity-5 cursor-pointer py-2 px-4 rounded-full text-opacity-70"
                    @click="showModal = true">Vezi
                    toate ratele</div>
            </div>
        </div>
    </div>
    <div class="text-center text-2xl mt-12 mb-6">Costurile creditului</div>
    <div class="grid gap-3 md:gap-10 grid-cols-1 md:grid-cols-2">
        <div>
            <div class="flex gap-6 justify-between">
                <div>Comision de acordare</div>
                <div>0 MDL</div>
            </div>
            <div class="flex gap-6 justify-between mt-3">
                <div>Penalitate pe zi</div>
                <div>0.04 %</div>
            </div>
            <div class="flex gap-6 justify-between mt-3">
                <div>Dobinda lunară</div>
                <div>{{ tarife.dobinda[0] }} %</div>
            </div>
        </div>
        <div>
            <div class="flex gap-6 justify-between">
                <div>Dobinda anuală medie</div>
                <div>{{ tarife.dobinda[0] * 12 }} %</div>
            </div>
            <div class="flex gap-6 justify-between mt-3">
                <div>DAE<span class="text-sm"> (Dobinda anuală efectivă)</span></div>
                <div>{{ dae }} %</div>
            </div>
            <div class="flex gap-6 justify-between mt-3">
                <div>Costul total al creditului</div>
                <div>{{ dobindaTotal + creditComision }} MDL</div>
            </div>
        </div>
    </div>
    <uiModal large v-if="showModal" @close="showModal = false" modalTitle="Graficul de rambursare*">
        <GraficTable :grafic="graficCalculat" :dobindaTotal="dobindaTotal" :credit="creditSuma" />
        <div class="mt-6 text-brand-color">* Graficul de rambursare este doar un exemplu</div>
    </uiModal>
</template>