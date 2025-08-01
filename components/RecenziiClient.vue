<script setup>
const imageReviews = [
    '/recenzii/ideal-credit-recenzie-1.webp',
    '/recenzii/ideal-credit-recenzie-2.webp',
    '/recenzii/ideal-credit-recenzie-3.webp',
]

const textReviews = [
    {
        name: 'Alexandru',
        text: 'Am primit creditul în 24 de ore, fără bătăi de cap. Serviciu rapid și profesionist.',
    },
    {
        name: 'Maria',
        text: 'Transparență totală, fără comisioane ascunse. Dobândă negociabilă. Am investit în afacerea mea și am crescut.',
    },
    {
        name: 'Elena',
        text: 'Am luat credit de consum cu dobândă avantajoasă. Am renovat bucătăria așa cum mi-am dorit.'
    },
    {
        name: 'Victor',
        text: 'Banca m-a refuzat, dar Ideal Credit m-a ajutat în 2 zile să cumpăr mașina dorită. Fără probleme.',
    },
    {
        name: 'Ion',
        text: 'Am modernizat magazinul în 3 luni. Proces simplu, dobândă fixă și consiliere pe măsură',
    },
    {
        name: 'Ana',
        text: 'Am achiziționat utilaje pentru atelier în 2 zile, și acestea au ajutat să mă dezvolt.',
    },
]

// Combine both types of reviews
const allReviews = [...imageReviews, ...textReviews]
</script>

<template>
    <div>
        <div class="flex items-center justify-center gap-1 mb-6">
            <UIcon name="i-ph-star-fill" class="text-brand-500 text-lg shrink-0" v-for="i in 5" :key="i" />
        </div>
        <h3 class="title text-center">Ce spun clienții noștri?</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            <div v-for="item in allReviews" :key="item" class="bg-white rounded-lg">
                <!-- Image Review -->
                <img v-if="typeof item === 'string'" :src="item" class="rounded-lg mx-auto" alt="Recenzie client despre Ideal Credit">
                <!-- Text Review -->
                <div v-else class="p-6 max-w-sm mx-auto text-black">
                    <div class="font-semibold text-lg">{{ item.name }}</div>
                    <div class="text-gray-800 mt-2 text-sm line-cslamp-3">{{ item.text }}</div>
                </div>
            </div>
             
        </div>
    </div>
</template>
