import { test } from "node:test";
import assert from "node:assert/strict";
import { computeLoan, formatMdl, formatDae, clampToStep } from "./loan-math.ts";

test("10.000 MDL / 12 luni → prima rată 1.233, cost total 2.600, DAE 60,1%", () => {
    const f = computeLoan(10_000, 12);
    assert.equal(formatMdl(f.firstPay), "1.233");
    assert.equal(formatMdl(f.totalCost), "2.600");
    assert.equal(formatDae(f.dae), "60,1%");
});

test("last payment is one instalment plus interest on it", () => {
    const f = computeLoan(10_000, 12);
    assert.equal(formatMdl(f.lastPay), "867"); // 833.33 + 33.33
});

test("ro-RO grouping uses a dot as thousands separator", () => {
    assert.equal(formatMdl(100_000), "100.000");
    assert.equal(formatMdl(5_000), "5.000");
    assert.equal(formatMdl(500_000), "500.000");
});

test("clampToStep snaps and clamps", () => {
    assert.equal(clampToStep(123_456, 20_000, 500_000, 5_000), 125_000);
    assert.equal(clampToStep(1, 20_000, 500_000, 5_000), 20_000);
    assert.equal(clampToStep(9e9, 20_000, 500_000, 5_000), 500_000);
    assert.equal(clampToStep(NaN, 3, 36, 1), 3);
});
