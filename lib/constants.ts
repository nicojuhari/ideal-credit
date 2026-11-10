// Monthly interest rate (%) used by the credit calculator (createGrafic/calcDAE).
export const CALCULATOR_MONTHLY_RATE = 4;

export const SITE_DESCRIPTION =
    "Credite nebancare pentru afaceri și persoane fizice, de la 10.000 la 500.000 lei. Plătești doar dobânda fixă. Fără comisioane.";

// Address format, used everywhere (site, schema, Google Business Profile): "bd. Mihai Eminescu 17, of. 47, or. Căușeni, MD-4304".
export const OFFICES = [
    {
        id: 1,
        title: "Sediul principal",
        city: "or. Căușeni",
        address: "bd. Mihai Eminescu 17, of. 47",
        postalCode: "MD-4304",
        mobile: "+37368270101",
        mobileDisplay: "068 27 01 01",
        note: null as string | null,
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1070.8698170211678!2d29.40806812052061!3d46.641495352200025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c9ace138f629b3%3A0xac0504d023064a9d!2sIdeal%20Credit%20C%C4%83u%C8%99eni!5e0!3m2!1sen!2sat!4v1708097806741!5m2!1sen!2sat",
    },
    {
        id: 2,
        title: "Sucursala Nr. 1",
        city: "mun. Chișinău",
        address: "str. Ginta Latină 18, of. 5",
        postalCode: "MD-2044",
        mobile: "+37361252777",
        mobileDisplay: "0612 52 777",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2718.5126752925935!2d28.866588177004928!3d47.049792671144246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c97cfa93379893%3A0x6b21737dc3080047!2sIdeal%20Credit%20Chi%C8%99in%C4%83u!5e0!3m2!1sen!2sat!4v1708098130151!5m2!1sen!2sat",
    },
];

export const fullAddress = (o: (typeof OFFICES)[number]) => `${o.address}, ${o.city}, ${o.postalCode}`;

export const FAQ_ITEMS = [
    // shortcut: the 100.000 lei example assumes CALCULATOR_MONTHLY_RATE = 4; update it if the rate changes.
    {
        question: "Cât costă un credit de 100.000 lei pe 24 de luni?",
        answer: "Prima rată este 8.167 lei, ultima 4.325 lei. Rata scade în fiecare lună, pentru că dobânda se calculează din suma rămasă. Dobânda totală este 49.996 lei. Comisioane: 0 lei. DAE: 60,21%. Dacă achiți creditul mai devreme, plătești dobânda doar pentru lunile folosite.",
    },
    {
        question: "Ce sumă pot lua?",
        answer: "Persoanele fizice pot lua de la 10.000 la 300.000 lei. Afacerile pot lua de la 50.000 la 500.000 lei. Suma exactă depinde de venit și de garanții.",
    },
    {
        question: "Cereți asigurare?",
        answer: "Nu cerem asigurare de viață. Doar dacă creditul are gaj, se asigură bunul pus gaj.",
    },
    {
        question: "Ce se întâmplă dacă întârzii o rată?",
        answer: "Pentru persoane fizice, penalitatea este o sumă fixă în lei pe zi. Ea nu depășește 0,04% din suma creditului pe zi, cum cere legea. Pentru afaceri, penalitatea este 0,1% pe zi din suma întârziată. Dacă știi dinainte că vei întârzia, sună-ne. Căutăm o soluție împreună.",
    },
    {
        question: "Am nevoie de fidejusor?",
        answer: "Da, la primul credit. Fidejusorul (garantul) este o persoană care garantează cu venitul său. Pentru o companie, de obicei este administratorul. La următorul credit, dacă ai achitat la timp, poți primi credit fără fidejusor.",
    },
    {
        question: "Ce acte sunt necesare?",
        answer: "Pentru afaceri: buletinul administratorului, extrasul din Registrul de stat (nu mai vechi de 30 de zile) și extrasele bancare pe ultimele 3-6 luni. Pentru persoane fizice: buletinul și un document care confirmă venitul.",
    },
];

export const GLOSSARY_LINKS = [
    { name: "Credit", desc: "Bani pe care îi primești acum și îi întorci în rate lunare. Pentru că folosești banii, plătești și dobândă." },
    { name: "Dobândă", desc: "Prețul pe care îl plătești pentru că folosești banii. Se scrie în procente, de exemplu 4% pe lună." },
    {
        name: "DAE (Dobânda Anuală Efectivă)",
        desc: "Costul total al creditului pe un an, în procente. Include dobânda și toate comisioanele. Cu DAE poți compara două credite între ele.",
    },
    {
        name: "Contract de credit",
        desc: "Documentul pe care îl semnezi. În el sunt scrise suma, dobânda, graficul de plăți și toate condițiile.",
    },
    { name: "Creditor", desc: "Compania care îți dă banii. De exemplu, Ideal Credit." },
    { name: "Debitor", desc: "Persoana sau compania care ia creditul și trebuie să îl întoarcă." },
    { name: "Consumator", desc: "O persoană care ia credit pentru nevoi personale, nu pentru o afacere." },
    { name: "Bonitate", desc: "Cât de sigur este că poți plăti ratele la timp. Se vede din venit și din cum ai plătit creditele de până acum." },
    { name: "Valoarea totală a creditului", desc: "Suma pe care o primești în mână sau pe cont." },
    { name: "Costul total al creditului", desc: "Tot ce plătești peste suma primită: dobânda și comisioanele, dacă există." },
    {
        name: "Garanție (gaj, ipotecă)",
        desc: "Un bun care asigură creditul, de exemplu o casă sau un teren. Dacă ratele nu se plătesc, creditorul poate recupera banii din acest bun.",
    },
    { name: "Penalitate", desc: "Suma pe care o plătești în plus când întârzii o rată. Este scrisă în contract de la început." },
    {
        name: "Perioadă de grație",
        desc: "Primele luni ale creditului în care plătești doar dobânda, fără să întorci din suma împrumutată. Se vede în graficul de plăți.",
    },
    { name: "Cesiune", desc: "Când creditorul trece contractul tău la o altă companie. Condițiile din contract rămân aceleași." },
    {
        name: "BIC (Biroul Istoriilor de Credit)",
        desc: "Instituția care păstrează istoria creditelor tale: ce credite ai luat și dacă le-ai plătit la timp.",
    },
    { name: "Capital de lucru", desc: "Banii de care are nevoie o afacere în fiecare zi: pentru salarii, marfă, furnizori și chirie." },
    { name: "Refinanțare", desc: "Când iei un credit nou ca să închizi un credit vechi." },
    {
        name: "Fidejusiune",
        desc: "Când o persoană (fidejusorul) garantează creditul altcuiva. Dacă debitorul nu plătește, plătește fidejusorul.",
    },
];
