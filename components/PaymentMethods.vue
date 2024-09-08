<script setup>
const list = [
    'În unul din oficiile companiei Ideal Credit',
    'În caseria Prin intermediul băncii "VictoriaBank"',
    'La orice oficiu poștal din Republica Moldova',
    'Online Banking',
]

const list2 = [
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
    <div class="grid grid-cols-2 gap-4 md:gap-6">
        <div v-for="(item,idx) in list2" :key="item.title"
            class="card flex-grow"
            :class="{'col-span-2': list2.length == idx + 1 }">
            <div class="mb-2 text-white text-lg md:text-2xl">
                {{ item.title }}
            </div>
            <div class="text-sm md:text-base text-gray-400" v-html="item.description"></div>
        </div>
    </div>
</template>