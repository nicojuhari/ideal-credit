<script setup>
    const list = [
        'Vârsta între 23 și 65 de ani',
        'Sursă de venit stabilă',
        'Buletin de identitate valabil',
        'Responsabilitate pentru rambursarea creditului',
    ]
</script>
<template>
    <div class="card light">
        <div class="card-title text-center">Condițiile de creditare</div>
        <div class="space-y-6">
            <div v-for="item in list" class="flex text-xl items-center gap-4">
                <Icon name="i-ph-check" class="w-5 h-5 flex-shrink-0 text-brand-green" />
                {{ item }}
            </div>
        </div>
        <div class="inline-flex gap-4 mt-8 items-center p-4 rounded-md bg-brand-gray-dark">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 shrink-0 text-brand-color" fill="currentColor"  viewBox="0 0 256 256"><path d="M128 26a102 102 0 1 0 102 102A102.2 102.2 0 0 0 128 26Zm0 192a90 90 0 1 1 90-90a90.1 90.1 0 0 1-90 90Zm14-42a6 6 0 0 1-6 6h-8a6 6 0 0 1-6-6v-50h-2a6 6 0 0 1 0-12h8a6 6 0 0 1 6 6v50h2a6 6 0 0 1 6 6Zm-26-92a10 10 0 1 1 10 10a10 10 0 0 1-10-10Z"/></svg>
            <span>În funcție de evaluarea riscului de credit, se poate solicita garanții adiționale: fidejusiune (garant) sau gaj (imobil).</span>
        </div>
    </div>
</template>