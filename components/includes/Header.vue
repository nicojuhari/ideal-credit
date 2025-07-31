<script setup>
    import { ref } from 'vue'
    import { useRoute } from 'vue-router';
     
    const { trackEvent } = useFacebookPixel()
    const route = useRoute();
    const showMenu = ref(false)

     const clickContact = ref(false)

    watch(clickContact, (val) => {
        if(val) {
            trackEvent('Contact');
        }
    }, { once: true })

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
    <header class="bg-black-500 border-b sticky top-0 backdrop-blur-lg z-10">
            <div class="flex justify-between items-center gap-4 h-14  container">
                <NuxtLink to="/" title="Ideal Credit">
                    <IconsLogo class="w-8" />
                </NuxtLink>
                <div>
                    <nav class="items-center gap-6 hidden md:flex">
                        <NuxtLink to="/despre-noi" title="Despre noi">Despre noi</NuxtLink>
                        <NuxtLink to="/contacte" title="Contacte">Contacte</NuxtLink>
                        <NuxtLink to="/blog" title="Blog">Blog</NuxtLink>
                        <UButton icon="i-ph-phone-light" class="ring-brand-500 text-brand-500" to="tel:+37378805060" @click="clickContact = true" variant="outline">
                            078 80 50 60
                        </UButton>
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
                                <div class="text-right py-2">
                                   <UButton icon="i-ph-x" square variant="ghost" color="neutral" class="rounded-full !px-2 bg-black-400 text-white" @click="toggleMenu" />
                                </div>
                                <NuxtLink to="/despre-noi" title="Despre noi"
                                    class="flex w-full font-medium text-lg p-4 border-b border-gray-400/30">
                                    Despre noi
                                </NuxtLink>
                                <NuxtLink to="/contacte" title="Contacte"
                                    class="flex w-full font-medium text-lg p-4 border-b border-gray-400/30">
                                    Contacte
                                </NuxtLink>
                                <NuxtLink to="/blog" title="Blog"
                                    class="flex w-full font-medium text-lg p-4 border-b border-gray-400/30">
                                    Blog
                                </NuxtLink>
                                <div class="mt-auto mb-10 space-y-4 text-center">
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