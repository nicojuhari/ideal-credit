<script setup>

</script>
<template>
    <header>
        <div class="p-4 w-full max-w-6xl mx-auto">
            <div class="flex justify-between items-center gap-4">
                <NuxtLink to="/">
                    <img src="/ideal-credit-logo.svg" width=60 height=60 />
                </NuxtLink>
                <!-- <nav class="flex items-center gap-6">
                    <NuxtLink to="/despre-noi">Despre noi</NuxtLink>
                    <NuxtLink to="/contacte">Contacte</NuxtLink>
                </nav> -->
                <a href="tel:+373079066566"
                     class="flex gap-2 items-center text-brand font-semibold bg-brand bg-opacity-20 border border-brand py-2 px-4 rounded-full">
                    <IconsPhone class="w-5 h-5" />
                    <span>0790 66566</span>
                </a>
            </div>
        </div>
    </header>
</template>