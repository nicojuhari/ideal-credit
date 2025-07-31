<script setup>

const props = defineProps({
    toHeroSection: {
        type: Boolean,
        default: false
    }
})
const { trackEvent } = useFacebookPixel()
const phoneNumber = '+37378805060';
// const viberUrl = `viber://chat?number=${encodeURIComponent(phoneNumber)}`;

// let cls = 'flex flex-col justify-center items-center gap-3 px-4 rounded-lg aspect-square w-full hover:scale-105 transition-all duration-300'

const computedCls = computed(() => {
    return !props.toHeroSection ?  'lg:grid-cols-4' : ''
})

const clickContact = ref(false)

watch(clickContact, (val) => {
    if(val) {
        trackEvent('Contact');
    }
}, { once: true })

</script>
<template>
    <!-- <div v-if="toHeroSection" class="text-gray-300 text-center text-lg">Solicită un credit acum!</div> -->
    <div class="flex flex-col sm:flex-row justify-center gap-6 sm:gap-6 relative">
        <UButton icon="i-ph-pencil-simple-line" variant="outline" size="xl" to="/cerere-de-credit-online" title="Cerere de credit online" 
        class="ring-brand-500 text-brand-500 rounded-full px-4 hover:bg-brand-500/10 w-full sm:w-[180px] justify-center">
            <span class="truncate">Cerere online</span>
        </UButton>
        <UButton icon="i-ph-whatsapp-logo-light" variant="outline" size="xl" to="https://wa.me/+37378805060" @click="clickContact = true" target="_blank" title="Scrieți-ne pe WhatsApp"
            class="ring-[#14ac4c] text-[#14ac4c] hover:bg-[#14ac4c]/10 rounded-full px-4 w-full sm:w-[180px] justify-center">
            <span class="truncate">WhatsApp</span>
        </UButton>
    </div>
</template>