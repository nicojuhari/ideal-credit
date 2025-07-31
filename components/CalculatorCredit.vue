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
    const preContractRef = ref(null)


    const tarife = {
        comision: 0,
        dobinda: [4, 3.5, 3]
    }


    watchEffect(() => {
        if(creditTermen.value < 6) creditTermen.value = 6
        if(creditTermen.value > 60) creditTermen.value = 60
        
        if(creditSuma.value < 10000) creditSuma.value = 10000
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

    watch([creditSuma, creditTermen, showModal],
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
            if(val < 10000) creditSuma.value = 10000
            if(val > 300000) creditSuma.value = 300000
        }
        if(type === 'termen') {
            creditTermen.value = val
            if(val < 6) creditTermen.value = 6
            if(val > 60) creditTermen.value = 60
        }
    }

    const validateInput = (e) => {
        const val = e.target.value;
        if(isNaN(val)) {
            e.target.value = ''
        }

        e.target.value = Math.round(val)
    }
</script>
<template>
    <div class="relative">
        <div class="card">
            
            <div id="calculator-de-credit" class="invisible absolute -z-10 -top-20 md:-top-24"></div>
            <!-- <h2 class="text-center card-title">Calculator de credit</h2> -->
            <div class="grid gap-6 md:gap-10 grid-cols-1 md:grid-cols-2">
                <div class="space-y-4 md:space-y-6">
                    <div>
                        <div class="flex gap-4 justify-between items-center mb-1">
                            <div>Suma (MDL)</div>
                            <label for="credit-amount-input">
                                <input id="credit-amount-input" type="number" :value="creditSuma" @input="validateInput" @change="validateChange($event.target.value, 'suma')" class="input-calculator" />
                            </label>
                        </div>
                        <label for="credit-amount-range">
                            <input id="credit-amout-range" type="range" v-model="creditSuma" min="10000" max="300000" step="500"
                            class="mb-4 w-full h-1.5 bg-white/20 rounded-lg appearance-none cursor-pointer border-0 !p-0">
                        </label>
                    </div>
                    <div>
                    <div class="flex gap-4 justify-between items-center mb-1">
                        <div>Termen (luni)</div>
                        <label for="credit-period-input">
                            <input id="credit-period-input" type="number" :value="creditTermen" @input="validateInput" @change="validateChange($event.target.value, 'termen')" class="input-calculator" />
                        </label>
                    </div>
                    <label for="credit-period-range">
                        <input id="credit-period-range" type="range" v-model="creditTermen" min="6" max="60" step="1"
                        class="mb-4 w-full h-1.5 bg-white/20 rounded-lg appearance-none cursor-pointer border-0 !p-0">
                    </label>
                </div>
                </div>
            <div class="space-y-1">
                <div class="mx-auto w-38 h-38 grid place-content-center gap-2 border-6 rounded-full text-center">
                    <div class="text-sm">Prima rată</div>
                    <div class="text-brand-500 text-3xl font-semibold">{{ (graficCalculat?.[0]?.credit_rata +
                            graficCalculat?.[0]?.dobinda_rata).toLocaleString() || 0}}</div>
                    <div class="text-sm">MDL</div>
                </div>
                
                <div class="mt-2 flex justify-center">
                    <button class="text-gray-400 hover:text-gray-500 underline text-sm cursor-pointer"
                    @click="showModal = true">Vezi preContractul</button>
                </div>
            </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 mt-8 text-sm">
            <div class="flex gap-6 justify-between text-sm">
                <div>Dobânda anuală</div>
                <div>{{ tarife.dobinda[0] * 12 }} %</div>
            </div>
            <div class="flex gap-6 justify-between text-sm">
                <div>DAE<span class="text-sm">(Dobânda anuală efectivă)</span></div>
                <div>{{ dae }} %</div>
            </div>
            <div class="flex gap-6 justify-between text-sm">
                <div>Costul total al creditului</div>
                <div>{{ (dobindaTotal + creditComision).toLocaleString() }} MDL</div>
            </div>
            <div class="flex gap-6 justify-between text-sm">
                <div>Penalitate pe zi</div>
                <div>0.04 %</div>
            </div>
        </div>
        <div class="mt-8">
            <UiButtonsCTA />
        </div>
        
        <!-- <div class="text-center mt-12 mb-8 text-lg">Costurile creditului</div> -->
        <uiModal large v-if="showModal" @close="showModal = false" modalTitle="Informația preContractuală">
            <div v-html="preContractRef?.innerHTML"></div>
        </uiModal>
        <div ref="preContractRef" class="hidden">
            <div>
                <h4 class="text-center my-6 text-lg font-medium">Graficul de Rambursare conform preContractului de mai jos</h4>
                <GraficTable :grafic="graficCalculat" :dobindaTotal="dobindaTotal" :credit="creditSuma" />
                <h4 class="text-center my-6 text-lg font-medium">Informaţii standard privind creditul pentru consumatori</h4>
                <table class="table-fixsed w-full border-collapse pre-contract-table border" id="preContractTable">
                    <tbody>
                        <tr>
                            <td colspan="2" class="table-subheader">1. Denumirea și datele de contact al Organizației</td>
                        </tr>   
                        <tr> 
                            <td>Creditor</td>
                            <td>Organizația de Creditare Nebancară "Ideal Credit" SRL</td>
                        </tr>
                        <tr> 
                            <td>Adresa</td>
                            <td>m.Chișinău, str.Miron Costin, nr.25, of.115 (sucursala nr.1)<br><br>sau<br><br>or.Căușeni, str.Mihai Eminescu nr.17, of.47 (sediul principal)</td>
                        </tr>
                        <tr> 
                            <td>Nr. Telefon</td>
                            <td>079066566, 078805060</td>
                        </tr>
                        <tr> 
                            <td>Adresa de Email</td>
                            <td>info@idealcredit.md</td>
                        </tr>
                        <tr> 
                            <td>Pagina web</td>
                            <td>www.idealcredit.md</td>
                        </tr>
                        <tr>
                            <td colspan="2" class="table-subheader">2. Descrierea principalelor caracteristici ale produsului de creditare</td>
                        </tr>
                        <tr> 
                            <td>Tipul de credit </td>
                            <td>Credit nebancar</td>
                        </tr>
                        <tr> 
                            <td>
                                Valoarea totală a creditului<br>
                                <i class="text-sm">Înseamnă plafonul sau sumele totale puse la dispoziţie în temeiul contractului de credit</i>
                            </td>
                            <td> {{ creditSuma }} MDL</td>
                        </tr>
                        <tr> 
                            <td>
                                Condiţiile care reglementează tragerea creditului<br>
                                <i class="text-sm">Înseamnă modul şi momentul de obţinere a banilor</i>
                            </td>
                            <td>Mijloacele bănești se vor elibera exclusiv din casieria Organizației</td>
                        </tr>
                        <tr> 
                            <td>Durata Contractului de credit</td>
                            <td>{{ creditTermen }} luni</td>
                        </tr>
                        <tr> 
                            <td>Ratele şi ordinea în care acestea vor fi achitate </td>
                            <td> 
                                Conform graficului anexat la prezenta informație, acceptat și semnat de către client<br>
                                <i>* Găsiți graficul mai sus!</i>
                            </td>
                        </tr>
                        <!-- <tr> 
                            <td>Suma totală pe care va trebui să o achitaţi<br>
                                <i class="text-sm">Înseamnă suma capitalului împrumutat plus dobînda şi posibilele costuri aferente creditului</i>
                            </td>
                            <td>{{ +dobindaTotal + +creditSuma }} MDL</td>
                        </tr> -->
                        <!-- <tr>
                            <td>
                                <i class="text-sm">Dacă este cazul:</i><br>
                                Garanţii necesare<br>
                                <i class="text-sm">Descrierea garanţiei pe care trebuie să o furnizaţi în raport cu contractul de credit</i>
                            </td>
                            <td>În funcție de evaluarea riscului de credit, se poate solicita garanții adiționale: fidejusiune (garant) sau gaj (imobil).</td>
                        </tr> -->
                        <tr>
                            <td colspan="2" class="table-subheader">3. Costurile creditului</td>
                        </tr>
                        <tr>
                            <td>Dobînda lunară</td>
                            <td>4% lunar</td>
                        </tr>
                        <tr>
                            <td>Rata dobînzii aferente creditului</td>
                            <td>48% (dobîndă fixă)</td>
                        </tr>
                        <tr>
                            <td>Dobînda anuală efectivă (DAE)</td>
                            <td>{{  dae }} %</td>
                        </tr>
                        <tr>
                            <td>
                                <i class="text-sm">Dacă este cazul:</i><br>
                                Pentru obţinerea creditului, este obligatoriu să se încheie:
                            </td>
                            <td>În funcție de evaluarea riscului de credit, pot fi încheiate contracte de fidejusiune (garant) sau gaj (imobil)</td>
                        </tr>
                        <tr>
                            <td colspan="2" class="table-subheader">4. Costuri aferente</td>
                        </tr>
                        <tr>
                            <td>Comision pentru eliberarea creditului</td>
                            <td>0.00 % din suma eliberată</td>
                        </tr>
                        <tr>
                            <td>Comision pentru prelungirea Contractului</td>
                            <td>Comisionul pentru prelungirea termenului Contractului
                                este egal cu dobînda necesar a fi achitată pentru rata
                                care a fost amînată. (La solicitarea clientului)
                            </td>
                        </tr>
                        <tr>
                            <td>Costuri în caz de întîrziere la plată </td>
                            <td>Se va calcula o penalitate în mărime de 0.04% maxim, pentru fiecare zi de întîrziere din valoarea totală a creditului</td>
                        </tr>
                        <tr>
                            <td colspan="2">În conformitate cu prevederile art. 15, alin. 7), lit. a) din Legea nr. 202 din 12.07.2013 privind contractele de credit
                                pentru consumatori, orice alte plăți aferente creditului acordat (comisioane, taxe, penalități, dobînzii de întîrziere și
                                orice alt tip de plată), cu excepția dobînzii, se vor încasa conform regulii ca acestea să nu depășească cumulativ
                                0,04% din valoarea totală a creditului pe o zi de credit înmulțit la numărul de zile pentru care este contractat
                                creditul.</td>
                            </tr>
                            <tr>
                                <td colspan="2" class="table-subheader">5. Alte aspecte juridice importante</td>
                            </tr>
                            <tr>
                                <td>Dreptul de revocare</td>
                                <td>Clientul are dreptul la revocarea Contractului timp de 14
                                    zile de la data semnării lui cu, condiția că, creditul nu a
                                    fost eliberat din casierie. Organizația are dreptul la
                                    revocarea Contractului dacă clientul încalcă condițiile
                                    acestuia.
                                </td>
                            </tr>
                            <tr>
                                <td>Rambursare anticipată</td>
                                <td>Clientul are dreptul să ramburseze anticipat creditul.
                                    Pentru aceasta, Organizația nu percepe careva taxe
                                    neprecăzute în Contract.
                                </td>
                            </tr>
                            <tr>
                                <td>Consultarea unei baze de date</td>
                                <td>În cazul în care cererea de solicitare a creditului va fi
                                    respinsă, iar temei pentru respingere a constituit
                                    informația vizualizată într-o bază de date, Organizația va
                                    informa clientul referitor la baza de date accesată
                                </td>
                            </tr>
                            <tr>
                                <td>Dreptul la un proiect de Contract de credit</td>
                                <td>Clientul are dreptul, la cerere, să obţină gratuit un exemplar al proiectului de Contract de credit.
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="my-6">Îmi exprim acordul ca, Contractul de credit să fie încheiat în mai puțin de 15 zile calendaristice de la
                        data semnării prezentei informații preContractuale.</div>
                        <div class="text-right mt-12">Semnătura: ________________</div>
                    </div>
                </div>
        </div>
        <UiInfo class="mt-6">Consumatorul este responsabil pentru rambursarea creditului.</UiInfo>
    </div>
</template>