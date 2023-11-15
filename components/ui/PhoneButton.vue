<script setup>
    defineProps({
            light: {
                default: false,
                type: Boolean,
            }
        }
    )
</script>
<template>
    <a href="tel:+37378805060" title="+373 78 80 50 60"
        class="h-10 px-4 border rounded-full inline-flex gap-4 items-center justify-center" 
        :class="light ? 'border-brand-color text-brand-color' : 'bg-brand-color text-white border-[#f09306]'">
        <IconsPhone class="w-6 h-6 phone" />
        <div class="tracking-widest">078 80 50 60</div>
    </a>
</template>