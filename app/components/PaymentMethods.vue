<script setup>

const list = [
    {
        title: 'În numerar',
        description: 'În unul din <a href="/contacte#adresa-oficiilor" class="link">oficiile companiei</a> Ideal Credit.',
    },
    {
        title: 'Online Banking',
        description: 'Transfer bancar/de pe card pe contul IBAN al Ideal Credit.',
    },
    {
        title: 'Bancă',
        description: 'La orice filială a băncii VictoriaBank din țară.',
    },
     {
        title: 'Poșta',
        description: 'La orice oficiu poștal din Republica Moldova.',
    }
]
</script>
<template>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
        <div v-for="item in list" :key="item.title" class="card">
            <h3 class="text-xl">{{ item.title }}</h3>
            <p class="text-gray-400 mt-4" v-html="item.description"></p>
        </div>
    </div>
</template>