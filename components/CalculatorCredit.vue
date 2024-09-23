<script setup>
    import { ref, watchEffect, computed } from 'vue'
    import { createGrafic, calcDAE } from 'ideal-credit'
    // import { createGrafic } from '../utils/grafic';
    // import { calcDAE } from '../utils/dae'

    const { trackEvent } = useFacebookPixel()

    const creditSuma = ref(10000)
    const creditTermen = ref(12)

    const graficCalculat = ref(null)
    const dae = ref(0)
    const dobindaTotal = ref(0)

    const showModal= ref(false)


    const tarife = {
        comision: 0,
        dobinda: [4, 3.5, 3]
    }


    watchEffect(() => {
        if(creditTermen.value < 6) creditTermen.value = 6
        if(creditTermen.value > 60) creditTermen.value = 60
        
        if(creditSuma.value < 1000) creditSuma.value = 1000
        if(creditSuma.value > 300000) creditSuma.value = 300000
        
        graficCalculat.value = createGrafic({
            sum: creditSuma.value, 
            period: creditTermen.value, 
            interest: 4,
        })

        if(graficCalculat.value.length == 0) return

        dae.value = calcDAE(graficCalculat.value, creditSuma.value)
        dobindaTotal.value = graficCalculat.value.reduce((acc, rata) => rata.dobinda_rata + acc, 0)
    })

    watch([creditSuma, creditTermen],
        () => {
            trackEvent('CustomizeProduct');
        },
        { once: true }
    )

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
            if(val > 60) creditTermen.value = 60
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
        <h3 class="card-title text-center">Calculator de credit</h3>
        <div class="grid gap-6 md:gap-10 grid-cols-1 md:grid-cols-2">
            <div>
                <div class="mt-6">
                    <div class="flex gap-4 justify-between items-center mb-1">
                        <div>Suma</div>
                        <label for="credit-amount-input">
                            <input id="credit-amount-input" type="number" :value="creditSuma" @input="validateInput" @change="validateChange($event.target.value, 'suma')" class="input-calculator" />
                        </label>
                    </div>
                    <label for="credit-amount-range">
                    <input id="credit-amout-range" type="range" v-model="creditSuma" min="1000" max="300000" step="100"
                        class="mb-3 w-full h-1 bg-white bg-opacity-30 rounded-lg appearance-none cursor-pointer border-0 p-0">
                    </label>
                    <div class="flex gap-6 justify-between text-white text-opacity-80 text-sm">
                        <div>1000 lei</div>
                        <div>300 000 lei</div>
                    </div>
                </div>
                <div class="mt-6">
                    <div class="flex gap-4 justify-between items-center mb-1">
                        <div>Termen</div>
                        <label for="credit-period-input">
                            <input id="credit-period-input" type="number" :value="creditTermen" @input="validateInput" @change="validateChange($event.target.value, 'termen')" class="input-calculator" />
                        </label>
                    </div>
                    <label for="credit-period-range">
                        <input id="credit-period-range" type="range" v-model="creditTermen" min="6" max="60" step="1"
                        class="mb-3 w-full h-1 bg-white bg-opacity-30 rounded-lg appearance-none cursor-pointer border-0 p-0">
                    </label>
                    <div class="flex gap-6 justify-between text-white text-opacity-80 text-sm">
                        <div>6 luni</div>
                        <div>60 luni</div>
                    </div>
                </div>
            </div>
            <div class="flex flex-col">
                <div class="grid place-content-center mt-6">
                    <div
                        class="w-44 h-44 grid place-content-center gap-4 border-4 rounded-full text-center border-white border-opacity-30">
                        <div class="text-white text-opacity-60">Prima rată</div>
                        <div class="text-brand-color title !my-0">{{ (graficCalculat?.[0]?.credit_rata +
                            graficCalculat?.[0]?.dobinda_rata) || 0}}</div>
                        <div><span class="text-white text-opacity-60">MDL</span></div>
                    </div>
                </div>
                <div class="flex justify-center mt-6">
                    <button class="btn btn-primary btn-light"
                        @click="showModal = true">Vezi toate ratele</button>
                </div>
            </div>
        </div>
        <div class="text-center subtitle mt-12 mb-6">Costurile creditului</div>
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
                    <div>Dobânda lunară</div>
                    <div>{{ tarife.dobinda[0] }} %</div>
                </div>
            </div>
            <div>
                <div class="flex gap-6 justify-between">
                    <div>Dobânda anuală medie</div>
                    <div>{{ tarife.dobinda[0] * 12 }} %</div>
                </div>
                <div class="flex gap-6 justify-between mt-3">
                    <div>DAE<span class="text-sm"> (Dobânda anuală efectivă)</span></div>
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
            <div class="mt-6 text-brand-color">* Exemplu Reprezentativ</div>
        </uiModal>
    </div>
    
</template>