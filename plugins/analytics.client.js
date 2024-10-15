export default defineNuxtPlugin(() => {
    if (import.meta.env.DEV) return;

    const config = useRuntimeConfig();


    let script = document.createElement("script");
    script.setAttribute("async", "");
    script.setAttribute("src", `https://www.googletagmanager.com/gtag/js?id=${config.public.gtag_id}`);
    document.head.appendChild(script);

    let script2 = document.createElement("script");
    script2.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', '${config.public.gtag_id}');`;

    document.head.appendChild(script2);
});
