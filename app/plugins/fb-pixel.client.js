export default defineNuxtPlugin(() => {
  
  //only in production
  if (import.meta.env.DEV) return;
  
  const { fb_pixel_id } = useRuntimeConfig().public

  if (import.meta.client && fb_pixel_id) {
      // Load Facebook Pixel script
      let script = document.createElement("script");
      script.setAttribute("defer", "");
      script.innerHTML = `
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${fb_pixel_id}');
          fbq('track', 'PageView');`;

      document.head.appendChild(script);
  }

  return {
    provide: {
      fbTrack: (event, params) => {
        if (import.meta.client && typeof fbq === 'function') {
          fbq('track', event, params);
        }
      }
    }
  }
})