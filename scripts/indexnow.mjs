// Tells Bing (and Copilot, Yandex and other IndexNow engines) that pages changed.
// Run after a deploy: `npm run indexnow` (all sitemap URLs) or `npm run indexnow -- /credite /contacte`.
// Google ignores IndexNow; use Search Console for Google.
const HOST = "idealcredit.md";
const KEY = "3a571878f5ca2de713b65b52e47b59e4"; // must match public/<KEY>.txt

const paths = process.argv.slice(2);
let urls;
if (paths.length) {
    urls = paths.map((p) => `https://${HOST}${p.startsWith("/") ? p : `/${p}`}`);
} else {
    const xml = await (await fetch(`https://${HOST}/sitemap.xml`)).text();
    urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
}
if (!urls.length) throw new Error("No URLs to submit (empty sitemap?)");

const res = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `https://${HOST}/${KEY}.txt`, urlList: urls }),
});
// 200 or 202 = accepted; 403 = key file not live yet (deploy first); 422 = URL not on this host.
console.log(`IndexNow: ${res.status} for ${urls.length} URL(s)`);
if (res.status >= 300) process.exit(1);
