#!/usr/bin/env node
// Schedule one post on every Buffer channel via the Buffer GraphQL API.
//   node schedule.mjs <post folder> <public image url> [YYYY-MM-DDTHH:MM Europe/Chisinau] [--dry-run] [--only=facebook]
// Example:
//   node schedule.mjs 2026-09/week-2/02 https://example.com/image.png 2026-09-10T10:00
// Reads BUFFER_API_KEY from ../../../.env.local, the caption from <folder>/content.md
// (section "## Caption", wrapped lines joined), and the publish date from posts.js when no
// datetime is given (default time 10:00 Chișinău = 09:00 Vienna, Buffer's account timezone).
import { readFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const root = resolve(here, "..", "..", "..");
const [folder, imageUrl, when, ...flags] = process.argv.slice(2);
const allFlags = [when, ...flags].filter((f) => f && f.startsWith("--"));
const dryRun = allFlags.includes("--dry-run");
const only = (allFlags.find((f) => f.startsWith("--only=")) || "").slice(7);
if (!folder || !imageUrl) {
  console.error("usage: node schedule.mjs <post folder> <public image url> [YYYY-MM-DDTHH:MM] [--dry-run]");
  process.exit(1);
}

const env = Object.fromEntries(
  readFileSync(join(root, ".env.local"), "utf8").split("\n")
    .filter((l) => l.includes("=") && !l.trim().startsWith("#"))
    .map((l) => { const i = l.indexOf("="); return [l.slice(0, i).trim(), l.slice(i + 1).trim()]; })
);
const KEY = env.BUFFER_API_KEY;
if (!KEY) { console.error("BUFFER_API_KEY missing in .env.local"); process.exit(1); }

const ORG = "64ebb37d13008a81a90aa12f";

// Post data
const win = {}; new Function("window", "module", readFileSync(join(here, "posts.js"), "utf8"))(win, {});
const post = win.POSTS.find((p) => p.out === folder);
if (!post) { console.error(`no post with out="${folder}" in posts.js`); process.exit(1); }

// Caption: "## Caption" section, paragraphs kept, wrapped lines joined
const md = readFileSync(join(root, "campaigns", "social", folder, "content.md"), "utf8");
const sect = md.split(/^## Caption.*$/m)[1].split(/^---$/m)[0].trim();
const caption = sect.split(/\n{2,}/).map((p) => {
  const lines = p.split("\n");
  return lines.every((l) => l.startsWith("- ")) ? p : lines.join(" ");
}).join("\n\n");

// dueAt: Chișinău local time -> UTC. Chișinău is UTC+3 (EEST) Apr-Oct, UTC+2 otherwise.
const local = when && !when.startsWith("--") ? when : `${post.publish.split(".").reverse().join("-")}T10:00`;
const [d, t] = local.split("T");
const month = Number(d.split("-")[1]);
const offset = month >= 4 && month <= 10 ? 3 : 2;
const dueAt = new Date(`${d}T${t}:00+0${offset}:00`).toISOString();

const gql = async (query, variables) => {
  const r = await fetch("https://api.buffer.com", {
    method: "POST",
    headers: { Authorization: `Bearer ${KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify({ query, variables }),
  });
  return r.json();
};

const { data } = await gql(`{ channels(input:{organizationId:"${ORG}"}) { id displayName service } }`);
const channels = data.channels;

const mutation = `mutation Create($input: CreatePostInput!) {
  createPost(input: $input) {
    ... on PostActionSuccess { post { id dueAt channel { service } } }
    ... on MutationError { message }
  }
}`;

console.log(`post   ${folder} (${post.kicker} · ${post.heroNumber} ${post.heroUnit})`);
console.log(`dueAt  ${dueAt}  (${local} Chișinău)`);
console.log(`image  ${imageUrl}`);
console.log(`chars  ${caption.length}\n`);

for (const ch of channels) {
  if (only && ch.service !== only) continue;
  const input = {
    channelId: ch.id,
    text: caption,
    assets: [{ image: { url: imageUrl } }],
    schedulingType: "automatic",
    mode: "customScheduled",
    dueAt,
    needsApproval: false,
    source: "idealcredit-templates",
  };
  if (ch.service === "instagram") input.metadata = { instagram: { type: "post", shouldShareToFeed: true } };
  if (ch.service === "facebook") input.metadata = { facebook: { type: "post" } };
  if (dryRun) { console.log(`[dry-run] ${ch.service.padEnd(9)} ${ch.displayName}`); continue; }
  const res = await gql(mutation, { input });
  const out = res.data?.createPost;
  if (out?.post) console.log(`ok   ${ch.service.padEnd(9)} ${ch.displayName}  post ${out.post.id}  ${out.post.dueAt}`);
  else console.log(`FAIL ${ch.service.padEnd(9)} ${ch.displayName}  ${out?.message || JSON.stringify(res)}`);
}
