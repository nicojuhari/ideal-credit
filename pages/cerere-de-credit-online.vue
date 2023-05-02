<script setup>
    import { ref } from 'vue'

    const formData = ref({})
    const formSuccess = ref(false)

    useHead({
        title: 'Cerere de credit online',
        meta: [
            { name: 'description', content: 'Depune o cerere de credit online. Ideal Credit oferă credite rapide pentru nevoi personale și afaceri, cu dobânzi fixe și fără comisioane ascunse.'},
            { name: 'keywords', content: 'ideal credit, credite rapide, credite Moldova, credite Chișinău, credite online, împrumuturi' }
        ]
    })

    const loading = ref(false)
    const web3FormAccessKey = 'c8f3c3c1-46ab-46bf-a139-4c4bb6265d95'


const submitForm = async () => {
    loading.value = true
    try {
        formData.value.access_key = web3FormAccessKey;
        formData.value.subject = formData.value.suma + ' MDL, ' +  formData.value.termen + ' luni, ' + formData.value.nume;
        formData.value.from_name = 'Cerere de Credit Online';

        formData.value.ccemail = 'costea.' + 'grati' + '@yahoo.com';

        let response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(formData.value)
        })

        let data = await response.json()

        if (data.success) {
            
            setTimeout(() => {
                // formSend.value = false;
                formSuccess.value = true
            }, 1200)
        }
    } catch (e) {
        console.error(e)
    } finally {
        setTimeout(() => {
            // formSend.value = false;
            loading.value = false
        }, 1000)
    }
}
</script>
<template>
    <div class="container sm-container relative my-4 md:my-6">
        <div class="card light">
            <h1 class="page-title">Cerere de credit online</h1>
            <FormKit type="form" method="POST" :actions="false" @submit="submitForm" v-model="formData"
                    :validation-messages="{
                            incomplete: 'Ne pare rău, careva cîmpuri sunt greșite sau lipsesc',
                        }">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    <FormKit 
                        type="number"
                        step="100"
                        max="300000"
                        min="1000"
                        name="suma"
                        placeholder="5000"
                        label="Suma creditului (MDL)" 
                        validation="required|number|max:300000|min:1000"
                        input-class="bg-white bg-opacity-10" 
                        :validation-messages="{
                                required: 'Suma este obligatorie',
                                length: 'Cel puțin 3 caractere, maximum 25',
                                max: 'Maximum 300000 MDL',
                                min: 'Minim 1000 MDL',
                            }"/>
                    <FormKit 
                            type="number"
                            step="1"
                            min="6"
                            max="60"
                            name="termen" 
                            placeholder="12"
                            label="Termen (luni)" 
                            validation="required|number|max:60|min:6"
                            input-class="bg-white bg-opacity-10" 
                            :validation-messages="{
                                    required: 'Termenul este obligatoriu',
                                    max: 'Maximum 60 luni',
                                    min: 'Minim 6 luni',
                                }"/>
                </div>
                <FormKit 
                                type="text" 
                                name="scopul_creditului" 
                                placeholder="Achiziționarea unui apartament, refinanțare, investiții în afaceri, etc."
                                label="Scopul creditului" 
                                validation="required|length:5,25"
                                input-class="bg-white bg-opacity-10"
                                outer-class="mt-4"
                                :validation-messages="{
                                        required: 'Scopul este obligatoriu',
                                        length: 'Cel puțin 5 caractere, maximum 25',
                                    }"/>
            <h2 class="subtitle mt-12 mb-2">Date personale</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <FormKit 
                    type="text" 
                    name="prenume"
                    placeholder="Ion"
                    label="Prenume" 
                    validation="required|length:3,25"
                    input-class="bg-white bg-opacity-10" 
                    :validation-messages="{
                            required: 'Prenumele este obligatoriu',
                            length: 'Cel puțin 3 caractere, maximum 25',
                        }"/>
                <FormKit 
                        type="text" 
                        name="nume" 
                        placeholder="Popescu"
                        label="Nume" 
                        validation="required|length:3,25"
                        input-class="bg-white bg-opacity-10" 
                        :validation-messages="{
                                required: 'Numele este obligatoriu',
                                length: 'Cel puțin 3 caractere, maximum 25',
                            }"/>
            </div>
            
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-4">
                <FormKit 
                    type="text" 
                    name="adresa_domiciliu"
                    placeholder="Oraș/Sat, Strada, număr, bloc, ap."
                    label="Adresa" 
                    validation="required|length:6,25"
                    input-class="bg-white bg-opacity-10"
                    :validation-messages="{
                            required: 'Adresa este obligatorie',
                            length: 'Cel puțin 6 caractere, maximum 25',
                        }
                        "/>
                <FormKit 
                    type="tel" 
                    name="telefon"
                    placeholder="012345678"
                    label="Telefon/Mobil" 
                    validation="required"
                    input-class="bg-white bg-opacity-10" 
                    :validation-messages="{
                        required: 'Telefonul este obligatoriu'
                    }">
                </FormKit>
            </div>
            <h2 class="subtitle mt-12 mb-2">Date Financiare</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    <FormKit 
                        type="number" 
                        name="venituri"
                        placeholder="9000"
                        label="Venituri oficiale (MDL)"
                        help="Venituri care pot fi confirmate prin documente"
                        validation="required"
                        input-class="bg-white bg-opacity-10" 
                        :validation-messages="{
                                required: 'Veniturile lunare sunt obligatorii',
                            }"/>
                    <FormKit 
                            type="number"
                            min="0"
                            name="datorii" 
                            placeholder="1200"
                            label="Datorii achitate lunare (MDL)" 
                            validation="required"
                            help="Dacă sunt alte credite, pune 0 dacă nu ai datorii"
                            input-class="bg-white bg-opacity-10" 
                            :validation-messages="{
                                    required: 'Cîmpul datorii este obligatoriu',
                            
                                }"/>
                </div>
                <FormKit 
                                type="text" 
                                name="locul_de_munca"
                                label="Locul de muncă"
                                help="Denumirea companiei, funcția, adresa, ..." 
                                validation="required"
                                input-class="bg-white bg-opacity-10"
                                outer-class="mt-4"
                                :validation-messages="{
                                        required: 'Locul de muncă este obligatoriu',
                                    }"/>
                <div>
                    <FormKit
                        name="bunuri"
                        type="checkbox"
                        label="Bunuri în proprietate"
                        outer-class="mt-6"
                        :options="['Autoturism', 'Casă', 'Apartament', 'Terenuri', 'Alte', 'Nu am nimic']"
                        validation="required|min:1"
                        :validation-messages="{
                                required: 'Bunuri în proprietate este obligatoriu',
                            }"
                        />
                </div>
                <div class="mt-6">
                    
                    <div class="bg-brand-color bg-opacity-20 py-3 p-4 rounded">
                        <ul class="list-disc list-inside">
                            <li>Aceasta este o cerere de credit online preventivă.</li>
                            <li>Declar pe propria răspundere exactitatea datelor prezentate mai sus.</li>
                            <li>În caz de necesitate Ideal Credit SRL va verifica informaţia oferită, utilizând toate sursele accesibile, cum ar fi Biroul Istoriilor de Credit.</li>									
                            <li>În cazul refuzului de acordare a creditului, Ideal Credit SRL nu este obligată să argumenteze motivul acelui refuz.</li>
                        </ul>
                        <FormKit
                        type="checkbox"
                        label="Sunt deacord cu termenii și declarațiile de mai sus"
                        name="terms"
                        outer-class="mt-2 formkit-cerere-terms font-medium"
                        validation="accepted"
                        validation-visibility="dirty"
                        :validation-messages="{
                                accepted: 'Vă rugăm să confirmați că sunteți de acord cu termenii de mai sus',
                            }"
                    />
                    </div>
                    
                </div>
                <div class="flex justify-end">
                    <button type="submit"
                        class="btn btn-primary btn-outline mt-6">
                        Trimite
                    </button>
                </div>
            </FormKit>
            <UiLoading v-if="loading" local/>
            <UiModal @close="formSuccess=false" v-if="formSuccess">
                <p class="text-lg text-white">Cererea de credit a fost trimisă cu succes. Vă vom contacta în cel mai scurt timp posibil.</p>
            </UiModal>
        </div>
    </div>
</template>