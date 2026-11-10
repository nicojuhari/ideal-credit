All articles are deleted. The build, type check and lint pass, and I tested the redirects on a local server.

What's gone:

- the 7 published articles and the Prima Casă draft;
- the /blog page;
- the blog-only components, lib/blog-posts.ts and the check:blog script;
- the "Dincolo de Cifre" footer link and the blog entries in the sitemap;
- the editorial drafts and the topic backlog.

What happens to the old addresses:

- /blog → /credite
- firme-mici, dobanzi-mari and sepa → /credite/credit-pentru-afaceri
- ce-este-inflatia → /dictionar-financiar
- every other /blog/... address → /credite

What I kept: the MDX setup and the table componentable.tsx, so the new guides can use them.blog-editorial-strategy.md is marked as retired, but its plain-writing rules still apply.

Proposal: the new pages

Each page starts from one real problem, shows a plan, and shows when a loan helps and when it doesn't. It ends at the matching
service.

Solutions for businesses:

1. Buying stock before the busy season. For shops and distributors who have to buy goods 1–3 months before they sell them. Leads
   to → credit pentru afaceri.
2. A big order, but the client pays in 60 days. How to cover salaries and suppliers until the money comes in. → credit pentru
   afaceri.
3. New equipment: when it pays for itself. How to tell whether a machine or vehicle earns more than its monthly payment. →
   credit investițional.
4. Spring work for farmers. Seeds, fuel and fertiliser before the harvest money arrives. → credit pentru agricultură.
5. Getting ready before you ask for a loan. Which ear about the business, and how fast the decisioncomes. → cerere online.

For people (planned purchases):

6. Renovation: how to make a budget. Real costs, a cushion for surprises, and how much to borrow. → credit pentru reparație.

Tool:

7. "Se plătește investiția?" ("Does the investment pay off?") You enter what the investment costs and how much extra it earns
   per month. It shows the loan payment, how many and a plain verdict: "creditul te ajută" or "nu teajută acum" ("the loan helps you" or "it doesn't help you right now"). This is the clearest way to show how good credit plus
   a good goal leads to success.

Optional, from the September keyword plan: a page șeni and the region, where your main office is.

Addresses: /solutii/<name> for pages 1–6, with a sand /calculator-investitie for the tool, next to the existing /calculator-credit.

Which of these do you want, and in what order? I'd start with the tool and pages 1–3, because they're the core of the business
offer.

Nothing is committed yet. Two things to know:

- Staged deletions: the deletions are staged in git (I used git rm), so they'll go into your next commit together with anythinelse you stage.
- Leftover charts library: recharts is still installed but nothing uses it now. It could be useful for charts in the tool. If not, I'll remove it.
