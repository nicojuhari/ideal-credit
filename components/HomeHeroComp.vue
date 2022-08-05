<script setup>
import BaseButton from './ui/BaseButton.vue';

</script>
<template>
    <div class="">
        <div class="container my-24 md:my-36">
            <h1 class="text-center hero-title">Credite rapide
                <span class="title flex justify-center mt-2">pentru consum și business</span>
            </h1>

            <div class="flex flex-col md:flex-row gap-6 justify-center items-center md:items-end mt-6 md:mt-12">
                <a class="btn btn-primary w-60 md:w-auto" href="tel:+37378805060">
                    <IconsPhone class="w-6" />
                    <span>078 80 50 60</span>
                </a>
                <!-- <BaseButton class="btn-outline w-60 md:w-auto">Calculator de credit</BaseButton> -->
            </div>
        </div>
        <div class="text-center text-xl md:text-4xl my-10 md:my-20 text-brand-black text-opacity-60">Garantăm dobînzi avantajoase <br>și fară comisioane ascunse</div>
    </div>
</template>