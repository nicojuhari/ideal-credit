import { e as useLocale, d as useAppConfig, t as tv, f as _sfc_main$2, g as _appConfig, u as useFacebookPixel, k as useHead, a as __nuxt_component_1 } from './server.mjs';
import { _ as _sfc_main$3 } from './Loading.vue.mjs';
import { defineComponent, useSlots, toRef, computed, unref, mergeProps, withCtx, renderSlot, toHandlers, createTextVNode, toDisplayString, createBlock, createCommentVNode, openBlock, createVNode, ref, resolveComponent, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderSlot, ssrInterpolate, ssrRenderClass, ssrRenderAttrs } from 'vue/server-renderer';
import { reset } from '@formkit/core';
import { useForwardPropsEmits, DialogRoot, DialogTrigger, DialogPortal, DialogOverlay, DialogContent, VisuallyHidden, DialogTitle, DialogDescription, DialogClose } from 'reka-ui';
import { reactivePick } from '@vueuse/core';
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

const theme = {
  "slots": {
    "overlay": "fixed inset-0 bg-(--ui-bg-elevated)/75",
    "content": "fixed bg-(--ui-bg) divide-y divide-(--ui-border) flex flex-col focus:outline-none",
    "header": "flex items-center gap-1.5 p-4 sm:px-6 min-h-16",
    "wrapper": "",
    "body": "flex-1 overflow-y-auto p-4 sm:p-6",
    "footer": "flex items-center gap-1.5 p-4 sm:px-6",
    "title": "text-(--ui-text-highlighted) font-semibold",
    "description": "mt-1 text-(--ui-text-muted) text-sm",
    "close": "absolute top-4 end-4"
  },
  "variants": {
    "transition": {
      "true": {
        "overlay": "data-[state=open]:animate-[fade-in_200ms_ease-out] data-[state=closed]:animate-[fade-out_200ms_ease-in]",
        "content": "data-[state=open]:animate-[scale-in_200ms_ease-out] data-[state=closed]:animate-[scale-out_200ms_ease-in]"
      }
    },
    "fullscreen": {
      "true": {
        "content": "inset-0"
      },
      "false": {
        "content": "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100vw-2rem)] max-w-lg max-h-[calc(100dvh-2rem)] sm:max-h-[calc(100dvh-4rem)] rounded-[calc(var(--ui-radius)*2)] shadow-lg ring ring-(--ui-border)"
      }
    }
  }
};

var _a;
const appConfigModal = _appConfig;
const modal = tv({ extend: tv(theme), ...((_a = appConfigModal.ui) == null ? void 0 : _a.modal) || {} });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Modal",
  __ssrInlineRender: true,
  props: {
    title: {},
    description: {},
    content: {},
    overlay: { type: Boolean, default: true },
    transition: { type: Boolean, default: true },
    fullscreen: { type: Boolean },
    portal: { type: Boolean, default: true },
    close: { type: [Boolean, Object], default: true },
    closeIcon: {},
    dismissible: { type: Boolean, default: true },
    class: {},
    ui: {},
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean, default: true }
  },
  emits: ["after:leave", "update:open"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const slots = useSlots();
    const { t } = useLocale();
    const appConfig = useAppConfig();
    const rootProps = useForwardPropsEmits(reactivePick(props, "open", "defaultOpen", "modal"), emits);
    const contentProps = toRef(() => props.content);
    const contentEvents = computed(() => {
      const events = {
        closeAutoFocus: (e) => e.preventDefault()
      };
      if (!props.dismissible) {
        return {
          pointerDownOutside: (e) => e.preventDefault(),
          interactOutside: (e) => e.preventDefault(),
          escapeKeyDown: (e) => e.preventDefault(),
          ...events
        };
      }
      return events;
    });
    const ui = computed(() => modal({
      transition: props.transition,
      fullscreen: props.fullscreen
    }));
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DialogRoot), mergeProps(unref(rootProps), _attrs), {
        default: withCtx(({ open }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (!!slots.default) {
              _push2(ssrRenderComponent(unref(DialogTrigger), {
                "as-child": "",
                class: props.class
              }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    ssrRenderSlot(_ctx.$slots, "default", { open }, null, _push3, _parent3, _scopeId2);
                  } else {
                    return [
                      renderSlot(_ctx.$slots, "default", { open })
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(unref(DialogPortal), {
              disabled: !_ctx.portal
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                var _a2, _b, _c, _d;
                if (_push3) {
                  if (_ctx.overlay) {
                    _push3(ssrRenderComponent(unref(DialogOverlay), {
                      class: ui.value.overlay({ class: (_a2 = props.ui) == null ? void 0 : _a2.overlay })
                    }, null, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(ssrRenderComponent(unref(DialogContent), mergeProps({
                    class: ui.value.content({ class: [!slots.default && props.class, (_b = props.ui) == null ? void 0 : _b.content] })
                  }, contentProps.value, {
                    onAfterLeave: ($event) => emits("after:leave")
                  }, toHandlers(contentEvents.value)), {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        if (!!slots.content && (_ctx.title || !!slots.title || (_ctx.description || !!slots.description))) {
                          _push4(ssrRenderComponent(unref(VisuallyHidden), null, {
                            default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                if (_ctx.title || !!slots.title) {
                                  _push5(ssrRenderComponent(unref(DialogTitle), null, {
                                    default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        ssrRenderSlot(_ctx.$slots, "title", {}, () => {
                                          _push6(`${ssrInterpolate(_ctx.title)}`);
                                        }, _push6, _parent6, _scopeId5);
                                      } else {
                                        return [
                                          renderSlot(_ctx.$slots, "title", {}, () => [
                                            createTextVNode(toDisplayString(_ctx.title), 1)
                                          ])
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                } else {
                                  _push5(`<!---->`);
                                }
                                if (_ctx.description || !!slots.description) {
                                  _push5(ssrRenderComponent(unref(DialogDescription), null, {
                                    default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        ssrRenderSlot(_ctx.$slots, "description", {}, () => {
                                          _push6(`${ssrInterpolate(_ctx.description)}`);
                                        }, _push6, _parent6, _scopeId5);
                                      } else {
                                        return [
                                          renderSlot(_ctx.$slots, "description", {}, () => [
                                            createTextVNode(toDisplayString(_ctx.description), 1)
                                          ])
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                } else {
                                  _push5(`<!---->`);
                                }
                              } else {
                                return [
                                  _ctx.title || !!slots.title ? (openBlock(), createBlock(unref(DialogTitle), { key: 0 }, {
                                    default: withCtx(() => [
                                      renderSlot(_ctx.$slots, "title", {}, () => [
                                        createTextVNode(toDisplayString(_ctx.title), 1)
                                      ])
                                    ]),
                                    _: 3
                                  })) : createCommentVNode("", true),
                                  _ctx.description || !!slots.description ? (openBlock(), createBlock(unref(DialogDescription), { key: 1 }, {
                                    default: withCtx(() => [
                                      renderSlot(_ctx.$slots, "description", {}, () => [
                                        createTextVNode(toDisplayString(_ctx.description), 1)
                                      ])
                                    ]),
                                    _: 3
                                  })) : createCommentVNode("", true)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                        ssrRenderSlot(_ctx.$slots, "content", {}, () => {
                          var _a3, _b2, _c2;
                          if (!!slots.header || (_ctx.title || !!slots.title) || (_ctx.description || !!slots.description) || (_ctx.close || !!slots.close)) {
                            _push4(`<div class="${ssrRenderClass(ui.value.header({ class: (_a3 = props.ui) == null ? void 0 : _a3.header }))}"${_scopeId3}>`);
                            ssrRenderSlot(_ctx.$slots, "header", {}, () => {
                              var _a4, _b3, _c3;
                              _push4(`<div class="${ssrRenderClass(ui.value.wrapper({ class: (_a4 = props.ui) == null ? void 0 : _a4.wrapper }))}"${_scopeId3}>`);
                              if (_ctx.title || !!slots.title) {
                                _push4(ssrRenderComponent(unref(DialogTitle), {
                                  class: ui.value.title({ class: (_b3 = props.ui) == null ? void 0 : _b3.title })
                                }, {
                                  default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                                    if (_push5) {
                                      ssrRenderSlot(_ctx.$slots, "title", {}, () => {
                                        _push5(`${ssrInterpolate(_ctx.title)}`);
                                      }, _push5, _parent5, _scopeId4);
                                    } else {
                                      return [
                                        renderSlot(_ctx.$slots, "title", {}, () => [
                                          createTextVNode(toDisplayString(_ctx.title), 1)
                                        ])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent4, _scopeId3));
                              } else {
                                _push4(`<!---->`);
                              }
                              if (_ctx.description || !!slots.description) {
                                _push4(ssrRenderComponent(unref(DialogDescription), {
                                  class: ui.value.description({ class: (_c3 = props.ui) == null ? void 0 : _c3.description })
                                }, {
                                  default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                                    if (_push5) {
                                      ssrRenderSlot(_ctx.$slots, "description", {}, () => {
                                        _push5(`${ssrInterpolate(_ctx.description)}`);
                                      }, _push5, _parent5, _scopeId4);
                                    } else {
                                      return [
                                        renderSlot(_ctx.$slots, "description", {}, () => [
                                          createTextVNode(toDisplayString(_ctx.description), 1)
                                        ])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent4, _scopeId3));
                              } else {
                                _push4(`<!---->`);
                              }
                              _push4(`</div>`);
                              if (_ctx.close || !!slots.close) {
                                _push4(ssrRenderComponent(unref(DialogClose), { "as-child": "" }, {
                                  default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                                    if (_push5) {
                                      ssrRenderSlot(_ctx.$slots, "close", { ui: ui.value }, () => {
                                        var _a5;
                                        if (_ctx.close) {
                                          _push5(ssrRenderComponent(_sfc_main$2, mergeProps({
                                            icon: _ctx.closeIcon || unref(appConfig).ui.icons.close,
                                            size: "md",
                                            color: "neutral",
                                            variant: "ghost",
                                            "aria-label": unref(t)("modal.close")
                                          }, typeof _ctx.close === "object" ? _ctx.close : {}, {
                                            class: ui.value.close({ class: (_a5 = props.ui) == null ? void 0 : _a5.close })
                                          }), null, _parent5, _scopeId4));
                                        } else {
                                          _push5(`<!---->`);
                                        }
                                      }, _push5, _parent5, _scopeId4);
                                    } else {
                                      return [
                                        renderSlot(_ctx.$slots, "close", { ui: ui.value }, () => {
                                          var _a5;
                                          return [
                                            _ctx.close ? (openBlock(), createBlock(_sfc_main$2, mergeProps({
                                              key: 0,
                                              icon: _ctx.closeIcon || unref(appConfig).ui.icons.close,
                                              size: "md",
                                              color: "neutral",
                                              variant: "ghost",
                                              "aria-label": unref(t)("modal.close")
                                            }, typeof _ctx.close === "object" ? _ctx.close : {}, {
                                              class: ui.value.close({ class: (_a5 = props.ui) == null ? void 0 : _a5.close })
                                            }), null, 16, ["icon", "aria-label", "class"])) : createCommentVNode("", true)
                                          ];
                                        })
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent4, _scopeId3));
                              } else {
                                _push4(`<!---->`);
                              }
                            }, _push4, _parent4, _scopeId3);
                            _push4(`</div>`);
                          } else {
                            _push4(`<!---->`);
                          }
                          if (!!slots.body) {
                            _push4(`<div class="${ssrRenderClass(ui.value.body({ class: (_b2 = props.ui) == null ? void 0 : _b2.body }))}"${_scopeId3}>`);
                            ssrRenderSlot(_ctx.$slots, "body", {}, null, _push4, _parent4, _scopeId3);
                            _push4(`</div>`);
                          } else {
                            _push4(`<!---->`);
                          }
                          if (!!slots.footer) {
                            _push4(`<div class="${ssrRenderClass(ui.value.footer({ class: (_c2 = props.ui) == null ? void 0 : _c2.footer }))}"${_scopeId3}>`);
                            ssrRenderSlot(_ctx.$slots, "footer", {}, null, _push4, _parent4, _scopeId3);
                            _push4(`</div>`);
                          } else {
                            _push4(`<!---->`);
                          }
                        }, _push4, _parent4, _scopeId3);
                      } else {
                        return [
                          !!slots.content && (_ctx.title || !!slots.title || (_ctx.description || !!slots.description)) ? (openBlock(), createBlock(unref(VisuallyHidden), { key: 0 }, {
                            default: withCtx(() => [
                              _ctx.title || !!slots.title ? (openBlock(), createBlock(unref(DialogTitle), { key: 0 }, {
                                default: withCtx(() => [
                                  renderSlot(_ctx.$slots, "title", {}, () => [
                                    createTextVNode(toDisplayString(_ctx.title), 1)
                                  ])
                                ]),
                                _: 3
                              })) : createCommentVNode("", true),
                              _ctx.description || !!slots.description ? (openBlock(), createBlock(unref(DialogDescription), { key: 1 }, {
                                default: withCtx(() => [
                                  renderSlot(_ctx.$slots, "description", {}, () => [
                                    createTextVNode(toDisplayString(_ctx.description), 1)
                                  ])
                                ]),
                                _: 3
                              })) : createCommentVNode("", true)
                            ]),
                            _: 3
                          })) : createCommentVNode("", true),
                          renderSlot(_ctx.$slots, "content", {}, () => {
                            var _a3, _b2, _c2;
                            return [
                              !!slots.header || (_ctx.title || !!slots.title) || (_ctx.description || !!slots.description) || (_ctx.close || !!slots.close) ? (openBlock(), createBlock("div", {
                                key: 0,
                                class: ui.value.header({ class: (_a3 = props.ui) == null ? void 0 : _a3.header })
                              }, [
                                renderSlot(_ctx.$slots, "header", {}, () => {
                                  var _a4, _b3, _c3;
                                  return [
                                    createVNode("div", {
                                      class: ui.value.wrapper({ class: (_a4 = props.ui) == null ? void 0 : _a4.wrapper })
                                    }, [
                                      _ctx.title || !!slots.title ? (openBlock(), createBlock(unref(DialogTitle), {
                                        key: 0,
                                        class: ui.value.title({ class: (_b3 = props.ui) == null ? void 0 : _b3.title })
                                      }, {
                                        default: withCtx(() => [
                                          renderSlot(_ctx.$slots, "title", {}, () => [
                                            createTextVNode(toDisplayString(_ctx.title), 1)
                                          ])
                                        ]),
                                        _: 3
                                      }, 8, ["class"])) : createCommentVNode("", true),
                                      _ctx.description || !!slots.description ? (openBlock(), createBlock(unref(DialogDescription), {
                                        key: 1,
                                        class: ui.value.description({ class: (_c3 = props.ui) == null ? void 0 : _c3.description })
                                      }, {
                                        default: withCtx(() => [
                                          renderSlot(_ctx.$slots, "description", {}, () => [
                                            createTextVNode(toDisplayString(_ctx.description), 1)
                                          ])
                                        ]),
                                        _: 3
                                      }, 8, ["class"])) : createCommentVNode("", true)
                                    ], 2),
                                    _ctx.close || !!slots.close ? (openBlock(), createBlock(unref(DialogClose), {
                                      key: 0,
                                      "as-child": ""
                                    }, {
                                      default: withCtx(() => [
                                        renderSlot(_ctx.$slots, "close", { ui: ui.value }, () => {
                                          var _a5;
                                          return [
                                            _ctx.close ? (openBlock(), createBlock(_sfc_main$2, mergeProps({
                                              key: 0,
                                              icon: _ctx.closeIcon || unref(appConfig).ui.icons.close,
                                              size: "md",
                                              color: "neutral",
                                              variant: "ghost",
                                              "aria-label": unref(t)("modal.close")
                                            }, typeof _ctx.close === "object" ? _ctx.close : {}, {
                                              class: ui.value.close({ class: (_a5 = props.ui) == null ? void 0 : _a5.close })
                                            }), null, 16, ["icon", "aria-label", "class"])) : createCommentVNode("", true)
                                          ];
                                        })
                                      ]),
                                      _: 3
                                    })) : createCommentVNode("", true)
                                  ];
                                })
                              ], 2)) : createCommentVNode("", true),
                              !!slots.body ? (openBlock(), createBlock("div", {
                                key: 1,
                                class: ui.value.body({ class: (_b2 = props.ui) == null ? void 0 : _b2.body })
                              }, [
                                renderSlot(_ctx.$slots, "body")
                              ], 2)) : createCommentVNode("", true),
                              !!slots.footer ? (openBlock(), createBlock("div", {
                                key: 2,
                                class: ui.value.footer({ class: (_c2 = props.ui) == null ? void 0 : _c2.footer })
                              }, [
                                renderSlot(_ctx.$slots, "footer")
                              ], 2)) : createCommentVNode("", true)
                            ];
                          })
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    _ctx.overlay ? (openBlock(), createBlock(unref(DialogOverlay), {
                      key: 0,
                      class: ui.value.overlay({ class: (_c = props.ui) == null ? void 0 : _c.overlay })
                    }, null, 8, ["class"])) : createCommentVNode("", true),
                    createVNode(unref(DialogContent), mergeProps({
                      class: ui.value.content({ class: [!slots.default && props.class, (_d = props.ui) == null ? void 0 : _d.content] })
                    }, contentProps.value, {
                      onAfterLeave: ($event) => emits("after:leave")
                    }, toHandlers(contentEvents.value)), {
                      default: withCtx(() => [
                        !!slots.content && (_ctx.title || !!slots.title || (_ctx.description || !!slots.description)) ? (openBlock(), createBlock(unref(VisuallyHidden), { key: 0 }, {
                          default: withCtx(() => [
                            _ctx.title || !!slots.title ? (openBlock(), createBlock(unref(DialogTitle), { key: 0 }, {
                              default: withCtx(() => [
                                renderSlot(_ctx.$slots, "title", {}, () => [
                                  createTextVNode(toDisplayString(_ctx.title), 1)
                                ])
                              ]),
                              _: 3
                            })) : createCommentVNode("", true),
                            _ctx.description || !!slots.description ? (openBlock(), createBlock(unref(DialogDescription), { key: 1 }, {
                              default: withCtx(() => [
                                renderSlot(_ctx.$slots, "description", {}, () => [
                                  createTextVNode(toDisplayString(_ctx.description), 1)
                                ])
                              ]),
                              _: 3
                            })) : createCommentVNode("", true)
                          ]),
                          _: 3
                        })) : createCommentVNode("", true),
                        renderSlot(_ctx.$slots, "content", {}, () => {
                          var _a3, _b2, _c2;
                          return [
                            !!slots.header || (_ctx.title || !!slots.title) || (_ctx.description || !!slots.description) || (_ctx.close || !!slots.close) ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: ui.value.header({ class: (_a3 = props.ui) == null ? void 0 : _a3.header })
                            }, [
                              renderSlot(_ctx.$slots, "header", {}, () => {
                                var _a4, _b3, _c3;
                                return [
                                  createVNode("div", {
                                    class: ui.value.wrapper({ class: (_a4 = props.ui) == null ? void 0 : _a4.wrapper })
                                  }, [
                                    _ctx.title || !!slots.title ? (openBlock(), createBlock(unref(DialogTitle), {
                                      key: 0,
                                      class: ui.value.title({ class: (_b3 = props.ui) == null ? void 0 : _b3.title })
                                    }, {
                                      default: withCtx(() => [
                                        renderSlot(_ctx.$slots, "title", {}, () => [
                                          createTextVNode(toDisplayString(_ctx.title), 1)
                                        ])
                                      ]),
                                      _: 3
                                    }, 8, ["class"])) : createCommentVNode("", true),
                                    _ctx.description || !!slots.description ? (openBlock(), createBlock(unref(DialogDescription), {
                                      key: 1,
                                      class: ui.value.description({ class: (_c3 = props.ui) == null ? void 0 : _c3.description })
                                    }, {
                                      default: withCtx(() => [
                                        renderSlot(_ctx.$slots, "description", {}, () => [
                                          createTextVNode(toDisplayString(_ctx.description), 1)
                                        ])
                                      ]),
                                      _: 3
                                    }, 8, ["class"])) : createCommentVNode("", true)
                                  ], 2),
                                  _ctx.close || !!slots.close ? (openBlock(), createBlock(unref(DialogClose), {
                                    key: 0,
                                    "as-child": ""
                                  }, {
                                    default: withCtx(() => [
                                      renderSlot(_ctx.$slots, "close", { ui: ui.value }, () => {
                                        var _a5;
                                        return [
                                          _ctx.close ? (openBlock(), createBlock(_sfc_main$2, mergeProps({
                                            key: 0,
                                            icon: _ctx.closeIcon || unref(appConfig).ui.icons.close,
                                            size: "md",
                                            color: "neutral",
                                            variant: "ghost",
                                            "aria-label": unref(t)("modal.close")
                                          }, typeof _ctx.close === "object" ? _ctx.close : {}, {
                                            class: ui.value.close({ class: (_a5 = props.ui) == null ? void 0 : _a5.close })
                                          }), null, 16, ["icon", "aria-label", "class"])) : createCommentVNode("", true)
                                        ];
                                      })
                                    ]),
                                    _: 3
                                  })) : createCommentVNode("", true)
                                ];
                              })
                            ], 2)) : createCommentVNode("", true),
                            !!slots.body ? (openBlock(), createBlock("div", {
                              key: 1,
                              class: ui.value.body({ class: (_b2 = props.ui) == null ? void 0 : _b2.body })
                            }, [
                              renderSlot(_ctx.$slots, "body")
                            ], 2)) : createCommentVNode("", true),
                            !!slots.footer ? (openBlock(), createBlock("div", {
                              key: 2,
                              class: ui.value.footer({ class: (_c2 = props.ui) == null ? void 0 : _c2.footer })
                            }, [
                              renderSlot(_ctx.$slots, "footer")
                            ], 2)) : createCommentVNode("", true)
                          ];
                        })
                      ]),
                      _: 3
                    }, 16, ["class", "onAfterLeave"])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              !!slots.default ? (openBlock(), createBlock(unref(DialogTrigger), {
                key: 0,
                "as-child": "",
                class: props.class
              }, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default", { open })
                ]),
                _: 2
              }, 1032, ["class"])) : createCommentVNode("", true),
              createVNode(unref(DialogPortal), {
                disabled: !_ctx.portal
              }, {
                default: withCtx(() => {
                  var _a2, _b;
                  return [
                    _ctx.overlay ? (openBlock(), createBlock(unref(DialogOverlay), {
                      key: 0,
                      class: ui.value.overlay({ class: (_a2 = props.ui) == null ? void 0 : _a2.overlay })
                    }, null, 8, ["class"])) : createCommentVNode("", true),
                    createVNode(unref(DialogContent), mergeProps({
                      class: ui.value.content({ class: [!slots.default && props.class, (_b = props.ui) == null ? void 0 : _b.content] })
                    }, contentProps.value, {
                      onAfterLeave: ($event) => emits("after:leave")
                    }, toHandlers(contentEvents.value)), {
                      default: withCtx(() => [
                        !!slots.content && (_ctx.title || !!slots.title || (_ctx.description || !!slots.description)) ? (openBlock(), createBlock(unref(VisuallyHidden), { key: 0 }, {
                          default: withCtx(() => [
                            _ctx.title || !!slots.title ? (openBlock(), createBlock(unref(DialogTitle), { key: 0 }, {
                              default: withCtx(() => [
                                renderSlot(_ctx.$slots, "title", {}, () => [
                                  createTextVNode(toDisplayString(_ctx.title), 1)
                                ])
                              ]),
                              _: 3
                            })) : createCommentVNode("", true),
                            _ctx.description || !!slots.description ? (openBlock(), createBlock(unref(DialogDescription), { key: 1 }, {
                              default: withCtx(() => [
                                renderSlot(_ctx.$slots, "description", {}, () => [
                                  createTextVNode(toDisplayString(_ctx.description), 1)
                                ])
                              ]),
                              _: 3
                            })) : createCommentVNode("", true)
                          ]),
                          _: 3
                        })) : createCommentVNode("", true),
                        renderSlot(_ctx.$slots, "content", {}, () => {
                          var _a3, _b2, _c;
                          return [
                            !!slots.header || (_ctx.title || !!slots.title) || (_ctx.description || !!slots.description) || (_ctx.close || !!slots.close) ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: ui.value.header({ class: (_a3 = props.ui) == null ? void 0 : _a3.header })
                            }, [
                              renderSlot(_ctx.$slots, "header", {}, () => {
                                var _a4, _b3, _c2;
                                return [
                                  createVNode("div", {
                                    class: ui.value.wrapper({ class: (_a4 = props.ui) == null ? void 0 : _a4.wrapper })
                                  }, [
                                    _ctx.title || !!slots.title ? (openBlock(), createBlock(unref(DialogTitle), {
                                      key: 0,
                                      class: ui.value.title({ class: (_b3 = props.ui) == null ? void 0 : _b3.title })
                                    }, {
                                      default: withCtx(() => [
                                        renderSlot(_ctx.$slots, "title", {}, () => [
                                          createTextVNode(toDisplayString(_ctx.title), 1)
                                        ])
                                      ]),
                                      _: 3
                                    }, 8, ["class"])) : createCommentVNode("", true),
                                    _ctx.description || !!slots.description ? (openBlock(), createBlock(unref(DialogDescription), {
                                      key: 1,
                                      class: ui.value.description({ class: (_c2 = props.ui) == null ? void 0 : _c2.description })
                                    }, {
                                      default: withCtx(() => [
                                        renderSlot(_ctx.$slots, "description", {}, () => [
                                          createTextVNode(toDisplayString(_ctx.description), 1)
                                        ])
                                      ]),
                                      _: 3
                                    }, 8, ["class"])) : createCommentVNode("", true)
                                  ], 2),
                                  _ctx.close || !!slots.close ? (openBlock(), createBlock(unref(DialogClose), {
                                    key: 0,
                                    "as-child": ""
                                  }, {
                                    default: withCtx(() => [
                                      renderSlot(_ctx.$slots, "close", { ui: ui.value }, () => {
                                        var _a5;
                                        return [
                                          _ctx.close ? (openBlock(), createBlock(_sfc_main$2, mergeProps({
                                            key: 0,
                                            icon: _ctx.closeIcon || unref(appConfig).ui.icons.close,
                                            size: "md",
                                            color: "neutral",
                                            variant: "ghost",
                                            "aria-label": unref(t)("modal.close")
                                          }, typeof _ctx.close === "object" ? _ctx.close : {}, {
                                            class: ui.value.close({ class: (_a5 = props.ui) == null ? void 0 : _a5.close })
                                          }), null, 16, ["icon", "aria-label", "class"])) : createCommentVNode("", true)
                                        ];
                                      })
                                    ]),
                                    _: 3
                                  })) : createCommentVNode("", true)
                                ];
                              })
                            ], 2)) : createCommentVNode("", true),
                            !!slots.body ? (openBlock(), createBlock("div", {
                              key: 1,
                              class: ui.value.body({ class: (_b2 = props.ui) == null ? void 0 : _b2.body })
                            }, [
                              renderSlot(_ctx.$slots, "body")
                            ], 2)) : createCommentVNode("", true),
                            !!slots.footer ? (openBlock(), createBlock("div", {
                              key: 2,
                              class: ui.value.footer({ class: (_c = props.ui) == null ? void 0 : _c.footer })
                            }, [
                              renderSlot(_ctx.$slots, "footer")
                            ], 2)) : createCommentVNode("", true)
                          ];
                        })
                      ]),
                      _: 3
                    }, 16, ["class", "onAfterLeave"])
                  ];
                }),
                _: 3
              }, 8, ["disabled"])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});

const _sfc_main = {
  __name: "cerere-de-credit-online",
  __ssrInlineRender: true,
  setup(__props) {
    const { trackEvent } = useFacebookPixel();
    const formData = ref({});
    const formSuccess = ref(false);
    const formError = ref(false);
    useHead({
      title: "Cerere de credit online rapid și simplu",
      meta: [
        { name: "description", content: "Depune o cerere de credit online. Ideal Credit oferă credite rapide pentru nevoi personale și afaceri, cu dobânzi fixe și fără comisioane." },
        { name: "keywords", content: "ideal credit, credite rapide, credite Moldova, credite Chișinău, credite online, împrumuturi" }
      ]
    });
    const loading = ref(false);
    const submitForm = async () => {
      loading.value = true;
      formError.value = false;
      formSuccess.value = false;
      try {
        formData.value.subject = formData.value.suma + " MDL, " + formData.value.termen + " luni, " + formData.value.nume;
        formData.value.from_name = "Cerere de Credit Online";
        let response = await $fetch("/api/cerere-online", {
          method: "POST",
          body: JSON.stringify(formData.value)
        });
        if (response.success) {
          trackEvent("Lead");
          setTimeout(() => {
            reset("cerere-online-form", {});
            formSuccess.value = true;
          }, 1200);
        } else {
          console.log(response);
          formError.value = true;
        }
      } catch (e) {
        console.error(e);
        formError.value = true;
      } finally {
        setTimeout(() => {
          loading.value = false;
        }, 1e3);
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_FormKit = resolveComponent("FormKit");
      const _component_NuxtLink = __nuxt_component_1;
      const _component_UiLoading = _sfc_main$3;
      const _component_UModal = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container sm-container relative my-4 md:my-6" }, _attrs))}><div class="card"><h1 class="card-title text-center !mb-2">Cerere de credit online</h1><div class="text-center mb-8">ai nevoie doar de 3 minute!</div>`);
      _push(ssrRenderComponent(_component_FormKit, {
        id: "cerere-online-form",
        type: "form",
        method: "POST",
        actions: false,
        onSubmit: submitForm,
        modelValue: formData.value,
        "onUpdate:modelValue": ($event) => formData.value = $event,
        "incomplete-message": "Ne pare rău, careva cîmpuri sunt greșite sau lipsesc"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_FormKit, {
              type: "number",
              step: "100",
              max: "300000",
              min: "10000",
              name: "suma",
              placeholder: "20000",
              label: "Suma creditului (MDL)",
              validation: "required|number|max:300000|min:10000",
              "validation-messages": {
                required: "Suma este obligatorie",
                length: "Cel puțin 3 caractere, maximum 25",
                max: "Maximum 300.000 MDL",
                min: "Minim 10.000 MDL"
              }
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_FormKit, {
              type: "number",
              step: "1",
              min: "6",
              max: "60",
              name: "termen",
              placeholder: "12",
              label: "Termen (luni)",
              validation: "required|number|max:60|min:6",
              "validation-messages": {
                required: "Termenul este obligatoriu",
                max: "Maximum 60 luni",
                min: "Minim 6 luni"
              }
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_FormKit, {
              type: "text",
              name: "scopul_creditului",
              placeholder: "Achiziționarea unui apartament, refinanțare, investiții în afaceri, etc.",
              label: "Scopul creditului",
              validation: "required|length:5,25",
              "outer-class": "mt-4",
              "validation-messages": {
                required: "Scopul este obligatoriu",
                length: "Cel puțin 5 caractere, maximum 25"
              }
            }, null, _parent2, _scopeId));
            _push2(`<h2 class="mt-12 mb-4"${_scopeId}>Date personale</h2><div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_FormKit, {
              type: "text",
              name: "prenume",
              placeholder: "Ion",
              label: "Prenume",
              validation: "required|length:3,25",
              "validation-messages": {
                required: "Prenumele este obligatoriu",
                length: "Cel puțin 3 caractere, maximum 25"
              }
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_FormKit, {
              type: "text",
              name: "nume",
              placeholder: "Popescu",
              label: "Nume",
              validation: "required|length:3,25",
              "validation-messages": {
                required: "Numele este obligatoriu",
                length: "Cel puțin 3 caractere, maximum 25"
              }
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_FormKit, {
              type: "text",
              name: "adresa_domiciliu",
              placeholder: "Oraș/Sat, Strada, număr, bloc, ap.",
              label: "Adresa",
              validation: "required|length:6,25",
              "validation-messages": {
                required: "Adresa este obligatorie",
                length: "Cel puțin 6 caractere, maximum 25"
              }
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_FormKit, {
              type: "tel",
              name: "telefon",
              placeholder: "012345678",
              label: "Telefon/Mobil",
              validation: "required",
              "validation-messages": {
                required: "Telefonul este obligatoriu"
              }
            }, null, _parent2, _scopeId));
            _push2(`</div><h2 class="mt-12 mb-4"${_scopeId}>Date Financiare</h2><div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_FormKit, {
              type: "number",
              name: "venituri",
              placeholder: "9000",
              label: "Venituri oficiale (MDL)",
              help: "Venituri care pot fi confirmate prin documente",
              validation: "required",
              "validation-messages": {
                required: "Veniturile lunare sunt obligatorii"
              }
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_FormKit, {
              type: "number",
              min: "0",
              name: "datorii",
              placeholder: "1200",
              label: "Datorii achitate lunare (MDL)",
              validation: "required",
              help: "Dacă sunt alte credite, pune 0 dacă nu ai datorii",
              "validation-messages": {
                required: "Cîmpul datorii este obligatoriu"
              }
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_FormKit, {
              type: "text",
              name: "locul_de_munca",
              label: "Locul de muncă",
              help: "Denumirea companiei, funcția, adresa, ...",
              validation: "required",
              "outer-class": "mt-4",
              "validation-messages": {
                required: "Locul de muncă este obligatoriu"
              }
            }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_FormKit, {
              name: "bunuri",
              type: "checkbox",
              label: "Bunuri în proprietate",
              "outer-class": "mt-6",
              options: ["Autoturism", "Casă", "Apartament", "Terenuri", "Alte", "Nu am nimic"],
              validation: "required|min:1",
              "validation-messages": {
                required: "Bunuri în proprietate este obligatoriu"
              }
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-6"${_scopeId}><div class="bg-brand-400/10 py-3 p-4 rounded"${_scopeId}><ul class="list-disc list-inside"${_scopeId}><li${_scopeId}>Aceasta este o cerere de credit online preventivă.</li><li${_scopeId}>Declar pe propria răspundere exactitatea datelor prezentate mai sus.</li><li${_scopeId}>În caz de necesitate Ideal Credit SRL va verifica informaţia oferită, utilizând toate sursele accesibile, cum ar fi Biroul Istoriilor de Credit.</li><li${_scopeId}>În cazul refuzului de acordare a creditului, Ideal Credit SRL nu este obligată să argumenteze motivul acelui refuz.</li><li${_scopeId}>Sunt de acord cu utilizarea `);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "/cookies",
              title: "Politica de Cookies",
              class: "underline"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`cookie-urilor`);
                } else {
                  return [
                    createTextVNode("cookie-urilor")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`, cu `);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "/terms",
              title: "Termeni și condiții",
              class: "underline"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`termenii și condițiile`);
                } else {
                  return [
                    createTextVNode("termenii și condițiile")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`, precum și cu `);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "/privacy",
              title: "Politica de Confidențialitate",
              class: "underline"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`politica de confidențialitate`);
                } else {
                  return [
                    createTextVNode("politica de confidențialitate")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`.</li></ul>`);
            _push2(ssrRenderComponent(_component_FormKit, {
              type: "checkbox",
              label: "Accept declarațiile de mai sus",
              name: "terms",
              "outer-class": "mt-8 formkit-cerere-terms font-bold",
              validation: "accepted",
              "validation-visibility": "dirty",
              "validation-messages": {
                accepted: "Vă rugăm să confirmați că sunteți de acord cu termenii de mai sus"
              }
            }, null, _parent2, _scopeId));
            _push2(`</div></div><div class="mt-6"${_scopeId}><div class="bg-red-400/10 text-red-500 py-3 p-4 rounded"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_FormKit, {
              type: "checkbox",
              label: "Pentru clienții noi, este necesară prezența unui sau mai mulți fidejusori (garant/поручитель).",
              name: "garant",
              "outer-class": "mt-2 formkit-cerere-terms text-xl",
              validation: "accepted",
              "validation-visibility": "dirty",
              "validation-messages": {
                accepted: "Vă rugăm să confirmați că sunteți de acord să vă prezentați cu cel puțin un fidejusor"
              }
            }, null, _parent2, _scopeId));
            _push2(`</div></div><div class="flex justify-end mt-6"${_scopeId}><button type="submit" class="btn btn-primary"${_scopeId}> Trimite </button></div>`);
          } else {
            return [
              createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6" }, [
                createVNode(_component_FormKit, {
                  type: "number",
                  step: "100",
                  max: "300000",
                  min: "10000",
                  name: "suma",
                  placeholder: "20000",
                  label: "Suma creditului (MDL)",
                  validation: "required|number|max:300000|min:10000",
                  "validation-messages": {
                    required: "Suma este obligatorie",
                    length: "Cel puțin 3 caractere, maximum 25",
                    max: "Maximum 300.000 MDL",
                    min: "Minim 10.000 MDL"
                  }
                }),
                createVNode(_component_FormKit, {
                  type: "number",
                  step: "1",
                  min: "6",
                  max: "60",
                  name: "termen",
                  placeholder: "12",
                  label: "Termen (luni)",
                  validation: "required|number|max:60|min:6",
                  "validation-messages": {
                    required: "Termenul este obligatoriu",
                    max: "Maximum 60 luni",
                    min: "Minim 6 luni"
                  }
                })
              ]),
              createVNode(_component_FormKit, {
                type: "text",
                name: "scopul_creditului",
                placeholder: "Achiziționarea unui apartament, refinanțare, investiții în afaceri, etc.",
                label: "Scopul creditului",
                validation: "required|length:5,25",
                "outer-class": "mt-4",
                "validation-messages": {
                  required: "Scopul este obligatoriu",
                  length: "Cel puțin 5 caractere, maximum 25"
                }
              }),
              createVNode("h2", { class: "mt-12 mb-4" }, "Date personale"),
              createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6" }, [
                createVNode(_component_FormKit, {
                  type: "text",
                  name: "prenume",
                  placeholder: "Ion",
                  label: "Prenume",
                  validation: "required|length:3,25",
                  "validation-messages": {
                    required: "Prenumele este obligatoriu",
                    length: "Cel puțin 3 caractere, maximum 25"
                  }
                }),
                createVNode(_component_FormKit, {
                  type: "text",
                  name: "nume",
                  placeholder: "Popescu",
                  label: "Nume",
                  validation: "required|length:3,25",
                  "validation-messages": {
                    required: "Numele este obligatoriu",
                    length: "Cel puțin 3 caractere, maximum 25"
                  }
                })
              ]),
              createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-4" }, [
                createVNode(_component_FormKit, {
                  type: "text",
                  name: "adresa_domiciliu",
                  placeholder: "Oraș/Sat, Strada, număr, bloc, ap.",
                  label: "Adresa",
                  validation: "required|length:6,25",
                  "validation-messages": {
                    required: "Adresa este obligatorie",
                    length: "Cel puțin 6 caractere, maximum 25"
                  }
                }),
                createVNode(_component_FormKit, {
                  type: "tel",
                  name: "telefon",
                  placeholder: "012345678",
                  label: "Telefon/Mobil",
                  validation: "required",
                  "validation-messages": {
                    required: "Telefonul este obligatoriu"
                  }
                })
              ]),
              createVNode("h2", { class: "mt-12 mb-4" }, "Date Financiare"),
              createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6" }, [
                createVNode(_component_FormKit, {
                  type: "number",
                  name: "venituri",
                  placeholder: "9000",
                  label: "Venituri oficiale (MDL)",
                  help: "Venituri care pot fi confirmate prin documente",
                  validation: "required",
                  "validation-messages": {
                    required: "Veniturile lunare sunt obligatorii"
                  }
                }),
                createVNode(_component_FormKit, {
                  type: "number",
                  min: "0",
                  name: "datorii",
                  placeholder: "1200",
                  label: "Datorii achitate lunare (MDL)",
                  validation: "required",
                  help: "Dacă sunt alte credite, pune 0 dacă nu ai datorii",
                  "validation-messages": {
                    required: "Cîmpul datorii este obligatoriu"
                  }
                })
              ]),
              createVNode(_component_FormKit, {
                type: "text",
                name: "locul_de_munca",
                label: "Locul de muncă",
                help: "Denumirea companiei, funcția, adresa, ...",
                validation: "required",
                "outer-class": "mt-4",
                "validation-messages": {
                  required: "Locul de muncă este obligatoriu"
                }
              }),
              createVNode("div", null, [
                createVNode(_component_FormKit, {
                  name: "bunuri",
                  type: "checkbox",
                  label: "Bunuri în proprietate",
                  "outer-class": "mt-6",
                  options: ["Autoturism", "Casă", "Apartament", "Terenuri", "Alte", "Nu am nimic"],
                  validation: "required|min:1",
                  "validation-messages": {
                    required: "Bunuri în proprietate este obligatoriu"
                  }
                })
              ]),
              createVNode("div", { class: "mt-6" }, [
                createVNode("div", { class: "bg-brand-400/10 py-3 p-4 rounded" }, [
                  createVNode("ul", { class: "list-disc list-inside" }, [
                    createVNode("li", null, "Aceasta este o cerere de credit online preventivă."),
                    createVNode("li", null, "Declar pe propria răspundere exactitatea datelor prezentate mai sus."),
                    createVNode("li", null, "În caz de necesitate Ideal Credit SRL va verifica informaţia oferită, utilizând toate sursele accesibile, cum ar fi Biroul Istoriilor de Credit."),
                    createVNode("li", null, "În cazul refuzului de acordare a creditului, Ideal Credit SRL nu este obligată să argumenteze motivul acelui refuz."),
                    createVNode("li", null, [
                      createTextVNode("Sunt de acord cu utilizarea "),
                      createVNode(_component_NuxtLink, {
                        to: "/cookies",
                        title: "Politica de Cookies",
                        class: "underline"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("cookie-urilor")
                        ]),
                        _: 1
                      }),
                      createTextVNode(", cu "),
                      createVNode(_component_NuxtLink, {
                        to: "/terms",
                        title: "Termeni și condiții",
                        class: "underline"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("termenii și condițiile")
                        ]),
                        _: 1
                      }),
                      createTextVNode(", precum și cu "),
                      createVNode(_component_NuxtLink, {
                        to: "/privacy",
                        title: "Politica de Confidențialitate",
                        class: "underline"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("politica de confidențialitate")
                        ]),
                        _: 1
                      }),
                      createTextVNode(".")
                    ])
                  ]),
                  createVNode(_component_FormKit, {
                    type: "checkbox",
                    label: "Accept declarațiile de mai sus",
                    name: "terms",
                    "outer-class": "mt-8 formkit-cerere-terms font-bold",
                    validation: "accepted",
                    "validation-visibility": "dirty",
                    "validation-messages": {
                      accepted: "Vă rugăm să confirmați că sunteți de acord cu termenii de mai sus"
                    }
                  })
                ])
              ]),
              createVNode("div", { class: "mt-6" }, [
                createVNode("div", { class: "bg-red-400/10 text-red-500 py-3 p-4 rounded" }, [
                  createVNode(_component_FormKit, {
                    type: "checkbox",
                    label: "Pentru clienții noi, este necesară prezența unui sau mai mulți fidejusori (garant/поручитель).",
                    name: "garant",
                    "outer-class": "mt-2 formkit-cerere-terms text-xl",
                    validation: "accepted",
                    "validation-visibility": "dirty",
                    "validation-messages": {
                      accepted: "Vă rugăm să confirmați că sunteți de acord să vă prezentați cu cel puțin un fidejusor"
                    }
                  })
                ])
              ]),
              createVNode("div", { class: "flex justify-end mt-6" }, [
                createVNode("button", {
                  type: "submit",
                  class: "btn btn-primary"
                }, " Trimite ")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      if (loading.value) {
        _push(ssrRenderComponent(_component_UiLoading, { local: "" }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_UModal, {
        open: formSuccess.value,
        "onUpdate:open": ($event) => formSuccess.value = $event,
        class: "text-black-950",
        title: "Cererea a fost trimisă cu succes!"
      }, {
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="my-6 space-y-4"${_scopeId}><div${_scopeId}>Veți primi un răspuns în maxim 2 ore în zilele lucrătoare.</div><div${_scopeId}>Vă mulțumim că ați ales Ideal Credit!</div></div>`);
          } else {
            return [
              createVNode("div", { class: "my-6 space-y-4" }, [
                createVNode("div", null, "Veți primi un răspuns în maxim 2 ore în zilele lucrătoare."),
                createVNode("div", null, "Vă mulțumim că ați ales Ideal Credit!")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/cerere-de-credit-online.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=cerere-de-credit-online.vue.mjs.map
