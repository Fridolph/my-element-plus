import { library as yn } from "@fortawesome/fontawesome-svg-core";
import { fas as bn } from "@fortawesome/free-solid-svg-icons";
import { defineComponent as F, computed as k, openBlock as h, createElementBlock as $, mergeProps as oe, createVNode as C, unref as R, normalizeProps as $n, guardReactiveProps as Tn, ref as _, normalizeClass as L, createBlock as U, createCommentVNode as E, createElementVNode as j, renderSlot as P, watch as H, provide as ze, inject as Ue, toDisplayString as fe, Transition as He, toHandlers as Ve, withCtx as ne, withDirectives as ke, vShow as Vt, onMounted as ve, onUnmounted as Ge, reactive as Ie, normalizeStyle as Mt, createTextVNode as Nt, Fragment as Ke, useAttrs as wn, vModelDynamic as _n, withModifiers as se, vModelText as On, nextTick as Dt, shallowReactive as xn, h as kn, render as it, isRef as In, onBeforeUnmount as Sn, renderList as jn, withKeys as An } from "vue";
import { FontAwesomeIcon as Cn } from "@fortawesome/vue-fontawesome";
import { createPopper as En } from "@popperjs/core";
import Pn from "async-validator";
var Lt = typeof global == "object" && global && global.Object === Object && global, Bn = typeof self == "object" && self && self.Object === Object && self, N = Lt || Bn || Function("return this")(), z = N.Symbol, Rt = Object.prototype, Fn = Rt.hasOwnProperty, Vn = Rt.toString, le = z ? z.toStringTag : void 0;
function Mn(e) {
  var t = Fn.call(e, le), n = e[le];
  try {
    e[le] = void 0;
    var r = !0;
  } catch {
  }
  var o = Vn.call(e);
  return r && (t ? e[le] = n : delete e[le]), o;
}
var Nn = Object.prototype, Dn = Nn.toString;
function Ln(e) {
  return Dn.call(e);
}
var Rn = "[object Null]", zn = "[object Undefined]", lt = z ? z.toStringTag : void 0;
function Y(e) {
  return e == null ? e === void 0 ? zn : Rn : lt && lt in Object(e) ? Mn(e) : Ln(e);
}
function J(e) {
  return e != null && typeof e == "object";
}
var Un = "[object Symbol]";
function Ae(e) {
  return typeof e == "symbol" || J(e) && Y(e) == Un;
}
function zt(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = Array(r); ++n < r; )
    o[n] = t(e[n], n, e);
  return o;
}
var Q = Array.isArray, Hn = 1 / 0, st = z ? z.prototype : void 0, ut = st ? st.toString : void 0;
function Ut(e) {
  if (typeof e == "string")
    return e;
  if (Q(e))
    return zt(e, Ut) + "";
  if (Ae(e))
    return ut ? ut.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -Hn ? "-0" : t;
}
var Gn = /\s/;
function Kn(e) {
  for (var t = e.length; t-- && Gn.test(e.charAt(t)); )
    ;
  return t;
}
var Wn = /^\s+/;
function qn(e) {
  return e && e.slice(0, Kn(e) + 1).replace(Wn, "");
}
function K(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var ct = NaN, Zn = /^[-+]0x[0-9a-f]+$/i, Xn = /^0b[01]+$/i, Yn = /^0o[0-7]+$/i, Jn = parseInt;
function dt(e) {
  if (typeof e == "number")
    return e;
  if (Ae(e))
    return ct;
  if (K(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = K(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = qn(e);
  var n = Xn.test(e);
  return n || Yn.test(e) ? Jn(e.slice(2), n ? 2 : 8) : Zn.test(e) ? ct : +e;
}
function Qn(e) {
  return e;
}
var er = "[object AsyncFunction]", tr = "[object Function]", nr = "[object GeneratorFunction]", rr = "[object Proxy]";
function Se(e) {
  if (!K(e))
    return !1;
  var t = Y(e);
  return t == tr || t == nr || t == er || t == rr;
}
var Pe = N["__core-js_shared__"], ft = function() {
  var e = /[^.]+$/.exec(Pe && Pe.keys && Pe.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function or(e) {
  return !!ft && ft in e;
}
var ar = Function.prototype, ir = ar.toString;
function ee(e) {
  if (e != null) {
    try {
      return ir.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var lr = /[\\^$.*+?()[\]{}|]/g, sr = /^\[object .+?Constructor\]$/, ur = Function.prototype, cr = Object.prototype, dr = ur.toString, fr = cr.hasOwnProperty, pr = RegExp(
  "^" + dr.call(fr).replace(lr, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function hr(e) {
  if (!K(e) || or(e))
    return !1;
  var t = Se(e) ? pr : sr;
  return t.test(ee(e));
}
function vr(e, t) {
  return e == null ? void 0 : e[t];
}
function te(e, t) {
  var n = vr(e, t);
  return hr(n) ? n : void 0;
}
var Me = te(N, "WeakMap"), pt = Object.create, gr = /* @__PURE__ */ function() {
  function e() {
  }
  return function(t) {
    if (!K(t))
      return {};
    if (pt)
      return pt(t);
    e.prototype = t;
    var n = new e();
    return e.prototype = void 0, n;
  };
}();
function mr(e, t, n) {
  switch (n.length) {
    case 0:
      return e.call(t);
    case 1:
      return e.call(t, n[0]);
    case 2:
      return e.call(t, n[0], n[1]);
    case 3:
      return e.call(t, n[0], n[1], n[2]);
  }
  return e.apply(t, n);
}
function yr(e, t) {
  var n = -1, r = e.length;
  for (t || (t = Array(r)); ++n < r; )
    t[n] = e[n];
  return t;
}
var br = 800, $r = 16, Tr = Date.now;
function wr(e) {
  var t = 0, n = 0;
  return function() {
    var r = Tr(), o = $r - (r - n);
    if (n = r, o > 0) {
      if (++t >= br)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function _r(e) {
  return function() {
    return e;
  };
}
var je = function() {
  try {
    var e = te(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), Or = je ? function(e, t) {
  return je(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: _r(t),
    writable: !0
  });
} : Qn;
const xr = Or;
var kr = wr(xr);
function Ir(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r && t(e[n], n, e) !== !1; )
    ;
  return e;
}
var Sr = 9007199254740991, jr = /^(?:0|[1-9]\d*)$/;
function Ar(e, t) {
  var n = typeof e;
  return t = t ?? Sr, !!t && (n == "number" || n != "symbol" && jr.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function Ht(e, t, n) {
  t == "__proto__" && je ? je(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
function Gt(e, t) {
  return e === t || e !== e && t !== t;
}
var Cr = Object.prototype, Er = Cr.hasOwnProperty;
function Kt(e, t, n) {
  var r = e[t];
  (!(Er.call(e, t) && Gt(r, n)) || n === void 0 && !(t in e)) && Ht(e, t, n);
}
function ge(e, t, n, r) {
  var o = !n;
  n || (n = {});
  for (var l = -1, i = t.length; ++l < i; ) {
    var a = t[l], s = r ? r(n[a], e[a], a, n, e) : void 0;
    s === void 0 && (s = e[a]), o ? Ht(n, a, s) : Kt(n, a, s);
  }
  return n;
}
var ht = Math.max;
function Pr(e, t, n) {
  return t = ht(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var r = arguments, o = -1, l = ht(r.length - t, 0), i = Array(l); ++o < l; )
      i[o] = r[t + o];
    o = -1;
    for (var a = Array(t + 1); ++o < t; )
      a[o] = r[o];
    return a[t] = n(i), mr(e, this, a);
  };
}
var Br = 9007199254740991;
function Wt(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Br;
}
function qt(e) {
  return e != null && Wt(e.length) && !Se(e);
}
var Fr = Object.prototype;
function We(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || Fr;
  return e === n;
}
function Vr(e, t) {
  for (var n = -1, r = Array(e); ++n < e; )
    r[n] = t(n);
  return r;
}
var Mr = "[object Arguments]";
function vt(e) {
  return J(e) && Y(e) == Mr;
}
var Zt = Object.prototype, Nr = Zt.hasOwnProperty, Dr = Zt.propertyIsEnumerable, Xt = vt(/* @__PURE__ */ function() {
  return arguments;
}()) ? vt : function(e) {
  return J(e) && Nr.call(e, "callee") && !Dr.call(e, "callee");
};
function Lr() {
  return !1;
}
var Yt = typeof exports == "object" && exports && !exports.nodeType && exports, gt = Yt && typeof module == "object" && module && !module.nodeType && module, Rr = gt && gt.exports === Yt, mt = Rr ? N.Buffer : void 0, zr = mt ? mt.isBuffer : void 0, Jt = zr || Lr, Ur = "[object Arguments]", Hr = "[object Array]", Gr = "[object Boolean]", Kr = "[object Date]", Wr = "[object Error]", qr = "[object Function]", Zr = "[object Map]", Xr = "[object Number]", Yr = "[object Object]", Jr = "[object RegExp]", Qr = "[object Set]", eo = "[object String]", to = "[object WeakMap]", no = "[object ArrayBuffer]", ro = "[object DataView]", oo = "[object Float32Array]", ao = "[object Float64Array]", io = "[object Int8Array]", lo = "[object Int16Array]", so = "[object Int32Array]", uo = "[object Uint8Array]", co = "[object Uint8ClampedArray]", fo = "[object Uint16Array]", po = "[object Uint32Array]", b = {};
b[oo] = b[ao] = b[io] = b[lo] = b[so] = b[uo] = b[co] = b[fo] = b[po] = !0;
b[Ur] = b[Hr] = b[no] = b[Gr] = b[ro] = b[Kr] = b[Wr] = b[qr] = b[Zr] = b[Xr] = b[Yr] = b[Jr] = b[Qr] = b[eo] = b[to] = !1;
function ho(e) {
  return J(e) && Wt(e.length) && !!b[Y(e)];
}
function qe(e) {
  return function(t) {
    return e(t);
  };
}
var Qt = typeof exports == "object" && exports && !exports.nodeType && exports, ue = Qt && typeof module == "object" && module && !module.nodeType && module, vo = ue && ue.exports === Qt, Be = vo && Lt.process, ae = function() {
  try {
    var e = ue && ue.require && ue.require("util").types;
    return e || Be && Be.binding && Be.binding("util");
  } catch {
  }
}(), yt = ae && ae.isTypedArray, go = yt ? qe(yt) : ho, mo = Object.prototype, yo = mo.hasOwnProperty;
function en(e, t) {
  var n = Q(e), r = !n && Xt(e), o = !n && !r && Jt(e), l = !n && !r && !o && go(e), i = n || r || o || l, a = i ? Vr(e.length, String) : [], s = a.length;
  for (var u in e)
    (t || yo.call(e, u)) && !(i && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    l && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    Ar(u, s))) && a.push(u);
  return a;
}
function tn(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var bo = tn(Object.keys, Object), $o = Object.prototype, To = $o.hasOwnProperty;
function wo(e) {
  if (!We(e))
    return bo(e);
  var t = [];
  for (var n in Object(e))
    To.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function Ze(e) {
  return qt(e) ? en(e) : wo(e);
}
function _o(e) {
  var t = [];
  if (e != null)
    for (var n in Object(e))
      t.push(n);
  return t;
}
var Oo = Object.prototype, xo = Oo.hasOwnProperty;
function ko(e) {
  if (!K(e))
    return _o(e);
  var t = We(e), n = [];
  for (var r in e)
    r == "constructor" && (t || !xo.call(e, r)) || n.push(r);
  return n;
}
function Xe(e) {
  return qt(e) ? en(e, !0) : ko(e);
}
var Io = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, So = /^\w*$/;
function jo(e, t) {
  if (Q(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || Ae(e) ? !0 : So.test(e) || !Io.test(e) || t != null && e in Object(t);
}
var pe = te(Object, "create");
function Ao() {
  this.__data__ = pe ? pe(null) : {}, this.size = 0;
}
function Co(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Eo = "__lodash_hash_undefined__", Po = Object.prototype, Bo = Po.hasOwnProperty;
function Fo(e) {
  var t = this.__data__;
  if (pe) {
    var n = t[e];
    return n === Eo ? void 0 : n;
  }
  return Bo.call(t, e) ? t[e] : void 0;
}
var Vo = Object.prototype, Mo = Vo.hasOwnProperty;
function No(e) {
  var t = this.__data__;
  return pe ? t[e] !== void 0 : Mo.call(t, e);
}
var Do = "__lodash_hash_undefined__";
function Lo(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = pe && t === void 0 ? Do : t, this;
}
function X(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
X.prototype.clear = Ao;
X.prototype.delete = Co;
X.prototype.get = Fo;
X.prototype.has = No;
X.prototype.set = Lo;
function Ro() {
  this.__data__ = [], this.size = 0;
}
function Ce(e, t) {
  for (var n = e.length; n--; )
    if (Gt(e[n][0], t))
      return n;
  return -1;
}
var zo = Array.prototype, Uo = zo.splice;
function Ho(e) {
  var t = this.__data__, n = Ce(t, e);
  if (n < 0)
    return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : Uo.call(t, n, 1), --this.size, !0;
}
function Go(e) {
  var t = this.__data__, n = Ce(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function Ko(e) {
  return Ce(this.__data__, e) > -1;
}
function Wo(e, t) {
  var n = this.__data__, r = Ce(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
function G(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
G.prototype.clear = Ro;
G.prototype.delete = Ho;
G.prototype.get = Go;
G.prototype.has = Ko;
G.prototype.set = Wo;
var he = te(N, "Map");
function qo() {
  this.size = 0, this.__data__ = {
    hash: new X(),
    map: new (he || G)(),
    string: new X()
  };
}
function Zo(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function Ee(e, t) {
  var n = e.__data__;
  return Zo(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function Xo(e) {
  var t = Ee(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function Yo(e) {
  return Ee(this, e).get(e);
}
function Jo(e) {
  return Ee(this, e).has(e);
}
function Qo(e, t) {
  var n = Ee(this, e), r = n.size;
  return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
function W(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
W.prototype.clear = qo;
W.prototype.delete = Xo;
W.prototype.get = Yo;
W.prototype.has = Jo;
W.prototype.set = Qo;
var ea = "Expected a function";
function Ye(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(ea);
  var n = function() {
    var r = arguments, o = t ? t.apply(this, r) : r[0], l = n.cache;
    if (l.has(o))
      return l.get(o);
    var i = e.apply(this, r);
    return n.cache = l.set(o, i) || l, i;
  };
  return n.cache = new (Ye.Cache || W)(), n;
}
Ye.Cache = W;
var ta = 500;
function na(e) {
  var t = Ye(e, function(r) {
    return n.size === ta && n.clear(), r;
  }), n = t.cache;
  return t;
}
var ra = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, oa = /\\(\\)?/g, aa = na(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(ra, function(n, r, o, l) {
    t.push(o ? l.replace(oa, "$1") : r || n);
  }), t;
});
function ia(e) {
  return e == null ? "" : Ut(e);
}
function Je(e, t) {
  return Q(e) ? e : jo(e, t) ? [e] : aa(ia(e));
}
var la = 1 / 0;
function nn(e) {
  if (typeof e == "string" || Ae(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -la ? "-0" : t;
}
function sa(e, t) {
  t = Je(t, e);
  for (var n = 0, r = t.length; e != null && n < r; )
    e = e[nn(t[n++])];
  return n && n == r ? e : void 0;
}
function Qe(e, t) {
  for (var n = -1, r = t.length, o = e.length; ++n < r; )
    e[o + n] = t[n];
  return e;
}
var bt = z ? z.isConcatSpreadable : void 0;
function ua(e) {
  return Q(e) || Xt(e) || !!(bt && e && e[bt]);
}
function rn(e, t, n, r, o) {
  var l = -1, i = e.length;
  for (n || (n = ua), o || (o = []); ++l < i; ) {
    var a = e[l];
    t > 0 && n(a) ? t > 1 ? rn(a, t - 1, n, r, o) : Qe(o, a) : r || (o[o.length] = a);
  }
  return o;
}
function ca(e) {
  var t = e == null ? 0 : e.length;
  return t ? rn(e, 1) : [];
}
function da(e) {
  return kr(Pr(e, void 0, ca), e + "");
}
var et = tn(Object.getPrototypeOf, Object), fa = "[object Object]", pa = Function.prototype, ha = Object.prototype, on = pa.toString, va = ha.hasOwnProperty, ga = on.call(Object);
function ma(e) {
  if (!J(e) || Y(e) != fa)
    return !1;
  var t = et(e);
  if (t === null)
    return !0;
  var n = va.call(t, "constructor") && t.constructor;
  return typeof n == "function" && n instanceof n && on.call(n) == ga;
}
function ya(e, t, n) {
  var r = -1, o = e.length;
  t < 0 && (t = -t > o ? 0 : o + t), n = n > o ? o : n, n < 0 && (n += o), o = t > n ? 0 : n - t >>> 0, t >>>= 0;
  for (var l = Array(o); ++r < o; )
    l[r] = e[r + t];
  return l;
}
function ba() {
  this.__data__ = new G(), this.size = 0;
}
function $a(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
function Ta(e) {
  return this.__data__.get(e);
}
function wa(e) {
  return this.__data__.has(e);
}
var _a = 200;
function Oa(e, t) {
  var n = this.__data__;
  if (n instanceof G) {
    var r = n.__data__;
    if (!he || r.length < _a - 1)
      return r.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new W(r);
  }
  return n.set(e, t), this.size = n.size, this;
}
function ie(e) {
  var t = this.__data__ = new G(e);
  this.size = t.size;
}
ie.prototype.clear = ba;
ie.prototype.delete = $a;
ie.prototype.get = Ta;
ie.prototype.has = wa;
ie.prototype.set = Oa;
function xa(e, t) {
  return e && ge(t, Ze(t), e);
}
function ka(e, t) {
  return e && ge(t, Xe(t), e);
}
var an = typeof exports == "object" && exports && !exports.nodeType && exports, $t = an && typeof module == "object" && module && !module.nodeType && module, Ia = $t && $t.exports === an, Tt = Ia ? N.Buffer : void 0, wt = Tt ? Tt.allocUnsafe : void 0;
function Sa(e, t) {
  if (t)
    return e.slice();
  var n = e.length, r = wt ? wt(n) : new e.constructor(n);
  return e.copy(r), r;
}
function ja(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = 0, l = []; ++n < r; ) {
    var i = e[n];
    t(i, n, e) && (l[o++] = i);
  }
  return l;
}
function ln() {
  return [];
}
var Aa = Object.prototype, Ca = Aa.propertyIsEnumerable, _t = Object.getOwnPropertySymbols, tt = _t ? function(e) {
  return e == null ? [] : (e = Object(e), ja(_t(e), function(t) {
    return Ca.call(e, t);
  }));
} : ln;
function Ea(e, t) {
  return ge(e, tt(e), t);
}
var Pa = Object.getOwnPropertySymbols, Ba = Pa ? function(e) {
  for (var t = []; e; )
    Qe(t, tt(e)), e = et(e);
  return t;
} : ln;
const sn = Ba;
function Fa(e, t) {
  return ge(e, sn(e), t);
}
function un(e, t, n) {
  var r = t(e);
  return Q(e) ? r : Qe(r, n(e));
}
function Va(e) {
  return un(e, Ze, tt);
}
function cn(e) {
  return un(e, Xe, sn);
}
var Ne = te(N, "DataView"), De = te(N, "Promise"), Le = te(N, "Set"), Ot = "[object Map]", Ma = "[object Object]", xt = "[object Promise]", kt = "[object Set]", It = "[object WeakMap]", St = "[object DataView]", Na = ee(Ne), Da = ee(he), La = ee(De), Ra = ee(Le), za = ee(Me), q = Y;
(Ne && q(new Ne(new ArrayBuffer(1))) != St || he && q(new he()) != Ot || De && q(De.resolve()) != xt || Le && q(new Le()) != kt || Me && q(new Me()) != It) && (q = function(e) {
  var t = Y(e), n = t == Ma ? e.constructor : void 0, r = n ? ee(n) : "";
  if (r)
    switch (r) {
      case Na:
        return St;
      case Da:
        return Ot;
      case La:
        return xt;
      case Ra:
        return kt;
      case za:
        return It;
    }
  return t;
});
const nt = q;
var Ua = Object.prototype, Ha = Ua.hasOwnProperty;
function Ga(e) {
  var t = e.length, n = new e.constructor(t);
  return t && typeof e[0] == "string" && Ha.call(e, "index") && (n.index = e.index, n.input = e.input), n;
}
var jt = N.Uint8Array;
function rt(e) {
  var t = new e.constructor(e.byteLength);
  return new jt(t).set(new jt(e)), t;
}
function Ka(e, t) {
  var n = t ? rt(e.buffer) : e.buffer;
  return new e.constructor(n, e.byteOffset, e.byteLength);
}
var Wa = /\w*$/;
function qa(e) {
  var t = new e.constructor(e.source, Wa.exec(e));
  return t.lastIndex = e.lastIndex, t;
}
var At = z ? z.prototype : void 0, Ct = At ? At.valueOf : void 0;
function Za(e) {
  return Ct ? Object(Ct.call(e)) : {};
}
function Xa(e, t) {
  var n = t ? rt(e.buffer) : e.buffer;
  return new e.constructor(n, e.byteOffset, e.length);
}
var Ya = "[object Boolean]", Ja = "[object Date]", Qa = "[object Map]", ei = "[object Number]", ti = "[object RegExp]", ni = "[object Set]", ri = "[object String]", oi = "[object Symbol]", ai = "[object ArrayBuffer]", ii = "[object DataView]", li = "[object Float32Array]", si = "[object Float64Array]", ui = "[object Int8Array]", ci = "[object Int16Array]", di = "[object Int32Array]", fi = "[object Uint8Array]", pi = "[object Uint8ClampedArray]", hi = "[object Uint16Array]", vi = "[object Uint32Array]";
function gi(e, t, n) {
  var r = e.constructor;
  switch (t) {
    case ai:
      return rt(e);
    case Ya:
    case Ja:
      return new r(+e);
    case ii:
      return Ka(e, n);
    case li:
    case si:
    case ui:
    case ci:
    case di:
    case fi:
    case pi:
    case hi:
    case vi:
      return Xa(e, n);
    case Qa:
      return new r();
    case ei:
    case ri:
      return new r(e);
    case ti:
      return qa(e);
    case ni:
      return new r();
    case oi:
      return Za(e);
  }
}
function mi(e) {
  return typeof e.constructor == "function" && !We(e) ? gr(et(e)) : {};
}
var yi = "[object Map]";
function bi(e) {
  return J(e) && nt(e) == yi;
}
var Et = ae && ae.isMap, $i = Et ? qe(Et) : bi, Ti = "[object Set]";
function wi(e) {
  return J(e) && nt(e) == Ti;
}
var Pt = ae && ae.isSet, _i = Pt ? qe(Pt) : wi, Oi = 1, xi = 2, ki = 4, dn = "[object Arguments]", Ii = "[object Array]", Si = "[object Boolean]", ji = "[object Date]", Ai = "[object Error]", fn = "[object Function]", Ci = "[object GeneratorFunction]", Ei = "[object Map]", Pi = "[object Number]", pn = "[object Object]", Bi = "[object RegExp]", Fi = "[object Set]", Vi = "[object String]", Mi = "[object Symbol]", Ni = "[object WeakMap]", Di = "[object ArrayBuffer]", Li = "[object DataView]", Ri = "[object Float32Array]", zi = "[object Float64Array]", Ui = "[object Int8Array]", Hi = "[object Int16Array]", Gi = "[object Int32Array]", Ki = "[object Uint8Array]", Wi = "[object Uint8ClampedArray]", qi = "[object Uint16Array]", Zi = "[object Uint32Array]", y = {};
y[dn] = y[Ii] = y[Di] = y[Li] = y[Si] = y[ji] = y[Ri] = y[zi] = y[Ui] = y[Hi] = y[Gi] = y[Ei] = y[Pi] = y[pn] = y[Bi] = y[Fi] = y[Vi] = y[Mi] = y[Ki] = y[Wi] = y[qi] = y[Zi] = !0;
y[Ai] = y[fn] = y[Ni] = !1;
function me(e, t, n, r, o, l) {
  var i, a = t & Oi, s = t & xi, u = t & ki;
  if (n && (i = o ? n(e, r, o, l) : n(e)), i !== void 0)
    return i;
  if (!K(e))
    return e;
  var d = Q(e);
  if (d) {
    if (i = Ga(e), !a)
      return yr(e, i);
  } else {
    var f = nt(e), T = f == fn || f == Ci;
    if (Jt(e))
      return Sa(e, a);
    if (f == pn || f == dn || T && !o) {
      if (i = s || T ? {} : mi(e), !a)
        return s ? Fa(e, ka(i, e)) : Ea(e, xa(i, e));
    } else {
      if (!y[f])
        return o ? e : {};
      i = gi(e, f, a);
    }
  }
  l || (l = new ie());
  var x = l.get(e);
  if (x)
    return x;
  l.set(e, i), _i(e) ? e.forEach(function(g) {
    i.add(me(g, t, n, g, e, l));
  }) : $i(e) && e.forEach(function(g, v) {
    i.set(v, me(g, t, n, v, e, l));
  });
  var p = u ? s ? cn : Va : s ? Xe : Ze, O = d ? void 0 : p(e);
  return Ir(O || e, function(g, v) {
    O && (v = g, g = e[v]), Kt(i, v, me(g, t, n, v, e, l));
  }), i;
}
var Fe = function() {
  return N.Date.now();
}, Xi = "Expected a function", Yi = Math.max, Ji = Math.min;
function Re(e, t, n) {
  var r, o, l, i, a, s, u = 0, d = !1, f = !1, T = !0;
  if (typeof e != "function")
    throw new TypeError(Xi);
  t = dt(t) || 0, K(n) && (d = !!n.leading, f = "maxWait" in n, l = f ? Yi(dt(n.maxWait) || 0, t) : l, T = "trailing" in n ? !!n.trailing : T);
  function x(m) {
    var V = r, c = o;
    return r = o = void 0, u = m, i = e.apply(c, V), i;
  }
  function p(m) {
    return u = m, a = setTimeout(v, t), d ? x(m) : i;
  }
  function O(m) {
    var V = m - s, c = m - u, w = t - V;
    return f ? Ji(w, l - c) : w;
  }
  function g(m) {
    var V = m - s, c = m - u;
    return s === void 0 || V >= t || V < 0 || f && c >= l;
  }
  function v() {
    var m = Fe();
    if (g(m))
      return I(m);
    a = setTimeout(v, O(m));
  }
  function I(m) {
    return a = void 0, T && r ? x(m) : (r = o = void 0, i);
  }
  function M() {
    a !== void 0 && clearTimeout(a), u = 0, r = s = o = a = void 0;
  }
  function D() {
    return a === void 0 ? i : I(Fe());
  }
  function A() {
    var m = Fe(), V = g(m);
    if (r = arguments, o = this, s = m, V) {
      if (a === void 0)
        return p(s);
      if (f)
        return clearTimeout(a), a = setTimeout(v, t), x(s);
    }
    return a === void 0 && (a = setTimeout(v, t)), i;
  }
  return A.cancel = M, A.flush = D, A;
}
function Qi(e) {
  var t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
function el(e, t) {
  return t.length < 2 ? e : sa(e, ya(t, 0, -1));
}
function Bt(e) {
  return e == null;
}
function tl(e, t) {
  return t = Je(t, e), e = el(e, t), e == null || delete e[nn(Qi(t))];
}
function nl(e) {
  return ma(e) ? void 0 : e;
}
var rl = 1, ol = 2, al = 4, il = da(function(e, t) {
  var n = {};
  if (e == null)
    return n;
  var r = !1;
  t = zt(t, function(l) {
    return l = Je(l, e), r || (r = l.length > 1), l;
  }), ge(e, cn(e), n), r && (n = me(n, rl | ol | al, nl));
  for (var o = t.length; o--; )
    tl(n, t[o]);
  return n;
});
const B = /* @__PURE__ */ F({
  name: "VkIcon",
  inheritAttrs: !1,
  __name: "Icon",
  props: {
    border: { type: Boolean },
    fixedWidth: { type: Boolean },
    flip: null,
    icon: null,
    mask: null,
    maskId: null,
    listItem: { type: Boolean },
    pull: null,
    pulse: { type: Boolean },
    rotation: null,
    swapOpacity: { type: Boolean },
    size: null,
    spin: { type: Boolean },
    transform: null,
    symbol: { type: [Boolean, String] },
    title: null,
    titleId: null,
    inverse: { type: Boolean },
    bounce: { type: Boolean },
    shake: { type: Boolean },
    beat: { type: Boolean },
    fade: { type: Boolean },
    beatFade: { type: Boolean },
    spinPulse: { type: Boolean },
    spinReverse: { type: Boolean },
    type: null,
    color: null
  },
  setup(e) {
    const t = e, n = k(() => il(t, ["type", "color"])), r = k(() => t.color ? { color: t.color } : {});
    return (o, l) => (h(), $("i", oe({
      class: ["vk-icon", { [`vk-icon--${e.type}`]: e.type }],
      style: r.value
    }, o.$attrs), [
      C(R(Cn), $n(Tn(n.value)), null, 16)
    ], 16));
  }
}), ll = ["disabled", "autofocus", "type"], ye = /* @__PURE__ */ F({
  name: "VkButton",
  __name: "Button",
  props: {
    type: null,
    size: null,
    plain: { type: Boolean },
    round: { type: Boolean },
    circle: { type: Boolean },
    disabled: { type: Boolean },
    nativeType: { default: "button" },
    autofocus: { type: Boolean },
    icon: null,
    loading: { type: Boolean }
  },
  setup(e, { expose: t }) {
    const n = _();
    return t({
      ref: n
    }), (r, o) => (h(), $("button", {
      ref_key: "_ref",
      ref: n,
      class: L(["vk-button", {
        [`vk-button--${e.type}`]: e.type,
        [`vk-button--${e.size}`]: e.size,
        "is-plain": e.plain,
        "is-round": e.round,
        "is-circle": e.circle,
        "is-disabled": e.disabled,
        "is-loading": e.loading
      }]),
      disabled: e.disabled || e.loading,
      autofocus: e.autofocus,
      type: e.nativeType
    }, [
      e.loading ? (h(), U(B, {
        key: 0,
        icon: "spinner",
        spin: ""
      })) : E("", !0),
      e.icon ? (h(), U(B, {
        key: 1,
        icon: e.icon
      }, null, 8, ["icon"])) : E("", !0),
      j("span", null, [
        P(r.$slots, "default")
      ])
    ], 10, ll));
  }
});
ye.install = (e) => {
  e.component(ye.name, ye);
};
const hn = Symbol("collapseContext"), sl = { class: "vk-collapse" }, be = /* @__PURE__ */ F({
  name: "VkCollapse",
  __name: "Collapse",
  props: {
    modelValue: null,
    accordion: { type: Boolean }
  },
  emits: ["update:modelValue", "change"],
  setup(e, { emit: t }) {
    const n = e, r = t, o = _(n.modelValue);
    return H(() => n.modelValue, () => {
      o.value = n.modelValue;
    }), ze(hn, {
      activeNames: o,
      handleItemClick: (i) => {
        let a = [...o.value];
        if (n.accordion)
          a = [o.value[0] === i ? "" : i], o.value = a;
        else {
          const s = a.indexOf(i);
          s > -1 ? a.splice(s, 1) : a.push(i), o.value = a;
        }
        r("update:modelValue", a), r("change", a);
      }
    }), (i, a) => (h(), $("div", sl, [
      P(i.$slots, "default")
    ]));
  }
}), ul = ["id"], cl = { class: "vk-collapse-item__wrapper" }, dl = ["id"], $e = /* @__PURE__ */ F({
  name: "VkCollapseItem",
  __name: "CollapseItem",
  props: {
    name: null,
    title: null,
    disabled: { type: Boolean }
  },
  setup(e) {
    const t = e, n = Ue(hn), r = k(() => n == null ? void 0 : n.activeNames.value.includes(t.name)), o = () => {
      t.disabled || n == null || n.handleItemClick(t.name);
    }, l = {
      beforeEnter(i) {
        i.style.height = "0px", i.style.overflow = "hidden";
      },
      enter(i) {
        i.style.height = `${i.scrollHeight}px`;
      },
      afterEnter(i) {
        i.style.height = "", i.style.overflow = "";
      },
      beforeLeave(i) {
        i.style.height = `${i.scrollHeight}px`, i.style.overflow = "hidden";
      },
      leave(i) {
        i.style.height = "0px";
      },
      afterLeave(i) {
        i.style.height = "", i.style.overflow = "";
      }
    };
    return (i, a) => (h(), $("div", {
      class: L(["vk-collapse-item", {
        "is-disabled": e.disabled
      }])
    }, [
      j("div", {
        class: L(["vk-collapse-item__header", { "is-disabled": e.disabled, "is-active": r.value }]),
        id: `item-header-${e.name}`,
        onClick: o
      }, [
        P(i.$slots, "title", {}, () => [
          j("h2", null, fe(e.title), 1)
        ]),
        C(B, {
          icon: "angle-right",
          class: "header-angle"
        })
      ], 10, ul),
      C(He, oe({ name: "slide" }, Ve(l)), {
        default: ne(() => [
          ke(j("div", cl, [
            j("div", {
              class: "vk-collapse-item__content",
              id: `item-content-${e.name}`
            }, [
              P(i.$slots, "default")
            ], 8, dl)
          ], 512), [
            [Vt, r.value]
          ])
        ]),
        _: 3
      }, 16)
    ], 2));
  }
});
be.install = (e) => {
  e.component(be.name, be);
};
$e.install = (e) => {
  e.component($e.name, $e);
};
const fl = (e, t) => {
  const n = (r) => {
    e.value && r.target && (e.value.contains(r.target) || t(r));
  };
  ve(() => {
    document.addEventListener("click", n);
  }), Ge(() => {
    document.removeEventListener("click", n);
  });
}, pl = /* @__PURE__ */ j("div", {
  id: "arrow",
  "data-popper-arrow": ""
}, null, -1), re = /* @__PURE__ */ F({
  name: "VkTooltip",
  __name: "Tooltip",
  props: {
    content: null,
    trigger: { default: "hover" },
    placement: { default: "bottom" },
    manual: { type: Boolean },
    popperOptions: null,
    transitionName: null,
    openDelay: { default: 0 },
    closeDelay: { default: 0 },
    width: null
  },
  emits: ["visible-change", "click-outside"],
  setup(e, { expose: t, emit: n }) {
    const r = e, o = n, l = _(!1), i = _(), a = _(), s = _();
    let u = null, d = Ie({}), f = Ie({});
    const T = k(() => ({
      placement: r.placement,
      modifiers: [
        {
          name: "offset",
          options: {
            offset: [0, 9]
          }
        }
      ],
      ...r.popperOptions
    }));
    function x() {
      l.value = !0, o("visible-change", !0);
    }
    function p() {
      l.value = !1, o("visible-change", !1);
    }
    const O = Re(x, r.openDelay), g = Re(p, r.closeDelay);
    function v() {
      g.cancel(), O();
    }
    function I() {
      O.cancel(), g();
    }
    function M() {
      l.value ? I() : v();
    }
    fl(s, () => {
      r.trigger === "click" && l.value && !r.manual && I(), l.value && o("click-outside", !0);
    });
    function D() {
      r.trigger === "hover" ? (d.mouseenter = v, f.mouseleave = I) : r.trigger === "click" && (d.click = M);
    }
    return r.manual || D(), H(
      () => r.manual,
      (A) => {
        A ? (d = {}, f = {}) : D();
      }
    ), H(
      () => r.trigger,
      (A, m) => {
        A !== m && (d = {}, f = {}, D());
      }
    ), H(
      l,
      (A) => {
        A && (a.value && i.value ? u = En(a.value, i.value, T.value) : u == null || u.destroy());
      },
      { flush: "post" }
    ), Ge(() => {
      u == null || u.destroy();
    }), t({
      show: v,
      hide: I
    }), (A, m) => (h(), $("div", oe({
      class: "vk-tooltip",
      ref_key: "popperContainerNode",
      ref: s
    }, Ve(R(f), !0)), [
      j("div", oe({
        class: "vk-tooltip__trigger",
        ref_key: "triggerNode",
        ref: a
      }, Ve(R(d), !0)), [
        P(A.$slots, "default")
      ], 16),
      C(He, { name: e.transitionName }, {
        default: ne(() => [
          l.value ? (h(), $("div", {
            key: 0,
            class: "vk-tooltip__popper",
            ref_key: "popperNode",
            ref: i,
            style: Mt(`${e.width ? `width:${e.width}px` : ""}`)
          }, [
            P(A.$slots, "content", {}, () => [
              Nt(fe(e.content), 1)
            ]),
            pl
          ], 4)) : E("", !0)
        ]),
        _: 3
      }, 8, ["name"])
    ], 16));
  }
}), Te = /* @__PURE__ */ F({
  name: "VkDropdown",
  props: {
    placement: {
      type: String,
      default: "bottom"
    },
    trigger: {
      type: String,
      default: "hover"
    },
    transition: {
      type: String,
      default: "fade"
    },
    openDelay: {
      type: Number,
      default: 0
    },
    closeDelay: {
      type: Number,
      default: 0
    },
    popperOptions: {
      type: Object
    },
    menuOptions: {
      type: Array,
      required: !0
    },
    hideAfterClick: {
      type: Boolean,
      default: !0
    },
    manual: {
      type: Boolean
    }
  },
  emits: ["visible-change", "select"],
  setup(e, {
    slots: t,
    emit: n,
    expose: r
  }) {
    const o = _(null), l = (s) => {
      var u;
      s.disabled || (n("select", s), e.hideAfterClick && ((u = o.value) == null || u.hide()));
    }, i = (s) => {
      n("visible-change", s);
    }, a = k(() => e.menuOptions.map((s) => C(Ke, {
      key: s.key
    }, [s.divided ?? C("li", {
      role: "separator",
      class: "divided-placeholder"
    }, null), C("li", {
      class: {
        "vk-dropdown__item": !0,
        "is-disabled": s.disabled,
        "is-divided": s.divided
      },
      id: `dropdown-item-${s.key}`,
      onClick: () => l(s)
    }, [s.label])])));
    return r({
      show: () => {
        var s;
        return (s = o.value) == null ? void 0 : s.show();
      },
      hide: () => {
        var s;
        return (s = o.value) == null ? void 0 : s.hide();
      }
    }), () => (
      // @ts-ignore
      C("div", {
        class: "vk-dropdown"
      }, [C(re, {
        ref: o,
        trigger: e.trigger,
        placement: e.placement,
        popperOptions: e.popperOptions,
        openDelay: e.openDelay,
        closeDelay: e.closeDelay,
        manual: e.manual,
        onVisibleChange: i
      }, {
        default: () => t.default && t.default(),
        // @ts-ignore
        content: () => C("ul", {
          class: "vk-dropdown__menu"
        }, [a.value])
      })])
    );
  }
});
Te.install = (e) => {
  e.component(Te.name, Te);
};
const vn = Symbol("formContextKey"), gn = Symbol("formItemContextKey"), hl = { class: "vk-form" }, we = /* @__PURE__ */ F({
  name: "VkForm",
  __name: "Form",
  props: {
    model: null,
    rules: null
  },
  setup(e, { expose: t }) {
    const n = e, r = [], o = (u) => {
      r.push(u);
    }, l = (u) => {
      u.prop && r.splice(r.indexOf(u), 1);
    }, i = (u = []) => {
      (u.length > 0 ? r.filter((f) => u.includes(f.prop)) : r).forEach((f) => f.resetField());
    }, a = (u = []) => {
      (u.length > 0 ? r.filter((f) => u.includes(f.prop)) : r).forEach((f) => f.clearValidate());
    };
    async function s() {
      let u = {};
      for (const d of r)
        try {
          await d.validate();
        } catch (f) {
          u = {
            ...u,
            ...f.fields
          };
        }
      return Object.keys(u).length === 0 ? !0 : Promise.reject(u);
    }
    return ze(vn, {
      ...n,
      addField: o,
      removeField: l
    }), t({
      validate: s,
      resetFields: i,
      clearValidate: a
    }), (u, d) => (h(), $("form", hl, [
      P(u.$slots, "default")
    ]));
  }
}), vl = { class: "vk-form-item__label" }, gl = { class: "vk-form-item__content" }, ml = {
  key: 0,
  class: "vk-form-item__error-msg"
}, _e = /* @__PURE__ */ F({
  name: "VkFormItem",
  __name: "FormItem",
  props: {
    label: {},
    prop: {}
  },
  setup(e, { expose: t }) {
    const n = e, r = Ue(vn), o = Ie({
      state: "init",
      errorMsg: "",
      loading: !1
    });
    let l = null;
    const i = k(() => {
      const p = r == null ? void 0 : r.model;
      return p && n.prop && !Bt(p[n.prop]) ? p[n.prop] : null;
    }), a = k(() => {
      const p = r == null ? void 0 : r.rules;
      return p && n.prop && p[n.prop] ? p[n.prop] : [];
    });
    function s(p) {
      const O = a.value;
      return O ? O.filter((g) => !g.trigger || !p ? !0 : g.trigger && g.trigger === p) : [];
    }
    const u = k(() => a.value.some((p) => p.required));
    async function d(p) {
      const O = n.prop, g = s(p);
      if (g.length === 0)
        return Promise.resolve(!0);
      if (O) {
        const v = new Pn({
          [O]: g
        });
        return o.loading = !0, v.validate({ [O]: i.value }).then(() => {
          o.state = "success";
        }).catch((I) => {
          const { errors: M } = I;
          return o.state = "error", o.errorMsg = M && M.length > 0 && M[0].message || "", Promise.reject(I);
        }).finally(() => {
          o.loading = !1;
        });
      }
    }
    const f = () => {
      o.state = "init", o.errorMsg = "", o.loading = !1;
    }, T = () => {
      f();
      const p = r == null ? void 0 : r.model;
      p && n.prop && !Bt(p[n.prop]) && (p[n.prop] = l);
    }, x = {
      validate: d,
      prop: n.prop || "",
      clearValidate: f,
      resetField: T
    };
    return ze(gn, x), ve(() => {
      n.prop && (r == null || r.addField(x), l = i.value);
    }), Ge(() => {
      r == null || r.removeField(x);
    }), t({
      validateStatus: o,
      validate: d,
      resetField: T,
      clearValidate: f
    }), (p, O) => (h(), $("div", {
      class: L(["vk-form-item", {
        "is-error": o.state === "error",
        "is-success": o.state === "success",
        "is-loading": o.loading,
        "is-required": u.value
      }])
    }, [
      j("label", vl, [
        P(p.$slots, "label", { label: p.label }, () => [
          Nt(fe(p.label), 1)
        ])
      ]),
      j("div", gl, [
        P(p.$slots, "default", { validate: d }),
        o.state === "error" ? (h(), $("div", ml, fe(o.errorMsg), 1)) : E("", !0)
      ])
    ], 2));
  }
});
we.install = (e) => {
  e.component(we.name, we);
};
_e.install = (e) => {
  e.component(_e.name, _e);
};
B.install = (e) => {
  e.component(B.name, B);
};
const yl = {
  key: 0,
  class: "vk-input__prepend"
}, bl = { class: "vk-input__wrapper" }, $l = {
  key: 0,
  class: "vk-input__prefix"
}, Tl = ["type", "disabled", "readonly", "autocomplete", "placeholder", "autofocus", "form"], wl = {
  key: 1,
  class: "vk-input__append"
}, _l = ["disabled", "readonly", "autocomplete", "placeholder", "autofocus", "form"], ce = /* @__PURE__ */ F({
  name: "VkInput",
  inheritAttrs: !1,
  __name: "Input",
  props: {
    modelValue: { default: "" },
    type: { default: "text" },
    size: { default: "normal" },
    clearable: { type: Boolean, default: !1 },
    showPassword: { type: Boolean, default: !1 },
    disabled: { type: Boolean },
    placeholder: { default: "" },
    readonly: { type: Boolean, default: !1 },
    autocomplete: { default: "off" },
    autofocus: { type: Boolean },
    form: null
  },
  emits: ["update:modelValue", "input", "change", "focus", "blur", "clear"],
  setup(e, { expose: t, emit: n }) {
    const r = Ue(gn), o = wn(), l = e, i = n, a = _(), s = _(l.modelValue);
    H(
      () => l.modelValue,
      (c) => {
        s.value = c;
      }
    );
    const u = _(!1), d = _(!1), f = k(() => !!(!l.disabled && l.clearable && d.value && s.value || !l.disabled && l.clearable && u.value && s.value)), T = _(!1);
    function x() {
      T.value = !T.value;
    }
    function p() {
      u.value = !0;
    }
    function O() {
      u.value = !1;
    }
    function g() {
      i("update:modelValue", s.value), i("input", s.value);
    }
    function v() {
      i("change", s.value);
    }
    function I(c) {
      d.value = !0, i("focus", c);
    }
    async function M() {
      await Dt(), a.value.focus();
    }
    function D(c) {
      d.value = !1, i("blur", c), V();
    }
    function A() {
      s.value = "", i("update:modelValue", ""), i("clear"), i("input", ""), i("change", "");
    }
    function m() {
    }
    function V() {
      r == null || r.validate().catch((c) => console.log(c.errors));
    }
    return t({
      ref: a.value
    }), (c, w) => (h(), $("div", {
      class: L(["vk-input", {
        [`vk-input--${e.type}`]: e.type,
        [`vk-input--${e.size}`]: e.size,
        "is-disabled": e.disabled,
        "is-prepend": c.$slots.prepend,
        "is-append": c.$slots.append,
        "is-prefix": c.$slots.prefix,
        "is-suffix": c.$slots.suffix,
        "is-focus": d.value
      }]),
      onMousemove: p,
      onMouseleave: O
    }, [
      e.type !== "textarea" ? (h(), $(Ke, { key: 0 }, [
        c.$slots.prepend ? (h(), $("div", yl, [
          P(c.$slots, "prepend")
        ])) : E("", !0),
        j("div", bl, [
          c.$slots.prefix ? (h(), $("span", $l, [
            P(c.$slots, "prefix")
          ])) : E("", !0),
          ke(j("input", oe({
            "onUpdate:modelValue": w[0] || (w[0] = (S) => s.value = S),
            ref_key: "inputRef",
            ref: a
          }, R(o), {
            type: l.type === "password" ? T.value ? "text" : "password" : "text",
            class: "vk-input__inner",
            disabled: e.disabled,
            readonly: e.readonly,
            autocomplete: e.autocomplete,
            placeholder: e.placeholder,
            autofocus: e.autofocus,
            form: e.form,
            onInput: g,
            onFocus: I,
            onBlur: D,
            onChange: v
          }), null, 16, Tl), [
            [_n, s.value]
          ]),
          c.$slots.suffix || u.value ? (h(), $("span", {
            key: 1,
            class: "vk-input__suffix",
            onClick: M
          }, [
            l.type === "password" && !T.value ? (h(), U(B, {
              key: 0,
              icon: "eye",
              class: "vk-input-icon__password",
              onClick: x
            })) : E("", !0),
            l.type === "password" && T.value ? (h(), U(B, {
              key: 1,
              icon: "eye-slash",
              class: "vk-input-icon__password",
              onClick: x
            })) : E("", !0),
            f.value ? (h(), U(B, {
              key: 2,
              icon: "circle-xmark",
              class: "vk-input__clear",
              onClick: se(A, ["stop"]),
              onMousedown: se(m, ["prevent"])
            })) : E("", !0),
            P(c.$slots, "suffix")
          ])) : E("", !0)
        ]),
        c.$slots.append ? (h(), $("div", wl, [
          P(c.$slots, "append")
        ])) : E("", !0)
      ], 64)) : ke((h(), $("textarea", oe({
        key: 1,
        "onUpdate:modelValue": w[1] || (w[1] = (S) => s.value = S),
        ref_key: "inputRef",
        ref: a
      }, R(o), {
        class: "vk-textarea__wrapper",
        disabled: e.disabled,
        readonly: e.readonly,
        autocomplete: e.autocomplete,
        placeholder: e.placeholder,
        autofocus: e.autofocus,
        form: e.form,
        onInput: g,
        onFocus: I,
        onBlur: D,
        onChange: v
      }), null, 16, _l)), [
        [On, s.value]
      ])
    ], 34));
  }
});
ce.install = (e) => {
  e.component(ce.name, ce);
};
const Ol = F({
  props: {
    vNode: {
      type: [String, Object],
      required: !0
    }
  },
  setup(e) {
    return () => e.vNode;
  }
}), mn = Ol, Ft = _(0), xl = (e = 2e3) => {
  const t = _(e), n = k(() => Ft.value + t.value);
  return {
    initialZIndex: t,
    currentZIndex: n,
    toNextZIndex: () => (Ft.value++, n.value)
  };
};
let kl = 1e3;
const Z = xn([]), Il = (e) => {
  const { toNextZIndex: t } = xl(), n = `message_${kl++}`, r = document.createElement("div"), o = () => {
    const d = Z.findIndex((f) => (f == null ? void 0 : f.id) === n);
    d !== -1 && (Z.splice(d, 1), it(null, r));
  }, l = () => {
    const d = Z.find((f) => f.id === n);
    d && (d.vm.exposed.visible.value = !1);
  }, i = {
    ...e,
    id: n,
    zIndex: t(),
    onDestory: o
  }, a = kn(de, i);
  it(a, r), document.body.appendChild(r.firstElementChild);
  const s = a.component, u = {
    id: n,
    vnode: a,
    vm: s,
    props: i,
    destory: l
  };
  return Z.push(u), u;
}, Sl = (e) => {
  const t = Z.findIndex((n) => n.id === e);
  return t <= 0 ? 0 : Z[t - 1].vm.exposed.bottomOffset.value;
}, jl = () => {
  Z.forEach((e) => {
    e.destory();
  });
};
function Al(e, t, n) {
  In(e) ? H(e, (r, o) => {
    o == null || o.removeEventListener(t, n), r == null || r.addEventListener(t, n);
  }) : ve(() => {
    R(e).addEventListener(t, n);
  }), Sn(() => {
    var r;
    (r = R(e)) == null || r.addEventListener(t, n);
  });
}
const Cl = { class: "vk-message_content" }, El = {
  key: 0,
  class: "vk-message__close"
}, de = /* @__PURE__ */ F({
  name: "VkMessage",
  __name: "Message",
  props: {
    message: null,
    duration: { default: 4e3 },
    showClose: { type: Boolean, default: !1 },
    type: { default: "info" },
    transitionName: { default: "fade-up" },
    onDestory: { type: Function },
    id: null,
    zIndex: null,
    offset: { default: 20 }
  },
  setup(e, { expose: t }) {
    const n = e, r = _(!1), o = _(), l = _(0), i = k(() => Sl(n.id)), a = k(() => n.offset + i.value), s = k(() => l.value + a.value), u = k(() => ({
      top: a.value + "px",
      zIndex: n.zIndex
    }));
    let d;
    const f = () => {
      n.duration !== 0 && (d = setTimeout(() => {
        r.value = !1;
      }, n.duration));
    }, T = () => {
      clearTimeout(d);
    }, x = () => {
      r.value = !1;
    };
    ve(async () => {
      r.value = !0, f(), await Dt(), l.value = o.value.getBoundingClientRect().height;
    }), Al(document, "keydown", (v) => {
      v.code === "Escape" && (r.value = !1);
    });
    const O = () => {
      n.onDestory && n.onDestory();
    }, g = () => {
      l.value = o.value.getBoundingClientRect().height;
    };
    return t({
      bottomOffset: s,
      visible: r
    }), (v, I) => (h(), U(He, {
      name: e.transitionName,
      onAfterLeave: O,
      onEnter: g
    }, {
      default: ne(() => [
        ke(j("div", {
          ref_key: "messageRef",
          ref: o,
          style: Mt(u.value),
          class: L(["vk-message", { [`vk-message--${e.type}`]: e.type, "is-close": e.showClose }]),
          role: "alert",
          onMouseenter: T,
          onMouseleave: f
        }, [
          j("div", Cl, [
            P(v.$slots, "default", {}, () => [
              e.message ? (h(), U(R(mn), {
                key: 0,
                "v-node": e.message
              }, null, 8, ["v-node"])) : E("", !0)
            ])
          ]),
          e.showClose ? (h(), $("div", El, [
            C(B, {
              icon: "xmark",
              onClick: x
            })
          ])) : E("", !0)
        ], 38), [
          [Vt, r.value]
        ])
      ]),
      _: 3
    }, 8, ["name"]));
  }
});
de.install = (e) => {
  e.component(de.name, de);
};
const Pl = {
  key: 0,
  class: "vk-select__loading"
}, Bl = {
  key: 1,
  class: "vk-select__nodata"
}, Fl = {
  key: 2,
  class: "vk-select__menu"
}, Vl = ["id", "onClick"], Oe = /* @__PURE__ */ F({
  name: "VkSelect",
  __name: "Select",
  props: {
    modelValue: null,
    options: { default: () => [] },
    placeholder: { default: "" },
    disabled: { type: Boolean, default: !1 },
    clearable: { type: Boolean, default: !1 },
    renderLabel: { type: Function },
    filterable: { type: Boolean, default: !1 },
    filterMethod: { type: Function },
    remote: { type: Boolean },
    remoteMethod: { type: Function },
    multiple: { type: Boolean, default: !1 }
  },
  emits: ["change", "update:modelValue", "visible-change", "clear"],
  setup(e, { emit: t }) {
    const n = e, r = t, o = f(n.modelValue), l = _(), i = _(), a = Ie({
      inputValue: o ? o.label : "",
      selectedOption: o,
      mouseHover: !1,
      loading: !1,
      highlightIndex: -1
    }), s = _(!1), u = {
      modifiers: [
        {
          name: "offset",
          options: {
            offset: [0, 9]
          }
        },
        {
          name: "sameWidth",
          enabled: !0,
          fn: ({ state: c }) => {
            c.styles.popper.width = `${c.rects.reference.width}px`;
          },
          phase: "beforeWrite",
          requires: ["computeStyles"]
        }
      ]
    }, d = _(n.options);
    H(
      () => n.options,
      (c) => {
        d.value = c;
      }
    );
    function f(c) {
      const w = n.options.find((S) => S.value === c);
      return w || null;
    }
    async function T(c) {
      if (n.filterable) {
        if (n.filterMethod && Se(n.filterMethod))
          d.value = n.filterMethod(c);
        else if (n.remote && n.remoteMethod && Se(n.remoteMethod)) {
          a.loading = !0;
          try {
            d.value = await n.remoteMethod(c);
          } catch (w) {
            console.error(w), d.value = [];
          } finally {
            a.loading = !1;
          }
        } else
          d.value = n.options.filter((w) => w.label.includes(c));
        a.highlightIndex = -1;
      }
    }
    function x() {
      T(a.inputValue);
    }
    const p = k(() => n.remote ? 300 : 0), O = Re(() => {
      x();
    }, p.value), g = k(() => n.filterable && a.selectedOption && s.value ? a.selectedOption.label : n.placeholder);
    function v(c) {
      c ? (n.filterable && a.selectedOption && (a.inputValue = ""), n.filterable && T(a.inputValue), l.value.show()) : (l.value.hide(), n.filterable && (a.inputValue = a.selectedOption ? a.selectedOption.label : ""), a.highlightIndex = -1), s.value = c, r("visible-change", c);
    }
    function I(c) {
      switch (c.key) {
        case "Enter":
          s.value ? a.highlightIndex > -1 && d.value[a.highlightIndex] ? m(d.value[a.highlightIndex]) : v(!1) : v(!0);
          break;
        case "Escape":
          s.value && v(!1);
          break;
        case "ArrowUp":
          c.preventDefault(), d.value.length > 0 && (a.highlightIndex === -1 || a.highlightIndex === 0 ? a.highlightIndex = d.value.length - 1 : a.highlightIndex--);
          break;
        case "ArrowDown":
          c.preventDefault(), d.value.length > 0 && (a.highlightIndex === -1 || a.highlightIndex === d.value.length - 1 ? a.highlightIndex = 0 : a.highlightIndex++);
          break;
      }
    }
    const M = k(() => n.clearable && a.mouseHover && a.selectedOption && a.inputValue.trim() !== "");
    function D() {
      a.selectedOption = null, a.inputValue = "", r("clear"), r("change", ""), r("update:modelValue", "");
    }
    function A() {
      n.disabled || (s.value ? v(!1) : v(!0));
    }
    function m(c) {
      c.disabled || (a.inputValue = c.label, a.selectedOption = c, r("change", c.value), r("update:modelValue", c.value), v(!1), i.value.ref.focus());
    }
    function V() {
    }
    return (c, w) => (h(), $("div", {
      class: L(["vk-select", { "is-disabled": e.disabled }]),
      onClick: A,
      onMouseenter: w[2] || (w[2] = (S) => a.mouseHover = !0),
      onMouseleave: w[3] || (w[3] = (S) => a.mouseHover = !1)
    }, [
      C(re, {
        placement: "bottom-start",
        ref_key: "tooltipRef",
        ref: l,
        popperOptions: u,
        onClickOutside: w[1] || (w[1] = (S) => v(!1)),
        manual: ""
      }, {
        content: ne(() => [
          a.loading ? (h(), $("div", Pl, [
            C(B, {
              icon: "spinner",
              spin: ""
            })
          ])) : e.filterable && d.value.length === 0 ? (h(), $("div", Bl, " no matching data ")) : (h(), $("ul", Fl, [
            (h(!0), $(Ke, null, jn(d.value, (S, ot) => {
              var at;
              return h(), $("li", {
                key: ot,
                class: L(["vk-select__menu-item", {
                  "is-disabled": S.disabled,
                  "is-selected": ((at = a.selectedOption) == null ? void 0 : at.value) === S.value,
                  "is-highlighted": a.highlightIndex === ot
                }]),
                id: `select-item-${S.value}`,
                onClick: se((Ul) => m(S), ["stop"])
              }, [
                C(R(mn), {
                  vNode: e.renderLabel ? e.renderLabel(S) : S.label
                }, null, 8, ["vNode"])
              ], 10, Vl);
            }), 128))
          ]))
        ]),
        default: ne(() => [
          C(ce, {
            modelValue: a.inputValue,
            "onUpdate:modelValue": w[0] || (w[0] = (S) => a.inputValue = S),
            disabled: e.disabled,
            placeholder: g.value,
            ref_key: "inputRef",
            ref: i,
            readonly: !e.filterable || !s.value,
            onInput: R(O),
            onKeydown: I
          }, {
            suffix: ne(() => [
              M.value ? (h(), U(B, {
                key: 0,
                icon: "circle-xmark",
                class: "vk-input__clear",
                onMousedown: se(V, ["prevent"]),
                onClick: se(D, ["stop"])
              })) : (h(), U(B, {
                key: 1,
                icon: "angle-down",
                class: L(["header-angle", { "is-active": s.value }])
              }, null, 8, ["class"]))
            ]),
            _: 1
          }, 8, ["modelValue", "disabled", "placeholder", "readonly", "onInput"])
        ]),
        _: 1
      }, 512)
    ], 34));
  }
});
Oe.install = (e) => {
  e.component(Oe.name, Oe);
};
const Ml = ["name", "disabled"], Nl = { class: "vk-switch__core" }, Dl = { class: "vk-switch__core-inner" }, Ll = {
  key: 0,
  class: "vk-switch__core-inner-text"
}, Rl = /* @__PURE__ */ j("div", { class: "vk-switch__core-action" }, null, -1), xe = /* @__PURE__ */ F({
  name: "VkSwitch",
  inheritAttrs: !1,
  __name: "Switch",
  props: {
    modelValue: { type: [Boolean, String] },
    size: null,
    disabled: { type: Boolean },
    activeValue: { type: [Boolean, String], default: !0 },
    inactiveValue: { type: [Boolean, String], default: !1 },
    activeText: null,
    inactiveText: null,
    name: null,
    id: null
  },
  emits: ["change", "update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, r = t, o = _(), l = _(n.modelValue), i = k(() => l.value === n.activeValue);
    function a() {
      if (n.disabled)
        return;
      const s = i.value ? n.inactiveValue : n.activeValue;
      l.value = s, r("update:modelValue", s), r("change", s);
    }
    return H(i, (s) => {
      o.value.checked = s;
    }), H(() => n.modelValue, (s) => {
      l.value = s;
    }), ve(() => {
      o.value.checked = i.value;
    }), (s, u) => (h(), $("div", {
      class: L(["vk-switch", {
        [`vk-switch--${e.size}`]: e.size,
        "is-disabled": e.disabled,
        "is-checked": i.value
      }]),
      onClick: a
    }, [
      j("input", {
        ref_key: "switchRef",
        ref: o,
        class: "vk-switch__input",
        type: "checkbox",
        role: "switch",
        name: e.name,
        disabled: e.disabled,
        onKeydown: An(a, ["enter"])
      }, null, 40, Ml),
      j("div", Nl, [
        j("div", Dl, [
          e.activeText || e.inactiveText ? (h(), $("span", Ll, fe(i.value ? e.activeText : e.inactiveText), 1)) : E("", !0)
        ]),
        Rl
      ])
    ], 2));
  }
});
xe.install = (e) => {
  e.component(xe.name, xe);
};
re.install = (e) => {
  e.component(re.name, re);
};
const zl = [
  ye,
  be,
  $e,
  Te,
  we,
  _e,
  B,
  ce,
  de,
  Oe,
  xe,
  re,
  // 方法
  Il,
  jl
];
yn.add(bn);
function Xl(e) {
  zl.forEach((t) => {
    e.component(t.name, t);
  });
}
export {
  ye as Button,
  be as Collapse,
  $e as CollapseItem,
  Te as Dropdown,
  we as Form,
  _e as FormItem,
  B as Icon,
  ce as Input,
  de as Message,
  Oe as Select,
  xe as Switch,
  re as Tooltip,
  jl as closeAllInstances,
  Il as createMessage,
  Xl as default,
  Xl as install
};
