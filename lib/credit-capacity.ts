// "How much can I borrow" for persons, by the rules in next-icm docs/regulamente/RI-07-evaluarea-bonitatii.md
// (Hot. BNM 60/2026) and RI-02 pct. 26.3 (Legea 202/2013 cost cap).
import { buildSchedule, maxPayment, totalInterest, type RepaymentType } from "./credit-schedule";
import { AVG_WAGE, CALCULATOR_MONTHLY_RATE, MIN_WAGE } from "./constants";

export const PERSON_MIN = 10_000;
export const PERSON_MAX = 500_000;
export const TERM_MIN = 12;
export const TERM_MAX = 60; // RI-07 pct. 42

export const RSDV_LIMIT = 40; // RI-07 pct. 30.1
export const RSDV_LIMIT_HIGH = 55; // pct. 30.3: +15 p.p. from 2× average wage
export const HIGH_INCOME = 2 * AVG_WAGE;
export const UNCONFIRMED_MAX = 0.4 * MIN_WAGE; // pct. 26
export const HOME_LTV = 0.8; // pct. 37, home loans secured by a mortgage

// RI-07 Anexa nr. 2. Salary and pension count at 1,0 (0,8 if they vary by more than 15%).
export const OTHER_INCOME = [
    { id: "independent", label: "Activitate independentă sau patentă", coef: 0.7 },
    { id: "chirie", label: "Chirie sau arendă", coef: 0.7 },
    { id: "remitente", label: "Bani primiți de peste hotare", coef: 0.7 },
    { id: "sezonier", label: "Muncă sezonieră", coef: 0.5 },
    { id: "dividende", label: "Dividende", coef: 0.5 },
] as const;
export type OtherIncomeId = (typeof OTHER_INCOME)[number]["id"];

const UNIT = 100_000;
const unit = (term: number, type: RepaymentType, rate: number) => buildSchedule(UNIT, term, rate, type, 0);

/** Longest term where total interest stays within the amount borrowed (RI-02 pct. 26.3). */
export function personalMaxTerm(type: RepaymentType, rate = CALCULATOR_MONTHLY_RATE): number {
    for (let n = TERM_MAX; n > TERM_MIN; n--) if (totalInterest(unit(n, type, rate)) <= UNIT) return n;
    return TERM_MIN;
}

export interface PersonalInput {
    confirmed: boolean;
    salary: number;
    salaryVaries: boolean;
    other: number;
    otherType: OtherIncomeId;
    debts: number; // monthly payments on existing credits
    term: number;
    type: RepaymentType;
    homeValue: number | null; // set only for a home loan secured by a mortgage
    rate?: number;
}

export type Binding = "venit" | "plafon" | "imobil";

export interface PersonalResult {
    income: number; // recognised monthly income (after coefficients); 0 when unconfirmed
    limitPct: number | null; // RSDV limit applied; null when unconfirmed
    maxService: number; // all monthly payments together may not exceed this
    amount: number; // rounded down to 500 lei; may be below PERSON_MIN
    binding: Binding;
    payment: number; // highest monthly payment for `amount`
    rsdv: number | null;
}

export function personalCapacity(i: PersonalInput): PersonalResult {
    const rate = i.rate ?? CALCULATOR_MONTHLY_RATE;
    const coef = OTHER_INCOME.find((o) => o.id === i.otherType)?.coef ?? 0;
    const income = i.confirmed ? Math.max(0, i.salary) * (i.salaryVaries ? 0.8 : 1) + Math.max(0, i.other) * coef : 0;
    const limitPct = i.confirmed ? (income >= HIGH_INCOME ? RSDV_LIMIT_HIGH : RSDV_LIMIT) : null;
    const maxService = limitPct === null ? UNCONFIRMED_MAX : (income * limitPct) / 100;

    const free = Math.max(0, maxService - Math.max(0, i.debts));
    const byIncome = (free / maxPayment(unit(i.term, i.type, rate))) * UNIT;

    let amount = byIncome;
    let binding: Binding = "venit";
    if (PERSON_MAX < amount) [amount, binding] = [PERSON_MAX, "plafon"];
    if (i.homeValue !== null && i.homeValue * HOME_LTV < amount) [amount, binding] = [i.homeValue * HOME_LTV, "imobil"];
    amount = Math.floor(amount / 500) * 500;

    const payment = amount > 0 ? maxPayment(buildSchedule(amount, i.term, rate, i.type, 0)) : 0;
    const rsdv = income > 0 ? ((Math.max(0, i.debts) + payment) / income) * 100 : null;
    return { income, limitPct, maxService, amount, binding, payment, rsdv };
}

/** Lowest confirmed monthly income at which `debts + payment` stays within the RSDV limit (40%, or 55% from HIGH_INCOME). */
export function requiredIncome(debts: number, payment: number): number {
    const service = Math.max(0, debts) + payment;
    const at40 = (service * 100) / RSDV_LIMIT;
    return at40 < HIGH_INCOME ? at40 : Math.max((service * 100) / RSDV_LIMIT_HIGH, HIGH_INCOME);
}
