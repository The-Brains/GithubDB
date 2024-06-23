// /Users/vincent/GithubDB/out/index.js
var z = (Z, U) => () => (U || Z((U = { exports: {} }).exports, U), U.exports);
var r0 = z((Y7, e4) => {
  var t4 = Object.prototype.toString;
  e4.exports = function Z(U) {
    var Q = t4.call(U), Y = Q === "[object Arguments]";
    if (!Y)
      Y = Q !== "[object Array]" && U !== null && typeof U === "object" && typeof U.length === "number" && U.length >= 0 && t4.call(U.callee) === "[object Function]";
    return Y;
  };
});
var z1 = z((X7, q1) => {
  var J1;
  if (!Object.keys)
    U0 = Object.prototype.hasOwnProperty, o0 = Object.prototype.toString, U1 = r0(), s0 = Object.prototype.propertyIsEnumerable, Z1 = !s0.call({ toString: null }, "toString"), Q1 = s0.call(function() {
    }, "prototype"), Z0 = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"], F0 = function(Z) {
      var U = Z.constructor;
      return U && U.prototype === Z;
    }, Y1 = { $applicationCache: true, $console: true, $external: true, $frame: true, $frameElement: true, $frames: true, $innerHeight: true, $innerWidth: true, $onmozfullscreenchange: true, $onmozfullscreenerror: true, $outerHeight: true, $outerWidth: true, $pageXOffset: true, $pageYOffset: true, $parent: true, $scrollLeft: true, $scrollTop: true, $scrollX: true, $scrollY: true, $self: true, $webkitIndexedDB: true, $webkitStorageInfo: true, $window: true }, X1 = function() {
      if (typeof window === "undefined")
        return false;
      for (var Z in window)
        try {
          if (!Y1["$" + Z] && U0.call(window, Z) && window[Z] !== null && typeof window[Z] === "object")
            try {
              F0(window[Z]);
            } catch (U) {
              return true;
            }
        } catch (U) {
          return true;
        }
      return false;
    }(), _1 = function(Z) {
      if (typeof window === "undefined" || !X1)
        return F0(Z);
      try {
        return F0(Z);
      } catch (U) {
        return false;
      }
    }, J1 = function Z(U) {
      var Q = U !== null && typeof U === "object", Y = o0.call(U) === "[object Function]", X = U1(U), _ = Q && o0.call(U) === "[object String]", J = [];
      if (!Q && !Y && !X)
        throw new TypeError("Object.keys called on a non-object");
      var F = Q1 && Y;
      if (_ && U.length > 0 && !U0.call(U, 0))
        for (var q = 0;q < U.length; ++q)
          J.push(String(q));
      if (X && U.length > 0)
        for (var V = 0;V < U.length; ++V)
          J.push(String(V));
      else
        for (var R in U)
          if (!(F && R === "prototype") && U0.call(U, R))
            J.push(String(R));
      if (Z1) {
        var G = _1(U);
        for (var K = 0;K < Z0.length; ++K)
          if (!(G && Z0[K] === "constructor") && U0.call(U, Z0[K]))
            J.push(Z0[K]);
      }
      return J;
    };
  var U0, o0, U1, s0, Z1, Q1, Z0, F0, Y1, X1, _1;
  q1.exports = J1;
});
var K0 = z((_7, K1) => {
  var L5 = Array.prototype.slice, N5 = r0(), F1 = Object.keys, V0 = F1 ? function Z(U) {
    return F1(U);
  } : z1(), V1 = Object.keys;
  V0.shim = function Z() {
    if (Object.keys) {
      var U = function() {
        var Q = Object.keys(arguments);
        return Q && Q.length === arguments.length;
      }(1, 2);
      if (!U)
        Object.keys = function Q(Y) {
          if (N5(Y))
            return V1(L5.call(Y));
          return V1(Y);
        };
    } else
      Object.keys = V0;
    return Object.keys || V0;
  };
  K1.exports = V0;
});
var G1 = z((J7, W1) => {
  W1.exports = Error;
});
var L1 = z((q7, R1) => {
  R1.exports = EvalError;
});
var H1 = z((z7, N1) => {
  N1.exports = RangeError;
});
var M1 = z((F7, C1) => {
  C1.exports = ReferenceError;
});
var a0 = z((V7, w1) => {
  w1.exports = SyntaxError;
});
var B = z((K7, D1) => {
  D1.exports = TypeError;
});
var O1 = z((W7, A1) => {
  A1.exports = URIError;
});
var W0 = z((G7, P1) => {
  P1.exports = function Z() {
    if (typeof Symbol !== "function" || typeof Object.getOwnPropertySymbols !== "function")
      return false;
    if (typeof Symbol.iterator === "symbol")
      return true;
    var U = {}, Q = Symbol("test"), Y = Object(Q);
    if (typeof Q === "string")
      return false;
    if (Object.prototype.toString.call(Q) !== "[object Symbol]")
      return false;
    if (Object.prototype.toString.call(Y) !== "[object Symbol]")
      return false;
    var X = 42;
    U[Q] = X;
    for (Q in U)
      return false;
    if (typeof Object.keys === "function" && Object.keys(U).length !== 0)
      return false;
    if (typeof Object.getOwnPropertyNames === "function" && Object.getOwnPropertyNames(U).length !== 0)
      return false;
    var _ = Object.getOwnPropertySymbols(U);
    if (_.length !== 1 || _[0] !== Q)
      return false;
    if (!Object.prototype.propertyIsEnumerable.call(U, Q))
      return false;
    if (typeof Object.getOwnPropertyDescriptor === "function") {
      var J = Object.getOwnPropertyDescriptor(U, Q);
      if (J.value !== X || J.enumerable !== true)
        return false;
    }
    return true;
  };
});
var t0 = z((R7, T1) => {
  var I1 = typeof Symbol !== "undefined" && Symbol, H5 = W0();
  T1.exports = function Z() {
    if (typeof I1 !== "function")
      return false;
    if (typeof Symbol !== "function")
      return false;
    if (typeof I1("foo") !== "symbol")
      return false;
    if (typeof Symbol("bar") !== "symbol")
      return false;
    return H5();
  };
});
var E1 = z((L7, B1) => {
  var e0 = { __proto__: null, foo: {} }, C5 = Object;
  B1.exports = function Z() {
    return { __proto__: e0 }.foo === e0.foo && !(e0 instanceof C5);
  };
});
var $1 = z((N7, x1) => {
  var M5 = "Function.prototype.bind called on incompatible ", w5 = Object.prototype.toString, D5 = Math.max, A5 = "[object Function]", f1 = function Z(U, Q) {
    var Y = [];
    for (var X = 0;X < U.length; X += 1)
      Y[X] = U[X];
    for (var _ = 0;_ < Q.length; _ += 1)
      Y[_ + U.length] = Q[_];
    return Y;
  }, O5 = function Z(U, Q) {
    var Y = [];
    for (var X = Q || 0, _ = 0;X < U.length; X += 1, _ += 1)
      Y[_] = U[X];
    return Y;
  }, P5 = function(Z, U) {
    var Q = "";
    for (var Y = 0;Y < Z.length; Y += 1)
      if (Q += Z[Y], Y + 1 < Z.length)
        Q += U;
    return Q;
  };
  x1.exports = function Z(U) {
    var Q = this;
    if (typeof Q !== "function" || w5.apply(Q) !== A5)
      throw new TypeError(M5 + Q);
    var Y = O5(arguments, 1), X, _ = function() {
      if (this instanceof X) {
        var R = Q.apply(this, f1(Y, arguments));
        if (Object(R) === R)
          return R;
        return this;
      }
      return Q.apply(U, f1(Y, arguments));
    }, J = D5(0, Q.length - Y.length), F = [];
    for (var q = 0;q < J; q++)
      F[q] = "$" + q;
    if (X = Function("binder", "return function (" + P5(F, ",") + "){ return binder.apply(this,arguments); }")(_), Q.prototype) {
      var V = function R() {
      };
      V.prototype = Q.prototype, X.prototype = new V, V.prototype = null;
    }
    return X;
  };
});
var G0 = z((H7, v1) => {
  var I5 = $1();
  v1.exports = Function.prototype.bind || I5;
});
var k1 = z((C7, S1) => {
  var T5 = Function.prototype.call, B5 = Object.prototype.hasOwnProperty, E5 = G0();
  S1.exports = E5.call(T5, B5);
});
var A = z((M7, y1) => {
  var W, f5 = G1(), x5 = L1(), $5 = H1(), v5 = M1(), i = a0(), n = B(), S5 = O1(), j1 = Function, U4 = function(Z) {
    try {
      return j1('"use strict"; return (' + Z + ").constructor;")();
    } catch (U) {
    }
  }, h = Object.getOwnPropertyDescriptor;
  if (h)
    try {
      h({}, "");
    } catch (Z) {
      h = null;
    }
  var Z4 = function() {
    throw new n;
  }, k5 = h ? function() {
    try {
      return arguments.callee, Z4;
    } catch (Z) {
      try {
        return h(arguments, "callee").get;
      } catch (U) {
        return Z4;
      }
    }
  }() : Z4, b = t0()(), h5 = E1()(), L = Object.getPrototypeOf || (h5 ? function(Z) {
    return Z.__proto__;
  } : null), l = {}, g5 = typeof Uint8Array === "undefined" || !L ? W : L(Uint8Array), g = { __proto__: null, "%AggregateError%": typeof AggregateError === "undefined" ? W : AggregateError, "%Array%": Array, "%ArrayBuffer%": typeof ArrayBuffer === "undefined" ? W : ArrayBuffer, "%ArrayIteratorPrototype%": b && L ? L([][Symbol.iterator]()) : W, "%AsyncFromSyncIteratorPrototype%": W, "%AsyncFunction%": l, "%AsyncGenerator%": l, "%AsyncGeneratorFunction%": l, "%AsyncIteratorPrototype%": l, "%Atomics%": typeof Atomics === "undefined" ? W : Atomics, "%BigInt%": typeof BigInt === "undefined" ? W : BigInt, "%BigInt64Array%": typeof BigInt64Array === "undefined" ? W : BigInt64Array, "%BigUint64Array%": typeof BigUint64Array === "undefined" ? W : BigUint64Array, "%Boolean%": Boolean, "%DataView%": typeof DataView === "undefined" ? W : DataView, "%Date%": Date, "%decodeURI%": decodeURI, "%decodeURIComponent%": decodeURIComponent, "%encodeURI%": encodeURI, "%encodeURIComponent%": encodeURIComponent, "%Error%": f5, "%eval%": eval, "%EvalError%": x5, "%Float32Array%": typeof Float32Array === "undefined" ? W : Float32Array, "%Float64Array%": typeof Float64Array === "undefined" ? W : Float64Array, "%FinalizationRegistry%": typeof FinalizationRegistry === "undefined" ? W : FinalizationRegistry, "%Function%": j1, "%GeneratorFunction%": l, "%Int8Array%": typeof Int8Array === "undefined" ? W : Int8Array, "%Int16Array%": typeof Int16Array === "undefined" ? W : Int16Array, "%Int32Array%": typeof Int32Array === "undefined" ? W : Int32Array, "%isFinite%": isFinite, "%isNaN%": isNaN, "%IteratorPrototype%": b && L ? L(L([][Symbol.iterator]())) : W, "%JSON%": typeof JSON === "object" ? JSON : W, "%Map%": typeof Map === "undefined" ? W : Map, "%MapIteratorPrototype%": typeof Map === "undefined" || !b || !L ? W : L(new Map()[Symbol.iterator]()), "%Math%": Math, "%Number%": Number, "%Object%": Object, "%parseFloat%": parseFloat, "%parseInt%": parseInt, "%Promise%": typeof Promise === "undefined" ? W : Promise, "%Proxy%": typeof Proxy === "undefined" ? W : Proxy, "%RangeError%": $5, "%ReferenceError%": v5, "%Reflect%": typeof Reflect === "undefined" ? W : Reflect, "%RegExp%": RegExp, "%Set%": typeof Set === "undefined" ? W : Set, "%SetIteratorPrototype%": typeof Set === "undefined" || !b || !L ? W : L(new Set()[Symbol.iterator]()), "%SharedArrayBuffer%": typeof SharedArrayBuffer === "undefined" ? W : SharedArrayBuffer, "%String%": String, "%StringIteratorPrototype%": b && L ? L(""[Symbol.iterator]()) : W, "%Symbol%": b ? Symbol : W, "%SyntaxError%": i, "%ThrowTypeError%": k5, "%TypedArray%": g5, "%TypeError%": n, "%Uint8Array%": typeof Uint8Array === "undefined" ? W : Uint8Array, "%Uint8ClampedArray%": typeof Uint8ClampedArray === "undefined" ? W : Uint8ClampedArray, "%Uint16Array%": typeof Uint16Array === "undefined" ? W : Uint16Array, "%Uint32Array%": typeof Uint32Array === "undefined" ? W : Uint32Array, "%URIError%": S5, "%WeakMap%": typeof WeakMap === "undefined" ? W : WeakMap, "%WeakRef%": typeof WeakRef === "undefined" ? W : WeakRef, "%WeakSet%": typeof WeakSet === "undefined" ? W : WeakSet };
  if (L)
    try {
      null.error;
    } catch (Z) {
      h1 = L(L(Z)), g["%Error.prototype%"] = h1;
    }
  var h1, d5 = function Z(U) {
    var Q;
    if (U === "%AsyncFunction%")
      Q = U4("async function () {}");
    else if (U === "%GeneratorFunction%")
      Q = U4("function* () {}");
    else if (U === "%AsyncGeneratorFunction%")
      Q = U4("async function* () {}");
    else if (U === "%AsyncGenerator%") {
      var Y = Z("%AsyncGeneratorFunction%");
      if (Y)
        Q = Y.prototype;
    } else if (U === "%AsyncIteratorPrototype%") {
      var X = Z("%AsyncGenerator%");
      if (X && L)
        Q = L(X.prototype);
    }
    return g[U] = Q, Q;
  }, g1 = { __proto__: null, "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"], "%ArrayPrototype%": ["Array", "prototype"], "%ArrayProto_entries%": ["Array", "prototype", "entries"], "%ArrayProto_forEach%": ["Array", "prototype", "forEach"], "%ArrayProto_keys%": ["Array", "prototype", "keys"], "%ArrayProto_values%": ["Array", "prototype", "values"], "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"], "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"], "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"], "%BooleanPrototype%": ["Boolean", "prototype"], "%DataViewPrototype%": ["DataView", "prototype"], "%DatePrototype%": ["Date", "prototype"], "%ErrorPrototype%": ["Error", "prototype"], "%EvalErrorPrototype%": ["EvalError", "prototype"], "%Float32ArrayPrototype%": ["Float32Array", "prototype"], "%Float64ArrayPrototype%": ["Float64Array", "prototype"], "%FunctionPrototype%": ["Function", "prototype"], "%Generator%": ["GeneratorFunction", "prototype"], "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"], "%Int8ArrayPrototype%": ["Int8Array", "prototype"], "%Int16ArrayPrototype%": ["Int16Array", "prototype"], "%Int32ArrayPrototype%": ["Int32Array", "prototype"], "%JSONParse%": ["JSON", "parse"], "%JSONStringify%": ["JSON", "stringify"], "%MapPrototype%": ["Map", "prototype"], "%NumberPrototype%": ["Number", "prototype"], "%ObjectPrototype%": ["Object", "prototype"], "%ObjProto_toString%": ["Object", "prototype", "toString"], "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"], "%PromisePrototype%": ["Promise", "prototype"], "%PromiseProto_then%": ["Promise", "prototype", "then"], "%Promise_all%": ["Promise", "all"], "%Promise_reject%": ["Promise", "reject"], "%Promise_resolve%": ["Promise", "resolve"], "%RangeErrorPrototype%": ["RangeError", "prototype"], "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"], "%RegExpPrototype%": ["RegExp", "prototype"], "%SetPrototype%": ["Set", "prototype"], "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"], "%StringPrototype%": ["String", "prototype"], "%SymbolPrototype%": ["Symbol", "prototype"], "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"], "%TypedArrayPrototype%": ["TypedArray", "prototype"], "%TypeErrorPrototype%": ["TypeError", "prototype"], "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"], "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"], "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"], "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"], "%URIErrorPrototype%": ["URIError", "prototype"], "%WeakMapPrototype%": ["WeakMap", "prototype"], "%WeakSetPrototype%": ["WeakSet", "prototype"] }, Q0 = G0(), R0 = k1(), j5 = Q0.call(Function.call, Array.prototype.concat), y5 = Q0.call(Function.apply, Array.prototype.splice), d1 = Q0.call(Function.call, String.prototype.replace), L0 = Q0.call(Function.call, String.prototype.slice), c5 = Q0.call(Function.call, RegExp.prototype.exec), m5 = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, p5 = /\\(\\)?/g, u5 = function Z(U) {
    var Q = L0(U, 0, 1), Y = L0(U, -1);
    if (Q === "%" && Y !== "%")
      throw new i("invalid intrinsic syntax, expected closing `%`");
    else if (Y === "%" && Q !== "%")
      throw new i("invalid intrinsic syntax, expected opening `%`");
    var X = [];
    return d1(U, m5, function(_, J, F, q) {
      X[X.length] = F ? d1(q, p5, "$1") : J || _;
    }), X;
  }, b5 = function Z(U, Q) {
    var Y = U, X;
    if (R0(g1, Y))
      X = g1[Y], Y = "%" + X[0] + "%";
    if (R0(g, Y)) {
      var _ = g[Y];
      if (_ === l)
        _ = d5(Y);
      if (typeof _ === "undefined" && !Q)
        throw new n("intrinsic " + U + " exists, but is not available. Please file an issue!");
      return { alias: X, name: Y, value: _ };
    }
    throw new i("intrinsic " + U + " does not exist!");
  };
  y1.exports = function Z(U, Q) {
    if (typeof U !== "string" || U.length === 0)
      throw new n("intrinsic name must be a non-empty string");
    if (arguments.length > 1 && typeof Q !== "boolean")
      throw new n('"allowMissing" argument must be a boolean');
    if (c5(/^%?[^%]*%?$/, U) === null)
      throw new i("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
    var Y = u5(U), X = Y.length > 0 ? Y[0] : "", _ = b5("%" + X + "%", Q), J = _.name, F = _.value, q = false, V = _.alias;
    if (V)
      X = V[0], y5(Y, j5([0, 1], V));
    for (var R = 1, G = true;R < Y.length; R += 1) {
      var K = Y[R], H = L0(K, 0, 1), w = L0(K, -1);
      if ((H === '"' || H === "'" || H === "`" || (w === '"' || w === "'" || w === "`")) && H !== w)
        throw new i("property names with quotes must have matching quotes");
      if (K === "constructor" || !G)
        q = true;
      if (X += "." + K, J = "%" + X + "%", R0(g, J))
        F = g[J];
      else if (F != null) {
        if (!(K in F)) {
          if (!Q)
            throw new n("base intrinsic for " + U + " exists, but the property is not available.");
          return;
        }
        if (h && R + 1 >= Y.length) {
          var D = h(F, K);
          if (G = !!D, G && "get" in D && !("originalValue" in D.get))
            F = D.get;
          else
            F = F[K];
        } else
          G = R0(F, K), F = F[K];
        if (G && !q)
          g[J] = F;
      }
    }
    return F;
  };
});
var H0 = z((w7, c1) => {
  var l5 = A(), N0 = l5("%Object.defineProperty%", true) || false;
  if (N0)
    try {
      N0({}, "a", { value: 1 });
    } catch (Z) {
      N0 = false;
    }
  c1.exports = N0;
});
var M0 = z((D7, m1) => {
  var n5 = A(), C0 = n5("%Object.getOwnPropertyDescriptor%", true);
  if (C0)
    try {
      C0([], "length");
    } catch (Z) {
      C0 = null;
    }
  m1.exports = C0;
});
var w0 = z((A7, b1) => {
  var p1 = H0(), i5 = a0(), r = B(), u1 = M0();
  b1.exports = function Z(U, Q, Y) {
    if (!U || typeof U !== "object" && typeof U !== "function")
      throw new r("`obj` must be an object or a function`");
    if (typeof Q !== "string" && typeof Q !== "symbol")
      throw new r("`property` must be a string or a symbol`");
    if (arguments.length > 3 && typeof arguments[3] !== "boolean" && arguments[3] !== null)
      throw new r("`nonEnumerable`, if provided, must be a boolean or null");
    if (arguments.length > 4 && typeof arguments[4] !== "boolean" && arguments[4] !== null)
      throw new r("`nonWritable`, if provided, must be a boolean or null");
    if (arguments.length > 5 && typeof arguments[5] !== "boolean" && arguments[5] !== null)
      throw new r("`nonConfigurable`, if provided, must be a boolean or null");
    if (arguments.length > 6 && typeof arguments[6] !== "boolean")
      throw new r("`loose`, if provided, must be a boolean");
    var X = arguments.length > 3 ? arguments[3] : null, _ = arguments.length > 4 ? arguments[4] : null, J = arguments.length > 5 ? arguments[5] : null, F = arguments.length > 6 ? arguments[6] : false, q = !!u1 && u1(U, Q);
    if (p1)
      p1(U, Q, { configurable: J === null && q ? q.configurable : !J, enumerable: X === null && q ? q.enumerable : !X, value: Y, writable: _ === null && q ? q.writable : !_ });
    else if (F || !X && !_ && !J)
      U[Q] = Y;
    else
      throw new i5("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");
  };
});
var D0 = z((O7, n1) => {
  var Q4 = H0(), l1 = function Z() {
    return !!Q4;
  };
  l1.hasArrayLengthDefineBug = function Z() {
    if (!Q4)
      return null;
    try {
      return Q4([], "length", { value: 1 }).length !== 1;
    } catch (U) {
      return true;
    }
  };
  n1.exports = l1;
});
var E = z((P7, s1) => {
  var r5 = K0(), o5 = typeof Symbol === "function" && typeof Symbol("foo") === "symbol", s5 = Object.prototype.toString, a5 = Array.prototype.concat, i1 = w0(), t5 = function(Z) {
    return typeof Z === "function" && s5.call(Z) === "[object Function]";
  }, r1 = D0()(), e5 = function(Z, U, Q, Y) {
    if (U in Z) {
      if (Y === true) {
        if (Z[U] === Q)
          return;
      } else if (!t5(Y) || !Y())
        return;
    }
    if (r1)
      i1(Z, U, Q, true);
    else
      i1(Z, U, Q);
  }, o1 = function(Z, U) {
    var Q = arguments.length > 2 ? arguments[2] : {}, Y = r5(U);
    if (o5)
      Y = a5.call(Y, Object.getOwnPropertySymbols(U));
    for (var X = 0;X < Y.length; X += 1)
      e5(Z, Y[X], U[Y[X]], Q[Y[X]]);
  };
  o1.supportsDescriptors = !!r1;
  s1.exports = o1;
});
var Z6 = z((I7, U6) => {
  var U9 = A(), a1 = w0(), Z9 = D0()(), t1 = M0(), e1 = B(), Q9 = U9("%Math.floor%");
  U6.exports = function Z(U, Q) {
    if (typeof U !== "function")
      throw new e1("`fn` is not a function");
    if (typeof Q !== "number" || Q < 0 || Q > 4294967295 || Q9(Q) !== Q)
      throw new e1("`length` must be a positive 32-bit integer");
    var Y = arguments.length > 2 && !!arguments[2], X = true, _ = true;
    if ("length" in U && t1) {
      var J = t1(U, "length");
      if (J && !J.configurable)
        X = false;
      if (J && !J.writable)
        _ = false;
    }
    if (X || _ || !Y)
      if (Z9)
        a1(U, "length", Q, true, true);
      else
        a1(U, "length", Q);
    return U;
  };
});
var d = z((T7, A0) => {
  var Y4 = G0(), O0 = A(), Y9 = Z6(), X9 = B(), X6 = O0("%Function.prototype.apply%"), _6 = O0("%Function.prototype.call%"), J6 = O0("%Reflect.apply%", true) || Y4.call(_6, X6), Q6 = H0(), _9 = O0("%Math.max%");
  A0.exports = function Z(U) {
    if (typeof U !== "function")
      throw new X9("a function is required");
    var Q = J6(Y4, _6, arguments);
    return Y9(Q, 1 + _9(0, U.length - (arguments.length - 1)), true);
  };
  var Y6 = function Z() {
    return J6(Y4, X6, arguments);
  };
  if (Q6)
    Q6(A0.exports, "apply", { value: Y6 });
  else
    A0.exports.apply = Y6;
});
var C = z((B7, F6) => {
  var q6 = A(), z6 = d(), J9 = z6(q6("String.prototype.indexOf"));
  F6.exports = function Z(U, Q) {
    var Y = q6(U, !!Q);
    if (typeof Y === "function" && J9(U, ".prototype.") > -1)
      return z6(Y);
    return Y;
  };
});
var X4 = z((E7, R6) => {
  var q9 = K0(), W6 = W0()(), G6 = C(), V6 = Object, z9 = G6("Array.prototype.push"), K6 = G6("Object.prototype.propertyIsEnumerable"), F9 = W6 ? Object.getOwnPropertySymbols : null;
  R6.exports = function Z(U, Q) {
    if (U == null)
      throw new TypeError("target must be an object");
    var Y = V6(U);
    if (arguments.length === 1)
      return Y;
    for (var X = 1;X < arguments.length; ++X) {
      var _ = V6(arguments[X]), J = q9(_), F = W6 && (Object.getOwnPropertySymbols || F9);
      if (F) {
        var q = F(_);
        for (var V = 0;V < q.length; ++V) {
          var R = q[V];
          if (K6(_, R))
            z9(J, R);
        }
      }
      for (var G = 0;G < J.length; ++G) {
        var K = J[G];
        if (K6(_, K)) {
          var H = _[K];
          Y[K] = H;
        }
      }
    }
    return Y;
  };
});
var J4 = z((f7, L6) => {
  var _4 = X4(), V9 = function() {
    if (!Object.assign)
      return false;
    var Z = "abcdefghijklmnopqrst", U = Z.split(""), Q = {};
    for (var Y = 0;Y < U.length; ++Y)
      Q[U[Y]] = U[Y];
    var X = Object.assign({}, Q), _ = "";
    for (var J in X)
      _ += J;
    return Z !== _;
  }, K9 = function() {
    if (!Object.assign || !Object.preventExtensions)
      return false;
    var Z = Object.preventExtensions({ 1: 2 });
    try {
      Object.assign(Z, "xy");
    } catch (U) {
      return Z[1] === "y";
    }
    return false;
  };
  L6.exports = function Z() {
    if (!Object.assign)
      return _4;
    if (V9())
      return _4;
    if (K9())
      return _4;
    return Object.assign;
  };
});
var H6 = z((x7, N6) => {
  var W9 = E(), G9 = J4();
  N6.exports = function Z() {
    var U = G9();
    return W9(Object, { assign: U }, { assign: function() {
      return Object.assign !== U;
    } }), U;
  };
});
var D6 = z(($7, w6) => {
  var R9 = E(), L9 = d(), N9 = X4(), C6 = J4(), H9 = H6(), C9 = L9.apply(C6()), M6 = function Z(U, Q) {
    return C9(Object, arguments);
  };
  R9(M6, { getPolyfill: C6, implementation: N9, shim: H9 });
  w6.exports = M6;
});
var O6 = z((v7, A6) => {
  var X0 = function Z() {
    return typeof function U() {
    }.name === "string";
  }, Y0 = Object.getOwnPropertyDescriptor;
  if (Y0)
    try {
      Y0([], "length");
    } catch (Z) {
      Y0 = null;
    }
  X0.functionsHaveConfigurableNames = function Z() {
    if (!X0() || !Y0)
      return false;
    var U = Y0(function() {
    }, "name");
    return !!U && !!U.configurable;
  };
  var M9 = Function.prototype.bind;
  X0.boundFunctionsHaveNames = function Z() {
    return X0() && typeof M9 === "function" && function U() {
    }.bind().name !== "";
  };
  A6.exports = X0;
});
var T6 = z((S7, I6) => {
  var P6 = w0(), w9 = D0()(), D9 = O6().functionsHaveConfigurableNames(), A9 = B();
  I6.exports = function Z(U, Q) {
    if (typeof U !== "function")
      throw new A9("`fn` is not a function");
    var Y = arguments.length > 2 && !!arguments[2];
    if (!Y || D9)
      if (w9)
        P6(U, "name", Q, true, true);
      else
        P6(U, "name", Q);
    return U;
  };
});
var q4 = z((k7, B6) => {
  var O9 = T6(), P9 = B(), I9 = Object;
  B6.exports = O9(function Z() {
    if (this == null || this !== I9(this))
      throw new P9("RegExp.prototype.flags getter called on non-object");
    var U = "";
    if (this.hasIndices)
      U += "d";
    if (this.global)
      U += "g";
    if (this.ignoreCase)
      U += "i";
    if (this.multiline)
      U += "m";
    if (this.dotAll)
      U += "s";
    if (this.unicode)
      U += "u";
    if (this.unicodeSets)
      U += "v";
    if (this.sticky)
      U += "y";
    return U;
  }, "get flags", true);
});
var z4 = z((h7, E6) => {
  var T9 = q4(), B9 = E().supportsDescriptors, E9 = Object.getOwnPropertyDescriptor;
  E6.exports = function Z() {
    if (B9 && /a/mig.flags === "gim") {
      var U = E9(RegExp.prototype, "flags");
      if (U && typeof U.get === "function" && typeof RegExp.prototype.dotAll === "boolean" && typeof RegExp.prototype.hasIndices === "boolean") {
        var Q = "", Y = {};
        if (Object.defineProperty(Y, "hasIndices", { get: function() {
          Q += "d";
        } }), Object.defineProperty(Y, "sticky", { get: function() {
          Q += "y";
        } }), Q === "dy")
          return U.get;
      }
    }
    return T9;
  };
});
var $6 = z((g7, x6) => {
  var f9 = E().supportsDescriptors, x9 = z4(), $9 = Object.getOwnPropertyDescriptor, v9 = Object.defineProperty, S9 = TypeError, f6 = Object.getPrototypeOf, k9 = /a/;
  x6.exports = function Z() {
    if (!f9 || !f6)
      throw new S9("RegExp.prototype.flags requires a true ES5 environment that supports property descriptors");
    var U = x9(), Q = f6(k9), Y = $9(Q, "flags");
    if (!Y || Y.get !== U)
      v9(Q, "flags", { configurable: true, enumerable: false, get: U });
    return U;
  };
});
var h6 = z((d7, k6) => {
  var h9 = E(), g9 = d(), d9 = q4(), v6 = z4(), j9 = $6(), S6 = g9(v6());
  h9(S6, { getPolyfill: v6, implementation: d9, shim: j9 });
  k6.exports = S6;
});
var j6 = z((j7, d6) => {
  var g6 = Symbol.iterator;
  d6.exports = function Z(U) {
    if (U != null && typeof U[g6] !== "undefined")
      return U[g6]();
  };
});
var c6 = z((y7, y6) => {
  y6.exports = import.meta.require("util").inspect;
});
var J8 = z((c7, _8) => {
  var r6 = function(Z, U) {
    if (Z === Infinity || Z === (-Infinity) || Z !== Z || Z && Z > -1000 && Z < 1000 || e6.call(/e/, U))
      return U;
    var Q = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
    if (typeof Z === "number") {
      var Y = Z < 0 ? -n6(-Z) : n6(Z);
      if (Y !== Z) {
        var X = String(Y), _ = w4.call(U, X.length + 1);
        return x.call(X, Q, "$&_") + "." + x.call(x.call(_, /([0-9]{3})/g, "$&_"), /_$/, "");
      }
    }
    return x.call(U, Q, "$&_");
  }, Z8 = function(Z, U, Q) {
    var Y = (Q.quoteStyle || U) === "double" ? '"' : "'";
    return Y + Z + Y;
  }, r9 = function(Z) {
    return x.call(String(Z), /"/g, "&quot;");
  }, N4 = function(Z) {
    return $(Z) === "[object Array]" && (!N || !(typeof Z === "object" && (N in Z)));
  }, o9 = function(Z) {
    return $(Z) === "[object Date]" && (!N || !(typeof Z === "object" && (N in Z)));
  }, a6 = function(Z) {
    return $(Z) === "[object RegExp]" && (!N || !(typeof Z === "object" && (N in Z)));
  }, s9 = function(Z) {
    return $(Z) === "[object Error]" && (!N || !(typeof Z === "object" && (N in Z)));
  }, a9 = function(Z) {
    return $(Z) === "[object String]" && (!N || !(typeof Z === "object" && (N in Z)));
  }, t9 = function(Z) {
    return $(Z) === "[object Number]" && (!N || !(typeof Z === "object" && (N in Z)));
  }, e9 = function(Z) {
    return $(Z) === "[object Boolean]" && (!N || !(typeof Z === "object" && (N in Z)));
  }, Q8 = function(Z) {
    if (o)
      return Z && typeof Z === "object" && Z instanceof Symbol;
    if (typeof Z === "symbol")
      return true;
    if (!Z || typeof Z !== "object" || !R4)
      return false;
    try {
      return R4.call(Z), true;
    } catch (U) {
    }
    return false;
  }, UZ = function(Z) {
    if (!Z || typeof Z !== "object" || !G4)
      return false;
    try {
      return G4.call(Z), true;
    } catch (U) {
    }
    return false;
  }, f = function(Z, U) {
    return ZZ.call(Z, U);
  }, $ = function(Z) {
    return u9.call(Z);
  }, QZ = function(Z) {
    if (Z.name)
      return Z.name;
    var U = l9.call(b9.call(Z), /^function\s*([\w$]+)/);
    if (U)
      return U[1];
    return null;
  }, Y8 = function(Z, U) {
    if (Z.indexOf)
      return Z.indexOf(U);
    for (var Q = 0, Y = Z.length;Q < Y; Q++)
      if (Z[Q] === U)
        return Q;
    return -1;
  }, YZ = function(Z) {
    if (!I0 || !Z || typeof Z !== "object")
      return false;
    try {
      I0.call(Z);
      try {
        T0.call(Z);
      } catch (U) {
        return true;
      }
      return Z instanceof Map;
    } catch (U) {
    }
    return false;
  }, XZ = function(Z) {
    if (!J0 || !Z || typeof Z !== "object")
      return false;
    try {
      J0.call(Z, J0);
      try {
        q0.call(Z, q0);
      } catch (U) {
        return true;
      }
      return Z instanceof WeakMap;
    } catch (U) {
    }
    return false;
  }, _Z = function(Z) {
    if (!u6 || !Z || typeof Z !== "object")
      return false;
    try {
      return u6.call(Z), true;
    } catch (U) {
    }
    return false;
  }, JZ = function(Z) {
    if (!T0 || !Z || typeof Z !== "object")
      return false;
    try {
      T0.call(Z);
      try {
        I0.call(Z);
      } catch (U) {
        return true;
      }
      return Z instanceof Set;
    } catch (U) {
    }
    return false;
  }, qZ = function(Z) {
    if (!q0 || !Z || typeof Z !== "object")
      return false;
    try {
      q0.call(Z, q0);
      try {
        J0.call(Z, J0);
      } catch (U) {
        return true;
      }
      return Z instanceof WeakSet;
    } catch (U) {
    }
    return false;
  }, zZ = function(Z) {
    if (!Z || typeof Z !== "object")
      return false;
    if (typeof HTMLElement !== "undefined" && Z instanceof HTMLElement)
      return true;
    return typeof Z.nodeName === "string" && typeof Z.getAttribute === "function";
  }, X8 = function(Z, U) {
    if (Z.length > U.maxStringLength) {
      var Q = Z.length - U.maxStringLength, Y = "... " + Q + " more character" + (Q > 1 ? "s" : "");
      return X8(w4.call(Z, 0, U.maxStringLength), U) + Y;
    }
    var X = x.call(x.call(Z, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, FZ);
    return Z8(X, "single", U);
  }, FZ = function(Z) {
    var U = Z.charCodeAt(0), Q = { 8: "b", 9: "t", 10: "n", 12: "f", 13: "r" }[U];
    if (Q)
      return "\\" + Q;
    return "\\x" + (U < 16 ? "0" : "") + n9.call(U.toString(16));
  }, _0 = function(Z) {
    return "Object(" + Z + ")";
  }, W4 = function(Z) {
    return Z + " { ? }";
  }, t6 = function(Z, U, Q, Y) {
    var X = Y ? H4(Q, Y) : O.call(Q, ", ");
    return Z + " (" + U + ") {" + X + "}";
  }, VZ = function(Z) {
    for (var U = 0;U < Z.length; U++)
      if (Y8(Z[U], "\n") >= 0)
        return false;
    return true;
  }, KZ = function(Z, U) {
    var Q;
    if (Z.indent === "\t")
      Q = "\t";
    else if (typeof Z.indent === "number" && Z.indent > 0)
      Q = O.call(Array(Z.indent + 1), " ");
    else
      return null;
    return { base: Q, prev: O.call(Array(U + 1), Q) };
  }, H4 = function(Z, U) {
    if (Z.length === 0)
      return "";
    var Q = "\n" + U.prev + U.base;
    return Q + O.call(Z, "," + Q) + "\n" + U.prev;
  }, P0 = function(Z, U) {
    var Q = N4(Z), Y = [];
    if (Q) {
      Y.length = Z.length;
      for (var X = 0;X < Z.length; X++)
        Y[X] = f(Z, X) ? U(Z[X], Z) : "";
    }
    var _ = typeof K4 === "function" ? K4(Z) : [], J;
    if (o) {
      J = {};
      for (var F = 0;F < _.length; F++)
        J["$" + _[F]] = _[F];
    }
    for (var q in Z) {
      if (!f(Z, q))
        continue;
      if (Q && String(Number(q)) === q && q < Z.length)
        continue;
      if (o && J["$" + q] instanceof Symbol)
        continue;
      else if (e6.call(/[^\w$]/, q))
        Y.push(U(q, Z) + ": " + U(Z[q], Z));
      else
        Y.push(q + ": " + U(Z[q], Z));
    }
    if (typeof K4 === "function") {
      for (var V = 0;V < _.length; V++)
        if (U8.call(Z, _[V]))
          Y.push("[" + U(_[V]) + "]: " + U(Z[_[V]], Z));
    }
    return Y;
  }, C4 = typeof Map === "function" && Map.prototype, F4 = Object.getOwnPropertyDescriptor && C4 ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null, I0 = C4 && F4 && typeof F4.get === "function" ? F4.get : null, m6 = C4 && Map.prototype.forEach, M4 = typeof Set === "function" && Set.prototype, V4 = Object.getOwnPropertyDescriptor && M4 ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null, T0 = M4 && V4 && typeof V4.get === "function" ? V4.get : null, p6 = M4 && Set.prototype.forEach, y9 = typeof WeakMap === "function" && WeakMap.prototype, J0 = y9 ? WeakMap.prototype.has : null, c9 = typeof WeakSet === "function" && WeakSet.prototype, q0 = c9 ? WeakSet.prototype.has : null, m9 = typeof WeakRef === "function" && WeakRef.prototype, u6 = m9 ? WeakRef.prototype.deref : null, p9 = Boolean.prototype.valueOf, u9 = Object.prototype.toString, b9 = Function.prototype.toString, l9 = String.prototype.match, w4 = String.prototype.slice, x = String.prototype.replace, n9 = String.prototype.toUpperCase, b6 = String.prototype.toLowerCase, e6 = RegExp.prototype.test, l6 = Array.prototype.concat, O = Array.prototype.join, i9 = Array.prototype.slice, n6 = Math.floor, G4 = typeof BigInt === "function" ? BigInt.prototype.valueOf : null, K4 = Object.getOwnPropertySymbols, R4 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? Symbol.prototype.toString : null, o = typeof Symbol === "function" && typeof Symbol.iterator === "object", N = typeof Symbol === "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === o ? "object" : "symbol") ? Symbol.toStringTag : null, U8 = Object.prototype.propertyIsEnumerable, i6 = (typeof Reflect === "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(Z) {
    return Z.__proto__;
  } : null), L4 = c6(), o6 = L4.custom, s6 = Q8(o6) ? o6 : null;
  _8.exports = function Z(U, Q, Y, X) {
    var _ = Q || {};
    if (f(_, "quoteStyle") && (_.quoteStyle !== "single" && _.quoteStyle !== "double"))
      throw new TypeError('option "quoteStyle" must be "single" or "double"');
    if (f(_, "maxStringLength") && (typeof _.maxStringLength === "number" ? _.maxStringLength < 0 && _.maxStringLength !== Infinity : _.maxStringLength !== null))
      throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
    var J = f(_, "customInspect") ? _.customInspect : true;
    if (typeof J !== "boolean" && J !== "symbol")
      throw new TypeError('option "customInspect", if provided, must be `true`, `false`, or `\'symbol\'`');
    if (f(_, "indent") && _.indent !== null && _.indent !== "\t" && !(parseInt(_.indent, 10) === _.indent && _.indent > 0))
      throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
    if (f(_, "numericSeparator") && typeof _.numericSeparator !== "boolean")
      throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
    var F = _.numericSeparator;
    if (typeof U === "undefined")
      return "undefined";
    if (U === null)
      return "null";
    if (typeof U === "boolean")
      return U ? "true" : "false";
    if (typeof U === "string")
      return X8(U, _);
    if (typeof U === "number") {
      if (U === 0)
        return Infinity / U > 0 ? "0" : "-0";
      var q = String(U);
      return F ? r6(U, q) : q;
    }
    if (typeof U === "bigint") {
      var V = String(U) + "n";
      return F ? r6(U, V) : V;
    }
    var R = typeof _.depth === "undefined" ? 5 : _.depth;
    if (typeof Y === "undefined")
      Y = 0;
    if (Y >= R && R > 0 && typeof U === "object")
      return N4(U) ? "[Array]" : "[Object]";
    var G = KZ(_, Y);
    if (typeof X === "undefined")
      X = [];
    else if (Y8(X, U) >= 0)
      return "[Circular]";
    function K(u, z0, R5) {
      if (z0)
        X = i9.call(X), X.push(z0);
      if (R5) {
        var a4 = { depth: _.depth };
        if (f(_, "quoteStyle"))
          a4.quoteStyle = _.quoteStyle;
        return Z(u, a4, Y + 1, X);
      }
      return Z(u, _, Y + 1, X);
    }
    if (typeof U === "function" && !a6(U)) {
      var H = QZ(U), w = P0(U, K);
      return "[Function" + (H ? ": " + H : " (anonymous)") + "]" + (w.length > 0 ? " { " + O.call(w, ", ") + " }" : "");
    }
    if (Q8(U)) {
      var D = o ? x.call(String(U), /^(Symbol\(.*\))_[^)]*$/, "$1") : R4.call(U);
      return typeof U === "object" && !o ? _0(D) : D;
    }
    if (zZ(U)) {
      var T = "<" + b6.call(String(U.nodeName)), j = U.attributes || [];
      for (var S = 0;S < j.length; S++)
        T += " " + j[S].name + "=" + Z8(r9(j[S].value), "double", _);
      if (T += ">", U.childNodes && U.childNodes.length)
        T += "...";
      return T += "</" + b6.call(String(U.nodeName)) + ">", T;
    }
    if (N4(U)) {
      if (U.length === 0)
        return "[]";
      var y = P0(U, K);
      if (G && !VZ(y))
        return "[" + H4(y, G) + "]";
      return "[ " + O.call(y, ", ") + " ]";
    }
    if (s9(U)) {
      var c = P0(U, K);
      if (!("cause" in Error.prototype) && "cause" in U && !U8.call(U, "cause"))
        return "{ [" + String(U) + "] " + O.call(l6.call("[cause]: " + K(U.cause), c), ", ") + " }";
      if (c.length === 0)
        return "[" + String(U) + "]";
      return "{ [" + String(U) + "] " + O.call(c, ", ") + " }";
    }
    if (typeof U === "object" && J) {
      if (s6 && typeof U[s6] === "function" && L4)
        return L4(U, { depth: R - Y });
      else if (J !== "symbol" && typeof U.inspect === "function")
        return U.inspect();
    }
    if (YZ(U)) {
      var e = [];
      if (m6)
        m6.call(U, function(u, z0) {
          e.push(K(z0, U, true) + " => " + K(u, U));
        });
      return t6("Map", I0.call(U), e, G);
    }
    if (JZ(U)) {
      var I = [];
      if (p6)
        p6.call(U, function(u) {
          I.push(K(u, U));
        });
      return t6("Set", T0.call(U), I, G);
    }
    if (XZ(U))
      return W4("WeakMap");
    if (qZ(U))
      return W4("WeakSet");
    if (_Z(U))
      return W4("WeakRef");
    if (t9(U))
      return _0(K(Number(U)));
    if (UZ(U))
      return _0(K(G4.call(U)));
    if (e9(U))
      return _0(p9.call(U));
    if (a9(U))
      return _0(K(String(U)));
    if (typeof window !== "undefined" && U === window)
      return "{ [object Window] }";
    if (typeof globalThis !== "undefined" && U === globalThis || typeof global !== "undefined" && U === global)
      return "{ [object globalThis] }";
    if (!o9(U) && !a6(U)) {
      var k = P0(U, K), m = i6 ? i6(U) === Object.prototype : U instanceof Object || U.constructor === Object, p = U instanceof Object ? "" : "null prototype", s4 = !m && N && Object(U) === U && N in U ? w4.call($(U), 8, -1) : p ? "Object" : "", G5 = m || typeof U.constructor !== "function" ? "" : U.constructor.name ? U.constructor.name + " " : "", i0 = G5 + (s4 || p ? "[" + O.call(l6.call([], s4 || [], p || []), ": ") + "] " : "");
      if (k.length === 0)
        return i0 + "{}";
      if (G)
        return i0 + "{" + H4(k, G) + "}";
      return i0 + "{ " + O.call(k, ", ") + " }";
    }
    return String(U);
  };
  var ZZ = Object.prototype.hasOwnProperty || function(Z) {
    return Z in this;
  };
});
var F8 = z((m7, z8) => {
  var q8 = A(), s = C(), WZ = J8(), GZ = B(), B0 = q8("%WeakMap%", true), E0 = q8("%Map%", true), RZ = s("WeakMap.prototype.get", true), LZ = s("WeakMap.prototype.set", true), NZ = s("WeakMap.prototype.has", true), HZ = s("Map.prototype.get", true), CZ = s("Map.prototype.set", true), MZ = s("Map.prototype.has", true), D4 = function(Z, U) {
    var Q = Z, Y;
    for (;(Y = Q.next) !== null; Q = Y)
      if (Y.key === U)
        return Q.next = Y.next, Y.next = Z.next, Z.next = Y, Y;
  }, wZ = function(Z, U) {
    var Q = D4(Z, U);
    return Q && Q.value;
  }, DZ = function(Z, U, Q) {
    var Y = D4(Z, U);
    if (Y)
      Y.value = Q;
    else
      Z.next = { key: U, next: Z.next, value: Q };
  }, AZ = function(Z, U) {
    return !!D4(Z, U);
  };
  z8.exports = function Z() {
    var U, Q, Y, X = { assert: function(_) {
      if (!X.has(_))
        throw new GZ("Side channel does not contain " + WZ(_));
    }, get: function(_) {
      if (B0 && _ && (typeof _ === "object" || typeof _ === "function")) {
        if (U)
          return RZ(U, _);
      } else if (E0) {
        if (Q)
          return HZ(Q, _);
      } else if (Y)
        return wZ(Y, _);
    }, has: function(_) {
      if (B0 && _ && (typeof _ === "object" || typeof _ === "function")) {
        if (U)
          return NZ(U, _);
      } else if (E0) {
        if (Q)
          return MZ(Q, _);
      } else if (Y)
        return AZ(Y, _);
      return false;
    }, set: function(_, J) {
      if (B0 && _ && (typeof _ === "object" || typeof _ === "function")) {
        if (!U)
          U = new B0;
        LZ(U, _, J);
      } else if (E0) {
        if (!Q)
          Q = new E0;
        CZ(Q, _, J);
      } else {
        if (!Y)
          Y = { key: {}, next: null };
        DZ(Y, _, J);
      }
    } };
    return X;
  };
});
var A4 = z((p7, K8) => {
  var V8 = function(Z) {
    return Z !== Z;
  };
  K8.exports = function Z(U, Q) {
    if (U === 0 && Q === 0)
      return 1 / U === 1 / Q;
    if (U === Q)
      return true;
    if (V8(U) && V8(Q))
      return true;
    return false;
  };
});
var O4 = z((u7, W8) => {
  var OZ = A4();
  W8.exports = function Z() {
    return typeof Object.is === "function" ? Object.is : OZ;
  };
});
var R8 = z((b7, G8) => {
  var PZ = O4(), IZ = E();
  G8.exports = function Z() {
    var U = PZ();
    return IZ(Object, { is: U }, { is: function Q() {
      return Object.is !== U;
    } }), U;
  };
});
var C8 = z((l7, H8) => {
  var TZ = E(), BZ = d(), EZ = A4(), L8 = O4(), fZ = R8(), N8 = BZ(L8(), Object);
  TZ(N8, { getPolyfill: L8, implementation: EZ, shim: fZ });
  H8.exports = N8;
});
var v = z((n7, M8) => {
  var xZ = W0();
  M8.exports = function Z() {
    return xZ() && !!Symbol.toStringTag;
  };
});
var A8 = z((i7, D8) => {
  var $Z = v()(), vZ = C(), P4 = vZ("Object.prototype.toString"), f0 = function Z(U) {
    if ($Z && U && typeof U === "object" && Symbol.toStringTag in U)
      return false;
    return P4(U) === "[object Arguments]";
  }, w8 = function Z(U) {
    if (f0(U))
      return true;
    return U !== null && typeof U === "object" && typeof U.length === "number" && U.length >= 0 && P4(U) !== "[object Array]" && P4(U.callee) === "[object Function]";
  }, SZ = function() {
    return f0(arguments);
  }();
  f0.isLegacyArguments = w8;
  D8.exports = SZ ? f0 : w8;
});
var P8 = z((r7, O8) => {
  var kZ = {}.toString;
  O8.exports = Array.isArray || function(Z) {
    return kZ.call(Z) == "[object Array]";
  };
});
var T4 = z((o7, E8) => {
  var hZ = d(), B8 = C(), gZ = A(), I4 = gZ("%ArrayBuffer%", true), x0 = B8("ArrayBuffer.prototype.byteLength", true), dZ = B8("Object.prototype.toString"), I8 = !!I4 && !x0 && new I4(0).slice, T8 = !!I8 && hZ(I8);
  E8.exports = x0 || T8 ? function Z(U) {
    if (!U || typeof U !== "object")
      return false;
    try {
      if (x0)
        x0(U);
      else
        T8(U, 0);
      return true;
    } catch (Q) {
      return false;
    }
  } : I4 ? function Z(U) {
    return dZ(U) === "[object ArrayBuffer]";
  } : function Z(U) {
    return false;
  };
});
var x8 = z((s7, f8) => {
  var jZ = Date.prototype.getDay, yZ = function Z(U) {
    try {
      return jZ.call(U), true;
    } catch (Q) {
      return false;
    }
  }, cZ = Object.prototype.toString, mZ = "[object Date]", pZ = v()();
  f8.exports = function Z(U) {
    if (typeof U !== "object" || U === null)
      return false;
    return pZ ? yZ(U) : cZ.call(U) === mZ;
  };
});
var h8 = z((a7, k8) => {
  var B4 = C(), $8 = v()(), v8, S8, E4, f4;
  if ($8) {
    if (v8 = B4("Object.prototype.hasOwnProperty"), S8 = B4("RegExp.prototype.exec"), E4 = {}, $0 = function() {
      throw E4;
    }, f4 = { toString: $0, valueOf: $0 }, typeof Symbol.toPrimitive === "symbol")
      f4[Symbol.toPrimitive] = $0;
  }
  var $0, uZ = B4("Object.prototype.toString"), bZ = Object.getOwnPropertyDescriptor, lZ = "[object RegExp]";
  k8.exports = $8 ? function Z(U) {
    if (!U || typeof U !== "object")
      return false;
    var Q = bZ(U, "lastIndex"), Y = Q && v8(Q, "value");
    if (!Y)
      return false;
    try {
      S8(U, f4);
    } catch (X) {
      return X === E4;
    }
  } : function Z(U) {
    if (!U || typeof U !== "object" && typeof U !== "function")
      return false;
    return uZ(U) === lZ;
  };
});
var j8 = z((t7, d8) => {
  var nZ = C(), g8 = nZ("SharedArrayBuffer.prototype.byteLength", true);
  d8.exports = g8 ? function Z(U) {
    if (!U || typeof U !== "object")
      return false;
    try {
      return g8(U), true;
    } catch (Q) {
      return false;
    }
  } : function Z(U) {
    return false;
  };
});
var c8 = z((e7, y8) => {
  var iZ = String.prototype.valueOf, rZ = function Z(U) {
    try {
      return iZ.call(U), true;
    } catch (Q) {
      return false;
    }
  }, oZ = Object.prototype.toString, sZ = "[object String]", aZ = v()();
  y8.exports = function Z(U) {
    if (typeof U === "string")
      return true;
    if (typeof U !== "object")
      return false;
    return aZ ? rZ(U) : oZ.call(U) === sZ;
  };
});
var p8 = z((UQ, m8) => {
  var tZ = Number.prototype.toString, eZ = function Z(U) {
    try {
      return tZ.call(U), true;
    } catch (Q) {
      return false;
    }
  }, U2 = Object.prototype.toString, Z2 = "[object Number]", Q2 = v()();
  m8.exports = function Z(U) {
    if (typeof U === "number")
      return true;
    if (typeof U !== "object")
      return false;
    return Q2 ? eZ(U) : U2.call(U) === Z2;
  };
});
var l8 = z((ZQ, b8) => {
  var u8 = C(), Y2 = u8("Boolean.prototype.toString"), X2 = u8("Object.prototype.toString"), _2 = function Z(U) {
    try {
      return Y2(U), true;
    } catch (Q) {
      return false;
    }
  }, J2 = "[object Boolean]", q2 = v()();
  b8.exports = function Z(U) {
    if (typeof U === "boolean")
      return true;
    if (U === null || typeof U !== "object")
      return false;
    return q2 && Symbol.toStringTag in U ? _2(U) : X2(U) === J2;
  };
});
var o8 = z((QQ, x4) => {
  var z2 = Object.prototype.toString, F2 = t0()();
  if (F2)
    n8 = Symbol.prototype.toString, i8 = /^Symbol\(.*\)$/, r8 = function Z(U) {
      if (typeof U.valueOf() !== "symbol")
        return false;
      return i8.test(n8.call(U));
    }, x4.exports = function Z(U) {
      if (typeof U === "symbol")
        return true;
      if (z2.call(U) !== "[object Symbol]")
        return false;
      try {
        return r8(U);
      } catch (Q) {
        return false;
      }
    };
  else
    x4.exports = function Z(U) {
      return false;
    };
  var n8, i8, r8;
});
var t8 = z((YQ, a8) => {
  var s8 = typeof BigInt !== "undefined" && BigInt;
  a8.exports = function Z() {
    return typeof s8 === "function" && typeof BigInt === "function" && typeof s8(42) === "bigint" && typeof BigInt(42) === "bigint";
  };
});
var ZU = z((XQ, $4) => {
  var V2 = t8()();
  if (V2)
    e8 = BigInt.prototype.valueOf, UU = function Z(U) {
      try {
        return e8.call(U), true;
      } catch (Q) {
      }
      return false;
    }, $4.exports = function Z(U) {
      if (U === null || typeof U === "undefined" || typeof U === "boolean" || typeof U === "string" || typeof U === "number" || typeof U === "symbol" || typeof U === "function")
        return false;
      if (typeof U === "bigint")
        return true;
      return UU(U);
    };
  else
    $4.exports = function Z(U) {
      return false;
    };
  var e8, UU;
});
var YU = z((_Q, QU) => {
  var K2 = c8(), W2 = p8(), G2 = l8(), R2 = o8(), L2 = ZU();
  QU.exports = function Z(U) {
    if (U == null || typeof U !== "object" && typeof U !== "function")
      return null;
    if (K2(U))
      return "String";
    if (W2(U))
      return "Number";
    if (G2(U))
      return "Boolean";
    if (R2(U))
      return "Symbol";
    if (L2(U))
      return "BigInt";
  };
});
var qU = z((JQ, JU) => {
  var v4 = typeof Map === "function" && Map.prototype ? Map : null, N2 = typeof Set === "function" && Set.prototype ? Set : null, v0;
  if (!v4)
    v0 = function Z(U) {
      return false;
    };
  var _U = v4 ? Map.prototype.has : null, XU = N2 ? Set.prototype.has : null;
  if (!v0 && !_U)
    v0 = function Z(U) {
      return false;
    };
  JU.exports = v0 || function Z(U) {
    if (!U || typeof U !== "object")
      return false;
    try {
      if (_U.call(U), XU)
        try {
          XU.call(U);
        } catch (Q) {
          return true;
        }
      return U instanceof v4;
    } catch (Q) {
    }
    return false;
  };
});
var KU = z((qQ, VU) => {
  var H2 = typeof Map === "function" && Map.prototype ? Map : null, S4 = typeof Set === "function" && Set.prototype ? Set : null, S0;
  if (!S4)
    S0 = function Z(U) {
      return false;
    };
  var zU = H2 ? Map.prototype.has : null, FU = S4 ? Set.prototype.has : null;
  if (!S0 && !FU)
    S0 = function Z(U) {
      return false;
    };
  VU.exports = S0 || function Z(U) {
    if (!U || typeof U !== "object")
      return false;
    try {
      if (FU.call(U), zU)
        try {
          zU.call(U);
        } catch (Q) {
          return true;
        }
      return U instanceof S4;
    } catch (Q) {
    }
    return false;
  };
});
var RU = z((zQ, GU) => {
  var k0 = typeof WeakMap === "function" && WeakMap.prototype ? WeakMap : null, WU = typeof WeakSet === "function" && WeakSet.prototype ? WeakSet : null, h0;
  if (!k0)
    h0 = function Z(U) {
      return false;
    };
  var h4 = k0 ? k0.prototype.has : null, k4 = WU ? WU.prototype.has : null;
  if (!h0 && !h4)
    h0 = function Z(U) {
      return false;
    };
  GU.exports = h0 || function Z(U) {
    if (!U || typeof U !== "object")
      return false;
    try {
      if (h4.call(U, h4), k4)
        try {
          k4.call(U, k4);
        } catch (Q) {
          return true;
        }
      return U instanceof k0;
    } catch (Q) {
    }
    return false;
  };
});
var NU = z((FQ, d4) => {
  var C2 = A(), LU = C(), M2 = C2("%WeakSet%", true), g4 = LU("WeakSet.prototype.has", true);
  if (g4)
    g0 = LU("WeakMap.prototype.has", true), d4.exports = function Z(U) {
      if (!U || typeof U !== "object")
        return false;
      try {
        if (g4(U, g4), g0)
          try {
            g0(U, g0);
          } catch (Q) {
            return true;
          }
        return U instanceof M2;
      } catch (Q) {
      }
      return false;
    };
  else
    d4.exports = function Z(U) {
      return false;
    };
  var g0;
});
var CU = z((VQ, HU) => {
  var w2 = qU(), D2 = KU(), A2 = RU(), O2 = NU();
  HU.exports = function Z(U) {
    if (U && typeof U === "object") {
      if (w2(U))
        return "Map";
      if (D2(U))
        return "Set";
      if (A2(U))
        return "WeakMap";
      if (O2(U))
        return "WeakSet";
    }
    return false;
  };
});
var AU = z((KQ, DU) => {
  var wU = Function.prototype.toString, a = typeof Reflect === "object" && Reflect !== null && Reflect.apply, y4, d0;
  if (typeof a === "function" && typeof Object.defineProperty === "function")
    try {
      y4 = Object.defineProperty({}, "length", { get: function() {
        throw d0;
      } }), d0 = {}, a(function() {
        throw 42;
      }, null, y4);
    } catch (Z) {
      if (Z !== d0)
        a = null;
    }
  else
    a = null;
  var P2 = /^\s*class\b/, c4 = function Z(U) {
    try {
      var Q = wU.call(U);
      return P2.test(Q);
    } catch (Y) {
      return false;
    }
  }, j4 = function Z(U) {
    try {
      if (c4(U))
        return false;
      return wU.call(U), true;
    } catch (Q) {
      return false;
    }
  }, j0 = Object.prototype.toString, I2 = "[object Object]", T2 = "[object Function]", B2 = "[object GeneratorFunction]", E2 = "[object HTMLAllCollection]", f2 = "[object HTML document.all class]", x2 = "[object HTMLCollection]", $2 = typeof Symbol === "function" && !!Symbol.toStringTag, v2 = !(0 in [,]), m4 = function Z() {
    return false;
  };
  if (typeof document === "object") {
    if (MU = document.all, j0.call(MU) === j0.call(document.all))
      m4 = function Z(U) {
        if ((v2 || !U) && (typeof U === "undefined" || typeof U === "object"))
          try {
            var Q = j0.call(U);
            return (Q === E2 || Q === f2 || Q === x2 || Q === I2) && U("") == null;
          } catch (Y) {
          }
        return false;
      };
  }
  var MU;
  DU.exports = a ? function Z(U) {
    if (m4(U))
      return true;
    if (!U)
      return false;
    if (typeof U !== "function" && typeof U !== "object")
      return false;
    try {
      a(U, null, y4);
    } catch (Q) {
      if (Q !== d0)
        return false;
    }
    return !c4(U) && j4(U);
  } : function Z(U) {
    if (m4(U))
      return true;
    if (!U)
      return false;
    if (typeof U !== "function" && typeof U !== "object")
      return false;
    if ($2)
      return j4(U);
    if (c4(U))
      return false;
    var Q = j0.call(U);
    if (Q !== T2 && Q !== B2 && !/^\[object HTML/.test(Q))
      return false;
    return j4(U);
  };
});
var IU = z((WQ, PU) => {
  var S2 = AU(), k2 = Object.prototype.toString, OU = Object.prototype.hasOwnProperty, h2 = function Z(U, Q, Y) {
    for (var X = 0, _ = U.length;X < _; X++)
      if (OU.call(U, X))
        if (Y == null)
          Q(U[X], X, U);
        else
          Q.call(Y, U[X], X, U);
  }, g2 = function Z(U, Q, Y) {
    for (var X = 0, _ = U.length;X < _; X++)
      if (Y == null)
        Q(U.charAt(X), X, U);
      else
        Q.call(Y, U.charAt(X), X, U);
  }, d2 = function Z(U, Q, Y) {
    for (var X in U)
      if (OU.call(U, X))
        if (Y == null)
          Q(U[X], X, U);
        else
          Q.call(Y, U[X], X, U);
  }, j2 = function Z(U, Q, Y) {
    if (!S2(Q))
      throw new TypeError("iterator must be a function");
    var X;
    if (arguments.length >= 3)
      X = Y;
    if (k2.call(U) === "[object Array]")
      h2(U, Q, X);
    else if (typeof U === "string")
      g2(U, Q, X);
    else
      d2(U, Q, X);
  };
  PU.exports = j2;
});
var BU = z((GQ, TU) => {
  TU.exports = ["Float32Array", "Float64Array", "Int8Array", "Int16Array", "Int32Array", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "BigInt64Array", "BigUint64Array"];
});
var fU = z((RQ, EU) => {
  var p4 = BU(), y2 = typeof globalThis === "undefined" ? global : globalThis;
  EU.exports = function Z() {
    var U = [];
    for (var Q = 0;Q < p4.length; Q++)
      if (typeof y2[p4[Q]] === "function")
        U[U.length] = p4[Q];
    return U;
  };
});
var kU = z((LQ, SU) => {
  var c0 = IU(), c2 = fU(), xU = d(), l4 = C(), y0 = M0(), m2 = l4("Object.prototype.toString"), vU = v()(), $U = typeof globalThis === "undefined" ? global : globalThis, b4 = c2(), n4 = l4("String.prototype.slice"), u4 = Object.getPrototypeOf, p2 = l4("Array.prototype.indexOf", true) || function Z(U, Q) {
    for (var Y = 0;Y < U.length; Y += 1)
      if (U[Y] === Q)
        return Y;
    return -1;
  }, m0 = { __proto__: null };
  if (vU && y0 && u4)
    c0(b4, function(Z) {
      var U = new $U[Z];
      if (Symbol.toStringTag in U) {
        var Q = u4(U), Y = y0(Q, Symbol.toStringTag);
        if (!Y) {
          var X = u4(Q);
          Y = y0(X, Symbol.toStringTag);
        }
        m0["$" + Z] = xU(Y.get);
      }
    });
  else
    c0(b4, function(Z) {
      var U = new $U[Z], Q = U.slice || U.set;
      if (Q)
        m0["$" + Z] = xU(Q);
    });
  var u2 = function Z(U) {
    var Q = false;
    return c0(m0, function(Y, X) {
      if (!Q)
        try {
          if ("$" + Y(U) === X)
            Q = n4(X, 1);
        } catch (_) {
        }
    }), Q;
  }, b2 = function Z(U) {
    var Q = false;
    return c0(m0, function(Y, X) {
      if (!Q)
        try {
          Y(U), Q = n4(X, 1);
        } catch (_) {
        }
    }), Q;
  };
  SU.exports = function Z(U) {
    if (!U || typeof U !== "object")
      return false;
    if (!vU) {
      var Q = n4(m2(U), 8, -1);
      if (p2(b4, Q) > -1)
        return Q;
      if (Q !== "Object")
        return false;
      return b2(U);
    }
    if (!y0)
      return null;
    return u2(U);
  };
});
var dU = z((NQ, gU) => {
  var l2 = C(), hU = l2("ArrayBuffer.prototype.byteLength", true), n2 = T4();
  gU.exports = function Z(U) {
    if (!n2(U))
      return NaN;
    return hU ? hU(U) : U.byteLength;
  };
});
var z5 = z((HQ, q5) => {
  var Z5 = function(Z, U, Q, Y) {
    var X = t(Z), _;
    while ((_ = X.next()) && !_.done)
      if (M(U, _.value, Q, Y))
        return _5(Z, _.value), true;
    return false;
  }, J5 = function(Z) {
    if (typeof Z === "undefined")
      return null;
    if (typeof Z === "object")
      return;
    if (typeof Z === "symbol")
      return false;
    if (typeof Z === "string" || typeof Z === "number")
      return +Z === +Z;
    return true;
  }, o2 = function(Z, U, Q, Y, X, _) {
    var J = J5(Q);
    if (J != null)
      return J;
    var F = b0(U, J), q = X5({}, X, { strict: false });
    if (typeof F === "undefined" && !r4(U, J) || !M(Y, F, q, _))
      return false;
    return !r4(Z, J) && M(Y, F, q, _);
  }, s2 = function(Z, U, Q) {
    var Y = J5(Q);
    if (Y != null)
      return Y;
    return n0(U, Y) && !n0(Z, Y);
  }, Q5 = function(Z, U, Q, Y, X, _) {
    var J = t(Z), F, q;
    while ((F = J.next()) && !F.done)
      if (q = F.value, M(Q, q, X, _) && M(Y, b0(U, q), X, _))
        return _5(Z, q), true;
    return false;
  }, M = function(Z, U, Q, Y) {
    var X = Q || {};
    if (X.strict ? yU(Z, U) : Z === U)
      return true;
    var _ = iU(Z), J = iU(U);
    if (_ !== J)
      return false;
    if (!Z || !U || typeof Z !== "object" && typeof U !== "object")
      return X.strict ? yU(Z, U) : Z == U;
    var F = Y.has(Z), q = Y.has(U), V;
    if (F && q) {
      if (Y.get(Z) === Y.get(U))
        return true;
    } else
      V = {};
    if (!F)
      Y.set(Z, V);
    if (!q)
      Y.set(U, V);
    return e2(Z, U, X, Y);
  }, Y5 = function(Z) {
    if (!Z || typeof Z !== "object" || typeof Z.length !== "number")
      return false;
    if (typeof Z.copy !== "function" || typeof Z.slice !== "function")
      return false;
    if (Z.length > 0 && typeof Z[0] !== "number")
      return false;
    return !!(Z.constructor && Z.constructor.isBuffer && Z.constructor.isBuffer(Z));
  }, a2 = function(Z, U, Q, Y) {
    if (p0(Z) !== p0(U))
      return false;
    var X = t(Z), _ = t(U), J, F, q;
    while ((J = X.next()) && !J.done)
      if (J.value && typeof J.value === "object") {
        if (!q)
          q = new u0;
        l0(q, J.value);
      } else if (!n0(U, J.value)) {
        if (Q.strict)
          return false;
        if (!s2(Z, U, J.value))
          return false;
        if (!q)
          q = new u0;
        l0(q, J.value);
      }
    if (q) {
      while ((F = _.next()) && !F.done)
        if (F.value && typeof F.value === "object") {
          if (!Z5(q, F.value, Q.strict, Y))
            return false;
        } else if (!Q.strict && !n0(Z, F.value) && !Z5(q, F.value, Q.strict, Y))
          return false;
      return p0(q) === 0;
    }
    return true;
  }, t2 = function(Z, U, Q, Y) {
    if (U5(Z) !== U5(U))
      return false;
    var X = t(Z), _ = t(U), J, F, q, V, R, G;
    while ((J = X.next()) && !J.done)
      if (V = J.value[0], R = J.value[1], V && typeof V === "object") {
        if (!q)
          q = new u0;
        l0(q, V);
      } else if (G = b0(U, V), typeof G === "undefined" && !r4(U, V) || !M(R, G, Q, Y)) {
        if (Q.strict)
          return false;
        if (!o2(Z, U, V, R, Q, Y))
          return false;
        if (!q)
          q = new u0;
        l0(q, V);
      }
    if (q) {
      while ((F = _.next()) && !F.done)
        if (V = F.value[0], G = F.value[1], V && typeof V === "object") {
          if (!Q5(q, Z, V, G, Q, Y))
            return false;
        } else if (!Q.strict && (!Z.has(V) || !M(b0(Z, V), G, Q, Y)) && !Q5(q, Z, V, G, X5({}, Q, { strict: false }), Y))
          return false;
      return p0(q) === 0;
    }
    return true;
  }, e2 = function(Z, U, Q, Y) {
    var X, _;
    if (typeof Z !== typeof U)
      return false;
    if (Z == null || U == null)
      return false;
    if (eU(Z) !== eU(U))
      return false;
    if (cU(Z) !== cU(U))
      return false;
    var J = mU(Z), F = mU(U);
    if (J !== F)
      return false;
    var q = Z instanceof Error, V = U instanceof Error;
    if (q !== V)
      return false;
    if (q || V) {
      if (Z.name !== U.name || Z.message !== U.message)
        return false;
    }
    var R = bU(Z), G = bU(U);
    if (R !== G)
      return false;
    if ((R || G) && (Z.source !== U.source || jU(Z) !== jU(U)))
      return false;
    var K = uU(Z), H = uU(U);
    if (K !== H)
      return false;
    if (K || H) {
      if (tU(Z) !== tU(U))
        return false;
    }
    if (Q.strict && i4 && i4(Z) !== i4(U))
      return false;
    var w = oU(Z), D = oU(U);
    if (w !== D)
      return false;
    if (w || D) {
      if (Z.length !== U.length)
        return false;
      for (X = 0;X < Z.length; X++)
        if (Z[X] !== U[X])
          return false;
      return true;
    }
    var T = Y5(Z), j = Y5(U);
    if (T !== j)
      return false;
    if (T || j) {
      if (Z.length !== U.length)
        return false;
      for (X = 0;X < Z.length; X++)
        if (Z[X] !== U[X])
          return false;
      return true;
    }
    var S = pU(Z), y = pU(U);
    if (S !== y)
      return false;
    if (S || y) {
      if (sU(Z) !== sU(U))
        return false;
      return typeof Uint8Array === "function" && M(new Uint8Array(Z), new Uint8Array(U), Q, Y);
    }
    var c = lU(Z), e = lU(U);
    if (c !== e)
      return false;
    if (c || e) {
      if (aU(Z) !== aU(U))
        return false;
      return typeof Uint8Array === "function" && M(new Uint8Array(Z), new Uint8Array(U), Q, Y);
    }
    if (typeof Z !== typeof U)
      return false;
    var I = nU(Z), k = nU(U);
    if (I.length !== k.length)
      return false;
    I.sort(), k.sort();
    for (X = I.length - 1;X >= 0; X--)
      if (I[X] != k[X])
        return false;
    for (X = I.length - 1;X >= 0; X--)
      if (_ = I[X], !M(Z[_], U[_], Q, Y))
        return false;
    var m = rU(Z), p = rU(U);
    if (m !== p)
      return false;
    if (m === "Set" || p === "Set")
      return a2(Z, U, Q, Y);
    if (m === "Map")
      return t2(Z, U, Q, Y);
    return true;
  }, X5 = D6(), P = C(), jU = h6(), i2 = A(), t = j6(), r2 = F8(), yU = C8(), cU = A8(), mU = P8(), pU = T4(), uU = x8(), bU = h8(), lU = j8(), nU = K0(), iU = YU(), rU = CU(), oU = kU(), sU = dU(), aU = P("SharedArrayBuffer.prototype.byteLength", true), tU = P("Date.prototype.getTime"), i4 = Object.getPrototypeOf, eU = P("Object.prototype.toString"), u0 = i2("%Set%", true), r4 = P("Map.prototype.has", true), b0 = P("Map.prototype.get", true), U5 = P("Map.prototype.size", true), l0 = P("Set.prototype.add", true), _5 = P("Set.prototype.delete", true), n0 = P("Set.prototype.has", true), p0 = P("Set.prototype.size", true);
  q5.exports = function Z(U, Q, Y) {
    return M(U, Q, Y, r2());
  };
});
var V5 = z((o4, F5) => {
  (function(Z, U) {
    if (typeof define === "function" && define.amd)
      define(U);
    else if (typeof o4 === "object")
      F5.exports = U();
    else
      Z.mimetypes = U();
  })(o4, function() {
    function Z(X) {
      if (X = (X || "").toString().toLowerCase().replace(/\s/g, ""), !(X in Q))
        return "bin";
      if (typeof Q[X] === "string")
        return Q[X];
      var _ = X.split("/");
      for (var J = 0, F = Q[X].length;J < F; J++)
        if (_[1] === Q[X][J])
          return Q[X][J];
      return Q[X][0];
    }
    function U(X) {
      if (X = (X || "").toString().toLowerCase().replace(/\s/g, "").replace(/^\./g, ""), !(X in Y))
        return "application/octet-stream";
      if (typeof Y[X] === "string")
        return Y[X];
      var _;
      for (var J = 0, F = Y[X].length;J < F; J++)
        if (_ = Y[X][J].split("/"), _[1] === X)
          return Y[X][J];
      return Y[X][0];
    }
    var Q = { "application/acad": "dwg", "application/andrew-inset": "", "application/applixware": "aw", "application/arj": "arj", "application/atom+xml": "xml", "application/atomcat+xml": "atomcat", "application/atomsvc+xml": "atomsvc", "application/base64": ["mm", "mme"], "application/binhex": "hqx", "application/binhex4": "hqx", "application/book": ["boo", "book"], "application/ccxml+xml,": "ccxml", "application/cdf": "cdf", "application/cdmi-capability": "cdmia", "application/cdmi-container": "cdmic", "application/cdmi-domain": "cdmid", "application/cdmi-object": "cdmio", "application/cdmi-queue": "cdmiq", "application/clariscad": "ccad", "application/commonground": "dp", "application/cu-seeme": "cu", "application/davmount+xml": "davmount", "application/drafting": "drw", "application/dsptype": "tsp", "application/dssc+der": "dssc", "application/dssc+xml": "xdssc", "application/dxf": "dxf", "application/ecmascript": ["js", "es"], "application/emma+xml": "emma", "application/envoy": "evy", "application/epub+zip": "epub", "application/excel": ["xl", "xla", "xlb", "xlc", "xld", "xlk", "xll", "xlm", "xls", "xlt", "xlv", "xlw"], "application/exi": "exi", "application/font-tdpfr": "pfr", "application/fractals": "fif", "application/freeloader": "frl", "application/futuresplash": "spl", "application/gnutar": "tgz", "application/groupwise": "vew", "application/hlp": "hlp", "application/hta": "hta", "application/hyperstudio": "stk", "application/i-deas": "unv", "application/iges": ["iges", "igs"], "application/inf": "inf", "application/internet-property-stream": "acx", "application/ipfix": "ipfix", "application/java": "class", "application/java-archive": "jar", "application/java-byte-code": "class", "application/java-serialized-object": "ser", "application/java-vm": "class", "application/javascript": "js", "application/json": "json", "application/lha": "lha", "application/lzx": "lzx", "application/mac-binary": "bin", "application/mac-binhex": "hqx", "application/mac-binhex40": "hqx", "application/mac-compactpro": "cpt", "application/macbinary": "bin", "application/mads+xml": "mads", "application/marc": "mrc", "application/marcxml+xml": "mrcx", "application/mathematica": "ma", "application/mathml+xml": "mathml", "application/mbedlet": "mbd", "application/mbox": "mbox", "application/mcad": "mcd", "application/mediaservercontrol+xml": "mscml", "application/metalink4+xml": "meta4", "application/mets+xml": "mets", "application/mime": "aps", "application/mods+xml": "mods", "application/mp21": "m21", "application/mp4": "mp4", "application/mspowerpoint": ["pot", "pps", "ppt", "ppz"], "application/msword": ["doc", "dot", "w6w", "wiz", "word"], "application/mswrite": "wri", "application/mxf": "mxf", "application/netmc": "mcp", "application/octet-stream": ["*"], "application/oda": "oda", "application/oebps-package+xml": "opf", "application/ogg": "ogx", "application/olescript": "axs", "application/onenote": "onetoc", "application/patch-ops-error+xml": "xer", "application/pdf": "pdf", "application/pgp-encrypted": "", "application/pgp-signature": "pgp", "application/pics-rules": "prf", "application/pkcs-12": "p12", "application/pkcs-crl": "crl", "application/pkcs10": "p10", "application/pkcs7-mime": ["p7c", "p7m"], "application/pkcs7-signature": "p7s", "application/pkcs8": "p8", "application/pkix-attr-cert": "ac", "application/pkix-cert": ["cer", "crt"], "application/pkix-crl": "crl", "application/pkix-pkipath": "pkipath", "application/pkixcmp": "pki", "application/plain": "text", "application/pls+xml": "pls", "application/postscript": ["ai", "eps", "ps"], "application/powerpoint": "ppt", "application/pro_eng": ["part", "prt"], "application/prs.cww": "cww", "application/pskc+xml": "pskcxml", "application/rdf+xml": "rdf", "application/reginfo+xml": "rif", "application/relax-ng-compact-syntax": "rnc", "application/resource-lists+xml": "rl", "application/resource-lists-diff+xml": "rld", "application/ringing-tones": "rng", "application/rls-services+xml": "rs", "application/rsd+xml": "rsd", "application/rss+xml": "xml", "application/rtf": ["rtf", "rtx"], "application/sbml+xml": "sbml", "application/scvp-cv-request": "scq", "application/scvp-cv-response": "scs", "application/scvp-vp-request": "spq", "application/scvp-vp-response": "spp", "application/sdp": "sdp", "application/sea": "sea", "application/set": "set", "application/set-payment-initiation": "setpay", "application/set-registration-initiation": "setreg", "application/shf+xml": "shf", "application/sla": "stl", "application/smil": ["smi", "smil"], "application/smil+xml": "smi", "application/solids": "sol", "application/sounder": "sdr", "application/sparql-query": "rq", "application/sparql-results+xml": "srx", "application/srgs": "gram", "application/srgs+xml": "grxml", "application/sru+xml": "sru", "application/ssml+xml": "ssml", "application/step": ["step", "stp"], "application/streamingmedia": "ssm", "application/tei+xml": "tei", "application/thraud+xml": "tfi", "application/timestamped-data": "tsd", "application/toolbook": "tbk", "application/vda": "vda", "application/vnd.3gpp.pic-bw-large": "plb", "application/vnd.3gpp.pic-bw-small": "psb", "application/vnd.3gpp.pic-bw-var": "pvb", "application/vnd.3gpp2.tcap": "tcap", "application/vnd.3m.post-it-notes": "pwn", "application/vnd.accpac.simply.aso": "aso", "application/vnd.accpac.simply.imp": "imp", "application/vnd.acucobol": "acu", "application/vnd.acucorp": "atc", "application/vnd.adobe.air-application-installer-package+zip": "air", "application/vnd.adobe.fxp": "fxp", "application/vnd.adobe.xdp+xml": "xdp", "application/vnd.adobe.xfdf": "xfdf", "application/vnd.ahead.space": "ahead", "application/vnd.airzip.filesecure.azf": "azf", "application/vnd.airzip.filesecure.azs": "azs", "application/vnd.amazon.ebook": "azw", "application/vnd.americandynamics.acc": "acc", "application/vnd.amiga.ami": "ami", "application/vnd.android.package-archive": "apk", "application/vnd.anser-web-certificate-issue-initiation": "cii", "application/vnd.anser-web-funds-transfer-initiation": "fti", "application/vnd.antix.game-component": "atx", "application/vnd.apple.installer+xml": "mpkg", "application/vnd.apple.mpegurl": "m3u8", "application/vnd.aristanetworks.swi": "swi", "application/vnd.audiograph": "aep", "application/vnd.blueice.multipass": "mpm", "application/vnd.bmi": "bmi", "application/vnd.businessobjects": "rep", "application/vnd.chemdraw+xml": "cdxml", "application/vnd.chipnuts.karaoke-mmd": "mmd", "application/vnd.cinderella": "cdy", "application/vnd.claymore": "cla", "application/vnd.cloanto.rp9": "rp9", "application/vnd.clonk.c4group": "c4g", "application/vnd.cluetrust.cartomobile-config": "c11amc", "application/vnd.cluetrust.cartomobile-config-pkg": "c11amz", "application/vnd.commonspace": "csp", "application/vnd.contact.cmsg": "cdbcmsg", "application/vnd.cosmocaller": "cmc", "application/vnd.crick.clicker": "clkx", "application/vnd.crick.clicker.keyboard": "clkk", "application/vnd.crick.clicker.palette": "clkp", "application/vnd.crick.clicker.template": "clkt", "application/vnd.crick.clicker.wordbank": "clkw", "application/vnd.criticaltools.wbs+xml": "wbs", "application/vnd.ctc-posml": "pml", "application/vnd.cups-ppd": "ppd", "application/vnd.curl.car": "car", "application/vnd.curl.pcurl": "pcurl", "application/vnd.data-vision.rdz": "rdz", "application/vnd.denovo.fcselayout-link": "fe_launch", "application/vnd.dna": "dna", "application/vnd.dolby.mlp": "mlp", "application/vnd.dpgraph": "dpg", "application/vnd.dreamfactory": "dfac", "application/vnd.dvb.ait": "ait", "application/vnd.dvb.service": "svc", "application/vnd.dynageo": "geo", "application/vnd.ecowin.chart": "mag", "application/vnd.enliven": "nml", "application/vnd.epson.esf": "esf", "application/vnd.epson.msf": "msf", "application/vnd.epson.quickanime": "qam", "application/vnd.epson.salt": "slt", "application/vnd.epson.ssf": "ssf", "application/vnd.eszigno3+xml": "es3", "application/vnd.ezpix-album": "ez2", "application/vnd.ezpix-package": "ez3", "application/vnd.fdf": "fdf", "application/vnd.fdsn.seed": "seed", "application/vnd.flographit": "gph", "application/vnd.fluxtime.clip": "ftc", "application/vnd.framemaker": "fm", "application/vnd.frogans.fnc": "fnc", "application/vnd.frogans.ltf": "ltf", "application/vnd.fsc.weblaunch": "fsc", "application/vnd.fujitsu.oasys": "oas", "application/vnd.fujitsu.oasys2": "oa2", "application/vnd.fujitsu.oasys3": "oa3", "application/vnd.fujitsu.oasysgp": "fg5", "application/vnd.fujitsu.oasysprs": "bh2", "application/vnd.fujixerox.ddd": "ddd", "application/vnd.fujixerox.docuworks": "xdw", "application/vnd.fujixerox.docuworks.binder": "xbd", "application/vnd.fuzzysheet": "fzs", "application/vnd.genomatix.tuxedo": "txd", "application/vnd.geogebra.file": "ggb", "application/vnd.geogebra.tool": "ggt", "application/vnd.geometry-explorer": "gex", "application/vnd.geonext": "gxt", "application/vnd.geoplan": "g2w", "application/vnd.geospace": "g3w", "application/vnd.gmx": "gmx", "application/vnd.google-earth.kml+xml": "kml", "application/vnd.google-earth.kmz": "kmz", "application/vnd.grafeq": "gqf", "application/vnd.groove-account": "gac", "application/vnd.groove-help": "ghf", "application/vnd.groove-identity-message": "gim", "application/vnd.groove-injector": "grv", "application/vnd.groove-tool-message": "gtm", "application/vnd.groove-tool-template": "tpl", "application/vnd.groove-vcard": "vcg", "application/vnd.hal+xml": "hal", "application/vnd.handheld-entertainment+xml": "zmm", "application/vnd.hbci": "hbci", "application/vnd.hhe.lesson-player": "les", "application/vnd.hp-hpgl": ["hgl", "hpg", "hpgl"], "application/vnd.hp-hpid": "hpid", "application/vnd.hp-hps": "hps", "application/vnd.hp-jlyt": "jlt", "application/vnd.hp-pcl": "pcl", "application/vnd.hp-pclxl": "pclxl", "application/vnd.hydrostatix.sof-data": "sfd-hdstx", "application/vnd.hzn-3d-crossword": "x3d", "application/vnd.ibm.minipay": "mpy", "application/vnd.ibm.modcap": "afp", "application/vnd.ibm.rights-management": "irm", "application/vnd.ibm.secure-container": "sc", "application/vnd.iccprofile": "icc", "application/vnd.igloader": "igl", "application/vnd.immervision-ivp": "ivp", "application/vnd.immervision-ivu": "ivu", "application/vnd.insors.igm": "igm", "application/vnd.intercon.formnet": "xpw", "application/vnd.intergeo": "i2g", "application/vnd.intu.qbo": "qbo", "application/vnd.intu.qfx": "qfx", "application/vnd.ipunplugged.rcprofile": "rcprofile", "application/vnd.irepository.package+xml": "irp", "application/vnd.is-xpr": "xpr", "application/vnd.isac.fcs": "fcs", "application/vnd.jam": "jam", "application/vnd.jcp.javame.midlet-rms": "rms", "application/vnd.jisp": "jisp", "application/vnd.joost.joda-archive": "joda", "application/vnd.kahootz": "ktz", "application/vnd.kde.karbon": "karbon", "application/vnd.kde.kchart": "chrt", "application/vnd.kde.kformula": "kfo", "application/vnd.kde.kivio": "flw", "application/vnd.kde.kontour": "kon", "application/vnd.kde.kpresenter": "kpr", "application/vnd.kde.kspread": "ksp", "application/vnd.kde.kword": "kwd", "application/vnd.kenameaapp": "htke", "application/vnd.kidspiration": "kia", "application/vnd.kinar": "kne", "application/vnd.koan": "skp", "application/vnd.kodak-descriptor": "sse", "application/vnd.las.las+xml": "lasxml", "application/vnd.llamagraphics.life-balance.desktop": "lbd", "application/vnd.llamagraphics.life-balance.exchange+xml": "lbe", "application/vnd.lotus-1-2-3": "123", "application/vnd.lotus-approach": "apr", "application/vnd.lotus-freelance": "pre", "application/vnd.lotus-notes": "nsf", "application/vnd.lotus-organizer": "org", "application/vnd.lotus-screencam": "scm", "application/vnd.lotus-wordpro": "lwp", "application/vnd.macports.portpkg": "portpkg", "application/vnd.mcd": "mcd", "application/vnd.medcalcdata": "mc1", "application/vnd.mediastation.cdkey": "cdkey", "application/vnd.mfer": "mwf", "application/vnd.mfmp": "mfm", "application/vnd.micrografx.flo": "flo", "application/vnd.micrografx.igx": "igx", "application/vnd.mif": "mif", "application/vnd.mobius.daf": "daf", "application/vnd.mobius.dis": "dis", "application/vnd.mobius.mbk": "mbk", "application/vnd.mobius.mqy": "mqy", "application/vnd.mobius.msl": "msl", "application/vnd.mobius.plc": "plc", "application/vnd.mobius.txf": "txf", "application/vnd.mophun.application": "mpn", "application/vnd.mophun.certificate": "mpc", "application/vnd.mozilla.xul+xml": "xul", "application/vnd.ms-artgalry": "cil", "application/vnd.ms-cab-compressed": "cab", "application/vnd.ms-excel": ["xla", "xlc", "xlm", "xls", "xlt", "xlw", "xlb", "xll"], "application/vnd.ms-excel.addin.macroenabled.12": "xlam", "application/vnd.ms-excel.sheet.binary.macroenabled.12": "xlsb", "application/vnd.ms-excel.sheet.macroenabled.12": "xlsm", "application/vnd.ms-excel.template.macroenabled.12": "xltm", "application/vnd.ms-fontobject": "eot", "application/vnd.ms-htmlhelp": "chm", "application/vnd.ms-ims": "ims", "application/vnd.ms-lrm": "lrm", "application/vnd.ms-officetheme": "thmx", "application/vnd.ms-outlook": "msg", "application/vnd.ms-pki.certstore": "sst", "application/vnd.ms-pki.pko": "pko", "application/vnd.ms-pki.seccat": "cat", "application/vnd.ms-pki.stl": "stl", "application/vnd.ms-pkicertstore": "sst", "application/vnd.ms-pkiseccat": "cat", "application/vnd.ms-pkistl": "stl", "application/vnd.ms-powerpoint": ["pot", "pps", "ppt", "ppa", "pwz"], "application/vnd.ms-powerpoint.addin.macroenabled.12": "ppam", "application/vnd.ms-powerpoint.presentation.macroenabled.12": "pptm", "application/vnd.ms-powerpoint.slide.macroenabled.12": "sldm", "application/vnd.ms-powerpoint.slideshow.macroenabled.12": "ppsm", "application/vnd.ms-powerpoint.template.macroenabled.12": "potm", "application/vnd.ms-project": "mpp", "application/vnd.ms-word.document.macroenabled.12": "docm", "application/vnd.ms-word.template.macroenabled.12": "dotm", "application/vnd.ms-works": ["wcm", "wdb", "wks", "wps"], "application/vnd.ms-wpl": "wpl", "application/vnd.ms-xpsdocument": "xps", "application/vnd.mseq": "mseq", "application/vnd.musician": "mus", "application/vnd.muvee.style": "msty", "application/vnd.neurolanguage.nlu": "nlu", "application/vnd.noblenet-directory": "nnd", "application/vnd.noblenet-sealer": "nns", "application/vnd.noblenet-web": "nnw", "application/vnd.nokia.configuration-message": "ncm", "application/vnd.nokia.n-gage.data": "ngdat", "application/vnd.nokia.n-gage.symbian.install": "n-gage", "application/vnd.nokia.radio-preset": "rpst", "application/vnd.nokia.radio-presets": "rpss", "application/vnd.nokia.ringing-tone": "rng", "application/vnd.novadigm.edm": "edm", "application/vnd.novadigm.edx": "edx", "application/vnd.novadigm.ext": "ext", "application/vnd.oasis.opendocument.chart": "odc", "application/vnd.oasis.opendocument.chart-template": "otc", "application/vnd.oasis.opendocument.database": "odb", "application/vnd.oasis.opendocument.formula": "odf", "application/vnd.oasis.opendocument.formula-template": "odft", "application/vnd.oasis.opendocument.graphics": "odg", "application/vnd.oasis.opendocument.graphics-template": "otg", "application/vnd.oasis.opendocument.image": "odi", "application/vnd.oasis.opendocument.image-template": "oti", "application/vnd.oasis.opendocument.presentation": "odp", "application/vnd.oasis.opendocument.presentation-template": "otp", "application/vnd.oasis.opendocument.spreadsheet": "ods", "application/vnd.oasis.opendocument.spreadsheet-template": "ots", "application/vnd.oasis.opendocument.text": "odt", "application/vnd.oasis.opendocument.text-master": "odm", "application/vnd.oasis.opendocument.text-template": "ott", "application/vnd.oasis.opendocument.text-web": "oth", "application/vnd.olpc-sugar": "xo", "application/vnd.oma.dd2+xml": "dd2", "application/vnd.openofficeorg.extension": "oxt", "application/vnd.openxmlformats-officedocument.presentationml.presentation": "pptx", "application/vnd.openxmlformats-officedocument.presentationml.slide": "sldx", "application/vnd.openxmlformats-officedocument.presentationml.slideshow": "ppsx", "application/vnd.openxmlformats-officedocument.presentationml.template": "potx", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": "xlsx", "application/vnd.openxmlformats-officedocument.spreadsheetml.template": "xltx", "application/vnd.openxmlformats-officedocument.wordprocessingml.document": "docx", "application/vnd.openxmlformats-officedocument.wordprocessingml.template": "dotx", "application/vnd.osgeo.mapguide.package": "mgp", "application/vnd.osgi.dp": "dp", "application/vnd.palm": "pdb", "application/vnd.pawaafile": "paw", "application/vnd.pg.format": "str", "application/vnd.pg.osasli": "ei6", "application/vnd.picsel": "efif", "application/vnd.pmi.widget": "wg", "application/vnd.pocketlearn": "plf", "application/vnd.powerbuilder6": "pbd", "application/vnd.previewsystems.box": "box", "application/vnd.proteus.magazine": "mgz", "application/vnd.publishare-delta-tree": "qps", "application/vnd.pvi.ptid1": "ptid", "application/vnd.quark.quarkxpress": "qxd", "application/vnd.realvnc.bed": "bed", "application/vnd.recordare.musicxml": "mxl", "application/vnd.recordare.musicxml+xml": "musicxml", "application/vnd.rig.cryptonote": "cryptonote", "application/vnd.rim.cod": "cod", "application/vnd.rn-realmedia": "rm", "application/vnd.rn-realplayer": "rnx", "application/vnd.route66.link66+xml": "link66", "application/vnd.sailingtracker.track": "st", "application/vnd.seemail": "see", "application/vnd.sema": "sema", "application/vnd.semd": "semd", "application/vnd.semf": "semf", "application/vnd.shana.informed.formdata": "ifm", "application/vnd.shana.informed.formtemplate": "itp", "application/vnd.shana.informed.interchange": "iif", "application/vnd.shana.informed.package": "ipk", "application/vnd.simtech-mindmapper": "twd", "application/vnd.smaf": "mmf", "application/vnd.smart.teacher": "teacher", "application/vnd.solent.sdkm+xml": "sdkm", "application/vnd.spotfire.dxp": "dxp", "application/vnd.spotfire.sfs": "sfs", "application/vnd.stardivision.calc": "sdc", "application/vnd.stardivision.draw": "sda", "application/vnd.stardivision.impress": "sdd", "application/vnd.stardivision.math": "smf", "application/vnd.stardivision.writer": "sdw", "application/vnd.stardivision.writer-global": "sgl", "application/vnd.stepmania.stepchart": "sm", "application/vnd.sun.xml.calc": "sxc", "application/vnd.sun.xml.calc.template": "stc", "application/vnd.sun.xml.draw": "sxd", "application/vnd.sun.xml.draw.template": "std", "application/vnd.sun.xml.impress": "sxi", "application/vnd.sun.xml.impress.template": "sti", "application/vnd.sun.xml.math": "sxm", "application/vnd.sun.xml.writer": "sxw", "application/vnd.sun.xml.writer.global": "sxg", "application/vnd.sun.xml.writer.template": "stw", "application/vnd.sus-calendar": "sus", "application/vnd.svd": "svd", "application/vnd.symbian.install": "sis", "application/vnd.syncml+xml": "xsm", "application/vnd.syncml.dm+wbxml": "bdm", "application/vnd.syncml.dm+xml": "xdm", "application/vnd.tao.intent-module-archive": "tao", "application/vnd.tmobile-livetv": "tmo", "application/vnd.trid.tpt": "tpt", "application/vnd.triscape.mxs": "mxs", "application/vnd.trueapp": "tra", "application/vnd.ufdl": "ufd", "application/vnd.uiq.theme": "utz", "application/vnd.umajin": "umj", "application/vnd.unity": "unityweb", "application/vnd.uoml+xml": "uoml", "application/vnd.vcx": "vcx", "application/vnd.visio": "vsd", "application/vnd.visionary": "vis", "application/vnd.vsf": "vsf", "application/vnd.wap.wbxml": "wbxml", "application/vnd.wap.wmlc": "wmlc", "application/vnd.wap.wmlscriptc": "wmlsc", "application/vnd.webturbo": "wtb", "application/vnd.wolfram.player": "nbp", "application/vnd.wordperfect": "wpd", "application/vnd.wqd": "wqd", "application/vnd.wt.stf": "stf", "application/vnd.xara": ["web", "xar"], "application/vnd.xfdl": "xfdl", "application/vnd.yamaha.hv-dic": "hvd", "application/vnd.yamaha.hv-script": "hvs", "application/vnd.yamaha.hv-voice": "hvp", "application/vnd.yamaha.openscoreformat": "osf", "application/vnd.yamaha.openscoreformat.osfpvg+xml": "osfpvg", "application/vnd.yamaha.smaf-audio": "saf", "application/vnd.yamaha.smaf-phrase": "spf", "application/vnd.yellowriver-custom-menu": "cmp", "application/vnd.zul": "zir", "application/vnd.zzazz.deck+xml": "zaz", "application/vocaltec-media-desc": "vmd", "application/vocaltec-media-file": "vmf", "application/voicexml+xml": "vxml", "application/widget": "wgt", "application/winhlp": "hlp", "application/wordperfect": ["wp", "wp5", "wp6", "wpd"], "application/wordperfect6.0": ["w60", "wp5"], "application/wordperfect6.1": "w61", "application/wsdl+xml": "wsdl", "application/wspolicy+xml": "wspolicy", "application/x-123": "wk1", "application/x-7z-compressed": "7z", "application/x-abiword": "abw", "application/x-ace-compressed": "ace", "application/x-aim": "aim", "application/x-authorware-bin": "aab", "application/x-authorware-map": "aam", "application/x-authorware-seg": "aas", "application/x-bcpio": "bcpio", "application/x-binary": "bin", "application/x-binhex40": "hqx", "application/x-bittorrent": "torrent", "application/x-bsh": ["bsh", "sh", "shar"], "application/x-bytecode.elisp": "elc", "applicaiton/x-bytecode.python": "pyc", "application/x-bzip": "bz", "application/x-bzip2": ["boz", "bz2"], "application/x-cdf": "cdf", "application/x-cdlink": "vcd", "application/x-chat": ["cha", "chat"], "application/x-chess-pgn": "pgn", "application/x-cmu-raster": "ras", "application/x-cocoa": "cco", "application/x-compactpro": "cpt", "application/x-compress": "z", "application/x-compressed": ["tgz", "gz", "z", "zip"], "application/x-conference": "nsc", "application/x-cpio": "cpio", "application/x-cpt": "cpt", "application/x-csh": "csh", "application/x-debian-package": "deb", "application/x-deepv": "deepv", "application/x-director": ["dcr", "dir", "dxr"], "application/x-doom": "wad", "application/x-dtbncx+xml": "ncx", "application/x-dtbook+xml": "dtb", "application/x-dtbresource+xml": "res", "application/x-dvi": "dvi", "application/x-elc": "elc", "application/x-envoy": ["env", "evy"], "application/x-esrehber": "es", "application/x-excel": ["xla", "xlb", "xlc", "xld", "xlk", "xll", "xlm", "xls", "xlt", "xlv", "xlw"], "application/x-font-bdf": "bdf", "application/x-font-ghostscript": "gsf", "application/x-font-linux-psf": "psf", "application/x-font-otf": "otf", "application/x-font-pcf": "pcf", "application/x-font-snf": "snf", "application/x-font-ttf": "ttf", "application/x-font-type1": "pfa", "application/x-font-woff": "woff", "application/x-frame": "mif", "application/x-freelance": "pre", "application/x-futuresplash": "spl", "application/x-gnumeric": "gnumeric", "application/x-gsp": "gsp", "application/x-gss": "gss", "application/x-gtar": "gtar", "application/x-gzip": ["gz", "gzip"], "application/x-hdf": "hdf", "application/x-helpfile": ["help", "hlp"], "application/x-httpd-imap": "imap", "application/x-ima": "ima", "application/x-internet-signup": ["ins", "isp"], "application/x-internett-signup": "ins", "application/x-inventor": "iv", "application/x-ip2": "ip", "application/x-iphone": "iii", "application/x-java-class": "class", "application/x-java-commerce": "jcm", "application/x-java-jnlp-file": "jnlp", "application/x-javascript": "js", "application/x-koan": ["skd", "skm", "skp", "skt"], "application/x-ksh": "ksh", "application/x-latex": ["latex", "ltx"], "application/x-lha": "lha", "application/x-lisp": "lsp", "application/x-livescreen": "ivy", "application/x-lotus": "wq1", "application/x-lotusscreencam": "scm", "application/x-lzh": "lzh", "application/x-lzx": "lzx", "application/x-mac-binhex40": "hqx", "application/x-macbinary": "bin", "application/x-magic-cap-package-1.0": "mc$", "application/x-mathcad": "mcd", "application/x-meme": "mm", "application/x-midi": ["mid", "midi"], "application/x-mif": "mif", "application/x-mix-transfer": "nix", "application/x-mobipocket-ebook": "prc", "application/x-mplayer2": "asx", "application/x-ms-application": "application", "application/x-ms-wmd": "wmd", "application/x-ms-wmz": "wmz", "application/x-ms-xbap": "xbap", "application/x-msaccess": "mdb", "application/x-msbinder": "obd", "application/x-mscardfile": "crd", "application/x-msclip": "clp", "application/x-msdownload": ["dll", "exe"], "application/x-msexcel": ["xla", "xls", "xlw"], "application/x-msmediaview": ["m13", "m14", "mvb"], "application/x-msmetafile": "wmf", "application/x-msmoney": "mny", "application/x-mspowerpoint": "ppt", "application/x-mspublisher": "pub", "application/x-msschedule": "scd", "application/x-msterminal": "trm", "application/x-mswrite": "wri", "application/x-navi-animation": "ani", "application/x-navidoc": "nvd", "application/x-navimap": "map", "application/x-navistyle": "stl", "application/x-netcdf": ["cdf", "nc"], "application/x-newton-compatible-pkg": "pkg", "application/x-nokia-9000-communicator-add-on-software": "aos", "application/x-omc": "omc", "application/x-omcdatamaker": "omcd", "application/x-omcregerator": "omcr", "application/x-pagemaker": ["pm4", "pm5"], "application/x-pcl": "pcl", "application/x-perfmon": ["pma", "pmc", "pml", "pmr", "pmw"], "application/x-pixclscript": "plx", "application/x-pkcs10": "p10", "application/x-pkcs12": ["p12", "pfx"], "application/x-pkcs7-certificates": ["p7b", "spc"], "application/x-pkcs7-certreqresp": "p7r", "application/x-pkcs7-mime": ["p7c", "p7m"], "application/x-pkcs7-signature": ["p7s", "p7a"], "application/x-pointplus": "css", "application/x-portable-anymap": "pnm", "application/x-project": ["mpc", "mpt", "mpv", "mpx"], "application/x-qpro": "wb1", "application/x-rar-compressed": "rar", "application/x-rtf": "rtf", "application/x-sdp": "sdp", "application/x-sea": "sea", "application/x-seelogo": "sl", "application/x-sh": "sh", "application/x-shar": ["shar", "sh"], "application/x-shockwave-flash": "swf", "application/x-silverlight-app": "xap", "application/x-sit": "sit", "application/x-sprite": ["spr", "sprite"], "application/x-stuffit": "sit", "application/x-stuffitx": "sitx", "application/x-sv4cpio": "sv4cpio", "application/x-sv4crc": "sv4crc", "application/x-tar": "tar", "application/x-tbook": ["sbk", "tbk"], "application/x-tcl": "tcl", "application/x-tex": "tex", "application/x-tex-tfm": "tfm", "application/x-texinfo": ["texi", "texinfo"], "application/x-troff": ["roff", "t", "tr"], "application/x-troff-man": "man", "application/x-troff-me": "me", "application/x-troff-ms": "ms", "application/x-troff-msvideo": "avi", "application/x-ustar": "ustar", "application/x-visio": ["vsd", "vst", "vsw"], "application/x-vnd.audioexplosion.mzz": "mzz", "application/x-vnd.ls-xpix": "xpix", "application/x-vrml": "vrml", "application/x-wais-source": ["src", "wsrc"], "application/x-winhelp": "hlp", "application/x-wintalk": "wtk", "application/x-world": ["svr", "wrl"], "application/x-wpwin": "wpd", "application/x-wri": "wri", "application/x-x509-ca-cert": ["cer", "crt", "der"], "application/x-x509-user-cert": "crt", "application/x-xfig": "fig", "application/x-xpinstall": "xpi", "application/x-zip-compressed": "zip", "application/xcap-diff+xml": "xdf", "application/xenc+xml": "xenc", "application/xhtml+xml": "xhtml", "application/xml": "xml", "application/xml-dtd": "dtd", "application/xop+xml": "xop", "application/xslt+xml": "xslt", "application/xspf+xml": "xspf", "application/xv+xml": "mxml", "application/yang": "yang", "application/yin+xml": "yin", "application/ynd.ms-pkipko": "pko", "application/zip": "zip", "audio/adpcm": "adp", "audio/aiff": ["aif", "aifc", "aiff"], "audio/basic": ["au", "snd"], "audio/it": "it", "audio/make": ["funk", "my", "pfunk"], "audio/make.my.funk": "pfunk", "audio/mid": ["mid", "rmi"], "audio/midi": ["kar", "mid", "midi"], "audio/mod": "mod", "audio/mp4": "mp4a", "audio/mpeg": ["mp3", "m2a", "mp2", "mpa", "mpg", "mpga"], "audio/mpeg3": "mp3", "audio/nspaudio": ["la", "lma"], "audio/ogg": "oga", "audio/s3m": "s3m", "audio/tsp-audio": "tsi", "audio/tsplayer": "tsp", "audio/vnd.dece.audio": "uva", "audio/vnd.digital-winds": "eol", "audio/vnd.dra": "dra", "audio/vnd.dts": "dts", "audio/vnd.dts.hd": "dtshd", "audio/vnd.lucent.voice": "lvp", "audio/vnd.ms-playready.media.pya": "pya", "audio/vnd.nuera.ecelp4800": "ecelp4800", "audio/vnd.nuera.ecelp7470": "ecelp7470", "audio/vnd.nuera.ecelp9600": "ecelp9600", "audio/vnd.qcelp": "qcp", "audio/vnd.rip": "rip", "audio/voc": "voc", "audio/voxware": "vox", "audio/wav": "wav", "audio/webm": "weba", "audio/x-aac": "aac", "audio/x-adpcm": "snd", "audio/x-aiff": ["aif", "aifc", "aiff"], "audio/x-au": "au", "audio/x-gsm": ["gsd", "gsm"], "audio/x-jam": "jam", "audio/x-liveaudio": "lam", "audio/x-mid": ["mid", "midi"], "audio/x-midi": ["mid", "midi"], "audio/x-mod": "mod", "audio/x-mpeg": "mp2", "audio/x-mpeg-3": "mp3", "audio/x-mpegurl": "m3u", "audio/x-mpequrl": "m3u", "audio/x-ms-wax": "wax", "audio/x-ms-wma": "wma", "audio/x-nspaudio": ["la", "lma"], "audio/x-pn-realaudio": ["ra", "ram", "rm", "rmm", "rmp"], "audio/x-pn-realaudio-plugin": ["ra", "rmp", "rpm"], "audio/x-psid": "sid", "audio/x-realaudio": "ra", "audio/x-twinvq": "vqf", "audio/x-twinvq-plugin": ["vqe", "vql"], "audio/x-vnd.audioexplosion.mjuicemediafile": "mjf", "audio/x-voc": "voc", "audio/x-wav": "wav", "audio/xm": "xm", "chemical/x-cdx": "cdx", "chemical/x-cif": "cif", "chemical/x-cmdf": "cmdf", "chemical/x-cml": "cml", "chemical/x-csml": "csml", "chemical/x-pdb": ["pdb", "xyz"], "chemical/x-xyz": "xyz", "drawing/x-dwf": "dwf", "i-world/i-vrml": "ivr", "image/bmp": ["bmp", "bm"], "image/cgm": "cgm", "image/cis-cod": "cod", "image/cmu-raster": ["ras", "rast"], "image/fif": "fif", "image/florian": ["flo", "turbot"], "image/g3fax": "g3", "image/gif": "gif", "image/ief": ["ief", "iefs"], "image/jpeg": ["jpe", "jpeg", "jpg", "jfif", "jfif-tbnl"], "image/jutvision": "jut", "image/ktx": "ktx", "image/naplps": ["nap", "naplps"], "image/pict": ["pic", "pict"], "image/pipeg": "jfif", "image/pjpeg": ["jfif", "jpe", "jpeg", "jpg"], "image/png": ["png", "x-png"], "image/prs.btif": "btif", "image/svg+xml": "svg", "image/tiff": ["tif", "tiff"], "image/vasa": "mcf", "image/vnd.adobe.photoshop": "psd", "image/vnd.dece.graphic": "uvi", "image/vnd.djvu": "djvu", "image/vnd.dvb.subtitle": "sub", "image/vnd.dwg": ["dwg", "dxf", "svf"], "image/vnd.dxf": "dxf", "image/vnd.fastbidsheet": "fbs", "image/vnd.fpx": "fpx", "image/vnd.fst": "fst", "image/vnd.fujixerox.edmics-mmr": "mmr", "image/vnd.fujixerox.edmics-rlc": "rlc", "image/vnd.ms-modi": "mdi", "image/vnd.net-fpx": ["fpx", "npx"], "image/vnd.rn-realflash": "rf", "image/vnd.rn-realpix": "rp", "image/vnd.wap.wbmp": "wbmp", "image/vnd.xiff": "xif", "image/webp": "webp", "image/x-cmu-raster": "ras", "image/x-cmx": "cmx", "image/x-dwg": ["dwg", "dxf", "svf"], "image/x-freehand": "fh", "image/x-icon": "ico", "image/x-jg": "art", "image/x-jps": "jps", "image/x-niff": ["nif", "niff"], "image/x-pcx": "pcx", "image/x-pict": ["pct", "pic"], "image/x-portable-anymap": "pnm", "image/x-portable-bitmap": "pbm", "image/x-portable-graymap": "pgm", "image/x-portable-greymap": "pgm", "image/x-portable-pixmap": "ppm", "image/x-quicktime": ["qif", "qti", "qtif"], "image/x-rgb": "rgb", "image/x-tiff": ["tif", "tiff"], "image/x-windows-bmp": "bmp", "image/x-xbitmap": "xbm", "image/x-xbm": "xbm", "image/x-xpixmap": ["xpm", "pm"], "image/x-xwd": "xwd", "image/x-xwindowdump": "xwd", "image/xbm": "xbm", "image/xpm": "xpm", "message/rfc822": ["mht", "mhtml", "nws", "mime", "eml"], "model/iges": ["iges", "igs"], "model/mesh": "msh", "model/vnd.collada+xml": "dae", "model/vnd.dwf": "dwf", "model/vnd.gdl": "gdl", "model/vnd.gtw": "gtw", "model/vnd.mts": "mts", "model/vnd.vtu": "vtu", "model/vrml": ["vrml", "wrl", "wrz"], "model/x-pov": "pov", "multipart/x-gzip": "gzip", "multipart/x-ustar": "ustar", "multipart/x-zip": "zip", "music/crescendo": ["mid", "midi"], "music/x-karaoke": "kar", "paleovu/x-pv": "pvu", "text/asp": "asp", "text/calendar": "ics", "text/css": "css", "text/csv": "csv", "text/ecmascript": "js", "text/h323": "323", "text/html": ["htm", "html", "stm", "acgi", "htmls", "htx", "shtml"], "text/iuls": "uls", "text/javascript": "js", "text/mcf": "mcf", "text/n3": "n3", "text/pascal": "pas", "text/plain": ["bas", "c", "h", "txt", "c++", "cc", "com", "conf", "cxx", "def", "f", "f90", "for", "g", "hh", "idc", "jav", "java", "list", "log", "lst", "m", "mar", "pl", "sdml", "text"], "text/plain-bas": "par", "text/prs.lines.tag": "dsc", "text/richtext": ["rtx", "rt", "rtf"], "text/scriplet": "wsc", "text/scriptlet": "sct", "text/sgml": ["sgm", "sgml"], "text/tab-separated-values": "tsv", "text/troff": "t", "text/turtle": "ttl", "text/uri-list": ["uni", "unis", "uri", "uris"], "text/vnd.abc": "abc", "text/vnd.curl": "curl", "text/vnd.curl.dcurl": "dcurl", "text/vnd.curl.mcurl": "mcurl", "text/vnd.curl.scurl": "scurl", "text/vnd.fly": "fly", "text/vnd.fmi.flexstor": "flx", "text/vnd.graphviz": "gv", "text/vnd.in3d.3dml": "3dml", "text/vnd.in3d.spot": "spot", "text/vnd.rn-realtext": "rt", "text/vnd.sun.j2me.app-descriptor": "jad", "text/vnd.wap.wml": "wml", "text/vnd.wap.wmlscript": "wmls", "text/webviewhtml": "htt", "text/x-asm": ["asm", "s"], "text/x-audiosoft-intra": "aip", "text/x-c": ["c", "cc", "cpp"], "text/x-component": "htc", "text/x-fortran": ["f", "f77", "f90", "for"], "text/x-h": ["h", "hh"], "text/x-java-source": ["jav", "java"], "text/x-java-source,java": "java", "text/x-la-asf": "lsx", "text/x-m": "m", "text/x-pascal": "p", "text/x-script": "hlb", "text/x-script.csh": "csh", "text/x-script.elisp": "el", "text/x-script.guile": "scm", "text/x-script.ksh": "ksh", "text/x-script.lisp": "lsp", "text/x-script.perl": "pl", "text/x-script.perl-module": "pm", "text/x-script.phyton": "py", "text/x-script.rexx": "rexx", "text/x-script.scheme": "scm", "text/x-script.sh": "sh", "text/x-script.tcl": "tcl", "text/x-script.tcsh": "tcsh", "text/x-script.zsh": "zsh", "text/x-server-parsed-html": ["shtml", "ssi"], "text/x-setext": "etx", "text/x-sgml": ["sgm", "sgml"], "text/x-speech": ["spc", "talk"], "text/x-uil": "uil", "text/x-uuencode": ["uu", "uue"], "text/x-vcalendar": "vcs", "text/x-vcard": "vcf", "text/xml": "xml", "video/3gpp": "3gp", "video/3gpp2": "3g2", "video/animaflex": "afl", "video/avi": "avi", "video/avs-video": "avs", "video/dl": "dl", "video/fli": "fli", "video/gl": "gl", "video/h261": "h261", "video/h263": "h263", "video/h264": "h264", "video/jpeg": "jpgv", "video/jpm": "jpm", "video/mj2": "mj2", "video/mp4": "mp4", "video/mpeg": ["mp2", "mpa", "mpe", "mpeg", "mpg", "mpv2", "m1v", "m2v", "mp3"], "video/msvideo": "avi", "video/ogg": "ogv", "video/quicktime": ["mov", "qt", "moov"], "video/vdo": "vdo", "video/vivo": ["viv", "vivo"], "video/vnd.dece.hd": "uvh", "video/vnd.dece.mobile": "uvm", "video/vnd.dece.pd": "uvp", "video/vnd.dece.sd": "uvs", "video/vnd.dece.video": "uvv", "video/vnd.fvt": "fvt", "video/vnd.mpegurl": "mxu", "video/vnd.ms-playready.media.pyv": "pyv", "video/vnd.rn-realvideo": "rv", "video/vnd.uvvu.mp4": "uvu", "video/vnd.vivo": ["viv", "vivo"], "video/vosaic": "vos", "video/webm": "webm", "video/x-amt-demorun": "xdr", "video/x-amt-showrun": "xsr", "video/x-atomic3d-feature": "fmf", "video/x-dl": "dl", "video/x-dv": ["dif", "dv"], "video/x-f4v": "f4v", "video/x-fli": "fli", "video/x-flv": "flv", "video/x-gl": "gl", "video/x-isvideo": "isu", "video/x-la-asf": ["lsf", "lsx"], "video/x-m4v": "m4v", "video/x-motion-jpeg": "mjpg", "video/x-mpeg": ["mp2", "mp3"], "video/x-mpeq2a": "mp2", "video/x-ms-asf": ["asf", "asr", "asx"], "video/x-ms-asf-plugin": "asx", "video/x-ms-wm": "wm", "video/x-ms-wmv": "wmv", "video/x-ms-wmx": "wmx", "video/x-ms-wvx": "wvx", "video/x-msvideo": "avi", "video/x-qtc": "qtc", "video/x-scm": "scm", "video/x-sgi-movie": ["movie", "mv"], "windows/metafile": "wmf", "www/mime": "mime", "x-conference/x-cooltalk": "ice", "x-music/x-midi": ["mid", "midi"], "x-world/x-3dmf": ["3dm", "3dmf", "qd3", "qd3d"], "x-world/x-svr": "svr", "x-world/x-vrml": ["flr", "vrml", "wrl", "wrz", "xaf", "xof"], "x-world/x-vrt": "vrt", "xgl/drawing": "xgz", "xgl/movie": "xmz" }, Y = { "": ["application/andrew-inset", "application/pgp-encrypted"], "*": "application/octet-stream", "123": "application/vnd.lotus-1-2-3", "323": "text/h323", "3dm": "x-world/x-3dmf", "3dmf": "x-world/x-3dmf", "3dml": "text/vnd.in3d.3dml", "3g2": "video/3gpp2", "3gp": "video/3gpp", "7z": "application/x-7z-compressed", a: "application/octet-stream", aab: "application/x-authorware-bin", aac: "audio/x-aac", aam: "application/x-authorware-map", aas: "application/x-authorware-seg", abc: "text/vnd.abc", abw: "application/x-abiword", ac: "application/pkix-attr-cert", acc: "application/vnd.americandynamics.acc", ace: "application/x-ace-compressed", acgi: "text/html", acu: "application/vnd.acucobol", acx: "application/internet-property-stream", adp: "audio/adpcm", aep: "application/vnd.audiograph", afl: "video/animaflex", afp: "application/vnd.ibm.modcap", ahead: "application/vnd.ahead.space", ai: "application/postscript", aif: ["audio/aiff", "audio/x-aiff"], aifc: ["audio/aiff", "audio/x-aiff"], aiff: ["audio/aiff", "audio/x-aiff"], aim: "application/x-aim", aip: "text/x-audiosoft-intra", air: "application/vnd.adobe.air-application-installer-package+zip", ait: "application/vnd.dvb.ait", ami: "application/vnd.amiga.ami", ani: "application/x-navi-animation", aos: "application/x-nokia-9000-communicator-add-on-software", apk: "application/vnd.android.package-archive", application: "application/x-ms-application", apr: "application/vnd.lotus-approach", aps: "application/mime", arc: "application/octet-stream", arj: ["application/arj", "application/octet-stream"], art: "image/x-jg", asf: "video/x-ms-asf", asm: "text/x-asm", aso: "application/vnd.accpac.simply.aso", asp: "text/asp", asr: "video/x-ms-asf", asx: ["video/x-ms-asf", "application/x-mplayer2", "video/x-ms-asf-plugin"], atc: "application/vnd.acucorp", atomcat: "application/atomcat+xml", atomsvc: "application/atomsvc+xml", atx: "application/vnd.antix.game-component", au: ["audio/basic", "audio/x-au"], avi: ["video/avi", "video/msvideo", "application/x-troff-msvideo", "video/x-msvideo"], avs: "video/avs-video", aw: "application/applixware", axs: "application/olescript", azf: "application/vnd.airzip.filesecure.azf", azs: "application/vnd.airzip.filesecure.azs", azw: "application/vnd.amazon.ebook", bas: "text/plain", bcpio: "application/x-bcpio", bdf: "application/x-font-bdf", bdm: "application/vnd.syncml.dm+wbxml", bed: "application/vnd.realvnc.bed", bh2: "application/vnd.fujitsu.oasysprs", bin: ["application/octet-stream", "application/mac-binary", "application/macbinary", "application/x-macbinary", "application/x-binary"], bm: "image/bmp", bmi: "application/vnd.bmi", bmp: ["image/bmp", "image/x-windows-bmp"], boo: "application/book", book: "application/book", box: "application/vnd.previewsystems.box", boz: "application/x-bzip2", bsh: "application/x-bsh", btif: "image/prs.btif", bz: "application/x-bzip", bz2: "application/x-bzip2", c: ["text/plain", "text/x-c"], "c++": "text/plain", c11amc: "application/vnd.cluetrust.cartomobile-config", c11amz: "application/vnd.cluetrust.cartomobile-config-pkg", c4g: "application/vnd.clonk.c4group", cab: "application/vnd.ms-cab-compressed", car: "application/vnd.curl.car", cat: ["application/vnd.ms-pkiseccat", "application/vnd.ms-pki.seccat"], cc: ["text/plain", "text/x-c"], ccad: "application/clariscad", cco: "application/x-cocoa", ccxml: "application/ccxml+xml,", cdbcmsg: "application/vnd.contact.cmsg", cdf: ["application/cdf", "application/x-cdf", "application/x-netcdf"], cdkey: "application/vnd.mediastation.cdkey", cdmia: "application/cdmi-capability", cdmic: "application/cdmi-container", cdmid: "application/cdmi-domain", cdmio: "application/cdmi-object", cdmiq: "application/cdmi-queue", cdx: "chemical/x-cdx", cdxml: "application/vnd.chemdraw+xml", cdy: "application/vnd.cinderella", cer: ["application/pkix-cert", "application/x-x509-ca-cert"], cgm: "image/cgm", cha: "application/x-chat", chat: "application/x-chat", chm: "application/vnd.ms-htmlhelp", chrt: "application/vnd.kde.kchart", cif: "chemical/x-cif", cii: "application/vnd.anser-web-certificate-issue-initiation", cil: "application/vnd.ms-artgalry", cla: "application/vnd.claymore", class: ["application/octet-stream", "application/java", "application/java-byte-code", "application/java-vm", "application/x-java-class"], clkk: "application/vnd.crick.clicker.keyboard", clkp: "application/vnd.crick.clicker.palette", clkt: "application/vnd.crick.clicker.template", clkw: "application/vnd.crick.clicker.wordbank", clkx: "application/vnd.crick.clicker", clp: "application/x-msclip", cmc: "application/vnd.cosmocaller", cmdf: "chemical/x-cmdf", cml: "chemical/x-cml", cmp: "application/vnd.yellowriver-custom-menu", cmx: "image/x-cmx", cod: ["image/cis-cod", "application/vnd.rim.cod"], com: ["application/octet-stream", "text/plain"], conf: "text/plain", cpio: "application/x-cpio", cpp: "text/x-c", cpt: ["application/mac-compactpro", "application/x-compactpro", "application/x-cpt"], crd: "application/x-mscardfile", crl: ["application/pkix-crl", "application/pkcs-crl"], crt: ["application/pkix-cert", "application/x-x509-user-cert", "application/x-x509-ca-cert"], cryptonote: "application/vnd.rig.cryptonote", csh: ["text/x-script.csh", "application/x-csh"], csml: "chemical/x-csml", csp: "application/vnd.commonspace", css: ["text/css", "application/x-pointplus"], csv: "text/csv", cu: "application/cu-seeme", curl: "text/vnd.curl", cww: "application/prs.cww", cxx: "text/plain", dae: "model/vnd.collada+xml", daf: "application/vnd.mobius.daf", davmount: "application/davmount+xml", dcr: "application/x-director", dcurl: "text/vnd.curl.dcurl", dd2: "application/vnd.oma.dd2+xml", ddd: "application/vnd.fujixerox.ddd", deb: "application/x-debian-package", deepv: "application/x-deepv", def: "text/plain", der: "application/x-x509-ca-cert", dfac: "application/vnd.dreamfactory", dif: "video/x-dv", dir: "application/x-director", dis: "application/vnd.mobius.dis", djvu: "image/vnd.djvu", dl: ["video/dl", "video/x-dl"], dll: "application/x-msdownload", dms: "application/octet-stream", dna: "application/vnd.dna", doc: "application/msword", docm: "application/vnd.ms-word.document.macroenabled.12", docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document", dot: "application/msword", dotm: "application/vnd.ms-word.template.macroenabled.12", dotx: "application/vnd.openxmlformats-officedocument.wordprocessingml.template", dp: ["application/commonground", "application/vnd.osgi.dp"], dpg: "application/vnd.dpgraph", dra: "audio/vnd.dra", drw: "application/drafting", dsc: "text/prs.lines.tag", dssc: "application/dssc+der", dtb: "application/x-dtbook+xml", dtd: "application/xml-dtd", dts: "audio/vnd.dts", dtshd: "audio/vnd.dts.hd", dump: "application/octet-stream", dv: "video/x-dv", dvi: "application/x-dvi", dwf: ["model/vnd.dwf", "drawing/x-dwf"], dwg: ["application/acad", "image/vnd.dwg", "image/x-dwg"], dxf: ["application/dxf", "image/vnd.dwg", "image/vnd.dxf", "image/x-dwg"], dxp: "application/vnd.spotfire.dxp", dxr: "application/x-director", ecelp4800: "audio/vnd.nuera.ecelp4800", ecelp7470: "audio/vnd.nuera.ecelp7470", ecelp9600: "audio/vnd.nuera.ecelp9600", edm: "application/vnd.novadigm.edm", edx: "application/vnd.novadigm.edx", efif: "application/vnd.picsel", ei6: "application/vnd.pg.osasli", el: "text/x-script.elisp", elc: ["application/x-elc", "application/x-bytecode.elisp"], eml: "message/rfc822", emma: "application/emma+xml", env: "application/x-envoy", eol: "audio/vnd.digital-winds", eot: "application/vnd.ms-fontobject", eps: "application/postscript", epub: "application/epub+zip", es: ["application/ecmascript", "application/x-esrehber"], es3: "application/vnd.eszigno3+xml", esf: "application/vnd.epson.esf", etx: "text/x-setext", evy: ["application/envoy", "application/x-envoy"], exe: ["application/octet-stream", "application/x-msdownload"], exi: "application/exi", ext: "application/vnd.novadigm.ext", ez2: "application/vnd.ezpix-album", ez3: "application/vnd.ezpix-package", f: ["text/plain", "text/x-fortran"], f4v: "video/x-f4v", f77: "text/x-fortran", f90: ["text/plain", "text/x-fortran"], fbs: "image/vnd.fastbidsheet", fcs: "application/vnd.isac.fcs", fdf: "application/vnd.fdf", fe_launch: "application/vnd.denovo.fcselayout-link", fg5: "application/vnd.fujitsu.oasysgp", fh: "image/x-freehand", fif: ["application/fractals", "image/fif"], fig: "application/x-xfig", fli: ["video/fli", "video/x-fli"], flo: ["image/florian", "application/vnd.micrografx.flo"], flr: "x-world/x-vrml", flv: "video/x-flv", flw: "application/vnd.kde.kivio", flx: "text/vnd.fmi.flexstor", fly: "text/vnd.fly", fm: "application/vnd.framemaker", fmf: "video/x-atomic3d-feature", fnc: "application/vnd.frogans.fnc", for: ["text/plain", "text/x-fortran"], fpx: ["image/vnd.fpx", "image/vnd.net-fpx"], frl: "application/freeloader", fsc: "application/vnd.fsc.weblaunch", fst: "image/vnd.fst", ftc: "application/vnd.fluxtime.clip", fti: "application/vnd.anser-web-funds-transfer-initiation", funk: "audio/make", fvt: "video/vnd.fvt", fxp: "application/vnd.adobe.fxp", fzs: "application/vnd.fuzzysheet", g: "text/plain", g2w: "application/vnd.geoplan", g3: "image/g3fax", g3w: "application/vnd.geospace", gac: "application/vnd.groove-account", gdl: "model/vnd.gdl", geo: "application/vnd.dynageo", gex: "application/vnd.geometry-explorer", ggb: "application/vnd.geogebra.file", ggt: "application/vnd.geogebra.tool", ghf: "application/vnd.groove-help", gif: "image/gif", gim: "application/vnd.groove-identity-message", gl: ["video/gl", "video/x-gl"], gmx: "application/vnd.gmx", gnumeric: "application/x-gnumeric", gph: "application/vnd.flographit", gqf: "application/vnd.grafeq", gram: "application/srgs", grv: "application/vnd.groove-injector", grxml: "application/srgs+xml", gsd: "audio/x-gsm", gsf: "application/x-font-ghostscript", gsm: "audio/x-gsm", gsp: "application/x-gsp", gss: "application/x-gss", gtar: "application/x-gtar", gtm: "application/vnd.groove-tool-message", gtw: "model/vnd.gtw", gv: "text/vnd.graphviz", gxt: "application/vnd.geonext", gz: ["application/x-gzip", "application/x-compressed"], gzip: ["multipart/x-gzip", "application/x-gzip"], h: ["text/plain", "text/x-h"], h261: "video/h261", h263: "video/h263", h264: "video/h264", hal: "application/vnd.hal+xml", hbci: "application/vnd.hbci", hdf: "application/x-hdf", help: "application/x-helpfile", hgl: "application/vnd.hp-hpgl", hh: ["text/plain", "text/x-h"], hlb: "text/x-script", hlp: ["application/winhlp", "application/hlp", "application/x-helpfile", "application/x-winhelp"], hpg: "application/vnd.hp-hpgl", hpgl: "application/vnd.hp-hpgl", hpid: "application/vnd.hp-hpid", hps: "application/vnd.hp-hps", hqx: ["application/mac-binhex40", "application/binhex", "application/binhex4", "application/mac-binhex", "application/x-binhex40", "application/x-mac-binhex40"], hta: "application/hta", htc: "text/x-component", htke: "application/vnd.kenameaapp", htm: "text/html", html: "text/html", htmls: "text/html", htt: "text/webviewhtml", htx: "text/html", hvd: "application/vnd.yamaha.hv-dic", hvp: "application/vnd.yamaha.hv-voice", hvs: "application/vnd.yamaha.hv-script", i2g: "application/vnd.intergeo", icc: "application/vnd.iccprofile", ice: "x-conference/x-cooltalk", ico: "image/x-icon", ics: "text/calendar", idc: "text/plain", ief: "image/ief", iefs: "image/ief", ifm: "application/vnd.shana.informed.formdata", iges: ["application/iges", "model/iges"], igl: "application/vnd.igloader", igm: "application/vnd.insors.igm", igs: ["application/iges", "model/iges"], igx: "application/vnd.micrografx.igx", iif: "application/vnd.shana.informed.interchange", iii: "application/x-iphone", ima: "application/x-ima", imap: "application/x-httpd-imap", imp: "application/vnd.accpac.simply.imp", ims: "application/vnd.ms-ims", inf: "application/inf", ins: ["application/x-internet-signup", "application/x-internett-signup"], ip: "application/x-ip2", ipfix: "application/ipfix", ipk: "application/vnd.shana.informed.package", irm: "application/vnd.ibm.rights-management", irp: "application/vnd.irepository.package+xml", isp: "application/x-internet-signup", isu: "video/x-isvideo", it: "audio/it", itp: "application/vnd.shana.informed.formtemplate", iv: "application/x-inventor", ivp: "application/vnd.immervision-ivp", ivr: "i-world/i-vrml", ivu: "application/vnd.immervision-ivu", ivy: "application/x-livescreen", jad: "text/vnd.sun.j2me.app-descriptor", jam: ["application/vnd.jam", "audio/x-jam"], jar: "application/java-archive", jav: ["text/plain", "text/x-java-source"], java: ["text/plain", "text/x-java-source,java", "text/x-java-source"], jcm: "application/x-java-commerce", jfif: ["image/pipeg", "image/jpeg", "image/pjpeg"], "jfif-tbnl": "image/jpeg", jisp: "application/vnd.jisp", jlt: "application/vnd.hp-jlyt", jnlp: "application/x-java-jnlp-file", joda: "application/vnd.joost.joda-archive", jpe: ["image/jpeg", "image/pjpeg"], jpeg: ["image/jpeg", "image/pjpeg"], jpg: ["image/jpeg", "image/pjpeg"], jpgv: "video/jpeg", jpm: "video/jpm", jps: "image/x-jps", js: ["application/javascript", "application/ecmascript", "text/javascript", "text/ecmascript", "application/x-javascript"], json: "application/json", jut: "image/jutvision", kar: ["audio/midi", "music/x-karaoke"], karbon: "application/vnd.kde.karbon", kfo: "application/vnd.kde.kformula", kia: "application/vnd.kidspiration", kml: "application/vnd.google-earth.kml+xml", kmz: "application/vnd.google-earth.kmz", kne: "application/vnd.kinar", kon: "application/vnd.kde.kontour", kpr: "application/vnd.kde.kpresenter", ksh: ["application/x-ksh", "text/x-script.ksh"], ksp: "application/vnd.kde.kspread", ktx: "image/ktx", ktz: "application/vnd.kahootz", kwd: "application/vnd.kde.kword", la: ["audio/nspaudio", "audio/x-nspaudio"], lam: "audio/x-liveaudio", lasxml: "application/vnd.las.las+xml", latex: "application/x-latex", lbd: "application/vnd.llamagraphics.life-balance.desktop", lbe: "application/vnd.llamagraphics.life-balance.exchange+xml", les: "application/vnd.hhe.lesson-player", lha: ["application/octet-stream", "application/lha", "application/x-lha"], lhx: "application/octet-stream", link66: "application/vnd.route66.link66+xml", list: "text/plain", lma: ["audio/nspaudio", "audio/x-nspaudio"], log: "text/plain", lrm: "application/vnd.ms-lrm", lsf: "video/x-la-asf", lsp: ["application/x-lisp", "text/x-script.lisp"], lst: "text/plain", lsx: ["video/x-la-asf", "text/x-la-asf"], ltf: "application/vnd.frogans.ltf", ltx: "application/x-latex", lvp: "audio/vnd.lucent.voice", lwp: "application/vnd.lotus-wordpro", lzh: ["application/octet-stream", "application/x-lzh"], lzx: ["application/lzx", "application/octet-stream", "application/x-lzx"], m: ["text/plain", "text/x-m"], m13: "application/x-msmediaview", m14: "application/x-msmediaview", m1v: "video/mpeg", m21: "application/mp21", m2a: "audio/mpeg", m2v: "video/mpeg", m3u: ["audio/x-mpegurl", "audio/x-mpequrl"], m3u8: "application/vnd.apple.mpegurl", m4v: "video/x-m4v", ma: "application/mathematica", mads: "application/mads+xml", mag: "application/vnd.ecowin.chart", man: "application/x-troff-man", map: "application/x-navimap", mar: "text/plain", mathml: "application/mathml+xml", mbd: "application/mbedlet", mbk: "application/vnd.mobius.mbk", mbox: "application/mbox", mc$: "application/x-magic-cap-package-1.0", mc1: "application/vnd.medcalcdata", mcd: ["application/mcad", "application/vnd.mcd", "application/x-mathcad"], mcf: ["image/vasa", "text/mcf"], mcp: "application/netmc", mcurl: "text/vnd.curl.mcurl", mdb: "application/x-msaccess", mdi: "image/vnd.ms-modi", me: "application/x-troff-me", meta4: "application/metalink4+xml", mets: "application/mets+xml", mfm: "application/vnd.mfmp", mgp: "application/vnd.osgeo.mapguide.package", mgz: "application/vnd.proteus.magazine", mht: "message/rfc822", mhtml: "message/rfc822", mid: ["audio/mid", "audio/midi", "music/crescendo", "x-music/x-midi", "audio/x-midi", "application/x-midi", "audio/x-mid"], midi: ["audio/midi", "music/crescendo", "x-music/x-midi", "audio/x-midi", "application/x-midi", "audio/x-mid"], mif: ["application/vnd.mif", "application/x-mif", "application/x-frame"], mime: ["message/rfc822", "www/mime"], mj2: "video/mj2", mjf: "audio/x-vnd.audioexplosion.mjuicemediafile", mjpg: "video/x-motion-jpeg", mlp: "application/vnd.dolby.mlp", mm: ["application/base64", "application/x-meme"], mmd: "application/vnd.chipnuts.karaoke-mmd", mme: "application/base64", mmf: "application/vnd.smaf", mmr: "image/vnd.fujixerox.edmics-mmr", mny: "application/x-msmoney", mod: ["audio/mod", "audio/x-mod"], mods: "application/mods+xml", moov: "video/quicktime", mov: "video/quicktime", movie: "video/x-sgi-movie", mp2: ["video/mpeg", "audio/mpeg", "video/x-mpeg", "audio/x-mpeg", "video/x-mpeq2a"], mp3: ["audio/mpeg", "audio/mpeg3", "video/mpeg", "audio/x-mpeg-3", "video/x-mpeg"], mp4: ["video/mp4", "application/mp4"], mp4a: "audio/mp4", mpa: ["video/mpeg", "audio/mpeg"], mpc: ["application/vnd.mophun.certificate", "application/x-project"], mpe: "video/mpeg", mpeg: "video/mpeg", mpg: ["video/mpeg", "audio/mpeg"], mpga: "audio/mpeg", mpkg: "application/vnd.apple.installer+xml", mpm: "application/vnd.blueice.multipass", mpn: "application/vnd.mophun.application", mpp: "application/vnd.ms-project", mpt: "application/x-project", mpv: "application/x-project", mpv2: "video/mpeg", mpx: "application/x-project", mpy: "application/vnd.ibm.minipay", mqy: "application/vnd.mobius.mqy", mrc: "application/marc", mrcx: "application/marcxml+xml", ms: "application/x-troff-ms", mscml: "application/mediaservercontrol+xml", mseq: "application/vnd.mseq", msf: "application/vnd.epson.msf", msg: "application/vnd.ms-outlook", msh: "model/mesh", msl: "application/vnd.mobius.msl", msty: "application/vnd.muvee.style", mts: "model/vnd.mts", mus: "application/vnd.musician", musicxml: "application/vnd.recordare.musicxml+xml", mv: "video/x-sgi-movie", mvb: "application/x-msmediaview", mwf: "application/vnd.mfer", mxf: "application/mxf", mxl: "application/vnd.recordare.musicxml", mxml: "application/xv+xml", mxs: "application/vnd.triscape.mxs", mxu: "video/vnd.mpegurl", my: "audio/make", mzz: "application/x-vnd.audioexplosion.mzz", "n-gage": "application/vnd.nokia.n-gage.symbian.install", n3: "text/n3", nap: "image/naplps", naplps: "image/naplps", nbp: "application/vnd.wolfram.player", nc: "application/x-netcdf", ncm: "application/vnd.nokia.configuration-message", ncx: "application/x-dtbncx+xml", ngdat: "application/vnd.nokia.n-gage.data", nif: "image/x-niff", niff: "image/x-niff", nix: "application/x-mix-transfer", nlu: "application/vnd.neurolanguage.nlu", nml: "application/vnd.enliven", nnd: "application/vnd.noblenet-directory", nns: "application/vnd.noblenet-sealer", nnw: "application/vnd.noblenet-web", npx: "image/vnd.net-fpx", nsc: "application/x-conference", nsf: "application/vnd.lotus-notes", nvd: "application/x-navidoc", nws: "message/rfc822", o: "application/octet-stream", oa2: "application/vnd.fujitsu.oasys2", oa3: "application/vnd.fujitsu.oasys3", oas: "application/vnd.fujitsu.oasys", obd: "application/x-msbinder", oda: "application/oda", odb: "application/vnd.oasis.opendocument.database", odc: "application/vnd.oasis.opendocument.chart", odf: "application/vnd.oasis.opendocument.formula", odft: "application/vnd.oasis.opendocument.formula-template", odg: "application/vnd.oasis.opendocument.graphics", odi: "application/vnd.oasis.opendocument.image", odm: "application/vnd.oasis.opendocument.text-master", odp: "application/vnd.oasis.opendocument.presentation", ods: "application/vnd.oasis.opendocument.spreadsheet", odt: "application/vnd.oasis.opendocument.text", oga: "audio/ogg", ogv: "video/ogg", ogx: "application/ogg", omc: "application/x-omc", omcd: "application/x-omcdatamaker", omcr: "application/x-omcregerator", onetoc: "application/onenote", opf: "application/oebps-package+xml", org: "application/vnd.lotus-organizer", osf: "application/vnd.yamaha.openscoreformat", osfpvg: "application/vnd.yamaha.openscoreformat.osfpvg+xml", otc: "application/vnd.oasis.opendocument.chart-template", otf: "application/x-font-otf", otg: "application/vnd.oasis.opendocument.graphics-template", oth: "application/vnd.oasis.opendocument.text-web", oti: "application/vnd.oasis.opendocument.image-template", otp: "application/vnd.oasis.opendocument.presentation-template", ots: "application/vnd.oasis.opendocument.spreadsheet-template", ott: "application/vnd.oasis.opendocument.text-template", oxt: "application/vnd.openofficeorg.extension", p: "text/x-pascal", p10: ["application/pkcs10", "application/x-pkcs10"], p12: ["application/pkcs-12", "application/x-pkcs12"], p7a: "application/x-pkcs7-signature", p7b: "application/x-pkcs7-certificates", p7c: ["application/pkcs7-mime", "application/x-pkcs7-mime"], p7m: ["application/pkcs7-mime", "application/x-pkcs7-mime"], p7r: "application/x-pkcs7-certreqresp", p7s: ["application/pkcs7-signature", "application/x-pkcs7-signature"], p8: "application/pkcs8", par: "text/plain-bas", part: "application/pro_eng", pas: "text/pascal", paw: "application/vnd.pawaafile", pbd: "application/vnd.powerbuilder6", pbm: "image/x-portable-bitmap", pcf: "application/x-font-pcf", pcl: ["application/vnd.hp-pcl", "application/x-pcl"], pclxl: "application/vnd.hp-pclxl", pct: "image/x-pict", pcurl: "application/vnd.curl.pcurl", pcx: "image/x-pcx", pdb: ["application/vnd.palm", "chemical/x-pdb"], pdf: "application/pdf", pfa: "application/x-font-type1", pfr: "application/font-tdpfr", pfunk: ["audio/make", "audio/make.my.funk"], pfx: "application/x-pkcs12", pgm: ["image/x-portable-graymap", "image/x-portable-greymap"], pgn: "application/x-chess-pgn", pgp: "application/pgp-signature", pic: ["image/pict", "image/x-pict"], pict: "image/pict", pkg: "application/x-newton-compatible-pkg", pki: "application/pkixcmp", pkipath: "application/pkix-pkipath", pko: ["application/ynd.ms-pkipko", "application/vnd.ms-pki.pko"], pl: ["text/plain", "text/x-script.perl"], plb: "application/vnd.3gpp.pic-bw-large", plc: "application/vnd.mobius.plc", plf: "application/vnd.pocketlearn", pls: "application/pls+xml", plx: "application/x-pixclscript", pm: ["text/x-script.perl-module", "image/x-xpixmap"], pm4: "application/x-pagemaker", pm5: "application/x-pagemaker", pma: "application/x-perfmon", pmc: "application/x-perfmon", pml: ["application/vnd.ctc-posml", "application/x-perfmon"], pmr: "application/x-perfmon", pmw: "application/x-perfmon", png: "image/png", pnm: ["application/x-portable-anymap", "image/x-portable-anymap"], portpkg: "application/vnd.macports.portpkg", pot: ["application/vnd.ms-powerpoint", "application/mspowerpoint"], potm: "application/vnd.ms-powerpoint.template.macroenabled.12", potx: "application/vnd.openxmlformats-officedocument.presentationml.template", pov: "model/x-pov", ppa: "application/vnd.ms-powerpoint", ppam: "application/vnd.ms-powerpoint.addin.macroenabled.12", ppd: "application/vnd.cups-ppd", ppm: "image/x-portable-pixmap", pps: ["application/vnd.ms-powerpoint", "application/mspowerpoint"], ppsm: "application/vnd.ms-powerpoint.slideshow.macroenabled.12", ppsx: "application/vnd.openxmlformats-officedocument.presentationml.slideshow", ppt: ["application/vnd.ms-powerpoint", "application/mspowerpoint", "application/powerpoint", "application/x-mspowerpoint"], pptm: "application/vnd.ms-powerpoint.presentation.macroenabled.12", pptx: "application/vnd.openxmlformats-officedocument.presentationml.presentation", ppz: "application/mspowerpoint", prc: "application/x-mobipocket-ebook", pre: ["application/vnd.lotus-freelance", "application/x-freelance"], prf: "application/pics-rules", prt: "application/pro_eng", ps: "application/postscript", psb: "application/vnd.3gpp.pic-bw-small", psd: ["application/octet-stream", "image/vnd.adobe.photoshop"], psf: "application/x-font-linux-psf", pskcxml: "application/pskc+xml", ptid: "application/vnd.pvi.ptid1", pub: "application/x-mspublisher", pvb: "application/vnd.3gpp.pic-bw-var", pvu: "paleovu/x-pv", pwn: "application/vnd.3m.post-it-notes", pwz: "application/vnd.ms-powerpoint", py: "text/x-script.phyton", pya: "audio/vnd.ms-playready.media.pya", pyc: "applicaiton/x-bytecode.python", pyv: "video/vnd.ms-playready.media.pyv", qam: "application/vnd.epson.quickanime", qbo: "application/vnd.intu.qbo", qcp: "audio/vnd.qcelp", qd3: "x-world/x-3dmf", qd3d: "x-world/x-3dmf", qfx: "application/vnd.intu.qfx", qif: "image/x-quicktime", qps: "application/vnd.publishare-delta-tree", qt: "video/quicktime", qtc: "video/x-qtc", qti: "image/x-quicktime", qtif: "image/x-quicktime", qxd: "application/vnd.quark.quarkxpress", ra: ["audio/x-realaudio", "audio/x-pn-realaudio", "audio/x-pn-realaudio-plugin"], ram: "audio/x-pn-realaudio", rar: "application/x-rar-compressed", ras: ["image/cmu-raster", "application/x-cmu-raster", "image/x-cmu-raster"], rast: "image/cmu-raster", rcprofile: "application/vnd.ipunplugged.rcprofile", rdf: "application/rdf+xml", rdz: "application/vnd.data-vision.rdz", rep: "application/vnd.businessobjects", res: "application/x-dtbresource+xml", rexx: "text/x-script.rexx", rf: "image/vnd.rn-realflash", rgb: "image/x-rgb", rif: "application/reginfo+xml", rip: "audio/vnd.rip", rl: "application/resource-lists+xml", rlc: "image/vnd.fujixerox.edmics-rlc", rld: "application/resource-lists-diff+xml", rm: ["application/vnd.rn-realmedia", "audio/x-pn-realaudio"], rmi: "audio/mid", rmm: "audio/x-pn-realaudio", rmp: ["audio/x-pn-realaudio-plugin", "audio/x-pn-realaudio"], rms: "application/vnd.jcp.javame.midlet-rms", rnc: "application/relax-ng-compact-syntax", rng: ["application/ringing-tones", "application/vnd.nokia.ringing-tone"], rnx: "application/vnd.rn-realplayer", roff: "application/x-troff", rp: "image/vnd.rn-realpix", rp9: "application/vnd.cloanto.rp9", rpm: "audio/x-pn-realaudio-plugin", rpss: "application/vnd.nokia.radio-presets", rpst: "application/vnd.nokia.radio-preset", rq: "application/sparql-query", rs: "application/rls-services+xml", rsd: "application/rsd+xml", rt: ["text/richtext", "text/vnd.rn-realtext"], rtf: ["application/rtf", "text/richtext", "application/x-rtf"], rtx: ["text/richtext", "application/rtf"], rv: "video/vnd.rn-realvideo", s: "text/x-asm", s3m: "audio/s3m", saf: "application/vnd.yamaha.smaf-audio", saveme: "application/octet-stream", sbk: "application/x-tbook", sbml: "application/sbml+xml", sc: "application/vnd.ibm.secure-container", scd: "application/x-msschedule", scm: ["application/vnd.lotus-screencam", "video/x-scm", "text/x-script.guile", "application/x-lotusscreencam", "text/x-script.scheme"], scq: "application/scvp-cv-request", scs: "application/scvp-cv-response", sct: "text/scriptlet", scurl: "text/vnd.curl.scurl", sda: "application/vnd.stardivision.draw", sdc: "application/vnd.stardivision.calc", sdd: "application/vnd.stardivision.impress", sdkm: "application/vnd.solent.sdkm+xml", sdml: "text/plain", sdp: ["application/sdp", "application/x-sdp"], sdr: "application/sounder", sdw: "application/vnd.stardivision.writer", sea: ["application/sea", "application/x-sea"], see: "application/vnd.seemail", seed: "application/vnd.fdsn.seed", sema: "application/vnd.sema", semd: "application/vnd.semd", semf: "application/vnd.semf", ser: "application/java-serialized-object", set: "application/set", setpay: "application/set-payment-initiation", setreg: "application/set-registration-initiation", "sfd-hdstx": "application/vnd.hydrostatix.sof-data", sfs: "application/vnd.spotfire.sfs", sgl: "application/vnd.stardivision.writer-global", sgm: ["text/sgml", "text/x-sgml"], sgml: ["text/sgml", "text/x-sgml"], sh: ["application/x-shar", "application/x-bsh", "application/x-sh", "text/x-script.sh"], shar: ["application/x-bsh", "application/x-shar"], shf: "application/shf+xml", shtml: ["text/html", "text/x-server-parsed-html"], sid: "audio/x-psid", sis: "application/vnd.symbian.install", sit: ["application/x-stuffit", "application/x-sit"], sitx: "application/x-stuffitx", skd: "application/x-koan", skm: "application/x-koan", skp: ["application/vnd.koan", "application/x-koan"], skt: "application/x-koan", sl: "application/x-seelogo", sldm: "application/vnd.ms-powerpoint.slide.macroenabled.12", sldx: "application/vnd.openxmlformats-officedocument.presentationml.slide", slt: "application/vnd.epson.salt", sm: "application/vnd.stepmania.stepchart", smf: "application/vnd.stardivision.math", smi: ["application/smil", "application/smil+xml"], smil: "application/smil", snd: ["audio/basic", "audio/x-adpcm"], snf: "application/x-font-snf", sol: "application/solids", spc: ["text/x-speech", "application/x-pkcs7-certificates"], spf: "application/vnd.yamaha.smaf-phrase", spl: ["application/futuresplash", "application/x-futuresplash"], spot: "text/vnd.in3d.spot", spp: "application/scvp-vp-response", spq: "application/scvp-vp-request", spr: "application/x-sprite", sprite: "application/x-sprite", src: "application/x-wais-source", sru: "application/sru+xml", srx: "application/sparql-results+xml", sse: "application/vnd.kodak-descriptor", ssf: "application/vnd.epson.ssf", ssi: "text/x-server-parsed-html", ssm: "application/streamingmedia", ssml: "application/ssml+xml", sst: ["application/vnd.ms-pkicertstore", "application/vnd.ms-pki.certstore"], st: "application/vnd.sailingtracker.track", stc: "application/vnd.sun.xml.calc.template", std: "application/vnd.sun.xml.draw.template", step: "application/step", stf: "application/vnd.wt.stf", sti: "application/vnd.sun.xml.impress.template", stk: "application/hyperstudio", stl: ["application/vnd.ms-pkistl", "application/sla", "application/vnd.ms-pki.stl", "application/x-navistyle"], stm: "text/html", stp: "application/step", str: "application/vnd.pg.format", stw: "application/vnd.sun.xml.writer.template", sub: "image/vnd.dvb.subtitle", sus: "application/vnd.sus-calendar", sv4cpio: "application/x-sv4cpio", sv4crc: "application/x-sv4crc", svc: "application/vnd.dvb.service", svd: "application/vnd.svd", svf: ["image/vnd.dwg", "image/x-dwg"], svg: "image/svg+xml", svr: ["x-world/x-svr", "application/x-world"], swf: "application/x-shockwave-flash", swi: "application/vnd.aristanetworks.swi", sxc: "application/vnd.sun.xml.calc", sxd: "application/vnd.sun.xml.draw", sxg: "application/vnd.sun.xml.writer.global", sxi: "application/vnd.sun.xml.impress", sxm: "application/vnd.sun.xml.math", sxw: "application/vnd.sun.xml.writer", t: ["text/troff", "application/x-troff"], talk: "text/x-speech", tao: "application/vnd.tao.intent-module-archive", tar: "application/x-tar", tbk: ["application/toolbook", "application/x-tbook"], tcap: "application/vnd.3gpp2.tcap", tcl: ["text/x-script.tcl", "application/x-tcl"], tcsh: "text/x-script.tcsh", teacher: "application/vnd.smart.teacher", tei: "application/tei+xml", tex: "application/x-tex", texi: "application/x-texinfo", texinfo: "application/x-texinfo", text: ["application/plain", "text/plain"], tfi: "application/thraud+xml", tfm: "application/x-tex-tfm", tgz: ["application/gnutar", "application/x-compressed"], thmx: "application/vnd.ms-officetheme", tif: ["image/tiff", "image/x-tiff"], tiff: ["image/tiff", "image/x-tiff"], tmo: "application/vnd.tmobile-livetv", torrent: "application/x-bittorrent", tpl: "application/vnd.groove-tool-template", tpt: "application/vnd.trid.tpt", tr: "application/x-troff", tra: "application/vnd.trueapp", trm: "application/x-msterminal", tsd: "application/timestamped-data", tsi: "audio/tsp-audio", tsp: ["application/dsptype", "audio/tsplayer"], tsv: "text/tab-separated-values", ttf: "application/x-font-ttf", ttl: "text/turtle", turbot: "image/florian", twd: "application/vnd.simtech-mindmapper", txd: "application/vnd.genomatix.tuxedo", txf: "application/vnd.mobius.txf", txt: "text/plain", ufd: "application/vnd.ufdl", uil: "text/x-uil", uls: "text/iuls", umj: "application/vnd.umajin", uni: "text/uri-list", unis: "text/uri-list", unityweb: "application/vnd.unity", unv: "application/i-deas", uoml: "application/vnd.uoml+xml", uri: "text/uri-list", uris: "text/uri-list", ustar: ["application/x-ustar", "multipart/x-ustar"], utz: "application/vnd.uiq.theme", uu: ["application/octet-stream", "text/x-uuencode"], uue: "text/x-uuencode", uva: "audio/vnd.dece.audio", uvh: "video/vnd.dece.hd", uvi: "image/vnd.dece.graphic", uvm: "video/vnd.dece.mobile", uvp: "video/vnd.dece.pd", uvs: "video/vnd.dece.sd", uvu: "video/vnd.uvvu.mp4", uvv: "video/vnd.dece.video", vcd: "application/x-cdlink", vcf: "text/x-vcard", vcg: "application/vnd.groove-vcard", vcs: "text/x-vcalendar", vcx: "application/vnd.vcx", vda: "application/vda", vdo: "video/vdo", vew: "application/groupwise", vis: "application/vnd.visionary", viv: ["video/vivo", "video/vnd.vivo"], vivo: ["video/vivo", "video/vnd.vivo"], vmd: "application/vocaltec-media-desc", vmf: "application/vocaltec-media-file", voc: ["audio/voc", "audio/x-voc"], vos: "video/vosaic", vox: "audio/voxware", vqe: "audio/x-twinvq-plugin", vqf: "audio/x-twinvq", vql: "audio/x-twinvq-plugin", vrml: ["model/vrml", "x-world/x-vrml", "application/x-vrml"], vrt: "x-world/x-vrt", vsd: ["application/vnd.visio", "application/x-visio"], vsf: "application/vnd.vsf", vst: "application/x-visio", vsw: "application/x-visio", vtu: "model/vnd.vtu", vxml: "application/voicexml+xml", w60: "application/wordperfect6.0", w61: "application/wordperfect6.1", w6w: "application/msword", wad: "application/x-doom", wav: ["audio/wav", "audio/x-wav"], wax: "audio/x-ms-wax", wb1: "application/x-qpro", wbmp: "image/vnd.wap.wbmp", wbs: "application/vnd.criticaltools.wbs+xml", wbxml: "application/vnd.wap.wbxml", wcm: "application/vnd.ms-works", wdb: "application/vnd.ms-works", web: "application/vnd.xara", weba: "audio/webm", webm: "video/webm", webp: "image/webp", wg: "application/vnd.pmi.widget", wgt: "application/widget", wiz: "application/msword", wk1: "application/x-123", wks: "application/vnd.ms-works", wm: "video/x-ms-wm", wma: "audio/x-ms-wma", wmd: "application/x-ms-wmd", wmf: ["windows/metafile", "application/x-msmetafile"], wml: "text/vnd.wap.wml", wmlc: "application/vnd.wap.wmlc", wmls: "text/vnd.wap.wmlscript", wmlsc: "application/vnd.wap.wmlscriptc", wmv: "video/x-ms-wmv", wmx: "video/x-ms-wmx", wmz: "application/x-ms-wmz", woff: "application/x-font-woff", word: "application/msword", wp: "application/wordperfect", wp5: ["application/wordperfect", "application/wordperfect6.0"], wp6: "application/wordperfect", wpd: ["application/wordperfect", "application/vnd.wordperfect", "application/x-wpwin"], wpl: "application/vnd.ms-wpl", wps: "application/vnd.ms-works", wq1: "application/x-lotus", wqd: "application/vnd.wqd", wri: ["application/mswrite", "application/x-wri", "application/x-mswrite"], wrl: ["model/vrml", "x-world/x-vrml", "application/x-world"], wrz: ["model/vrml", "x-world/x-vrml"], wsc: "text/scriplet", wsdl: "application/wsdl+xml", wspolicy: "application/wspolicy+xml", wsrc: "application/x-wais-source", wtb: "application/vnd.webturbo", wtk: "application/x-wintalk", wvx: "video/x-ms-wvx", "x-png": "image/png", x3d: "application/vnd.hzn-3d-crossword", xaf: "x-world/x-vrml", xap: "application/x-silverlight-app", xar: "application/vnd.xara", xbap: "application/x-ms-xbap", xbd: "application/vnd.fujixerox.docuworks.binder", xbm: ["image/xbm", "image/x-xbm", "image/x-xbitmap"], xdf: "application/xcap-diff+xml", xdm: "application/vnd.syncml.dm+xml", xdp: "application/vnd.adobe.xdp+xml", xdr: "video/x-amt-demorun", xdssc: "application/dssc+xml", xdw: "application/vnd.fujixerox.docuworks", xenc: "application/xenc+xml", xer: "application/patch-ops-error+xml", xfdf: "application/vnd.adobe.xfdf", xfdl: "application/vnd.xfdl", xgz: "xgl/drawing", xhtml: "application/xhtml+xml", xif: "image/vnd.xiff", xl: "application/excel", xla: ["application/vnd.ms-excel", "application/excel", "application/x-msexcel", "application/x-excel"], xlam: "application/vnd.ms-excel.addin.macroenabled.12", xlb: ["application/excel", "application/vnd.ms-excel", "application/x-excel"], xlc: ["application/vnd.ms-excel", "application/excel", "application/x-excel"], xld: ["application/excel", "application/x-excel"], xlk: ["application/excel", "application/x-excel"], xll: ["application/excel", "application/vnd.ms-excel", "application/x-excel"], xlm: ["application/vnd.ms-excel", "application/excel", "application/x-excel"], xls: ["application/vnd.ms-excel", "application/excel", "application/x-msexcel", "application/x-excel"], xlsb: "application/vnd.ms-excel.sheet.binary.macroenabled.12", xlsm: "application/vnd.ms-excel.sheet.macroenabled.12", xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", xlt: ["application/vnd.ms-excel", "application/excel", "application/x-excel"], xltm: "application/vnd.ms-excel.template.macroenabled.12", xltx: "application/vnd.openxmlformats-officedocument.spreadsheetml.template", xlv: ["application/excel", "application/x-excel"], xlw: ["application/vnd.ms-excel", "application/excel", "application/x-msexcel", "application/x-excel"], xm: "audio/xm", xml: ["application/xml", "text/xml", "application/atom+xml", "application/rss+xml"], xmz: "xgl/movie", xo: "application/vnd.olpc-sugar", xof: "x-world/x-vrml", xop: "application/xop+xml", xpi: "application/x-xpinstall", xpix: "application/x-vnd.ls-xpix", xpm: ["image/xpm", "image/x-xpixmap"], xpr: "application/vnd.is-xpr", xps: "application/vnd.ms-xpsdocument", xpw: "application/vnd.intercon.formnet", xslt: "application/xslt+xml", xsm: "application/vnd.syncml+xml", xspf: "application/xspf+xml", xsr: "video/x-amt-showrun", xul: "application/vnd.mozilla.xul+xml", xwd: ["image/x-xwd", "image/x-xwindowdump"], xyz: ["chemical/x-xyz", "chemical/x-pdb"], yang: "application/yang", yin: "application/yin+xml", z: ["application/x-compressed", "application/x-compress"], zaz: "application/vnd.zzazz.deck+xml", zip: ["application/zip", "multipart/x-zip", "application/x-zip-compressed", "application/x-compressed"], zir: "application/vnd.zul", zmm: "application/vnd.handheld-entertainment+xml", zoo: "application/octet-stream", zsh: "text/x-script.zsh" };
    return { detectExtension: Z, detectMimeType: U };
  });
});
var U7 = z5();
var Z7 = V5();
var K5 = /\.\w+/;

class W5 {
  authToken;
  username;
  rootURL;
  organizationName;
  databaseStorageRepoName;
  constructor({ authToken: Z, username: U, rootURL: Q = "https://api.github.com", organizationName: Y = "The-Brains", databaseStorageRepoName: X = "database-storage" }) {
    if (this.authToken = Z, this.username = U, this.rootURL = Q, this.organizationName = Y, this.databaseStorageRepoName = X, !this.authToken || !this.username)
      throw 'Need to set GET request with "token" and "username".';
  }
  headerAuthorization() {
    return "Basic " + btoa(`${this.username}:${this.authToken}`);
  }
  async getData(Z) {
    const U = Z.match(K5)?.[0], Q = `contents/data/${Z}${U ? "" : ".json"}`, Y = `${this.rootURL}/repos/${this.organizationName}/${this.databaseStorageRepoName}/${Q}`;
    try {
      const _ = await (await fetch(Y, { method: "GET", headers: { Authorization: this.headerAuthorization() } })).json();
      if (_.content)
        switch (U?.toLocaleLowerCase()) {
          case ".json":
          case undefined: {
            const J = atob(_.content);
            return { data: JSON.parse(J), sha: _.sha };
          }
          default: {
            const J = Z7.detectMimeType(U);
            return { data: await (await fetch(`data:${J};base64,${_.content}`)).blob(), sha: _.sha };
          }
        }
      else if (_.message === "Not Found")
        return { data: null, sha: null };
      else
        throw new Error("Unable to parse response.");
    } catch (X) {
      if (X.responseJSON?.message === "Not Found")
        return { data: null, sha: null };
      else
        throw X;
    }
  }
  async makeBase64Blob(Z) {
    const U = new FileReader;
    return U.readAsDataURL(Z), new Promise((Q) => {
      U.onloadend = () => {
        const Y = U.result;
        if (typeof Y === "string" && Y.indexOf("data:") === 0)
          Q(Y.split(",")[1]);
        else
          Q(Y);
      };
    });
  }
  async setData(Z, U, Q = 3) {
    const Y = await this.getData(Z), X = typeof U === "function" ? await U(Y) : U;
    if (Y.data) {
      if (U7(X, Y.data))
        return Y;
    }
    const _ = K5.test(Z), J = `contents/data/${Z}${_ ? "" : ".json"}`, q = X instanceof Blob ? await this.makeBase64Blob(X) : btoa(JSON.stringify(X)), V = `${this.rootURL}/repos/${this.organizationName}/${this.databaseStorageRepoName}/${J}`, R = JSON.stringify({ message: `Creating key/value for key: '${Z}'`, content: q, sha: Y.sha }), K = await (await fetch(V, { method: "PUT", headers: { Authorization: this.headerAuthorization() }, body: R })).json();
    if (!K.content && Q > 0)
      return console.warn(`Commit failed. Retries: ${Q}`, K), this.setData(Z, U, Q - 1);
    return { data: X, sha: K.content?.sha };
  }
}

// src/index.ts
async function getData(key, options) {
  const api = new W5({ ...DEFAULT_OPTIONS, ...options });
  return api.getData(key);
}
async function setData(key, value, options) {
  const api = new W5({ ...DEFAULT_OPTIONS, ...options });
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
