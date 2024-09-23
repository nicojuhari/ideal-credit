<script setup>
    defineProps({
        benefits: {
            type: Array,
            required: true
        }
    })
</script>
<template>
    <div class="space-y-2">
        <div v-for="benefit in benefits" :key="benefit.id" class="flex items-center gap-2.5">
            <Icon name="i-ph-check" class="text-brand-green w-5 h-5 shrink-0" />
            <span class="font-light text-lg">{{ benefit }}</span>
        </div>
    </div>
</template>