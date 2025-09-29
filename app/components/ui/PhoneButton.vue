<script setup>
    const props = defineProps({
        light: {
            default: false,
            type: Boolean,
        },
        hideText: {
            default: false,
            type: Boolean,
        }
    })

    const { trackEvent } = useFacebookPixel()
    const clickContact = ref(false)
    watch(clickContact, (val) => {
        if(val) {
            trackEvent('Contact');
        }
    }, { once: true })


    let cls = 'h-10 rounded-full gap-4'

    if(props.hideText) {
        cls = 'w-10 rounded-xl'
    }

    cls += ' inline-flex border items-center justify-center'

    if(props.light) {
        cls += ' border-brand-500 text-brand-500 px-4'
    } else {
        cls += ' bg-brand-500 text-white border-brand-500'
    }

    

</script>
<template>
    <a href="tel:+37378805060" @click="clickContact = true" title="+373 78 80 50 60" :class="cls" class="px-4">
        <IconsPhone class="w-5 h-5 phone" />
        <div v-if="!hideText" class="tracking-widest">078 80 50 60</div>
    </a>
</template>