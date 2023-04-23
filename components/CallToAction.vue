<script setup>

</script>
<template>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
            <h3 class="text-3xl font-bold mb-4 text-center">Solicită un credit acum!</h3>
        </div>
        <div class="flex gap-6 items-center justify-center flex-col md:flex-row">
            <NuxtLink to="/cerere-online" class="btn btn-primary btn-outline">Cerere Online</NuxtLink>
            <!-- <button class="btn btn-secondary">Button</button> -->
            <UiPhoneButton />
        </div>

    </div>
</template>