#!/bin/sh
# Self-check for lib/credit-capacity.ts (RI-07 rules). Run: sh scripts/check-credit-capacity.sh
set -e
OUT=$(mktemp -d)
npx tsc lib/credit-capacity.ts lib/credit-schedule.ts lib/constants.ts --outDir "$OUT" --module commonjs --target es2020 --skipLibCheck --esModuleInterop
cat > "$OUT/t.js" <<'JS'
const a = require("assert");
const c = require("./credit-capacity.js");
const base = { confirmed: true, salary: 10000, salaryVaries: false, other: 0, otherType: "independent", debts: 0, term: 24, type: "principal-egal", homeValue: null };
a.strictEqual(c.personalMaxTerm("principal-egal"), 49); // interest <= amount at 4%/month
let r = c.personalCapacity(base);
a.strictEqual(r.amount, 48500); a.ok(r.payment <= 4000); a.strictEqual(r.limitPct, 40);
r = c.personalCapacity({ ...base, debts: 1500 }); a.ok(r.payment + 1500 <= 4000);
r = c.personalCapacity({ ...base, salary: 80000, term: 48 }); a.strictEqual(r.limitPct, 55); a.strictEqual(r.amount, 500000);
r = c.personalCapacity({ ...base, salary: 80000, term: 48, homeValue: 200000 }); a.strictEqual(r.amount, 160000);
r = c.personalCapacity({ ...base, confirmed: false }); a.strictEqual(r.maxService, 2520); a.ok(r.payment <= 2520);
r = c.personalCapacity({ ...base, salary: 0, other: 10000, otherType: "sezonier" }); a.strictEqual(r.income, 5000);
r = c.personalCapacity({ ...base, debts: 5000 }); a.strictEqual(r.amount, 0);
a.strictEqual(c.requiredIncome(0, 4000), 10000); a.strictEqual(c.requiredIncome(1000, 1000), 5000);
a.strictEqual(c.requiredIncome(0, 15000), c.HIGH_INCOME); a.ok(Math.abs(c.requiredIncome(0, 22000) - 40000) < 1e-6);
r = c.personalCapacity(base); a.ok(c.requiredIncome(0, r.payment) <= 10000);
console.log("credit-capacity: ok");
JS
NODE_PATH="$PWD/node_modules" node "$OUT/t.js"
rm -rf "$OUT"
