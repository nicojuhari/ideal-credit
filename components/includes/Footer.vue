<script setup>
    const { trackEvent } = useFacebookPixel()
    
    const oficii = [
        {   
            id: 1,
            title: 'Sediul principal',
            address: 'or. Căușeni, str. Mihai Eminescu',
            addressNumbers: 'nr. 17,  of. 47',
            mobile: ['+37379066566', '0790 66 5 66'],
        },
        {   
            id: 2,
            title: 'Sucursala Nr. 1',
            address: 'm. Chișinău, str. Miron Costin',
            addressNumbers: 'nr. 25,  of. 115',
            mobile: ['+37378805060', '078 80 50 60'],
        }
    ]

    const clickContact = ref(false)

    watch(clickContact, (val) => {
        if(val) {
            trackEvent('Contact');
        }
    }, { once: true })


    const list = [
        {
            name: 'Credit',
            desc: 'Operațiune prin care o persoană fizică sau juridică primește o sumă de bani cu obligația de rambursare, de obicei cu dobândă, într-un termen stabilit.'
        },
        {
            name: 'Dobândă',
            desc: 'Costul utilizării banilor împrumutați, exprimat procentual din suma principală.'
        },
        {
            name: 'DAE (Dobânda Anuală Efectivă)',
            desc: 'Indicator care reflectă costul total al creditului pentru consumator: dobânda anuală plus toate comisioanele și taxele aferente.'
        },
        {
            name: 'Contract de Credit',
            desc: 'Acord legal între creditor și debitor prin care se stabilesc suma împrumutată, dobânda, comisioanele, graficul de rambursare și alte condiții.'
        },
        {
            name: 'Creditor',
            desc: 'Entitate (instituție financiară sau persoană) care acordă împrumuturi în scop comercial sau profesional.'
        },
        {
            name: 'Debitor',
            desc: 'Persoană fizică sau juridică care are obligația de a rambursa creditul și costurile asociate.'
        },
        {
            name: 'Consumator',
            desc: 'Persoană fizică care utilizează produse sau servicii pentru necesități personale, nelegate de activitatea profesională.'
        },
        {
            name: 'Bonitatea',
            desc: 'Capacitatea consumatorului de a rambursa creditul la scadență, incluzând dobânda și costurile totale.'
        },
        {
            name: 'Valoarea Totală a Creditului',
            desc: 'Suma efectiv pusă la dispoziție de creditor conform contractului.'
        },
        {
            name: 'Costul Total al Creditului',
            desc: 'Suma pe care debitorul o plătește în total: principal + dobândă + comisioane + taxe.'
        },
        {
            name: 'Garanție (gaj, ipotecă)',
            desc: 'Bunuri sau drepturi puse în securitate de către debitor pentru garantarea rambursării creditului.'
        },
        {
            name: 'Penalitate',
            desc: 'Sumă suplimentară datorată pentru întârzierea plății ratelor sau nerespectarea clauzelor contractuale.'
        },
        {
            name: 'Perioadă de grație',
            desc: 'Interval în care o nu se achită una sau mai multe rate de credit și/sau dobândă. Se reflectă în graficul de rambursare al contractului de credit.'
        },
        {
            name: 'Cesiune',
            desc: 'Transferul drepturilor și obligațiilor rezultate din contractul de credit către o terță parte (cesionar).'
        },
        {
            name: 'BIC (Biroul Istoriilor de Credit)',
            desc: 'Instituție care colectează și stochează date despre istoricul de credit al persoanelor fizice sau juridice.'
        }
    ]



    




</script>
<template>
    <footer class="bg-black-500/70 border-t border-brand-500/10 relative">
        <div class="container grid grid-cols-1 md:grid-cols-3 gap-y-10 md:gap-x-6 py-8 px-2 md:px-0">
            <div class="space-y-6">
                <div class="flex items-center gap-3">
                    <IconsLogo class="h-10 " />
                    <div class="text-xl">Ideal Credit</div>
                </div>
                <p class="text-gray-400">Credite nebancare pentru afaceri și nevoi personale, destinate persoanleor fizice și juridice din Republica Moldova.</p>
            </div>
            <div>
                <div class="h-10 text-xl flex items-center">Adresa oficiilor</div>
                <div class="grid grid-cols-1 gap-8 mt-6">
                    <div v-for="oficiu in oficii" :key="oficiu.address" class="space-y-1.5">
                        <div class="mb-2 font-semibold text-xl">
                            {{ oficiu.title }}
                        </div>
                        <div class="text-gray-400">{{ oficiu.address }}<br>{{ oficiu.addressNumbers }}</div>
                        <div class="text-gray-400">Luni - Vineri: 08:30 - 16:30</div>
                        <div v-if="oficiu.id == 2" class="text-sm italic text-gray-400">(este nevoie de programare prealabilă)</div>
                        <div class="py-1"></div>
                        <a :href="'tel:' + oficiu.mobile[0]" @click="clickContact = true" class="btn btn-primary btn-outline">
                            <UIcon name="i-ph-phone-light" class="w-6 h-6 shrink-0" />
                            {{ oficiu.mobile[1] }}
                        </a>
                    </div>
                </div>
            </div>
            <div class="flex flex-col gap-4">
                <div class="h-10 text-xl flex items-center">Linkuri</div>
                <NuxtLink to="/blog" title="Blog financiar" class="inline-flex mt-3">Blog</NuxtLink>
                <NuxtLink to="/terms" title="Termeni și Condiții" class="inline-flex">Termeni și Condiții</NuxtLink>
                <NuxtLink to="/cookies" title="Politica de Cookies" class="inline-flex">Politica de Cookies</NuxtLink>
                <NuxtLink to="/privacy" title="Politica de Confidențialitate" class="inline-flex">Politica de Confidențialitate</NuxtLink>
                <NuxtLink to="/autoritatea-de-supraveghere" rel="nofollow" title="Autoritatea de Supraveghere"
                    class="text-green-600">Autoritatea de Supraveghere<br>și metodele de reclamații
                </NuxtLink>
                <div class="flex gap-6 items-center">
                    <NuxtLink href="https://www.instagram.com/idealcredit.md/" title="Instagram" target="_blank" rel="nofollow" >
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 shrink-0" viewBox="0 0 256 256"><path fill="#fff" d="M128 80a48 48 0 1 0 48 48a48 48 0 0 0-48-48Zm0 80a32 32 0 1 1 32-32a32.1 32.1 0 0 1-32 32Zm44-132H84a56 56 0 0 0-56 56v88a56 56 0 0 0 56 56h88a56 56 0 0 0 56-56V84a56 56 0 0 0-56-56Zm40 144a40 40 0 0 1-40 40H84a40 40 0 0 1-40-40V84a40 40 0 0 1 40-40h88a40 40 0 0 1 40 40Zm-20-96a12 12 0 1 1-12-12a12 12 0 0 1 12 12Z"/></svg>
                    </NuxtLink>
                    <NuxtLink href="https://www.facebook.com/idealcredit.md" title="Facebook" target="_blank" rel="nofollow">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 shrink-0" viewBox="0 0 256 256"><path fill="#fff" d="M232 128a104 104 0 1 0-104 104a104.1 104.1 0 0 0 104-104Zm-96 87.6V152h24a8 8 0 0 0 0-16h-24v-24a16 16 0 0 1 16-16h16a8 8 0 0 0 0-16h-16a32.1 32.1 0 0 0-32 32v24H96a8 8 0 0 0 0 16h24v63.6a88 88 0 1 1 16 0Z"/></svg>    
                    </NuxtLink>
                </div>
            </div>
        </div>
        <div class="container mt-12">
            <p class="mb-6 text-2xl text-center">Extras din lege</p>
            <p class="mb-4 pl-6">În Legea nr. 202/2013 privind contractele de credit pentru consumatori, au fost impuse
                limite cu privire la:</p>
            <ul class="list-outside list-disc ml-6 space-y-1.5 text-gray-400">
                <li>Rata maximală a dobânzii anuale specificate în contractul de credit să nu fie mai mare de 50%.</li>
                <li>Toate celelalte plăți aferente (comisioane, taxe, penalități, dobânzi de întârziere și orice alt tip
                    de plată), cu excepția dobânzii, să nu depășească 0,04% /zi din valoarea totală a creditului pentru
                    termenul de utilizare efectivă a creditului.</li>
                <li>Costului total al creditului (care include dobânzi, comisioane, taxe, penalități, dobânzi de
                    întârziere și orice alt tip de plată) să nu fie mai mare decât valoarea debursată conform
                    contractului (cu excepția contractelor ipotecare).</li>
            </ul>
        </div>
        <div class="container mt-12">
            <p class="mb-6 text-2xl text-center">Dicționar financiar</p>
            <ul class="list-outside list-disc ml-6 space-y-2.5 text-gray-400">
                <li v-for="item in list" :key="item.name"><span class="font-bold">{{ item.name }} - </span>{{ item.desc }}</li>
                
            </ul>
        </div>
        <div class="container mt-10">
            <div class="divider"></div>
            <div class="text-center py-6 gap-1 flex-wrap">
                &copy; {{ new Date().getFullYear() }} Organizația de Creditare Nebancară <strong
                    class="font-medium">"Ideal
                    Credit"</strong> SRL
            </div>
        </div>
    </footer>
</template>