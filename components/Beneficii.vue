<script setup>
    let list = [
        '0% comision de acordare',
        'Dobînzi fixe',
        'Fără comisioane ascunse',
        'Rambursare anticipată fără penalități',
        'Reduceri pentru clienții cu istorie creditară pozitivă',
    ]
</script>
<template>
    <div class="card light">
        <div class="h-24 md:h-40 mb-8">
            <img src="/light.png" class="h-full m-auto"/>
        </div>
        <div class="">
             <h2 class="card-title text-center">Avantaje</h2>
             <div class="flex gap-4 flex-col">
                <div v-for="item in list" class="flex text-xl">
                    <Icon name="ph:dot-outline-light" class="w-8 h-8 flex-shrink-0 text-brand-color text-opacity-50"/>
                    {{ item }}
                </div>
            </div>
        </div>
        
       
    </div>
</template>