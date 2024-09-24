<script setup>

const list = [
    {
        title: 'Ideal Credit',
        description: 'În unul din <a href="/contacte#adresa-oficiilor" class="underline">oficiile companiei</a>',
    },
    {
        title: 'Victoriabank',
        description: 'La orice filială a băncii Victoriabank',
    },
    {
        title: 'VB24 Web',
        description: 'Achitarea creditului online prin aplicația mobilă sau web a băncii Victoriabank',
    },
    {
        title: 'Online Banking',
        description: 'Transfer bancar sau de pe card pe contul IBAN al companiei Ideal Credit',
    },
     {
        title: 'Poșta Moldovei',
        description: 'Achitarea creditului la orice oficiu poștal din Republica Moldova',
    }
]
</script>
<template>
    <div class="space-y-6 card">
            <h2 class="card-title text-center">Metode de achitare</h2>
            <div  v-for="item in list" :key="item.title" class="text-lg">
                <span class="shrink-0 font-medium">{{ item.title }} - </span> <span class="text-brand-gray-dark" v-html="item.description"></span>
            </div>
        </div>
</template>