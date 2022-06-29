export default defineNuxtPlugin(() => {
    
    if(process.NODE_ENV != 'production') return

    let script = document.createElement('script')
    script.setAttribute('async', '')
    script.setAttribute("src", "https://www.googletagmanager.com/gtag/js?id=G-YXDZGPPXPH");
    document.head.appendChild(script)

    let script2 = document.createElement('script')
    script2.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-YXDZGPPXPH');`;
    
    document.head.appendChild(script2);

});
