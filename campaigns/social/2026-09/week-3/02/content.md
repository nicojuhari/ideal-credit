---
name: Rate egale sau rate descrescătoare - același credit, aceeași dobândă, cost total diferit
type: social-post
created: 2026-09-06
publish: 2026-09-17
lane: Tips & tricks
kicker: SFAT PRACTIC
format: single-image (short post)
platforms: Facebook, LinkedIn, Instagram (same caption everywhere)
theme: light
image: image.png
status: ready
---

# Post — Aceeași sumă, aceeași dobândă, același termen - și totuși un grafic te costă cu 2.970 MDL mai mult

## Quality gate check

- On-topic rule: yes — un mecanism concret din orice contract de credit (felul în care sunt
  împărțite ratele), cu calcul verificabil pe un împrumut.
- Full-picture rule: yes — arată atât avantajul ratelor descrescătoare (dobândă totală mai mică)
  cât și prețul lui real (primele rate sunt mai mari, deci trebuie să încapă în buget de la
  început) - nu doar „descrescător = mai ieftin", altfel un cititor atent ar întreba „dar de ce
  nu aleg toți așa?".
- Send-to-someone test: cineva care tocmai a primit o ofertă de credit cu „rată egală" trimite
  asta unui prieten care compară două oferte doar după rata lunară din prima lună - „uite că
  poți plăti mai puțin per total la exact aceeași dobândă."
- Unseen-angle test: „compară dobânzile" e sfatul banal; „la aceeași dobândă, graficul de
  rambursare singur schimbă costul total cu aproape 3.000 MDL" e partea pe care puțini o văd.
- Sourced: calcul propriu, formulele standard pentru cele două grafice, pe un împrumut ilustrativ
  de 100.000 MDL, 12%/an, 60 de luni. Rate egale (anuitate): ≈2.224 MDL/lună constant, dobândă
  totală ≈33.467 MDL. Rate descrescătoare (dobândă la sold): prima rată ≈2.667 MDL, ultima
  ≈1.683 MDL, dobândă totală 30.500 MDL. Diferență ≈2.967 MDL, rotunjit 2.970 MDL. Pe 36 de luni
  diferența e ≈1.070 MDL. No invented figures - calcul matematic verificabil, pe date ilustrative
  declarate ca atare.
- Language check: „grafic de rambursare" - singurul termen mai tehnic, explicat direct (felul în
  care sunt împărțite ratele pe luni). „Anuitate" nu apare în caption, doar în nota de sourcing.
- Sign-off present: yes.
- Kicker present: yes - SFAT PRACTIC.

---

## The image (single frame)

**Kicker:** SFAT PRACTIC

**2.970 MDL**

atât plătești în plus la același credit de 100.000 MDL, cu aceeași dobândă și același termen,
doar pentru că ratele sunt egale în loc de descrescătoare

_(jos, mic:)_ Sursă: calcul propriu, 100.000 MDL la 12%/an pe 60 de luni (exemplu ilustrativ)

_(Hook + o singură linie de deschidere, per [[social-design-system]]. Cele două grafice cu ratele
lor și explicația se mută integral în caption.)_

---

## Caption (single version, LinkedIn register — used on all platforms)

Două oferte de credit pot avea exact aceeași sumă, aceeași dobândă și același termen - și
totuși una te costă mai mult. Diferența e în graficul de rambursare: felul în care sunt
împărțite ratele pe luni.

Exemplu: 100.000 MDL, 12% pe an, 60 de luni.

- Rate egale: plătești aceeași sumă în fiecare lună, ≈2.224 MDL. Dobândă totală: ≈33.470 MDL.
- Rate descrescătoare: prima rată ≈2.667 MDL, apoi scade lună de lună până la ≈1.683 MDL la
  final. Dobândă totală: 30.500 MDL.

Aceeași dobândă, același termen - și aproape 3.000 MDL diferență. De ce? La ratele
descrescătoare, în fiecare lună returnezi aceeași bucată din suma împrumutată, iar dobânda se
calculează doar pe ce a mai rămas. Suma rămasă scade mai repede, deci și dobânda.

Prețul acestui avantaj: primele rate sunt mai mari - cu vreo 440 MDL pe lună în exemplul de mai
sus. Dacă bugetul lunar e strâns fix la început, rata egală poate fi alegerea corectă. Dar merită
să știi că nu compari doar dobânzi, ci și grafice.

La Ideal Credit calculatorul de pe site îți arată din start prima rată, ultima rată și costul
total - ca să vezi tot graficul înainte de semnare, nu doar rata din prima lună.

Sursă: calcul propriu, exemplu ilustrativ (100.000 MDL, 12%/an, 60 de luni).

Ideal Credit - credite pentru succes!

#IdealCredit #CreditMoldova #EducatieFinanciara #CreditPersonal

---

## Design notes for whoever builds the image

- Light template (`campaigns/social/templates/light.html`), Thursday slot
- Kicker "SFAT PRACTIC" per [[social-design-system]]
- Hero figure "2.970 MDL" auto-fits the panel width; unit in mono
- Context line ends with "..." (added by the template)
- Both schedules with their instalments live only in the caption
