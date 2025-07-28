<script setup>
    const props = defineProps({
        type: {
            type: String,
            default: 'pf',
        },
    })

    const creditTypes = {
        pf: {
            title: 'Credit pentru nevoi personale',
            link: 'credit-pentru-nevoi-personale', 
            icon: 'i-ph-shopping-cart-duotone',
            list: [
                'Vârsta de la 23 de ani',
                'Sursă de venit stabilă',
                'Buletin de identitate valabil',
                'Responsabilitate financiară',
            ]
        },
        pj: {
            title: 'Credit pentru afaceri',
            link: 'credit-pentru-afaceri', 
            icon: 'i-ph-chart-bar-duotone',
            list: [
                'Activitate economică validă',
                'Actele de înființare',
                'Evidența contabilă',
                'Extras bancar - minim 3 luni',
            ]
        },
    }
</script>
<template>
    <nuxt-link :to="creditTypes[type].link" class="card group">
        <div class="flex items-center justify-center mb-8">
            <UIcon :name="creditTypes[type].icon" class="w-16 h-16 text-green-400 text-center mx-auto group-hover:scale-105 transition-all duration-300" />
        </div>
        <h2 class="text-2xl font-semibold text-center mb-10">{{ creditTypes[type].title }}</h2>
        <div class="space-y-4">
            <div v-for="item in creditTypes[type].list" class="flex text-xl items-center gap-2">
                <UIcon name="i-ph-dot-duotone" class="w-5 h-5 flex-shrink-0 text-gray-400" />
                {{ item }}
            </div>
        </div>
    </nuxt-link>
</template>