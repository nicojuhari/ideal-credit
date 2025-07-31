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
    title: 'Cerere de credit online rapid și simplu',
    meta: [
        { name: 'description', content: 'Depune o cerere de credit online. Ideal Credit oferă credite rapide pentru nevoi personale și afaceri, cu dobânzi fixe și fără comisioane.' },
        { name: 'keywords', content: 'ideal credit, credite rapide, credite Moldova, credite Chișinău, credite online, împrumuturi' }
    ]
})

const loading = ref(false)

const validate = (state: any): FormError[] => {
    const errors = []
    if (!state.suma) errors.push({ name: 'suma', message: 'Suma este obligatorie' })
    if (!state.termen) errors.push({ name: 'termen', message: 'Termenul este obligatoriu' })
    if (!state.scopul_creditului) errors.push({ name: 'scopul_creditului', message: 'Scopul creditului este obligatoriu' })
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
                reset('cerere-online-form', {})
                formSuccess.value = true
            }, 1200)
        } else {
            console.log(response)
            formError.value = true
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
            <div class="text-center mb-8 text-xs text-green-500">ai nevoie doar de <span class="font-bold">2 minute</span>!</div>
            
            <UForm :state="formData" :validate="validate" @submit="submitForm" class="space-y-4 md:space-y-6">
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                    <UFormField label="Suma creditului (MDL)" name="suma">
                        <UInput type="number" step="100" max="300000" min="10000" v-model="formData.suma" />
                    </UFormField>
                    <UFormField label="Termen (luni)" name="termen">
                        <UInput type="number" step="1" min="6" max="60" v-model="formData.termen" />
                    </UFormField>
                    <UFormField label="Scopul creditului" name="scopul_creditului">
                        <USelect v-model="formData.scopul_creditului" :items="['Pentru nevoi personale', 'Pentru afaceri', 'Refinanțare', 'Procurare bun imobil', 'Altele']" class="w-full form-select" />
                    </UFormField>
                </div>
                <h3 class="mt-12 mb-4 font-bold text-green-400 text-center">Date personale</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    <UFormField label="Nume" name="nume">
                        <UInput type="text" v-model="formData.nume" />
                    </UFormField>
                    <UFormField label="Prenume" name="prenume">
                        <UInput type="text" v-model="formData.prenume" />
                    </UFormField>
                    <UFormField label="Adresa de rezidență" name="adresa_domiciliu" help="Oraș/Sat, Strada, număr, bloc, ap.">
                        <UInput type="text" v-model="formData.adresa_domiciliu" />
                    </UFormField>
                    <UFormField label="Mobil" name="telefon">
                        <UInput type="tel" v-model="formData.telefon" />
                    </UFormField>
                </div>
                <h3 class="mt-12 mb-4 font-bold text-green-400 text-center">Date financiare</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    <UFormField label="Venituri lunare (MDL)" name="venituri">
                        <UInput type="number" v-model="formData.venituri" />
                    </UFormField>
                    <UFormField label="Datorii lunare (MDL)" name="datorii" help="Alte credite, dacă nu ai datorii pune 0">
                        <UInput type="number" v-model="formData.datorii" />
                    </UFormField>
                </div>
                 <UFormField label="Locul de muncă" name="locul_de_munca" help="Denumirea companiei, funcția, adresa, ...">
                    <UInput type="text" v-model="formData.locul_de_munca" />
                </UFormField>
                <UFormField label="Bunuri în proprietate" name="bunuri">
                    <UCheckboxGroup v-model="formData.bunuri" :items="['Autoturism', 'Casă', 'Apartament', 'Terenuri', 'Altele', 'Nu am nimic']" class="w-full p-2 bg-black-400 rounded" />
                </UFormField>
                
                <div class="bg-brand-400/10 py-3 p-4 rounded">
                    <ul class="list-disc list-inside">
                        <li>Aceasta este o cerere de credit online preventivă.</li>
                        <li>Declar pe propria răspundere exactitatea datelor prezentate mai sus.</li>
                        <li>În caz de necesitate Ideal Credit SRL va verifica informaţia oferită, utilizând toate
                            sursele accesibile, cum ar fi Biroul Istoriilor de Credit.</li>
                        <li>În cazul refuzului de acordare a creditului, Ideal Credit SRL nu este obligată să
                            argumenteze motivul acelui refuz.</li>
                        <li>Sunt de acord cu utilizarea <NuxtLink to="/cookies"  title="Politica de Cookies" class="underline">cookie-urilor</NuxtLink>, cu <NuxtLink to="/terms" title="Termeni și condiții" class="underline">termenii și condițiile</NuxtLink>, precum și cu <NuxtLink to="/privacy" title="Politica de Confidențialitate" class="underline">politica de confidențialitate</NuxtLink>.</li>
                    </ul>
                    <UFormField name="terms" required class="mt-4">
                        <UCheckbox v-model="formData.terms" label="Accept declarațiile de mai sus" />
                    </UFormField>
                </div>
                <div class="bg-red-400/10 py-3 p-4 rounded">
                    <ul class="list-disc list-inside">
                        <li>Sunt gata să ofer unul sau mai mulți fidejusori (garant/поручитель).</li>
                        <li>Și să mă prezint cu ei în oficiul Ideal Credit pentru a semna contractul de credit (în caz de aprobare a creditului).</li>
                    </ul>
                    <UFormField name="garant" required class="mt-4 text-2xl">
                        <UCheckbox v-model="formData.garant" label="Acest punct este obligatoriu pentru clienții noi."/>
                    </UFormField>
                </div>
                <div class="flex justify-end">
                    <UButton type="submit" :loading="loading" :disabled="loading">Trimite</UButton>
                </div>
            </UForm>
            
            <UiLoading v-if="loading" local />
            <UModal v-model:open="formSuccess" class="text-black-950" title="Cererea a fost trimisă cu succes!">
                <template #body>
                    <div class="my-6 space-y-4">
                        <div>Veți primi un răspuns în maxim 2 ore în zilele lucrătoare.</div>
                        <div>Vă mulțumim că ați ales Ideal Credit!</div>
                    </div>
                </template>
            </UModal>
        </div>
    </div>
</template>