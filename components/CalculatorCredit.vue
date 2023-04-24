<script setup>
    import { ref, watchEffect, computed } from 'vue'
    import { createGrafic, calcDAE } from 'ideal-credit'
    // import { createGrafic } from '../utils/grafic';
    // import { calcDAE } from '../utils/dae'

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
        graficCalculat.value = createGrafic(creditSuma.value, creditTermen.value, 4)
        dae.value = calcDAE(graficCalculat.value, creditSuma.value)
        dobindaTotal.value = graficCalculat.value.reduce((acc, rata) => rata.dobinda_rata + acc, 0)
    })

    const creditComision = computed(() => {
        return tarife.comision * +creditSuma.value / 100;
    })

    const validateChange = (val, type) => {
        //check if is number

        if(type === 'suma') {
            creditSuma.value = val
            if(val < 1000) creditSuma.value = 1000
            if(val > 300000) creditSuma.value = 300000
        }
        if(type === 'termen') {
            creditTermen.value = val
            if(val < 6) creditTermen.value = 6
            if(val > 48) creditTermen.value = 48
        }
    }

    const validateInput = (e) => {
        const val = e.target.value
        if(isNaN(val)) {
            e.target.value = ''
        }
        e.target.value = Math.round(val)
    }

</script>
<template>
    <div class="card relative">
        <div id="calculator-de-credit" class="invisible absolute -z-10 -top-20 md:-top-24"></div>
        <h3 class="card-title text-center">Calculator de Credit</h3>
        <div class="grid gap-6 md:gap-10 grid-cols-1 md:grid-cols-2">
            <div>
                <div class="mt-6">
                    <div class="flex gap-4 justify-between items-center mb-1">
                        <div>Suma</div>
                        <div>
                            <input type="number" :value="creditSuma" @input="validateInput" @change="validateChange($event.target.value, 'suma')" class="input-calculator" />
                            <!-- <span class="text-white text-opacity-80 ml-2">MDL</span> -->
                        </div>
                    </div>
                    <input id="medium-range" type="range" v-model="creditSuma" min="1000" max="300000" step="100"
                        class="mb-3 w-full h-1 bg-white bg-opacity-30 rounded-lg appearance-none cursor-pointer border-0 p-0">
                    <div class="flex gap-6 justify-between text-white text-opacity-80 text-sm">
                        <div>1000 lei</div>
                        <div>300 000 lei</div>
                    </div>
                </div>
                <div class="mt-6">
                    <div class="flex gap-4 justify-between items-center mb-1">
                        <div>Termen</div>
                        <div class="">
                            <input type="number" :value="creditTermen" @input="validateInput" @change="validateChange($event.target.value, 'termen')" class="input-calculator" />
                            <!-- <span class="text-white text-opacity-80 ml-2">luni</span> -->
                        </div>
                    </div>
                    <input id="medium-range" type="range" v-model="creditTermen" min="6" max="48" step="1"
                        class="mb-3 w-full h-1 bg-white bg-opacity-30 rounded-lg appearance-none cursor-pointer border-0 p-0">
                    <div class="flex gap-6 justify-between text-white text-opacity-80 text-sm">
                        <div>6 luni</div>
                        <div>48 luni</div>
                    </div>
                </div>
            </div>
            <div class="flex flex-col">
                <div class="grid place-content-center mt-6">
                    <div
                        class="w-44 h-44 grid place-content-center gap-4 border-4 rounded-full text-center border-white border-opacity-30">
                        <div class="text-white text-opacity-60">Prima rată</div>
                        <div class="text-brand-color subtitle">{{ graficCalculat[0].credit_rata +
                            graficCalculat[0].dobinda_rata }}</div>
                        <div><span class="text-white text-opacity-60">MDL</span></div>
                    </div>
                </div>
                <div class="flex justify-center mt-6">
                    <button class="btn btn-primary btn-light"
                        @click="showModal = true">Vezi toate ratele</button>
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
    </div>
    
</template>