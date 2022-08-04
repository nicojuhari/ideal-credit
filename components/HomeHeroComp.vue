<script setup>
import BaseButton from './ui/BaseButton.vue';

</script>
<template>
    <section>
        <div class="container mt-16 md:mt-32">
            <h1 class="text-center hero-title">Credite nebancare
                <span class="title flex justify-center mt-2">pentru consum și business</span>
            </h1>
            <div class="flex flex-col md:flex-row gap-6 mt-12 justify-center items-center md:items-end">
                <BaseButton class="btn-primary" href="tel:+37378805060">
                    <IconsPhone class="w-6" />
                    <span>078 80 50 60</span>
                </BaseButton>
                <BaseButton class="btn-outline">Calculator de credit</BaseButton>
            </div>
        </div>
    </section>
</template>