<script setup>

</script>
<template>
    <div class="py-16 md:py-24">
        <div class="container grid grid-cols-1 md:grid-cols-12 gap-6">
            <div class="flex flex-col md:col-span-8 h-full">
                <h1 class="hero-title text-center md:text-left">Credite rapide</h1>
                <h2 class="subtitle mt-3 text-center md:text-left">Oferim credite pentru nevoi personale și afaceri,<br>cu dobânzi mici și fără comisioane.</h2>
                <UiRecenziiSlider class="mt-8"/>
                <UiHeroSectionCTA class="my-10 md:mt-16" />
            </div>
            <div class="md:col-span-4 grid place-items-center">
                <TipuriCredite class="cs-blur cs-blur--center" />
            </div>
        </div>
    </div>
</template>