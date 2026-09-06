/**
 * Loan maths for the v4 LoanCalculator — declining balance, 4 % per month on
 * the remaining principal. Matches the figures published on the live site.
 *
 * Pure functions, no React: unit-tested in lib/loan-math.test.ts.
 */
export const MONTHLY_RATE = 0.04;

export type LoanFigures = {
    /** equal principal instalment */
    principal: number;
    /** first payment: principal + interest on the full amount */
    firstPay: number;
    /** last payment: principal + interest on one instalment */
    lastPay: number;
    /** total interest paid over the term */
    totalCost: number;
    /** effective annual rate, in percent (60.1 for 4 %/month) */
    dae: number;
};

export function computeLoan(amount: number, term: number, rate: number = MONTHLY_RATE): LoanFigures {
    const principal = amount / term;
    return {
        principal,
        firstPay: principal + amount * rate,
        lastPay: principal + principal * rate,
        totalCost: (amount * rate * (term + 1)) / 2,
        dae: ((1 + rate) ** 12 - 1) * 100,
    };
}

/** Whole MDL with ro-RO grouping: 100000 → "100.000". */
export function formatMdl(value: number): string {
    return new Intl.NumberFormat("ro-RO", { maximumFractionDigits: 0 }).format(Math.round(value));
}

/** DAE with one decimal and a % suffix, ro-RO decimal comma: 60.1 → "60,1%". */
export function formatDae(value: number): string {
    return `${new Intl.NumberFormat("ro-RO", { minimumFractionDigits: 1, maximumFractionDigits: 1 }).format(value)}%`;
}

export function clampToStep(value: number, min: number, max: number, step: number): number {
    if (!Number.isFinite(value)) return min;
    const snapped = Math.round((value - min) / step) * step + min;
    return Math.min(max, Math.max(min, snapped));
}
