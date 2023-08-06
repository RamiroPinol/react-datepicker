!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? t(
        exports,
        require("react"),
        require("prop-types"),
        require("classnames"),
        require("date-fns/isDate"),
        require("date-fns/isValid"),
        require("date-fns/format"),
        require("date-fns/addMinutes"),
        require("date-fns/addHours"),
        require("date-fns/addDays"),
        require("date-fns/addWeeks"),
        require("date-fns/addMonths"),
        require("date-fns/addQuarters"),
        require("date-fns/addYears"),
        require("date-fns/subMinutes"),
        require("date-fns/subHours"),
        require("date-fns/subDays"),
        require("date-fns/subWeeks"),
        require("date-fns/subMonths"),
        require("date-fns/subQuarters"),
        require("date-fns/subYears"),
        require("date-fns/getSeconds"),
        require("date-fns/getMinutes"),
        require("date-fns/getHours"),
        require("date-fns/getDay"),
        require("date-fns/getDate"),
        require("date-fns/getISOWeek"),
        require("date-fns/getMonth"),
        require("date-fns/getQuarter"),
        require("date-fns/getYear"),
        require("date-fns/getTime"),
        require("date-fns/setSeconds"),
        require("date-fns/setMinutes"),
        require("date-fns/setHours"),
        require("date-fns/setMonth"),
        require("date-fns/setQuarter"),
        require("date-fns/setYear"),
        require("date-fns/min"),
        require("date-fns/max"),
        require("date-fns/differenceInCalendarDays"),
        require("date-fns/differenceInCalendarMonths"),
        require("date-fns/differenceInCalendarWeeks"),
        require("date-fns/differenceInCalendarYears"),
        require("date-fns/startOfDay"),
        require("date-fns/startOfWeek"),
        require("date-fns/startOfMonth"),
        require("date-fns/startOfQuarter"),
        require("date-fns/startOfYear"),
        require("date-fns/endOfDay"),
        require("date-fns/endOfWeek"),
        require("date-fns/endOfMonth"),
        require("date-fns/endOfYear"),
        require("date-fns/isEqual"),
        require("date-fns/isSameDay"),
        require("date-fns/isSameMonth"),
        require("date-fns/isSameYear"),
        require("date-fns/isSameQuarter"),
        require("date-fns/isAfter"),
        require("date-fns/isBefore"),
        require("date-fns/isWithinInterval"),
        require("date-fns/toDate"),
        require("date-fns/parse"),
        require("date-fns/parseISO"),
        require("react-onclickoutside"),
        require("react-dom"),
        require("react-popper"),
        require("date-fns/set")
      )
    : "function" == typeof define && define.amd
    ? define(
        [
          "exports",
          "react",
          "prop-types",
          "classnames",
          "date-fns/isDate",
          "date-fns/isValid",
          "date-fns/format",
          "date-fns/addMinutes",
          "date-fns/addHours",
          "date-fns/addDays",
          "date-fns/addWeeks",
          "date-fns/addMonths",
          "date-fns/addQuarters",
          "date-fns/addYears",
          "date-fns/subMinutes",
          "date-fns/subHours",
          "date-fns/subDays",
          "date-fns/subWeeks",
          "date-fns/subMonths",
          "date-fns/subQuarters",
          "date-fns/subYears",
          "date-fns/getSeconds",
          "date-fns/getMinutes",
          "date-fns/getHours",
          "date-fns/getDay",
          "date-fns/getDate",
          "date-fns/getISOWeek",
          "date-fns/getMonth",
          "date-fns/getQuarter",
          "date-fns/getYear",
          "date-fns/getTime",
          "date-fns/setSeconds",
          "date-fns/setMinutes",
          "date-fns/setHours",
          "date-fns/setMonth",
          "date-fns/setQuarter",
          "date-fns/setYear",
          "date-fns/min",
          "date-fns/max",
          "date-fns/differenceInCalendarDays",
          "date-fns/differenceInCalendarMonths",
          "date-fns/differenceInCalendarWeeks",
          "date-fns/differenceInCalendarYears",
          "date-fns/startOfDay",
          "date-fns/startOfWeek",
          "date-fns/startOfMonth",
          "date-fns/startOfQuarter",
          "date-fns/startOfYear",
          "date-fns/endOfDay",
          "date-fns/endOfWeek",
          "date-fns/endOfMonth",
          "date-fns/endOfYear",
          "date-fns/isEqual",
          "date-fns/isSameDay",
          "date-fns/isSameMonth",
          "date-fns/isSameYear",
          "date-fns/isSameQuarter",
          "date-fns/isAfter",
          "date-fns/isBefore",
          "date-fns/isWithinInterval",
          "date-fns/toDate",
          "date-fns/parse",
          "date-fns/parseISO",
          "react-onclickoutside",
          "react-dom",
          "react-popper",
          "date-fns/set",
        ],
        t
      )
    : t(
        ((e =
          "undefined" != typeof globalThis
            ? globalThis
            : e || self).DatePicker = {}),
        e.React,
        e.PropTypes,
        e.classNames,
        e.isDate,
        e.isValidDate,
        e.format,
        e.addMinutes,
        e.addHours,
        e.addDays,
        e.addWeeks,
        e.addMonths,
        e.addQuarters,
        e.addYears,
        null,
        null,
        e.subDays,
        e.subWeeks,
        e.subMonths,
        e.subQuarters,
        e.subYears,
        e.getSeconds,
        e.getMinutes,
        e.getHours,
        e.getDay,
        e.getDate,
        e.getISOWeek,
        e.getMonth,
        e.getQuarter,
        e.getYear,
        e.getTime,
        e.setSeconds,
        e.setMinutes,
        e.setHours,
        e.setMonth,
        e.setQuarter,
        e.setYear,
        e.min,
        e.max,
        e.differenceInCalendarDays,
        e.differenceInCalendarMonths,
        null,
        e.differenceInCalendarYears,
        e.startOfDay,
        e.startOfWeek,
        e.startOfMonth,
        e.startOfQuarter,
        e.startOfYear,
        e.endOfDay,
        null,
        e.endOfMonth,
        e.endOfYear,
        e.dfIsEqual,
        e.dfIsSameDay,
        e.dfIsSameMonth,
        e.dfIsSameYear,
        e.dfIsSameQuarter,
        e.isAfter,
        e.isBefore,
        e.isWithinInterval,
        e.toDate,
        e.parse,
        e.parseISO,
        e.onClickOutside,
        e.ReactDOM,
        e.ReactPopper,
        e.set
      );
})(
  this,
  function (
    e,
    t,
    r,
    a,
    n,
    o,
    s,
    i,
    p,
    l,
    c,
    d,
    u,
    f,
    h,
    m,
    y,
    v,
    D,
    g,
    w,
    k,
    b,
    S,
    C,
    _,
    M,
    P,
    E,
    N,
    x,
    O,
    Y,
    I,
    T,
    L,
    R,
    F,
    A,
    q,
    K,
    B,
    W,
    Q,
    H,
    j,
    V,
    U,
    z,
    $,
    G,
    J,
    X,
    Z,
    ee,
    te,
    re,
    ae,
    ne,
    oe,
    se,
    ie,
    pe,
    le,
    ce,
    de,
    ue
  ) {
    "use strict";
    function fe(e) {
      return e && "object" == typeof e && "default" in e ? e : { default: e };
    }
    var he = fe(t),
      me = fe(a),
      ye = fe(n),
      ve = fe(o),
      De = fe(s),
      ge = fe(i),
      we = fe(p),
      ke = fe(l),
      be = fe(c),
      Se = fe(d),
      Ce = fe(u),
      _e = fe(f),
      Me = fe(y),
      Pe = fe(v),
      Ee = fe(D),
      Ne = fe(g),
      xe = fe(w),
      Oe = fe(k),
      Ye = fe(b),
      Ie = fe(S),
      Te = fe(C),
      Le = fe(_),
      Re = fe(M),
      Fe = fe(P),
      Ae = fe(E),
      qe = fe(N),
      Ke = fe(x),
      Be = fe(O),
      We = fe(Y),
      Qe = fe(I),
      He = fe(T),
      je = fe(L),
      Ve = fe(R),
      Ue = fe(F),
      ze = fe(A),
      $e = fe(q),
      Ge = fe(K),
      Je = fe(W),
      Xe = fe(Q),
      Ze = fe(H),
      et = fe(j),
      tt = fe(V),
      rt = fe(U),
      at = fe(z),
      nt = fe(G),
      ot = fe(J),
      st = fe(X),
      it = fe(Z),
      pt = fe(ee),
      lt = fe(te),
      ct = fe(re),
      dt = fe(ae),
      ut = fe(ne),
      ft = fe(oe),
      ht = fe(se),
      mt = fe(ie),
      yt = fe(pe),
      vt = fe(le),
      Dt = fe(ce),
      gt = fe(ue);
    function wt(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        t &&
          (a = a.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, a);
      }
      return r;
    }
    function kt(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? wt(Object(r), !0).forEach(function (t) {
              Mt(e, t, r[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
          : wt(Object(r)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(r, t)
              );
            });
      }
      return e;
    }
    function bt(e) {
      return (bt =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function St(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function Ct(e, t) {
      for (var r = 0; r < t.length; r++) {
        var a = t[r];
        (a.enumerable = a.enumerable || !1),
          (a.configurable = !0),
          "value" in a && (a.writable = !0),
          Object.defineProperty(e, Rt(a.key), a);
      }
    }
    function _t(e, t, r) {
      return (
        t && Ct(e.prototype, t),
        r && Ct(e, r),
        Object.defineProperty(e, "prototype", { writable: !1 }),
        e
      );
    }
    function Mt(e, t, r) {
      return (
        (t = Rt(t)) in e
          ? Object.defineProperty(e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = r),
        e
      );
    }
    function Pt() {
      return (Pt = Object.assign
        ? Object.assign.bind()
        : function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var a in r)
                Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
            }
            return e;
          }).apply(this, arguments);
    }
    function Et(e, t) {
      if ("function" != typeof t && null !== t)
        throw new TypeError(
          "Super expression must either be null or a function"
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: { value: e, writable: !0, configurable: !0 },
      })),
        Object.defineProperty(e, "prototype", { writable: !1 }),
        t && xt(e, t);
    }
    function Nt(e) {
      return (Nt = Object.setPrototypeOf
        ? Object.getPrototypeOf.bind()
        : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function xt(e, t) {
      return (xt = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
    }
    function Ot(e) {
      if (void 0 === e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return e;
    }
    function Yt(e, t) {
      if (t && ("object" == typeof t || "function" == typeof t)) return t;
      if (void 0 !== t)
        throw new TypeError(
          "Derived constructors may only return object or undefined"
        );
      return Ot(e);
    }
    function It(e) {
      var t = (function () {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return (
            Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {})
            ),
            !0
          );
        } catch (e) {
          return !1;
        }
      })();
      return function () {
        var r,
          a = Nt(e);
        if (t) {
          var n = Nt(this).constructor;
          r = Reflect.construct(a, arguments, n);
        } else r = a.apply(this, arguments);
        return Yt(this, r);
      };
    }
    function Tt(e) {
      return (
        (function (e) {
          if (Array.isArray(e)) return Lt(e);
        })(e) ||
        (function (e) {
          if (
            ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
            null != e["@@iterator"]
          )
            return Array.from(e);
        })(e) ||
        (function (e, t) {
          if (!e) return;
          if ("string" == typeof e) return Lt(e, t);
          var r = Object.prototype.toString.call(e).slice(8, -1);
          "Object" === r && e.constructor && (r = e.constructor.name);
          if ("Map" === r || "Set" === r) return Array.from(e);
          if (
            "Arguments" === r ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          )
            return Lt(e, t);
        })(e) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    function Lt(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var r = 0, a = new Array(t); r < t; r++) a[r] = e[r];
      return a;
    }
    function Rt(e) {
      var t = (function (e, t) {
        if ("object" != typeof e || null === e) return e;
        var r = e[Symbol.toPrimitive];
        if (void 0 !== r) {
          var a = r.call(e, t || "default");
          if ("object" != typeof a) return a;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === t ? String : Number)(e);
      })(e, "string");
      return "symbol" == typeof t ? t : String(t);
    }
    function Ft(e, t) {
      switch (e) {
        case "P":
          return t.date({ width: "short" });
        case "PP":
          return t.date({ width: "medium" });
        case "PPP":
          return t.date({ width: "long" });
        case "PPPP":
        default:
          return t.date({ width: "full" });
      }
    }
    function At(e, t) {
      switch (e) {
        case "p":
          return t.time({ width: "short" });
        case "pp":
          return t.time({ width: "medium" });
        case "ppp":
          return t.time({ width: "long" });
        case "pppp":
        default:
          return t.time({ width: "full" });
      }
    }
    var qt = {
        p: At,
        P: function (e, t) {
          var r,
            a = e.match(/(P+)(p+)?/) || [],
            n = a[1],
            o = a[2];
          if (!o) return Ft(e, t);
          switch (n) {
            case "P":
              r = t.dateTime({ width: "short" });
              break;
            case "PP":
              r = t.dateTime({ width: "medium" });
              break;
            case "PPP":
              r = t.dateTime({ width: "long" });
              break;
            case "PPPP":
            default:
              r = t.dateTime({ width: "full" });
          }
          return r.replace("{{date}}", Ft(n, t)).replace("{{time}}", At(o, t));
        },
      },
      Kt = 12,
      Bt = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
    function Wt(e) {
      var t = e
        ? "string" == typeof e || e instanceof String
          ? yt.default(e)
          : ht.default(e)
        : new Date();
      return Ht(t) ? t : null;
    }
    function Qt(e, t, r, a, n) {
      var o = null,
        s = lr(r) || lr(pr()),
        i = !0;
      return Array.isArray(t)
        ? (t.forEach(function (t) {
            var p = mt.default(e, t, new Date(), { locale: s });
            a && (i = Ht(p, n) && e === jt(p, t, r)), Ht(p, n) && i && (o = p);
          }),
          o)
        : ((o = mt.default(e, t, new Date(), { locale: s })),
          a
            ? (i = Ht(o) && e === jt(o, t, r))
            : Ht(o) ||
              ((t = t
                .match(Bt)
                .map(function (e) {
                  var t = e[0];
                  return "p" === t || "P" === t
                    ? s
                      ? (0, qt[t])(e, s.formatLong)
                      : t
                    : e;
                })
                .join("")),
              e.length > 0 &&
                (o = mt.default(e, t.slice(0, e.length), new Date())),
              Ht(o) || (o = new Date(e))),
          Ht(o) && i ? o : null);
    }
    function Ht(e, t) {
      return (
        (t = t || new Date("1/1/1000")), ve.default(e) && !ut.default(e, t)
      );
    }
    function jt(e, t, r) {
      if ("en" === r) return De.default(e, t, { awareOfUnicodeTokens: !0 });
      var a = lr(r);
      return (
        r &&
          !a &&
          console.warn(
            'A locale object was not found for the provided string ["'.concat(
              r,
              '"].'
            )
          ),
        !a && pr() && lr(pr()) && (a = lr(pr())),
        De.default(e, t, { locale: a || null, awareOfUnicodeTokens: !0 })
      );
    }
    function Vt(e, t) {
      var r = t.dateFormat,
        a = t.locale;
      return (e && jt(e, Array.isArray(r) ? r[0] : r, a)) || "";
    }
    function Ut(e, t) {
      var r = t.hour,
        a = void 0 === r ? 0 : r,
        n = t.minute,
        o = void 0 === n ? 0 : n,
        s = t.second,
        i = void 0 === s ? 0 : s;
      return Qe.default(We.default(Be.default(e, i), o), a);
    }
    function zt(e, t) {
      var r = (t && lr(t)) || (pr() && lr(pr()));
      return Re.default(e, r ? { locale: r } : null);
    }
    function $t(e, t) {
      return jt(e, "ddd", t);
    }
    function Gt(e) {
      return Xe.default(e);
    }
    function Jt(e, t, r) {
      var a = lr(t || pr());
      return Ze.default(e, { locale: a, weekStartsOn: r });
    }
    function Xt(e) {
      return et.default(e);
    }
    function Zt(e) {
      return rt.default(e);
    }
    function er(e) {
      return tt.default(e);
    }
    function tr() {
      return Xe.default(Wt());
    }
    function rr(e, t) {
      return e && t ? lt.default(e, t) : !e && !t;
    }
    function ar(e, t) {
      return e && t ? pt.default(e, t) : !e && !t;
    }
    function nr(e, t) {
      return e && t ? ct.default(e, t) : !e && !t;
    }
    function or(e, t) {
      return e && t ? it.default(e, t) : !e && !t;
    }
    function sr(e, t) {
      return e && t ? st.default(e, t) : !e && !t;
    }
    function ir(e, t, r) {
      var a,
        n = Xe.default(t),
        o = at.default(r);
      try {
        a = ft.default(e, { start: n, end: o });
      } catch (e) {
        a = !1;
      }
      return a;
    }
    function pr() {
      return ("undefined" != typeof window ? window : globalThis).__localeId__;
    }
    function lr(e) {
      if ("string" == typeof e) {
        var t = "undefined" != typeof window ? window : globalThis;
        return t.__localeData__ ? t.__localeData__[e] : null;
      }
      return e;
    }
    function cr(e, t) {
      return jt(He.default(Wt(), e), "LLLL", t);
    }
    function dr(e, t) {
      return jt(He.default(Wt(), e), "LLL", t);
    }
    function ur(e, t) {
      return jt(je.default(Wt(), e), "QQQ", t);
    }
    function fr(e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        r = t.minDate,
        a = t.maxDate,
        n = t.excludeDates,
        o = t.excludeDateIntervals,
        s = t.includeDates,
        i = t.includeDateIntervals,
        p = t.filterDate;
      return (
        wr(e, { minDate: r, maxDate: a }) ||
        (n &&
          n.some(function (t) {
            return or(e, t);
          })) ||
        (o &&
          o.some(function (t) {
            var r = t.start,
              a = t.end;
            return ft.default(e, { start: r, end: a });
          })) ||
        (s &&
          !s.some(function (t) {
            return or(e, t);
          })) ||
        (i &&
          !i.some(function (t) {
            var r = t.start,
              a = t.end;
            return ft.default(e, { start: r, end: a });
          })) ||
        (p && !p(Wt(e))) ||
        !1
      );
    }
    function hr(e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        r = t.excludeDates,
        a = t.excludeDateIntervals;
      return a && a.length > 0
        ? a.some(function (t) {
            var r = t.start,
              a = t.end;
            return ft.default(e, { start: r, end: a });
          })
        : (r &&
            r.some(function (t) {
              return or(e, t);
            })) ||
            !1;
    }
    function mr(e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        r = t.minDate,
        a = t.maxDate,
        n = t.excludeDates,
        o = t.includeDates,
        s = t.filterDate;
      return (
        wr(e, { minDate: et.default(r), maxDate: nt.default(a) }) ||
        (n &&
          n.some(function (t) {
            return ar(e, t);
          })) ||
        (o &&
          !o.some(function (t) {
            return ar(e, t);
          })) ||
        (s && !s(Wt(e))) ||
        !1
      );
    }
    function yr(e, t, r, a) {
      var n = qe.default(e),
        o = Fe.default(e),
        s = qe.default(t),
        i = Fe.default(t),
        p = qe.default(a);
      return n === s && n === p
        ? o <= r && r <= i
        : n < s
        ? (p === n && o <= r) || (p === s && i >= r) || (p < s && p > n)
        : void 0;
    }
    function vr(e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        r = t.minDate,
        a = t.maxDate,
        n = t.excludeDates,
        o = t.includeDates,
        s = t.filterDate;
      return (
        wr(e, { minDate: r, maxDate: a }) ||
        (n &&
          n.some(function (t) {
            return nr(e, t);
          })) ||
        (o &&
          !o.some(function (t) {
            return nr(e, t);
          })) ||
        (s && !s(Wt(e))) ||
        !1
      );
    }
    function Dr(e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        r = t.minDate,
        a = t.maxDate,
        n = t.excludeDates,
        o = t.includeDates,
        s = t.filterDate,
        i = new Date(e, 0, 1);
      return (
        wr(i, { minDate: rt.default(r), maxDate: ot.default(a) }) ||
        (n &&
          n.some(function (e) {
            return rr(i, e);
          })) ||
        (o &&
          !o.some(function (e) {
            return rr(i, e);
          })) ||
        (s && !s(Wt(i))) ||
        !1
      );
    }
    function gr(e, t, r, a) {
      var n = qe.default(e),
        o = Ae.default(e),
        s = qe.default(t),
        i = Ae.default(t),
        p = qe.default(a);
      return n === s && n === p
        ? o <= r && r <= i
        : n < s
        ? (p === n && o <= r) || (p === s && i >= r) || (p < s && p > n)
        : void 0;
    }
    function wr(e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        r = t.minDate,
        a = t.maxDate;
      return (r && $e.default(e, r) < 0) || (a && $e.default(e, a) > 0);
    }
    function kr(e, t) {
      return t.some(function (t) {
        return (
          Ie.default(t) === Ie.default(e) && Ye.default(t) === Ye.default(e)
        );
      });
    }
    function br(e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        r = t.excludeTimes,
        a = t.includeTimes,
        n = t.filterTime;
      return (r && kr(e, r)) || (a && !kr(e, a)) || (n && !n(e)) || !1;
    }
    function Sr(e, t) {
      var r = t.minTime,
        a = t.maxTime;
      if (!r || !a) throw new Error("Both minTime and maxTime props required");
      var n,
        o = Wt(),
        s = Qe.default(We.default(o, Ye.default(e)), Ie.default(e)),
        i = Qe.default(We.default(o, Ye.default(r)), Ie.default(r)),
        p = Qe.default(We.default(o, Ye.default(a)), Ie.default(a));
      try {
        n = !ft.default(s, { start: i, end: p });
      } catch (e) {
        n = !1;
      }
      return n;
    }
    function Cr(e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        r = t.minDate,
        a = t.includeDates,
        n = Ee.default(e, 1);
      return (
        (r && Ge.default(r, n) > 0) ||
        (a &&
          a.every(function (e) {
            return Ge.default(e, n) > 0;
          })) ||
        !1
      );
    }
    function _r(e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        r = t.maxDate,
        a = t.includeDates,
        n = Se.default(e, 1);
      return (
        (r && Ge.default(n, r) > 0) ||
        (a &&
          a.every(function (e) {
            return Ge.default(n, e) > 0;
          })) ||
        !1
      );
    }
    function Mr(e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        r = t.minDate,
        a = t.includeDates,
        n = xe.default(e, 1);
      return (
        (r && Je.default(r, n) > 0) ||
        (a &&
          a.every(function (e) {
            return Je.default(e, n) > 0;
          })) ||
        !1
      );
    }
    function Pr(e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        r = t.maxDate,
        a = t.includeDates,
        n = _e.default(e, 1);
      return (
        (r && Je.default(n, r) > 0) ||
        (a &&
          a.every(function (e) {
            return Je.default(n, e) > 0;
          })) ||
        !1
      );
    }
    function Er(e) {
      var t = e.minDate,
        r = e.includeDates;
      if (r && t) {
        var a = r.filter(function (e) {
          return $e.default(e, t) >= 0;
        });
        return Ue.default(a);
      }
      return r ? Ue.default(r) : t;
    }
    function Nr(e) {
      var t = e.maxDate,
        r = e.includeDates;
      if (r && t) {
        var a = r.filter(function (e) {
          return $e.default(e, t) <= 0;
        });
        return ze.default(a);
      }
      return r ? ze.default(r) : t;
    }
    function xr() {
      for (
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "react-datepicker__day--highlighted",
          r = new Map(),
          a = 0,
          n = e.length;
        a < n;
        a++
      ) {
        var o = e[a];
        if (ye.default(o)) {
          var s = jt(o, "MM.dd.yyyy"),
            i = r.get(s) || [];
          i.includes(t) || (i.push(t), r.set(s, i));
        } else if ("object" === bt(o)) {
          var p = Object.keys(o),
            l = p[0],
            c = o[p[0]];
          if ("string" == typeof l && c.constructor === Array)
            for (var d = 0, u = c.length; d < u; d++) {
              var f = jt(c[d], "MM.dd.yyyy"),
                h = r.get(f) || [];
              h.includes(l) || (h.push(l), r.set(f, h));
            }
        }
      }
      return r;
    }
    function Or(e, t, r, a, n) {
      for (var o = n.length, s = [], i = 0; i < o; i++) {
        var p = ge.default(we.default(e, Ie.default(n[i])), Ye.default(n[i])),
          l = ge.default(e, (r + 1) * a);
        dt.default(p, t) && ut.default(p, l) && s.push(n[i]);
      }
      return s;
    }
    function Yr(e) {
      return e < 10 ? "0".concat(e) : "".concat(e);
    }
    function Ir(e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Kt,
        r = Math.ceil(qe.default(e) / t) * t,
        a = r - (t - 1);
      return { startPeriod: a, endPeriod: r };
    }
    function Tr(e, t, r, a) {
      for (var n = [], o = 0; o < 2 * t + 1; o++) {
        var s = e + t - o,
          i = !0;
        r && (i = qe.default(r) <= s),
          a && i && (i = qe.default(a) >= s),
          i && n.push(s);
      }
      return n;
    }
    var Lr = (function (e) {
        Et(a, e);
        var r = It(a);
        function a(e) {
          var n;
          St(this, a),
            Mt(Ot((n = r.call(this, e))), "renderOptions", function () {
              var e = n.props.year,
                t = n.state.yearsList.map(function (t) {
                  return he.default.createElement(
                    "div",
                    {
                      className:
                        e === t
                          ? "react-datepicker__year-option react-datepicker__year-option--selected_year"
                          : "react-datepicker__year-option",
                      key: t,
                      onClick: n.onChange.bind(Ot(n), t),
                      "aria-selected": e === t ? "true" : void 0,
                    },
                    e === t
                      ? he.default.createElement(
                          "span",
                          {
                            className:
                              "react-datepicker__year-option--selected",
                          },
                          "✓"
                        )
                      : "",
                    t
                  );
                }),
                r = n.props.minDate ? qe.default(n.props.minDate) : null,
                a = n.props.maxDate ? qe.default(n.props.maxDate) : null;
              return (
                (a &&
                  n.state.yearsList.find(function (e) {
                    return e === a;
                  })) ||
                  t.unshift(
                    he.default.createElement(
                      "div",
                      {
                        className: "react-datepicker__year-option",
                        key: "upcoming",
                        onClick: n.incrementYears,
                      },
                      he.default.createElement("a", {
                        className:
                          "react-datepicker__navigation react-datepicker__navigation--years react-datepicker__navigation--years-upcoming",
                      })
                    )
                  ),
                (r &&
                  n.state.yearsList.find(function (e) {
                    return e === r;
                  })) ||
                  t.push(
                    he.default.createElement(
                      "div",
                      {
                        className: "react-datepicker__year-option",
                        key: "previous",
                        onClick: n.decrementYears,
                      },
                      he.default.createElement("a", {
                        className:
                          "react-datepicker__navigation react-datepicker__navigation--years react-datepicker__navigation--years-previous",
                      })
                    )
                  ),
                t
              );
            }),
            Mt(Ot(n), "onChange", function (e) {
              n.props.onChange(e);
            }),
            Mt(Ot(n), "handleClickOutside", function () {
              n.props.onCancel();
            }),
            Mt(Ot(n), "shiftYears", function (e) {
              var t = n.state.yearsList.map(function (t) {
                return t + e;
              });
              n.setState({ yearsList: t });
            }),
            Mt(Ot(n), "incrementYears", function () {
              return n.shiftYears(1);
            }),
            Mt(Ot(n), "decrementYears", function () {
              return n.shiftYears(-1);
            });
          var o = e.yearDropdownItemNumber,
            s = e.scrollableYearDropdown,
            i = o || (s ? 10 : 5);
          return (
            (n.state = {
              yearsList: Tr(n.props.year, i, n.props.minDate, n.props.maxDate),
            }),
            (n.dropdownRef = t.createRef()),
            n
          );
        }
        return (
          _t(a, [
            {
              key: "componentDidMount",
              value: function () {
                var e = this.dropdownRef.current;
                if (e) {
                  var t = e.children ? Array.from(e.children) : null,
                    r = t
                      ? t.find(function (e) {
                          return e.ariaSelected;
                        })
                      : null;
                  e.scrollTop = r
                    ? r.offsetTop + (r.clientHeight - e.clientHeight) / 2
                    : (e.scrollHeight - e.clientHeight) / 2;
                }
              },
            },
            {
              key: "render",
              value: function () {
                var e = me.default({
                  "react-datepicker__year-dropdown": !0,
                  "react-datepicker__year-dropdown--scrollable":
                    this.props.scrollableYearDropdown,
                });
                return he.default.createElement(
                  "div",
                  { className: e, ref: this.dropdownRef },
                  this.renderOptions()
                );
              },
            },
          ]),
          a
        );
      })(he.default.Component),
      Rr = vt.default(Lr),
      Fr = (function (e) {
        Et(r, e);
        var t = It(r);
        function r() {
          var e;
          St(this, r);
          for (var a = arguments.length, n = new Array(a), o = 0; o < a; o++)
            n[o] = arguments[o];
          return (
            Mt(Ot((e = t.call.apply(t, [this].concat(n)))), "state", {
              dropdownVisible: !1,
            }),
            Mt(Ot(e), "renderSelectOptions", function () {
              for (
                var t = e.props.minDate ? qe.default(e.props.minDate) : 1900,
                  r = e.props.maxDate ? qe.default(e.props.maxDate) : 2100,
                  a = [],
                  n = t;
                n <= r;
                n++
              )
                a.push(
                  he.default.createElement("option", { key: n, value: n }, n)
                );
              return a;
            }),
            Mt(Ot(e), "onSelectChange", function (t) {
              e.onChange(t.target.value);
            }),
            Mt(Ot(e), "renderSelectMode", function () {
              return he.default.createElement(
                "select",
                {
                  value: e.props.year,
                  className: "react-datepicker__year-select",
                  onChange: e.onSelectChange,
                },
                e.renderSelectOptions()
              );
            }),
            Mt(Ot(e), "renderReadView", function (t) {
              return he.default.createElement(
                "div",
                {
                  key: "read",
                  style: { visibility: t ? "visible" : "hidden" },
                  className: "react-datepicker__year-read-view",
                  onClick: function (t) {
                    return e.toggleDropdown(t);
                  },
                },
                he.default.createElement("span", {
                  className: "react-datepicker__year-read-view--down-arrow",
                }),
                he.default.createElement(
                  "span",
                  {
                    className:
                      "react-datepicker__year-read-view--selected-year",
                  },
                  e.props.year
                )
              );
            }),
            Mt(Ot(e), "renderDropdown", function () {
              return he.default.createElement(Rr, {
                key: "dropdown",
                year: e.props.year,
                onChange: e.onChange,
                onCancel: e.toggleDropdown,
                minDate: e.props.minDate,
                maxDate: e.props.maxDate,
                scrollableYearDropdown: e.props.scrollableYearDropdown,
                yearDropdownItemNumber: e.props.yearDropdownItemNumber,
              });
            }),
            Mt(Ot(e), "renderScrollMode", function () {
              var t = e.state.dropdownVisible,
                r = [e.renderReadView(!t)];
              return t && r.unshift(e.renderDropdown()), r;
            }),
            Mt(Ot(e), "onChange", function (t) {
              e.toggleDropdown(), t !== e.props.year && e.props.onChange(t);
            }),
            Mt(Ot(e), "toggleDropdown", function (t) {
              e.setState(
                { dropdownVisible: !e.state.dropdownVisible },
                function () {
                  e.props.adjustDateOnChange &&
                    e.handleYearChange(e.props.date, t);
                }
              );
            }),
            Mt(Ot(e), "handleYearChange", function (t, r) {
              e.onSelect(t, r), e.setOpen();
            }),
            Mt(Ot(e), "onSelect", function (t, r) {
              e.props.onSelect && e.props.onSelect(t, r);
            }),
            Mt(Ot(e), "setOpen", function () {
              e.props.setOpen && e.props.setOpen(!0);
            }),
            e
          );
        }
        return (
          _t(r, [
            {
              key: "render",
              value: function () {
                var e;
                switch (this.props.dropdownMode) {
                  case "scroll":
                    e = this.renderScrollMode();
                    break;
                  case "select":
                    e = this.renderSelectMode();
                }
                return he.default.createElement(
                  "div",
                  {
                    className:
                      "react-datepicker__year-dropdown-container react-datepicker__year-dropdown-container--".concat(
                        this.props.dropdownMode
                      ),
                  },
                  e
                );
              },
            },
          ]),
          r
        );
      })(he.default.Component),
      Ar = (function (e) {
        Et(r, e);
        var t = It(r);
        function r() {
          var e;
          St(this, r);
          for (var a = arguments.length, n = new Array(a), o = 0; o < a; o++)
            n[o] = arguments[o];
          return (
            Mt(
              Ot((e = t.call.apply(t, [this].concat(n)))),
              "isSelectedMonth",
              function (t) {
                return e.props.month === t;
              }
            ),
            Mt(Ot(e), "renderOptions", function () {
              return e.props.monthNames.map(function (t, r) {
                return he.default.createElement(
                  "div",
                  {
                    className: e.isSelectedMonth(r)
                      ? "react-datepicker__month-option react-datepicker__month-option--selected_month"
                      : "react-datepicker__month-option",
                    key: t,
                    onClick: e.onChange.bind(Ot(e), r),
                    "aria-selected": e.isSelectedMonth(r) ? "true" : void 0,
                  },
                  e.isSelectedMonth(r)
                    ? he.default.createElement(
                        "span",
                        {
                          className: "react-datepicker__month-option--selected",
                        },
                        "✓"
                      )
                    : "",
                  t
                );
              });
            }),
            Mt(Ot(e), "onChange", function (t) {
              return e.props.onChange(t);
            }),
            Mt(Ot(e), "handleClickOutside", function () {
              return e.props.onCancel();
            }),
            e
          );
        }
        return (
          _t(r, [
            {
              key: "render",
              value: function () {
                return he.default.createElement(
                  "div",
                  { className: "react-datepicker__month-dropdown" },
                  this.renderOptions()
                );
              },
            },
          ]),
          r
        );
      })(he.default.Component),
      qr = vt.default(Ar),
      Kr = (function (e) {
        Et(r, e);
        var t = It(r);
        function r() {
          var e;
          St(this, r);
          for (var a = arguments.length, n = new Array(a), o = 0; o < a; o++)
            n[o] = arguments[o];
          return (
            Mt(Ot((e = t.call.apply(t, [this].concat(n)))), "state", {
              dropdownVisible: !1,
            }),
            Mt(Ot(e), "renderSelectOptions", function (e) {
              return e.map(function (e, t) {
                return he.default.createElement(
                  "option",
                  { key: t, value: t },
                  e
                );
              });
            }),
            Mt(Ot(e), "renderSelectMode", function (t) {
              return he.default.createElement(
                "select",
                {
                  value: e.props.month,
                  className: "react-datepicker__month-select",
                  onChange: function (t) {
                    return e.onChange(t.target.value);
                  },
                },
                e.renderSelectOptions(t)
              );
            }),
            Mt(Ot(e), "renderReadView", function (t, r) {
              return he.default.createElement(
                "div",
                {
                  key: "read",
                  style: { visibility: t ? "visible" : "hidden" },
                  className: "react-datepicker__month-read-view",
                  onClick: e.toggleDropdown,
                },
                he.default.createElement("span", {
                  className: "react-datepicker__month-read-view--down-arrow",
                }),
                he.default.createElement(
                  "span",
                  {
                    className:
                      "react-datepicker__month-read-view--selected-month",
                  },
                  r[e.props.month]
                )
              );
            }),
            Mt(Ot(e), "renderDropdown", function (t) {
              return he.default.createElement(qr, {
                key: "dropdown",
                month: e.props.month,
                monthNames: t,
                onChange: e.onChange,
                onCancel: e.toggleDropdown,
              });
            }),
            Mt(Ot(e), "renderScrollMode", function (t) {
              var r = e.state.dropdownVisible,
                a = [e.renderReadView(!r, t)];
              return r && a.unshift(e.renderDropdown(t)), a;
            }),
            Mt(Ot(e), "onChange", function (t) {
              e.toggleDropdown(), t !== e.props.month && e.props.onChange(t);
            }),
            Mt(Ot(e), "toggleDropdown", function () {
              return e.setState({ dropdownVisible: !e.state.dropdownVisible });
            }),
            e
          );
        }
        return (
          _t(r, [
            {
              key: "render",
              value: function () {
                var e,
                  t = this,
                  r = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(
                    this.props.useShortMonthInDropdown
                      ? function (e) {
                          return dr(e, t.props.locale);
                        }
                      : function (e) {
                          return cr(e, t.props.locale);
                        }
                  );
                switch (this.props.dropdownMode) {
                  case "scroll":
                    e = this.renderScrollMode(r);
                    break;
                  case "select":
                    e = this.renderSelectMode(r);
                }
                return he.default.createElement(
                  "div",
                  {
                    className:
                      "react-datepicker__month-dropdown-container react-datepicker__month-dropdown-container--".concat(
                        this.props.dropdownMode
                      ),
                  },
                  e
                );
              },
            },
          ]),
          r
        );
      })(he.default.Component);
    function Br(e, t) {
      for (var r = [], a = Xt(e), n = Xt(t); !dt.default(a, n); )
        r.push(Wt(a)), (a = Se.default(a, 1));
      return r;
    }
    var Wr = (function (e) {
        Et(r, e);
        var t = It(r);
        function r(e) {
          var a;
          return (
            St(this, r),
            Mt(Ot((a = t.call(this, e))), "renderOptions", function () {
              return a.state.monthYearsList.map(function (e) {
                var t = Ke.default(e),
                  r = rr(a.props.date, e) && ar(a.props.date, e);
                return he.default.createElement(
                  "div",
                  {
                    className: r
                      ? "react-datepicker__month-year-option--selected_month-year"
                      : "react-datepicker__month-year-option",
                    key: t,
                    onClick: a.onChange.bind(Ot(a), t),
                    "aria-selected": r ? "true" : void 0,
                  },
                  r
                    ? he.default.createElement(
                        "span",
                        {
                          className:
                            "react-datepicker__month-year-option--selected",
                        },
                        "✓"
                      )
                    : "",
                  jt(e, a.props.dateFormat, a.props.locale)
                );
              });
            }),
            Mt(Ot(a), "onChange", function (e) {
              return a.props.onChange(e);
            }),
            Mt(Ot(a), "handleClickOutside", function () {
              a.props.onCancel();
            }),
            (a.state = {
              monthYearsList: Br(a.props.minDate, a.props.maxDate),
            }),
            a
          );
        }
        return (
          _t(r, [
            {
              key: "render",
              value: function () {
                var e = me.default({
                  "react-datepicker__month-year-dropdown": !0,
                  "react-datepicker__month-year-dropdown--scrollable":
                    this.props.scrollableMonthYearDropdown,
                });
                return he.default.createElement(
                  "div",
                  { className: e },
                  this.renderOptions()
                );
              },
            },
          ]),
          r
        );
      })(he.default.Component),
      Qr = vt.default(Wr),
      Hr = (function (e) {
        Et(r, e);
        var t = It(r);
        function r() {
          var e;
          St(this, r);
          for (var a = arguments.length, n = new Array(a), o = 0; o < a; o++)
            n[o] = arguments[o];
          return (
            Mt(Ot((e = t.call.apply(t, [this].concat(n)))), "state", {
              dropdownVisible: !1,
            }),
            Mt(Ot(e), "renderSelectOptions", function () {
              for (
                var t = Xt(e.props.minDate), r = Xt(e.props.maxDate), a = [];
                !dt.default(t, r);

              ) {
                var n = Ke.default(t);
                a.push(
                  he.default.createElement(
                    "option",
                    { key: n, value: n },
                    jt(t, e.props.dateFormat, e.props.locale)
                  )
                ),
                  (t = Se.default(t, 1));
              }
              return a;
            }),
            Mt(Ot(e), "onSelectChange", function (t) {
              e.onChange(t.target.value);
            }),
            Mt(Ot(e), "renderSelectMode", function () {
              return he.default.createElement(
                "select",
                {
                  value: Ke.default(Xt(e.props.date)),
                  className: "react-datepicker__month-year-select",
                  onChange: e.onSelectChange,
                },
                e.renderSelectOptions()
              );
            }),
            Mt(Ot(e), "renderReadView", function (t) {
              var r = jt(e.props.date, e.props.dateFormat, e.props.locale);
              return he.default.createElement(
                "div",
                {
                  key: "read",
                  style: { visibility: t ? "visible" : "hidden" },
                  className: "react-datepicker__month-year-read-view",
                  onClick: function (t) {
                    return e.toggleDropdown(t);
                  },
                },
                he.default.createElement("span", {
                  className:
                    "react-datepicker__month-year-read-view--down-arrow",
                }),
                he.default.createElement(
                  "span",
                  {
                    className:
                      "react-datepicker__month-year-read-view--selected-month-year",
                  },
                  r
                )
              );
            }),
            Mt(Ot(e), "renderDropdown", function () {
              return he.default.createElement(Qr, {
                key: "dropdown",
                date: e.props.date,
                dateFormat: e.props.dateFormat,
                onChange: e.onChange,
                onCancel: e.toggleDropdown,
                minDate: e.props.minDate,
                maxDate: e.props.maxDate,
                scrollableMonthYearDropdown:
                  e.props.scrollableMonthYearDropdown,
                locale: e.props.locale,
              });
            }),
            Mt(Ot(e), "renderScrollMode", function () {
              var t = e.state.dropdownVisible,
                r = [e.renderReadView(!t)];
              return t && r.unshift(e.renderDropdown()), r;
            }),
            Mt(Ot(e), "onChange", function (t) {
              e.toggleDropdown();
              var r = Wt(parseInt(t));
              (rr(e.props.date, r) && ar(e.props.date, r)) ||
                e.props.onChange(r);
            }),
            Mt(Ot(e), "toggleDropdown", function () {
              return e.setState({ dropdownVisible: !e.state.dropdownVisible });
            }),
            e
          );
        }
        return (
          _t(r, [
            {
              key: "render",
              value: function () {
                var e;
                switch (this.props.dropdownMode) {
                  case "scroll":
                    e = this.renderScrollMode();
                    break;
                  case "select":
                    e = this.renderSelectMode();
                }
                return he.default.createElement(
                  "div",
                  {
                    className:
                      "react-datepicker__month-year-dropdown-container react-datepicker__month-year-dropdown-container--".concat(
                        this.props.dropdownMode
                      ),
                  },
                  e
                );
              },
            },
          ]),
          r
        );
      })(he.default.Component),
      jr = (function (e) {
        Et(r, e);
        var t = It(r);
        function r() {
          var e;
          St(this, r);
          for (var a = arguments.length, n = new Array(a), o = 0; o < a; o++)
            n[o] = arguments[o];
          return (
            Mt(
              Ot((e = t.call.apply(t, [this].concat(n)))),
              "dayEl",
              he.default.createRef()
            ),
            Mt(Ot(e), "handleClick", function (t) {
              !e.isDisabled() && e.props.onClick && e.props.onClick(t);
            }),
            Mt(Ot(e), "handleMouseEnter", function (t) {
              !e.isDisabled() &&
                e.props.onMouseEnter &&
                e.props.onMouseEnter(t);
            }),
            Mt(Ot(e), "handleOnKeyDown", function (t) {
              " " === t.key && (t.preventDefault(), (t.key = "Enter")),
                e.props.handleOnKeyDown(t);
            }),
            Mt(Ot(e), "isSameDay", function (t) {
              return or(e.props.day, t);
            }),
            Mt(Ot(e), "isKeyboardSelected", function () {
              return (
                !e.props.disabledKeyboardNavigation &&
                (e.props.selectsMultiple
                  ? !(e.props.selectedDates || []).some(function (t) {
                      return e.isSameDay(t);
                    }) && e.isSameDay(e.props.preSelection)
                  : !e.isSameDay(e.props.selected) &&
                    e.isSameDay(e.props.preSelection))
              );
            }),
            Mt(Ot(e), "isDisabled", function () {
              return fr(e.props.day, e.props);
            }),
            Mt(Ot(e), "isExcluded", function () {
              return hr(e.props.day, e.props);
            }),
            Mt(Ot(e), "getHighLightedClass", function (t) {
              var r = e.props,
                a = r.day,
                n = r.highlightDates;
              if (!n) return !1;
              var o = jt(a, "MM.dd.yyyy");
              return n.get(o);
            }),
            Mt(Ot(e), "isInRange", function () {
              var t = e.props,
                r = t.day,
                a = t.startDate,
                n = t.endDate;
              return !(!a || !n) && ir(r, a, n);
            }),
            Mt(Ot(e), "isInSelectingRange", function () {
              var t,
                r = e.props,
                a = r.day,
                n = r.selectsStart,
                o = r.selectsEnd,
                s = r.selectsRange,
                i = r.selectsDisabledDaysInRange,
                p = r.startDate,
                l = r.endDate,
                c =
                  null !== (t = e.props.selectingDate) && void 0 !== t
                    ? t
                    : e.props.preSelection;
              return (
                !(!(n || o || s) || !c || (!i && e.isDisabled())) &&
                (n && l && (ut.default(c, l) || sr(c, l))
                  ? ir(a, c, l)
                  : ((o && p && (dt.default(c, p) || sr(c, p))) ||
                      !(!s || !p || l || (!dt.default(c, p) && !sr(c, p)))) &&
                    ir(a, p, c))
              );
            }),
            Mt(Ot(e), "isSelectingRangeStart", function () {
              var t;
              if (!e.isInSelectingRange()) return !1;
              var r = e.props,
                a = r.day,
                n = r.startDate,
                o = r.selectsStart,
                s =
                  null !== (t = e.props.selectingDate) && void 0 !== t
                    ? t
                    : e.props.preSelection;
              return or(a, o ? s : n);
            }),
            Mt(Ot(e), "isSelectingRangeEnd", function () {
              var t;
              if (!e.isInSelectingRange()) return !1;
              var r = e.props,
                a = r.day,
                n = r.endDate,
                o = r.selectsEnd,
                s = r.selectsRange,
                i =
                  null !== (t = e.props.selectingDate) && void 0 !== t
                    ? t
                    : e.props.preSelection;
              return or(a, o || s ? i : n);
            }),
            Mt(Ot(e), "isRangeStart", function () {
              var t = e.props,
                r = t.day,
                a = t.startDate,
                n = t.endDate;
              return !(!a || !n) && or(a, r);
            }),
            Mt(Ot(e), "isRangeEnd", function () {
              var t = e.props,
                r = t.day,
                a = t.startDate,
                n = t.endDate;
              return !(!a || !n) && or(n, r);
            }),
            Mt(Ot(e), "isWeekend", function () {
              var t = Te.default(e.props.day);
              return 0 === t || 6 === t;
            }),
            Mt(Ot(e), "isAfterMonth", function () {
              return (
                void 0 !== e.props.month &&
                (e.props.month + 1) % 12 === Fe.default(e.props.day)
              );
            }),
            Mt(Ot(e), "isBeforeMonth", function () {
              return (
                void 0 !== e.props.month &&
                (Fe.default(e.props.day) + 1) % 12 === e.props.month
              );
            }),
            Mt(Ot(e), "isCurrentDay", function () {
              return e.isSameDay(Wt());
            }),
            Mt(Ot(e), "isSelected", function () {
              return e.props.selectsMultiple && e.props.selectedDates
                ? e.props.selectedDates.some(function (t) {
                    return e.isSameDay(t);
                  })
                : e.isSameDay(e.props.selected);
            }),
            Mt(Ot(e), "getClassNames", function (t) {
              var r = e.props.dayClassName ? e.props.dayClassName(t) : void 0;
              return me.default(
                "react-datepicker__day",
                r,
                "react-datepicker__day--" + $t(e.props.day),
                {
                  "react-datepicker__day--disabled": e.isDisabled(),
                  "react-datepicker__day--excluded": e.isExcluded(),
                  "react-datepicker__day--selected": e.isSelected(),
                  "react-datepicker__day--keyboard-selected":
                    e.isKeyboardSelected(),
                  "react-datepicker__day--range-start": e.isRangeStart(),
                  "react-datepicker__day--range-end": e.isRangeEnd(),
                  "react-datepicker__day--in-range": e.isInRange(),
                  "react-datepicker__day--in-selecting-range":
                    e.isInSelectingRange(),
                  "react-datepicker__day--selecting-range-start":
                    e.isSelectingRangeStart(),
                  "react-datepicker__day--selecting-range-end":
                    e.isSelectingRangeEnd(),
                  "react-datepicker__day--today": e.isCurrentDay(),
                  "react-datepicker__day--weekend": e.isWeekend(),
                  "react-datepicker__day--outside-month":
                    e.isAfterMonth() || e.isBeforeMonth(),
                },
                e.getHighLightedClass("react-datepicker__day--highlighted")
              );
            }),
            Mt(Ot(e), "getAriaLabel", function () {
              var t = e.props,
                r = t.day,
                a = t.ariaLabelPrefixWhenEnabled,
                n = void 0 === a ? "Choose" : a,
                o = t.ariaLabelPrefixWhenDisabled,
                s = void 0 === o ? "Not available" : o,
                i = e.isDisabled() || e.isExcluded() ? s : n;
              return "".concat(i, " ").concat(jt(r, "PPPP", e.props.locale));
            }),
            Mt(Ot(e), "getTabIndex", function (t, r) {
              var a = t || e.props.selected,
                n = r || e.props.preSelection;
              return e.isKeyboardSelected() || (e.isSameDay(a) && or(n, a))
                ? 0
                : -1;
            }),
            Mt(Ot(e), "handleFocusDay", function () {
              var t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                r = !1;
              0 === e.getTabIndex() &&
                !t.isInputFocused &&
                e.isSameDay(e.props.preSelection) &&
                ((document.activeElement &&
                  document.activeElement !== document.body) ||
                  (r = !0),
                e.props.inline && !e.props.shouldFocusDayInline && (r = !1),
                e.props.containerRef &&
                  e.props.containerRef.current &&
                  e.props.containerRef.current.contains(
                    document.activeElement
                  ) &&
                  document.activeElement.classList.contains(
                    "react-datepicker__day"
                  ) &&
                  (r = !0),
                e.props.monthShowsDuplicateDaysEnd &&
                  e.isAfterMonth() &&
                  (r = !1),
                e.props.monthShowsDuplicateDaysStart &&
                  e.isBeforeMonth() &&
                  (r = !1)),
                r && e.dayEl.current.focus({ preventScroll: !0 });
            }),
            Mt(Ot(e), "renderDayContents", function () {
              return (e.props.monthShowsDuplicateDaysEnd && e.isAfterMonth()) ||
                (e.props.monthShowsDuplicateDaysStart && e.isBeforeMonth())
                ? null
                : e.props.renderDayContents
                ? e.props.renderDayContents(
                    Le.default(e.props.day),
                    e.props.day
                  )
                : Le.default(e.props.day);
            }),
            Mt(Ot(e), "render", function () {
              return he.default.createElement(
                "div",
                {
                  ref: e.dayEl,
                  className: e.getClassNames(e.props.day),
                  onKeyDown: e.handleOnKeyDown,
                  onClick: e.handleClick,
                  onMouseEnter: e.handleMouseEnter,
                  tabIndex: e.getTabIndex(),
                  "aria-label": e.getAriaLabel(),
                  role: "option",
                  "aria-disabled": e.isDisabled(),
                  "aria-current": e.isCurrentDay() ? "date" : void 0,
                  "aria-selected": e.isSelected(),
                },
                e.renderDayContents()
              );
            }),
            e
          );
        }
        return (
          _t(r, [
            {
              key: "componentDidMount",
              value: function () {
                this.handleFocusDay();
              },
            },
            {
              key: "componentDidUpdate",
              value: function (e) {
                this.handleFocusDay(e);
              },
            },
          ]),
          r
        );
      })(he.default.Component),
      Vr = (function (e) {
        Et(r, e);
        var t = It(r);
        function r() {
          var e;
          St(this, r);
          for (var a = arguments.length, n = new Array(a), o = 0; o < a; o++)
            n[o] = arguments[o];
          return (
            Mt(
              Ot((e = t.call.apply(t, [this].concat(n)))),
              "handleClick",
              function (t) {
                e.props.onClick && e.props.onClick(t);
              }
            ),
            e
          );
        }
        return (
          _t(r, [
            {
              key: "render",
              value: function () {
                var e = this.props,
                  t = e.weekNumber,
                  r = e.ariaLabelPrefix,
                  a = void 0 === r ? "week " : r,
                  n = {
                    "react-datepicker__week-number": !0,
                    "react-datepicker__week-number--clickable": !!e.onClick,
                  };
                return he.default.createElement(
                  "div",
                  {
                    className: me.default(n),
                    "aria-label": ""
                      .concat(a, " ")
                      .concat(this.props.weekNumber),
                    onClick: this.handleClick,
                  },
                  t
                );
              },
            },
          ]),
          r
        );
      })(he.default.Component),
      Ur = (function (e) {
        Et(r, e);
        var t = It(r);
        function r() {
          var e;
          St(this, r);
          for (var a = arguments.length, n = new Array(a), o = 0; o < a; o++)
            n[o] = arguments[o];
          return (
            Mt(
              Ot((e = t.call.apply(t, [this].concat(n)))),
              "handleDayClick",
              function (t, r) {
                e.props.onDayClick && e.props.onDayClick(t, r);
              }
            ),
            Mt(Ot(e), "handleDayMouseEnter", function (t) {
              e.props.onDayMouseEnter && e.props.onDayMouseEnter(t);
            }),
            Mt(Ot(e), "handleWeekClick", function (t, r, a) {
              "function" == typeof e.props.onWeekSelect &&
                e.props.onWeekSelect(t, r, a),
                e.props.shouldCloseOnSelect && e.props.setOpen(!1);
            }),
            Mt(Ot(e), "formatWeekNumber", function (t) {
              return e.props.formatWeekNumber
                ? e.props.formatWeekNumber(t)
                : zt(t);
            }),
            Mt(Ot(e), "renderDays", function () {
              var t = Jt(e.props.day, e.props.locale, e.props.calendarStartDay),
                r = [],
                a = e.formatWeekNumber(t);
              if (e.props.showWeekNumber) {
                var n = e.props.onWeekSelect
                  ? e.handleWeekClick.bind(Ot(e), t, a)
                  : void 0;
                r.push(
                  he.default.createElement(Vr, {
                    key: "W",
                    weekNumber: a,
                    onClick: n,
                    ariaLabelPrefix: e.props.ariaLabelPrefix,
                  })
                );
              }
              return r.concat(
                [0, 1, 2, 3, 4, 5, 6].map(function (r) {
                  var a = ke.default(t, r);
                  return he.default.createElement(jr, {
                    ariaLabelPrefixWhenEnabled:
                      e.props.chooseDayAriaLabelPrefix,
                    ariaLabelPrefixWhenDisabled:
                      e.props.disabledDayAriaLabelPrefix,
                    key: a.valueOf(),
                    day: a,
                    month: e.props.month,
                    onClick: e.handleDayClick.bind(Ot(e), a),
                    onMouseEnter: e.handleDayMouseEnter.bind(Ot(e), a),
                    minDate: e.props.minDate,
                    maxDate: e.props.maxDate,
                    excludeDates: e.props.excludeDates,
                    excludeDateIntervals: e.props.excludeDateIntervals,
                    includeDates: e.props.includeDates,
                    includeDateIntervals: e.props.includeDateIntervals,
                    highlightDates: e.props.highlightDates,
                    selectingDate: e.props.selectingDate,
                    filterDate: e.props.filterDate,
                    preSelection: e.props.preSelection,
                    selected: e.props.selected,
                    selectsStart: e.props.selectsStart,
                    selectsEnd: e.props.selectsEnd,
                    selectsRange: e.props.selectsRange,
                    selectsDisabledDaysInRange:
                      e.props.selectsDisabledDaysInRange,
                    selectsMultiple: e.props.selectsMultiple,
                    selectedDates: e.props.selectedDates,
                    startDate: e.props.startDate,
                    endDate: e.props.endDate,
                    dayClassName: e.props.dayClassName,
                    renderDayContents: e.props.renderDayContents,
                    disabledKeyboardNavigation:
                      e.props.disabledKeyboardNavigation,
                    handleOnKeyDown: e.props.handleOnKeyDown,
                    isInputFocused: e.props.isInputFocused,
                    containerRef: e.props.containerRef,
                    inline: e.props.inline,
                    shouldFocusDayInline: e.props.shouldFocusDayInline,
                    monthShowsDuplicateDaysEnd:
                      e.props.monthShowsDuplicateDaysEnd,
                    monthShowsDuplicateDaysStart:
                      e.props.monthShowsDuplicateDaysStart,
                    locale: e.props.locale,
                  });
                })
              );
            }),
            e
          );
        }
        return (
          _t(
            r,
            [
              {
                key: "render",
                value: function () {
                  return he.default.createElement(
                    "div",
                    { className: "react-datepicker__week" },
                    this.renderDays()
                  );
                },
              },
            ],
            [
              {
                key: "defaultProps",
                get: function () {
                  return { shouldCloseOnSelect: !0 };
                },
              },
            ]
          ),
          r
        );
      })(he.default.Component),
      zr = (function (e) {
        Et(r, e);
        var t = It(r);
        function r() {
          var e;
          St(this, r);
          for (var a = arguments.length, n = new Array(a), o = 0; o < a; o++)
            n[o] = arguments[o];
          return (
            Mt(
              Ot((e = t.call.apply(t, [this].concat(n)))),
              "MONTH_REFS",
              Tt(Array(12)).map(function () {
                return he.default.createRef();
              })
            ),
            Mt(
              Ot(e),
              "QUARTER_REFS",
              Tt(Array(4)).map(function () {
                return he.default.createRef();
              })
            ),
            Mt(Ot(e), "isDisabled", function (t) {
              return fr(t, e.props);
            }),
            Mt(Ot(e), "isExcluded", function (t) {
              return hr(t, e.props);
            }),
            Mt(Ot(e), "handleDayClick", function (t, r) {
              e.props.onDayClick &&
                e.props.onDayClick(t, r, e.props.orderInDisplay);
            }),
            Mt(Ot(e), "handleDayMouseEnter", function (t) {
              e.props.onDayMouseEnter && e.props.onDayMouseEnter(t);
            }),
            Mt(Ot(e), "handleMouseLeave", function () {
              e.props.onMouseLeave && e.props.onMouseLeave();
            }),
            Mt(Ot(e), "isRangeStartMonth", function (t) {
              var r = e.props,
                a = r.day,
                n = r.startDate,
                o = r.endDate;
              return !(!n || !o) && ar(He.default(a, t), n);
            }),
            Mt(Ot(e), "isRangeStartQuarter", function (t) {
              var r = e.props,
                a = r.day,
                n = r.startDate,
                o = r.endDate;
              return !(!n || !o) && nr(je.default(a, t), n);
            }),
            Mt(Ot(e), "isRangeEndMonth", function (t) {
              var r = e.props,
                a = r.day,
                n = r.startDate,
                o = r.endDate;
              return !(!n || !o) && ar(He.default(a, t), o);
            }),
            Mt(Ot(e), "isRangeEndQuarter", function (t) {
              var r = e.props,
                a = r.day,
                n = r.startDate,
                o = r.endDate;
              return !(!n || !o) && nr(je.default(a, t), o);
            }),
            Mt(Ot(e), "isInSelectingRangeMonth", function (t) {
              var r,
                a = e.props,
                n = a.day,
                o = a.selectsStart,
                s = a.selectsEnd,
                i = a.selectsRange,
                p = a.startDate,
                l = a.endDate,
                c =
                  null !== (r = e.props.selectingDate) && void 0 !== r
                    ? r
                    : e.props.preSelection;
              return (
                !(!(o || s || i) || !c) &&
                (o && l
                  ? yr(c, l, t, n)
                  : ((s && p) || !(!i || !p || l)) && yr(p, c, t, n))
              );
            }),
            Mt(Ot(e), "isInSelectingRangeQuarter", function (t) {
              var r,
                a = e.props,
                n = a.day,
                o = a.selectsStart,
                s = a.selectsEnd,
                i = a.selectsRange,
                p = a.startDate,
                l = a.endDate,
                c =
                  null !== (r = e.props.selectingDate) && void 0 !== r
                    ? r
                    : e.props.preSelection;
              return (
                !(!(o || s || i) || !c) &&
                (o && l
                  ? gr(c, l, t, n)
                  : ((s && p) || !(!i || !p || l)) && gr(p, c, t, n))
              );
            }),
            Mt(Ot(e), "isWeekInMonth", function (t) {
              var r = e.props.day,
                a = ke.default(t, 6);
              return ar(t, r) || ar(a, r);
            }),
            Mt(Ot(e), "isCurrentMonth", function (e, t) {
              return (
                qe.default(e) === qe.default(Wt()) && t === Fe.default(Wt())
              );
            }),
            Mt(Ot(e), "isCurrentQuarter", function (e, t) {
              return (
                qe.default(e) === qe.default(Wt()) && t === Ae.default(Wt())
              );
            }),
            Mt(Ot(e), "isSelectedMonth", function (e, t, r) {
              return Fe.default(e) === t && qe.default(e) === qe.default(r);
            }),
            Mt(Ot(e), "isSelectedQuarter", function (e, t, r) {
              return Ae.default(e) === t && qe.default(e) === qe.default(r);
            }),
            Mt(Ot(e), "renderWeeks", function () {
              for (
                var t = [],
                  r = e.props.fixedHeight,
                  a = 0,
                  n = !1,
                  o = Jt(
                    Xt(e.props.day),
                    e.props.locale,
                    e.props.calendarStartDay
                  );
                t.push(
                  he.default.createElement(Ur, {
                    ariaLabelPrefix: e.props.weekAriaLabelPrefix,
                    chooseDayAriaLabelPrefix: e.props.chooseDayAriaLabelPrefix,
                    disabledDayAriaLabelPrefix:
                      e.props.disabledDayAriaLabelPrefix,
                    key: a,
                    day: o,
                    month: Fe.default(e.props.day),
                    onDayClick: e.handleDayClick,
                    onDayMouseEnter: e.handleDayMouseEnter,
                    onWeekSelect: e.props.onWeekSelect,
                    formatWeekNumber: e.props.formatWeekNumber,
                    locale: e.props.locale,
                    minDate: e.props.minDate,
                    maxDate: e.props.maxDate,
                    excludeDates: e.props.excludeDates,
                    excludeDateIntervals: e.props.excludeDateIntervals,
                    includeDates: e.props.includeDates,
                    includeDateIntervals: e.props.includeDateIntervals,
                    inline: e.props.inline,
                    shouldFocusDayInline: e.props.shouldFocusDayInline,
                    highlightDates: e.props.highlightDates,
                    selectingDate: e.props.selectingDate,
                    filterDate: e.props.filterDate,
                    preSelection: e.props.preSelection,
                    selected: e.props.selected,
                    selectsStart: e.props.selectsStart,
                    selectsEnd: e.props.selectsEnd,
                    selectsRange: e.props.selectsRange,
                    selectsDisabledDaysInRange:
                      e.props.selectsDisabledDaysInRange,
                    selectsMultiple: e.props.selectsMultiple,
                    selectedDates: e.props.selectedDates,
                    showWeekNumber: e.props.showWeekNumbers,
                    startDate: e.props.startDate,
                    endDate: e.props.endDate,
                    dayClassName: e.props.dayClassName,
                    setOpen: e.props.setOpen,
                    shouldCloseOnSelect: e.props.shouldCloseOnSelect,
                    disabledKeyboardNavigation:
                      e.props.disabledKeyboardNavigation,
                    renderDayContents: e.props.renderDayContents,
                    handleOnKeyDown: e.props.handleOnKeyDown,
                    isInputFocused: e.props.isInputFocused,
                    containerRef: e.props.containerRef,
                    calendarStartDay: e.props.calendarStartDay,
                    monthShowsDuplicateDaysEnd:
                      e.props.monthShowsDuplicateDaysEnd,
                    monthShowsDuplicateDaysStart:
                      e.props.monthShowsDuplicateDaysStart,
                  })
                ),
                  !n;

              ) {
                a++, (o = be.default(o, 1));
                var s = r && a >= 6,
                  i = !r && !e.isWeekInMonth(o);
                if (s || i) {
                  if (!e.props.peekNextMonth) break;
                  n = !0;
                }
              }
              return t;
            }),
            Mt(Ot(e), "onMonthClick", function (t, r) {
              e.handleDayClick(Xt(He.default(e.props.day, r)), t);
            }),
            Mt(Ot(e), "onMonthMouseEnter", function (t) {
              e.handleDayMouseEnter(Xt(He.default(e.props.day, t)));
            }),
            Mt(Ot(e), "handleMonthNavigation", function (t, r) {
              e.isDisabled(r) ||
                e.isExcluded(r) ||
                (e.props.setPreSelection(r),
                e.MONTH_REFS[t].current && e.MONTH_REFS[t].current.focus());
            }),
            Mt(Ot(e), "onMonthKeyDown", function (t, r) {
              t.preventDefault();
              var a = t.key;
              if (!e.props.disabledKeyboardNavigation)
                switch (a) {
                  case "Enter":
                    e.onMonthClick(t, r),
                      e.props.setPreSelection(e.props.selected);
                    break;
                  case "ArrowRight":
                    e.handleMonthNavigation(
                      11 === r ? 0 : r + 1,
                      Se.default(e.props.preSelection, 1)
                    );
                    break;
                  case "ArrowLeft":
                    e.handleMonthNavigation(
                      0 === r ? 11 : r - 1,
                      Ee.default(e.props.preSelection, 1)
                    );
                    break;
                  case "ArrowUp":
                    e.handleMonthNavigation(
                      r >= 0 && r <= 2 ? r + 9 : r - 3,
                      Ee.default(e.props.preSelection, 3)
                    );
                    break;
                  case "ArrowDown":
                    e.handleMonthNavigation(
                      r >= 9 && r <= 11 ? r - 9 : r + 3,
                      Se.default(e.props.preSelection, 3)
                    );
                }
            }),
            Mt(Ot(e), "onQuarterClick", function (t, r) {
              e.handleDayClick(er(je.default(e.props.day, r)), t);
            }),
            Mt(Ot(e), "onQuarterMouseEnter", function (t) {
              e.handleDayMouseEnter(er(je.default(e.props.day, t)));
            }),
            Mt(Ot(e), "handleQuarterNavigation", function (t, r) {
              e.isDisabled(r) ||
                e.isExcluded(r) ||
                (e.props.setPreSelection(r),
                e.QUARTER_REFS[t - 1].current &&
                  e.QUARTER_REFS[t - 1].current.focus());
            }),
            Mt(Ot(e), "onQuarterKeyDown", function (t, r) {
              var a = t.key;
              if (!e.props.disabledKeyboardNavigation)
                switch (a) {
                  case "Enter":
                    e.onQuarterClick(t, r),
                      e.props.setPreSelection(e.props.selected);
                    break;
                  case "ArrowRight":
                    e.handleQuarterNavigation(
                      4 === r ? 1 : r + 1,
                      Ce.default(e.props.preSelection, 1)
                    );
                    break;
                  case "ArrowLeft":
                    e.handleQuarterNavigation(
                      1 === r ? 4 : r - 1,
                      Ne.default(e.props.preSelection, 1)
                    );
                }
            }),
            Mt(Ot(e), "getMonthClassNames", function (t) {
              var r = e.props,
                a = r.day,
                n = r.startDate,
                o = r.endDate,
                s = r.selected,
                i = r.minDate,
                p = r.maxDate,
                l = r.preSelection,
                c = r.monthClassName,
                d = r.excludeDates,
                u = r.includeDates,
                f = c ? c(He.default(a, t)) : void 0,
                h = He.default(a, t);
              return me.default(
                "react-datepicker__month-text",
                "react-datepicker__month-".concat(t),
                f,
                {
                  "react-datepicker__month-text--disabled":
                    (i || p || d || u) && mr(h, e.props),
                  "react-datepicker__month-text--selected": e.isSelectedMonth(
                    a,
                    t,
                    s
                  ),
                  "react-datepicker__month-text--keyboard-selected":
                    !e.props.disabledKeyboardNavigation && Fe.default(l) === t,
                  "react-datepicker__month-text--in-selecting-range":
                    e.isInSelectingRangeMonth(t),
                  "react-datepicker__month-text--in-range": yr(n, o, t, a),
                  "react-datepicker__month-text--range-start":
                    e.isRangeStartMonth(t),
                  "react-datepicker__month-text--range-end":
                    e.isRangeEndMonth(t),
                  "react-datepicker__month-text--today": e.isCurrentMonth(a, t),
                }
              );
            }),
            Mt(Ot(e), "getTabIndex", function (t) {
              var r = Fe.default(e.props.preSelection);
              return e.props.disabledKeyboardNavigation || t !== r ? "-1" : "0";
            }),
            Mt(Ot(e), "getQuarterTabIndex", function (t) {
              var r = Ae.default(e.props.preSelection);
              return e.props.disabledKeyboardNavigation || t !== r ? "-1" : "0";
            }),
            Mt(Ot(e), "getAriaLabel", function (t) {
              var r = e.props,
                a = r.chooseDayAriaLabelPrefix,
                n = void 0 === a ? "Choose" : a,
                o = r.disabledDayAriaLabelPrefix,
                s = void 0 === o ? "Not available" : o,
                i = r.day,
                p = He.default(i, t),
                l = e.isDisabled(p) || e.isExcluded(p) ? s : n;
              return "".concat(l, " ").concat(jt(p, "MMMM yyyy"));
            }),
            Mt(Ot(e), "getQuarterClassNames", function (t) {
              var r = e.props,
                a = r.day,
                n = r.startDate,
                o = r.endDate,
                s = r.selected,
                i = r.minDate,
                p = r.maxDate,
                l = r.preSelection;
              return me.default(
                "react-datepicker__quarter-text",
                "react-datepicker__quarter-".concat(t),
                {
                  "react-datepicker__quarter-text--disabled":
                    (i || p) && vr(je.default(a, t), e.props),
                  "react-datepicker__quarter-text--selected":
                    e.isSelectedQuarter(a, t, s),
                  "react-datepicker__quarter-text--keyboard-selected":
                    Ae.default(l) === t,
                  "react-datepicker__quarter-text--in-selecting-range":
                    e.isInSelectingRangeQuarter(t),
                  "react-datepicker__quarter-text--in-range": gr(n, o, t, a),
                  "react-datepicker__quarter-text--range-start":
                    e.isRangeStartQuarter(t),
                  "react-datepicker__quarter-text--range-end":
                    e.isRangeEndQuarter(t),
                }
              );
            }),
            Mt(Ot(e), "renderMonths", function () {
              var t = e.props,
                r = t.showFullMonthYearPicker,
                a = t.showTwoColumnMonthYearPicker,
                n = t.showFourColumnMonthYearPicker,
                o = t.locale,
                s = t.day,
                i = t.selected;
              return (
                n
                  ? [
                      [0, 1, 2, 3],
                      [4, 5, 6, 7],
                      [8, 9, 10, 11],
                    ]
                  : a
                  ? [
                      [0, 1],
                      [2, 3],
                      [4, 5],
                      [6, 7],
                      [8, 9],
                      [10, 11],
                    ]
                  : [
                      [0, 1, 2],
                      [3, 4, 5],
                      [6, 7, 8],
                      [9, 10, 11],
                    ]
              ).map(function (t, a) {
                return he.default.createElement(
                  "div",
                  { className: "react-datepicker__month-wrapper", key: a },
                  t.map(function (t, a) {
                    return he.default.createElement(
                      "div",
                      {
                        ref: e.MONTH_REFS[t],
                        key: a,
                        onClick: function (r) {
                          e.onMonthClick(r, t);
                        },
                        onKeyDown: function (r) {
                          e.onMonthKeyDown(r, t);
                        },
                        onMouseEnter: function () {
                          return e.onMonthMouseEnter(t);
                        },
                        tabIndex: e.getTabIndex(t),
                        className: e.getMonthClassNames(t),
                        role: "option",
                        "aria-label": e.getAriaLabel(t),
                        "aria-current": e.isCurrentMonth(s, t)
                          ? "date"
                          : void 0,
                        "aria-selected": e.isSelectedMonth(s, t, i),
                      },
                      r ? cr(t, o) : dr(t, o)
                    );
                  })
                );
              });
            }),
            Mt(Ot(e), "renderQuarters", function () {
              var t = e.props,
                r = t.day,
                a = t.selected;
              return he.default.createElement(
                "div",
                { className: "react-datepicker__quarter-wrapper" },
                [1, 2, 3, 4].map(function (t, n) {
                  return he.default.createElement(
                    "div",
                    {
                      key: n,
                      ref: e.QUARTER_REFS[n],
                      role: "option",
                      onClick: function (r) {
                        e.onQuarterClick(r, t);
                      },
                      onKeyDown: function (r) {
                        e.onQuarterKeyDown(r, t);
                      },
                      onMouseEnter: function () {
                        return e.onQuarterMouseEnter(t);
                      },
                      className: e.getQuarterClassNames(t),
                      "aria-selected": e.isSelectedQuarter(r, t, a),
                      tabIndex: e.getQuarterTabIndex(t),
                      "aria-current": e.isCurrentQuarter(r, t)
                        ? "date"
                        : void 0,
                    },
                    ur(t, e.props.locale)
                  );
                })
              );
            }),
            Mt(Ot(e), "getClassNames", function () {
              var t = e.props;
              t.day;
              var r = t.selectingDate,
                a = t.selectsStart,
                n = t.selectsEnd,
                o = t.showMonthYearPicker,
                s = t.showQuarterYearPicker;
              return me.default(
                "react-datepicker__month",
                { "react-datepicker__month--selecting-range": r && (a || n) },
                { "react-datepicker__monthPicker": o },
                { "react-datepicker__quarterPicker": s }
              );
            }),
            e
          );
        }
        return (
          _t(r, [
            {
              key: "render",
              value: function () {
                var e = this.props,
                  t = e.showMonthYearPicker,
                  r = e.showQuarterYearPicker,
                  a = e.day,
                  n = e.ariaLabelPrefix,
                  o = void 0 === n ? "month " : n;
                return he.default.createElement(
                  "div",
                  {
                    className: this.getClassNames(),
                    onMouseLeave: this.handleMouseLeave,
                    "aria-label": "".concat(o, " ").concat(jt(a, "yyyy-MM")),
                    role: "listbox",
                  },
                  t
                    ? this.renderMonths()
                    : r
                    ? this.renderQuarters()
                    : this.renderWeeks()
                );
              },
            },
          ]),
          r
        );
      })(he.default.Component),
      $r = (function (e) {
        Et(r, e);
        var t = It(r);
        function r() {
          var e;
          St(this, r);
          for (var a = arguments.length, n = new Array(a), o = 0; o < a; o++)
            n[o] = arguments[o];
          return (
            Mt(Ot((e = t.call.apply(t, [this].concat(n)))), "state", {
              height: null,
            }),
            Mt(Ot(e), "handleClick", function (t) {
              ((e.props.minTime || e.props.maxTime) && Sr(t, e.props)) ||
                ((e.props.excludeTimes ||
                  e.props.includeTimes ||
                  e.props.filterTime) &&
                  br(t, e.props)) ||
                e.props.onChange(t);
            }),
            Mt(Ot(e), "isSelectedTime", function (t, r, a) {
              return (
                e.props.selected && r === Ie.default(t) && a === Ye.default(t)
              );
            }),
            Mt(Ot(e), "liClasses", function (t, r, a) {
              var n = [
                "react-datepicker__time-list-item",
                e.props.timeClassName ? e.props.timeClassName(t, r, a) : void 0,
              ];
              return (
                e.isSelectedTime(t, r, a) &&
                  n.push("react-datepicker__time-list-item--selected"),
                (((e.props.minTime || e.props.maxTime) && Sr(t, e.props)) ||
                  ((e.props.excludeTimes ||
                    e.props.includeTimes ||
                    e.props.filterTime) &&
                    br(t, e.props))) &&
                  n.push("react-datepicker__time-list-item--disabled"),
                e.props.injectTimes &&
                  (60 * Ie.default(t) + Ye.default(t)) % e.props.intervals !=
                    0 &&
                  n.push("react-datepicker__time-list-item--injected"),
                n.join(" ")
              );
            }),
            Mt(Ot(e), "handleOnKeyDown", function (t, r) {
              " " === t.key && (t.preventDefault(), (t.key = "Enter")),
                "Enter" === t.key && e.handleClick(r),
                e.props.handleOnKeyDown(t);
            }),
            Mt(Ot(e), "renderTimes", function () {
              for (
                var t = [],
                  r = e.props.format ? e.props.format : "p",
                  a = e.props.intervals,
                  n = Gt(Wt(e.props.selected)),
                  o = 1440 / a,
                  s =
                    e.props.injectTimes &&
                    e.props.injectTimes.sort(function (e, t) {
                      return e - t;
                    }),
                  i = e.props.selected || e.props.openToDate || Wt(),
                  p = Ie.default(i),
                  l = Ye.default(i),
                  c = Qe.default(We.default(n, l), p),
                  d = 0;
                d < o;
                d++
              ) {
                var u = ge.default(n, d * a);
                if ((t.push(u), s)) {
                  var f = Or(n, u, d, a, s);
                  t = t.concat(f);
                }
              }
              return t.map(function (t, a) {
                return he.default.createElement(
                  "li",
                  {
                    key: a,
                    onClick: e.handleClick.bind(Ot(e), t),
                    className: e.liClasses(t, p, l),
                    ref: function (r) {
                      (ut.default(t, c) || sr(t, c)) && (e.centerLi = r);
                    },
                    onKeyDown: function (r) {
                      e.handleOnKeyDown(r, t);
                    },
                    tabIndex: "0",
                    "aria-selected": e.isSelectedTime(t, p, l)
                      ? "true"
                      : void 0,
                  },
                  jt(t, r, e.props.locale)
                );
              });
            }),
            e
          );
        }
        return (
          _t(
            r,
            [
              {
                key: "componentDidMount",
                value: function () {
                  (this.list.scrollTop =
                    this.centerLi &&
                    r.calcCenterPosition(
                      this.props.monthRef
                        ? this.props.monthRef.clientHeight -
                            this.header.clientHeight
                        : this.list.clientHeight,
                      this.centerLi
                    )),
                    this.props.monthRef &&
                      this.header &&
                      this.setState({
                        height:
                          this.props.monthRef.clientHeight -
                          this.header.clientHeight,
                      });
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = this.state.height;
                  return he.default.createElement(
                    "div",
                    {
                      className: "react-datepicker__time-container ".concat(
                        this.props.todayButton
                          ? "react-datepicker__time-container--with-today-button"
                          : ""
                      ),
                    },
                    he.default.createElement(
                      "div",
                      {
                        className:
                          "react-datepicker__header react-datepicker__header--time ".concat(
                            this.props.showTimeSelectOnly
                              ? "react-datepicker__header--time--only"
                              : ""
                          ),
                        ref: function (t) {
                          e.header = t;
                        },
                      },
                      he.default.createElement(
                        "div",
                        { className: "react-datepicker-time__header" },
                        this.props.timeCaption
                      )
                    ),
                    he.default.createElement(
                      "div",
                      { className: "react-datepicker__time" },
                      he.default.createElement(
                        "div",
                        { className: "react-datepicker__time-box" },
                        he.default.createElement(
                          "ul",
                          {
                            className: "react-datepicker__time-list",
                            ref: function (t) {
                              e.list = t;
                            },
                            style: t ? { height: t } : {},
                            tabIndex: "0",
                          },
                          this.renderTimes()
                        )
                      )
                    )
                  );
                },
              },
            ],
            [
              {
                key: "defaultProps",
                get: function () {
                  return {
                    intervals: 30,
                    onTimeChange: function () {},
                    todayButton: null,
                    timeCaption: "Time",
                  };
                },
              },
            ]
          ),
          r
        );
      })(he.default.Component);
    Mt($r, "calcCenterPosition", function (e, t) {
      return t.offsetTop - (e / 2 - t.clientHeight / 2);
    });
    var Gr = (function (e) {
        Et(r, e);
        var t = It(r);
        function r(e) {
          var a;
          return (
            St(this, r),
            Mt(
              Ot((a = t.call(this, e))),
              "YEAR_REFS",
              Tt(Array(a.props.yearItemNumber)).map(function () {
                return he.default.createRef();
              })
            ),
            Mt(Ot(a), "isDisabled", function (e) {
              return fr(e, a.props);
            }),
            Mt(Ot(a), "isExcluded", function (e) {
              return hr(e, a.props);
            }),
            Mt(Ot(a), "updateFocusOnPaginate", function (e) {
              var t = function () {
                this.YEAR_REFS[e].current.focus();
              }.bind(Ot(a));
              window.requestAnimationFrame(t);
            }),
            Mt(Ot(a), "handleYearClick", function (e, t) {
              a.props.onDayClick && a.props.onDayClick(e, t);
            }),
            Mt(Ot(a), "handleYearNavigation", function (e, t) {
              var r = a.props,
                n = r.date,
                o = r.yearItemNumber,
                s = Ir(n, o).startPeriod;
              a.isDisabled(t) ||
                a.isExcluded(t) ||
                (a.props.setPreSelection(t),
                e - s == -1
                  ? a.updateFocusOnPaginate(o - 1)
                  : e - s === o
                  ? a.updateFocusOnPaginate(0)
                  : a.YEAR_REFS[e - s].current.focus());
            }),
            Mt(Ot(a), "isSameDay", function (e, t) {
              return or(e, t);
            }),
            Mt(Ot(a), "isCurrentYear", function (e) {
              return e === qe.default(Wt());
            }),
            Mt(Ot(a), "isKeyboardSelected", function (e) {
              var t = Zt(Ve.default(a.props.date, e));
              return (
                !a.props.disabledKeyboardNavigation &&
                !a.props.inline &&
                !or(t, Zt(a.props.selected)) &&
                or(t, Zt(a.props.preSelection))
              );
            }),
            Mt(Ot(a), "onYearClick", function (e, t) {
              var r = a.props.date;
              a.handleYearClick(Zt(Ve.default(r, t)), e);
            }),
            Mt(Ot(a), "onYearKeyDown", function (e, t) {
              var r = e.key;
              if (!a.props.disabledKeyboardNavigation)
                switch (r) {
                  case "Enter":
                    a.onYearClick(e, t),
                      a.props.setPreSelection(a.props.selected);
                    break;
                  case "ArrowRight":
                    a.handleYearNavigation(
                      t + 1,
                      _e.default(a.props.preSelection, 1)
                    );
                    break;
                  case "ArrowLeft":
                    a.handleYearNavigation(
                      t - 1,
                      xe.default(a.props.preSelection, 1)
                    );
                }
            }),
            Mt(Ot(a), "getYearClassNames", function (e) {
              var t = a.props,
                r = t.minDate,
                n = t.maxDate,
                o = t.selected,
                s = t.excludeDates,
                i = t.includeDates,
                p = t.filterDate;
              return me.default("react-datepicker__year-text", {
                "react-datepicker__year-text--selected": e === qe.default(o),
                "react-datepicker__year-text--disabled":
                  (r || n || s || i || p) && Dr(e, a.props),
                "react-datepicker__year-text--keyboard-selected":
                  a.isKeyboardSelected(e),
                "react-datepicker__year-text--today": a.isCurrentYear(e),
              });
            }),
            Mt(Ot(a), "getYearTabIndex", function (e) {
              return a.props.disabledKeyboardNavigation
                ? "-1"
                : e === qe.default(a.props.preSelection)
                ? "0"
                : "-1";
            }),
            a
          );
        }
        return (
          _t(r, [
            {
              key: "render",
              value: function () {
                for (
                  var e = this,
                    t = [],
                    r = this.props,
                    a = Ir(r.date, r.yearItemNumber),
                    n = a.startPeriod,
                    o = a.endPeriod,
                    s = function (r) {
                      t.push(
                        he.default.createElement(
                          "div",
                          {
                            ref: e.YEAR_REFS[r - n],
                            onClick: function (t) {
                              e.onYearClick(t, r);
                            },
                            onKeyDown: function (t) {
                              e.onYearKeyDown(t, r);
                            },
                            tabIndex: e.getYearTabIndex(r),
                            className: e.getYearClassNames(r),
                            key: r,
                            "aria-current": e.isCurrentYear(r)
                              ? "date"
                              : void 0,
                          },
                          r
                        )
                      );
                    },
                    i = n;
                  i <= o;
                  i++
                )
                  s(i);
                return he.default.createElement(
                  "div",
                  { className: "react-datepicker__year" },
                  he.default.createElement(
                    "div",
                    { className: "react-datepicker__year-wrapper" },
                    t
                  )
                );
              },
            },
          ]),
          r
        );
      })(he.default.Component),
      Jr = (function (e) {
        Et(r, e);
        var t = It(r);
        function r(e) {
          var a;
          return (
            St(this, r),
            Mt(Ot((a = t.call(this, e))), "onTimeChange", function (e) {
              a.setState({ time: e });
              var t = new Date();
              t.setHours(e.split(":")[0]),
                t.setMinutes(e.split(":")[1]),
                a.props.onChange(t);
            }),
            Mt(Ot(a), "renderTimeInput", function () {
              var e = a.state.time,
                t = a.props,
                r = t.date,
                n = t.timeString,
                o = t.customTimeInput;
              return o
                ? he.default.cloneElement(o, {
                    date: r,
                    value: e,
                    onChange: a.onTimeChange,
                  })
                : he.default.createElement("input", {
                    type: "time",
                    className: "react-datepicker-time__input",
                    placeholder: "Time",
                    name: "time-input",
                    required: !0,
                    value: e,
                    onChange: function (e) {
                      a.onTimeChange(e.target.value || n);
                    },
                  });
            }),
            (a.state = { time: a.props.timeString }),
            a
          );
        }
        return (
          _t(
            r,
            [
              {
                key: "render",
                value: function () {
                  return he.default.createElement(
                    "div",
                    { className: "react-datepicker__input-time-container" },
                    he.default.createElement(
                      "div",
                      { className: "react-datepicker-time__caption" },
                      this.props.timeInputLabel
                    ),
                    he.default.createElement(
                      "div",
                      { className: "react-datepicker-time__input-container" },
                      he.default.createElement(
                        "div",
                        { className: "react-datepicker-time__input" },
                        this.renderTimeInput()
                      )
                    )
                  );
                },
              },
            ],
            [
              {
                key: "getDerivedStateFromProps",
                value: function (e, t) {
                  return e.timeString !== t.time
                    ? { time: e.timeString }
                    : null;
                },
              },
            ]
          ),
          r
        );
      })(he.default.Component);
    function Xr(e) {
      var t = e.className,
        r = e.children,
        a = e.showPopperArrow,
        n = e.arrowProps,
        o = void 0 === n ? {} : n;
      return he.default.createElement(
        "div",
        { className: t },
        a &&
          he.default.createElement(
            "div",
            Pt({ className: "react-datepicker__triangle" }, o)
          ),
        r
      );
    }
    var Zr = [
        "react-datepicker__year-select",
        "react-datepicker__month-select",
        "react-datepicker__month-year-select",
      ],
      ea = (function (e) {
        Et(r, e);
        var t = It(r);
        function r(e) {
          var a;
          return (
            St(this, r),
            Mt(Ot((a = t.call(this, e))), "handleClickOutside", function (e) {
              a.props.onClickOutside(e);
            }),
            Mt(Ot(a), "setClickOutsideRef", function () {
              return a.containerRef.current;
            }),
            Mt(Ot(a), "handleDropdownFocus", function (e) {
              (function () {
                var e = (
                  (arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {}
                  ).className || ""
                ).split(/\s+/);
                return Zr.some(function (t) {
                  return e.indexOf(t) >= 0;
                });
              })(e.target) && a.props.onDropdownFocus();
            }),
            Mt(Ot(a), "getDateInView", function () {
              var e = a.props,
                t = e.preSelection,
                r = e.selected,
                n = e.openToDate,
                o = Er(a.props),
                s = Nr(a.props),
                i = Wt(),
                p = n || r || t;
              return (
                p || (o && ut.default(i, o) ? o : s && dt.default(i, s) ? s : i)
              );
            }),
            Mt(Ot(a), "increaseMonth", function () {
              a.setState(
                function (e) {
                  var t = e.date;
                  return { date: Se.default(t, 1) };
                },
                function () {
                  return a.handleMonthChange(a.state.date);
                }
              );
            }),
            Mt(Ot(a), "decreaseMonth", function () {
              a.setState(
                function (e) {
                  var t = e.date;
                  return { date: Ee.default(t, 1) };
                },
                function () {
                  return a.handleMonthChange(a.state.date);
                }
              );
            }),
            Mt(Ot(a), "handleDayClick", function (e, t, r) {
              a.props.onSelect(e, t, r),
                a.props.setPreSelection && a.props.setPreSelection(e);
            }),
            Mt(Ot(a), "handleDayMouseEnter", function (e) {
              a.setState({ selectingDate: e }),
                a.props.onDayMouseEnter && a.props.onDayMouseEnter(e);
            }),
            Mt(Ot(a), "handleMonthMouseLeave", function () {
              a.setState({ selectingDate: null }),
                a.props.onMonthMouseLeave && a.props.onMonthMouseLeave();
            }),
            Mt(Ot(a), "handleYearChange", function (e) {
              a.props.onYearChange &&
                (a.props.onYearChange(e),
                a.setState({ isRenderAriaLiveMessage: !0 })),
                a.props.adjustDateOnChange &&
                  (a.props.onSelect && a.props.onSelect(e),
                  a.props.setOpen && a.props.setOpen(!0)),
                a.props.setPreSelection && a.props.setPreSelection(e);
            }),
            Mt(Ot(a), "handleMonthChange", function (e) {
              a.props.onMonthChange &&
                (a.props.onMonthChange(e),
                a.setState({ isRenderAriaLiveMessage: !0 })),
                a.props.adjustDateOnChange &&
                  (a.props.onSelect && a.props.onSelect(e),
                  a.props.setOpen && a.props.setOpen(!0)),
                a.props.setPreSelection && a.props.setPreSelection(e);
            }),
            Mt(Ot(a), "handleMonthYearChange", function (e) {
              a.handleYearChange(e), a.handleMonthChange(e);
            }),
            Mt(Ot(a), "changeYear", function (e) {
              a.setState(
                function (t) {
                  var r = t.date;
                  return { date: Ve.default(r, e) };
                },
                function () {
                  return a.handleYearChange(a.state.date);
                }
              );
            }),
            Mt(Ot(a), "changeMonth", function (e) {
              a.setState(
                function (t) {
                  var r = t.date;
                  return { date: He.default(r, e) };
                },
                function () {
                  return a.handleMonthChange(a.state.date);
                }
              );
            }),
            Mt(Ot(a), "changeMonthYear", function (e) {
              a.setState(
                function (t) {
                  var r = t.date;
                  return {
                    date: Ve.default(
                      He.default(r, Fe.default(e)),
                      qe.default(e)
                    ),
                  };
                },
                function () {
                  return a.handleMonthYearChange(a.state.date);
                }
              );
            }),
            Mt(Ot(a), "header", function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : a.state.date,
                t = Jt(e, a.props.locale, a.props.calendarStartDay),
                r = [];
              return (
                a.props.showWeekNumbers &&
                  r.push(
                    he.default.createElement(
                      "div",
                      { key: "W", className: "react-datepicker__day-name" },
                      a.props.weekLabel || "#"
                    )
                  ),
                r.concat(
                  [0, 1, 2, 3, 4, 5, 6].map(function (e) {
                    var r = ke.default(t, e),
                      n = a.formatWeekday(r, a.props.locale),
                      o = a.props.weekDayClassName
                        ? a.props.weekDayClassName(r)
                        : void 0;
                    return he.default.createElement(
                      "div",
                      {
                        key: e,
                        className: me.default("react-datepicker__day-name", o),
                      },
                      n
                    );
                  })
                )
              );
            }),
            Mt(Ot(a), "formatWeekday", function (e, t) {
              return a.props.formatWeekDay
                ? (function (e, t, r) {
                    return t(jt(e, "EEEE", r));
                  })(e, a.props.formatWeekDay, t)
                : a.props.useWeekdaysShort
                ? (function (e, t) {
                    return jt(e, "EEE", t);
                  })(e, t)
                : (function (e, t) {
                    return jt(e, "EEEEEE", t);
                  })(e, t);
            }),
            Mt(Ot(a), "decreaseYear", function () {
              a.setState(
                function (e) {
                  var t = e.date;
                  return {
                    date: xe.default(
                      t,
                      a.props.showYearPicker ? a.props.yearItemNumber : 1
                    ),
                  };
                },
                function () {
                  return a.handleYearChange(a.state.date);
                }
              );
            }),
            Mt(Ot(a), "renderPreviousButton", function () {
              if (!a.props.renderCustomHeader) {
                var e;
                switch (!0) {
                  case a.props.showMonthYearPicker:
                    e = Mr(a.state.date, a.props);
                    break;
                  case a.props.showYearPicker:
                    e = (function (e) {
                      var t =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : {},
                        r = t.minDate,
                        a = t.yearItemNumber,
                        n = void 0 === a ? Kt : a,
                        o = Ir(Zt(xe.default(e, n)), n).endPeriod,
                        s = r && qe.default(r);
                      return (s && s > o) || !1;
                    })(a.state.date, a.props);
                    break;
                  default:
                    e = Cr(a.state.date, a.props);
                }
                if (
                  (a.props.forceShowMonthNavigation ||
                    a.props.showDisabledMonthNavigation ||
                    !e) &&
                  !a.props.showTimeSelectOnly
                ) {
                  var t = [
                      "react-datepicker__navigation",
                      "react-datepicker__navigation--previous",
                    ],
                    r = a.decreaseMonth;
                  (a.props.showMonthYearPicker ||
                    a.props.showQuarterYearPicker ||
                    a.props.showYearPicker) &&
                    (r = a.decreaseYear),
                    e &&
                      a.props.showDisabledMonthNavigation &&
                      (t.push(
                        "react-datepicker__navigation--previous--disabled"
                      ),
                      (r = null));
                  var n =
                      a.props.showMonthYearPicker ||
                      a.props.showQuarterYearPicker ||
                      a.props.showYearPicker,
                    o = a.props,
                    s = o.previousMonthButtonLabel,
                    i = o.previousYearButtonLabel,
                    p = a.props,
                    l = p.previousMonthAriaLabel,
                    c =
                      void 0 === l
                        ? "string" == typeof s
                          ? s
                          : "Previous Month"
                        : l,
                    d = p.previousYearAriaLabel,
                    u =
                      void 0 === d
                        ? "string" == typeof i
                          ? i
                          : "Previous Year"
                        : d;
                  return he.default.createElement(
                    "button",
                    {
                      type: "button",
                      className: t.join(" "),
                      onClick: r,
                      onKeyDown: a.props.handleOnKeyDown,
                      "aria-label": n ? u : c,
                    },
                    he.default.createElement(
                      "span",
                      {
                        className: [
                          "react-datepicker__navigation-icon",
                          "react-datepicker__navigation-icon--previous",
                        ].join(" "),
                      },
                      n
                        ? a.props.previousYearButtonLabel
                        : a.props.previousMonthButtonLabel
                    )
                  );
                }
              }
            }),
            Mt(Ot(a), "increaseYear", function () {
              a.setState(
                function (e) {
                  var t = e.date;
                  return {
                    date: _e.default(
                      t,
                      a.props.showYearPicker ? a.props.yearItemNumber : 1
                    ),
                  };
                },
                function () {
                  return a.handleYearChange(a.state.date);
                }
              );
            }),
            Mt(Ot(a), "renderNextButton", function () {
              if (!a.props.renderCustomHeader) {
                var e;
                switch (!0) {
                  case a.props.showMonthYearPicker:
                    e = Pr(a.state.date, a.props);
                    break;
                  case a.props.showYearPicker:
                    e = (function (e) {
                      var t =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : {},
                        r = t.maxDate,
                        a = t.yearItemNumber,
                        n = void 0 === a ? Kt : a,
                        o = Ir(_e.default(e, n), n).startPeriod,
                        s = r && qe.default(r);
                      return (s && s < o) || !1;
                    })(a.state.date, a.props);
                    break;
                  default:
                    e = _r(a.state.date, a.props);
                }
                if (
                  (a.props.forceShowMonthNavigation ||
                    a.props.showDisabledMonthNavigation ||
                    !e) &&
                  !a.props.showTimeSelectOnly
                ) {
                  var t = [
                    "react-datepicker__navigation",
                    "react-datepicker__navigation--next",
                  ];
                  a.props.showTimeSelect &&
                    t.push("react-datepicker__navigation--next--with-time"),
                    a.props.todayButton &&
                      t.push(
                        "react-datepicker__navigation--next--with-today-button"
                      );
                  var r = a.increaseMonth;
                  (a.props.showMonthYearPicker ||
                    a.props.showQuarterYearPicker ||
                    a.props.showYearPicker) &&
                    (r = a.increaseYear),
                    e &&
                      a.props.showDisabledMonthNavigation &&
                      (t.push("react-datepicker__navigation--next--disabled"),
                      (r = null));
                  var n =
                      a.props.showMonthYearPicker ||
                      a.props.showQuarterYearPicker ||
                      a.props.showYearPicker,
                    o = a.props,
                    s = o.nextMonthButtonLabel,
                    i = o.nextYearButtonLabel,
                    p = a.props,
                    l = p.nextMonthAriaLabel,
                    c =
                      void 0 === l
                        ? "string" == typeof s
                          ? s
                          : "Next Month"
                        : l,
                    d = p.nextYearAriaLabel,
                    u =
                      void 0 === d
                        ? "string" == typeof i
                          ? i
                          : "Next Year"
                        : d;
                  return he.default.createElement(
                    "button",
                    {
                      type: "button",
                      className: t.join(" "),
                      onClick: r,
                      onKeyDown: a.props.handleOnKeyDown,
                      "aria-label": n ? u : c,
                    },
                    he.default.createElement(
                      "span",
                      {
                        className: [
                          "react-datepicker__navigation-icon",
                          "react-datepicker__navigation-icon--next",
                        ].join(" "),
                      },
                      n
                        ? a.props.nextYearButtonLabel
                        : a.props.nextMonthButtonLabel
                    )
                  );
                }
              }
            }),
            Mt(Ot(a), "renderCurrentMonth", function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : a.state.date,
                t = ["react-datepicker__current-month"];
              return (
                a.props.showYearDropdown &&
                  t.push("react-datepicker__current-month--hasYearDropdown"),
                a.props.showMonthDropdown &&
                  t.push("react-datepicker__current-month--hasMonthDropdown"),
                a.props.showMonthYearDropdown &&
                  t.push(
                    "react-datepicker__current-month--hasMonthYearDropdown"
                  ),
                he.default.createElement(
                  "div",
                  { className: t.join(" ") },
                  jt(e, a.props.dateFormat, a.props.locale)
                )
              );
            }),
            Mt(Ot(a), "renderYearDropdown", function () {
              var e =
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
              if (a.props.showYearDropdown && !e)
                return he.default.createElement(Fr, {
                  adjustDateOnChange: a.props.adjustDateOnChange,
                  date: a.state.date,
                  onSelect: a.props.onSelect,
                  setOpen: a.props.setOpen,
                  dropdownMode: a.props.dropdownMode,
                  onChange: a.changeYear,
                  minDate: a.props.minDate,
                  maxDate: a.props.maxDate,
                  year: qe.default(a.state.date),
                  scrollableYearDropdown: a.props.scrollableYearDropdown,
                  yearDropdownItemNumber: a.props.yearDropdownItemNumber,
                });
            }),
            Mt(Ot(a), "renderMonthDropdown", function () {
              var e =
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
              if (a.props.showMonthDropdown && !e)
                return he.default.createElement(Kr, {
                  dropdownMode: a.props.dropdownMode,
                  locale: a.props.locale,
                  onChange: a.changeMonth,
                  month: Fe.default(a.state.date),
                  useShortMonthInDropdown: a.props.useShortMonthInDropdown,
                });
            }),
            Mt(Ot(a), "renderMonthYearDropdown", function () {
              var e =
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
              if (a.props.showMonthYearDropdown && !e)
                return he.default.createElement(Hr, {
                  dropdownMode: a.props.dropdownMode,
                  locale: a.props.locale,
                  dateFormat: a.props.dateFormat,
                  onChange: a.changeMonthYear,
                  minDate: a.props.minDate,
                  maxDate: a.props.maxDate,
                  date: a.state.date,
                  scrollableMonthYearDropdown:
                    a.props.scrollableMonthYearDropdown,
                });
            }),
            Mt(Ot(a), "handleTodayButtonClick", function (e) {
              a.props.onSelect(tr(), e),
                a.props.setPreSelection && a.props.setPreSelection(tr());
            }),
            Mt(Ot(a), "renderTodayButton", function () {
              if (a.props.todayButton && !a.props.showTimeSelectOnly)
                return he.default.createElement(
                  "div",
                  {
                    className: "react-datepicker__today-button",
                    onClick: function (e) {
                      return a.handleTodayButtonClick(e);
                    },
                  },
                  a.props.todayButton
                );
            }),
            Mt(Ot(a), "renderDefaultHeader", function (e) {
              var t = e.monthDate,
                r = e.i;
              return he.default.createElement(
                "div",
                {
                  className: "react-datepicker__header ".concat(
                    a.props.showTimeSelect
                      ? "react-datepicker__header--has-time-select"
                      : ""
                  ),
                },
                a.renderCurrentMonth(t),
                he.default.createElement(
                  "div",
                  {
                    className:
                      "react-datepicker__header__dropdown react-datepicker__header__dropdown--".concat(
                        a.props.dropdownMode
                      ),
                    onFocus: a.handleDropdownFocus,
                  },
                  a.renderMonthDropdown(0 !== r),
                  a.renderMonthYearDropdown(0 !== r),
                  a.renderYearDropdown(0 !== r)
                ),
                he.default.createElement(
                  "div",
                  { className: "react-datepicker__day-names" },
                  a.header(t)
                )
              );
            }),
            Mt(Ot(a), "renderCustomHeader", function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                t = e.monthDate,
                r = e.i;
              if (
                (a.props.showTimeSelect && !a.state.monthContainer) ||
                a.props.showTimeSelectOnly
              )
                return null;
              var n = Cr(a.state.date, a.props),
                o = _r(a.state.date, a.props),
                s = Mr(a.state.date, a.props),
                i = Pr(a.state.date, a.props),
                p =
                  !a.props.showMonthYearPicker &&
                  !a.props.showQuarterYearPicker &&
                  !a.props.showYearPicker;
              return he.default.createElement(
                "div",
                {
                  className:
                    "react-datepicker__header react-datepicker__header--custom",
                  onFocus: a.props.onDropdownFocus,
                },
                a.props.renderCustomHeader(
                  kt(
                    kt({}, a.state),
                    {},
                    {
                      customHeaderCount: r,
                      monthDate: t,
                      changeMonth: a.changeMonth,
                      changeYear: a.changeYear,
                      decreaseMonth: a.decreaseMonth,
                      increaseMonth: a.increaseMonth,
                      decreaseYear: a.decreaseYear,
                      increaseYear: a.increaseYear,
                      prevMonthButtonDisabled: n,
                      nextMonthButtonDisabled: o,
                      prevYearButtonDisabled: s,
                      nextYearButtonDisabled: i,
                    }
                  )
                ),
                p &&
                  he.default.createElement(
                    "div",
                    { className: "react-datepicker__day-names" },
                    a.header(t)
                  )
              );
            }),
            Mt(Ot(a), "renderYearHeader", function () {
              var e = a.state.date,
                t = a.props,
                r = t.showYearPicker,
                n = Ir(e, t.yearItemNumber),
                o = n.startPeriod,
                s = n.endPeriod;
              return he.default.createElement(
                "div",
                {
                  className:
                    "react-datepicker__header react-datepicker-year-header",
                },
                r ? "".concat(o, " - ").concat(s) : qe.default(e)
              );
            }),
            Mt(Ot(a), "renderHeader", function (e) {
              switch (!0) {
                case void 0 !== a.props.renderCustomHeader:
                  return a.renderCustomHeader(e);
                case a.props.showMonthYearPicker ||
                  a.props.showQuarterYearPicker ||
                  a.props.showYearPicker:
                  return a.renderYearHeader(e);
                default:
                  return a.renderDefaultHeader(e);
              }
            }),
            Mt(Ot(a), "renderMonths", function () {
              if (!a.props.showTimeSelectOnly && !a.props.showYearPicker) {
                for (
                  var e = [],
                    t = a.props.showPreviousMonths
                      ? a.props.monthsShown - 1
                      : 0,
                    r = Ee.default(a.state.date, t),
                    n = 0;
                  n < a.props.monthsShown;
                  ++n
                ) {
                  var o = n - a.props.monthSelectedIn,
                    s = Se.default(r, o),
                    i = "month-".concat(n),
                    p = n < a.props.monthsShown - 1,
                    l = n > 0;
                  e.push(
                    he.default.createElement(
                      "div",
                      {
                        key: i,
                        ref: function (e) {
                          a.monthContainer = e;
                        },
                        className: "react-datepicker__month-container",
                      },
                      a.renderHeader({ monthDate: s, i: n }),
                      he.default.createElement(zr, {
                        chooseDayAriaLabelPrefix:
                          a.props.chooseDayAriaLabelPrefix,
                        disabledDayAriaLabelPrefix:
                          a.props.disabledDayAriaLabelPrefix,
                        weekAriaLabelPrefix: a.props.weekAriaLabelPrefix,
                        ariaLabelPrefix: a.props.monthAriaLabelPrefix,
                        onChange: a.changeMonthYear,
                        day: s,
                        dayClassName: a.props.dayClassName,
                        calendarStartDay: a.props.calendarStartDay,
                        monthClassName: a.props.monthClassName,
                        onDayClick: a.handleDayClick,
                        handleOnKeyDown: a.props.handleOnDayKeyDown,
                        onDayMouseEnter: a.handleDayMouseEnter,
                        onMouseLeave: a.handleMonthMouseLeave,
                        onWeekSelect: a.props.onWeekSelect,
                        orderInDisplay: n,
                        formatWeekNumber: a.props.formatWeekNumber,
                        locale: a.props.locale,
                        minDate: a.props.minDate,
                        maxDate: a.props.maxDate,
                        excludeDates: a.props.excludeDates,
                        excludeDateIntervals: a.props.excludeDateIntervals,
                        highlightDates: a.props.highlightDates,
                        selectingDate: a.state.selectingDate,
                        includeDates: a.props.includeDates,
                        includeDateIntervals: a.props.includeDateIntervals,
                        inline: a.props.inline,
                        shouldFocusDayInline: a.props.shouldFocusDayInline,
                        fixedHeight: a.props.fixedHeight,
                        filterDate: a.props.filterDate,
                        preSelection: a.props.preSelection,
                        setPreSelection: a.props.setPreSelection,
                        selected: a.props.selected,
                        selectsStart: a.props.selectsStart,
                        selectsEnd: a.props.selectsEnd,
                        selectsRange: a.props.selectsRange,
                        selectsDisabledDaysInRange:
                          a.props.selectsDisabledDaysInRange,
                        selectsMultiple: a.props.selectsMultiple,
                        selectedDates: a.props.selectedDates,
                        showWeekNumbers: a.props.showWeekNumbers,
                        startDate: a.props.startDate,
                        endDate: a.props.endDate,
                        peekNextMonth: a.props.peekNextMonth,
                        setOpen: a.props.setOpen,
                        shouldCloseOnSelect: a.props.shouldCloseOnSelect,
                        renderDayContents: a.props.renderDayContents,
                        disabledKeyboardNavigation:
                          a.props.disabledKeyboardNavigation,
                        showMonthYearPicker: a.props.showMonthYearPicker,
                        showFullMonthYearPicker:
                          a.props.showFullMonthYearPicker,
                        showTwoColumnMonthYearPicker:
                          a.props.showTwoColumnMonthYearPicker,
                        showFourColumnMonthYearPicker:
                          a.props.showFourColumnMonthYearPicker,
                        showYearPicker: a.props.showYearPicker,
                        showQuarterYearPicker: a.props.showQuarterYearPicker,
                        isInputFocused: a.props.isInputFocused,
                        containerRef: a.containerRef,
                        monthShowsDuplicateDaysEnd: p,
                        monthShowsDuplicateDaysStart: l,
                      })
                    )
                  );
                }
                return e;
              }
            }),
            Mt(Ot(a), "renderYears", function () {
              if (!a.props.showTimeSelectOnly)
                return a.props.showYearPicker
                  ? he.default.createElement(
                      "div",
                      { className: "react-datepicker__year--container" },
                      a.renderHeader(),
                      he.default.createElement(
                        Gr,
                        Pt(
                          { onDayClick: a.handleDayClick, date: a.state.date },
                          a.props
                        )
                      )
                    )
                  : void 0;
            }),
            Mt(Ot(a), "renderTimeSection", function () {
              if (
                a.props.showTimeSelect &&
                (a.state.monthContainer || a.props.showTimeSelectOnly)
              )
                return he.default.createElement($r, {
                  selected: a.props.selected,
                  openToDate: a.props.openToDate,
                  onChange: a.props.onTimeChange,
                  timeClassName: a.props.timeClassName,
                  format: a.props.timeFormat,
                  includeTimes: a.props.includeTimes,
                  intervals: a.props.timeIntervals,
                  minTime: a.props.minTime,
                  maxTime: a.props.maxTime,
                  excludeTimes: a.props.excludeTimes,
                  filterTime: a.props.filterTime,
                  timeCaption: a.props.timeCaption,
                  todayButton: a.props.todayButton,
                  showMonthDropdown: a.props.showMonthDropdown,
                  showMonthYearDropdown: a.props.showMonthYearDropdown,
                  showYearDropdown: a.props.showYearDropdown,
                  withPortal: a.props.withPortal,
                  monthRef: a.state.monthContainer,
                  injectTimes: a.props.injectTimes,
                  locale: a.props.locale,
                  handleOnKeyDown: a.props.handleOnKeyDown,
                  showTimeSelectOnly: a.props.showTimeSelectOnly,
                });
            }),
            Mt(Ot(a), "renderInputTimeSection", function () {
              var e = new Date(a.props.selected),
                t =
                  Ht(e) && Boolean(a.props.selected)
                    ? ""
                        .concat(Yr(e.getHours()), ":")
                        .concat(Yr(e.getMinutes()))
                    : "";
              if (a.props.showTimeInput)
                return he.default.createElement(Jr, {
                  date: e,
                  timeString: t,
                  timeInputLabel: a.props.timeInputLabel,
                  onChange: a.props.onTimeChange,
                  customTimeInput: a.props.customTimeInput,
                });
            }),
            Mt(Ot(a), "renderAriaLiveRegion", function () {
              var e,
                t = Ir(a.state.date, a.props.yearItemNumber),
                r = t.startPeriod,
                n = t.endPeriod;
              return (
                (e = a.props.showYearPicker
                  ? "".concat(r, " - ").concat(n)
                  : a.props.showMonthYearPicker || a.props.showQuarterYearPicker
                  ? qe.default(a.state.date)
                  : ""
                      .concat(cr(Fe.default(a.state.date), a.props.locale), " ")
                      .concat(qe.default(a.state.date))),
                he.default.createElement(
                  "span",
                  {
                    role: "alert",
                    "aria-live": "polite",
                    className: "react-datepicker__aria-live",
                  },
                  a.state.isRenderAriaLiveMessage && e
                )
              );
            }),
            Mt(Ot(a), "renderChildren", function () {
              if (a.props.children)
                return he.default.createElement(
                  "div",
                  { className: "react-datepicker__children-container" },
                  a.props.children
                );
            }),
            (a.containerRef = he.default.createRef()),
            (a.state = {
              date: a.getDateInView(),
              selectingDate: null,
              monthContainer: null,
              isRenderAriaLiveMessage: !1,
            }),
            a
          );
        }
        return (
          _t(
            r,
            [
              {
                key: "componentDidMount",
                value: function () {
                  var e = this;
                  this.props.showTimeSelect &&
                    (this.assignMonthContainer = void e.setState({
                      monthContainer: e.monthContainer,
                    }));
                },
              },
              {
                key: "componentDidUpdate",
                value: function (e) {
                  !this.props.preSelection ||
                  (or(this.props.preSelection, e.preSelection) &&
                    this.props.monthSelectedIn === e.monthSelectedIn)
                    ? this.props.openToDate &&
                      !or(this.props.openToDate, e.openToDate) &&
                      this.setState({ date: this.props.openToDate })
                    : this.setState({ date: this.props.preSelection });
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.props.container || Xr;
                  return he.default.createElement(
                    "div",
                    { ref: this.containerRef },
                    he.default.createElement(
                      e,
                      {
                        className: me.default(
                          "react-datepicker",
                          this.props.className,
                          {
                            "react-datepicker--time-only":
                              this.props.showTimeSelectOnly,
                          }
                        ),
                        showPopperArrow: this.props.showPopperArrow,
                        arrowProps: this.props.arrowProps,
                      },
                      this.renderAriaLiveRegion(),
                      this.renderPreviousButton(),
                      this.renderNextButton(),
                      this.renderMonths(),
                      this.renderYears(),
                      this.renderTodayButton(),
                      this.renderTimeSection(),
                      this.renderInputTimeSection(),
                      this.renderChildren()
                    )
                  );
                },
              },
            ],
            [
              {
                key: "defaultProps",
                get: function () {
                  return {
                    onDropdownFocus: function () {},
                    monthsShown: 1,
                    monthSelectedIn: 0,
                    forceShowMonthNavigation: !1,
                    timeCaption: "Time",
                    previousYearButtonLabel: "Previous Year",
                    nextYearButtonLabel: "Next Year",
                    previousMonthButtonLabel: "Previous Month",
                    nextMonthButtonLabel: "Next Month",
                    customTimeInput: null,
                    yearItemNumber: Kt,
                  };
                },
              },
            ]
          ),
          r
        );
      })(he.default.Component),
      ta = (function (e) {
        Et(r, e);
        var t = It(r);
        function r(e) {
          var a;
          return (
            St(this, r),
            ((a = t.call(this, e)).el = document.createElement("div")),
            a
          );
        }
        return (
          _t(r, [
            {
              key: "componentDidMount",
              value: function () {
                (this.portalRoot = (
                  this.props.portalHost || document
                ).getElementById(this.props.portalId)),
                  this.portalRoot ||
                    ((this.portalRoot = document.createElement("div")),
                    this.portalRoot.setAttribute("id", this.props.portalId),
                    (this.props.portalHost || document.body).appendChild(
                      this.portalRoot
                    )),
                  this.portalRoot.appendChild(this.el);
              },
            },
            {
              key: "componentWillUnmount",
              value: function () {
                this.portalRoot.removeChild(this.el);
              },
            },
            {
              key: "render",
              value: function () {
                return Dt.default.createPortal(this.props.children, this.el);
              },
            },
          ]),
          r
        );
      })(he.default.Component),
      ra = function (e) {
        return !e.disabled && -1 !== e.tabIndex;
      },
      aa = (function (e) {
        Et(r, e);
        var t = It(r);
        function r(e) {
          var a;
          return (
            St(this, r),
            Mt(Ot((a = t.call(this, e))), "getTabChildren", function () {
              return Array.prototype.slice
                .call(
                  a.tabLoopRef.current.querySelectorAll(
                    "[tabindex], a, button, input, select, textarea"
                  ),
                  1,
                  -1
                )
                .filter(ra);
            }),
            Mt(Ot(a), "handleFocusStart", function (e) {
              var t = a.getTabChildren();
              t && t.length > 1 && t[t.length - 1].focus();
            }),
            Mt(Ot(a), "handleFocusEnd", function (e) {
              var t = a.getTabChildren();
              t && t.length > 1 && t[0].focus();
            }),
            (a.tabLoopRef = he.default.createRef()),
            a
          );
        }
        return (
          _t(
            r,
            [
              {
                key: "render",
                value: function () {
                  return this.props.enableTabLoop
                    ? he.default.createElement(
                        "div",
                        {
                          className: "react-datepicker__tab-loop",
                          ref: this.tabLoopRef,
                        },
                        he.default.createElement("div", {
                          className: "react-datepicker__tab-loop__start",
                          tabIndex: "0",
                          onFocus: this.handleFocusStart,
                        }),
                        this.props.children,
                        he.default.createElement("div", {
                          className: "react-datepicker__tab-loop__end",
                          tabIndex: "0",
                          onFocus: this.handleFocusEnd,
                        })
                      )
                    : this.props.children;
                },
              },
            ],
            [
              {
                key: "defaultProps",
                get: function () {
                  return { enableTabLoop: !0 };
                },
              },
            ]
          ),
          r
        );
      })(he.default.Component),
      na = (function (e) {
        Et(r, e);
        var t = It(r);
        function r() {
          return St(this, r), t.apply(this, arguments);
        }
        return (
          _t(
            r,
            [
              {
                key: "render",
                value: function () {
                  var e,
                    t = this.props,
                    r = t.className,
                    a = t.wrapperClassName,
                    n = t.hidePopper,
                    o = t.popperComponent,
                    s = t.popperModifiers,
                    i = t.popperPlacement,
                    p = t.popperProps,
                    l = t.targetComponent,
                    c = t.enableTabLoop,
                    d = t.popperOnKeyDown,
                    u = t.portalId,
                    f = t.portalHost;
                  if (!n) {
                    var h = me.default("react-datepicker-popper", r);
                    e = he.default.createElement(
                      de.Popper,
                      Pt({ modifiers: s, placement: i }, p),
                      function (e) {
                        var t = e.ref,
                          r = e.style,
                          a = e.placement,
                          n = e.arrowProps;
                        return he.default.createElement(
                          aa,
                          { enableTabLoop: c },
                          he.default.createElement(
                            "div",
                            {
                              ref: t,
                              style: r,
                              className: h,
                              "data-placement": a,
                              onKeyDown: d,
                            },
                            he.default.cloneElement(o, { arrowProps: n })
                          )
                        );
                      }
                    );
                  }
                  this.props.popperContainer &&
                    (e = he.default.createElement(
                      this.props.popperContainer,
                      {},
                      e
                    )),
                    u &&
                      !n &&
                      (e = he.default.createElement(
                        ta,
                        { portalId: u, portalHost: f },
                        e
                      ));
                  var m = me.default("react-datepicker-wrapper", a);
                  return he.default.createElement(
                    de.Manager,
                    { className: "react-datepicker-manager" },
                    he.default.createElement(de.Reference, null, function (e) {
                      var t = e.ref;
                      return he.default.createElement(
                        "div",
                        { ref: t, className: m },
                        l
                      );
                    }),
                    e
                  );
                },
              },
            ],
            [
              {
                key: "defaultProps",
                get: function () {
                  return {
                    hidePopper: !0,
                    popperModifiers: [],
                    popperProps: {},
                    popperPlacement: "bottom-start",
                  };
                },
              },
            ]
          ),
          r
        );
      })(he.default.Component),
      oa = "react-datepicker-ignore-onclickoutside",
      sa = vt.default(ea);
    var ia = "Date input not valid.",
      pa = (function (e) {
        Et(r, e);
        var t = It(r);
        function r(e) {
          var a;
          return (
            St(this, r),
            Mt(Ot((a = t.call(this, e))), "getPreSelection", function () {
              return a.props.openToDate
                ? a.props.openToDate
                : a.props.selectsEnd && a.props.startDate
                ? a.props.startDate
                : a.props.selectsStart && a.props.endDate
                ? a.props.endDate
                : Wt();
            }),
            Mt(Ot(a), "calcInitialState", function () {
              var e,
                t = a.getPreSelection(),
                r = Er(a.props),
                n = Nr(a.props),
                o =
                  r && ut.default(t, Xe.default(r))
                    ? r
                    : n && dt.default(t, at.default(n))
                    ? n
                    : t;
              return {
                open: a.props.startOpen || !1,
                preventFocus: !1,
                preSelection:
                  null !==
                    (e = a.props.selectsRange
                      ? a.props.startDate
                      : a.props.selected) && void 0 !== e
                    ? e
                    : o,
                highlightDates: xr(a.props.highlightDates),
                focused: !1,
                shouldFocusDayInline: !1,
                isRenderAriaLiveMessage: !1,
              };
            }),
            Mt(Ot(a), "clearPreventFocusTimeout", function () {
              a.preventFocusTimeout && clearTimeout(a.preventFocusTimeout);
            }),
            Mt(Ot(a), "setFocus", function () {
              a.input && a.input.focus && a.input.focus({ preventScroll: !0 });
            }),
            Mt(Ot(a), "setBlur", function () {
              a.input && a.input.blur && a.input.blur(), a.cancelFocusInput();
            }),
            Mt(Ot(a), "setOpen", function (e) {
              var t =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
              a.setState(
                {
                  open: e,
                  preSelection:
                    e && a.state.open
                      ? a.state.preSelection
                      : a.calcInitialState().preSelection,
                  lastPreSelectChange: ca,
                },
                function () {
                  e ||
                    a.setState(
                      function (e) {
                        return { focused: !!t && e.focused };
                      },
                      function () {
                        !t && a.setBlur(), a.setState({ inputValue: null });
                      }
                    );
                }
              );
            }),
            Mt(Ot(a), "inputOk", function () {
              return ye.default(a.state.preSelection);
            }),
            Mt(Ot(a), "isCalendarOpen", function () {
              return void 0 === a.props.open
                ? a.state.open && !a.props.disabled && !a.props.readOnly
                : a.props.open;
            }),
            Mt(Ot(a), "handleFocus", function (e) {
              a.state.preventFocus ||
                (a.props.onFocus(e),
                a.props.preventOpenOnFocus ||
                  a.props.readOnly ||
                  a.setOpen(!0)),
                a.setState({ focused: !0 });
            }),
            Mt(Ot(a), "cancelFocusInput", function () {
              clearTimeout(a.inputFocusTimeout), (a.inputFocusTimeout = null);
            }),
            Mt(Ot(a), "deferFocusInput", function () {
              a.cancelFocusInput(),
                (a.inputFocusTimeout = setTimeout(function () {
                  return a.setFocus();
                }, 1));
            }),
            Mt(Ot(a), "handleDropdownFocus", function () {
              a.cancelFocusInput();
            }),
            Mt(Ot(a), "handleBlur", function (e) {
              (!a.state.open || a.props.withPortal || a.props.showTimeInput) &&
                a.props.onBlur(e),
                a.setState({ focused: !1 });
            }),
            Mt(Ot(a), "handleCalendarClickOutside", function (e) {
              a.props.inline || a.setOpen(!1),
                a.props.onClickOutside(e),
                a.props.withPortal && e.preventDefault();
            }),
            Mt(Ot(a), "handleChange", function () {
              for (
                var e = arguments.length, t = new Array(e), r = 0;
                r < e;
                r++
              )
                t[r] = arguments[r];
              var n = t[0];
              if (
                !a.props.onChangeRaw ||
                (a.props.onChangeRaw.apply(Ot(a), t),
                "function" == typeof n.isDefaultPrevented &&
                  !n.isDefaultPrevented())
              ) {
                a.setState({
                  inputValue: n.target.value,
                  lastPreSelectChange: la,
                });
                var o = Qt(
                  n.target.value,
                  a.props.dateFormat,
                  a.props.locale,
                  a.props.strictParsing,
                  a.props.minDate
                );
                a.props.showTimeSelectOnly &&
                  a.props.selected &&
                  !or(o, a.props.selected) &&
                  (o =
                    null == o
                      ? gt.default(a.props.selected, {
                          hours: Ie.default(a.props.selected),
                          minutes: Ye.default(a.props.selected),
                          seconds: Oe.default(a.props.selected),
                        })
                      : gt.default(a.props.selected, {
                          hours: Ie.default(o),
                          minutes: Ye.default(o),
                          seconds: Oe.default(o),
                        })),
                  (!o && n.target.value) || a.setSelected(o, n, !0);
              }
            }),
            Mt(Ot(a), "handleSelect", function (e, t, r) {
              if (
                (a.setState({ preventFocus: !0 }, function () {
                  return (
                    (a.preventFocusTimeout = setTimeout(function () {
                      return a.setState({ preventFocus: !1 });
                    }, 50)),
                    a.preventFocusTimeout
                  );
                }),
                a.props.onChangeRaw && a.props.onChangeRaw(t),
                a.setSelected(e, t, !1, r),
                a.setState({ isRenderAriaLiveMessage: !0 }),
                !a.props.shouldCloseOnSelect || a.props.showTimeSelect)
              )
                a.setPreSelection(e);
              else if (!a.props.inline) {
                a.props.selectsRange || a.setOpen(!1);
                var n = a.props,
                  o = n.startDate,
                  s = n.endDate;
                !o || s || ut.default(e, o) || a.setOpen(!1);
              }
            }),
            Mt(Ot(a), "setSelected", function (e, t, r, n) {
              var o = e;
              if (a.props.showYearPicker) {
                if (null !== o && Dr(qe.default(o), a.props)) return;
              } else if (a.props.showMonthYearPicker) {
                if (null !== o && mr(o, a.props)) return;
              } else if (null !== o && fr(o, a.props)) return;
              var s = a.props,
                i = s.onChange,
                p = s.selectsRange,
                l = s.startDate,
                c = s.endDate,
                d = s.selectsMultiple,
                u = s.selectedDates;
              if (!sr(a.props.selected, o) || a.props.allowSameDay || p || d)
                if (
                  (null !== o &&
                    (!a.props.selected ||
                      (r &&
                        (a.props.showTimeSelect ||
                          a.props.showTimeSelectOnly ||
                          a.props.showTimeInput)) ||
                      (o = Ut(o, {
                        hour: Ie.default(a.props.selected),
                        minute: Ye.default(a.props.selected),
                        second: Oe.default(a.props.selected),
                      })),
                    a.props.inline || a.setState({ preSelection: o }),
                    a.props.focusSelectedMonth ||
                      a.setState({ monthSelectedIn: n })),
                  p)
                ) {
                  var f = l && !c,
                    h = l && c;
                  !l && !c
                    ? i([o, null], t)
                    : f && (ut.default(o, l) ? i([o, null], t) : i([l, o], t)),
                    h && i([o, null], t);
                } else if (d) {
                  if (!u || 0 === u.length) i([o], t);
                  else if (
                    u.some(function (e) {
                      return or(e, o);
                    })
                  )
                    i(
                      u.filter(function (e) {
                        return !or(e, o);
                      }),
                      t
                    );
                  else i([].concat(Tt(u), [o]), t);
                } else i(o, t);
              r || (a.props.onSelect(o, t), a.setState({ inputValue: null }));
            }),
            Mt(Ot(a), "setPreSelection", function (e) {
              var t = void 0 !== a.props.minDate,
                r = void 0 !== a.props.maxDate,
                n = !0;
              if (e) {
                var o = Xe.default(e);
                if (t && r) n = ir(e, a.props.minDate, a.props.maxDate);
                else if (t) {
                  var s = Xe.default(a.props.minDate);
                  n = dt.default(e, s) || sr(o, s);
                } else if (r) {
                  var i = at.default(a.props.maxDate);
                  n = ut.default(e, i) || sr(o, i);
                }
              }
              n && a.setState({ preSelection: e });
            }),
            Mt(Ot(a), "handleTimeChange", function (e) {
              var t = Ut(
                a.props.selected ? a.props.selected : a.getPreSelection(),
                { hour: Ie.default(e), minute: Ye.default(e) }
              );
              a.setState({ preSelection: t }),
                a.props.onChange(t),
                a.props.shouldCloseOnSelect && a.setOpen(!1),
                a.props.showTimeInput && a.setOpen(!0),
                (a.props.showTimeSelectOnly || a.props.showTimeSelect) &&
                  a.setState({ isRenderAriaLiveMessage: !0 }),
                a.setState({ inputValue: null });
            }),
            Mt(Ot(a), "onInputClick", function () {
              a.props.disabled || a.props.readOnly || a.setOpen(!0),
                a.props.onInputClick();
            }),
            Mt(Ot(a), "onInputKeyDown", function (e) {
              a.props.onKeyDown(e);
              var t = e.key;
              if (
                a.state.open ||
                a.props.inline ||
                a.props.preventOpenOnFocus
              ) {
                if (a.state.open) {
                  if ("ArrowDown" === t || "ArrowUp" === t) {
                    e.preventDefault();
                    var r =
                      a.calendar.componentNode &&
                      a.calendar.componentNode.querySelector(
                        '.react-datepicker__day[tabindex="0"]'
                      );
                    return void (r && r.focus({ preventScroll: !0 }));
                  }
                  var n = Wt(a.state.preSelection);
                  "Enter" === t
                    ? (e.preventDefault(),
                      a.inputOk() && a.state.lastPreSelectChange === ca
                        ? (a.handleSelect(n, e),
                          !a.props.shouldCloseOnSelect && a.setPreSelection(n))
                        : a.setOpen(!1))
                    : "Escape" === t && (e.preventDefault(), a.setOpen(!1)),
                    a.inputOk() || a.props.onInputError({ code: 1, msg: ia });
                }
              } else ("ArrowDown" !== t && "ArrowUp" !== t && "Enter" !== t) || a.onInputClick();
            }),
            Mt(Ot(a), "onPortalKeyDown", function (e) {
              "Escape" === e.key &&
                (e.preventDefault(),
                a.setState({ preventFocus: !0 }, function () {
                  a.setOpen(!1),
                    setTimeout(function () {
                      a.setFocus(), a.setState({ preventFocus: !1 });
                    });
                }));
            }),
            Mt(Ot(a), "onDayKeyDown", function (e) {
              a.props.onKeyDown(e);
              var t = e.key,
                r = Wt(a.state.preSelection);
              if ("Enter" === t)
                e.preventDefault(),
                  a.handleSelect(r, e),
                  !a.props.shouldCloseOnSelect && a.setPreSelection(r);
              else if ("Escape" === t)
                e.preventDefault(),
                  a.setOpen(!1),
                  a.inputOk() || a.props.onInputError({ code: 1, msg: ia });
              else if (!a.props.disabledKeyboardNavigation) {
                var n;
                switch (t) {
                  case "ArrowLeft":
                    n = Me.default(r, 1);
                    break;
                  case "ArrowRight":
                    n = ke.default(r, 1);
                    break;
                  case "ArrowUp":
                    n = Pe.default(r, 1);
                    break;
                  case "ArrowDown":
                    n = be.default(r, 1);
                    break;
                  case "PageUp":
                    n = Ee.default(r, 1);
                    break;
                  case "PageDown":
                    n = Se.default(r, 1);
                    break;
                  case "Home":
                    n = xe.default(r, 1);
                    break;
                  case "End":
                    n = _e.default(r, 1);
                }
                if (!n)
                  return void (
                    a.props.onInputError &&
                    a.props.onInputError({ code: 1, msg: ia })
                  );
                if (
                  (e.preventDefault(),
                  a.setState({ lastPreSelectChange: ca }),
                  a.props.adjustDateOnChange && a.setSelected(n),
                  a.setPreSelection(n),
                  a.props.inline)
                ) {
                  var o = Fe.default(r),
                    s = Fe.default(n),
                    i = qe.default(r),
                    p = qe.default(n);
                  o !== s || i !== p
                    ? a.setState({ shouldFocusDayInline: !0 })
                    : a.setState({ shouldFocusDayInline: !1 });
                }
              }
            }),
            Mt(Ot(a), "onPopperKeyDown", function (e) {
              "Escape" === e.key &&
                (e.preventDefault(),
                a.setState({ preventFocus: !0 }, function () {
                  a.setOpen(!1),
                    setTimeout(function () {
                      a.setFocus(), a.setState({ preventFocus: !1 });
                    });
                }));
            }),
            Mt(Ot(a), "onClearClick", function (e) {
              e && e.preventDefault && e.preventDefault(),
                a.props.selectsRange
                  ? a.props.onChange([null, null], e)
                  : a.props.onChange(null, e),
                a.setState({ inputValue: null });
            }),
            Mt(Ot(a), "clear", function () {
              a.onClearClick();
            }),
            Mt(Ot(a), "onScroll", function (e) {
              "boolean" == typeof a.props.closeOnScroll && a.props.closeOnScroll
                ? (e.target !== document &&
                    e.target !== document.documentElement &&
                    e.target !== document.body) ||
                  a.setOpen(!1)
                : "function" == typeof a.props.closeOnScroll &&
                  a.props.closeOnScroll(e) &&
                  a.setOpen(!1);
            }),
            Mt(Ot(a), "renderCalendar", function () {
              return a.props.inline || a.isCalendarOpen()
                ? he.default.createElement(
                    sa,
                    {
                      ref: function (e) {
                        a.calendar = e;
                      },
                      locale: a.props.locale,
                      calendarStartDay: a.props.calendarStartDay,
                      chooseDayAriaLabelPrefix:
                        a.props.chooseDayAriaLabelPrefix,
                      disabledDayAriaLabelPrefix:
                        a.props.disabledDayAriaLabelPrefix,
                      weekAriaLabelPrefix: a.props.weekAriaLabelPrefix,
                      monthAriaLabelPrefix: a.props.monthAriaLabelPrefix,
                      adjustDateOnChange: a.props.adjustDateOnChange,
                      setOpen: a.setOpen,
                      shouldCloseOnSelect: a.props.shouldCloseOnSelect,
                      dateFormat: a.props.dateFormatCalendar,
                      useWeekdaysShort: a.props.useWeekdaysShort,
                      formatWeekDay: a.props.formatWeekDay,
                      dropdownMode: a.props.dropdownMode,
                      selected: a.props.selected,
                      preSelection: a.state.preSelection,
                      onSelect: a.handleSelect,
                      onWeekSelect: a.props.onWeekSelect,
                      openToDate: a.props.openToDate,
                      minDate: a.props.minDate,
                      maxDate: a.props.maxDate,
                      selectsStart: a.props.selectsStart,
                      selectsEnd: a.props.selectsEnd,
                      selectsRange: a.props.selectsRange,
                      selectsMultiple: a.props.selectsMultiple,
                      selectedDates: a.props.selectedDates,
                      startDate: a.props.startDate,
                      endDate: a.props.endDate,
                      excludeDates: a.props.excludeDates,
                      excludeDateIntervals: a.props.excludeDateIntervals,
                      filterDate: a.props.filterDate,
                      onClickOutside: a.handleCalendarClickOutside,
                      formatWeekNumber: a.props.formatWeekNumber,
                      highlightDates: a.state.highlightDates,
                      includeDates: a.props.includeDates,
                      includeDateIntervals: a.props.includeDateIntervals,
                      includeTimes: a.props.includeTimes,
                      injectTimes: a.props.injectTimes,
                      inline: a.props.inline,
                      shouldFocusDayInline: a.state.shouldFocusDayInline,
                      peekNextMonth: a.props.peekNextMonth,
                      showMonthDropdown: a.props.showMonthDropdown,
                      showPreviousMonths: a.props.showPreviousMonths,
                      useShortMonthInDropdown: a.props.useShortMonthInDropdown,
                      showMonthYearDropdown: a.props.showMonthYearDropdown,
                      showWeekNumbers: a.props.showWeekNumbers,
                      showYearDropdown: a.props.showYearDropdown,
                      withPortal: a.props.withPortal,
                      forceShowMonthNavigation:
                        a.props.forceShowMonthNavigation,
                      showDisabledMonthNavigation:
                        a.props.showDisabledMonthNavigation,
                      scrollableYearDropdown: a.props.scrollableYearDropdown,
                      scrollableMonthYearDropdown:
                        a.props.scrollableMonthYearDropdown,
                      todayButton: a.props.todayButton,
                      weekLabel: a.props.weekLabel,
                      outsideClickIgnoreClass: oa,
                      fixedHeight: a.props.fixedHeight,
                      monthsShown: a.props.monthsShown,
                      monthSelectedIn: a.state.monthSelectedIn,
                      onDropdownFocus: a.handleDropdownFocus,
                      onMonthChange: a.props.onMonthChange,
                      onYearChange: a.props.onYearChange,
                      dayClassName: a.props.dayClassName,
                      weekDayClassName: a.props.weekDayClassName,
                      monthClassName: a.props.monthClassName,
                      timeClassName: a.props.timeClassName,
                      showTimeSelect: a.props.showTimeSelect,
                      showTimeSelectOnly: a.props.showTimeSelectOnly,
                      onTimeChange: a.handleTimeChange,
                      timeFormat: a.props.timeFormat,
                      timeIntervals: a.props.timeIntervals,
                      minTime: a.props.minTime,
                      maxTime: a.props.maxTime,
                      excludeTimes: a.props.excludeTimes,
                      filterTime: a.props.filterTime,
                      timeCaption: a.props.timeCaption,
                      className: a.props.calendarClassName,
                      container: a.props.calendarContainer,
                      yearItemNumber: a.props.yearItemNumber,
                      yearDropdownItemNumber: a.props.yearDropdownItemNumber,
                      previousMonthAriaLabel: a.props.previousMonthAriaLabel,
                      previousMonthButtonLabel:
                        a.props.previousMonthButtonLabel,
                      nextMonthAriaLabel: a.props.nextMonthAriaLabel,
                      nextMonthButtonLabel: a.props.nextMonthButtonLabel,
                      previousYearAriaLabel: a.props.previousYearAriaLabel,
                      previousYearButtonLabel: a.props.previousYearButtonLabel,
                      nextYearAriaLabel: a.props.nextYearAriaLabel,
                      nextYearButtonLabel: a.props.nextYearButtonLabel,
                      timeInputLabel: a.props.timeInputLabel,
                      disabledKeyboardNavigation:
                        a.props.disabledKeyboardNavigation,
                      renderCustomHeader: a.props.renderCustomHeader,
                      popperProps: a.props.popperProps,
                      renderDayContents: a.props.renderDayContents,
                      onDayMouseEnter: a.props.onDayMouseEnter,
                      onMonthMouseLeave: a.props.onMonthMouseLeave,
                      selectsDisabledDaysInRange:
                        a.props.selectsDisabledDaysInRange,
                      showTimeInput: a.props.showTimeInput,
                      showMonthYearPicker: a.props.showMonthYearPicker,
                      showFullMonthYearPicker: a.props.showFullMonthYearPicker,
                      showTwoColumnMonthYearPicker:
                        a.props.showTwoColumnMonthYearPicker,
                      showFourColumnMonthYearPicker:
                        a.props.showFourColumnMonthYearPicker,
                      showYearPicker: a.props.showYearPicker,
                      showQuarterYearPicker: a.props.showQuarterYearPicker,
                      showPopperArrow: a.props.showPopperArrow,
                      excludeScrollbar: a.props.excludeScrollbar,
                      handleOnKeyDown: a.props.onKeyDown,
                      handleOnDayKeyDown: a.onDayKeyDown,
                      isInputFocused: a.state.focused,
                      customTimeInput: a.props.customTimeInput,
                      setPreSelection: a.setPreSelection,
                    },
                    a.props.children
                  )
                : null;
            }),
            Mt(Ot(a), "renderAriaLiveRegion", function () {
              var e,
                t = a.props,
                r = t.dateFormat,
                n = t.locale,
                o =
                  a.props.showTimeInput || a.props.showTimeSelect
                    ? "PPPPp"
                    : "PPPP";
              return (
                (e = a.props.selectsRange
                  ? "Selected start date: "
                      .concat(
                        Vt(a.props.startDate, { dateFormat: o, locale: n }),
                        ". "
                      )
                      .concat(
                        a.props.endDate
                          ? "End date: " +
                              Vt(a.props.endDate, { dateFormat: o, locale: n })
                          : ""
                      )
                  : a.props.showTimeSelectOnly
                  ? "Selected time: ".concat(
                      Vt(a.props.selected, { dateFormat: r, locale: n })
                    )
                  : a.props.showYearPicker
                  ? "Selected year: ".concat(
                      Vt(a.props.selected, { dateFormat: "yyyy", locale: n })
                    )
                  : a.props.showMonthYearPicker
                  ? "Selected month: ".concat(
                      Vt(a.props.selected, {
                        dateFormat: "MMMM yyyy",
                        locale: n,
                      })
                    )
                  : a.props.showQuarterYearPicker
                  ? "Selected quarter: ".concat(
                      Vt(a.props.selected, {
                        dateFormat: "yyyy, QQQ",
                        locale: n,
                      })
                    )
                  : "Selected date: ".concat(
                      Vt(a.props.selected, { dateFormat: o, locale: n })
                    )),
                he.default.createElement(
                  "span",
                  {
                    role: "alert",
                    "aria-live": "polite",
                    className: "react-datepicker__aria-live",
                  },
                  a.state.isRenderAriaLiveMessage && e
                )
              );
            }),
            Mt(Ot(a), "renderDateInput", function () {
              var e,
                t = me.default(a.props.className, Mt({}, oa, a.state.open)),
                r =
                  a.props.customInput ||
                  he.default.createElement("input", { type: "text" }),
                n = a.props.customInputRef || "ref",
                o =
                  "string" == typeof a.props.value
                    ? a.props.value
                    : "string" == typeof a.state.inputValue
                    ? a.state.inputValue
                    : a.props.selectsRange
                    ? (function (e, t, r) {
                        if (!e) return "";
                        var a = Vt(e, r),
                          n = t ? Vt(t, r) : "";
                        return "".concat(a, " - ").concat(n);
                      })(a.props.startDate, a.props.endDate, a.props)
                    : a.props.selectsMultiple
                    ? (function (e, t) {
                        if (!e || !e.length) return "";
                        var r = Vt(e[0], t);
                        if (1 === e.length) return r;
                        if (2 === e.length) {
                          var a = Vt(e[1], t);
                          return "".concat(r, ", ").concat(a);
                        }
                        var n = e.length - 1;
                        return "".concat(r, " (+").concat(n, ")");
                      })(a.props.selectedDates, a.props)
                    : Vt(a.props.selected, a.props);
              return he.default.cloneElement(
                r,
                (Mt((e = {}), n, function (e) {
                  a.input = e;
                }),
                Mt(e, "value", o),
                Mt(e, "onBlur", a.handleBlur),
                Mt(e, "onChange", a.handleChange),
                Mt(e, "onClick", a.onInputClick),
                Mt(e, "onFocus", a.handleFocus),
                Mt(e, "onKeyDown", a.onInputKeyDown),
                Mt(e, "id", a.props.id),
                Mt(e, "name", a.props.name),
                Mt(e, "form", a.props.form),
                Mt(e, "autoFocus", a.props.autoFocus),
                Mt(e, "placeholder", a.props.placeholderText),
                Mt(e, "disabled", a.props.disabled),
                Mt(e, "autoComplete", a.props.autoComplete),
                Mt(e, "className", me.default(r.props.className, t)),
                Mt(e, "title", a.props.title),
                Mt(e, "readOnly", a.props.readOnly),
                Mt(e, "required", a.props.required),
                Mt(e, "tabIndex", a.props.tabIndex),
                Mt(e, "aria-describedby", a.props.ariaDescribedBy),
                Mt(e, "aria-invalid", a.props.ariaInvalid),
                Mt(e, "aria-labelledby", a.props.ariaLabelledBy),
                Mt(e, "aria-required", a.props.ariaRequired),
                e)
              );
            }),
            Mt(Ot(a), "renderClearButton", function () {
              var e = a.props,
                t = e.isClearable,
                r = e.selected,
                n = e.startDate,
                o = e.endDate,
                s = e.clearButtonTitle,
                i = e.clearButtonClassName,
                p = void 0 === i ? "" : i,
                l = e.ariaLabelClose,
                c = void 0 === l ? "Close" : l;
              return !t || (null == r && null == n && null == o)
                ? null
                : he.default.createElement("button", {
                    type: "button",
                    className: "react-datepicker__close-icon ".concat(p).trim(),
                    "aria-label": c,
                    onClick: a.onClearClick,
                    title: s,
                    tabIndex: -1,
                  });
            }),
            (a.state = a.calcInitialState()),
            a
          );
        }
        return (
          _t(
            r,
            [
              {
                key: "componentDidMount",
                value: function () {
                  window.addEventListener("scroll", this.onScroll, !0);
                },
              },
              {
                key: "componentDidUpdate",
                value: function (e, t) {
                  var r, a;
                  e.inline &&
                    ((r = e.selected),
                    (a = this.props.selected),
                    r && a
                      ? Fe.default(r) !== Fe.default(a) ||
                        qe.default(r) !== qe.default(a)
                      : r !== a) &&
                    this.setPreSelection(this.props.selected),
                    void 0 !== this.state.monthSelectedIn &&
                      e.monthsShown !== this.props.monthsShown &&
                      this.setState({ monthSelectedIn: 0 }),
                    e.highlightDates !== this.props.highlightDates &&
                      this.setState({
                        highlightDates: xr(this.props.highlightDates),
                      }),
                    t.focused ||
                      sr(e.selected, this.props.selected) ||
                      this.setState({ inputValue: null }),
                    t.open !== this.state.open &&
                      (!1 === t.open &&
                        !0 === this.state.open &&
                        this.props.onCalendarOpen(),
                      !0 === t.open &&
                        !1 === this.state.open &&
                        this.props.onCalendarClose());
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  this.clearPreventFocusTimeout(),
                    window.removeEventListener("scroll", this.onScroll, !0);
                },
              },
              {
                key: "renderInputContainer",
                value: function () {
                  var e = this.props.showIcon;
                  return he.default.createElement(
                    "div",
                    {
                      className: "react-datepicker__input-container ".concat(
                        e ? "react-datepicker__view-calendar-icon" : ""
                      ),
                    },
                    e &&
                      he.default.createElement(
                        "svg",
                        {
                          className: "react-datepicker__calendar-icon",
                          xmlns: "http://www.w3.org/2000/svg",
                          viewBox: "0 0 448 512",
                        },
                        he.default.createElement("path", {
                          d: "M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z",
                        })
                      ),
                    this.renderAriaLiveRegion(),
                    this.renderDateInput(),
                    this.renderClearButton()
                  );
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.renderCalendar();
                  if (this.props.inline) return e;
                  if (this.props.withPortal) {
                    var t = this.state.open
                      ? he.default.createElement(
                          aa,
                          { enableTabLoop: this.props.enableTabLoop },
                          he.default.createElement(
                            "div",
                            {
                              className: "react-datepicker__portal",
                              tabIndex: -1,
                              onKeyDown: this.onPortalKeyDown,
                            },
                            e
                          )
                        )
                      : null;
                    return (
                      this.state.open &&
                        this.props.portalId &&
                        (t = he.default.createElement(
                          ta,
                          {
                            portalId: this.props.portalId,
                            portalHost: this.props.portalHost,
                          },
                          t
                        )),
                      he.default.createElement(
                        "div",
                        null,
                        this.renderInputContainer(),
                        t
                      )
                    );
                  }
                  return he.default.createElement(na, {
                    className: this.props.popperClassName,
                    wrapperClassName: this.props.wrapperClassName,
                    hidePopper: !this.isCalendarOpen(),
                    portalId: this.props.portalId,
                    portalHost: this.props.portalHost,
                    popperModifiers: this.props.popperModifiers,
                    targetComponent: this.renderInputContainer(),
                    popperContainer: this.props.popperContainer,
                    popperComponent: e,
                    popperPlacement: this.props.popperPlacement,
                    popperProps: this.props.popperProps,
                    popperOnKeyDown: this.onPopperKeyDown,
                    enableTabLoop: this.props.enableTabLoop,
                  });
                },
              },
            ],
            [
              {
                key: "defaultProps",
                get: function () {
                  return {
                    allowSameDay: !1,
                    dateFormat: "MM/dd/yyyy",
                    dateFormatCalendar: "LLLL yyyy",
                    onChange: function () {},
                    disabled: !1,
                    disabledKeyboardNavigation: !1,
                    dropdownMode: "scroll",
                    onFocus: function () {},
                    onBlur: function () {},
                    onKeyDown: function () {},
                    onInputClick: function () {},
                    onSelect: function () {},
                    onClickOutside: function () {},
                    onMonthChange: function () {},
                    onCalendarOpen: function () {},
                    onCalendarClose: function () {},
                    preventOpenOnFocus: !1,
                    onYearChange: function () {},
                    onInputError: function () {},
                    monthsShown: 1,
                    readOnly: !1,
                    withPortal: !1,
                    selectsDisabledDaysInRange: !1,
                    shouldCloseOnSelect: !0,
                    showTimeSelect: !1,
                    showTimeInput: !1,
                    showPreviousMonths: !1,
                    showMonthYearPicker: !1,
                    showFullMonthYearPicker: !1,
                    showTwoColumnMonthYearPicker: !1,
                    showFourColumnMonthYearPicker: !1,
                    showYearPicker: !1,
                    showQuarterYearPicker: !1,
                    strictParsing: !1,
                    timeIntervals: 30,
                    timeCaption: "Time",
                    previousMonthAriaLabel: "Previous Month",
                    previousMonthButtonLabel: "Previous Month",
                    nextMonthAriaLabel: "Next Month",
                    nextMonthButtonLabel: "Next Month",
                    previousYearAriaLabel: "Previous Year",
                    previousYearButtonLabel: "Previous Year",
                    nextYearAriaLabel: "Next Year",
                    nextYearButtonLabel: "Next Year",
                    timeInputLabel: "Time",
                    enableTabLoop: !0,
                    yearItemNumber: Kt,
                    renderDayContents: function (e) {
                      return e;
                    },
                    focusSelectedMonth: !1,
                    showPopperArrow: !0,
                    excludeScrollbar: !0,
                    customTimeInput: null,
                    calendarStartDay: void 0,
                  };
                },
              },
            ]
          ),
          r
        );
      })(he.default.Component),
      la = "input",
      ca = "navigate";
    (e.CalendarContainer = Xr),
      (e.default = pa),
      (e.getDefaultLocale = pr),
      (e.registerLocale = function (e, t) {
        var r = "undefined" != typeof window ? window : globalThis;
        r.__localeData__ || (r.__localeData__ = {}), (r.__localeData__[e] = t);
      }),
      (e.setDefaultLocale = function (e) {
        ("undefined" != typeof window ? window : globalThis).__localeId__ = e;
      }),
      Object.defineProperty(e, "__esModule", { value: !0 });
  }
);
