<script setup>
    let list = [
        '0% comision de acordare',
        'Dobânzi fixe',
        'Fără comisioane ascunse',
        'Rambursare anticipată fără comision',
        'Reduceri pentru clienții cu istorie creditară pozitivă',
    ]
</script>
<template>
    <div class="card light">
        <div class="h-24 md:h-40 mb-8">
            <img src="/avantaje-credite.webp" class="h-full m-auto" alt="avantaje-credite" title="avantaje-credite"/>
        </div>
        <div class="">
             <h2 class="card-title text-center">Avantaje</h2>
             <div class="flex gap-4 flex-col">
                <div v-for="item in list" class="flex text-xl items-center">
                    <Icon name="i-ph-check-light" class="w-6 h-6 flex-shrink-0 text-green-600 text-opacity-70 mr-2"/>
                    {{ item }}
                </div>
            </div>
        </div>
    </div>
</template>