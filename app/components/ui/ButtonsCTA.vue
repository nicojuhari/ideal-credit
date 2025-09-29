<script setup>

const props = defineProps({
    toHeroSection: {
        type: Boolean,
        default: false
    }
})
const { trackEvent } = useFacebookPixel()

const clickContact = ref(false)

watch(clickContact, (val) => {
    if(val) {
        trackEvent('Contact');
    }
}, { once: true })

</script>
<template>
    <!-- <div v-if="toHeroSection" class="text-gray-300 text-center text-lg">Solicită un credit acum!</div> -->
    <div class="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-6 relative max-w-[320px] md:max-w-none mx-auto">
        <UButton icon="i-ph-pencil-simple-line" variant="outline" to="/cerere-de-credit-online" title="Cerere de credit online" 
        class="ring-brand-500 text-brand-500 rounded-full px-4 hover:bg-brand-500/10 w-full sm:w-[180px] justify-center">
            <span class="truncate">Cerere online</span>
        </UButton>
        <UButton icon="i-ph-whatsapp-logo-light" variant="outline" to="https://wa.me/+37378805060" @click="clickContact = true" target="_blank" title="Scrieți-ne pe WhatsApp"
            class="ring-[#14ac4c] text-[#14ac4c] hover:bg-[#14ac4c]/10 rounded-full px-4 w-full sm:w-[180px] justify-center">
            <span class="truncate">WhatsApp</span>
        </UButton>
    </div>
</template>