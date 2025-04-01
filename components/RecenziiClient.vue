<script setup>
const items = [
  '/recenzii/ideal-credit-recenzie-1.webp',
  '/recenzii/ideal-credit-recenzie-2.webp',
  '/recenzii/ideal-credit-recenzie-3.webp',
]
</script>
<template>
    <div class="card">
        <h2 class="card-title text-center">Ce spun clienții noștri?</h2>
        <div class="flex flex-col gap-4 items-center">
            <div class="flex items-center justify-center gap-2">
                <UIcon name="i-ph-star-fill" class="text-brand-500 text-2xl shrink-0" v-for="i in 5" :key="i" />
            </div>
            <UCarousel v-slot="{ item }" :items="items" loop :autoplay="{ delay: 4000 }" class="w-full mx-auto">
                <img :src="item" class="rounded-lg mx-auto" alt="Recenzie client despre Ideal Credit">
            </UCarousel>
        </div>
    </div>
</template>
