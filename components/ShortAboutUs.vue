<script setup>
    const experience = computed(() => {
        return new Date().getFullYear() - 2010
    })
</script>

<template>
    <div>
        <h3 class="title text-center"> De ce să alegi Ideal Credit?</h3>
            <div class="text-center">
                <div class="text-brand-500 text-9xl xl:text-[216px] font-black leading-none tracking-tight">
                    {{ experience }}
                </div>
                <p class="text-lg lg:text-xl text-gray-400 mt-2">
                    ani de experiență<br class="hidden lg:block"> pe piața financiară nebancară din Republica Moldova
                </p>
            </div>
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6 md:mt-12">
                <div class="card">
                    <h4 class="text-lg font-semibold mb-2 text-green-400">Misiunea Noastră</h4>
                    <p class="leading-relaxed">
                        Să oferim soluții financiare accesibile și transparente pentru antreprenori și persoane fizice.
                    </p>
                </div>
                <div class="card">
                    <h4 class="text-lg font-semibold mb-2 text-green-400">Impactul Nostru</h4>
                    <p class="leading-relaxed">
                       Am ajutat sute de clienți să-și atingă obiectivele personale și profesionale.
                    </p>
                </div>
                <div class="card">
                    <h4 class="text-lg font-semibold mb-2 text-green-400">Process Simplu</h4>
                    <p class="leading-relaxed">
                       Alege Ideal Credit pentru un proces simplu, rapid, transparent și fără surprize!
                    </p>
                </div>
            </div>
    </div>
</template>