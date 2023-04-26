<script setup>
    import { ref } from 'vue'

    useHead({
        title: 'Contacte',
        meta: [
            { name: 'description', content: 'Contactele companiei Ideal Credit SRL - ce oferă credite rapide pentru nevoi peersonale și afaceri' },
            { name: 'keywords', content: 'ideal credit, credite rapide, credite Moldova, credite Chișinău, credite online, împrumuturi' }
        ],
    })

    const formData = ref({})
    const formSend = ref(false)
    const loading = ref(false)
    const web3FormAccessKey = 'c8f3c3c1-46ab-46bf-a139-4c4bb6265d95'


    const submitForm = async () => {
        loading.value = true
        try {
            formData.value.access_key = web3FormAccessKey;
            formData.value.subject = formData.value.nume + ' a trimis un mesaj ...';
            formData.value.from_name = 'Website Contact Form';

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
                formData.value = {}

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

</script>
<template>
    <div class="container sm-container relative my-4 md:my-6">
        <div class="card light">
            <div class="mb-20"> 
                <h1 class="text-center text-5xl font-bold">Contacte</h1>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 font-light text-2xl">
                <div class="flex gap-4 items-center">
                    <div class="h-12 w-12 rounded-full flex items-center justify-center bg-brand-color bg-opacity-10">
                        <IconsPhone class="w-6 text-brand-color"/>
                    </div>
                    <a href="tel:+37324393222"><span class="opacity-50">(+373)</span> 243 93 222</a>
                </div>
                <div class="flex gap-4 items-center">
                    <div class="h-12 w-12 rounded-full flex items-center justify-center bg-brand-color bg-opacity-10">
                        <IconsMobile class="w-6 text-brand-color"/>
                    </div>
                    <a href="tel:+37378805060"><span class="opacity-50">(+373)</span> 78 80 50 60</a>
                </div>
            </div>
            <div class="font-light text-2xl mt-8 flex md:justify-center">
                <div class="flex gap-4 items-center">
                        <div class="h-12 w-12 rounded-full flex items-center justify-center bg-brand-color bg-opacity-10">
                            <IconsMail class="w-6 text-brand-color"/>
                        </div>
                        <a href="mailto:info@idealcredit.md">info@idealcredit.md</a>
                    </div>
            </div>
        </div>    
        <div class="card mt-4 md:mt-6 relative overflow-hidden">
                        <div class="subtitle text-center">Scrie-ne un mesaj</div>
                        <UiLoading v-if="loading" local/>
                        <div v-if="formSend" class="grid place-content-center my-16 duration-700">
                            <IconsCheck class="text-brand-color h-32 mx-auto" />
                            <div class="text-2xl">Vă mulțumim pentru mesaj!</div>
                        </div>
                        <FormKit v-else type="form" method="POST" :actions="false" @submit="submitForm" v-model="formData"
                            :validation-messages="{
                                    incomplete: 'Ne pare rău, careva cîmpuri sunt goale sau greșite',
                                }">
                            <FormKit 
                                type="text" 
                                name="nume" 
                                label="Nume" 
                                validation="required|length:3,25"
                                input-class="bg-white bg-opacity-10"
                                outer-class="mb-6"
                                :validation-messages="{
                                    required: 'Numele este obligatoriu',
                                    length: 'Cel puțin 3 caractere, maximum 25'
                                }"
                            />
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                <FormKit 
                                    type="email" 
                                    name="email" 
                                    label="Email" 
                                    validation="email"
                                    input-class="bg-white bg-opacity-10" 
                                    :validation-messages="{
                                            email: 'Email-ul are format greșit'
                                        }"
                                />
                                <FormKit 
                                    type="tel" 
                                    name="telefon" 
                                    label="Telefon/Mobil" 
                                    validation="tel"
                                    input-class="bg-white bg-opacity-10" 
                                    :validation-messages="{
                                            tel: 'Telefonul are format greșit'
                                        }"
                                />
                            </div>

                            <FormKit type="textarea" name="mesaj" label="Mesaj" outer-class="mb-6" input-class="bg-white bg-opacity-10">
                            </FormKit>
                            <div class="flex justify-end">
                                    <button type="submit" class="btn btn-secondary">
                                    Trimite
                                </button>
                            </div>
                            
                        </FormKit>
                    </div>
        <CallToAction class="card light mt-4 md:mt-6"/>
    </div>
</template>