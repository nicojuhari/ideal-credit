<script setup>
    const experience = computed(() => {
        return new Date().getFullYear() - 2010
    })
</script>

<template>
    <div>
        <h3 class="title text-center"> De ce să alegi Ideal Credit?</h3>
            <div class="text-center">
                <div class="text-brand-500 text-[180px] font-black leading-none tracking-tight">
                    {{ experience }}
                </div>
                <p class="text-lg text-gray-400 mt-2">
                    ani de experiență<br class="hidden lg:block"> pe piața financiară nebancară din Republica Moldova
                </p>
            </div>
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6 md:mt-12 card border rounded-xl ">
                <div class="p-6 flex flex-col items-center text-center">
                    <div class="w-16 h-16 bg-blue-400/10 rounded-full flex items-center justify-center mb-6 md:mb-8">
                        <UIcon name="i-ph-lightbulb-duotone" class="w-8 h-8 text-blue-400" />
                    </div>
                    <p class="text-lg">Dobândă fixă și fără comisioane ascunse</p>
                </div>
                <div class="p-6 flex flex-col items-center text-center">
                    <div class="w-16 h-16 bg-blue-400/10 rounded-full flex items-center justify-center mb-6 md:mb-8">
                        <UIcon name="i-ph-users-duotone" class="w-8 h-8 text-blue-400" />
                    </div>
                    <p class="text-lg">Sute de clienți mulțumiți,<br> mii de credite acordate</p>
                </div>
                <div class="p-6 flex flex-col items-center text-center">
                    <div class="w-16 h-16 bg-blue-400/10 rounded-full flex items-center justify-center mb-6 md:mb-8">
                        <UIcon name="i-ph-check-duotone" class="w-8 h-8 text-blue-400" />
                    </div>
                    <p class="text-lg">Simplu, rapid, transparent<br> și fără surprize</p>
                </div>
            </div>
    </div>
</template>