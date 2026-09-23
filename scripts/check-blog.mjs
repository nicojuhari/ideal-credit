#!/usr/bin/env node
// Checks every blog article against the standing editorial limits:
// SEO <title> / meta description length, and body word count.
// Run: npm run check:blog
//
// See brand/blog-editorial-strategy.md, "SEO metadata length" and
// "Body length" for the reasoning behind these numbers.

import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const TITLE_MAX = 60;
const DESC_MIN = 120;
const DESC_MAX = 156;

// A thin article is treated as a signal the topic/angle needs more real
// substance, not as an invitation to pad it - see "Body length" in
// brand/blog-editorial-strategy.md.
const WORDS_MIN = 700;
const WORDS_TARGET_LOW = 800;
const WORDS_TARGET_HIGH = 1000;

// The "explicat simplu" format (a core money concept explained so a child can
// follow it) is short by design - see brand/blog-editorial-strategy.md,
// "Format exception". An article opts in with:
//   export const format = "explicat-simplu";
const FORMAT_WORD_LIMITS = {
    "explicat-simplu": { min: 500, low: 600, high: 800 },
};
const DEFAULT_WORD_LIMITS = { min: WORDS_MIN, low: WORDS_TARGET_LOW, high: WORDS_TARGET_HIGH };

const ARTICLES_DIR = join(process.cwd(), "app", "blog", "(articles)");

function findArticleFiles() {
    return readdirSync(ARTICLES_DIR)
        .map((name) => join(ARTICLES_DIR, name))
        .filter((path) => {
            try {
                return statSync(path).isDirectory();
            } catch {
                return false;
            }
        })
        .map((dir) => join(dir, "page.mdx"))
        .filter((path) => {
            try {
                return statSync(path).isFile();
            } catch {
                return false;
            }
        });
}

function extractMeta(source) {
    // The top-level metadata block always runs title -> description -> alternates,
    // before the openGraph duplicate. Slicing to "alternates:" keeps us on the
    // first (canonical) pair instead of matching inside openGraph too.
    const blockMatch = source.match(/export const metadata = \{([\s\S]*?)alternates:/);
    if (!blockMatch) return null;
    const block = blockMatch[1];

    const titleMatch = block.match(/title:\s*"((?:[^"\\]|\\.)*)"/);
    const descMatch = block.match(/description:\s*\n?\s*"((?:[^"\\]|\\.)*)"/);

    return {
        title: titleMatch ? titleMatch[1] : null,
        description: descMatch ? descMatch[1] : null,
    };
}

function checkLength(label, value, min, max) {
    if (value === null) return { status: "MISSING", detail: `${label} not found` };
    const len = value.length;
    if (len > max) return { status: "FAIL", len, detail: `${len} chars, over ${max}` };
    if (min && len < min) return { status: "WARN", len, detail: `${len} chars, under ${min} (thin)` };
    return { status: "OK", len, detail: `${len} chars` };
}

// Removes everything that isn't reader-facing prose, so the count matches
// what someone actually reads on the page - not JSX/data/import noise.
function extractReaderText(source) {
    let text = source;

    // Social promo MDX comment block at the bottom - not part of the article.
    text = text.replace(/\{\/\*[\s\S]*?\*\/\}/g, " ");

    // import lines.
    text = text.replace(/^import .*$/gm, " ");

    // `export const metadata = { ... };` - balanced-brace removal, since the
    // block nests (alternates, openGraph) and a naive regex can mismatch.
    const metaStart = text.indexOf("export const metadata = {");
    if (metaStart !== -1) {
        let depth = 0;
        let i = text.indexOf("{", metaStart);
        const objStart = i;
        for (; i < text.length; i++) {
            if (text[i] === "{") depth++;
            else if (text[i] === "}") {
                depth--;
                if (depth === 0) break;
            }
        }
        // consume a trailing semicolon too.
        const end = text[i + 1] === ";" ? i + 2 : i + 1;
        text = text.slice(0, metaStart) + " " + text.slice(end);
    }

    // `export const post = ...;` line.
    text = text.replace(/^export const post.*$/gm, " ");
    text = text.replace(/^export const format.*$/gm, " ");

    // JSX tags (both self-closing components with data props, and simple
    // open/close tags). Inner text of open/close tags (e.g. <Highlight>...
    // </Highlight>) is reader-facing and stays, since this only strips the
    // tag markup itself, not what's between an opening and closing tag.
    text = text.replace(/<[^>]+>/g, " ");

    // Markdown table pipes/separators and heading hashes/emphasis markers.
    text = text.replace(/^\|.*\|$/gm, (row) => row.replace(/\|/g, " "));
    text = text.replace(/^-{3,}$/gm, " ");
    text = text.replace(/^#+\s*/gm, "");
    text = text.replace(/[*_`]/g, "");

    return text;
}

function countWords(text) {
    return text.split(/\s+/).filter(Boolean).length;
}

function extractFormat(source) {
    const match = source.match(/^export const format\s*=\s*"([^"]+)"/m);
    return match ? match[1] : null;
}

function checkWordCount(count, { min, low, high }) {
    if (count < min) return { status: "FAIL", detail: `${count} words, under the ${min}-word floor` };
    if (count < low) return { status: "WARN", detail: `${count} words, below the ${low}-${high} target` };
    if (count > high) return { status: "WARN", detail: `${count} words, above the ${low}-${high} target` };
    return { status: "OK", detail: `${count} words` };
}

const files = findArticleFiles();
let hasFailure = false;

console.log("Blog article check\n" + "-".repeat(60));

for (const file of files) {
    const slug = file.split("/").slice(-2, -1)[0];
    const source = readFileSync(file, "utf8");
    const meta = extractMeta(source);

    console.log(`\n${slug}`);

    if (!meta) {
        console.log("  Could not find export const metadata block.");
        hasFailure = true;
    } else {
        const titleCheck = checkLength("title", meta.title, null, TITLE_MAX);
        const descCheck = checkLength("description", meta.description, DESC_MIN, DESC_MAX);

        console.log(`  title (${titleCheck.status}): ${titleCheck.detail}`);
        if (meta.title) console.log(`    "${meta.title}"`);
        console.log(`  desc  (${descCheck.status}): ${descCheck.detail}`);
        if (meta.description) console.log(`    "${meta.description}"`);

        if (titleCheck.status === "FAIL" || descCheck.status === "FAIL" || titleCheck.status === "MISSING" || descCheck.status === "MISSING") {
            hasFailure = true;
        }
    }

    const wordCount = countWords(extractReaderText(source));
    const format = extractFormat(source);
    const wordCheck = checkWordCount(wordCount, FORMAT_WORD_LIMITS[format] ?? DEFAULT_WORD_LIMITS);
    console.log(`  words (${wordCheck.status}): ${wordCheck.detail}${format ? ` [format: ${format}]` : ""}`);
    if (wordCheck.status === "FAIL") hasFailure = true;
}

console.log("\n" + "-".repeat(60));
if (hasFailure) {
    console.log(
        `FAIL - one or more articles are out of bounds (title <= ${TITLE_MAX} chars, description <= ${DESC_MAX} chars, body >= ${WORDS_MIN} words).`,
    );
    process.exit(1);
} else {
    console.log("OK - all articles within limits.");
}
