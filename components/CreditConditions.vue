<script setup>
    const list = [
        'Cetățean al Republicii Moldova cu buletin de identitate valid',
        'Sursă de venit stabilă (confirmată și neconfirmată)',
        'Posibilitatea deplină pentru deservirea creditului',
        'Gaj sau garant, în funcție de posibilitatea de creditare',
    ]
</script>
<template>
    <div class="card light">
        <div class="">
            <h2 class="card-title text-center">Condițiile de creditare</h2>
            <div class="flex gap-4 flex-col">
                <div v-for="item in list" class="flex items-center gap-2 text-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 flex-shrink-0 text-brand-color" viewBox="0 0 24 24"><path fill="currentColor" d="m10 13.6l5.9-5.9q.275-.275.7-.275t.7.275q.275.275.275.7t-.275.7l-6.6 6.6q-.3.3-.7.3t-.7-.3l-2.6-2.6q-.275-.275-.275-.7t.275-.7q.275-.275.7-.275t.7.275l1.9 1.9Z"/></svg>
                    {{ item }}
                </div>
                <div class="css-notice">
                    <IconsInfo class="w-6 h-6 flex-shrink-0" />
                    <div>Pentru clienții noi, prezența FIDEJUSORLUI (garant) este obligatorie cu aceleași condiții!</div>
                </div>
            </div>
        </div>
        
    </div>
</template>