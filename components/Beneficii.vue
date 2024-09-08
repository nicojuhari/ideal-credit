<script setup>
    let list = [
        '0% comision de acordare',
        'Dobânzi fixe',
        'Fără comisioane',
        'Rambursare anticipată fără comision',
        'Reduceri pentru clienții cu istorie creditară pozitivă',
    ]
</script>
<template>
    <div class="card light space-y-8">
        <!-- <NuxtImg src="/avantaje-credite.webp" alt="Avantaje Credite" height="124" class="m-auto" /> -->
        <img src="/avantaje-credite.webp" alt="Avantaje Credite" height="128" width="128" class="m-auto h-32 object-contain" />
        <div>
            <h3 class="card-title text-center">Avantaje</h3>
            <div class="space-y-4">
                <div v-for="item in list" class="flex text-xl items-center gap-2">
                    <Icon name="i-ph-check-light" class="w-6 h-6 shrink-0 text-green-600 text-opacity-70" />
                    <span>{{ item }}</span>
                </div>
            </div>
        </div>
    </div>
</template>