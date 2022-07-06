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
        comision: 2,
        dobinda: [4, 3.5, 3],
        penalitate: 0
    }


    watchEffect(() => {
        graficCalculat.value = createGrafic(creditSuma.value, creditTermen.value, 4, new Date())
        dae.value = calcDAE(graficCalculat.value, creditSuma.value)
        dobindaTotal.value = graficCalculat.value.reduce((acc, rata) => rata.dobinda_rata + acc, 0)
    })

    const creditComision = computed(() => {
        return tarife.comision * +creditSuma.value / 100;
    })


</script>
<template>
    <section>
        <div class="container">
            <h2 class="text-center my-8 text-2xl">Calculator de Credit</h2>
            <div class="flex flex-col md:flex-row gap-6 justify-center">
                <label>
                    <div>Suma(MDL)</div>
                    <input type="number" v-model="creditSuma" class="border rounded p-2 border-gray-800 w-full"
                        step="100" min="1000" />
                </label>
                <label>
                    <div>Termen(luni)</div>
                    <input type="number" v-model="creditTermen" class="border rounded p-2 border-gray-800 w-full"
                        step="1" min="1" />
                </label>
            </div>
            <div class="flex gap-6 my-6 justify-center flex-wrap">
                <div class="flex flex-col gap-4 p-4 items-center justify-center border rounded">
                    <div>Comision</div>
                    <div>{{creditComision}} MDL</div>
                </div>
                <div class="flex flex-col gap-4 p-4 items-center justify-center border rounded">
                    <div>Dobinda lunara</div>
                    <div>{{ tarife.dobinda[0] }} %</div>
                </div>
                <div class="flex flex-col gap-4 p-4 items-center justify-center border rounded">
                    <div>Dobinda anuala medie</div>
                    <div>{{ tarife.dobinda[0] * 12 }} %</div>
                </div>
                <div class="flex flex-col gap-4 p-4 items-center justify-center border rounded">
                    <div>Dobinda totala</div>
                    <div>{{ dobindaTotal }} MDL</div>
                </div>
                <div class="flex flex-col gap-4 p-4 items-center justify-center border rounded">
                    <div>DAE</div>
                    <div>{{ dae }} %</div>
                </div>
                <div class="flex flex-col gap-4 p-4 items-center justify-center border rounded">
                    <div>Costul total al creditului</div>
                    <div>{{ dobindaTotal + creditComision }} MDL</div>
                </div>
            </div>
            <div>
                <div class="text-center my-5 text-lg">Graficul de rambursare</div>
                <GraficTable :grafic="graficCalculat" :dobindaTotal="dobindaTotal" :credit="creditSuma" />
            </div>
        </div>
    </section>
</template>