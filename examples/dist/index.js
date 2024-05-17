// /Users/vincent/GithubDB/out/index.js
var UK = Object.create;
var { defineProperty: YQ, getPrototypeOf: DK, getOwnPropertyNames: GK } = Object;
var WK = Object.prototype.hasOwnProperty;
var MK = (Y, k, S) => {
  S = Y != null ? UK(DK(Y)) : {};
  const w = k || !Y || !Y.__esModule ? YQ(S, "default", { value: Y, enumerable: true }) : S;
  for (let P of GK(Y))
    if (!WK.call(w, P))
      YQ(w, P, { get: () => Y[P], enumerable: true });
  return w;
};
var L6 = (Y, k) => () => (k || Y((k = { exports: {} }).exports, k), k.exports);
var HQ = L6((H2, B2) => {
  (function() {
    var Y, k = "4.17.21", S = 200, w = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", P = "Expected a function", d = "Invalid `variable` option passed into `_.template`", R = "__lodash_hash_undefined__", p = 500, g = "__lodash_placeholder__", O = 1, V = 2, N = 4, F = 1, f = 2, I = 1, v = 2, o = 4, t = 8, z0 = 16, U0 = 32, v0 = 64, R0 = 128, Z1 = 256, X3 = 512, _Q = 30, zQ = "...", NQ = 800, OQ = 16, I6 = 1, VQ = 2, PQ = 3, _1 = Infinity, X1 = 9007199254740991, EQ = 179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, U2 = NaN, c0 = 4294967295, FQ = c0 - 1, CQ = c0 >>> 1, wQ = [["ary", R0], ["bind", I], ["bindKey", v], ["curry", t], ["curryRight", z0], ["flip", X3], ["partial", U0], ["partialRight", v0], ["rearg", Z1]], S1 = "[object Arguments]", D2 = "[object Array]", SQ = "[object AsyncFunction]", g1 = "[object Boolean]", y1 = "[object Date]", LQ = "[object DOMException]", G2 = "[object Error]", W2 = "[object Function]", A6 = "[object GeneratorFunction]", b0 = "[object Map]", d1 = "[object Number]", RQ = "[object Null]", l0 = "[object Object]", x6 = "[object Promise]", TQ = "[object Proxy]", c1 = "[object RegExp]", h0 = "[object Set]", u1 = "[object String]", M2 = "[object Symbol]", IQ = "[object Undefined]", i1 = "[object WeakMap]", AQ = "[object WeakSet]", n1 = "[object ArrayBuffer]", L1 = "[object DataView]", K3 = "[object Float32Array]", q3 = "[object Float64Array]", Y3 = "[object Int8Array]", H3 = "[object Int16Array]", B3 = "[object Int32Array]", U3 = "[object Uint8Array]", D3 = "[object Uint8ClampedArray]", G3 = "[object Uint16Array]", W3 = "[object Uint32Array]", xQ = /\b__p \+= '';/g, kQ = /\b(__p \+=) '' \+/g, fQ = /(__e\(.*?\)|\b__t\)) \+\n'';/g, k6 = /&(?:amp|lt|gt|quot|#39);/g, f6 = /[&<>"']/g, jQ = RegExp(k6.source), mQ = RegExp(f6.source), vQ = /<%-([\s\S]+?)%>/g, bQ = /<%([\s\S]+?)%>/g, j6 = /<%=([\s\S]+?)%>/g, hQ = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, pQ = /^\w*$/, gQ = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, M3 = /[\\^$.*+?()[\]{}|]/g, yQ = RegExp(M3.source), _3 = /^\s+/, dQ = /\s/, cQ = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, uQ = /\{\n\/\* \[wrapped with (.+)\] \*/, iQ = /,? & /, nQ = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, lQ = /[()=,{}\[\]\/\s]/, oQ = /\\(\\)?/g, sQ = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, m6 = /\w*$/, tQ = /^[-+]0x[0-9a-f]+$/i, rQ = /^0b[01]+$/i, aQ = /^\[object .+?Constructor\]$/, eQ = /^0o[0-7]+$/i, Q4 = /^(?:0|[1-9]\d*)$/, $4 = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, _2 = /($^)/, J4 = /['\n\r\u2028\u2029\\]/g, z2 = "\\ud800-\\udfff", Z4 = "\\u0300-\\u036f", X4 = "\\ufe20-\\ufe2f", K4 = "\\u20d0-\\u20ff", v6 = Z4 + X4 + K4, b6 = "\\u2700-\\u27bf", h6 = "a-z\\xdf-\\xf6\\xf8-\\xff", q4 = "\\xac\\xb1\\xd7\\xf7", Y4 = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", H4 = "\\u2000-\\u206f", B4 = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", p6 = "A-Z\\xc0-\\xd6\\xd8-\\xde", g6 = "\\ufe0e\\ufe0f", y6 = q4 + Y4 + H4 + B4, z3 = "['\u2019]", U4 = "[" + z2 + "]", d6 = "[" + y6 + "]", N2 = "[" + v6 + "]", c6 = "\\d+", D4 = "[" + b6 + "]", u6 = "[" + h6 + "]", i6 = "[^" + z2 + y6 + c6 + b6 + h6 + p6 + "]", N3 = "\\ud83c[\\udffb-\\udfff]", G4 = "(?:" + N2 + "|" + N3 + ")", n6 = "[^" + z2 + "]", O3 = "(?:\\ud83c[\\udde6-\\uddff]){2}", V3 = "[\\ud800-\\udbff][\\udc00-\\udfff]", R1 = "[" + p6 + "]", l6 = "\\u200d", o6 = "(?:" + u6 + "|" + i6 + ")", W4 = "(?:" + R1 + "|" + i6 + ")", s6 = "(?:" + z3 + "(?:d|ll|m|re|s|t|ve))?", t6 = "(?:" + z3 + "(?:D|LL|M|RE|S|T|VE))?", r6 = G4 + "?", a6 = "[" + g6 + "]?", M4 = "(?:" + l6 + "(?:" + [n6, O3, V3].join("|") + ")" + a6 + r6 + ")*", _4 = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", z4 = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", e6 = a6 + r6 + M4, N4 = "(?:" + [D4, O3, V3].join("|") + ")" + e6, O4 = "(?:" + [n6 + N2 + "?", N2, O3, V3, U4].join("|") + ")", V4 = RegExp(z3, "g"), P4 = RegExp(N2, "g"), P3 = RegExp(N3 + "(?=" + N3 + ")|" + O4 + e6, "g"), E4 = RegExp([R1 + "?" + u6 + "+" + s6 + "(?=" + [d6, R1, "$"].join("|") + ")", W4 + "+" + t6 + "(?=" + [d6, R1 + o6, "$"].join("|") + ")", R1 + "?" + o6 + "+" + s6, R1 + "+" + t6, z4, _4, c6, N4].join("|"), "g"), F4 = RegExp("[" + l6 + z2 + v6 + g6 + "]"), C4 = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, w4 = ["Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"], S4 = -1, e = {};
    e[K3] = e[q3] = e[Y3] = e[H3] = e[B3] = e[U3] = e[D3] = e[G3] = e[W3] = true, e[S1] = e[D2] = e[n1] = e[g1] = e[L1] = e[y1] = e[G2] = e[W2] = e[b0] = e[d1] = e[l0] = e[c1] = e[h0] = e[u1] = e[i1] = false;
    var a = {};
    a[S1] = a[D2] = a[n1] = a[L1] = a[g1] = a[y1] = a[K3] = a[q3] = a[Y3] = a[H3] = a[B3] = a[b0] = a[d1] = a[l0] = a[c1] = a[h0] = a[u1] = a[M2] = a[U3] = a[D3] = a[G3] = a[W3] = true, a[G2] = a[W2] = a[i1] = false;
    var L4 = { "\xC0": "A", "\xC1": "A", "\xC2": "A", "\xC3": "A", "\xC4": "A", "\xC5": "A", "\xE0": "a", "\xE1": "a", "\xE2": "a", "\xE3": "a", "\xE4": "a", "\xE5": "a", "\xC7": "C", "\xE7": "c", "\xD0": "D", "\xF0": "d", "\xC8": "E", "\xC9": "E", "\xCA": "E", "\xCB": "E", "\xE8": "e", "\xE9": "e", "\xEA": "e", "\xEB": "e", "\xCC": "I", "\xCD": "I", "\xCE": "I", "\xCF": "I", "\xEC": "i", "\xED": "i", "\xEE": "i", "\xEF": "i", "\xD1": "N", "\xF1": "n", "\xD2": "O", "\xD3": "O", "\xD4": "O", "\xD5": "O", "\xD6": "O", "\xD8": "O", "\xF2": "o", "\xF3": "o", "\xF4": "o", "\xF5": "o", "\xF6": "o", "\xF8": "o", "\xD9": "U", "\xDA": "U", "\xDB": "U", "\xDC": "U", "\xF9": "u", "\xFA": "u", "\xFB": "u", "\xFC": "u", "\xDD": "Y", "\xFD": "y", "\xFF": "y", "\xC6": "Ae", "\xE6": "ae", "\xDE": "Th", "\xFE": "th", "\xDF": "ss", "\u0100": "A", "\u0102": "A", "\u0104": "A", "\u0101": "a", "\u0103": "a", "\u0105": "a", "\u0106": "C", "\u0108": "C", "\u010A": "C", "\u010C": "C", "\u0107": "c", "\u0109": "c", "\u010B": "c", "\u010D": "c", "\u010E": "D", "\u0110": "D", "\u010F": "d", "\u0111": "d", "\u0112": "E", "\u0114": "E", "\u0116": "E", "\u0118": "E", "\u011A": "E", "\u0113": "e", "\u0115": "e", "\u0117": "e", "\u0119": "e", "\u011B": "e", "\u011C": "G", "\u011E": "G", "\u0120": "G", "\u0122": "G", "\u011D": "g", "\u011F": "g", "\u0121": "g", "\u0123": "g", "\u0124": "H", "\u0126": "H", "\u0125": "h", "\u0127": "h", "\u0128": "I", "\u012A": "I", "\u012C": "I", "\u012E": "I", "\u0130": "I", "\u0129": "i", "\u012B": "i", "\u012D": "i", "\u012F": "i", "\u0131": "i", "\u0134": "J", "\u0135": "j", "\u0136": "K", "\u0137": "k", "\u0138": "k", "\u0139": "L", "\u013B": "L", "\u013D": "L", "\u013F": "L", "\u0141": "L", "\u013A": "l", "\u013C": "l", "\u013E": "l", "\u0140": "l", "\u0142": "l", "\u0143": "N", "\u0145": "N", "\u0147": "N", "\u014A": "N", "\u0144": "n", "\u0146": "n", "\u0148": "n", "\u014B": "n", "\u014C": "O", "\u014E": "O", "\u0150": "O", "\u014D": "o", "\u014F": "o", "\u0151": "o", "\u0154": "R", "\u0156": "R", "\u0158": "R", "\u0155": "r", "\u0157": "r", "\u0159": "r", "\u015A": "S", "\u015C": "S", "\u015E": "S", "\u0160": "S", "\u015B": "s", "\u015D": "s", "\u015F": "s", "\u0161": "s", "\u0162": "T", "\u0164": "T", "\u0166": "T", "\u0163": "t", "\u0165": "t", "\u0167": "t", "\u0168": "U", "\u016A": "U", "\u016C": "U", "\u016E": "U", "\u0170": "U", "\u0172": "U", "\u0169": "u", "\u016B": "u", "\u016D": "u", "\u016F": "u", "\u0171": "u", "\u0173": "u", "\u0174": "W", "\u0175": "w", "\u0176": "Y", "\u0177": "y", "\u0178": "Y", "\u0179": "Z", "\u017B": "Z", "\u017D": "Z", "\u017A": "z", "\u017C": "z", "\u017E": "z", "\u0132": "IJ", "\u0133": "ij", "\u0152": "Oe", "\u0153": "oe", "\u0149": "'n", "\u017F": "s" }, R4 = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }, T4 = { "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"', "&#39;": "'" }, I4 = { "\\": "\\", "'": "'", "\n": "n", "\r": "r", "\u2028": "u2028", "\u2029": "u2029" }, A4 = parseFloat, x4 = parseInt, Q8 = typeof global == "object" && global && global.Object === Object && global, k4 = typeof self == "object" && self && self.Object === Object && self, Y0 = Q8 || k4 || Function("return this")(), E3 = typeof H2 == "object" && H2 && !H2.nodeType && H2, z1 = E3 && typeof B2 == "object" && B2 && !B2.nodeType && B2, $8 = z1 && z1.exports === E3, F3 = $8 && Q8.process, T0 = function() {
      try {
        var U = z1 && z1.require && z1.require("util").types;
        if (U)
          return U;
        return F3 && F3.binding && F3.binding("util");
      } catch (W) {
      }
    }(), J8 = T0 && T0.isArrayBuffer, Z8 = T0 && T0.isDate, X8 = T0 && T0.isMap, K8 = T0 && T0.isRegExp, q8 = T0 && T0.isSet, Y8 = T0 && T0.isTypedArray;
    function E0(U, W, G) {
      switch (G.length) {
        case 0:
          return U.call(W);
        case 1:
          return U.call(W, G[0]);
        case 2:
          return U.call(W, G[0], G[1]);
        case 3:
          return U.call(W, G[0], G[1], G[2]);
      }
      return U.apply(W, G);
    }
    function f4(U, W, G, C) {
      var j = -1, n = U == null ? 0 : U.length;
      while (++j < n) {
        var K0 = U[j];
        W(C, K0, G(K0), U);
      }
      return C;
    }
    function I0(U, W) {
      var G = -1, C = U == null ? 0 : U.length;
      while (++G < C)
        if (W(U[G], G, U) === false)
          break;
      return U;
    }
    function j4(U, W) {
      var G = U == null ? 0 : U.length;
      while (G--)
        if (W(U[G], G, U) === false)
          break;
      return U;
    }
    function H8(U, W) {
      var G = -1, C = U == null ? 0 : U.length;
      while (++G < C)
        if (!W(U[G], G, U))
          return false;
      return true;
    }
    function K1(U, W) {
      var G = -1, C = U == null ? 0 : U.length, j = 0, n = [];
      while (++G < C) {
        var K0 = U[G];
        if (W(K0, G, U))
          n[j++] = K0;
      }
      return n;
    }
    function O2(U, W) {
      var G = U == null ? 0 : U.length;
      return !!G && T1(U, W, 0) > -1;
    }
    function C3(U, W, G) {
      var C = -1, j = U == null ? 0 : U.length;
      while (++C < j)
        if (G(W, U[C]))
          return true;
      return false;
    }
    function Q0(U, W) {
      var G = -1, C = U == null ? 0 : U.length, j = Array(C);
      while (++G < C)
        j[G] = W(U[G], G, U);
      return j;
    }
    function q1(U, W) {
      var G = -1, C = W.length, j = U.length;
      while (++G < C)
        U[j + G] = W[G];
      return U;
    }
    function w3(U, W, G, C) {
      var j = -1, n = U == null ? 0 : U.length;
      if (C && n)
        G = U[++j];
      while (++j < n)
        G = W(G, U[j], j, U);
      return G;
    }
    function m4(U, W, G, C) {
      var j = U == null ? 0 : U.length;
      if (C && j)
        G = U[--j];
      while (j--)
        G = W(G, U[j], j, U);
      return G;
    }
    function S3(U, W) {
      var G = -1, C = U == null ? 0 : U.length;
      while (++G < C)
        if (W(U[G], G, U))
          return true;
      return false;
    }
    var v4 = L3("length");
    function b4(U) {
      return U.split("");
    }
    function h4(U) {
      return U.match(nQ) || [];
    }
    function B8(U, W, G) {
      var C;
      return G(U, function(j, n, K0) {
        if (W(j, n, K0))
          return C = n, false;
      }), C;
    }
    function V2(U, W, G, C) {
      var j = U.length, n = G + (C ? 1 : -1);
      while (C ? n-- : ++n < j)
        if (W(U[n], n, U))
          return n;
      return -1;
    }
    function T1(U, W, G) {
      return W === W ? t4(U, W, G) : V2(U, U8, G);
    }
    function p4(U, W, G, C) {
      var j = G - 1, n = U.length;
      while (++j < n)
        if (C(U[j], W))
          return j;
      return -1;
    }
    function U8(U) {
      return U !== U;
    }
    function D8(U, W) {
      var G = U == null ? 0 : U.length;
      return G ? T3(U, W) / G : U2;
    }
    function L3(U) {
      return function(W) {
        return W == null ? Y : W[U];
      };
    }
    function R3(U) {
      return function(W) {
        return U == null ? Y : U[W];
      };
    }
    function G8(U, W, G, C, j) {
      return j(U, function(n, K0, r) {
        G = C ? (C = false, n) : W(G, n, K0, r);
      }), G;
    }
    function g4(U, W) {
      var G = U.length;
      U.sort(W);
      while (G--)
        U[G] = U[G].value;
      return U;
    }
    function T3(U, W) {
      var G, C = -1, j = U.length;
      while (++C < j) {
        var n = W(U[C]);
        if (n !== Y)
          G = G === Y ? n : G + n;
      }
      return G;
    }
    function I3(U, W) {
      var G = -1, C = Array(U);
      while (++G < U)
        C[G] = W(G);
      return C;
    }
    function y4(U, W) {
      return Q0(W, function(G) {
        return [G, U[G]];
      });
    }
    function W8(U) {
      return U ? U.slice(0, N8(U) + 1).replace(_3, "") : U;
    }
    function F0(U) {
      return function(W) {
        return U(W);
      };
    }
    function A3(U, W) {
      return Q0(W, function(G) {
        return U[G];
      });
    }
    function l1(U, W) {
      return U.has(W);
    }
    function M8(U, W) {
      var G = -1, C = U.length;
      while (++G < C && T1(W, U[G], 0) > -1)
        ;
      return G;
    }
    function _8(U, W) {
      var G = U.length;
      while (G-- && T1(W, U[G], 0) > -1)
        ;
      return G;
    }
    function d4(U, W) {
      var G = U.length, C = 0;
      while (G--)
        if (U[G] === W)
          ++C;
      return C;
    }
    var c4 = R3(L4), u4 = R3(R4);
    function i4(U) {
      return "\\" + I4[U];
    }
    function n4(U, W) {
      return U == null ? Y : U[W];
    }
    function I1(U) {
      return F4.test(U);
    }
    function l4(U) {
      return C4.test(U);
    }
    function o4(U) {
      var W, G = [];
      while (!(W = U.next()).done)
        G.push(W.value);
      return G;
    }
    function x3(U) {
      var W = -1, G = Array(U.size);
      return U.forEach(function(C, j) {
        G[++W] = [j, C];
      }), G;
    }
    function z8(U, W) {
      return function(G) {
        return U(W(G));
      };
    }
    function Y1(U, W) {
      var G = -1, C = U.length, j = 0, n = [];
      while (++G < C) {
        var K0 = U[G];
        if (K0 === W || K0 === g)
          U[G] = g, n[j++] = G;
      }
      return n;
    }
    function P2(U) {
      var W = -1, G = Array(U.size);
      return U.forEach(function(C) {
        G[++W] = C;
      }), G;
    }
    function s4(U) {
      var W = -1, G = Array(U.size);
      return U.forEach(function(C) {
        G[++W] = [C, C];
      }), G;
    }
    function t4(U, W, G) {
      var C = G - 1, j = U.length;
      while (++C < j)
        if (U[C] === W)
          return C;
      return -1;
    }
    function r4(U, W, G) {
      var C = G + 1;
      while (C--)
        if (U[C] === W)
          return C;
      return C;
    }
    function A1(U) {
      return I1(U) ? e4(U) : v4(U);
    }
    function p0(U) {
      return I1(U) ? Q$(U) : b4(U);
    }
    function N8(U) {
      var W = U.length;
      while (W-- && dQ.test(U.charAt(W)))
        ;
      return W;
    }
    var a4 = R3(T4);
    function e4(U) {
      var W = P3.lastIndex = 0;
      while (P3.test(U))
        ++W;
      return W;
    }
    function Q$(U) {
      return U.match(P3) || [];
    }
    function $$(U) {
      return U.match(E4) || [];
    }
    var J$ = function U(W) {
      W = W == null ? Y0 : H1.defaults(Y0.Object(), W, H1.pick(Y0, w4));
      var { Array: G, Date: C, Error: j, Function: n, Math: K0, Object: r, RegExp: k3, String: Z$, TypeError: A0 } = W, E2 = G.prototype, X$ = n.prototype, x1 = r.prototype, F2 = W["__core-js_shared__"], C2 = X$.toString, s = x1.hasOwnProperty, K$ = 0, O8 = function() {
        var Q = /[^.]+$/.exec(F2 && F2.keys && F2.keys.IE_PROTO || "");
        return Q ? "Symbol(src)_1." + Q : "";
      }(), w2 = x1.toString, q$ = C2.call(r), Y$ = Y0._, H$ = k3("^" + C2.call(s).replace(M3, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), S2 = $8 ? W.Buffer : Y, B1 = W.Symbol, L2 = W.Uint8Array, V8 = S2 ? S2.allocUnsafe : Y, R2 = z8(r.getPrototypeOf, r), P8 = r.create, E8 = x1.propertyIsEnumerable, T2 = E2.splice, F8 = B1 ? B1.isConcatSpreadable : Y, o1 = B1 ? B1.iterator : Y, N1 = B1 ? B1.toStringTag : Y, I2 = function() {
        try {
          var Q = F1(r, "defineProperty");
          return Q({}, "", {}), Q;
        } catch ($) {
        }
      }(), B$ = W.clearTimeout !== Y0.clearTimeout && W.clearTimeout, U$ = C && C.now !== Y0.Date.now && C.now, D$ = W.setTimeout !== Y0.setTimeout && W.setTimeout, A2 = K0.ceil, x2 = K0.floor, f3 = r.getOwnPropertySymbols, G$ = S2 ? S2.isBuffer : Y, C8 = W.isFinite, W$ = E2.join, M$ = z8(r.keys, r), q0 = K0.max, D0 = K0.min, _$ = C.now, z$ = W.parseInt, w8 = K0.random, N$ = E2.reverse, j3 = F1(W, "DataView"), s1 = F1(W, "Map"), m3 = F1(W, "Promise"), k1 = F1(W, "Set"), t1 = F1(W, "WeakMap"), r1 = F1(r, "create"), k2 = t1 && new t1, f1 = {}, O$ = C1(j3), V$ = C1(s1), P$ = C1(m3), E$ = C1(k1), F$ = C1(t1), f2 = B1 ? B1.prototype : Y, a1 = f2 ? f2.valueOf : Y, S8 = f2 ? f2.toString : Y;
      function K(Q) {
        if (J0(Q) && !m(Q) && !(Q instanceof u)) {
          if (Q instanceof x0)
            return Q;
          if (s.call(Q, "__wrapped__"))
            return L5(Q);
        }
        return new x0(Q);
      }
      var j1 = function() {
        function Q() {
        }
        return function($) {
          if (!$0($))
            return {};
          if (P8)
            return P8($);
          Q.prototype = $;
          var J = new Q;
          return Q.prototype = Y, J;
        };
      }();
      function j2() {
      }
      function x0(Q, $) {
        this.__wrapped__ = Q, this.__actions__ = [], this.__chain__ = !!$, this.__index__ = 0, this.__values__ = Y;
      }
      K.templateSettings = { escape: vQ, evaluate: bQ, interpolate: j6, variable: "", imports: { _: K } }, K.prototype = j2.prototype, K.prototype.constructor = K, x0.prototype = j1(j2.prototype), x0.prototype.constructor = x0;
      function u(Q) {
        this.__wrapped__ = Q, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = false, this.__iteratees__ = [], this.__takeCount__ = c0, this.__views__ = [];
      }
      function C$() {
        var Q = new u(this.__wrapped__);
        return Q.__actions__ = N0(this.__actions__), Q.__dir__ = this.__dir__, Q.__filtered__ = this.__filtered__, Q.__iteratees__ = N0(this.__iteratees__), Q.__takeCount__ = this.__takeCount__, Q.__views__ = N0(this.__views__), Q;
      }
      function w$() {
        if (this.__filtered__) {
          var Q = new u(this);
          Q.__dir__ = -1, Q.__filtered__ = true;
        } else
          Q = this.clone(), Q.__dir__ *= -1;
        return Q;
      }
      function S$() {
        var Q = this.__wrapped__.value(), $ = this.__dir__, J = m(Q), Z = $ < 0, X = J ? Q.length : 0, q = b7(0, X, this.__views__), H = q.start, B = q.end, D = B - H, M = Z ? B : H - 1, _ = this.__iteratees__, z = _.length, E = 0, L = D0(D, this.__takeCount__);
        if (!J || !Z && X == D && L == D)
          return s8(Q, this.__actions__);
        var A = [];
        Q:
          while (D-- && E < L) {
            M += $;
            var h = -1, x = Q[M];
            while (++h < z) {
              var c = _[h], i = c.iteratee, S0 = c.type, _0 = i(x);
              if (S0 == VQ)
                x = _0;
              else if (!_0)
                if (S0 == I6)
                  continue Q;
                else
                  break Q;
            }
            A[E++] = x;
          }
        return A;
      }
      u.prototype = j1(j2.prototype), u.prototype.constructor = u;
      function O1(Q) {
        var $ = -1, J = Q == null ? 0 : Q.length;
        this.clear();
        while (++$ < J) {
          var Z = Q[$];
          this.set(Z[0], Z[1]);
        }
      }
      function L$() {
        this.__data__ = r1 ? r1(null) : {}, this.size = 0;
      }
      function R$(Q) {
        var $ = this.has(Q) && delete this.__data__[Q];
        return this.size -= $ ? 1 : 0, $;
      }
      function T$(Q) {
        var $ = this.__data__;
        if (r1) {
          var J = $[Q];
          return J === R ? Y : J;
        }
        return s.call($, Q) ? $[Q] : Y;
      }
      function I$(Q) {
        var $ = this.__data__;
        return r1 ? $[Q] !== Y : s.call($, Q);
      }
      function A$(Q, $) {
        var J = this.__data__;
        return this.size += this.has(Q) ? 0 : 1, J[Q] = r1 && $ === Y ? R : $, this;
      }
      O1.prototype.clear = L$, O1.prototype.delete = R$, O1.prototype.get = T$, O1.prototype.has = I$, O1.prototype.set = A$;
      function o0(Q) {
        var $ = -1, J = Q == null ? 0 : Q.length;
        this.clear();
        while (++$ < J) {
          var Z = Q[$];
          this.set(Z[0], Z[1]);
        }
      }
      function x$() {
        this.__data__ = [], this.size = 0;
      }
      function k$(Q) {
        var $ = this.__data__, J = m2($, Q);
        if (J < 0)
          return false;
        var Z = $.length - 1;
        if (J == Z)
          $.pop();
        else
          T2.call($, J, 1);
        return --this.size, true;
      }
      function f$(Q) {
        var $ = this.__data__, J = m2($, Q);
        return J < 0 ? Y : $[J][1];
      }
      function j$(Q) {
        return m2(this.__data__, Q) > -1;
      }
      function m$(Q, $) {
        var J = this.__data__, Z = m2(J, Q);
        if (Z < 0)
          ++this.size, J.push([Q, $]);
        else
          J[Z][1] = $;
        return this;
      }
      o0.prototype.clear = x$, o0.prototype.delete = k$, o0.prototype.get = f$, o0.prototype.has = j$, o0.prototype.set = m$;
      function s0(Q) {
        var $ = -1, J = Q == null ? 0 : Q.length;
        this.clear();
        while (++$ < J) {
          var Z = Q[$];
          this.set(Z[0], Z[1]);
        }
      }
      function v$() {
        this.size = 0, this.__data__ = { hash: new O1, map: new (s1 || o0), string: new O1 };
      }
      function b$(Q) {
        var $ = l2(this, Q).delete(Q);
        return this.size -= $ ? 1 : 0, $;
      }
      function h$(Q) {
        return l2(this, Q).get(Q);
      }
      function p$(Q) {
        return l2(this, Q).has(Q);
      }
      function g$(Q, $) {
        var J = l2(this, Q), Z = J.size;
        return J.set(Q, $), this.size += J.size == Z ? 0 : 1, this;
      }
      s0.prototype.clear = v$, s0.prototype.delete = b$, s0.prototype.get = h$, s0.prototype.has = p$, s0.prototype.set = g$;
      function V1(Q) {
        var $ = -1, J = Q == null ? 0 : Q.length;
        this.__data__ = new s0;
        while (++$ < J)
          this.add(Q[$]);
      }
      function y$(Q) {
        return this.__data__.set(Q, R), this;
      }
      function d$(Q) {
        return this.__data__.has(Q);
      }
      V1.prototype.add = V1.prototype.push = y$, V1.prototype.has = d$;
      function g0(Q) {
        var $ = this.__data__ = new o0(Q);
        this.size = $.size;
      }
      function c$() {
        this.__data__ = new o0, this.size = 0;
      }
      function u$(Q) {
        var $ = this.__data__, J = $.delete(Q);
        return this.size = $.size, J;
      }
      function i$(Q) {
        return this.__data__.get(Q);
      }
      function n$(Q) {
        return this.__data__.has(Q);
      }
      function l$(Q, $) {
        var J = this.__data__;
        if (J instanceof o0) {
          var Z = J.__data__;
          if (!s1 || Z.length < S - 1)
            return Z.push([Q, $]), this.size = ++J.size, this;
          J = this.__data__ = new s0(Z);
        }
        return J.set(Q, $), this.size = J.size, this;
      }
      g0.prototype.clear = c$, g0.prototype.delete = u$, g0.prototype.get = i$, g0.prototype.has = n$, g0.prototype.set = l$;
      function L8(Q, $) {
        var J = m(Q), Z = !J && w1(Q), X = !J && !Z && M1(Q), q = !J && !Z && !X && h1(Q), H = J || Z || X || q, B = H ? I3(Q.length, Z$) : [], D = B.length;
        for (var M in Q)
          if (($ || s.call(Q, M)) && !(H && (M == "length" || X && (M == "offset" || M == "parent") || q && (M == "buffer" || M == "byteLength" || M == "byteOffset") || e0(M, D))))
            B.push(M);
        return B;
      }
      function R8(Q) {
        var $ = Q.length;
        return $ ? Q[n3(0, $ - 1)] : Y;
      }
      function o$(Q, $) {
        return o2(N0(Q), P1($, 0, Q.length));
      }
      function s$(Q) {
        return o2(N0(Q));
      }
      function v3(Q, $, J) {
        if (J !== Y && !y0(Q[$], J) || J === Y && !($ in Q))
          t0(Q, $, J);
      }
      function e1(Q, $, J) {
        var Z = Q[$];
        if (!(s.call(Q, $) && y0(Z, J)) || J === Y && !($ in Q))
          t0(Q, $, J);
      }
      function m2(Q, $) {
        var J = Q.length;
        while (J--)
          if (y0(Q[J][0], $))
            return J;
        return -1;
      }
      function t$(Q, $, J, Z) {
        return U1(Q, function(X, q, H) {
          $(Z, X, J(X), H);
        }), Z;
      }
      function T8(Q, $) {
        return Q && i0($, H0($), Q);
      }
      function r$(Q, $) {
        return Q && i0($, V0($), Q);
      }
      function t0(Q, $, J) {
        if ($ == "__proto__" && I2)
          I2(Q, $, { configurable: true, enumerable: true, value: J, writable: true });
        else
          Q[$] = J;
      }
      function b3(Q, $) {
        var J = -1, Z = $.length, X = G(Z), q = Q == null;
        while (++J < Z)
          X[J] = q ? Y : N6(Q, $[J]);
        return X;
      }
      function P1(Q, $, J) {
        if (Q === Q) {
          if (J !== Y)
            Q = Q <= J ? Q : J;
          if ($ !== Y)
            Q = Q >= $ ? Q : $;
        }
        return Q;
      }
      function k0(Q, $, J, Z, X, q) {
        var H, B = $ & O, D = $ & V, M = $ & N;
        if (J)
          H = X ? J(Q, Z, X, q) : J(Q);
        if (H !== Y)
          return H;
        if (!$0(Q))
          return Q;
        var _ = m(Q);
        if (_) {
          if (H = p7(Q), !B)
            return N0(Q, H);
        } else {
          var z = G0(Q), E = z == W2 || z == A6;
          if (M1(Q))
            return a8(Q, B);
          if (z == l0 || z == S1 || E && !X) {
            if (H = D || E ? {} : N5(Q), !B)
              return D ? T7(Q, r$(H, Q)) : R7(Q, T8(H, Q));
          } else {
            if (!a[z])
              return X ? Q : {};
            H = g7(Q, z, B);
          }
        }
        q || (q = new g0);
        var L = q.get(Q);
        if (L)
          return L;
        if (q.set(Q, H), n5(Q))
          Q.forEach(function(x) {
            H.add(k0(x, $, J, x, Q, q));
          });
        else if (u5(Q))
          Q.forEach(function(x, c) {
            H.set(c, k0(x, $, J, c, Q, q));
          });
        var A = M ? D ? Z6 : J6 : D ? V0 : H0, h = _ ? Y : A(Q);
        return I0(h || Q, function(x, c) {
          if (h)
            c = x, x = Q[c];
          e1(H, c, k0(x, $, J, c, Q, q));
        }), H;
      }
      function a$(Q) {
        var $ = H0(Q);
        return function(J) {
          return I8(J, Q, $);
        };
      }
      function I8(Q, $, J) {
        var Z = J.length;
        if (Q == null)
          return !Z;
        Q = r(Q);
        while (Z--) {
          var X = J[Z], q = $[X], H = Q[X];
          if (H === Y && !(X in Q) || !q(H))
            return false;
        }
        return true;
      }
      function A8(Q, $, J) {
        if (typeof Q != "function")
          throw new A0(P);
        return q2(function() {
          Q.apply(Y, J);
        }, $);
      }
      function Q2(Q, $, J, Z) {
        var X = -1, q = O2, H = true, B = Q.length, D = [], M = $.length;
        if (!B)
          return D;
        if (J)
          $ = Q0($, F0(J));
        if (Z)
          q = C3, H = false;
        else if ($.length >= S)
          q = l1, H = false, $ = new V1($);
        Q:
          while (++X < B) {
            var _ = Q[X], z = J == null ? _ : J(_);
            if (_ = Z || _ !== 0 ? _ : 0, H && z === z) {
              var E = M;
              while (E--)
                if ($[E] === z)
                  continue Q;
              D.push(_);
            } else if (!q($, z, Z))
              D.push(_);
          }
        return D;
      }
      var U1 = Z5(u0), x8 = Z5(p3, true);
      function e$(Q, $) {
        var J = true;
        return U1(Q, function(Z, X, q) {
          return J = !!$(Z, X, q), J;
        }), J;
      }
      function v2(Q, $, J) {
        var Z = -1, X = Q.length;
        while (++Z < X) {
          var q = Q[Z], H = $(q);
          if (H != null && (B === Y ? H === H && !w0(H) : J(H, B)))
            var B = H, D = q;
        }
        return D;
      }
      function Q7(Q, $, J, Z) {
        var X = Q.length;
        if (J = b(J), J < 0)
          J = -J > X ? 0 : X + J;
        if (Z = Z === Y || Z > X ? X : b(Z), Z < 0)
          Z += X;
        Z = J > Z ? 0 : o5(Z);
        while (J < Z)
          Q[J++] = $;
        return Q;
      }
      function k8(Q, $) {
        var J = [];
        return U1(Q, function(Z, X, q) {
          if ($(Z, X, q))
            J.push(Z);
        }), J;
      }
      function B0(Q, $, J, Z, X) {
        var q = -1, H = Q.length;
        J || (J = d7), X || (X = []);
        while (++q < H) {
          var B = Q[q];
          if ($ > 0 && J(B))
            if ($ > 1)
              B0(B, $ - 1, J, Z, X);
            else
              q1(X, B);
          else if (!Z)
            X[X.length] = B;
        }
        return X;
      }
      var h3 = X5(), f8 = X5(true);
      function u0(Q, $) {
        return Q && h3(Q, $, H0);
      }
      function p3(Q, $) {
        return Q && f8(Q, $, H0);
      }
      function b2(Q, $) {
        return K1($, function(J) {
          return Q1(Q[J]);
        });
      }
      function E1(Q, $) {
        $ = G1($, Q);
        var J = 0, Z = $.length;
        while (Q != null && J < Z)
          Q = Q[n0($[J++])];
        return J && J == Z ? Q : Y;
      }
      function j8(Q, $, J) {
        var Z = $(Q);
        return m(Q) ? Z : q1(Z, J(Q));
      }
      function W0(Q) {
        if (Q == null)
          return Q === Y ? IQ : RQ;
        return N1 && N1 in r(Q) ? v7(Q) : s7(Q);
      }
      function g3(Q, $) {
        return Q > $;
      }
      function $7(Q, $) {
        return Q != null && s.call(Q, $);
      }
      function J7(Q, $) {
        return Q != null && $ in r(Q);
      }
      function Z7(Q, $, J) {
        return Q >= D0($, J) && Q < q0($, J);
      }
      function y3(Q, $, J) {
        var Z = J ? C3 : O2, X = Q[0].length, q = Q.length, H = q, B = G(q), D = Infinity, M = [];
        while (H--) {
          var _ = Q[H];
          if (H && $)
            _ = Q0(_, F0($));
          D = D0(_.length, D), B[H] = !J && ($ || X >= 120 && _.length >= 120) ? new V1(H && _) : Y;
        }
        _ = Q[0];
        var z = -1, E = B[0];
        Q:
          while (++z < X && M.length < D) {
            var L = _[z], A = $ ? $(L) : L;
            if (L = J || L !== 0 ? L : 0, !(E ? l1(E, A) : Z(M, A, J))) {
              H = q;
              while (--H) {
                var h = B[H];
                if (!(h ? l1(h, A) : Z(Q[H], A, J)))
                  continue Q;
              }
              if (E)
                E.push(A);
              M.push(L);
            }
          }
        return M;
      }
      function X7(Q, $, J, Z) {
        return u0(Q, function(X, q, H) {
          $(Z, J(X), q, H);
        }), Z;
      }
      function $2(Q, $, J) {
        $ = G1($, Q), Q = E5(Q, $);
        var Z = Q == null ? Q : Q[n0(j0($))];
        return Z == null ? Y : E0(Z, Q, J);
      }
      function m8(Q) {
        return J0(Q) && W0(Q) == S1;
      }
      function K7(Q) {
        return J0(Q) && W0(Q) == n1;
      }
      function q7(Q) {
        return J0(Q) && W0(Q) == y1;
      }
      function J2(Q, $, J, Z, X) {
        if (Q === $)
          return true;
        if (Q == null || $ == null || !J0(Q) && !J0($))
          return Q !== Q && $ !== $;
        return Y7(Q, $, J, Z, J2, X);
      }
      function Y7(Q, $, J, Z, X, q) {
        var H = m(Q), B = m($), D = H ? D2 : G0(Q), M = B ? D2 : G0($);
        D = D == S1 ? l0 : D, M = M == S1 ? l0 : M;
        var _ = D == l0, z = M == l0, E = D == M;
        if (E && M1(Q)) {
          if (!M1($))
            return false;
          H = true, _ = false;
        }
        if (E && !_)
          return q || (q = new g0), H || h1(Q) ? M5(Q, $, J, Z, X, q) : j7(Q, $, D, J, Z, X, q);
        if (!(J & F)) {
          var L = _ && s.call(Q, "__wrapped__"), A = z && s.call($, "__wrapped__");
          if (L || A) {
            var h = L ? Q.value() : Q, x = A ? $.value() : $;
            return q || (q = new g0), X(h, x, J, Z, q);
          }
        }
        if (!E)
          return false;
        return q || (q = new g0), m7(Q, $, J, Z, X, q);
      }
      function H7(Q) {
        return J0(Q) && G0(Q) == b0;
      }
      function d3(Q, $, J, Z) {
        var X = J.length, q = X, H = !Z;
        if (Q == null)
          return !q;
        Q = r(Q);
        while (X--) {
          var B = J[X];
          if (H && B[2] ? B[1] !== Q[B[0]] : !(B[0] in Q))
            return false;
        }
        while (++X < q) {
          B = J[X];
          var D = B[0], M = Q[D], _ = B[1];
          if (H && B[2]) {
            if (M === Y && !(D in Q))
              return false;
          } else {
            var z = new g0;
            if (Z)
              var E = Z(M, _, D, Q, $, z);
            if (!(E === Y ? J2(_, M, F | f, Z, z) : E))
              return false;
          }
        }
        return true;
      }
      function v8(Q) {
        if (!$0(Q) || u7(Q))
          return false;
        var $ = Q1(Q) ? H$ : aQ;
        return $.test(C1(Q));
      }
      function B7(Q) {
        return J0(Q) && W0(Q) == c1;
      }
      function U7(Q) {
        return J0(Q) && G0(Q) == h0;
      }
      function D7(Q) {
        return J0(Q) && Q3(Q.length) && !!e[W0(Q)];
      }
      function b8(Q) {
        if (typeof Q == "function")
          return Q;
        if (Q == null)
          return P0;
        if (typeof Q == "object")
          return m(Q) ? g8(Q[0], Q[1]) : p8(Q);
        return KQ(Q);
      }
      function c3(Q) {
        if (!K2(Q))
          return M$(Q);
        var $ = [];
        for (var J in r(Q))
          if (s.call(Q, J) && J != "constructor")
            $.push(J);
        return $;
      }
      function G7(Q) {
        if (!$0(Q))
          return o7(Q);
        var $ = K2(Q), J = [];
        for (var Z in Q)
          if (!(Z == "constructor" && ($ || !s.call(Q, Z))))
            J.push(Z);
        return J;
      }
      function u3(Q, $) {
        return Q < $;
      }
      function h8(Q, $) {
        var J = -1, Z = O0(Q) ? G(Q.length) : [];
        return U1(Q, function(X, q, H) {
          Z[++J] = $(X, q, H);
        }), Z;
      }
      function p8(Q) {
        var $ = K6(Q);
        if ($.length == 1 && $[0][2])
          return V5($[0][0], $[0][1]);
        return function(J) {
          return J === Q || d3(J, Q, $);
        };
      }
      function g8(Q, $) {
        if (Y6(Q) && O5($))
          return V5(n0(Q), $);
        return function(J) {
          var Z = N6(J, Q);
          return Z === Y && Z === $ ? O6(J, Q) : J2($, Z, F | f);
        };
      }
      function h2(Q, $, J, Z, X) {
        if (Q === $)
          return;
        h3($, function(q, H) {
          if (X || (X = new g0), $0(q))
            W7(Q, $, H, J, h2, Z, X);
          else {
            var B = Z ? Z(B6(Q, H), q, H + "", Q, $, X) : Y;
            if (B === Y)
              B = q;
            v3(Q, H, B);
          }
        }, V0);
      }
      function W7(Q, $, J, Z, X, q, H) {
        var B = B6(Q, J), D = B6($, J), M = H.get(D);
        if (M) {
          v3(Q, J, M);
          return;
        }
        var _ = q ? q(B, D, J + "", Q, $, H) : Y, z = _ === Y;
        if (z) {
          var E = m(D), L = !E && M1(D), A = !E && !L && h1(D);
          if (_ = D, E || L || A)
            if (m(B))
              _ = B;
            else if (Z0(B))
              _ = N0(B);
            else if (L)
              z = false, _ = a8(D, true);
            else if (A)
              z = false, _ = e8(D, true);
            else
              _ = [];
          else if (Y2(D) || w1(D)) {
            if (_ = B, w1(B))
              _ = s5(B);
            else if (!$0(B) || Q1(B))
              _ = N5(D);
          } else
            z = false;
        }
        if (z)
          H.set(D, _), X(_, D, Z, q, H), H.delete(D);
        v3(Q, J, _);
      }
      function y8(Q, $) {
        var J = Q.length;
        if (!J)
          return;
        return $ += $ < 0 ? J : 0, e0($, J) ? Q[$] : Y;
      }
      function d8(Q, $, J) {
        if ($.length)
          $ = Q0($, function(q) {
            if (m(q))
              return function(H) {
                return E1(H, q.length === 1 ? q[0] : q);
              };
            return q;
          });
        else
          $ = [P0];
        var Z = -1;
        $ = Q0($, F0(T()));
        var X = h8(Q, function(q, H, B) {
          var D = Q0($, function(M) {
            return M(q);
          });
          return { criteria: D, index: ++Z, value: q };
        });
        return g4(X, function(q, H) {
          return L7(q, H, J);
        });
      }
      function M7(Q, $) {
        return c8(Q, $, function(J, Z) {
          return O6(Q, Z);
        });
      }
      function c8(Q, $, J) {
        var Z = -1, X = $.length, q = {};
        while (++Z < X) {
          var H = $[Z], B = E1(Q, H);
          if (J(B, H))
            Z2(q, G1(H, Q), B);
        }
        return q;
      }
      function _7(Q) {
        return function($) {
          return E1($, Q);
        };
      }
      function i3(Q, $, J, Z) {
        var X = Z ? p4 : T1, q = -1, H = $.length, B = Q;
        if (Q === $)
          $ = N0($);
        if (J)
          B = Q0(Q, F0(J));
        while (++q < H) {
          var D = 0, M = $[q], _ = J ? J(M) : M;
          while ((D = X(B, _, D, Z)) > -1) {
            if (B !== Q)
              T2.call(B, D, 1);
            T2.call(Q, D, 1);
          }
        }
        return Q;
      }
      function u8(Q, $) {
        var J = Q ? $.length : 0, Z = J - 1;
        while (J--) {
          var X = $[J];
          if (J == Z || X !== q) {
            var q = X;
            if (e0(X))
              T2.call(Q, X, 1);
            else
              s3(Q, X);
          }
        }
        return Q;
      }
      function n3(Q, $) {
        return Q + x2(w8() * ($ - Q + 1));
      }
      function z7(Q, $, J, Z) {
        var X = -1, q = q0(A2(($ - Q) / (J || 1)), 0), H = G(q);
        while (q--)
          H[Z ? q : ++X] = Q, Q += J;
        return H;
      }
      function l3(Q, $) {
        var J = "";
        if (!Q || $ < 1 || $ > X1)
          return J;
        do {
          if ($ % 2)
            J += Q;
          if ($ = x2($ / 2), $)
            Q += Q;
        } while ($);
        return J;
      }
      function y(Q, $) {
        return U6(P5(Q, $, P0), Q + "");
      }
      function N7(Q) {
        return R8(p1(Q));
      }
      function O7(Q, $) {
        var J = p1(Q);
        return o2(J, P1($, 0, J.length));
      }
      function Z2(Q, $, J, Z) {
        if (!$0(Q))
          return Q;
        $ = G1($, Q);
        var X = -1, q = $.length, H = q - 1, B = Q;
        while (B != null && ++X < q) {
          var D = n0($[X]), M = J;
          if (D === "__proto__" || D === "constructor" || D === "prototype")
            return Q;
          if (X != H) {
            var _ = B[D];
            if (M = Z ? Z(_, D, B) : Y, M === Y)
              M = $0(_) ? _ : e0($[X + 1]) ? [] : {};
          }
          e1(B, D, M), B = B[D];
        }
        return Q;
      }
      var i8 = !k2 ? P0 : function(Q, $) {
        return k2.set(Q, $), Q;
      }, V7 = !I2 ? P0 : function(Q, $) {
        return I2(Q, "toString", { configurable: true, enumerable: false, value: P6($), writable: true });
      };
      function P7(Q) {
        return o2(p1(Q));
      }
      function f0(Q, $, J) {
        var Z = -1, X = Q.length;
        if ($ < 0)
          $ = -$ > X ? 0 : X + $;
        if (J = J > X ? X : J, J < 0)
          J += X;
        X = $ > J ? 0 : J - $ >>> 0, $ >>>= 0;
        var q = G(X);
        while (++Z < X)
          q[Z] = Q[Z + $];
        return q;
      }
      function E7(Q, $) {
        var J;
        return U1(Q, function(Z, X, q) {
          return J = $(Z, X, q), !J;
        }), !!J;
      }
      function p2(Q, $, J) {
        var Z = 0, X = Q == null ? Z : Q.length;
        if (typeof $ == "number" && $ === $ && X <= CQ) {
          while (Z < X) {
            var q = Z + X >>> 1, H = Q[q];
            if (H !== null && !w0(H) && (J ? H <= $ : H < $))
              Z = q + 1;
            else
              X = q;
          }
          return X;
        }
        return o3(Q, $, P0, J);
      }
      function o3(Q, $, J, Z) {
        var X = 0, q = Q == null ? 0 : Q.length;
        if (q === 0)
          return 0;
        $ = J($);
        var H = $ !== $, B = $ === null, D = w0($), M = $ === Y;
        while (X < q) {
          var _ = x2((X + q) / 2), z = J(Q[_]), E = z !== Y, L = z === null, A = z === z, h = w0(z);
          if (H)
            var x = Z || A;
          else if (M)
            x = A && (Z || E);
          else if (B)
            x = A && E && (Z || !L);
          else if (D)
            x = A && E && !L && (Z || !h);
          else if (L || h)
            x = false;
          else
            x = Z ? z <= $ : z < $;
          if (x)
            X = _ + 1;
          else
            q = _;
        }
        return D0(q, FQ);
      }
      function n8(Q, $) {
        var J = -1, Z = Q.length, X = 0, q = [];
        while (++J < Z) {
          var H = Q[J], B = $ ? $(H) : H;
          if (!J || !y0(B, D)) {
            var D = B;
            q[X++] = H === 0 ? 0 : H;
          }
        }
        return q;
      }
      function l8(Q) {
        if (typeof Q == "number")
          return Q;
        if (w0(Q))
          return U2;
        return +Q;
      }
      function C0(Q) {
        if (typeof Q == "string")
          return Q;
        if (m(Q))
          return Q0(Q, C0) + "";
        if (w0(Q))
          return S8 ? S8.call(Q) : "";
        var $ = Q + "";
        return $ == "0" && 1 / Q == -_1 ? "-0" : $;
      }
      function D1(Q, $, J) {
        var Z = -1, X = O2, q = Q.length, H = true, B = [], D = B;
        if (J)
          H = false, X = C3;
        else if (q >= S) {
          var M = $ ? null : k7(Q);
          if (M)
            return P2(M);
          H = false, X = l1, D = new V1;
        } else
          D = $ ? [] : B;
        Q:
          while (++Z < q) {
            var _ = Q[Z], z = $ ? $(_) : _;
            if (_ = J || _ !== 0 ? _ : 0, H && z === z) {
              var E = D.length;
              while (E--)
                if (D[E] === z)
                  continue Q;
              if ($)
                D.push(z);
              B.push(_);
            } else if (!X(D, z, J)) {
              if (D !== B)
                D.push(z);
              B.push(_);
            }
          }
        return B;
      }
      function s3(Q, $) {
        return $ = G1($, Q), Q = E5(Q, $), Q == null || delete Q[n0(j0($))];
      }
      function o8(Q, $, J, Z) {
        return Z2(Q, $, J(E1(Q, $)), Z);
      }
      function g2(Q, $, J, Z) {
        var X = Q.length, q = Z ? X : -1;
        while ((Z ? q-- : ++q < X) && $(Q[q], q, Q))
          ;
        return J ? f0(Q, Z ? 0 : q, Z ? q + 1 : X) : f0(Q, Z ? q + 1 : 0, Z ? X : q);
      }
      function s8(Q, $) {
        var J = Q;
        if (J instanceof u)
          J = J.value();
        return w3($, function(Z, X) {
          return X.func.apply(X.thisArg, q1([Z], X.args));
        }, J);
      }
      function t3(Q, $, J) {
        var Z = Q.length;
        if (Z < 2)
          return Z ? D1(Q[0]) : [];
        var X = -1, q = G(Z);
        while (++X < Z) {
          var H = Q[X], B = -1;
          while (++B < Z)
            if (B != X)
              q[X] = Q2(q[X] || H, Q[B], $, J);
        }
        return D1(B0(q, 1), $, J);
      }
      function t8(Q, $, J) {
        var Z = -1, X = Q.length, q = $.length, H = {};
        while (++Z < X) {
          var B = Z < q ? $[Z] : Y;
          J(H, Q[Z], B);
        }
        return H;
      }
      function r3(Q) {
        return Z0(Q) ? Q : [];
      }
      function a3(Q) {
        return typeof Q == "function" ? Q : P0;
      }
      function G1(Q, $) {
        if (m(Q))
          return Q;
        return Y6(Q, $) ? [Q] : S5(l(Q));
      }
      var F7 = y;
      function W1(Q, $, J) {
        var Z = Q.length;
        return J = J === Y ? Z : J, !$ && J >= Z ? Q : f0(Q, $, J);
      }
      var r8 = B$ || function(Q) {
        return Y0.clearTimeout(Q);
      };
      function a8(Q, $) {
        if ($)
          return Q.slice();
        var J = Q.length, Z = V8 ? V8(J) : new Q.constructor(J);
        return Q.copy(Z), Z;
      }
      function e3(Q) {
        var $ = new Q.constructor(Q.byteLength);
        return new L2($).set(new L2(Q)), $;
      }
      function C7(Q, $) {
        var J = $ ? e3(Q.buffer) : Q.buffer;
        return new Q.constructor(J, Q.byteOffset, Q.byteLength);
      }
      function w7(Q) {
        var $ = new Q.constructor(Q.source, m6.exec(Q));
        return $.lastIndex = Q.lastIndex, $;
      }
      function S7(Q) {
        return a1 ? r(a1.call(Q)) : {};
      }
      function e8(Q, $) {
        var J = $ ? e3(Q.buffer) : Q.buffer;
        return new Q.constructor(J, Q.byteOffset, Q.length);
      }
      function Q5(Q, $) {
        if (Q !== $) {
          var J = Q !== Y, Z = Q === null, X = Q === Q, q = w0(Q), H = $ !== Y, B = $ === null, D = $ === $, M = w0($);
          if (!B && !M && !q && Q > $ || q && H && D && !B && !M || Z && H && D || !J && D || !X)
            return 1;
          if (!Z && !q && !M && Q < $ || M && J && X && !Z && !q || B && J && X || !H && X || !D)
            return -1;
        }
        return 0;
      }
      function L7(Q, $, J) {
        var Z = -1, X = Q.criteria, q = $.criteria, H = X.length, B = J.length;
        while (++Z < H) {
          var D = Q5(X[Z], q[Z]);
          if (D) {
            if (Z >= B)
              return D;
            var M = J[Z];
            return D * (M == "desc" ? -1 : 1);
          }
        }
        return Q.index - $.index;
      }
      function $5(Q, $, J, Z) {
        var X = -1, q = Q.length, H = J.length, B = -1, D = $.length, M = q0(q - H, 0), _ = G(D + M), z = !Z;
        while (++B < D)
          _[B] = $[B];
        while (++X < H)
          if (z || X < q)
            _[J[X]] = Q[X];
        while (M--)
          _[B++] = Q[X++];
        return _;
      }
      function J5(Q, $, J, Z) {
        var X = -1, q = Q.length, H = -1, B = J.length, D = -1, M = $.length, _ = q0(q - B, 0), z = G(_ + M), E = !Z;
        while (++X < _)
          z[X] = Q[X];
        var L = X;
        while (++D < M)
          z[L + D] = $[D];
        while (++H < B)
          if (E || X < q)
            z[L + J[H]] = Q[X++];
        return z;
      }
      function N0(Q, $) {
        var J = -1, Z = Q.length;
        $ || ($ = G(Z));
        while (++J < Z)
          $[J] = Q[J];
        return $;
      }
      function i0(Q, $, J, Z) {
        var X = !J;
        J || (J = {});
        var q = -1, H = $.length;
        while (++q < H) {
          var B = $[q], D = Z ? Z(J[B], Q[B], B, J, Q) : Y;
          if (D === Y)
            D = Q[B];
          if (X)
            t0(J, B, D);
          else
            e1(J, B, D);
        }
        return J;
      }
      function R7(Q, $) {
        return i0(Q, q6(Q), $);
      }
      function T7(Q, $) {
        return i0(Q, _5(Q), $);
      }
      function y2(Q, $) {
        return function(J, Z) {
          var X = m(J) ? f4 : t$, q = $ ? $() : {};
          return X(J, Q, T(Z, 2), q);
        };
      }
      function m1(Q) {
        return y(function($, J) {
          var Z = -1, X = J.length, q = X > 1 ? J[X - 1] : Y, H = X > 2 ? J[2] : Y;
          if (q = Q.length > 3 && typeof q == "function" ? (X--, q) : Y, H && M0(J[0], J[1], H))
            q = X < 3 ? Y : q, X = 1;
          $ = r($);
          while (++Z < X) {
            var B = J[Z];
            if (B)
              Q($, B, Z, q);
          }
          return $;
        });
      }
      function Z5(Q, $) {
        return function(J, Z) {
          if (J == null)
            return J;
          if (!O0(J))
            return Q(J, Z);
          var X = J.length, q = $ ? X : -1, H = r(J);
          while ($ ? q-- : ++q < X)
            if (Z(H[q], q, H) === false)
              break;
          return J;
        };
      }
      function X5(Q) {
        return function($, J, Z) {
          var X = -1, q = r($), H = Z($), B = H.length;
          while (B--) {
            var D = H[Q ? B : ++X];
            if (J(q[D], D, q) === false)
              break;
          }
          return $;
        };
      }
      function I7(Q, $, J) {
        var Z = $ & I, X = X2(Q);
        function q() {
          var H = this && this !== Y0 && this instanceof q ? X : Q;
          return H.apply(Z ? J : this, arguments);
        }
        return q;
      }
      function K5(Q) {
        return function($) {
          $ = l($);
          var J = I1($) ? p0($) : Y, Z = J ? J[0] : $.charAt(0), X = J ? W1(J, 1).join("") : $.slice(1);
          return Z[Q]() + X;
        };
      }
      function v1(Q) {
        return function($) {
          return w3(ZQ(JQ($).replace(V4, "")), Q, "");
        };
      }
      function X2(Q) {
        return function() {
          var $ = arguments;
          switch ($.length) {
            case 0:
              return new Q;
            case 1:
              return new Q($[0]);
            case 2:
              return new Q($[0], $[1]);
            case 3:
              return new Q($[0], $[1], $[2]);
            case 4:
              return new Q($[0], $[1], $[2], $[3]);
            case 5:
              return new Q($[0], $[1], $[2], $[3], $[4]);
            case 6:
              return new Q($[0], $[1], $[2], $[3], $[4], $[5]);
            case 7:
              return new Q($[0], $[1], $[2], $[3], $[4], $[5], $[6]);
          }
          var J = j1(Q.prototype), Z = Q.apply(J, $);
          return $0(Z) ? Z : J;
        };
      }
      function A7(Q, $, J) {
        var Z = X2(Q);
        function X() {
          var q = arguments.length, H = G(q), B = q, D = b1(X);
          while (B--)
            H[B] = arguments[B];
          var M = q < 3 && H[0] !== D && H[q - 1] !== D ? [] : Y1(H, D);
          if (q -= M.length, q < J)
            return U5(Q, $, d2, X.placeholder, Y, H, M, Y, Y, J - q);
          var _ = this && this !== Y0 && this instanceof X ? Z : Q;
          return E0(_, this, H);
        }
        return X;
      }
      function q5(Q) {
        return function($, J, Z) {
          var X = r($);
          if (!O0($)) {
            var q = T(J, 3);
            $ = H0($), J = function(B) {
              return q(X[B], B, X);
            };
          }
          var H = Q($, J, Z);
          return H > -1 ? X[q ? $[H] : H] : Y;
        };
      }
      function Y5(Q) {
        return a0(function($) {
          var J = $.length, Z = J, X = x0.prototype.thru;
          if (Q)
            $.reverse();
          while (Z--) {
            var q = $[Z];
            if (typeof q != "function")
              throw new A0(P);
            if (X && !H && n2(q) == "wrapper")
              var H = new x0([], true);
          }
          Z = H ? Z : J;
          while (++Z < J) {
            q = $[Z];
            var B = n2(q), D = B == "wrapper" ? X6(q) : Y;
            if (D && H6(D[0]) && D[1] == (R0 | t | U0 | Z1) && !D[4].length && D[9] == 1)
              H = H[n2(D[0])].apply(H, D[3]);
            else
              H = q.length == 1 && H6(q) ? H[B]() : H.thru(q);
          }
          return function() {
            var M = arguments, _ = M[0];
            if (H && M.length == 1 && m(_))
              return H.plant(_).value();
            var z = 0, E = J ? $[z].apply(this, M) : _;
            while (++z < J)
              E = $[z].call(this, E);
            return E;
          };
        });
      }
      function d2(Q, $, J, Z, X, q, H, B, D, M) {
        var _ = $ & R0, z = $ & I, E = $ & v, L = $ & (t | z0), A = $ & X3, h = E ? Y : X2(Q);
        function x() {
          var c = arguments.length, i = G(c), S0 = c;
          while (S0--)
            i[S0] = arguments[S0];
          if (L)
            var _0 = b1(x), L0 = d4(i, _0);
          if (Z)
            i = $5(i, Z, X, L);
          if (q)
            i = J5(i, q, H, L);
          if (c -= L0, L && c < M) {
            var X0 = Y1(i, _0);
            return U5(Q, $, d2, x.placeholder, J, i, X0, B, D, M - c);
          }
          var d0 = z ? J : this, J1 = E ? d0[Q] : Q;
          if (c = i.length, B)
            i = t7(i, B);
          else if (A && c > 1)
            i.reverse();
          if (_ && D < c)
            i.length = D;
          if (this && this !== Y0 && this instanceof x)
            J1 = h || X2(J1);
          return J1.apply(d0, i);
        }
        return x;
      }
      function H5(Q, $) {
        return function(J, Z) {
          return X7(J, Q, $(Z), {});
        };
      }
      function c2(Q, $) {
        return function(J, Z) {
          var X;
          if (J === Y && Z === Y)
            return $;
          if (J !== Y)
            X = J;
          if (Z !== Y) {
            if (X === Y)
              return Z;
            if (typeof J == "string" || typeof Z == "string")
              J = C0(J), Z = C0(Z);
            else
              J = l8(J), Z = l8(Z);
            X = Q(J, Z);
          }
          return X;
        };
      }
      function Q6(Q) {
        return a0(function($) {
          return $ = Q0($, F0(T())), y(function(J) {
            var Z = this;
            return Q($, function(X) {
              return E0(X, Z, J);
            });
          });
        });
      }
      function u2(Q, $) {
        $ = $ === Y ? " " : C0($);
        var J = $.length;
        if (J < 2)
          return J ? l3($, Q) : $;
        var Z = l3($, A2(Q / A1($)));
        return I1($) ? W1(p0(Z), 0, Q).join("") : Z.slice(0, Q);
      }
      function x7(Q, $, J, Z) {
        var X = $ & I, q = X2(Q);
        function H() {
          var B = -1, D = arguments.length, M = -1, _ = Z.length, z = G(_ + D), E = this && this !== Y0 && this instanceof H ? q : Q;
          while (++M < _)
            z[M] = Z[M];
          while (D--)
            z[M++] = arguments[++B];
          return E0(E, X ? J : this, z);
        }
        return H;
      }
      function B5(Q) {
        return function($, J, Z) {
          if (Z && typeof Z != "number" && M0($, J, Z))
            J = Z = Y;
          if ($ = $1($), J === Y)
            J = $, $ = 0;
          else
            J = $1(J);
          return Z = Z === Y ? $ < J ? 1 : -1 : $1(Z), z7($, J, Z, Q);
        };
      }
      function i2(Q) {
        return function($, J) {
          if (!(typeof $ == "string" && typeof J == "string"))
            $ = m0($), J = m0(J);
          return Q($, J);
        };
      }
      function U5(Q, $, J, Z, X, q, H, B, D, M) {
        var _ = $ & t, z = _ ? H : Y, E = _ ? Y : H, L = _ ? q : Y, A = _ ? Y : q;
        if ($ |= _ ? U0 : v0, $ &= ~(_ ? v0 : U0), !($ & o))
          $ &= ~(I | v);
        var h = [Q, $, X, L, z, A, E, B, D, M], x = J.apply(Y, h);
        if (H6(Q))
          F5(x, h);
        return x.placeholder = Z, C5(x, Q, $);
      }
      function $6(Q) {
        var $ = K0[Q];
        return function(J, Z) {
          if (J = m0(J), Z = Z == null ? 0 : D0(b(Z), 292), Z && C8(J)) {
            var X = (l(J) + "e").split("e"), q = $(X[0] + "e" + (+X[1] + Z));
            return X = (l(q) + "e").split("e"), +(X[0] + "e" + (+X[1] - Z));
          }
          return $(J);
        };
      }
      var k7 = !(k1 && 1 / P2(new k1([, -0]))[1] == _1) ? C6 : function(Q) {
        return new k1(Q);
      };
      function D5(Q) {
        return function($) {
          var J = G0($);
          if (J == b0)
            return x3($);
          if (J == h0)
            return s4($);
          return y4($, Q($));
        };
      }
      function r0(Q, $, J, Z, X, q, H, B) {
        var D = $ & v;
        if (!D && typeof Q != "function")
          throw new A0(P);
        var M = Z ? Z.length : 0;
        if (!M)
          $ &= ~(U0 | v0), Z = X = Y;
        if (H = H === Y ? H : q0(b(H), 0), B = B === Y ? B : b(B), M -= X ? X.length : 0, $ & v0) {
          var _ = Z, z = X;
          Z = X = Y;
        }
        var E = D ? Y : X6(Q), L = [Q, $, J, Z, X, _, z, q, H, B];
        if (E)
          l7(L, E);
        if (Q = L[0], $ = L[1], J = L[2], Z = L[3], X = L[4], B = L[9] = L[9] === Y ? D ? 0 : Q.length : q0(L[9] - M, 0), !B && $ & (t | z0))
          $ &= ~(t | z0);
        if (!$ || $ == I)
          var A = I7(Q, $, J);
        else if ($ == t || $ == z0)
          A = A7(Q, $, B);
        else if (($ == U0 || $ == (I | U0)) && !X.length)
          A = x7(Q, $, J, Z);
        else
          A = d2.apply(Y, L);
        var h = E ? i8 : F5;
        return C5(h(A, L), Q, $);
      }
      function G5(Q, $, J, Z) {
        if (Q === Y || y0(Q, x1[J]) && !s.call(Z, J))
          return $;
        return Q;
      }
      function W5(Q, $, J, Z, X, q) {
        if ($0(Q) && $0($))
          q.set($, Q), h2(Q, $, Y, W5, q), q.delete($);
        return Q;
      }
      function f7(Q) {
        return Y2(Q) ? Y : Q;
      }
      function M5(Q, $, J, Z, X, q) {
        var H = J & F, B = Q.length, D = $.length;
        if (B != D && !(H && D > B))
          return false;
        var M = q.get(Q), _ = q.get($);
        if (M && _)
          return M == $ && _ == Q;
        var z = -1, E = true, L = J & f ? new V1 : Y;
        q.set(Q, $), q.set($, Q);
        while (++z < B) {
          var A = Q[z], h = $[z];
          if (Z)
            var x = H ? Z(h, A, z, $, Q, q) : Z(A, h, z, Q, $, q);
          if (x !== Y) {
            if (x)
              continue;
            E = false;
            break;
          }
          if (L) {
            if (!S3($, function(c, i) {
              if (!l1(L, i) && (A === c || X(A, c, J, Z, q)))
                return L.push(i);
            })) {
              E = false;
              break;
            }
          } else if (!(A === h || X(A, h, J, Z, q))) {
            E = false;
            break;
          }
        }
        return q.delete(Q), q.delete($), E;
      }
      function j7(Q, $, J, Z, X, q, H) {
        switch (J) {
          case L1:
            if (Q.byteLength != $.byteLength || Q.byteOffset != $.byteOffset)
              return false;
            Q = Q.buffer, $ = $.buffer;
          case n1:
            if (Q.byteLength != $.byteLength || !q(new L2(Q), new L2($)))
              return false;
            return true;
          case g1:
          case y1:
          case d1:
            return y0(+Q, +$);
          case G2:
            return Q.name == $.name && Q.message == $.message;
          case c1:
          case u1:
            return Q == $ + "";
          case b0:
            var B = x3;
          case h0:
            var D = Z & F;
            if (B || (B = P2), Q.size != $.size && !D)
              return false;
            var M = H.get(Q);
            if (M)
              return M == $;
            Z |= f, H.set(Q, $);
            var _ = M5(B(Q), B($), Z, X, q, H);
            return H.delete(Q), _;
          case M2:
            if (a1)
              return a1.call(Q) == a1.call($);
        }
        return false;
      }
      function m7(Q, $, J, Z, X, q) {
        var H = J & F, B = J6(Q), D = B.length, M = J6($), _ = M.length;
        if (D != _ && !H)
          return false;
        var z = D;
        while (z--) {
          var E = B[z];
          if (!(H ? E in $ : s.call($, E)))
            return false;
        }
        var L = q.get(Q), A = q.get($);
        if (L && A)
          return L == $ && A == Q;
        var h = true;
        q.set(Q, $), q.set($, Q);
        var x = H;
        while (++z < D) {
          E = B[z];
          var c = Q[E], i = $[E];
          if (Z)
            var S0 = H ? Z(i, c, E, $, Q, q) : Z(c, i, E, Q, $, q);
          if (!(S0 === Y ? c === i || X(c, i, J, Z, q) : S0)) {
            h = false;
            break;
          }
          x || (x = E == "constructor");
        }
        if (h && !x) {
          var _0 = Q.constructor, L0 = $.constructor;
          if (_0 != L0 && (("constructor" in Q) && ("constructor" in $)) && !(typeof _0 == "function" && _0 instanceof _0 && typeof L0 == "function" && L0 instanceof L0))
            h = false;
        }
        return q.delete(Q), q.delete($), h;
      }
      function a0(Q) {
        return U6(P5(Q, Y, I5), Q + "");
      }
      function J6(Q) {
        return j8(Q, H0, q6);
      }
      function Z6(Q) {
        return j8(Q, V0, _5);
      }
      var X6 = !k2 ? C6 : function(Q) {
        return k2.get(Q);
      };
      function n2(Q) {
        var $ = Q.name + "", J = f1[$], Z = s.call(f1, $) ? J.length : 0;
        while (Z--) {
          var X = J[Z], q = X.func;
          if (q == null || q == Q)
            return X.name;
        }
        return $;
      }
      function b1(Q) {
        var $ = s.call(K, "placeholder") ? K : Q;
        return $.placeholder;
      }
      function T() {
        var Q = K.iteratee || E6;
        return Q = Q === E6 ? b8 : Q, arguments.length ? Q(arguments[0], arguments[1]) : Q;
      }
      function l2(Q, $) {
        var J = Q.__data__;
        return c7($) ? J[typeof $ == "string" ? "string" : "hash"] : J.map;
      }
      function K6(Q) {
        var $ = H0(Q), J = $.length;
        while (J--) {
          var Z = $[J], X = Q[Z];
          $[J] = [Z, X, O5(X)];
        }
        return $;
      }
      function F1(Q, $) {
        var J = n4(Q, $);
        return v8(J) ? J : Y;
      }
      function v7(Q) {
        var $ = s.call(Q, N1), J = Q[N1];
        try {
          Q[N1] = Y;
          var Z = true;
        } catch (q) {
        }
        var X = w2.call(Q);
        if (Z)
          if ($)
            Q[N1] = J;
          else
            delete Q[N1];
        return X;
      }
      var q6 = !f3 ? w6 : function(Q) {
        if (Q == null)
          return [];
        return Q = r(Q), K1(f3(Q), function($) {
          return E8.call(Q, $);
        });
      }, _5 = !f3 ? w6 : function(Q) {
        var $ = [];
        while (Q)
          q1($, q6(Q)), Q = R2(Q);
        return $;
      }, G0 = W0;
      if (j3 && G0(new j3(new ArrayBuffer(1))) != L1 || s1 && G0(new s1) != b0 || m3 && G0(m3.resolve()) != x6 || k1 && G0(new k1) != h0 || t1 && G0(new t1) != i1)
        G0 = function(Q) {
          var $ = W0(Q), J = $ == l0 ? Q.constructor : Y, Z = J ? C1(J) : "";
          if (Z)
            switch (Z) {
              case O$:
                return L1;
              case V$:
                return b0;
              case P$:
                return x6;
              case E$:
                return h0;
              case F$:
                return i1;
            }
          return $;
        };
      function b7(Q, $, J) {
        var Z = -1, X = J.length;
        while (++Z < X) {
          var q = J[Z], H = q.size;
          switch (q.type) {
            case "drop":
              Q += H;
              break;
            case "dropRight":
              $ -= H;
              break;
            case "take":
              $ = D0($, Q + H);
              break;
            case "takeRight":
              Q = q0(Q, $ - H);
              break;
          }
        }
        return { start: Q, end: $ };
      }
      function h7(Q) {
        var $ = Q.match(uQ);
        return $ ? $[1].split(iQ) : [];
      }
      function z5(Q, $, J) {
        $ = G1($, Q);
        var Z = -1, X = $.length, q = false;
        while (++Z < X) {
          var H = n0($[Z]);
          if (!(q = Q != null && J(Q, H)))
            break;
          Q = Q[H];
        }
        if (q || ++Z != X)
          return q;
        return X = Q == null ? 0 : Q.length, !!X && Q3(X) && e0(H, X) && (m(Q) || w1(Q));
      }
      function p7(Q) {
        var $ = Q.length, J = new Q.constructor($);
        if ($ && typeof Q[0] == "string" && s.call(Q, "index"))
          J.index = Q.index, J.input = Q.input;
        return J;
      }
      function N5(Q) {
        return typeof Q.constructor == "function" && !K2(Q) ? j1(R2(Q)) : {};
      }
      function g7(Q, $, J) {
        var Z = Q.constructor;
        switch ($) {
          case n1:
            return e3(Q);
          case g1:
          case y1:
            return new Z(+Q);
          case L1:
            return C7(Q, J);
          case K3:
          case q3:
          case Y3:
          case H3:
          case B3:
          case U3:
          case D3:
          case G3:
          case W3:
            return e8(Q, J);
          case b0:
            return new Z;
          case d1:
          case u1:
            return new Z(Q);
          case c1:
            return w7(Q);
          case h0:
            return new Z;
          case M2:
            return S7(Q);
        }
      }
      function y7(Q, $) {
        var J = $.length;
        if (!J)
          return Q;
        var Z = J - 1;
        return $[Z] = (J > 1 ? "& " : "") + $[Z], $ = $.join(J > 2 ? ", " : " "), Q.replace(cQ, "{\n/* [wrapped with " + $ + "] */\n");
      }
      function d7(Q) {
        return m(Q) || w1(Q) || !!(F8 && Q && Q[F8]);
      }
      function e0(Q, $) {
        var J = typeof Q;
        return $ = $ == null ? X1 : $, !!$ && (J == "number" || J != "symbol" && Q4.test(Q)) && (Q > -1 && Q % 1 == 0 && Q < $);
      }
      function M0(Q, $, J) {
        if (!$0(J))
          return false;
        var Z = typeof $;
        if (Z == "number" ? O0(J) && e0($, J.length) : Z == "string" && ($ in J))
          return y0(J[$], Q);
        return false;
      }
      function Y6(Q, $) {
        if (m(Q))
          return false;
        var J = typeof Q;
        if (J == "number" || J == "symbol" || J == "boolean" || Q == null || w0(Q))
          return true;
        return pQ.test(Q) || !hQ.test(Q) || $ != null && Q in r($);
      }
      function c7(Q) {
        var $ = typeof Q;
        return $ == "string" || $ == "number" || $ == "symbol" || $ == "boolean" ? Q !== "__proto__" : Q === null;
      }
      function H6(Q) {
        var $ = n2(Q), J = K[$];
        if (typeof J != "function" || !($ in u.prototype))
          return false;
        if (Q === J)
          return true;
        var Z = X6(J);
        return !!Z && Q === Z[0];
      }
      function u7(Q) {
        return !!O8 && O8 in Q;
      }
      var i7 = F2 ? Q1 : S6;
      function K2(Q) {
        var $ = Q && Q.constructor, J = typeof $ == "function" && $.prototype || x1;
        return Q === J;
      }
      function O5(Q) {
        return Q === Q && !$0(Q);
      }
      function V5(Q, $) {
        return function(J) {
          if (J == null)
            return false;
          return J[Q] === $ && ($ !== Y || (Q in r(J)));
        };
      }
      function n7(Q) {
        var $ = a2(Q, function(Z) {
          if (J.size === p)
            J.clear();
          return Z;
        }), J = $.cache;
        return $;
      }
      function l7(Q, $) {
        var J = Q[1], Z = $[1], X = J | Z, q = X < (I | v | R0), H = Z == R0 && J == t || Z == R0 && J == Z1 && Q[7].length <= $[8] || Z == (R0 | Z1) && $[7].length <= $[8] && J == t;
        if (!(q || H))
          return Q;
        if (Z & I)
          Q[2] = $[2], X |= J & I ? 0 : o;
        var B = $[3];
        if (B) {
          var D = Q[3];
          Q[3] = D ? $5(D, B, $[4]) : B, Q[4] = D ? Y1(Q[3], g) : $[4];
        }
        if (B = $[5], B)
          D = Q[5], Q[5] = D ? J5(D, B, $[6]) : B, Q[6] = D ? Y1(Q[5], g) : $[6];
        if (B = $[7], B)
          Q[7] = B;
        if (Z & R0)
          Q[8] = Q[8] == null ? $[8] : D0(Q[8], $[8]);
        if (Q[9] == null)
          Q[9] = $[9];
        return Q[0] = $[0], Q[1] = X, Q;
      }
      function o7(Q) {
        var $ = [];
        if (Q != null)
          for (var J in r(Q))
            $.push(J);
        return $;
      }
      function s7(Q) {
        return w2.call(Q);
      }
      function P5(Q, $, J) {
        return $ = q0($ === Y ? Q.length - 1 : $, 0), function() {
          var Z = arguments, X = -1, q = q0(Z.length - $, 0), H = G(q);
          while (++X < q)
            H[X] = Z[$ + X];
          X = -1;
          var B = G($ + 1);
          while (++X < $)
            B[X] = Z[X];
          return B[$] = J(H), E0(Q, this, B);
        };
      }
      function E5(Q, $) {
        return $.length < 2 ? Q : E1(Q, f0($, 0, -1));
      }
      function t7(Q, $) {
        var J = Q.length, Z = D0($.length, J), X = N0(Q);
        while (Z--) {
          var q = $[Z];
          Q[Z] = e0(q, J) ? X[q] : Y;
        }
        return Q;
      }
      function B6(Q, $) {
        if ($ === "constructor" && typeof Q[$] === "function")
          return;
        if ($ == "__proto__")
          return;
        return Q[$];
      }
      var F5 = w5(i8), q2 = D$ || function(Q, $) {
        return Y0.setTimeout(Q, $);
      }, U6 = w5(V7);
      function C5(Q, $, J) {
        var Z = $ + "";
        return U6(Q, y7(Z, r7(h7(Z), J)));
      }
      function w5(Q) {
        var $ = 0, J = 0;
        return function() {
          var Z = _$(), X = OQ - (Z - J);
          if (J = Z, X > 0) {
            if (++$ >= NQ)
              return arguments[0];
          } else
            $ = 0;
          return Q.apply(Y, arguments);
        };
      }
      function o2(Q, $) {
        var J = -1, Z = Q.length, X = Z - 1;
        $ = $ === Y ? Z : $;
        while (++J < $) {
          var q = n3(J, X), H = Q[q];
          Q[q] = Q[J], Q[J] = H;
        }
        return Q.length = $, Q;
      }
      var S5 = n7(function(Q) {
        var $ = [];
        if (Q.charCodeAt(0) === 46)
          $.push("");
        return Q.replace(gQ, function(J, Z, X, q) {
          $.push(X ? q.replace(oQ, "$1") : Z || J);
        }), $;
      });
      function n0(Q) {
        if (typeof Q == "string" || w0(Q))
          return Q;
        var $ = Q + "";
        return $ == "0" && 1 / Q == -_1 ? "-0" : $;
      }
      function C1(Q) {
        if (Q != null) {
          try {
            return C2.call(Q);
          } catch ($) {
          }
          try {
            return Q + "";
          } catch ($) {
          }
        }
        return "";
      }
      function r7(Q, $) {
        return I0(wQ, function(J) {
          var Z = "_." + J[0];
          if ($ & J[1] && !O2(Q, Z))
            Q.push(Z);
        }), Q.sort();
      }
      function L5(Q) {
        if (Q instanceof u)
          return Q.clone();
        var $ = new x0(Q.__wrapped__, Q.__chain__);
        return $.__actions__ = N0(Q.__actions__), $.__index__ = Q.__index__, $.__values__ = Q.__values__, $;
      }
      function a7(Q, $, J) {
        if (J ? M0(Q, $, J) : $ === Y)
          $ = 1;
        else
          $ = q0(b($), 0);
        var Z = Q == null ? 0 : Q.length;
        if (!Z || $ < 1)
          return [];
        var X = 0, q = 0, H = G(A2(Z / $));
        while (X < Z)
          H[q++] = f0(Q, X, X += $);
        return H;
      }
      function e7(Q) {
        var $ = -1, J = Q == null ? 0 : Q.length, Z = 0, X = [];
        while (++$ < J) {
          var q = Q[$];
          if (q)
            X[Z++] = q;
        }
        return X;
      }
      function QJ() {
        var Q = arguments.length;
        if (!Q)
          return [];
        var $ = G(Q - 1), J = arguments[0], Z = Q;
        while (Z--)
          $[Z - 1] = arguments[Z];
        return q1(m(J) ? N0(J) : [J], B0($, 1));
      }
      var $J = y(function(Q, $) {
        return Z0(Q) ? Q2(Q, B0($, 1, Z0, true)) : [];
      }), JJ = y(function(Q, $) {
        var J = j0($);
        if (Z0(J))
          J = Y;
        return Z0(Q) ? Q2(Q, B0($, 1, Z0, true), T(J, 2)) : [];
      }), ZJ = y(function(Q, $) {
        var J = j0($);
        if (Z0(J))
          J = Y;
        return Z0(Q) ? Q2(Q, B0($, 1, Z0, true), Y, J) : [];
      });
      function XJ(Q, $, J) {
        var Z = Q == null ? 0 : Q.length;
        if (!Z)
          return [];
        return $ = J || $ === Y ? 1 : b($), f0(Q, $ < 0 ? 0 : $, Z);
      }
      function KJ(Q, $, J) {
        var Z = Q == null ? 0 : Q.length;
        if (!Z)
          return [];
        return $ = J || $ === Y ? 1 : b($), $ = Z - $, f0(Q, 0, $ < 0 ? 0 : $);
      }
      function qJ(Q, $) {
        return Q && Q.length ? g2(Q, T($, 3), true, true) : [];
      }
      function YJ(Q, $) {
        return Q && Q.length ? g2(Q, T($, 3), true) : [];
      }
      function HJ(Q, $, J, Z) {
        var X = Q == null ? 0 : Q.length;
        if (!X)
          return [];
        if (J && typeof J != "number" && M0(Q, $, J))
          J = 0, Z = X;
        return Q7(Q, $, J, Z);
      }
      function R5(Q, $, J) {
        var Z = Q == null ? 0 : Q.length;
        if (!Z)
          return -1;
        var X = J == null ? 0 : b(J);
        if (X < 0)
          X = q0(Z + X, 0);
        return V2(Q, T($, 3), X);
      }
      function T5(Q, $, J) {
        var Z = Q == null ? 0 : Q.length;
        if (!Z)
          return -1;
        var X = Z - 1;
        if (J !== Y)
          X = b(J), X = J < 0 ? q0(Z + X, 0) : D0(X, Z - 1);
        return V2(Q, T($, 3), X, true);
      }
      function I5(Q) {
        var $ = Q == null ? 0 : Q.length;
        return $ ? B0(Q, 1) : [];
      }
      function BJ(Q) {
        var $ = Q == null ? 0 : Q.length;
        return $ ? B0(Q, _1) : [];
      }
      function UJ(Q, $) {
        var J = Q == null ? 0 : Q.length;
        if (!J)
          return [];
        return $ = $ === Y ? 1 : b($), B0(Q, $);
      }
      function DJ(Q) {
        var $ = -1, J = Q == null ? 0 : Q.length, Z = {};
        while (++$ < J) {
          var X = Q[$];
          Z[X[0]] = X[1];
        }
        return Z;
      }
      function A5(Q) {
        return Q && Q.length ? Q[0] : Y;
      }
      function GJ(Q, $, J) {
        var Z = Q == null ? 0 : Q.length;
        if (!Z)
          return -1;
        var X = J == null ? 0 : b(J);
        if (X < 0)
          X = q0(Z + X, 0);
        return T1(Q, $, X);
      }
      function WJ(Q) {
        var $ = Q == null ? 0 : Q.length;
        return $ ? f0(Q, 0, -1) : [];
      }
      var MJ = y(function(Q) {
        var $ = Q0(Q, r3);
        return $.length && $[0] === Q[0] ? y3($) : [];
      }), _J = y(function(Q) {
        var $ = j0(Q), J = Q0(Q, r3);
        if ($ === j0(J))
          $ = Y;
        else
          J.pop();
        return J.length && J[0] === Q[0] ? y3(J, T($, 2)) : [];
      }), zJ = y(function(Q) {
        var $ = j0(Q), J = Q0(Q, r3);
        if ($ = typeof $ == "function" ? $ : Y, $)
          J.pop();
        return J.length && J[0] === Q[0] ? y3(J, Y, $) : [];
      });
      function NJ(Q, $) {
        return Q == null ? "" : W$.call(Q, $);
      }
      function j0(Q) {
        var $ = Q == null ? 0 : Q.length;
        return $ ? Q[$ - 1] : Y;
      }
      function OJ(Q, $, J) {
        var Z = Q == null ? 0 : Q.length;
        if (!Z)
          return -1;
        var X = Z;
        if (J !== Y)
          X = b(J), X = X < 0 ? q0(Z + X, 0) : D0(X, Z - 1);
        return $ === $ ? r4(Q, $, X) : V2(Q, U8, X, true);
      }
      function VJ(Q, $) {
        return Q && Q.length ? y8(Q, b($)) : Y;
      }
      var PJ = y(x5);
      function x5(Q, $) {
        return Q && Q.length && $ && $.length ? i3(Q, $) : Q;
      }
      function EJ(Q, $, J) {
        return Q && Q.length && $ && $.length ? i3(Q, $, T(J, 2)) : Q;
      }
      function FJ(Q, $, J) {
        return Q && Q.length && $ && $.length ? i3(Q, $, Y, J) : Q;
      }
      var CJ = a0(function(Q, $) {
        var J = Q == null ? 0 : Q.length, Z = b3(Q, $);
        return u8(Q, Q0($, function(X) {
          return e0(X, J) ? +X : X;
        }).sort(Q5)), Z;
      });
      function wJ(Q, $) {
        var J = [];
        if (!(Q && Q.length))
          return J;
        var Z = -1, X = [], q = Q.length;
        $ = T($, 3);
        while (++Z < q) {
          var H = Q[Z];
          if ($(H, Z, Q))
            J.push(H), X.push(Z);
        }
        return u8(Q, X), J;
      }
      function D6(Q) {
        return Q == null ? Q : N$.call(Q);
      }
      function SJ(Q, $, J) {
        var Z = Q == null ? 0 : Q.length;
        if (!Z)
          return [];
        if (J && typeof J != "number" && M0(Q, $, J))
          $ = 0, J = Z;
        else
          $ = $ == null ? 0 : b($), J = J === Y ? Z : b(J);
        return f0(Q, $, J);
      }
      function LJ(Q, $) {
        return p2(Q, $);
      }
      function RJ(Q, $, J) {
        return o3(Q, $, T(J, 2));
      }
      function TJ(Q, $) {
        var J = Q == null ? 0 : Q.length;
        if (J) {
          var Z = p2(Q, $);
          if (Z < J && y0(Q[Z], $))
            return Z;
        }
        return -1;
      }
      function IJ(Q, $) {
        return p2(Q, $, true);
      }
      function AJ(Q, $, J) {
        return o3(Q, $, T(J, 2), true);
      }
      function xJ(Q, $) {
        var J = Q == null ? 0 : Q.length;
        if (J) {
          var Z = p2(Q, $, true) - 1;
          if (y0(Q[Z], $))
            return Z;
        }
        return -1;
      }
      function kJ(Q) {
        return Q && Q.length ? n8(Q) : [];
      }
      function fJ(Q, $) {
        return Q && Q.length ? n8(Q, T($, 2)) : [];
      }
      function jJ(Q) {
        var $ = Q == null ? 0 : Q.length;
        return $ ? f0(Q, 1, $) : [];
      }
      function mJ(Q, $, J) {
        if (!(Q && Q.length))
          return [];
        return $ = J || $ === Y ? 1 : b($), f0(Q, 0, $ < 0 ? 0 : $);
      }
      function vJ(Q, $, J) {
        var Z = Q == null ? 0 : Q.length;
        if (!Z)
          return [];
        return $ = J || $ === Y ? 1 : b($), $ = Z - $, f0(Q, $ < 0 ? 0 : $, Z);
      }
      function bJ(Q, $) {
        return Q && Q.length ? g2(Q, T($, 3), false, true) : [];
      }
      function hJ(Q, $) {
        return Q && Q.length ? g2(Q, T($, 3)) : [];
      }
      var pJ = y(function(Q) {
        return D1(B0(Q, 1, Z0, true));
      }), gJ = y(function(Q) {
        var $ = j0(Q);
        if (Z0($))
          $ = Y;
        return D1(B0(Q, 1, Z0, true), T($, 2));
      }), yJ = y(function(Q) {
        var $ = j0(Q);
        return $ = typeof $ == "function" ? $ : Y, D1(B0(Q, 1, Z0, true), Y, $);
      });
      function dJ(Q) {
        return Q && Q.length ? D1(Q) : [];
      }
      function cJ(Q, $) {
        return Q && Q.length ? D1(Q, T($, 2)) : [];
      }
      function uJ(Q, $) {
        return $ = typeof $ == "function" ? $ : Y, Q && Q.length ? D1(Q, Y, $) : [];
      }
      function G6(Q) {
        if (!(Q && Q.length))
          return [];
        var $ = 0;
        return Q = K1(Q, function(J) {
          if (Z0(J))
            return $ = q0(J.length, $), true;
        }), I3($, function(J) {
          return Q0(Q, L3(J));
        });
      }
      function k5(Q, $) {
        if (!(Q && Q.length))
          return [];
        var J = G6(Q);
        if ($ == null)
          return J;
        return Q0(J, function(Z) {
          return E0($, Y, Z);
        });
      }
      var iJ = y(function(Q, $) {
        return Z0(Q) ? Q2(Q, $) : [];
      }), nJ = y(function(Q) {
        return t3(K1(Q, Z0));
      }), lJ = y(function(Q) {
        var $ = j0(Q);
        if (Z0($))
          $ = Y;
        return t3(K1(Q, Z0), T($, 2));
      }), oJ = y(function(Q) {
        var $ = j0(Q);
        return $ = typeof $ == "function" ? $ : Y, t3(K1(Q, Z0), Y, $);
      }), sJ = y(G6);
      function tJ(Q, $) {
        return t8(Q || [], $ || [], e1);
      }
      function rJ(Q, $) {
        return t8(Q || [], $ || [], Z2);
      }
      var aJ = y(function(Q) {
        var $ = Q.length, J = $ > 1 ? Q[$ - 1] : Y;
        return J = typeof J == "function" ? (Q.pop(), J) : Y, k5(Q, J);
      });
      function f5(Q) {
        var $ = K(Q);
        return $.__chain__ = true, $;
      }
      function eJ(Q, $) {
        return $(Q), Q;
      }
      function s2(Q, $) {
        return $(Q);
      }
      var Q9 = a0(function(Q) {
        var $ = Q.length, J = $ ? Q[0] : 0, Z = this.__wrapped__, X = function(q) {
          return b3(q, Q);
        };
        if ($ > 1 || this.__actions__.length || !(Z instanceof u) || !e0(J))
          return this.thru(X);
        return Z = Z.slice(J, +J + ($ ? 1 : 0)), Z.__actions__.push({ func: s2, args: [X], thisArg: Y }), new x0(Z, this.__chain__).thru(function(q) {
          if ($ && !q.length)
            q.push(Y);
          return q;
        });
      });
      function $9() {
        return f5(this);
      }
      function J9() {
        return new x0(this.value(), this.__chain__);
      }
      function Z9() {
        if (this.__values__ === Y)
          this.__values__ = l5(this.value());
        var Q = this.__index__ >= this.__values__.length, $ = Q ? Y : this.__values__[this.__index__++];
        return { done: Q, value: $ };
      }
      function X9() {
        return this;
      }
      function K9(Q) {
        var $, J = this;
        while (J instanceof j2) {
          var Z = L5(J);
          if (Z.__index__ = 0, Z.__values__ = Y, $)
            X.__wrapped__ = Z;
          else
            $ = Z;
          var X = Z;
          J = J.__wrapped__;
        }
        return X.__wrapped__ = Q, $;
      }
      function q9() {
        var Q = this.__wrapped__;
        if (Q instanceof u) {
          var $ = Q;
          if (this.__actions__.length)
            $ = new u(this);
          return $ = $.reverse(), $.__actions__.push({ func: s2, args: [D6], thisArg: Y }), new x0($, this.__chain__);
        }
        return this.thru(D6);
      }
      function Y9() {
        return s8(this.__wrapped__, this.__actions__);
      }
      var H9 = y2(function(Q, $, J) {
        if (s.call(Q, J))
          ++Q[J];
        else
          t0(Q, J, 1);
      });
      function B9(Q, $, J) {
        var Z = m(Q) ? H8 : e$;
        if (J && M0(Q, $, J))
          $ = Y;
        return Z(Q, T($, 3));
      }
      function U9(Q, $) {
        var J = m(Q) ? K1 : k8;
        return J(Q, T($, 3));
      }
      var D9 = q5(R5), G9 = q5(T5);
      function W9(Q, $) {
        return B0(t2(Q, $), 1);
      }
      function M9(Q, $) {
        return B0(t2(Q, $), _1);
      }
      function _9(Q, $, J) {
        return J = J === Y ? 1 : b(J), B0(t2(Q, $), J);
      }
      function j5(Q, $) {
        var J = m(Q) ? I0 : U1;
        return J(Q, T($, 3));
      }
      function m5(Q, $) {
        var J = m(Q) ? j4 : x8;
        return J(Q, T($, 3));
      }
      var z9 = y2(function(Q, $, J) {
        if (s.call(Q, J))
          Q[J].push($);
        else
          t0(Q, J, [$]);
      });
      function N9(Q, $, J, Z) {
        Q = O0(Q) ? Q : p1(Q), J = J && !Z ? b(J) : 0;
        var X = Q.length;
        if (J < 0)
          J = q0(X + J, 0);
        return $3(Q) ? J <= X && Q.indexOf($, J) > -1 : !!X && T1(Q, $, J) > -1;
      }
      var O9 = y(function(Q, $, J) {
        var Z = -1, X = typeof $ == "function", q = O0(Q) ? G(Q.length) : [];
        return U1(Q, function(H) {
          q[++Z] = X ? E0($, H, J) : $2(H, $, J);
        }), q;
      }), V9 = y2(function(Q, $, J) {
        t0(Q, J, $);
      });
      function t2(Q, $) {
        var J = m(Q) ? Q0 : h8;
        return J(Q, T($, 3));
      }
      function P9(Q, $, J, Z) {
        if (Q == null)
          return [];
        if (!m($))
          $ = $ == null ? [] : [$];
        if (J = Z ? Y : J, !m(J))
          J = J == null ? [] : [J];
        return d8(Q, $, J);
      }
      var E9 = y2(function(Q, $, J) {
        Q[J ? 0 : 1].push($);
      }, function() {
        return [[], []];
      });
      function F9(Q, $, J) {
        var Z = m(Q) ? w3 : G8, X = arguments.length < 3;
        return Z(Q, T($, 4), J, X, U1);
      }
      function C9(Q, $, J) {
        var Z = m(Q) ? m4 : G8, X = arguments.length < 3;
        return Z(Q, T($, 4), J, X, x8);
      }
      function w9(Q, $) {
        var J = m(Q) ? K1 : k8;
        return J(Q, e2(T($, 3)));
      }
      function S9(Q) {
        var $ = m(Q) ? R8 : N7;
        return $(Q);
      }
      function L9(Q, $, J) {
        if (J ? M0(Q, $, J) : $ === Y)
          $ = 1;
        else
          $ = b($);
        var Z = m(Q) ? o$ : O7;
        return Z(Q, $);
      }
      function R9(Q) {
        var $ = m(Q) ? s$ : P7;
        return $(Q);
      }
      function T9(Q) {
        if (Q == null)
          return 0;
        if (O0(Q))
          return $3(Q) ? A1(Q) : Q.length;
        var $ = G0(Q);
        if ($ == b0 || $ == h0)
          return Q.size;
        return c3(Q).length;
      }
      function I9(Q, $, J) {
        var Z = m(Q) ? S3 : E7;
        if (J && M0(Q, $, J))
          $ = Y;
        return Z(Q, T($, 3));
      }
      var A9 = y(function(Q, $) {
        if (Q == null)
          return [];
        var J = $.length;
        if (J > 1 && M0(Q, $[0], $[1]))
          $ = [];
        else if (J > 2 && M0($[0], $[1], $[2]))
          $ = [$[0]];
        return d8(Q, B0($, 1), []);
      }), r2 = U$ || function() {
        return Y0.Date.now();
      };
      function x9(Q, $) {
        if (typeof $ != "function")
          throw new A0(P);
        return Q = b(Q), function() {
          if (--Q < 1)
            return $.apply(this, arguments);
        };
      }
      function v5(Q, $, J) {
        return $ = J ? Y : $, $ = Q && $ == null ? Q.length : $, r0(Q, R0, Y, Y, Y, Y, $);
      }
      function b5(Q, $) {
        var J;
        if (typeof $ != "function")
          throw new A0(P);
        return Q = b(Q), function() {
          if (--Q > 0)
            J = $.apply(this, arguments);
          if (Q <= 1)
            $ = Y;
          return J;
        };
      }
      var W6 = y(function(Q, $, J) {
        var Z = I;
        if (J.length) {
          var X = Y1(J, b1(W6));
          Z |= U0;
        }
        return r0(Q, Z, $, J, X);
      }), h5 = y(function(Q, $, J) {
        var Z = I | v;
        if (J.length) {
          var X = Y1(J, b1(h5));
          Z |= U0;
        }
        return r0($, Z, Q, J, X);
      });
      function p5(Q, $, J) {
        $ = J ? Y : $;
        var Z = r0(Q, t, Y, Y, Y, Y, Y, $);
        return Z.placeholder = p5.placeholder, Z;
      }
      function g5(Q, $, J) {
        $ = J ? Y : $;
        var Z = r0(Q, z0, Y, Y, Y, Y, Y, $);
        return Z.placeholder = g5.placeholder, Z;
      }
      function y5(Q, $, J) {
        var Z, X, q, H, B, D, M = 0, _ = false, z = false, E = true;
        if (typeof Q != "function")
          throw new A0(P);
        if ($ = m0($) || 0, $0(J))
          _ = !!J.leading, z = "maxWait" in J, q = z ? q0(m0(J.maxWait) || 0, $) : q, E = "trailing" in J ? !!J.trailing : E;
        function L(X0) {
          var d0 = Z, J1 = X;
          return Z = X = Y, M = X0, H = Q.apply(J1, d0), H;
        }
        function A(X0) {
          return M = X0, B = q2(c, $), _ ? L(X0) : H;
        }
        function h(X0) {
          var d0 = X0 - D, J1 = X0 - M, qQ = $ - d0;
          return z ? D0(qQ, q - J1) : qQ;
        }
        function x(X0) {
          var d0 = X0 - D, J1 = X0 - M;
          return D === Y || d0 >= $ || d0 < 0 || z && J1 >= q;
        }
        function c() {
          var X0 = r2();
          if (x(X0))
            return i(X0);
          B = q2(c, h(X0));
        }
        function i(X0) {
          if (B = Y, E && Z)
            return L(X0);
          return Z = X = Y, H;
        }
        function S0() {
          if (B !== Y)
            r8(B);
          M = 0, Z = D = X = B = Y;
        }
        function _0() {
          return B === Y ? H : i(r2());
        }
        function L0() {
          var X0 = r2(), d0 = x(X0);
          if (Z = arguments, X = this, D = X0, d0) {
            if (B === Y)
              return A(D);
            if (z)
              return r8(B), B = q2(c, $), L(D);
          }
          if (B === Y)
            B = q2(c, $);
          return H;
        }
        return L0.cancel = S0, L0.flush = _0, L0;
      }
      var k9 = y(function(Q, $) {
        return A8(Q, 1, $);
      }), f9 = y(function(Q, $, J) {
        return A8(Q, m0($) || 0, J);
      });
      function j9(Q) {
        return r0(Q, X3);
      }
      function a2(Q, $) {
        if (typeof Q != "function" || $ != null && typeof $ != "function")
          throw new A0(P);
        var J = function() {
          var Z = arguments, X = $ ? $.apply(this, Z) : Z[0], q = J.cache;
          if (q.has(X))
            return q.get(X);
          var H = Q.apply(this, Z);
          return J.cache = q.set(X, H) || q, H;
        };
        return J.cache = new (a2.Cache || s0), J;
      }
      a2.Cache = s0;
      function e2(Q) {
        if (typeof Q != "function")
          throw new A0(P);
        return function() {
          var $ = arguments;
          switch ($.length) {
            case 0:
              return !Q.call(this);
            case 1:
              return !Q.call(this, $[0]);
            case 2:
              return !Q.call(this, $[0], $[1]);
            case 3:
              return !Q.call(this, $[0], $[1], $[2]);
          }
          return !Q.apply(this, $);
        };
      }
      function m9(Q) {
        return b5(2, Q);
      }
      var v9 = F7(function(Q, $) {
        $ = $.length == 1 && m($[0]) ? Q0($[0], F0(T())) : Q0(B0($, 1), F0(T()));
        var J = $.length;
        return y(function(Z) {
          var X = -1, q = D0(Z.length, J);
          while (++X < q)
            Z[X] = $[X].call(this, Z[X]);
          return E0(Q, this, Z);
        });
      }), M6 = y(function(Q, $) {
        var J = Y1($, b1(M6));
        return r0(Q, U0, Y, $, J);
      }), d5 = y(function(Q, $) {
        var J = Y1($, b1(d5));
        return r0(Q, v0, Y, $, J);
      }), b9 = a0(function(Q, $) {
        return r0(Q, Z1, Y, Y, Y, $);
      });
      function h9(Q, $) {
        if (typeof Q != "function")
          throw new A0(P);
        return $ = $ === Y ? $ : b($), y(Q, $);
      }
      function p9(Q, $) {
        if (typeof Q != "function")
          throw new A0(P);
        return $ = $ == null ? 0 : q0(b($), 0), y(function(J) {
          var Z = J[$], X = W1(J, 0, $);
          if (Z)
            q1(X, Z);
          return E0(Q, this, X);
        });
      }
      function g9(Q, $, J) {
        var Z = true, X = true;
        if (typeof Q != "function")
          throw new A0(P);
        if ($0(J))
          Z = "leading" in J ? !!J.leading : Z, X = "trailing" in J ? !!J.trailing : X;
        return y5(Q, $, { leading: Z, maxWait: $, trailing: X });
      }
      function y9(Q) {
        return v5(Q, 1);
      }
      function d9(Q, $) {
        return M6(a3($), Q);
      }
      function c9() {
        if (!arguments.length)
          return [];
        var Q = arguments[0];
        return m(Q) ? Q : [Q];
      }
      function u9(Q) {
        return k0(Q, N);
      }
      function i9(Q, $) {
        return $ = typeof $ == "function" ? $ : Y, k0(Q, N, $);
      }
      function n9(Q) {
        return k0(Q, O | N);
      }
      function l9(Q, $) {
        return $ = typeof $ == "function" ? $ : Y, k0(Q, O | N, $);
      }
      function o9(Q, $) {
        return $ == null || I8(Q, $, H0($));
      }
      function y0(Q, $) {
        return Q === $ || Q !== Q && $ !== $;
      }
      var s9 = i2(g3), t9 = i2(function(Q, $) {
        return Q >= $;
      }), w1 = m8(function() {
        return arguments;
      }()) ? m8 : function(Q) {
        return J0(Q) && s.call(Q, "callee") && !E8.call(Q, "callee");
      }, m = G.isArray, r9 = J8 ? F0(J8) : K7;
      function O0(Q) {
        return Q != null && Q3(Q.length) && !Q1(Q);
      }
      function Z0(Q) {
        return J0(Q) && O0(Q);
      }
      function a9(Q) {
        return Q === true || Q === false || J0(Q) && W0(Q) == g1;
      }
      var M1 = G$ || S6, e9 = Z8 ? F0(Z8) : q7;
      function QZ(Q) {
        return J0(Q) && Q.nodeType === 1 && !Y2(Q);
      }
      function $Z(Q) {
        if (Q == null)
          return true;
        if (O0(Q) && (m(Q) || typeof Q == "string" || typeof Q.splice == "function" || M1(Q) || h1(Q) || w1(Q)))
          return !Q.length;
        var $ = G0(Q);
        if ($ == b0 || $ == h0)
          return !Q.size;
        if (K2(Q))
          return !c3(Q).length;
        for (var J in Q)
          if (s.call(Q, J))
            return false;
        return true;
      }
      function JZ(Q, $) {
        return J2(Q, $);
      }
      function ZZ(Q, $, J) {
        J = typeof J == "function" ? J : Y;
        var Z = J ? J(Q, $) : Y;
        return Z === Y ? J2(Q, $, Y, J) : !!Z;
      }
      function _6(Q) {
        if (!J0(Q))
          return false;
        var $ = W0(Q);
        return $ == G2 || $ == LQ || typeof Q.message == "string" && typeof Q.name == "string" && !Y2(Q);
      }
      function XZ(Q) {
        return typeof Q == "number" && C8(Q);
      }
      function Q1(Q) {
        if (!$0(Q))
          return false;
        var $ = W0(Q);
        return $ == W2 || $ == A6 || $ == SQ || $ == TQ;
      }
      function c5(Q) {
        return typeof Q == "number" && Q == b(Q);
      }
      function Q3(Q) {
        return typeof Q == "number" && Q > -1 && Q % 1 == 0 && Q <= X1;
      }
      function $0(Q) {
        var $ = typeof Q;
        return Q != null && ($ == "object" || $ == "function");
      }
      function J0(Q) {
        return Q != null && typeof Q == "object";
      }
      var u5 = X8 ? F0(X8) : H7;
      function KZ(Q, $) {
        return Q === $ || d3(Q, $, K6($));
      }
      function qZ(Q, $, J) {
        return J = typeof J == "function" ? J : Y, d3(Q, $, K6($), J);
      }
      function YZ(Q) {
        return i5(Q) && Q != +Q;
      }
      function HZ(Q) {
        if (i7(Q))
          throw new j(w);
        return v8(Q);
      }
      function BZ(Q) {
        return Q === null;
      }
      function UZ(Q) {
        return Q == null;
      }
      function i5(Q) {
        return typeof Q == "number" || J0(Q) && W0(Q) == d1;
      }
      function Y2(Q) {
        if (!J0(Q) || W0(Q) != l0)
          return false;
        var $ = R2(Q);
        if ($ === null)
          return true;
        var J = s.call($, "constructor") && $.constructor;
        return typeof J == "function" && J instanceof J && C2.call(J) == q$;
      }
      var z6 = K8 ? F0(K8) : B7;
      function DZ(Q) {
        return c5(Q) && Q >= -X1 && Q <= X1;
      }
      var n5 = q8 ? F0(q8) : U7;
      function $3(Q) {
        return typeof Q == "string" || !m(Q) && J0(Q) && W0(Q) == u1;
      }
      function w0(Q) {
        return typeof Q == "symbol" || J0(Q) && W0(Q) == M2;
      }
      var h1 = Y8 ? F0(Y8) : D7;
      function GZ(Q) {
        return Q === Y;
      }
      function WZ(Q) {
        return J0(Q) && G0(Q) == i1;
      }
      function MZ(Q) {
        return J0(Q) && W0(Q) == AQ;
      }
      var _Z = i2(u3), zZ = i2(function(Q, $) {
        return Q <= $;
      });
      function l5(Q) {
        if (!Q)
          return [];
        if (O0(Q))
          return $3(Q) ? p0(Q) : N0(Q);
        if (o1 && Q[o1])
          return o4(Q[o1]());
        var $ = G0(Q), J = $ == b0 ? x3 : $ == h0 ? P2 : p1;
        return J(Q);
      }
      function $1(Q) {
        if (!Q)
          return Q === 0 ? Q : 0;
        if (Q = m0(Q), Q === _1 || Q === -_1) {
          var $ = Q < 0 ? -1 : 1;
          return $ * EQ;
        }
        return Q === Q ? Q : 0;
      }
      function b(Q) {
        var $ = $1(Q), J = $ % 1;
        return $ === $ ? J ? $ - J : $ : 0;
      }
      function o5(Q) {
        return Q ? P1(b(Q), 0, c0) : 0;
      }
      function m0(Q) {
        if (typeof Q == "number")
          return Q;
        if (w0(Q))
          return U2;
        if ($0(Q)) {
          var $ = typeof Q.valueOf == "function" ? Q.valueOf() : Q;
          Q = $0($) ? $ + "" : $;
        }
        if (typeof Q != "string")
          return Q === 0 ? Q : +Q;
        Q = W8(Q);
        var J = rQ.test(Q);
        return J || eQ.test(Q) ? x4(Q.slice(2), J ? 2 : 8) : tQ.test(Q) ? U2 : +Q;
      }
      function s5(Q) {
        return i0(Q, V0(Q));
      }
      function NZ(Q) {
        return Q ? P1(b(Q), -X1, X1) : Q === 0 ? Q : 0;
      }
      function l(Q) {
        return Q == null ? "" : C0(Q);
      }
      var OZ = m1(function(Q, $) {
        if (K2($) || O0($)) {
          i0($, H0($), Q);
          return;
        }
        for (var J in $)
          if (s.call($, J))
            e1(Q, J, $[J]);
      }), t5 = m1(function(Q, $) {
        i0($, V0($), Q);
      }), J3 = m1(function(Q, $, J, Z) {
        i0($, V0($), Q, Z);
      }), VZ = m1(function(Q, $, J, Z) {
        i0($, H0($), Q, Z);
      }), PZ = a0(b3);
      function EZ(Q, $) {
        var J = j1(Q);
        return $ == null ? J : T8(J, $);
      }
      var FZ = y(function(Q, $) {
        Q = r(Q);
        var J = -1, Z = $.length, X = Z > 2 ? $[2] : Y;
        if (X && M0($[0], $[1], X))
          Z = 1;
        while (++J < Z) {
          var q = $[J], H = V0(q), B = -1, D = H.length;
          while (++B < D) {
            var M = H[B], _ = Q[M];
            if (_ === Y || y0(_, x1[M]) && !s.call(Q, M))
              Q[M] = q[M];
          }
        }
        return Q;
      }), CZ = y(function(Q) {
        return Q.push(Y, W5), E0(r5, Y, Q);
      });
      function wZ(Q, $) {
        return B8(Q, T($, 3), u0);
      }
      function SZ(Q, $) {
        return B8(Q, T($, 3), p3);
      }
      function LZ(Q, $) {
        return Q == null ? Q : h3(Q, T($, 3), V0);
      }
      function RZ(Q, $) {
        return Q == null ? Q : f8(Q, T($, 3), V0);
      }
      function TZ(Q, $) {
        return Q && u0(Q, T($, 3));
      }
      function IZ(Q, $) {
        return Q && p3(Q, T($, 3));
      }
      function AZ(Q) {
        return Q == null ? [] : b2(Q, H0(Q));
      }
      function xZ(Q) {
        return Q == null ? [] : b2(Q, V0(Q));
      }
      function N6(Q, $, J) {
        var Z = Q == null ? Y : E1(Q, $);
        return Z === Y ? J : Z;
      }
      function kZ(Q, $) {
        return Q != null && z5(Q, $, $7);
      }
      function O6(Q, $) {
        return Q != null && z5(Q, $, J7);
      }
      var fZ = H5(function(Q, $, J) {
        if ($ != null && typeof $.toString != "function")
          $ = w2.call($);
        Q[$] = J;
      }, P6(P0)), jZ = H5(function(Q, $, J) {
        if ($ != null && typeof $.toString != "function")
          $ = w2.call($);
        if (s.call(Q, $))
          Q[$].push(J);
        else
          Q[$] = [J];
      }, T), mZ = y($2);
      function H0(Q) {
        return O0(Q) ? L8(Q) : c3(Q);
      }
      function V0(Q) {
        return O0(Q) ? L8(Q, true) : G7(Q);
      }
      function vZ(Q, $) {
        var J = {};
        return $ = T($, 3), u0(Q, function(Z, X, q) {
          t0(J, $(Z, X, q), Z);
        }), J;
      }
      function bZ(Q, $) {
        var J = {};
        return $ = T($, 3), u0(Q, function(Z, X, q) {
          t0(J, X, $(Z, X, q));
        }), J;
      }
      var hZ = m1(function(Q, $, J) {
        h2(Q, $, J);
      }), r5 = m1(function(Q, $, J, Z) {
        h2(Q, $, J, Z);
      }), pZ = a0(function(Q, $) {
        var J = {};
        if (Q == null)
          return J;
        var Z = false;
        if ($ = Q0($, function(q) {
          return q = G1(q, Q), Z || (Z = q.length > 1), q;
        }), i0(Q, Z6(Q), J), Z)
          J = k0(J, O | V | N, f7);
        var X = $.length;
        while (X--)
          s3(J, $[X]);
        return J;
      });
      function gZ(Q, $) {
        return a5(Q, e2(T($)));
      }
      var yZ = a0(function(Q, $) {
        return Q == null ? {} : M7(Q, $);
      });
      function a5(Q, $) {
        if (Q == null)
          return {};
        var J = Q0(Z6(Q), function(Z) {
          return [Z];
        });
        return $ = T($), c8(Q, J, function(Z, X) {
          return $(Z, X[0]);
        });
      }
      function dZ(Q, $, J) {
        $ = G1($, Q);
        var Z = -1, X = $.length;
        if (!X)
          X = 1, Q = Y;
        while (++Z < X) {
          var q = Q == null ? Y : Q[n0($[Z])];
          if (q === Y)
            Z = X, q = J;
          Q = Q1(q) ? q.call(Q) : q;
        }
        return Q;
      }
      function cZ(Q, $, J) {
        return Q == null ? Q : Z2(Q, $, J);
      }
      function uZ(Q, $, J, Z) {
        return Z = typeof Z == "function" ? Z : Y, Q == null ? Q : Z2(Q, $, J, Z);
      }
      var e5 = D5(H0), QQ = D5(V0);
      function iZ(Q, $, J) {
        var Z = m(Q), X = Z || M1(Q) || h1(Q);
        if ($ = T($, 4), J == null) {
          var q = Q && Q.constructor;
          if (X)
            J = Z ? new q : [];
          else if ($0(Q))
            J = Q1(q) ? j1(R2(Q)) : {};
          else
            J = {};
        }
        return (X ? I0 : u0)(Q, function(H, B, D) {
          return $(J, H, B, D);
        }), J;
      }
      function nZ(Q, $) {
        return Q == null ? true : s3(Q, $);
      }
      function lZ(Q, $, J) {
        return Q == null ? Q : o8(Q, $, a3(J));
      }
      function oZ(Q, $, J, Z) {
        return Z = typeof Z == "function" ? Z : Y, Q == null ? Q : o8(Q, $, a3(J), Z);
      }
      function p1(Q) {
        return Q == null ? [] : A3(Q, H0(Q));
      }
      function sZ(Q) {
        return Q == null ? [] : A3(Q, V0(Q));
      }
      function tZ(Q, $, J) {
        if (J === Y)
          J = $, $ = Y;
        if (J !== Y)
          J = m0(J), J = J === J ? J : 0;
        if ($ !== Y)
          $ = m0($), $ = $ === $ ? $ : 0;
        return P1(m0(Q), $, J);
      }
      function rZ(Q, $, J) {
        if ($ = $1($), J === Y)
          J = $, $ = 0;
        else
          J = $1(J);
        return Q = m0(Q), Z7(Q, $, J);
      }
      function aZ(Q, $, J) {
        if (J && typeof J != "boolean" && M0(Q, $, J))
          $ = J = Y;
        if (J === Y) {
          if (typeof $ == "boolean")
            J = $, $ = Y;
          else if (typeof Q == "boolean")
            J = Q, Q = Y;
        }
        if (Q === Y && $ === Y)
          Q = 0, $ = 1;
        else if (Q = $1(Q), $ === Y)
          $ = Q, Q = 0;
        else
          $ = $1($);
        if (Q > $) {
          var Z = Q;
          Q = $, $ = Z;
        }
        if (J || Q % 1 || $ % 1) {
          var X = w8();
          return D0(Q + X * ($ - Q + A4("1e-" + ((X + "").length - 1))), $);
        }
        return n3(Q, $);
      }
      var eZ = v1(function(Q, $, J) {
        return $ = $.toLowerCase(), Q + (J ? $Q($) : $);
      });
      function $Q(Q) {
        return V6(l(Q).toLowerCase());
      }
      function JQ(Q) {
        return Q = l(Q), Q && Q.replace($4, c4).replace(P4, "");
      }
      function QX(Q, $, J) {
        Q = l(Q), $ = C0($);
        var Z = Q.length;
        J = J === Y ? Z : P1(b(J), 0, Z);
        var X = J;
        return J -= $.length, J >= 0 && Q.slice(J, X) == $;
      }
      function $X(Q) {
        return Q = l(Q), Q && mQ.test(Q) ? Q.replace(f6, u4) : Q;
      }
      function JX(Q) {
        return Q = l(Q), Q && yQ.test(Q) ? Q.replace(M3, "\\$&") : Q;
      }
      var ZX = v1(function(Q, $, J) {
        return Q + (J ? "-" : "") + $.toLowerCase();
      }), XX = v1(function(Q, $, J) {
        return Q + (J ? " " : "") + $.toLowerCase();
      }), KX = K5("toLowerCase");
      function qX(Q, $, J) {
        Q = l(Q), $ = b($);
        var Z = $ ? A1(Q) : 0;
        if (!$ || Z >= $)
          return Q;
        var X = ($ - Z) / 2;
        return u2(x2(X), J) + Q + u2(A2(X), J);
      }
      function YX(Q, $, J) {
        Q = l(Q), $ = b($);
        var Z = $ ? A1(Q) : 0;
        return $ && Z < $ ? Q + u2($ - Z, J) : Q;
      }
      function HX(Q, $, J) {
        Q = l(Q), $ = b($);
        var Z = $ ? A1(Q) : 0;
        return $ && Z < $ ? u2($ - Z, J) + Q : Q;
      }
      function BX(Q, $, J) {
        if (J || $ == null)
          $ = 0;
        else if ($)
          $ = +$;
        return z$(l(Q).replace(_3, ""), $ || 0);
      }
      function UX(Q, $, J) {
        if (J ? M0(Q, $, J) : $ === Y)
          $ = 1;
        else
          $ = b($);
        return l3(l(Q), $);
      }
      function DX() {
        var Q = arguments, $ = l(Q[0]);
        return Q.length < 3 ? $ : $.replace(Q[1], Q[2]);
      }
      var GX = v1(function(Q, $, J) {
        return Q + (J ? "_" : "") + $.toLowerCase();
      });
      function WX(Q, $, J) {
        if (J && typeof J != "number" && M0(Q, $, J))
          $ = J = Y;
        if (J = J === Y ? c0 : J >>> 0, !J)
          return [];
        if (Q = l(Q), Q && (typeof $ == "string" || $ != null && !z6($))) {
          if ($ = C0($), !$ && I1(Q))
            return W1(p0(Q), 0, J);
        }
        return Q.split($, J);
      }
      var MX = v1(function(Q, $, J) {
        return Q + (J ? " " : "") + V6($);
      });
      function _X(Q, $, J) {
        return Q = l(Q), J = J == null ? 0 : P1(b(J), 0, Q.length), $ = C0($), Q.slice(J, J + $.length) == $;
      }
      function zX(Q, $, J) {
        var Z = K.templateSettings;
        if (J && M0(Q, $, J))
          $ = Y;
        Q = l(Q), $ = J3({}, $, Z, G5);
        var X = J3({}, $.imports, Z.imports, G5), q = H0(X), H = A3(X, q), B, D, M = 0, _ = $.interpolate || _2, z = "__p += '", E = k3(($.escape || _2).source + "|" + _.source + "|" + (_ === j6 ? sQ : _2).source + "|" + ($.evaluate || _2).source + "|$", "g"), L = "//# sourceURL=" + (s.call($, "sourceURL") ? ($.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++S4 + "]") + "\n";
        Q.replace(E, function(x, c, i, S0, _0, L0) {
          if (i || (i = S0), z += Q.slice(M, L0).replace(J4, i4), c)
            B = true, z += "' +\n__e(" + c + ") +\n'";
          if (_0)
            D = true, z += "';\n" + _0 + ";\n__p += '";
          if (i)
            z += "' +\n((__t = (" + i + ")) == null ? '' : __t) +\n'";
          return M = L0 + x.length, x;
        }), z += "';\n";
        var A = s.call($, "variable") && $.variable;
        if (!A)
          z = "with (obj) {\n" + z + "\n}\n";
        else if (lQ.test(A))
          throw new j(d);
        z = (D ? z.replace(xQ, "") : z).replace(kQ, "$1").replace(fQ, "$1;"), z = "function(" + (A || "obj") + ") {\n" + (A ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (B ? ", __e = _.escape" : "") + (D ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + z + "return __p\n}";
        var h = XQ(function() {
          return n(q, L + "return " + z).apply(Y, H);
        });
        if (h.source = z, _6(h))
          throw h;
        return h;
      }
      function NX(Q) {
        return l(Q).toLowerCase();
      }
      function OX(Q) {
        return l(Q).toUpperCase();
      }
      function VX(Q, $, J) {
        if (Q = l(Q), Q && (J || $ === Y))
          return W8(Q);
        if (!Q || !($ = C0($)))
          return Q;
        var Z = p0(Q), X = p0($), q = M8(Z, X), H = _8(Z, X) + 1;
        return W1(Z, q, H).join("");
      }
      function PX(Q, $, J) {
        if (Q = l(Q), Q && (J || $ === Y))
          return Q.slice(0, N8(Q) + 1);
        if (!Q || !($ = C0($)))
          return Q;
        var Z = p0(Q), X = _8(Z, p0($)) + 1;
        return W1(Z, 0, X).join("");
      }
      function EX(Q, $, J) {
        if (Q = l(Q), Q && (J || $ === Y))
          return Q.replace(_3, "");
        if (!Q || !($ = C0($)))
          return Q;
        var Z = p0(Q), X = M8(Z, p0($));
        return W1(Z, X).join("");
      }
      function FX(Q, $) {
        var J = _Q, Z = zQ;
        if ($0($)) {
          var X = "separator" in $ ? $.separator : X;
          J = "length" in $ ? b($.length) : J, Z = "omission" in $ ? C0($.omission) : Z;
        }
        Q = l(Q);
        var q = Q.length;
        if (I1(Q)) {
          var H = p0(Q);
          q = H.length;
        }
        if (J >= q)
          return Q;
        var B = J - A1(Z);
        if (B < 1)
          return Z;
        var D = H ? W1(H, 0, B).join("") : Q.slice(0, B);
        if (X === Y)
          return D + Z;
        if (H)
          B += D.length - B;
        if (z6(X)) {
          if (Q.slice(B).search(X)) {
            var M, _ = D;
            if (!X.global)
              X = k3(X.source, l(m6.exec(X)) + "g");
            X.lastIndex = 0;
            while (M = X.exec(_))
              var z = M.index;
            D = D.slice(0, z === Y ? B : z);
          }
        } else if (Q.indexOf(C0(X), B) != B) {
          var E = D.lastIndexOf(X);
          if (E > -1)
            D = D.slice(0, E);
        }
        return D + Z;
      }
      function CX(Q) {
        return Q = l(Q), Q && jQ.test(Q) ? Q.replace(k6, a4) : Q;
      }
      var wX = v1(function(Q, $, J) {
        return Q + (J ? " " : "") + $.toUpperCase();
      }), V6 = K5("toUpperCase");
      function ZQ(Q, $, J) {
        if (Q = l(Q), $ = J ? Y : $, $ === Y)
          return l4(Q) ? $$(Q) : h4(Q);
        return Q.match($) || [];
      }
      var XQ = y(function(Q, $) {
        try {
          return E0(Q, Y, $);
        } catch (J) {
          return _6(J) ? J : new j(J);
        }
      }), SX = a0(function(Q, $) {
        return I0($, function(J) {
          J = n0(J), t0(Q, J, W6(Q[J], Q));
        }), Q;
      });
      function LX(Q) {
        var $ = Q == null ? 0 : Q.length, J = T();
        return Q = !$ ? [] : Q0(Q, function(Z) {
          if (typeof Z[1] != "function")
            throw new A0(P);
          return [J(Z[0]), Z[1]];
        }), y(function(Z) {
          var X = -1;
          while (++X < $) {
            var q = Q[X];
            if (E0(q[0], this, Z))
              return E0(q[1], this, Z);
          }
        });
      }
      function RX(Q) {
        return a$(k0(Q, O));
      }
      function P6(Q) {
        return function() {
          return Q;
        };
      }
      function TX(Q, $) {
        return Q == null || Q !== Q ? $ : Q;
      }
      var IX = Y5(), AX = Y5(true);
      function P0(Q) {
        return Q;
      }
      function E6(Q) {
        return b8(typeof Q == "function" ? Q : k0(Q, O));
      }
      function xX(Q) {
        return p8(k0(Q, O));
      }
      function kX(Q, $) {
        return g8(Q, k0($, O));
      }
      var fX = y(function(Q, $) {
        return function(J) {
          return $2(J, Q, $);
        };
      }), jX = y(function(Q, $) {
        return function(J) {
          return $2(Q, J, $);
        };
      });
      function F6(Q, $, J) {
        var Z = H0($), X = b2($, Z);
        if (J == null && !($0($) && (X.length || !Z.length)))
          J = $, $ = Q, Q = this, X = b2($, H0($));
        var q = !($0(J) && ("chain" in J)) || !!J.chain, H = Q1(Q);
        return I0(X, function(B) {
          var D = $[B];
          if (Q[B] = D, H)
            Q.prototype[B] = function() {
              var M = this.__chain__;
              if (q || M) {
                var _ = Q(this.__wrapped__), z = _.__actions__ = N0(this.__actions__);
                return z.push({ func: D, args: arguments, thisArg: Q }), _.__chain__ = M, _;
              }
              return D.apply(Q, q1([this.value()], arguments));
            };
        }), Q;
      }
      function mX() {
        if (Y0._ === this)
          Y0._ = Y$;
        return this;
      }
      function C6() {
      }
      function vX(Q) {
        return Q = b(Q), y(function($) {
          return y8($, Q);
        });
      }
      var bX = Q6(Q0), hX = Q6(H8), pX = Q6(S3);
      function KQ(Q) {
        return Y6(Q) ? L3(n0(Q)) : _7(Q);
      }
      function gX(Q) {
        return function($) {
          return Q == null ? Y : E1(Q, $);
        };
      }
      var yX = B5(), dX = B5(true);
      function w6() {
        return [];
      }
      function S6() {
        return false;
      }
      function cX() {
        return {};
      }
      function uX() {
        return "";
      }
      function iX() {
        return true;
      }
      function nX(Q, $) {
        if (Q = b(Q), Q < 1 || Q > X1)
          return [];
        var J = c0, Z = D0(Q, c0);
        $ = T($), Q -= c0;
        var X = I3(Z, $);
        while (++J < Q)
          $(J);
        return X;
      }
      function lX(Q) {
        if (m(Q))
          return Q0(Q, n0);
        return w0(Q) ? [Q] : N0(S5(l(Q)));
      }
      function oX(Q) {
        var $ = ++K$;
        return l(Q) + $;
      }
      var sX = c2(function(Q, $) {
        return Q + $;
      }, 0), tX = $6("ceil"), rX = c2(function(Q, $) {
        return Q / $;
      }, 1), aX = $6("floor");
      function eX(Q) {
        return Q && Q.length ? v2(Q, P0, g3) : Y;
      }
      function QK(Q, $) {
        return Q && Q.length ? v2(Q, T($, 2), g3) : Y;
      }
      function $K(Q) {
        return D8(Q, P0);
      }
      function JK(Q, $) {
        return D8(Q, T($, 2));
      }
      function ZK(Q) {
        return Q && Q.length ? v2(Q, P0, u3) : Y;
      }
      function XK(Q, $) {
        return Q && Q.length ? v2(Q, T($, 2), u3) : Y;
      }
      var KK = c2(function(Q, $) {
        return Q * $;
      }, 1), qK = $6("round"), YK = c2(function(Q, $) {
        return Q - $;
      }, 0);
      function HK(Q) {
        return Q && Q.length ? T3(Q, P0) : 0;
      }
      function BK(Q, $) {
        return Q && Q.length ? T3(Q, T($, 2)) : 0;
      }
      if (K.after = x9, K.ary = v5, K.assign = OZ, K.assignIn = t5, K.assignInWith = J3, K.assignWith = VZ, K.at = PZ, K.before = b5, K.bind = W6, K.bindAll = SX, K.bindKey = h5, K.castArray = c9, K.chain = f5, K.chunk = a7, K.compact = e7, K.concat = QJ, K.cond = LX, K.conforms = RX, K.constant = P6, K.countBy = H9, K.create = EZ, K.curry = p5, K.curryRight = g5, K.debounce = y5, K.defaults = FZ, K.defaultsDeep = CZ, K.defer = k9, K.delay = f9, K.difference = $J, K.differenceBy = JJ, K.differenceWith = ZJ, K.drop = XJ, K.dropRight = KJ, K.dropRightWhile = qJ, K.dropWhile = YJ, K.fill = HJ, K.filter = U9, K.flatMap = W9, K.flatMapDeep = M9, K.flatMapDepth = _9, K.flatten = I5, K.flattenDeep = BJ, K.flattenDepth = UJ, K.flip = j9, K.flow = IX, K.flowRight = AX, K.fromPairs = DJ, K.functions = AZ, K.functionsIn = xZ, K.groupBy = z9, K.initial = WJ, K.intersection = MJ, K.intersectionBy = _J, K.intersectionWith = zJ, K.invert = fZ, K.invertBy = jZ, K.invokeMap = O9, K.iteratee = E6, K.keyBy = V9, K.keys = H0, K.keysIn = V0, K.map = t2, K.mapKeys = vZ, K.mapValues = bZ, K.matches = xX, K.matchesProperty = kX, K.memoize = a2, K.merge = hZ, K.mergeWith = r5, K.method = fX, K.methodOf = jX, K.mixin = F6, K.negate = e2, K.nthArg = vX, K.omit = pZ, K.omitBy = gZ, K.once = m9, K.orderBy = P9, K.over = bX, K.overArgs = v9, K.overEvery = hX, K.overSome = pX, K.partial = M6, K.partialRight = d5, K.partition = E9, K.pick = yZ, K.pickBy = a5, K.property = KQ, K.propertyOf = gX, K.pull = PJ, K.pullAll = x5, K.pullAllBy = EJ, K.pullAllWith = FJ, K.pullAt = CJ, K.range = yX, K.rangeRight = dX, K.rearg = b9, K.reject = w9, K.remove = wJ, K.rest = h9, K.reverse = D6, K.sampleSize = L9, K.set = cZ, K.setWith = uZ, K.shuffle = R9, K.slice = SJ, K.sortBy = A9, K.sortedUniq = kJ, K.sortedUniqBy = fJ, K.split = WX, K.spread = p9, K.tail = jJ, K.take = mJ, K.takeRight = vJ, K.takeRightWhile = bJ, K.takeWhile = hJ, K.tap = eJ, K.throttle = g9, K.thru = s2, K.toArray = l5, K.toPairs = e5, K.toPairsIn = QQ, K.toPath = lX, K.toPlainObject = s5, K.transform = iZ, K.unary = y9, K.union = pJ, K.unionBy = gJ, K.unionWith = yJ, K.uniq = dJ, K.uniqBy = cJ, K.uniqWith = uJ, K.unset = nZ, K.unzip = G6, K.unzipWith = k5, K.update = lZ, K.updateWith = oZ, K.values = p1, K.valuesIn = sZ, K.without = iJ, K.words = ZQ, K.wrap = d9, K.xor = nJ, K.xorBy = lJ, K.xorWith = oJ, K.zip = sJ, K.zipObject = tJ, K.zipObjectDeep = rJ, K.zipWith = aJ, K.entries = e5, K.entriesIn = QQ, K.extend = t5, K.extendWith = J3, F6(K, K), K.add = sX, K.attempt = XQ, K.camelCase = eZ, K.capitalize = $Q, K.ceil = tX, K.clamp = tZ, K.clone = u9, K.cloneDeep = n9, K.cloneDeepWith = l9, K.cloneWith = i9, K.conformsTo = o9, K.deburr = JQ, K.defaultTo = TX, K.divide = rX, K.endsWith = QX, K.eq = y0, K.escape = $X, K.escapeRegExp = JX, K.every = B9, K.find = D9, K.findIndex = R5, K.findKey = wZ, K.findLast = G9, K.findLastIndex = T5, K.findLastKey = SZ, K.floor = aX, K.forEach = j5, K.forEachRight = m5, K.forIn = LZ, K.forInRight = RZ, K.forOwn = TZ, K.forOwnRight = IZ, K.get = N6, K.gt = s9, K.gte = t9, K.has = kZ, K.hasIn = O6, K.head = A5, K.identity = P0, K.includes = N9, K.indexOf = GJ, K.inRange = rZ, K.invoke = mZ, K.isArguments = w1, K.isArray = m, K.isArrayBuffer = r9, K.isArrayLike = O0, K.isArrayLikeObject = Z0, K.isBoolean = a9, K.isBuffer = M1, K.isDate = e9, K.isElement = QZ, K.isEmpty = $Z, K.isEqual = JZ, K.isEqualWith = ZZ, K.isError = _6, K.isFinite = XZ, K.isFunction = Q1, K.isInteger = c5, K.isLength = Q3, K.isMap = u5, K.isMatch = KZ, K.isMatchWith = qZ, K.isNaN = YZ, K.isNative = HZ, K.isNil = UZ, K.isNull = BZ, K.isNumber = i5, K.isObject = $0, K.isObjectLike = J0, K.isPlainObject = Y2, K.isRegExp = z6, K.isSafeInteger = DZ, K.isSet = n5, K.isString = $3, K.isSymbol = w0, K.isTypedArray = h1, K.isUndefined = GZ, K.isWeakMap = WZ, K.isWeakSet = MZ, K.join = NJ, K.kebabCase = ZX, K.last = j0, K.lastIndexOf = OJ, K.lowerCase = XX, K.lowerFirst = KX, K.lt = _Z, K.lte = zZ, K.max = eX, K.maxBy = QK, K.mean = $K, K.meanBy = JK, K.min = ZK, K.minBy = XK, K.stubArray = w6, K.stubFalse = S6, K.stubObject = cX, K.stubString = uX, K.stubTrue = iX, K.multiply = KK, K.nth = VJ, K.noConflict = mX, K.noop = C6, K.now = r2, K.pad = qX, K.padEnd = YX, K.padStart = HX, K.parseInt = BX, K.random = aZ, K.reduce = F9, K.reduceRight = C9, K.repeat = UX, K.replace = DX, K.result = dZ, K.round = qK, K.runInContext = U, K.sample = S9, K.size = T9, K.snakeCase = GX, K.some = I9, K.sortedIndex = LJ, K.sortedIndexBy = RJ, K.sortedIndexOf = TJ, K.sortedLastIndex = IJ, K.sortedLastIndexBy = AJ, K.sortedLastIndexOf = xJ, K.startCase = MX, K.startsWith = _X, K.subtract = YK, K.sum = HK, K.sumBy = BK, K.template = zX, K.times = nX, K.toFinite = $1, K.toInteger = b, K.toLength = o5, K.toLower = NX, K.toNumber = m0, K.toSafeInteger = NZ, K.toString = l, K.toUpper = OX, K.trim = VX, K.trimEnd = PX, K.trimStart = EX, K.truncate = FX, K.unescape = CX, K.uniqueId = oX, K.upperCase = wX, K.upperFirst = V6, K.each = j5, K.eachRight = m5, K.first = A5, F6(K, function() {
        var Q = {};
        return u0(K, function($, J) {
          if (!s.call(K.prototype, J))
            Q[J] = $;
        }), Q;
      }(), { chain: false }), K.VERSION = k, I0(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(Q) {
        K[Q].placeholder = K;
      }), I0(["drop", "take"], function(Q, $) {
        u.prototype[Q] = function(J) {
          J = J === Y ? 1 : q0(b(J), 0);
          var Z = this.__filtered__ && !$ ? new u(this) : this.clone();
          if (Z.__filtered__)
            Z.__takeCount__ = D0(J, Z.__takeCount__);
          else
            Z.__views__.push({ size: D0(J, c0), type: Q + (Z.__dir__ < 0 ? "Right" : "") });
          return Z;
        }, u.prototype[Q + "Right"] = function(J) {
          return this.reverse()[Q](J).reverse();
        };
      }), I0(["filter", "map", "takeWhile"], function(Q, $) {
        var J = $ + 1, Z = J == I6 || J == PQ;
        u.prototype[Q] = function(X) {
          var q = this.clone();
          return q.__iteratees__.push({ iteratee: T(X, 3), type: J }), q.__filtered__ = q.__filtered__ || Z, q;
        };
      }), I0(["head", "last"], function(Q, $) {
        var J = "take" + ($ ? "Right" : "");
        u.prototype[Q] = function() {
          return this[J](1).value()[0];
        };
      }), I0(["initial", "tail"], function(Q, $) {
        var J = "drop" + ($ ? "" : "Right");
        u.prototype[Q] = function() {
          return this.__filtered__ ? new u(this) : this[J](1);
        };
      }), u.prototype.compact = function() {
        return this.filter(P0);
      }, u.prototype.find = function(Q) {
        return this.filter(Q).head();
      }, u.prototype.findLast = function(Q) {
        return this.reverse().find(Q);
      }, u.prototype.invokeMap = y(function(Q, $) {
        if (typeof Q == "function")
          return new u(this);
        return this.map(function(J) {
          return $2(J, Q, $);
        });
      }), u.prototype.reject = function(Q) {
        return this.filter(e2(T(Q)));
      }, u.prototype.slice = function(Q, $) {
        Q = b(Q);
        var J = this;
        if (J.__filtered__ && (Q > 0 || $ < 0))
          return new u(J);
        if (Q < 0)
          J = J.takeRight(-Q);
        else if (Q)
          J = J.drop(Q);
        if ($ !== Y)
          $ = b($), J = $ < 0 ? J.dropRight(-$) : J.take($ - Q);
        return J;
      }, u.prototype.takeRightWhile = function(Q) {
        return this.reverse().takeWhile(Q).reverse();
      }, u.prototype.toArray = function() {
        return this.take(c0);
      }, u0(u.prototype, function(Q, $) {
        var J = /^(?:filter|find|map|reject)|While$/.test($), Z = /^(?:head|last)$/.test($), X = K[Z ? "take" + ($ == "last" ? "Right" : "") : $], q = Z || /^find/.test($);
        if (!X)
          return;
        K.prototype[$] = function() {
          var H = this.__wrapped__, B = Z ? [1] : arguments, D = H instanceof u, M = B[0], _ = D || m(H), z = function(c) {
            var i = X.apply(K, q1([c], B));
            return Z && E ? i[0] : i;
          };
          if (_ && J && typeof M == "function" && M.length != 1)
            D = _ = false;
          var E = this.__chain__, L = !!this.__actions__.length, A = q && !E, h = D && !L;
          if (!q && _) {
            H = h ? H : new u(this);
            var x = Q.apply(H, B);
            return x.__actions__.push({ func: s2, args: [z], thisArg: Y }), new x0(x, E);
          }
          if (A && h)
            return Q.apply(this, B);
          return x = this.thru(z), A ? Z ? x.value()[0] : x.value() : x;
        };
      }), I0(["pop", "push", "shift", "sort", "splice", "unshift"], function(Q) {
        var $ = E2[Q], J = /^(?:push|sort|unshift)$/.test(Q) ? "tap" : "thru", Z = /^(?:pop|shift)$/.test(Q);
        K.prototype[Q] = function() {
          var X = arguments;
          if (Z && !this.__chain__) {
            var q = this.value();
            return $.apply(m(q) ? q : [], X);
          }
          return this[J](function(H) {
            return $.apply(m(H) ? H : [], X);
          });
        };
      }), u0(u.prototype, function(Q, $) {
        var J = K[$];
        if (J) {
          var Z = J.name + "";
          if (!s.call(f1, Z))
            f1[Z] = [];
          f1[Z].push({ name: $, func: J });
        }
      }), f1[d2(Y, v).name] = [{ name: "wrapper", func: Y }], u.prototype.clone = C$, u.prototype.reverse = w$, u.prototype.value = S$, K.prototype.at = Q9, K.prototype.chain = $9, K.prototype.commit = J9, K.prototype.next = Z9, K.prototype.plant = K9, K.prototype.reverse = q9, K.prototype.toJSON = K.prototype.valueOf = K.prototype.value = Y9, K.prototype.first = K.prototype.head, o1)
        K.prototype[o1] = X9;
      return K;
    }, H1 = J$();
    if (typeof define == "function" && typeof define.amd == "object" && define.amd)
      Y0._ = H1, define(function() {
        return H1;
      });
    else if (z1)
      (z1.exports = H1)._ = H1, E3._ = H1;
    else
      Y0._ = H1;
  }).call(H2);
});
var BQ = L6((Z3, R6) => {
  (function(Y, k) {
    typeof Z3 == "object" && typeof R6 == "object" ? R6.exports = k() : typeof define == "function" && define.amd ? define([], k) : typeof Z3 == "object" ? Z3.blobCompare = k() : Y.blobCompare = k();
  })(window, function() {
    return function(Y) {
      var k = {};
      function S(w) {
        if (k[w])
          return k[w].exports;
        var P = k[w] = { i: w, l: false, exports: {} };
        return Y[w].call(P.exports, P, P.exports, S), P.l = true, P.exports;
      }
      return S.m = Y, S.c = k, S.d = function(w, P, d) {
        S.o(w, P) || Object.defineProperty(w, P, { enumerable: true, get: d });
      }, S.r = function(w) {
        typeof Symbol != "undefined" && Symbol.toStringTag && Object.defineProperty(w, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(w, "__esModule", { value: true });
      }, S.t = function(w, P) {
        if (1 & P && (w = S(w)), 8 & P)
          return w;
        if (4 & P && typeof w == "object" && w && w.__esModule)
          return w;
        var d = Object.create(null);
        if (S.r(d), Object.defineProperty(d, "default", { enumerable: true, value: w }), 2 & P && typeof w != "string")
          for (var R in w)
            S.d(d, R, function(p) {
              return w[p];
            }.bind(null, R));
        return d;
      }, S.n = function(w) {
        var P = w && w.__esModule ? function() {
          return w.default;
        } : function() {
          return w;
        };
        return S.d(P, "a", P), P;
      }, S.o = function(w, P) {
        return Object.prototype.hasOwnProperty.call(w, P);
      }, S.p = "", S(S.s = 4);
    }([function(Y, k, S) {
      var w = function(g, O) {
        if (Array.isArray(g))
          return g;
        if (Symbol.iterator in Object(g))
          return function(V, N) {
            var F = [], f = true, I = false, v = undefined;
            try {
              for (var o, t = V[Symbol.iterator]();!(f = (o = t.next()).done) && (F.push(o.value), !N || F.length !== N); f = true)
                ;
            } catch (z0) {
              I = true, v = z0;
            } finally {
              try {
                !f && t.return && t.return();
              } finally {
                if (I)
                  throw v;
              }
            }
            return F;
          }(g, O);
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }, P = function() {
        function g(O, V) {
          for (var N = 0;N < V.length; N++) {
            var F = V[N];
            F.enumerable = F.enumerable || false, F.configurable = true, "value" in F && (F.writable = true), Object.defineProperty(O, F.key, F);
          }
        }
        return function(O, V, N) {
          return V && g(O.prototype, V), N && g(O, N), O;
        };
      }();
      function d(g) {
        if (Array.isArray(g)) {
          for (var O = 0, V = Array(g.length);O < g.length; O++)
            V[O] = g[O];
          return V;
        }
        return Array.from(g);
      }
      var R = S(2), p = function(g) {
        function O(V) {
          (function(F, f) {
            if (!(F instanceof f))
              throw new TypeError("Cannot call a class as a function");
          })(this, O);
          var N = function(F, f) {
            if (!F)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !f || typeof f != "object" && typeof f != "function" ? F : f;
          }(this, (O.__proto__ || Object.getPrototypeOf(O)).call(this));
          return N._messageId = 1, N._messages = new Map, N._worker = V, N._worker.onmessage = N._onMessage.bind(N), N._id = Math.ceil(1e7 * Math.random()), N;
        }
        return function(V, N) {
          if (typeof N != "function" && N !== null)
            throw new TypeError("Super expression must either be null or a function, not " + typeof N);
          V.prototype = Object.create(N && N.prototype, { constructor: { value: V, enumerable: false, writable: true, configurable: true } }), N && (Object.setPrototypeOf ? Object.setPrototypeOf(V, N) : V.__proto__ = N);
        }(O, g), P(O, [{ key: "terminate", value: function() {
          this._worker.terminate();
        } }, { key: "isFree", value: function() {
          return this._messages.size === 0;
        } }, { key: "jobsLength", value: function() {
          return this._messages.size;
        } }, { key: "exec", value: function(V) {
          var N = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null, F = this, f = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [], I = arguments[3];
          return new Promise(function(v, o) {
            var t = F._messageId++;
            F._messages.set(t, [v, o, I]), F._worker.postMessage([t, N, V], f || []);
          });
        } }, { key: "postMessage", value: function() {
          var V = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null, N = this, F = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [], f = arguments[2];
          return new Promise(function(I, v) {
            var o = N._messageId++;
            N._messages.set(o, [I, v, f]), N._worker.postMessage([o, V], F || []);
          });
        } }, { key: "emit", value: function(V) {
          for (var N = arguments.length, F = Array(N > 1 ? N - 1 : 0), f = 1;f < N; f++)
            F[f - 1] = arguments[f];
          this._worker.postMessage({ eventName: V, args: F });
        } }, { key: "_onMessage", value: function(V) {
          var N;
          if (!Array.isArray(V.data) && V.data.eventName)
            return (N = function o(t, z0, U0) {
              t === null && (t = Function.prototype);
              var v0 = Object.getOwnPropertyDescriptor(t, z0);
              if (v0 === undefined) {
                var R0 = Object.getPrototypeOf(t);
                return R0 === null ? undefined : o(R0, z0, U0);
              }
              if ("value" in v0)
                return v0.value;
              var Z1 = v0.get;
              return Z1 !== undefined ? Z1.call(U0) : undefined;
            }(O.prototype.__proto__ || Object.getPrototypeOf(O.prototype), "emit", this)).call.apply(N, [this, V.data.eventName].concat(d(V.data.args)));
          var F, f = (F = V.data, Array.isArray(F) ? F : Array.from(F)), I = f[0], v = f.slice(1);
          if (I === 1)
            this._onEvent.apply(this, d(v));
          else {
            if (I !== 0)
              throw new Error("Wrong message type '" + I + "'");
            this._onResult.apply(this, d(v));
          }
        } }, { key: "_onResult", value: function(V, N, F) {
          var f = this._messages.get(V), I = w(f, 2), v = I[0], o = I[1];
          return this._messages.delete(V), N === 1 ? v(F) : o(F);
        } }, { key: "_onEvent", value: function(V, N, F) {
          var f = this._messages.get(V), I = w(f, 3)[2];
          I && I(N, F);
        } }]), O;
      }(R);
      Y.exports = p;
    }, function(Y, k, S) {
      Y.exports = function() {
        return S(3)('!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=2)}([function(e,t,r){"use strict";var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),o=function e(t,r,n){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,r);if(void 0===o){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,r,n)}if("value"in o)return o.value;var a=o.get;return void 0!==a?a.call(n):void 0},i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function a(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var f=r(1),c=0,l=1,s=0,y=1,p="main",b=function(e){return"object"===(void 0===e?"undefined":i(e))&&"function"==typeof e.then&&"function"==typeof e.catch};var v=function e(t,r){u(this,e),this.payload=t,this.transferable=r};e.exports=function(e){var t,r,i,h=(i=e,(r=p)in(t={})?Object.defineProperty(t,r,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[r]=i,t),d=self.postMessage.bind(self),m=new(function(e){function t(){return u(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),n(t,[{key:"emit",value:function(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return d({eventName:e,args:r}),this}},{key:"emitLocally",value:function(e){for(var r,n=arguments.length,i=Array(n>1?n-1:0),a=1;a<n;a++)i[a-1]=arguments[a];(r=o(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"emit",this)).call.apply(r,[this,e].concat(i))}},{key:"operation",value:function(e,t){return h[e]=t,this}}]),t}(f)),g=function(e,t,r){var n=function(t){t&&t instanceof v?w(e,y,t.payload,t.transferable):w(e,y,t)},o=function(t){w(e,s,{message:t.message,stack:t.stack})};try{var i=_(e,t,r);b(i)?i.then(n).catch(o):n(i)}catch(e){o(e)}},_=function(e,t,r){var n=h[r||p];if(!n)throw new Error("Not found handler for this request");return n(t,O.bind(null,e))},w=function(e,t,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[];d([c,e,t,r],n)},O=function(e,t,r){if(!t)throw new Error("eventName is required");if("string"!=typeof t)throw new Error("eventName should be string");d([l,e,t,r])};return self.addEventListener("message",(function(e){var t=e.data;Array.isArray(t)?g.apply(void 0,a(t)):t&&t.eventName&&m.emitLocally.apply(m,[t.eventName].concat(a(t.args)))})),m},e.exports.TransferableResponse=v},function(e,t,r){"use strict";var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();var o=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),Object.defineProperty(this,"__listeners",{value:{},enumerable:!1,writable:!1})}return n(e,[{key:"emit",value:function(e){if(!this.__listeners[e])return this;for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];var o=!0,i=!1,a=void 0;try{for(var u,f=this.__listeners[e][Symbol.iterator]();!(o=(u=f.next()).done);o=!0){var c=u.value;c.apply(void 0,r)}}catch(e){i=!0,a=e}finally{try{!o&&f.return&&f.return()}finally{if(i)throw a}}return this}},{key:"once",value:function(e,t){var r=this,n=function n(){r.off(e,n),t.apply(void 0,arguments)};return this.on(e,n)}},{key:"on",value:function(e,t){return this.__listeners[e]||(this.__listeners[e]=[]),this.__listeners[e].push(t),this}},{key:"off",value:function(e,t){return this.__listeners[e]=t?this.__listeners[e].filter((function(e){return e!==t})):[],this}}]),e}();e.exports=o},function(e,t,r){"use strict";r.r(t);var n=r(0);r.n(n)()().operation("binary",async({blob:e,chunk:t})=>await function(e,t){return new Promise((r,n)=>{const o=new FileReader,i=t?Math.min(t,e.size):e.size,a=e.slice(0,i);o.onload=()=>r(o.result),o.onerror=n,o.readAsBinaryString(a)})}(e,t)).operation("buffer",async({blob:e,chunk:t})=>await function(e,t){return new Promise((r,n)=>{const o=new FileReader,i=t?Math.min(t,e.size):e.size,a=e.slice(0,i);o.onload=()=>r(o.result),o.onerror=n,o.readAsArrayBuffer(a)})}(e,t)).operation("compare",({buf1:e,buf2:t})=>(function(e,t){if(e===t)return!0;if(e.byteLength!==t.byteLength)return!1;const r=new DataView(e),n=new DataView(t);for(var o=e.byteLength;o--;)if(r.getUint8(o)!==n.getUint8(o))return!1;return!0})(e,t))}]);', null);
      };
    }, function(Y, k, S) {
      var w = function() {
        function d(R, p) {
          for (var g = 0;g < p.length; g++) {
            var O = p[g];
            O.enumerable = O.enumerable || false, O.configurable = true, "value" in O && (O.writable = true), Object.defineProperty(R, O.key, O);
          }
        }
        return function(R, p, g) {
          return p && d(R.prototype, p), g && d(R, g), R;
        };
      }(), P = function() {
        function d() {
          (function(R, p) {
            if (!(R instanceof p))
              throw new TypeError("Cannot call a class as a function");
          })(this, d), Object.defineProperty(this, "__listeners", { value: {}, enumerable: false, writable: false });
        }
        return w(d, [{ key: "emit", value: function(R) {
          if (!this.__listeners[R])
            return this;
          for (var p = arguments.length, g = Array(p > 1 ? p - 1 : 0), O = 1;O < p; O++)
            g[O - 1] = arguments[O];
          var V = true, N = false, F = undefined;
          try {
            for (var f, I = this.__listeners[R][Symbol.iterator]();!(V = (f = I.next()).done); V = true) {
              var v = f.value;
              v.apply(undefined, g);
            }
          } catch (o) {
            N = true, F = o;
          } finally {
            try {
              !V && I.return && I.return();
            } finally {
              if (N)
                throw F;
            }
          }
          return this;
        } }, { key: "once", value: function(R, p) {
          var g = this, O = function V() {
            g.off(R, V), p.apply(undefined, arguments);
          };
          return this.on(R, O);
        } }, { key: "on", value: function(R, p) {
          return this.__listeners[R] || (this.__listeners[R] = []), this.__listeners[R].push(p), this;
        } }, { key: "off", value: function(R, p) {
          return this.__listeners[R] = p ? this.__listeners[R].filter(function(g) {
            return g !== p;
          }) : [], this;
        } }]), d;
      }();
      Y.exports = P;
    }, function(Y, k, S) {
      var w = window.URL || window.webkitURL;
      Y.exports = function(P, d) {
        try {
          try {
            var R;
            try {
              (R = new (window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder)).append(P), R = R.getBlob();
            } catch (p) {
              R = new Blob([P]);
            }
            return new Worker(w.createObjectURL(R));
          } catch (p) {
            return new Worker("data:application/javascript," + encodeURIComponent(P));
          }
        } catch (p) {
          if (!d)
            throw Error("Inline worker is not supported");
          return new Worker(d);
        }
      };
    }, function(Y, k, S) {
      S.r(k);
      var w = S(0), P = S.n(w), d = S(1), R = S.n(d);
      S.d(k, "workersEnabled", function() {
        return p;
      }), S.d(k, "default", function() {
        return g;
      });
      let p = Boolean(window.Worker);

      class g {
        static async toBinaryStringWithWorker(O, V) {
          const N = new P.a(new R.a), F = await N.exec("binary", { blob: O, chunk: V });
          return N.terminate(), F;
        }
        static toBinaryStringWithoutWorker(O, V) {
          return function(N, F) {
            return new Promise((f, I) => {
              const v = new FileReader, o = F ? Math.min(F, N.size) : N.size, t = N.slice(0, o);
              v.onload = () => f(v.result), v.onerror = I, v.readAsBinaryString(t);
            });
          }(O, V);
        }
        static toBinaryString(O, V, N = true) {
          return N && p ? this.toBinaryStringWithWorker(O, V) : this.toBinaryStringWithoutWorker(O, V);
        }
        static async toArrayBufferWithWorker(O, V) {
          const N = new P.a(new R.a), F = await N.exec("buffer", { blob: O, chunk: V });
          return N.terminate(), F;
        }
        static toArrayBufferWithoutWorker(O, V) {
          return function(N, F) {
            return new Promise((f, I) => {
              const v = new FileReader, o = F ? Math.min(F, N.size) : N.size, t = N.slice(0, o);
              v.onload = () => f(v.result), v.onerror = I, v.readAsArrayBuffer(t);
            });
          }(O, V);
        }
        static toArrayBuffer(O, V, N = true) {
          return N && p ? this.toArrayBufferWithWorker(O, V) : this.toArrayBufferWithoutWorker(O, V);
        }
        static async compareBuffersWithWorker(O, V) {
          if (O === V)
            return true;
          const N = new P.a(new R.a), F = await N.exec("compare", { buf1: O, buf2: V }, [O, V]);
          return N.terminate(), F;
        }
        static compareBuffersWithoutWorker(O, V) {
          return function(N, F) {
            if (N === F)
              return true;
            if (N.byteLength !== F.byteLength)
              return false;
            const f = new DataView(N), I = new DataView(F);
            for (var v = N.byteLength;v--; )
              if (f.getUint8(v) !== I.getUint8(v))
                return false;
            return true;
          }(O, V);
        }
        static compareBuffers(O, V, N = true) {
          return N && p ? this.compareBuffersWithWorker(O, V) : this.compareBuffersWithoutWorker(O, V);
        }
        static sizeEqual(O, V) {
          return O.size === V.size;
        }
        static typeEqual(O, V) {
          return O.type === V.type;
        }
        static async magicNumbersEqual(O, V, N = true) {
          if (O === V)
            return true;
          const F = [24, 16, 14, 12, 8, 6, 4];
          let [f, I] = await Promise.all([this.toBinaryString(O, 24, N), this.toBinaryString(V, 24, N)]);
          for (let v of F)
            if (f.substring(0, v) === I.substring(0, v))
              return true;
          return false;
        }
        static async bytesEqualWithBinaryString(O, V, N, F = true) {
          if (O === V)
            return true;
          const [f, I] = await Promise.all([this.toBinaryString(O, N, F), this.toBinaryString(V, N, F)]);
          return f === I;
        }
        static async bytesEqualWithArrayBuffer(O, V, N, F = true) {
          if (O === V)
            return true;
          const [f, I] = await Promise.all([this.toArrayBuffer(O, N, F), this.toArrayBuffer(V, N, F)]);
          return this.compareBuffers(f, I, F);
        }
        static async isEqual(O, V, { methods: N = ["size", "type", "magic", "byte"], byte: F = "buffer", partial: f = false, chunks: I = null, worker: v = true } = {}) {
          let o = null;
          for (let t of N) {
            if (o === false)
              break;
            if (f && o === true)
              break;
            switch (t) {
              case "byte":
              case "bytes":
              case "content":
                I = I instanceof Array ? I : [O.size], o = true;
                for (let z0 of I) {
                  let U0 = false;
                  U0 = F === "buffer" ? await this.bytesEqualWithArrayBuffer(O, V, z0, v) : await this.bytesEqualWithBinaryString(O, V, z0, v), U0 || (o = false);
                }
                break;
              case "magic":
              case "headers":
              case "numbers":
              case "mime":
                o = await this.magicNumbersEqual(O, V, v);
                break;
              case "size":
              case "sizes":
                o = this.sizeEqual(O, V);
                break;
              case "type":
              case "types":
                o = this.typeEqual(O, V);
                break;
              default:
                throw new Error("Blob-compare : Unknown comparison method");
            }
          }
          return o;
        }
      }
    }]);
  });
});
var DQ = L6((T6, UQ) => {
  (function(Y, k) {
    if (typeof define === "function" && define.amd)
      define(k);
    else if (typeof T6 === "object")
      UQ.exports = k();
    else
      Y.mimetypes = k();
  })(T6, function() {
    function Y(P) {
      if (P = (P || "").toString().toLowerCase().replace(/\s/g, ""), !(P in S))
        return "bin";
      if (typeof S[P] === "string")
        return S[P];
      var d = P.split("/");
      for (var R = 0, p = S[P].length;R < p; R++)
        if (d[1] === S[P][R])
          return S[P][R];
      return S[P][0];
    }
    function k(P) {
      if (P = (P || "").toString().toLowerCase().replace(/\s/g, "").replace(/^\./g, ""), !(P in w))
        return "application/octet-stream";
      if (typeof w[P] === "string")
        return w[P];
      var d;
      for (var R = 0, p = w[P].length;R < p; R++)
        if (d = w[P][R].split("/"), d[1] === P)
          return w[P][R];
      return w[P][0];
    }
    var S = { "application/acad": "dwg", "application/andrew-inset": "", "application/applixware": "aw", "application/arj": "arj", "application/atom+xml": "xml", "application/atomcat+xml": "atomcat", "application/atomsvc+xml": "atomsvc", "application/base64": ["mm", "mme"], "application/binhex": "hqx", "application/binhex4": "hqx", "application/book": ["boo", "book"], "application/ccxml+xml,": "ccxml", "application/cdf": "cdf", "application/cdmi-capability": "cdmia", "application/cdmi-container": "cdmic", "application/cdmi-domain": "cdmid", "application/cdmi-object": "cdmio", "application/cdmi-queue": "cdmiq", "application/clariscad": "ccad", "application/commonground": "dp", "application/cu-seeme": "cu", "application/davmount+xml": "davmount", "application/drafting": "drw", "application/dsptype": "tsp", "application/dssc+der": "dssc", "application/dssc+xml": "xdssc", "application/dxf": "dxf", "application/ecmascript": ["js", "es"], "application/emma+xml": "emma", "application/envoy": "evy", "application/epub+zip": "epub", "application/excel": ["xl", "xla", "xlb", "xlc", "xld", "xlk", "xll", "xlm", "xls", "xlt", "xlv", "xlw"], "application/exi": "exi", "application/font-tdpfr": "pfr", "application/fractals": "fif", "application/freeloader": "frl", "application/futuresplash": "spl", "application/gnutar": "tgz", "application/groupwise": "vew", "application/hlp": "hlp", "application/hta": "hta", "application/hyperstudio": "stk", "application/i-deas": "unv", "application/iges": ["iges", "igs"], "application/inf": "inf", "application/internet-property-stream": "acx", "application/ipfix": "ipfix", "application/java": "class", "application/java-archive": "jar", "application/java-byte-code": "class", "application/java-serialized-object": "ser", "application/java-vm": "class", "application/javascript": "js", "application/json": "json", "application/lha": "lha", "application/lzx": "lzx", "application/mac-binary": "bin", "application/mac-binhex": "hqx", "application/mac-binhex40": "hqx", "application/mac-compactpro": "cpt", "application/macbinary": "bin", "application/mads+xml": "mads", "application/marc": "mrc", "application/marcxml+xml": "mrcx", "application/mathematica": "ma", "application/mathml+xml": "mathml", "application/mbedlet": "mbd", "application/mbox": "mbox", "application/mcad": "mcd", "application/mediaservercontrol+xml": "mscml", "application/metalink4+xml": "meta4", "application/mets+xml": "mets", "application/mime": "aps", "application/mods+xml": "mods", "application/mp21": "m21", "application/mp4": "mp4", "application/mspowerpoint": ["pot", "pps", "ppt", "ppz"], "application/msword": ["doc", "dot", "w6w", "wiz", "word"], "application/mswrite": "wri", "application/mxf": "mxf", "application/netmc": "mcp", "application/octet-stream": ["*"], "application/oda": "oda", "application/oebps-package+xml": "opf", "application/ogg": "ogx", "application/olescript": "axs", "application/onenote": "onetoc", "application/patch-ops-error+xml": "xer", "application/pdf": "pdf", "application/pgp-encrypted": "", "application/pgp-signature": "pgp", "application/pics-rules": "prf", "application/pkcs-12": "p12", "application/pkcs-crl": "crl", "application/pkcs10": "p10", "application/pkcs7-mime": ["p7c", "p7m"], "application/pkcs7-signature": "p7s", "application/pkcs8": "p8", "application/pkix-attr-cert": "ac", "application/pkix-cert": ["cer", "crt"], "application/pkix-crl": "crl", "application/pkix-pkipath": "pkipath", "application/pkixcmp": "pki", "application/plain": "text", "application/pls+xml": "pls", "application/postscript": ["ai", "eps", "ps"], "application/powerpoint": "ppt", "application/pro_eng": ["part", "prt"], "application/prs.cww": "cww", "application/pskc+xml": "pskcxml", "application/rdf+xml": "rdf", "application/reginfo+xml": "rif", "application/relax-ng-compact-syntax": "rnc", "application/resource-lists+xml": "rl", "application/resource-lists-diff+xml": "rld", "application/ringing-tones": "rng", "application/rls-services+xml": "rs", "application/rsd+xml": "rsd", "application/rss+xml": "xml", "application/rtf": ["rtf", "rtx"], "application/sbml+xml": "sbml", "application/scvp-cv-request": "scq", "application/scvp-cv-response": "scs", "application/scvp-vp-request": "spq", "application/scvp-vp-response": "spp", "application/sdp": "sdp", "application/sea": "sea", "application/set": "set", "application/set-payment-initiation": "setpay", "application/set-registration-initiation": "setreg", "application/shf+xml": "shf", "application/sla": "stl", "application/smil": ["smi", "smil"], "application/smil+xml": "smi", "application/solids": "sol", "application/sounder": "sdr", "application/sparql-query": "rq", "application/sparql-results+xml": "srx", "application/srgs": "gram", "application/srgs+xml": "grxml", "application/sru+xml": "sru", "application/ssml+xml": "ssml", "application/step": ["step", "stp"], "application/streamingmedia": "ssm", "application/tei+xml": "tei", "application/thraud+xml": "tfi", "application/timestamped-data": "tsd", "application/toolbook": "tbk", "application/vda": "vda", "application/vnd.3gpp.pic-bw-large": "plb", "application/vnd.3gpp.pic-bw-small": "psb", "application/vnd.3gpp.pic-bw-var": "pvb", "application/vnd.3gpp2.tcap": "tcap", "application/vnd.3m.post-it-notes": "pwn", "application/vnd.accpac.simply.aso": "aso", "application/vnd.accpac.simply.imp": "imp", "application/vnd.acucobol": "acu", "application/vnd.acucorp": "atc", "application/vnd.adobe.air-application-installer-package+zip": "air", "application/vnd.adobe.fxp": "fxp", "application/vnd.adobe.xdp+xml": "xdp", "application/vnd.adobe.xfdf": "xfdf", "application/vnd.ahead.space": "ahead", "application/vnd.airzip.filesecure.azf": "azf", "application/vnd.airzip.filesecure.azs": "azs", "application/vnd.amazon.ebook": "azw", "application/vnd.americandynamics.acc": "acc", "application/vnd.amiga.ami": "ami", "application/vnd.android.package-archive": "apk", "application/vnd.anser-web-certificate-issue-initiation": "cii", "application/vnd.anser-web-funds-transfer-initiation": "fti", "application/vnd.antix.game-component": "atx", "application/vnd.apple.installer+xml": "mpkg", "application/vnd.apple.mpegurl": "m3u8", "application/vnd.aristanetworks.swi": "swi", "application/vnd.audiograph": "aep", "application/vnd.blueice.multipass": "mpm", "application/vnd.bmi": "bmi", "application/vnd.businessobjects": "rep", "application/vnd.chemdraw+xml": "cdxml", "application/vnd.chipnuts.karaoke-mmd": "mmd", "application/vnd.cinderella": "cdy", "application/vnd.claymore": "cla", "application/vnd.cloanto.rp9": "rp9", "application/vnd.clonk.c4group": "c4g", "application/vnd.cluetrust.cartomobile-config": "c11amc", "application/vnd.cluetrust.cartomobile-config-pkg": "c11amz", "application/vnd.commonspace": "csp", "application/vnd.contact.cmsg": "cdbcmsg", "application/vnd.cosmocaller": "cmc", "application/vnd.crick.clicker": "clkx", "application/vnd.crick.clicker.keyboard": "clkk", "application/vnd.crick.clicker.palette": "clkp", "application/vnd.crick.clicker.template": "clkt", "application/vnd.crick.clicker.wordbank": "clkw", "application/vnd.criticaltools.wbs+xml": "wbs", "application/vnd.ctc-posml": "pml", "application/vnd.cups-ppd": "ppd", "application/vnd.curl.car": "car", "application/vnd.curl.pcurl": "pcurl", "application/vnd.data-vision.rdz": "rdz", "application/vnd.denovo.fcselayout-link": "fe_launch", "application/vnd.dna": "dna", "application/vnd.dolby.mlp": "mlp", "application/vnd.dpgraph": "dpg", "application/vnd.dreamfactory": "dfac", "application/vnd.dvb.ait": "ait", "application/vnd.dvb.service": "svc", "application/vnd.dynageo": "geo", "application/vnd.ecowin.chart": "mag", "application/vnd.enliven": "nml", "application/vnd.epson.esf": "esf", "application/vnd.epson.msf": "msf", "application/vnd.epson.quickanime": "qam", "application/vnd.epson.salt": "slt", "application/vnd.epson.ssf": "ssf", "application/vnd.eszigno3+xml": "es3", "application/vnd.ezpix-album": "ez2", "application/vnd.ezpix-package": "ez3", "application/vnd.fdf": "fdf", "application/vnd.fdsn.seed": "seed", "application/vnd.flographit": "gph", "application/vnd.fluxtime.clip": "ftc", "application/vnd.framemaker": "fm", "application/vnd.frogans.fnc": "fnc", "application/vnd.frogans.ltf": "ltf", "application/vnd.fsc.weblaunch": "fsc", "application/vnd.fujitsu.oasys": "oas", "application/vnd.fujitsu.oasys2": "oa2", "application/vnd.fujitsu.oasys3": "oa3", "application/vnd.fujitsu.oasysgp": "fg5", "application/vnd.fujitsu.oasysprs": "bh2", "application/vnd.fujixerox.ddd": "ddd", "application/vnd.fujixerox.docuworks": "xdw", "application/vnd.fujixerox.docuworks.binder": "xbd", "application/vnd.fuzzysheet": "fzs", "application/vnd.genomatix.tuxedo": "txd", "application/vnd.geogebra.file": "ggb", "application/vnd.geogebra.tool": "ggt", "application/vnd.geometry-explorer": "gex", "application/vnd.geonext": "gxt", "application/vnd.geoplan": "g2w", "application/vnd.geospace": "g3w", "application/vnd.gmx": "gmx", "application/vnd.google-earth.kml+xml": "kml", "application/vnd.google-earth.kmz": "kmz", "application/vnd.grafeq": "gqf", "application/vnd.groove-account": "gac", "application/vnd.groove-help": "ghf", "application/vnd.groove-identity-message": "gim", "application/vnd.groove-injector": "grv", "application/vnd.groove-tool-message": "gtm", "application/vnd.groove-tool-template": "tpl", "application/vnd.groove-vcard": "vcg", "application/vnd.hal+xml": "hal", "application/vnd.handheld-entertainment+xml": "zmm", "application/vnd.hbci": "hbci", "application/vnd.hhe.lesson-player": "les", "application/vnd.hp-hpgl": ["hgl", "hpg", "hpgl"], "application/vnd.hp-hpid": "hpid", "application/vnd.hp-hps": "hps", "application/vnd.hp-jlyt": "jlt", "application/vnd.hp-pcl": "pcl", "application/vnd.hp-pclxl": "pclxl", "application/vnd.hydrostatix.sof-data": "sfd-hdstx", "application/vnd.hzn-3d-crossword": "x3d", "application/vnd.ibm.minipay": "mpy", "application/vnd.ibm.modcap": "afp", "application/vnd.ibm.rights-management": "irm", "application/vnd.ibm.secure-container": "sc", "application/vnd.iccprofile": "icc", "application/vnd.igloader": "igl", "application/vnd.immervision-ivp": "ivp", "application/vnd.immervision-ivu": "ivu", "application/vnd.insors.igm": "igm", "application/vnd.intercon.formnet": "xpw", "application/vnd.intergeo": "i2g", "application/vnd.intu.qbo": "qbo", "application/vnd.intu.qfx": "qfx", "application/vnd.ipunplugged.rcprofile": "rcprofile", "application/vnd.irepository.package+xml": "irp", "application/vnd.is-xpr": "xpr", "application/vnd.isac.fcs": "fcs", "application/vnd.jam": "jam", "application/vnd.jcp.javame.midlet-rms": "rms", "application/vnd.jisp": "jisp", "application/vnd.joost.joda-archive": "joda", "application/vnd.kahootz": "ktz", "application/vnd.kde.karbon": "karbon", "application/vnd.kde.kchart": "chrt", "application/vnd.kde.kformula": "kfo", "application/vnd.kde.kivio": "flw", "application/vnd.kde.kontour": "kon", "application/vnd.kde.kpresenter": "kpr", "application/vnd.kde.kspread": "ksp", "application/vnd.kde.kword": "kwd", "application/vnd.kenameaapp": "htke", "application/vnd.kidspiration": "kia", "application/vnd.kinar": "kne", "application/vnd.koan": "skp", "application/vnd.kodak-descriptor": "sse", "application/vnd.las.las+xml": "lasxml", "application/vnd.llamagraphics.life-balance.desktop": "lbd", "application/vnd.llamagraphics.life-balance.exchange+xml": "lbe", "application/vnd.lotus-1-2-3": "123", "application/vnd.lotus-approach": "apr", "application/vnd.lotus-freelance": "pre", "application/vnd.lotus-notes": "nsf", "application/vnd.lotus-organizer": "org", "application/vnd.lotus-screencam": "scm", "application/vnd.lotus-wordpro": "lwp", "application/vnd.macports.portpkg": "portpkg", "application/vnd.mcd": "mcd", "application/vnd.medcalcdata": "mc1", "application/vnd.mediastation.cdkey": "cdkey", "application/vnd.mfer": "mwf", "application/vnd.mfmp": "mfm", "application/vnd.micrografx.flo": "flo", "application/vnd.micrografx.igx": "igx", "application/vnd.mif": "mif", "application/vnd.mobius.daf": "daf", "application/vnd.mobius.dis": "dis", "application/vnd.mobius.mbk": "mbk", "application/vnd.mobius.mqy": "mqy", "application/vnd.mobius.msl": "msl", "application/vnd.mobius.plc": "plc", "application/vnd.mobius.txf": "txf", "application/vnd.mophun.application": "mpn", "application/vnd.mophun.certificate": "mpc", "application/vnd.mozilla.xul+xml": "xul", "application/vnd.ms-artgalry": "cil", "application/vnd.ms-cab-compressed": "cab", "application/vnd.ms-excel": ["xla", "xlc", "xlm", "xls", "xlt", "xlw", "xlb", "xll"], "application/vnd.ms-excel.addin.macroenabled.12": "xlam", "application/vnd.ms-excel.sheet.binary.macroenabled.12": "xlsb", "application/vnd.ms-excel.sheet.macroenabled.12": "xlsm", "application/vnd.ms-excel.template.macroenabled.12": "xltm", "application/vnd.ms-fontobject": "eot", "application/vnd.ms-htmlhelp": "chm", "application/vnd.ms-ims": "ims", "application/vnd.ms-lrm": "lrm", "application/vnd.ms-officetheme": "thmx", "application/vnd.ms-outlook": "msg", "application/vnd.ms-pki.certstore": "sst", "application/vnd.ms-pki.pko": "pko", "application/vnd.ms-pki.seccat": "cat", "application/vnd.ms-pki.stl": "stl", "application/vnd.ms-pkicertstore": "sst", "application/vnd.ms-pkiseccat": "cat", "application/vnd.ms-pkistl": "stl", "application/vnd.ms-powerpoint": ["pot", "pps", "ppt", "ppa", "pwz"], "application/vnd.ms-powerpoint.addin.macroenabled.12": "ppam", "application/vnd.ms-powerpoint.presentation.macroenabled.12": "pptm", "application/vnd.ms-powerpoint.slide.macroenabled.12": "sldm", "application/vnd.ms-powerpoint.slideshow.macroenabled.12": "ppsm", "application/vnd.ms-powerpoint.template.macroenabled.12": "potm", "application/vnd.ms-project": "mpp", "application/vnd.ms-word.document.macroenabled.12": "docm", "application/vnd.ms-word.template.macroenabled.12": "dotm", "application/vnd.ms-works": ["wcm", "wdb", "wks", "wps"], "application/vnd.ms-wpl": "wpl", "application/vnd.ms-xpsdocument": "xps", "application/vnd.mseq": "mseq", "application/vnd.musician": "mus", "application/vnd.muvee.style": "msty", "application/vnd.neurolanguage.nlu": "nlu", "application/vnd.noblenet-directory": "nnd", "application/vnd.noblenet-sealer": "nns", "application/vnd.noblenet-web": "nnw", "application/vnd.nokia.configuration-message": "ncm", "application/vnd.nokia.n-gage.data": "ngdat", "application/vnd.nokia.n-gage.symbian.install": "n-gage", "application/vnd.nokia.radio-preset": "rpst", "application/vnd.nokia.radio-presets": "rpss", "application/vnd.nokia.ringing-tone": "rng", "application/vnd.novadigm.edm": "edm", "application/vnd.novadigm.edx": "edx", "application/vnd.novadigm.ext": "ext", "application/vnd.oasis.opendocument.chart": "odc", "application/vnd.oasis.opendocument.chart-template": "otc", "application/vnd.oasis.opendocument.database": "odb", "application/vnd.oasis.opendocument.formula": "odf", "application/vnd.oasis.opendocument.formula-template": "odft", "application/vnd.oasis.opendocument.graphics": "odg", "application/vnd.oasis.opendocument.graphics-template": "otg", "application/vnd.oasis.opendocument.image": "odi", "application/vnd.oasis.opendocument.image-template": "oti", "application/vnd.oasis.opendocument.presentation": "odp", "application/vnd.oasis.opendocument.presentation-template": "otp", "application/vnd.oasis.opendocument.spreadsheet": "ods", "application/vnd.oasis.opendocument.spreadsheet-template": "ots", "application/vnd.oasis.opendocument.text": "odt", "application/vnd.oasis.opendocument.text-master": "odm", "application/vnd.oasis.opendocument.text-template": "ott", "application/vnd.oasis.opendocument.text-web": "oth", "application/vnd.olpc-sugar": "xo", "application/vnd.oma.dd2+xml": "dd2", "application/vnd.openofficeorg.extension": "oxt", "application/vnd.openxmlformats-officedocument.presentationml.presentation": "pptx", "application/vnd.openxmlformats-officedocument.presentationml.slide": "sldx", "application/vnd.openxmlformats-officedocument.presentationml.slideshow": "ppsx", "application/vnd.openxmlformats-officedocument.presentationml.template": "potx", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": "xlsx", "application/vnd.openxmlformats-officedocument.spreadsheetml.template": "xltx", "application/vnd.openxmlformats-officedocument.wordprocessingml.document": "docx", "application/vnd.openxmlformats-officedocument.wordprocessingml.template": "dotx", "application/vnd.osgeo.mapguide.package": "mgp", "application/vnd.osgi.dp": "dp", "application/vnd.palm": "pdb", "application/vnd.pawaafile": "paw", "application/vnd.pg.format": "str", "application/vnd.pg.osasli": "ei6", "application/vnd.picsel": "efif", "application/vnd.pmi.widget": "wg", "application/vnd.pocketlearn": "plf", "application/vnd.powerbuilder6": "pbd", "application/vnd.previewsystems.box": "box", "application/vnd.proteus.magazine": "mgz", "application/vnd.publishare-delta-tree": "qps", "application/vnd.pvi.ptid1": "ptid", "application/vnd.quark.quarkxpress": "qxd", "application/vnd.realvnc.bed": "bed", "application/vnd.recordare.musicxml": "mxl", "application/vnd.recordare.musicxml+xml": "musicxml", "application/vnd.rig.cryptonote": "cryptonote", "application/vnd.rim.cod": "cod", "application/vnd.rn-realmedia": "rm", "application/vnd.rn-realplayer": "rnx", "application/vnd.route66.link66+xml": "link66", "application/vnd.sailingtracker.track": "st", "application/vnd.seemail": "see", "application/vnd.sema": "sema", "application/vnd.semd": "semd", "application/vnd.semf": "semf", "application/vnd.shana.informed.formdata": "ifm", "application/vnd.shana.informed.formtemplate": "itp", "application/vnd.shana.informed.interchange": "iif", "application/vnd.shana.informed.package": "ipk", "application/vnd.simtech-mindmapper": "twd", "application/vnd.smaf": "mmf", "application/vnd.smart.teacher": "teacher", "application/vnd.solent.sdkm+xml": "sdkm", "application/vnd.spotfire.dxp": "dxp", "application/vnd.spotfire.sfs": "sfs", "application/vnd.stardivision.calc": "sdc", "application/vnd.stardivision.draw": "sda", "application/vnd.stardivision.impress": "sdd", "application/vnd.stardivision.math": "smf", "application/vnd.stardivision.writer": "sdw", "application/vnd.stardivision.writer-global": "sgl", "application/vnd.stepmania.stepchart": "sm", "application/vnd.sun.xml.calc": "sxc", "application/vnd.sun.xml.calc.template": "stc", "application/vnd.sun.xml.draw": "sxd", "application/vnd.sun.xml.draw.template": "std", "application/vnd.sun.xml.impress": "sxi", "application/vnd.sun.xml.impress.template": "sti", "application/vnd.sun.xml.math": "sxm", "application/vnd.sun.xml.writer": "sxw", "application/vnd.sun.xml.writer.global": "sxg", "application/vnd.sun.xml.writer.template": "stw", "application/vnd.sus-calendar": "sus", "application/vnd.svd": "svd", "application/vnd.symbian.install": "sis", "application/vnd.syncml+xml": "xsm", "application/vnd.syncml.dm+wbxml": "bdm", "application/vnd.syncml.dm+xml": "xdm", "application/vnd.tao.intent-module-archive": "tao", "application/vnd.tmobile-livetv": "tmo", "application/vnd.trid.tpt": "tpt", "application/vnd.triscape.mxs": "mxs", "application/vnd.trueapp": "tra", "application/vnd.ufdl": "ufd", "application/vnd.uiq.theme": "utz", "application/vnd.umajin": "umj", "application/vnd.unity": "unityweb", "application/vnd.uoml+xml": "uoml", "application/vnd.vcx": "vcx", "application/vnd.visio": "vsd", "application/vnd.visionary": "vis", "application/vnd.vsf": "vsf", "application/vnd.wap.wbxml": "wbxml", "application/vnd.wap.wmlc": "wmlc", "application/vnd.wap.wmlscriptc": "wmlsc", "application/vnd.webturbo": "wtb", "application/vnd.wolfram.player": "nbp", "application/vnd.wordperfect": "wpd", "application/vnd.wqd": "wqd", "application/vnd.wt.stf": "stf", "application/vnd.xara": ["web", "xar"], "application/vnd.xfdl": "xfdl", "application/vnd.yamaha.hv-dic": "hvd", "application/vnd.yamaha.hv-script": "hvs", "application/vnd.yamaha.hv-voice": "hvp", "application/vnd.yamaha.openscoreformat": "osf", "application/vnd.yamaha.openscoreformat.osfpvg+xml": "osfpvg", "application/vnd.yamaha.smaf-audio": "saf", "application/vnd.yamaha.smaf-phrase": "spf", "application/vnd.yellowriver-custom-menu": "cmp", "application/vnd.zul": "zir", "application/vnd.zzazz.deck+xml": "zaz", "application/vocaltec-media-desc": "vmd", "application/vocaltec-media-file": "vmf", "application/voicexml+xml": "vxml", "application/widget": "wgt", "application/winhlp": "hlp", "application/wordperfect": ["wp", "wp5", "wp6", "wpd"], "application/wordperfect6.0": ["w60", "wp5"], "application/wordperfect6.1": "w61", "application/wsdl+xml": "wsdl", "application/wspolicy+xml": "wspolicy", "application/x-123": "wk1", "application/x-7z-compressed": "7z", "application/x-abiword": "abw", "application/x-ace-compressed": "ace", "application/x-aim": "aim", "application/x-authorware-bin": "aab", "application/x-authorware-map": "aam", "application/x-authorware-seg": "aas", "application/x-bcpio": "bcpio", "application/x-binary": "bin", "application/x-binhex40": "hqx", "application/x-bittorrent": "torrent", "application/x-bsh": ["bsh", "sh", "shar"], "application/x-bytecode.elisp": "elc", "applicaiton/x-bytecode.python": "pyc", "application/x-bzip": "bz", "application/x-bzip2": ["boz", "bz2"], "application/x-cdf": "cdf", "application/x-cdlink": "vcd", "application/x-chat": ["cha", "chat"], "application/x-chess-pgn": "pgn", "application/x-cmu-raster": "ras", "application/x-cocoa": "cco", "application/x-compactpro": "cpt", "application/x-compress": "z", "application/x-compressed": ["tgz", "gz", "z", "zip"], "application/x-conference": "nsc", "application/x-cpio": "cpio", "application/x-cpt": "cpt", "application/x-csh": "csh", "application/x-debian-package": "deb", "application/x-deepv": "deepv", "application/x-director": ["dcr", "dir", "dxr"], "application/x-doom": "wad", "application/x-dtbncx+xml": "ncx", "application/x-dtbook+xml": "dtb", "application/x-dtbresource+xml": "res", "application/x-dvi": "dvi", "application/x-elc": "elc", "application/x-envoy": ["env", "evy"], "application/x-esrehber": "es", "application/x-excel": ["xla", "xlb", "xlc", "xld", "xlk", "xll", "xlm", "xls", "xlt", "xlv", "xlw"], "application/x-font-bdf": "bdf", "application/x-font-ghostscript": "gsf", "application/x-font-linux-psf": "psf", "application/x-font-otf": "otf", "application/x-font-pcf": "pcf", "application/x-font-snf": "snf", "application/x-font-ttf": "ttf", "application/x-font-type1": "pfa", "application/x-font-woff": "woff", "application/x-frame": "mif", "application/x-freelance": "pre", "application/x-futuresplash": "spl", "application/x-gnumeric": "gnumeric", "application/x-gsp": "gsp", "application/x-gss": "gss", "application/x-gtar": "gtar", "application/x-gzip": ["gz", "gzip"], "application/x-hdf": "hdf", "application/x-helpfile": ["help", "hlp"], "application/x-httpd-imap": "imap", "application/x-ima": "ima", "application/x-internet-signup": ["ins", "isp"], "application/x-internett-signup": "ins", "application/x-inventor": "iv", "application/x-ip2": "ip", "application/x-iphone": "iii", "application/x-java-class": "class", "application/x-java-commerce": "jcm", "application/x-java-jnlp-file": "jnlp", "application/x-javascript": "js", "application/x-koan": ["skd", "skm", "skp", "skt"], "application/x-ksh": "ksh", "application/x-latex": ["latex", "ltx"], "application/x-lha": "lha", "application/x-lisp": "lsp", "application/x-livescreen": "ivy", "application/x-lotus": "wq1", "application/x-lotusscreencam": "scm", "application/x-lzh": "lzh", "application/x-lzx": "lzx", "application/x-mac-binhex40": "hqx", "application/x-macbinary": "bin", "application/x-magic-cap-package-1.0": "mc$", "application/x-mathcad": "mcd", "application/x-meme": "mm", "application/x-midi": ["mid", "midi"], "application/x-mif": "mif", "application/x-mix-transfer": "nix", "application/x-mobipocket-ebook": "prc", "application/x-mplayer2": "asx", "application/x-ms-application": "application", "application/x-ms-wmd": "wmd", "application/x-ms-wmz": "wmz", "application/x-ms-xbap": "xbap", "application/x-msaccess": "mdb", "application/x-msbinder": "obd", "application/x-mscardfile": "crd", "application/x-msclip": "clp", "application/x-msdownload": ["dll", "exe"], "application/x-msexcel": ["xla", "xls", "xlw"], "application/x-msmediaview": ["m13", "m14", "mvb"], "application/x-msmetafile": "wmf", "application/x-msmoney": "mny", "application/x-mspowerpoint": "ppt", "application/x-mspublisher": "pub", "application/x-msschedule": "scd", "application/x-msterminal": "trm", "application/x-mswrite": "wri", "application/x-navi-animation": "ani", "application/x-navidoc": "nvd", "application/x-navimap": "map", "application/x-navistyle": "stl", "application/x-netcdf": ["cdf", "nc"], "application/x-newton-compatible-pkg": "pkg", "application/x-nokia-9000-communicator-add-on-software": "aos", "application/x-omc": "omc", "application/x-omcdatamaker": "omcd", "application/x-omcregerator": "omcr", "application/x-pagemaker": ["pm4", "pm5"], "application/x-pcl": "pcl", "application/x-perfmon": ["pma", "pmc", "pml", "pmr", "pmw"], "application/x-pixclscript": "plx", "application/x-pkcs10": "p10", "application/x-pkcs12": ["p12", "pfx"], "application/x-pkcs7-certificates": ["p7b", "spc"], "application/x-pkcs7-certreqresp": "p7r", "application/x-pkcs7-mime": ["p7c", "p7m"], "application/x-pkcs7-signature": ["p7s", "p7a"], "application/x-pointplus": "css", "application/x-portable-anymap": "pnm", "application/x-project": ["mpc", "mpt", "mpv", "mpx"], "application/x-qpro": "wb1", "application/x-rar-compressed": "rar", "application/x-rtf": "rtf", "application/x-sdp": "sdp", "application/x-sea": "sea", "application/x-seelogo": "sl", "application/x-sh": "sh", "application/x-shar": ["shar", "sh"], "application/x-shockwave-flash": "swf", "application/x-silverlight-app": "xap", "application/x-sit": "sit", "application/x-sprite": ["spr", "sprite"], "application/x-stuffit": "sit", "application/x-stuffitx": "sitx", "application/x-sv4cpio": "sv4cpio", "application/x-sv4crc": "sv4crc", "application/x-tar": "tar", "application/x-tbook": ["sbk", "tbk"], "application/x-tcl": "tcl", "application/x-tex": "tex", "application/x-tex-tfm": "tfm", "application/x-texinfo": ["texi", "texinfo"], "application/x-troff": ["roff", "t", "tr"], "application/x-troff-man": "man", "application/x-troff-me": "me", "application/x-troff-ms": "ms", "application/x-troff-msvideo": "avi", "application/x-ustar": "ustar", "application/x-visio": ["vsd", "vst", "vsw"], "application/x-vnd.audioexplosion.mzz": "mzz", "application/x-vnd.ls-xpix": "xpix", "application/x-vrml": "vrml", "application/x-wais-source": ["src", "wsrc"], "application/x-winhelp": "hlp", "application/x-wintalk": "wtk", "application/x-world": ["svr", "wrl"], "application/x-wpwin": "wpd", "application/x-wri": "wri", "application/x-x509-ca-cert": ["cer", "crt", "der"], "application/x-x509-user-cert": "crt", "application/x-xfig": "fig", "application/x-xpinstall": "xpi", "application/x-zip-compressed": "zip", "application/xcap-diff+xml": "xdf", "application/xenc+xml": "xenc", "application/xhtml+xml": "xhtml", "application/xml": "xml", "application/xml-dtd": "dtd", "application/xop+xml": "xop", "application/xslt+xml": "xslt", "application/xspf+xml": "xspf", "application/xv+xml": "mxml", "application/yang": "yang", "application/yin+xml": "yin", "application/ynd.ms-pkipko": "pko", "application/zip": "zip", "audio/adpcm": "adp", "audio/aiff": ["aif", "aifc", "aiff"], "audio/basic": ["au", "snd"], "audio/it": "it", "audio/make": ["funk", "my", "pfunk"], "audio/make.my.funk": "pfunk", "audio/mid": ["mid", "rmi"], "audio/midi": ["kar", "mid", "midi"], "audio/mod": "mod", "audio/mp4": "mp4a", "audio/mpeg": ["mp3", "m2a", "mp2", "mpa", "mpg", "mpga"], "audio/mpeg3": "mp3", "audio/nspaudio": ["la", "lma"], "audio/ogg": "oga", "audio/s3m": "s3m", "audio/tsp-audio": "tsi", "audio/tsplayer": "tsp", "audio/vnd.dece.audio": "uva", "audio/vnd.digital-winds": "eol", "audio/vnd.dra": "dra", "audio/vnd.dts": "dts", "audio/vnd.dts.hd": "dtshd", "audio/vnd.lucent.voice": "lvp", "audio/vnd.ms-playready.media.pya": "pya", "audio/vnd.nuera.ecelp4800": "ecelp4800", "audio/vnd.nuera.ecelp7470": "ecelp7470", "audio/vnd.nuera.ecelp9600": "ecelp9600", "audio/vnd.qcelp": "qcp", "audio/vnd.rip": "rip", "audio/voc": "voc", "audio/voxware": "vox", "audio/wav": "wav", "audio/webm": "weba", "audio/x-aac": "aac", "audio/x-adpcm": "snd", "audio/x-aiff": ["aif", "aifc", "aiff"], "audio/x-au": "au", "audio/x-gsm": ["gsd", "gsm"], "audio/x-jam": "jam", "audio/x-liveaudio": "lam", "audio/x-mid": ["mid", "midi"], "audio/x-midi": ["mid", "midi"], "audio/x-mod": "mod", "audio/x-mpeg": "mp2", "audio/x-mpeg-3": "mp3", "audio/x-mpegurl": "m3u", "audio/x-mpequrl": "m3u", "audio/x-ms-wax": "wax", "audio/x-ms-wma": "wma", "audio/x-nspaudio": ["la", "lma"], "audio/x-pn-realaudio": ["ra", "ram", "rm", "rmm", "rmp"], "audio/x-pn-realaudio-plugin": ["ra", "rmp", "rpm"], "audio/x-psid": "sid", "audio/x-realaudio": "ra", "audio/x-twinvq": "vqf", "audio/x-twinvq-plugin": ["vqe", "vql"], "audio/x-vnd.audioexplosion.mjuicemediafile": "mjf", "audio/x-voc": "voc", "audio/x-wav": "wav", "audio/xm": "xm", "chemical/x-cdx": "cdx", "chemical/x-cif": "cif", "chemical/x-cmdf": "cmdf", "chemical/x-cml": "cml", "chemical/x-csml": "csml", "chemical/x-pdb": ["pdb", "xyz"], "chemical/x-xyz": "xyz", "drawing/x-dwf": "dwf", "i-world/i-vrml": "ivr", "image/bmp": ["bmp", "bm"], "image/cgm": "cgm", "image/cis-cod": "cod", "image/cmu-raster": ["ras", "rast"], "image/fif": "fif", "image/florian": ["flo", "turbot"], "image/g3fax": "g3", "image/gif": "gif", "image/ief": ["ief", "iefs"], "image/jpeg": ["jpe", "jpeg", "jpg", "jfif", "jfif-tbnl"], "image/jutvision": "jut", "image/ktx": "ktx", "image/naplps": ["nap", "naplps"], "image/pict": ["pic", "pict"], "image/pipeg": "jfif", "image/pjpeg": ["jfif", "jpe", "jpeg", "jpg"], "image/png": ["png", "x-png"], "image/prs.btif": "btif", "image/svg+xml": "svg", "image/tiff": ["tif", "tiff"], "image/vasa": "mcf", "image/vnd.adobe.photoshop": "psd", "image/vnd.dece.graphic": "uvi", "image/vnd.djvu": "djvu", "image/vnd.dvb.subtitle": "sub", "image/vnd.dwg": ["dwg", "dxf", "svf"], "image/vnd.dxf": "dxf", "image/vnd.fastbidsheet": "fbs", "image/vnd.fpx": "fpx", "image/vnd.fst": "fst", "image/vnd.fujixerox.edmics-mmr": "mmr", "image/vnd.fujixerox.edmics-rlc": "rlc", "image/vnd.ms-modi": "mdi", "image/vnd.net-fpx": ["fpx", "npx"], "image/vnd.rn-realflash": "rf", "image/vnd.rn-realpix": "rp", "image/vnd.wap.wbmp": "wbmp", "image/vnd.xiff": "xif", "image/webp": "webp", "image/x-cmu-raster": "ras", "image/x-cmx": "cmx", "image/x-dwg": ["dwg", "dxf", "svf"], "image/x-freehand": "fh", "image/x-icon": "ico", "image/x-jg": "art", "image/x-jps": "jps", "image/x-niff": ["nif", "niff"], "image/x-pcx": "pcx", "image/x-pict": ["pct", "pic"], "image/x-portable-anymap": "pnm", "image/x-portable-bitmap": "pbm", "image/x-portable-graymap": "pgm", "image/x-portable-greymap": "pgm", "image/x-portable-pixmap": "ppm", "image/x-quicktime": ["qif", "qti", "qtif"], "image/x-rgb": "rgb", "image/x-tiff": ["tif", "tiff"], "image/x-windows-bmp": "bmp", "image/x-xbitmap": "xbm", "image/x-xbm": "xbm", "image/x-xpixmap": ["xpm", "pm"], "image/x-xwd": "xwd", "image/x-xwindowdump": "xwd", "image/xbm": "xbm", "image/xpm": "xpm", "message/rfc822": ["mht", "mhtml", "nws", "mime", "eml"], "model/iges": ["iges", "igs"], "model/mesh": "msh", "model/vnd.collada+xml": "dae", "model/vnd.dwf": "dwf", "model/vnd.gdl": "gdl", "model/vnd.gtw": "gtw", "model/vnd.mts": "mts", "model/vnd.vtu": "vtu", "model/vrml": ["vrml", "wrl", "wrz"], "model/x-pov": "pov", "multipart/x-gzip": "gzip", "multipart/x-ustar": "ustar", "multipart/x-zip": "zip", "music/crescendo": ["mid", "midi"], "music/x-karaoke": "kar", "paleovu/x-pv": "pvu", "text/asp": "asp", "text/calendar": "ics", "text/css": "css", "text/csv": "csv", "text/ecmascript": "js", "text/h323": "323", "text/html": ["htm", "html", "stm", "acgi", "htmls", "htx", "shtml"], "text/iuls": "uls", "text/javascript": "js", "text/mcf": "mcf", "text/n3": "n3", "text/pascal": "pas", "text/plain": ["bas", "c", "h", "txt", "c++", "cc", "com", "conf", "cxx", "def", "f", "f90", "for", "g", "hh", "idc", "jav", "java", "list", "log", "lst", "m", "mar", "pl", "sdml", "text"], "text/plain-bas": "par", "text/prs.lines.tag": "dsc", "text/richtext": ["rtx", "rt", "rtf"], "text/scriplet": "wsc", "text/scriptlet": "sct", "text/sgml": ["sgm", "sgml"], "text/tab-separated-values": "tsv", "text/troff": "t", "text/turtle": "ttl", "text/uri-list": ["uni", "unis", "uri", "uris"], "text/vnd.abc": "abc", "text/vnd.curl": "curl", "text/vnd.curl.dcurl": "dcurl", "text/vnd.curl.mcurl": "mcurl", "text/vnd.curl.scurl": "scurl", "text/vnd.fly": "fly", "text/vnd.fmi.flexstor": "flx", "text/vnd.graphviz": "gv", "text/vnd.in3d.3dml": "3dml", "text/vnd.in3d.spot": "spot", "text/vnd.rn-realtext": "rt", "text/vnd.sun.j2me.app-descriptor": "jad", "text/vnd.wap.wml": "wml", "text/vnd.wap.wmlscript": "wmls", "text/webviewhtml": "htt", "text/x-asm": ["asm", "s"], "text/x-audiosoft-intra": "aip", "text/x-c": ["c", "cc", "cpp"], "text/x-component": "htc", "text/x-fortran": ["f", "f77", "f90", "for"], "text/x-h": ["h", "hh"], "text/x-java-source": ["jav", "java"], "text/x-java-source,java": "java", "text/x-la-asf": "lsx", "text/x-m": "m", "text/x-pascal": "p", "text/x-script": "hlb", "text/x-script.csh": "csh", "text/x-script.elisp": "el", "text/x-script.guile": "scm", "text/x-script.ksh": "ksh", "text/x-script.lisp": "lsp", "text/x-script.perl": "pl", "text/x-script.perl-module": "pm", "text/x-script.phyton": "py", "text/x-script.rexx": "rexx", "text/x-script.scheme": "scm", "text/x-script.sh": "sh", "text/x-script.tcl": "tcl", "text/x-script.tcsh": "tcsh", "text/x-script.zsh": "zsh", "text/x-server-parsed-html": ["shtml", "ssi"], "text/x-setext": "etx", "text/x-sgml": ["sgm", "sgml"], "text/x-speech": ["spc", "talk"], "text/x-uil": "uil", "text/x-uuencode": ["uu", "uue"], "text/x-vcalendar": "vcs", "text/x-vcard": "vcf", "text/xml": "xml", "video/3gpp": "3gp", "video/3gpp2": "3g2", "video/animaflex": "afl", "video/avi": "avi", "video/avs-video": "avs", "video/dl": "dl", "video/fli": "fli", "video/gl": "gl", "video/h261": "h261", "video/h263": "h263", "video/h264": "h264", "video/jpeg": "jpgv", "video/jpm": "jpm", "video/mj2": "mj2", "video/mp4": "mp4", "video/mpeg": ["mp2", "mpa", "mpe", "mpeg", "mpg", "mpv2", "m1v", "m2v", "mp3"], "video/msvideo": "avi", "video/ogg": "ogv", "video/quicktime": ["mov", "qt", "moov"], "video/vdo": "vdo", "video/vivo": ["viv", "vivo"], "video/vnd.dece.hd": "uvh", "video/vnd.dece.mobile": "uvm", "video/vnd.dece.pd": "uvp", "video/vnd.dece.sd": "uvs", "video/vnd.dece.video": "uvv", "video/vnd.fvt": "fvt", "video/vnd.mpegurl": "mxu", "video/vnd.ms-playready.media.pyv": "pyv", "video/vnd.rn-realvideo": "rv", "video/vnd.uvvu.mp4": "uvu", "video/vnd.vivo": ["viv", "vivo"], "video/vosaic": "vos", "video/webm": "webm", "video/x-amt-demorun": "xdr", "video/x-amt-showrun": "xsr", "video/x-atomic3d-feature": "fmf", "video/x-dl": "dl", "video/x-dv": ["dif", "dv"], "video/x-f4v": "f4v", "video/x-fli": "fli", "video/x-flv": "flv", "video/x-gl": "gl", "video/x-isvideo": "isu", "video/x-la-asf": ["lsf", "lsx"], "video/x-m4v": "m4v", "video/x-motion-jpeg": "mjpg", "video/x-mpeg": ["mp2", "mp3"], "video/x-mpeq2a": "mp2", "video/x-ms-asf": ["asf", "asr", "asx"], "video/x-ms-asf-plugin": "asx", "video/x-ms-wm": "wm", "video/x-ms-wmv": "wmv", "video/x-ms-wmx": "wmx", "video/x-ms-wvx": "wvx", "video/x-msvideo": "avi", "video/x-qtc": "qtc", "video/x-scm": "scm", "video/x-sgi-movie": ["movie", "mv"], "windows/metafile": "wmf", "www/mime": "mime", "x-conference/x-cooltalk": "ice", "x-music/x-midi": ["mid", "midi"], "x-world/x-3dmf": ["3dm", "3dmf", "qd3", "qd3d"], "x-world/x-svr": "svr", "x-world/x-vrml": ["flr", "vrml", "wrl", "wrz", "xaf", "xof"], "x-world/x-vrt": "vrt", "xgl/drawing": "xgz", "xgl/movie": "xmz" }, w = { "": ["application/andrew-inset", "application/pgp-encrypted"], "*": "application/octet-stream", "123": "application/vnd.lotus-1-2-3", "323": "text/h323", "3dm": "x-world/x-3dmf", "3dmf": "x-world/x-3dmf", "3dml": "text/vnd.in3d.3dml", "3g2": "video/3gpp2", "3gp": "video/3gpp", "7z": "application/x-7z-compressed", a: "application/octet-stream", aab: "application/x-authorware-bin", aac: "audio/x-aac", aam: "application/x-authorware-map", aas: "application/x-authorware-seg", abc: "text/vnd.abc", abw: "application/x-abiword", ac: "application/pkix-attr-cert", acc: "application/vnd.americandynamics.acc", ace: "application/x-ace-compressed", acgi: "text/html", acu: "application/vnd.acucobol", acx: "application/internet-property-stream", adp: "audio/adpcm", aep: "application/vnd.audiograph", afl: "video/animaflex", afp: "application/vnd.ibm.modcap", ahead: "application/vnd.ahead.space", ai: "application/postscript", aif: ["audio/aiff", "audio/x-aiff"], aifc: ["audio/aiff", "audio/x-aiff"], aiff: ["audio/aiff", "audio/x-aiff"], aim: "application/x-aim", aip: "text/x-audiosoft-intra", air: "application/vnd.adobe.air-application-installer-package+zip", ait: "application/vnd.dvb.ait", ami: "application/vnd.amiga.ami", ani: "application/x-navi-animation", aos: "application/x-nokia-9000-communicator-add-on-software", apk: "application/vnd.android.package-archive", application: "application/x-ms-application", apr: "application/vnd.lotus-approach", aps: "application/mime", arc: "application/octet-stream", arj: ["application/arj", "application/octet-stream"], art: "image/x-jg", asf: "video/x-ms-asf", asm: "text/x-asm", aso: "application/vnd.accpac.simply.aso", asp: "text/asp", asr: "video/x-ms-asf", asx: ["video/x-ms-asf", "application/x-mplayer2", "video/x-ms-asf-plugin"], atc: "application/vnd.acucorp", atomcat: "application/atomcat+xml", atomsvc: "application/atomsvc+xml", atx: "application/vnd.antix.game-component", au: ["audio/basic", "audio/x-au"], avi: ["video/avi", "video/msvideo", "application/x-troff-msvideo", "video/x-msvideo"], avs: "video/avs-video", aw: "application/applixware", axs: "application/olescript", azf: "application/vnd.airzip.filesecure.azf", azs: "application/vnd.airzip.filesecure.azs", azw: "application/vnd.amazon.ebook", bas: "text/plain", bcpio: "application/x-bcpio", bdf: "application/x-font-bdf", bdm: "application/vnd.syncml.dm+wbxml", bed: "application/vnd.realvnc.bed", bh2: "application/vnd.fujitsu.oasysprs", bin: ["application/octet-stream", "application/mac-binary", "application/macbinary", "application/x-macbinary", "application/x-binary"], bm: "image/bmp", bmi: "application/vnd.bmi", bmp: ["image/bmp", "image/x-windows-bmp"], boo: "application/book", book: "application/book", box: "application/vnd.previewsystems.box", boz: "application/x-bzip2", bsh: "application/x-bsh", btif: "image/prs.btif", bz: "application/x-bzip", bz2: "application/x-bzip2", c: ["text/plain", "text/x-c"], "c++": "text/plain", c11amc: "application/vnd.cluetrust.cartomobile-config", c11amz: "application/vnd.cluetrust.cartomobile-config-pkg", c4g: "application/vnd.clonk.c4group", cab: "application/vnd.ms-cab-compressed", car: "application/vnd.curl.car", cat: ["application/vnd.ms-pkiseccat", "application/vnd.ms-pki.seccat"], cc: ["text/plain", "text/x-c"], ccad: "application/clariscad", cco: "application/x-cocoa", ccxml: "application/ccxml+xml,", cdbcmsg: "application/vnd.contact.cmsg", cdf: ["application/cdf", "application/x-cdf", "application/x-netcdf"], cdkey: "application/vnd.mediastation.cdkey", cdmia: "application/cdmi-capability", cdmic: "application/cdmi-container", cdmid: "application/cdmi-domain", cdmio: "application/cdmi-object", cdmiq: "application/cdmi-queue", cdx: "chemical/x-cdx", cdxml: "application/vnd.chemdraw+xml", cdy: "application/vnd.cinderella", cer: ["application/pkix-cert", "application/x-x509-ca-cert"], cgm: "image/cgm", cha: "application/x-chat", chat: "application/x-chat", chm: "application/vnd.ms-htmlhelp", chrt: "application/vnd.kde.kchart", cif: "chemical/x-cif", cii: "application/vnd.anser-web-certificate-issue-initiation", cil: "application/vnd.ms-artgalry", cla: "application/vnd.claymore", class: ["application/octet-stream", "application/java", "application/java-byte-code", "application/java-vm", "application/x-java-class"], clkk: "application/vnd.crick.clicker.keyboard", clkp: "application/vnd.crick.clicker.palette", clkt: "application/vnd.crick.clicker.template", clkw: "application/vnd.crick.clicker.wordbank", clkx: "application/vnd.crick.clicker", clp: "application/x-msclip", cmc: "application/vnd.cosmocaller", cmdf: "chemical/x-cmdf", cml: "chemical/x-cml", cmp: "application/vnd.yellowriver-custom-menu", cmx: "image/x-cmx", cod: ["image/cis-cod", "application/vnd.rim.cod"], com: ["application/octet-stream", "text/plain"], conf: "text/plain", cpio: "application/x-cpio", cpp: "text/x-c", cpt: ["application/mac-compactpro", "application/x-compactpro", "application/x-cpt"], crd: "application/x-mscardfile", crl: ["application/pkix-crl", "application/pkcs-crl"], crt: ["application/pkix-cert", "application/x-x509-user-cert", "application/x-x509-ca-cert"], cryptonote: "application/vnd.rig.cryptonote", csh: ["text/x-script.csh", "application/x-csh"], csml: "chemical/x-csml", csp: "application/vnd.commonspace", css: ["text/css", "application/x-pointplus"], csv: "text/csv", cu: "application/cu-seeme", curl: "text/vnd.curl", cww: "application/prs.cww", cxx: "text/plain", dae: "model/vnd.collada+xml", daf: "application/vnd.mobius.daf", davmount: "application/davmount+xml", dcr: "application/x-director", dcurl: "text/vnd.curl.dcurl", dd2: "application/vnd.oma.dd2+xml", ddd: "application/vnd.fujixerox.ddd", deb: "application/x-debian-package", deepv: "application/x-deepv", def: "text/plain", der: "application/x-x509-ca-cert", dfac: "application/vnd.dreamfactory", dif: "video/x-dv", dir: "application/x-director", dis: "application/vnd.mobius.dis", djvu: "image/vnd.djvu", dl: ["video/dl", "video/x-dl"], dll: "application/x-msdownload", dms: "application/octet-stream", dna: "application/vnd.dna", doc: "application/msword", docm: "application/vnd.ms-word.document.macroenabled.12", docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document", dot: "application/msword", dotm: "application/vnd.ms-word.template.macroenabled.12", dotx: "application/vnd.openxmlformats-officedocument.wordprocessingml.template", dp: ["application/commonground", "application/vnd.osgi.dp"], dpg: "application/vnd.dpgraph", dra: "audio/vnd.dra", drw: "application/drafting", dsc: "text/prs.lines.tag", dssc: "application/dssc+der", dtb: "application/x-dtbook+xml", dtd: "application/xml-dtd", dts: "audio/vnd.dts", dtshd: "audio/vnd.dts.hd", dump: "application/octet-stream", dv: "video/x-dv", dvi: "application/x-dvi", dwf: ["model/vnd.dwf", "drawing/x-dwf"], dwg: ["application/acad", "image/vnd.dwg", "image/x-dwg"], dxf: ["application/dxf", "image/vnd.dwg", "image/vnd.dxf", "image/x-dwg"], dxp: "application/vnd.spotfire.dxp", dxr: "application/x-director", ecelp4800: "audio/vnd.nuera.ecelp4800", ecelp7470: "audio/vnd.nuera.ecelp7470", ecelp9600: "audio/vnd.nuera.ecelp9600", edm: "application/vnd.novadigm.edm", edx: "application/vnd.novadigm.edx", efif: "application/vnd.picsel", ei6: "application/vnd.pg.osasli", el: "text/x-script.elisp", elc: ["application/x-elc", "application/x-bytecode.elisp"], eml: "message/rfc822", emma: "application/emma+xml", env: "application/x-envoy", eol: "audio/vnd.digital-winds", eot: "application/vnd.ms-fontobject", eps: "application/postscript", epub: "application/epub+zip", es: ["application/ecmascript", "application/x-esrehber"], es3: "application/vnd.eszigno3+xml", esf: "application/vnd.epson.esf", etx: "text/x-setext", evy: ["application/envoy", "application/x-envoy"], exe: ["application/octet-stream", "application/x-msdownload"], exi: "application/exi", ext: "application/vnd.novadigm.ext", ez2: "application/vnd.ezpix-album", ez3: "application/vnd.ezpix-package", f: ["text/plain", "text/x-fortran"], f4v: "video/x-f4v", f77: "text/x-fortran", f90: ["text/plain", "text/x-fortran"], fbs: "image/vnd.fastbidsheet", fcs: "application/vnd.isac.fcs", fdf: "application/vnd.fdf", fe_launch: "application/vnd.denovo.fcselayout-link", fg5: "application/vnd.fujitsu.oasysgp", fh: "image/x-freehand", fif: ["application/fractals", "image/fif"], fig: "application/x-xfig", fli: ["video/fli", "video/x-fli"], flo: ["image/florian", "application/vnd.micrografx.flo"], flr: "x-world/x-vrml", flv: "video/x-flv", flw: "application/vnd.kde.kivio", flx: "text/vnd.fmi.flexstor", fly: "text/vnd.fly", fm: "application/vnd.framemaker", fmf: "video/x-atomic3d-feature", fnc: "application/vnd.frogans.fnc", for: ["text/plain", "text/x-fortran"], fpx: ["image/vnd.fpx", "image/vnd.net-fpx"], frl: "application/freeloader", fsc: "application/vnd.fsc.weblaunch", fst: "image/vnd.fst", ftc: "application/vnd.fluxtime.clip", fti: "application/vnd.anser-web-funds-transfer-initiation", funk: "audio/make", fvt: "video/vnd.fvt", fxp: "application/vnd.adobe.fxp", fzs: "application/vnd.fuzzysheet", g: "text/plain", g2w: "application/vnd.geoplan", g3: "image/g3fax", g3w: "application/vnd.geospace", gac: "application/vnd.groove-account", gdl: "model/vnd.gdl", geo: "application/vnd.dynageo", gex: "application/vnd.geometry-explorer", ggb: "application/vnd.geogebra.file", ggt: "application/vnd.geogebra.tool", ghf: "application/vnd.groove-help", gif: "image/gif", gim: "application/vnd.groove-identity-message", gl: ["video/gl", "video/x-gl"], gmx: "application/vnd.gmx", gnumeric: "application/x-gnumeric", gph: "application/vnd.flographit", gqf: "application/vnd.grafeq", gram: "application/srgs", grv: "application/vnd.groove-injector", grxml: "application/srgs+xml", gsd: "audio/x-gsm", gsf: "application/x-font-ghostscript", gsm: "audio/x-gsm", gsp: "application/x-gsp", gss: "application/x-gss", gtar: "application/x-gtar", gtm: "application/vnd.groove-tool-message", gtw: "model/vnd.gtw", gv: "text/vnd.graphviz", gxt: "application/vnd.geonext", gz: ["application/x-gzip", "application/x-compressed"], gzip: ["multipart/x-gzip", "application/x-gzip"], h: ["text/plain", "text/x-h"], h261: "video/h261", h263: "video/h263", h264: "video/h264", hal: "application/vnd.hal+xml", hbci: "application/vnd.hbci", hdf: "application/x-hdf", help: "application/x-helpfile", hgl: "application/vnd.hp-hpgl", hh: ["text/plain", "text/x-h"], hlb: "text/x-script", hlp: ["application/winhlp", "application/hlp", "application/x-helpfile", "application/x-winhelp"], hpg: "application/vnd.hp-hpgl", hpgl: "application/vnd.hp-hpgl", hpid: "application/vnd.hp-hpid", hps: "application/vnd.hp-hps", hqx: ["application/mac-binhex40", "application/binhex", "application/binhex4", "application/mac-binhex", "application/x-binhex40", "application/x-mac-binhex40"], hta: "application/hta", htc: "text/x-component", htke: "application/vnd.kenameaapp", htm: "text/html", html: "text/html", htmls: "text/html", htt: "text/webviewhtml", htx: "text/html", hvd: "application/vnd.yamaha.hv-dic", hvp: "application/vnd.yamaha.hv-voice", hvs: "application/vnd.yamaha.hv-script", i2g: "application/vnd.intergeo", icc: "application/vnd.iccprofile", ice: "x-conference/x-cooltalk", ico: "image/x-icon", ics: "text/calendar", idc: "text/plain", ief: "image/ief", iefs: "image/ief", ifm: "application/vnd.shana.informed.formdata", iges: ["application/iges", "model/iges"], igl: "application/vnd.igloader", igm: "application/vnd.insors.igm", igs: ["application/iges", "model/iges"], igx: "application/vnd.micrografx.igx", iif: "application/vnd.shana.informed.interchange", iii: "application/x-iphone", ima: "application/x-ima", imap: "application/x-httpd-imap", imp: "application/vnd.accpac.simply.imp", ims: "application/vnd.ms-ims", inf: "application/inf", ins: ["application/x-internet-signup", "application/x-internett-signup"], ip: "application/x-ip2", ipfix: "application/ipfix", ipk: "application/vnd.shana.informed.package", irm: "application/vnd.ibm.rights-management", irp: "application/vnd.irepository.package+xml", isp: "application/x-internet-signup", isu: "video/x-isvideo", it: "audio/it", itp: "application/vnd.shana.informed.formtemplate", iv: "application/x-inventor", ivp: "application/vnd.immervision-ivp", ivr: "i-world/i-vrml", ivu: "application/vnd.immervision-ivu", ivy: "application/x-livescreen", jad: "text/vnd.sun.j2me.app-descriptor", jam: ["application/vnd.jam", "audio/x-jam"], jar: "application/java-archive", jav: ["text/plain", "text/x-java-source"], java: ["text/plain", "text/x-java-source,java", "text/x-java-source"], jcm: "application/x-java-commerce", jfif: ["image/pipeg", "image/jpeg", "image/pjpeg"], "jfif-tbnl": "image/jpeg", jisp: "application/vnd.jisp", jlt: "application/vnd.hp-jlyt", jnlp: "application/x-java-jnlp-file", joda: "application/vnd.joost.joda-archive", jpe: ["image/jpeg", "image/pjpeg"], jpeg: ["image/jpeg", "image/pjpeg"], jpg: ["image/jpeg", "image/pjpeg"], jpgv: "video/jpeg", jpm: "video/jpm", jps: "image/x-jps", js: ["application/javascript", "application/ecmascript", "text/javascript", "text/ecmascript", "application/x-javascript"], json: "application/json", jut: "image/jutvision", kar: ["audio/midi", "music/x-karaoke"], karbon: "application/vnd.kde.karbon", kfo: "application/vnd.kde.kformula", kia: "application/vnd.kidspiration", kml: "application/vnd.google-earth.kml+xml", kmz: "application/vnd.google-earth.kmz", kne: "application/vnd.kinar", kon: "application/vnd.kde.kontour", kpr: "application/vnd.kde.kpresenter", ksh: ["application/x-ksh", "text/x-script.ksh"], ksp: "application/vnd.kde.kspread", ktx: "image/ktx", ktz: "application/vnd.kahootz", kwd: "application/vnd.kde.kword", la: ["audio/nspaudio", "audio/x-nspaudio"], lam: "audio/x-liveaudio", lasxml: "application/vnd.las.las+xml", latex: "application/x-latex", lbd: "application/vnd.llamagraphics.life-balance.desktop", lbe: "application/vnd.llamagraphics.life-balance.exchange+xml", les: "application/vnd.hhe.lesson-player", lha: ["application/octet-stream", "application/lha", "application/x-lha"], lhx: "application/octet-stream", link66: "application/vnd.route66.link66+xml", list: "text/plain", lma: ["audio/nspaudio", "audio/x-nspaudio"], log: "text/plain", lrm: "application/vnd.ms-lrm", lsf: "video/x-la-asf", lsp: ["application/x-lisp", "text/x-script.lisp"], lst: "text/plain", lsx: ["video/x-la-asf", "text/x-la-asf"], ltf: "application/vnd.frogans.ltf", ltx: "application/x-latex", lvp: "audio/vnd.lucent.voice", lwp: "application/vnd.lotus-wordpro", lzh: ["application/octet-stream", "application/x-lzh"], lzx: ["application/lzx", "application/octet-stream", "application/x-lzx"], m: ["text/plain", "text/x-m"], m13: "application/x-msmediaview", m14: "application/x-msmediaview", m1v: "video/mpeg", m21: "application/mp21", m2a: "audio/mpeg", m2v: "video/mpeg", m3u: ["audio/x-mpegurl", "audio/x-mpequrl"], m3u8: "application/vnd.apple.mpegurl", m4v: "video/x-m4v", ma: "application/mathematica", mads: "application/mads+xml", mag: "application/vnd.ecowin.chart", man: "application/x-troff-man", map: "application/x-navimap", mar: "text/plain", mathml: "application/mathml+xml", mbd: "application/mbedlet", mbk: "application/vnd.mobius.mbk", mbox: "application/mbox", mc$: "application/x-magic-cap-package-1.0", mc1: "application/vnd.medcalcdata", mcd: ["application/mcad", "application/vnd.mcd", "application/x-mathcad"], mcf: ["image/vasa", "text/mcf"], mcp: "application/netmc", mcurl: "text/vnd.curl.mcurl", mdb: "application/x-msaccess", mdi: "image/vnd.ms-modi", me: "application/x-troff-me", meta4: "application/metalink4+xml", mets: "application/mets+xml", mfm: "application/vnd.mfmp", mgp: "application/vnd.osgeo.mapguide.package", mgz: "application/vnd.proteus.magazine", mht: "message/rfc822", mhtml: "message/rfc822", mid: ["audio/mid", "audio/midi", "music/crescendo", "x-music/x-midi", "audio/x-midi", "application/x-midi", "audio/x-mid"], midi: ["audio/midi", "music/crescendo", "x-music/x-midi", "audio/x-midi", "application/x-midi", "audio/x-mid"], mif: ["application/vnd.mif", "application/x-mif", "application/x-frame"], mime: ["message/rfc822", "www/mime"], mj2: "video/mj2", mjf: "audio/x-vnd.audioexplosion.mjuicemediafile", mjpg: "video/x-motion-jpeg", mlp: "application/vnd.dolby.mlp", mm: ["application/base64", "application/x-meme"], mmd: "application/vnd.chipnuts.karaoke-mmd", mme: "application/base64", mmf: "application/vnd.smaf", mmr: "image/vnd.fujixerox.edmics-mmr", mny: "application/x-msmoney", mod: ["audio/mod", "audio/x-mod"], mods: "application/mods+xml", moov: "video/quicktime", mov: "video/quicktime", movie: "video/x-sgi-movie", mp2: ["video/mpeg", "audio/mpeg", "video/x-mpeg", "audio/x-mpeg", "video/x-mpeq2a"], mp3: ["audio/mpeg", "audio/mpeg3", "video/mpeg", "audio/x-mpeg-3", "video/x-mpeg"], mp4: ["video/mp4", "application/mp4"], mp4a: "audio/mp4", mpa: ["video/mpeg", "audio/mpeg"], mpc: ["application/vnd.mophun.certificate", "application/x-project"], mpe: "video/mpeg", mpeg: "video/mpeg", mpg: ["video/mpeg", "audio/mpeg"], mpga: "audio/mpeg", mpkg: "application/vnd.apple.installer+xml", mpm: "application/vnd.blueice.multipass", mpn: "application/vnd.mophun.application", mpp: "application/vnd.ms-project", mpt: "application/x-project", mpv: "application/x-project", mpv2: "video/mpeg", mpx: "application/x-project", mpy: "application/vnd.ibm.minipay", mqy: "application/vnd.mobius.mqy", mrc: "application/marc", mrcx: "application/marcxml+xml", ms: "application/x-troff-ms", mscml: "application/mediaservercontrol+xml", mseq: "application/vnd.mseq", msf: "application/vnd.epson.msf", msg: "application/vnd.ms-outlook", msh: "model/mesh", msl: "application/vnd.mobius.msl", msty: "application/vnd.muvee.style", mts: "model/vnd.mts", mus: "application/vnd.musician", musicxml: "application/vnd.recordare.musicxml+xml", mv: "video/x-sgi-movie", mvb: "application/x-msmediaview", mwf: "application/vnd.mfer", mxf: "application/mxf", mxl: "application/vnd.recordare.musicxml", mxml: "application/xv+xml", mxs: "application/vnd.triscape.mxs", mxu: "video/vnd.mpegurl", my: "audio/make", mzz: "application/x-vnd.audioexplosion.mzz", "n-gage": "application/vnd.nokia.n-gage.symbian.install", n3: "text/n3", nap: "image/naplps", naplps: "image/naplps", nbp: "application/vnd.wolfram.player", nc: "application/x-netcdf", ncm: "application/vnd.nokia.configuration-message", ncx: "application/x-dtbncx+xml", ngdat: "application/vnd.nokia.n-gage.data", nif: "image/x-niff", niff: "image/x-niff", nix: "application/x-mix-transfer", nlu: "application/vnd.neurolanguage.nlu", nml: "application/vnd.enliven", nnd: "application/vnd.noblenet-directory", nns: "application/vnd.noblenet-sealer", nnw: "application/vnd.noblenet-web", npx: "image/vnd.net-fpx", nsc: "application/x-conference", nsf: "application/vnd.lotus-notes", nvd: "application/x-navidoc", nws: "message/rfc822", o: "application/octet-stream", oa2: "application/vnd.fujitsu.oasys2", oa3: "application/vnd.fujitsu.oasys3", oas: "application/vnd.fujitsu.oasys", obd: "application/x-msbinder", oda: "application/oda", odb: "application/vnd.oasis.opendocument.database", odc: "application/vnd.oasis.opendocument.chart", odf: "application/vnd.oasis.opendocument.formula", odft: "application/vnd.oasis.opendocument.formula-template", odg: "application/vnd.oasis.opendocument.graphics", odi: "application/vnd.oasis.opendocument.image", odm: "application/vnd.oasis.opendocument.text-master", odp: "application/vnd.oasis.opendocument.presentation", ods: "application/vnd.oasis.opendocument.spreadsheet", odt: "application/vnd.oasis.opendocument.text", oga: "audio/ogg", ogv: "video/ogg", ogx: "application/ogg", omc: "application/x-omc", omcd: "application/x-omcdatamaker", omcr: "application/x-omcregerator", onetoc: "application/onenote", opf: "application/oebps-package+xml", org: "application/vnd.lotus-organizer", osf: "application/vnd.yamaha.openscoreformat", osfpvg: "application/vnd.yamaha.openscoreformat.osfpvg+xml", otc: "application/vnd.oasis.opendocument.chart-template", otf: "application/x-font-otf", otg: "application/vnd.oasis.opendocument.graphics-template", oth: "application/vnd.oasis.opendocument.text-web", oti: "application/vnd.oasis.opendocument.image-template", otp: "application/vnd.oasis.opendocument.presentation-template", ots: "application/vnd.oasis.opendocument.spreadsheet-template", ott: "application/vnd.oasis.opendocument.text-template", oxt: "application/vnd.openofficeorg.extension", p: "text/x-pascal", p10: ["application/pkcs10", "application/x-pkcs10"], p12: ["application/pkcs-12", "application/x-pkcs12"], p7a: "application/x-pkcs7-signature", p7b: "application/x-pkcs7-certificates", p7c: ["application/pkcs7-mime", "application/x-pkcs7-mime"], p7m: ["application/pkcs7-mime", "application/x-pkcs7-mime"], p7r: "application/x-pkcs7-certreqresp", p7s: ["application/pkcs7-signature", "application/x-pkcs7-signature"], p8: "application/pkcs8", par: "text/plain-bas", part: "application/pro_eng", pas: "text/pascal", paw: "application/vnd.pawaafile", pbd: "application/vnd.powerbuilder6", pbm: "image/x-portable-bitmap", pcf: "application/x-font-pcf", pcl: ["application/vnd.hp-pcl", "application/x-pcl"], pclxl: "application/vnd.hp-pclxl", pct: "image/x-pict", pcurl: "application/vnd.curl.pcurl", pcx: "image/x-pcx", pdb: ["application/vnd.palm", "chemical/x-pdb"], pdf: "application/pdf", pfa: "application/x-font-type1", pfr: "application/font-tdpfr", pfunk: ["audio/make", "audio/make.my.funk"], pfx: "application/x-pkcs12", pgm: ["image/x-portable-graymap", "image/x-portable-greymap"], pgn: "application/x-chess-pgn", pgp: "application/pgp-signature", pic: ["image/pict", "image/x-pict"], pict: "image/pict", pkg: "application/x-newton-compatible-pkg", pki: "application/pkixcmp", pkipath: "application/pkix-pkipath", pko: ["application/ynd.ms-pkipko", "application/vnd.ms-pki.pko"], pl: ["text/plain", "text/x-script.perl"], plb: "application/vnd.3gpp.pic-bw-large", plc: "application/vnd.mobius.plc", plf: "application/vnd.pocketlearn", pls: "application/pls+xml", plx: "application/x-pixclscript", pm: ["text/x-script.perl-module", "image/x-xpixmap"], pm4: "application/x-pagemaker", pm5: "application/x-pagemaker", pma: "application/x-perfmon", pmc: "application/x-perfmon", pml: ["application/vnd.ctc-posml", "application/x-perfmon"], pmr: "application/x-perfmon", pmw: "application/x-perfmon", png: "image/png", pnm: ["application/x-portable-anymap", "image/x-portable-anymap"], portpkg: "application/vnd.macports.portpkg", pot: ["application/vnd.ms-powerpoint", "application/mspowerpoint"], potm: "application/vnd.ms-powerpoint.template.macroenabled.12", potx: "application/vnd.openxmlformats-officedocument.presentationml.template", pov: "model/x-pov", ppa: "application/vnd.ms-powerpoint", ppam: "application/vnd.ms-powerpoint.addin.macroenabled.12", ppd: "application/vnd.cups-ppd", ppm: "image/x-portable-pixmap", pps: ["application/vnd.ms-powerpoint", "application/mspowerpoint"], ppsm: "application/vnd.ms-powerpoint.slideshow.macroenabled.12", ppsx: "application/vnd.openxmlformats-officedocument.presentationml.slideshow", ppt: ["application/vnd.ms-powerpoint", "application/mspowerpoint", "application/powerpoint", "application/x-mspowerpoint"], pptm: "application/vnd.ms-powerpoint.presentation.macroenabled.12", pptx: "application/vnd.openxmlformats-officedocument.presentationml.presentation", ppz: "application/mspowerpoint", prc: "application/x-mobipocket-ebook", pre: ["application/vnd.lotus-freelance", "application/x-freelance"], prf: "application/pics-rules", prt: "application/pro_eng", ps: "application/postscript", psb: "application/vnd.3gpp.pic-bw-small", psd: ["application/octet-stream", "image/vnd.adobe.photoshop"], psf: "application/x-font-linux-psf", pskcxml: "application/pskc+xml", ptid: "application/vnd.pvi.ptid1", pub: "application/x-mspublisher", pvb: "application/vnd.3gpp.pic-bw-var", pvu: "paleovu/x-pv", pwn: "application/vnd.3m.post-it-notes", pwz: "application/vnd.ms-powerpoint", py: "text/x-script.phyton", pya: "audio/vnd.ms-playready.media.pya", pyc: "applicaiton/x-bytecode.python", pyv: "video/vnd.ms-playready.media.pyv", qam: "application/vnd.epson.quickanime", qbo: "application/vnd.intu.qbo", qcp: "audio/vnd.qcelp", qd3: "x-world/x-3dmf", qd3d: "x-world/x-3dmf", qfx: "application/vnd.intu.qfx", qif: "image/x-quicktime", qps: "application/vnd.publishare-delta-tree", qt: "video/quicktime", qtc: "video/x-qtc", qti: "image/x-quicktime", qtif: "image/x-quicktime", qxd: "application/vnd.quark.quarkxpress", ra: ["audio/x-realaudio", "audio/x-pn-realaudio", "audio/x-pn-realaudio-plugin"], ram: "audio/x-pn-realaudio", rar: "application/x-rar-compressed", ras: ["image/cmu-raster", "application/x-cmu-raster", "image/x-cmu-raster"], rast: "image/cmu-raster", rcprofile: "application/vnd.ipunplugged.rcprofile", rdf: "application/rdf+xml", rdz: "application/vnd.data-vision.rdz", rep: "application/vnd.businessobjects", res: "application/x-dtbresource+xml", rexx: "text/x-script.rexx", rf: "image/vnd.rn-realflash", rgb: "image/x-rgb", rif: "application/reginfo+xml", rip: "audio/vnd.rip", rl: "application/resource-lists+xml", rlc: "image/vnd.fujixerox.edmics-rlc", rld: "application/resource-lists-diff+xml", rm: ["application/vnd.rn-realmedia", "audio/x-pn-realaudio"], rmi: "audio/mid", rmm: "audio/x-pn-realaudio", rmp: ["audio/x-pn-realaudio-plugin", "audio/x-pn-realaudio"], rms: "application/vnd.jcp.javame.midlet-rms", rnc: "application/relax-ng-compact-syntax", rng: ["application/ringing-tones", "application/vnd.nokia.ringing-tone"], rnx: "application/vnd.rn-realplayer", roff: "application/x-troff", rp: "image/vnd.rn-realpix", rp9: "application/vnd.cloanto.rp9", rpm: "audio/x-pn-realaudio-plugin", rpss: "application/vnd.nokia.radio-presets", rpst: "application/vnd.nokia.radio-preset", rq: "application/sparql-query", rs: "application/rls-services+xml", rsd: "application/rsd+xml", rt: ["text/richtext", "text/vnd.rn-realtext"], rtf: ["application/rtf", "text/richtext", "application/x-rtf"], rtx: ["text/richtext", "application/rtf"], rv: "video/vnd.rn-realvideo", s: "text/x-asm", s3m: "audio/s3m", saf: "application/vnd.yamaha.smaf-audio", saveme: "application/octet-stream", sbk: "application/x-tbook", sbml: "application/sbml+xml", sc: "application/vnd.ibm.secure-container", scd: "application/x-msschedule", scm: ["application/vnd.lotus-screencam", "video/x-scm", "text/x-script.guile", "application/x-lotusscreencam", "text/x-script.scheme"], scq: "application/scvp-cv-request", scs: "application/scvp-cv-response", sct: "text/scriptlet", scurl: "text/vnd.curl.scurl", sda: "application/vnd.stardivision.draw", sdc: "application/vnd.stardivision.calc", sdd: "application/vnd.stardivision.impress", sdkm: "application/vnd.solent.sdkm+xml", sdml: "text/plain", sdp: ["application/sdp", "application/x-sdp"], sdr: "application/sounder", sdw: "application/vnd.stardivision.writer", sea: ["application/sea", "application/x-sea"], see: "application/vnd.seemail", seed: "application/vnd.fdsn.seed", sema: "application/vnd.sema", semd: "application/vnd.semd", semf: "application/vnd.semf", ser: "application/java-serialized-object", set: "application/set", setpay: "application/set-payment-initiation", setreg: "application/set-registration-initiation", "sfd-hdstx": "application/vnd.hydrostatix.sof-data", sfs: "application/vnd.spotfire.sfs", sgl: "application/vnd.stardivision.writer-global", sgm: ["text/sgml", "text/x-sgml"], sgml: ["text/sgml", "text/x-sgml"], sh: ["application/x-shar", "application/x-bsh", "application/x-sh", "text/x-script.sh"], shar: ["application/x-bsh", "application/x-shar"], shf: "application/shf+xml", shtml: ["text/html", "text/x-server-parsed-html"], sid: "audio/x-psid", sis: "application/vnd.symbian.install", sit: ["application/x-stuffit", "application/x-sit"], sitx: "application/x-stuffitx", skd: "application/x-koan", skm: "application/x-koan", skp: ["application/vnd.koan", "application/x-koan"], skt: "application/x-koan", sl: "application/x-seelogo", sldm: "application/vnd.ms-powerpoint.slide.macroenabled.12", sldx: "application/vnd.openxmlformats-officedocument.presentationml.slide", slt: "application/vnd.epson.salt", sm: "application/vnd.stepmania.stepchart", smf: "application/vnd.stardivision.math", smi: ["application/smil", "application/smil+xml"], smil: "application/smil", snd: ["audio/basic", "audio/x-adpcm"], snf: "application/x-font-snf", sol: "application/solids", spc: ["text/x-speech", "application/x-pkcs7-certificates"], spf: "application/vnd.yamaha.smaf-phrase", spl: ["application/futuresplash", "application/x-futuresplash"], spot: "text/vnd.in3d.spot", spp: "application/scvp-vp-response", spq: "application/scvp-vp-request", spr: "application/x-sprite", sprite: "application/x-sprite", src: "application/x-wais-source", sru: "application/sru+xml", srx: "application/sparql-results+xml", sse: "application/vnd.kodak-descriptor", ssf: "application/vnd.epson.ssf", ssi: "text/x-server-parsed-html", ssm: "application/streamingmedia", ssml: "application/ssml+xml", sst: ["application/vnd.ms-pkicertstore", "application/vnd.ms-pki.certstore"], st: "application/vnd.sailingtracker.track", stc: "application/vnd.sun.xml.calc.template", std: "application/vnd.sun.xml.draw.template", step: "application/step", stf: "application/vnd.wt.stf", sti: "application/vnd.sun.xml.impress.template", stk: "application/hyperstudio", stl: ["application/vnd.ms-pkistl", "application/sla", "application/vnd.ms-pki.stl", "application/x-navistyle"], stm: "text/html", stp: "application/step", str: "application/vnd.pg.format", stw: "application/vnd.sun.xml.writer.template", sub: "image/vnd.dvb.subtitle", sus: "application/vnd.sus-calendar", sv4cpio: "application/x-sv4cpio", sv4crc: "application/x-sv4crc", svc: "application/vnd.dvb.service", svd: "application/vnd.svd", svf: ["image/vnd.dwg", "image/x-dwg"], svg: "image/svg+xml", svr: ["x-world/x-svr", "application/x-world"], swf: "application/x-shockwave-flash", swi: "application/vnd.aristanetworks.swi", sxc: "application/vnd.sun.xml.calc", sxd: "application/vnd.sun.xml.draw", sxg: "application/vnd.sun.xml.writer.global", sxi: "application/vnd.sun.xml.impress", sxm: "application/vnd.sun.xml.math", sxw: "application/vnd.sun.xml.writer", t: ["text/troff", "application/x-troff"], talk: "text/x-speech", tao: "application/vnd.tao.intent-module-archive", tar: "application/x-tar", tbk: ["application/toolbook", "application/x-tbook"], tcap: "application/vnd.3gpp2.tcap", tcl: ["text/x-script.tcl", "application/x-tcl"], tcsh: "text/x-script.tcsh", teacher: "application/vnd.smart.teacher", tei: "application/tei+xml", tex: "application/x-tex", texi: "application/x-texinfo", texinfo: "application/x-texinfo", text: ["application/plain", "text/plain"], tfi: "application/thraud+xml", tfm: "application/x-tex-tfm", tgz: ["application/gnutar", "application/x-compressed"], thmx: "application/vnd.ms-officetheme", tif: ["image/tiff", "image/x-tiff"], tiff: ["image/tiff", "image/x-tiff"], tmo: "application/vnd.tmobile-livetv", torrent: "application/x-bittorrent", tpl: "application/vnd.groove-tool-template", tpt: "application/vnd.trid.tpt", tr: "application/x-troff", tra: "application/vnd.trueapp", trm: "application/x-msterminal", tsd: "application/timestamped-data", tsi: "audio/tsp-audio", tsp: ["application/dsptype", "audio/tsplayer"], tsv: "text/tab-separated-values", ttf: "application/x-font-ttf", ttl: "text/turtle", turbot: "image/florian", twd: "application/vnd.simtech-mindmapper", txd: "application/vnd.genomatix.tuxedo", txf: "application/vnd.mobius.txf", txt: "text/plain", ufd: "application/vnd.ufdl", uil: "text/x-uil", uls: "text/iuls", umj: "application/vnd.umajin", uni: "text/uri-list", unis: "text/uri-list", unityweb: "application/vnd.unity", unv: "application/i-deas", uoml: "application/vnd.uoml+xml", uri: "text/uri-list", uris: "text/uri-list", ustar: ["application/x-ustar", "multipart/x-ustar"], utz: "application/vnd.uiq.theme", uu: ["application/octet-stream", "text/x-uuencode"], uue: "text/x-uuencode", uva: "audio/vnd.dece.audio", uvh: "video/vnd.dece.hd", uvi: "image/vnd.dece.graphic", uvm: "video/vnd.dece.mobile", uvp: "video/vnd.dece.pd", uvs: "video/vnd.dece.sd", uvu: "video/vnd.uvvu.mp4", uvv: "video/vnd.dece.video", vcd: "application/x-cdlink", vcf: "text/x-vcard", vcg: "application/vnd.groove-vcard", vcs: "text/x-vcalendar", vcx: "application/vnd.vcx", vda: "application/vda", vdo: "video/vdo", vew: "application/groupwise", vis: "application/vnd.visionary", viv: ["video/vivo", "video/vnd.vivo"], vivo: ["video/vivo", "video/vnd.vivo"], vmd: "application/vocaltec-media-desc", vmf: "application/vocaltec-media-file", voc: ["audio/voc", "audio/x-voc"], vos: "video/vosaic", vox: "audio/voxware", vqe: "audio/x-twinvq-plugin", vqf: "audio/x-twinvq", vql: "audio/x-twinvq-plugin", vrml: ["model/vrml", "x-world/x-vrml", "application/x-vrml"], vrt: "x-world/x-vrt", vsd: ["application/vnd.visio", "application/x-visio"], vsf: "application/vnd.vsf", vst: "application/x-visio", vsw: "application/x-visio", vtu: "model/vnd.vtu", vxml: "application/voicexml+xml", w60: "application/wordperfect6.0", w61: "application/wordperfect6.1", w6w: "application/msword", wad: "application/x-doom", wav: ["audio/wav", "audio/x-wav"], wax: "audio/x-ms-wax", wb1: "application/x-qpro", wbmp: "image/vnd.wap.wbmp", wbs: "application/vnd.criticaltools.wbs+xml", wbxml: "application/vnd.wap.wbxml", wcm: "application/vnd.ms-works", wdb: "application/vnd.ms-works", web: "application/vnd.xara", weba: "audio/webm", webm: "video/webm", webp: "image/webp", wg: "application/vnd.pmi.widget", wgt: "application/widget", wiz: "application/msword", wk1: "application/x-123", wks: "application/vnd.ms-works", wm: "video/x-ms-wm", wma: "audio/x-ms-wma", wmd: "application/x-ms-wmd", wmf: ["windows/metafile", "application/x-msmetafile"], wml: "text/vnd.wap.wml", wmlc: "application/vnd.wap.wmlc", wmls: "text/vnd.wap.wmlscript", wmlsc: "application/vnd.wap.wmlscriptc", wmv: "video/x-ms-wmv", wmx: "video/x-ms-wmx", wmz: "application/x-ms-wmz", woff: "application/x-font-woff", word: "application/msword", wp: "application/wordperfect", wp5: ["application/wordperfect", "application/wordperfect6.0"], wp6: "application/wordperfect", wpd: ["application/wordperfect", "application/vnd.wordperfect", "application/x-wpwin"], wpl: "application/vnd.ms-wpl", wps: "application/vnd.ms-works", wq1: "application/x-lotus", wqd: "application/vnd.wqd", wri: ["application/mswrite", "application/x-wri", "application/x-mswrite"], wrl: ["model/vrml", "x-world/x-vrml", "application/x-world"], wrz: ["model/vrml", "x-world/x-vrml"], wsc: "text/scriplet", wsdl: "application/wsdl+xml", wspolicy: "application/wspolicy+xml", wsrc: "application/x-wais-source", wtb: "application/vnd.webturbo", wtk: "application/x-wintalk", wvx: "video/x-ms-wvx", "x-png": "image/png", x3d: "application/vnd.hzn-3d-crossword", xaf: "x-world/x-vrml", xap: "application/x-silverlight-app", xar: "application/vnd.xara", xbap: "application/x-ms-xbap", xbd: "application/vnd.fujixerox.docuworks.binder", xbm: ["image/xbm", "image/x-xbm", "image/x-xbitmap"], xdf: "application/xcap-diff+xml", xdm: "application/vnd.syncml.dm+xml", xdp: "application/vnd.adobe.xdp+xml", xdr: "video/x-amt-demorun", xdssc: "application/dssc+xml", xdw: "application/vnd.fujixerox.docuworks", xenc: "application/xenc+xml", xer: "application/patch-ops-error+xml", xfdf: "application/vnd.adobe.xfdf", xfdl: "application/vnd.xfdl", xgz: "xgl/drawing", xhtml: "application/xhtml+xml", xif: "image/vnd.xiff", xl: "application/excel", xla: ["application/vnd.ms-excel", "application/excel", "application/x-msexcel", "application/x-excel"], xlam: "application/vnd.ms-excel.addin.macroenabled.12", xlb: ["application/excel", "application/vnd.ms-excel", "application/x-excel"], xlc: ["application/vnd.ms-excel", "application/excel", "application/x-excel"], xld: ["application/excel", "application/x-excel"], xlk: ["application/excel", "application/x-excel"], xll: ["application/excel", "application/vnd.ms-excel", "application/x-excel"], xlm: ["application/vnd.ms-excel", "application/excel", "application/x-excel"], xls: ["application/vnd.ms-excel", "application/excel", "application/x-msexcel", "application/x-excel"], xlsb: "application/vnd.ms-excel.sheet.binary.macroenabled.12", xlsm: "application/vnd.ms-excel.sheet.macroenabled.12", xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", xlt: ["application/vnd.ms-excel", "application/excel", "application/x-excel"], xltm: "application/vnd.ms-excel.template.macroenabled.12", xltx: "application/vnd.openxmlformats-officedocument.spreadsheetml.template", xlv: ["application/excel", "application/x-excel"], xlw: ["application/vnd.ms-excel", "application/excel", "application/x-msexcel", "application/x-excel"], xm: "audio/xm", xml: ["application/xml", "text/xml", "application/atom+xml", "application/rss+xml"], xmz: "xgl/movie", xo: "application/vnd.olpc-sugar", xof: "x-world/x-vrml", xop: "application/xop+xml", xpi: "application/x-xpinstall", xpix: "application/x-vnd.ls-xpix", xpm: ["image/xpm", "image/x-xpixmap"], xpr: "application/vnd.is-xpr", xps: "application/vnd.ms-xpsdocument", xpw: "application/vnd.intercon.formnet", xslt: "application/xslt+xml", xsm: "application/vnd.syncml+xml", xspf: "application/xspf+xml", xsr: "video/x-amt-showrun", xul: "application/vnd.mozilla.xul+xml", xwd: ["image/x-xwd", "image/x-xwindowdump"], xyz: ["chemical/x-xyz", "chemical/x-pdb"], yang: "application/yang", yin: "application/yin+xml", z: ["application/x-compressed", "application/x-compress"], zaz: "application/vnd.zzazz.deck+xml", zip: ["application/zip", "multipart/x-zip", "application/x-zip-compressed", "application/x-compressed"], zir: "application/vnd.zul", zmm: "application/vnd.handheld-entertainment+xml", zoo: "application/octet-stream", zsh: "text/x-script.zsh" };
    return { detectExtension: Y, detectMimeType: k };
  });
});
var WQ = MK(HQ(), 1);
var _K = BQ().default;
var zK = DQ();
var GQ = /\.\w+/;

class MQ {
  authToken;
  username;
  rootURL;
  organizationName;
  databaseStorageRepoName;
  constructor({ authToken: Y, username: k, rootURL: S = "https://api.github.com", organizationName: w = "The-Brains", databaseStorageRepoName: P = "database-storage" }) {
    if (this.authToken = Y, this.username = k, this.rootURL = S, this.organizationName = w, this.databaseStorageRepoName = P, !this.authToken || !this.username)
      throw 'Need to set GET request with "token" and "username".';
  }
  headerAuthorization() {
    return "Basic " + btoa(`${this.username}:${this.authToken}`);
  }
  async getData(Y) {
    const k = Y.match(GQ)?.[0], S = `contents/data/${Y}${k ? "" : ".json"}`, w = `${this.rootURL}/repos/${this.organizationName}/${this.databaseStorageRepoName}/${S}`;
    try {
      const d = await (await fetch(w, { method: "GET", headers: { Authorization: this.headerAuthorization() } })).json();
      if (d.content)
        switch (k?.toLocaleLowerCase()) {
          case ".json":
          case undefined: {
            const R = atob(d.content);
            return { data: JSON.parse(R), sha: d.sha };
          }
          default: {
            const R = zK.detectMimeType(k);
            return { data: await (await fetch(`data:${R};base64,${d.content}`)).blob(), sha: d.sha };
          }
        }
      else if (d.message === "Not Found")
        return { data: null, sha: null };
      else
        throw new Error("Unable to parse response.");
    } catch (P) {
      if (P.responseJSON?.message === "Not Found")
        return { data: null, sha: null };
      else
        throw P;
    }
  }
  async makeBase64Blob(Y) {
    const k = new FileReader;
    return k.readAsDataURL(Y), new Promise((S) => {
      k.onloadend = () => {
        const w = k.result;
        if (typeof w === "string" && w.indexOf("data:") === 0)
          S(w.split(",")[1]);
        else
          S(w);
      };
    });
  }
  async setData(Y, k) {
    const S = await this.getData(Y), w = k instanceof Blob;
    if (S.data) {
      if (w) {
        if (_K.isEqual(k, S.data))
          return S;
      } else if (WQ.isEqual(k, S.data))
        return S;
    }
    const P = GQ.test(Y), d = `contents/data/${Y}${P ? "" : ".json"}`, R = w ? await this.makeBase64Blob(k) : btoa(JSON.stringify(k)), p = `${this.rootURL}/repos/${this.organizationName}/${this.databaseStorageRepoName}/${d}`, g = JSON.stringify({ message: `Creating key/value for key: '${Y}'`, content: R, sha: S.sha }), V = await (await fetch(p, { method: "PUT", headers: { Authorization: this.headerAuthorization() }, body: g })).json();
    return { data: k, sha: V.content.sha };
  }
}

// src/index.ts
async function getData(key, options) {
  const api = new MQ({ ...DEFAULT_OPTIONS, ...options });
  return api.getData(key);
}
async function setData(key, value, options) {
  const api = new MQ({ ...DEFAULT_OPTIONS, ...options });
  return api.setData(key, value);
}
var DEFAULT_OPTIONS = {
  username: "jacklehamster",
  authToken: "",
  organizationName: "jacklehamster",
  databaseStorageRepoName: "github-datastore"
};
export {
  setData,
  getData,
  DEFAULT_OPTIONS
};
