import { addMonths } from "ideal-credit";

export type RepaymentType = "anuitate" | "principal-egal";

export interface Row {
    month: number;
    date: string;
    payment: number;
    principal: number;
    interest: number;
    balance: number;
}

export function buildSchedule(principal: number, months: number, rate: number, type: RepaymentType, grace: number): Row[] {
    const r = rate / 100;
    const rows: Row[] = [];
    let balance = principal;

    const getDate = (offset: number) => new Date(addMonths(offset)).toLocaleDateString("ro-RO");

    // Grace period - interest only, balance unchanged
    for (let i = 1; i <= grace; i++) {
        const interest = +(balance * r).toFixed(2);
        rows.push({ month: i, date: getDate(i), payment: interest, principal: 0, interest, balance });
    }

    const n = Math.max(1, months - grace);

    if (type === "anuitate") {
        const pmt = r > 0 ? (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1) : principal / n;

        for (let i = 1; i <= n; i++) {
            const interest = +(balance * r).toFixed(2);
            const principalPart = i === n ? balance : +(pmt - interest).toFixed(2);
            const payment = +(principalPart + interest).toFixed(2);
            balance = +Math.max(0, balance - principalPart).toFixed(2);
            rows.push({ month: grace + i, date: getDate(grace + i), payment, principal: principalPart, interest, balance });
        }
    } else {
        const baseP = +(principal / n).toFixed(2);
        for (let i = 1; i <= n; i++) {
            const interest = +(balance * r).toFixed(2);
            const principalPart = i === n ? balance : baseP;
            const payment = +(principalPart + interest).toFixed(2);
            balance = +Math.max(0, balance - principalPart).toFixed(2);
            rows.push({ month: grace + i, date: getDate(grace + i), payment, principal: principalPart, interest, balance });
        }
    }

    return rows;
}

export const maxPayment = (rows: Row[]) => Math.max(0, ...rows.map((r) => r.payment));
export const totalInterest = (rows: Row[]) => rows.reduce((s, r) => s + r.interest, 0);
