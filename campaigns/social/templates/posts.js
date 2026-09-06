// Post data for the social templates. One object per post, in publish order.
// `out`   = folder under campaigns/social/ that holds content.md + image.png
// `theme` = "dark" (Tuesday / Past success) or "light" (Thursday / Tips & tricks)
// heroNumber / heroUnit stay separate so the unit renders in mono at a smaller size.
window.POSTS = [
  {
    out: "2026-09/week-2/01",
    theme: "dark",
    publish: "08.09.2026",
    lane: "Past success",
    kicker: "POVESTE REALĂ",
    heroNumber: "700",
    heroUnit: "$",
    context: "atât a împrumutat un om fără casă, care locuia în mașină, ca să pornească o companie care azi face peste 900 mil. $ pe an",
    source: "Sursă: John Paul DeJoria, cofondator Paul Mitchell (1980)"
  },
  {
    out: "2026-09/week-2/02",
    theme: "light",
    publish: "10.09.2026",
    lane: "Tips & tricks",
    kicker: "SFAT PRACTIC",
    heroNumber: "+20.500",
    heroUnit: "MDL",
    context: "atât mai multă dobândă plătești dacă alegi un termen de 5 ani în loc de 2, la același împrumut de 100.000 MDL",
    source: "Sursă: calcul propriu, formulă standard de amortizare (12%/an, exemplu ilustrativ)"
  },
  {
    out: "2026-09/week-3/01",
    theme: "dark",
    publish: "15.09.2026",
    lane: "Past success",
    kicker: "POVESTE REALĂ",
    heroNumber: "170.000",
    heroUnit: "$",
    context: "atât a împrumutat un fost angajat Intel la doi tineri dintr-un garaj, ca să pornească producția primului calculator Apple",
    source: "Sursă: Mike Markkula, cofondator Apple (1977) - Wikipedia, W. Isaacson"
  },
  {
    out: "2026-09/week-3/02",
    theme: "light",
    publish: "17.09.2026",
    lane: "Tips & tricks",
    kicker: "SFAT PRACTIC",
    heroNumber: "2.970",
    heroUnit: "MDL",
    context: "atât plătești în plus la același credit de 100.000 MDL, cu aceeași dobândă și același termen, doar pentru că ratele sunt egale în loc de descrescătoare",
    source: "Sursă: calcul propriu, 100.000 MDL la 12%/an pe 60 de luni (exemplu ilustrativ)"
  }
];
if (typeof module !== "undefined") module.exports = window.POSTS;
