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

    const howToPay = [
        'În unul din oficiile companiei Ideal Credit',
        'Prin intermediul băncii "VictoriaBank"',
        'La orice oficiu poștal din Republica Moldova',

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
                    class="bg-brand-color mt-10 rounded py-4 px-4 bg-opacity-40 border-l-4 border-brand-color flex gap-2">
                    <IconsInfo class="w-5 flex-shrink-0" />
                    <div>Aceleași condiții se aplică și pentru FIDEJUSOR</div>
                </div>
            </div>
        </div>
        <div class="card mt-6">
            <h2 class="subtitle text-center mb-8">Metode de achitare</h2>
            <ul class="pl-6">
                <li v-for="item in howToPay" class="text-lg my-2 list-disc">{{ item }}.</li>
            </ul>
            <div class="text-center mt-8 italic">Mai multă informație și rechizitele necesare le primiți la semnarea contractului</div>
        </div>
    </div>
</template>