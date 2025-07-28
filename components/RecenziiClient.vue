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
