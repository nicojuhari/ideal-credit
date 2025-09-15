<script setup lang="ts">
    const list = [
        {
            title: 'Credit pentru afaceri',
            link: '/credit-pentru-afaceri',
            icon: 'i-ph-chart-line-up-light'
            
        },
        {
            title: 'Credit pentru nevoi personale',
            link: '/credit-pentru-nevoi-personale',
            icon: 'i-ph-shopping-cart-light'
        },
        {
            title: 'Credit pînă la salariu',
            link: '/credit-pina-la-salariu',
            icon: 'i-ph-hand-coins-light'
        }
    ]
</script>
<template>
    <div class="flex flex-wrap items-center justify-center gap-6 gap-y-8">
        <NuxtLink
        class="border h-10 border-brand-500 flex items-center px-6 rounded-full text-brand-500 gap-2.5 shrink-0"
        v-for="item in list" 
        :key="item.link" :to="item.link" :title="item.title">
            <UIcon :name="item.icon" v-if="item.icon" class="w-5 h-5" />
            {{ item.title }}
    </NuxtLink>
    </div>
</template>


