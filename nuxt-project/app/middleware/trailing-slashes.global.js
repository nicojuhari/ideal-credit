// trailing-slash.global.js

export default function ({ path, query, hash }) {
    if (path === "/" || !path.endsWith("/")) return;

    const nextPath = path.replace(/\/+$/, "") || "/",
        nextRoute = { path: nextPath, query, hash };

    return navigateTo(nextRoute, { redirectCode: 301 });
}
