#!/usr/bin/env node
/**
 * Design-system guard for Ideal Credit v4.
 *
 * Fails when v4 app code contains a raw colour, a border-radius or a box-shadow —
 * the design is square, shadowless and token-only, and it degrades fast without
 * this check. Runs in `npm run lint` and as `prebuild`.
 *
 * Scanned: app/(v4)/**, components/ds/**, design-system/base.css
 * Exempt : design-system/tokens.css (the single place colours may be written)
 */
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const ROOT = process.cwd();
const TARGETS = ["app/(v4)", "components/ds", "design-system/base.css"];
const EXTENSIONS = new Set([".ts", ".tsx", ".css", ".mdx", ".md"]);

const RULES = [
    { name: "raw hex colour", re: /#[0-9a-fA-F]{3,8}\b(?![\w-])/g, hint: "use a token from design-system/tokens.css" },
    { name: "raw rgb/hsl colour", re: /\b(?:rgba?|hsla?|oklch)\(/g, hint: "use a token from design-system/tokens.css" },
    { name: "border-radius", re: /border-radius\s*:(?!\s*0\s*[;}])[^;}]+/g, hint: "corners are square — the round logo is the only curve" },
    { name: "rounded-* utility", re: /(?<![\w-])rounded(?:-[a-z0-9\[\]/-]+)?(?=[\s"'`}])/g, hint: "corners are square — no Tailwind rounded-* classes" },
    { name: "box-shadow", re: /box-shadow\s*:\s*(?!none\b)[^;}]+/g, hint: "no shadows in this system" },
    { name: "shadow-* utility", re: /(?<![\w-])(?:drop-)?shadow(?:-[a-z0-9\[\]/-]+)?(?=[\s"'`}])/g, hint: "no shadows in this system" },
    { name: "bare fr grid track", re: /(?<![\w.])[\d.]+fr\b/g, hint: "grid tracks must be minmax(0, Xfr) — bare fr refuses to shrink", onlyIf: /grid-cols-\[|grid-template-columns|repeat\(/, unlessBefore: /minmax\(0,\s?$/ },
    { name: "gradient", re: /(?:linear|radial|conic)-gradient\(|(?<![\w-])bg-(?:linear|radial|conic|gradient)-/g, hint: "no gradients in this system" },
];

// Allowed in code: hex-like strings that are not colours (e.g. URL fragments "#calculator").
const ALLOW = [/#(?:[0-9a-fA-F]{3,8})\b(?=[\w-])/, /url\(#/];

function* walk(path) {
    const st = statSync(path);
    if (st.isDirectory()) {
        for (const entry of readdirSync(path)) yield* walk(join(path, entry));
    } else if ([...EXTENSIONS].some((ext) => path.endsWith(ext))) {
        yield path;
    }
}

let violations = 0;
for (const target of TARGETS) {
    let files;
    try {
        files = [...walk(join(ROOT, target))];
    } catch {
        continue;
    }
    for (const file of files) {
        const src = readFileSync(file, "utf8");
        const lines = src.split("\n");
        lines.forEach((raw, i) => {
            if (raw.includes("design-lint-ignore")) return;
            // comments may quote a value for documentation; only code is checked
            const line = raw.replace(/\/\/.*$/, "").replace(/\/\*.*?\*\//g, "").replace(/^\s*\*.*$/, "");
            for (const rule of RULES) {
                if (rule.onlyIf && !rule.onlyIf.test(line)) continue;
                rule.re.lastIndex = 0;
                let m;
                while ((m = rule.re.exec(line))) {
                    if (rule.name === "raw hex colour" && ALLOW.some((a) => a.test(line.slice(m.index)))) continue;
                    if (rule.unlessBefore && rule.unlessBefore.test(line.slice(Math.max(0, m.index - 12), m.index))) continue;
                    violations++;
                    console.error(`${relative(ROOT, file)}:${i + 1}:${m.index + 1}  ${rule.name}: "${m[0].trim()}" — ${rule.hint}`);
                }
            }
        });
    }
}

if (violations) {
    console.error(`\n✗ design-lint: ${violations} violation(s). Tokens only, square corners, no shadows.`);
    process.exit(1);
} else {
    console.log("✓ design-lint: no raw colours, radii or shadows in v4 code.");
}
