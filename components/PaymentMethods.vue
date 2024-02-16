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
        description: 'Rambursarea împrumutului în unul din <a href="/contacte#adresa-oficiilor" class="underline">oficiile companiei</a>',
        comision: 0,
    },
    {
        title: 'Victoriabank',
        description: 'Rambursarea creditului în numerar la orice sucursală or filială a băncii Victoriabank',
        comision: '7 lei',
        comision_desc: 'pentru fiecare plată'
    },
    {
        title: 'VB24 Web',
        description: 'Achitarea creditului online prin aplicația mobilă sau web a băncii Victoriabank',
        comision: '3 lei',
        comision_desc: 'pentru fiecare plată'
    },
    {
        title: 'Online Banking',
        description: 'Transfer bancar sau de pe card pe contul IBAN al companiei Ideal Credit',
        comision: '3.5 lei',
        comision_desc: 'pentru fiecare plată'
    },
     {
        title: 'Poșta Moldovei',
        description: 'Achitarea creditului la orice oficiu poștal din Republica Moldova',
        comision: '6 lei',
        comision_desc: 'pentru fiecare plată'
    }
]
</script>
<template>
    <div class="grid grid-cols-2 gap-4 md:gap-6">
        <div v-for="(item,idx) in list2" :key="item.title" class="bg-brand-black px-4 py-6 rounded-lg flex flex-col flex-grow" :class="{'col-span-2': list2.length == idx + 1 }">
            <div class="mb-3 flex items-center flex-wrap gap-2 justify-between">
                <span class="text-brand-color text-lg md:text-2xl">{{ item.title }}</span>
                <span class="text-xs md:text-sm opacity-80">
                    comision {{ item.comision }} <span v-if="item.comision">/ plată</span>
                </span>
            </div>
            <div class="text-sm md:text-base" v-html="item.description"></div>
        </div>
    </div>
</template>