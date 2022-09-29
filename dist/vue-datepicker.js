import { openBlock as p, createElementBlock as A, createElementVNode as j, defineComponent as Oe, ref as O, inject as ye, computed as R, unref as s, renderSlot as H, createCommentVNode as $, normalizeClass as fe, withKeys as ne, createBlock as se, withModifiers as He, reactive as Ht, onMounted as Ne, normalizeStyle as mt, Fragment as ie, createTextVNode as Ke, toDisplayString as ge, renderList as pe, createVNode as ze, Transition as yt, withCtx as re, nextTick as At, onBeforeUpdate as $a, onUnmounted as cn, mergeProps as Ce, createSlots as Pe, isRef as tt, normalizeProps as Ge, resolveDynamicComponent as Bt, useSlots as fn, withDirectives as Ma, guardReactiveProps as nt, vShow as Sa, watch as St, getCurrentScope as Aa, onScopeDispose as Ca, toRef as Tt, provide as ct, Teleport as Pa } from "vue";
import { getMonth as ve, getYear as ue, isEqual as En, setHours as Fn, setMinutes as Hn, setSeconds as Kn, setMilliseconds as mn, isValid as Ot, setMonth as Nt, setYear as lt, getHours as _e, getMinutes as Be, getSeconds as je, format as An, isAfter as vn, isBefore as yn, set as Me, parseISO as Ta, parse as ln, isDate as Ra, add as Wn, sub as Va, startOfWeek as Ln, endOfWeek as _a, addMonths as rt, getDay as Ba, addDays as Dt, subMonths as $t, addYears as Oa, subYears as Na, getISOWeek as Ia, differenceInCalendarDays as Ya, eachDayOfInterval as Cn } from "date-fns";
const ot = (e, a) => {
  const n = e.__vccOpts || e;
  for (const [t, c] of a)
    n[t] = c;
  return n;
}, Ea = {}, Fa = {
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  width: "32",
  height: "32",
  viewBox: "0 0 32 32",
  class: "dp__icon"
}, Ha = /* @__PURE__ */ j("path", { d: "M29.333 8c0-2.208-1.792-4-4-4h-18.667c-2.208 0-4 1.792-4 4v18.667c0 2.208 1.792 4 4 4h18.667c2.208 0 4-1.792 4-4v-18.667zM26.667 8v18.667c0 0.736-0.597 1.333-1.333 1.333 0 0-18.667 0-18.667 0-0.736 0-1.333-0.597-1.333-1.333 0 0 0-18.667 0-18.667 0-0.736 0.597-1.333 1.333-1.333 0 0 18.667 0 18.667 0 0.736 0 1.333 0.597 1.333 1.333z" }, null, -1), Ka = /* @__PURE__ */ j("path", { d: "M20 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z" }, null, -1), Wa = /* @__PURE__ */ j("path", { d: "M9.333 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z" }, null, -1), La = /* @__PURE__ */ j("path", { d: "M4 14.667h24c0.736 0 1.333-0.597 1.333-1.333s-0.597-1.333-1.333-1.333h-24c-0.736 0-1.333 0.597-1.333 1.333s0.597 1.333 1.333 1.333z" }, null, -1), Ua = [
  Ha,
  Ka,
  Wa,
  La
];
function Ga(e, a) {
  return p(), A("svg", Fa, Ua);
}
const Kt = /* @__PURE__ */ ot(Ea, [["render", Ga]]), ja = {}, za = {
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  width: "32",
  height: "32",
  viewBox: "0 0 32 32",
  class: "dp__icon"
}, Xa = /* @__PURE__ */ j("path", { d: "M23.057 7.057l-16 16c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l16-16c0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0z" }, null, -1), qa = /* @__PURE__ */ j("path", { d: "M7.057 8.943l16 16c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885l-16-16c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885z" }, null, -1), Ja = [
  Xa,
  qa
];
function Za(e, a) {
  return p(), A("svg", za, Ja);
}
const Qa = /* @__PURE__ */ ot(ja, [["render", Za]]), xa = {}, el = {
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  width: "32",
  height: "32",
  viewBox: "0 0 32 32",
  class: "dp__icon"
}, tl = /* @__PURE__ */ j("path", { d: "M20.943 23.057l-7.057-7.057c0 0 7.057-7.057 7.057-7.057 0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0l-8 8c-0.521 0.521-0.521 1.365 0 1.885l8 8c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885z" }, null, -1), nl = [
  tl
];
function al(e, a) {
  return p(), A("svg", el, nl);
}
const Pn = /* @__PURE__ */ ot(xa, [["render", al]]), ll = {}, rl = {
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  width: "32",
  height: "32",
  viewBox: "0 0 32 32",
  class: "dp__icon"
}, sl = /* @__PURE__ */ j("path", { d: "M12.943 24.943l8-8c0.521-0.521 0.521-1.365 0-1.885l-8-8c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885l7.057 7.057c0 0-7.057 7.057-7.057 7.057-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0z" }, null, -1), ol = [
  sl
];
function il(e, a) {
  return p(), A("svg", rl, ol);
}
const Tn = /* @__PURE__ */ ot(ll, [["render", il]]), ul = {}, dl = {
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  width: "32",
  height: "32",
  viewBox: "0 0 32 32",
  class: "dp__icon"
}, cl = /* @__PURE__ */ j("path", { d: "M16 1.333c-8.095 0-14.667 6.572-14.667 14.667s6.572 14.667 14.667 14.667c8.095 0 14.667-6.572 14.667-14.667s-6.572-14.667-14.667-14.667zM16 4c6.623 0 12 5.377 12 12s-5.377 12-12 12c-6.623 0-12-5.377-12-12s5.377-12 12-12z" }, null, -1), fl = /* @__PURE__ */ j("path", { d: "M14.667 8v8c0 0.505 0.285 0.967 0.737 1.193l5.333 2.667c0.658 0.329 1.46 0.062 1.789-0.596s0.062-1.46-0.596-1.789l-4.596-2.298c0 0 0-7.176 0-7.176 0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z" }, null, -1), ml = [
  cl,
  fl
];
function vl(e, a) {
  return p(), A("svg", dl, ml);
}
const Un = /* @__PURE__ */ ot(ul, [["render", vl]]), yl = {}, pl = {
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  width: "32",
  height: "32",
  viewBox: "0 0 32 32",
  class: "dp__icon"
}, hl = /* @__PURE__ */ j("path", { d: "M24.943 19.057l-8-8c-0.521-0.521-1.365-0.521-1.885 0l-8 8c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l7.057-7.057c0 0 7.057 7.057 7.057 7.057 0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885z" }, null, -1), gl = [
  hl
];
function kl(e, a) {
  return p(), A("svg", pl, gl);
}
const Gn = /* @__PURE__ */ ot(yl, [["render", kl]]), wl = {}, bl = {
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  width: "32",
  height: "32",
  viewBox: "0 0 32 32",
  class: "dp__icon"
}, Dl = /* @__PURE__ */ j("path", { d: "M7.057 12.943l8 8c0.521 0.521 1.365 0.521 1.885 0l8-8c0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0l-7.057 7.057c0 0-7.057-7.057-7.057-7.057-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885z" }, null, -1), $l = [
  Dl
];
function Ml(e, a) {
  return p(), A("svg", bl, $l);
}
const jn = /* @__PURE__ */ ot(wl, [["render", Ml]]), Rn = (e, a) => {
  const n = ln(e, a.slice(0, e.length), new Date());
  return Ot(n) && Ra(n) ? n : null;
}, zt = (e, a) => {
  if (typeof a == "string")
    return Rn(e, a);
  if (Array.isArray(a)) {
    let n = null;
    for (let t = 0; t < a.length && (n = Rn(e, a[t]), !n); t++)
      ;
    return n;
  }
  return typeof a == "function" ? a(e) : null;
}, Fe = (e) => {
  let a = new Date(JSON.parse(JSON.stringify(e)));
  return a = Fn(a, 0), a = Hn(a, 0), a = Kn(a, 0), a = mn(a, 0), a;
}, rn = (e) => Array.isArray(e) ? Ot(e[0]) && (e[1] ? Ot(e[1]) : !0) : e ? Ot(e) : !1, Ae = (e, a, n, t) => {
  let c = e ? new Date(e) : new Date();
  return (a || a === 0) && (c = Fn(c, +a)), (n || n === 0) && (c = Hn(c, +n)), (t || t === 0) && (c = Kn(c, +t)), mn(c, 0);
}, Sl = (e) => {
  const a = rt(e, 1);
  return { month: ve(a), year: ue(a) };
}, st = (e, a, n) => {
  let t = e ? new Date(e) : new Date();
  return (a || a === 0) && (t = Nt(t, a)), n && (t = lt(t, n)), t;
}, Vn = (e, a) => e ? `HH:mm${a ? ":ss" : ""}` : `hh:mm${a ? ":ss" : ""} aa`, zn = (e, a, n, t, c, f, g, m) => e || (t ? "MM/yyyy" : c ? Vn(a, n) : f ? "MM/dd/yyyy" : g ? "yyyy" : m ? `MM/dd/yyyy, ${Vn(a, n)}` : "MM/dd/yyyy"), Xt = (e) => {
  const a = e || new Date();
  return {
    hours: _e(a),
    minutes: Be(a),
    seconds: je(a)
  };
}, It = (e) => ({ month: ve(e), year: ue(e) }), _n = (e) => Array.isArray(e) ? [It(e[0]), e[1] ? It(e[1]) : null] : It(e), sn = (e) => Array.isArray(e) ? [Xt(e[0]), Xt(e[1])] : Xt(e), qt = (e, a, n) => n ? An(e, a, { locale: n }) : An(e, a), vt = (e, a, n, t, c) => Array.isArray(e) ? `${qt(e[0], a, n)} ${c && !e[1] ? "" : t || "-"} ${e[1] ? qt(e[1], a, n) : ""}` : qt(e, a, n), $e = (e, a) => !e || !a ? !1 : vn(Fe(e), Fe(a)), we = (e, a) => !e || !a ? !1 : yn(Fe(e), Fe(a)), ce = (e, a) => !e || !a ? !1 : En(Fe(e), Fe(a)), Al = (e, a) => Wn(Me(new Date(), e), a), Cl = (e, a) => Va(Me(new Date(), e), a), Jt = (e) => Me(new Date(), { hours: _e(e), minutes: Be(e), seconds: je(e) }), Bn = (e) => Me(new Date(), {
  hours: +e.hours || 0,
  minutes: +e.minutes || 0,
  seconds: +e.seconds || 0
}), ft = (e, a, n, t) => {
  if (!e)
    return !0;
  if (t) {
    const c = n === "max" ? yn(e, a) : vn(e, a), f = { seconds: 0, milliseconds: 0 };
    return c || En(Me(e, f), Me(a, f));
  }
  return n === "max" ? e.getTime() <= a.getTime() : e.getTime() >= a.getTime();
}, on = (e, a, n, t, c) => {
  let f = !0;
  if (!e)
    return !0;
  const g = !c && !t ? Array.isArray(e) ? [e[0] ? Jt(e[0]) : null, e[1] ? Jt(e[1]) : null] : Jt(e) : e;
  if (a || t) {
    const m = a ? Bn(a) : new Date(t);
    Array.isArray(g) ? f = ft(g[0], m, "max", !!t) && ft(g[1], m, "max", !!t) : f = ft(g, m, "max", !!t);
  }
  if (n || c) {
    const m = n ? Bn(n) : new Date(c);
    Array.isArray(g) ? f = ft(g[0], m, "min", !!c) && ft(g[1], m, "min", !!c) && f : f = ft(g, m, "min", !!c) && f;
  }
  return f;
}, Pl = (e, a, n) => {
  let t = !0;
  return a && n && (t = $e(new Date(e), new Date(a)) && we(new Date(e), new Date(n))), a && (t = $e(new Date(e), new Date(a))), n && (t = we(new Date(e), new Date(n))), t;
}, Ee = (e) => e instanceof Date ? e : Ta(e), Zt = (e, a) => {
  if (a) {
    const t = new Date().getTimezoneOffset() * 6e4;
    return new Date(e.getTime() - t).toISOString();
  }
  const n = Date.UTC(
    e.getUTCFullYear(),
    e.getUTCMonth(),
    e.getUTCDate(),
    e.getUTCHours(),
    e.getUTCMinutes(),
    e.getUTCSeconds()
  );
  return new Date(n).toISOString();
}, Xn = (e, a, n) => e && e[0] && e[1] ? $e(n, e[0]) && we(n, e[1]) : e && e[0] && a ? $e(n, e[0]) && we(n, a) || we(n, e[0]) && $e(n, a) : !1, Rt = (e, a) => {
  const n = Ln(e, { weekStartsOn: a }), t = _a(e, { weekStartsOn: a });
  return [n, t];
}, qn = (e, a) => Array.isArray(a) ? a.some((n) => ce(Ee(new Date(n)), Ee(e))) : a(e), Tl = (e, a, n, t, c, f, g, m) => {
  const k = n ? $e(Ee(e), Ee(n)) : !1, w = a ? we(Ee(e), Ee(a)) : !1, B = qn(e, t), E = (f.months.length ? f.months.map((l) => +l) : []).includes(ve(e)), I = g.length ? g.some((l) => +l === Ba(e)) : !1, U = c.length ? !c.some((l) => ce(Ee(l), Ee(e))) : !1, V = ue(e), ee = V < +m[0] || V > +m[1];
  return !(k || w || B || E || ee || I || U);
}, Jn = (e, a, n, t, c, f, g) => ({
  validate: (k) => Tl(k, e, a, n, t, c, f, g)
}), Xe = Symbol(), Wt = Symbol(), pn = Symbol(), Zn = Symbol(), Qn = Symbol(), qe = Symbol(), hn = {
  disabled: { type: Boolean, default: !1 },
  readonly: { type: Boolean, default: !1 },
  autoApply: { type: Boolean, default: !1 },
  inline: { type: Boolean, default: !1 },
  textInput: { type: Boolean, default: !1 }
}, gn = {
  range: { type: Boolean, default: !1 },
  uid: { type: String, default: null }
}, xn = {
  enableSeconds: { type: Boolean, default: !1 },
  is24: { type: Boolean, default: !0 },
  noHoursOverlay: { type: Boolean, default: !1 },
  noMinutesOverlay: { type: Boolean, default: !1 },
  noSecondsOverlay: { type: Boolean, default: !1 },
  hoursGridIncrement: { type: [String, Number], default: 1 },
  minutesGridIncrement: { type: [String, Number], default: 5 },
  secondsGridIncrement: { type: [String, Number], default: 5 },
  hoursIncrement: { type: [Number, String], default: 1 },
  minutesIncrement: { type: [Number, String], default: 1 },
  secondsIncrement: { type: [Number, String], default: 1 }
}, ea = {
  ...xn,
  fixedStart: { type: Boolean, default: !1 },
  fixedEnd: { type: Boolean, default: !1 },
  timePicker: { type: Boolean, default: !1 }
}, ta = {
  name: { type: String, default: null },
  placeholder: { type: String, default: "" },
  hideInputIcon: { type: Boolean, default: !1 },
  clearable: { type: Boolean, default: !0 },
  state: { type: Boolean, default: null },
  required: { type: Boolean, default: !1 },
  autocomplete: { type: String, default: "off" },
  inputClassName: { type: String, default: null },
  inlineWithInput: { type: Boolean, default: !1 },
  textInputOptions: { type: Object, default: () => null }
}, na = {
  minTime: { type: Object, default: null },
  maxTime: { type: Object, default: null }
}, kn = {
  minDate: { type: [Date, String], default: null },
  maxDate: { type: [Date, String], default: null }
}, aa = {
  selectText: { type: String, default: "Select" },
  cancelText: { type: String, default: "Cancel" },
  previewFormat: {
    type: [String, Function],
    default: () => ""
  },
  multiDates: { type: Boolean, default: !1 },
  partialRange: { type: Boolean, default: !0 },
  ignoreTimeValidation: { type: Boolean, default: !1 },
  ...na
}, wn = {
  monthPicker: { type: Boolean, default: !1 },
  customProps: { type: Object, default: null },
  yearPicker: { type: Boolean, default: !1 },
  modelAuto: { type: Boolean, default: !1 }
}, la = {
  locale: { type: String, default: "en-Us" },
  weekNumName: { type: String, default: "W" },
  weekStart: { type: [Number, String], default: 1 },
  weekNumbers: { type: Boolean, default: !1 },
  calendarClassName: { type: String, default: null },
  noSwipe: { type: Boolean, default: !1 },
  monthChangeOnScroll: { type: [Boolean, String], default: !0 },
  dayNames: {
    type: [Function, Array],
    default: null
  }
}, ra = {
  ...ea,
  ...aa,
  ...wn,
  ...kn,
  ...la,
  ...gn,
  vertical: { type: Boolean, default: !1 },
  disableMonthYearSelect: { type: Boolean, default: !1 },
  menuClassName: { type: String, default: null },
  yearRange: { type: Array, default: () => [1900, 2100] },
  multiCalendarsSolo: { type: Boolean, default: !1 },
  calendarCellClassName: { type: String, default: null },
  enableTimePicker: { type: Boolean, default: !0 },
  autoApply: { type: Boolean, default: !1 },
  disabledDates: { type: [Array, Function], default: () => [] },
  monthNameFormat: { type: String, default: "short" },
  startDate: { type: [Date, String], default: null },
  startTime: { type: [Object, Array], default: null },
  monthYearComponent: { type: Object, default: null },
  timePickerComponent: { type: Object, default: null },
  actionRowComponent: { type: Object, default: null },
  hideOffsetDates: { type: Boolean, default: !1 },
  autoRange: { type: [Number, String], default: null },
  noToday: { type: Boolean, default: !1 },
  disabledWeekDays: { type: Array, default: () => [] },
  allowedDates: { type: Array, default: () => [] },
  showNowButton: { type: Boolean, default: !1 },
  nowButtonLabel: { type: String, default: "Now" },
  markers: { type: Array, default: () => [] },
  modeHeight: { type: [Number, String], default: 255 },
  escClose: { type: Boolean, default: !0 },
  spaceConfirm: { type: Boolean, default: !0 },
  monthChangeOnArrows: { type: Boolean, default: !0 },
  presetRanges: { type: Array, default: () => [] },
  flow: { type: Array, default: () => [] },
  preventMinMaxNavigation: { type: Boolean, default: !1 },
  minRange: { type: [Number, String], default: null },
  maxRange: { type: [Number, String], default: null },
  multiDatesLimit: { type: [Number, String], default: null },
  reverseYears: { type: Boolean, default: !1 },
  keepActionRow: { type: Boolean, default: !1 },
  weekPicker: { type: Boolean, default: !1 },
  filters: { type: Object, default: () => ({}) },
  arrowNavigation: { type: Boolean, default: !1 },
  multiStatic: { type: Boolean, default: !0 },
  disableTimeRangeValidation: { type: Boolean, default: !1 },
  highlight: {
    type: [Array, Function],
    default: null
  },
  highlightWeekDays: {
    type: Array,
    default: null
  },
  highlightDisabledDays: { type: Boolean, default: !1 },
  teleportCenter: { type: Boolean, default: !1 }
}, Rl = {
  ...ta,
  ...hn,
  ...ra,
  multiCalendars: { type: [Boolean, Number, String], default: null },
  modelValue: { type: [String, Date, Array, Object, Number], default: null },
  modelType: { type: String, default: null },
  position: { type: String, default: "center" },
  dark: { type: Boolean, default: !1 },
  format: {
    type: [String, Function],
    default: () => null
  },
  closeOnScroll: { type: Boolean, default: !1 },
  autoPosition: { type: Boolean, default: !0 },
  closeOnAutoApply: { type: Boolean, default: !0 },
  teleport: { type: [String, Object], default: "body" },
  altPosition: { type: [Boolean, Function], default: !1 },
  transitions: { type: [Boolean, Object], default: !0 },
  formatLocale: { type: Object, default: null },
  utc: { type: [Boolean, String], default: !1 },
  ariaLabels: { type: Object, default: () => ({}) },
  offset: { type: [Number, String], default: 10 }
}, sa = {
  range: { type: Boolean, default: !1 },
  multiCalendars: { type: Number, default: 0 },
  internalModelValue: { type: [Date, Array], default: null }
}, oa = {
  ...wn,
  ...sa,
  vertical: { type: Boolean, default: !1 },
  month: { type: Number, default: 0 },
  year: { type: Number, default: 0 },
  instance: { type: Number, default: 1 }
}, Vl = ["aria-label", "aria-disabled", "aria-readonly"], _l = {
  key: 1,
  class: "dp__input_wrap"
}, Bl = ["id", "name", "inputmode", "placeholder", "disabled", "readonly", "required", "value", "autocomplete", "onKeydown"], Ol = {
  key: 2,
  class: "dp__input_icon"
}, Nl = {
  key: 4,
  class: "dp__clear_icon"
}, Il = /* @__PURE__ */ Oe({
  __name: "DatepickerInput",
  props: {
    ...ta,
    ...hn,
    ...gn,
    inputValue: { type: String, default: "" },
    inline: { type: Boolean, default: !1 },
    isMenuOpen: { type: Boolean, default: !1 },
    pattern: { type: String, default: "" }
  },
  emits: [
    "clear",
    "open",
    "update:inputValue",
    "setInputDate",
    "close",
    "selectDate",
    "setEmptyDate",
    "toggle",
    "focus-prev",
    "focus",
    "blur"
  ],
  setup(e, { expose: a, emit: n }) {
    const t = e, c = O(), f = O(null), g = O(!1), m = ye(Xe), k = R(
      () => ({
        dp__pointer: !t.disabled && !t.readonly && !t.textInput,
        dp__disabled: t.disabled,
        dp__input_readonly: !t.textInput,
        dp__input: !0,
        dp__input_icon_pad: !t.hideInputIcon,
        dp__input_valid: t.state,
        dp__input_invalid: t.state === !1,
        dp__input_focus: g.value || t.isMenuOpen,
        dp__input_reg: !t.textInput,
        [t.inputClassName]: !!t.inputClassName
      })
    ), w = (o) => {
      var K;
      const { value: Y } = o.target, { format: X, rangeSeparator: P } = t.textInputOptions;
      if (Y !== "") {
        if (((K = t.textInputOptions) == null ? void 0 : K.openMenu) && !t.isMenuOpen && n("open"), t.range) {
          const [q, te] = Y.split(`${P}`);
          if (q && te) {
            const x = zt(q.trim(), X || t.pattern), z = zt(te.trim(), X || t.pattern);
            c.value = x && z ? [x, z] : null;
          }
        } else
          c.value = zt(Y, X || t.pattern);
        n("setInputDate", c.value);
      } else
        n("setInputDate", null), t.autoApply && (n("setEmptyDate"), c.value = null);
      n("update:inputValue", Y);
    }, B = () => {
      var o, Y;
      ((o = t.textInputOptions) == null ? void 0 : o.enterSubmit) && rn(c.value) && t.inputValue !== "" ? (n("setInputDate", c.value, !0), c.value = null) : ((Y = t.textInputOptions) == null ? void 0 : Y.enterSubmit) && t.inputValue === "" && (c.value = null, n("clear"));
    }, _ = () => {
      var o, Y;
      ((o = t.textInputOptions) == null ? void 0 : o.tabSubmit) && rn(c.value) && t.inputValue !== "" ? (n("setInputDate", c.value, !0), c.value = null) : ((Y = t.textInputOptions) == null ? void 0 : Y.tabSubmit) && t.inputValue === "" && (c.value = null, n("clear"));
    }, E = () => {
      g.value = !0, n("focus");
    }, I = (o) => {
      var Y;
      o.preventDefault(), o.stopImmediatePropagation(), o.stopPropagation(), t.textInput && ((Y = t.textInputOptions) == null ? void 0 : Y.openMenu) ? t.isMenuOpen ? t.textInputOptions.enterSubmit && n("selectDate") : n("open") : t.textInput || n("toggle");
    }, U = () => {
      g.value = !1, t.isMenuOpen || n("blur"), t.autoApply && t.textInput && c.value && (n("setInputDate", c.value), n("selectDate"), c.value = null);
    }, V = () => {
      n("clear");
    }, ee = (o) => {
      t.textInput || o.preventDefault();
    };
    return a({
      focusInput: () => {
        f.value && f.value.focus({ preventScroll: !0 });
      }
    }), (o, Y) => (p(), A("div", {
      onClick: I,
      "aria-label": s(m).input,
      role: "textbox",
      "aria-multiline": "false",
      "aria-disabled": o.disabled,
      "aria-readonly": o.readonly
    }, [
      o.$slots.trigger && !o.$slots["dp-input"] && !e.inline ? H(o.$slots, "trigger", { key: 0 }) : $("", !0),
      !o.$slots.trigger && (!e.inline || o.inlineWithInput) ? (p(), A("div", _l, [
        o.$slots["dp-input"] && !o.$slots.trigger && !e.inline ? H(o.$slots, "dp-input", {
          key: 0,
          value: e.inputValue,
          onInput: w,
          onEnter: B,
          onTab: _,
          onClear: V
        }) : $("", !0),
        o.$slots["dp-input"] ? $("", !0) : (p(), A("input", {
          key: 1,
          ref_key: "inputRef",
          ref: f,
          id: o.uid ? `dp-input-${o.uid}` : void 0,
          name: o.name,
          class: fe(s(k)),
          inputmode: o.textInput ? "text" : "none",
          placeholder: o.placeholder,
          disabled: o.disabled,
          readonly: o.readonly,
          required: o.required,
          value: e.inputValue,
          autocomplete: o.autocomplete,
          onInput: w,
          onKeydown: [
            ne(I, ["enter"]),
            ne(_, ["tab"])
          ],
          onBlur: U,
          onFocus: E,
          onKeypress: ee
        }, null, 42, Bl)),
        o.$slots["input-icon"] && !o.hideInputIcon ? (p(), A("span", Ol, [
          H(o.$slots, "input-icon")
        ])) : $("", !0),
        !o.$slots["input-icon"] && !o.hideInputIcon && !o.$slots["dp-input"] ? (p(), se(s(Kt), {
          key: 3,
          class: "dp__input_icon dp__input_icons"
        })) : $("", !0),
        o.$slots["clear-icon"] && e.inputValue && o.clearable && !o.disabled && !o.readonly ? (p(), A("span", Nl, [
          H(o.$slots, "clear-icon", { clear: V })
        ])) : $("", !0),
        o.clearable && !o.$slots["clear-icon"] && e.inputValue && !o.disabled && !o.readonly ? (p(), se(s(Qa), {
          key: 5,
          class: "dp__clear_icon dp__input_icons",
          onClick: He(V, ["stop", "prevent"])
        }, null, 8, ["onClick"])) : $("", !0)
      ])) : $("", !0)
    ], 8, Vl));
  }
}), Yl = (e) => typeof e == "object", On = (e, a) => a, El = (e) => Array.isArray(e) && e.length === 2, Fl = (e) => Array.isArray(e), Hl = (e) => typeof e == "object", bt = (e) => Array.isArray(e), Ve = (e) => Array.isArray(e), Yt = (e) => Array.isArray(e) && e.length === 2, Kl = (e, a) => a ? Array.isArray(e) : Yt(e), Wl = (e) => Array.isArray(e), Ll = (e) => typeof e == "string" || typeof e == "object" || typeof e == "number", Nn = (e) => typeof e == "string", de = Ht({
  monthYear: [],
  calendar: [],
  time: [],
  actionRow: [],
  selectionGrid: [],
  timePicker: {
    0: [],
    1: []
  },
  monthPicker: []
}), Qt = O(null), Vt = O(!1), xt = O(!1), en = O(!1), tn = O(!1), De = O(0), he = O(0), Je = () => {
  const e = R(() => Vt.value ? [...de.selectionGrid, de.actionRow].filter((l) => l.length) : xt.value ? [
    ...de.timePicker[0],
    ...de.timePicker[1],
    tn.value ? [] : [Qt.value],
    de.actionRow
  ].filter((l) => l.length) : en.value ? [...de.monthPicker, de.actionRow] : [de.monthYear, ...de.calendar, de.time, de.actionRow].filter((l) => l.length)), a = (l) => {
    De.value = l ? De.value + 1 : De.value - 1;
    let o = null;
    e.value[he.value] && (o = e.value[he.value][De.value]), o || (De.value = l ? De.value - 1 : De.value + 1);
  }, n = (l) => {
    if (he.value === 0 && !l || he.value === e.value.length && l)
      return;
    he.value = l ? he.value + 1 : he.value - 1, e.value[he.value] ? e.value[he.value] && !e.value[he.value][De.value] && De.value !== 0 && (De.value = e.value[he.value].length - 1) : he.value = l ? he.value - 1 : he.value + 1;
  }, t = (l) => {
    let o = null;
    e.value[he.value] && (o = e.value[he.value][De.value]), o ? o.focus({ preventScroll: !Vt.value }) : De.value = l ? De.value - 1 : De.value + 1;
  }, c = () => {
    a(!0), t(!0);
  }, f = () => {
    a(!1), t(!1);
  }, g = () => {
    n(!1), t(!0);
  }, m = () => {
    n(!0), t(!0);
  }, k = (l, o) => {
    de[o] = l;
  }, w = (l, o) => {
    de[o] = l;
  }, B = () => {
    De.value = 0, he.value = 0;
  };
  return {
    buildMatrix: k,
    buildMultiLevelMatrix: w,
    setTimePickerBackRef: (l) => {
      Qt.value = l;
    },
    setSelectionGrid: (l) => {
      Vt.value = l, B(), l || (de.selectionGrid = []);
    },
    setTimePicker: (l, o = !1) => {
      xt.value = l, tn.value = o, B(), l || (de.timePicker[0] = [], de.timePicker[1] = []);
    },
    setTimePickerElements: (l, o = 0) => {
      de.timePicker[o] = l;
    },
    arrowRight: c,
    arrowLeft: f,
    arrowUp: g,
    arrowDown: m,
    clearArrowNav: () => {
      de.monthYear = [], de.calendar = [], de.time = [], de.actionRow = [], de.selectionGrid = [], de.timePicker[0] = [], de.timePicker[1] = [], Vt.value = !1, xt.value = !1, tn.value = !1, en.value = !1, B(), Qt.value = null;
    },
    setMonthPicker: (l) => {
      en.value = l, B();
    }
  };
}, Ul = (e, a, n) => {
  const t = new Date(JSON.parse(JSON.stringify(e))), c = [];
  for (let f = 0; f < 7; f++) {
    const g = Dt(t, f), m = ve(g) !== a;
    c.push({
      text: n && m ? "" : g.getDate(),
      value: g,
      current: !m
    });
  }
  return c;
}, Gl = (e, a, n, t) => {
  const c = [], f = new Date(a, e), g = new Date(a, e + 1, 0), m = Ln(f, { weekStartsOn: n }), k = (w) => {
    const B = Ul(w, e, t);
    if (c.push({ days: B }), !c[c.length - 1].days.some((_) => ce(Fe(_.value), Fe(g)))) {
      const _ = Dt(w, 7);
      k(_);
    }
  };
  return k(m), c;
}, jl = (e, a = 3) => {
  const n = [];
  for (let t = 0; t < e.length; t += a)
    n.push([e[t], e[t + 1], e[t + 2]]);
  return n;
}, zl = (e, a) => {
  const n = [1, 2, 3, 4, 5, 6, 7].map((f) => new Intl.DateTimeFormat(e, { weekday: "short", timeZone: "UTC" }).format(new Date(`2017-01-0${f}T00:00:00+00:00`)).slice(0, 2)), t = n.slice(0, a), c = n.slice(a + 1, n.length);
  return [n[a]].concat(...c).concat(...t);
}, Xl = (e) => {
  const a = [];
  for (let n = +e[0]; n <= +e[1]; n++)
    a.push({ value: +n, text: `${n}` });
  return a;
}, ql = (e, a) => {
  const n = new Intl.DateTimeFormat(e, { month: a, timeZone: "UTC" });
  return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((c) => {
    const f = c < 10 ? `0${c}` : c;
    return new Date(`2017-${f}-01T00:00:00+00:00`);
  }).map((c, f) => ({
    text: n.format(c),
    value: f
  }));
}, Jl = (e) => [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11][e], Zl = () => ({
  enterSubmit: !0,
  tabSubmit: !0,
  openMenu: !0,
  rangeSeparator: " - "
}), Ql = (e) => Object.assign({ months: [], years: [], times: { hours: [], minutes: [], seconds: [] } }, e), xl = (e) => {
  function n(t) {
    let c = "";
    const f = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", g = f.length;
    for (let m = 0; m < t; m++)
      c += f.charAt(Math.floor(Math.random() * g));
    return c + e;
  }
  return n(5);
}, ke = (e) => {
  var n;
  const a = s(e);
  return (n = a == null ? void 0 : a.$el) != null ? n : a;
}, er = (e) => Object.assign({ type: "dot" }, e), In = (e) => Object.assign(
  {
    menuAppear: "dp-menu-appear",
    open: "dp-slide-down",
    close: "dp-slide-up",
    next: "calendar-next",
    previous: "calendar-prev",
    vNext: "dp-slide-up",
    vPrevious: "dp-slide-down"
  },
  e
), tr = (e) => Object.assign(
  {
    toggleOverlay: "Toggle overlay",
    menu: "Datepicker menu",
    input: "Datepicker input",
    calendarWrap: "Calendar wrapper",
    calendarDays: "Calendar days",
    openTimePicker: "Open time picker",
    closeTimePicker: "Close time Picker",
    incrementValue: (a) => `Increment ${a}`,
    decrementValue: (a) => `Decrement ${a}`,
    openTpOverlay: (a) => `Open ${a} overlay`,
    amPmButton: "Switch AM/PM mode",
    openYearsOverlay: "Open years overlay",
    openMonthsOverlay: "Open months overlay",
    nextMonth: "Next month",
    prevMonth: "Previous month"
  },
  e
), ia = (e) => Array.isArray(e) ? !!e[0] && !!e[1] : !1, nr = { class: "dp__selection_preview" }, ar = { class: "dp__action_buttons" }, lr = ["onKeydown"], rr = /* @__PURE__ */ Oe({
  __name: "ActionRow",
  props: {
    ...aa,
    ...kn,
    ...na,
    ...wn,
    ...sa,
    inline: { type: Boolean, default: !1 },
    timePicker: { type: Boolean, default: !1 },
    calendarWidth: { type: Number, default: 0 },
    menuMount: { type: Boolean, default: !1 },
    enableTimePicker: { type: Boolean, default: !0 }
  },
  emits: ["closePicker", "selectDate", "invalid-select"],
  setup(e, { emit: a }) {
    const n = e, { buildMatrix: t } = Je(), c = ye(Qn), f = ye(qe), g = O(null), m = O(null);
    Ne(() => {
      f != null && f.value && t([ke(g), ke(m)], "actionRow");
    });
    const k = R(() => n.range && !n.partialRange && n.internalModelValue ? n.internalModelValue.length === 2 : !0), w = R(() => ({
      dp__action: !0,
      dp__select: !0,
      dp__action_disabled: !B.value || !_.value || !k.value
    })), B = R(() => !n.enableTimePicker || n.ignoreTimeValidation ? !0 : on(n.internalModelValue, n.maxTime, n.minTime, n.maxDate, n.minDate)), _ = R(() => n.monthPicker ? Pl(n.internalModelValue, n.minDate, n.maxDate) : !0), E = (V) => vt(V, n.previewFormat, c == null ? void 0 : c.value), I = R(() => !n.internalModelValue || !n.menuMount ? "" : typeof n.previewFormat == "string" ? bt(n.internalModelValue) ? n.internalModelValue.length === 2 && n.internalModelValue[1] ? n.multiCalendars > 0 ? `${E(n.internalModelValue[0])} - ${E(
      n.internalModelValue[1]
    )}` : [E(n.internalModelValue[0]), E(n.internalModelValue[1])] : n.multiDates ? n.internalModelValue.map((V) => `${E(V)}`) : n.modelAuto ? `${E(n.internalModelValue[0])}` : `${E(n.internalModelValue[0])} -` : vt(n.internalModelValue, n.previewFormat, c == null ? void 0 : c.value) : n.timePicker ? n.previewFormat(sn(n.internalModelValue)) : n.monthPicker ? n.previewFormat(It(n.internalModelValue)) : n.previewFormat(n.internalModelValue)), U = () => {
      B.value && _.value && k.value ? a("selectDate") : a("invalid-select");
    };
    return (V, ee) => (p(), A("div", {
      class: "dp__action_row",
      style: mt(e.calendarWidth ? { width: `${e.calendarWidth}px` } : {})
    }, [
      j("div", nr, [
        V.$slots["action-preview"] ? H(V.$slots, "action-preview", {
          key: 0,
          value: V.internalModelValue
        }) : $("", !0),
        V.$slots["action-preview"] ? $("", !0) : (p(), A(ie, { key: 1 }, [
          Array.isArray(s(I)) ? $("", !0) : (p(), A(ie, { key: 0 }, [
            Ke(ge(s(I)), 1)
          ], 64)),
          Array.isArray(s(I)) ? (p(!0), A(ie, { key: 1 }, pe(s(I), (l, o) => (p(), A("div", { key: o }, ge(l), 1))), 128)) : $("", !0)
        ], 64))
      ]),
      j("div", ar, [
        V.$slots["action-select"] ? H(V.$slots, "action-select", {
          key: 0,
          value: V.internalModelValue
        }) : $("", !0),
        V.$slots["action-select"] ? $("", !0) : (p(), A(ie, { key: 1 }, [
          e.inline ? $("", !0) : (p(), A("span", {
            key: 0,
            class: "dp__action dp__cancel",
            ref_key: "cancelButtonRef",
            ref: g,
            tabindex: "0",
            onClick: ee[0] || (ee[0] = (l) => V.$emit("closePicker")),
            onKeydown: [
              ee[1] || (ee[1] = ne((l) => V.$emit("closePicker"), ["enter"])),
              ee[2] || (ee[2] = ne((l) => V.$emit("closePicker"), ["space"]))
            ]
          }, ge(V.cancelText), 545)),
          j("span", {
            class: fe(s(w)),
            tabindex: "0",
            onKeydown: [
              ne(U, ["enter"]),
              ne(U, ["space"])
            ],
            onClick: U,
            ref_key: "selectButtonRef",
            ref: m
          }, ge(V.selectText), 43, lr)
        ], 64))
      ])
    ], 4));
  }
}), sr = ["aria-label"], or = {
  class: "dp__calendar_header",
  role: "row"
}, ir = {
  key: 0,
  class: "dp__calendar_header_item",
  role: "gridcell"
}, ur = /* @__PURE__ */ j("div", { class: "dp__calendar_header_separator" }, null, -1), dr = ["aria-label"], cr = {
  key: 0,
  role: "gridcell",
  class: "dp__calendar_item dp__week_num"
}, fr = { class: "dp__cell_inner" }, mr = ["aria-selected", "aria-disabled", "onClick", "onKeydown", "onMouseover"], vr = ["innerHTML"], yr = { key: 1 }, pr = /* @__PURE__ */ j("div", { class: "dp__arrow_bottom_tp" }, null, -1), hr = /* @__PURE__ */ Oe({
  __name: "Calendar",
  props: {
    ...oa,
    ...la,
    mappedDates: { type: Array, default: () => [] },
    getWeekNum: {
      type: Function,
      default: () => ""
    },
    modeHeight: { type: [Number, String], default: 255 },
    specificMode: { type: Boolean, default: !1 }
  },
  emits: ["selectDate", "setHoverDate", "handleScroll", "mount", "handleSwipe", "handleSpace"],
  setup(e, { expose: a, emit: n }) {
    const t = e, c = O(null), f = O({ bottom: "", left: "", transform: "" }), g = O([]), m = O(null), k = O(!0), w = ye(Wt), B = ye(Xe), _ = ye(qe), E = O(""), I = O({ startX: 0, endX: 0, startY: 0, endY: 0 }), U = R(() => t.dayNames ? Array.isArray(t.dayNames) ? t.dayNames : t.dayNames(t.locale, +t.weekStart) : zl(t.locale, +t.weekStart)), { buildMultiLevelMatrix: V } = Je();
    Ne(() => {
      n("mount", { cmp: "calendar", refs: g }), t.noSwipe || m.value && (m.value.addEventListener("touchstart", te, { passive: !1 }), m.value.addEventListener("touchend", x, { passive: !1 }), m.value.addEventListener("touchmove", z, { passive: !1 })), t.monthChangeOnScroll && m.value && m.value.addEventListener("wheel", i, { passive: !1 });
    });
    const ee = (v, y) => {
      if (w != null && w.value) {
        const C = Fe(st(new Date(), t.month, t.year));
        E.value = $e(Fe(st(new Date(), v, y)), C) ? w.value[t.vertical ? "vNext" : "next"] : w.value[t.vertical ? "vPrevious" : "previous"], k.value = !1, At(() => {
          k.value = !0;
        });
      }
    }, l = R(
      () => ({
        dp__calendar_wrap: !0,
        [t.calendarClassName]: !!t.calendarClassName
      })
    ), o = R(() => (v) => {
      const y = er(v);
      return {
        dp__marker_dot: y.type === "dot",
        dp__marker_line: y.type === "line"
      };
    }), Y = R(() => (v) => ce(v, c.value)), X = R(() => ({
      dp__calendar: !0,
      dp__calendar_next: t.multiCalendars > 0 && t.instance !== 0
    })), P = R(() => t.specificMode ? { height: `${t.modeHeight}px` } : null), K = (v, y, C) => {
      var G, W;
      if (n("setHoverDate", v), (W = (G = v.marker) == null ? void 0 : G.tooltip) != null && W.length) {
        const Z = ke(g.value[y][C]);
        if (Z) {
          const { width: ae, height: h } = Z.getBoundingClientRect();
          f.value = {
            bottom: `${h}px`,
            left: `${ae / 2}px`,
            transform: "translateX(-50%)"
          }, c.value = v.value;
        }
      }
    }, q = () => {
      c.value = null;
    }, te = (v) => {
      I.value.startX = v.changedTouches[0].screenX, I.value.startY = v.changedTouches[0].screenY;
    }, x = (v) => {
      I.value.endX = v.changedTouches[0].screenX, I.value.endY = v.changedTouches[0].screenY, M();
    }, z = (v) => {
      v.preventDefault();
    }, M = () => {
      const v = t.vertical ? "Y" : "X";
      Math.abs(I.value[`start${v}`] - I.value[`end${v}`]) > 10 && n("handleSwipe", I.value[`start${v}`] > I.value[`end${v}`] ? "right" : "left");
    }, D = (v, y, C) => {
      v && (Array.isArray(g.value[y]) ? g.value[y][C] = v : g.value[y] = [v]), _ != null && _.value && V(g.value, "calendar");
    }, i = (v) => {
      t.monthChangeOnScroll && (v.preventDefault(), n("handleScroll", v));
    };
    return a({ triggerTransition: ee }), (v, y) => (p(), A("div", {
      class: fe(s(X))
    }, [
      j("div", {
        style: mt(s(P))
      }, [
        e.specificMode ? $("", !0) : (p(), A("div", {
          key: 0,
          ref_key: "calendarWrapRef",
          ref: m,
          class: fe(s(l)),
          role: "grid",
          "aria-label": s(B).calendarWrap
        }, [
          j("div", or, [
            v.weekNumbers ? (p(), A("div", ir, ge(v.weekNumName), 1)) : $("", !0),
            (p(!0), A(ie, null, pe(s(U), (C, G) => (p(), A("div", {
              class: "dp__calendar_header_item",
              role: "gridcell",
              key: G
            }, [
              v.$slots["calendar-header"] ? H(v.$slots, "calendar-header", {
                key: 0,
                day: C,
                index: G
              }) : $("", !0),
              v.$slots["calendar-header"] ? $("", !0) : (p(), A(ie, { key: 1 }, [
                Ke(ge(C), 1)
              ], 64))
            ]))), 128))
          ]),
          ur,
          ze(yt, {
            name: E.value,
            css: !!s(w)
          }, {
            default: re(() => [
              k.value ? (p(), A("div", {
                key: 0,
                class: "dp__calendar",
                role: "grid",
                "aria-label": s(B).calendarDays
              }, [
                (p(!0), A(ie, null, pe(e.mappedDates, (C, G) => (p(), A("div", {
                  class: "dp__calendar_row",
                  role: "row",
                  key: G
                }, [
                  v.weekNumbers ? (p(), A("div", cr, [
                    j("div", fr, ge(e.getWeekNum(C.days)), 1)
                  ])) : $("", !0),
                  (p(!0), A(ie, null, pe(C.days, (W, Z) => (p(), A("div", {
                    role: "gridcell",
                    class: "dp__calendar_item",
                    ref_for: !0,
                    ref: (ae) => D(ae, G, Z),
                    key: Z + G,
                    "aria-selected": W.classData.dp__active_date || W.classData.dp__range_start || W.classData.dp__range_start,
                    "aria-disabled": W.classData.dp__cell_disabled,
                    tabindex: "0",
                    onClick: He((ae) => v.$emit("selectDate", W), ["stop", "prevent"]),
                    onKeydown: [
                      ne((ae) => v.$emit("selectDate", W), ["enter"]),
                      ne((ae) => v.$emit("handleSpace", W), ["space"])
                    ],
                    onMouseover: (ae) => K(W, G, Z),
                    onMouseleave: q
                  }, [
                    j("div", {
                      class: fe(["dp__cell_inner", W.classData])
                    }, [
                      v.$slots.day ? H(v.$slots, "day", {
                        key: 0,
                        day: +W.text,
                        date: W.value
                      }) : $("", !0),
                      v.$slots.day ? $("", !0) : (p(), A(ie, { key: 1 }, [
                        Ke(ge(W.text), 1)
                      ], 64)),
                      W.marker ? (p(), A("div", {
                        key: 2,
                        class: fe(s(o)(W.marker)),
                        style: mt(W.marker.color ? { backgroundColor: W.marker.color } : {})
                      }, null, 6)) : $("", !0),
                      s(Y)(W.value) ? (p(), A("div", {
                        key: 3,
                        class: "dp__marker_tooltip",
                        style: mt(f.value)
                      }, [
                        j("div", {
                          class: "dp__tooltip_content",
                          onClick: y[0] || (y[0] = He(() => {
                          }, ["stop"]))
                        }, [
                          (p(!0), A(ie, null, pe(W.marker.tooltip, (ae, h) => (p(), A("div", {
                            key: h,
                            class: "dp__tooltip_text"
                          }, [
                            v.$slots["marker-tooltip"] ? H(v.$slots, "marker-tooltip", {
                              key: 0,
                              tooltop: ae,
                              day: W.value
                            }) : $("", !0),
                            v.$slots["marker-tooltip"] ? $("", !0) : (p(), A(ie, { key: 1 }, [
                              j("div", {
                                class: "dp__tooltip_mark",
                                style: mt(ae.color ? { backgroundColor: ae.color } : {})
                              }, null, 4),
                              ae.html ? (p(), A("div", {
                                key: 0,
                                innerHTML: ae.html
                              }, null, 8, vr)) : (p(), A("div", yr, ge(ae.text), 1))
                            ], 64))
                          ]))), 128)),
                          pr
                        ])
                      ], 4)) : $("", !0)
                    ], 2)
                  ], 40, mr))), 128))
                ]))), 128))
              ], 8, dr)) : $("", !0)
            ]),
            _: 3
          }, 8, ["name", "css"])
        ], 10, sr))
      ], 4)
    ], 2));
  }
}), gr = ["aria-label", "aria-disabled"], nn = /* @__PURE__ */ Oe({
  __name: "ActionIcon",
  props: {
    ariaLabel: { type: String, default: "" },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["activate", "setRef"],
  setup(e, { emit: a }) {
    const n = O(null);
    return Ne(() => a("setRef", n)), (t, c) => (p(), A("div", {
      class: "dp__month_year_col_nav",
      onClick: c[0] || (c[0] = (f) => t.$emit("activate")),
      onKeydown: [
        c[1] || (c[1] = ne((f) => t.$emit("activate"), ["enter"])),
        c[2] || (c[2] = ne((f) => t.$emit("activate"), ["space"]))
      ],
      tabindex: "0",
      role: "button",
      "aria-label": e.ariaLabel,
      "aria-disabled": e.disabled,
      ref_key: "elRef",
      ref: n
    }, [
      j("div", {
        class: fe(["dp__inner_nav", { dp__inner_nav_disabled: e.disabled }])
      }, [
        H(t.$slots, "default")
      ], 2)
    ], 40, gr));
  }
}), kr = ["onKeydown"], wr = { class: "dp__selection_grid_header" }, br = ["aria-selected", "aria-disabled", "onClick", "onKeydown", "onMouseover"], Dr = ["aria-label", "onKeydown"], Mt = /* @__PURE__ */ Oe({
  __name: "SelectionGrid",
  props: {
    items: { type: Array, default: () => [] },
    modelValue: { type: [String, Number], default: null },
    multiModelValue: { type: Array, default: () => [] },
    disabledValues: { type: Array, default: () => [] },
    minValue: { type: [Number, String], default: null },
    maxValue: { type: [Number, String], default: null },
    year: { type: Number, default: 0 },
    skipActive: { type: Boolean, default: !1 },
    headerRefs: { type: Array, default: () => [] },
    skipButtonRef: { type: Boolean, default: !1 },
    monthPicker: { type: Boolean, default: !1 },
    yearPicker: { type: Boolean, default: !1 },
    escClose: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "selected", "toggle", "reset-flow"],
  setup(e, { expose: a, emit: n }) {
    const t = e, c = O(!1), f = O(null), g = O(null), m = O([]), k = ye(pn, !1), w = ye(Zn, O(!1)), B = ye(Xe), _ = ye(qe), E = O(), I = O(), { setSelectionGrid: U, buildMultiLevelMatrix: V, setMonthPicker: ee } = Je();
    $a(() => {
      f.value = null;
    }), Ne(() => {
      At().then(() => x()), o(), l(!0);
    }), cn(() => l(!1));
    const l = (y) => {
      var C;
      _ != null && _.value && ((C = t.headerRefs) != null && C.length ? ee(y) : U(y));
    }, o = () => {
      const y = ke(g);
      y && (w.value || y.focus({ preventScroll: !0 }), c.value = y.clientHeight < y.scrollHeight);
    }, Y = R(
      () => ({
        dp__overlay: !0
      })
    ), X = R(() => ({
      dp__overlay_col: !0
    })), P = R(() => t.items.map((y) => y.filter((C) => C).map((C) => {
      var Z, ae, h;
      const G = t.disabledValues.some((T) => T === C.value) || te(C.value), W = (Z = t.multiModelValue) != null && Z.length ? (ae = t.multiModelValue) == null ? void 0 : ae.some(
        (T) => ce(
          T,
          lt(
            t.monthPicker ? Nt(new Date(), C.value) : new Date(),
            t.monthPicker ? t.year : C.value
          )
        )
      ) : t.skipActive ? !1 : C.value === t.modelValue;
      return {
        ...C,
        className: {
          dp__overlay_cell_active: W,
          dp__overlay_cell: !W,
          dp__overlay_cell_disabled: G,
          dp__overlay_cell_active_disabled: G && W,
          dp__overlay_cell_pad: !0,
          dp__cell_in_between: (h = t.multiModelValue) != null && h.length ? M(C.value) : !1
        }
      };
    }))), K = R(
      () => ({
        dp__button: !0,
        dp__overlay_action: !0,
        dp__over_action_scroll: c.value,
        dp__button_bottom: k
      })
    ), q = R(() => {
      var y, C;
      return {
        dp__overlay_container: !0,
        dp__container_flex: ((y = t.items) == null ? void 0 : y.length) <= 6,
        dp__container_block: ((C = t.items) == null ? void 0 : C.length) > 6
      };
    }), te = (y) => {
      const C = t.maxValue || t.maxValue === 0, G = t.minValue || t.minValue === 0;
      return !C && !G ? !1 : C && G ? +y > +t.maxValue || +y < +t.minValue : C ? +y > +t.maxValue : G ? +y < +t.minValue : !1;
    }, x = () => {
      const y = ke(f);
      if (y) {
        const C = ke(g);
        C && (C.scrollTop = y.offsetTop - C.offsetTop - (C.getBoundingClientRect().height / 2 - y.getBoundingClientRect().height));
      }
    }, z = (y) => {
      !t.disabledValues.some((C) => C === y) && !te(y) && (n("update:modelValue", y), n("selected"));
    }, M = (y) => {
      const C = t.monthPicker ? t.year : y;
      return Xn(
        t.multiModelValue,
        lt(
          t.monthPicker ? Nt(new Date(), E.value || 0) : new Date(),
          t.monthPicker ? C : E.value || C
        ),
        lt(t.monthPicker ? Nt(new Date(), y) : new Date(), C)
      );
    }, D = () => {
      n("toggle"), n("reset-flow");
    }, i = () => {
      t.escClose && D();
    }, v = (y, C, G, W) => {
      var Z, ae;
      if (y && (C.value === +t.modelValue && !t.disabledValues.includes(C.value) && (f.value = y), _ != null && _.value)) {
        Array.isArray(m.value[G]) ? m.value[G][W] = y : m.value[G] = [y];
        const h = (Z = t.headerRefs) != null && Z.length ? [t.headerRefs].concat(m.value) : m.value.concat([t.skipButtonRef ? [] : [I.value]]);
        V(h, (ae = t.headerRefs) != null && ae.length ? "monthPicker" : "selectionGrid");
      }
    };
    return a({ focusGrid: o }), (y, C) => (p(), A("div", {
      ref_key: "gridWrapRef",
      ref: g,
      class: fe(s(Y)),
      role: "dialog",
      tabindex: "0",
      onKeydown: ne(i, ["esc"])
    }, [
      j("div", {
        class: fe(s(q)),
        role: "grid"
      }, [
        j("div", wr, [
          H(y.$slots, "header")
        ]),
        (p(!0), A(ie, null, pe(s(P), (G, W) => (p(), A("div", {
          class: "dp__overlay_row",
          key: s(xl)(W),
          role: "row"
        }, [
          (p(!0), A(ie, null, pe(G, (Z, ae) => (p(), A("div", {
            role: "gridcell",
            class: fe(s(X)),
            key: Z.value,
            "aria-selected": Z.value === e.modelValue && !e.disabledValues.includes(Z.value),
            "aria-disabled": Z.className.dp__overlay_cell_disabled,
            ref_for: !0,
            ref: (h) => v(h, Z, W, ae),
            tabindex: "0",
            onClick: (h) => z(Z.value),
            onKeydown: [
              ne((h) => z(Z.value), ["enter"]),
              ne((h) => z(Z.value), ["space"])
            ],
            onMouseover: (h) => E.value = Z.value
          }, [
            j("div", {
              class: fe(Z.className)
            }, [
              y.$slots.item ? H(y.$slots, "item", {
                key: 0,
                item: Z
              }) : $("", !0),
              y.$slots.item ? $("", !0) : (p(), A(ie, { key: 1 }, [
                Ke(ge(Z.text), 1)
              ], 64))
            ], 2)
          ], 42, br))), 128))
        ]))), 128)),
        y.$slots["button-icon"] ? (p(), A("div", {
          key: 0,
          role: "button",
          "aria-label": s(B).toggleOverlay,
          class: fe(s(K)),
          tabindex: "0",
          ref_key: "toggleButton",
          ref: I,
          onClick: D,
          onKeydown: ne(D, ["enter"])
        }, [
          H(y.$slots, "button-icon")
        ], 42, Dr)) : $("", !0)
      ], 2)
    ], 42, kr));
  }
}), Lt = () => {
  const e = ye(Wt);
  return { transitionName: R(() => (n) => e != null && e.value ? n ? e.value.open : e.value.close : ""), showTransition: !!(e != null && e.value) };
}, $r = ["aria-label"], Yn = /* @__PURE__ */ Oe({
  __name: "RegularPicker",
  props: {
    ariaLabel: { type: String, default: "" },
    showSelectionGrid: { type: Boolean, default: !1 },
    modelValue: { type: Number, default: null },
    items: { type: Array, default: () => [] },
    disabledValues: { type: Array, default: () => [] },
    minValue: { type: Number, default: null },
    maxValue: { type: Number, default: null },
    slotName: { type: String, default: "" },
    headerRefs: { type: Array, default: () => [] },
    escClose: { type: Boolean, default: !0 }
  },
  emits: ["update:model-value", "toggle", "setRef"],
  setup(e, { emit: a }) {
    const { transitionName: n, showTransition: t } = Lt(), c = O(null);
    return Ne(() => a("setRef", c)), (f, g) => (p(), A(ie, null, [
      j("div", {
        class: "dp__month_year_select",
        onClick: g[0] || (g[0] = (m) => f.$emit("toggle")),
        onKeydown: [
          g[1] || (g[1] = ne((m) => f.$emit("toggle"), ["enter"])),
          g[2] || (g[2] = ne((m) => f.$emit("toggle"), ["space"]))
        ],
        role: "button",
        "aria-label": e.ariaLabel,
        tabindex: "0",
        ref_key: "elRef",
        ref: c
      }, [
        H(f.$slots, "default")
      ], 40, $r),
      ze(yt, {
        name: s(n)(e.showSelectionGrid),
        css: s(t)
      }, {
        default: re(() => [
          e.showSelectionGrid ? (p(), se(Mt, Ce({ key: 0 }, {
            modelValue: e.modelValue,
            items: e.items,
            disabledValues: e.disabledValues,
            minValue: e.minValue,
            maxValue: e.maxValue,
            escClose: e.escClose
          }, {
            "header-refs": [],
            "onUpdate:modelValue": g[3] || (g[3] = (m) => f.$emit("update:model-value", m)),
            onToggle: g[4] || (g[4] = (m) => f.$emit("toggle"))
          }), Pe({
            "button-icon": re(() => [
              f.$slots["calendar-icon"] ? H(f.$slots, "calendar-icon", { key: 0 }) : $("", !0),
              f.$slots["calendar-icon"] ? $("", !0) : (p(), se(s(Kt), { key: 1 }))
            ]),
            _: 2
          }, [
            f.$slots[e.slotName] ? {
              name: "item",
              fn: re(({ item: m }) => [
                H(f.$slots, e.slotName, { item: m })
              ]),
              key: "0"
            } : void 0
          ]), 1040)) : $("", !0)
        ]),
        _: 3
      }, 8, ["name", "css"])
    ], 64));
  }
}), Ft = (e, a, n) => [Me(new Date(e), { date: 1 }), Me(new Date(), { month: a, year: n, date: 1 })], un = (e, a, n) => we(...Ft(e, a, n)) || ce(...Ft(e, a, n)), dn = (e, a, n) => $e(...Ft(e, a, n)) || ce(...Ft(e, a, n)), ua = (e, a, n, t, c, f) => {
  let g = !1;
  return f ? e && a ? (a && c && dn(a, n, t) && (g = !0), e && !c && un(e, n, t) && (g = !0)) : (e && un(e, n, t) || a && dn(a, n, t)) && (g = !0) : g = !0, g;
}, Mr = (e, a) => {
  const n = (m, k) => {
    let w = m;
    return e.filters.months.includes(ve(w)) ? (w = k ? rt(m, 1) : $t(m, 1), n(w, k)) : w;
  }, t = (m, k) => {
    let w = m;
    return e.filters.years.includes(ue(w)) ? (w = k ? Oa(m, 1) : Na(m, 1), t(w, k)) : w;
  }, c = (m) => {
    const k = Me(new Date(), { month: e.month, year: e.year });
    let w = m ? rt(k, 1) : $t(k, 1), B = ve(w), _ = ue(w);
    e.filters.months.includes(B) && (w = n(w, m), B = ve(w), _ = ue(w)), e.filters.years.includes(_) && (w = t(w, m), _ = ue(w)), ua(e.minDate, e.maxDate, B, _, m, e.preventMinMaxNavigation) && f(B, _);
  }, f = (m, k) => {
    a("update-month-year", { month: m, year: k });
  }, g = R(() => (m) => {
    if (!e.preventMinMaxNavigation || m && !e.maxDate || !m && !e.minDate)
      return !1;
    const k = Me(new Date(), { month: e.month, year: e.year }), w = m ? rt(k, 1) : $t(k, 1), B = [ve(w), ue(w)];
    return m ? !dn(e.maxDate, ...B) : !un(e.minDate, ...B);
  });
  return { handleMonthYearChange: c, isDisabled: g };
}, Sr = { class: "dp__month_year_row" }, Ar = { class: "dp__month_picker_header" }, Cr = ["aria-label"], Pr = ["aria-label", "onKeydown"], Tr = ["aria-label"], Rr = /* @__PURE__ */ Oe({
  __name: "MonthYearPicker",
  props: {
    ...oa,
    ...kn,
    preventMinMaxNavigation: { type: Boolean, default: !1 },
    reverseYears: { type: Boolean, default: !1 },
    years: { type: Array, default: () => [] },
    months: { type: Array, default: () => [] },
    filters: { type: Object, default: () => ({}) },
    multiCalendarsSolo: { type: Boolean, default: !1 },
    yearPicker: { type: Boolean, default: !1 },
    escClose: { type: Boolean, default: !0 }
  },
  emits: ["update-month-year", "monthYearSelect", "mount", "reset-flow", "overlay-closed"],
  setup(e, { expose: a, emit: n }) {
    const t = e, { transitionName: c, showTransition: f } = Lt(), { buildMatrix: g } = Je(), m = O(!1), k = O(!1), w = O([null, null, null, null]), B = O(null), _ = O(null), E = O(null), I = ye(Xe), U = ye(qe), { handleMonthYearChange: V, isDisabled: ee } = Mr(t, n);
    Ne(() => {
      n("mount");
    });
    const l = (h) => ({
      get: () => t[h],
      set: (T) => {
        const N = h === "month" ? "year" : "month";
        n("update-month-year", { [h]: T, [N]: t[N] }), n("monthYearSelect", h === "year"), h === "month" ? C(!0) : G(!0);
      }
    }), o = R(l("month")), Y = R(l("year")), X = R(() => (h) => {
      const T = h === "month";
      return {
        showSelectionGrid: (T ? m : k).value,
        items: (T ? D : i).value,
        disabledValues: t.filters[T ? "months" : "years"],
        minValue: (T ? q : P).value,
        maxValue: (T ? te : K).value,
        headerRefs: T && t.monthPicker ? [B.value, _.value, E.value] : [],
        escClose: t.escClose
      };
    }), P = R(() => t.minDate ? ue(new Date(t.minDate)) : null), K = R(() => t.maxDate ? ue(new Date(t.maxDate)) : null), q = R(() => {
      if (t.minDate && P.value) {
        if (P.value > t.year)
          return 12;
        if (P.value === t.year)
          return ve(new Date(t.minDate));
      }
      return null;
    }), te = R(() => t.maxDate && K.value ? K.value < t.year ? -1 : K.value === t.year ? ve(new Date(t.maxDate)) : null : null), x = R(() => t.range && t.internalModelValue && (t.monthPicker || t.yearPicker) ? t.internalModelValue : []), z = (h, T = !1) => {
      const N = [];
      for (let Re = 0; Re < h.length; Re += 3) {
        const Ie = [h[Re], h[Re + 1], h[Re + 2]];
        N.push(T ? Ie.reverse() : Ie);
      }
      return T ? N.reverse() : N;
    }, M = R(() => {
      const h = t.months.find((T) => T.value === t.month);
      return h || { text: "", value: 0 };
    }), D = R(() => z(t.months)), i = R(() => z(t.years, t.reverseYears)), v = R(() => t.multiCalendars ? t.multiCalendarsSolo ? !0 : t.instance === 0 : !0), y = R(() => t.multiCalendars ? t.multiCalendarsSolo ? !0 : t.instance === t.multiCalendars - 1 : !0), C = (h = !1) => {
      W(h), m.value = !m.value, m.value || n("overlay-closed");
    }, G = (h = !1) => {
      W(h), k.value = !k.value, k.value || n("overlay-closed");
    }, W = (h) => {
      h || n("reset-flow");
    }, Z = (h = !1) => {
      n("update-month-year", { year: h ? t.year + 1 : t.year - 1, month: t.month });
    }, ae = (h, T) => {
      U != null && U.value && (w.value[T] = ke(h), g(w.value, "monthYear"));
    };
    return a({
      toggleMonthPicker: C,
      toggleYearPicker: G
    }), (h, T) => (p(), A("div", Sr, [
      !h.monthPicker && !e.yearPicker ? (p(), A(ie, { key: 0 }, [
        s(v) && !h.vertical ? (p(), se(nn, {
          key: 0,
          "aria-label": s(I).prevMonth,
          disabled: s(ee)(!1),
          onActivate: T[0] || (T[0] = (N) => s(V)(!1)),
          onSetRef: T[1] || (T[1] = (N) => ae(N, 0))
        }, {
          default: re(() => [
            h.$slots["arrow-left"] ? H(h.$slots, "arrow-left", { key: 0 }) : $("", !0),
            h.$slots["arrow-left"] ? $("", !0) : (p(), se(s(Pn), { key: 1 }))
          ]),
          _: 3
        }, 8, ["aria-label", "disabled"])) : $("", !0),
        ze(Yn, Ce({
          "aria-label": s(I).openMonthsOverlay,
          "slot-name": "month-overlay",
          modelValue: s(o),
          "onUpdate:modelValue": T[2] || (T[2] = (N) => tt(o) ? o.value = N : null)
        }, s(X)("month"), {
          onToggle: C,
          onSetRef: T[3] || (T[3] = (N) => ae(N, 1))
        }), Pe({
          default: re(() => [
            h.$slots.month ? H(h.$slots, "month", Ge(Ce({ key: 0 }, s(M)))) : $("", !0),
            h.$slots.month ? $("", !0) : (p(), A(ie, { key: 1 }, [
              Ke(ge(s(M).text), 1)
            ], 64))
          ]),
          _: 2
        }, [
          h.$slots["calendar-icon"] ? {
            name: "calendar-icon",
            fn: re(() => [
              H(h.$slots, "calendar-icon")
            ]),
            key: "0"
          } : void 0,
          h.$slots["month-overlay"] ? {
            name: "month-overlay",
            fn: re(({ item: N }) => [
              H(h.$slots, "month-overlay", {
                text: N.text,
                value: N.value
              })
            ]),
            key: "1"
          } : void 0
        ]), 1040, ["aria-label", "modelValue"]),
        ze(Yn, Ce({
          "aria-label": s(I).openYearsOverlay,
          "slot-name": "year-overlay",
          modelValue: s(Y),
          "onUpdate:modelValue": T[4] || (T[4] = (N) => tt(Y) ? Y.value = N : null)
        }, s(X)("year"), {
          onToggle: G,
          onSetRef: T[5] || (T[5] = (N) => ae(N, 2))
        }), Pe({
          default: re(() => [
            h.$slots.year ? H(h.$slots, "year", {
              key: 0,
              year: h.year
            }) : $("", !0),
            h.$slots.year ? $("", !0) : (p(), A(ie, { key: 1 }, [
              Ke(ge(h.year), 1)
            ], 64))
          ]),
          _: 2
        }, [
          h.$slots["calendar-icon"] ? {
            name: "calendar-icon",
            fn: re(() => [
              H(h.$slots, "calendar-icon")
            ]),
            key: "0"
          } : void 0,
          h.$slots["year-overlay"] ? {
            name: "year-overlay",
            fn: re(({ item: N }) => [
              H(h.$slots, "year-overlay", {
                text: N.text,
                value: N.value
              })
            ]),
            key: "1"
          } : void 0
        ]), 1040, ["aria-label", "modelValue"]),
        s(v) && h.vertical ? (p(), se(nn, {
          key: 1,
          "aria-label": s(I).prevMonth,
          disabled: s(ee)(!1),
          onActivate: T[6] || (T[6] = (N) => s(V)(!1))
        }, {
          default: re(() => [
            h.$slots["arrow-up"] ? H(h.$slots, "arrow-up", { key: 0 }) : $("", !0),
            h.$slots["arrow-up"] ? $("", !0) : (p(), se(s(Gn), { key: 1 }))
          ]),
          _: 3
        }, 8, ["aria-label", "disabled"])) : $("", !0),
        s(y) ? (p(), se(nn, {
          key: 2,
          disabled: s(ee)(!0),
          "aria-label": s(I).nextMonth,
          onActivate: T[7] || (T[7] = (N) => s(V)(!0)),
          ref: "rightIcon",
          onSetRef: T[8] || (T[8] = (N) => ae(N, 3))
        }, {
          default: re(() => [
            h.$slots[h.vertical ? "arrow-down" : "arrow-right"] ? H(h.$slots, h.vertical ? "arrow-down" : "arrow-right", { key: 0 }) : $("", !0),
            h.$slots[h.vertical ? "arrow-down" : "arrow-right"] ? $("", !0) : (p(), se(Bt(h.vertical ? s(jn) : s(Tn)), { key: 1 }))
          ]),
          _: 3
        }, 8, ["disabled", "aria-label"])) : $("", !0)
      ], 64)) : $("", !0),
      h.monthPicker ? (p(), se(Mt, Ce({ key: 1 }, s(X)("month"), {
        "skip-active": t.range,
        year: h.year,
        "multi-model-value": s(x),
        "month-picker": "",
        modelValue: s(o),
        "onUpdate:modelValue": T[15] || (T[15] = (N) => tt(o) ? o.value = N : null),
        onToggle: C,
        onSelected: T[16] || (T[16] = (N) => h.$emit("overlay-closed"))
      }), Pe({
        header: re(() => [
          j("div", Ar, [
            j("div", {
              class: "dp__month_year_col_nav",
              tabindex: "0",
              ref_key: "mpPrevIconRef",
              ref: B,
              onClick: T[9] || (T[9] = (N) => Z(!1)),
              onKeydown: T[10] || (T[10] = ne((N) => Z(!1), ["enter"]))
            }, [
              j("div", {
                class: "dp__inner_nav",
                role: "button",
                "aria-label": s(I).prevMonth
              }, [
                h.$slots["arrow-left"] ? H(h.$slots, "arrow-left", { key: 0 }) : $("", !0),
                h.$slots["arrow-left"] ? $("", !0) : (p(), se(s(Pn), { key: 1 }))
              ], 8, Cr)
            ], 544),
            j("div", {
              class: "dp__pointer",
              role: "button",
              ref_key: "mpYearButtonRef",
              ref: _,
              "aria-label": s(I).openYearsOverlay,
              tabindex: "0",
              onClick: G,
              onKeydown: ne(G, ["enter"])
            }, [
              h.$slots.year ? H(h.$slots, "year", {
                key: 0,
                year: h.year
              }) : $("", !0),
              h.$slots.year ? $("", !0) : (p(), A(ie, { key: 1 }, [
                Ke(ge(h.year), 1)
              ], 64))
            ], 40, Pr),
            j("div", {
              class: "dp__month_year_col_nav",
              tabindex: "0",
              ref_key: "mpNextIconRef",
              ref: E,
              onClick: T[11] || (T[11] = (N) => Z(!0)),
              onKeydown: T[12] || (T[12] = ne((N) => Z(!0), ["enter"]))
            }, [
              j("div", {
                class: "dp__inner_nav",
                role: "button",
                "aria-label": s(I).nextMonth
              }, [
                h.$slots["arrow-right"] ? H(h.$slots, "arrow-right", { key: 0 }) : $("", !0),
                h.$slots["arrow-right"] ? $("", !0) : (p(), se(s(Tn), { key: 1 }))
              ], 8, Tr)
            ], 544)
          ]),
          ze(yt, {
            name: s(c)(k.value),
            css: s(f)
          }, {
            default: re(() => [
              k.value ? (p(), se(Mt, Ce({ key: 0 }, s(X)("year"), {
                modelValue: s(Y),
                "onUpdate:modelValue": T[13] || (T[13] = (N) => tt(Y) ? Y.value = N : null),
                onToggle: G,
                onSelected: T[14] || (T[14] = (N) => h.$emit("overlay-closed"))
              }), Pe({
                "button-icon": re(() => [
                  h.$slots["calendar-icon"] ? H(h.$slots, "calendar-icon", { key: 0 }) : $("", !0),
                  h.$slots["calendar-icon"] ? $("", !0) : (p(), se(s(Kt), { key: 1 }))
                ]),
                _: 2
              }, [
                h.$slots["year-overlay"] ? {
                  name: "item",
                  fn: re(({ item: N }) => [
                    H(h.$slots, "year-overlay", {
                      text: N.text,
                      value: N.value
                    })
                  ]),
                  key: "0"
                } : void 0
              ]), 1040, ["modelValue"])) : $("", !0)
            ]),
            _: 3
          }, 8, ["name", "css"])
        ]),
        _: 2
      }, [
        h.$slots["month-overlay"] ? {
          name: "item",
          fn: re(({ item: N }) => [
            H(h.$slots, "month-overlay", {
              text: N.text,
              value: N.value
            })
          ]),
          key: "0"
        } : void 0
      ]), 1040, ["skip-active", "year", "multi-model-value", "modelValue"])) : $("", !0),
      e.yearPicker ? (p(), se(Mt, Ce({ key: 2 }, s(X)("year"), {
        modelValue: s(Y),
        "onUpdate:modelValue": T[17] || (T[17] = (N) => tt(Y) ? Y.value = N : null),
        "multi-model-value": s(x),
        "skip-active": t.range,
        "skip-button-ref": "",
        "year-picker": "",
        onToggle: G,
        onSelected: T[18] || (T[18] = (N) => h.$emit("overlay-closed"))
      }), Pe({ _: 2 }, [
        h.$slots["year-overlay"] ? {
          name: "item",
          fn: re(({ item: N }) => [
            H(h.$slots, "year-overlay", {
              text: N.text,
              value: N.value
            })
          ]),
          key: "0"
        } : void 0
      ]), 1040, ["modelValue", "multi-model-value", "skip-active"])) : $("", !0)
    ]));
  }
}), Vr = {
  key: 0,
  class: "dp__time_input"
}, _r = /* @__PURE__ */ Ke(" : "), Br = ["aria-label", "onKeydown", "onClick"], Or = ["aria-label", "onKeydown", "onClick"], Nr = ["aria-label", "onKeydown", "onClick"], Ir = { key: 0 }, Yr = ["aria-label", "onKeydown"], Er = /* @__PURE__ */ Oe({
  __name: "TimeInput",
  props: {
    ...xn,
    hours: { type: Number, default: 0 },
    minutes: { type: Number, default: 0 },
    seconds: { type: Number, default: 0 },
    filters: { type: Object, default: () => ({}) },
    disabled: { type: Boolean, default: !1 },
    closeTimePickerBtn: { type: Object, default: null },
    order: { type: Number, default: 0 },
    escClose: { type: Boolean, default: !0 }
  },
  emits: [
    "setHours",
    "setMinutes",
    "update:hours",
    "update:minutes",
    "update:seconds",
    "reset-flow",
    "mounted",
    "overlay-closed"
  ],
  setup(e, { expose: a, emit: n }) {
    const t = e, c = Ht({
      hours: !1,
      minutes: !1,
      seconds: !1
    }), f = O("AM"), g = O(null), m = ye(Xe), k = ye(qe), w = O([]), { transitionName: B, showTransition: _ } = Lt(), { setTimePickerElements: E, setTimePickerBackRef: I } = Je();
    Ne(() => {
      n("mounted");
    });
    const U = R(
      () => ({
        dp__time_col: !0,
        dp__time_col_reg: !t.enableSeconds && t.is24,
        dp__time_col_reg_with_button: !t.enableSeconds && !t.is24,
        dp__time_col_sec: t.enableSeconds && t.is24,
        dp__time_col_sec_with_button: t.enableSeconds && !t.is24
      })
    ), V = R(() => {
      const M = [{ type: "hours" }, "separator", { type: "minutes" }];
      return t.enableSeconds ? M.concat(["separator", { type: "seconds" }]) : M;
    }), ee = R(() => V.value.filter((M) => typeof M != "string")), l = R(() => (M) => {
      if (M === "hours") {
        const D = K(t.hours);
        return { text: D < 10 ? `0${D}` : `${D}`, value: D };
      }
      return { text: t[M] < 10 ? `0${t[M]}` : `${t[M]}`, value: t[M] };
    }), o = (M) => {
      const D = M === "hours" ? t.is24 ? 24 : 12 : 60, i = +t[`${M}GridIncrement`], v = [];
      for (let y = 0; y < D; y += i)
        v.push({ value: y, text: y < 10 ? `0${y}` : `${y}` });
      return jl(v);
    }, Y = (M) => t[`no${M[0].toUpperCase() + M.slice(1)}Overlay`], X = (M) => {
      Y(M) || (c[M] = !c[M], c[M] || n("overlay-closed"));
    }, P = (M, D = !0) => {
      const i = M === "hours" ? _e : M === "minutes" ? Be : je, v = D ? Al : Cl;
      n(`update:${M}`, i(v({ [M]: +t[M] }, { [M]: +t[`${M}Increment`] })));
    }, K = (M) => t.is24 ? M : (M >= 12 ? f.value = "PM" : f.value = "AM", Jl(M)), q = () => {
      f.value === "PM" ? (f.value = "AM", n("update:hours", t.hours - 12)) : (f.value = "PM", n("update:hours", t.hours + 12));
    }, te = (M) => {
      c[M] = !0;
    }, x = (M, D, i) => {
      if (M && (k == null ? void 0 : k.value)) {
        Array.isArray(w.value[D]) ? w.value[D][i] = M : w.value[D] = [M];
        const v = w.value.reduce(
          (y, C) => C.map((G, W) => [...y[W] || [], C[W]]),
          []
        );
        I(t.closeTimePickerBtn), g.value && (v[1] = v[1].concat(g.value)), E(v, t.order);
      }
    }, z = (M, D) => M === "hours" && !t.is24 ? n(`update:${M}`, f.value === "PM" ? D + 12 : D) : n(`update:${M}`, D);
    return a({ openChildCmp: te }), (M, D) => e.disabled ? $("", !0) : (p(), A("div", Vr, [
      (p(!0), A(ie, null, pe(s(V), (i, v) => (p(), A("div", {
        key: v,
        class: fe(s(U))
      }, [
        i === "separator" ? (p(), A(ie, { key: 0 }, [
          _r
        ], 64)) : (p(), A(ie, { key: 1 }, [
          j("div", {
            class: "dp__inc_dec_button",
            role: "button",
            "aria-label": s(m).incrementValue(i.type),
            tabindex: "0",
            onKeydown: [
              ne((y) => P(i.type), ["enter"]),
              ne((y) => P(i.type), ["space"])
            ],
            onClick: (y) => P(i.type),
            ref_for: !0,
            ref: (y) => x(y, v, 0)
          }, [
            M.$slots["arrow-up"] ? H(M.$slots, "arrow-up", { key: 0 }) : $("", !0),
            M.$slots["arrow-up"] ? $("", !0) : (p(), se(s(Gn), { key: 1 }))
          ], 40, Br),
          j("div", {
            role: "button",
            "aria-label": s(m).openTpOverlay(i.type),
            class: fe(Y(i.type) ? "" : "dp__time_display"),
            tabindex: "0",
            onKeydown: [
              ne((y) => X(i.type), ["enter"]),
              ne((y) => X(i.type), ["space"])
            ],
            onClick: (y) => X(i.type),
            ref_for: !0,
            ref: (y) => x(y, v, 1)
          }, [
            M.$slots[i.type] ? H(M.$slots, i.type, {
              key: 0,
              text: s(l)(i.type).text,
              value: s(l)(i.type).value
            }) : $("", !0),
            M.$slots[i.type] ? $("", !0) : (p(), A(ie, { key: 1 }, [
              Ke(ge(s(l)(i.type).text), 1)
            ], 64))
          ], 42, Or),
          j("div", {
            class: "dp__inc_dec_button",
            role: "button",
            "aria-label": s(m).decrementValue(i.type),
            tabindex: "0",
            onKeydown: [
              ne((y) => P(i.type, !1), ["enter"]),
              ne((y) => P(i.type, !1), ["space"])
            ],
            onClick: (y) => P(i.type, !1),
            ref_for: !0,
            ref: (y) => x(y, v, 2)
          }, [
            M.$slots["arrow-down"] ? H(M.$slots, "arrow-down", { key: 0 }) : $("", !0),
            M.$slots["arrow-down"] ? $("", !0) : (p(), se(s(jn), { key: 1 }))
          ], 40, Nr)
        ], 64))
      ], 2))), 128)),
      M.is24 ? $("", !0) : (p(), A("div", Ir, [
        M.$slots["am-pm-button"] ? H(M.$slots, "am-pm-button", {
          key: 0,
          toggle: q,
          value: f.value
        }) : $("", !0),
        M.$slots["am-pm-button"] ? $("", !0) : (p(), A("button", {
          key: 1,
          ref_key: "amPmButton",
          ref: g,
          type: "button",
          class: "dp__pm_am_button",
          role: "button",
          "aria-label": s(m).amPmButton,
          tabindex: "0",
          onClick: q,
          onKeydown: [
            ne(He(q, ["prevent"]), ["enter"]),
            ne(He(q, ["prevent"]), ["space"])
          ]
        }, ge(f.value), 41, Yr))
      ])),
      (p(!0), A(ie, null, pe(s(ee), (i, v) => (p(), se(yt, {
        key: v,
        name: s(B)(c[i.type]),
        css: s(_)
      }, {
        default: re(() => [
          c[i.type] ? (p(), se(Mt, {
            key: 0,
            items: o(i.type),
            "disabled-values": e.filters.times[i.type],
            "esc-close": e.escClose,
            "onUpdate:modelValue": (y) => z(i.type, y),
            onSelected: (y) => X(i.type),
            onToggle: (y) => X(i.type),
            onResetFlow: D[0] || (D[0] = (y) => M.$emit("reset-flow"))
          }, Pe({
            "button-icon": re(() => [
              M.$slots["clock-icon"] ? H(M.$slots, "clock-icon", { key: 0 }) : $("", !0),
              M.$slots["clock-icon"] ? $("", !0) : (p(), se(s(Un), { key: 1 }))
            ]),
            _: 2
          }, [
            M.$slots[`${i.type}-overlay`] ? {
              name: "item",
              fn: re(({ item: y }) => [
                H(M.$slots, `${i.type}-overlay`, {
                  text: y.text,
                  value: y.value
                })
              ]),
              key: "0"
            } : void 0
          ]), 1032, ["items", "disabled-values", "esc-close", "onUpdate:modelValue", "onSelected", "onToggle"])) : $("", !0)
        ]),
        _: 2
      }, 1032, ["name", "css"]))), 128))
    ]));
  }
}), wt = [
  { name: "clock-icon", use: ["time", "calendar"] },
  { name: "arrow-left", use: ["month-year", "calendar"] },
  { name: "arrow-right", use: ["month-year", "calendar"] },
  { name: "arrow-up", use: ["time", "calendar"] },
  { name: "arrow-down", use: ["time", "calendar"] },
  { name: "calendar-icon", use: ["month-year", "time", "calendar"] },
  { name: "day", use: ["calendar"] },
  { name: "month-overlay", use: ["calendar", "month-year"] },
  { name: "year-overlay", use: ["calendar", "month-year"] },
  { name: "hours-overlay", use: ["calendar", "time"] },
  { name: "minutes-overlay", use: ["calendar", "time"] },
  { name: "seconds-overlay", use: ["calendar", "time"] },
  { name: "hours", use: ["calendar", "time"] },
  { name: "minutes", use: ["calendar", "time"] },
  { name: "month", use: ["calendar", "month-year"] },
  { name: "year", use: ["calendar", "month-year"] },
  { name: "action-select", use: ["action"] },
  { name: "action-preview", use: ["action"] },
  { name: "calendar-header", use: ["calendar"] },
  { name: "marker-tooltip", use: ["calendar"] },
  { name: "now-button", use: [] },
  { name: "time-picker-overlay", use: ["calendar", "time"] },
  { name: "am-pm-button", use: ["calendar", "time"] }
], Fr = [{ name: "trigger" }, { name: "input-icon" }, { name: "clear-icon" }, { name: "dp-input" }], Hr = {
  all: () => wt,
  monthYear: () => wt.filter((e) => e.use.includes("month-year")),
  input: () => Fr,
  timePicker: () => wt.filter((e) => e.use.includes("time")),
  action: () => wt.filter((e) => e.use.includes("action")),
  calendar: () => wt.filter((e) => e.use.includes("calendar"))
}, at = (e, a) => {
  const n = [];
  return Hr[a]().forEach((t) => {
    e[t.name] && n.push(t.name);
  }), n;
}, Kr = ["aria-label"], Wr = { class: "dp__overlay_container dp__container_flex" }, Lr = {
  key: 1,
  class: "dp__overlay_row"
}, Ur = ["aria-label"], Gr = /* @__PURE__ */ Oe({
  __name: "TimePicker",
  props: {
    ...ea,
    range: { type: Boolean, default: !1 },
    filters: { type: Object, default: () => ({}) },
    hours: { type: [Number, Array], default: 0 },
    minutes: { type: [Number, Array], default: 0 },
    seconds: { type: [Number, Array], default: 0 },
    customProps: { type: Object, default: null },
    modelAuto: { type: Boolean, default: !1 },
    internalModelValue: { type: [Date, Array], default: null },
    escClose: { type: Boolean, default: !0 }
  },
  emits: [
    "update:hours",
    "update:minutes",
    "update:seconds",
    "mount",
    "reset-flow",
    "overlay-closed"
  ],
  setup(e, { expose: a, emit: n }) {
    const t = e, c = fn(), f = O(null), g = O(null), m = ye(pn, !1), k = O([]), w = O(null), B = ye(Xe), _ = ye(qe), { transitionName: E, showTransition: I } = Lt(), { buildMatrix: U, setTimePicker: V } = Je();
    Ne(() => {
      n("mount"), !t.timePicker && (_ == null ? void 0 : _.value) ? U([ke(f.value)], "time") : V(!0, t.timePicker);
    });
    const ee = R(() => t.range && t.modelAuto ? ia(t.internalModelValue) : !0), l = O(!1), o = (D) => ({
      hours: Array.isArray(t.hours) ? t.hours[D] : t.hours,
      minutes: Array.isArray(t.minutes) ? t.minutes[D] : t.minutes,
      seconds: Array.isArray(t.seconds) ? t.seconds[D] : t.seconds
    }), Y = R(() => {
      const D = [];
      if (t.range)
        for (let i = 0; i < 2; i++)
          D.push(o(i));
      else
        D.push(o(0));
      return D;
    }), X = (D, i = !1, v = "") => {
      i || n("reset-flow"), l.value = D, _ != null && _.value && (V(D), D || n("overlay-closed")), At(() => {
        v !== "" && k.value[0] && k.value[0].openChildCmp(v);
      });
    }, P = R(() => ({
      dp__button: !0,
      dp__button_bottom: m
    })), K = at(c, "timePicker"), q = (D, i, v) => t.range ? i === 0 ? [D, Y.value[1][v]] : [Y.value[0][v], D] : D, te = (D) => {
      n("update:hours", D);
    }, x = (D) => {
      n("update:minutes", D);
    }, z = (D) => {
      n("update:seconds", D);
    }, M = () => {
      w.value && (_ == null ? void 0 : _.value) && w.value.focus({ preventScroll: !0 });
    };
    return a({ toggleTimePicker: X }), (D, i) => (p(), A("div", null, [
      D.timePicker ? $("", !0) : (p(), A("div", {
        key: 0,
        class: fe(s(P)),
        role: "button",
        "aria-label": s(B).openTimePicker,
        tabindex: "0",
        ref_key: "openTimePickerBtn",
        ref: f,
        onKeydown: [
          i[0] || (i[0] = ne((v) => X(!0), ["enter"])),
          i[1] || (i[1] = ne((v) => X(!0), ["space"]))
        ],
        onClick: i[2] || (i[2] = (v) => X(!0))
      }, [
        D.$slots["clock-icon"] ? H(D.$slots, "clock-icon", { key: 0 }) : $("", !0),
        D.$slots["clock-icon"] ? $("", !0) : (p(), se(s(Un), { key: 1 }))
      ], 42, Kr)),
      ze(yt, {
        name: s(E)(l.value),
        css: s(I)
      }, {
        default: re(() => [
          l.value || D.timePicker ? (p(), A("div", {
            key: 0,
            class: "dp__overlay",
            ref_key: "overlayRef",
            ref: w,
            tabindex: "0"
          }, [
            j("div", Wr, [
              D.$slots["time-picker-overlay"] ? H(D.$slots, "time-picker-overlay", {
                key: 0,
                range: e.range,
                hours: e.hours,
                minutes: e.minutes,
                seconds: e.seconds,
                setHours: te,
                setMinutes: x,
                setSeconds: z
              }) : $("", !0),
              D.$slots["time-picker-overlay"] ? $("", !0) : (p(), A("div", Lr, [
                (p(!0), A(ie, null, pe(s(Y), (v, y) => Ma((p(), se(Er, Ce({
                  key: y,
                  disabled: y === 0 ? D.fixedStart : D.fixedEnd,
                  hours: v.hours,
                  minutes: v.minutes,
                  seconds: v.seconds,
                  filters: e.filters,
                  ref_for: !0,
                  ref_key: "timeInputRefs",
                  ref: k
                }, {
                  is24: D.is24,
                  hoursGridIncrement: D.hoursGridIncrement,
                  minutesGridIncrement: D.minutesGridIncrement,
                  secondsGridIncrement: D.secondsGridIncrement,
                  hoursIncrement: D.hoursIncrement,
                  minutesIncrement: D.minutesIncrement,
                  secondsIncrement: D.secondsIncrement,
                  filters: e.filters,
                  noHoursOverlay: D.noHoursOverlay,
                  noMinutesOverlay: D.noMinutesOverlay,
                  noSecondsOverlay: D.noSecondsOverlay,
                  enableSeconds: D.enableSeconds,
                  closeTimePickerBtn: g.value,
                  escClose: e.escClose,
                  order: y
                }, {
                  "onUpdate:hours": (C) => te(q(C, y, "hours")),
                  "onUpdate:minutes": (C) => x(q(C, y, "minutes")),
                  "onUpdate:seconds": (C) => z(q(C, y, "seconds")),
                  onMounted: M,
                  onOverlayClosed: M
                }), Pe({ _: 2 }, [
                  pe(s(K), (C, G) => ({
                    name: C,
                    fn: re((W) => [
                      H(D.$slots, C, Ge(nt(W)))
                    ])
                  }))
                ]), 1040, ["disabled", "hours", "minutes", "seconds", "filters", "onUpdate:hours", "onUpdate:minutes", "onUpdate:seconds"])), [
                  [Sa, y === 0 ? !0 : s(ee)]
                ])), 128))
              ])),
              D.timePicker ? $("", !0) : (p(), A("div", {
                key: 2,
                ref_key: "closeTimePickerBtn",
                ref: g,
                class: fe(s(P)),
                role: "button",
                "aria-label": s(B).closeTimePicker,
                tabindex: "0",
                onKeydown: [
                  i[3] || (i[3] = ne((v) => X(!1), ["enter"])),
                  i[4] || (i[4] = ne((v) => X(!1), ["space"]))
                ],
                onClick: i[5] || (i[5] = (v) => X(!1))
              }, [
                D.$slots["calendar-icon"] ? H(D.$slots, "calendar-icon", { key: 0 }) : $("", !0),
                D.$slots["calendar-icon"] ? $("", !0) : (p(), se(s(Kt), { key: 1 }))
              ], 42, Ur))
            ])
          ], 512)) : $("", !0)
        ]),
        _: 3
      }, 8, ["name", "css"])
    ]));
  }
}), jr = (e, a, n, t) => {
  const c = O(new Date()), f = O(), g = O([{ month: ve(new Date()), year: ue(new Date()) }]), m = O(
    e.range ? [_e(new Date()), _e(new Date())] : _e(new Date())
  ), k = O(
    e.range ? [Be(new Date()), Be(new Date())] : Be(new Date())
  ), w = O(e.range ? [0, 0] : 0);
  St(
    g,
    () => {
      setTimeout(() => {
        e.openOnTop && a("dpOpen");
      }, 0);
    },
    { deep: !0 }
  ), Ne(() => {
    x(!0), l.value || (e.startDate && (g.value[0].month = ve(new Date(e.startDate)), g.value[0].year = ue(new Date(e.startDate)), e.multiCalendars && T(0)), e.startTime && ee());
  });
  const B = R(
    () => (r) => g.value[r] ? g.value[r].month : 0
  ), _ = R(
    () => (r) => g.value[r] ? g.value[r].year : 0
  ), E = (r, b, S) => {
    g.value[r].month = b, g.value[r].year = S;
  }, I = (r, b) => g.value[r].month = b, U = (r, b) => g.value[r].year = b, V = (r = !0) => e.enableSeconds ? Array.isArray(w.value) ? r ? w.value[0] : w.value[1] : w.value : 0, ee = () => {
    e.startTime && (Wl(e.startTime) ? (m.value = [+e.startTime[0].hours, +e.startTime[1].hours], k.value = [+e.startTime[0].minutes, +e.startTime[1].minutes], e.enableSeconds && (w.value = [+e.startTime[0].seconds, +e.startTime[1].seconds])) : (m.value = +e.startTime.hours, k.value = +e.startTime.minutes, e.enableSeconds && (w.value = +e.startTime.seconds)));
  }, l = R({
    get: () => e.internalModelValue,
    set: (r) => {
      !e.readonly && !e.disabled && a("update:internalModelValue", r);
    }
  });
  St(l, () => x());
  const o = (r) => {
    const { validate: b } = Jn(
      e.minDate,
      e.maxDate,
      e.disabledDates,
      e.allowedDates,
      e.filters,
      e.disabledWeekDays,
      e.yearRange
    );
    return !b(r);
  }, Y = (r) => !l.value || e.hideOffsetDates && !r.current ? !1 : e.range ? e.modelAuto && Array.isArray(l.value) ? ce(r.value, l.value[0] ? l.value[0] : c.value) : !1 : e.multiDates && Array.isArray(l.value) ? l.value.some((b) => ce(b, r.value)) : ce(r.value, l.value ? l.value : c.value), X = (r) => Xn(l.value, f.value, r.value), P = (r, b = !1) => {
    if ((!e.multiCalendars || !e.multiStatic || b) && (I(0, ve(r)), U(0, ue(r))), e.multiCalendars)
      for (let S = 1; S <= e.multiCalendars; S++) {
        const oe = Me(new Date(), { month: B.value(S - 1), year: _.value(S - 1) }), Se = Wn(oe, { months: 1 });
        g.value[S] = { month: ve(Se), year: ue(Se) };
      }
  }, K = () => {
    if (Array.isArray(l.value) && l.value.length === 2) {
      const r = new Date(l.value[1] ? l.value[1] : rt(l.value[0], 1)), [b, S] = [ve(l.value[0]), ue(l.value[0])], [oe, Se] = [ve(l.value[1]), ue(l.value[1])];
      (b !== oe || b === oe && S !== Se) && e.multiCalendarsSolo && (I(1, ve(r)), U(1, ue(r)));
    }
  }, q = (r) => {
    P(r), m.value = _e(r), k.value = Be(r), w.value = je(r);
  }, te = () => Array.isArray(l.value) && l.value.length ? l.value[l.value.length - 1] : null, x = (r = !1) => {
    if (l.value)
      if (bt(l.value)) {
        if (l.value.length === 2 && !e.multiDates)
          P(l.value[0], r), m.value = [
            _e(l.value[0]),
            l.value[1] ? _e(l.value[1]) : _e(new Date())
          ], k.value = [
            Be(l.value[0]),
            l.value[1] ? Be(l.value[1]) : Be(new Date())
          ], w.value = [
            je(l.value[0]),
            l.value[1] ? je(l.value[1]) : je(new Date())
          ];
        else if (bt(l.value) && e.multiDates) {
          const b = l.value[l.value.length - 1];
          b && q(b);
        }
        e.multiCalendars && e.multiCalendarsSolo && K();
      } else
        q(l.value);
    else
      e.timePicker ? (ee(), e.range ? Ve(m.value) && Ve(k.value) && (l.value = [
        Ae(new Date(), m.value[0], k.value[0], V()),
        Ae(new Date(), m.value[1], k.value[1], V(!1))
      ]) : l.value = Ae(
        new Date(),
        m.value,
        k.value,
        V()
      )) : e.monthPicker && !e.range ? l.value = st(new Date(), B.value(0), _.value(0)) : e.multiCalendars ? P(new Date()) : e.yearPicker && !e.range && (l.value = new Date());
  }, z = (r) => {
    const b = ve(new Date(r)), S = ue(new Date(r));
    if (I(0, b), U(0, S), e.multiCalendars > 0)
      for (let oe = 1; oe < e.multiCalendars; oe++) {
        const Se = Sl(
          Me(new Date(r), { year: B.value(oe - 1), month: _.value(oe - 1) })
        );
        I(oe, Se.month), U(oe, Se.year);
      }
  }, M = (r) => {
    if (l.value && Array.isArray(l.value))
      if (l.value.some((b) => ce(r, b))) {
        const b = l.value.filter((S) => !ce(S, r));
        l.value = b.length ? b : null;
      } else
        (e.multiDatesLimit && +e.multiDatesLimit > l.value.length || !e.multiDatesLimit) && l.value.push(r);
    else
      l.value = [r];
  }, D = (r) => {
    if (Array.isArray(l.value) && l.value[0]) {
      const b = Ya(r, l.value[0]), S = $e(l.value[0], r) ? r : l.value[0], oe = $e(r, l.value[0]) ? r : l.value[0], xe = Cn({ start: S, end: oe }).filter((dt) => o(dt)).length, Te = Math.abs(b < 0 ? b + 1 : b - 1) - xe;
      if (e.minRange && e.maxRange)
        return Te >= +e.minRange && Te <= +e.maxRange;
      if (e.minRange)
        return Te >= +e.minRange;
      if (e.maxRange)
        return Te <= +e.maxRange;
    }
    return !0;
  }, i = (r) => Array.isArray(l.value) && l.value.length === 2 ? e.fixedStart && ($e(r, l.value[0]) || ce(r, l.value[0])) ? [l.value[0], r] : e.fixedEnd && (we(r, l.value[1]) || ce(r, l.value[1])) ? [r, l.value[1]] : l.value : [], v = () => {
    e.autoApply && a("autoApply");
  }, y = (r) => !Cn({ start: r[0], end: r[1] }).some((S) => o(S)), C = (r, b = !1) => {
    if (!o(r.value) && !(!r.current && e.hideOffsetDates)) {
      if (e.weekPicker)
        return l.value = Rt(new Date(r.value), +e.weekStart), v();
      if (!e.range && !Ve(m.value) && !Ve(k.value)) {
        const S = Ae(new Date(r.value), m.value, k.value, V());
        e.multiDates ? M(S) : l.value = S, n(), v();
      } else if (Ve(m.value) && Ve(k.value) && !e.multiDates) {
        let S = l.value ? l.value.slice() : [];
        if (S.length === 2 && !(e.fixedStart || e.fixedEnd) && (S = []), e.autoRange) {
          const oe = [new Date(r.value), Dt(new Date(r.value), +e.autoRange)];
          y(oe) && (b && z(r.value), S = oe);
        } else
          e.fixedStart || e.fixedEnd ? S = i(new Date(r.value)) : S[0] ? D(new Date(r.value)) && (we(new Date(r.value), new Date(S[0])) ? S.unshift(new Date(r.value)) : S[1] = new Date(r.value)) : S[0] = new Date(r.value);
        S.length && (S[0] && !S[1] ? S[0] = Ae(S[0], m.value[0], k.value[0], V()) : (S[0] = Ae(S[0], m.value[0], k.value[0], V()), S[1] = Ae(S[1], m.value[1], k.value[1], V(!1)), n()), l.value = S, S[0] && S[1] && e.autoApply && a("autoApply"));
      }
    }
  }, G = (r) => {
    const b = r.find((S) => S.current);
    return b ? Ia(b.value) : "";
  }, W = (r) => {
    !r.current && e.hideOffsetDates || (f.value = r.value);
  }, Z = (r) => {
    if (e.autoRange || e.weekPicker) {
      if (f.value) {
        if (e.hideOffsetDates && !r.current)
          return !1;
        const b = Dt(f.value, +e.autoRange), S = Rt(new Date(f.value), +e.weekStart);
        return e.weekPicker ? ce(S[1], new Date(r.value)) : ce(b, new Date(r.value));
      }
      return !1;
    }
    return !1;
  }, ae = (r) => {
    if (e.autoRange || e.weekPicker) {
      if (f.value) {
        const b = Dt(f.value, +e.autoRange);
        if (e.hideOffsetDates && !r.current)
          return !1;
        const S = Rt(new Date(f.value), +e.weekStart);
        return e.weekPicker ? $e(r.value, S[0]) && we(r.value, S[1]) : $e(r.value, f.value) && we(r.value, b);
      }
      return !1;
    }
    return !1;
  }, h = (r) => {
    if (e.autoRange || e.weekPicker) {
      if (f.value) {
        if (e.hideOffsetDates && !r.current)
          return !1;
        const b = Rt(new Date(f.value), +e.weekStart);
        return e.weekPicker ? ce(b[0], r.value) : ce(f.value, r.value);
      }
      return !1;
    }
    return !1;
  }, T = (r) => {
    for (let b = r - 1; b >= 0; b--) {
      const S = $t(Me(new Date(), { month: B.value(b + 1), year: _.value(b + 1) }), 1);
      E(b, ve(S), ue(S));
    }
    for (let b = r + 1; b <= e.multiCalendars - 1; b++) {
      const S = rt(Me(new Date(), { month: B.value(b - 1), year: _.value(b - 1) }), 1);
      E(b, ve(S), ue(S));
    }
  }, N = (r) => st(new Date(), B.value(r), _.value(r)), Re = (r, b) => {
    if (I(r, b.month), U(r, b.year), e.multiCalendars && !e.multiCalendarsSolo && T(r), e.monthPicker || e.yearPicker)
      if (e.range) {
        let S = l.value ? l.value.slice() : [];
        S.length === 2 && S[1] !== null && (S = []), S.length ? we(N(r), S[0]) ? S.unshift(N(r)) : S[1] = N(r) : S = [N(r)], l.value = S;
      } else
        l.value = N(r);
    n(), a("updateMonthYear", { instance: r, month: b.month, year: b.year }), Ct(e.multiCalendarsSolo ? r : void 0);
  }, Ie = (r) => Ae(r, m.value, k.value, V()), Ye = (r) => {
    bt(r) && bt(l.value) && Ve(m.value) && Ve(k.value) ? (r[0] && l.value[0] && (l.value[0] = Ae(r[0], m.value[0], k.value[0], V())), r[1] && l.value[1] && (l.value[1] = Ae(
      r[1],
      m.value[1],
      k.value[1],
      V(!1)
    ))) : e.multiDates && Array.isArray(l.value) ? l.value[l.value.length - 1] = Ie(r) : !e.range && !Yt(r) && (l.value = Ie(r)), a("timeUpdate");
  }, We = (r, b = !0, S = !1) => {
    const oe = b ? r : m.value, Se = !b && !S ? r : k.value, xe = S ? r : w.value;
    if (e.range && Yt(l.value) && Ve(oe) && Ve(Se) && Ve(xe) && !e.disableTimeRangeValidation) {
      const Te = (Ue) => Ae(l.value[Ue], oe[Ue], Se[Ue], xe[Ue]), dt = (Ue) => mn(l.value[Ue], 0);
      if (ce(l.value[0], l.value[1]) && (vn(Te(0), dt(1)) || yn(Te(1), dt(0))))
        return;
    }
    if (m.value = oe, k.value = Se, w.value = xe, l.value)
      if (e.multiDates) {
        const Te = te();
        Te && Ye(Te);
      } else
        Ye(l.value);
    else
      e.timePicker && Ye(e.range ? [new Date(), new Date()] : new Date());
    n();
  }, Le = () => {
    f.value = null;
  }, Ze = (r) => On(l.value, e.range) && l.value[0] && f.value ? r ? $e(f.value, l.value[0]) : we(f.value, l.value[0]) : !0, be = (r, b = !0) => (e.range || e.weekPicker) && Yt(l.value) ? e.hideOffsetDates && !r.current ? !1 : ce(new Date(r.value), l.value[b ? 0 : 1]) : e.range ? ce(
    new Date(r.value),
    l.value && Array.isArray(l.value) ? b ? l.value[0] || null : l.value[1] : null
  ) && (b ? !we(
    f.value || null,
    Array.isArray(l.value) ? l.value[0] : null
  ) : !0) || ce(r.value, Array.isArray(l.value) ? l.value[0] : null) && Ze(b) : !1, it = (r, b) => Array.isArray(e.internalModelValue) && e.internalModelValue.length || e.weekPicker ? !1 : !r && !Y(b) && !(!b.current && e.hideOffsetDates) && (e.range ? !be(b) && !be(b, !1) : !0), pt = (r, b, S) => Array.isArray(e.internalModelValue) && e.internalModelValue[0] && e.internalModelValue.length === 1 ? r ? !1 : S ? $e(e.internalModelValue[0], b.value) : we(e.internalModelValue[0], b.value) : !1, ht = (r = !1) => {
    e.autoApply && (e.monthPicker || e.yearPicker) && At().then(() => {
      e.range ? a("autoApply", r || !l.value || l.value.length === 1) : a("autoApply", r);
    });
  }, d = (r, b) => {
    const S = Me(new Date(), { month: B.value(b), year: _.value(b) }), oe = r < 0 ? rt(S, 1) : $t(S, 1);
    ua(
      e.minDate,
      e.maxDate,
      ve(oe),
      ue(oe),
      r < 0,
      e.preventMinMaxNavigation
    ) && (E(b, ve(oe), ue(oe)), e.multiCalendars && !e.multiCalendarsSolo && T(b), Ct());
  }, le = (r, b) => {
    e.monthChangeOnScroll && d(e.monthChangeOnScroll !== "inverse" ? -r.deltaY : r.deltaY, b);
  }, me = (r, b, S = !1) => {
    e.monthChangeOnArrows && e.vertical === S && ut(r, b);
  }, ut = (r, b) => {
    d(r === "right" ? -1 : 1, b);
  }, Qe = (r) => e.markers.find((b) => ce(Ee(r.value), Ee(b.date))), Ut = () => {
    e.range ? On(l.value, e.range) && (l.value && l.value[0] ? l.value = we(new Date(), l.value[0]) ? [new Date(), l.value[0]] : [l.value[0], new Date()] : l.value = [new Date()]) : a("update:internalModelValue", new Date()), e.autoApply && a("selectDate");
  }, Gt = (r) => {
    r.length && r.length <= 2 && e.range && (l.value = r.map((b) => new Date(b)), e.autoApply && a("selectDate"));
  }, Ct = (r) => {
    r || r === 0 ? t.value[r].triggerTransition(B.value(r), _.value(r)) : t.value.forEach((b, S) => b.triggerTransition(B.value(S), _.value(S)));
  };
  return {
    today: c,
    hours: m,
    minutes: k,
    seconds: w,
    month: B,
    year: _,
    monthYearSelect: ht,
    isDisabled: o,
    updateTime: We,
    setHoverDate: W,
    getWeekNum: G,
    selectDate: C,
    rangeActive: X,
    isActiveDate: Y,
    updateMonthYear: Re,
    isHoverRangeEnd: Z,
    isAutoRangeInBetween: ae,
    isAutoRangeStart: h,
    clearHoverDate: Le,
    rangeActiveStartEnd: be,
    handleScroll: le,
    getMarker: Qe,
    handleArrow: me,
    handleSwipe: ut,
    selectCurrentDate: Ut,
    isHoverDate: it,
    isHoverDateStartEnd: pt,
    presetDateRange: Gt
  };
}, _t = Ht({
  menuFocused: !1,
  shiftKeyInMenu: !1
}), da = () => ({
  setMenuFocused: (t) => {
    _t.menuFocused = t;
  },
  getStore: () => _t,
  setShiftKey: (t) => {
    _t.shiftKeyInMenu !== t && (_t.shiftKeyInMenu = t);
  }
});
var Et = /* @__PURE__ */ ((e) => (e.center = "center", e.left = "left", e.right = "right", e))(Et || {});
const zr = ["id", "aria-label", "onKeydown"], Xr = {
  key: 0,
  class: "dp__preset_ranges"
}, qr = ["onClick"], Jr = {
  key: 1,
  class: "dp__now_wrap"
}, Zr = /* @__PURE__ */ Oe({
  __name: "DatepickerMenu",
  props: {
    ...ra,
    ...gn,
    ...hn,
    internalModelValue: { type: [Date, Array], default: null },
    multiCalendars: { type: Number, default: 0 },
    openOnTop: { type: Boolean, default: !1 }
  },
  emits: [
    "update:internalModelValue",
    "closePicker",
    "selectDate",
    "dpOpen",
    "autoApply",
    "timeUpdate",
    "flow-step",
    "updateMonthYear",
    "invalid-select"
  ],
  setup(e, { emit: a }) {
    const n = e, t = fn(), c = O(null), f = Ht({
      timePicker: !!(!n.enableTimePicker || n.timePicker || n.monthPicker),
      monthYearInput: !!n.timePicker,
      calendar: !1
    }), g = O([]), m = O([]), k = O(null), w = O(null), B = O(0), _ = O(!1), E = O(0), I = ye(Wt), U = ye(Xe), V = ye(qe), { setMenuFocused: ee, setShiftKey: l, getStore: o } = da();
    Ne(() => {
      var L;
      _.value = !0, (L = n.presetRanges) != null && L.length || oe();
      const u = ke(w);
      if (u && !n.textInput && !n.inline && (ee(!0), q()), u) {
        const F = (J) => {
          !n.monthYearComponent && !n.timePickerComponent && J.preventDefault(), J.stopImmediatePropagation(), J.stopPropagation();
        };
        u.addEventListener("pointerdown", F), u.addEventListener("mousedown", F);
      }
      document.addEventListener("resize", oe);
    }), cn(() => {
      document.removeEventListener("resize", oe);
    });
    const { arrowRight: Y, arrowLeft: X, arrowDown: P, arrowUp: K } = Je(), q = () => {
      const u = ke(w);
      u && u.focus({ preventScroll: !0 });
    }, te = () => {
      var u;
      ((u = n.flow) == null ? void 0 : u.length) && E.value !== -1 && (E.value += 1, a("flow-step", E.value), bn());
    }, x = () => {
      E.value = -1;
    }, {
      updateTime: z,
      updateMonthYear: M,
      today: D,
      month: i,
      year: v,
      hours: y,
      minutes: C,
      seconds: G,
      isDisabled: W,
      isActiveDate: Z,
      selectDate: ae,
      getWeekNum: h,
      setHoverDate: T,
      isHoverRangeEnd: N,
      isAutoRangeInBetween: Re,
      isAutoRangeStart: Ie,
      rangeActive: Ye,
      clearHoverDate: We,
      rangeActiveStartEnd: Le,
      monthYearSelect: Ze,
      handleScroll: be,
      handleArrow: it,
      handleSwipe: pt,
      getMarker: ht,
      selectCurrentDate: d,
      isHoverDateStartEnd: le,
      isHoverDate: me,
      presetDateRange: ut
    } = jr(n, a, te, m), Qe = at(t, "calendar"), Ut = at(t, "action"), Gt = at(t, "timePicker"), Ct = at(t, "monthYear"), r = R(() => n.openOnTop ? "dp__arrow_bottom" : "dp__arrow_top"), b = R(() => Xl(n.yearRange)), S = R(() => ql(n.locale, n.monthNameFormat)), oe = () => {
      const u = ke(c);
      u && (B.value = u.getBoundingClientRect().width);
    }, Se = R(
      () => (u) => Gl(
        i.value(u),
        v.value(u),
        +n.weekStart,
        n.hideOffsetDates
      )
    ), xe = R(
      () => n.multiCalendars > 0 && n.range ? [...Array(n.multiCalendars).keys()] : [0]
    ), Te = R(
      () => (u) => u === 1
    ), dt = R(() => n.monthPicker || n.timePicker || n.yearPicker), Ue = R(
      () => ({
        dp__flex_display: n.multiCalendars > 0
      })
    ), fa = R(() => ({
      dp__instance_calendar: n.multiCalendars > 0
    })), ma = R(() => ({
      dp__menu_disabled: n.disabled,
      dp__menu_readonly: n.readonly
    })), va = R(
      () => (u) => ga(Se, u)
    ), ya = R(() => ({
      locale: n.locale,
      weekNumName: n.weekNumName,
      weekStart: n.weekStart,
      weekNumbers: n.weekNumbers,
      customProps: n.customProps,
      calendarClassName: n.calendarClassName,
      specificMode: dt.value,
      getWeekNum: h,
      multiCalendars: n.multiCalendars,
      modeHeight: n.modeHeight,
      internalModelValue: n.internalModelValue,
      noSwipe: n.noSwipe,
      vertical: n.vertical,
      dayNames: n.dayNames,
      monthChangeOnScroll: n.monthChangeOnScroll
    })), pa = R(
      () => ({
        dp__menu: !0,
        dp__menu_index: !n.inline,
        dp__relative: n.inline,
        [n.menuClassName]: !!n.menuClassName
      })
    ), ha = () => n.modelAuto && Array.isArray(n.internalModelValue) ? !!n.internalModelValue[0] : !1, gt = () => n.modelAuto ? ia(n.internalModelValue) : !0, ga = (u, L) => u.value(L).map((F) => ({
      ...F,
      days: F.days.map((J) => {
        const Q = W(J.value), kt = me(Q, J), et = n.range ? n.modelAuto ? ha() && Z(J) : !1 : Z(J), Dn = n.highlight ? qn(J.value, n.highlight) : !1, $n = Q && n.highlightDisabledDays == !1, Mn = n.highlightWeekDays && n.highlightWeekDays.includes(J.value.getDay()), Sn = (n.range || n.weekPicker) && (n.multiCalendars > 0 ? J.current : !0) && !Q && gt() && !(!J.current && n.hideOffsetDates) && !Z(J) ? Ye(J) : !1;
        return J.marker = ht(J), J.classData = {
          dp__cell_offset: !J.current,
          dp__pointer: !Q && !(!J.current && n.hideOffsetDates),
          dp__active_date: et,
          dp__date_hover: kt,
          dp__date_hover_start: le(kt, J, !0),
          dp__date_hover_end: le(kt, J, !1),
          dp__range_between: Sn && !n.weekPicker,
          dp__range_between_week: Sn && n.weekPicker,
          dp__today: !n.noToday && ce(J.value, D.value) && J.current,
          dp__cell_disabled: Q,
          dp__cell_auto_range: Re(J),
          dp__cell_auto_range_start: Ie(J),
          dp__cell_auto_range_end: N(J),
          dp__range_start: n.multiCalendars > 0 ? J.current && Le(J) && gt() : Le(J) && gt(),
          dp__range_end: n.multiCalendars > 0 ? J.current && Le(J, !1) && gt() : Le(J, !1) && gt(),
          [n.calendarCellClassName]: !!n.calendarCellClassName,
          dp__cell_highlight: !$n && (Dn || Mn) && !et,
          dp__cell_highlight_active: !$n && (Dn || Mn) && et
        }, J;
      })
    })), ka = (u) => {
      u.stopPropagation(), u.preventDefault(), u.stopImmediatePropagation();
    }, wa = () => {
      n.escClose && a("closePicker");
    }, ba = (u, L = !1) => {
      ae(u, L), n.spaceConfirm && a("selectDate");
    }, jt = (u) => {
      var L;
      (L = n.flow) != null && L.length && (f[u] = !0, Object.keys(f).filter((F) => !f[F]).length || bn());
    }, bn = () => {
      n.flow[E.value] === "month" && g.value[0] && g.value[0].toggleMonthPicker(!0), n.flow[E.value] === "year" && g.value && g.value[0].toggleYearPicker(!0), n.flow[E.value] === "calendar" && k.value && k.value.toggleTimePicker(!1, !0), n.flow[E.value] === "time" && k.value && k.value.toggleTimePicker(!0, !0);
      const u = n.flow[E.value];
      (u === "hours" || u === "minutes" || u === "seconds") && k.value && k.value.toggleTimePicker(!0, !0, u);
    }, Pt = (u) => {
      if (V != null && V.value) {
        if (u === "up")
          return K();
        if (u === "down")
          return P();
        if (u === "left")
          return X();
        if (u === "right")
          return Y();
      } else
        u === "left" || u === "up" ? it("left", 0, u === "up") : it("right", 0, u === "down");
    }, Da = (u) => {
      l(u.shiftKey), !n.disableMonthYearSelect && u.code === "Tab" && u.target.classList.contains("dp__menu") && o().shiftKeyInMenu && (u.preventDefault(), u.stopImmediatePropagation(), a("closePicker"));
    };
    return (u, L) => (p(), se(yt, {
      appear: "",
      name: s(I).menuAppear,
      mode: "out-in",
      css: !!s(I)
    }, {
      default: re(() => [
        j("div", {
          id: u.uid ? `dp-menu-${u.uid}` : void 0,
          tabindex: "0",
          ref_key: "dpMenuRef",
          ref: w,
          role: "dialog",
          "aria-label": s(U).menu,
          class: fe(s(pa)),
          onMouseleave: L[12] || (L[12] = (...F) => s(We) && s(We)(...F)),
          onClick: ka,
          onKeydown: [
            ne(wa, ["esc"]),
            L[13] || (L[13] = ne(He((F) => Pt("left"), ["prevent"]), ["left"])),
            L[14] || (L[14] = ne(He((F) => Pt("up"), ["prevent"]), ["up"])),
            L[15] || (L[15] = ne(He((F) => Pt("down"), ["prevent"]), ["down"])),
            L[16] || (L[16] = ne(He((F) => Pt("right"), ["prevent"]), ["right"])),
            Da
          ]
        }, [
          (u.disabled || u.readonly) && u.inline ? (p(), A("div", {
            key: 0,
            class: fe(s(ma))
          }, null, 2)) : $("", !0),
          !u.inline && !u.teleportCenter ? (p(), A("div", {
            key: 1,
            class: fe(s(r))
          }, null, 2)) : $("", !0),
          j("div", {
            class: fe(u.presetRanges.length ? "dp__menu_content_wrapper" : null)
          }, [
            u.presetRanges.length ? (p(), A("div", Xr, [
              (p(!0), A(ie, null, pe(u.presetRanges, (F, J) => (p(), A("div", {
                key: J,
                style: mt(F.style || {}),
                class: "dp__preset_range",
                onClick: (Q) => s(ut)(F.range)
              }, ge(F.label), 13, qr))), 128))
            ])) : $("", !0),
            j("div", {
              class: "dp__instance_calendar",
              ref_key: "calendarWrapperRef",
              ref: c,
              role: "document"
            }, [
              j("div", {
                class: fe(s(Ue))
              }, [
                (p(!0), A(ie, null, pe(s(xe), (F, J) => (p(), A("div", {
                  key: F,
                  class: fe(s(fa))
                }, [
                  !u.disableMonthYearSelect && !u.timePicker ? (p(), se(Bt(u.monthYearComponent ? u.monthYearComponent : Rr), Ce({
                    key: 0,
                    ref_for: !0,
                    ref: (Q) => {
                      Q && (g.value[J] = Q);
                    }
                  }, {
                    months: s(S),
                    years: s(b),
                    filters: u.filters,
                    monthPicker: u.monthPicker,
                    month: s(i)(F),
                    year: s(v)(F),
                    customProps: u.customProps,
                    multiCalendars: e.multiCalendars,
                    multiCalendarsSolo: u.multiCalendarsSolo,
                    instance: F,
                    minDate: u.minDate,
                    maxDate: u.maxDate,
                    preventMinMaxNavigation: u.preventMinMaxNavigation,
                    internalModelValue: e.internalModelValue,
                    range: u.range,
                    reverseYears: u.reverseYears,
                    vertical: u.vertical,
                    yearPicker: u.yearPicker,
                    escClose: u.escClose
                  }, {
                    onMount: L[0] || (L[0] = (Q) => jt("monthYearInput")),
                    onResetFlow: x,
                    onUpdateMonthYear: (Q) => s(M)(F, Q),
                    onMonthYearSelect: s(Ze),
                    onOverlayClosed: q
                  }), Pe({ _: 2 }, [
                    pe(s(Ct), (Q, kt) => ({
                      name: Q,
                      fn: re((et) => [
                        H(u.$slots, Q, Ge(nt(et)))
                      ])
                    }))
                  ]), 1040, ["onUpdateMonthYear", "onMonthYearSelect"])) : $("", !0),
                  ze(hr, Ce({
                    ref_for: !0,
                    ref: (Q) => {
                      Q && (m.value[J] = Q);
                    }
                  }, s(ya), {
                    "flow-step": E.value,
                    "onUpdate:flow-step": L[1] || (L[1] = (Q) => E.value = Q),
                    instance: F,
                    "mapped-dates": s(va)(F),
                    month: s(i)(F),
                    year: s(v)(F),
                    onSelectDate: (Q) => s(ae)(Q, !s(Te)(F)),
                    onHandleSpace: (Q) => ba(Q, !s(Te)(F)),
                    onSetHoverDate: L[2] || (L[2] = (Q) => s(T)(Q)),
                    onHandleScroll: (Q) => s(be)(Q, F),
                    onHandleSwipe: (Q) => s(pt)(Q, F),
                    onMount: L[3] || (L[3] = (Q) => jt("calendar")),
                    onResetFlow: x
                  }), Pe({ _: 2 }, [
                    pe(s(Qe), (Q, kt) => ({
                      name: Q,
                      fn: re((et) => [
                        H(u.$slots, Q, Ge(nt({ ...et })))
                      ])
                    }))
                  ]), 1040, ["flow-step", "instance", "mapped-dates", "month", "year", "onSelectDate", "onHandleSpace", "onHandleScroll", "onHandleSwipe"])
                ], 2))), 128))
              ], 2),
              j("div", null, [
                u.enableTimePicker && !u.monthPicker && !u.weekPicker ? (p(), se(Bt(u.timePickerComponent ? u.timePickerComponent : Gr), Ce({
                  key: 0,
                  ref_key: "timePickerRef",
                  ref: k
                }, {
                  is24: u.is24,
                  hoursIncrement: u.hoursIncrement,
                  minutesIncrement: u.minutesIncrement,
                  hoursGridIncrement: u.hoursGridIncrement,
                  secondsIncrement: u.secondsIncrement,
                  minutesGridIncrement: u.minutesGridIncrement,
                  secondsGridIncrement: u.secondsGridIncrement,
                  noHoursOverlay: u.noHoursOverlay,
                  noMinutesOverlay: u.noMinutesOverlay,
                  noSecondsOverlay: u.noSecondsOverlay,
                  range: u.range,
                  filters: u.filters,
                  timePicker: u.timePicker,
                  hours: s(y),
                  minutes: s(C),
                  seconds: s(G),
                  customProps: u.customProps,
                  enableSeconds: u.enableSeconds,
                  fixedStart: u.fixedStart,
                  fixedEnd: u.fixedEnd,
                  modelAuto: u.modelAuto,
                  internalModelValue: e.internalModelValue,
                  escClose: u.escClose
                }, {
                  onMount: L[4] || (L[4] = (F) => jt("timePicker")),
                  "onUpdate:hours": L[5] || (L[5] = (F) => s(z)(F)),
                  "onUpdate:minutes": L[6] || (L[6] = (F) => s(z)(F, !1)),
                  "onUpdate:seconds": L[7] || (L[7] = (F) => s(z)(F, !1, !0)),
                  onResetFlow: x,
                  onOverlayClosed: q
                }), Pe({ _: 2 }, [
                  pe(s(Gt), (F, J) => ({
                    name: F,
                    fn: re((Q) => [
                      H(u.$slots, F, Ge(nt(Q)))
                    ])
                  }))
                ]), 1040)) : $("", !0)
              ])
            ], 512),
            u.showNowButton ? (p(), A("div", Jr, [
              u.$slots["now-button"] ? H(u.$slots, "now-button", {
                key: 0,
                selectCurrentDate: s(d)
              }) : $("", !0),
              u.$slots["now-button"] ? $("", !0) : (p(), A("button", {
                key: 1,
                type: "button",
                role: "button",
                class: "dp__now_button",
                onClick: L[8] || (L[8] = (...F) => s(d) && s(d)(...F))
              }, ge(u.nowButtonLabel), 1))
            ])) : $("", !0)
          ], 2),
          !u.autoApply || u.keepActionRow ? (p(), se(Bt(u.actionRowComponent ? u.actionRowComponent : rr), Ce({ key: 2 }, {
            calendarWidth: B.value,
            selectText: u.selectText,
            cancelText: u.cancelText,
            internalModelValue: e.internalModelValue,
            range: u.range,
            previewFormat: u.previewFormat,
            inline: u.inline,
            monthPicker: u.monthPicker,
            timePicker: u.timePicker,
            customProps: u.customProps,
            multiCalendars: e.multiCalendars,
            menuMount: _.value,
            maxTime: u.maxTime,
            minTime: u.minTime,
            enableTimePicker: u.enableTimePicker,
            minDate: u.minDate,
            maxDate: u.maxDate,
            multiDates: u.multiDates,
            modelAuto: u.modelAuto,
            partialRange: u.partialRange,
            ignoreTimeValidation: u.ignoreTimeValidation
          }, {
            onClosePicker: L[9] || (L[9] = (F) => u.$emit("closePicker")),
            onSelectDate: L[10] || (L[10] = (F) => u.$emit("selectDate")),
            onInvalidSelect: L[11] || (L[11] = (F) => u.$emit("invalid-select"))
          }), Pe({ _: 2 }, [
            pe(s(Ut), (F, J) => ({
              name: F,
              fn: re((Q) => [
                H(u.$slots, F, Ge(nt({ ...Q })))
              ])
            }))
          ]), 1040)) : $("", !0)
        ], 42, zr)
      ]),
      _: 3
    }, 8, ["name", "css"]));
  }
}), Qr = (e, a, n, t, c, f, g, m, k, w, B, _, E, I, U, V, ee) => {
  const l = O(""), o = O();
  St(o, () => {
    ee("internalModelChange", o.value);
  });
  const Y = (i) => [te(i[0]), i[1] ? te(i[1]) : null], X = (i) => {
    let v = null;
    i ? a ? El(i) && "hours" in i[0] && "minutes" in i[0] ? v = [
      Ae(null, +i[0].hours, +i[0].minutes, +i[0].seconds),
      Ae(null, +i[1].hours, +i[1].minutes, +i[1].seconds)
    ] : Yl(i) && (v = Ae(null, +i.hours, +i.minutes, +i.seconds)) : n ? Fl(i) && "month" in i[0] && "year" in i[0] ? (v = [st(null, +i[0].month, +i[0].year)], i[1] ? v[1] = st(null, +i[1].month, +i[1].year) : !i[1] && c && (v[1] = null)) : Hl(i) && "month" in i && "year" in i && (v = st(null, +i.month, +i.year)) : E ? Array.isArray(i) ? v = [
      lt(new Date(), i[0]),
      !i[1] && c ? null : lt(new Date(), i[1])
    ] : v = lt(new Date(), i) : w && Array.isArray(i) ? v = i.map((y) => te(y)) : _ && Array.isArray(i) ? v = [new Date(i[0]), new Date(i[1])] : t ? V ? Array.isArray(i) ? v = Y(i) : v = [te(i), null] : Kl(i, c) && (v = Y(i)) : Ll(i) && (v = te(i)) : v = null, rn(v) ? (o.value = v, K()) : (o.value = null, l.value = "");
  }, P = () => zn(
    e,
    f,
    m,
    n,
    a,
    _,
    E,
    g
  ), K = () => {
    if (!o.value)
      l.value = "";
    else if (!e || typeof e == "string") {
      const i = P();
      Array.isArray(o.value) && w ? l.value = o.value.map((v) => vt(v, i, k == null ? void 0 : k.value)).join("; ") : l.value = vt(
        o.value,
        i,
        k == null ? void 0 : k.value,
        I == null ? void 0 : I.rangeSeparator,
        V
      );
    } else
      a ? l.value = e(sn(o.value)) : n ? l.value = e(_n(o.value)) : l.value = e(o.value);
  }, q = () => o.value ? t ? c ? o.value.length >= 1 : o.value.length === 2 : !!o.value : !1, te = (i) => {
    if (B) {
      const v = new Date(i);
      return B === "preserve" ? new Date(v.getTime() + v.getTimezoneOffset() * 6e4) : v;
    }
    return U ? U === "date" || U === "timestamp" ? new Date(i) : U === "format" && (typeof e == "string" || !e) ? ln(i, P(), new Date()) : ln(i, U, new Date()) : new Date(i);
  }, x = (i) => U ? U === "timestamp" ? +i : U === "format" && (typeof e == "string" || !e) ? vt(i, P(), k == null ? void 0 : k.value, I == null ? void 0 : I.rangeSeparator) : vt(i, U, k == null ? void 0 : k.value, I == null ? void 0 : I.rangeSeparator) : i, z = (i) => {
    ee("update:modelValue", i);
  }, M = () => [
    x(o.value[0]),
    o.value[1] ? x(o.value[1]) : null
  ];
  return {
    parseExternalModelValue: X,
    formatInputValue: K,
    internalModelValue: o,
    inputValue: l,
    emitModelValue: () => {
      if (n)
        z(_n(o.value));
      else if (a)
        z(sn(o.value));
      else if (_)
        z(o.value);
      else if (E)
        z(
          Array.isArray(o.value) ? [
            ue(o.value[0]),
            o.value[1] ? ue(o.value[1]) : null
          ] : ue(o.value)
        );
      else {
        if (o.value && t && c && o.value.length === 1 && o.value.push(null), B) {
          let i;
          if (Array.isArray(o.value)) {
            const v = (y) => y && Zt(y, B === "preserve");
            V ? i = o.value[1] ? o.value.map(v) : Zt(o.value[0], B === "preserve") : i = o.value.map(v);
          } else
            i = Zt(o.value, B === "preserve");
          return z(i);
        }
        Array.isArray(o.value) && !w ? z(
          V ? o.value[1] ? M() : x(o.value[0]) : M()
        ) : Array.isArray(o.value) && w ? z(o.value.map((i) => x(i))) : z(x(o.value));
      }
      K();
    },
    checkBeforeEmit: q
  };
}, xr = (e, a, n, t, c, f, g, m, k) => {
  const w = O({
    top: "0",
    left: "0",
    transform: "none"
  }), B = O(!1), _ = 390, E = (P) => {
    const K = P.getBoundingClientRect();
    return {
      left: K.left + window.scrollX,
      top: K.top + window.scrollY
    };
  }, I = (P) => {
    const K = P.getBoundingClientRect();
    let q = 0, te = 0;
    for (; P && !isNaN(P.offsetLeft) && !isNaN(P.offsetTop); )
      q += P.offsetLeft - P.scrollLeft, te = K.top + P.scrollTop, P = P.offsetParent;
    return { top: te, left: q };
  }, U = (P, K) => {
    w.value.left = `${P + K}px`, w.value.transform = "translateX(-100%)";
  }, V = (P) => {
    w.value.left = `${P}px`, w.value.transform = "translateX(0)";
  }, ee = (P, K) => {
    e === Et.left && V(P), e === Et.right && U(P, K), e === Et.center && (w.value.left = `${P + K / 2}px`, w.value.transform = "translateX(-50%)");
  }, l = () => {
    const P = ke(c);
    if (P) {
      const K = window.innerHeight, { top: q } = a ? I(P) : E(P), { left: te, width: x, top: z, height: M } = P.getBoundingClientRect(), D = K - z - M;
      w.value.top = z > D ? `${q - _}px` : `${q}px`, ee(te, x);
    }
  }, o = () => {
    w.value.left = "50%", w.value.top = "50%", w.value.transform = "translate(-50%, -50%)", w.value.position = "fixed";
  }, Y = (P = !0) => {
    if (!f) {
      if (m.value)
        return o();
      const K = ke(c);
      if (a && typeof a != "boolean")
        w.value = a(K);
      else if (K) {
        const { left: q, width: te, height: x } = K.getBoundingClientRect(), { top: z } = a ? I(K) : E(K);
        w.value.top = `${x + z + +g}px`, ee(q, te), P && n && X();
      }
    }
  }, X = () => {
    const P = ke(c);
    if (P && n && !f) {
      const { height: K, top: q, left: te, width: x } = P.getBoundingClientRect(), { top: z } = a ? I(P) : E(P), D = window.innerHeight - q - K, i = ke(t);
      if (i) {
        const { height: v, left: y, right: C } = i.getBoundingClientRect(), G = v + K;
        G > q && G > D ? q < D ? (Y(!1), B.value = !1) : (w.value.top = `${z - v - +g}px`, B.value = !0) : G > D ? (w.value.top = `${z - v - +g}px`, B.value = !0) : (Y(!1), B.value = !1), y < 0 ? V(te) : C > document.documentElement.clientWidth && U(te, x);
      }
    }
    k("recalculatePosition");
  };
  return { openOnTop: B, menuPosition: w, setMenuPosition: Y, setInitialPosition: l, recalculatePosition: X };
}, es = typeof window < "u" ? window : void 0, an = () => {
}, ts = (e) => Aa() ? (Ca(e), !0) : !1, ns = (e, a, n, t) => {
  if (!e)
    return an;
  let c = an;
  const f = St(
    () => s(e),
    (m) => {
      c(), m && (m.addEventListener(a, n, t), c = () => {
        m.removeEventListener(a, n, t), c = an;
      });
    },
    { immediate: !0, flush: "post" }
  ), g = () => {
    f(), c();
  };
  return ts(g), g;
}, as = (e, a, n, t = {}) => {
  const { window: c = es, event: f = "pointerdown" } = t;
  return c ? ns(c, f, (m) => {
    const k = ke(e), w = ke(a);
    !k || !w || k === m.target || m.composedPath().includes(k) || m.composedPath().includes(w) || n(m);
  }, { passive: !0 }) : void 0;
}, ls = /* @__PURE__ */ Oe({
  __name: "VueDatePicker",
  props: {
    ...Rl
  },
  emits: [
    "update:modelValue",
    "textSubmit",
    "closed",
    "cleared",
    "open",
    "focus",
    "blur",
    "internalModelChange",
    "recalculatePosition",
    "flow-step",
    "updateMonthYear",
    "invalid-select"
  ],
  setup(e, { expose: a, emit: n }) {
    const t = e, c = fn(), f = O(!1), g = Tt(t, "modelValue"), m = O(null), k = O(null), w = Tt(t, "teleportCenter");
    ct(pn, t.autoApply);
    const B = R(() => t.formatLocale);
    ct(Qn, B), ct(Zn, Tt(t, "textInput")), ct(qe, Tt(t, "arrowNavigation")), Ne(() => {
      X(t.modelValue), t.inline || (window.addEventListener("scroll", h), window.addEventListener("resize", T)), t.inline && (f.value = !0);
    }), cn(() => {
      t.inline || (window.removeEventListener("scroll", h), window.removeEventListener("resize", T));
    });
    const _ = at(c, "all"), E = at(c, "input");
    St(
      g,
      () => {
        X(g.value);
      },
      { deep: !0 }
    );
    const { openOnTop: I, menuPosition: U, setMenuPosition: V, recalculatePosition: ee, setInitialPosition: l } = xr(
      t.position,
      t.altPosition,
      t.autoPosition,
      m,
      k,
      t.inline,
      t.offset,
      w,
      n
    ), {
      internalModelValue: o,
      inputValue: Y,
      parseExternalModelValue: X,
      emitModelValue: P,
      checkBeforeEmit: K,
      formatInputValue: q
    } = Qr(
      t.format,
      t.timePicker,
      t.monthPicker,
      t.range,
      t.partialRange,
      t.is24,
      t.enableTimePicker,
      t.enableSeconds,
      B,
      t.multiDates,
      t.utc,
      t.weekPicker,
      t.yearPicker,
      t.textInputOptions,
      t.modelType,
      t.modelAuto,
      n
    ), { clearArrowNav: te } = Je(), { setMenuFocused: x, setShiftKey: z } = da(), M = R(
      () => ({
        dp__main: !0,
        dp__theme_dark: t.dark,
        dp__theme_light: !t.dark,
        dp__flex_display: t.inline,
        dp__flex_display_with_input: t.inlineWithInput
      })
    ), D = R(() => Nn(t.format) ? t.format : zn(
      null,
      t.is24,
      t.enableSeconds,
      t.monthPicker,
      t.timePicker,
      t.weekPicker,
      t.yearPicker,
      t.enableTimePicker
    )), i = R(() => t.previewFormat ? t.previewFormat : Nn(D.value) ? D.value : t.format), v = R(() => typeof t.transitions == "boolean" ? t.transitions ? In({}) : !1 : In(t.transitions));
    ct(Wt, v);
    const y = R(() => t.dark ? "dp__theme_dark" : "dp__theme_light"), C = R(() => Object.assign(Zl(), t.textInputOptions)), G = R(() => tr(t.ariaLabels));
    ct(Xe, G);
    const W = R(() => Ql(t.filters)), Z = R(() => {
      const d = (le) => {
        const me = {
          hours: _e(new Date()),
          minutes: Be(new Date()),
          seconds: je(new Date())
        };
        return Object.assign(me, le);
      };
      return t.range ? t.startTime && Array.isArray(t.startTime) ? [d(t.startTime[0]), d(t.startTime[1])] : null : t.startTime && !Array.isArray(t.startTime) ? d(t.startTime) : null;
    }), ae = R(() => t.multiCalendars === null ? 0 : typeof t.multiCalendars == "boolean" ? t.multiCalendars ? 2 : 0 : +t.multiCalendars >= 2 ? +t.multiCalendars : 2), h = () => {
      f.value && (t.closeOnScroll ? be() : t.autoPosition ? V() : window.removeEventListener("scroll", h));
    }, T = () => {
      f.value && V();
    }, N = () => {
      !t.disabled && !t.readonly && (l(), f.value = !0, At().then(() => {
        V(), f.value && n("open");
      }), f.value || Ze(), X(t.modelValue));
    }, Re = () => {
      Y.value = "", Ze(), n("update:modelValue", null), n("cleared"), be();
    }, Ie = () => {
      const { validate: d } = Jn(
        t.minDate,
        t.maxDate,
        t.disabledDates,
        t.allowedDates,
        W.value,
        t.disabledWeekDays,
        t.yearRange
      ), le = o.value;
      return !le || !Array.isArray(le) && d(le) ? !0 : Array.isArray(le) ? le.length === 2 && d(le[0]) && d(le[1]) ? !0 : !!d(le[0]) : !1;
    }, Ye = () => {
      K() && Ie() ? (P(), be()) : n("invalid-select", o.value);
    }, We = (d) => {
      P(), t.closeOnAutoApply && !d && be();
    }, Le = (d = !1) => {
      t.autoApply && (!t.enableTimePicker || t.monthPicker || t.yearPicker || t.ignoreTimeValidation ? !0 : on(o.value, t.maxTime, t.minTime, t.maxDate, t.minDate)) && Ie() && (t.range && Array.isArray(o.value) ? (t.partialRange || o.value.length === 2) && We(d) : We(d));
    }, Ze = () => {
      o.value = null;
    }, be = () => {
      t.inline || (f.value && (f.value = !1, x(!1), z(!1), te(), n("closed"), l(), Y.value && X(g.value)), Ze(), k.value && k.value.focusInput());
    }, it = (d, le) => {
      if (!d) {
        o.value = null;
        return;
      }
      o.value = d, le && (Ye(), n("textSubmit"));
    }, pt = () => {
      t.autoApply && on(o.value, t.maxTime, t.minTime, t.maxDate, t.minDate) && P();
    }, ht = () => f.value ? be() : N();
    return as(m, k, be), a({
      closeMenu: be,
      selectDate: Ye,
      clearValue: Re,
      openMenu: N,
      onScroll: h,
      formatInputValue: q
    }), (d, le) => (p(), A("div", {
      class: fe(s(M))
    }, [
      ze(Il, Ce({
        ref_key: "inputRef",
        ref: k
      }, {
        placeholder: d.placeholder,
        hideInputIcon: d.hideInputIcon,
        readonly: d.readonly,
        disabled: d.disabled,
        inputClassName: d.inputClassName,
        clearable: d.clearable,
        state: d.state,
        inline: d.inline,
        inlineWithInput: d.inlineWithInput,
        textInput: d.textInput,
        textInputOptions: s(C),
        range: d.range,
        isMenuOpen: f.value,
        pattern: s(D),
        autoApply: d.autoApply,
        uid: d.uid,
        required: d.required,
        name: d.name,
        autocomplete: d.autocomplete
      }, {
        "input-value": s(Y),
        "onUpdate:input-value": le[0] || (le[0] = (me) => tt(Y) ? Y.value = me : null),
        onClear: Re,
        onOpen: N,
        onSetInputDate: it,
        onSetEmptyDate: s(P),
        onSelectDate: Ye,
        onToggle: ht,
        onClose: be,
        onFocus: le[1] || (le[1] = (me) => d.$emit("focus")),
        onBlur: le[2] || (le[2] = (me) => d.$emit("blur"))
      }), Pe({ _: 2 }, [
        pe(s(E), (me, ut) => ({
          name: me,
          fn: re((Qe) => [
            H(d.$slots, me, Ge(nt(Qe)))
          ])
        }))
      ]), 1040, ["input-value", "onSetEmptyDate"]),
      f.value ? (p(), se(Pa, {
        key: 0,
        to: d.teleport,
        disabled: d.inline
      }, [
        f.value ? (p(), se(Zr, Ce({
          key: 0,
          ref_key: "dpMenuRef",
          ref: m,
          class: s(y),
          style: s(U)
        }, {
          weekNumbers: d.weekNumbers,
          weekStart: d.weekStart,
          disableMonthYearSelect: d.disableMonthYearSelect,
          menuClassName: d.menuClassName,
          calendarClassName: d.calendarClassName,
          yearRange: d.yearRange,
          range: d.range,
          multiCalendars: s(ae),
          multiCalendarsSolo: d.multiCalendarsSolo,
          multiStatic: d.multiStatic,
          calendarCellClassName: d.calendarCellClassName,
          enableTimePicker: d.enableTimePicker,
          is24: d.is24,
          hoursIncrement: d.hoursIncrement,
          minutesIncrement: d.minutesIncrement,
          hoursGridIncrement: d.hoursGridIncrement,
          minutesGridIncrement: d.minutesGridIncrement,
          minDate: d.minDate,
          maxDate: d.maxDate,
          autoApply: d.autoApply,
          selectText: d.selectText,
          cancelText: d.cancelText,
          previewFormat: s(i),
          locale: d.locale,
          weekNumName: d.weekNumName,
          disabledDates: d.disabledDates,
          filters: s(W),
          minTime: d.minTime,
          maxTime: d.maxTime,
          inline: d.inline,
          openOnTop: s(I),
          monthPicker: d.monthPicker,
          timePicker: d.timePicker,
          monthNameFormat: d.monthNameFormat,
          startDate: d.startDate,
          startTime: s(Z),
          monthYearComponent: d.monthYearComponent,
          timePickerComponent: d.timePickerComponent,
          actionRowComponent: d.actionRowComponent,
          customProps: d.customProps,
          hideOffsetDates: d.hideOffsetDates,
          autoRange: d.autoRange,
          noToday: d.noToday,
          noHoursOverlay: d.noHoursOverlay,
          noMinutesOverlay: d.noMinutesOverlay,
          disabledWeekDays: d.disabledWeekDays,
          allowedDates: d.allowedDates,
          showNowButton: d.showNowButton,
          nowButtonLabel: d.nowButtonLabel,
          monthChangeOnScroll: d.monthChangeOnScroll,
          markers: d.markers,
          uid: d.uid,
          modeHeight: d.modeHeight,
          enableSeconds: d.enableSeconds,
          secondsIncrement: d.secondsIncrement,
          secondsGridIncrement: d.secondsGridIncrement,
          noSecondsOverlay: d.noSecondsOverlay,
          escClose: d.escClose,
          spaceConfirm: d.spaceConfirm,
          monthChangeOnArrows: d.monthChangeOnArrows,
          textInput: d.textInput,
          disabled: d.disabled,
          readonly: d.readonly,
          multiDates: d.multiDates,
          presetRanges: d.presetRanges,
          flow: d.flow,
          preventMinMaxNavigation: d.preventMinMaxNavigation,
          minRange: d.minRange,
          maxRange: d.maxRange,
          fixedStart: d.fixedStart,
          fixedEnd: d.fixedEnd,
          multiDatesLimit: d.multiDatesLimit,
          reverseYears: d.reverseYears,
          keepActionRow: d.keepActionRow,
          weekPicker: d.weekPicker,
          noSwipe: d.noSwipe,
          vertical: d.vertical,
          arrowNavigation: d.arrowNavigation,
          yearPicker: d.yearPicker,
          disableTimeRangeValidation: d.disableTimeRangeValidation,
          dayNames: d.dayNames,
          modelAuto: d.modelAuto,
          highlight: d.highlight,
          highlightWeekDays: d.highlightWeekDays,
          highlightDisabledDays: d.highlightDisabledDays,
          partialRange: d.partialRange,
          teleportCenter: d.teleportCenter,
          ignoreTimeValidation: d.ignoreTimeValidation
        }, {
          internalModelValue: s(o),
          "onUpdate:internalModelValue": le[3] || (le[3] = (me) => tt(o) ? o.value = me : null),
          onClosePicker: be,
          onSelectDate: Ye,
          onDpOpen: s(ee),
          onAutoApply: Le,
          onTimeUpdate: pt,
          onFlowStep: le[4] || (le[4] = (me) => d.$emit("flow-step", me)),
          onUpdateMonthYear: le[5] || (le[5] = (me) => d.$emit("updateMonthYear", me)),
          onInvalidSelect: le[6] || (le[6] = (me) => d.$emit("invalid-select", s(o)))
        }), Pe({ _: 2 }, [
          pe(s(_), (me, ut) => ({
            name: me,
            fn: re((Qe) => [
              H(d.$slots, me, Ge(nt({ ...Qe })))
            ])
          }))
        ]), 1040, ["class", "style", "internalModelValue", "onDpOpen"])) : $("", !0)
      ], 8, ["to", "disabled"])) : $("", !0)
    ], 2));
  }
}), ca = /* @__PURE__ */ (() => {
  const e = ls;
  return e.install = (a) => {
    a.component("Vue3DatePicker", e);
  }, e;
})(), rs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ca
}, Symbol.toStringTag, { value: "Module" }));
Object.entries(rs).forEach(([e, a]) => {
  e !== "default" && (ca[e] = a);
});
export {
  ca as default
};
