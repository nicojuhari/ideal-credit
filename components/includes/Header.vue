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
    <header class="border-b bg-white bg-opacity-70 sticky top-0 backdrop-blur-lg">
        <div class="container py-4">
            <div class="flex justify-between items-center gap-4">
                <NuxtLink to="/" class="flex gap-3 items-center" title="Ideal Credit">
                    <IconsLogo class="w-10" />
                    <span class="hidden md:block text-2xl">Ideal Credit</span>
                </NuxtLink>
                <div>
                    <nav class="items-center gap-6 hidden md:flex">
                        <NuxtLink to="/despre-noi">Despre noi</NuxtLink>
                        <NuxtLink to="/contacte">Contacte</NuxtLink>
                    </nav>
                    <div class="md:hidden">

                    </div>
                    <div class="flex md:hidden">
                        <div @click="toggleMenu" class="p-2 bg-brand-gray cursor-pointer rounded-full">
                            <IconsBurgerMenu />
                        </div>
                        <div v-if="showMenu" @click="toggleMenu"
                            class="fixed left-0 top-0 bg-brand-black bg-opacity-10 w-full h-screen z-50"></div>
                        <transition name="menu-slide">
                            <div v-if="showMenu"
                                class="absolute top-0 left-0 bg-white mobile-dropdown shadow-md w-full flex flex-col">
                                <div class="p-4 flex justify-end">
                                    <div class="p-2 bg-brand-gray cursor-pointer rounded-full">
                                        <IconsClose class="cursor-pointer m-auto" @click="toggleMenu" />
                                    </div>
                                </div>
                                <NuxtLink to="/"
                                    class="flex w-full font-semibold p-4 border-b border-opacity-30 border-gray-300">
                                   Pagina Principală
                                </NuxtLink>
                                <NuxtLink to="/despre-noi"
                                    class="flex w-full font-semibold p-4 border-b border-opacity-30 border-gray-300">
                                    Despre noi
                                </NuxtLink>
                                <NuxtLink to="/contacte"
                                    class="flex w-full font-semibold p-4 border-b border-opacity-30 border-gray-300">
                                    Contacte
                                </NuxtLink>
                                <div class="p-4 mt-auto mb-5 flex flex-col items-center text-center">
                                    <a href="tel:+37378805060" title="+373 78 80 50 60"
                                        class="py-2 px-4 bg-brand-color bg-opacity-20 rounded-full flex gap-4 items-center justify-center max-w-max">
                                        <IconsPhone class="w-6 h-6 text-brand-color phone" />
                                        <div class="text-brand-color tracking-widest">078 80 50 60</div>
                                    </a>
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
    min-height: 100vh;
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