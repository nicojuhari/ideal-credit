<script setup>
    import { ref } from 'vue'
    import { useRoute } from 'vue-router';
    
    const route = useRoute();
    const showMenu = ref(false)

    const toggleMenu = () => {
        showMenu.value = !showMenu.value
        document.body.classList.toggle('menu-open')
    }

    watch(route, () => {
        showMenu.value = false
        document.body.classList.remove('menu-open')
    })
</script>
<template>
    <header
        class="border-b border-brand-color border-opacity-10 bg-brand-bg bg-opacity-70 sticky top-0 backdrop-blur-lg z-10">
        <div class="container py-4">
            <div class="flex justify-between items-center gap-4">
                <NuxtLink to="/" class="flex gap-3 items-center" title="Ideal Credit">
                    <IconsLogo class="w-10" />
                    <p class="text-lg mb-0">Ideal Credit</p>
                </NuxtLink>
                <div>
                    <nav class="items-center gap-6 hidden md:flex">
                        <NuxtLink to="/refinantare-credite" title="Refinanțare Credite">Refinanțare</NuxtLink>
                        <NuxtLink to="/despre-noi" title="Despre noi">Despre noi</NuxtLink>
                        <NuxtLink to="/contacte" title="Contacte">Contacte</NuxtLink>
                        <UiPhoneButton light/>
                    </nav>
                    <div class="flex md:hidden">
                        <div @click="toggleMenu" class="p-2 bg-brand-black cursor-pointer rounded-full">
                            <IconsBurgerMenu />
                        </div>
                        <div v-if="showMenu" @click="toggleMenu"
                            class="fixed left-0 top-0 bg-black bg-opacity-70 w-full h-screen z-50"></div>
                        <transition name="menu-slide">
                            <div v-if="showMenu"
                                class="absolute top-0 left-0 bg-brand-black mobile-dropdown shadow-md w-full flex flex-col">
                                <div class="p-4 flex justify-end">
                                    <div class="p-2 bg-brand-black cursor-pointer rounded-full">
                                        <IconsClose class="cursor-pointer m-auto" @click="toggleMenu" />
                                    </div>
                                </div>
                                <NuxtLink to="/" title="Pagina Principală"
                                    class="flex w-full font-medium p-4 border-b border-opacity-30 border-gray-300">
                                    Pagina Principală
                                </NuxtLink>
                                <NuxtLink to="/refinantare-credite" title="Refinanțare Credite"
                                    class="flex w-full font-medium p-4 border-b border-opacity-30 border-gray-300">
                                    Refinanțare
                                </NuxtLink>
                                <NuxtLink to="/despre-noi" title="Despre noi"
                                    class="flex w-full font-medium p-4 border-b border-opacity-30 border-gray-300">
                                    Despre noi
                                </NuxtLink>
                                <NuxtLink to="/contacte" title="Contacte"
                                    class="flex w-full font-medium p-4 border-b border-opacity-30 border-gray-300">
                                    Contacte
                                </NuxtLink>
                                
                                <div class="p-4 mt-auto mb-5 flex gap-6 flex-col items-center text-center">
                                   <div class="text-xl">Solicită un credit acum!</div> 
                                    <UiPhoneButton light/>
                                </div>
                            </div>
                        </transition>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>
<style>
.mobile-dropdown {
    max-width: 320px;
    min-height: 100dvh;
    z-index: 100;
}
.menu-slide-leave-to,
.menu-slide-enter-from {
    transform: translateX(-100%);
    opacity: .9;
}

.menu-slide-leave-active,
.menu-slide-enter-active {
    transition: all .6s ease-in-out;
}

</style>