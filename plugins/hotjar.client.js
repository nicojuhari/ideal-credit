export default defineNuxtPlugin(() => {
    if (import.meta.dev) return;

    const hotjar_id = 1797461;

    let script = document.createElement("script");
    script.setAttribute("defer", "");
    script.innerHTML = `
    (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:${hotjar_id},hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`;

    document.head.appendChild(script);
});
