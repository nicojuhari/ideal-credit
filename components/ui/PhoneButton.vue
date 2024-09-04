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

    let cls = 'h-10 rounded-full gap-4'

    if(props.hideText) {
        cls = 'w-10 rounded-xl'
    }

    cls += ' inline-flex border items-center justify-center'

    if(props.light) {
        cls += ' border-brand-color text-brand-color px-4'
    } else {
        cls += ' bg-brand-color text-white border-[#f09306]'
    }

</script>
<template>
    <a href="tel:+37378805060" title="+373 78 80 50 60" :class="cls">
        <IconsPhone class="w-6 h-6 phone" />
        <div v-if="!hideText" class="tracking-widest">078 80 50 60</div>
    </a>
</template>