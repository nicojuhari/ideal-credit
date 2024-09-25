<script setup>
    const { trackEvent } = useFacebookPixel()
    
    const oficii = [
        {
            title: 'Sediul principal',
            address: 'or. Căușeni, str. M.Eminescu',
            addressNumbers: 'nr. 17,  of. 47',
            mobile: ['+37379066566', '0790 66 5 66'],
        },
        {
            title: 'Sucursala Nr. 1',
            address: 'm. Chișinău, str. Miron Costin',
            addressNumbers: 'nr. 25,  of. 115',
            mobile: ['+37378805060', '078 80 50 60'],
        }
    ]

    const links = [
        {
            title: 'Blog financiar >>',
            link: '/blog',
        },
    ]
</script>
<template>
    <footer class="bg-brand-bg border-t border-brand-color border-opacity-10 relative">
        <div class="container grid grid-cols-1 md:grid-cols-3 gap-y-10 md:gap-x-6 py-8 px-2 md:px-0">
            <div class="space-y-6">
                <div class="flex items-center gap-3">
                    <IconsLogo class="h-10 " />
                    <div class="text-xl">Ideal Credit</div>
                </div>
                <div> Credite nebancare pentru nevoi personale și afaceri, destinate persoanleor fizice și juridice din Moldova. Rapid și Avantajos!</div>
            </div>
            <div>
                <div class="h-10 text-xl flex items-center">Adresa oficiilor</div>
                <div class="grid grid-cols-1 gap-8 mt-6">
                    <div v-for="oficiu in oficii" :key="oficiu.address">
                        <div class="text-gray-600 mb-2">
                            {{ oficiu.title }}
                        </div>
                        <div class="flex gap-4 mb-4 items-center">
                            <div class="h-10 w-10 flex items-center justify-center rounded-full bg-brand-raisin-black">
                                <Icon name="i-ph-map-pin-light"
                                    class="w-6 h-6 flex-shrink-0 text-white text-opacity-50" />
                            </div>
                            <div>{{ oficiu.address }}<br>{{ oficiu.addressNumbers }}</div>
                        </div>
                        <a :href="'tel:' + oficiu.mobile[0]" @click="trackEvent('Contact')" class="flex gap-4 items-center">
                            <div class="h-10 w-10 flex items-center justify-center rounded-full bg-brand-raisin-black">
                                <Icon name="i-ph-phone-call"
                                    class="w-6 h-6 flex-shrink-0 text-white text-opacity-50" />
                            </div>
                            <div>{{ oficiu.mobile[1] }}</div>
                        </a>
                    </div>
                </div>
            </div>
            <div class="flex flex-col gap-4">
                <div class="h-10 text-xl flex items-center">Linkuri</div>
                <NuxtLink to="/blog" class="inline-flex underline">Blog</NuxtLink>
                <NuxtLink to="/autoritatea-de-supraveghere" rel="nofollow" title="Autoritatea de Supraveghere"
                    class="underline">Autoritatea de Supraveghere și metodele de reclamații
                </NuxtLink>
            </div>
        </div>
        <div class="container mb-4 mt-10">
            <p class="mb-2 text-xl text-center">Extras din lege</p>
            <p class="mb-1">În Legea nr. 202/2013 privind contractele de credit pentru consumatori, au fost impuse
                limite cu privire la:</p>
            <ul class="list-outside list-disc ml-6 space-y-1.5">
                <li>Rata maximală a dobânzii anuale specificate în contractul de credit să nu fie mai mare de 50%.</li>
                <li>Toate celelalte plăți aferente (comisioane, taxe, penalități, dobânzi de întârziere și orice alt tip
                    de plată), cu excepția dobânzii, să nu depășească 0,04% /zi din valoarea totală a creditului pentru
                    termenul de utilizare efectivă a creditului.</li>
                <li>Costului total al creditului (care include dobânzi, comisioane, taxe, penalități, dobânzi de
                    întârziere și orice alt tip de plată) să nu fie mai mare decât valoarea debursată conform
                    contractului (cu excepția contractelor ipotecare).</li>
            </ul>
        </div>
        <div class="container pb-6 mt-10">
            <p class="mb-2 text-2xl text-center">Dicționar financiar</p>
            <ul class="list-outside list-disc ml-6 space-y-2.5">
                <li><span class="font-medium">Credit - </span>este o operațiune financiară prin care o persoană fizică
                    sau juridică primește o sumă de bani de la o altă entitate, cu obligația de a o rambursa, de obicei
                    cu dobândă, într-o perioadă determinată.</li>
                <li><span class="font-medium">Dobânda - </span>este prețul plătit pentru folosirea banilor împrumutați,
                    calculată ca un procentaj din suma principală.</li>
                <li><span class="font-medium">Contract de Credit - </span> reprezintă un acord legal între un creditor
                    (instituție financiară) și un debitor (persoana care împrumută) prin care creditorul pune la
                    dispoziția debitorului o sumă de bani, iar debitorul se obligă să o ramburseze în rate, împreună cu
                    dobânda și alte costuri stabilite, într-o anumită perioadă de timp.</li>
                <li><span class="font-medium">Creditor - </span>persoană fizică sau juridică care acordă sau se angajează 
                    să acorde credite sau împrumuturi fiind în exerciţiul activităţii sale comerciale sau profesionale.
                </li>
                <li><span class="font-medium">Debitor - </span>este o persoana fizică sau juridică care are o obligație
                    financiară către o altă parte(creditor), și care trebuie să ramburseze o sumă de bani, o creanță sau
                    o prestație.</li>
                <li><span class="font-medium">Consumator - </span> persoană fizică care intenţionează să comande 
                    ori să procure sau care comandă, procură ori foloseşte produse şi servicii pentru necesităţi nelegate 
                    de activitatea de antreprenor sau cea profesională;</li>
                <li><span class="font-medium">Bonitatea Consumatorului - </span> capacitatea consumatorului de a restitui, la scadenţă, creditul conform contractului de credit, inclusiv dobînda şi costurile aferente.
                </li>
                <li><span class="font-medium">Valoarea Totală a Creditului - </span> sumele totale puse la dispoziţie 
                    în baza unui contract de credit.
                </li>
                <li><span class="font-medium">Costul Total al Creditului - </span> reprezintă suma totală platită de
                    debitor pentru a împrumuta o sumă de bani, incluzând dobanda, comisioanele și alte taxe asociate.
                </li>
                <li><span class="font-medium">Penalitate - </span> este o sancțiune financiară aplicată debitorului care
                    întârzie la plata ratelor lunare sau nu respectă alte clauze din contractul de credit.</li>
                <li><span class="font-medium">Cesiune - </span>reprezintă transferul drepturilor și obligațiilor de
                    împrumut către o altă entitate (cesionar).</li>
            </ul>
        </div>
        <div class="container mt-6">
            <div class="divider"></div>
            <div class="text-center py-6 gap-1 flex-wrap">
                &copy; {{ new Date().getFullYear() }} - Organizația de Creditare Nebancară <strong
                    class="font-medium">"Ideal
                    Credit"</strong> SRL
            </div>
        </div>
    </footer>
</template>