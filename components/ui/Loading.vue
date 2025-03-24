<script setup inherit-attrs="false">
    // get the props from the parent component
    
    //get passed classes
    const classes = defineProps({
        class: {
            type: String,
            default: 'w-24 h-24 text-orange-color'
        },
        local: {
            type: Boolean,
            default: false
        }
    })
    
</script>
<template>
    <div class="bg-black bg-opacity-60 flex w-full h-full top-0 left-0" :class="local ? 'absolute' : 'fixed z-[60]'">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="relative m-auto" :class="class">
            <path fill="currentColor" d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" opacity=".25"/>
            <path fill="currentColor" d="M10.72,19.9a8,8,0,0,1-6.5-9.79A7.77,7.77,0,0,1,10.4,4.16a8,8,0,0,1,9.49,6.52A1.54,1.54,0,0,0,21.38,12h.13a1.37,1.37,0,0,0,1.38-1.54,11,11,0,1,0-12.7,12.39A1.54,1.54,0,0,0,12,21.34h0A1.47,1.47,0,0,0,10.72,19.9Z">
                <animateTransform attributeName="transform" dur="0.75s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"/>
            </path>
        </svg>
    </div>
</template>