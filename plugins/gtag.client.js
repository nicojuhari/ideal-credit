export default defineNuxtPlugin(() => {
    
    if(process.dev) return

    // let script = document.createElement('script')
    // script.setAttribute('defer', '')
    // script.setAttribute("src", "https://www.googletagmanager.com/gtag/js?id=G-YXDZGPPXPH");
    // document.head.appendChild(script)

    // let script2 = document.createElement('script')
    // script2.setAttribute("defer", "");
    // script2.innerHTML = `
    //     window.dataLayer = window.dataLayer || [];
    //     function gtag(){dataLayer.push(arguments);}
    //     gtag('js', new Date());
    //     gtag('config', 'G-YXDZGPPXPH');`;
    
    // document.head.appendChild(script2);

});
