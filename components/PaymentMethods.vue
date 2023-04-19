<script setup>
const list = [
    'În unul din oficiile companiei Ideal Credit',
    'Prin intermediul băncii "VictoriaBank"',
    'La orice oficiu poștal din Republica Moldova',
]
</script>
<template>
    <div class="card mt-8 md:mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="">
            <h2 class="card-title text-center">Metode de achitare</h2>
            <div class="flex gap-4 flex-col">
                <div v-for="item in list" class="flex items-center gap-2 text-xl">
                    <Icon name="material-symbols:check-small-rounded" class="w-8 h-8 flex-shrink-0 text-brand-color"/>
                    {{ item }}
                </div>
            </div>
        </div>
        <div class="grid place-content-center">
            <img src="/wallet.png" class="h-44 md:h-52 m-auto"/>
        </div>
    </div>
</template>