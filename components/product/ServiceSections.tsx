// Shared sections for the credit (service) pages, in the redesign's story layout.
// The business page is the reference; every /credite/* page composes these.
import { createGrafic, calcDAE, type GraficRow } from "ideal-credit";
import Container from "@/components/ds/Container";
import Accent from "@/components/ds/Accent";
import PageHero from "@/components/ds/PageHero";
import ValueRow from "@/components/ds/ValueRow";
import SplitSection, { sectionTitle } from "@/components/ds/SplitSection";
import { ButtonPrimary, ButtonSecondary } from "@/components/ds/Button";
import { CALCULATOR_MONTHLY_RATE } from "@/lib/constants";

const label =
  "text-xs font-medium uppercase tracking-[.12em] text-dc-text-muted";
const lei = (n: number) => `${Math.round(n).toLocaleString("ro-RO")} lei`;

type Row = { label: string; value: string };

export function ServiceHero({
  breadcrumb,
  title,
  subtitle,
  rows,
}: {
  breadcrumb: { name: string; url: string }[];
  title: React.ReactNode;
  subtitle: string;
  /** Conditions card rows. The interest row is added first automatically. */
  rows: Row[];
}) {
  return (
    <PageHero
      breadcrumb={breadcrumb}
      title={title}
      subtitle={subtitle}
      actions={
        <>
          <ButtonPrimary href="/cerere-de-credit-online">
            Solicită un credit
          </ButtonPrimary>
          <ButtonSecondary href="#calculator">Calculează rata</ButtonSecondary>
        </>
      }
      aside={
        <aside
          aria-label="Condițiile creditului"
          className="border border-dc-line bg-dc-surface px-6 pb-3 pt-6 sm:px-9 sm:pt-8"
        >
          <p className={label}>Condițiile creditului</p>
          <div className="mt-2">
            <ValueRow
              label="Dobânda fixă"
              value={`${CALCULATOR_MONTHLY_RATE}% pe lună`}
              proof
            />
            <ValueRow label="Comisioane" value="0 lei" />
            {rows.map((r) => (
              <ValueRow key={r.label} label={r.label} value={r.value} />
            ))}
          </div>
        </aside>
      }
    />
  );
}

export function Situations({
  title,
  intro,
  items,
}: {
  title: React.ReactNode;
  intro?: string;
  items: { label: string; text: string }[];
}) {
  return (
    <section className="dc-section">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 className={`${sectionTitle} max-w-[15ch]`}>{title}</h2>
          {intro && (
            <p className="max-w-[40ch] text-[17px] leading-[1.6] text-dc-text-muted md:text-lg">
              {intro}
            </p>
          )}
        </div>
        <div className="mt-12 grid gap-px border border-dc-line bg-dc-line sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          {items.map((s) => (
            <div
              key={s.label}
              className="flex flex-col bg-dc-bg p-6 sm:min-h-[220px] sm:p-8"
            >
              <p className={label}>{s.label}</p>
              <p className="mt-4 text-lg leading-[1.4] tracking-[-.01em] text-dc-text sm:mt-auto sm:pt-10 sm:text-[21px]">
                {s.text}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/** Cost example computed with the same function as the calculator, so it never drifts from the rate. */
export function CostExample({ sum, term }: { sum: number; term: number }) {
  const grafic = createGrafic({
    sum,
    period: term,
    interest: CALCULATOR_MONTHLY_RATE,
  });
  const payment = (r: GraficRow) => r.credit_rata + r.dobinda_rata;
  const interestOf = (rows: GraficRow[]) =>
    rows.reduce((acc, r) => acc + r.dobinda_rata, 0);
  const totalInterest = interestOf(grafic);
  const half = Math.floor(term / 2);
  const interestHalf =
    Math.round(interestOf(grafic.slice(0, half)) / 100) * 100;
  const dae = Number(calcDAE(grafic, sum));

  return (
    <SplitSection
      title={
        <>
          Cât costă un credit de <Accent>{lei(sum)}.</Accent>
        </>
      }
      description={`La Ideal Credit, un credit de ${lei(sum)} pe ${term} de luni costă ${lei(totalInterest)} dobândă și 0 lei comisioane. Prima rată este ${lei(payment(grafic[0]))}, ultima ${lei(payment(grafic[grafic.length - 1]))}. Dobânda de ${CALCULATOR_MONTHLY_RATE}% pe lună se calculează din suma rămasă de plătit, de aceea rata scade în fiecare lună.`}
      aside={
        <p className="mt-8 border-l-2 border-dc-accent pl-5 text-base leading-[1.6] text-dc-text">
          Dobânda poate fi mai mică. Depinde de sumă, de garanții și de
          istoricul tău la noi. Îți spunem dobânda exactă la telefon.
        </p>
      }
    >
      <div className="grid gap-px border border-dc-line bg-dc-line md:grid-cols-2">
        <div className="bg-dc-bg p-6 sm:p-9">
          <p className={label}>Graficul de plăți, pe scurt</p>
          <div className="mt-2">
            <ValueRow
              label="Prima rată"
              value={lei(payment(grafic[0]))}
              accent
            />
            <ValueRow
              label="Ultima rată"
              value={lei(payment(grafic[grafic.length - 1]))}
            />
            <ValueRow label="Dobânda totală" value={lei(totalInterest)} />
            <ValueRow label="Comisioane" value="0 lei" />
            <ValueRow
              label="Total de plată"
              value={lei(sum + totalInterest)}
              strong
            />
            <ValueRow
              label="DAE (costul total pe an)"
              value={`${dae.toLocaleString("ro-RO", { maximumFractionDigits: 2 })}%`}
            />
          </div>
        </div>
        <div className="flex flex-col bg-dc-surface p-6 sm:p-9">
          <p className={label}>Ce nu plătești la noi</p>
          <ul className="mt-5 flex flex-col gap-3.5 text-[17px] text-dc-text">
            {[
              "comision de acordare",
              "comision lunar de administrare",
              "comision la achitarea înainte de termen",
            ].map((t) => (
              <li key={t}>
                <span className="mr-3 font-dc-mono text-dc-proof">0</span>
                {t}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-[15px] leading-[1.6] text-dc-text-muted md:mt-auto md:pt-8">
            Plătești doar dobânda. Suma din graficul de plăți este suma pe care
            o achiți.
          </p>
        </div>
      </div>
      <p className="mt-7 text-base leading-[1.6] text-dc-text-muted">
        Achiți creditul mai devreme? Plătești dobânda doar pentru lunile
        folosite. De exemplu, dacă îl achiți după {half} luni, plătești
        aproximativ{" "}
        <span className="font-dc-mono text-dc-text">{lei(interestHalf)}</span>{" "}
        dobândă. Fără comision.
      </p>
    </SplitSection>
  );
}

function Bullets({ items, color }: { items: string[]; color: string }) {
  return (
    <ul className="mt-5 flex flex-col gap-4 text-[17px] leading-[1.5]">
      {items.map((t) => (
        <li key={t} className={`border-l pl-5 ${color}`}>
          {t}
        </li>
      ))}
    </ul>
  );
}

export function Eligibility({
  can,
  cannot,
}: {
  can: string[];
  cannot: string[];
}) {
  return (
    <section className="dc-section">
      <Container>
        <h2 className={sectionTitle}>
          Cine poate lua <Accent>credit.</Accent>
        </h2>
        <div className="mt-12 grid gap-px border border-dc-line bg-dc-line md:grid-cols-2 lg:mt-20">
          <div className="bg-dc-bg p-6 sm:p-10">
            <p className={`${label} !text-dc-proof`}>Poți lua credit dacă</p>
            <Bullets color="border-dc-proof text-dc-text" items={can} />
          </div>
          <div className="bg-dc-surface p-6 sm:p-10">
            <p className={`${label} !text-dc-accent`}>Ce nu finanțăm</p>
            <Bullets color="border-dc-accent text-[#c8c8c8]" items={cannot} />
          </div>
        </div>
      </Container>
    </section>
  );
}

export function Documents({
  items,
  footnote,
  tip,
  title,
  answer,
}: {
  items: { title: string; note: string }[];
  footnote?: string;
  tip?: React.ReactNode;
  /** Heading phrased like the search question, e.g. "Ce acte trebuie pentru un credit pe firmă." */
  title?: React.ReactNode;
  /** Self-contained 40-80 word answer under the heading, naming Ideal Credit, so AI answers can quote it. */
  answer?: string;
}) {
  return (
    <SplitSection
      id="documente"
      title={
        title ?? (
          <>
            Ce acte <Accent>sunt necesare.</Accent>
          </>
        )
      }
      description={
        answer ??
        "Le trimiți pe e-mail, WhatsApp sau Viber. Vii la oficiu doar ca să semnezi contractul."
      }
    >
      <ul className="border-b border-dc-line">
        {items.map((d) => (
          <li
            key={d.title}
            className="flex flex-col gap-1 border-t border-dc-line py-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
          >
            <span className="text-lg font-semibold text-dc-text">
              {d.title}
            </span>
            <span className="text-[15px] text-dc-text-muted sm:text-right">
              {d.note}
            </span>
          </li>
        ))}
      </ul>
      {footnote && (
        <p className="mt-5 text-[15px] leading-[1.55] text-dc-text-muted">
          {footnote}
        </p>
      )}
      {tip && (
        <p className="mt-8 border border-dc-line p-5 text-base leading-[1.55] text-[#c8c8c8]">
          {tip}
        </p>
      )}
    </SplitSection>
  );
}

// Consumer penalty follows Law 202/2013 art. 15¹ and RI-02 pct. 23.3: a fixed sum in lei per day, max 0,04% of the credit.
export function LatePayment({ example, consumer }: { example: string; consumer?: boolean }) {
  return (
    <SplitSection
      title={
        <>
          Dacă într-o lună nu reușești <Accent>să plătești.</Accent>
        </>
      }
    >
      <p className="max-w-[40ch] text-xl leading-[1.5] text-dc-text md:text-[26px]">
        Se întâmplă: {example} Sună-ne înainte de data ratei și căutăm împreună
        o soluție.
      </p>
      <div className="mt-10 flex flex-wrap items-baseline gap-x-5 gap-y-2 border-t border-dc-line pt-7">
        <span className="dc-num text-[44px] tracking-[-.03em] text-dc-accent sm:text-5xl">
          {consumer ? "0,04%" : "0,1%"}
        </span>
        <span className="text-[17px] text-dc-text-muted">
          {consumer
            ? "din suma creditului pe zi, cel mult. Penalitatea este o sumă fixă în lei pe zi, scrisă în contract de la început."
            : "pe zi din suma întârziată. Penalitatea este scrisă în contract de la început."}
        </span>
      </div>
    </SplitSection>
  );
}
