<script setup>
    const list = [
        'Cetățean al Republicii Moldova cu buletin de identitate valid',
        'Sursă de venit stabilă, confirmată și neconfirmată',
        'Posibilitatea deplină pentru deservirea creditului',
        'Gaj sau garant, în funcție de capacitatea de creditare',
    ]
</script>
<template>
    <div class="card light grid grid-cols-1 md:grid-cols-2 items-center gap-4 md:gap-6">
        <div class="flex h-full">           
             <!-- <img src="https://ouch-cdn2.icons8.com/dBXuDUF876mm43F9BQ6BsSJVyJgVrFuocxbZqHZiNlk/rs:fit:256:348/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvMjg1/L2VmNzFlYTI4LTRj/YzItNGU4ZC1hYmQy/LWQ1MDFiNmM0NGE4/Yy5wbmc.png" class="h-36 md:h-auto  m-auto"/> -->
            <img src="/search.png" class="h-44 md:h-64 m-auto"/>
            <!-- <Icon name="ph:handshake-light" class="w-36 md:w-56 h-56 m-auto text-brand-color flex-shrink-0" /> -->
        </div>
        <div class="">
            <h2 class="card-title text-center">Condițiile de creditare</h2>
            <div class="flex gap-4 flex-col">
                <div v-for="item in list" class="flex items-center text-xl">
                    <Icon name="ph:dot-outline-light" class="w-8 h-8 flex-shrink-0 text-brand-color"/>
                    {{ item }}
                </div>
                <!-- <div class="cs-notice mt-6">
                    <Icon name="ph:info-light" class="w-8 h-8 flex-shrink-0 text-brand-color"/>
                    <div>Pentru clienții noi, prezența unui fidejusor este obligatorie cu aceleași condiții.</div>
                </div> -->
            </div>
        </div>
        
    </div>
</template>