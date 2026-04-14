export const OFFICES = [
    {
        id: 1,
        title: "Sediul principal",
        city: "or. Căușeni",
        street: "str. Mihai Eminescu",
        addressNumbers: "nr. 17, of. 47, MD-4304",
        mobile: "+37379066566",
        mobileDisplay: "079 06 65 66",
        note: null as string | null,
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1070.8698170211678!2d29.40806812052061!3d46.641495352200025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c9ace138f629b3%3A0xac0504d023064a9d!2sIdeal%20Credit%20C%C4%83u%C8%99eni!5e0!3m2!1sen!2sat!4v1708097806741!5m2!1sen!2sat",
    },
    {
        id: 2,
        title: "Sucursala Nr. 1",
        city: "m. Chișinău",
        street: "str. Miron Costin",
        addressNumbers: "nr. 25, of. 115, MD-2068",
        mobile: "+37378805060",
        mobileDisplay: "078 80 50 60",
        note: "(este nevoie de programare prealabilă)" as string | null,
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2718.5126752925935!2d28.866588177004928!3d47.049792671144246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c97cfa93379893%3A0x6b21737dc3080047!2sIdeal%20Credit%20Chi%C8%99in%C4%83u!5e0!3m2!1sen!2sat!4v1708098130151!5m2!1sen!2sat",
    },
];

export const FAQ_ITEMS = [
    {
        question: "Pot obține credit pentru afacere chiar dacă am un profil mai puțin standard?",
        answer: "Da. Analizăm situația reală a afacerii tale - rulajul din extrase, activitatea curentă, garanțiile disponibile. Nu ne limităm la un scor de credit sau la criterii rigide.",
    },
    {
        question: "Ce sumă pot obține pentru afacerea mea?",
        answer: "Suma minimă este 10.000 lei. Suma maximă depinde de veniturile firmei, garanțiile disponibile și situația financiară a fiecărui client - nu există un plafon fix. Analizăm dosarul în 1-3 ore și comunicăm suma aprobată.",
    },
    {
        question: "Ce documente sunt necesare pentru un credit de afacere?",
        answer: "Actele de înregistrare ale firmei (SRL/ÎI), extrase bancare pentru ultimele 3 luni și evidența contabilă de bază. Nu cerem plan de afaceri detaliat.",
    },
    {
        question: "Pot obține credit doar cu buletinul, fără gaj?",
        answer: "Da. La primul credit solicităm întotdeauna un fidejusor (garant personal) - acesta nu este opțional. Gajul imobiliar poate fi cerut suplimentar pentru sume mari sau dacă venitul nu este stabil.",
    },
    {
        question: "Cât timp durează aprobarea?",
        answer: "În general, răspundem în 1-3 ore pentru cererile complete depuse în programul de lucru. Dacă documentele sunt în regulă, banii pot fi disponibili în aceeași zi.",
    },
    {
        question: "Dobânda este fixă sau flotantă?",
        answer: "Dobânda este fixă pe toată durata contractului. Știi exact cât plătești lunar de la prima rată până la ultima - suma nu se schimbă.",
    },
    {
        question: "Există comisioane ascunse?",
        answer: "Nu. Toate costurile - dobânda, DAE, penalitățile posibile - sunt prezentate înainte de semnare. Ce citești în contract, aia plătești.",
    },
    {
        question: "Pot rambursa creditul anticipat?",
        answer: "Da, rambursarea anticipată este gratuită. Plătești dobânda doar pentru perioada efectiv utilizată.",
    },
    {
        question: "Ce se întâmplă dacă întârzii o rată?",
        answer: "Se aplică o penalizare zilnică specificată clar în contract. Dacă anticipezi o problemă, contactează-ne din timp - găsim soluții împreună.",
    },
    {
        question: "Pot refinanța un credit existent?",
        answer: "Da. Preluăm credite de la alte instituții financiare. Analizăm dacă refinanțarea are sens financiar pentru tine și prezentăm calculul înainte de decizie.",
    },
    {
        question: "Ce tipuri de garanții acceptați?",
        answer: "Există două tipuri: fidejusiunea (garanție personală - o persoană care garantează cu venitul său) și gajul imobiliar (locuință sau teren). La primul credit, fidejusorul este obligatoriu. Gajul imobiliar poate fi cerut suplimentar pentru sume mari sau venituri nestabile.",
    },
    {
        question: "Pot obține credit fără fidejusor (garant)?",
        answer: "Da, dacă ești client existent cu un istoric bun de plăți, fără întârzieri, și cu venituri stabile dovedite. Clienții recurenți cu dosar solid pot beneficia de condiții mai avantajoase - inclusiv reducere de dobândă și fără obligativitatea fidejusorului. La primul credit, fidejusorul rămâne obligatoriu.",
    },
    {
        question: "Care este suma maximă pe care o pot obține?",
        answer: "Suma minimă este 10.000 lei. Suma maximă nu este fixă - depinde de venit, garanțiile disponibile și situația fiecărui client. Analizăm individual și comunicăm suma accesibilă după prima discuție.",
    },
];

export const GLOSSARY_LINKS = [
    {
        name: "Credit",
        desc: "Operațiune prin care o persoană fizică sau juridică primește o sumă de bani cu obligația de rambursare, de obicei cu dobândă, într-un termen stabilit.",
    },
    { name: "Dobândă", desc: "Costul utilizării banilor împrumutați, exprimat procentual din suma principală." },
    {
        name: "DAE (Dobânda Anuală Efectivă)",
        desc: "Indicator care reflectă costul total al creditului pentru consumator: dobânda anuală plus toate comisioanele și taxele aferente.",
    },
    {
        name: "Contract de Credit",
        desc: "Acord legal între creditor și debitor prin care se stabilesc suma împrumutată, dobânda, comisioanele, graficul de rambursare și alte condiții.",
    },
    { name: "Creditor", desc: "Entitate (instituție financiară sau persoană) care acordă împrumuturi în scop comercial sau profesional." },
    { name: "Debitor", desc: "Persoană fizică sau juridică care are obligația de a rambursa creditul și costurile asociate." },
    {
        name: "Consumator",
        desc: "Persoană fizică care utilizează produse sau servicii pentru necesități personale, nelegate de activitatea profesională.",
    },
    { name: "Bonitatea", desc: "Capacitatea consumatorului de a rambursa creditul la scadență, incluzând dobânda și costurile totale." },
    { name: "Valoarea Totală a Creditului", desc: "Suma efectiv pusă la dispoziție de creditor conform contractului." },
    { name: "Costul Total al Creditului", desc: "Suma pe care debitorul o plătește în total: principal + dobândă + comisioane + taxe." },
    {
        name: "Garanție (gaj, ipotecă)",
        desc: "Bunuri sau drepturi puse în securitate de către debitor pentru garantarea rambursării creditului.",
    },
    { name: "Penalitate", desc: "Sumă suplimentară datorată pentru întârzierea plății ratelor sau nerespectarea clauzelor contractuale." },
    {
        name: "Perioadă de grație",
        desc: "Interval în care nu se achită una sau mai multe rate de credit și/sau dobândă. Se reflectă în graficul de rambursare al contractului de credit.",
    },
    { name: "Cesiune", desc: "Transferul drepturilor și obligațiilor rezultate din contractul de credit către o terță parte (cesionar)." },
    {
        name: "BIC (Biroul Istoriilor de Credit)",
        desc: "Instituție care colectează și stochează date despre istoricul de credit al persoanelor fizice sau juridice.",
    },
    {
        name: "Capital de lucru",
        desc: "Resurse financiare utilizate pentru acoperirea cheltuielilor operaționale curente ale unei afaceri: salarii, stocuri, furnizori.",
    },
    {
        name: "Refinanțare",
        desc: "Operațiunea prin care un credit existent este achitat și înlocuit cu un nou credit, de obicei cu condiții mai avantajoase.",
    },
    {
        name: "Fidejusiune",
        desc: "Garanție personală prin care o a treia persoană (fidejusor) se angajează să ramburseze creditul dacă debitorul principal nu o face.",
    },
];
