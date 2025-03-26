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
    <header class="bg-black-500/70 border-b border-brand-500/5 sticky top-0 backdrop-blur-lg z-10">
            <div class="flex justify-between items-center gap-4 h-14  container">
                <NuxtLink to="/" title="Ideal Credit">
                    <IconsLogo class="w-10" />
                </NuxtLink>
                <div>
                    <nav class="items-center gap-6 hidden md:flex">
                        <NuxtLink to="/despre-noi" title="Despre noi">Despre noi</NuxtLink>
                        <NuxtLink to="/contacte" title="Contacte">Contacte</NuxtLink>
                        <UiPhoneButton light />
                    </nav>
                    <div class="flex md:hidden">
                        <div @click="toggleMenu" class="p-2 bg-black-400 cursor-pointer rounded-full">
                            <IconsBurgerMenu />
                        </div>
                        <!-- <div v-if="showMenu" @click="toggleMenu"
                            class="fixed left-0 top-0 bg-black bg-opacity-70 w-full h-screen z-40"></div> -->
                        <Transition name="menu-slide">
                            <div v-if="showMenu"
                                class="absolute top-0 left-0 bg-black-600 mobile-dropdown shadow-md w-full flex flex-col z-50 h-[100dvh] overflow-y-auto">
                                <div class="p-4 flex justify-end">
                                    <UIcon name="i-ph-x-circle-thin" class="cursor-pointer h-11 w-11 text-white text-opacity-80"
                                        @click="toggleMenu" />
                                </div>
                                <NuxtLink to="/despre-noi" title="Despre noi"
                                    class="flex w-full font-medium text-lg p-4 border-b border-gray-300/30">
                                    Despre noi
                                </NuxtLink>
                                <NuxtLink to="/contacte" title="Contacte"
                                    class="flex w-full font-medium text-lg p-4 border-b border-gray-300/30">
                                    Contacte
                                </NuxtLink>

                                <div class="mt-auto mb-5 space-y-4 text-center">
                                    <div class="text-lg">Solicită un credit acum!</div>
                                    <UiButtonsCTA toMenu />
                                </div>
                            </div>
                        </Transition>
                    </div>
                </div>
            </div>
    </header>
</template>