<script setup>

const reviews = [
    {
        name: 'Alexandru, Chișinău',
        text: 'Mulțumesc! Am primit creditul în 24 de ore, fără bătăi de cap. Echipa a fost foarte profesionistă.',
    },
    {
        name: 'Maria, Antreprenoare',
        text: 'Sunt recunoscătoare pentru transparență. Fără comisioane ascunse, dobânda a fost negociată și am putut investi în afacere.',
    },
    {
        image: '/recenzii/ideal-credit-recenzie-1.webp'
    },
    {
        name: 'Elena',
        text: 'Sunt foarte mulțumită. Am luat credit de consum cu dobândă bună și am renovat bucătăria cum îmi doream.'
    },
    {
        image: '/recenzii/ideal-credit-recenzie-2.webp'
    },
    {
        name: 'Victor',
        text: 'Mulțumesc Ideal Credit — banca m-a refuzat, dar voi m-ați ajutat în 2 zile să cumpăr mașina dorită.',
    },
    {
        image: '/recenzii/ideal-credit-recenzie-3.webp'
    },
    {
        name: 'Ion, Proprietar magazin',
        text: 'Am modernizat magazinul în 3 luni. Proces simplu, dobândă fixă și consultanță. Sunt recunoscător',
    },
    {
        name: 'Ana',
        text: 'Am cumpărat utilaje în 2 zile și asta ne-a ajutat să creștem. Mulțumim pentru sprijin!',
    },
]

</script>

<template>
    <div>
        <h2 class="title text-center">Ce spun clienții noștri?</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            <div v-for="item in reviews" :key="typeof item === 'string' ? item : item.name" class="card flex flex-col">
                <!-- Image Review -->
                 <div  v-if="item?.image" class="m-auto">
                     <img :src="item.image" class="rounded-lg m-auto mb-4" alt="Recenzie client despre Ideal Credit">
                    <div class="flex items-center justify-center gap-1">
                        <UIcon name="i-ph-star-fill" class="text-brand-500 text-lg shrink-0" v-for="i in 5" :key="i" />
                    </div>
                 </div>
                <!-- Text Review -->
                <div v-else class="p-6 max-w-sm mx-auto">
                    <p class="text-gray-400 line-cslamp-3">{{ item.text }}</p>
                    <p class="text-xl mt-4">
                       {{ item.name }}
                    </p>
                </div>
                
            </div>
             
        </div>
    </div>
</template>
