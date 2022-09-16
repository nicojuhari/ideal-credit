<script setup>
    import { ref } from 'vue'


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
    <div>

        <Head>
            <Title>Contactele companii de creditare Ideal Credit SRL</Title>
            <Meta name="description"
                content="Despre noi - Ideal Credit oferă credite rapide de consum și pentru business" />
        </Head>
        <div class="container">
            <h1 class="title text-center my-10 md:my-20">Contacte</h1>
            <div class="grid gap-6 md:gap-10 grid-cols-1 md:grid-cols-1 max-w-md mx-auto">
                <div class="grid grid-cols-1">
                    <div class="flex flex-col gap-8 font-light text-3xl">
                        <div class="flex gap-4 items-center justify-around">
                            <div class="h-12 w-12 rounded-full flex items-center justify-center bg-brand-color bg-opacity-10">
                                <IconsPhone class="w-6 text-brand-color"/>
                            </div>
                            <a href="tel:+37324393222"><span class="opacity-50">(+373)</span> 243 93 222</a>
                        </div>
                        <div class="flex gap-4 items-center justify-around">
                            <div class="h-12 w-12 rounded-full flex items-center justify-center bg-brand-color bg-opacity-10">
                                <IconsMobile class="w-6 text-brand-color"/>
                            </div>
                            <a href="tel:+37378805060"><span class="opacity-50">(+373)</span> 78 80 50 60</a>
                        </div>
                        <div class="flex gap-4 items-center justify-around">
                            <div class="h-12 w-12 rounded-full flex items-center justify-center bg-brand-color bg-opacity-10">
                                <IconsMail class="w-6 text-brand-color"/>
                            </div>
                            <a href="mailto:info@idealcredit.md">info@idealcredit.md</a>
                        </div>
                    </div>
                </div>
                <div class="card relative mt-20">
                    <div class="subtitle text-center">Scrie-ne un mesaj</div>
                    <div v-if="loading"
                        class="h-full w-full grid place-content-center absolute z-10 top-0 left-0 bg-white bg-opacity-10 rounded-3xl">
                        <UiLoading class="mx-auto" />
                    </div>
                    <div v-if="formSend" class="grid place-content-center my-16 duration-700">
                        <IconsCheck class="text-brand-color h-32 mx-auto" />
                        <div class="text-2xl">Vă mulțumim pentru mesaj!</div>
                    </div>
                    <FormKit v-else type="form" method="POST" :actions="false" @submit="submitForm" v-model="formData"
                        :validation-messages="{
                            incomplete : 'Ne pare rău, careva cîmpuri sunt goale sau greșite',
                        }">
                        <FormKit type="text" name="nume" label="Nume" validation="required|length:3,25"
                            input-class="bg-white bg-opacity-10" :validation-messages="{
                            required: 'Numele este obligatoriu',
                            length: 'Cel putin 3 caractere, maximum 25',
                            }"></FormKit>
                        <FormKit type="email" name="email" label="Email" validation="required|email"
                            input-class="bg-white bg-opacity-10" :validation-messages="{
                            required: 'Email-ul este obligatoriu',
                            email: 'Email-ul are format grasit'
                            }"></FormKit>
                        <FormKit type="textarea" name="mesaj" label="Mesaj" input-class="bg-white bg-opacity-10">
                        </FormKit>
                        <button type="submit"
                            class="mt-6 py-2.5 px-4 bg-brand-color bg-opacity-20 text-brand-color rounded-full flex gap-4 items-center justify-center max-w-max">
                            Trimite
                        </button>
                    </FormKit>
                </div>
            </div>
        </div>
    </div>
</template>