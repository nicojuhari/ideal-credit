<script setup>
    const props = defineProps({
        type: {
            type: String,
            default: 'pf',
        },
    })

    const { title, link, icon, list } = creditConditionsSchema[props.type]

</script>
<template>
    <div class="card group">
        <div class="flex items-center justify-center mb-8">
            <UIcon :name="icon" class="w-16 h-16 text-blue-500 text-center mx-auto group-hover:scale-105 transition-all duration-300" />
        </div>
        <h2 class="text-2xl font-semibold text-center mb-10">{{ title }}</h2>
        <div class="space-y-4">
            <div v-for="item in list" class="flex text-xl items-center gap-2">
                <UIcon name="i-ph-dot-duotone" class="w-5 h-5 flex-shrink-0 text-gray-400" />
                {{ item }}
            </div>
        </div>
        <div class="mt-10 text-center">
            <UButton :to="link" icon="i-ph-arrow-right-duotone" variant="outline" color="success" label="Mai multe detalii"></UButton>
        </div>
    </div>
</template>