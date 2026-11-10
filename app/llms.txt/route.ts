import { createGrafic, calcDAE } from "ideal-credit";
import { CALCULATOR_MONTHLY_RATE, OFFICES, fullAddress } from "@/lib/constants";

// llms.txt for AI assistants: the facts they need to answer questions about Ideal Credit.
// Built from the same constants as the pages, so the rate, offices and example never drift.
export const dynamic = "force-static";

const SITE = "https://idealcredit.md";
const lei = (n: number) => `${Math.round(n).toLocaleString("ro-RO")} lei`;

function costExample(sum: number, term: number) {
    const g = createGrafic({ sum, period: term, interest: CALCULATOR_MONTHLY_RATE });
    const interest = g.reduce((a, r) => a + r.dobinda_rata, 0);
    const pay = (i: number) => g[i].credit_rata + g[i].dobinda_rata;
    const dae = Number(calcDAE(g, sum)).toLocaleString("ro-RO", { maximumFractionDigits: 2 });
    return `${lei(sum)} pe ${term} de luni: prima rată ${lei(pay(0))}, ultima rată ${lei(pay(g.length - 1))}, dobânda totală ${lei(interest)}, comisioane 0 lei, total de plată ${lei(sum + interest)}, DAE ${dae}%.`;
}

export function GET() {
    const offices = OFFICES.map(
        (o) => `- ${o.title}: ${fullAddress(o)}. Telefon: ${o.mobileDisplay} (${o.mobile}).`,
    ).join("\n");

    const body = `# Ideal Credit

> OCN „Ideal Credit” SRL este o companie de creditare nebancară din Republica Moldova, supravegheată de Banca Națională a Moldovei (BNM) și de Comisia Națională a Pieței Financiare (CNPF). Activă din 15.04.2010. Oficii în Căușeni (sediul principal) și Chișinău. Dă credite pentru afaceri și pentru persoane fizice din toată Moldova. Clientul plătește doar dobânda: fără comision de acordare, fără comision lunar, fără comision la achitarea înainte de termen.

Cum lucrăm: înainte de aprobare, un specialist discută cu clientul ce vrea să facă cu banii, din ce va plăti rata și ce garanții are. Apoi îi spune ce sumă și ce termen i se potrivesc. Dacă un credit nu are sens pentru situația clientului, îi spunem direct și îi explicăm de ce. Uneori propunem o sumă mai mică decât cea cerută.

## Costul creditului

- Dobânda: ${CALCULATOR_MONTHLY_RATE}% pe lună, fixă pe toată durata contractului. Se calculează din suma rămasă de plătit, de aceea rata lunară scade în fiecare lună.
- Dobânda poate fi mai mică pentru sume mari, garanții solide sau clienți care revin.
- Comisioane: 0 lei. Achitarea înainte de termen: gratuită, se plătește dobânda doar pentru lunile folosite.
- Asigurare de viață: nu se cere. Doar la creditele cu gaj se asigură bunul gajat.
- Exemplu: ${costExample(100000, 24)}
- Exemplu: ${costExample(30000, 24)}
- Penalitate la întârziere, persoane fizice: o sumă fixă în lei pe zi, de cel mult 0,04% din suma creditului pe zi (Legea nr. 202/2013, art. 15¹).
- Penalitate la întârziere, afaceri: 0,1% pe zi din suma întârziată.

## Credite pentru afaceri

Pentru SRL, ÎI și gospodării țărănești (GȚ) cu cel puțin 4-6 luni de activitate și încasări constante pe cont. Decizia: 1-2 zile lucrătoare de la primirea tuturor actelor. Banii se virează doar prin transfer bancar.

- [Credit pentru afaceri](${SITE}/credite/credit-pentru-afaceri): capital de lucru, marfă, salarii, furnizori. 50.000-500.000 lei, 12-60 de luni.
- [Credit investițional](${SITE}/credite/credit-investitional): echipament, utilaje, transport, renovarea spațiului. 50.000-400.000 lei, 12-60 de luni. Bunul este al companiei din prima zi.
- [Credit pentru agricultură](${SITE}/credite/credit-pentru-agricultura): semințe, tehnică agricolă, irigare, lucrări de sezon. 50.000-500.000 lei, 12-60 de luni. Graficul de plăți se potrivește cu perioada recoltei; perioadă de grație posibilă. Se acceptă teren în arendă.

Acte pentru afaceri: buletinul administratorului; extrasul din Registrul de stat (nu mai vechi de 30 de zile); extrasele bancare pe ultimele 3-6 luni; decizia asociaților, dacă SRL-ul are mai mulți asociați. Dările de seamă la SFS nu sunt obligatorii. Nu se cere plan de afaceri.

## Credite pentru persoane fizice

De la 23 de ani, cu venit stabil (salariu, pensie sau activitate independentă). Decizia: 2-3 ore de la primirea tuturor actelor. Banii se primesc în numerar la oficiu sau pe card.

- [Credit pentru nevoi personale](${SITE}/credite/credit-pentru-nevoi-personale): studii, sănătate, mobilă, electrocasnice, evenimente. 10.000-300.000 lei, 12-48 de luni.
- [Credit pentru reparație](${SITE}/credite/credit-pentru-reparatie): renovarea casei sau a apartamentului. 10.000-300.000 lei, 12-48 de luni. Nu trebuie să fii proprietar; devizul nu e obligatoriu.
- [Credit pentru automobil](${SITE}/credite/credit-pentru-automobil): mașină nouă sau rulată, ori reparația ei. 10.000-300.000 lei, 12-48 de luni. Mașina este pe numele clientului de la cumpărare.

Acte pentru persoane fizice: buletinul de identitate și o confirmare a venitului (adeverință de salariu, extras de card sau pensie; verificarea se poate face și la Biroul Istoriilor de Credit).

## Garanții

- La primul credit se cere un fidejusor (garant): o persoană care garantează cu venitul său. Pentru companii, de obicei administratorul.
- Gaj imobiliar (casă, apartament, teren) doar pentru sume mari sau venituri care nu sunt stabile.
- Clienții care au achitat la timp primul credit pot primi la următorul o dobândă mai mică și credit fără fidejusor. Aproximativ 4 din 10 clienți revin pentru un nou credit.

## Ce nu oferim

Refinanțarea datoriilor existente, credite ipotecare, credite fără nicio analiză a venitului.

## Pașii

1. Clientul sună sau completează [cererea online](${SITE}/cerere-de-credit-online). Prima discuție durează cam 15 minute.
2. Trimite actele pe e-mail, WhatsApp sau Viber.
3. Primește decizia: 2-3 ore pentru persoane fizice, 1-2 zile lucrătoare pentru afaceri.
4. Semnează contractul la oficiul din Căușeni sau Chișinău (o singură vizită).
5. Plătește ratele prin transfer bancar, din aplicația de pe telefon, la poștă sau la oficiu.

## Contacte

Program: luni-vineri, 8:30-16:30.
${offices}
- WhatsApp și Viber: 0612 52 777.
- E-mail: info@idealcredit.md
- [Pagina de contacte](${SITE}/contacte)

## Alte pagini

- [Toate creditele](${SITE}/credite)
- [Calculator de credit](${SITE}/calculator-credit): rata lunară, dobânda totală, DAE și graficul de plăți.
- [Despre noi](${SITE}/despre-noi): regulamente, rapoarte de audit și actele companiei.
- [Dicționar financiar](${SITE}/dictionar-financiar): 18 termeni explicați simplu (dobândă, DAE, gaj, fidejusor).
- [Autoritatea de supraveghere](${SITE}/autoritatea-de-supraveghere): contactele BNM și CNPF și cum se depune o reclamație.
- [Termeni și condiții](${SITE}/terms), [Confidențialitate](${SITE}/privacy), [Cookies](${SITE}/cookies)
`;

    return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
