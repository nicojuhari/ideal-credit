<script setup lang="ts">
import { ref } from 'vue'
import type { FormError, FormSubmitEvent } from '@nuxt/ui'

const { trackEvent } = useFacebookPixel()

const formData = ref({
    suma: '',
    termen: '',
    scopul_creditului: '',
    nume: '',
    prenume: '',
    adresa_domiciliu: '',
    telefon: '',
    venituri: '',
    datorii: '',
    locul_de_munca: '',
    bunuri: [] as string[],
    terms: false,
    garant: false,
    subject: '',
    from_name: 'Cerere de Credit Online'
})
const formSuccess = ref(false)
const formError = ref(false)

useHead({
    title: 'Cerere de Credit Online - Aplică în doar 2 minute | Ideal Credit',
    titleTemplate: '%pageTitle',
    meta: [
        { name: 'description', content: 'Completează cererea de credit online la Ideal Credit. Decizie în 1 - 3 ore, documentație minimă și consultanță gratuită. Primești banii rapid!' },
        { name: 'keywords', content: 'cerere de credit, credite rapide, credite Moldova, credite Chișinău, credite online, împrumuturi' }
    ]
})

const loading = ref(false)

const validate = (state: any): FormError[] => {
    const errors = []
    if (!state.suma) errors.push({ name: 'suma', message: 'Suma este obligatorie' })
    if(!onlyNumbers(state.suma)) errors.push({ name: 'suma', message: 'Suma trebuie să conțină doar cifre' })
    if(state.suma < 10000) errors.push({ name: 'suma', message: 'Suma minimă este 10.000 MDL' })
    if(state.suma > 300000) errors.push({ name: 'suma', message: 'Suma maximă este 300.000 MDL' })

    if (!state.termen) errors.push({ name: 'termen', message: 'Termenul este obligatoriu' })
    if(!onlyNumbers(state.termen)) errors.push({ name: 'termen', message: 'Termenul trebuie să conțină doar cifre' })
    if(state.termen < 6) errors.push({ name: 'termen', message: 'Termenul minim este 6 luni' })
    if(state.termen > 60) errors.push({ name: 'termen', message: 'Termenul maxim este 60 luni' })

    if (!state.scopul_creditului) errors.push({ name: 'scopul_creditului', message: 'Scopul creditului este obligatoriu' })

    if (!state.nume || state.nume.length < 3) errors.push({ name: 'nume', message: 'Nume este obligatoriu' })
    if (!state.prenume || state.prenume.length < 3) errors.push({ name: 'prenume', message: 'Prenume este obligatoriu' })
    if (!state.adresa_domiciliu || state.adresa_domiciliu.length < 3) errors.push({ name: 'adresa_domiciliu', message: 'Adresa de rezidență este obligatorie' })
    if (!state.telefon) errors.push({ name: 'telefon', message: 'Telefon este obligatoriu' })
    if(!validatePhone(state.telefon)) errors.push({ name: 'telefon', message: 'Telefonul trebuie să conțină 9 cifre' })
    

    if(!onlyNumbers(state.venituri)) errors.push({ name: 'venituri', message: 'Venitul trebuie să conțină doar cifre' })
    if(!onlyNumbers(state.datorii)) errors.push({ name: 'datorii', message: 'Datoriile trebuie să conțină doar cifre sau să fie 0' })
    
    if(state.locul_de_munca.length < 3) errors.push({ name: 'locul_de_munca', message: 'Locul de muncă trebuie să conțină cel puțin 3 caractere' })

    if(state.bunuri.length === 0) errors.push({ name: 'bunuri', message: 'Bunurile în proprietate sunt obligatorii' })

    if(!state.terms) errors.push({ name: 'terms', message: 'Acceptați condițiile.' })
    if(!state.garant) errors.push({ name: 'garant', message: 'Acest punct este obligatoriu.' })
   

    return errors
}


const submitForm = async (event: FormSubmitEvent<typeof formData>) => {
    loading.value = true
    formError.value = false
    formSuccess.value = false

    try {

        formData.value.subject = formData.value.suma + ' MDL, ' + formData.value.termen + ' luni, ' + formData.value.nume;

        let response = await $fetch('/api/cerere-online', {
            method: 'POST',
            body: JSON.stringify(formData.value)
        })

        if (response.success) {

            trackEvent('Lead');

            setTimeout(() => {
                // formSend.value = false;
                formData.value = {
                    suma: '',
                    termen: '',
                    scopul_creditului: '',
                    nume: '',
                    prenume: '',
                    adresa_domiciliu: '',
                    telefon: '',
                    venituri: '',
                    datorii: '',
                    locul_de_munca: '',
                    bunuri: [],
                    terms: false,
                    garant: false,
                    subject: '',
                    from_name: 'Cerere de Credit Online'
                }
                formSuccess.value = true
            }, 1200)
        }
    } catch (e) {
        console.error(e)
        formError.value = true
    } finally {
        setTimeout(() => {
            // formSend.value = false;
            loading.value = false
        }, 1000)
    }
}

onMounted(() => {
    trackEvent('ViewContent');
})

</script>
<template>
    <div class="container relative my-4 md:my-6">
        <div class="card">
            <h1 class="card-title text-center !mb-2">Cerere de credit online</h1>
            <div class="mt-4 text-sm text-center text-brand-500">
                Completezi în doar 2 minute
            </div>
            <UForm :state="formData" :validate="validate" @submit="submitForm" class="space-y-6 md:space-y-8 pt-10">
                <h2 class="mt-12 mb-6 text-green-400 text-center font-bold">Date despre credit</h2>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                    <UFormField label="Suma (lei)" name="suma">
                        <UInput type="number" step="100" max="300000" min="10000" v-model="formData.suma" />
                    </UFormField>
                    <UFormField label="Termen (luni)" name="termen">
                        <UInput type="number" step="1" min="6" max="60" v-model="formData.termen" />
                    </UFormField>
                    <UFormField label="Scopul creditului" name="scopul_creditului">
                        <USelect v-model="formData.scopul_creditului" placeholder="Selectează scopul creditului" :items="['Pentru nevoi personale', 'Pentru afaceri', 'Refinanțare', 'Procurare bun imobil', 'Altele']" class="w-full form-select" />
                    </UFormField>
                </div>
                <h2 class="mt-12 mb-6 text-green-400 text-center font-bold">Date personale</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    <UFormField label="Nume" name="nume">
                        <UInput type="text" v-model="formData.nume" />
                    </UFormField>
                    <UFormField label="Prenume" name="prenume">
                        <UInput type="text" v-model="formData.prenume" />
                    </UFormField>
                    <UFormField label="Adresa de locuire" name="adresa_domiciliu">
                        <UInput type="text" v-model="formData.adresa_domiciliu" placeholder="Oraș/Sat, Strada, număr, bloc, ap." />
                    </UFormField>
                    <UFormField label="Telefon (doar mobil)" name="telefon" >
                        <UInput type="tel" v-model="formData.telefon" />
                    </UFormField>
                </div>
                <h3 class="mt-12 mb-6 text-green-400 text-center font-bold">Date financiare</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    <UFormField label="Venit lunar (lei)" name="venituri">
                        <UInput type="number" v-model="formData.venituri" />
                    </UFormField>
                    <UFormField label="Datorii lunare (lei)" name="datorii">
                        <UInput type="number" v-model="formData.datorii" placeholder="Alte credite, dacă nu ai datorii pune 0" />
                    </UFormField>
                </div>
                 <UFormField label="Locul de muncă" name="locul_de_munca">
                    <UInput type="text" v-model="formData.locul_de_munca" placeholder="Denumirea companiei și funcția" />
                </UFormField>
                <UFormField label="Ce bunuri ai în proprietate?" name="bunuri">
                    <UCheckboxGroup color="success" v-model="formData.bunuri" :items="['Autoturism', 'Casă', 'Apartament', 'Terenuri', 'Altele', 'Nu am nimic']" class="w-full py-3 p-4 bg-black-400 rounded" />
                </UFormField>
                
                <div class="bg-brand-500/10 p-4 rounded">
                    <!-- <div class="text-2xl font-bold mb-4 text-brand-500">Atenție!</div> -->
                    <ul class="list-disc list-inside space-y-1 text-brand-500">
                        <li>Aceasta este o cerere de credit online <span class="underline">preventivă</span>.</li>
                
                        <!-- <li>În caz de necesitate Ideal Credit SRL va verifica informaţia oferită, utilizând toate
                            sursele accesibile, cum ar fi Biroul Istoriilor de Credit.</li> -->
                        <li>În cazul refuzului de acordare a creditului, Ideal Credit SRL nu este obligată să
                            argumenteze motivul acelui refuz.</li>
                        <!-- <li>Sunt de acord cu utilizarea <NuxtLink to="/cookies"  title="Politica de Cookies" class="underline">cookie-urilor</NuxtLink>, cu <NuxtLink to="/terms" title="Termeni și condiții" class="underline">termenii și condițiile</NuxtLink>, precum și cu <NuxtLink to="/privacy" title="Politica de Confidențialitate" class="underline">politica de confidențialitate</NuxtLink>.</li> -->
                    </ul>
                    <UFormField name="terms" required class="mt-4">
                        <UCheckbox v-model="formData.terms" color="success" label="Accept condițiile de mai sus.">
                            
                        </UCheckbox>
                        
                    </UFormField>
                </div>
                <div class="bg-blue-400/10 p-4 rounded">
                    <!-- <div class="text-2xl font-bold mb-4 text-red-500">Important!</div> -->
                    <ul class="list-disc list-inside space-y-1 text-blue-400">
                        <li>Sunt gata să ofer unul sau mai mulți fidejusori (garant/поручитель).</li>
                        <li>În caz de aprobare, voi veni (împreună cu fidejusorii) în oficiul companiei, pentru a semna contractul de credit.</li>
                    </ul>
                    <UFormField name="garant" required class="mt-4">
                        <UCheckbox v-model="formData.garant" color="success" label="Accept declarațiile de mai sus." />
                    </UFormField>
                </div>
                <div class="flex justify-end mt-8">
                    <UButton type="submit" :loading="loading" :disabled="loading" color="success" label="Trimite cererea" icon="i-ph-arrow-right-duotone" />
                </div>
            </UForm>
            
            <UiLoading v-if="loading" local />
            <UModal v-model:open="formSuccess" title="Cererea a fost trimisă cu succes!">
                <template #body>
                    <div class="space-y-4 text-center">
                        <div class="flex justify-center">
                            <UIcon name="i-ph-check-circle" class="text-blue-500 text-9xl" />
                        </div>
                        <div class="text-lg">Veți primi un sunet în 2-3 ore<br><span class="text-sm text-green-400"> în zilele de luni până vineri</span></div>
                        <div class="text-lg text-brand-500">Mulțumim pentru încredere!</div>
                    </div>
                </template>
            </UModal>
            <UModal v-model:open="formError" class="text-black-950" title="Eroare">
                <template #body>
                    <div class="space-y-4">
                        <div class="flex justify-center">
                            <UIcon name="i-ph-warning" class="text-red-500 text-9xl" />
                        </div>
                        <div>Vă rugăm să verificați datele introduse și să încercați din nou.</div>
                    </div>
                </template>
            </UModal>
        </div>
    </div>
</template>