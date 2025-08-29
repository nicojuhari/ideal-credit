<script setup>
    useHead({
    title: '404 - Această pagină nu există!',
    meta: [
        {
            name: 'description',
            content: '404 - Această pagină nu există!',
        },
    ],
})
</script>
<template>
    <div class="min-h-screen grid place-content-center">
        <div class="text-center">
            <div class="flex flex-col gap-4 justify-center items-center">
                <h1 class="text-7xl font-bold text-brand-500">404</h1>
                <p class="text-gray-300 text-4xl">Această pagină nu există!</p>
                <div class="mt-10 text-lg">
                    <UButton @click="clearError({ redirect: '/' })" color="success" variant="solid" size="xl">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
                        </svg>
                        Înapoi la pagina principală
                    </UButton>
                </div>
            </div>
        </div>
    </div>
</template>