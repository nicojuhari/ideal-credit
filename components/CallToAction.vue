<script setup>

</script>
<template>
    <div class="grid grid-cols-1 md:grid-cols-1 gap-8">
        <div>
            <h3 class="title font-semibold text-center mt-8 mb-4 md:my-4">Solicită un credit acum!</h3>
        </div>
        <div class="flex gap-8 items-center justify-center flex-col md:flex-row">
            <NuxtLink to="/cerere-de-credit-online" class="btn btn-primary btn-outline w-48">Cerere Online</NuxtLink>
            <!-- <button class="btn btn-secondary">Button</button> -->
            <UiPhoneButton class="w-48" />
        </div>
    </div>
</template>