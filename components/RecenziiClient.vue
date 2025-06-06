<script setup>
const imageReviews = [
    '/recenzii/ideal-credit-recenzie-1.webp',
    '/recenzii/ideal-credit-recenzie-2.webp',
    '/recenzii/ideal-credit-recenzie-3.webp',
]

const textReviews = [
    {
        name: 'Alexandru',
        text: 'Am primit creditul în 24 de ore, fără probleme. Am fost mulțumit de serviciu și de rapiditatea răspunsului.',
    },
    {
        name: 'Maria',
        text: 'Mi-a plăcut transparența, zero comisioane ascunse și rate negociabile. Am investit în afacerea mea și am reușit să mă dezvolt.',
    },
    {
        name: 'Elena',
        text: 'Am luat un credit de consum cu dobândă avantajoasă și totul a fost clar din prima clipă. Am renovat bucătăria așa cum mi-am propus',
    },
    {
        name: 'Victor',
        text: 'Am cumpărat mașina dorită în 2 zile, fără probleme. Banca ma refuzat să-mi ofere un credit, iar Ideal Credit m-a ajutat.',
    }
]

// Combine both types of reviews
const allReviews = [...imageReviews, ...textReviews]
</script>

<template>
    <div class="card">
        <h3 class="card-title text-center">Ce spun clienții noștri?</h3>
        <div class="flex flex-col gap-4 items-center">
            <UCarousel v-slot="{ item }" :ui="{ item: 'basis-1/1 lg:basis-1/2' }" :items="allReviews" loop :autoplay="{ delay: 2600 }" class="w-full mx-auto">
                <!-- Image Review -->
                <img v-if="typeof item === 'string'" :src="item" class="rounded-lg mx-auto" alt="Recenzie client despre Ideal Credit">
                <!-- Text Review -->
                <div v-else class="p-6 rounded-lg max-w-sm mx-auto bg-white text-black">
                    <div class="font-semibold text-lg">{{ item.name }}</div>
                    <div class="text-gray-800 mt-2 text-sm line-clamp-3">{{ item.text }}</div>
                </div>
            </UCarousel>
             <div class="flex items-center justify-center gap-2">
                <UIcon name="i-ph-star-fill" class="text-brand-500 text-2xl shrink-0" v-for="i in 5" :key="i" />
            </div>
        </div>
    </div>
</template>
