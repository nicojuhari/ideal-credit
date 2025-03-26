import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { k as useHead } from './server.mjs';
import '../nitro/nitro.mjs';
import 'lru-cache';
import '@unocss/core';
import '@unocss/preset-wind3';
import 'devalue';
import 'consola';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import '@iconify/utils';
import 'vue-router';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'unhead/plugins';
import 'unhead/utils';
import '@unhead/addons';
import '@unhead/schema-org/vue';
import '@formkit/core';
import '@formkit/utils';
import '@formkit/observer';
import '@formkit/rules';
import '@formkit/validation';
import '@formkit/i18n';
import '@formkit/inputs';
import '@formkit/dev';
import 'tailwindcss/colors';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import 'reka-ui';
import '@vueuse/core';
import 'tailwind-variants';

const _sfc_main = {
  __name: "terms",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Termeni și Condiții - OCN Ideal Credit SRL",
      titleTemplate: "%pageTitle",
      meta: [
        { name: "description", content: "Termeni și Condiții - OCN Ideal Credit SRL" }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container sm-container card my-6" }, _attrs))}><h1 class="card-title text-center">Termeni și Condiții<br>OCN Ideal Credit SRL</h1><h2 class="text-xl mt-8 mb-2">1. Dispoziții generale</h2><p>1.1. Prezentul document stabilește termenii și condițiile generale (denumite în continuare &quot;T&amp;C&quot;) pentru utilizarea serviciilor oferite de Organizația de Creditare Nebancară &quot;Ideal Credit&quot; SRL (denumită în continuare &quot;Compania&quot;), cu sediul în or. Căușeni, str. M. Eminescu nr. 17, of. 47, Republica Moldova.</p><p>1.2. Prin utilizarea serviciilor noastre, acceptați acești T&amp;C în întregime. Vă rugăm să citiți cu atenție acest document înainte de a utiliza serviciile noastre.</p><h2 class="text-xl mt-8 mb-2">2. Definiții</h2><p>2.1. Client - persoana fizică sau juridică care utilizează, a utilizat sau și-a exprimat intenția de a utiliza serviciile Companiei.</p><p>2.2. Servicii - toate serviciile financiare oferite de Companie, inclusiv, dar fără a se limita la, credite de consum, credite auto, credite ipotecare și credite pentru afaceri.</p><p>2.3. Contract de credit - acordul încheiat între Companie și Client pentru furnizarea unui împrumut sau credit.</p><h2 class="text-xl mt-8 mb-2">3. Eligibilitate</h2><p>3.1. Pentru a fi eligibil pentru serviciile noastre, trebuie să îndepliniți următoarele condiții:</p><ul class="list-inside list-decimal space-y-2.5 mt-2"><li>Să aveți vârsta minimă de 23 ani</li><li>Să fiți cetățean sau rezident al Republicii Moldova</li><li>Să aveți un venit stabil și verificabil</li><li>Să dețineți un buletin de identitate valabil</li><li>Să demonstrați responsabilitate pentru rambursarea creditului</li></ul><h2 class="text-xl mt-8 mb-2">4. Procesul de aplicare</h2><p>4.1. Aplicarea pentru serviciile noastre se poate face online, prin intermediul site-ului nostru web, prin telefon, Viber, WhatsApp sau în persoană la una dintre sucursalele noastre.</p><p>4.2. Sunteți responsabil pentru furnizarea informațiilor corecte și complete în procesul de aplicare.</p><p>4.3. Ne rezervăm dreptul de a verifica informațiile furnizate și de a solicita documente suplimentare dacă este necesar.</p><h2 class="text-xl mt-8 mb-2">5. Evaluarea creditului</h2><p>5.1. Compania va efectua o evaluare a bonității dvs. înainte de a aproba orice împrumut sau credit.</p><p>5.2. Această evaluare poate include verificări ale istoricului de credit, veniturilor și altor factori relevanți.</p><p>5.3. În funcție de evaluarea riscului de credit, se pot solicita garanții adiționale, cum ar fi fidejusiune (garant) sau gaj (imobil).</p><h2 class="text-xl mt-8 mb-2">6. Dobânzi și comisioane</h2><p>6.1. Ratele dobânzilor și comisioanele aplicabile vor fi specificate în Contractul de credit.</p><p>6.2. Dobânda este fixă pe toată perioada de creditare.</p><p>6.3. Dobânda anuală nu va depăși 50%, conform legislației în vigoare.</p><p>6.4. Toate celelalte plăți aferente (comisioane, taxe, penalități, dobânzi de întârziere și orice alt tip de plată), cu excepția dobânzii, nu vor depăși 0,04% pe zi din valoarea totală a creditului.</p><h2 class="text-xl mt-8 mb-2">7. Rambursarea</h2><p>7.1. Clientul este obligat să ramburseze împrumutul sau creditul conform graficului de plăți stabilit în Contractul de credit.</p><p>7.2. În caz de întârziere la plată, se pot aplica penalități conform Contractului de credit și legislației în vigoare.</p><p>7.3. Clientul poate achita anticipat creditul oricând, fără penalități. Dobânda se va calcula doar pentru perioada în care creditul a fost utilizat.</p><h2 class="text-xl mt-8 mb-2">8. Confidențialitate și protecția datelor</h2><p>8.1. Compania se angajează să protejeze confidențialitatea datelor personale ale Clienților în conformitate cu Politica de Confidențialitate și legislația în vigoare.</p><h2 class="text-xl mt-8 mb-2">9. Rezilierea contractului</h2><p>9.1. Compania își rezervă dreptul de a rezilia Contractul de credit în cazul încălcării grave a termenilor și condițiilor sau în alte situații prevăzute de lege.</p><h2 class="text-xl mt-8 mb-2">10. Modificări ale T&amp;C</h2><p>10.1. Compania își rezervă dreptul de a modifica acești T&amp;C în orice moment, cu notificarea prealabilă a Clienților.</p><h2 class="text-xl mt-8 mb-2">11. Legea aplicabilă și soluționarea litigiilor</h2><p>11.1. Prezentul T&amp;C este guvernat de legislația Republicii Moldova.</p><p>11.2. Orice litigiu care decurge din sau în legătură cu acești T&amp;C va fi soluționat pe cale amiabilă sau, în caz contrar, de către instanțele judecătorești competente din Republica Moldova.</p><h2 class="text-xl mt-8 mb-2">12. Contact</h2><p>Pentru orice întrebări sau clarificări referitoare la acești T&amp;C, vă rugăm să ne contactați la:</p><p><strong>OCN Ideal Credit SRL</strong><br> Sediul principal: or.Căușeni, str.M.Eminescu nr.17, of.47<br> Sucursala Nr 1: m.Chișinău, str.Miron Costin nr.25 of.115<br> E-mail: info@idealcredit.md<br> Telefon: 0790 66 5 66, 078 80 50 60</p><p>Acești Termeni și Condiții au fost actualizați ultima dată la 26.09.2024.</p></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/terms.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=terms.vue.mjs.map
