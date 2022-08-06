<script setup>
    const list = [
        'Vîrsta minimă 23 de ani',
        'Sursă de venit stabilă',
        'Capacitate deplină pentru deservirea creditului',
        'Pentru Clienții noi, prezența FIDEJUSORLUI este obligatorie'
    ]

    const docs = [
        'Buletinul de identitate',
        'Cererea de credit și declarații (se depun în oficiu)'
    ]

    
</script>
<template>
    <div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="card">
                <h2 class="subtitle text-center mb-8">Condițiile de creditare</h2>
                <ul class="pl-6">
                    <li v-for="item in list" class="text-lg my-2 list-disc">{{ item }}.</li>
                </ul>
            </div>
            <div class="card">
                <h2 class="subtitle text-center mb-8">Documente</h2>
                <ul class="pl-6">
                    <li v-for="item in docs" class="text-lg my-2 list-disc">{{ item }}.</li>
                </ul>
                <div
                    class="cs-notice">
                    <IconsInfo class="w-5 flex-shrink-0" />
                    <div>Aceleași condiții se aplică și pentru FIDEJUSOR</div>
                </div>
            </div>
        </div>
    </div>
</template>