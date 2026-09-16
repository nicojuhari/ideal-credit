# Service Page Draft - Credit pentru Afaceri Mici

**URL:** `/credite/credit-pentru-afaceri-mici`
**Status:** draft, 2026-09-11 - reference implementation of the 7-block template in `brand/site-architecture.md`
**Merges:** `ghid-credit-afaceri-ocn-moldova`, `documente-necesare-credit-afaceri-moldova`, `ocn-vs-banca-credit-afaceri-moldova`, `costul-real-al-unui-credit-nebancar`, `istoricul-de-credit-si-sansele-tale`, `credit-rapid-decizie-in-ore`

This page is the primary business page. With no `/credite/afaceri` hub, it carries the
broad "credit pentru afaceri" intent plus the `fără gaj` and `extindere` modifiers as
sections - never as separate pages.

---

## Metadata

```
title:       Credit pentru Afaceri Mici în Moldova | Ideal Credit
description: Credit nebancar pentru afaceri mici din Moldova - capital de lucru,
             investiții, extindere. Fără gaj imobiliar la primul credit. Decizie
             în 1-2 zile lucrătoare.
canonical:   https://idealcredit.md/credite/credit-pentru-afaceri-mici
schema:      businessCreditSchema + FAQPage
```

Primary: `credit pentru afaceri mici Moldova`
Secondary (as sections, not pages): `credit afaceri fără gaj`, `credit pentru extindere afacere`, `credit afaceri OCN`

---

## BLOCK 1 - Ce este

**Component:** `ServiceHero` + `ServiceFeatureGrid`

### Hero

> # Credit pentru afaceri mici
>
> Finanțăm SRL-uri, ÎI și gospodării țărănești din toată Moldova.
> **10.000 - 300.000 MDL**, decizie în 1-2 zile lucrătoare, fără plan de afaceri
> și fără gaj imobiliar la sumele mici.
>
> `[ Calculează rata ]` `[ Discutăm ]`

_Note: keep the amount range in the hero. Competitors hide it; stating it filters out
the wrong traffic before it costs staff time - and it is the cheapest expression of
the "creditorul care spune și nu" angle._

### Pentru ce poți folosi creditul

_(situations, not product names - this is the "soluții, nu produse" angle in practice)_

| Situație                   | Copy                                                                                                                                                                                         |
| -------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Capital de lucru**       | Salarii, furnizori, stocuri - acoperi golurile din flux fără să oprești activitatea. → secțiune mai jos (`#capital-de-lucru`), nu mai e pagină separată (owner decision, 2026-09-11 round 4) |
| **Utilaje și echipamente** | Cumperi utilajul acum, îl plătești din ce produce. → `/credite/credit-investitional`                                                                                                         |
| **Extindere**              | Punct nou de lucru, spațiu mai mare, vehicul comercial. → secțiune mai jos                                                                                                                   |
| **Sezon agricol**          | Semințe, motorină, lucrări - finanțare aliniată la ciclul de recoltă. → `/credite/credit-pentru-agricultura`                                                                                 |
| **Consolidare credite**    | Aduni creditele de afaceri existente într-unul singur, cu o rată mai mică - o opțiune analizată în cadrul consultației, nu un produs separat                                                 |
| **Start-up**               | Înregistrare firmă, echipamente inițiale, stoc de pornire. → `/cerere-de-credit-online`                                                                                                      |

---

## BLOCK 2 - Pentru cine

**Component:** `CreditPageContent.eligibleIf`
**Merged from:** `istoricul-de-credit-si-sansele-tale`

### Este pentru afacerea mea?

**Da, dacă:**

- Firma e înregistrată în Moldova (SRL, ÎI, GȚ)
- Ai cel puțin 3-6 luni de activitate economică demonstrabilă
- Extrasele bancare arată rulaj activ
- Ai nevoie de o decizie în zile, nu în săptămâni

**Ce contează de fapt în analiză - în ordinea greutății:**

1. **Comportamentul din ultimele 12 luni.** Un incident vechi urmat de un an de plăți la timp arată că situația s-a stabilizat. Cântărește mult mai mult decât ce s-a întâmplat acum patru ani.
2. **Capacitatea actuală de rambursare.** Rulajul firmei, obligațiile active, cheltuielile fixe.
3. **Natura incidentului, dacă există.** O întârziere de 10 zile dintr-o eroare bancară nu e același lucru cu un credit trecut la executare.
4. **Fidejusorul.** Un garant cu profil solid echilibrează un dosar mai slab.

**Pentru credite de afaceri analizăm în primul rând extrasele bancare ale firmei și
activitatea comercială curentă - nu doar istoricul personal al administratorului.**

Nu respingem automat pe baza unui scor. Băncile folosesc scoring automat: sub un
prag minim, cererea pică fără analiză individuală. Noi ne uităm la situația concretă.

> **Dacă nu are sens, îți spunem înainte să depui dosarul.**
> Un profil imperfect nu înseamnă „imposibil". Contează ce s-a întâmplat, când, și
> ce s-a schimbat de atunci. Discutăm întâi - nu pierzi timp cu un dosar complet
> dacă răspunsul e nu.

_Note: that closing box is the "creditorul care spune și nu" angle, delivered warmly.
It must read as respect for the client's time, never as gatekeeping._

---

## BLOCK 3 - Cum funcționează

**Component:** `HowItWorks`
**Merged from:** `credit-rapid-decizie-in-ore`

### De la primul apel la bani

1. **Consultația telefonică.** O discuție reală, nu un formular. Înțelegem situația completă înainte să cerem vreun document.
2. **Verificarea de la distanță.** Trimiți documentele prin email, WhatsApp sau Viber. Analizăm dosarul și istoricul înainte de orice întâlnire.
3. **Întâlnirea la birou.** Te invităm doar când imaginea e clară. Verificăm originalele și semnăm - nu aici se ia decizia grea.
4. **Transferul.** După semnare, banii sunt virați în aceeași zi sau în ziua lucrătoare următoare.

**Rambursarea e tot de la distanță** - transfer bancar, aplicație mobilă sau oficiu
poștal. Nu trebuie să vii la birou în fiecare lună.

> De ce funcționează așa: analiza se face **înainte** de întâlnire, nu în timpul ei.
> De asta rata de refuz la semnare e aproape zero - nu din întâmplare, ci pentru că
> munca grea s-a făcut în pașii 1 și 2.

---

## BLOCK 4 - Cât costă

**Component:** `CreditPageContent.description` + CTA to `/calculator-credit`
**Merged from:** `costul-real-al-unui-credit-nebancar`

### Costul real, nu rata afișată

Compară **DAE** (Dobânda Anuală Efectivă), nu dobânda nominală. DAE include dobânda
plus toate comisioanele obligatorii. E singurul indicator care permite o comparație
corectă între două oferte.

De ce contează - două credite de 80.000 MDL pe 36 de luni:

|                                | Creditor A       | Creditor B       |
| ------------------------------ | ---------------- | ---------------- |
| Dobândă nominală               | 18%              | 26%              |
| Comision lunar de administrare | 0,6% / lună      | 0%               |
| Taxă de analiză dosar          | 1.500 MDL        | 0 MDL            |
| **DAE real**                   | **~31%**         | **~26%**         |
| **Total plătit**               | **~108.000 MDL** | **~101.000 MDL** |

Creditor A pare mai ieftin. Costă cu ~7.000 MDL mai mult.

**La Ideal Credit:**

- Dobânda e **fixă** de la prima până la ultima rată. Suma lunară nu se schimbă.
- **Fără comision de rambursare anticipată.** Vrei să plătești mai repede - plătești, fără penalizare.
- Primești **graficul complet de rambursare înainte de semnare**. Dacă un creditor nu vrea să ți-l dea, e un semnal de alarmă.

`[ Calculează rata ta → /calculator-credit ]`

---

## BLOCK 5 - De ce un OCN

**Component:** `WhyBento`
**Merged from:** `ocn-vs-banca-credit-afaceri-moldova`
**Business pages only.**

### Bancă sau OCN?

| Criteriu            | Bancă                                 | OCN                                           |
| ------------------- | ------------------------------------- | --------------------------------------------- |
| Timp de aprobare    | 5-15 zile lucrătoare                  | 1-3 zile lucrătoare                           |
| Dosar necesar       | Extins - notarial, rapoarte, garanții | Simplificat - extrase, declarații, activitate |
| Gaj imobiliar       | Adesea obligatoriu                    | Nu întotdeauna necesar                        |
| **DAE (cost real)** | **Mai mic - de regulă 8-20%**         | **Mai mare - de regulă 25-60%**               |
| Evaluare            | Scoring automat, criterii fixe        | Evaluare umană, caz cu caz                    |
| Vechime afacere     | De obicei minim 1-2 ani               | Mai flexibil                                  |
| Sume                | De la câteva mii la milioane MDL      | De regulă 10.000-300.000 MDL                  |

**Mergi la bancă dacă** ai timp, ai 2+ ani de rapoarte clare, ai gaj imobiliar pe care
ești dispus să îl angajezi, sau suma depășește 500.000 MDL. Dacă te califici la o linie
preferențială - „373", ODA, BERD - profită: e mai ieftin decât orice credit comercial.

**Mergi la un OCN dacă** ai nevoie de bani în 1-3 zile, nu ai sau nu vrei să angajezi
gaj imobiliar, afacerea e mai nouă, sau suma e între 10.000 și 300.000 MDL.

### De ce e dobânda mai mare la un OCN - răspunsul sincer

Băncile atrag bani din depozite la 3-7% pe an. Un OCN nu are acces la depozite: se
finanțează din capital propriu, linii de credit sau investitori - la costuri mai mari.
La asta se adaugă un profil de risc mai flexibil și un proces mai rapid. Ambele costă.

**Calculul corect nu e „care dobândă e mai mică?" ci „cât costă așteptarea, față de
cât costă viteza?"** Un credit mai scump luat azi pentru o oportunitate care dispare
mâine poate fi decizia bună. Un credit ieftin obținut după trei săptămâni, pentru o
afacere care a pierdut sezonul, nu.

_Note: this honest-disadvantage block is a trust asset. No competitor publishes the
case for going to a bank instead. Do not soften it._

---

## BLOCK 6 - Documente

**Component:** `CreditPageContent.documents` + `note`
**Merged from:** `documente-necesare-credit-afaceri-moldova`

### Ce pregătești

**Identitate**

- Buletin al administratorului / fondatorului
- Buletin al fidejusorului, dacă e cazul

**Înregistrarea firmei**

- Extras din Registrul de Stat (CÎS)
- Certificat de înregistrare fiscală (IDNO)
- Statutul firmei sau decizia de fondare

**Financiare**

- Extrase de cont bancar pe ultimele 3-6 luni
- Declarații fiscale pe ultimele 6-12 luni

**Dovadă de activitate**

- Contracte active cu furnizori sau clienți
- Facturi sau chitanțe recente

Atât. Nu o listă de 30 de puncte. Dosarul se trimite în mare parte la distanță - email,
WhatsApp sau Viber. Originalele se verifică o singură dată, la semnare.

### În funcție de scop

- **Stoc sau capital circulant:** ofertă de la furnizor sau factură proformă
- **Utilaje:** ofertă comercială sau contract de vânzare-cumpărare
- **Extindere spațiu:** contract de locațiune (sau pre-contract) ori actul de proprietate
- **Agricultură:** titlu de proprietate sau contract de arendă

### Ce NU ți se cere

- **Ipotecă imobiliară** - pentru sume mici și activitate demonstrabilă, un fidejusor e suficient
- **Dosar notarial** - nu cerem acte legalizate pentru dosarul standard
- **Plan de afaceri de 40 de pagini** - fără proiecții pe 3-5 ani
- **Audit financiar extern** - raportul contabil intern sau declarațiile fiscale ajung
- **Ani de relație bancară** - evaluăm afacerea ta direct
- **Evaluare imobiliară costisitoare**

> **Fidejusor:** la primul credit e obligatoriu - de obicei administratorul firmei.
> Gajul imobiliar poate fi cerut suplimentar pentru sume mari sau fluxuri nestabile.
> Clienții recurenți cu dosar solid pot obține creditul fără fidejusor.

_Note: "ce NU ți se cere" is the strongest differentiator on the page. No competitor
states it. Keep it on every service page._

---

## BLOCK 7 - FAQ

**Component:** `CreditFAQ` (+ FAQPage schema)

1. **Pot obține credit pentru SRL fără gaj?** - La primul credit, fidejusorul (de obicei administratorul) e obligatoriu. Gajul imobiliar poate fi cerut suplimentar pentru sume mari sau fluxuri nestabile. Pentru sume de până la câteva zeci de mii de MDL, fidejusorul e de regulă suficient.
2. **Ce se întâmplă dacă firma are sub un an de activitate?** - Analizăm individual. Contează mai mult extrasele bancare și rulajul lunar decât vechimea exactă. Am finanțat firme cu 4-6 luni de activitate și flux demonstrabil.
3. **Poate primi credit o firmă cu pierderi pe ultimul an?** - Analizăm situația curentă, nu doar bilanțul anual. Dacă activitatea e stabilă acum și extrasele arată rulaj activ, discutăm.
4. **Pot lua credit pentru extinderea afacerii - punct nou sau spațiu mai mare?** - Da. Ai nevoie suplimentar de contractul de locațiune pentru noul spațiu (sau pre-contractul) ori actul de proprietate.
5. **Contează istoricul meu personal de credit pentru un credit de firmă?** - Contează, dar nu decide singur. Ne uităm în primul rând la extrasele firmei și activitatea comercială curentă.
6. **Pot obține finanțare pentru mai multe nevoi simultan?** - Da. Analizăm suma totală și structurăm creditul corespunzător - nu depui cereri separate.
7. **Cât de repede pot folosi banii după aprobare?** - După semnare, fondurile sunt virate în aceeași zi sau în ziua lucrătoare următoare.
8. **Dobânda se schimbă pe parcurs?** - Nu. E fixă de la prima până la ultima rată.
9. **Pot rambursa mai devreme?** - Da, fără comision de rambursare anticipată.

---

## Internal links out

| Target                               | Anchor context                             |
| ------------------------------------ | ------------------------------------------ |
| `/credite/credit-investitional`      | Block 1 + related                          |
| `/credite/credit-pentru-agricultura` | Block 1                                    |
| `/calculator-credit`                 | Block 4 CTA                                |
| `/cerere-de-credit-online`           | Primary CTA, repeated after blocks 3 and 7 |

**No links to `/blog/*`.** The blog does not support the funnel; it builds authority
separately.

---

## Open items before build

- No `/faq` page (owner decision, 2026-09-11 round 2). Block 7 footer should link to `/#faq` (home page general FAQ) instead of a dedicated FAQ page - swap the "mai multe întrebări" link target when this is built.
- `/credite/refinantare` is retired (owner decision, 2026-09-11 round 3) - the "Consolidare credite" row in Block 1 no longer links out; it's described as an option surfaced in-consultation, not a separate product/page.
- Section anchors needed for the redirect table: `#de-ce-ocn`, `#documente`
- Verify the DAE range "25-60%" still matches current Ideal Credit pricing before publishing
- The 18% / 24% / 30% profile table from `istoricul-de-credit` was **not** carried over - it was written for personal credit and would need business-specific figures. Decide whether to rebuild it with real business data or drop it.
