var O = function() {
  return O = Object.assign || function(t) {
    for (var n, r = 1, s = arguments.length; r < s; r++) {
      n = arguments[r];
      for (var i in n)
        Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
    }
    return t;
  }, O.apply(this, arguments);
};
function Ue(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, s = t.length, i; r < s; r++)
      (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
  return e.concat(i || Array.prototype.slice.call(t));
}
function pe(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: me } = Object.prototype, { getPrototypeOf: Y } = Object, Q = ((e) => (t) => {
  const n = me.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), T = (e) => (e = e.toLowerCase(), (t) => Q(t) === e), H = (e) => (t) => typeof t === e, { isArray: L } = Array, $ = H("undefined");
function qe(e) {
  return e !== null && !$(e) && e.constructor !== null && !$(e.constructor) && x(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const be = T("ArrayBuffer");
function Me(e) {
  let t;
  return typeof ArrayBuffer != "undefined" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && be(e.buffer), t;
}
const ke = H("string"), x = H("function"), ye = H("number"), Ee = (e) => e !== null && typeof e == "object", He = (e) => e === !0 || e === !1, M = (e) => {
  if (Q(e) !== "object")
    return !1;
  const t = Y(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, Ie = T("Date"), ve = T("File"), ze = T("Blob"), Je = T("FileList"), $e = (e) => Ee(e) && x(e.pipe), Ve = (e) => {
  const t = "[object FormData]";
  return e && (typeof FormData == "function" && e instanceof FormData || me.call(e) === t || x(e.toString) && e.toString() === t);
}, We = T("URLSearchParams"), Ke = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function I(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e == "undefined")
    return;
  let r, s;
  if (typeof e != "object" && (e = [e]), L(e))
    for (r = 0, s = e.length; r < s; r++)
      t.call(null, e[r], r, e);
  else {
    const i = n ? Object.getOwnPropertyNames(e) : Object.keys(e), o = i.length;
    let c;
    for (r = 0; r < o; r++)
      c = i[r], t.call(null, e[c], c, e);
  }
}
function V() {
  const e = {}, t = (n, r) => {
    M(e[r]) && M(n) ? e[r] = V(e[r], n) : M(n) ? e[r] = V({}, n) : L(n) ? e[r] = n.slice() : e[r] = n;
  };
  for (let n = 0, r = arguments.length; n < r; n++)
    arguments[n] && I(arguments[n], t);
  return e;
}
const Xe = (e, t, n, { allOwnKeys: r } = {}) => (I(t, (s, i) => {
  n && x(s) ? e[i] = pe(s, n) : e[i] = s;
}, { allOwnKeys: r }), e), Ye = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Qe = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, Ge = (e, t, n, r) => {
  let s, i, o;
  const c = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (s = Object.getOwnPropertyNames(e), i = s.length; i-- > 0; )
      o = s[i], (!r || r(o, e, t)) && !c[o] && (t[o] = e[o], c[o] = !0);
    e = n !== !1 && Y(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, Ze = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, et = (e) => {
  if (!e)
    return null;
  if (L(e))
    return e;
  let t = e.length;
  if (!ye(t))
    return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, tt = ((e) => (t) => e && t instanceof e)(typeof Uint8Array != "undefined" && Y(Uint8Array)), nt = (e, t) => {
  const r = (e && e[Symbol.iterator]).call(e);
  let s;
  for (; (s = r.next()) && !s.done; ) {
    const i = s.value;
    t.call(e, i[0], i[1]);
  }
}, rt = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, st = T("HTMLFormElement"), ot = (e) => e.toLowerCase().replace(
  /[_-\s]([a-z\d])(\w*)/g,
  function(n, r, s) {
    return r.toUpperCase() + s;
  }
), ne = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), it = T("RegExp"), we = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  I(n, (s, i) => {
    t(s, i, e) !== !1 && (r[i] = s);
  }), Object.defineProperties(e, r);
}, at = (e) => {
  we(e, (t, n) => {
    const r = e[n];
    if (!!x(r)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not read-only method '" + n + "'");
      });
    }
  });
}, ut = (e, t) => {
  const n = {}, r = (s) => {
    s.forEach((i) => {
      n[i] = !0;
    });
  };
  return L(e) ? r(e) : r(String(e).split(t)), n;
}, ct = () => {
}, lt = (e, t) => (e = +e, Number.isFinite(e) ? e : t), a = {
  isArray: L,
  isArrayBuffer: be,
  isBuffer: qe,
  isFormData: Ve,
  isArrayBufferView: Me,
  isString: ke,
  isNumber: ye,
  isBoolean: He,
  isObject: Ee,
  isPlainObject: M,
  isUndefined: $,
  isDate: Ie,
  isFile: ve,
  isBlob: ze,
  isRegExp: it,
  isFunction: x,
  isStream: $e,
  isURLSearchParams: We,
  isTypedArray: tt,
  isFileList: Je,
  forEach: I,
  merge: V,
  extend: Xe,
  trim: Ke,
  stripBOM: Ye,
  inherits: Qe,
  toFlatObject: Ge,
  kindOf: Q,
  kindOfTest: T,
  endsWith: Ze,
  toArray: et,
  forEachEntry: nt,
  matchAll: rt,
  isHTMLForm: st,
  hasOwnProperty: ne,
  hasOwnProp: ne,
  reduceDescriptors: we,
  freezeMethods: at,
  toObjectSet: ut,
  toCamelCase: ot,
  noop: ct,
  toFiniteNumber: lt
};
function p(e, t, n, r, s) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), s && (this.response = s);
}
a.inherits(p, Error, {
  toJSON: function() {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: this.config,
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const Re = p.prototype, Oe = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
].forEach((e) => {
  Oe[e] = { value: e };
});
Object.defineProperties(p, Oe);
Object.defineProperty(Re, "isAxiosError", { value: !0 });
p.from = (e, t, n, r, s, i) => {
  const o = Object.create(Re);
  return a.toFlatObject(e, o, function(f) {
    return f !== Error.prototype;
  }, (c) => c !== "isAxiosError"), p.call(o, e.message, t, n, r, s), o.cause = e, o.name = e.name, i && Object.assign(o, i), o;
};
var ft = typeof self == "object" ? self.FormData : window.FormData;
function W(e) {
  return a.isPlainObject(e) || a.isArray(e);
}
function Se(e) {
  return a.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function re(e, t, n) {
  return e ? e.concat(t).map(function(s, i) {
    return s = Se(s), !n && i ? "[" + s + "]" : s;
  }).join(n ? "." : "") : t;
}
function dt(e) {
  return a.isArray(e) && !e.some(W);
}
const ht = a.toFlatObject(a, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function pt(e) {
  return e && a.isFunction(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator];
}
function v(e, t, n) {
  if (!a.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new (ft || FormData)(), n = a.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(m, g) {
    return !a.isUndefined(g[m]);
  });
  const r = n.metaTokens, s = n.visitor || d, i = n.dots, o = n.indexes, f = (n.Blob || typeof Blob != "undefined" && Blob) && pt(t);
  if (!a.isFunction(s))
    throw new TypeError("visitor must be a function");
  function u(l) {
    if (l === null)
      return "";
    if (a.isDate(l))
      return l.toISOString();
    if (!f && a.isBlob(l))
      throw new p("Blob is not supported. Use a Buffer instead.");
    return a.isArrayBuffer(l) || a.isTypedArray(l) ? f && typeof Blob == "function" ? new Blob([l]) : Buffer.from(l) : l;
  }
  function d(l, m, g) {
    let R = l;
    if (l && !g && typeof l == "object") {
      if (a.endsWith(m, "{}"))
        m = r ? m : m.slice(0, -2), l = JSON.stringify(l);
      else if (a.isArray(l) && dt(l) || a.isFileList(l) || a.endsWith(m, "[]") && (R = a.toArray(l)))
        return m = Se(m), R.forEach(function(q, Le) {
          !(a.isUndefined(q) || q === null) && t.append(
            o === !0 ? re([m], Le, i) : o === null ? m : m + "[]",
            u(q)
          );
        }), !1;
    }
    return W(l) ? !0 : (t.append(re(g, m, i), u(l)), !1);
  }
  const y = [], E = Object.assign(ht, {
    defaultVisitor: d,
    convertValue: u,
    isVisitable: W
  });
  function h(l, m) {
    if (!a.isUndefined(l)) {
      if (y.indexOf(l) !== -1)
        throw Error("Circular reference detected in " + m.join("."));
      y.push(l), a.forEach(l, function(R, F) {
        (!(a.isUndefined(R) || R === null) && s.call(
          t,
          R,
          a.isString(F) ? F.trim() : F,
          m,
          E
        )) === !0 && h(R, m ? m.concat(F) : [F]);
      }), y.pop();
    }
  }
  if (!a.isObject(e))
    throw new TypeError("data must be an object");
  return h(e), t;
}
function se(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(r) {
    return t[r];
  });
}
function G(e, t) {
  this._pairs = [], e && v(e, this, t);
}
const Te = G.prototype;
Te.append = function(t, n) {
  this._pairs.push([t, n]);
};
Te.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, se);
  } : se;
  return this._pairs.map(function(s) {
    return n(s[0]) + "=" + n(s[1]);
  }, "").join("&");
};
function mt(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Ae(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || mt, s = n && n.serialize;
  let i;
  if (s ? i = s(t, n) : i = a.isURLSearchParams(t) ? t.toString() : new G(t, n).toString(r), i) {
    const o = e.indexOf("#");
    o !== -1 && (e = e.slice(0, o)), e += (e.indexOf("?") === -1 ? "?" : "&") + i;
  }
  return e;
}
class oe {
  constructor() {
    this.handlers = [];
  }
  use(t, n, r) {
    return this.handlers.push({
      fulfilled: t,
      rejected: n,
      synchronous: r ? r.synchronous : !1,
      runWhen: r ? r.runWhen : null
    }), this.handlers.length - 1;
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(t) {
    a.forEach(this.handlers, function(r) {
      r !== null && t(r);
    });
  }
}
const Pe = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, bt = typeof URLSearchParams != "undefined" ? URLSearchParams : G, yt = FormData, Et = (() => {
  let e;
  return typeof navigator != "undefined" && ((e = navigator.product) === "ReactNative" || e === "NativeScript" || e === "NS") ? !1 : typeof window != "undefined" && typeof document != "undefined";
})(), S = {
  isBrowser: !0,
  classes: {
    URLSearchParams: bt,
    FormData: yt,
    Blob
  },
  isStandardBrowserEnv: Et,
  protocols: ["http", "https", "file", "blob", "url", "data"]
};
function wt(e, t) {
  return v(e, new S.classes.URLSearchParams(), Object.assign({
    visitor: function(n, r, s, i) {
      return S.isNode && a.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function Rt(e) {
  return a.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function Ot(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const s = n.length;
  let i;
  for (r = 0; r < s; r++)
    i = n[r], t[i] = e[i];
  return t;
}
function ge(e) {
  function t(n, r, s, i) {
    let o = n[i++];
    const c = Number.isFinite(+o), f = i >= n.length;
    return o = !o && a.isArray(s) ? s.length : o, f ? (a.hasOwnProp(s, o) ? s[o] = [s[o], r] : s[o] = r, !c) : ((!s[o] || !a.isObject(s[o])) && (s[o] = []), t(n, r, s[o], i) && a.isArray(s[o]) && (s[o] = Ot(s[o])), !c);
  }
  if (a.isFormData(e) && a.isFunction(e.entries)) {
    const n = {};
    return a.forEachEntry(e, (r, s) => {
      t(Rt(r), s, n, 0);
    }), n;
  }
  return null;
}
function St(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new p(
    "Request failed with status code " + n.status,
    [p.ERR_BAD_REQUEST, p.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
const Tt = S.isStandardBrowserEnv ? function() {
  return {
    write: function(n, r, s, i, o, c) {
      const f = [];
      f.push(n + "=" + encodeURIComponent(r)), a.isNumber(s) && f.push("expires=" + new Date(s).toGMTString()), a.isString(i) && f.push("path=" + i), a.isString(o) && f.push("domain=" + o), c === !0 && f.push("secure"), document.cookie = f.join("; ");
    },
    read: function(n) {
      const r = document.cookie.match(new RegExp("(^|;\\s*)(" + n + ")=([^;]*)"));
      return r ? decodeURIComponent(r[3]) : null;
    },
    remove: function(n) {
      this.write(n, "", Date.now() - 864e5);
    }
  };
}() : function() {
  return {
    write: function() {
    },
    read: function() {
      return null;
    },
    remove: function() {
    }
  };
}();
function At(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Pt(e, t) {
  return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Ce(e, t) {
  return e && !At(t) ? Pt(e, t) : t;
}
const gt = S.isStandardBrowserEnv ? function() {
  const t = /(msie|trident)/i.test(navigator.userAgent), n = document.createElement("a");
  let r;
  function s(i) {
    let o = i;
    return t && (n.setAttribute("href", o), o = n.href), n.setAttribute("href", o), {
      href: n.href,
      protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
      host: n.host,
      search: n.search ? n.search.replace(/^\?/, "") : "",
      hash: n.hash ? n.hash.replace(/^#/, "") : "",
      hostname: n.hostname,
      port: n.port,
      pathname: n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname
    };
  }
  return r = s(window.location.href), function(o) {
    const c = a.isString(o) ? s(o) : o;
    return c.protocol === r.protocol && c.host === r.host;
  };
}() : function() {
  return function() {
    return !0;
  };
}();
function U(e, t, n) {
  p.call(this, e == null ? "canceled" : e, p.ERR_CANCELED, t, n), this.name = "CanceledError";
}
a.inherits(U, p, {
  __CANCEL__: !0
});
function Ct(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
const Ft = a.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), xt = (e) => {
  const t = {};
  let n, r, s;
  return e && e.split(`
`).forEach(function(o) {
    s = o.indexOf(":"), n = o.substring(0, s).trim().toLowerCase(), r = o.substring(s + 1).trim(), !(!n || t[n] && Ft[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, ie = Symbol("internals"), Fe = Symbol("defaults");
function _(e) {
  return e && String(e).trim().toLowerCase();
}
function k(e) {
  return e === !1 || e == null ? e : a.isArray(e) ? e.map(k) : String(e);
}
function Dt(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
function ae(e, t, n, r) {
  if (a.isFunction(r))
    return r.call(this, t, n);
  if (!!a.isString(t)) {
    if (a.isString(r))
      return t.indexOf(r) !== -1;
    if (a.isRegExp(r))
      return r.test(t);
  }
}
function Nt(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function _t(e, t) {
  const n = a.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function(s, i, o) {
        return this[r].call(this, t, s, i, o);
      },
      configurable: !0
    });
  });
}
function N(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, s;
  for (; r-- > 0; )
    if (s = n[r], t === s.toLowerCase())
      return s;
  return null;
}
function w(e, t) {
  e && this.set(e), this[Fe] = t || null;
}
Object.assign(w.prototype, {
  set: function(e, t, n) {
    const r = this;
    function s(i, o, c) {
      const f = _(o);
      if (!f)
        throw new Error("header name must be a non-empty string");
      const u = N(r, f);
      u && c !== !0 && (r[u] === !1 || c === !1) || (r[u || o] = k(i));
    }
    return a.isPlainObject(e) ? a.forEach(e, (i, o) => {
      s(i, o, t);
    }) : s(t, e, n), this;
  },
  get: function(e, t) {
    if (e = _(e), !e)
      return;
    const n = N(this, e);
    if (n) {
      const r = this[n];
      if (!t)
        return r;
      if (t === !0)
        return Dt(r);
      if (a.isFunction(t))
        return t.call(this, r, n);
      if (a.isRegExp(t))
        return t.exec(r);
      throw new TypeError("parser must be boolean|regexp|function");
    }
  },
  has: function(e, t) {
    if (e = _(e), e) {
      const n = N(this, e);
      return !!(n && (!t || ae(this, this[n], n, t)));
    }
    return !1;
  },
  delete: function(e, t) {
    const n = this;
    let r = !1;
    function s(i) {
      if (i = _(i), i) {
        const o = N(n, i);
        o && (!t || ae(n, n[o], o, t)) && (delete n[o], r = !0);
      }
    }
    return a.isArray(e) ? e.forEach(s) : s(e), r;
  },
  clear: function() {
    return Object.keys(this).forEach(this.delete.bind(this));
  },
  normalize: function(e) {
    const t = this, n = {};
    return a.forEach(this, (r, s) => {
      const i = N(n, s);
      if (i) {
        t[i] = k(r), delete t[s];
        return;
      }
      const o = e ? Nt(s) : String(s).trim();
      o !== s && delete t[s], t[o] = k(r), n[o] = !0;
    }), this;
  },
  toJSON: function(e) {
    const t = /* @__PURE__ */ Object.create(null);
    return a.forEach(
      Object.assign({}, this[Fe] || null, this),
      (n, r) => {
        n == null || n === !1 || (t[r] = e && a.isArray(n) ? n.join(", ") : n);
      }
    ), t;
  }
});
Object.assign(w, {
  from: function(e) {
    return a.isString(e) ? new this(xt(e)) : e instanceof this ? e : new this(e);
  },
  accessor: function(e) {
    const n = (this[ie] = this[ie] = {
      accessors: {}
    }).accessors, r = this.prototype;
    function s(i) {
      const o = _(i);
      n[o] || (_t(r, i), n[o] = !0);
    }
    return a.isArray(e) ? e.forEach(s) : s(e), this;
  }
});
w.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent"]);
a.freezeMethods(w.prototype);
a.freezeMethods(w);
function jt(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let s = 0, i = 0, o;
  return t = t !== void 0 ? t : 1e3, function(f) {
    const u = Date.now(), d = r[i];
    o || (o = u), n[s] = f, r[s] = u;
    let y = i, E = 0;
    for (; y !== s; )
      E += n[y++], y = y % e;
    if (s = (s + 1) % e, s === i && (i = (i + 1) % e), u - o < t)
      return;
    const h = d && u - d;
    return h ? Math.round(E * 1e3 / h) : void 0;
  };
}
function ue(e, t) {
  let n = 0;
  const r = jt(50, 250);
  return (s) => {
    const i = s.loaded, o = s.lengthComputable ? s.total : void 0, c = i - n, f = r(c), u = i <= o;
    n = i;
    const d = {
      loaded: i,
      total: o,
      progress: o ? i / o : void 0,
      bytes: c,
      rate: f || void 0,
      estimated: f && o && u ? (o - i) / f : void 0
    };
    d[t ? "download" : "upload"] = !0, e(d);
  };
}
function ce(e) {
  return new Promise(function(n, r) {
    let s = e.data;
    const i = w.from(e.headers).normalize(), o = e.responseType;
    let c;
    function f() {
      e.cancelToken && e.cancelToken.unsubscribe(c), e.signal && e.signal.removeEventListener("abort", c);
    }
    a.isFormData(s) && S.isStandardBrowserEnv && i.setContentType(!1);
    let u = new XMLHttpRequest();
    if (e.auth) {
      const h = e.auth.username || "", l = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      i.set("Authorization", "Basic " + btoa(h + ":" + l));
    }
    const d = Ce(e.baseURL, e.url);
    u.open(e.method.toUpperCase(), Ae(d, e.params, e.paramsSerializer), !0), u.timeout = e.timeout;
    function y() {
      if (!u)
        return;
      const h = w.from(
        "getAllResponseHeaders" in u && u.getAllResponseHeaders()
      ), m = {
        data: !o || o === "text" || o === "json" ? u.responseText : u.response,
        status: u.status,
        statusText: u.statusText,
        headers: h,
        config: e,
        request: u
      };
      St(function(R) {
        n(R), f();
      }, function(R) {
        r(R), f();
      }, m), u = null;
    }
    if ("onloadend" in u ? u.onloadend = y : u.onreadystatechange = function() {
      !u || u.readyState !== 4 || u.status === 0 && !(u.responseURL && u.responseURL.indexOf("file:") === 0) || setTimeout(y);
    }, u.onabort = function() {
      !u || (r(new p("Request aborted", p.ECONNABORTED, e, u)), u = null);
    }, u.onerror = function() {
      r(new p("Network Error", p.ERR_NETWORK, e, u)), u = null;
    }, u.ontimeout = function() {
      let l = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const m = e.transitional || Pe;
      e.timeoutErrorMessage && (l = e.timeoutErrorMessage), r(new p(
        l,
        m.clarifyTimeoutError ? p.ETIMEDOUT : p.ECONNABORTED,
        e,
        u
      )), u = null;
    }, S.isStandardBrowserEnv) {
      const h = (e.withCredentials || gt(d)) && e.xsrfCookieName && Tt.read(e.xsrfCookieName);
      h && i.set(e.xsrfHeaderName, h);
    }
    s === void 0 && i.setContentType(null), "setRequestHeader" in u && a.forEach(i.toJSON(), function(l, m) {
      u.setRequestHeader(m, l);
    }), a.isUndefined(e.withCredentials) || (u.withCredentials = !!e.withCredentials), o && o !== "json" && (u.responseType = e.responseType), typeof e.onDownloadProgress == "function" && u.addEventListener("progress", ue(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && u.upload && u.upload.addEventListener("progress", ue(e.onUploadProgress)), (e.cancelToken || e.signal) && (c = (h) => {
      !u || (r(!h || h.type ? new U(null, e, u) : h), u.abort(), u = null);
    }, e.cancelToken && e.cancelToken.subscribe(c), e.signal && (e.signal.aborted ? c() : e.signal.addEventListener("abort", c)));
    const E = Ct(d);
    if (E && S.protocols.indexOf(E) === -1) {
      r(new p("Unsupported protocol " + E + ":", p.ERR_BAD_REQUEST, e));
      return;
    }
    u.send(s || null);
  });
}
const le = {
  http: ce,
  xhr: ce
}, fe = {
  getAdapter: (e) => {
    if (a.isString(e)) {
      const t = le[e];
      if (!e)
        throw Error(
          a.hasOwnProp(e) ? `Adapter '${e}' is not available in the build` : `Can not resolve adapter '${e}'`
        );
      return t;
    }
    if (!a.isFunction(e))
      throw new TypeError("adapter is not a function");
    return e;
  },
  adapters: le
}, Bt = {
  "Content-Type": "application/x-www-form-urlencoded"
};
function Lt() {
  let e;
  return typeof XMLHttpRequest != "undefined" ? e = fe.getAdapter("xhr") : typeof process != "undefined" && a.kindOf(process) === "process" && (e = fe.getAdapter("http")), e;
}
function Ut(e, t, n) {
  if (a.isString(e))
    try {
      return (t || JSON.parse)(e), a.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const D = {
  transitional: Pe,
  adapter: Lt(),
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", s = r.indexOf("application/json") > -1, i = a.isObject(t);
    if (i && a.isHTMLForm(t) && (t = new FormData(t)), a.isFormData(t))
      return s && s ? JSON.stringify(ge(t)) : t;
    if (a.isArrayBuffer(t) || a.isBuffer(t) || a.isStream(t) || a.isFile(t) || a.isBlob(t))
      return t;
    if (a.isArrayBufferView(t))
      return t.buffer;
    if (a.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let c;
    if (i) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return wt(t, this.formSerializer).toString();
      if ((c = a.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const f = this.env && this.env.FormData;
        return v(
          c ? { "files[]": t } : t,
          f && new f(),
          this.formSerializer
        );
      }
    }
    return i || s ? (n.setContentType("application/json", !1), Ut(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || D.transitional, r = n && n.forcedJSONParsing, s = this.responseType === "json";
    if (t && a.isString(t) && (r && !this.responseType || s)) {
      const o = !(n && n.silentJSONParsing) && s;
      try {
        return JSON.parse(t);
      } catch (c) {
        if (o)
          throw c.name === "SyntaxError" ? p.from(c, p.ERR_BAD_RESPONSE, this, null, this.response) : c;
      }
    }
    return t;
  }],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: S.classes.FormData,
    Blob: S.classes.Blob
  },
  validateStatus: function(t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*"
    }
  }
};
a.forEach(["delete", "get", "head"], function(t) {
  D.headers[t] = {};
});
a.forEach(["post", "put", "patch"], function(t) {
  D.headers[t] = a.merge(Bt);
});
function z(e, t) {
  const n = this || D, r = t || n, s = w.from(r.headers);
  let i = r.data;
  return a.forEach(e, function(c) {
    i = c.call(n, i, s.normalize(), t ? t.status : void 0);
  }), s.normalize(), i;
}
function xe(e) {
  return !!(e && e.__CANCEL__);
}
function J(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new U();
}
function de(e) {
  return J(e), e.headers = w.from(e.headers), e.data = z.call(
    e,
    e.transformRequest
  ), (e.adapter || D.adapter)(e).then(function(r) {
    return J(e), r.data = z.call(
      e,
      e.transformResponse,
      r
    ), r.headers = w.from(r.headers), r;
  }, function(r) {
    return xe(r) || (J(e), r && r.response && (r.response.data = z.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = w.from(r.response.headers))), Promise.reject(r);
  });
}
function j(e, t) {
  t = t || {};
  const n = {};
  function r(u, d) {
    return a.isPlainObject(u) && a.isPlainObject(d) ? a.merge(u, d) : a.isPlainObject(d) ? a.merge({}, d) : a.isArray(d) ? d.slice() : d;
  }
  function s(u) {
    if (a.isUndefined(t[u])) {
      if (!a.isUndefined(e[u]))
        return r(void 0, e[u]);
    } else
      return r(e[u], t[u]);
  }
  function i(u) {
    if (!a.isUndefined(t[u]))
      return r(void 0, t[u]);
  }
  function o(u) {
    if (a.isUndefined(t[u])) {
      if (!a.isUndefined(e[u]))
        return r(void 0, e[u]);
    } else
      return r(void 0, t[u]);
  }
  function c(u) {
    if (u in t)
      return r(e[u], t[u]);
    if (u in e)
      return r(void 0, e[u]);
  }
  const f = {
    url: i,
    method: i,
    data: i,
    baseURL: o,
    transformRequest: o,
    transformResponse: o,
    paramsSerializer: o,
    timeout: o,
    timeoutMessage: o,
    withCredentials: o,
    adapter: o,
    responseType: o,
    xsrfCookieName: o,
    xsrfHeaderName: o,
    onUploadProgress: o,
    onDownloadProgress: o,
    decompress: o,
    maxContentLength: o,
    maxBodyLength: o,
    beforeRedirect: o,
    transport: o,
    httpAgent: o,
    httpsAgent: o,
    cancelToken: o,
    socketPath: o,
    responseEncoding: o,
    validateStatus: c
  };
  return a.forEach(Object.keys(e).concat(Object.keys(t)), function(d) {
    const y = f[d] || s, E = y(d);
    a.isUndefined(E) && y !== c || (n[d] = E);
  }), n;
}
const De = "1.1.3", Z = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  Z[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const he = {};
Z.transitional = function(t, n, r) {
  function s(i, o) {
    return "[Axios v" + De + "] Transitional option '" + i + "'" + o + (r ? ". " + r : "");
  }
  return (i, o, c) => {
    if (t === !1)
      throw new p(
        s(o, " has been removed" + (n ? " in " + n : "")),
        p.ERR_DEPRECATED
      );
    return n && !he[o] && (he[o] = !0, console.warn(
      s(
        o,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(i, o, c) : !0;
  };
};
function qt(e, t, n) {
  if (typeof e != "object")
    throw new p("options must be an object", p.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let s = r.length;
  for (; s-- > 0; ) {
    const i = r[s], o = t[i];
    if (o) {
      const c = e[i], f = c === void 0 || o(c, i, e);
      if (f !== !0)
        throw new p("option " + i + " must be " + f, p.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new p("Unknown option " + i, p.ERR_BAD_OPTION);
  }
}
const K = {
  assertOptions: qt,
  validators: Z
}, A = K.validators;
class C {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new oe(),
      response: new oe()
    };
  }
  request(t, n) {
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = j(this.defaults, n);
    const { transitional: r, paramsSerializer: s } = n;
    r !== void 0 && K.assertOptions(r, {
      silentJSONParsing: A.transitional(A.boolean),
      forcedJSONParsing: A.transitional(A.boolean),
      clarifyTimeoutError: A.transitional(A.boolean)
    }, !1), s !== void 0 && K.assertOptions(s, {
      encode: A.function,
      serialize: A.function
    }, !0), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    const i = n.headers && a.merge(
      n.headers.common,
      n.headers[n.method]
    );
    i && a.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      function(l) {
        delete n.headers[l];
      }
    ), n.headers = new w(n.headers, i);
    const o = [];
    let c = !0;
    this.interceptors.request.forEach(function(l) {
      typeof l.runWhen == "function" && l.runWhen(n) === !1 || (c = c && l.synchronous, o.unshift(l.fulfilled, l.rejected));
    });
    const f = [];
    this.interceptors.response.forEach(function(l) {
      f.push(l.fulfilled, l.rejected);
    });
    let u, d = 0, y;
    if (!c) {
      const h = [de.bind(this), void 0];
      for (h.unshift.apply(h, o), h.push.apply(h, f), y = h.length, u = Promise.resolve(n); d < y; )
        u = u.then(h[d++], h[d++]);
      return u;
    }
    y = o.length;
    let E = n;
    for (d = 0; d < y; ) {
      const h = o[d++], l = o[d++];
      try {
        E = h(E);
      } catch (m) {
        l.call(this, m);
        break;
      }
    }
    try {
      u = de.call(this, E);
    } catch (h) {
      return Promise.reject(h);
    }
    for (d = 0, y = f.length; d < y; )
      u = u.then(f[d++], f[d++]);
    return u;
  }
  getUri(t) {
    t = j(this.defaults, t);
    const n = Ce(t.baseURL, t.url);
    return Ae(n, t.params, t.paramsSerializer);
  }
}
a.forEach(["delete", "get", "head", "options"], function(t) {
  C.prototype[t] = function(n, r) {
    return this.request(j(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
a.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(i, o, c) {
      return this.request(j(c || {}, {
        method: t,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: i,
        data: o
      }));
    };
  }
  C.prototype[t] = n(), C.prototype[t + "Form"] = n(!0);
});
class ee {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(i) {
      n = i;
    });
    const r = this;
    this.promise.then((s) => {
      if (!r._listeners)
        return;
      let i = r._listeners.length;
      for (; i-- > 0; )
        r._listeners[i](s);
      r._listeners = null;
    }), this.promise.then = (s) => {
      let i;
      const o = new Promise((c) => {
        r.subscribe(c), i = c;
      }).then(s);
      return o.cancel = function() {
        r.unsubscribe(i);
      }, o;
    }, t(function(i, o, c) {
      r.reason || (r.reason = new U(i, o, c), n(r.reason));
    });
  }
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : this._listeners = [t];
  }
  unsubscribe(t) {
    if (!this._listeners)
      return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  static source() {
    let t;
    return {
      token: new ee(function(s) {
        t = s;
      }),
      cancel: t
    };
  }
}
function Mt(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function kt(e) {
  return a.isObject(e) && e.isAxiosError === !0;
}
function Ne(e) {
  const t = new C(e), n = pe(C.prototype.request, t);
  return a.extend(n, C.prototype, t, { allOwnKeys: !0 }), a.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(s) {
    return Ne(j(e, s));
  }, n;
}
const b = Ne(D);
b.Axios = C;
b.CanceledError = U;
b.CancelToken = ee;
b.isCancel = xe;
b.VERSION = De;
b.toFormData = v;
b.AxiosError = p;
b.Cancel = b.CanceledError;
b.all = function(t) {
  return Promise.all(t);
};
b.spread = Mt;
b.isAxiosError = kt;
b.formToJSON = (e) => ge(a.isHTMLForm(e) ? new FormData(e) : e);
const Ht = (e) => (e.headers["Content-Type"] = "application/json;charset=UTF-8", e.headers["X-Requested-With"] = "XMLHttpRequest", e), It = (e) => Promise.reject(e);
var X = function(e) {
  return e && !/^https?:\/\//i.test(e) && !e.startsWith("/") ? "/".concat(e) : e;
}, te = function(e, t, n) {
  return "".concat(e, "-").concat(t, "-").concat(typeof n == "object" ? JSON.stringify(n) : n);
}, vt = function() {
  function e(t, n) {
    Object.defineProperty(this, "requestMap", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: /* @__PURE__ */ new Map()
    }), Object.defineProperty(this, "system", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "custom", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), this.system = t, this.custom = n;
  }
  return Object.defineProperty(e.prototype, "init", {
    enumerable: !1,
    configurable: !0,
    writable: !0,
    value: function(t, n) {
      typeof t == "object" && (this.system = O(O({}, this.system || {}), t || {})), typeof n == "object" && (console.log(this, "this"), this.custom = O(O({}, this.custom || {}), n || {}));
    }
  }), Object.defineProperty(e.prototype, "addRequestMap", {
    enumerable: !1,
    configurable: !0,
    writable: !0,
    value: function(t, n) {
      this.requestMap.has(t) ? this.deleteRequestMap(t, !0) : this.requestMap.set(t, n);
    }
  }), Object.defineProperty(e.prototype, "deleteRequestMap", {
    enumerable: !1,
    configurable: !0,
    writable: !0,
    value: function(t, n) {
      var r, s;
      n && ((r = this.requestMap.get(t)) === null || r === void 0 ? void 0 : r.abort) ? (console.log("\u91CD\u590D\u8BF7\u6C42-".concat(t, ",\u5DF2\u53D6\u6D88")), (s = this.requestMap.get(t)) === null || s === void 0 || s.abort()) : this.requestMap.delete(t);
    }
  }), Object.defineProperty(e.prototype, "abortRequestPedding", {
    enumerable: !1,
    configurable: !0,
    writable: !0,
    value: function(t) {
      var n = Ue([], this.requestMap.values(), !0);
      n != null && n.length && n.forEach(function(r) {
        (t || []).find(function(s) {
          return X(r.requestUrl).includes(X(s));
        }) || r.abort && r.abort();
      });
    }
  }), e;
}();
const P = new vt({}, {
  retry: 0,
  retryDelay: 1e3,
  abortable: !1
});
let B = 0;
const zt = 1500, Jt = 250, _e = () => {
  const { changeLoadingStatus: e } = P.custom;
  e && typeof e == "function" && e(B > 0);
}, $t = (e) => {
  e && e.ignoreLoading || e && e.aborted || (B += 1, setTimeout(() => {
    B > 0 && _e();
  }, zt));
}, je = (e) => {
  e && e.ignoreLoading || (B -= 1, setTimeout(() => {
    B === 0 && _e();
  }, Jt));
}, Vt = (e) => ($t(e), e), Wt = (e) => Promise.reject(e), Kt = (e) => (je(e && e.config), e), Xt = (e) => (e.code !== "ERR_CANCELED" && je(e && e.config), Promise.reject(e)), Yt = (e) => e, Qt = (e) => {
  if (e && e.config) {
    const { config: t } = e;
    return !t.retry || (t.retryCount = t.retryCount || 0, t.retryCount >= t.retry) ? Promise.reject(e) : (t.retryCount += 1, new Promise(function(r) {
      console.log(`\u63A5\u53E3${t.url}\u8BF7\u6C42\u8D85\u65F6\uFF0C\u91CD\u65B0\u8BF7\u6C42`), setTimeout(function() {
        r();
      }, t.retryDelay || 1e3);
    }).then(function() {
      return b(t);
    }));
  }
  return Promise.reject(e);
}, Gt = (e) => {
  const { abortable: t, data: n, url: r, method: s } = e, i = te(s, r, n);
  let o = null;
  const c = window.location.pathname;
  return t && (o = b.CancelToken.source(), e.cancelToken = o.token, P.requestMap.has(i)) ? (o.cancel(
    `\u8BF7\u6C42\u91CD\u590D-${i}\uFF1A\u8BE5\u8BF7\u6C42\u5DF2\u88AB\u53D6\u6D88\uFF0C\u53EF\u901A\u8FC7abortable:false\u7981\u7528`
  ), e.aborted = !0, e) : (P.addRequestMap(i, {
    requestUrl: r,
    pageUrl: c,
    abort: o == null ? void 0 : o.cancel
  }), e);
}, Zt = (e) => Promise.reject(e), en = (e) => {
  const { data: t, url: n, method: r } = e, s = te(r, n, t);
  return P.deleteRequestMap(s), e;
}, tn = (e) => {
  if (e.config) {
    const { data: t, url: n, method: r } = e.config, s = te(r, n, t);
    P.deleteRequestMap(s);
  }
  return Promise.reject(e);
}, nn = (e) => e, rn = (e) => (e.response && console.warn(
  `%c \u9519\u8BEF\u4FE1\u606F %c  ${JSON.stringify(e.response)} %c`,
  "background:red ; padding: 1px; border-radius: 3px 0 0 3px;  color: #fff",
  "background:#41b883 ; padding: 1px; border-radius: 0 3px 3px 0;  color: #fff",
  "background:transparent"
), Promise.reject(e));
b.interceptors.request.use(
  Vt,
  Wt
);
b.interceptors.request.use(Gt, Zt);
b.interceptors.request.use(Ht, It);
b.interceptors.response.use(
  Kt,
  Xt
);
b.interceptors.response.use(Yt, Qt);
b.interceptors.response.use(en, tn);
b.interceptors.response.use(nn, rn);
b.defaults = O({}, P.system);
var Be = function(e, t, n, r) {
  return r === void 0 && (r = {}), b(O(O({ method: e, url: X(t), data: n }, P.custom || {}), r));
}, sn = function(e, t, n) {
  return new Promise(function(r) {
    Be("get", e, t, n).then(r).catch(r);
  });
}, on = function(e, t, n) {
  return new Promise(function(r) {
    Be("post", e, t, n).then(r).catch(r);
  });
}, an = function(e, t) {
  return e === void 0 && (e = {}), t === void 0 && (t = {}), P.init(e, t);
};
const un = {
  httpGet: sn,
  httpPost: on,
  httpInit: an
};
export {
  un as default,
  sn as httpGet,
  an as httpInit,
  on as httpPost
};
