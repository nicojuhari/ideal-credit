<script setup>
const list2 = [
  {
    "question": "Ce tipuri de credite oferiți?",
    "answer": "Credite nebancare rapide pentru nevoi personale (consum) și credit pentru afaceri."
  },
  {
    "question": "Cum pot aplica pentru un credit nebancar?",
    "answer": "Completezi cererea online, prin telefon, Viber, WhatsApp sau vii la unul din oficiile noastre din Chișinău sau Căușeni."
  },
  {
    "question": "Care este suma maximă pe care o pot obține?",
    "answer": "Evaluăm individual: în funcție de venituri, cheltuieli, istoric de credit și garanții propuse."
  },
  {
    "question": "Ce perioadă de rambursare pot alege?",
    "answer": "Pe termen scurt (1-12 luni) sau mediu (12-36 luni), negociabil conform nevoilor și garanțiilor."
  },
  {
    "question": "Dobânda este fixă sau flotantă?",
    "answer": "Dobânda este fixă pe toată durata contractului și negociabilă la aplicare."
  },
  {
    "question": "Există comisioane ascunse?",
    "answer": "Nu. Toate costurile sunt afișate transparent înainte de semnarea contractului."
  },
  {
    "question": "Pot achita anticipat creditul fără penalități?",
    "answer": "Da, rambursarea anticipată este gratuită. Plătești dobânda doar pentru perioada utilizată."
  },
  {
    "question": "Pot obține credit doar cu buletinul, fără gaj?",
    "answer": "Da, dacă ai venit stabil, istoric de credit bun și responsabilitate financiară."
  },
  {
    "question": "Pot refinanța creditele de la alte companii?",
    "answer": "Da, evaluăm refinanțarea oricăror credite existente și îți oferim o soluție avantajoasă."
  },
  {
    "question": "Pot lua un nou credit dacă am deja unul?",
    "answer": "Da, atâta timp cât veniturile îți permit să achiți toate ratele lunare."
  },
  {
    "question": "Cum urmăresc ratele lunare?",
    "answer": "Primești grafic de rambursare, care este parte a contractului de credit."
  },
  {
    "question": "Ce garanții pot oferi?",
    "answer": "Garanții imobiliare (locuință, teren) sau garanții personale (fidejusiune) de la terți cu venituri stabile."
  },
  {
    "question": "Ce se întâmplă dacă întârzii o rată?",
    "answer": "Se aplică o penalizare zilnică, care este clar precizată în contract."
  },
  {
    "question": "Pot restructura creditul dacă apar probleme?",
    "answer": "Da, dar nu în toate cazurile. Este important să ne contactați din timp, pentru a găsi împreună soluții de evitare a penalizărilor."
  }
]

 useSchemaOrg([
    {
        '@type': 'FAQPage',
        mainEntity: list2.map(item => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: item.answer
            }
        }))
    }
 ])
</script>
<template>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div v-for="item in list2">
            <div class="font-bold mb-2">{{ item.question }}</div>
            <div class="text-gray-400">{{ item.answer }}</div>
        </div>
    </div>
</template>