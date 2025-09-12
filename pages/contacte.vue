<script setup lang="ts">

    import type { FormError, FormSubmitEvent } from '@nuxt/ui'

    import { localBusinessChisinauSchema, localBusinessCauseniSchema } from '~/utils/schema'
    const { trackEvent } = useFacebookPixel()

    useHead({
        title: 'Contacte și Adresa Oficiilor | Ideal Credit',
        titleTemplate: '%pageTitle',
        meta: [
            { name: 'description', content: 'Contactează Ideal Credit — adrese, telefoane și programul oficiilor. Consultanță gratuită pentru credite business și de consum. Suntem aici să te ajutăm.' },
            { name: 'keywords', content: 'ideal credit, credit pentru afaceri, credite Moldova, credite Chișinău, credite nebancare' }
        ],
    })
    const web3FormAccessKey = 'c8f3c3c1-46ab-46bf-a139-4c4bb6265d95'
    const formData = ref({
        nume: '',
        email: '',
        telefon: '',
        mesaj: '',
        access_key: web3FormAccessKey,
        subject: '',
        from_name: 'Website Contact Form'
    })
    const formSend = ref(false)
    const loading = ref(false)

    const validate = (state: any): FormError[] => {
        const errors = []
        if (state.email && !validateEmail(state.email)) errors.push({ name: 'email', message: 'Email-ul este invalid' })
        if (!state.nume || state.nume.length < 3) errors.push({ name: 'nume', message: 'Numele trebuie să conțină cel puțin 3 caractere' })
        if (state.telefon && !validatePhone(state.telefon)) errors.push({ name: 'telefon', message: 'Telefonul mobil trebuie să conțină 9 cifre' })

        //email or phone is required
        if (!state.email || !state.telefon) errors.push({ name: 'email_phone', message: 'Este necesar să introduceți email-ul sau telefonul' })

        if (!state.mesaj) errors.push({ name: 'mesaj', message: 'Mesajul este obligatoriu' })
        if(state.mesaj.length < 10) errors.push({ name: 'mesaj', message: 'Mesajul trebuie să conțină cel puțin 10 caractere' })

        return errors

    }

    async function submitForm(event: FormSubmitEvent<typeof formData>) {
        loading.value = true
        try {
            
            formData.value.subject = formData.value.nume + ' a trimis un mesaj ...';

            let response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: JSON.stringify(formData.value)
            })

            let  data = await response.json()

            if (data.success) {
                formSend.value = true;
                formData.value = {
                    nume: '',
                    email: '',
                    telefon: '',
                    mesaj: '',
                    access_key: web3FormAccessKey,
                    subject: '',
                    from_name: 'Ideal Credit Website Contact Form'
                }

                trackEvent('SubmitApplication');

                setTimeout(() => {
                    formSend.value = false;
                }, 3000)
                
            }
        } catch (e) {
            console.error(e)
        } finally {
            loading.value = false
        }
    }

    useSchemaOrg([
        localBusinessChisinauSchema,
        localBusinessCauseniSchema
    ])

</script>
<template>
    <div class="container sm-constainer relative my-4 md:my-6">
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div class="card text-xl space-y-8 text-center">
                <h1 class="title text-center">Contacte</h1>   
                <div class="flex gap-2 items-center">
                    <UIcon name="i-ph-phone-light" class="w-6 h-6 shrink-0 text-brand-500"/>
                    <a href="tel:+37378805060" @click="trackEvent('Contact')"><span class="opacity-50">(+373)</span> 78 80 50 60</a>
                </div>
                <div class="flex gap-2 items-center">
                    <UIcon name="i-ph-phone-light" class="w-6 h-6 shrink-0 text-brand-500"/>
                    <a href="tel:+37379066566" @click="trackEvent('Contact')"><span class="opacity-50">(+373)</span> 790 66 5 66</a>
                </div>
                <div class="flex gap-2.5 items-center">
                    <UIcon name="i-ph-envelope-light" class="w-6 h-6 shrink-0 text-brand-500"/>
                    <a href="mailto:info@idealcredit.md" @click="trackEvent('Contact')">info@idealcredit.md</a>
                </div>
            </div>
             <div class="card relative overflow-hidden">
            <h2 class="card-title text-center">Scrie-ne direct</h2>
            <UiLoading v-if="loading" local/>
            <div v-if="formSend" class="grid place-content-center my-16 duration-700">
                <UIcon name="i-ph-check" class="text-brand-500 h-32 w-32 mx-auto" />
                <div class="text-2xl mt-4">Mulțumim pentru mesaj.<br>Vă contactăm în curând!</div>
            </div>
            <UForm v-else class="space-y-6 contact-form" @submit="submitForm" :state="formData" :validate="validate">
                <UFormField label="Nume" name="nume">
                    <UInput v-model="formData.nume" />
                </UFormField>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <UFormField label="Email" name="email">
                        <UInput v-model="formData.email" />
                    </UFormField>
                    <UFormField label="Mobil" name="telefon">
                        <UInput v-model="formData.telefon" name="telefon" />
                    </UFormField>
                </div>
                <UFormField name="email_phone">

                </UFormField>
                <UFormField label="Mesaj" name="mesaj">
                    <UTextarea v-model="formData.mesaj" />
                </UFormField>
                <div class="flex justify-end">
                    <UButton type="submit" color="success" :loading="loading" :disabled="loading || formSend">
                        Trimite
                    </UButton>
                </div>
            </UForm>
        </div>
        </div>
        <div class="mt-4 md:mt-6">
            <div id="adresa-oficiilor" class="-translate-y-14"></div>
            <div class="card">
                <h2 class="card-title text-center">Adresa oficiilor</h2>
                <ListaOficiilor/>
            </div>
        </div>
        <CallToAction class="py-10"/>
    </div>
</template>