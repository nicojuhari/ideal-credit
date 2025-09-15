<template>
    <NuxtLink to="/cerere-de-credit-online" title="Cerere de credit online" 
        class="rounded-full overflow-hidden px-4 justify-center gap-4 max-w-[190px] group hover:bg-brand-400/10 flex mx-auto items-center border-1 border-brand-500 text-brand-500 h-10 transition-all duration-300">
        <span class="truncate">Cerere Online</span>
        <UIcon name="i-ph-arrow-up-right" class="w-5 h-5 shrink-0 will-change-transform group-hover:-translate-y-0.5 group-hover:translate-x-1 transition-all duration-500 ease-out animate-cta-icon" />
    </NuxtLink>
</template>

<style scoped>
@keyframes cta-slide-up {
    from {
        transform: translate(-6px, 4px);
        opacity: 0;
    }
    to {
        transform: translate(0, 0);
        opacity: 1;
    }
}

.animate-cta-icon {
    animation: cta-slide-up 0.6s ease-out 0.8s both;
}
</style>