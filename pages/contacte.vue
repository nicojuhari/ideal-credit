<script setup>
    import { ref } from 'vue'
    const { trackEvent } = useFacebookPixel()

    useHead({
        title: 'Contactele companiei de creditare Ideal Credit din R. Moldova',
        titleTemplate: '%pageTitle',
        meta: [
            { name: 'description', content: 'Contacte și adresa oficiilor organizației de creditare nebancare Ideal Credit SRL, ce activează cu success pe piața financiară a Republicii Moldova din 2010.' },
            { name: 'keywords', content: 'ideal credit, credit rapid, credite Moldova, credite Chișinău, credit online, împrumuturi' }
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
        {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Ideal Credit Căușeni",
  "legalName": "Organizația de Creditare Nebancară \"Ideal Credit\" SRL",
  "url": "https://idealcredit.md/",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "str. Mihai Eminescu nr. 17, of. 47",
    "addressLocality": "Căușeni",
    "addressRegion": "Căușeni",
    "postalCode": "MD-4301",
    "addressCountry": "Republica Moldova"
  },
  "telephone": "+37379066566",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "08:30",
      "closes": "16:30"
    }
  ],
  "areaServed": {
    "@type": "State",
    "name": "Republica Moldova"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5",
    "reviewCount": "13"
  },
        "image": "https://idealcredit.md/ideal-credit-logo.svg",
        "hasMap": "https://maps.app.goo.gl/T7nCkvKXGKLFKU3Z9"
    },
    {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Ideal Credit Chișinău",
  "legalName": "Organizația de Creditare Nebancară \"Ideal Credit\" SRL",
  "url": "https://idealcredit.md/",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "str. Miron Costin, nr.25, of.115",
    "addressLocality": "Chișinău",
    "addressRegion": "MD",
    "postalCode": "MD-2068",
    "addressCountry": "MD"
  },
  "telephone": "+37378805060",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "08:30",
      "closes": "16:30"
    }
  ],
  "areaServed": {
    "@type": "State",
    "name": "Republica Moldova"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "10"
  },
  "image": "https://idealcredit.md/ideal-credit-logo.svg",
  "hasMap": "https://maps.app.goo.gl/EYxf2NnK3ScynGH79"
}
    ])

</script>
<template>
    <div class="container sm-container relative my-4 md:my-6">
        <div class="card">
            <h1 class="page-title">Contacte</h1>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 text-2xl">
                <div class="flex gap-4 items-center">
                    <UIcon name="i-ph-phone-call" class="w-8 h-8 shrink-0 text-brand-500/50"/>
                    <a href="tel:+37378805060" @click="trackEvent('Contact')"><span class="opacity-50">(+373)</span> 78 80 50 60</a>
                </div>
                <div class="flex gap-4 items-center">
                    <UIcon name="i-ph-envelope" class="w-8 h-8 shrink-0 text-brand-500/50"/>
                    <a href="mailto:info@idealcredit.md" @click="trackEvent('Contact')">info@idealcredit.md</a>
                </div>
            </div>
        </div>    
        <div class="card mt-4 md:mt-6 relative overflow-hidden">
            <h2 class="card-title text-center">Scrie-ne un mesaj</h2>
            <UiLoading v-if="loading" local/>
            <div v-if="formSend" class="grid place-content-center my-16 duration-700">
                <UIcon name="i-ph-check" class="text-brand-500 h-32 w-32 mx-auto" />
                <div class="text-2xl mt-4">Mulțumim pentru mesaj.<br>Vă contactăm în curând!</div>
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
                        :validation-messages="{
                                email: 'Email-ul are format greșit'
                            }"
                    />
                    <FormKit 
                        type="tel" 
                        name="telefon" 
                        label="Telefon/Mobil" 
                        validation="tel"
                        :validation-messages="{
                                tel: 'Telefonul are format greșit'
                            }"
                    />
                </div>

                <FormKit type="textarea" name="mesaj" label="Mesaj" outer-class="mb-6" input-class="border-white/20 border">
                </FormKit>
                <div class="flex justify-end">
                        <button type="submit" class="btn btn-primary">
                        Trimite
                    </button>
                </div>
                
            </FormKit>
        </div>
        <LazyCallToAction class="mt-4 md:mt-6"/>
        <div id="adresa-oficiilor" class="-translate-y-14"></div>
        <div class="card mt-4 md:mt-6">
            <h2 class="card-title text-center">Adresa oficiilor</h2>
            <LazyListaOficiilor/>
        </div>
    </div>
</template>