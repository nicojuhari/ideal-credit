import { _ as __nuxt_component_0, a as __nuxt_component_2 } from './CalculatorCreditCTA.vue.mjs';
import { d as useAppConfig, e as useLocale, t as tv, f as _sfc_main$3, g as _appConfig, b as _sfc_main$4, a as __nuxt_component_1, h as _export_sfc, j as _sfc_main$5 } from './server.mjs';
import { defineComponent, computed, watch, ref, unref, mergeProps, withCtx, createVNode, createBlock, createCommentVNode, openBlock, Fragment, renderList, renderSlot, toDisplayString, useSSRContext, defineAsyncComponent } from 'vue';
import { ssrRenderComponent, ssrRenderClass, ssrRenderList, ssrRenderSlot, ssrRenderAttr, ssrRenderAttrs, ssrInterpolate } from 'vue/server-renderer';
import useEmblaCarousel from 'embla-carousel-vue';
import { useForwardProps, Primitive } from 'reka-ui';
import { reactivePick, computedAsync } from '@vueuse/core';
import _sfc_main$6 from './CalculatorCredit.vue.mjs';
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
import 'tailwind-variants';
import 'ideal-credit';

const theme = {
  "slots": {
    "root": "relative focus:outline-none",
    "viewport": "overflow-hidden",
    "container": "flex items-start",
    "item": "min-w-0 shrink-0 basis-full",
    "controls": "",
    "arrows": "",
    "prev": "absolute rounded-full",
    "next": "absolute rounded-full",
    "dots": "absolute inset-x-0 -bottom-7 flex flex-wrap items-center justify-center gap-3",
    "dot": [
      "cursor-pointer size-3 bg-(--ui-border-accented) rounded-full",
      "transition"
    ]
  },
  "variants": {
    "orientation": {
      "vertical": {
        "container": "flex-col -mt-4",
        "item": "pt-4",
        "prev": "-top-12 left-1/2 -translate-x-1/2 rotate-90 rtl:-rotate-90",
        "next": "-bottom-12 left-1/2 -translate-x-1/2 rotate-90 rtl:-rotate-90"
      },
      "horizontal": {
        "container": "flex-row -ms-4",
        "item": "ps-4",
        "prev": "-start-12 top-1/2 -translate-y-1/2",
        "next": "-end-12 top-1/2 -translate-y-1/2"
      }
    },
    "active": {
      "true": {
        "dot": "bg-(--ui-border-inverted)"
      }
    }
  }
};

var _a;
const appConfigCarousel = _appConfig;
const carousel = tv({ extend: tv(theme), ...((_a = appConfigCarousel.ui) == null ? void 0 : _a.carousel) || {} });
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Carousel",
  __ssrInlineRender: true,
  props: {
    as: {},
    prev: {},
    prevIcon: {},
    next: {},
    nextIcon: {},
    arrows: { type: Boolean, default: false },
    dots: { type: Boolean, default: false },
    orientation: { default: "horizontal" },
    items: {},
    autoplay: { type: [Boolean, Object], default: false },
    autoScroll: { type: [Boolean, Object], default: false },
    autoHeight: { type: [Boolean, Object], default: false },
    classNames: { type: [Boolean, Object], default: false },
    fade: { type: [Boolean, Object], default: false },
    wheelGestures: { type: Boolean, default: false },
    class: {},
    ui: {},
    align: { type: [String, Function], default: "center" },
    containScroll: { type: [Boolean, String], default: "trimSnaps" },
    slidesToScroll: { default: 1 },
    dragFree: { type: Boolean, default: false },
    dragThreshold: { default: 10 },
    inViewThreshold: { default: 0 },
    loop: { type: Boolean, default: false },
    skipSnaps: { type: Boolean, default: false },
    duration: { default: 25 },
    startIndex: { default: 0 },
    watchDrag: { type: [Boolean, Function], default: true },
    watchResize: { type: [Boolean, Function], default: true },
    watchSlides: { type: [Boolean, Function], default: true },
    watchFocus: { type: [Boolean, Function], default: true },
    active: { type: Boolean, default: true },
    breakpoints: { default: () => ({}) }
  },
  setup(__props, { expose: __expose }) {
    const props = __props;
    const appConfig = useAppConfig();
    const { dir, t } = useLocale();
    const rootProps = useForwardProps(reactivePick(props, "active", "align", "breakpoints", "containScroll", "dragFree", "dragThreshold", "duration", "inViewThreshold", "loop", "skipSnaps", "slidesToScroll", "startIndex", "watchDrag", "watchResize", "watchSlides", "watchFocus"));
    const prevIcon = computed(() => props.prevIcon || (dir.value === "rtl" ? appConfig.ui.icons.arrowRight : appConfig.ui.icons.arrowLeft));
    const nextIcon = computed(() => props.nextIcon || (dir.value === "rtl" ? appConfig.ui.icons.arrowLeft : appConfig.ui.icons.arrowRight));
    const ui = computed(() => carousel({
      orientation: props.orientation
    }));
    const options = computed(() => ({
      ...props.fade ? { align: "center", containScroll: false } : {},
      ...rootProps.value,
      axis: props.orientation === "horizontal" ? "x" : "y",
      direction: dir.value === "rtl" ? "rtl" : "ltr"
    }));
    const plugins = computedAsync(async () => {
      const plugins2 = [];
      if (props.autoplay) {
        const AutoplayPlugin = await import('embla-carousel-autoplay').then((r) => r.default);
        plugins2.push(AutoplayPlugin(typeof props.autoplay === "boolean" ? {} : props.autoplay));
      }
      if (props.autoScroll) {
        const AutoScrollPlugin = await import('embla-carousel-auto-scroll').then((r) => r.default);
        plugins2.push(AutoScrollPlugin(typeof props.autoScroll === "boolean" ? {} : props.autoScroll));
      }
      if (props.autoHeight) {
        const AutoHeightPlugin = await import('embla-carousel-auto-height').then((r) => r.default);
        plugins2.push(AutoHeightPlugin(typeof props.autoHeight === "boolean" ? {} : props.autoHeight));
      }
      if (props.classNames) {
        const ClassNamesPlugin = await import('embla-carousel-class-names').then((r) => r.default);
        plugins2.push(ClassNamesPlugin(typeof props.classNames === "boolean" ? {} : props.classNames));
      }
      if (props.fade) {
        const FadePlugin = await import('embla-carousel-fade').then((r) => r.default);
        plugins2.push(FadePlugin(typeof props.fade === "boolean" ? {} : props.fade));
      }
      if (props.wheelGestures) {
        const { WheelGesturesPlugin } = await import('embla-carousel-wheel-gestures');
        plugins2.push(WheelGesturesPlugin(typeof props.wheelGestures === "boolean" ? {} : props.wheelGestures));
      }
      return plugins2;
    });
    const [emblaRef, emblaApi] = useEmblaCarousel(options.value, plugins.value);
    watch([options, plugins], () => {
      var _a2;
      (_a2 = emblaApi.value) == null ? void 0 : _a2.reInit(options.value, plugins.value);
    });
    function scrollPrev() {
      var _a2;
      (_a2 = emblaApi.value) == null ? void 0 : _a2.scrollPrev();
    }
    function scrollNext() {
      var _a2;
      (_a2 = emblaApi.value) == null ? void 0 : _a2.scrollNext();
    }
    function scrollTo(index) {
      var _a2;
      (_a2 = emblaApi.value) == null ? void 0 : _a2.scrollTo(index);
    }
    function onKeyDown(event) {
      const prevKey = props.orientation === "vertical" ? "ArrowUp" : "ArrowLeft";
      const nextKey = props.orientation === "vertical" ? "ArrowDown" : "ArrowRight";
      if (event.key === prevKey) {
        event.preventDefault();
        scrollPrev();
        return;
      }
      if (event.key === nextKey) {
        event.preventDefault();
        scrollNext();
      }
    }
    const canScrollNext = ref(false);
    const canScrollPrev = ref(false);
    const selectedIndex = ref(0);
    const scrollSnaps = ref([]);
    __expose({
      emblaRef,
      emblaApi
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a2;
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: _ctx.as,
        role: "region",
        "aria-roledescription": "carousel",
        tabindex: "0",
        class: ui.value.root({ class: [props.class, (_a2 = props.ui) == null ? void 0 : _a2.root] }),
        onKeydown: onKeyDown
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a3, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n;
          if (_push2) {
            _push2(`<div class="${ssrRenderClass(ui.value.viewport({ class: (_a3 = props.ui) == null ? void 0 : _a3.viewport }))}"${_scopeId}><div class="${ssrRenderClass(ui.value.container({ class: (_b = props.ui) == null ? void 0 : _b.container }))}"${_scopeId}><!--[-->`);
            ssrRenderList(_ctx.items, (item, index) => {
              var _a4;
              _push2(`<div role="group" aria-roledescription="slide" class="${ssrRenderClass(ui.value.item({ class: (_a4 = props.ui) == null ? void 0 : _a4.item }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "default", {
                item,
                index
              }, null, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            });
            _push2(`<!--]--></div></div>`);
            if (_ctx.arrows || _ctx.dots) {
              _push2(`<div class="${ssrRenderClass(ui.value.controls({ class: (_c = props.ui) == null ? void 0 : _c.controls }))}"${_scopeId}>`);
              if (_ctx.arrows) {
                _push2(`<div class="${ssrRenderClass(ui.value.arrows({ class: (_d = props.ui) == null ? void 0 : _d.arrows }))}"${_scopeId}>`);
                _push2(ssrRenderComponent(_sfc_main$3, mergeProps({
                  disabled: !canScrollPrev.value,
                  icon: prevIcon.value,
                  size: "md",
                  color: "neutral",
                  variant: "outline",
                  "aria-label": unref(t)("carousel.prev")
                }, typeof _ctx.prev === "object" ? _ctx.prev : void 0, {
                  class: ui.value.prev({ class: (_e = props.ui) == null ? void 0 : _e.prev }),
                  onClick: scrollPrev
                }), null, _parent2, _scopeId));
                _push2(ssrRenderComponent(_sfc_main$3, mergeProps({
                  disabled: !canScrollNext.value,
                  icon: nextIcon.value,
                  size: "md",
                  color: "neutral",
                  variant: "outline",
                  "aria-label": unref(t)("carousel.next")
                }, typeof _ctx.next === "object" ? _ctx.next : void 0, {
                  class: ui.value.next({ class: (_f = props.ui) == null ? void 0 : _f.next }),
                  onClick: scrollNext
                }), null, _parent2, _scopeId));
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              if (_ctx.dots) {
                _push2(`<div class="${ssrRenderClass(ui.value.dots({ class: (_g = props.ui) == null ? void 0 : _g.dots }))}"${_scopeId}><!--[-->`);
                ssrRenderList(scrollSnaps.value, (_2, index) => {
                  var _a4;
                  _push2(`<button${ssrRenderAttr("aria-label", unref(t)("carousel.goto", { slide: index + 1 }))} class="${ssrRenderClass(ui.value.dot({ class: (_a4 = props.ui) == null ? void 0 : _a4.dot, active: selectedIndex.value === index }))}"${_scopeId}></button>`);
                });
                _push2(`<!--]--></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode("div", {
                ref_key: "emblaRef",
                ref: emblaRef,
                class: ui.value.viewport({ class: (_h = props.ui) == null ? void 0 : _h.viewport })
              }, [
                createVNode("div", {
                  class: ui.value.container({ class: (_i = props.ui) == null ? void 0 : _i.container })
                }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(_ctx.items, (item, index) => {
                    var _a4;
                    return openBlock(), createBlock("div", {
                      key: index,
                      role: "group",
                      "aria-roledescription": "slide",
                      class: ui.value.item({ class: (_a4 = props.ui) == null ? void 0 : _a4.item })
                    }, [
                      renderSlot(_ctx.$slots, "default", {
                        item,
                        index
                      })
                    ], 2);
                  }), 128))
                ], 2)
              ], 2),
              _ctx.arrows || _ctx.dots ? (openBlock(), createBlock("div", {
                key: 0,
                class: ui.value.controls({ class: (_j = props.ui) == null ? void 0 : _j.controls })
              }, [
                _ctx.arrows ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: ui.value.arrows({ class: (_k = props.ui) == null ? void 0 : _k.arrows })
                }, [
                  createVNode(_sfc_main$3, mergeProps({
                    disabled: !canScrollPrev.value,
                    icon: prevIcon.value,
                    size: "md",
                    color: "neutral",
                    variant: "outline",
                    "aria-label": unref(t)("carousel.prev")
                  }, typeof _ctx.prev === "object" ? _ctx.prev : void 0, {
                    class: ui.value.prev({ class: (_l = props.ui) == null ? void 0 : _l.prev }),
                    onClick: scrollPrev
                  }), null, 16, ["disabled", "icon", "aria-label", "class"]),
                  createVNode(_sfc_main$3, mergeProps({
                    disabled: !canScrollNext.value,
                    icon: nextIcon.value,
                    size: "md",
                    color: "neutral",
                    variant: "outline",
                    "aria-label": unref(t)("carousel.next")
                  }, typeof _ctx.next === "object" ? _ctx.next : void 0, {
                    class: ui.value.next({ class: (_m = props.ui) == null ? void 0 : _m.next }),
                    onClick: scrollNext
                  }), null, 16, ["disabled", "icon", "aria-label", "class"])
                ], 2)) : createCommentVNode("", true),
                _ctx.dots ? (openBlock(), createBlock("div", {
                  key: 1,
                  class: ui.value.dots({ class: (_n = props.ui) == null ? void 0 : _n.dots })
                }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(scrollSnaps.value, (_2, index) => {
                    var _a4;
                    return openBlock(), createBlock("button", {
                      key: index,
                      "aria-label": unref(t)("carousel.goto", { slide: index + 1 }),
                      class: ui.value.dot({ class: (_a4 = props.ui) == null ? void 0 : _a4.dot, active: selectedIndex.value === index }),
                      onClick: ($event) => scrollTo(index)
                    }, null, 10, ["aria-label", "onClick"]);
                  }), 128))
                ], 2)) : createCommentVNode("", true)
              ], 2)) : createCommentVNode("", true)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});

const _sfc_main$1 = {
  __name: "TipuriCredite",
  __ssrInlineRender: true,
  setup(__props) {
    let credits = [
      { name: "Credit pentru dezvoltarea afacerii", link: "credit-pentru-afaceri", image: "/credit-pentru-afaceri.webp" },
      { name: "Credit pentru nevoi personale", link: "credit-pentru-nevoi-personale", image: "/credit-pentru-nevoi-personale.webp" }
    ];
    let classes = "flex flex-col items-center justify-center gap-8 hover:scale-105 transition-all duration-300";
    const items = [
      "/recenzii/ideal-credit-recenzie-1.webp",
      "/recenzii/ideal-credit-recenzie-2.webp",
      "/recenzii/ideal-credit-recenzie-3.webp"
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = _sfc_main$4;
      const _component_UCarousel = _sfc_main$2;
      const _component_nuxt_link = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6" }, _attrs))}><div class="card flex flex-col items-center justify-center gap-8"><div class="h-[180px] flex flex-col gap-8 items-center justify-end"><div class="flex items-center justify-center gap-2"><!--[-->`);
      ssrRenderList(5, (i) => {
        _push(ssrRenderComponent(_component_UIcon, {
          name: "i-ph-star-fill",
          class: "text-brand-500 text-2xl shrink-0",
          key: i
        }, null, _parent));
      });
      _push(`<!--]--></div>`);
      _push(ssrRenderComponent(_component_UCarousel, {
        items,
        loop: "",
        autoplay: { delay: 3e3 },
        class: "w-full mx-auto"
      }, {
        default: withCtx(({ item }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", item)} class="rounded-lg"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: item,
                class: "rounded-lg"
              }, null, 8, ["src"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><h3 class="text-center text-xl lg:h-16">Ce spun clienții noștri</h3></div><!--[-->`);
      ssrRenderList(unref(credits), (item) => {
        _push(ssrRenderComponent(_component_nuxt_link, {
          key: item.name,
          to: item.link,
          class: [unref(classes), "group card"],
          title: item.name
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img${ssrRenderAttr("src", item.image)}${ssrRenderAttr("alt", item.name)} class="h-[180px] object-cover"${_scopeId}><h3 class="text-center text-xl lg:h-16"${_scopeId}>${ssrInterpolate(item.name)}</h3>`);
            } else {
              return [
                createVNode("img", {
                  src: item.image,
                  alt: item.name,
                  class: "h-[180px] object-cover"
                }, null, 8, ["src", "alt"]),
                createVNode("h3", { class: "text-center text-xl lg:h-16" }, toDisplayString(item.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TipuriCredite.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};

const __nuxt_component_5_lazy = defineAsyncComponent(() => import('./HowItWorks.vue.mjs').then((c) => c.default || c));
const __nuxt_component_6_lazy = defineAsyncComponent(() => import('./CreditConditions.vue.mjs').then((c) => c.default || c));
const __nuxt_component_7_lazy = defineAsyncComponent(() => import('./CallToAction.vue.mjs').then((c) => c.default || c));
const __nuxt_component_8_lazy = defineAsyncComponent(() => import('./ShortAboutUs.vue.mjs').then((c) => c.default || c));
const __nuxt_component_9_lazy = defineAsyncComponent(() => import('./PaymentMethods.vue.mjs').then((c) => c.default || c));
const __nuxt_component_10_lazy = defineAsyncComponent(() => import('./FAQ.vue.mjs').then((c) => c.default || c));
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_UiRecenziiButton = __nuxt_component_0;
  const _component_UiButtonsCTA = _sfc_main$5;
  const _component_UiCalculatorCreditCTA = __nuxt_component_2;
  const _component_TipuriCredite = _sfc_main$1;
  const _component_CalculatorCredit = _sfc_main$6;
  const _component_LazyHowItWorks = __nuxt_component_5_lazy;
  const _component_LazyCreditConditions = __nuxt_component_6_lazy;
  const _component_LazyCallToAction = __nuxt_component_7_lazy;
  const _component_LazyShortAboutUs = __nuxt_component_8_lazy;
  const _component_LazyPaymentMethods = __nuxt_component_9_lazy;
  const _component_LazyFAQ = __nuxt_component_10_lazy;
  _push(`<!--[--><div class="py-8 md:py-16 relative"><div class="bg-squares -mt-[1px]"></div><div class="container grid grid-cols-1 lg:grid-cols-12 gap-8"><div class="flex flex-col lg:col-span-8 h-full justify-center text-center lg:text-left">`);
  _push(ssrRenderComponent(_component_UiRecenziiButton, null, null, _parent));
  _push(`<h1 class="font-semibold text-7xl lg:text-[110px] leading-none my-10 lg:mt-4">Credite<br>nebancare <span class="text-brand-500 font-light text-[50%] lg:text-[35%] block mt-2 lg:mt-0">pentru afaceri și nevoi personale</span></h1><p class="text-gray-200 text-lg !mb-0">Rapid, transparent, dobânzi fixe<br class="lg:hidden"> și fără comisioane ascunse.</p></div><div class="lg:col-span-4 gap-4 lg:gap-6 flex flex-col justify-end">`);
  _push(ssrRenderComponent(_component_UiButtonsCTA, { toHeroSection: "" }, null, _parent));
  _push(ssrRenderComponent(_component_UiCalculatorCreditCTA, null, null, _parent));
  _push(`</div></div></div><div class="container">`);
  _push(ssrRenderComponent(_component_TipuriCredite, null, null, _parent));
  _push(`</div><div class="container mt-4 md:mt-6">`);
  _push(ssrRenderComponent(_component_CalculatorCredit, null, null, _parent));
  _push(`</div><div class="container mt-4 md:mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">`);
  _push(ssrRenderComponent(_component_LazyHowItWorks, null, null, _parent));
  _push(ssrRenderComponent(_component_LazyCreditConditions, null, null, _parent));
  _push(`</div><div class="container mt-4 md:mt-6">`);
  _push(ssrRenderComponent(_component_LazyCallToAction, null, null, _parent));
  _push(`</div><div class="container mt-4 md:mt-6">`);
  _push(ssrRenderComponent(_component_LazyShortAboutUs, null, null, _parent));
  _push(`</div><div class="container mt-4 md:mt-6">`);
  _push(ssrRenderComponent(_component_LazyPaymentMethods, null, null, _parent));
  _push(`</div><div class="container my-4 md:my-6"><h2 class="title text-center pt-8">Întrebări Frecvente</h2>`);
  _push(ssrRenderComponent(_component_LazyFAQ, null, null, _parent));
  _push(`</div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index.vue.mjs.map
