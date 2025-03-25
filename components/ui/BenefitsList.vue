<script setup>
    defineProps({
        items: {
            type: Array,
            required: true
        }
    })
</script>
<template>
    <div class="space-y-2">
        <div v-for="item in items" :key="item.id" class="flex items-center gap-2.5">
            <UIcon name="i-ph-check" class="text-green-600 w-5 h-5 shrink-0" />
            <span class="font-light text-lg">{{ item }}</span>
        </div>
    </div>
</template>