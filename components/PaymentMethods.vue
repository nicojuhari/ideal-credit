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
            <ul class="list-disc list-inside space-y-8 md:space-y-6">
                <li v-for="item in list" :key="item.title" class="flex gap-2 items-center">
                    <Icon name="i-ph-dot-fill" class="w-5 h-5 text-orange-color shrink-0" />
                    <div>
                        <span class="text-xl font-medium">{{ item.title }}:</span> <span class="text-orange-gray-dark" v-html="item.description"></span>
                    </div>
                </li>
            </ul>
        </div>
</template>