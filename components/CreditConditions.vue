<script setup>
    const props = defineProps({
        type: {
            type: String,
            default: 'pf',
        },
    })

    const { title, list } = creditConditionsSchema[props.type]

</script>
<template>
    <div class="card">
        <h3 class="text-xl text-center mb-8 mt-2 md:mt-0">{{ title }}</h3>
        <ul class="list-outside list-none md:ml-6 space-y-1.5">
            <li class="font-light flex items-center gap-2.5" v-for="item in list" :key="item">
                <UIcon name="i-ph-check" class="w-5 h-5 flex-shrink-0 text-green-400" />
                <span class="text-gray-400 text-xl">{{ item }}</span>
            </li>
        </ul>
    </div>
</template>