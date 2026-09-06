#!/usr/bin/env node
// Export every post in posts.js to campaigns/social/<out>/image.png using its theme template.
//   node build.mjs            -> all posts
//   node build.mjs 2026-09/week-2/01   -> only that post
import { execFileSync } from "node:child_process";
import { mkdirSync, readFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const src = readFileSync(join(here, "posts.js"), "utf8");
const win = {}; new Function("window", "module", src)(win, {});
const only = process.argv[2];

win.POSTS.forEach((p, i) => {
  if (!p.out || (only && p.out !== only)) return;
  const outDir = resolve(here, "..", p.out);
  mkdirSync(outDir, { recursive: true });
  const out = join(outDir, "image.png");
  execFileSync(CHROME, [
    "--headless=new", "--hide-scrollbars", "--disable-gpu", "--force-device-scale-factor=1",
    "--window-size=1080,1350", "--virtual-time-budget=6000",
    `--screenshot=${out}`, `file://${join(here, p.theme + ".html")}?post=${i}`
  ], { stdio: "ignore" });
  console.log(`${p.theme}  ${p.out}/image.png`);
});
