import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = {
  __name: "FAQ",
  __ssrInlineRender: true,
  setup(__props) {
    const list = [
      {
        question: "Cum pot aplica pentru un credit nebancar?",
        answer: "Vă propunem mai mult soluții: cel mai rapid - completați cererea de credit online, sau la telefon, Viber sau WhatsApp, sau în unul din oficiile companiei(Chișinău sau Căușeni)."
      },
      {
        question: "Care este suma maximă pe care o pot obține?",
        answer: "Suma maximă a creditului este evaluată individual pentru fiecare client, în funcție de venituri, cheltuieli, istoric de credit și alte criterii."
      },
      {
        question: "Pot achita creditul înainte de termen?",
        answer: "Da, puteți achita anticipat creditul oricând doriți, fără penalități. Dobânda se va calcula doar pentru perioada în care ați utilizat creditul."
      },
      {
        question: "Pot primi un credit rapid, doar cu buletinul și fără gaj?",
        answer: "Da, cu condiția că aveți o sursă de venit stabilă și suficientă, responsabilitate financiară, și o istorie de credit excelentă."
      },
      {
        question: "Ce este o sursă de venit stabilă?",
        answer: "O sursă de venit stabilă este un venit regulat și predictibil pe care îl primiți în mod constant. Aceasta poate proveni din diferite surse, cum ar fi: salariu, pensie, rente, ..."
      },
      {
        question: "Dobânda este flotantă sau fixă?",
        answer: "Dobânda este fixă, și nu se modifică în timpul perioadei de creditare."
      },
      {
        question: "Ce se întâmplă în cazul întârzierii sau neplății ratelor?",
        answer: `În acest caz, se va aplica o penalizare zilnică în conformitate cu termenii și condițiile contractului de credit. Este important să ne contactați, pentru a putea găsi împreună soluții de evitare a penalizărilor.`
      },
      {
        question: "Dacă am deja un credit mai pot beneficia de unul?",
        answer: `Da, puteți obține un nou credit. Important este ca veniturile dumneavoastră să vă permită să faceți față tuturor ratelor lunare.`
      },
      {
        question: "Am credite la alte companii, le pot refinanța la Ideal Credit?",
        answer: `Da, puteți refinanța creditele existente la noi. Indiferent dacă aveți un istoric de creditare pozitiv sau negativ, Ideal Credit poate evalua posibilitatea de a refinanța creditele dumneavoastră și vă va propune cea mai bună soluție.`
      },
      {
        question: "Ce este DAE la credit?",
        answer: `DAE, sau Dobânda Anuală Efectivă, este un indicator crucial în domeniul creditelor, reprezentând costul total al unui credit pentru consumatori, incluzând atât dobânda aferentă împrumutului cât și alte costuri asociate. Este important să luați în considerare DAE atunci când comparați diferite oferte de credite.`
      },
      {
        question: "Ce este Biroul Istoriilor de Credit și cum mă afectează?",
        answer: `Biroul Istoriil de Credit sau BIC, este o instituție care colectează și stochează informații despre istoricul de credit al persoanelor fizice. Un istoric de credit bun poate influența decizia de acordare a unui credit și poate duce la obținerea unor condiții mai avantajoase.`
      },
      {
        question: "Care este diferența dintre împrumut și credit? ",
        answer: "În esență, toate creditele sunt împrumuturi, dar nu toate împrumuturile sunt credite. Creditele sunt împrumuturi formalizate, cu termeni și condiții clare, în timp ce împrumuturile pot avea forme mai flexibile și informale, de exemplu lipsa a unei dobânzi."
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid grid-cols-1 lg:grid-cols-2 gap-8" }, _attrs))}><!--[-->`);
      ssrRenderList(list, (item) => {
        _push(`<div><div class="font-semibold text-2xl mb-2">${ssrInterpolate(item.question)}</div><div>${ssrInterpolate(item.answer)}</div></div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FAQ.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=FAQ.vue.mjs.map
