<script setup>
const list = [
    'În unul din oficiile companiei Ideal Credit',
    'Prin intermediul băncii "VictoriaBank"',
    'La orice oficiu poștal din Republica Moldova',
    'Online Banking',
]
</script>
<template>
    <div class="card grid grid-cols-1 md:grid-cols-2 items-center gap-4 md:gap-6">
        <div>
            <h2 class="card-title text-center">Metode de achitare</h2>
            <div class="flex gap-4 flex-col">
                <div v-for="item in list" class="flex text-xl">
                    <Icon name="ph:dot-outline-light" class="w-8 h-8 flex-shrink-0 text-brand-color text-opacity-50"/>
                    {{ item }}
                </div>
            </div>
        </div>
        <div class="-order-1 md:order-1">
            <div class="h-32 md:h-64 mb-8 md:mb-0">
                <img src="/how-to-pay.png" class="h-full m-auto"/>
            </div>
        </div>
    </div>
</template>