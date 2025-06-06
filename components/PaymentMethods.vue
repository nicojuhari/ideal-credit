<script setup>

const list = [
    {
        title: 'Ideal Credit',
        description: 'În unul din <a href="/contacte#adresa-oficiilor" class="underline text-green-600">oficiile companiei</a>',
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
            <h4 class="card-title text-center">Metode de achitare a creditului</h4>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <ul class="list-disc list-inside space-y-8 md:space-y-6">
                <li v-for="item in list" :key="item.title" class="flex gap-2 items-center">
                    <UIcon name="i-ph-dot-fill" class="w-5 h-5 text-brand-500/50 shrink-0" />
                    <div>
                        <span class="text-xl font-medium">{{ item.title }}:</span> <span class="text-gray-300" v-html="item.description"></span>
                    </div>
                </li>
            </ul>
            <img src="/ideal-credit-metode-de-achitare.webp" alt="Metode de achitare" class="w-[60%] mx-auto -order-1 lg:order-2 -scale-x-100">
            </div>
        </div>
</template>