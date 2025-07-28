<script setup>

const list = [
    {
        title: 'Oficiu Ideal Credit',
        description: 'În unul din <a href="/contacte#adresa-oficiilor" class="link">oficiile companiei</a>',
    },
    {
        title: 'Online Banking',
        description: 'Transfer bancar sau de pe card pe contul IBAN al companiei Ideal Credit',
    },
    {
        title: 'VictoriaBank',
        description: 'La orice filială a băncii VictoriaBank',
    },
     {
        title: 'Poșta Moldovei',
        description: 'Achitarea creditului la orice oficiu poștal din Republica Moldova',
    }
]
</script>
<template>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
        <div v-for="item in list" :key="item.title" class="card">
            <h3 class="text-xl font-medium">{{ item.title }}</h3>
            <p class="text-gray-400 mt-2" v-html="item.description"></p>
        </div>
    </div>
</template>