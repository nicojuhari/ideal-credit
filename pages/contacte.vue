<script setup>
    // import { ref } from 'vue'


    // const formData = ref({})
    // const web3FormAccessKey = 'c8f3c3c1-46ab-46bf-a139-4c4bb6265d95'


    // const submitForm = async () => {
    //     try {
    //         formData.value.access_key = web3FormAccessKey;

    //         let response = await fetch('https://api.web3forms.com/submit', {
    //             method: 'POST',
    //             body: JSON.stringify(formData.value)
    //         })

    //         console.log(response)
    //     } catch (e) {
    //         console.error(e)
    //     }
    // }

    // console.log(process.env)
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
            <div class="grid gap-6 md:gap-10 grid-cols-1 md:grid-cols-2">
                <div class="card light grid place-content-center grid-cols-1">
                    <div class="flex flex-col gap-8 font-medium">
                        <div class="text-2xl">Tel: (+373) 243 93 222</div>
                        <div class="text-2xl">Mob: (+373) 78 80 50 60</div>
                        <div class="text-2xl">Email: info@idealcredit.md</div>
                    </div>
                </div>
                <div class="card">
                    <div class="subtitle text-center">Scrie-ne</div>
                    <FormKit type="form" action="https://api.web3forms.com/submit" method="POST" :actions="false">
                        <input type="hidden" name="access_key" value="c8f3c3c1-46ab-46bf-a139-4c4bb6265d95" />
                        <FormKit type="text" name="nume" label="Nume" validation="required|length:3,25"
                            input-class="bg-white bg-opacity-10" :validation-messages="{
                            required: 'Numele este obligatoriu',
                            length: 'Cel putin 3 caractere, maximum 25',
                            }"></FormKit>
                        <FormKit type="email" name="email" label="Email" validation="required|email"
                            input-class="bg-white bg-opacity-10" :validation-messages="{
                            required: 'Email este obligatoriu',
                            email: 'Email are format grasit'
                            }"></FormKit>
                        <FormKit type="textarea" name="mesaj" label="Mesaj" input-class="bg-white bg-opacity-10">
                        </FormKit>
                        <input type="hidden" name="redirect" value="https://web3forms.com/success">
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