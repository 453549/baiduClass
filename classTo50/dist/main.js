/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { throw err; };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 27);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	var $Object = Object;
	module.exports = {
	  create:     $Object.create,
	  getProto:   $Object.getPrototypeOf,
	  isEnum:     {}.propertyIsEnumerable,
	  getDesc:    $Object.getOwnPropertyDescriptor,
	  setDesc:    $Object.defineProperty,
	  setDescs:   $Object.defineProperties,
	  getKeys:    $Object.keys,
	  getNames:   $Object.getOwnPropertyNames,
	  getSymbols: $Object.getOwnPropertySymbols,
	  each:       [].forEach
	};

/***/ },
/* 1 */
/***/ function(module, exports) {

	var core = module.exports = {version: '1.2.6'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _stringify = __webpack_require__(7);
	
	var _stringify2 = _interopRequireDefault(_stringify);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var key = 'Form';
	
	// 虚拟数据
	if (!localStorage.getItem(key)) {
	    var now = Date.now();
	    var data = {
	        // 登录用户
	        user: {
	            id: 1,
	            name: '我的空间',
	            img: 'dist/images/1.jpg'
	        },
	
	        allId: 4,
	
	        // 调查列表列表
	        formList: [{
	            id: 2,
	            title: '示例介绍1',
	            state: 'draft', //有三种状态   end：结束 draft:未发布 sent:发布中
	            now: now,
	            end: now + 1000 * 60 * 60 * 24 * 50,
	            form: [{
	                "title": "meiki",
	                "type": "checkbox",
	                "content": [{
	                    "text": "problr for 1",
	                    'pic': '15'
	                }, {
	                    "text": "problr for 2",
	                    'pic': '45'
	                }, {
	                    "text": "problr for 3",
	                    'pic': '6'
	                }]
	            }, {
	                "title": "loki",
	                "type": "radio",
	                "content": [{
	                    "text": "proLife for 1",
	                    'pic': '80'
	                }, {
	                    "text": "proLife for 2",
	                    'pic': '15'
	                }, {
	                    "text": "proLife for 3",
	                    'pic': '66'
	                }]
	            }]
	        }, {
	            id: 3,
	            title: '示例介绍2',
	            state: 'draft', //有三种状态   end：结束 draft:未发布 sent:发布中
	            now: now,
	            end: now + 1000 * 60 * 60 * 24 * 50,
	            form: [{
	                "title": "oop",
	                "type": "checkbox",
	                "content": [{
	                    "text": "opp js?",
	                    'pic': '67'
	                }, {
	                    "text": "oop java?",
	                    'pic': '2'
	                }, {
	                    "text": "oop ruby?",
	                    'pic': '70'
	                }]
	            }, {
	                "title": "oop for python?",
	                "type": "textarea",
	                "content": [{
	                    text: "",
	                    yes: '80',
	                    no: '30'
	                }]
	            }]
	        }, {
	            id: 4,
	            title: '网络游戏报告',
	            state: 'sent', //有三种状态   end：结束 draft:未发布 sent:发布中
	            now: now,
	            end: now + 1000 * 60 * 60 * 24 * 50,
	            form: [{
	                "title": "性别",
	                "type": "radio",
	                "content": [{
	                    "text": "男",
	                    'pic': '67'
	                }, {
	                    "text": "女",
	                    'pic': '30'
	                }]
	            }, {
	                "title": "年级",
	                "type": "radio",
	                "content": [{
	                    "text": "大一",
	                    'pic': '67'
	                }, {
	                    "text": "大二",
	                    'pic': '30'
	                }, {
	                    'text': '大三',
	                    'pic': '20'
	                }, {
	                    'text': '大四',
	                    'pic': '9'
	                }]
	            }, {
	                "title": "你喜欢以下什么游戏？",
	                "type": "checkbox",
	                "content": [{
	                    "text": "龙之谷",
	                    'pic': '67'
	                }, {
	                    "text": "剑灵",
	                    'pic': '79'
	                }, {
	                    "text": "穿越火线",
	                    'pic': '30'
	                }, {
	                    "text": "魔兽",
	                    'pic': '70'
	                }, {
	                    "text": "lol",
	                    'pic': '170'
	                }, {
	                    "text": "暗黑3",
	                    'pic': '32'
	                }, {
	                    "text": "其他",
	                    'pic': '36'
	                }]
	            }, {
	                "title": "接触网游的原因",
	                "type": "textarea",
	                "content": [{
	                    text: "",
	                    yes: '80',
	                    no: '30'
	                }]
	            }]
	        }]
	
	    };
	
	    // 查看数据详情
	
	    localStorage.setItem(key, (0, _stringify2.default)(data));
	}
	
	exports.default = {
	    fetch: function fetch() {
	        return JSON.parse(localStorage.getItem(key));
	    },
	    save: function save(store) {
	        localStorage.setItem(key, (0, _stringify2.default)(store));
	    }
	};

/***/ },
/* 3 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	    times: function times(value) {
	        return moment(value).formate('YYYY-MM-DD hh:mm:ss');
	    },
	    cktype: function cktype(value) {
	        var str = value.toLowerCase();
	
	        switch (str) {
	            case 'radio':
	                return '单选题';
	                break;
	            case 'checkbox':
	                return '多选题';
	                break;
	            case 'textarea':
	                return '自定义回答';
	                break;
	        }
	    }
	};

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(53)
	  , defined = __webpack_require__(10);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(42), __esModule: true };

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _Symbol = __webpack_require__(41)["default"];
	
	exports["default"] = function (obj) {
	  return obj && obj.constructor === _Symbol ? "symbol" : typeof obj;
	};
	
	exports.__esModule = true;

/***/ },
/* 9 */
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 10 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(5)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(3)
	  , core      = __webpack_require__(1)
	  , ctx       = __webpack_require__(49)
	  , PROTOTYPE = 'prototype';
	
	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && key in target;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(param){
	        return this instanceof C ? new C(param) : C(param);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    if(IS_PROTO)(exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
	  }
	};
	// type bitmap
	$export.F = 1;  // forced
	$export.G = 2;  // global
	$export.S = 4;  // static
	$export.P = 8;  // proto
	$export.B = 16; // bind
	$export.W = 32; // wrap
	module.exports = $export;

/***/ },
/* 13 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(12)
	  , core    = __webpack_require__(1)
	  , fails   = __webpack_require__(5);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(3)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 18 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var store  = __webpack_require__(17)('wks')
	  , uid    = __webpack_require__(18)
	  , Symbol = __webpack_require__(3).Symbol;
	module.exports = function(name){
	  return store[name] || (store[name] =
	    Symbol && Symbol[name] || (Symbol || uid)('Symbol.' + name));
	};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;"use strict";
	
	var _freeze = __webpack_require__(39);
	
	var _freeze2 = _interopRequireDefault(_freeze);
	
	var _create = __webpack_require__(38);
	
	var _create2 = _interopRequireDefault(_create);
	
	var _keys = __webpack_require__(40);
	
	var _keys2 = _interopRequireDefault(_keys);
	
	var _stringify = __webpack_require__(7);
	
	var _stringify2 = _interopRequireDefault(_stringify);
	
	var _typeof2 = __webpack_require__(8);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/*!
	 * vue-router v0.7.13
	 * (c) 2016 Evan You
	 * Released under the MIT License.
	 */
	!function (t, e) {
	  "object" == ( false ? "undefined" : (0, _typeof3.default)(exports)) && "undefined" != typeof module ? module.exports = e() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (e), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : t.VueRouter = e();
	}(undefined, function () {
	  "use strict";
	  function t(t, e, n) {
	    this.path = t, this.matcher = e, this.delegate = n;
	  }function e(t) {
	    this.routes = {}, this.children = {}, this.target = t;
	  }function n(e, r, i) {
	    return function (o, a) {
	      var s = e + o;return a ? void a(n(s, r, i)) : new t(e + o, r, i);
	    };
	  }function r(t, e, n) {
	    for (var r = 0, i = 0, o = t.length; o > i; i++) {
	      r += t[i].path.length;
	    }e = e.substr(r);var a = { path: e, handler: n };t.push(a);
	  }function i(t, e, n, o) {
	    var a = e.routes;for (var s in a) {
	      if (a.hasOwnProperty(s)) {
	        var h = t.slice();r(h, s, a[s]), e.children[s] ? i(h, e.children[s], n, o) : n.call(o, h);
	      }
	    }
	  }function o(t, r) {
	    var o = new e();t(n("", o, this.delegate)), i([], o, function (t) {
	      r ? r(this, t) : this.add(t);
	    }, this);
	  }function a(t) {
	    B || "undefined" == typeof console || console.error("[vue-router] " + t);
	  }function s(t, e) {
	    try {
	      return e ? decodeURIComponent(t) : decodeURI(t);
	    } catch (n) {
	      a("malformed URI" + (e ? " component: " : ": ") + t);
	    }
	  }function h(t) {
	    return "[object Array]" === Object.prototype.toString.call(t);
	  }function c(t) {
	    this.string = t;
	  }function u(t) {
	    this.name = t;
	  }function l(t) {
	    this.name = t;
	  }function p() {}function f(t, e, n) {
	    "/" === t.charAt(0) && (t = t.substr(1));var r = t.split("/"),
	        i = [];n.val = "";for (var o = 0, a = r.length; a > o; o++) {
	      var s,
	          h = r[o];(s = h.match(/^:([^\/]+)$/)) ? (i.push(new u(s[1])), e.push(s[1]), n.val += "3") : (s = h.match(/^\*([^\/]+)$/)) ? (i.push(new l(s[1])), n.val += "2", e.push(s[1])) : "" === h ? (i.push(new p()), n.val += "1") : (i.push(new c(h)), n.val += "4");
	    }return n.val = +n.val, i;
	  }function d(t) {
	    this.charSpec = t, this.nextStates = [];
	  }function v(t) {
	    return t.sort(function (t, e) {
	      return e.specificity.val - t.specificity.val;
	    });
	  }function g(t, e) {
	    for (var n = [], r = 0, i = t.length; i > r; r++) {
	      var o = t[r];n = n.concat(o.match(e));
	    }return n;
	  }function y(t) {
	    this.queryParams = t || {};
	  }function m(t, e, n) {
	    for (var r = t.handlers, i = t.regex, o = e.match(i), a = 1, s = new y(n), h = 0, c = r.length; c > h; h++) {
	      for (var u = r[h], l = u.names, p = {}, f = 0, d = l.length; d > f; f++) {
	        p[l[f]] = o[a++];
	      }s.push({ handler: u.handler, params: p, isDynamic: !!l.length });
	    }return s;
	  }function _(t, e) {
	    return e.eachChar(function (e) {
	      t = t.put(e);
	    }), t;
	  }function w(t) {
	    return t = t.replace(/\+/gm, "%20"), s(t, !0);
	  }function b(t) {
	    "undefined" != typeof console && console.error("[vue-router] " + t);
	  }function C(t, e, n) {
	    var r = t.match(/(\?.*)$/);if (r && (r = r[1], t = t.slice(0, -r.length)), "?" === e.charAt(0)) return t + e;var i = t.split("/");n && i[i.length - 1] || i.pop();for (var o = e.replace(/^\//, "").split("/"), a = 0; a < o.length; a++) {
	      var s = o[a];"." !== s && (".." === s ? i.pop() : i.push(s));
	    }return "" !== i[0] && i.unshift(""), i.join("/");
	  }function R(t) {
	    return t && "function" == typeof t.then;
	  }function A(t, e) {
	    var n = t && (t.$options || t.options);return n && n.route && n.route[e];
	  }function k(t, e) {
	    Y ? Y.$options.components._ = t.component : Y = { resolve: X.Vue.prototype._resolveComponent, $options: { components: { _: t.component } } }, Y.resolve("_", function (n) {
	      t.component = n, e(n);
	    });
	  }function $(t, e, n) {
	    return void 0 === e && (e = {}), t = t.replace(/:([^\/]+)/g, function (n, r) {
	      var i = e[r];return i || b('param "' + r + '" not found when generating path for "' + t + '" with params ' + (0, _stringify2.default)(e)), i || "";
	    }), n && (t += K(n)), t;
	  }function x(t, e, n) {
	    var r = t.childVM;if (!r || !e) return !1;if (t.Component !== e.component) return !1;var i = A(r, "canReuse");return "boolean" == typeof i ? i : i ? i.call(r, { to: n.to, from: n.from }) : !0;
	  }function E(t, e, n) {
	    var r = t.childVM,
	        i = A(r, "canDeactivate");i ? e.callHook(i, r, n, { expectBoolean: !0 }) : n();
	  }function V(t, e, n) {
	    k(t, function (t) {
	      if (!e.aborted) {
	        var r = A(t, "canActivate");r ? e.callHook(r, null, n, { expectBoolean: !0 }) : n();
	      }
	    });
	  }function S(t, e, n) {
	    var r = t.childVM,
	        i = A(r, "deactivate");i ? e.callHooks(i, r, n) : n();
	  }function P(t, e, n, r, i) {
	    var o = e.activateQueue[n];if (!o) return H(t), t._bound && t.setComponent(null), void (r && r());var a = t.Component = o.component,
	        s = A(a, "activate"),
	        h = A(a, "data"),
	        c = A(a, "waitForData");t.depth = n, t.activated = !1;var u = void 0,
	        l = !(!h || c);if (i = i && t.childVM && t.childVM.constructor === a) u = t.childVM, u.$loadingRouteData = l;else if (H(t), t.unbuild(!0), u = t.build({ _meta: { $loadingRouteData: l }, created: function created() {
	        this._routerView = t;
	      } }), t.keepAlive) {
	      u.$loadingRouteData = l;var p = u._keepAliveRouterView;p && (t.childView = p, u._keepAliveRouterView = null);
	    }var f = function f() {
	      u.$destroy();
	    },
	        d = function d() {
	      if (i) return void (r && r());var n = e.router;n._rendered || n._transitionOnLoad ? t.transition(u) : (t.setCurrent ? t.setCurrent(u) : t.childVM = u, u.$before(t.anchor, null, !1)), r && r();
	    },
	        v = function v() {
	      t.childView && P(t.childView, e, n + 1, null, i || t.keepAlive), d();
	    },
	        g = function g() {
	      t.activated = !0, h && c ? T(u, e, h, v, f) : (h && T(u, e, h), v());
	    };s ? e.callHooks(s, u, g, { cleanup: f, postActivate: !0 }) : g();
	  }function O(t, e) {
	    var n = t.childVM,
	        r = A(n, "data");r && T(n, e, r);
	  }function T(t, e, n, r, i) {
	    t.$loadingRouteData = !0, e.callHooks(n, t, function () {
	      t.$loadingRouteData = !1, t.$emit("route-data-loaded", t), r && r();
	    }, { cleanup: i, postActivate: !0, processData: function processData(e) {
	        var n = [];return j(e) && (0, _keys2.default)(e).forEach(function (r) {
	          var i = e[r];R(i) ? n.push(i.then(function (e) {
	            t.$set(r, e);
	          })) : t.$set(r, i);
	        }), n.length ? n[0].constructor.all(n) : void 0;
	      } });
	  }function H(t) {
	    t.keepAlive && t.childVM && t.childView && (t.childVM._keepAliveRouterView = t.childView), t.childView = null;
	  }function j(t) {
	    return "[object Object]" === Object.prototype.toString.call(t);
	  }function M(t) {
	    return "[object Object]" === Object.prototype.toString.call(t);
	  }function D(t) {
	    return t ? Array.prototype.slice.call(t) : [];
	  }function q(t) {
	    var e = t.util,
	        n = e.extend,
	        r = e.isArray,
	        i = e.defineReactive,
	        o = t.prototype._init;t.prototype._init = function (t) {
	      t = t || {};var e = t._parent || t.parent || this,
	          n = e.$router,
	          r = e.$route;n && (this.$router = n, n._children.push(this), this._defineMeta ? this._defineMeta("$route", r) : i(this, "$route", r)), o.call(this, t);
	    };var a = t.prototype._destroy;t.prototype._destroy = function () {
	      !this._isBeingDestroyed && this.$router && this.$router._children.$remove(this), a.apply(this, arguments);
	    };var s = t.config.optionMergeStrategies,
	        h = /^(data|activate|deactivate)$/;s && (s.route = function (t, e) {
	      if (!e) return t;if (!t) return e;var i = {};n(i, t);for (var o in e) {
	        var a = i[o],
	            s = e[o];a && h.test(o) ? i[o] = (r(a) ? a : [a]).concat(s) : i[o] = s;
	      }return i;
	    });
	  }function z(t) {
	    var e = t.util,
	        n = t.directive("_component") || t.internalDirectives.component,
	        r = e.extend({}, n);e.extend(r, { _isRouterView: !0, bind: function bind() {
	        var t = this.vm.$route;if (!t) return void b("<router-view> can only be used inside a router-enabled app.");this._isDynamicLiteral = !0, n.bind.call(this);for (var e = void 0, r = this.vm; r;) {
	          if (r._routerView) {
	            e = r._routerView;break;
	          }r = r.$parent;
	        }if (e) this.parentView = e, e.childView = this;else {
	          var i = t.router;i._rootView = this;
	        }var o = t.router._currentTransition;if (!e && o.done || e && e.activated) {
	          var a = e ? e.depth + 1 : 0;P(this, o, a);
	        }
	      }, unbind: function unbind() {
	        this.parentView && (this.parentView.childView = null), n.unbind.call(this);
	      } }), t.elementDirective("router-view", r);
	  }function Q(t) {
	    function e(t) {
	      return t.protocol === location.protocol && t.hostname === location.hostname && t.port === location.port;
	    }function n(t, e, n) {
	      if (e = e.trim(), -1 === e.indexOf(" ")) return void n(t, e);for (var r = e.split(/\s+/), i = 0, o = r.length; o > i; i++) {
	        n(t, r[i]);
	      }
	    }var r = t.util,
	        i = r.bind,
	        o = r.isObject,
	        a = r.addClass,
	        s = r.removeClass,
	        h = t.directive("on").priority,
	        c = "__vue-router-link-update__",
	        u = 0;t.directive("link-active", { priority: 9999, bind: function bind() {
	        for (var t = this, e = String(u++), n = this.el.querySelectorAll("[v-link]"), r = 0, i = n.length; i > r; r++) {
	          var o = n[r],
	              a = o.getAttribute(c),
	              s = a ? a + "," + e : e;o.setAttribute(c, s);
	        }this.vm.$on(c, this.cb = function (n, r) {
	          n.activeIds.indexOf(e) > -1 && n.updateClasses(r, t.el);
	        });
	      }, unbind: function unbind() {
	        this.vm.$off(c, this.cb);
	      } }), t.directive("link", { priority: h - 2, bind: function bind() {
	        var t = this.vm;if (!t.$route) return void b("v-link can only be used inside a router-enabled app.");this.router = t.$route.router, this.unwatch = t.$watch("$route", i(this.onRouteUpdate, this));var e = this.el.getAttribute(c);e && (this.el.removeAttribute(c), this.activeIds = e.split(",")), "A" === this.el.tagName && "_blank" === this.el.getAttribute("target") || (this.handler = i(this.onClick, this), this.el.addEventListener("click", this.handler));
	      }, update: function update(t) {
	        this.target = t, o(t) && (this.append = t.append, this.exact = t.exact, this.prevActiveClass = this.activeClass, this.activeClass = t.activeClass), this.onRouteUpdate(this.vm.$route);
	      }, onClick: function onClick(t) {
	        if (!(t.metaKey || t.ctrlKey || t.shiftKey || t.defaultPrevented || 0 !== t.button)) {
	          var n = this.target;if (n) t.preventDefault(), this.router.go(n);else {
	            for (var r = t.target; "A" !== r.tagName && r !== this.el;) {
	              r = r.parentNode;
	            }if ("A" === r.tagName && e(r)) {
	              t.preventDefault();var i = r.pathname;this.router.history.root && (i = i.replace(this.router.history.rootRE, "")), this.router.go({ path: i, replace: n && n.replace, append: n && n.append });
	            }
	          }
	        }
	      }, onRouteUpdate: function onRouteUpdate(t) {
	        var e = this.router.stringifyPath(this.target);this.path !== e && (this.path = e, this.updateActiveMatch(), this.updateHref()), this.activeIds ? this.vm.$emit(c, this, t.path) : this.updateClasses(t.path, this.el);
	      }, updateActiveMatch: function updateActiveMatch() {
	        this.activeRE = this.path && !this.exact ? new RegExp("^" + this.path.replace(/\/$/, "").replace(at, "").replace(ot, "\\$&") + "(\\/|$)") : null;
	      }, updateHref: function updateHref() {
	        if ("A" === this.el.tagName) {
	          var t = this.path,
	              e = this.router,
	              n = "/" === t.charAt(0),
	              r = t && ("hash" === e.mode || n) ? e.history.formatPath(t, this.append) : t;r ? this.el.href = r : this.el.removeAttribute("href");
	        }
	      }, updateClasses: function updateClasses(t, e) {
	        var r = this.activeClass || this.router._linkActiveClass;this.prevActiveClass && this.prevActiveClass !== r && n(e, this.prevActiveClass, s);var i = this.path.replace(at, "");t = t.replace(at, ""), this.exact ? i === t || "/" !== i.charAt(i.length - 1) && i === t.replace(it, "") ? n(e, r, a) : n(e, r, s) : this.activeRE && this.activeRE.test(t) ? n(e, r, a) : n(e, r, s);
	      }, unbind: function unbind() {
	        this.el.removeEventListener("click", this.handler), this.unwatch && this.unwatch();
	      } });
	  }function F(t, e) {
	    var n = e.component;ht.util.isPlainObject(n) && (n = e.component = ht.extend(n)), "function" != typeof n && (e.component = null, b('invalid component for route "' + t + '".'));
	  }var I = {};I.classCallCheck = function (t, e) {
	    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
	  }, t.prototype = { to: function to(t, e) {
	      var n = this.delegate;if (n && n.willAddRoute && (t = n.willAddRoute(this.matcher.target, t)), this.matcher.add(this.path, t), e) {
	        if (0 === e.length) throw new Error("You must have an argument in the function passed to `to`");this.matcher.addChild(this.path, t, e, this.delegate);
	      }return this;
	    } }, e.prototype = { add: function add(t, e) {
	      this.routes[t] = e;
	    }, addChild: function addChild(t, r, i, o) {
	      var a = new e(r);this.children[t] = a;var s = n(t, a, o);o && o.contextEntered && o.contextEntered(r, s), i(s);
	    } };var U = ["/", ".", "*", "+", "?", "|", "(", ")", "[", "]", "{", "}", "\\"],
	      L = new RegExp("(\\" + U.join("|\\") + ")", "g"),
	      B = !1;c.prototype = { eachChar: function eachChar(t) {
	      for (var e, n = this.string, r = 0, i = n.length; i > r; r++) {
	        e = n.charAt(r), t({ validChars: e });
	      }
	    }, regex: function regex() {
	      return this.string.replace(L, "\\$1");
	    }, generate: function generate() {
	      return this.string;
	    } }, u.prototype = { eachChar: function eachChar(t) {
	      t({ invalidChars: "/", repeat: !0 });
	    }, regex: function regex() {
	      return "([^/]+)";
	    }, generate: function generate(t) {
	      var e = t[this.name];return null == e ? ":" + this.name : e;
	    } }, l.prototype = { eachChar: function eachChar(t) {
	      t({ invalidChars: "", repeat: !0 });
	    }, regex: function regex() {
	      return "(.+)";
	    }, generate: function generate(t) {
	      var e = t[this.name];return null == e ? ":" + this.name : e;
	    } }, p.prototype = { eachChar: function eachChar() {}, regex: function regex() {
	      return "";
	    }, generate: function generate() {
	      return "";
	    } }, d.prototype = { get: function get(t) {
	      for (var e = this.nextStates, n = 0, r = e.length; r > n; n++) {
	        var i = e[n],
	            o = i.charSpec.validChars === t.validChars;if (o = o && i.charSpec.invalidChars === t.invalidChars) return i;
	      }
	    }, put: function put(t) {
	      var e;return (e = this.get(t)) ? e : (e = new d(t), this.nextStates.push(e), t.repeat && e.nextStates.push(e), e);
	    }, match: function match(t) {
	      for (var e, n, r, i = this.nextStates, o = [], a = 0, s = i.length; s > a; a++) {
	        e = i[a], n = e.charSpec, "undefined" != typeof (r = n.validChars) ? -1 !== r.indexOf(t) && o.push(e) : "undefined" != typeof (r = n.invalidChars) && -1 === r.indexOf(t) && o.push(e);
	      }return o;
	    } };var N = _create2.default || function (t) {
	    function e() {}return e.prototype = t, new e();
	  };y.prototype = N({ splice: Array.prototype.splice, slice: Array.prototype.slice, push: Array.prototype.push, length: 0, queryParams: null });var G = function G() {
	    this.rootState = new d(), this.names = {};
	  };G.prototype = { add: function add(t, e) {
	      for (var n, r = this.rootState, i = "^", o = {}, a = [], s = [], h = !0, c = 0, u = t.length; u > c; c++) {
	        var l = t[c],
	            d = [],
	            v = f(l.path, d, o);s = s.concat(v);for (var g = 0, y = v.length; y > g; g++) {
	          var m = v[g];m instanceof p || (h = !1, r = r.put({ validChars: "/" }), i += "/", r = _(r, m), i += m.regex());
	        }var w = { handler: l.handler, names: d };a.push(w);
	      }h && (r = r.put({ validChars: "/" }), i += "/"), r.handlers = a, r.regex = new RegExp(i + "$"), r.specificity = o, (n = e && e.as) && (this.names[n] = { segments: s, handlers: a });
	    }, handlersFor: function handlersFor(t) {
	      var e = this.names[t],
	          n = [];if (!e) throw new Error("There is no route named " + t);for (var r = 0, i = e.handlers.length; i > r; r++) {
	        n.push(e.handlers[r]);
	      }return n;
	    }, hasRoute: function hasRoute(t) {
	      return !!this.names[t];
	    }, generate: function generate(t, e) {
	      var n = this.names[t],
	          r = "";if (!n) throw new Error("There is no route named " + t);for (var i = n.segments, o = 0, a = i.length; a > o; o++) {
	        var s = i[o];s instanceof p || (r += "/", r += s.generate(e));
	      }return "/" !== r.charAt(0) && (r = "/" + r), e && e.queryParams && (r += this.generateQueryString(e.queryParams)), r;
	    }, generateQueryString: function generateQueryString(t) {
	      var e = [],
	          n = [];for (var r in t) {
	        t.hasOwnProperty(r) && n.push(r);
	      }n.sort();for (var i = 0, o = n.length; o > i; i++) {
	        r = n[i];var a = t[r];if (null != a) {
	          var s = encodeURIComponent(r);if (h(a)) for (var c = 0, u = a.length; u > c; c++) {
	            var l = r + "[]=" + encodeURIComponent(a[c]);e.push(l);
	          } else s += "=" + encodeURIComponent(a), e.push(s);
	        }
	      }return 0 === e.length ? "" : "?" + e.join("&");
	    }, parseQueryString: function parseQueryString(t) {
	      for (var e = t.split("&"), n = {}, r = 0; r < e.length; r++) {
	        var i,
	            o = e[r].split("="),
	            a = w(o[0]),
	            s = a.length,
	            h = !1;1 === o.length ? i = "true" : (s > 2 && "[]" === a.slice(s - 2) && (h = !0, a = a.slice(0, s - 2), n[a] || (n[a] = [])), i = o[1] ? w(o[1]) : ""), h ? n[a].push(i) : n[a] = i;
	      }return n;
	    }, recognize: function recognize(t, e) {
	      B = e;var n,
	          r,
	          i,
	          o,
	          a = [this.rootState],
	          h = {},
	          c = !1;if (o = t.indexOf("?"), -1 !== o) {
	        var u = t.substr(o + 1, t.length);t = t.substr(0, o), u && (h = this.parseQueryString(u));
	      }if (t = s(t)) {
	        for ("/" !== t.charAt(0) && (t = "/" + t), n = t.length, n > 1 && "/" === t.charAt(n - 1) && (t = t.substr(0, n - 1), c = !0), r = 0, i = t.length; i > r && (a = g(a, t.charAt(r)), a.length); r++) {}var l = [];for (r = 0, i = a.length; i > r; r++) {
	          a[r].handlers && l.push(a[r]);
	        }a = v(l);var p = l[0];return p && p.handlers ? (c && "(.+)$" === p.regex.source.slice(-5) && (t += "/"), m(p, t, h)) : void 0;
	      }
	    } }, G.prototype.map = o;var K = G.prototype.generateQueryString,
	      X = {},
	      Y = void 0,
	      J = /#.*$/,
	      W = function () {
	    function t(e) {
	      var n = e.root,
	          r = e.onChange;I.classCallCheck(this, t), n && "/" !== n ? ("/" !== n.charAt(0) && (n = "/" + n), this.root = n.replace(/\/$/, ""), this.rootRE = new RegExp("^\\" + this.root)) : this.root = null, this.onChange = r;var i = document.querySelector("base");this.base = i && i.getAttribute("href");
	    }return t.prototype.start = function () {
	      var t = this;this.listener = function (e) {
	        var n = location.pathname + location.search;t.root && (n = n.replace(t.rootRE, "")), t.onChange(n, e && e.state, location.hash);
	      }, window.addEventListener("popstate", this.listener), this.listener();
	    }, t.prototype.stop = function () {
	      window.removeEventListener("popstate", this.listener);
	    }, t.prototype.go = function (t, e, n) {
	      var r = this.formatPath(t, n);e ? history.replaceState({}, "", r) : (history.replaceState({ pos: { x: window.pageXOffset, y: window.pageYOffset } }, "", location.href), history.pushState({}, "", r));var i = t.match(J),
	          o = i && i[0];t = r.replace(J, "").replace(this.rootRE, ""), this.onChange(t, null, o);
	    }, t.prototype.formatPath = function (t, e) {
	      return "/" === t.charAt(0) ? this.root ? this.root + "/" + t.replace(/^\//, "") : t : C(this.base || location.pathname, t, e);
	    }, t;
	  }(),
	      Z = function () {
	    function t(e) {
	      var n = e.hashbang,
	          r = e.onChange;I.classCallCheck(this, t), this.hashbang = n, this.onChange = r;
	    }return t.prototype.start = function () {
	      var t = this;this.listener = function () {
	        var e = location.hash,
	            n = e.replace(/^#!?/, "");"/" !== n.charAt(0) && (n = "/" + n);var r = t.formatPath(n);if (r !== e) return void location.replace(r);var i = location.search && e.indexOf("?") > -1 ? "&" + location.search.slice(1) : location.search;t.onChange(e.replace(/^#!?/, "") + i);
	      }, window.addEventListener("hashchange", this.listener), this.listener();
	    }, t.prototype.stop = function () {
	      window.removeEventListener("hashchange", this.listener);
	    }, t.prototype.go = function (t, e, n) {
	      t = this.formatPath(t, n), e ? location.replace(t) : location.hash = t;
	    }, t.prototype.formatPath = function (t, e) {
	      var n = "/" === t.charAt(0),
	          r = "#" + (this.hashbang ? "!" : "");return n ? r + t : r + C(location.hash.replace(/^#!?/, ""), t, e);
	    }, t;
	  }(),
	      tt = function () {
	    function t(e) {
	      var n = e.onChange;I.classCallCheck(this, t), this.onChange = n, this.currentPath = "/";
	    }return t.prototype.start = function () {
	      this.onChange("/");
	    }, t.prototype.stop = function () {}, t.prototype.go = function (t, e, n) {
	      t = this.currentPath = this.formatPath(t, n), this.onChange(t);
	    }, t.prototype.formatPath = function (t, e) {
	      return "/" === t.charAt(0) ? t : C(this.currentPath, t, e);
	    }, t;
	  }(),
	      et = function () {
	    function t(e, n, r) {
	      I.classCallCheck(this, t), this.router = e, this.to = n, this.from = r, this.next = null, this.aborted = !1, this.done = !1;
	    }return t.prototype.abort = function () {
	      if (!this.aborted) {
	        this.aborted = !0;var t = !this.from.path && "/" === this.to.path;t || this.router.replace(this.from.path || "/");
	      }
	    }, t.prototype.redirect = function (t) {
	      this.aborted || (this.aborted = !0, "string" == typeof t ? t = $(t, this.to.params, this.to.query) : (t.params = t.params || this.to.params, t.query = t.query || this.to.query), this.router.replace(t));
	    }, t.prototype.start = function (t) {
	      for (var e = this, n = [], r = this.router._rootView; r;) {
	        n.unshift(r), r = r.childView;
	      }var i = n.slice().reverse(),
	          o = this.activateQueue = D(this.to.matched).map(function (t) {
	        return t.handler;
	      }),
	          a = void 0,
	          s = void 0;for (a = 0; a < i.length && x(i[a], o[a], e); a++) {}a > 0 && (s = i.slice(0, a), n = i.slice(a).reverse(), o = o.slice(a)), e.runQueue(n, E, function () {
	        e.runQueue(o, V, function () {
	          e.runQueue(n, S, function () {
	            if (e.router._onTransitionValidated(e), s && s.forEach(function (t) {
	              return O(t, e);
	            }), n.length) {
	              var r = n[n.length - 1],
	                  i = s ? s.length : 0;P(r, e, i, t);
	            } else t();
	          });
	        });
	      });
	    }, t.prototype.runQueue = function (t, e, n) {
	      function r(o) {
	        o >= t.length ? n() : e(t[o], i, function () {
	          r(o + 1);
	        });
	      }var i = this;r(0);
	    }, t.prototype.callHook = function (t, e, n) {
	      var r = arguments.length <= 3 || void 0 === arguments[3] ? {} : arguments[3],
	          i = r.expectBoolean,
	          o = void 0 === i ? !1 : i,
	          a = r.postActivate,
	          s = void 0 === a ? !1 : a,
	          h = r.processData,
	          c = r.cleanup,
	          u = this,
	          l = !1,
	          p = function p() {
	        c && c(), u.abort();
	      },
	          f = function f(t) {
	        if (s ? v() : p(), t && !u.router._suppress) throw b("Uncaught error during transition: "), t instanceof Error ? t : new Error(t);
	      },
	          d = function d(t) {
	        try {
	          f(t);
	        } catch (e) {
	          setTimeout(function () {
	            throw e;
	          }, 0);
	        }
	      },
	          v = function v() {
	        return l ? void b("transition.next() should be called only once.") : (l = !0, u.aborted ? void (c && c()) : void (n && n()));
	      },
	          g = function g(e) {
	        "boolean" == typeof e ? e ? v() : p() : R(e) ? e.then(function (t) {
	          t ? v() : p();
	        }, d) : t.length || v();
	      },
	          y = function y(t) {
	        var e = void 0;try {
	          e = h(t);
	        } catch (n) {
	          return f(n);
	        }R(e) ? e.then(v, d) : v();
	      },
	          m = { to: u.to, from: u.from, abort: p, next: h ? y : v, redirect: function redirect() {
	          u.redirect.apply(u, arguments);
	        } },
	          _ = void 0;try {
	        _ = t.call(e, m);
	      } catch (w) {
	        return f(w);
	      }o ? g(_) : R(_) ? h ? _.then(y, d) : _.then(v, d) : h && M(_) ? y(_) : t.length || v();
	    }, t.prototype.callHooks = function (t, e, n, r) {
	      var i = this;Array.isArray(t) ? this.runQueue(t, function (t, n, o) {
	        i.aborted || i.callHook(t, e, o, r);
	      }, n) : this.callHook(t, e, n, r);
	    }, t;
	  }(),
	      nt = /^(component|subRoutes|fullPath)$/,
	      rt = function ut(t, e) {
	    var n = this;I.classCallCheck(this, ut);var r = e._recognizer.recognize(t);r && ([].forEach.call(r, function (t) {
	      for (var e in t.handler) {
	        nt.test(e) || (n[e] = t.handler[e]);
	      }
	    }), this.query = r.queryParams, this.params = [].reduce.call(r, function (t, e) {
	      if (e.params) for (var n in e.params) {
	        t[n] = e.params[n];
	      }return t;
	    }, {})), this.path = t, this.matched = r || e._notFoundHandler, Object.defineProperty(this, "router", { enumerable: !1, value: e }), (0, _freeze2.default)(this);
	  },
	      it = /\/$/,
	      ot = /[-.*+?^${}()|[\]\/\\]/g,
	      at = /\?.*$/,
	      st = { "abstract": tt, hash: Z, html5: W },
	      ht = void 0,
	      ct = function () {
	    function t() {
	      var e = this,
	          n = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
	          r = n.hashbang,
	          i = void 0 === r ? !0 : r,
	          o = n["abstract"],
	          a = void 0 === o ? !1 : o,
	          s = n.history,
	          h = void 0 === s ? !1 : s,
	          c = n.saveScrollPosition,
	          u = void 0 === c ? !1 : c,
	          l = n.transitionOnLoad,
	          p = void 0 === l ? !1 : l,
	          f = n.suppressTransitionError,
	          d = void 0 === f ? !1 : f,
	          v = n.root,
	          g = void 0 === v ? null : v,
	          y = n.linkActiveClass,
	          m = void 0 === y ? "v-link-active" : y;if (I.classCallCheck(this, t), !t.installed) throw new Error("Please install the Router with Vue.use() before creating an instance.");this.app = null, this._children = [], this._recognizer = new G(), this._guardRecognizer = new G(), this._started = !1, this._startCb = null, this._currentRoute = {}, this._currentTransition = null, this._previousTransition = null, this._notFoundHandler = null, this._notFoundRedirect = null, this._beforeEachHooks = [], this._afterEachHooks = [], this._rendered = !1, this._transitionOnLoad = p, this._root = g, this._abstract = a, this._hashbang = i;var _ = "undefined" != typeof window && window.history && window.history.pushState;this._history = h && _, this._historyFallback = h && !_;var w = ht.util.inBrowser;this.mode = !w || this._abstract ? "abstract" : this._history ? "html5" : "hash";var b = st[this.mode];this.history = new b({ root: g, hashbang: this._hashbang, onChange: function onChange(t, n, r) {
	          e._match(t, n, r);
	        } }), this._saveScrollPosition = u, this._linkActiveClass = m, this._suppress = d;
	    }return t.prototype.map = function (t) {
	      for (var e in t) {
	        this.on(e, t[e]);
	      }return this;
	    }, t.prototype.on = function (t, e) {
	      return "*" === t ? this._notFound(e) : this._addRoute(t, e, []), this;
	    }, t.prototype.redirect = function (t) {
	      for (var e in t) {
	        this._addRedirect(e, t[e]);
	      }return this;
	    }, t.prototype.alias = function (t) {
	      for (var e in t) {
	        this._addAlias(e, t[e]);
	      }return this;
	    }, t.prototype.beforeEach = function (t) {
	      return this._beforeEachHooks.push(t), this;
	    }, t.prototype.afterEach = function (t) {
	      return this._afterEachHooks.push(t), this;
	    }, t.prototype.go = function (t) {
	      var e = !1,
	          n = !1;ht.util.isObject(t) && (e = t.replace, n = t.append), t = this.stringifyPath(t), t && this.history.go(t, e, n);
	    }, t.prototype.replace = function (t) {
	      "string" == typeof t && (t = { path: t }), t.replace = !0, this.go(t);
	    }, t.prototype.start = function (t, e, n) {
	      if (this._started) return void b("already started.");if (this._started = !0, this._startCb = n, !this.app) {
	        if (!t || !e) throw new Error("Must start vue-router with a component and a root container.");if (t instanceof ht) throw new Error("Must start vue-router with a component, not a Vue instance.");this._appContainer = e;var r = this._appConstructor = "function" == typeof t ? t : ht.extend(t);r.options.name = r.options.name || "RouterApp";
	      }if (this._historyFallback) {
	        var i = window.location,
	            o = new W({ root: this._root }),
	            a = o.root ? i.pathname.replace(o.rootRE, "") : i.pathname;if (a && "/" !== a) return void i.assign((o.root || "") + "/" + this.history.formatPath(a) + i.search);
	      }this.history.start();
	    }, t.prototype.stop = function () {
	      this.history.stop(), this._started = !1;
	    }, t.prototype.stringifyPath = function (t) {
	      var e = "";if (t && "object" == (typeof t === "undefined" ? "undefined" : (0, _typeof3.default)(t))) {
	        if (t.name) {
	          var n = ht.util.extend,
	              r = this._currentTransition && this._currentTransition.to.params,
	              i = t.params || {},
	              o = r ? n(n({}, r), i) : i;e = encodeURI(this._recognizer.generate(t.name, o));
	        } else t.path && (e = encodeURI(t.path));if (t.query) {
	          var a = this._recognizer.generateQueryString(t.query);e += e.indexOf("?") > -1 ? "&" + a.slice(1) : a;
	        }
	      } else e = encodeURI(t ? t + "" : "");return e;
	    }, t.prototype._addRoute = function (t, e, n) {
	      if (F(t, e), e.path = t, e.fullPath = (n.reduce(function (t, e) {
	        return t + e.path;
	      }, "") + t).replace("//", "/"), n.push({ path: t, handler: e }), this._recognizer.add(n, { as: e.name }), e.subRoutes) for (var r in e.subRoutes) {
	        this._addRoute(r, e.subRoutes[r], n.slice());
	      }
	    }, t.prototype._notFound = function (t) {
	      F("*", t), this._notFoundHandler = [{ handler: t }];
	    }, t.prototype._addRedirect = function (t, e) {
	      "*" === t ? this._notFoundRedirect = e : this._addGuard(t, e, this.replace);
	    }, t.prototype._addAlias = function (t, e) {
	      this._addGuard(t, e, this._match);
	    }, t.prototype._addGuard = function (t, e, n) {
	      var r = this;this._guardRecognizer.add([{ path: t, handler: function handler(t, i) {
	          var o = $(e, t.params, i);n.call(r, o);
	        } }]);
	    }, t.prototype._checkGuard = function (t) {
	      var e = this._guardRecognizer.recognize(t, !0);return e ? (e[0].handler(e[0], e.queryParams), !0) : this._notFoundRedirect && (e = this._recognizer.recognize(t), !e) ? (this.replace(this._notFoundRedirect), !0) : void 0;
	    }, t.prototype._match = function (t, e, n) {
	      var r = this;if (!this._checkGuard(t)) {
	        var i = this._currentRoute,
	            o = this._currentTransition;if (o) {
	          if (o.to.path === t) return;if (i.path === t) return o.aborted = !0, void (this._currentTransition = this._prevTransition);o.aborted = !0;
	        }var a = new rt(t, this),
	            s = new et(this, a, i);this._prevTransition = o, this._currentTransition = s, this.app || !function () {
	          var t = r;r.app = new r._appConstructor({ el: r._appContainer, created: function created() {
	              this.$router = t;
	            }, _meta: { $route: a } });
	        }();var h = this._beforeEachHooks,
	            c = function c() {
	          s.start(function () {
	            r._postTransition(a, e, n);
	          });
	        };h.length ? s.runQueue(h, function (t, e, n) {
	          s === r._currentTransition && s.callHook(t, null, n, { expectBoolean: !0 });
	        }, c) : c(), !this._rendered && this._startCb && this._startCb.call(null), this._rendered = !0;
	      }
	    }, t.prototype._onTransitionValidated = function (t) {
	      var e = this._currentRoute = t.to;this.app.$route !== e && (this.app.$route = e, this._children.forEach(function (t) {
	        t.$route = e;
	      })), this._afterEachHooks.length && this._afterEachHooks.forEach(function (e) {
	        return e.call(null, { to: t.to, from: t.from });
	      }), this._currentTransition.done = !0;
	    }, t.prototype._postTransition = function (t, e, n) {
	      var r = e && e.pos;r && this._saveScrollPosition ? ht.nextTick(function () {
	        window.scrollTo(r.x, r.y);
	      }) : n && ht.nextTick(function () {
	        var t = document.getElementById(n.slice(1));t && window.scrollTo(window.scrollX, t.offsetTop);
	      });
	    }, t;
	  }();return ct.installed = !1, ct.install = function (t) {
	    return ct.installed ? void b("already installed.") : (ht = t, q(ht), z(ht), Q(ht), X.Vue = ht, void (ct.installed = !0));
	  }, "undefined" != typeof window && window.Vue && window.Vue.use(ct), ct;
	});

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(31)
	__vue_template__ = __webpack_require__(68)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/lay/aboutWeb/webstrom/baiduClass/classTo50/src/components/app.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(35)
	__vue_template__ = __webpack_require__(72)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/lay/aboutWeb/webstrom/baiduClass/classTo50/src/views/creat.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(36)
	__vue_template__ = __webpack_require__(73)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/lay/aboutWeb/webstrom/baiduClass/classTo50/src/views/list.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(37)
	__vue_template__ = __webpack_require__(74)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/lay/aboutWeb/webstrom/baiduClass/classTo50/src/views/see.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/*!
	 * Vue.js v1.0.15
	 * (c) 2016 Evan You
	 * Released under the MIT License.
	 */
	'use strict';
	
	function set(obj, key, val) {
	  if (hasOwn(obj, key)) {
	    obj[key] = val;
	    return;
	  }
	  if (obj._isVue) {
	    set(obj._data, key, val);
	    return;
	  }
	  var ob = obj.__ob__;
	  if (!ob) {
	    obj[key] = val;
	    return;
	  }
	  ob.convert(key, val);
	  ob.dep.notify();
	  if (ob.vms) {
	    var i = ob.vms.length;
	    while (i--) {
	      var vm = ob.vms[i];
	      vm._proxy(key);
	      vm._digest();
	    }
	  }
	  return val;
	}
	
	/**
	 * Delete a property and trigger change if necessary.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 */
	
	function del(obj, key) {
	  if (!hasOwn(obj, key)) {
	    return;
	  }
	  delete obj[key];
	  var ob = obj.__ob__;
	  if (!ob) {
	    return;
	  }
	  ob.dep.notify();
	  if (ob.vms) {
	    var i = ob.vms.length;
	    while (i--) {
	      var vm = ob.vms[i];
	      vm._unproxy(key);
	      vm._digest();
	    }
	  }
	}
	
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	/**
	 * Check whether the object has the property.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @return {Boolean}
	 */
	
	function hasOwn(obj, key) {
	  return hasOwnProperty.call(obj, key);
	}
	
	/**
	 * Check if an expression is a literal value.
	 *
	 * @param {String} exp
	 * @return {Boolean}
	 */
	
	var literalValueRE = /^\s?(true|false|[\d\.]+|'[^']*'|"[^"]*")\s?$/;
	
	function isLiteral(exp) {
	  return literalValueRE.test(exp);
	}
	
	/**
	 * Check if a string starts with $ or _
	 *
	 * @param {String} str
	 * @return {Boolean}
	 */
	
	function isReserved(str) {
	  var c = (str + '').charCodeAt(0);
	  return c === 0x24 || c === 0x5F;
	}
	
	/**
	 * Guard text output, make sure undefined outputs
	 * empty string
	 *
	 * @param {*} value
	 * @return {String}
	 */
	
	function _toString(value) {
	  return value == null ? '' : value.toString();
	}
	
	/**
	 * Check and convert possible numeric strings to numbers
	 * before setting back to data
	 *
	 * @param {*} value
	 * @return {*|Number}
	 */
	
	function toNumber(value) {
	  if (typeof value !== 'string') {
	    return value;
	  } else {
	    var parsed = Number(value);
	    return isNaN(parsed) ? value : parsed;
	  }
	}
	
	/**
	 * Convert string boolean literals into real booleans.
	 *
	 * @param {*} value
	 * @return {*|Boolean}
	 */
	
	function toBoolean(value) {
	  return value === 'true' ? true : value === 'false' ? false : value;
	}
	
	/**
	 * Strip quotes from a string
	 *
	 * @param {String} str
	 * @return {String | false}
	 */
	
	function stripQuotes(str) {
	  var a = str.charCodeAt(0);
	  var b = str.charCodeAt(str.length - 1);
	  return a === b && (a === 0x22 || a === 0x27) ? str.slice(1, -1) : str;
	}
	
	/**
	 * Camelize a hyphen-delmited string.
	 *
	 * @param {String} str
	 * @return {String}
	 */
	
	var camelizeRE = /-(\w)/g;
	
	function camelize(str) {
	  return str.replace(camelizeRE, toUpper);
	}
	
	function toUpper(_, c) {
	  return c ? c.toUpperCase() : '';
	}
	
	/**
	 * Hyphenate a camelCase string.
	 *
	 * @param {String} str
	 * @return {String}
	 */
	
	var hyphenateRE = /([a-z\d])([A-Z])/g;
	
	function hyphenate(str) {
	  return str.replace(hyphenateRE, '$1-$2').toLowerCase();
	}
	
	/**
	 * Converts hyphen/underscore/slash delimitered names into
	 * camelized classNames.
	 *
	 * e.g. my-component => MyComponent
	 *      some_else    => SomeElse
	 *      some/comp    => SomeComp
	 *
	 * @param {String} str
	 * @return {String}
	 */
	
	var classifyRE = /(?:^|[-_\/])(\w)/g;
	
	function classify(str) {
	  return str.replace(classifyRE, toUpper);
	}
	
	/**
	 * Simple bind, faster than native
	 *
	 * @param {Function} fn
	 * @param {Object} ctx
	 * @return {Function}
	 */
	
	function bind$1(fn, ctx) {
	  return function (a) {
	    var l = arguments.length;
	    return l ? l > 1 ? fn.apply(ctx, arguments) : fn.call(ctx, a) : fn.call(ctx);
	  };
	}
	
	/**
	 * Convert an Array-like object to a real Array.
	 *
	 * @param {Array-like} list
	 * @param {Number} [start] - start index
	 * @return {Array}
	 */
	
	function toArray(list, start) {
	  start = start || 0;
	  var i = list.length - start;
	  var ret = new Array(i);
	  while (i--) {
	    ret[i] = list[i + start];
	  }
	  return ret;
	}
	
	/**
	 * Mix properties into target object.
	 *
	 * @param {Object} to
	 * @param {Object} from
	 */
	
	function extend(to, from) {
	  var keys = Object.keys(from);
	  var i = keys.length;
	  while (i--) {
	    to[keys[i]] = from[keys[i]];
	  }
	  return to;
	}
	
	/**
	 * Quick object check - this is primarily used to tell
	 * Objects from primitive values when we know the value
	 * is a JSON-compliant type.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */
	
	function isObject(obj) {
	  return obj !== null && typeof obj === 'object';
	}
	
	/**
	 * Strict object type check. Only returns true
	 * for plain JavaScript objects.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */
	
	var toString = Object.prototype.toString;
	var OBJECT_STRING = '[object Object]';
	
	function isPlainObject(obj) {
	  return toString.call(obj) === OBJECT_STRING;
	}
	
	/**
	 * Array type check.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */
	
	var isArray = Array.isArray;
	
	/**
	 * Define a non-enumerable property
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @param {*} val
	 * @param {Boolean} [enumerable]
	 */
	
	function def(obj, key, val, enumerable) {
	  Object.defineProperty(obj, key, {
	    value: val,
	    enumerable: !!enumerable,
	    writable: true,
	    configurable: true
	  });
	}
	
	/**
	 * Debounce a function so it only gets called after the
	 * input stops arriving after the given wait period.
	 *
	 * @param {Function} func
	 * @param {Number} wait
	 * @return {Function} - the debounced function
	 */
	
	function _debounce(func, wait) {
	  var timeout, args, context, timestamp, result;
	  var later = function later() {
	    var last = Date.now() - timestamp;
	    if (last < wait && last >= 0) {
	      timeout = setTimeout(later, wait - last);
	    } else {
	      timeout = null;
	      result = func.apply(context, args);
	      if (!timeout) context = args = null;
	    }
	  };
	  return function () {
	    context = this;
	    args = arguments;
	    timestamp = Date.now();
	    if (!timeout) {
	      timeout = setTimeout(later, wait);
	    }
	    return result;
	  };
	}
	
	/**
	 * Manual indexOf because it's slightly faster than
	 * native.
	 *
	 * @param {Array} arr
	 * @param {*} obj
	 */
	
	function indexOf(arr, obj) {
	  var i = arr.length;
	  while (i--) {
	    if (arr[i] === obj) return i;
	  }
	  return -1;
	}
	
	/**
	 * Make a cancellable version of an async callback.
	 *
	 * @param {Function} fn
	 * @return {Function}
	 */
	
	function cancellable(fn) {
	  var cb = function cb() {
	    if (!cb.cancelled) {
	      return fn.apply(this, arguments);
	    }
	  };
	  cb.cancel = function () {
	    cb.cancelled = true;
	  };
	  return cb;
	}
	
	/**
	 * Check if two values are loosely equal - that is,
	 * if they are plain objects, do they have the same shape?
	 *
	 * @param {*} a
	 * @param {*} b
	 * @return {Boolean}
	 */
	
	function looseEqual(a, b) {
	  /* eslint-disable eqeqeq */
	  return a == b || (isObject(a) && isObject(b) ? JSON.stringify(a) === JSON.stringify(b) : false);
	  /* eslint-enable eqeqeq */
	}
	
	var hasProto = ('__proto__' in {});
	
	// Browser environment sniffing
	var inBrowser = typeof window !== 'undefined' && Object.prototype.toString.call(window) !== '[object Object]';
	
	var isIE9 = inBrowser && navigator.userAgent.toLowerCase().indexOf('msie 9.0') > 0;
	
	var isAndroid = inBrowser && navigator.userAgent.toLowerCase().indexOf('android') > 0;
	
	var transitionProp = undefined;
	var transitionEndEvent = undefined;
	var animationProp = undefined;
	var animationEndEvent = undefined;
	
	// Transition property/event sniffing
	if (inBrowser && !isIE9) {
	  var isWebkitTrans = window.ontransitionend === undefined && window.onwebkittransitionend !== undefined;
	  var isWebkitAnim = window.onanimationend === undefined && window.onwebkitanimationend !== undefined;
	  transitionProp = isWebkitTrans ? 'WebkitTransition' : 'transition';
	  transitionEndEvent = isWebkitTrans ? 'webkitTransitionEnd' : 'transitionend';
	  animationProp = isWebkitAnim ? 'WebkitAnimation' : 'animation';
	  animationEndEvent = isWebkitAnim ? 'webkitAnimationEnd' : 'animationend';
	}
	
	/**
	 * Defer a task to execute it asynchronously. Ideally this
	 * should be executed as a microtask, so we leverage
	 * MutationObserver if it's available, and fallback to
	 * setTimeout(0).
	 *
	 * @param {Function} cb
	 * @param {Object} ctx
	 */
	
	var nextTick = (function () {
	  var callbacks = [];
	  var pending = false;
	  var timerFunc;
	  function nextTickHandler() {
	    pending = false;
	    var copies = callbacks.slice(0);
	    callbacks = [];
	    for (var i = 0; i < copies.length; i++) {
	      copies[i]();
	    }
	  }
	  /* istanbul ignore if */
	  if (typeof MutationObserver !== 'undefined') {
	    var counter = 1;
	    var observer = new MutationObserver(nextTickHandler);
	    var textNode = document.createTextNode(counter);
	    observer.observe(textNode, {
	      characterData: true
	    });
	    timerFunc = function () {
	      counter = (counter + 1) % 2;
	      textNode.data = counter;
	    };
	  } else {
	    timerFunc = setTimeout;
	  }
	  return function (cb, ctx) {
	    var func = ctx ? function () {
	      cb.call(ctx);
	    } : cb;
	    callbacks.push(func);
	    if (pending) return;
	    pending = true;
	    timerFunc(nextTickHandler, 0);
	  };
	})();
	
	function Cache(limit) {
	  this.size = 0;
	  this.limit = limit;
	  this.head = this.tail = undefined;
	  this._keymap = Object.create(null);
	}
	
	var p = Cache.prototype;
	
	/**
	 * Put <value> into the cache associated with <key>.
	 * Returns the entry which was removed to make room for
	 * the new entry. Otherwise undefined is returned.
	 * (i.e. if there was enough room already).
	 *
	 * @param {String} key
	 * @param {*} value
	 * @return {Entry|undefined}
	 */
	
	p.put = function (key, value) {
	  var removed;
	  if (this.size === this.limit) {
	    removed = this.shift();
	  }
	
	  var entry = this.get(key, true);
	  if (!entry) {
	    entry = {
	      key: key
	    };
	    this._keymap[key] = entry;
	    if (this.tail) {
	      this.tail.newer = entry;
	      entry.older = this.tail;
	    } else {
	      this.head = entry;
	    }
	    this.tail = entry;
	    this.size++;
	  }
	  entry.value = value;
	
	  return removed;
	};
	
	/**
	 * Purge the least recently used (oldest) entry from the
	 * cache. Returns the removed entry or undefined if the
	 * cache was empty.
	 */
	
	p.shift = function () {
	  var entry = this.head;
	  if (entry) {
	    this.head = this.head.newer;
	    this.head.older = undefined;
	    entry.newer = entry.older = undefined;
	    this._keymap[entry.key] = undefined;
	    this.size--;
	  }
	  return entry;
	};
	
	/**
	 * Get and register recent use of <key>. Returns the value
	 * associated with <key> or undefined if not in cache.
	 *
	 * @param {String} key
	 * @param {Boolean} returnEntry
	 * @return {Entry|*}
	 */
	
	p.get = function (key, returnEntry) {
	  var entry = this._keymap[key];
	  if (entry === undefined) return;
	  if (entry === this.tail) {
	    return returnEntry ? entry : entry.value;
	  }
	  // HEAD--------------TAIL
	  //   <.older   .newer>
	  //  <--- add direction --
	  //   A  B  C  <D>  E
	  if (entry.newer) {
	    if (entry === this.head) {
	      this.head = entry.newer;
	    }
	    entry.newer.older = entry.older; // C <-- E.
	  }
	  if (entry.older) {
	    entry.older.newer = entry.newer; // C. --> E
	  }
	  entry.newer = undefined; // D --x
	  entry.older = this.tail; // D. --> E
	  if (this.tail) {
	    this.tail.newer = entry; // E. <-- D
	  }
	  this.tail = entry;
	  return returnEntry ? entry : entry.value;
	};
	
	var cache$1 = new Cache(1000);
	var filterTokenRE = /[^\s'"]+|'[^']*'|"[^"]*"/g;
	var reservedArgRE = /^in$|^-?\d+/;
	
	/**
	 * Parser state
	 */
	
	var str;
	var dir;
	var c;
	var prev;
	var i;
	var l;
	var lastFilterIndex;
	var inSingle;
	var inDouble;
	var curly;
	var square;
	var paren;
	/**
	 * Push a filter to the current directive object
	 */
	
	function pushFilter() {
	  var exp = str.slice(lastFilterIndex, i).trim();
	  var filter;
	  if (exp) {
	    filter = {};
	    var tokens = exp.match(filterTokenRE);
	    filter.name = tokens[0];
	    if (tokens.length > 1) {
	      filter.args = tokens.slice(1).map(processFilterArg);
	    }
	  }
	  if (filter) {
	    (dir.filters = dir.filters || []).push(filter);
	  }
	  lastFilterIndex = i + 1;
	}
	
	/**
	 * Check if an argument is dynamic and strip quotes.
	 *
	 * @param {String} arg
	 * @return {Object}
	 */
	
	function processFilterArg(arg) {
	  if (reservedArgRE.test(arg)) {
	    return {
	      value: toNumber(arg),
	      dynamic: false
	    };
	  } else {
	    var stripped = stripQuotes(arg);
	    var dynamic = stripped === arg;
	    return {
	      value: dynamic ? arg : stripped,
	      dynamic: dynamic
	    };
	  }
	}
	
	/**
	 * Parse a directive value and extract the expression
	 * and its filters into a descriptor.
	 *
	 * Example:
	 *
	 * "a + 1 | uppercase" will yield:
	 * {
	 *   expression: 'a + 1',
	 *   filters: [
	 *     { name: 'uppercase', args: null }
	 *   ]
	 * }
	 *
	 * @param {String} str
	 * @return {Object}
	 */
	
	function parseDirective(s) {
	
	  var hit = cache$1.get(s);
	  if (hit) {
	    return hit;
	  }
	
	  // reset parser state
	  str = s;
	  inSingle = inDouble = false;
	  curly = square = paren = 0;
	  lastFilterIndex = 0;
	  dir = {};
	
	  for (i = 0, l = str.length; i < l; i++) {
	    prev = c;
	    c = str.charCodeAt(i);
	    if (inSingle) {
	      // check single quote
	      if (c === 0x27 && prev !== 0x5C) inSingle = !inSingle;
	    } else if (inDouble) {
	      // check double quote
	      if (c === 0x22 && prev !== 0x5C) inDouble = !inDouble;
	    } else if (c === 0x7C && // pipe
	    str.charCodeAt(i + 1) !== 0x7C && str.charCodeAt(i - 1) !== 0x7C) {
	      if (dir.expression == null) {
	        // first filter, end of expression
	        lastFilterIndex = i + 1;
	        dir.expression = str.slice(0, i).trim();
	      } else {
	        // already has filter
	        pushFilter();
	      }
	    } else {
	      switch (c) {
	        case 0x22:
	          inDouble = true;break; // "
	        case 0x27:
	          inSingle = true;break; // '
	        case 0x28:
	          paren++;break; // (
	        case 0x29:
	          paren--;break; // )
	        case 0x5B:
	          square++;break; // [
	        case 0x5D:
	          square--;break; // ]
	        case 0x7B:
	          curly++;break; // {
	        case 0x7D:
	          curly--;break; // }
	      }
	    }
	  }
	
	  if (dir.expression == null) {
	    dir.expression = str.slice(0, i).trim();
	  } else if (lastFilterIndex !== 0) {
	    pushFilter();
	  }
	
	  cache$1.put(s, dir);
	  return dir;
	}
	
	var directive = Object.freeze({
	  parseDirective: parseDirective
	});
	
	var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;
	var cache = undefined;
	var tagRE = undefined;
	var htmlRE = undefined;
	/**
	 * Escape a string so it can be used in a RegExp
	 * constructor.
	 *
	 * @param {String} str
	 */
	
	function escapeRegex(str) {
	  return str.replace(regexEscapeRE, '\\$&');
	}
	
	function compileRegex() {
	  var open = escapeRegex(config.delimiters[0]);
	  var close = escapeRegex(config.delimiters[1]);
	  var unsafeOpen = escapeRegex(config.unsafeDelimiters[0]);
	  var unsafeClose = escapeRegex(config.unsafeDelimiters[1]);
	  tagRE = new RegExp(unsafeOpen + '(.+?)' + unsafeClose + '|' + open + '(.+?)' + close, 'g');
	  htmlRE = new RegExp('^' + unsafeOpen + '.*' + unsafeClose + '$');
	  // reset cache
	  cache = new Cache(1000);
	}
	
	/**
	 * Parse a template text string into an array of tokens.
	 *
	 * @param {String} text
	 * @return {Array<Object> | null}
	 *               - {String} type
	 *               - {String} value
	 *               - {Boolean} [html]
	 *               - {Boolean} [oneTime]
	 */
	
	function parseText(text) {
	  if (!cache) {
	    compileRegex();
	  }
	  var hit = cache.get(text);
	  if (hit) {
	    return hit;
	  }
	  text = text.replace(/\n/g, '');
	  if (!tagRE.test(text)) {
	    return null;
	  }
	  var tokens = [];
	  var lastIndex = tagRE.lastIndex = 0;
	  var match, index, html, value, first, oneTime;
	  /* eslint-disable no-cond-assign */
	  while (match = tagRE.exec(text)) {
	    /* eslint-enable no-cond-assign */
	    index = match.index;
	    // push text token
	    if (index > lastIndex) {
	      tokens.push({
	        value: text.slice(lastIndex, index)
	      });
	    }
	    // tag token
	    html = htmlRE.test(match[0]);
	    value = html ? match[1] : match[2];
	    first = value.charCodeAt(0);
	    oneTime = first === 42; // *
	    value = oneTime ? value.slice(1) : value;
	    tokens.push({
	      tag: true,
	      value: value.trim(),
	      html: html,
	      oneTime: oneTime
	    });
	    lastIndex = index + match[0].length;
	  }
	  if (lastIndex < text.length) {
	    tokens.push({
	      value: text.slice(lastIndex)
	    });
	  }
	  cache.put(text, tokens);
	  return tokens;
	}
	
	/**
	 * Format a list of tokens into an expression.
	 * e.g. tokens parsed from 'a {{b}} c' can be serialized
	 * into one single expression as '"a " + b + " c"'.
	 *
	 * @param {Array} tokens
	 * @param {Vue} [vm]
	 * @return {String}
	 */
	
	function tokensToExp(tokens, vm) {
	  if (tokens.length > 1) {
	    return tokens.map(function (token) {
	      return formatToken(token, vm);
	    }).join('+');
	  } else {
	    return formatToken(tokens[0], vm, true);
	  }
	}
	
	/**
	 * Format a single token.
	 *
	 * @param {Object} token
	 * @param {Vue} [vm]
	 * @param {Boolean} [single]
	 * @return {String}
	 */
	
	function formatToken(token, vm, single) {
	  return token.tag ? token.oneTime && vm ? '"' + vm.$eval(token.value) + '"' : inlineFilters(token.value, single) : '"' + token.value + '"';
	}
	
	/**
	 * For an attribute with multiple interpolation tags,
	 * e.g. attr="some-{{thing | filter}}", in order to combine
	 * the whole thing into a single watchable expression, we
	 * have to inline those filters. This function does exactly
	 * that. This is a bit hacky but it avoids heavy changes
	 * to directive parser and watcher mechanism.
	 *
	 * @param {String} exp
	 * @param {Boolean} single
	 * @return {String}
	 */
	
	var filterRE$1 = /[^|]\|[^|]/;
	function inlineFilters(exp, single) {
	  if (!filterRE$1.test(exp)) {
	    return single ? exp : '(' + exp + ')';
	  } else {
	    var dir = parseDirective(exp);
	    if (!dir.filters) {
	      return '(' + exp + ')';
	    } else {
	      return 'this._applyFilters(' + dir.expression + // value
	      ',null,' + // oldValue (null for read)
	      JSON.stringify(dir.filters) + // filter descriptors
	      ',false)'; // write?
	    }
	  }
	}
	
	var text$1 = Object.freeze({
	  compileRegex: compileRegex,
	  parseText: parseText,
	  tokensToExp: tokensToExp
	});
	
	var delimiters = ['{{', '}}'];
	var unsafeDelimiters = ['{{{', '}}}'];
	
	var config = Object.defineProperties({
	
	  /**
	   * Whether to print debug messages.
	   * Also enables stack trace for warnings.
	   *
	   * @type {Boolean}
	   */
	
	  debug: false,
	
	  /**
	   * Whether to suppress warnings.
	   *
	   * @type {Boolean}
	   */
	
	  silent: false,
	
	  /**
	   * Whether to use async rendering.
	   */
	
	  async: true,
	
	  /**
	   * Whether to warn against errors caught when evaluating
	   * expressions.
	   */
	
	  warnExpressionErrors: true,
	
	  /**
	   * Whether or not to handle fully object properties which
	   * are already backed by getters and seters. Depending on
	   * use case and environment, this might introduce non-neglible
	   * performance penalties.
	   */
	  convertAllProperties: false,
	
	  /**
	   * Internal flag to indicate the delimiters have been
	   * changed.
	   *
	   * @type {Boolean}
	   */
	
	  _delimitersChanged: true,
	
	  /**
	   * List of asset types that a component can own.
	   *
	   * @type {Array}
	   */
	
	  _assetTypes: ['component', 'directive', 'elementDirective', 'filter', 'transition', 'partial'],
	
	  /**
	   * prop binding modes
	   */
	
	  _propBindingModes: {
	    ONE_WAY: 0,
	    TWO_WAY: 1,
	    ONE_TIME: 2
	  },
	
	  /**
	   * Max circular updates allowed in a batcher flush cycle.
	   */
	
	  _maxUpdateCount: 100
	
	}, {
	  delimiters: { /**
	                 * Interpolation delimiters. Changing these would trigger
	                 * the text parser to re-compile the regular expressions.
	                 *
	                 * @type {Array<String>}
	                 */
	
	    get: function get() {
	      return delimiters;
	    },
	    set: function set(val) {
	      delimiters = val;
	      compileRegex();
	    },
	    configurable: true,
	    enumerable: true
	  },
	  unsafeDelimiters: {
	    get: function get() {
	      return unsafeDelimiters;
	    },
	    set: function set(val) {
	      unsafeDelimiters = val;
	      compileRegex();
	    },
	    configurable: true,
	    enumerable: true
	  }
	});
	
	var warn = undefined;
	
	if (process.env.NODE_ENV !== 'production') {
	  (function () {
	    var hasConsole = typeof console !== 'undefined';
	    warn = function (msg, e) {
	      if (hasConsole && (!config.silent || config.debug)) {
	        console.warn('[Vue warn]: ' + msg);
	        /* istanbul ignore if */
	        if (config.debug) {
	          if (e) {
	            throw e;
	          } else {
	            console.warn(new Error('Warning Stack Trace').stack);
	          }
	        }
	      }
	    };
	  })();
	}
	
	/**
	 * Append with transition.
	 *
	 * @param {Element} el
	 * @param {Element} target
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */
	
	function appendWithTransition(el, target, vm, cb) {
	  applyTransition(el, 1, function () {
	    target.appendChild(el);
	  }, vm, cb);
	}
	
	/**
	 * InsertBefore with transition.
	 *
	 * @param {Element} el
	 * @param {Element} target
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */
	
	function beforeWithTransition(el, target, vm, cb) {
	  applyTransition(el, 1, function () {
	    before(el, target);
	  }, vm, cb);
	}
	
	/**
	 * Remove with transition.
	 *
	 * @param {Element} el
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */
	
	function removeWithTransition(el, vm, cb) {
	  applyTransition(el, -1, function () {
	    remove(el);
	  }, vm, cb);
	}
	
	/**
	 * Apply transitions with an operation callback.
	 *
	 * @param {Element} el
	 * @param {Number} direction
	 *                  1: enter
	 *                 -1: leave
	 * @param {Function} op - the actual DOM operation
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */
	
	function applyTransition(el, direction, op, vm, cb) {
	  var transition = el.__v_trans;
	  if (!transition ||
	  // skip if there are no js hooks and CSS transition is
	  // not supported
	  !transition.hooks && !transitionEndEvent ||
	  // skip transitions for initial compile
	  !vm._isCompiled ||
	  // if the vm is being manipulated by a parent directive
	  // during the parent's compilation phase, skip the
	  // animation.
	  vm.$parent && !vm.$parent._isCompiled) {
	    op();
	    if (cb) cb();
	    return;
	  }
	  var action = direction > 0 ? 'enter' : 'leave';
	  transition[action](op, cb);
	}
	
	/**
	 * Query an element selector if it's not an element already.
	 *
	 * @param {String|Element} el
	 * @return {Element}
	 */
	
	function query(el) {
	  if (typeof el === 'string') {
	    var selector = el;
	    el = document.querySelector(el);
	    if (!el) {
	      process.env.NODE_ENV !== 'production' && warn('Cannot find element: ' + selector);
	    }
	  }
	  return el;
	}
	
	/**
	 * Check if a node is in the document.
	 * Note: document.documentElement.contains should work here
	 * but always returns false for comment nodes in phantomjs,
	 * making unit tests difficult. This is fixed by doing the
	 * contains() check on the node's parentNode instead of
	 * the node itself.
	 *
	 * @param {Node} node
	 * @return {Boolean}
	 */
	
	function inDoc(node) {
	  var doc = document.documentElement;
	  var parent = node && node.parentNode;
	  return doc === node || doc === parent || !!(parent && parent.nodeType === 1 && doc.contains(parent));
	}
	
	/**
	 * Get and remove an attribute from a node.
	 *
	 * @param {Node} node
	 * @param {String} _attr
	 */
	
	function getAttr(node, _attr) {
	  var val = node.getAttribute(_attr);
	  if (val !== null) {
	    node.removeAttribute(_attr);
	  }
	  return val;
	}
	
	/**
	 * Get an attribute with colon or v-bind: prefix.
	 *
	 * @param {Node} node
	 * @param {String} name
	 * @return {String|null}
	 */
	
	function getBindAttr(node, name) {
	  var val = getAttr(node, ':' + name);
	  if (val === null) {
	    val = getAttr(node, 'v-bind:' + name);
	  }
	  return val;
	}
	
	/**
	 * Check the presence of a bind attribute.
	 *
	 * @param {Node} node
	 * @param {String} name
	 * @return {Boolean}
	 */
	
	function hasBindAttr(node, name) {
	  return node.hasAttribute(name) || node.hasAttribute(':' + name) || node.hasAttribute('v-bind:' + name);
	}
	
	/**
	 * Insert el before target
	 *
	 * @param {Element} el
	 * @param {Element} target
	 */
	
	function before(el, target) {
	  target.parentNode.insertBefore(el, target);
	}
	
	/**
	 * Insert el after target
	 *
	 * @param {Element} el
	 * @param {Element} target
	 */
	
	function after(el, target) {
	  if (target.nextSibling) {
	    before(el, target.nextSibling);
	  } else {
	    target.parentNode.appendChild(el);
	  }
	}
	
	/**
	 * Remove el from DOM
	 *
	 * @param {Element} el
	 */
	
	function remove(el) {
	  el.parentNode.removeChild(el);
	}
	
	/**
	 * Prepend el to target
	 *
	 * @param {Element} el
	 * @param {Element} target
	 */
	
	function prepend(el, target) {
	  if (target.firstChild) {
	    before(el, target.firstChild);
	  } else {
	    target.appendChild(el);
	  }
	}
	
	/**
	 * Replace target with el
	 *
	 * @param {Element} target
	 * @param {Element} el
	 */
	
	function replace(target, el) {
	  var parent = target.parentNode;
	  if (parent) {
	    parent.replaceChild(el, target);
	  }
	}
	
	/**
	 * Add event listener shorthand.
	 *
	 * @param {Element} el
	 * @param {String} event
	 * @param {Function} cb
	 */
	
	function on$1(el, event, cb) {
	  el.addEventListener(event, cb);
	}
	
	/**
	 * Remove event listener shorthand.
	 *
	 * @param {Element} el
	 * @param {String} event
	 * @param {Function} cb
	 */
	
	function off(el, event, cb) {
	  el.removeEventListener(event, cb);
	}
	
	/**
	 * In IE9, setAttribute('class') will result in empty class
	 * if the element also has the :class attribute; However in
	 * PhantomJS, setting `className` does not work on SVG elements...
	 * So we have to do a conditional check here.
	 *
	 * @param {Element} el
	 * @param {String} cls
	 */
	
	function setClass(el, cls) {
	  /* istanbul ignore if */
	  if (isIE9 && !(el instanceof SVGElement)) {
	    el.className = cls;
	  } else {
	    el.setAttribute('class', cls);
	  }
	}
	
	/**
	 * Add class with compatibility for IE & SVG
	 *
	 * @param {Element} el
	 * @param {String} cls
	 */
	
	function addClass(el, cls) {
	  if (el.classList) {
	    el.classList.add(cls);
	  } else {
	    var cur = ' ' + (el.getAttribute('class') || '') + ' ';
	    if (cur.indexOf(' ' + cls + ' ') < 0) {
	      setClass(el, (cur + cls).trim());
	    }
	  }
	}
	
	/**
	 * Remove class with compatibility for IE & SVG
	 *
	 * @param {Element} el
	 * @param {String} cls
	 */
	
	function removeClass(el, cls) {
	  if (el.classList) {
	    el.classList.remove(cls);
	  } else {
	    var cur = ' ' + (el.getAttribute('class') || '') + ' ';
	    var tar = ' ' + cls + ' ';
	    while (cur.indexOf(tar) >= 0) {
	      cur = cur.replace(tar, ' ');
	    }
	    setClass(el, cur.trim());
	  }
	  if (!el.className) {
	    el.removeAttribute('class');
	  }
	}
	
	/**
	 * Extract raw content inside an element into a temporary
	 * container div
	 *
	 * @param {Element} el
	 * @param {Boolean} asFragment
	 * @return {Element}
	 */
	
	function extractContent(el, asFragment) {
	  var child;
	  var rawContent;
	  /* istanbul ignore if */
	  if (isTemplate(el) && el.content instanceof DocumentFragment) {
	    el = el.content;
	  }
	  if (el.hasChildNodes()) {
	    trimNode(el);
	    rawContent = asFragment ? document.createDocumentFragment() : document.createElement('div');
	    /* eslint-disable no-cond-assign */
	    while (child = el.firstChild) {
	      /* eslint-enable no-cond-assign */
	      rawContent.appendChild(child);
	    }
	  }
	  return rawContent;
	}
	
	/**
	 * Trim possible empty head/tail textNodes inside a parent.
	 *
	 * @param {Node} node
	 */
	
	function trimNode(node) {
	  trim(node, node.firstChild);
	  trim(node, node.lastChild);
	}
	
	function trim(parent, node) {
	  if (node && node.nodeType === 3 && !node.data.trim()) {
	    parent.removeChild(node);
	  }
	}
	
	/**
	 * Check if an element is a template tag.
	 * Note if the template appears inside an SVG its tagName
	 * will be in lowercase.
	 *
	 * @param {Element} el
	 */
	
	function isTemplate(el) {
	  return el.tagName && el.tagName.toLowerCase() === 'template';
	}
	
	/**
	 * Create an "anchor" for performing dom insertion/removals.
	 * This is used in a number of scenarios:
	 * - fragment instance
	 * - v-html
	 * - v-if
	 * - v-for
	 * - component
	 *
	 * @param {String} content
	 * @param {Boolean} persist - IE trashes empty textNodes on
	 *                            cloneNode(true), so in certain
	 *                            cases the anchor needs to be
	 *                            non-empty to be persisted in
	 *                            templates.
	 * @return {Comment|Text}
	 */
	
	function createAnchor(content, persist) {
	  var anchor = config.debug ? document.createComment(content) : document.createTextNode(persist ? ' ' : '');
	  anchor.__vue_anchor = true;
	  return anchor;
	}
	
	/**
	 * Find a component ref attribute that starts with $.
	 *
	 * @param {Element} node
	 * @return {String|undefined}
	 */
	
	var refRE = /^v-ref:/;
	
	function findRef(node) {
	  if (node.hasAttributes()) {
	    var attrs = node.attributes;
	    for (var i = 0, l = attrs.length; i < l; i++) {
	      var name = attrs[i].name;
	      if (refRE.test(name)) {
	        return camelize(name.replace(refRE, ''));
	      }
	    }
	  }
	}
	
	/**
	 * Map a function to a range of nodes .
	 *
	 * @param {Node} node
	 * @param {Node} end
	 * @param {Function} op
	 */
	
	function mapNodeRange(node, end, op) {
	  var next;
	  while (node !== end) {
	    next = node.nextSibling;
	    op(node);
	    node = next;
	  }
	  op(end);
	}
	
	/**
	 * Remove a range of nodes with transition, store
	 * the nodes in a fragment with correct ordering,
	 * and call callback when done.
	 *
	 * @param {Node} start
	 * @param {Node} end
	 * @param {Vue} vm
	 * @param {DocumentFragment} frag
	 * @param {Function} cb
	 */
	
	function removeNodeRange(start, end, vm, frag, cb) {
	  var done = false;
	  var removed = 0;
	  var nodes = [];
	  mapNodeRange(start, end, function (node) {
	    if (node === end) done = true;
	    nodes.push(node);
	    removeWithTransition(node, vm, onRemoved);
	  });
	  function onRemoved() {
	    removed++;
	    if (done && removed >= nodes.length) {
	      for (var i = 0; i < nodes.length; i++) {
	        frag.appendChild(nodes[i]);
	      }
	      cb && cb();
	    }
	  }
	}
	
	var commonTagRE = /^(div|p|span|img|a|b|i|br|ul|ol|li|h1|h2|h3|h4|h5|h6|code|pre|table|th|td|tr|form|label|input|select|option|nav|article|section|header|footer)$/;
	var reservedTagRE = /^(slot|partial|component)$/;
	
	/**
	 * Check if an element is a component, if yes return its
	 * component id.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Object|undefined}
	 */
	
	function checkComponentAttr(el, options) {
	  var tag = el.tagName.toLowerCase();
	  var hasAttrs = el.hasAttributes();
	  if (!commonTagRE.test(tag) && !reservedTagRE.test(tag)) {
	    if (resolveAsset(options, 'components', tag)) {
	      return { id: tag };
	    } else {
	      var is = hasAttrs && getIsBinding(el);
	      if (is) {
	        return is;
	      } else if (process.env.NODE_ENV !== 'production') {
	        if (tag.indexOf('-') > -1 || /HTMLUnknownElement/.test(el.toString()) &&
	        // Chrome returns unknown for several HTML5 elements.
	        // https://code.google.com/p/chromium/issues/detail?id=540526
	        !/^(data|time|rtc|rb)$/.test(tag)) {
	          warn('Unknown custom element: <' + tag + '> - did you ' + 'register the component correctly?');
	        }
	      }
	    }
	  } else if (hasAttrs) {
	    return getIsBinding(el);
	  }
	}
	
	/**
	 * Get "is" binding from an element.
	 *
	 * @param {Element} el
	 * @return {Object|undefined}
	 */
	
	function getIsBinding(el) {
	  // dynamic syntax
	  var exp = getAttr(el, 'is');
	  if (exp != null) {
	    return { id: exp };
	  } else {
	    exp = getBindAttr(el, 'is');
	    if (exp != null) {
	      return { id: exp, dynamic: true };
	    }
	  }
	}
	
	/**
	 * Set a prop's initial value on a vm and its data object.
	 *
	 * @param {Vue} vm
	 * @param {Object} prop
	 * @param {*} value
	 */
	
	function initProp(vm, prop, value) {
	  var key = prop.path;
	  value = coerceProp(prop, value);
	  vm[key] = vm._data[key] = assertProp(prop, value) ? value : undefined;
	}
	
	/**
	 * Assert whether a prop is valid.
	 *
	 * @param {Object} prop
	 * @param {*} value
	 */
	
	function assertProp(prop, value) {
	  // if a prop is not provided and is not required,
	  // skip the check.
	  if (prop.raw === null && !prop.required) {
	    return true;
	  }
	  var options = prop.options;
	  var type = options.type;
	  var valid = true;
	  var expectedType;
	  if (type) {
	    if (type === String) {
	      expectedType = 'string';
	      valid = typeof value === expectedType;
	    } else if (type === Number) {
	      expectedType = 'number';
	      valid = typeof value === 'number';
	    } else if (type === Boolean) {
	      expectedType = 'boolean';
	      valid = typeof value === 'boolean';
	    } else if (type === Function) {
	      expectedType = 'function';
	      valid = typeof value === 'function';
	    } else if (type === Object) {
	      expectedType = 'object';
	      valid = isPlainObject(value);
	    } else if (type === Array) {
	      expectedType = 'array';
	      valid = isArray(value);
	    } else {
	      valid = value instanceof type;
	    }
	  }
	  if (!valid) {
	    process.env.NODE_ENV !== 'production' && warn('Invalid prop: type check failed for ' + prop.path + '="' + prop.raw + '".' + ' Expected ' + formatType(expectedType) + ', got ' + formatValue(value) + '.');
	    return false;
	  }
	  var validator = options.validator;
	  if (validator) {
	    if (!validator.call(null, value)) {
	      process.env.NODE_ENV !== 'production' && warn('Invalid prop: custom validator check failed for ' + prop.path + '="' + prop.raw + '"');
	      return false;
	    }
	  }
	  return true;
	}
	
	/**
	 * Force parsing value with coerce option.
	 *
	 * @param {*} value
	 * @param {Object} options
	 * @return {*}
	 */
	
	function coerceProp(prop, value) {
	  var coerce = prop.options.coerce;
	  if (!coerce) {
	    return value;
	  }
	  // coerce is a function
	  return coerce(value);
	}
	
	function formatType(val) {
	  return val ? val.charAt(0).toUpperCase() + val.slice(1) : 'custom type';
	}
	
	function formatValue(val) {
	  return Object.prototype.toString.call(val).slice(8, -1);
	}
	
	/**
	 * Option overwriting strategies are functions that handle
	 * how to merge a parent option value and a child option
	 * value into the final value.
	 *
	 * All strategy functions follow the same signature:
	 *
	 * @param {*} parentVal
	 * @param {*} childVal
	 * @param {Vue} [vm]
	 */
	
	var strats = config.optionMergeStrategies = Object.create(null);
	
	/**
	 * Helper that recursively merges two data objects together.
	 */
	
	function mergeData(to, from) {
	  var key, toVal, fromVal;
	  for (key in from) {
	    toVal = to[key];
	    fromVal = from[key];
	    if (!hasOwn(to, key)) {
	      set(to, key, fromVal);
	    } else if (isObject(toVal) && isObject(fromVal)) {
	      mergeData(toVal, fromVal);
	    }
	  }
	  return to;
	}
	
	/**
	 * Data
	 */
	
	strats.data = function (parentVal, childVal, vm) {
	  if (!vm) {
	    // in a Vue.extend merge, both should be functions
	    if (!childVal) {
	      return parentVal;
	    }
	    if (typeof childVal !== 'function') {
	      process.env.NODE_ENV !== 'production' && warn('The "data" option should be a function ' + 'that returns a per-instance value in component ' + 'definitions.');
	      return parentVal;
	    }
	    if (!parentVal) {
	      return childVal;
	    }
	    // when parentVal & childVal are both present,
	    // we need to return a function that returns the
	    // merged result of both functions... no need to
	    // check if parentVal is a function here because
	    // it has to be a function to pass previous merges.
	    return function mergedDataFn() {
	      return mergeData(childVal.call(this), parentVal.call(this));
	    };
	  } else if (parentVal || childVal) {
	    return function mergedInstanceDataFn() {
	      // instance merge
	      var instanceData = typeof childVal === 'function' ? childVal.call(vm) : childVal;
	      var defaultData = typeof parentVal === 'function' ? parentVal.call(vm) : undefined;
	      if (instanceData) {
	        return mergeData(instanceData, defaultData);
	      } else {
	        return defaultData;
	      }
	    };
	  }
	};
	
	/**
	 * El
	 */
	
	strats.el = function (parentVal, childVal, vm) {
	  if (!vm && childVal && typeof childVal !== 'function') {
	    process.env.NODE_ENV !== 'production' && warn('The "el" option should be a function ' + 'that returns a per-instance value in component ' + 'definitions.');
	    return;
	  }
	  var ret = childVal || parentVal;
	  // invoke the element factory if this is instance merge
	  return vm && typeof ret === 'function' ? ret.call(vm) : ret;
	};
	
	/**
	 * Hooks and param attributes are merged as arrays.
	 */
	
	strats.init = strats.created = strats.ready = strats.attached = strats.detached = strats.beforeCompile = strats.compiled = strats.beforeDestroy = strats.destroyed = function (parentVal, childVal) {
	  return childVal ? parentVal ? parentVal.concat(childVal) : isArray(childVal) ? childVal : [childVal] : parentVal;
	};
	
	/**
	 * 0.11 deprecation warning
	 */
	
	strats.paramAttributes = function () {
	  /* istanbul ignore next */
	  process.env.NODE_ENV !== 'production' && warn('"paramAttributes" option has been deprecated in 0.12. ' + 'Use "props" instead.');
	};
	
	/**
	 * Assets
	 *
	 * When a vm is present (instance creation), we need to do
	 * a three-way merge between constructor options, instance
	 * options and parent options.
	 */
	
	function mergeAssets(parentVal, childVal) {
	  var res = Object.create(parentVal);
	  return childVal ? extend(res, guardArrayAssets(childVal)) : res;
	}
	
	config._assetTypes.forEach(function (type) {
	  strats[type + 's'] = mergeAssets;
	});
	
	/**
	 * Events & Watchers.
	 *
	 * Events & watchers hashes should not overwrite one
	 * another, so we merge them as arrays.
	 */
	
	strats.watch = strats.events = function (parentVal, childVal) {
	  if (!childVal) return parentVal;
	  if (!parentVal) return childVal;
	  var ret = {};
	  extend(ret, parentVal);
	  for (var key in childVal) {
	    var parent = ret[key];
	    var child = childVal[key];
	    if (parent && !isArray(parent)) {
	      parent = [parent];
	    }
	    ret[key] = parent ? parent.concat(child) : [child];
	  }
	  return ret;
	};
	
	/**
	 * Other object hashes.
	 */
	
	strats.props = strats.methods = strats.computed = function (parentVal, childVal) {
	  if (!childVal) return parentVal;
	  if (!parentVal) return childVal;
	  var ret = Object.create(null);
	  extend(ret, parentVal);
	  extend(ret, childVal);
	  return ret;
	};
	
	/**
	 * Default strategy.
	 */
	
	var defaultStrat = function defaultStrat(parentVal, childVal) {
	  return childVal === undefined ? parentVal : childVal;
	};
	
	/**
	 * Make sure component options get converted to actual
	 * constructors.
	 *
	 * @param {Object} options
	 */
	
	function guardComponents(options) {
	  if (options.components) {
	    var components = options.components = guardArrayAssets(options.components);
	    var def;
	    var ids = Object.keys(components);
	    for (var i = 0, l = ids.length; i < l; i++) {
	      var key = ids[i];
	      if (commonTagRE.test(key) || reservedTagRE.test(key)) {
	        process.env.NODE_ENV !== 'production' && warn('Do not use built-in or reserved HTML elements as component ' + 'id: ' + key);
	        continue;
	      }
	      def = components[key];
	      if (isPlainObject(def)) {
	        components[key] = Vue.extend(def);
	      }
	    }
	  }
	}
	
	/**
	 * Ensure all props option syntax are normalized into the
	 * Object-based format.
	 *
	 * @param {Object} options
	 */
	
	function guardProps(options) {
	  var props = options.props;
	  var i, val;
	  if (isArray(props)) {
	    options.props = {};
	    i = props.length;
	    while (i--) {
	      val = props[i];
	      if (typeof val === 'string') {
	        options.props[val] = null;
	      } else if (val.name) {
	        options.props[val.name] = val;
	      }
	    }
	  } else if (isPlainObject(props)) {
	    var keys = Object.keys(props);
	    i = keys.length;
	    while (i--) {
	      val = props[keys[i]];
	      if (typeof val === 'function') {
	        props[keys[i]] = { type: val };
	      }
	    }
	  }
	}
	
	/**
	 * Guard an Array-format assets option and converted it
	 * into the key-value Object format.
	 *
	 * @param {Object|Array} assets
	 * @return {Object}
	 */
	
	function guardArrayAssets(assets) {
	  if (isArray(assets)) {
	    var res = {};
	    var i = assets.length;
	    var asset;
	    while (i--) {
	      asset = assets[i];
	      var id = typeof asset === 'function' ? asset.options && asset.options.name || asset.id : asset.name || asset.id;
	      if (!id) {
	        process.env.NODE_ENV !== 'production' && warn('Array-syntax assets must provide a "name" or "id" field.');
	      } else {
	        res[id] = asset;
	      }
	    }
	    return res;
	  }
	  return assets;
	}
	
	/**
	 * Merge two option objects into a new one.
	 * Core utility used in both instantiation and inheritance.
	 *
	 * @param {Object} parent
	 * @param {Object} child
	 * @param {Vue} [vm] - if vm is present, indicates this is
	 *                     an instantiation merge.
	 */
	
	function mergeOptions(parent, child, vm) {
	  guardComponents(child);
	  guardProps(child);
	  var options = {};
	  var key;
	  if (child.mixins) {
	    for (var i = 0, l = child.mixins.length; i < l; i++) {
	      parent = mergeOptions(parent, child.mixins[i], vm);
	    }
	  }
	  for (key in parent) {
	    mergeField(key);
	  }
	  for (key in child) {
	    if (!hasOwn(parent, key)) {
	      mergeField(key);
	    }
	  }
	  function mergeField(key) {
	    var strat = strats[key] || defaultStrat;
	    options[key] = strat(parent[key], child[key], vm, key);
	  }
	  return options;
	}
	
	/**
	 * Resolve an asset.
	 * This function is used because child instances need access
	 * to assets defined in its ancestor chain.
	 *
	 * @param {Object} options
	 * @param {String} type
	 * @param {String} id
	 * @return {Object|Function}
	 */
	
	function resolveAsset(options, type, id) {
	  var assets = options[type];
	  var camelizedId;
	  return assets[id] ||
	  // camelCase ID
	  assets[camelizedId = camelize(id)] ||
	  // Pascal Case ID
	  assets[camelizedId.charAt(0).toUpperCase() + camelizedId.slice(1)];
	}
	
	/**
	 * Assert asset exists
	 */
	
	function assertAsset(val, type, id) {
	  if (!val) {
	    process.env.NODE_ENV !== 'production' && warn('Failed to resolve ' + type + ': ' + id);
	  }
	}
	
	var arrayProto = Array.prototype;
	var arrayMethods = Object.create(arrayProto)
	
	/**
	 * Intercept mutating methods and emit events
	 */
	
	;['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'].forEach(function (method) {
	  // cache original method
	  var original = arrayProto[method];
	  def(arrayMethods, method, function mutator() {
	    // avoid leaking arguments:
	    // http://jsperf.com/closure-with-arguments
	    var i = arguments.length;
	    var args = new Array(i);
	    while (i--) {
	      args[i] = arguments[i];
	    }
	    var result = original.apply(this, args);
	    var ob = this.__ob__;
	    var inserted;
	    switch (method) {
	      case 'push':
	        inserted = args;
	        break;
	      case 'unshift':
	        inserted = args;
	        break;
	      case 'splice':
	        inserted = args.slice(2);
	        break;
	    }
	    if (inserted) ob.observeArray(inserted);
	    // notify change
	    ob.dep.notify();
	    return result;
	  });
	});
	
	/**
	 * Swap the element at the given index with a new value
	 * and emits corresponding event.
	 *
	 * @param {Number} index
	 * @param {*} val
	 * @return {*} - replaced element
	 */
	
	def(arrayProto, '$set', function $set(index, val) {
	  if (index >= this.length) {
	    this.length = Number(index) + 1;
	  }
	  return this.splice(index, 1, val)[0];
	});
	
	/**
	 * Convenience method to remove the element at given index.
	 *
	 * @param {Number} index
	 * @param {*} val
	 */
	
	def(arrayProto, '$remove', function $remove(item) {
	  /* istanbul ignore if */
	  if (!this.length) return;
	  var index = indexOf(this, item);
	  if (index > -1) {
	    return this.splice(index, 1);
	  }
	});
	
	var uid$3 = 0;
	
	/**
	 * A dep is an observable that can have multiple
	 * directives subscribing to it.
	 *
	 * @constructor
	 */
	function Dep() {
	  this.id = uid$3++;
	  this.subs = [];
	}
	
	// the current target watcher being evaluated.
	// this is globally unique because there could be only one
	// watcher being evaluated at any time.
	Dep.target = null;
	
	/**
	 * Add a directive subscriber.
	 *
	 * @param {Directive} sub
	 */
	
	Dep.prototype.addSub = function (sub) {
	  this.subs.push(sub);
	};
	
	/**
	 * Remove a directive subscriber.
	 *
	 * @param {Directive} sub
	 */
	
	Dep.prototype.removeSub = function (sub) {
	  this.subs.$remove(sub);
	};
	
	/**
	 * Add self as a dependency to the target watcher.
	 */
	
	Dep.prototype.depend = function () {
	  Dep.target.addDep(this);
	};
	
	/**
	 * Notify all subscribers of a new value.
	 */
	
	Dep.prototype.notify = function () {
	  // stablize the subscriber list first
	  var subs = toArray(this.subs);
	  for (var i = 0, l = subs.length; i < l; i++) {
	    subs[i].update();
	  }
	};
	
	var arrayKeys = Object.getOwnPropertyNames(arrayMethods);
	
	/**
	 * Observer class that are attached to each observed
	 * object. Once attached, the observer converts target
	 * object's property keys into getter/setters that
	 * collect dependencies and dispatches updates.
	 *
	 * @param {Array|Object} value
	 * @constructor
	 */
	
	function Observer(value) {
	  this.value = value;
	  this.dep = new Dep();
	  def(value, '__ob__', this);
	  if (isArray(value)) {
	    var augment = hasProto ? protoAugment : copyAugment;
	    augment(value, arrayMethods, arrayKeys);
	    this.observeArray(value);
	  } else {
	    this.walk(value);
	  }
	}
	
	// Instance methods
	
	/**
	 * Walk through each property and convert them into
	 * getter/setters. This method should only be called when
	 * value type is Object.
	 *
	 * @param {Object} obj
	 */
	
	Observer.prototype.walk = function (obj) {
	  var keys = Object.keys(obj);
	  for (var i = 0, l = keys.length; i < l; i++) {
	    this.convert(keys[i], obj[keys[i]]);
	  }
	};
	
	/**
	 * Observe a list of Array items.
	 *
	 * @param {Array} items
	 */
	
	Observer.prototype.observeArray = function (items) {
	  for (var i = 0, l = items.length; i < l; i++) {
	    observe(items[i]);
	  }
	};
	
	/**
	 * Convert a property into getter/setter so we can emit
	 * the events when the property is accessed/changed.
	 *
	 * @param {String} key
	 * @param {*} val
	 */
	
	Observer.prototype.convert = function (key, val) {
	  defineReactive(this.value, key, val);
	};
	
	/**
	 * Add an owner vm, so that when $set/$delete mutations
	 * happen we can notify owner vms to proxy the keys and
	 * digest the watchers. This is only called when the object
	 * is observed as an instance's root $data.
	 *
	 * @param {Vue} vm
	 */
	
	Observer.prototype.addVm = function (vm) {
	  (this.vms || (this.vms = [])).push(vm);
	};
	
	/**
	 * Remove an owner vm. This is called when the object is
	 * swapped out as an instance's $data object.
	 *
	 * @param {Vue} vm
	 */
	
	Observer.prototype.removeVm = function (vm) {
	  this.vms.$remove(vm);
	};
	
	// helpers
	
	/**
	 * Augment an target Object or Array by intercepting
	 * the prototype chain using __proto__
	 *
	 * @param {Object|Array} target
	 * @param {Object} proto
	 */
	
	function protoAugment(target, src) {
	  target.__proto__ = src;
	}
	
	/**
	 * Augment an target Object or Array by defining
	 * hidden properties.
	 *
	 * @param {Object|Array} target
	 * @param {Object} proto
	 */
	
	function copyAugment(target, src, keys) {
	  for (var i = 0, l = keys.length; i < l; i++) {
	    var key = keys[i];
	    def(target, key, src[key]);
	  }
	}
	
	/**
	 * Attempt to create an observer instance for a value,
	 * returns the new observer if successfully observed,
	 * or the existing observer if the value already has one.
	 *
	 * @param {*} value
	 * @param {Vue} [vm]
	 * @return {Observer|undefined}
	 * @static
	 */
	
	function observe(value, vm) {
	  if (!value || typeof value !== 'object') {
	    return;
	  }
	  var ob;
	  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
	    ob = value.__ob__;
	  } else if ((isArray(value) || isPlainObject(value)) && Object.isExtensible(value) && !value._isVue) {
	    ob = new Observer(value);
	  }
	  if (ob && vm) {
	    ob.addVm(vm);
	  }
	  return ob;
	}
	
	/**
	 * Define a reactive property on an Object.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @param {*} val
	 */
	
	function defineReactive(obj, key, val) {
	  var dep = new Dep();
	
	  // cater for pre-defined getter/setters
	  var getter, setter;
	  if (config.convertAllProperties) {
	    var property = Object.getOwnPropertyDescriptor(obj, key);
	    if (property && property.configurable === false) {
	      return;
	    }
	    getter = property && property.get;
	    setter = property && property.set;
	  }
	
	  var childOb = observe(val);
	  Object.defineProperty(obj, key, {
	    enumerable: true,
	    configurable: true,
	    get: function reactiveGetter() {
	      var value = getter ? getter.call(obj) : val;
	      if (Dep.target) {
	        dep.depend();
	        if (childOb) {
	          childOb.dep.depend();
	        }
	        if (isArray(value)) {
	          for (var e, i = 0, l = value.length; i < l; i++) {
	            e = value[i];
	            e && e.__ob__ && e.__ob__.dep.depend();
	          }
	        }
	      }
	      return value;
	    },
	    set: function reactiveSetter(newVal) {
	      var value = getter ? getter.call(obj) : val;
	      if (newVal === value) {
	        return;
	      }
	      if (setter) {
	        setter.call(obj, newVal);
	      } else {
	        val = newVal;
	      }
	      childOb = observe(newVal);
	      dep.notify();
	    }
	  });
	}
	
	var util = Object.freeze({
		defineReactive: defineReactive,
		set: set,
		del: del,
		hasOwn: hasOwn,
		isLiteral: isLiteral,
		isReserved: isReserved,
		_toString: _toString,
		toNumber: toNumber,
		toBoolean: toBoolean,
		stripQuotes: stripQuotes,
		camelize: camelize,
		hyphenate: hyphenate,
		classify: classify,
		bind: bind$1,
		toArray: toArray,
		extend: extend,
		isObject: isObject,
		isPlainObject: isPlainObject,
		def: def,
		debounce: _debounce,
		indexOf: indexOf,
		cancellable: cancellable,
		looseEqual: looseEqual,
		isArray: isArray,
		hasProto: hasProto,
		inBrowser: inBrowser,
		isIE9: isIE9,
		isAndroid: isAndroid,
		get transitionProp () { return transitionProp; },
		get transitionEndEvent () { return transitionEndEvent; },
		get animationProp () { return animationProp; },
		get animationEndEvent () { return animationEndEvent; },
		nextTick: nextTick,
		query: query,
		inDoc: inDoc,
		getAttr: getAttr,
		getBindAttr: getBindAttr,
		hasBindAttr: hasBindAttr,
		before: before,
		after: after,
		remove: remove,
		prepend: prepend,
		replace: replace,
		on: on$1,
		off: off,
		setClass: setClass,
		addClass: addClass,
		removeClass: removeClass,
		extractContent: extractContent,
		trimNode: trimNode,
		isTemplate: isTemplate,
		createAnchor: createAnchor,
		findRef: findRef,
		mapNodeRange: mapNodeRange,
		removeNodeRange: removeNodeRange,
		mergeOptions: mergeOptions,
		resolveAsset: resolveAsset,
		assertAsset: assertAsset,
		checkComponentAttr: checkComponentAttr,
		initProp: initProp,
		assertProp: assertProp,
		coerceProp: coerceProp,
		commonTagRE: commonTagRE,
		reservedTagRE: reservedTagRE,
		get warn () { return warn; }
	});
	
	var uid = 0;
	
	function initMixin (Vue) {
	
	  /**
	   * The main init sequence. This is called for every
	   * instance, including ones that are created from extended
	   * constructors.
	   *
	   * @param {Object} options - this options object should be
	   *                           the result of merging class
	   *                           options and the options passed
	   *                           in to the constructor.
	   */
	
	  Vue.prototype._init = function (options) {
	
	    options = options || {};
	
	    this.$el = null;
	    this.$parent = options.parent;
	    this.$root = this.$parent ? this.$parent.$root : this;
	    this.$children = [];
	    this.$refs = {}; // child vm references
	    this.$els = {}; // element references
	    this._watchers = []; // all watchers as an array
	    this._directives = []; // all directives
	
	    // a uid
	    this._uid = uid++;
	
	    // a flag to avoid this being observed
	    this._isVue = true;
	
	    // events bookkeeping
	    this._events = {}; // registered callbacks
	    this._eventsCount = {}; // for $broadcast optimization
	
	    // fragment instance properties
	    this._isFragment = false;
	    this._fragment = // @type {DocumentFragment}
	    this._fragmentStart = // @type {Text|Comment}
	    this._fragmentEnd = null; // @type {Text|Comment}
	
	    // lifecycle state
	    this._isCompiled = this._isDestroyed = this._isReady = this._isAttached = this._isBeingDestroyed = false;
	    this._unlinkFn = null;
	
	    // context:
	    // if this is a transcluded component, context
	    // will be the common parent vm of this instance
	    // and its host.
	    this._context = options._context || this.$parent;
	
	    // scope:
	    // if this is inside an inline v-for, the scope
	    // will be the intermediate scope created for this
	    // repeat fragment. this is used for linking props
	    // and container directives.
	    this._scope = options._scope;
	
	    // fragment:
	    // if this instance is compiled inside a Fragment, it
	    // needs to reigster itself as a child of that fragment
	    // for attach/detach to work properly.
	    this._frag = options._frag;
	    if (this._frag) {
	      this._frag.children.push(this);
	    }
	
	    // push self into parent / transclusion host
	    if (this.$parent) {
	      this.$parent.$children.push(this);
	    }
	
	    // merge options.
	    options = this.$options = mergeOptions(this.constructor.options, options, this);
	
	    // set ref
	    this._updateRef();
	
	    // initialize data as empty object.
	    // it will be filled up in _initScope().
	    this._data = {};
	
	    // call init hook
	    this._callHook('init');
	
	    // initialize data observation and scope inheritance.
	    this._initState();
	
	    // setup event system and option events.
	    this._initEvents();
	
	    // call created hook
	    this._callHook('created');
	
	    // if `el` option is passed, start compilation.
	    if (options.el) {
	      this.$mount(options.el);
	    }
	  };
	}
	
	var pathCache = new Cache(1000);
	
	// actions
	var APPEND = 0;
	var PUSH = 1;
	var INC_SUB_PATH_DEPTH = 2;
	var PUSH_SUB_PATH = 3;
	
	// states
	var BEFORE_PATH = 0;
	var IN_PATH = 1;
	var BEFORE_IDENT = 2;
	var IN_IDENT = 3;
	var IN_SUB_PATH = 4;
	var IN_SINGLE_QUOTE = 5;
	var IN_DOUBLE_QUOTE = 6;
	var AFTER_PATH = 7;
	var ERROR = 8;
	
	var pathStateMachine = [];
	
	pathStateMachine[BEFORE_PATH] = {
	  'ws': [BEFORE_PATH],
	  'ident': [IN_IDENT, APPEND],
	  '[': [IN_SUB_PATH],
	  'eof': [AFTER_PATH]
	};
	
	pathStateMachine[IN_PATH] = {
	  'ws': [IN_PATH],
	  '.': [BEFORE_IDENT],
	  '[': [IN_SUB_PATH],
	  'eof': [AFTER_PATH]
	};
	
	pathStateMachine[BEFORE_IDENT] = {
	  'ws': [BEFORE_IDENT],
	  'ident': [IN_IDENT, APPEND]
	};
	
	pathStateMachine[IN_IDENT] = {
	  'ident': [IN_IDENT, APPEND],
	  '0': [IN_IDENT, APPEND],
	  'number': [IN_IDENT, APPEND],
	  'ws': [IN_PATH, PUSH],
	  '.': [BEFORE_IDENT, PUSH],
	  '[': [IN_SUB_PATH, PUSH],
	  'eof': [AFTER_PATH, PUSH]
	};
	
	pathStateMachine[IN_SUB_PATH] = {
	  "'": [IN_SINGLE_QUOTE, APPEND],
	  '"': [IN_DOUBLE_QUOTE, APPEND],
	  '[': [IN_SUB_PATH, INC_SUB_PATH_DEPTH],
	  ']': [IN_PATH, PUSH_SUB_PATH],
	  'eof': ERROR,
	  'else': [IN_SUB_PATH, APPEND]
	};
	
	pathStateMachine[IN_SINGLE_QUOTE] = {
	  "'": [IN_SUB_PATH, APPEND],
	  'eof': ERROR,
	  'else': [IN_SINGLE_QUOTE, APPEND]
	};
	
	pathStateMachine[IN_DOUBLE_QUOTE] = {
	  '"': [IN_SUB_PATH, APPEND],
	  'eof': ERROR,
	  'else': [IN_DOUBLE_QUOTE, APPEND]
	};
	
	/**
	 * Determine the type of a character in a keypath.
	 *
	 * @param {Char} ch
	 * @return {String} type
	 */
	
	function getPathCharType(ch) {
	  if (ch === undefined) {
	    return 'eof';
	  }
	
	  var code = ch.charCodeAt(0);
	
	  switch (code) {
	    case 0x5B: // [
	    case 0x5D: // ]
	    case 0x2E: // .
	    case 0x22: // "
	    case 0x27: // '
	    case 0x30:
	      // 0
	      return ch;
	
	    case 0x5F: // _
	    case 0x24:
	      // $
	      return 'ident';
	
	    case 0x20: // Space
	    case 0x09: // Tab
	    case 0x0A: // Newline
	    case 0x0D: // Return
	    case 0xA0: // No-break space
	    case 0xFEFF: // Byte Order Mark
	    case 0x2028: // Line Separator
	    case 0x2029:
	      // Paragraph Separator
	      return 'ws';
	  }
	
	  // a-z, A-Z
	  if (code >= 0x61 && code <= 0x7A || code >= 0x41 && code <= 0x5A) {
	    return 'ident';
	  }
	
	  // 1-9
	  if (code >= 0x31 && code <= 0x39) {
	    return 'number';
	  }
	
	  return 'else';
	}
	
	/**
	 * Format a subPath, return its plain form if it is
	 * a literal string or number. Otherwise prepend the
	 * dynamic indicator (*).
	 *
	 * @param {String} path
	 * @return {String}
	 */
	
	function formatSubPath(path) {
	  var trimmed = path.trim();
	  // invalid leading 0
	  if (path.charAt(0) === '0' && isNaN(path)) {
	    return false;
	  }
	  return isLiteral(trimmed) ? stripQuotes(trimmed) : '*' + trimmed;
	}
	
	/**
	 * Parse a string path into an array of segments
	 *
	 * @param {String} path
	 * @return {Array|undefined}
	 */
	
	function parse(path) {
	  var keys = [];
	  var index = -1;
	  var mode = BEFORE_PATH;
	  var subPathDepth = 0;
	  var c, newChar, key, type, transition, action, typeMap;
	
	  var actions = [];
	
	  actions[PUSH] = function () {
	    if (key !== undefined) {
	      keys.push(key);
	      key = undefined;
	    }
	  };
	
	  actions[APPEND] = function () {
	    if (key === undefined) {
	      key = newChar;
	    } else {
	      key += newChar;
	    }
	  };
	
	  actions[INC_SUB_PATH_DEPTH] = function () {
	    actions[APPEND]();
	    subPathDepth++;
	  };
	
	  actions[PUSH_SUB_PATH] = function () {
	    if (subPathDepth > 0) {
	      subPathDepth--;
	      mode = IN_SUB_PATH;
	      actions[APPEND]();
	    } else {
	      subPathDepth = 0;
	      key = formatSubPath(key);
	      if (key === false) {
	        return false;
	      } else {
	        actions[PUSH]();
	      }
	    }
	  };
	
	  function maybeUnescapeQuote() {
	    var nextChar = path[index + 1];
	    if (mode === IN_SINGLE_QUOTE && nextChar === "'" || mode === IN_DOUBLE_QUOTE && nextChar === '"') {
	      index++;
	      newChar = '\\' + nextChar;
	      actions[APPEND]();
	      return true;
	    }
	  }
	
	  while (mode != null) {
	    index++;
	    c = path[index];
	
	    if (c === '\\' && maybeUnescapeQuote()) {
	      continue;
	    }
	
	    type = getPathCharType(c);
	    typeMap = pathStateMachine[mode];
	    transition = typeMap[type] || typeMap['else'] || ERROR;
	
	    if (transition === ERROR) {
	      return; // parse error
	    }
	
	    mode = transition[0];
	    action = actions[transition[1]];
	    if (action) {
	      newChar = transition[2];
	      newChar = newChar === undefined ? c : newChar;
	      if (action() === false) {
	        return;
	      }
	    }
	
	    if (mode === AFTER_PATH) {
	      keys.raw = path;
	      return keys;
	    }
	  }
	}
	
	/**
	 * External parse that check for a cache hit first
	 *
	 * @param {String} path
	 * @return {Array|undefined}
	 */
	
	function parsePath(path) {
	  var hit = pathCache.get(path);
	  if (!hit) {
	    hit = parse(path);
	    if (hit) {
	      pathCache.put(path, hit);
	    }
	  }
	  return hit;
	}
	
	/**
	 * Get from an object from a path string
	 *
	 * @param {Object} obj
	 * @param {String} path
	 */
	
	function getPath(obj, path) {
	  return parseExpression(path).get(obj);
	}
	
	/**
	 * Warn against setting non-existent root path on a vm.
	 */
	
	var warnNonExistent;
	if (process.env.NODE_ENV !== 'production') {
	  warnNonExistent = function (path) {
	    warn('You are setting a non-existent path "' + path.raw + '" ' + 'on a vm instance. Consider pre-initializing the property ' + 'with the "data" option for more reliable reactivity ' + 'and better performance.');
	  };
	}
	
	/**
	 * Set on an object from a path
	 *
	 * @param {Object} obj
	 * @param {String | Array} path
	 * @param {*} val
	 */
	
	function setPath(obj, path, val) {
	  var original = obj;
	  if (typeof path === 'string') {
	    path = parse(path);
	  }
	  if (!path || !isObject(obj)) {
	    return false;
	  }
	  var last, key;
	  for (var i = 0, l = path.length; i < l; i++) {
	    last = obj;
	    key = path[i];
	    if (key.charAt(0) === '*') {
	      key = parseExpression(key.slice(1)).get.call(original, original);
	    }
	    if (i < l - 1) {
	      obj = obj[key];
	      if (!isObject(obj)) {
	        obj = {};
	        if (process.env.NODE_ENV !== 'production' && last._isVue) {
	          warnNonExistent(path);
	        }
	        set(last, key, obj);
	      }
	    } else {
	      if (isArray(obj)) {
	        obj.$set(key, val);
	      } else if (key in obj) {
	        obj[key] = val;
	      } else {
	        if (process.env.NODE_ENV !== 'production' && obj._isVue) {
	          warnNonExistent(path);
	        }
	        set(obj, key, val);
	      }
	    }
	  }
	  return true;
	}
	
	var path = Object.freeze({
	  parsePath: parsePath,
	  getPath: getPath,
	  setPath: setPath
	});
	
	var expressionCache = new Cache(1000);
	
	var allowedKeywords = 'Math,Date,this,true,false,null,undefined,Infinity,NaN,' + 'isNaN,isFinite,decodeURI,decodeURIComponent,encodeURI,' + 'encodeURIComponent,parseInt,parseFloat';
	var allowedKeywordsRE = new RegExp('^(' + allowedKeywords.replace(/,/g, '\\b|') + '\\b)');
	
	// keywords that don't make sense inside expressions
	var improperKeywords = 'break,case,class,catch,const,continue,debugger,default,' + 'delete,do,else,export,extends,finally,for,function,if,' + 'import,in,instanceof,let,return,super,switch,throw,try,' + 'var,while,with,yield,enum,await,implements,package,' + 'proctected,static,interface,private,public';
	var improperKeywordsRE = new RegExp('^(' + improperKeywords.replace(/,/g, '\\b|') + '\\b)');
	
	var wsRE = /\s/g;
	var newlineRE = /\n/g;
	var saveRE = /[\{,]\s*[\w\$_]+\s*:|('(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*")|new |typeof |void /g;
	var restoreRE = /"(\d+)"/g;
	var pathTestRE = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?'\]|\[".*?"\]|\[\d+\]|\[[A-Za-z_$][\w$]*\])*$/;
	var identRE = /[^\w$\.](?:[A-Za-z_$][\w$]*)/g;
	var booleanLiteralRE = /^(?:true|false)$/;
	
	/**
	 * Save / Rewrite / Restore
	 *
	 * When rewriting paths found in an expression, it is
	 * possible for the same letter sequences to be found in
	 * strings and Object literal property keys. Therefore we
	 * remove and store these parts in a temporary array, and
	 * restore them after the path rewrite.
	 */
	
	var saved = [];
	
	/**
	 * Save replacer
	 *
	 * The save regex can match two possible cases:
	 * 1. An opening object literal
	 * 2. A string
	 * If matched as a plain string, we need to escape its
	 * newlines, since the string needs to be preserved when
	 * generating the function body.
	 *
	 * @param {String} str
	 * @param {String} isString - str if matched as a string
	 * @return {String} - placeholder with index
	 */
	
	function save(str, isString) {
	  var i = saved.length;
	  saved[i] = isString ? str.replace(newlineRE, '\\n') : str;
	  return '"' + i + '"';
	}
	
	/**
	 * Path rewrite replacer
	 *
	 * @param {String} raw
	 * @return {String}
	 */
	
	function rewrite(raw) {
	  var c = raw.charAt(0);
	  var path = raw.slice(1);
	  if (allowedKeywordsRE.test(path)) {
	    return raw;
	  } else {
	    path = path.indexOf('"') > -1 ? path.replace(restoreRE, restore) : path;
	    return c + 'scope.' + path;
	  }
	}
	
	/**
	 * Restore replacer
	 *
	 * @param {String} str
	 * @param {String} i - matched save index
	 * @return {String}
	 */
	
	function restore(str, i) {
	  return saved[i];
	}
	
	/**
	 * Rewrite an expression, prefixing all path accessors with
	 * `scope.` and generate getter/setter functions.
	 *
	 * @param {String} exp
	 * @return {Function}
	 */
	
	function compileGetter(exp) {
	  if (improperKeywordsRE.test(exp)) {
	    process.env.NODE_ENV !== 'production' && warn('Avoid using reserved keywords in expression: ' + exp);
	  }
	  // reset state
	  saved.length = 0;
	  // save strings and object literal keys
	  var body = exp.replace(saveRE, save).replace(wsRE, '');
	  // rewrite all paths
	  // pad 1 space here becaue the regex matches 1 extra char
	  body = (' ' + body).replace(identRE, rewrite).replace(restoreRE, restore);
	  return makeGetterFn(body);
	}
	
	/**
	 * Build a getter function. Requires eval.
	 *
	 * We isolate the try/catch so it doesn't affect the
	 * optimization of the parse function when it is not called.
	 *
	 * @param {String} body
	 * @return {Function|undefined}
	 */
	
	function makeGetterFn(body) {
	  try {
	    return new Function('scope', 'return ' + body + ';');
	  } catch (e) {
	    process.env.NODE_ENV !== 'production' && warn('Invalid expression. ' + 'Generated function body: ' + body);
	  }
	}
	
	/**
	 * Compile a setter function for the expression.
	 *
	 * @param {String} exp
	 * @return {Function|undefined}
	 */
	
	function compileSetter(exp) {
	  var path = parsePath(exp);
	  if (path) {
	    return function (scope, val) {
	      setPath(scope, path, val);
	    };
	  } else {
	    process.env.NODE_ENV !== 'production' && warn('Invalid setter expression: ' + exp);
	  }
	}
	
	/**
	 * Parse an expression into re-written getter/setters.
	 *
	 * @param {String} exp
	 * @param {Boolean} needSet
	 * @return {Function}
	 */
	
	function parseExpression(exp, needSet) {
	  exp = exp.trim();
	  // try cache
	  var hit = expressionCache.get(exp);
	  if (hit) {
	    if (needSet && !hit.set) {
	      hit.set = compileSetter(hit.exp);
	    }
	    return hit;
	  }
	  var res = { exp: exp };
	  res.get = isSimplePath(exp) && exp.indexOf('[') < 0
	  // optimized super simple getter
	  ? makeGetterFn('scope.' + exp)
	  // dynamic getter
	  : compileGetter(exp);
	  if (needSet) {
	    res.set = compileSetter(exp);
	  }
	  expressionCache.put(exp, res);
	  return res;
	}
	
	/**
	 * Check if an expression is a simple path.
	 *
	 * @param {String} exp
	 * @return {Boolean}
	 */
	
	function isSimplePath(exp) {
	  return pathTestRE.test(exp) &&
	  // don't treat true/false as paths
	  !booleanLiteralRE.test(exp) &&
	  // Math constants e.g. Math.PI, Math.E etc.
	  exp.slice(0, 5) !== 'Math.';
	}
	
	var expression = Object.freeze({
	  parseExpression: parseExpression,
	  isSimplePath: isSimplePath
	});
	
	// we have two separate queues: one for directive updates
	// and one for user watcher registered via $watch().
	// we want to guarantee directive updates to be called
	// before user watchers so that when user watchers are
	// triggered, the DOM would have already been in updated
	// state.
	var queue = [];
	var userQueue = [];
	var has = {};
	var circular = {};
	var waiting = false;
	var internalQueueDepleted = false;
	
	/**
	 * Reset the batcher's state.
	 */
	
	function resetBatcherState() {
	  queue = [];
	  userQueue = [];
	  has = {};
	  circular = {};
	  waiting = internalQueueDepleted = false;
	}
	
	/**
	 * Flush both queues and run the watchers.
	 */
	
	function flushBatcherQueue() {
	  runBatcherQueue(queue);
	  internalQueueDepleted = true;
	  runBatcherQueue(userQueue);
	  // dev tool hook
	  /* istanbul ignore if */
	  if (process.env.NODE_ENV !== 'production') {
	    if (inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__) {
	      window.__VUE_DEVTOOLS_GLOBAL_HOOK__.emit('flush');
	    }
	  }
	  resetBatcherState();
	}
	
	/**
	 * Run the watchers in a single queue.
	 *
	 * @param {Array} queue
	 */
	
	function runBatcherQueue(queue) {
	  // do not cache length because more watchers might be pushed
	  // as we run existing watchers
	  for (var i = 0; i < queue.length; i++) {
	    var watcher = queue[i];
	    var id = watcher.id;
	    has[id] = null;
	    watcher.run();
	    // in dev build, check and stop circular updates.
	    if (process.env.NODE_ENV !== 'production' && has[id] != null) {
	      circular[id] = (circular[id] || 0) + 1;
	      if (circular[id] > config._maxUpdateCount) {
	        queue.splice(has[id], 1);
	        warn('You may have an infinite update loop for watcher ' + 'with expression: ' + watcher.expression);
	      }
	    }
	  }
	}
	
	/**
	 * Push a watcher into the watcher queue.
	 * Jobs with duplicate IDs will be skipped unless it's
	 * pushed when the queue is being flushed.
	 *
	 * @param {Watcher} watcher
	 *   properties:
	 *   - {Number} id
	 *   - {Function} run
	 */
	
	function pushWatcher(watcher) {
	  var id = watcher.id;
	  if (has[id] == null) {
	    // if an internal watcher is pushed, but the internal
	    // queue is already depleted, we run it immediately.
	    if (internalQueueDepleted && !watcher.user) {
	      watcher.run();
	      return;
	    }
	    // push watcher into appropriate queue
	    var q = watcher.user ? userQueue : queue;
	    has[id] = q.length;
	    q.push(watcher);
	    // queue the flush
	    if (!waiting) {
	      waiting = true;
	      nextTick(flushBatcherQueue);
	    }
	  }
	}
	
	var uid$2 = 0;
	
	/**
	 * A watcher parses an expression, collects dependencies,
	 * and fires callback when the expression value changes.
	 * This is used for both the $watch() api and directives.
	 *
	 * @param {Vue} vm
	 * @param {String} expression
	 * @param {Function} cb
	 * @param {Object} options
	 *                 - {Array} filters
	 *                 - {Boolean} twoWay
	 *                 - {Boolean} deep
	 *                 - {Boolean} user
	 *                 - {Boolean} sync
	 *                 - {Boolean} lazy
	 *                 - {Function} [preProcess]
	 *                 - {Function} [postProcess]
	 * @constructor
	 */
	function Watcher(vm, expOrFn, cb, options) {
	  // mix in options
	  if (options) {
	    extend(this, options);
	  }
	  var isFn = typeof expOrFn === 'function';
	  this.vm = vm;
	  vm._watchers.push(this);
	  this.expression = isFn ? expOrFn.toString() : expOrFn;
	  this.cb = cb;
	  this.id = ++uid$2; // uid for batching
	  this.active = true;
	  this.dirty = this.lazy; // for lazy watchers
	  this.deps = Object.create(null);
	  this.newDeps = null;
	  this.prevError = null; // for async error stacks
	  // parse expression for getter/setter
	  if (isFn) {
	    this.getter = expOrFn;
	    this.setter = undefined;
	  } else {
	    var res = parseExpression(expOrFn, this.twoWay);
	    this.getter = res.get;
	    this.setter = res.set;
	  }
	  this.value = this.lazy ? undefined : this.get();
	  // state for avoiding false triggers for deep and Array
	  // watchers during vm._digest()
	  this.queued = this.shallow = false;
	}
	
	/**
	 * Add a dependency to this directive.
	 *
	 * @param {Dep} dep
	 */
	
	Watcher.prototype.addDep = function (dep) {
	  var id = dep.id;
	  if (!this.newDeps[id]) {
	    this.newDeps[id] = dep;
	    if (!this.deps[id]) {
	      this.deps[id] = dep;
	      dep.addSub(this);
	    }
	  }
	};
	
	/**
	 * Evaluate the getter, and re-collect dependencies.
	 */
	
	Watcher.prototype.get = function () {
	  this.beforeGet();
	  var scope = this.scope || this.vm;
	  var value;
	  try {
	    value = this.getter.call(scope, scope);
	  } catch (e) {
	    if (process.env.NODE_ENV !== 'production' && config.warnExpressionErrors) {
	      warn('Error when evaluating expression "' + this.expression + '". ' + (config.debug ? '' : 'Turn on debug mode to see stack trace.'), e);
	    }
	  }
	  // "touch" every property so they are all tracked as
	  // dependencies for deep watching
	  if (this.deep) {
	    traverse(value);
	  }
	  if (this.preProcess) {
	    value = this.preProcess(value);
	  }
	  if (this.filters) {
	    value = scope._applyFilters(value, null, this.filters, false);
	  }
	  if (this.postProcess) {
	    value = this.postProcess(value);
	  }
	  this.afterGet();
	  return value;
	};
	
	/**
	 * Set the corresponding value with the setter.
	 *
	 * @param {*} value
	 */
	
	Watcher.prototype.set = function (value) {
	  var scope = this.scope || this.vm;
	  if (this.filters) {
	    value = scope._applyFilters(value, this.value, this.filters, true);
	  }
	  try {
	    this.setter.call(scope, scope, value);
	  } catch (e) {
	    if (process.env.NODE_ENV !== 'production' && config.warnExpressionErrors) {
	      warn('Error when evaluating setter "' + this.expression + '"', e);
	    }
	  }
	  // two-way sync for v-for alias
	  var forContext = scope.$forContext;
	  if (forContext && forContext.alias === this.expression) {
	    if (forContext.filters) {
	      process.env.NODE_ENV !== 'production' && warn('It seems you are using two-way binding on ' + 'a v-for alias (' + this.expression + '), and the ' + 'v-for has filters. This will not work properly. ' + 'Either remove the filters or use an array of ' + 'objects and bind to object properties instead.');
	      return;
	    }
	    forContext._withLock(function () {
	      if (scope.$key) {
	        // original is an object
	        forContext.rawValue[scope.$key] = value;
	      } else {
	        forContext.rawValue.$set(scope.$index, value);
	      }
	    });
	  }
	};
	
	/**
	 * Prepare for dependency collection.
	 */
	
	Watcher.prototype.beforeGet = function () {
	  Dep.target = this;
	  this.newDeps = Object.create(null);
	};
	
	/**
	 * Clean up for dependency collection.
	 */
	
	Watcher.prototype.afterGet = function () {
	  Dep.target = null;
	  var ids = Object.keys(this.deps);
	  var i = ids.length;
	  while (i--) {
	    var id = ids[i];
	    if (!this.newDeps[id]) {
	      this.deps[id].removeSub(this);
	    }
	  }
	  this.deps = this.newDeps;
	};
	
	/**
	 * Subscriber interface.
	 * Will be called when a dependency changes.
	 *
	 * @param {Boolean} shallow
	 */
	
	Watcher.prototype.update = function (shallow) {
	  if (this.lazy) {
	    this.dirty = true;
	  } else if (this.sync || !config.async) {
	    this.run();
	  } else {
	    // if queued, only overwrite shallow with non-shallow,
	    // but not the other way around.
	    this.shallow = this.queued ? shallow ? this.shallow : false : !!shallow;
	    this.queued = true;
	    // record before-push error stack in debug mode
	    /* istanbul ignore if */
	    if (process.env.NODE_ENV !== 'production' && config.debug) {
	      this.prevError = new Error('[vue] async stack trace');
	    }
	    pushWatcher(this);
	  }
	};
	
	/**
	 * Batcher job interface.
	 * Will be called by the batcher.
	 */
	
	Watcher.prototype.run = function () {
	  if (this.active) {
	    var value = this.get();
	    if (value !== this.value ||
	    // Deep watchers and watchers on Object/Arrays should fire even
	    // when the value is the same, because the value may
	    // have mutated; but only do so if this is a
	    // non-shallow update (caused by a vm digest).
	    (isObject(value) || this.deep) && !this.shallow) {
	      // set new value
	      var oldValue = this.value;
	      this.value = value;
	      // in debug + async mode, when a watcher callbacks
	      // throws, we also throw the saved before-push error
	      // so the full cross-tick stack trace is available.
	      var prevError = this.prevError;
	      /* istanbul ignore if */
	      if (process.env.NODE_ENV !== 'production' && config.debug && prevError) {
	        this.prevError = null;
	        try {
	          this.cb.call(this.vm, value, oldValue);
	        } catch (e) {
	          nextTick(function () {
	            throw prevError;
	          }, 0);
	          throw e;
	        }
	      } else {
	        this.cb.call(this.vm, value, oldValue);
	      }
	    }
	    this.queued = this.shallow = false;
	  }
	};
	
	/**
	 * Evaluate the value of the watcher.
	 * This only gets called for lazy watchers.
	 */
	
	Watcher.prototype.evaluate = function () {
	  // avoid overwriting another watcher that is being
	  // collected.
	  var current = Dep.target;
	  this.value = this.get();
	  this.dirty = false;
	  Dep.target = current;
	};
	
	/**
	 * Depend on all deps collected by this watcher.
	 */
	
	Watcher.prototype.depend = function () {
	  var depIds = Object.keys(this.deps);
	  var i = depIds.length;
	  while (i--) {
	    this.deps[depIds[i]].depend();
	  }
	};
	
	/**
	 * Remove self from all dependencies' subcriber list.
	 */
	
	Watcher.prototype.teardown = function () {
	  if (this.active) {
	    // remove self from vm's watcher list
	    // we can skip this if the vm if being destroyed
	    // which can improve teardown performance.
	    if (!this.vm._isBeingDestroyed) {
	      this.vm._watchers.$remove(this);
	    }
	    var depIds = Object.keys(this.deps);
	    var i = depIds.length;
	    while (i--) {
	      this.deps[depIds[i]].removeSub(this);
	    }
	    this.active = false;
	    this.vm = this.cb = this.value = null;
	  }
	};
	
	/**
	 * Recrusively traverse an object to evoke all converted
	 * getters, so that every nested property inside the object
	 * is collected as a "deep" dependency.
	 *
	 * @param {*} val
	 */
	
	function traverse(val) {
	  var i, keys;
	  if (isArray(val)) {
	    i = val.length;
	    while (i--) traverse(val[i]);
	  } else if (isObject(val)) {
	    keys = Object.keys(val);
	    i = keys.length;
	    while (i--) traverse(val[keys[i]]);
	  }
	}
	
	var cloak = {
	  bind: function bind() {
	    var el = this.el;
	    this.vm.$once('pre-hook:compiled', function () {
	      el.removeAttribute('v-cloak');
	    });
	  }
	};
	
	var ref = {
	  bind: function bind() {
	    process.env.NODE_ENV !== 'production' && warn('v-ref:' + this.arg + ' must be used on a child ' + 'component. Found on <' + this.el.tagName.toLowerCase() + '>.');
	  }
	};
	
	var ON = 700;
	var MODEL = 800;
	var BIND = 850;
	var TRANSITION = 1100;
	var EL = 1500;
	var COMPONENT = 1500;
	var PARTIAL = 1750;
	var FOR = 2000;
	var IF = 2000;
	var SLOT = 2100;
	
	var el = {
	
	  priority: EL,
	
	  bind: function bind() {
	    /* istanbul ignore if */
	    if (!this.arg) {
	      return;
	    }
	    var id = this.id = camelize(this.arg);
	    var refs = (this._scope || this.vm).$els;
	    if (hasOwn(refs, id)) {
	      refs[id] = this.el;
	    } else {
	      defineReactive(refs, id, this.el);
	    }
	  },
	
	  unbind: function unbind() {
	    var refs = (this._scope || this.vm).$els;
	    if (refs[this.id] === this.el) {
	      refs[this.id] = null;
	    }
	  }
	};
	
	var prefixes = ['-webkit-', '-moz-', '-ms-'];
	var camelPrefixes = ['Webkit', 'Moz', 'ms'];
	var importantRE = /!important;?$/;
	var propCache = Object.create(null);
	
	var testEl = null;
	
	var style = {
	
	  deep: true,
	
	  update: function update(value) {
	    if (typeof value === 'string') {
	      this.el.style.cssText = value;
	    } else if (isArray(value)) {
	      this.handleObject(value.reduce(extend, {}));
	    } else {
	      this.handleObject(value || {});
	    }
	  },
	
	  handleObject: function handleObject(value) {
	    // cache object styles so that only changed props
	    // are actually updated.
	    var cache = this.cache || (this.cache = {});
	    var name, val;
	    for (name in cache) {
	      if (!(name in value)) {
	        this.handleSingle(name, null);
	        delete cache[name];
	      }
	    }
	    for (name in value) {
	      val = value[name];
	      if (val !== cache[name]) {
	        cache[name] = val;
	        this.handleSingle(name, val);
	      }
	    }
	  },
	
	  handleSingle: function handleSingle(prop, value) {
	    prop = normalize(prop);
	    if (!prop) return; // unsupported prop
	    // cast possible numbers/booleans into strings
	    if (value != null) value += '';
	    if (value) {
	      var isImportant = importantRE.test(value) ? 'important' : '';
	      if (isImportant) {
	        value = value.replace(importantRE, '').trim();
	      }
	      this.el.style.setProperty(prop, value, isImportant);
	    } else {
	      this.el.style.removeProperty(prop);
	    }
	  }
	
	};
	
	/**
	 * Normalize a CSS property name.
	 * - cache result
	 * - auto prefix
	 * - camelCase -> dash-case
	 *
	 * @param {String} prop
	 * @return {String}
	 */
	
	function normalize(prop) {
	  if (propCache[prop]) {
	    return propCache[prop];
	  }
	  var res = prefix(prop);
	  propCache[prop] = propCache[res] = res;
	  return res;
	}
	
	/**
	 * Auto detect the appropriate prefix for a CSS property.
	 * https://gist.github.com/paulirish/523692
	 *
	 * @param {String} prop
	 * @return {String}
	 */
	
	function prefix(prop) {
	  prop = hyphenate(prop);
	  var camel = camelize(prop);
	  var upper = camel.charAt(0).toUpperCase() + camel.slice(1);
	  if (!testEl) {
	    testEl = document.createElement('div');
	  }
	  if (camel in testEl.style) {
	    return prop;
	  }
	  var i = prefixes.length;
	  var prefixed;
	  while (i--) {
	    prefixed = camelPrefixes[i] + upper;
	    if (prefixed in testEl.style) {
	      return prefixes[i] + prop;
	    }
	  }
	}
	
	// xlink
	var xlinkNS = 'http://www.w3.org/1999/xlink';
	var xlinkRE = /^xlink:/;
	
	// check for attributes that prohibit interpolations
	var disallowedInterpAttrRE = /^v-|^:|^@|^(?:is|transition|transition-mode|debounce|track-by|stagger|enter-stagger|leave-stagger)$/;
	// these attributes should also set their corresponding properties
	// because they only affect the initial state of the element
	var attrWithPropsRE = /^(?:value|checked|selected|muted)$/;
	
	// these attributes should set a hidden property for
	// binding v-model to object values
	var modelProps = {
	  value: '_value',
	  'true-value': '_trueValue',
	  'false-value': '_falseValue'
	};
	
	var bind = {
	
	  priority: BIND,
	
	  bind: function bind() {
	    var attr = this.arg;
	    var tag = this.el.tagName;
	    // should be deep watch on object mode
	    if (!attr) {
	      this.deep = true;
	    }
	    // handle interpolation bindings
	    var descriptor = this.descriptor;
	    var tokens = descriptor.interp;
	    if (tokens) {
	      // handle interpolations with one-time tokens
	      if (descriptor.hasOneTime) {
	        this.expression = tokensToExp(tokens, this._scope || this.vm);
	      }
	
	      // only allow binding on native attributes
	      if (disallowedInterpAttrRE.test(attr) || attr === 'name' && (tag === 'PARTIAL' || tag === 'SLOT')) {
	        process.env.NODE_ENV !== 'production' && warn(attr + '="' + descriptor.raw + '": ' + 'attribute interpolation is not allowed in Vue.js ' + 'directives and special attributes.');
	        this.el.removeAttribute(attr);
	        this.invalid = true;
	      }
	
	      /* istanbul ignore if */
	      if (process.env.NODE_ENV !== 'production') {
	        var raw = attr + '="' + descriptor.raw + '": ';
	        // warn src
	        if (attr === 'src') {
	          warn(raw + 'interpolation in "src" attribute will cause ' + 'a 404 request. Use v-bind:src instead.');
	        }
	
	        // warn style
	        if (attr === 'style') {
	          warn(raw + 'interpolation in "style" attribute will cause ' + 'the attribute to be discarded in Internet Explorer. ' + 'Use v-bind:style instead.');
	        }
	      }
	    }
	  },
	
	  update: function update(value) {
	    if (this.invalid) {
	      return;
	    }
	    var attr = this.arg;
	    if (this.arg) {
	      this.handleSingle(attr, value);
	    } else {
	      this.handleObject(value || {});
	    }
	  },
	
	  // share object handler with v-bind:class
	  handleObject: style.handleObject,
	
	  handleSingle: function handleSingle(attr, value) {
	    var el = this.el;
	    var interp = this.descriptor.interp;
	    if (!interp && attrWithPropsRE.test(attr) && attr in el) {
	      el[attr] = attr === 'value' ? value == null // IE9 will set input.value to "null" for null...
	      ? '' : value : value;
	    }
	    // set model props
	    var modelProp = modelProps[attr];
	    if (!interp && modelProp) {
	      el[modelProp] = value;
	      // update v-model if present
	      var model = el.__v_model;
	      if (model) {
	        model.listener();
	      }
	    }
	    // do not set value attribute for textarea
	    if (attr === 'value' && el.tagName === 'TEXTAREA') {
	      el.removeAttribute(attr);
	      return;
	    }
	    // update attribute
	    if (value != null && value !== false) {
	      if (attr === 'class') {
	        // handle edge case #1960:
	        // class interpolation should not overwrite Vue transition class
	        if (el.__v_trans) {
	          value += ' ' + el.__v_trans.id + '-transition';
	        }
	        setClass(el, value);
	      } else if (xlinkRE.test(attr)) {
	        el.setAttributeNS(xlinkNS, attr, value);
	      } else {
	        el.setAttribute(attr, value);
	      }
	    } else {
	      el.removeAttribute(attr);
	    }
	  }
	};
	
	// keyCode aliases
	var keyCodes = {
	  esc: 27,
	  tab: 9,
	  enter: 13,
	  space: 32,
	  'delete': 46,
	  up: 38,
	  left: 37,
	  right: 39,
	  down: 40
	};
	
	function keyFilter(handler, keys) {
	  var codes = keys.map(function (key) {
	    var charCode = key.charCodeAt(0);
	    if (charCode > 47 && charCode < 58) {
	      return parseInt(key, 10);
	    }
	    if (key.length === 1) {
	      charCode = key.toUpperCase().charCodeAt(0);
	      if (charCode > 64 && charCode < 91) {
	        return charCode;
	      }
	    }
	    return keyCodes[key];
	  });
	  return function keyHandler(e) {
	    if (codes.indexOf(e.keyCode) > -1) {
	      return handler.call(this, e);
	    }
	  };
	}
	
	function stopFilter(handler) {
	  return function stopHandler(e) {
	    e.stopPropagation();
	    return handler.call(this, e);
	  };
	}
	
	function preventFilter(handler) {
	  return function preventHandler(e) {
	    e.preventDefault();
	    return handler.call(this, e);
	  };
	}
	
	var on = {
	
	  acceptStatement: true,
	  priority: ON,
	
	  bind: function bind() {
	    // deal with iframes
	    if (this.el.tagName === 'IFRAME' && this.arg !== 'load') {
	      var self = this;
	      this.iframeBind = function () {
	        on$1(self.el.contentWindow, self.arg, self.handler);
	      };
	      this.on('load', this.iframeBind);
	    }
	  },
	
	  update: function update(handler) {
	    // stub a noop for v-on with no value,
	    // e.g. @mousedown.prevent
	    if (!this.descriptor.raw) {
	      handler = function () {};
	    }
	
	    if (typeof handler !== 'function') {
	      process.env.NODE_ENV !== 'production' && warn('v-on:' + this.arg + '="' + this.expression + '" expects a function value, ' + 'got ' + handler);
	      return;
	    }
	
	    // apply modifiers
	    if (this.modifiers.stop) {
	      handler = stopFilter(handler);
	    }
	    if (this.modifiers.prevent) {
	      handler = preventFilter(handler);
	    }
	    // key filter
	    var keys = Object.keys(this.modifiers).filter(function (key) {
	      return key !== 'stop' && key !== 'prevent';
	    });
	    if (keys.length) {
	      handler = keyFilter(handler, keys);
	    }
	
	    this.reset();
	    this.handler = handler;
	
	    if (this.iframeBind) {
	      this.iframeBind();
	    } else {
	      on$1(this.el, this.arg, this.handler);
	    }
	  },
	
	  reset: function reset() {
	    var el = this.iframeBind ? this.el.contentWindow : this.el;
	    if (this.handler) {
	      off(el, this.arg, this.handler);
	    }
	  },
	
	  unbind: function unbind() {
	    this.reset();
	  }
	};
	
	var checkbox = {
	
	  bind: function bind() {
	    var self = this;
	    var el = this.el;
	
	    this.getValue = function () {
	      return el.hasOwnProperty('_value') ? el._value : self.params.number ? toNumber(el.value) : el.value;
	    };
	
	    function getBooleanValue() {
	      var val = el.checked;
	      if (val && el.hasOwnProperty('_trueValue')) {
	        return el._trueValue;
	      }
	      if (!val && el.hasOwnProperty('_falseValue')) {
	        return el._falseValue;
	      }
	      return val;
	    }
	
	    this.listener = function () {
	      var model = self._watcher.value;
	      if (isArray(model)) {
	        var val = self.getValue();
	        if (el.checked) {
	          if (indexOf(model, val) < 0) {
	            model.push(val);
	          }
	        } else {
	          model.$remove(val);
	        }
	      } else {
	        self.set(getBooleanValue());
	      }
	    };
	
	    this.on('change', this.listener);
	    if (el.hasAttribute('checked')) {
	      this.afterBind = this.listener;
	    }
	  },
	
	  update: function update(value) {
	    var el = this.el;
	    if (isArray(value)) {
	      el.checked = indexOf(value, this.getValue()) > -1;
	    } else {
	      if (el.hasOwnProperty('_trueValue')) {
	        el.checked = looseEqual(value, el._trueValue);
	      } else {
	        el.checked = !!value;
	      }
	    }
	  }
	};
	
	var select = {
	
	  bind: function bind() {
	    var self = this;
	    var el = this.el;
	
	    // method to force update DOM using latest value.
	    this.forceUpdate = function () {
	      if (self._watcher) {
	        self.update(self._watcher.get());
	      }
	    };
	
	    // check if this is a multiple select
	    var multiple = this.multiple = el.hasAttribute('multiple');
	
	    // attach listener
	    this.listener = function () {
	      var value = getValue(el, multiple);
	      value = self.params.number ? isArray(value) ? value.map(toNumber) : toNumber(value) : value;
	      self.set(value);
	    };
	    this.on('change', this.listener);
	
	    // if has initial value, set afterBind
	    var initValue = getValue(el, multiple, true);
	    if (multiple && initValue.length || !multiple && initValue !== null) {
	      this.afterBind = this.listener;
	    }
	
	    // All major browsers except Firefox resets
	    // selectedIndex with value -1 to 0 when the element
	    // is appended to a new parent, therefore we have to
	    // force a DOM update whenever that happens...
	    this.vm.$on('hook:attached', this.forceUpdate);
	  },
	
	  update: function update(value) {
	    var el = this.el;
	    el.selectedIndex = -1;
	    var multi = this.multiple && isArray(value);
	    var options = el.options;
	    var i = options.length;
	    var op, val;
	    while (i--) {
	      op = options[i];
	      val = op.hasOwnProperty('_value') ? op._value : op.value;
	      /* eslint-disable eqeqeq */
	      op.selected = multi ? indexOf$1(value, val) > -1 : looseEqual(value, val);
	      /* eslint-enable eqeqeq */
	    }
	  },
	
	  unbind: function unbind() {
	    /* istanbul ignore next */
	    this.vm.$off('hook:attached', this.forceUpdate);
	  }
	};
	
	/**
	 * Get select value
	 *
	 * @param {SelectElement} el
	 * @param {Boolean} multi
	 * @param {Boolean} init
	 * @return {Array|*}
	 */
	
	function getValue(el, multi, init) {
	  var res = multi ? [] : null;
	  var op, val, selected;
	  for (var i = 0, l = el.options.length; i < l; i++) {
	    op = el.options[i];
	    selected = init ? op.hasAttribute('selected') : op.selected;
	    if (selected) {
	      val = op.hasOwnProperty('_value') ? op._value : op.value;
	      if (multi) {
	        res.push(val);
	      } else {
	        return val;
	      }
	    }
	  }
	  return res;
	}
	
	/**
	 * Native Array.indexOf uses strict equal, but in this
	 * case we need to match string/numbers with custom equal.
	 *
	 * @param {Array} arr
	 * @param {*} val
	 */
	
	function indexOf$1(arr, val) {
	  var i = arr.length;
	  while (i--) {
	    if (looseEqual(arr[i], val)) {
	      return i;
	    }
	  }
	  return -1;
	}
	
	var radio = {
	
	  bind: function bind() {
	    var self = this;
	    var el = this.el;
	
	    this.getValue = function () {
	      // value overwrite via v-bind:value
	      if (el.hasOwnProperty('_value')) {
	        return el._value;
	      }
	      var val = el.value;
	      if (self.params.number) {
	        val = toNumber(val);
	      }
	      return val;
	    };
	
	    this.listener = function () {
	      self.set(self.getValue());
	    };
	    this.on('change', this.listener);
	
	    if (el.hasAttribute('checked')) {
	      this.afterBind = this.listener;
	    }
	  },
	
	  update: function update(value) {
	    this.el.checked = looseEqual(value, this.getValue());
	  }
	};
	
	var text$2 = {
	
	  bind: function bind() {
	    var self = this;
	    var el = this.el;
	    var isRange = el.type === 'range';
	    var lazy = this.params.lazy;
	    var number = this.params.number;
	    var debounce = this.params.debounce;
	
	    // handle composition events.
	    //   http://blog.evanyou.me/2014/01/03/composition-event/
	    // skip this for Android because it handles composition
	    // events quite differently. Android doesn't trigger
	    // composition events for language input methods e.g.
	    // Chinese, but instead triggers them for spelling
	    // suggestions... (see Discussion/#162)
	    var composing = false;
	    if (!isAndroid && !isRange) {
	      this.on('compositionstart', function () {
	        composing = true;
	      });
	      this.on('compositionend', function () {
	        composing = false;
	        // in IE11 the "compositionend" event fires AFTER
	        // the "input" event, so the input handler is blocked
	        // at the end... have to call it here.
	        //
	        // #1327: in lazy mode this is unecessary.
	        if (!lazy) {
	          self.listener();
	        }
	      });
	    }
	
	    // prevent messing with the input when user is typing,
	    // and force update on blur.
	    this.focused = false;
	    if (!isRange && !lazy) {
	      this.on('focus', function () {
	        self.focused = true;
	      });
	      this.on('blur', function () {
	        self.focused = false;
	        // do not sync value after fragment removal (#2017)
	        if (!self._frag || self._frag.inserted) {
	          self.rawListener();
	        }
	      });
	    }
	
	    // Now attach the main listener
	    this.listener = this.rawListener = function () {
	      if (composing || !self._bound) {
	        return;
	      }
	      var val = number || isRange ? toNumber(el.value) : el.value;
	      self.set(val);
	      // force update on next tick to avoid lock & same value
	      // also only update when user is not typing
	      nextTick(function () {
	        if (self._bound && !self.focused) {
	          self.update(self._watcher.value);
	        }
	      });
	    };
	
	    // apply debounce
	    if (debounce) {
	      this.listener = _debounce(this.listener, debounce);
	    }
	
	    // Support jQuery events, since jQuery.trigger() doesn't
	    // trigger native events in some cases and some plugins
	    // rely on $.trigger()
	    //
	    // We want to make sure if a listener is attached using
	    // jQuery, it is also removed with jQuery, that's why
	    // we do the check for each directive instance and
	    // store that check result on itself. This also allows
	    // easier test coverage control by unsetting the global
	    // jQuery variable in tests.
	    this.hasjQuery = typeof jQuery === 'function';
	    if (this.hasjQuery) {
	      jQuery(el).on('change', this.listener);
	      if (!lazy) {
	        jQuery(el).on('input', this.listener);
	      }
	    } else {
	      this.on('change', this.listener);
	      if (!lazy) {
	        this.on('input', this.listener);
	      }
	    }
	
	    // IE9 doesn't fire input event on backspace/del/cut
	    if (!lazy && isIE9) {
	      this.on('cut', function () {
	        nextTick(self.listener);
	      });
	      this.on('keyup', function (e) {
	        if (e.keyCode === 46 || e.keyCode === 8) {
	          self.listener();
	        }
	      });
	    }
	
	    // set initial value if present
	    if (el.hasAttribute('value') || el.tagName === 'TEXTAREA' && el.value.trim()) {
	      this.afterBind = this.listener;
	    }
	  },
	
	  update: function update(value) {
	    this.el.value = _toString(value);
	  },
	
	  unbind: function unbind() {
	    var el = this.el;
	    if (this.hasjQuery) {
	      jQuery(el).off('change', this.listener);
	      jQuery(el).off('input', this.listener);
	    }
	  }
	};
	
	var handlers = {
	  text: text$2,
	  radio: radio,
	  select: select,
	  checkbox: checkbox
	};
	
	var model = {
	
	  priority: MODEL,
	  twoWay: true,
	  handlers: handlers,
	  params: ['lazy', 'number', 'debounce'],
	
	  /**
	   * Possible elements:
	   *   <select>
	   *   <textarea>
	   *   <input type="*">
	   *     - text
	   *     - checkbox
	   *     - radio
	   *     - number
	   */
	
	  bind: function bind() {
	    // friendly warning...
	    this.checkFilters();
	    if (this.hasRead && !this.hasWrite) {
	      process.env.NODE_ENV !== 'production' && warn('It seems you are using a read-only filter with ' + 'v-model. You might want to use a two-way filter ' + 'to ensure correct behavior.');
	    }
	    var el = this.el;
	    var tag = el.tagName;
	    var handler;
	    if (tag === 'INPUT') {
	      handler = handlers[el.type] || handlers.text;
	    } else if (tag === 'SELECT') {
	      handler = handlers.select;
	    } else if (tag === 'TEXTAREA') {
	      handler = handlers.text;
	    } else {
	      process.env.NODE_ENV !== 'production' && warn('v-model does not support element type: ' + tag);
	      return;
	    }
	    el.__v_model = this;
	    handler.bind.call(this);
	    this.update = handler.update;
	    this._unbind = handler.unbind;
	  },
	
	  /**
	   * Check read/write filter stats.
	   */
	
	  checkFilters: function checkFilters() {
	    var filters = this.filters;
	    if (!filters) return;
	    var i = filters.length;
	    while (i--) {
	      var filter = resolveAsset(this.vm.$options, 'filters', filters[i].name);
	      if (typeof filter === 'function' || filter.read) {
	        this.hasRead = true;
	      }
	      if (filter.write) {
	        this.hasWrite = true;
	      }
	    }
	  },
	
	  unbind: function unbind() {
	    this.el.__v_model = null;
	    this._unbind && this._unbind();
	  }
	};
	
	var show = {
	
	  bind: function bind() {
	    // check else block
	    var next = this.el.nextElementSibling;
	    if (next && getAttr(next, 'v-else') !== null) {
	      this.elseEl = next;
	    }
	  },
	
	  update: function update(value) {
	    this.apply(this.el, value);
	    if (this.elseEl) {
	      this.apply(this.elseEl, !value);
	    }
	  },
	
	  apply: function apply(el, value) {
	    if (inDoc(el)) {
	      applyTransition(el, value ? 1 : -1, toggle, this.vm);
	    } else {
	      toggle();
	    }
	    function toggle() {
	      el.style.display = value ? '' : 'none';
	    }
	  }
	};
	
	var templateCache = new Cache(1000);
	var idSelectorCache = new Cache(1000);
	
	var map = {
	  efault: [0, '', ''],
	  legend: [1, '<fieldset>', '</fieldset>'],
	  tr: [2, '<table><tbody>', '</tbody></table>'],
	  col: [2, '<table><tbody></tbody><colgroup>', '</colgroup></table>']
	};
	
	map.td = map.th = [3, '<table><tbody><tr>', '</tr></tbody></table>'];
	
	map.option = map.optgroup = [1, '<select multiple="multiple">', '</select>'];
	
	map.thead = map.tbody = map.colgroup = map.caption = map.tfoot = [1, '<table>', '</table>'];
	
	map.g = map.defs = map.symbol = map.use = map.image = map.text = map.circle = map.ellipse = map.line = map.path = map.polygon = map.polyline = map.rect = [1, '<svg ' + 'xmlns="http://www.w3.org/2000/svg" ' + 'xmlns:xlink="http://www.w3.org/1999/xlink" ' + 'xmlns:ev="http://www.w3.org/2001/xml-events"' + 'version="1.1">', '</svg>'];
	
	/**
	 * Check if a node is a supported template node with a
	 * DocumentFragment content.
	 *
	 * @param {Node} node
	 * @return {Boolean}
	 */
	
	function isRealTemplate(node) {
	  return isTemplate(node) && node.content instanceof DocumentFragment;
	}
	
	var tagRE$1 = /<([\w:]+)/;
	var entityRE = /&#?\w+?;/;
	
	/**
	 * Convert a string template to a DocumentFragment.
	 * Determines correct wrapping by tag types. Wrapping
	 * strategy found in jQuery & component/domify.
	 *
	 * @param {String} templateString
	 * @param {Boolean} raw
	 * @return {DocumentFragment}
	 */
	
	function stringToFragment(templateString, raw) {
	  // try a cache hit first
	  var hit = templateCache.get(templateString);
	  if (hit) {
	    return hit;
	  }
	
	  var frag = document.createDocumentFragment();
	  var tagMatch = templateString.match(tagRE$1);
	  var entityMatch = entityRE.test(templateString);
	
	  if (!tagMatch && !entityMatch) {
	    // text only, return a single text node.
	    frag.appendChild(document.createTextNode(templateString));
	  } else {
	
	    var tag = tagMatch && tagMatch[1];
	    var wrap = map[tag] || map.efault;
	    var depth = wrap[0];
	    var prefix = wrap[1];
	    var suffix = wrap[2];
	    var node = document.createElement('div');
	
	    var templateStringToUse = raw ? templateString : templateString.trim();
	    node.innerHTML = prefix + templateStringToUse + suffix;
	    while (depth--) {
	      node = node.lastChild;
	    }
	
	    var child;
	    /* eslint-disable no-cond-assign */
	    while (child = node.firstChild) {
	      /* eslint-enable no-cond-assign */
	      frag.appendChild(child);
	    }
	  }
	
	  templateCache.put(templateString, frag);
	  return frag;
	}
	
	/**
	 * Convert a template node to a DocumentFragment.
	 *
	 * @param {Node} node
	 * @return {DocumentFragment}
	 */
	
	function nodeToFragment(node) {
	  // if its a template tag and the browser supports it,
	  // its content is already a document fragment.
	  if (isRealTemplate(node)) {
	    trimNode(node.content);
	    return node.content;
	  }
	  // script template
	  if (node.tagName === 'SCRIPT') {
	    return stringToFragment(node.textContent);
	  }
	  // normal node, clone it to avoid mutating the original
	  var clonedNode = cloneNode(node);
	  var frag = document.createDocumentFragment();
	  var child;
	  /* eslint-disable no-cond-assign */
	  while (child = clonedNode.firstChild) {
	    /* eslint-enable no-cond-assign */
	    frag.appendChild(child);
	  }
	  trimNode(frag);
	  return frag;
	}
	
	// Test for the presence of the Safari template cloning bug
	// https://bugs.webkit.org/showug.cgi?id=137755
	var hasBrokenTemplate = (function () {
	  /* istanbul ignore else */
	  if (inBrowser) {
	    var a = document.createElement('div');
	    a.innerHTML = '<template>1</template>';
	    return !a.cloneNode(true).firstChild.innerHTML;
	  } else {
	    return false;
	  }
	})();
	
	// Test for IE10/11 textarea placeholder clone bug
	var hasTextareaCloneBug = (function () {
	  /* istanbul ignore else */
	  if (inBrowser) {
	    var t = document.createElement('textarea');
	    t.placeholder = 't';
	    return t.cloneNode(true).value === 't';
	  } else {
	    return false;
	  }
	})();
	
	/**
	 * 1. Deal with Safari cloning nested <template> bug by
	 *    manually cloning all template instances.
	 * 2. Deal with IE10/11 textarea placeholder bug by setting
	 *    the correct value after cloning.
	 *
	 * @param {Element|DocumentFragment} node
	 * @return {Element|DocumentFragment}
	 */
	
	function cloneNode(node) {
	  if (!node.querySelectorAll) {
	    return node.cloneNode();
	  }
	  var res = node.cloneNode(true);
	  var i, original, cloned;
	  /* istanbul ignore if */
	  if (hasBrokenTemplate) {
	    var tempClone = res;
	    if (isRealTemplate(node)) {
	      node = node.content;
	      tempClone = res.content;
	    }
	    original = node.querySelectorAll('template');
	    if (original.length) {
	      cloned = tempClone.querySelectorAll('template');
	      i = cloned.length;
	      while (i--) {
	        cloned[i].parentNode.replaceChild(cloneNode(original[i]), cloned[i]);
	      }
	    }
	  }
	  /* istanbul ignore if */
	  if (hasTextareaCloneBug) {
	    if (node.tagName === 'TEXTAREA') {
	      res.value = node.value;
	    } else {
	      original = node.querySelectorAll('textarea');
	      if (original.length) {
	        cloned = res.querySelectorAll('textarea');
	        i = cloned.length;
	        while (i--) {
	          cloned[i].value = original[i].value;
	        }
	      }
	    }
	  }
	  return res;
	}
	
	/**
	 * Process the template option and normalizes it into a
	 * a DocumentFragment that can be used as a partial or a
	 * instance template.
	 *
	 * @param {*} template
	 *        Possible values include:
	 *        - DocumentFragment object
	 *        - Node object of type Template
	 *        - id selector: '#some-template-id'
	 *        - template string: '<div><span>{{msg}}</span></div>'
	 * @param {Boolean} shouldClone
	 * @param {Boolean} raw
	 *        inline HTML interpolation. Do not check for id
	 *        selector and keep whitespace in the string.
	 * @return {DocumentFragment|undefined}
	 */
	
	function parseTemplate(template, shouldClone, raw) {
	  var node, frag;
	
	  // if the template is already a document fragment,
	  // do nothing
	  if (template instanceof DocumentFragment) {
	    trimNode(template);
	    return shouldClone ? cloneNode(template) : template;
	  }
	
	  if (typeof template === 'string') {
	    // id selector
	    if (!raw && template.charAt(0) === '#') {
	      // id selector can be cached too
	      frag = idSelectorCache.get(template);
	      if (!frag) {
	        node = document.getElementById(template.slice(1));
	        if (node) {
	          frag = nodeToFragment(node);
	          // save selector to cache
	          idSelectorCache.put(template, frag);
	        }
	      }
	    } else {
	      // normal string template
	      frag = stringToFragment(template, raw);
	    }
	  } else if (template.nodeType) {
	    // a direct node
	    frag = nodeToFragment(template);
	  }
	
	  return frag && shouldClone ? cloneNode(frag) : frag;
	}
	
	var template = Object.freeze({
	  cloneNode: cloneNode,
	  parseTemplate: parseTemplate
	});
	
	/**
	 * Abstraction for a partially-compiled fragment.
	 * Can optionally compile content with a child scope.
	 *
	 * @param {Function} linker
	 * @param {Vue} vm
	 * @param {DocumentFragment} frag
	 * @param {Vue} [host]
	 * @param {Object} [scope]
	 */
	function Fragment(linker, vm, frag, host, scope, parentFrag) {
	  this.children = [];
	  this.childFrags = [];
	  this.vm = vm;
	  this.scope = scope;
	  this.inserted = false;
	  this.parentFrag = parentFrag;
	  if (parentFrag) {
	    parentFrag.childFrags.push(this);
	  }
	  this.unlink = linker(vm, frag, host, scope, this);
	  var single = this.single = frag.childNodes.length === 1 &&
	  // do not go single mode if the only node is an anchor
	  !frag.childNodes[0].__vue_anchor;
	  if (single) {
	    this.node = frag.childNodes[0];
	    this.before = singleBefore;
	    this.remove = singleRemove;
	  } else {
	    this.node = createAnchor('fragment-start');
	    this.end = createAnchor('fragment-end');
	    this.frag = frag;
	    prepend(this.node, frag);
	    frag.appendChild(this.end);
	    this.before = multiBefore;
	    this.remove = multiRemove;
	  }
	  this.node.__vfrag__ = this;
	}
	
	/**
	 * Call attach/detach for all components contained within
	 * this fragment. Also do so recursively for all child
	 * fragments.
	 *
	 * @param {Function} hook
	 */
	
	Fragment.prototype.callHook = function (hook) {
	  var i, l;
	  for (i = 0, l = this.childFrags.length; i < l; i++) {
	    this.childFrags[i].callHook(hook);
	  }
	  for (i = 0, l = this.children.length; i < l; i++) {
	    hook(this.children[i]);
	  }
	};
	
	/**
	 * Insert fragment before target, single node version
	 *
	 * @param {Node} target
	 * @param {Boolean} withTransition
	 */
	
	function singleBefore(target, withTransition) {
	  this.inserted = true;
	  var method = withTransition !== false ? beforeWithTransition : before;
	  method(this.node, target, this.vm);
	  if (inDoc(this.node)) {
	    this.callHook(attach);
	  }
	}
	
	/**
	 * Remove fragment, single node version
	 */
	
	function singleRemove() {
	  this.inserted = false;
	  var shouldCallRemove = inDoc(this.node);
	  var self = this;
	  this.beforeRemove();
	  removeWithTransition(this.node, this.vm, function () {
	    if (shouldCallRemove) {
	      self.callHook(detach);
	    }
	    self.destroy();
	  });
	}
	
	/**
	 * Insert fragment before target, multi-nodes version
	 *
	 * @param {Node} target
	 * @param {Boolean} withTransition
	 */
	
	function multiBefore(target, withTransition) {
	  this.inserted = true;
	  var vm = this.vm;
	  var method = withTransition !== false ? beforeWithTransition : before;
	  mapNodeRange(this.node, this.end, function (node) {
	    method(node, target, vm);
	  });
	  if (inDoc(this.node)) {
	    this.callHook(attach);
	  }
	}
	
	/**
	 * Remove fragment, multi-nodes version
	 */
	
	function multiRemove() {
	  this.inserted = false;
	  var self = this;
	  var shouldCallRemove = inDoc(this.node);
	  this.beforeRemove();
	  removeNodeRange(this.node, this.end, this.vm, this.frag, function () {
	    if (shouldCallRemove) {
	      self.callHook(detach);
	    }
	    self.destroy();
	  });
	}
	
	/**
	 * Prepare the fragment for removal.
	 */
	
	Fragment.prototype.beforeRemove = function () {
	  var i, l;
	  for (i = 0, l = this.childFrags.length; i < l; i++) {
	    // call the same method recursively on child
	    // fragments, depth-first
	    this.childFrags[i].beforeRemove(false);
	  }
	  for (i = 0, l = this.children.length; i < l; i++) {
	    // Call destroy for all contained instances,
	    // with remove:false and defer:true.
	    // Defer is necessary because we need to
	    // keep the children to call detach hooks
	    // on them.
	    this.children[i].$destroy(false, true);
	  }
	  var dirs = this.unlink.dirs;
	  for (i = 0, l = dirs.length; i < l; i++) {
	    // disable the watchers on all the directives
	    // so that the rendered content stays the same
	    // during removal.
	    dirs[i]._watcher && dirs[i]._watcher.teardown();
	  }
	};
	
	/**
	 * Destroy the fragment.
	 */
	
	Fragment.prototype.destroy = function () {
	  if (this.parentFrag) {
	    this.parentFrag.childFrags.$remove(this);
	  }
	  this.node.__vfrag__ = null;
	  this.unlink();
	};
	
	/**
	 * Call attach hook for a Vue instance.
	 *
	 * @param {Vue} child
	 */
	
	function attach(child) {
	  if (!child._isAttached) {
	    child._callHook('attached');
	  }
	}
	
	/**
	 * Call detach hook for a Vue instance.
	 *
	 * @param {Vue} child
	 */
	
	function detach(child) {
	  if (child._isAttached) {
	    child._callHook('detached');
	  }
	}
	
	var linkerCache = new Cache(5000);
	
	/**
	 * A factory that can be used to create instances of a
	 * fragment. Caches the compiled linker if possible.
	 *
	 * @param {Vue} vm
	 * @param {Element|String} el
	 */
	function FragmentFactory(vm, el) {
	  this.vm = vm;
	  var template;
	  var isString = typeof el === 'string';
	  if (isString || isTemplate(el)) {
	    template = parseTemplate(el, true);
	  } else {
	    template = document.createDocumentFragment();
	    template.appendChild(el);
	  }
	  this.template = template;
	  // linker can be cached, but only for components
	  var linker;
	  var cid = vm.constructor.cid;
	  if (cid > 0) {
	    var cacheId = cid + (isString ? el : el.outerHTML);
	    linker = linkerCache.get(cacheId);
	    if (!linker) {
	      linker = compile(template, vm.$options, true);
	      linkerCache.put(cacheId, linker);
	    }
	  } else {
	    linker = compile(template, vm.$options, true);
	  }
	  this.linker = linker;
	}
	
	/**
	 * Create a fragment instance with given host and scope.
	 *
	 * @param {Vue} host
	 * @param {Object} scope
	 * @param {Fragment} parentFrag
	 */
	
	FragmentFactory.prototype.create = function (host, scope, parentFrag) {
	  var frag = cloneNode(this.template);
	  return new Fragment(this.linker, this.vm, frag, host, scope, parentFrag);
	};
	
	var vIf = {
	
	  priority: IF,
	
	  bind: function bind() {
	    var el = this.el;
	    if (!el.__vue__) {
	      // check else block
	      var next = el.nextElementSibling;
	      if (next && getAttr(next, 'v-else') !== null) {
	        remove(next);
	        this.elseFactory = new FragmentFactory(this.vm, next);
	      }
	      // check main block
	      this.anchor = createAnchor('v-if');
	      replace(el, this.anchor);
	      this.factory = new FragmentFactory(this.vm, el);
	    } else {
	      process.env.NODE_ENV !== 'production' && warn('v-if="' + this.expression + '" cannot be ' + 'used on an instance root element.');
	      this.invalid = true;
	    }
	  },
	
	  update: function update(value) {
	    if (this.invalid) return;
	    if (value) {
	      if (!this.frag) {
	        this.insert();
	      }
	    } else {
	      this.remove();
	    }
	  },
	
	  insert: function insert() {
	    if (this.elseFrag) {
	      this.elseFrag.remove();
	      this.elseFrag = null;
	    }
	    this.frag = this.factory.create(this._host, this._scope, this._frag);
	    this.frag.before(this.anchor);
	  },
	
	  remove: function remove() {
	    if (this.frag) {
	      this.frag.remove();
	      this.frag = null;
	    }
	    if (this.elseFactory && !this.elseFrag) {
	      this.elseFrag = this.elseFactory.create(this._host, this._scope, this._frag);
	      this.elseFrag.before(this.anchor);
	    }
	  },
	
	  unbind: function unbind() {
	    if (this.frag) {
	      this.frag.destroy();
	    }
	  }
	};
	
	var uid$1 = 0;
	
	var vFor = {
	
	  priority: FOR,
	
	  params: ['track-by', 'stagger', 'enter-stagger', 'leave-stagger'],
	
	  bind: function bind() {
	    // support "item in items" syntax
	    var inMatch = this.expression.match(/(.*) in (.*)/);
	    if (inMatch) {
	      var itMatch = inMatch[1].match(/\((.*),(.*)\)/);
	      if (itMatch) {
	        this.iterator = itMatch[1].trim();
	        this.alias = itMatch[2].trim();
	      } else {
	        this.alias = inMatch[1].trim();
	      }
	      this.expression = inMatch[2];
	    }
	
	    if (!this.alias) {
	      process.env.NODE_ENV !== 'production' && warn('Alias is required in v-for.');
	      return;
	    }
	
	    // uid as a cache identifier
	    this.id = '__v-for__' + ++uid$1;
	
	    // check if this is an option list,
	    // so that we know if we need to update the <select>'s
	    // v-model when the option list has changed.
	    // because v-model has a lower priority than v-for,
	    // the v-model is not bound here yet, so we have to
	    // retrive it in the actual updateModel() function.
	    var tag = this.el.tagName;
	    this.isOption = (tag === 'OPTION' || tag === 'OPTGROUP') && this.el.parentNode.tagName === 'SELECT';
	
	    // setup anchor nodes
	    this.start = createAnchor('v-for-start');
	    this.end = createAnchor('v-for-end');
	    replace(this.el, this.end);
	    before(this.start, this.end);
	
	    // cache
	    this.cache = Object.create(null);
	
	    // fragment factory
	    this.factory = new FragmentFactory(this.vm, this.el);
	  },
	
	  update: function update(data) {
	    this.diff(data);
	    this.updateRef();
	    this.updateModel();
	  },
	
	  /**
	   * Diff, based on new data and old data, determine the
	   * minimum amount of DOM manipulations needed to make the
	   * DOM reflect the new data Array.
	   *
	   * The algorithm diffs the new data Array by storing a
	   * hidden reference to an owner vm instance on previously
	   * seen data. This allows us to achieve O(n) which is
	   * better than a levenshtein distance based algorithm,
	   * which is O(m * n).
	   *
	   * @param {Array} data
	   */
	
	  diff: function diff(data) {
	    // check if the Array was converted from an Object
	    var item = data[0];
	    var convertedFromObject = this.fromObject = isObject(item) && hasOwn(item, '$key') && hasOwn(item, '$value');
	
	    var trackByKey = this.params.trackBy;
	    var oldFrags = this.frags;
	    var frags = this.frags = new Array(data.length);
	    var alias = this.alias;
	    var iterator = this.iterator;
	    var start = this.start;
	    var end = this.end;
	    var inDocument = inDoc(start);
	    var init = !oldFrags;
	    var i, l, frag, key, value, primitive;
	
	    // First pass, go through the new Array and fill up
	    // the new frags array. If a piece of data has a cached
	    // instance for it, we reuse it. Otherwise build a new
	    // instance.
	    for (i = 0, l = data.length; i < l; i++) {
	      item = data[i];
	      key = convertedFromObject ? item.$key : null;
	      value = convertedFromObject ? item.$value : item;
	      primitive = !isObject(value);
	      frag = !init && this.getCachedFrag(value, i, key);
	      if (frag) {
	        // reusable fragment
	        frag.reused = true;
	        // update $index
	        frag.scope.$index = i;
	        // update $key
	        if (key) {
	          frag.scope.$key = key;
	        }
	        // update iterator
	        if (iterator) {
	          frag.scope[iterator] = key !== null ? key : i;
	        }
	        // update data for track-by, object repeat &
	        // primitive values.
	        if (trackByKey || convertedFromObject || primitive) {
	          frag.scope[alias] = value;
	        }
	      } else {
	        // new isntance
	        frag = this.create(value, alias, i, key);
	        frag.fresh = !init;
	      }
	      frags[i] = frag;
	      if (init) {
	        frag.before(end);
	      }
	    }
	
	    // we're done for the initial render.
	    if (init) {
	      return;
	    }
	
	    // Second pass, go through the old fragments and
	    // destroy those who are not reused (and remove them
	    // from cache)
	    var removalIndex = 0;
	    var totalRemoved = oldFrags.length - frags.length;
	    for (i = 0, l = oldFrags.length; i < l; i++) {
	      frag = oldFrags[i];
	      if (!frag.reused) {
	        this.deleteCachedFrag(frag);
	        this.remove(frag, removalIndex++, totalRemoved, inDocument);
	      }
	    }
	
	    // Final pass, move/insert new fragments into the
	    // right place.
	    var targetPrev, prevEl, currentPrev;
	    var insertionIndex = 0;
	    for (i = 0, l = frags.length; i < l; i++) {
	      frag = frags[i];
	      // this is the frag that we should be after
	      targetPrev = frags[i - 1];
	      prevEl = targetPrev ? targetPrev.staggerCb ? targetPrev.staggerAnchor : targetPrev.end || targetPrev.node : start;
	      if (frag.reused && !frag.staggerCb) {
	        currentPrev = findPrevFrag(frag, start, this.id);
	        if (currentPrev !== targetPrev && (!currentPrev ||
	        // optimization for moving a single item.
	        // thanks to suggestions by @livoras in #1807
	        findPrevFrag(currentPrev, start, this.id) !== targetPrev)) {
	          this.move(frag, prevEl);
	        }
	      } else {
	        // new instance, or still in stagger.
	        // insert with updated stagger index.
	        this.insert(frag, insertionIndex++, prevEl, inDocument);
	      }
	      frag.reused = frag.fresh = false;
	    }
	  },
	
	  /**
	   * Create a new fragment instance.
	   *
	   * @param {*} value
	   * @param {String} alias
	   * @param {Number} index
	   * @param {String} [key]
	   * @return {Fragment}
	   */
	
	  create: function create(value, alias, index, key) {
	    var host = this._host;
	    // create iteration scope
	    var parentScope = this._scope || this.vm;
	    var scope = Object.create(parentScope);
	    // ref holder for the scope
	    scope.$refs = Object.create(parentScope.$refs);
	    scope.$els = Object.create(parentScope.$els);
	    // make sure point $parent to parent scope
	    scope.$parent = parentScope;
	    // for two-way binding on alias
	    scope.$forContext = this;
	    // define scope properties
	    defineReactive(scope, alias, value);
	    defineReactive(scope, '$index', index);
	    if (key) {
	      defineReactive(scope, '$key', key);
	    } else if (scope.$key) {
	      // avoid accidental fallback
	      def(scope, '$key', null);
	    }
	    if (this.iterator) {
	      defineReactive(scope, this.iterator, key !== null ? key : index);
	    }
	    var frag = this.factory.create(host, scope, this._frag);
	    frag.forId = this.id;
	    this.cacheFrag(value, frag, index, key);
	    return frag;
	  },
	
	  /**
	   * Update the v-ref on owner vm.
	   */
	
	  updateRef: function updateRef() {
	    var ref = this.descriptor.ref;
	    if (!ref) return;
	    var hash = (this._scope || this.vm).$refs;
	    var refs;
	    if (!this.fromObject) {
	      refs = this.frags.map(findVmFromFrag);
	    } else {
	      refs = {};
	      this.frags.forEach(function (frag) {
	        refs[frag.scope.$key] = findVmFromFrag(frag);
	      });
	    }
	    hash[ref] = refs;
	  },
	
	  /**
	   * For option lists, update the containing v-model on
	   * parent <select>.
	   */
	
	  updateModel: function updateModel() {
	    if (this.isOption) {
	      var parent = this.start.parentNode;
	      var model = parent && parent.__v_model;
	      if (model) {
	        model.forceUpdate();
	      }
	    }
	  },
	
	  /**
	   * Insert a fragment. Handles staggering.
	   *
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {Node} prevEl
	   * @param {Boolean} inDocument
	   */
	
	  insert: function insert(frag, index, prevEl, inDocument) {
	    if (frag.staggerCb) {
	      frag.staggerCb.cancel();
	      frag.staggerCb = null;
	    }
	    var staggerAmount = this.getStagger(frag, index, null, 'enter');
	    if (inDocument && staggerAmount) {
	      // create an anchor and insert it synchronously,
	      // so that we can resolve the correct order without
	      // worrying about some elements not inserted yet
	      var anchor = frag.staggerAnchor;
	      if (!anchor) {
	        anchor = frag.staggerAnchor = createAnchor('stagger-anchor');
	        anchor.__vfrag__ = frag;
	      }
	      after(anchor, prevEl);
	      var op = frag.staggerCb = cancellable(function () {
	        frag.staggerCb = null;
	        frag.before(anchor);
	        remove(anchor);
	      });
	      setTimeout(op, staggerAmount);
	    } else {
	      frag.before(prevEl.nextSibling);
	    }
	  },
	
	  /**
	   * Remove a fragment. Handles staggering.
	   *
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {Number} total
	   * @param {Boolean} inDocument
	   */
	
	  remove: function remove(frag, index, total, inDocument) {
	    if (frag.staggerCb) {
	      frag.staggerCb.cancel();
	      frag.staggerCb = null;
	      // it's not possible for the same frag to be removed
	      // twice, so if we have a pending stagger callback,
	      // it means this frag is queued for enter but removed
	      // before its transition started. Since it is already
	      // destroyed, we can just leave it in detached state.
	      return;
	    }
	    var staggerAmount = this.getStagger(frag, index, total, 'leave');
	    if (inDocument && staggerAmount) {
	      var op = frag.staggerCb = cancellable(function () {
	        frag.staggerCb = null;
	        frag.remove();
	      });
	      setTimeout(op, staggerAmount);
	    } else {
	      frag.remove();
	    }
	  },
	
	  /**
	   * Move a fragment to a new position.
	   * Force no transition.
	   *
	   * @param {Fragment} frag
	   * @param {Node} prevEl
	   */
	
	  move: function move(frag, prevEl) {
	    // fix a common issue with Sortable:
	    // if prevEl doesn't have nextSibling, this means it's
	    // been dragged after the end anchor. Just re-position
	    // the end anchor to the end of the container.
	    /* istanbul ignore if */
	    if (!prevEl.nextSibling) {
	      this.end.parentNode.appendChild(this.end);
	    }
	    frag.before(prevEl.nextSibling, false);
	  },
	
	  /**
	   * Cache a fragment using track-by or the object key.
	   *
	   * @param {*} value
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {String} [key]
	   */
	
	  cacheFrag: function cacheFrag(value, frag, index, key) {
	    var trackByKey = this.params.trackBy;
	    var cache = this.cache;
	    var primitive = !isObject(value);
	    var id;
	    if (key || trackByKey || primitive) {
	      id = trackByKey ? trackByKey === '$index' ? index : value[trackByKey] : key || value;
	      if (!cache[id]) {
	        cache[id] = frag;
	      } else if (trackByKey !== '$index') {
	        process.env.NODE_ENV !== 'production' && this.warnDuplicate(value);
	      }
	    } else {
	      id = this.id;
	      if (hasOwn(value, id)) {
	        if (value[id] === null) {
	          value[id] = frag;
	        } else {
	          process.env.NODE_ENV !== 'production' && this.warnDuplicate(value);
	        }
	      } else {
	        def(value, id, frag);
	      }
	    }
	    frag.raw = value;
	  },
	
	  /**
	   * Get a cached fragment from the value/index/key
	   *
	   * @param {*} value
	   * @param {Number} index
	   * @param {String} key
	   * @return {Fragment}
	   */
	
	  getCachedFrag: function getCachedFrag(value, index, key) {
	    var trackByKey = this.params.trackBy;
	    var primitive = !isObject(value);
	    var frag;
	    if (key || trackByKey || primitive) {
	      var id = trackByKey ? trackByKey === '$index' ? index : value[trackByKey] : key || value;
	      frag = this.cache[id];
	    } else {
	      frag = value[this.id];
	    }
	    if (frag && (frag.reused || frag.fresh)) {
	      process.env.NODE_ENV !== 'production' && this.warnDuplicate(value);
	    }
	    return frag;
	  },
	
	  /**
	   * Delete a fragment from cache.
	   *
	   * @param {Fragment} frag
	   */
	
	  deleteCachedFrag: function deleteCachedFrag(frag) {
	    var value = frag.raw;
	    var trackByKey = this.params.trackBy;
	    var scope = frag.scope;
	    var index = scope.$index;
	    // fix #948: avoid accidentally fall through to
	    // a parent repeater which happens to have $key.
	    var key = hasOwn(scope, '$key') && scope.$key;
	    var primitive = !isObject(value);
	    if (trackByKey || key || primitive) {
	      var id = trackByKey ? trackByKey === '$index' ? index : value[trackByKey] : key || value;
	      this.cache[id] = null;
	    } else {
	      value[this.id] = null;
	      frag.raw = null;
	    }
	  },
	
	  /**
	   * Get the stagger amount for an insertion/removal.
	   *
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {Number} total
	   * @param {String} type
	   */
	
	  getStagger: function getStagger(frag, index, total, type) {
	    type = type + 'Stagger';
	    var trans = frag.node.__v_trans;
	    var hooks = trans && trans.hooks;
	    var hook = hooks && (hooks[type] || hooks.stagger);
	    return hook ? hook.call(frag, index, total) : index * parseInt(this.params[type] || this.params.stagger, 10);
	  },
	
	  /**
	   * Pre-process the value before piping it through the
	   * filters. This is passed to and called by the watcher.
	   */
	
	  _preProcess: function _preProcess(value) {
	    // regardless of type, store the un-filtered raw value.
	    this.rawValue = value;
	    return value;
	  },
	
	  /**
	   * Post-process the value after it has been piped through
	   * the filters. This is passed to and called by the watcher.
	   *
	   * It is necessary for this to be called during the
	   * wathcer's dependency collection phase because we want
	   * the v-for to update when the source Object is mutated.
	   */
	
	  _postProcess: function _postProcess(value) {
	    if (isArray(value)) {
	      return value;
	    } else if (isPlainObject(value)) {
	      // convert plain object to array.
	      var keys = Object.keys(value);
	      var i = keys.length;
	      var res = new Array(i);
	      var key;
	      while (i--) {
	        key = keys[i];
	        res[i] = {
	          $key: key,
	          $value: value[key]
	        };
	      }
	      return res;
	    } else {
	      if (typeof value === 'number') {
	        value = range(value);
	      }
	      return value || [];
	    }
	  },
	
	  unbind: function unbind() {
	    if (this.descriptor.ref) {
	      (this._scope || this.vm).$refs[this.descriptor.ref] = null;
	    }
	    if (this.frags) {
	      var i = this.frags.length;
	      var frag;
	      while (i--) {
	        frag = this.frags[i];
	        this.deleteCachedFrag(frag);
	        frag.destroy();
	      }
	    }
	  }
	};
	
	/**
	 * Helper to find the previous element that is a fragment
	 * anchor. This is necessary because a destroyed frag's
	 * element could still be lingering in the DOM before its
	 * leaving transition finishes, but its inserted flag
	 * should have been set to false so we can skip them.
	 *
	 * If this is a block repeat, we want to make sure we only
	 * return frag that is bound to this v-for. (see #929)
	 *
	 * @param {Fragment} frag
	 * @param {Comment|Text} anchor
	 * @param {String} id
	 * @return {Fragment}
	 */
	
	function findPrevFrag(frag, anchor, id) {
	  var el = frag.node.previousSibling;
	  /* istanbul ignore if */
	  if (!el) return;
	  frag = el.__vfrag__;
	  while ((!frag || frag.forId !== id || !frag.inserted) && el !== anchor) {
	    el = el.previousSibling;
	    /* istanbul ignore if */
	    if (!el) return;
	    frag = el.__vfrag__;
	  }
	  return frag;
	}
	
	/**
	 * Find a vm from a fragment.
	 *
	 * @param {Fragment} frag
	 * @return {Vue|undefined}
	 */
	
	function findVmFromFrag(frag) {
	  var node = frag.node;
	  // handle multi-node frag
	  if (frag.end) {
	    while (!node.__vue__ && node !== frag.end && node.nextSibling) {
	      node = node.nextSibling;
	    }
	  }
	  return node.__vue__;
	}
	
	/**
	 * Create a range array from given number.
	 *
	 * @param {Number} n
	 * @return {Array}
	 */
	
	function range(n) {
	  var i = -1;
	  var ret = new Array(n);
	  while (++i < n) {
	    ret[i] = i;
	  }
	  return ret;
	}
	
	if (process.env.NODE_ENV !== 'production') {
	  vFor.warnDuplicate = function (value) {
	    warn('Duplicate value found in v-for="' + this.descriptor.raw + '": ' + JSON.stringify(value) + '. Use track-by="$index" if ' + 'you are expecting duplicate values.');
	  };
	}
	
	var html = {
	
	  bind: function bind() {
	    // a comment node means this is a binding for
	    // {{{ inline unescaped html }}}
	    if (this.el.nodeType === 8) {
	      // hold nodes
	      this.nodes = [];
	      // replace the placeholder with proper anchor
	      this.anchor = createAnchor('v-html');
	      replace(this.el, this.anchor);
	    }
	  },
	
	  update: function update(value) {
	    value = _toString(value);
	    if (this.nodes) {
	      this.swap(value);
	    } else {
	      this.el.innerHTML = value;
	    }
	  },
	
	  swap: function swap(value) {
	    // remove old nodes
	    var i = this.nodes.length;
	    while (i--) {
	      remove(this.nodes[i]);
	    }
	    // convert new value to a fragment
	    // do not attempt to retrieve from id selector
	    var frag = parseTemplate(value, true, true);
	    // save a reference to these nodes so we can remove later
	    this.nodes = toArray(frag.childNodes);
	    before(frag, this.anchor);
	  }
	};
	
	var text = {
	
	  bind: function bind() {
	    this.attr = this.el.nodeType === 3 ? 'data' : 'textContent';
	  },
	
	  update: function update(value) {
	    this.el[this.attr] = _toString(value);
	  }
	};
	
	// must export plain object
	var publicDirectives = {
	  text: text,
	  html: html,
	  'for': vFor,
	  'if': vIf,
	  show: show,
	  model: model,
	  on: on,
	  bind: bind,
	  el: el,
	  ref: ref,
	  cloak: cloak
	};
	
	var queue$1 = [];
	var queued = false;
	
	/**
	 * Push a job into the queue.
	 *
	 * @param {Function} job
	 */
	
	function pushJob(job) {
	  queue$1.push(job);
	  if (!queued) {
	    queued = true;
	    nextTick(flush);
	  }
	}
	
	/**
	 * Flush the queue, and do one forced reflow before
	 * triggering transitions.
	 */
	
	function flush() {
	  // Force layout
	  var f = document.documentElement.offsetHeight;
	  for (var i = 0; i < queue$1.length; i++) {
	    queue$1[i]();
	  }
	  queue$1 = [];
	  queued = false;
	  // dummy return, so js linters don't complain about
	  // unused variable f
	  return f;
	}
	
	var TYPE_TRANSITION = 'transition';
	var TYPE_ANIMATION = 'animation';
	var transDurationProp = transitionProp + 'Duration';
	var animDurationProp = animationProp + 'Duration';
	
	/**
	 * A Transition object that encapsulates the state and logic
	 * of the transition.
	 *
	 * @param {Element} el
	 * @param {String} id
	 * @param {Object} hooks
	 * @param {Vue} vm
	 */
	function Transition(el, id, hooks, vm) {
	  this.id = id;
	  this.el = el;
	  this.enterClass = hooks && hooks.enterClass || id + '-enter';
	  this.leaveClass = hooks && hooks.leaveClass || id + '-leave';
	  this.hooks = hooks;
	  this.vm = vm;
	  // async state
	  this.pendingCssEvent = this.pendingCssCb = this.cancel = this.pendingJsCb = this.op = this.cb = null;
	  this.justEntered = false;
	  this.entered = this.left = false;
	  this.typeCache = {};
	  // check css transition type
	  this.type = hooks && hooks.type;
	  /* istanbul ignore if */
	  if (process.env.NODE_ENV !== 'production') {
	    if (this.type && this.type !== TYPE_TRANSITION && this.type !== TYPE_ANIMATION) {
	      warn('invalid CSS transition type for transition="' + this.id + '": ' + this.type);
	    }
	  }
	  // bind
	  var self = this;['enterNextTick', 'enterDone', 'leaveNextTick', 'leaveDone'].forEach(function (m) {
	    self[m] = bind$1(self[m], self);
	  });
	}
	
	var p$1 = Transition.prototype;
	
	/**
	 * Start an entering transition.
	 *
	 * 1. enter transition triggered
	 * 2. call beforeEnter hook
	 * 3. add enter class
	 * 4. insert/show element
	 * 5. call enter hook (with possible explicit js callback)
	 * 6. reflow
	 * 7. based on transition type:
	 *    - transition:
	 *        remove class now, wait for transitionend,
	 *        then done if there's no explicit js callback.
	 *    - animation:
	 *        wait for animationend, remove class,
	 *        then done if there's no explicit js callback.
	 *    - no css transition:
	 *        done now if there's no explicit js callback.
	 * 8. wait for either done or js callback, then call
	 *    afterEnter hook.
	 *
	 * @param {Function} op - insert/show the element
	 * @param {Function} [cb]
	 */
	
	p$1.enter = function (op, cb) {
	  this.cancelPending();
	  this.callHook('beforeEnter');
	  this.cb = cb;
	  addClass(this.el, this.enterClass);
	  op();
	  this.entered = false;
	  this.callHookWithCb('enter');
	  if (this.entered) {
	    return; // user called done synchronously.
	  }
	  this.cancel = this.hooks && this.hooks.enterCancelled;
	  pushJob(this.enterNextTick);
	};
	
	/**
	 * The "nextTick" phase of an entering transition, which is
	 * to be pushed into a queue and executed after a reflow so
	 * that removing the class can trigger a CSS transition.
	 */
	
	p$1.enterNextTick = function () {
	
	  // Important hack:
	  // in Chrome, if a just-entered element is applied the
	  // leave class while its interpolated property still has
	  // a very small value (within one frame), Chrome will
	  // skip the leave transition entirely and not firing the
	  // transtionend event. Therefore we need to protected
	  // against such cases using a one-frame timeout.
	  this.justEntered = true;
	  var self = this;
	  setTimeout(function () {
	    self.justEntered = false;
	  }, 17);
	
	  var enterDone = this.enterDone;
	  var type = this.getCssTransitionType(this.enterClass);
	  if (!this.pendingJsCb) {
	    if (type === TYPE_TRANSITION) {
	      // trigger transition by removing enter class now
	      removeClass(this.el, this.enterClass);
	      this.setupCssCb(transitionEndEvent, enterDone);
	    } else if (type === TYPE_ANIMATION) {
	      this.setupCssCb(animationEndEvent, enterDone);
	    } else {
	      enterDone();
	    }
	  } else if (type === TYPE_TRANSITION) {
	    removeClass(this.el, this.enterClass);
	  }
	};
	
	/**
	 * The "cleanup" phase of an entering transition.
	 */
	
	p$1.enterDone = function () {
	  this.entered = true;
	  this.cancel = this.pendingJsCb = null;
	  removeClass(this.el, this.enterClass);
	  this.callHook('afterEnter');
	  if (this.cb) this.cb();
	};
	
	/**
	 * Start a leaving transition.
	 *
	 * 1. leave transition triggered.
	 * 2. call beforeLeave hook
	 * 3. add leave class (trigger css transition)
	 * 4. call leave hook (with possible explicit js callback)
	 * 5. reflow if no explicit js callback is provided
	 * 6. based on transition type:
	 *    - transition or animation:
	 *        wait for end event, remove class, then done if
	 *        there's no explicit js callback.
	 *    - no css transition:
	 *        done if there's no explicit js callback.
	 * 7. wait for either done or js callback, then call
	 *    afterLeave hook.
	 *
	 * @param {Function} op - remove/hide the element
	 * @param {Function} [cb]
	 */
	
	p$1.leave = function (op, cb) {
	  this.cancelPending();
	  this.callHook('beforeLeave');
	  this.op = op;
	  this.cb = cb;
	  addClass(this.el, this.leaveClass);
	  this.left = false;
	  this.callHookWithCb('leave');
	  if (this.left) {
	    return; // user called done synchronously.
	  }
	  this.cancel = this.hooks && this.hooks.leaveCancelled;
	  // only need to handle leaveDone if
	  // 1. the transition is already done (synchronously called
	  //    by the user, which causes this.op set to null)
	  // 2. there's no explicit js callback
	  if (this.op && !this.pendingJsCb) {
	    // if a CSS transition leaves immediately after enter,
	    // the transitionend event never fires. therefore we
	    // detect such cases and end the leave immediately.
	    if (this.justEntered) {
	      this.leaveDone();
	    } else {
	      pushJob(this.leaveNextTick);
	    }
	  }
	};
	
	/**
	 * The "nextTick" phase of a leaving transition.
	 */
	
	p$1.leaveNextTick = function () {
	  var type = this.getCssTransitionType(this.leaveClass);
	  if (type) {
	    var event = type === TYPE_TRANSITION ? transitionEndEvent : animationEndEvent;
	    this.setupCssCb(event, this.leaveDone);
	  } else {
	    this.leaveDone();
	  }
	};
	
	/**
	 * The "cleanup" phase of a leaving transition.
	 */
	
	p$1.leaveDone = function () {
	  this.left = true;
	  this.cancel = this.pendingJsCb = null;
	  this.op();
	  removeClass(this.el, this.leaveClass);
	  this.callHook('afterLeave');
	  if (this.cb) this.cb();
	  this.op = null;
	};
	
	/**
	 * Cancel any pending callbacks from a previously running
	 * but not finished transition.
	 */
	
	p$1.cancelPending = function () {
	  this.op = this.cb = null;
	  var hasPending = false;
	  if (this.pendingCssCb) {
	    hasPending = true;
	    off(this.el, this.pendingCssEvent, this.pendingCssCb);
	    this.pendingCssEvent = this.pendingCssCb = null;
	  }
	  if (this.pendingJsCb) {
	    hasPending = true;
	    this.pendingJsCb.cancel();
	    this.pendingJsCb = null;
	  }
	  if (hasPending) {
	    removeClass(this.el, this.enterClass);
	    removeClass(this.el, this.leaveClass);
	  }
	  if (this.cancel) {
	    this.cancel.call(this.vm, this.el);
	    this.cancel = null;
	  }
	};
	
	/**
	 * Call a user-provided synchronous hook function.
	 *
	 * @param {String} type
	 */
	
	p$1.callHook = function (type) {
	  if (this.hooks && this.hooks[type]) {
	    this.hooks[type].call(this.vm, this.el);
	  }
	};
	
	/**
	 * Call a user-provided, potentially-async hook function.
	 * We check for the length of arguments to see if the hook
	 * expects a `done` callback. If true, the transition's end
	 * will be determined by when the user calls that callback;
	 * otherwise, the end is determined by the CSS transition or
	 * animation.
	 *
	 * @param {String} type
	 */
	
	p$1.callHookWithCb = function (type) {
	  var hook = this.hooks && this.hooks[type];
	  if (hook) {
	    if (hook.length > 1) {
	      this.pendingJsCb = cancellable(this[type + 'Done']);
	    }
	    hook.call(this.vm, this.el, this.pendingJsCb);
	  }
	};
	
	/**
	 * Get an element's transition type based on the
	 * calculated styles.
	 *
	 * @param {String} className
	 * @return {Number}
	 */
	
	p$1.getCssTransitionType = function (className) {
	  /* istanbul ignore if */
	  if (!transitionEndEvent ||
	  // skip CSS transitions if page is not visible -
	  // this solves the issue of transitionend events not
	  // firing until the page is visible again.
	  // pageVisibility API is supported in IE10+, same as
	  // CSS transitions.
	  document.hidden ||
	  // explicit js-only transition
	  this.hooks && this.hooks.css === false ||
	  // element is hidden
	  isHidden(this.el)) {
	    return;
	  }
	  var type = this.type || this.typeCache[className];
	  if (type) return type;
	  var inlineStyles = this.el.style;
	  var computedStyles = window.getComputedStyle(this.el);
	  var transDuration = inlineStyles[transDurationProp] || computedStyles[transDurationProp];
	  if (transDuration && transDuration !== '0s') {
	    type = TYPE_TRANSITION;
	  } else {
	    var animDuration = inlineStyles[animDurationProp] || computedStyles[animDurationProp];
	    if (animDuration && animDuration !== '0s') {
	      type = TYPE_ANIMATION;
	    }
	  }
	  if (type) {
	    this.typeCache[className] = type;
	  }
	  return type;
	};
	
	/**
	 * Setup a CSS transitionend/animationend callback.
	 *
	 * @param {String} event
	 * @param {Function} cb
	 */
	
	p$1.setupCssCb = function (event, cb) {
	  this.pendingCssEvent = event;
	  var self = this;
	  var el = this.el;
	  var onEnd = this.pendingCssCb = function (e) {
	    if (e.target === el) {
	      off(el, event, onEnd);
	      self.pendingCssEvent = self.pendingCssCb = null;
	      if (!self.pendingJsCb && cb) {
	        cb();
	      }
	    }
	  };
	  on$1(el, event, onEnd);
	};
	
	/**
	 * Check if an element is hidden - in that case we can just
	 * skip the transition alltogether.
	 *
	 * @param {Element} el
	 * @return {Boolean}
	 */
	
	function isHidden(el) {
	  return !(el.offsetWidth || el.offsetHeight || el.getClientRects().length);
	}
	
	var transition = {
	
	  priority: TRANSITION,
	
	  update: function update(id, oldId) {
	    var el = this.el;
	    // resolve on owner vm
	    var hooks = resolveAsset(this.vm.$options, 'transitions', id);
	    id = id || 'v';
	    // apply on closest vm
	    el.__v_trans = new Transition(el, id, hooks, this.el.__vue__ || this.vm);
	    if (oldId) {
	      removeClass(el, oldId + '-transition');
	    }
	    addClass(el, id + '-transition');
	  }
	};
	
	var bindingModes = config._propBindingModes;
	
	var propDef = {
	
	  bind: function bind() {
	
	    var child = this.vm;
	    var parent = child._context;
	    // passed in from compiler directly
	    var prop = this.descriptor.prop;
	    var childKey = prop.path;
	    var parentKey = prop.parentPath;
	    var twoWay = prop.mode === bindingModes.TWO_WAY;
	
	    var parentWatcher = this.parentWatcher = new Watcher(parent, parentKey, function (val) {
	      val = coerceProp(prop, val);
	      if (assertProp(prop, val)) {
	        child[childKey] = val;
	      }
	    }, {
	      twoWay: twoWay,
	      filters: prop.filters,
	      // important: props need to be observed on the
	      // v-for scope if present
	      scope: this._scope
	    });
	
	    // set the child initial value.
	    initProp(child, prop, parentWatcher.value);
	
	    // setup two-way binding
	    if (twoWay) {
	      // important: defer the child watcher creation until
	      // the created hook (after data observation)
	      var self = this;
	      child.$once('pre-hook:created', function () {
	        self.childWatcher = new Watcher(child, childKey, function (val) {
	          parentWatcher.set(val);
	        }, {
	          // ensure sync upward before parent sync down.
	          // this is necessary in cases e.g. the child
	          // mutates a prop array, then replaces it. (#1683)
	          sync: true
	        });
	      });
	    }
	  },
	
	  unbind: function unbind() {
	    this.parentWatcher.teardown();
	    if (this.childWatcher) {
	      this.childWatcher.teardown();
	    }
	  }
	};
	
	var component = {
	
	  priority: COMPONENT,
	
	  params: ['keep-alive', 'transition-mode', 'inline-template'],
	
	  /**
	   * Setup. Two possible usages:
	   *
	   * - static:
	   *   <comp> or <div v-component="comp">
	   *
	   * - dynamic:
	   *   <component :is="view">
	   */
	
	  bind: function bind() {
	    if (!this.el.__vue__) {
	      // keep-alive cache
	      this.keepAlive = this.params.keepAlive;
	      if (this.keepAlive) {
	        this.cache = {};
	      }
	      // check inline-template
	      if (this.params.inlineTemplate) {
	        // extract inline template as a DocumentFragment
	        this.inlineTemplate = extractContent(this.el, true);
	      }
	      // component resolution related state
	      this.pendingComponentCb = this.Component = null;
	      // transition related state
	      this.pendingRemovals = 0;
	      this.pendingRemovalCb = null;
	      // create a ref anchor
	      this.anchor = createAnchor('v-component');
	      replace(this.el, this.anchor);
	      // remove is attribute.
	      // this is removed during compilation, but because compilation is
	      // cached, when the component is used elsewhere this attribute
	      // will remain at link time.
	      this.el.removeAttribute('is');
	      // remove ref, same as above
	      if (this.descriptor.ref) {
	        this.el.removeAttribute('v-ref:' + hyphenate(this.descriptor.ref));
	      }
	      // if static, build right now.
	      if (this.literal) {
	        this.setComponent(this.expression);
	      }
	    } else {
	      process.env.NODE_ENV !== 'production' && warn('cannot mount component "' + this.expression + '" ' + 'on already mounted element: ' + this.el);
	    }
	  },
	
	  /**
	   * Public update, called by the watcher in the dynamic
	   * literal scenario, e.g. <component :is="view">
	   */
	
	  update: function update(value) {
	    if (!this.literal) {
	      this.setComponent(value);
	    }
	  },
	
	  /**
	   * Switch dynamic components. May resolve the component
	   * asynchronously, and perform transition based on
	   * specified transition mode. Accepts a few additional
	   * arguments specifically for vue-router.
	   *
	   * The callback is called when the full transition is
	   * finished.
	   *
	   * @param {String} value
	   * @param {Function} [cb]
	   */
	
	  setComponent: function setComponent(value, cb) {
	    this.invalidatePending();
	    if (!value) {
	      // just remove current
	      this.unbuild(true);
	      this.remove(this.childVM, cb);
	      this.childVM = null;
	    } else {
	      var self = this;
	      this.resolveComponent(value, function () {
	        self.mountComponent(cb);
	      });
	    }
	  },
	
	  /**
	   * Resolve the component constructor to use when creating
	   * the child vm.
	   */
	
	  resolveComponent: function resolveComponent(id, cb) {
	    var self = this;
	    this.pendingComponentCb = cancellable(function (Component) {
	      self.ComponentName = Component.options.name || id;
	      self.Component = Component;
	      cb();
	    });
	    this.vm._resolveComponent(id, this.pendingComponentCb);
	  },
	
	  /**
	   * Create a new instance using the current constructor and
	   * replace the existing instance. This method doesn't care
	   * whether the new component and the old one are actually
	   * the same.
	   *
	   * @param {Function} [cb]
	   */
	
	  mountComponent: function mountComponent(cb) {
	    // actual mount
	    this.unbuild(true);
	    var self = this;
	    var activateHook = this.Component.options.activate;
	    var cached = this.getCached();
	    var newComponent = this.build();
	    if (activateHook && !cached) {
	      this.waitingFor = newComponent;
	      activateHook.call(newComponent, function () {
	        if (self.waitingFor !== newComponent) {
	          return;
	        }
	        self.waitingFor = null;
	        self.transition(newComponent, cb);
	      });
	    } else {
	      // update ref for kept-alive component
	      if (cached) {
	        newComponent._updateRef();
	      }
	      this.transition(newComponent, cb);
	    }
	  },
	
	  /**
	   * When the component changes or unbinds before an async
	   * constructor is resolved, we need to invalidate its
	   * pending callback.
	   */
	
	  invalidatePending: function invalidatePending() {
	    if (this.pendingComponentCb) {
	      this.pendingComponentCb.cancel();
	      this.pendingComponentCb = null;
	    }
	  },
	
	  /**
	   * Instantiate/insert a new child vm.
	   * If keep alive and has cached instance, insert that
	   * instance; otherwise build a new one and cache it.
	   *
	   * @param {Object} [extraOptions]
	   * @return {Vue} - the created instance
	   */
	
	  build: function build(extraOptions) {
	    var cached = this.getCached();
	    if (cached) {
	      return cached;
	    }
	    if (this.Component) {
	      // default options
	      var options = {
	        name: this.ComponentName,
	        el: cloneNode(this.el),
	        template: this.inlineTemplate,
	        // make sure to add the child with correct parent
	        // if this is a transcluded component, its parent
	        // should be the transclusion host.
	        parent: this._host || this.vm,
	        // if no inline-template, then the compiled
	        // linker can be cached for better performance.
	        _linkerCachable: !this.inlineTemplate,
	        _ref: this.descriptor.ref,
	        _asComponent: true,
	        _isRouterView: this._isRouterView,
	        // if this is a transcluded component, context
	        // will be the common parent vm of this instance
	        // and its host.
	        _context: this.vm,
	        // if this is inside an inline v-for, the scope
	        // will be the intermediate scope created for this
	        // repeat fragment. this is used for linking props
	        // and container directives.
	        _scope: this._scope,
	        // pass in the owner fragment of this component.
	        // this is necessary so that the fragment can keep
	        // track of its contained components in order to
	        // call attach/detach hooks for them.
	        _frag: this._frag
	      };
	      // extra options
	      // in 1.0.0 this is used by vue-router only
	      /* istanbul ignore if */
	      if (extraOptions) {
	        extend(options, extraOptions);
	      }
	      var child = new this.Component(options);
	      if (this.keepAlive) {
	        this.cache[this.Component.cid] = child;
	      }
	      /* istanbul ignore if */
	      if (process.env.NODE_ENV !== 'production' && this.el.hasAttribute('transition') && child._isFragment) {
	        warn('Transitions will not work on a fragment instance. ' + 'Template: ' + child.$options.template);
	      }
	      return child;
	    }
	  },
	
	  /**
	   * Try to get a cached instance of the current component.
	   *
	   * @return {Vue|undefined}
	   */
	
	  getCached: function getCached() {
	    return this.keepAlive && this.cache[this.Component.cid];
	  },
	
	  /**
	   * Teardown the current child, but defers cleanup so
	   * that we can separate the destroy and removal steps.
	   *
	   * @param {Boolean} defer
	   */
	
	  unbuild: function unbuild(defer) {
	    if (this.waitingFor) {
	      this.waitingFor.$destroy();
	      this.waitingFor = null;
	    }
	    var child = this.childVM;
	    if (!child || this.keepAlive) {
	      if (child) {
	        // remove ref
	        child._updateRef(true);
	      }
	      return;
	    }
	    // the sole purpose of `deferCleanup` is so that we can
	    // "deactivate" the vm right now and perform DOM removal
	    // later.
	    child.$destroy(false, defer);
	  },
	
	  /**
	   * Remove current destroyed child and manually do
	   * the cleanup after removal.
	   *
	   * @param {Function} cb
	   */
	
	  remove: function remove(child, cb) {
	    var keepAlive = this.keepAlive;
	    if (child) {
	      // we may have a component switch when a previous
	      // component is still being transitioned out.
	      // we want to trigger only one lastest insertion cb
	      // when the existing transition finishes. (#1119)
	      this.pendingRemovals++;
	      this.pendingRemovalCb = cb;
	      var self = this;
	      child.$remove(function () {
	        self.pendingRemovals--;
	        if (!keepAlive) child._cleanup();
	        if (!self.pendingRemovals && self.pendingRemovalCb) {
	          self.pendingRemovalCb();
	          self.pendingRemovalCb = null;
	        }
	      });
	    } else if (cb) {
	      cb();
	    }
	  },
	
	  /**
	   * Actually swap the components, depending on the
	   * transition mode. Defaults to simultaneous.
	   *
	   * @param {Vue} target
	   * @param {Function} [cb]
	   */
	
	  transition: function transition(target, cb) {
	    var self = this;
	    var current = this.childVM;
	    // for devtool inspection
	    if (process.env.NODE_ENV !== 'production') {
	      if (current) current._inactive = true;
	      target._inactive = false;
	    }
	    this.childVM = target;
	    switch (self.params.transitionMode) {
	      case 'in-out':
	        target.$before(self.anchor, function () {
	          self.remove(current, cb);
	        });
	        break;
	      case 'out-in':
	        self.remove(current, function () {
	          target.$before(self.anchor, cb);
	        });
	        break;
	      default:
	        self.remove(current);
	        target.$before(self.anchor, cb);
	    }
	  },
	
	  /**
	   * Unbind.
	   */
	
	  unbind: function unbind() {
	    this.invalidatePending();
	    // Do not defer cleanup when unbinding
	    this.unbuild();
	    // destroy all keep-alive cached instances
	    if (this.cache) {
	      for (var key in this.cache) {
	        this.cache[key].$destroy();
	      }
	      this.cache = null;
	    }
	  }
	};
	
	var vClass = {
	
	  deep: true,
	
	  update: function update(value) {
	    if (value && typeof value === 'string') {
	      this.handleObject(stringToObject(value));
	    } else if (isPlainObject(value)) {
	      this.handleObject(value);
	    } else if (isArray(value)) {
	      this.handleArray(value);
	    } else {
	      this.cleanup();
	    }
	  },
	
	  handleObject: function handleObject(value) {
	    this.cleanup(value);
	    var keys = this.prevKeys = Object.keys(value);
	    for (var i = 0, l = keys.length; i < l; i++) {
	      var key = keys[i];
	      if (value[key]) {
	        addClass(this.el, key);
	      } else {
	        removeClass(this.el, key);
	      }
	    }
	  },
	
	  handleArray: function handleArray(value) {
	    this.cleanup(value);
	    for (var i = 0, l = value.length; i < l; i++) {
	      if (value[i]) {
	        addClass(this.el, value[i]);
	      }
	    }
	    this.prevKeys = value.slice();
	  },
	
	  cleanup: function cleanup(value) {
	    if (this.prevKeys) {
	      var i = this.prevKeys.length;
	      while (i--) {
	        var key = this.prevKeys[i];
	        if (key && (!value || !contains$1(value, key))) {
	          removeClass(this.el, key);
	        }
	      }
	    }
	  }
	};
	
	function stringToObject(value) {
	  var res = {};
	  var keys = value.trim().split(/\s+/);
	  var i = keys.length;
	  while (i--) {
	    res[keys[i]] = true;
	  }
	  return res;
	}
	
	function contains$1(value, key) {
	  return isArray(value) ? value.indexOf(key) > -1 : hasOwn(value, key);
	}
	
	var internalDirectives = {
	  style: style,
	  'class': vClass,
	  component: component,
	  prop: propDef,
	  transition: transition
	};
	
	var propBindingModes = config._propBindingModes;
	var empty = {};
	
	// regexes
	var identRE$1 = /^[$_a-zA-Z]+[\w$]*$/;
	var settablePathRE = /^[A-Za-z_$][\w$]*(\.[A-Za-z_$][\w$]*|\[[^\[\]]+\])*$/;
	
	/**
	 * Compile props on a root element and return
	 * a props link function.
	 *
	 * @param {Element|DocumentFragment} el
	 * @param {Array} propOptions
	 * @return {Function} propsLinkFn
	 */
	
	function compileProps(el, propOptions) {
	  var props = [];
	  var names = Object.keys(propOptions);
	  var i = names.length;
	  var options, name, attr, value, path, parsed, prop;
	  while (i--) {
	    name = names[i];
	    options = propOptions[name] || empty;
	
	    if (process.env.NODE_ENV !== 'production' && name === '$data') {
	      warn('Do not use $data as prop.');
	      continue;
	    }
	
	    // props could contain dashes, which will be
	    // interpreted as minus calculations by the parser
	    // so we need to camelize the path here
	    path = camelize(name);
	    if (!identRE$1.test(path)) {
	      process.env.NODE_ENV !== 'production' && warn('Invalid prop key: "' + name + '". Prop keys ' + 'must be valid identifiers.');
	      continue;
	    }
	
	    prop = {
	      name: name,
	      path: path,
	      options: options,
	      mode: propBindingModes.ONE_WAY,
	      raw: null
	    };
	
	    attr = hyphenate(name);
	    // first check dynamic version
	    if ((value = getBindAttr(el, attr)) === null) {
	      if ((value = getBindAttr(el, attr + '.sync')) !== null) {
	        prop.mode = propBindingModes.TWO_WAY;
	      } else if ((value = getBindAttr(el, attr + '.once')) !== null) {
	        prop.mode = propBindingModes.ONE_TIME;
	      }
	    }
	    if (value !== null) {
	      // has dynamic binding!
	      prop.raw = value;
	      parsed = parseDirective(value);
	      value = parsed.expression;
	      prop.filters = parsed.filters;
	      // check binding type
	      if (isLiteral(value) && !parsed.filters) {
	        // for expressions containing literal numbers and
	        // booleans, there's no need to setup a prop binding,
	        // so we can optimize them as a one-time set.
	        prop.optimizedLiteral = true;
	      } else {
	        prop.dynamic = true;
	        // check non-settable path for two-way bindings
	        if (process.env.NODE_ENV !== 'production' && prop.mode === propBindingModes.TWO_WAY && !settablePathRE.test(value)) {
	          prop.mode = propBindingModes.ONE_WAY;
	          warn('Cannot bind two-way prop with non-settable ' + 'parent path: ' + value);
	        }
	      }
	      prop.parentPath = value;
	
	      // warn required two-way
	      if (process.env.NODE_ENV !== 'production' && options.twoWay && prop.mode !== propBindingModes.TWO_WAY) {
	        warn('Prop "' + name + '" expects a two-way binding type.');
	      }
	    } else if ((value = getAttr(el, attr)) !== null) {
	      // has literal binding!
	      prop.raw = value;
	    } else if (options.required) {
	      // warn missing required
	      process.env.NODE_ENV !== 'production' && warn('Missing required prop: ' + name);
	    }
	    // push prop
	    props.push(prop);
	  }
	  return makePropsLinkFn(props);
	}
	
	/**
	 * Build a function that applies props to a vm.
	 *
	 * @param {Array} props
	 * @return {Function} propsLinkFn
	 */
	
	function makePropsLinkFn(props) {
	  return function propsLinkFn(vm, scope) {
	    // store resolved props info
	    vm._props = {};
	    var i = props.length;
	    var prop, path, options, value, raw;
	    while (i--) {
	      prop = props[i];
	      raw = prop.raw;
	      path = prop.path;
	      options = prop.options;
	      vm._props[path] = prop;
	      if (raw === null) {
	        // initialize absent prop
	        initProp(vm, prop, getDefault(vm, options));
	      } else if (prop.dynamic) {
	        // dynamic prop
	        if (vm._context) {
	          if (prop.mode === propBindingModes.ONE_TIME) {
	            // one time binding
	            value = (scope || vm._context).$get(prop.parentPath);
	            initProp(vm, prop, value);
	          } else {
	            // dynamic binding
	            vm._bindDir({
	              name: 'prop',
	              def: propDef,
	              prop: prop
	            }, null, null, scope); // el, host, scope
	          }
	        } else {
	            process.env.NODE_ENV !== 'production' && warn('Cannot bind dynamic prop on a root instance' + ' with no parent: ' + prop.name + '="' + raw + '"');
	          }
	      } else if (prop.optimizedLiteral) {
	        // optimized literal, cast it and just set once
	        var stripped = stripQuotes(raw);
	        value = stripped === raw ? toBoolean(toNumber(raw)) : stripped;
	        initProp(vm, prop, value);
	      } else {
	        // string literal, but we need to cater for
	        // Boolean props with no value
	        value = options.type === Boolean && raw === '' ? true : raw;
	        initProp(vm, prop, value);
	      }
	    }
	  };
	}
	
	/**
	 * Get the default value of a prop.
	 *
	 * @param {Vue} vm
	 * @param {Object} options
	 * @return {*}
	 */
	
	function getDefault(vm, options) {
	  // no default, return undefined
	  if (!hasOwn(options, 'default')) {
	    // absent boolean value defaults to false
	    return options.type === Boolean ? false : undefined;
	  }
	  var def = options['default'];
	  // warn against non-factory defaults for Object & Array
	  if (isObject(def)) {
	    process.env.NODE_ENV !== 'production' && warn('Object/Array as default prop values will be shared ' + 'across multiple instances. Use a factory function ' + 'to return the default value instead.');
	  }
	  // call factory function for non-Function types
	  return typeof def === 'function' && options.type !== Function ? def.call(vm) : def;
	}
	
	// special binding prefixes
	var bindRE = /^v-bind:|^:/;
	var onRE = /^v-on:|^@/;
	var argRE = /:(.*)$/;
	var modifierRE = /\.[^\.]+/g;
	var transitionRE = /^(v-bind:|:)?transition$/;
	
	// terminal directives
	var terminalDirectives = ['for', 'if'];
	
	// default directive priority
	var DEFAULT_PRIORITY = 1000;
	
	/**
	 * Compile a template and return a reusable composite link
	 * function, which recursively contains more link functions
	 * inside. This top level compile function would normally
	 * be called on instance root nodes, but can also be used
	 * for partial compilation if the partial argument is true.
	 *
	 * The returned composite link function, when called, will
	 * return an unlink function that tearsdown all directives
	 * created during the linking phase.
	 *
	 * @param {Element|DocumentFragment} el
	 * @param {Object} options
	 * @param {Boolean} partial
	 * @return {Function}
	 */
	
	function compile(el, options, partial) {
	  // link function for the node itself.
	  var nodeLinkFn = partial || !options._asComponent ? compileNode(el, options) : null;
	  // link function for the childNodes
	  var childLinkFn = !(nodeLinkFn && nodeLinkFn.terminal) && el.tagName !== 'SCRIPT' && el.hasChildNodes() ? compileNodeList(el.childNodes, options) : null;
	
	  /**
	   * A composite linker function to be called on a already
	   * compiled piece of DOM, which instantiates all directive
	   * instances.
	   *
	   * @param {Vue} vm
	   * @param {Element|DocumentFragment} el
	   * @param {Vue} [host] - host vm of transcluded content
	   * @param {Object} [scope] - v-for scope
	   * @param {Fragment} [frag] - link context fragment
	   * @return {Function|undefined}
	   */
	
	  return function compositeLinkFn(vm, el, host, scope, frag) {
	    // cache childNodes before linking parent, fix #657
	    var childNodes = toArray(el.childNodes);
	    // link
	    var dirs = linkAndCapture(function compositeLinkCapturer() {
	      if (nodeLinkFn) nodeLinkFn(vm, el, host, scope, frag);
	      if (childLinkFn) childLinkFn(vm, childNodes, host, scope, frag);
	    }, vm);
	    return makeUnlinkFn(vm, dirs);
	  };
	}
	
	/**
	 * Apply a linker to a vm/element pair and capture the
	 * directives created during the process.
	 *
	 * @param {Function} linker
	 * @param {Vue} vm
	 */
	
	function linkAndCapture(linker, vm) {
	  var originalDirCount = vm._directives.length;
	  linker();
	  var dirs = vm._directives.slice(originalDirCount);
	  dirs.sort(directiveComparator);
	  for (var i = 0, l = dirs.length; i < l; i++) {
	    dirs[i]._bind();
	  }
	  return dirs;
	}
	
	/**
	 * Directive priority sort comparator
	 *
	 * @param {Object} a
	 * @param {Object} b
	 */
	
	function directiveComparator(a, b) {
	  a = a.descriptor.def.priority || DEFAULT_PRIORITY;
	  b = b.descriptor.def.priority || DEFAULT_PRIORITY;
	  return a > b ? -1 : a === b ? 0 : 1;
	}
	
	/**
	 * Linker functions return an unlink function that
	 * tearsdown all directives instances generated during
	 * the process.
	 *
	 * We create unlink functions with only the necessary
	 * information to avoid retaining additional closures.
	 *
	 * @param {Vue} vm
	 * @param {Array} dirs
	 * @param {Vue} [context]
	 * @param {Array} [contextDirs]
	 * @return {Function}
	 */
	
	function makeUnlinkFn(vm, dirs, context, contextDirs) {
	  function unlink(destroying) {
	    teardownDirs(vm, dirs, destroying);
	    if (context && contextDirs) {
	      teardownDirs(context, contextDirs);
	    }
	  }
	  // expose linked directives
	  unlink.dirs = dirs;
	  return unlink;
	}
	
	/**
	 * Teardown partial linked directives.
	 *
	 * @param {Vue} vm
	 * @param {Array} dirs
	 * @param {Boolean} destroying
	 */
	
	function teardownDirs(vm, dirs, destroying) {
	  var i = dirs.length;
	  while (i--) {
	    dirs[i]._teardown();
	    if (!destroying) {
	      vm._directives.$remove(dirs[i]);
	    }
	  }
	}
	
	/**
	 * Compile link props on an instance.
	 *
	 * @param {Vue} vm
	 * @param {Element} el
	 * @param {Object} props
	 * @param {Object} [scope]
	 * @return {Function}
	 */
	
	function compileAndLinkProps(vm, el, props, scope) {
	  var propsLinkFn = compileProps(el, props);
	  var propDirs = linkAndCapture(function () {
	    propsLinkFn(vm, scope);
	  }, vm);
	  return makeUnlinkFn(vm, propDirs);
	}
	
	/**
	 * Compile the root element of an instance.
	 *
	 * 1. attrs on context container (context scope)
	 * 2. attrs on the component template root node, if
	 *    replace:true (child scope)
	 *
	 * If this is a fragment instance, we only need to compile 1.
	 *
	 * @param {Vue} vm
	 * @param {Element} el
	 * @param {Object} options
	 * @param {Object} contextOptions
	 * @return {Function}
	 */
	
	function compileRoot(el, options, contextOptions) {
	  var containerAttrs = options._containerAttrs;
	  var replacerAttrs = options._replacerAttrs;
	  var contextLinkFn, replacerLinkFn;
	
	  // only need to compile other attributes for
	  // non-fragment instances
	  if (el.nodeType !== 11) {
	    // for components, container and replacer need to be
	    // compiled separately and linked in different scopes.
	    if (options._asComponent) {
	      // 2. container attributes
	      if (containerAttrs && contextOptions) {
	        contextLinkFn = compileDirectives(containerAttrs, contextOptions);
	      }
	      if (replacerAttrs) {
	        // 3. replacer attributes
	        replacerLinkFn = compileDirectives(replacerAttrs, options);
	      }
	    } else {
	      // non-component, just compile as a normal element.
	      replacerLinkFn = compileDirectives(el.attributes, options);
	    }
	  } else if (process.env.NODE_ENV !== 'production' && containerAttrs) {
	    // warn container directives for fragment instances
	    var names = containerAttrs.filter(function (attr) {
	      // allow vue-loader/vueify scoped css attributes
	      return attr.name.indexOf('_v-') < 0 &&
	      // allow event listeners
	      !onRE.test(attr.name) &&
	      // allow slots
	      attr.name !== 'slot';
	    }).map(function (attr) {
	      return '"' + attr.name + '"';
	    });
	    if (names.length) {
	      var plural = names.length > 1;
	      warn('Attribute' + (plural ? 's ' : ' ') + names.join(', ') + (plural ? ' are' : ' is') + ' ignored on component ' + '<' + options.el.tagName.toLowerCase() + '> because ' + 'the component is a fragment instance: ' + 'http://vuejs.org/guide/components.html#Fragment_Instance');
	    }
	  }
	
	  options._containerAttrs = options._replacerAttrs = null;
	  return function rootLinkFn(vm, el, scope) {
	    // link context scope dirs
	    var context = vm._context;
	    var contextDirs;
	    if (context && contextLinkFn) {
	      contextDirs = linkAndCapture(function () {
	        contextLinkFn(context, el, null, scope);
	      }, context);
	    }
	
	    // link self
	    var selfDirs = linkAndCapture(function () {
	      if (replacerLinkFn) replacerLinkFn(vm, el);
	    }, vm);
	
	    // return the unlink function that tearsdown context
	    // container directives.
	    return makeUnlinkFn(vm, selfDirs, context, contextDirs);
	  };
	}
	
	/**
	 * Compile a node and return a nodeLinkFn based on the
	 * node type.
	 *
	 * @param {Node} node
	 * @param {Object} options
	 * @return {Function|null}
	 */
	
	function compileNode(node, options) {
	  var type = node.nodeType;
	  if (type === 1 && node.tagName !== 'SCRIPT') {
	    return compileElement(node, options);
	  } else if (type === 3 && node.data.trim()) {
	    return compileTextNode(node, options);
	  } else {
	    return null;
	  }
	}
	
	/**
	 * Compile an element and return a nodeLinkFn.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Function|null}
	 */
	
	function compileElement(el, options) {
	  // preprocess textareas.
	  // textarea treats its text content as the initial value.
	  // just bind it as an attr directive for value.
	  if (el.tagName === 'TEXTAREA') {
	    var tokens = parseText(el.value);
	    if (tokens) {
	      el.setAttribute(':value', tokensToExp(tokens));
	      el.value = '';
	    }
	  }
	  var linkFn;
	  var hasAttrs = el.hasAttributes();
	  // check terminal directives (for & if)
	  if (hasAttrs) {
	    linkFn = checkTerminalDirectives(el, options);
	  }
	  // check element directives
	  if (!linkFn) {
	    linkFn = checkElementDirectives(el, options);
	  }
	  // check component
	  if (!linkFn) {
	    linkFn = checkComponent(el, options);
	  }
	  // normal directives
	  if (!linkFn && hasAttrs) {
	    linkFn = compileDirectives(el.attributes, options);
	  }
	  return linkFn;
	}
	
	/**
	 * Compile a textNode and return a nodeLinkFn.
	 *
	 * @param {TextNode} node
	 * @param {Object} options
	 * @return {Function|null} textNodeLinkFn
	 */
	
	function compileTextNode(node, options) {
	  // skip marked text nodes
	  if (node._skip) {
	    return removeText;
	  }
	
	  var tokens = parseText(node.wholeText);
	  if (!tokens) {
	    return null;
	  }
	
	  // mark adjacent text nodes as skipped,
	  // because we are using node.wholeText to compile
	  // all adjacent text nodes together. This fixes
	  // issues in IE where sometimes it splits up a single
	  // text node into multiple ones.
	  var next = node.nextSibling;
	  while (next && next.nodeType === 3) {
	    next._skip = true;
	    next = next.nextSibling;
	  }
	
	  var frag = document.createDocumentFragment();
	  var el, token;
	  for (var i = 0, l = tokens.length; i < l; i++) {
	    token = tokens[i];
	    el = token.tag ? processTextToken(token, options) : document.createTextNode(token.value);
	    frag.appendChild(el);
	  }
	  return makeTextNodeLinkFn(tokens, frag, options);
	}
	
	/**
	 * Linker for an skipped text node.
	 *
	 * @param {Vue} vm
	 * @param {Text} node
	 */
	
	function removeText(vm, node) {
	  remove(node);
	}
	
	/**
	 * Process a single text token.
	 *
	 * @param {Object} token
	 * @param {Object} options
	 * @return {Node}
	 */
	
	function processTextToken(token, options) {
	  var el;
	  if (token.oneTime) {
	    el = document.createTextNode(token.value);
	  } else {
	    if (token.html) {
	      el = document.createComment('v-html');
	      setTokenType('html');
	    } else {
	      // IE will clean up empty textNodes during
	      // frag.cloneNode(true), so we have to give it
	      // something here...
	      el = document.createTextNode(' ');
	      setTokenType('text');
	    }
	  }
	  function setTokenType(type) {
	    if (token.descriptor) return;
	    var parsed = parseDirective(token.value);
	    token.descriptor = {
	      name: type,
	      def: publicDirectives[type],
	      expression: parsed.expression,
	      filters: parsed.filters
	    };
	  }
	  return el;
	}
	
	/**
	 * Build a function that processes a textNode.
	 *
	 * @param {Array<Object>} tokens
	 * @param {DocumentFragment} frag
	 */
	
	function makeTextNodeLinkFn(tokens, frag) {
	  return function textNodeLinkFn(vm, el, host, scope) {
	    var fragClone = frag.cloneNode(true);
	    var childNodes = toArray(fragClone.childNodes);
	    var token, value, node;
	    for (var i = 0, l = tokens.length; i < l; i++) {
	      token = tokens[i];
	      value = token.value;
	      if (token.tag) {
	        node = childNodes[i];
	        if (token.oneTime) {
	          value = (scope || vm).$eval(value);
	          if (token.html) {
	            replace(node, parseTemplate(value, true));
	          } else {
	            node.data = value;
	          }
	        } else {
	          vm._bindDir(token.descriptor, node, host, scope);
	        }
	      }
	    }
	    replace(el, fragClone);
	  };
	}
	
	/**
	 * Compile a node list and return a childLinkFn.
	 *
	 * @param {NodeList} nodeList
	 * @param {Object} options
	 * @return {Function|undefined}
	 */
	
	function compileNodeList(nodeList, options) {
	  var linkFns = [];
	  var nodeLinkFn, childLinkFn, node;
	  for (var i = 0, l = nodeList.length; i < l; i++) {
	    node = nodeList[i];
	    nodeLinkFn = compileNode(node, options);
	    childLinkFn = !(nodeLinkFn && nodeLinkFn.terminal) && node.tagName !== 'SCRIPT' && node.hasChildNodes() ? compileNodeList(node.childNodes, options) : null;
	    linkFns.push(nodeLinkFn, childLinkFn);
	  }
	  return linkFns.length ? makeChildLinkFn(linkFns) : null;
	}
	
	/**
	 * Make a child link function for a node's childNodes.
	 *
	 * @param {Array<Function>} linkFns
	 * @return {Function} childLinkFn
	 */
	
	function makeChildLinkFn(linkFns) {
	  return function childLinkFn(vm, nodes, host, scope, frag) {
	    var node, nodeLinkFn, childrenLinkFn;
	    for (var i = 0, n = 0, l = linkFns.length; i < l; n++) {
	      node = nodes[n];
	      nodeLinkFn = linkFns[i++];
	      childrenLinkFn = linkFns[i++];
	      // cache childNodes before linking parent, fix #657
	      var childNodes = toArray(node.childNodes);
	      if (nodeLinkFn) {
	        nodeLinkFn(vm, node, host, scope, frag);
	      }
	      if (childrenLinkFn) {
	        childrenLinkFn(vm, childNodes, host, scope, frag);
	      }
	    }
	  };
	}
	
	/**
	 * Check for element directives (custom elements that should
	 * be resovled as terminal directives).
	 *
	 * @param {Element} el
	 * @param {Object} options
	 */
	
	function checkElementDirectives(el, options) {
	  var tag = el.tagName.toLowerCase();
	  if (commonTagRE.test(tag)) return;
	  // special case: give named slot a higher priority
	  // than unnamed slots
	  if (tag === 'slot' && hasBindAttr(el, 'name')) {
	    tag = '_namedSlot';
	  }
	  var def = resolveAsset(options, 'elementDirectives', tag);
	  if (def) {
	    return makeTerminalNodeLinkFn(el, tag, '', options, def);
	  }
	}
	
	/**
	 * Check if an element is a component. If yes, return
	 * a component link function.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Function|undefined}
	 */
	
	function checkComponent(el, options) {
	  var component = checkComponentAttr(el, options);
	  if (component) {
	    var ref = findRef(el);
	    var descriptor = {
	      name: 'component',
	      ref: ref,
	      expression: component.id,
	      def: internalDirectives.component,
	      modifiers: {
	        literal: !component.dynamic
	      }
	    };
	    var componentLinkFn = function componentLinkFn(vm, el, host, scope, frag) {
	      if (ref) {
	        defineReactive((scope || vm).$refs, ref, null);
	      }
	      vm._bindDir(descriptor, el, host, scope, frag);
	    };
	    componentLinkFn.terminal = true;
	    return componentLinkFn;
	  }
	}
	
	/**
	 * Check an element for terminal directives in fixed order.
	 * If it finds one, return a terminal link function.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Function} terminalLinkFn
	 */
	
	function checkTerminalDirectives(el, options) {
	  // skip v-pre
	  if (getAttr(el, 'v-pre') !== null) {
	    return skip;
	  }
	  // skip v-else block, but only if following v-if
	  if (el.hasAttribute('v-else')) {
	    var prev = el.previousElementSibling;
	    if (prev && prev.hasAttribute('v-if')) {
	      return skip;
	    }
	  }
	  var value, dirName;
	  for (var i = 0, l = terminalDirectives.length; i < l; i++) {
	    dirName = terminalDirectives[i];
	    value = el.getAttribute('v-' + dirName);
	    if (value != null) {
	      return makeTerminalNodeLinkFn(el, dirName, value, options);
	    }
	  }
	}
	
	function skip() {}
	skip.terminal = true;
	
	/**
	 * Build a node link function for a terminal directive.
	 * A terminal link function terminates the current
	 * compilation recursion and handles compilation of the
	 * subtree in the directive.
	 *
	 * @param {Element} el
	 * @param {String} dirName
	 * @param {String} value
	 * @param {Object} options
	 * @param {Object} [def]
	 * @return {Function} terminalLinkFn
	 */
	
	function makeTerminalNodeLinkFn(el, dirName, value, options, def) {
	  var parsed = parseDirective(value);
	  var descriptor = {
	    name: dirName,
	    expression: parsed.expression,
	    filters: parsed.filters,
	    raw: value,
	    // either an element directive, or if/for
	    def: def || publicDirectives[dirName]
	  };
	  // check ref for v-for and router-view
	  if (dirName === 'for' || dirName === 'router-view') {
	    descriptor.ref = findRef(el);
	  }
	  var fn = function terminalNodeLinkFn(vm, el, host, scope, frag) {
	    if (descriptor.ref) {
	      defineReactive((scope || vm).$refs, descriptor.ref, null);
	    }
	    vm._bindDir(descriptor, el, host, scope, frag);
	  };
	  fn.terminal = true;
	  return fn;
	}
	
	/**
	 * Compile the directives on an element and return a linker.
	 *
	 * @param {Array|NamedNodeMap} attrs
	 * @param {Object} options
	 * @return {Function}
	 */
	
	function compileDirectives(attrs, options) {
	  var i = attrs.length;
	  var dirs = [];
	  var attr, name, value, rawName, rawValue, dirName, arg, modifiers, dirDef, tokens;
	  while (i--) {
	    attr = attrs[i];
	    name = rawName = attr.name;
	    value = rawValue = attr.value;
	    tokens = parseText(value);
	    // reset arg
	    arg = null;
	    // check modifiers
	    modifiers = parseModifiers(name);
	    name = name.replace(modifierRE, '');
	
	    // attribute interpolations
	    if (tokens) {
	      value = tokensToExp(tokens);
	      arg = name;
	      pushDir('bind', publicDirectives.bind, tokens);
	      // warn against mixing mustaches with v-bind
	      if (process.env.NODE_ENV !== 'production') {
	        if (name === 'class' && Array.prototype.some.call(attrs, function (attr) {
	          return attr.name === ':class' || attr.name === 'v-bind:class';
	        })) {
	          warn('class="' + rawValue + '": Do not mix mustache interpolation ' + 'and v-bind for "class" on the same element. Use one or the other.');
	        }
	      }
	    } else
	
	      // special attribute: transition
	      if (transitionRE.test(name)) {
	        modifiers.literal = !bindRE.test(name);
	        pushDir('transition', internalDirectives.transition);
	      } else
	
	        // event handlers
	        if (onRE.test(name)) {
	          arg = name.replace(onRE, '');
	          pushDir('on', publicDirectives.on);
	        } else
	
	          // attribute bindings
	          if (bindRE.test(name)) {
	            dirName = name.replace(bindRE, '');
	            if (dirName === 'style' || dirName === 'class') {
	              pushDir(dirName, internalDirectives[dirName]);
	            } else {
	              arg = dirName;
	              pushDir('bind', publicDirectives.bind);
	            }
	          } else
	
	            // normal directives
	            if (name.indexOf('v-') === 0) {
	              // check arg
	              arg = (arg = name.match(argRE)) && arg[1];
	              if (arg) {
	                name = name.replace(argRE, '');
	              }
	              // extract directive name
	              dirName = name.slice(2);
	
	              // skip v-else (when used with v-show)
	              if (dirName === 'else') {
	                continue;
	              }
	
	              dirDef = resolveAsset(options, 'directives', dirName);
	
	              if (process.env.NODE_ENV !== 'production') {
	                assertAsset(dirDef, 'directive', dirName);
	              }
	
	              if (dirDef) {
	                pushDir(dirName, dirDef);
	              }
	            }
	  }
	
	  /**
	   * Push a directive.
	   *
	   * @param {String} dirName
	   * @param {Object|Function} def
	   * @param {Array} [interpTokens]
	   */
	
	  function pushDir(dirName, def, interpTokens) {
	    var hasOneTimeToken = interpTokens && hasOneTime(interpTokens);
	    var parsed = !hasOneTimeToken && parseDirective(value);
	    dirs.push({
	      name: dirName,
	      attr: rawName,
	      raw: rawValue,
	      def: def,
	      arg: arg,
	      modifiers: modifiers,
	      // conversion from interpolation strings with one-time token
	      // to expression is differed until directive bind time so that we
	      // have access to the actual vm context for one-time bindings.
	      expression: parsed && parsed.expression,
	      filters: parsed && parsed.filters,
	      interp: interpTokens,
	      hasOneTime: hasOneTimeToken
	    });
	  }
	
	  if (dirs.length) {
	    return makeNodeLinkFn(dirs);
	  }
	}
	
	/**
	 * Parse modifiers from directive attribute name.
	 *
	 * @param {String} name
	 * @return {Object}
	 */
	
	function parseModifiers(name) {
	  var res = Object.create(null);
	  var match = name.match(modifierRE);
	  if (match) {
	    var i = match.length;
	    while (i--) {
	      res[match[i].slice(1)] = true;
	    }
	  }
	  return res;
	}
	
	/**
	 * Build a link function for all directives on a single node.
	 *
	 * @param {Array} directives
	 * @return {Function} directivesLinkFn
	 */
	
	function makeNodeLinkFn(directives) {
	  return function nodeLinkFn(vm, el, host, scope, frag) {
	    // reverse apply because it's sorted low to high
	    var i = directives.length;
	    while (i--) {
	      vm._bindDir(directives[i], el, host, scope, frag);
	    }
	  };
	}
	
	/**
	 * Check if an interpolation string contains one-time tokens.
	 *
	 * @param {Array} tokens
	 * @return {Boolean}
	 */
	
	function hasOneTime(tokens) {
	  var i = tokens.length;
	  while (i--) {
	    if (tokens[i].oneTime) return true;
	  }
	}
	
	var specialCharRE = /[^\w\-:\.]/;
	
	/**
	 * Process an element or a DocumentFragment based on a
	 * instance option object. This allows us to transclude
	 * a template node/fragment before the instance is created,
	 * so the processed fragment can then be cloned and reused
	 * in v-for.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Element|DocumentFragment}
	 */
	
	function transclude(el, options) {
	  // extract container attributes to pass them down
	  // to compiler, because they need to be compiled in
	  // parent scope. we are mutating the options object here
	  // assuming the same object will be used for compile
	  // right after this.
	  if (options) {
	    options._containerAttrs = extractAttrs(el);
	  }
	  // for template tags, what we want is its content as
	  // a documentFragment (for fragment instances)
	  if (isTemplate(el)) {
	    el = parseTemplate(el);
	  }
	  if (options) {
	    if (options._asComponent && !options.template) {
	      options.template = '<slot></slot>';
	    }
	    if (options.template) {
	      options._content = extractContent(el);
	      el = transcludeTemplate(el, options);
	    }
	  }
	  if (el instanceof DocumentFragment) {
	    // anchors for fragment instance
	    // passing in `persist: true` to avoid them being
	    // discarded by IE during template cloning
	    prepend(createAnchor('v-start', true), el);
	    el.appendChild(createAnchor('v-end', true));
	  }
	  return el;
	}
	
	/**
	 * Process the template option.
	 * If the replace option is true this will swap the $el.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Element|DocumentFragment}
	 */
	
	function transcludeTemplate(el, options) {
	  var template = options.template;
	  var frag = parseTemplate(template, true);
	  if (frag) {
	    var replacer = frag.firstChild;
	    var tag = replacer.tagName && replacer.tagName.toLowerCase();
	    if (options.replace) {
	      /* istanbul ignore if */
	      if (el === document.body) {
	        process.env.NODE_ENV !== 'production' && warn('You are mounting an instance with a template to ' + '<body>. This will replace <body> entirely. You ' + 'should probably use `replace: false` here.');
	      }
	      // there are many cases where the instance must
	      // become a fragment instance: basically anything that
	      // can create more than 1 root nodes.
	      if (
	      // multi-children template
	      frag.childNodes.length > 1 ||
	      // non-element template
	      replacer.nodeType !== 1 ||
	      // single nested component
	      tag === 'component' || resolveAsset(options, 'components', tag) || hasBindAttr(replacer, 'is') ||
	      // element directive
	      resolveAsset(options, 'elementDirectives', tag) ||
	      // for block
	      replacer.hasAttribute('v-for') ||
	      // if block
	      replacer.hasAttribute('v-if')) {
	        return frag;
	      } else {
	        options._replacerAttrs = extractAttrs(replacer);
	        mergeAttrs(el, replacer);
	        return replacer;
	      }
	    } else {
	      el.appendChild(frag);
	      return el;
	    }
	  } else {
	    process.env.NODE_ENV !== 'production' && warn('Invalid template option: ' + template);
	  }
	}
	
	/**
	 * Helper to extract a component container's attributes
	 * into a plain object array.
	 *
	 * @param {Element} el
	 * @return {Array}
	 */
	
	function extractAttrs(el) {
	  if (el.nodeType === 1 && el.hasAttributes()) {
	    return toArray(el.attributes);
	  }
	}
	
	/**
	 * Merge the attributes of two elements, and make sure
	 * the class names are merged properly.
	 *
	 * @param {Element} from
	 * @param {Element} to
	 */
	
	function mergeAttrs(from, to) {
	  var attrs = from.attributes;
	  var i = attrs.length;
	  var name, value;
	  while (i--) {
	    name = attrs[i].name;
	    value = attrs[i].value;
	    if (!to.hasAttribute(name) && !specialCharRE.test(name)) {
	      to.setAttribute(name, value);
	    } else if (name === 'class' && !parseText(value)) {
	      value.split(/\s+/).forEach(function (cls) {
	        addClass(to, cls);
	      });
	    }
	  }
	}
	
	var compiler = Object.freeze({
		compile: compile,
		compileAndLinkProps: compileAndLinkProps,
		compileRoot: compileRoot,
		terminalDirectives: terminalDirectives,
		transclude: transclude
	});
	
	function stateMixin (Vue) {
	
	  /**
	   * Accessor for `$data` property, since setting $data
	   * requires observing the new object and updating
	   * proxied properties.
	   */
	
	  Object.defineProperty(Vue.prototype, '$data', {
	    get: function get() {
	      return this._data;
	    },
	    set: function set(newData) {
	      if (newData !== this._data) {
	        this._setData(newData);
	      }
	    }
	  });
	
	  /**
	   * Setup the scope of an instance, which contains:
	   * - observed data
	   * - computed properties
	   * - user methods
	   * - meta properties
	   */
	
	  Vue.prototype._initState = function () {
	    this._initProps();
	    this._initMeta();
	    this._initMethods();
	    this._initData();
	    this._initComputed();
	  };
	
	  /**
	   * Initialize props.
	   */
	
	  Vue.prototype._initProps = function () {
	    var options = this.$options;
	    var el = options.el;
	    var props = options.props;
	    if (props && !el) {
	      process.env.NODE_ENV !== 'production' && warn('Props will not be compiled if no `el` option is ' + 'provided at instantiation.');
	    }
	    // make sure to convert string selectors into element now
	    el = options.el = query(el);
	    this._propsUnlinkFn = el && el.nodeType === 1 && props
	    // props must be linked in proper scope if inside v-for
	    ? compileAndLinkProps(this, el, props, this._scope) : null;
	  };
	
	  /**
	   * Initialize the data.
	   */
	
	  Vue.prototype._initData = function () {
	    var propsData = this._data;
	    var optionsDataFn = this.$options.data;
	    var optionsData = optionsDataFn && optionsDataFn();
	    if (optionsData) {
	      this._data = optionsData;
	      for (var prop in propsData) {
	        if (process.env.NODE_ENV !== 'production' && hasOwn(optionsData, prop)) {
	          warn('Data field "' + prop + '" is already defined ' + 'as a prop. Use prop default value instead.');
	        }
	        if (this._props[prop].raw !== null || !hasOwn(optionsData, prop)) {
	          set(optionsData, prop, propsData[prop]);
	        }
	      }
	    }
	    var data = this._data;
	    // proxy data on instance
	    var keys = Object.keys(data);
	    var i, key;
	    i = keys.length;
	    while (i--) {
	      key = keys[i];
	      this._proxy(key);
	    }
	    // observe data
	    observe(data, this);
	  };
	
	  /**
	   * Swap the instance's $data. Called in $data's setter.
	   *
	   * @param {Object} newData
	   */
	
	  Vue.prototype._setData = function (newData) {
	    newData = newData || {};
	    var oldData = this._data;
	    this._data = newData;
	    var keys, key, i;
	    // unproxy keys not present in new data
	    keys = Object.keys(oldData);
	    i = keys.length;
	    while (i--) {
	      key = keys[i];
	      if (!(key in newData)) {
	        this._unproxy(key);
	      }
	    }
	    // proxy keys not already proxied,
	    // and trigger change for changed values
	    keys = Object.keys(newData);
	    i = keys.length;
	    while (i--) {
	      key = keys[i];
	      if (!hasOwn(this, key)) {
	        // new property
	        this._proxy(key);
	      }
	    }
	    oldData.__ob__.removeVm(this);
	    observe(newData, this);
	    this._digest();
	  };
	
	  /**
	   * Proxy a property, so that
	   * vm.prop === vm._data.prop
	   *
	   * @param {String} key
	   */
	
	  Vue.prototype._proxy = function (key) {
	    if (!isReserved(key)) {
	      // need to store ref to self here
	      // because these getter/setters might
	      // be called by child scopes via
	      // prototype inheritance.
	      var self = this;
	      Object.defineProperty(self, key, {
	        configurable: true,
	        enumerable: true,
	        get: function proxyGetter() {
	          return self._data[key];
	        },
	        set: function proxySetter(val) {
	          self._data[key] = val;
	        }
	      });
	    }
	  };
	
	  /**
	   * Unproxy a property.
	   *
	   * @param {String} key
	   */
	
	  Vue.prototype._unproxy = function (key) {
	    if (!isReserved(key)) {
	      delete this[key];
	    }
	  };
	
	  /**
	   * Force update on every watcher in scope.
	   */
	
	  Vue.prototype._digest = function () {
	    for (var i = 0, l = this._watchers.length; i < l; i++) {
	      this._watchers[i].update(true); // shallow updates
	    }
	  };
	
	  /**
	   * Setup computed properties. They are essentially
	   * special getter/setters
	   */
	
	  function noop() {}
	  Vue.prototype._initComputed = function () {
	    var computed = this.$options.computed;
	    if (computed) {
	      for (var key in computed) {
	        var userDef = computed[key];
	        var def = {
	          enumerable: true,
	          configurable: true
	        };
	        if (typeof userDef === 'function') {
	          def.get = makeComputedGetter(userDef, this);
	          def.set = noop;
	        } else {
	          def.get = userDef.get ? userDef.cache !== false ? makeComputedGetter(userDef.get, this) : bind$1(userDef.get, this) : noop;
	          def.set = userDef.set ? bind$1(userDef.set, this) : noop;
	        }
	        Object.defineProperty(this, key, def);
	      }
	    }
	  };
	
	  function makeComputedGetter(getter, owner) {
	    var watcher = new Watcher(owner, getter, null, {
	      lazy: true
	    });
	    return function computedGetter() {
	      if (watcher.dirty) {
	        watcher.evaluate();
	      }
	      if (Dep.target) {
	        watcher.depend();
	      }
	      return watcher.value;
	    };
	  }
	
	  /**
	   * Setup instance methods. Methods must be bound to the
	   * instance since they might be passed down as a prop to
	   * child components.
	   */
	
	  Vue.prototype._initMethods = function () {
	    var methods = this.$options.methods;
	    if (methods) {
	      for (var key in methods) {
	        this[key] = bind$1(methods[key], this);
	      }
	    }
	  };
	
	  /**
	   * Initialize meta information like $index, $key & $value.
	   */
	
	  Vue.prototype._initMeta = function () {
	    var metas = this.$options._meta;
	    if (metas) {
	      for (var key in metas) {
	        defineReactive(this, key, metas[key]);
	      }
	    }
	  };
	}
	
	var eventRE = /^v-on:|^@/;
	
	function eventsMixin (Vue) {
	
	  /**
	   * Setup the instance's option events & watchers.
	   * If the value is a string, we pull it from the
	   * instance's methods by name.
	   */
	
	  Vue.prototype._initEvents = function () {
	    var options = this.$options;
	    if (options._asComponent) {
	      registerComponentEvents(this, options.el);
	    }
	    registerCallbacks(this, '$on', options.events);
	    registerCallbacks(this, '$watch', options.watch);
	  };
	
	  /**
	   * Register v-on events on a child component
	   *
	   * @param {Vue} vm
	   * @param {Element} el
	   */
	
	  function registerComponentEvents(vm, el) {
	    var attrs = el.attributes;
	    var name, handler;
	    for (var i = 0, l = attrs.length; i < l; i++) {
	      name = attrs[i].name;
	      if (eventRE.test(name)) {
	        name = name.replace(eventRE, '');
	        handler = (vm._scope || vm._context).$eval(attrs[i].value, true);
	        handler._fromParent = true;
	        vm.$on(name.replace(eventRE), handler);
	      }
	    }
	  }
	
	  /**
	   * Register callbacks for option events and watchers.
	   *
	   * @param {Vue} vm
	   * @param {String} action
	   * @param {Object} hash
	   */
	
	  function registerCallbacks(vm, action, hash) {
	    if (!hash) return;
	    var handlers, key, i, j;
	    for (key in hash) {
	      handlers = hash[key];
	      if (isArray(handlers)) {
	        for (i = 0, j = handlers.length; i < j; i++) {
	          register(vm, action, key, handlers[i]);
	        }
	      } else {
	        register(vm, action, key, handlers);
	      }
	    }
	  }
	
	  /**
	   * Helper to register an event/watch callback.
	   *
	   * @param {Vue} vm
	   * @param {String} action
	   * @param {String} key
	   * @param {Function|String|Object} handler
	   * @param {Object} [options]
	   */
	
	  function register(vm, action, key, handler, options) {
	    var type = typeof handler;
	    if (type === 'function') {
	      vm[action](key, handler, options);
	    } else if (type === 'string') {
	      var methods = vm.$options.methods;
	      var method = methods && methods[handler];
	      if (method) {
	        vm[action](key, method, options);
	      } else {
	        process.env.NODE_ENV !== 'production' && warn('Unknown method: "' + handler + '" when ' + 'registering callback for ' + action + ': "' + key + '".');
	      }
	    } else if (handler && type === 'object') {
	      register(vm, action, key, handler.handler, handler);
	    }
	  }
	
	  /**
	   * Setup recursive attached/detached calls
	   */
	
	  Vue.prototype._initDOMHooks = function () {
	    this.$on('hook:attached', onAttached);
	    this.$on('hook:detached', onDetached);
	  };
	
	  /**
	   * Callback to recursively call attached hook on children
	   */
	
	  function onAttached() {
	    if (!this._isAttached) {
	      this._isAttached = true;
	      this.$children.forEach(callAttach);
	    }
	  }
	
	  /**
	   * Iterator to call attached hook
	   *
	   * @param {Vue} child
	   */
	
	  function callAttach(child) {
	    if (!child._isAttached && inDoc(child.$el)) {
	      child._callHook('attached');
	    }
	  }
	
	  /**
	   * Callback to recursively call detached hook on children
	   */
	
	  function onDetached() {
	    if (this._isAttached) {
	      this._isAttached = false;
	      this.$children.forEach(callDetach);
	    }
	  }
	
	  /**
	   * Iterator to call detached hook
	   *
	   * @param {Vue} child
	   */
	
	  function callDetach(child) {
	    if (child._isAttached && !inDoc(child.$el)) {
	      child._callHook('detached');
	    }
	  }
	
	  /**
	   * Trigger all handlers for a hook
	   *
	   * @param {String} hook
	   */
	
	  Vue.prototype._callHook = function (hook) {
	    this.$emit('pre-hook:' + hook);
	    var handlers = this.$options[hook];
	    if (handlers) {
	      for (var i = 0, j = handlers.length; i < j; i++) {
	        handlers[i].call(this);
	      }
	    }
	    this.$emit('hook:' + hook);
	  };
	}
	
	function noop() {}
	
	/**
	 * A directive links a DOM element with a piece of data,
	 * which is the result of evaluating an expression.
	 * It registers a watcher with the expression and calls
	 * the DOM update function when a change is triggered.
	 *
	 * @param {String} name
	 * @param {Node} el
	 * @param {Vue} vm
	 * @param {Object} descriptor
	 *                 - {String} name
	 *                 - {Object} def
	 *                 - {String} expression
	 *                 - {Array<Object>} [filters]
	 *                 - {Boolean} literal
	 *                 - {String} attr
	 *                 - {String} raw
	 * @param {Object} def - directive definition object
	 * @param {Vue} [host] - transclusion host component
	 * @param {Object} [scope] - v-for scope
	 * @param {Fragment} [frag] - owner fragment
	 * @constructor
	 */
	function Directive(descriptor, vm, el, host, scope, frag) {
	  this.vm = vm;
	  this.el = el;
	  // copy descriptor properties
	  this.descriptor = descriptor;
	  this.name = descriptor.name;
	  this.expression = descriptor.expression;
	  this.arg = descriptor.arg;
	  this.modifiers = descriptor.modifiers;
	  this.filters = descriptor.filters;
	  this.literal = this.modifiers && this.modifiers.literal;
	  // private
	  this._locked = false;
	  this._bound = false;
	  this._listeners = null;
	  // link context
	  this._host = host;
	  this._scope = scope;
	  this._frag = frag;
	  // store directives on node in dev mode
	  if (process.env.NODE_ENV !== 'production' && this.el) {
	    this.el._vue_directives = this.el._vue_directives || [];
	    this.el._vue_directives.push(this);
	  }
	}
	
	/**
	 * Initialize the directive, mixin definition properties,
	 * setup the watcher, call definition bind() and update()
	 * if present.
	 *
	 * @param {Object} def
	 */
	
	Directive.prototype._bind = function () {
	  var name = this.name;
	  var descriptor = this.descriptor;
	
	  // remove attribute
	  if ((name !== 'cloak' || this.vm._isCompiled) && this.el && this.el.removeAttribute) {
	    var attr = descriptor.attr || 'v-' + name;
	    this.el.removeAttribute(attr);
	  }
	
	  // copy def properties
	  var def = descriptor.def;
	  if (typeof def === 'function') {
	    this.update = def;
	  } else {
	    extend(this, def);
	  }
	
	  // setup directive params
	  this._setupParams();
	
	  // initial bind
	  if (this.bind) {
	    this.bind();
	  }
	  this._bound = true;
	
	  if (this.literal) {
	    this.update && this.update(descriptor.raw);
	  } else if ((this.expression || this.modifiers) && (this.update || this.twoWay) && !this._checkStatement()) {
	    // wrapped updater for context
	    var dir = this;
	    if (this.update) {
	      this._update = function (val, oldVal) {
	        if (!dir._locked) {
	          dir.update(val, oldVal);
	        }
	      };
	    } else {
	      this._update = noop;
	    }
	    var preProcess = this._preProcess ? bind$1(this._preProcess, this) : null;
	    var postProcess = this._postProcess ? bind$1(this._postProcess, this) : null;
	    var watcher = this._watcher = new Watcher(this.vm, this.expression, this._update, // callback
	    {
	      filters: this.filters,
	      twoWay: this.twoWay,
	      deep: this.deep,
	      preProcess: preProcess,
	      postProcess: postProcess,
	      scope: this._scope
	    });
	    // v-model with inital inline value need to sync back to
	    // model instead of update to DOM on init. They would
	    // set the afterBind hook to indicate that.
	    if (this.afterBind) {
	      this.afterBind();
	    } else if (this.update) {
	      this.update(watcher.value);
	    }
	  }
	};
	
	/**
	 * Setup all param attributes, e.g. track-by,
	 * transition-mode, etc...
	 */
	
	Directive.prototype._setupParams = function () {
	  if (!this.params) {
	    return;
	  }
	  var params = this.params;
	  // swap the params array with a fresh object.
	  this.params = Object.create(null);
	  var i = params.length;
	  var key, val, mappedKey;
	  while (i--) {
	    key = params[i];
	    mappedKey = camelize(key);
	    val = getBindAttr(this.el, key);
	    if (val != null) {
	      // dynamic
	      this._setupParamWatcher(mappedKey, val);
	    } else {
	      // static
	      val = getAttr(this.el, key);
	      if (val != null) {
	        this.params[mappedKey] = val === '' ? true : val;
	      }
	    }
	  }
	};
	
	/**
	 * Setup a watcher for a dynamic param.
	 *
	 * @param {String} key
	 * @param {String} expression
	 */
	
	Directive.prototype._setupParamWatcher = function (key, expression) {
	  var self = this;
	  var called = false;
	  var unwatch = (this._scope || this.vm).$watch(expression, function (val, oldVal) {
	    self.params[key] = val;
	    // since we are in immediate mode,
	    // only call the param change callbacks if this is not the first update.
	    if (called) {
	      var cb = self.paramWatchers && self.paramWatchers[key];
	      if (cb) {
	        cb.call(self, val, oldVal);
	      }
	    } else {
	      called = true;
	    }
	  }, {
	    immediate: true,
	    user: false
	  });(this._paramUnwatchFns || (this._paramUnwatchFns = [])).push(unwatch);
	};
	
	/**
	 * Check if the directive is a function caller
	 * and if the expression is a callable one. If both true,
	 * we wrap up the expression and use it as the event
	 * handler.
	 *
	 * e.g. on-click="a++"
	 *
	 * @return {Boolean}
	 */
	
	Directive.prototype._checkStatement = function () {
	  var expression = this.expression;
	  if (expression && this.acceptStatement && !isSimplePath(expression)) {
	    var fn = parseExpression(expression).get;
	    var scope = this._scope || this.vm;
	    var handler = function handler(e) {
	      scope.$event = e;
	      fn.call(scope, scope);
	      scope.$event = null;
	    };
	    if (this.filters) {
	      handler = scope._applyFilters(handler, null, this.filters);
	    }
	    this.update(handler);
	    return true;
	  }
	};
	
	/**
	 * Set the corresponding value with the setter.
	 * This should only be used in two-way directives
	 * e.g. v-model.
	 *
	 * @param {*} value
	 * @public
	 */
	
	Directive.prototype.set = function (value) {
	  /* istanbul ignore else */
	  if (this.twoWay) {
	    this._withLock(function () {
	      this._watcher.set(value);
	    });
	  } else if (process.env.NODE_ENV !== 'production') {
	    warn('Directive.set() can only be used inside twoWay' + 'directives.');
	  }
	};
	
	/**
	 * Execute a function while preventing that function from
	 * triggering updates on this directive instance.
	 *
	 * @param {Function} fn
	 */
	
	Directive.prototype._withLock = function (fn) {
	  var self = this;
	  self._locked = true;
	  fn.call(self);
	  nextTick(function () {
	    self._locked = false;
	  });
	};
	
	/**
	 * Convenience method that attaches a DOM event listener
	 * to the directive element and autometically tears it down
	 * during unbind.
	 *
	 * @param {String} event
	 * @param {Function} handler
	 */
	
	Directive.prototype.on = function (event, handler) {
	  on$1(this.el, event, handler);(this._listeners || (this._listeners = [])).push([event, handler]);
	};
	
	/**
	 * Teardown the watcher and call unbind.
	 */
	
	Directive.prototype._teardown = function () {
	  if (this._bound) {
	    this._bound = false;
	    if (this.unbind) {
	      this.unbind();
	    }
	    if (this._watcher) {
	      this._watcher.teardown();
	    }
	    var listeners = this._listeners;
	    var i;
	    if (listeners) {
	      i = listeners.length;
	      while (i--) {
	        off(this.el, listeners[i][0], listeners[i][1]);
	      }
	    }
	    var unwatchFns = this._paramUnwatchFns;
	    if (unwatchFns) {
	      i = unwatchFns.length;
	      while (i--) {
	        unwatchFns[i]();
	      }
	    }
	    if (process.env.NODE_ENV !== 'production' && this.el) {
	      this.el._vue_directives.$remove(this);
	    }
	    this.vm = this.el = this._watcher = this._listeners = null;
	  }
	};
	
	function lifecycleMixin (Vue) {
	
	  /**
	   * Update v-ref for component.
	   *
	   * @param {Boolean} remove
	   */
	
	  Vue.prototype._updateRef = function (remove) {
	    var ref = this.$options._ref;
	    if (ref) {
	      var refs = (this._scope || this._context).$refs;
	      if (remove) {
	        if (refs[ref] === this) {
	          refs[ref] = null;
	        }
	      } else {
	        refs[ref] = this;
	      }
	    }
	  };
	
	  /**
	   * Transclude, compile and link element.
	   *
	   * If a pre-compiled linker is available, that means the
	   * passed in element will be pre-transcluded and compiled
	   * as well - all we need to do is to call the linker.
	   *
	   * Otherwise we need to call transclude/compile/link here.
	   *
	   * @param {Element} el
	   * @return {Element}
	   */
	
	  Vue.prototype._compile = function (el) {
	    var options = this.$options;
	
	    // transclude and init element
	    // transclude can potentially replace original
	    // so we need to keep reference; this step also injects
	    // the template and caches the original attributes
	    // on the container node and replacer node.
	    var original = el;
	    el = transclude(el, options);
	    this._initElement(el);
	
	    // handle v-pre on root node (#2026)
	    if (el.nodeType === 1 && getAttr(el, 'v-pre') !== null) {
	      return;
	    }
	
	    // root is always compiled per-instance, because
	    // container attrs and props can be different every time.
	    var contextOptions = this._context && this._context.$options;
	    var rootLinker = compileRoot(el, options, contextOptions);
	
	    // compile and link the rest
	    var contentLinkFn;
	    var ctor = this.constructor;
	    // component compilation can be cached
	    // as long as it's not using inline-template
	    if (options._linkerCachable) {
	      contentLinkFn = ctor.linker;
	      if (!contentLinkFn) {
	        contentLinkFn = ctor.linker = compile(el, options);
	      }
	    }
	
	    // link phase
	    // make sure to link root with prop scope!
	    var rootUnlinkFn = rootLinker(this, el, this._scope);
	    var contentUnlinkFn = contentLinkFn ? contentLinkFn(this, el) : compile(el, options)(this, el);
	
	    // register composite unlink function
	    // to be called during instance destruction
	    this._unlinkFn = function () {
	      rootUnlinkFn();
	      // passing destroying: true to avoid searching and
	      // splicing the directives
	      contentUnlinkFn(true);
	    };
	
	    // finally replace original
	    if (options.replace) {
	      replace(original, el);
	    }
	
	    this._isCompiled = true;
	    this._callHook('compiled');
	    return el;
	  };
	
	  /**
	   * Initialize instance element. Called in the public
	   * $mount() method.
	   *
	   * @param {Element} el
	   */
	
	  Vue.prototype._initElement = function (el) {
	    if (el instanceof DocumentFragment) {
	      this._isFragment = true;
	      this.$el = this._fragmentStart = el.firstChild;
	      this._fragmentEnd = el.lastChild;
	      // set persisted text anchors to empty
	      if (this._fragmentStart.nodeType === 3) {
	        this._fragmentStart.data = this._fragmentEnd.data = '';
	      }
	      this._fragment = el;
	    } else {
	      this.$el = el;
	    }
	    this.$el.__vue__ = this;
	    this._callHook('beforeCompile');
	  };
	
	  /**
	   * Create and bind a directive to an element.
	   *
	   * @param {String} name - directive name
	   * @param {Node} node   - target node
	   * @param {Object} desc - parsed directive descriptor
	   * @param {Object} def  - directive definition object
	   * @param {Vue} [host] - transclusion host component
	   * @param {Object} [scope] - v-for scope
	   * @param {Fragment} [frag] - owner fragment
	   */
	
	  Vue.prototype._bindDir = function (descriptor, node, host, scope, frag) {
	    this._directives.push(new Directive(descriptor, this, node, host, scope, frag));
	  };
	
	  /**
	   * Teardown an instance, unobserves the data, unbind all the
	   * directives, turn off all the event listeners, etc.
	   *
	   * @param {Boolean} remove - whether to remove the DOM node.
	   * @param {Boolean} deferCleanup - if true, defer cleanup to
	   *                                 be called later
	   */
	
	  Vue.prototype._destroy = function (remove, deferCleanup) {
	    if (this._isBeingDestroyed) {
	      if (!deferCleanup) {
	        this._cleanup();
	      }
	      return;
	    }
	
	    var destroyReady;
	    var pendingRemoval;
	
	    var self = this;
	    // Cleanup should be called either synchronously or asynchronoysly as
	    // callback of this.$remove(), or if remove and deferCleanup are false.
	    // In any case it should be called after all other removing, unbinding and
	    // turning of is done
	    var cleanupIfPossible = function cleanupIfPossible() {
	      if (destroyReady && !pendingRemoval && !deferCleanup) {
	        self._cleanup();
	      }
	    };
	
	    // remove DOM element
	    if (remove && this.$el) {
	      pendingRemoval = true;
	      this.$remove(function () {
	        pendingRemoval = false;
	        cleanupIfPossible();
	      });
	    }
	
	    this._callHook('beforeDestroy');
	    this._isBeingDestroyed = true;
	    var i;
	    // remove self from parent. only necessary
	    // if parent is not being destroyed as well.
	    var parent = this.$parent;
	    if (parent && !parent._isBeingDestroyed) {
	      parent.$children.$remove(this);
	      // unregister ref (remove: true)
	      this._updateRef(true);
	    }
	    // destroy all children.
	    i = this.$children.length;
	    while (i--) {
	      this.$children[i].$destroy();
	    }
	    // teardown props
	    if (this._propsUnlinkFn) {
	      this._propsUnlinkFn();
	    }
	    // teardown all directives. this also tearsdown all
	    // directive-owned watchers.
	    if (this._unlinkFn) {
	      this._unlinkFn();
	    }
	    i = this._watchers.length;
	    while (i--) {
	      this._watchers[i].teardown();
	    }
	    // remove reference to self on $el
	    if (this.$el) {
	      this.$el.__vue__ = null;
	    }
	
	    destroyReady = true;
	    cleanupIfPossible();
	  };
	
	  /**
	   * Clean up to ensure garbage collection.
	   * This is called after the leave transition if there
	   * is any.
	   */
	
	  Vue.prototype._cleanup = function () {
	    if (this._isDestroyed) {
	      return;
	    }
	    // remove self from owner fragment
	    // do it in cleanup so that we can call $destroy with
	    // defer right when a fragment is about to be removed.
	    if (this._frag) {
	      this._frag.children.$remove(this);
	    }
	    // remove reference from data ob
	    // frozen object may not have observer.
	    if (this._data.__ob__) {
	      this._data.__ob__.removeVm(this);
	    }
	    // Clean up references to private properties and other
	    // instances. preserve reference to _data so that proxy
	    // accessors still work. The only potential side effect
	    // here is that mutating the instance after it's destroyed
	    // may affect the state of other components that are still
	    // observing the same object, but that seems to be a
	    // reasonable responsibility for the user rather than
	    // always throwing an error on them.
	    this.$el = this.$parent = this.$root = this.$children = this._watchers = this._context = this._scope = this._directives = null;
	    // call the last hook...
	    this._isDestroyed = true;
	    this._callHook('destroyed');
	    // turn off all instance listeners.
	    this.$off();
	  };
	}
	
	function miscMixin (Vue) {
	
	  /**
	   * Apply a list of filter (descriptors) to a value.
	   * Using plain for loops here because this will be called in
	   * the getter of any watcher with filters so it is very
	   * performance sensitive.
	   *
	   * @param {*} value
	   * @param {*} [oldValue]
	   * @param {Array} filters
	   * @param {Boolean} write
	   * @return {*}
	   */
	
	  Vue.prototype._applyFilters = function (value, oldValue, filters, write) {
	    var filter, fn, args, arg, offset, i, l, j, k;
	    for (i = 0, l = filters.length; i < l; i++) {
	      filter = filters[i];
	      fn = resolveAsset(this.$options, 'filters', filter.name);
	      if (process.env.NODE_ENV !== 'production') {
	        assertAsset(fn, 'filter', filter.name);
	      }
	      if (!fn) continue;
	      fn = write ? fn.write : fn.read || fn;
	      if (typeof fn !== 'function') continue;
	      args = write ? [value, oldValue] : [value];
	      offset = write ? 2 : 1;
	      if (filter.args) {
	        for (j = 0, k = filter.args.length; j < k; j++) {
	          arg = filter.args[j];
	          args[j + offset] = arg.dynamic ? this.$get(arg.value) : arg.value;
	        }
	      }
	      value = fn.apply(this, args);
	    }
	    return value;
	  };
	
	  /**
	   * Resolve a component, depending on whether the component
	   * is defined normally or using an async factory function.
	   * Resolves synchronously if already resolved, otherwise
	   * resolves asynchronously and caches the resolved
	   * constructor on the factory.
	   *
	   * @param {String} id
	   * @param {Function} cb
	   */
	
	  Vue.prototype._resolveComponent = function (id, cb) {
	    var factory = resolveAsset(this.$options, 'components', id);
	    if (process.env.NODE_ENV !== 'production') {
	      assertAsset(factory, 'component', id);
	    }
	    if (!factory) {
	      return;
	    }
	    // async component factory
	    if (!factory.options) {
	      if (factory.resolved) {
	        // cached
	        cb(factory.resolved);
	      } else if (factory.requested) {
	        // pool callbacks
	        factory.pendingCallbacks.push(cb);
	      } else {
	        factory.requested = true;
	        var cbs = factory.pendingCallbacks = [cb];
	        factory(function resolve(res) {
	          if (isPlainObject(res)) {
	            res = Vue.extend(res);
	          }
	          // cache resolved
	          factory.resolved = res;
	          // invoke callbacks
	          for (var i = 0, l = cbs.length; i < l; i++) {
	            cbs[i](res);
	          }
	        }, function reject(reason) {
	          process.env.NODE_ENV !== 'production' && warn('Failed to resolve async component: ' + id + '. ' + (reason ? '\nReason: ' + reason : ''));
	        });
	      }
	    } else {
	      // normal component
	      cb(factory);
	    }
	  };
	}
	
	function globalAPI (Vue) {
	
	  /**
	   * Expose useful internals
	   */
	
	  Vue.util = util;
	  Vue.config = config;
	  Vue.set = set;
	  Vue['delete'] = del;
	  Vue.nextTick = nextTick;
	
	  /**
	   * The following are exposed for advanced usage / plugins
	   */
	
	  Vue.compiler = compiler;
	  Vue.FragmentFactory = FragmentFactory;
	  Vue.internalDirectives = internalDirectives;
	  Vue.parsers = {
	    path: path,
	    text: text$1,
	    template: template,
	    directive: directive,
	    expression: expression
	  };
	
	  /**
	   * Each instance constructor, including Vue, has a unique
	   * cid. This enables us to create wrapped "child
	   * constructors" for prototypal inheritance and cache them.
	   */
	
	  Vue.cid = 0;
	  var cid = 1;
	
	  /**
	   * Class inheritance
	   *
	   * @param {Object} extendOptions
	   */
	
	  Vue.extend = function (extendOptions) {
	    extendOptions = extendOptions || {};
	    var Super = this;
	    var isFirstExtend = Super.cid === 0;
	    if (isFirstExtend && extendOptions._Ctor) {
	      return extendOptions._Ctor;
	    }
	    var name = extendOptions.name || Super.options.name;
	    if (process.env.NODE_ENV !== 'production') {
	      if (!/^[a-zA-Z][\w-]+$/.test(name)) {
	        warn('Invalid component name: ' + name);
	        name = null;
	      }
	    }
	    var Sub = createClass(name || 'VueComponent');
	    Sub.prototype = Object.create(Super.prototype);
	    Sub.prototype.constructor = Sub;
	    Sub.cid = cid++;
	    Sub.options = mergeOptions(Super.options, extendOptions);
	    Sub['super'] = Super;
	    // allow further extension
	    Sub.extend = Super.extend;
	    // create asset registers, so extended classes
	    // can have their private assets too.
	    config._assetTypes.forEach(function (type) {
	      Sub[type] = Super[type];
	    });
	    // enable recursive self-lookup
	    if (name) {
	      Sub.options.components[name] = Sub;
	    }
	    // cache constructor
	    if (isFirstExtend) {
	      extendOptions._Ctor = Sub;
	    }
	    return Sub;
	  };
	
	  /**
	   * A function that returns a sub-class constructor with the
	   * given name. This gives us much nicer output when
	   * logging instances in the console.
	   *
	   * @param {String} name
	   * @return {Function}
	   */
	
	  function createClass(name) {
	    return new Function('return function ' + classify(name) + ' (options) { this._init(options) }')();
	  }
	
	  /**
	   * Plugin system
	   *
	   * @param {Object} plugin
	   */
	
	  Vue.use = function (plugin) {
	    /* istanbul ignore if */
	    if (plugin.installed) {
	      return;
	    }
	    // additional parameters
	    var args = toArray(arguments, 1);
	    args.unshift(this);
	    if (typeof plugin.install === 'function') {
	      plugin.install.apply(plugin, args);
	    } else {
	      plugin.apply(null, args);
	    }
	    plugin.installed = true;
	    return this;
	  };
	
	  /**
	   * Apply a global mixin by merging it into the default
	   * options.
	   */
	
	  Vue.mixin = function (mixin) {
	    Vue.options = mergeOptions(Vue.options, mixin);
	  };
	
	  /**
	   * Create asset registration methods with the following
	   * signature:
	   *
	   * @param {String} id
	   * @param {*} definition
	   */
	
	  config._assetTypes.forEach(function (type) {
	    Vue[type] = function (id, definition) {
	      if (!definition) {
	        return this.options[type + 's'][id];
	      } else {
	        /* istanbul ignore if */
	        if (process.env.NODE_ENV !== 'production') {
	          if (type === 'component' && (commonTagRE.test(id) || reservedTagRE.test(id))) {
	            warn('Do not use built-in or reserved HTML elements as component ' + 'id: ' + id);
	          }
	        }
	        if (type === 'component' && isPlainObject(definition)) {
	          definition.name = id;
	          definition = Vue.extend(definition);
	        }
	        this.options[type + 's'][id] = definition;
	        return definition;
	      }
	    };
	  });
	}
	
	var filterRE = /[^|]\|[^|]/;
	
	function dataAPI (Vue) {
	
	  /**
	   * Get the value from an expression on this vm.
	   *
	   * @param {String} exp
	   * @param {Boolean} [asStatement]
	   * @return {*}
	   */
	
	  Vue.prototype.$get = function (exp, asStatement) {
	    var res = parseExpression(exp);
	    if (res) {
	      if (asStatement && !isSimplePath(exp)) {
	        var self = this;
	        return function statementHandler() {
	          self.$arguments = toArray(arguments);
	          var result = res.get.call(self, self);
	          self.$arguments = null;
	          return result;
	        };
	      } else {
	        try {
	          return res.get.call(this, this);
	        } catch (e) {}
	      }
	    }
	  };
	
	  /**
	   * Set the value from an expression on this vm.
	   * The expression must be a valid left-hand
	   * expression in an assignment.
	   *
	   * @param {String} exp
	   * @param {*} val
	   */
	
	  Vue.prototype.$set = function (exp, val) {
	    var res = parseExpression(exp, true);
	    if (res && res.set) {
	      res.set.call(this, this, val);
	    }
	  };
	
	  /**
	   * Delete a property on the VM
	   *
	   * @param {String} key
	   */
	
	  Vue.prototype.$delete = function (key) {
	    del(this._data, key);
	  };
	
	  /**
	   * Watch an expression, trigger callback when its
	   * value changes.
	   *
	   * @param {String|Function} expOrFn
	   * @param {Function} cb
	   * @param {Object} [options]
	   *                 - {Boolean} deep
	   *                 - {Boolean} immediate
	   * @return {Function} - unwatchFn
	   */
	
	  Vue.prototype.$watch = function (expOrFn, cb, options) {
	    var vm = this;
	    var parsed;
	    if (typeof expOrFn === 'string') {
	      parsed = parseDirective(expOrFn);
	      expOrFn = parsed.expression;
	    }
	    var watcher = new Watcher(vm, expOrFn, cb, {
	      deep: options && options.deep,
	      sync: options && options.sync,
	      filters: parsed && parsed.filters,
	      user: !options || options.user !== false
	    });
	    if (options && options.immediate) {
	      cb.call(vm, watcher.value);
	    }
	    return function unwatchFn() {
	      watcher.teardown();
	    };
	  };
	
	  /**
	   * Evaluate a text directive, including filters.
	   *
	   * @param {String} text
	   * @param {Boolean} [asStatement]
	   * @return {String}
	   */
	
	  Vue.prototype.$eval = function (text, asStatement) {
	    // check for filters.
	    if (filterRE.test(text)) {
	      var dir = parseDirective(text);
	      // the filter regex check might give false positive
	      // for pipes inside strings, so it's possible that
	      // we don't get any filters here
	      var val = this.$get(dir.expression, asStatement);
	      return dir.filters ? this._applyFilters(val, null, dir.filters) : val;
	    } else {
	      // no filter
	      return this.$get(text, asStatement);
	    }
	  };
	
	  /**
	   * Interpolate a piece of template text.
	   *
	   * @param {String} text
	   * @return {String}
	   */
	
	  Vue.prototype.$interpolate = function (text) {
	    var tokens = parseText(text);
	    var vm = this;
	    if (tokens) {
	      if (tokens.length === 1) {
	        return vm.$eval(tokens[0].value) + '';
	      } else {
	        return tokens.map(function (token) {
	          return token.tag ? vm.$eval(token.value) : token.value;
	        }).join('');
	      }
	    } else {
	      return text;
	    }
	  };
	
	  /**
	   * Log instance data as a plain JS object
	   * so that it is easier to inspect in console.
	   * This method assumes console is available.
	   *
	   * @param {String} [path]
	   */
	
	  Vue.prototype.$log = function (path) {
	    var data = path ? getPath(this._data, path) : this._data;
	    if (data) {
	      data = clean(data);
	    }
	    // include computed fields
	    if (!path) {
	      for (var key in this.$options.computed) {
	        data[key] = clean(this[key]);
	      }
	    }
	    console.log(data);
	  };
	
	  /**
	   * "clean" a getter/setter converted object into a plain
	   * object copy.
	   *
	   * @param {Object} - obj
	   * @return {Object}
	   */
	
	  function clean(obj) {
	    return JSON.parse(JSON.stringify(obj));
	  }
	}
	
	function domAPI (Vue) {
	
	  /**
	   * Convenience on-instance nextTick. The callback is
	   * auto-bound to the instance, and this avoids component
	   * modules having to rely on the global Vue.
	   *
	   * @param {Function} fn
	   */
	
	  Vue.prototype.$nextTick = function (fn) {
	    nextTick(fn, this);
	  };
	
	  /**
	   * Append instance to target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */
	
	  Vue.prototype.$appendTo = function (target, cb, withTransition) {
	    return insert(this, target, cb, withTransition, append, appendWithTransition);
	  };
	
	  /**
	   * Prepend instance to target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */
	
	  Vue.prototype.$prependTo = function (target, cb, withTransition) {
	    target = query(target);
	    if (target.hasChildNodes()) {
	      this.$before(target.firstChild, cb, withTransition);
	    } else {
	      this.$appendTo(target, cb, withTransition);
	    }
	    return this;
	  };
	
	  /**
	   * Insert instance before target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */
	
	  Vue.prototype.$before = function (target, cb, withTransition) {
	    return insert(this, target, cb, withTransition, beforeWithCb, beforeWithTransition);
	  };
	
	  /**
	   * Insert instance after target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */
	
	  Vue.prototype.$after = function (target, cb, withTransition) {
	    target = query(target);
	    if (target.nextSibling) {
	      this.$before(target.nextSibling, cb, withTransition);
	    } else {
	      this.$appendTo(target.parentNode, cb, withTransition);
	    }
	    return this;
	  };
	
	  /**
	   * Remove instance from DOM
	   *
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */
	
	  Vue.prototype.$remove = function (cb, withTransition) {
	    if (!this.$el.parentNode) {
	      return cb && cb();
	    }
	    var inDocument = this._isAttached && inDoc(this.$el);
	    // if we are not in document, no need to check
	    // for transitions
	    if (!inDocument) withTransition = false;
	    var self = this;
	    var realCb = function realCb() {
	      if (inDocument) self._callHook('detached');
	      if (cb) cb();
	    };
	    if (this._isFragment) {
	      removeNodeRange(this._fragmentStart, this._fragmentEnd, this, this._fragment, realCb);
	    } else {
	      var op = withTransition === false ? removeWithCb : removeWithTransition;
	      op(this.$el, this, realCb);
	    }
	    return this;
	  };
	
	  /**
	   * Shared DOM insertion function.
	   *
	   * @param {Vue} vm
	   * @param {Element} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition]
	   * @param {Function} op1 - op for non-transition insert
	   * @param {Function} op2 - op for transition insert
	   * @return vm
	   */
	
	  function insert(vm, target, cb, withTransition, op1, op2) {
	    target = query(target);
	    var targetIsDetached = !inDoc(target);
	    var op = withTransition === false || targetIsDetached ? op1 : op2;
	    var shouldCallHook = !targetIsDetached && !vm._isAttached && !inDoc(vm.$el);
	    if (vm._isFragment) {
	      mapNodeRange(vm._fragmentStart, vm._fragmentEnd, function (node) {
	        op(node, target, vm);
	      });
	      cb && cb();
	    } else {
	      op(vm.$el, target, vm, cb);
	    }
	    if (shouldCallHook) {
	      vm._callHook('attached');
	    }
	    return vm;
	  }
	
	  /**
	   * Check for selectors
	   *
	   * @param {String|Element} el
	   */
	
	  function query(el) {
	    return typeof el === 'string' ? document.querySelector(el) : el;
	  }
	
	  /**
	   * Append operation that takes a callback.
	   *
	   * @param {Node} el
	   * @param {Node} target
	   * @param {Vue} vm - unused
	   * @param {Function} [cb]
	   */
	
	  function append(el, target, vm, cb) {
	    target.appendChild(el);
	    if (cb) cb();
	  }
	
	  /**
	   * InsertBefore operation that takes a callback.
	   *
	   * @param {Node} el
	   * @param {Node} target
	   * @param {Vue} vm - unused
	   * @param {Function} [cb]
	   */
	
	  function beforeWithCb(el, target, vm, cb) {
	    before(el, target);
	    if (cb) cb();
	  }
	
	  /**
	   * Remove operation that takes a callback.
	   *
	   * @param {Node} el
	   * @param {Vue} vm - unused
	   * @param {Function} [cb]
	   */
	
	  function removeWithCb(el, vm, cb) {
	    remove(el);
	    if (cb) cb();
	  }
	}
	
	function eventsAPI (Vue) {
	
	  /**
	   * Listen on the given `event` with `fn`.
	   *
	   * @param {String} event
	   * @param {Function} fn
	   */
	
	  Vue.prototype.$on = function (event, fn) {
	    (this._events[event] || (this._events[event] = [])).push(fn);
	    modifyListenerCount(this, event, 1);
	    return this;
	  };
	
	  /**
	   * Adds an `event` listener that will be invoked a single
	   * time then automatically removed.
	   *
	   * @param {String} event
	   * @param {Function} fn
	   */
	
	  Vue.prototype.$once = function (event, fn) {
	    var self = this;
	    function on() {
	      self.$off(event, on);
	      fn.apply(this, arguments);
	    }
	    on.fn = fn;
	    this.$on(event, on);
	    return this;
	  };
	
	  /**
	   * Remove the given callback for `event` or all
	   * registered callbacks.
	   *
	   * @param {String} event
	   * @param {Function} fn
	   */
	
	  Vue.prototype.$off = function (event, fn) {
	    var cbs;
	    // all
	    if (!arguments.length) {
	      if (this.$parent) {
	        for (event in this._events) {
	          cbs = this._events[event];
	          if (cbs) {
	            modifyListenerCount(this, event, -cbs.length);
	          }
	        }
	      }
	      this._events = {};
	      return this;
	    }
	    // specific event
	    cbs = this._events[event];
	    if (!cbs) {
	      return this;
	    }
	    if (arguments.length === 1) {
	      modifyListenerCount(this, event, -cbs.length);
	      this._events[event] = null;
	      return this;
	    }
	    // specific handler
	    var cb;
	    var i = cbs.length;
	    while (i--) {
	      cb = cbs[i];
	      if (cb === fn || cb.fn === fn) {
	        modifyListenerCount(this, event, -1);
	        cbs.splice(i, 1);
	        break;
	      }
	    }
	    return this;
	  };
	
	  /**
	   * Trigger an event on self.
	   *
	   * @param {String|Object} event
	   * @return {Boolean} shouldPropagate
	   */
	
	  Vue.prototype.$emit = function (event) {
	    var isSource = typeof event === 'string';
	    event = isSource ? event : event.name;
	    var cbs = this._events[event];
	    var shouldPropagate = isSource || !cbs;
	    if (cbs) {
	      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
	      // this is a somewhat hacky solution to the question raised
	      // in #2102: for an inline component listener like <comp @test="doThis">,
	      // the propagation handling is somewhat broken. Therefore we
	      // need to treat these inline callbacks differently.
	      var hasParentCbs = isSource && cbs.some(function (cb) {
	        return cb._fromParent;
	      });
	      if (hasParentCbs) {
	        shouldPropagate = false;
	      }
	      var args = toArray(arguments, 1);
	      for (var i = 0, l = cbs.length; i < l; i++) {
	        var cb = cbs[i];
	        var res = cb.apply(this, args);
	        if (res === true && (!hasParentCbs || cb._fromParent)) {
	          shouldPropagate = true;
	        }
	      }
	    }
	    return shouldPropagate;
	  };
	
	  /**
	   * Recursively broadcast an event to all children instances.
	   *
	   * @param {String|Object} event
	   * @param {...*} additional arguments
	   */
	
	  Vue.prototype.$broadcast = function (event) {
	    var isSource = typeof event === 'string';
	    event = isSource ? event : event.name;
	    // if no child has registered for this event,
	    // then there's no need to broadcast.
	    if (!this._eventsCount[event]) return;
	    var children = this.$children;
	    var args = toArray(arguments);
	    if (isSource) {
	      // use object event to indicate non-source emit
	      // on children
	      args[0] = { name: event, source: this };
	    }
	    for (var i = 0, l = children.length; i < l; i++) {
	      var child = children[i];
	      var shouldPropagate = child.$emit.apply(child, args);
	      if (shouldPropagate) {
	        child.$broadcast.apply(child, args);
	      }
	    }
	    return this;
	  };
	
	  /**
	   * Recursively propagate an event up the parent chain.
	   *
	   * @param {String} event
	   * @param {...*} additional arguments
	   */
	
	  Vue.prototype.$dispatch = function (event) {
	    var shouldPropagate = this.$emit.apply(this, arguments);
	    if (!shouldPropagate) return;
	    var parent = this.$parent;
	    var args = toArray(arguments);
	    // use object event to indicate non-source emit
	    // on parents
	    args[0] = { name: event, source: this };
	    while (parent) {
	      shouldPropagate = parent.$emit.apply(parent, args);
	      parent = shouldPropagate ? parent.$parent : null;
	    }
	    return this;
	  };
	
	  /**
	   * Modify the listener counts on all parents.
	   * This bookkeeping allows $broadcast to return early when
	   * no child has listened to a certain event.
	   *
	   * @param {Vue} vm
	   * @param {String} event
	   * @param {Number} count
	   */
	
	  var hookRE = /^hook:/;
	  function modifyListenerCount(vm, event, count) {
	    var parent = vm.$parent;
	    // hooks do not get broadcasted so no need
	    // to do bookkeeping for them
	    if (!parent || !count || hookRE.test(event)) return;
	    while (parent) {
	      parent._eventsCount[event] = (parent._eventsCount[event] || 0) + count;
	      parent = parent.$parent;
	    }
	  }
	}
	
	function lifecycleAPI (Vue) {
	
	  /**
	   * Set instance target element and kick off the compilation
	   * process. The passed in `el` can be a selector string, an
	   * existing Element, or a DocumentFragment (for block
	   * instances).
	   *
	   * @param {Element|DocumentFragment|string} el
	   * @public
	   */
	
	  Vue.prototype.$mount = function (el) {
	    if (this._isCompiled) {
	      process.env.NODE_ENV !== 'production' && warn('$mount() should be called only once.');
	      return;
	    }
	    el = query(el);
	    if (!el) {
	      el = document.createElement('div');
	    }
	    this._compile(el);
	    this._initDOMHooks();
	    if (inDoc(this.$el)) {
	      this._callHook('attached');
	      ready.call(this);
	    } else {
	      this.$once('hook:attached', ready);
	    }
	    return this;
	  };
	
	  /**
	   * Mark an instance as ready.
	   */
	
	  function ready() {
	    this._isAttached = true;
	    this._isReady = true;
	    this._callHook('ready');
	  }
	
	  /**
	   * Teardown the instance, simply delegate to the internal
	   * _destroy.
	   */
	
	  Vue.prototype.$destroy = function (remove, deferCleanup) {
	    this._destroy(remove, deferCleanup);
	  };
	
	  /**
	   * Partially compile a piece of DOM and return a
	   * decompile function.
	   *
	   * @param {Element|DocumentFragment} el
	   * @param {Vue} [host]
	   * @return {Function}
	   */
	
	  Vue.prototype.$compile = function (el, host, scope, frag) {
	    return compile(el, this.$options, true)(this, el, host, scope, frag);
	  };
	}
	
	/**
	 * The exposed Vue constructor.
	 *
	 * API conventions:
	 * - public API methods/properties are prefixed with `$`
	 * - internal methods/properties are prefixed with `_`
	 * - non-prefixed properties are assumed to be proxied user
	 *   data.
	 *
	 * @constructor
	 * @param {Object} [options]
	 * @public
	 */
	
	function Vue(options) {
	  this._init(options);
	}
	
	// install internals
	initMixin(Vue);
	stateMixin(Vue);
	eventsMixin(Vue);
	lifecycleMixin(Vue);
	miscMixin(Vue);
	
	// install APIs
	globalAPI(Vue);
	dataAPI(Vue);
	domAPI(Vue);
	eventsAPI(Vue);
	lifecycleAPI(Vue);
	
	var convertArray = vFor._postProcess;
	
	/**
	 * Limit filter for arrays
	 *
	 * @param {Number} n
	 * @param {Number} offset (Decimal expected)
	 */
	
	function limitBy(arr, n, offset) {
	  offset = offset ? parseInt(offset, 10) : 0;
	  n = toNumber(n);
	  return typeof n === 'number' ? arr.slice(offset, offset + n) : arr;
	}
	
	/**
	 * Filter filter for arrays
	 *
	 * @param {String} search
	 * @param {String} [delimiter]
	 * @param {String} ...dataKeys
	 */
	
	function filterBy(arr, search, delimiter) {
	  arr = convertArray(arr);
	  if (search == null) {
	    return arr;
	  }
	  if (typeof search === 'function') {
	    return arr.filter(search);
	  }
	  // cast to lowercase string
	  search = ('' + search).toLowerCase();
	  // allow optional `in` delimiter
	  // because why not
	  var n = delimiter === 'in' ? 3 : 2;
	  // extract and flatten keys
	  var keys = toArray(arguments, n).reduce(function (prev, cur) {
	    return prev.concat(cur);
	  }, []);
	  var res = [];
	  var item, key, val, j;
	  for (var i = 0, l = arr.length; i < l; i++) {
	    item = arr[i];
	    val = item && item.$value || item;
	    j = keys.length;
	    if (j) {
	      while (j--) {
	        key = keys[j];
	        if (key === '$key' && contains(item.$key, search) || contains(getPath(val, key), search)) {
	          res.push(item);
	          break;
	        }
	      }
	    } else if (contains(item, search)) {
	      res.push(item);
	    }
	  }
	  return res;
	}
	
	/**
	 * Filter filter for arrays
	 *
	 * @param {String} sortKey
	 * @param {String} reverse
	 */
	
	function orderBy(arr, sortKey, reverse) {
	  arr = convertArray(arr);
	  if (!sortKey) {
	    return arr;
	  }
	  var order = reverse && reverse < 0 ? -1 : 1;
	  // sort on a copy to avoid mutating original array
	  return arr.slice().sort(function (a, b) {
	    if (sortKey !== '$key') {
	      if (isObject(a) && '$value' in a) a = a.$value;
	      if (isObject(b) && '$value' in b) b = b.$value;
	    }
	    a = isObject(a) ? getPath(a, sortKey) : a;
	    b = isObject(b) ? getPath(b, sortKey) : b;
	    return a === b ? 0 : a > b ? order : -order;
	  });
	}
	
	/**
	 * String contain helper
	 *
	 * @param {*} val
	 * @param {String} search
	 */
	
	function contains(val, search) {
	  var i;
	  if (isPlainObject(val)) {
	    var keys = Object.keys(val);
	    i = keys.length;
	    while (i--) {
	      if (contains(val[keys[i]], search)) {
	        return true;
	      }
	    }
	  } else if (isArray(val)) {
	    i = val.length;
	    while (i--) {
	      if (contains(val[i], search)) {
	        return true;
	      }
	    }
	  } else if (val != null) {
	    return val.toString().toLowerCase().indexOf(search) > -1;
	  }
	}
	
	var digitsRE = /(\d{3})(?=\d)/g;
	
	// asset collections must be a plain object.
	var filters = {
	
	  orderBy: orderBy,
	  filterBy: filterBy,
	  limitBy: limitBy,
	
	  /**
	   * Stringify value.
	   *
	   * @param {Number} indent
	   */
	
	  json: {
	    read: function read(value, indent) {
	      return typeof value === 'string' ? value : JSON.stringify(value, null, Number(indent) || 2);
	    },
	    write: function write(value) {
	      try {
	        return JSON.parse(value);
	      } catch (e) {
	        return value;
	      }
	    }
	  },
	
	  /**
	   * 'abc' => 'Abc'
	   */
	
	  capitalize: function capitalize(value) {
	    if (!value && value !== 0) return '';
	    value = value.toString();
	    return value.charAt(0).toUpperCase() + value.slice(1);
	  },
	
	  /**
	   * 'abc' => 'ABC'
	   */
	
	  uppercase: function uppercase(value) {
	    return value || value === 0 ? value.toString().toUpperCase() : '';
	  },
	
	  /**
	   * 'AbC' => 'abc'
	   */
	
	  lowercase: function lowercase(value) {
	    return value || value === 0 ? value.toString().toLowerCase() : '';
	  },
	
	  /**
	   * 12345 => $12,345.00
	   *
	   * @param {String} sign
	   */
	
	  currency: function currency(value, _currency) {
	    value = parseFloat(value);
	    if (!isFinite(value) || !value && value !== 0) return '';
	    _currency = _currency != null ? _currency : '$';
	    var stringified = Math.abs(value).toFixed(2);
	    var _int = stringified.slice(0, -3);
	    var i = _int.length % 3;
	    var head = i > 0 ? _int.slice(0, i) + (_int.length > 3 ? ',' : '') : '';
	    var _float = stringified.slice(-3);
	    var sign = value < 0 ? '-' : '';
	    return _currency + sign + head + _int.slice(i).replace(digitsRE, '$1,') + _float;
	  },
	
	  /**
	   * 'item' => 'items'
	   *
	   * @params
	   *  an array of strings corresponding to
	   *  the single, double, triple ... forms of the word to
	   *  be pluralized. When the number to be pluralized
	   *  exceeds the length of the args, it will use the last
	   *  entry in the array.
	   *
	   *  e.g. ['single', 'double', 'triple', 'multiple']
	   */
	
	  pluralize: function pluralize(value) {
	    var args = toArray(arguments, 1);
	    return args.length > 1 ? args[value % 10 - 1] || args[args.length - 1] : args[0] + (value === 1 ? '' : 's');
	  },
	
	  /**
	   * Debounce a handler function.
	   *
	   * @param {Function} handler
	   * @param {Number} delay = 300
	   * @return {Function}
	   */
	
	  debounce: function debounce(handler, delay) {
	    if (!handler) return;
	    if (!delay) {
	      delay = 300;
	    }
	    return _debounce(handler, delay);
	  }
	};
	
	var partial = {
	
	  priority: PARTIAL,
	
	  params: ['name'],
	
	  // watch changes to name for dynamic partials
	  paramWatchers: {
	    name: function name(value) {
	      vIf.remove.call(this);
	      if (value) {
	        this.insert(value);
	      }
	    }
	  },
	
	  bind: function bind() {
	    this.anchor = createAnchor('v-partial');
	    replace(this.el, this.anchor);
	    this.insert(this.params.name);
	  },
	
	  insert: function insert(id) {
	    var partial = resolveAsset(this.vm.$options, 'partials', id);
	    if (process.env.NODE_ENV !== 'production') {
	      assertAsset(partial, 'partial', id);
	    }
	    if (partial) {
	      this.factory = new FragmentFactory(this.vm, partial);
	      vIf.insert.call(this);
	    }
	  },
	
	  unbind: function unbind() {
	    if (this.frag) {
	      this.frag.destroy();
	    }
	  }
	};
	
	// This is the elementDirective that handles <content>
	// transclusions. It relies on the raw content of an
	// instance being stored as `$options._content` during
	// the transclude phase.
	
	// We are exporting two versions, one for named and one
	// for unnamed, because the unnamed slots must be compiled
	// AFTER all named slots have selected their content. So
	// we need to give them different priorities in the compilation
	// process. (See #1965)
	
	var slot = {
	
	  priority: SLOT,
	
	  bind: function bind() {
	    var host = this.vm;
	    var raw = host.$options._content;
	    if (!raw) {
	      this.fallback();
	      return;
	    }
	    var context = host._context;
	    var slotName = this.params && this.params.name;
	    if (!slotName) {
	      // Default slot
	      this.tryCompile(extractFragment(raw.childNodes, raw, true), context, host);
	    } else {
	      // Named slot
	      var selector = '[slot="' + slotName + '"]';
	      var nodes = raw.querySelectorAll(selector);
	      if (nodes.length) {
	        this.tryCompile(extractFragment(nodes, raw), context, host);
	      } else {
	        this.fallback();
	      }
	    }
	  },
	
	  tryCompile: function tryCompile(content, context, host) {
	    if (content.hasChildNodes()) {
	      this.compile(content, context, host);
	    } else {
	      this.fallback();
	    }
	  },
	
	  compile: function compile(content, context, host) {
	    if (content && context) {
	      var scope = host ? host._scope : this._scope;
	      this.unlink = context.$compile(content, host, scope, this._frag);
	    }
	    if (content) {
	      replace(this.el, content);
	    } else {
	      remove(this.el);
	    }
	  },
	
	  fallback: function fallback() {
	    this.compile(extractContent(this.el, true), this.vm);
	  },
	
	  unbind: function unbind() {
	    if (this.unlink) {
	      this.unlink();
	    }
	  }
	};
	
	var namedSlot = extend(extend({}, slot), {
	  priority: slot.priority + 1,
	  params: ['name']
	});
	
	/**
	 * Extract qualified content nodes from a node list.
	 *
	 * @param {NodeList} nodes
	 * @param {Element} parent
	 * @param {Boolean} main
	 * @return {DocumentFragment}
	 */
	
	function extractFragment(nodes, parent, main) {
	  var frag = document.createDocumentFragment();
	  for (var i = 0, l = nodes.length; i < l; i++) {
	    var node = nodes[i];
	    // if this is the main outlet, we want to skip all
	    // previously selected nodes;
	    // otherwise, we want to mark the node as selected.
	    // clone the node so the original raw content remains
	    // intact. this ensures proper re-compilation in cases
	    // where the outlet is inside a conditional block
	    if (main && !node.__v_selected) {
	      append(node);
	    } else if (!main && node.parentNode === parent) {
	      node.__v_selected = true;
	      append(node);
	    }
	  }
	  return frag;
	
	  function append(node) {
	    if (isTemplate(node) && !node.hasAttribute('v-if') && !node.hasAttribute('v-for')) {
	      node = parseTemplate(node);
	    }
	    node = cloneNode(node);
	    frag.appendChild(node);
	  }
	}
	
	var elementDirectives = {
	  slot: slot,
	  _namedSlot: namedSlot, // same as slot but with higher priority
	  partial: partial
	};
	
	Vue.version = '1.0.15';
	
	/**
	 * Vue and every constructor that extends Vue has an
	 * associated options object, which can be accessed during
	 * compilation steps as `this.constructor.options`.
	 *
	 * These can be seen as the default options of every
	 * Vue instance.
	 */
	
	Vue.options = {
	  directives: publicDirectives,
	  elementDirectives: elementDirectives,
	  filters: filters,
	  transitions: {},
	  components: {},
	  partials: {},
	  replace: true
	};
	
	// devtools global hook
	/* istanbul ignore if */
	if (process.env.NODE_ENV !== 'production' && inBrowser) {
	  if (window.__VUE_DEVTOOLS_GLOBAL_HOOK__) {
	    window.__VUE_DEVTOOLS_GLOBAL_HOOK__.emit('init', Vue);
	  } else if (/Chrome\/\d+/.test(navigator.userAgent)) {
	    console.log('Download the Vue Devtools for a better development experience:\n' + 'https://github.com/vuejs/vue-devtools');
	  }
	}
	
	module.exports = Vue;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(79)))

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {"use strict";var _typeof2=__webpack_require__(8);var _typeof3=_interopRequireDefault(_typeof2);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}!function(t,e){"object"==( false?"undefined":(0,_typeof3.default)(exports))&&"object"==( false?"undefined":(0,_typeof3.default)(module))?module.exports=e(): true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (e), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):"object"==(typeof exports==="undefined"?"undefined":(0,_typeof3.default)(exports))?exports.echarts=e():t.echarts=e();}(undefined,function(){return function(t){function e(n){if(i[n])return i[n].exports;var r=i[n]={exports:{},id:n,loaded:!1};return t[n].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports;}var i={};return e.m=t,e.c=i,e.p="",e(0);}([function(t,e,i){t.exports=i(2),i(85),i(79),i(90),i(163),i(196),i(176),i(34),i(187),i(182),i(181),i(166),i(188),i(204);},function(t,e,i){function n(t){if("object"==(typeof t==="undefined"?"undefined":(0,_typeof3.default)(t))&&null!==t){var e=t;if(t instanceof Array){e=[];for(var i=0,r=t.length;r>i;i++){e[i]=n(t[i]);}}else if(!A(t)&&!T(t)){e={};for(var o in t){t.hasOwnProperty(o)&&(e[o]=n(t[o]));}}return e;}return t;}function r(t,e,i){if(!S(e)||!S(t))return i?n(e):t;for(var o in e){if(e.hasOwnProperty(o)){var a=t[o],s=e[o];!S(s)||!S(a)||b(s)||b(a)||T(s)||T(a)||A(s)||A(a)?!i&&o in t||(t[o]=n(e[o],!0)):r(a,s,i);}}return t;}function o(t,e){for(var i=t[0],n=1,o=t.length;o>n;n++){i=r(i,t[n],e);}return i;}function a(t,e){for(var i in e){e.hasOwnProperty(i)&&(t[i]=e[i]);}return t;}function s(t,e,i){for(var n in e){e.hasOwnProperty(n)&&(i?null!=e[n]:null==t[n])&&(t[n]=e[n]);}return t;}function l(){return document.createElement("canvas");}function h(){return D||(D=F.createCanvas().getContext("2d")),D;}function c(t,e){if(t){if(t.indexOf)return t.indexOf(e);for(var i=0,n=t.length;n>i;i++){if(t[i]===e)return i;}}return -1;}function u(t,e){function i(){}var n=t.prototype;i.prototype=e.prototype,t.prototype=new i();for(var r in n){t.prototype[r]=n[r];}t.prototype.constructor=t,t.superClass=e;}function d(t,e,i){t="prototype" in t?t.prototype:t,e="prototype" in e?e.prototype:e,s(t,e,i);}function f(t){return t?"string"==typeof t?!1:"number"==typeof t.length:void 0;}function p(t,e,i){if(t&&e)if(t.forEach&&t.forEach===E)t.forEach(e,i);else if(t.length===+t.length)for(var n=0,r=t.length;r>n;n++){e.call(i,t[n],n,t);}else for(var o in t){t.hasOwnProperty(o)&&e.call(i,t[o],o,t);}}function g(t,e,i){if(t&&e){if(t.map&&t.map===N)return t.map(e,i);for(var n=[],r=0,o=t.length;o>r;r++){n.push(e.call(i,t[r],r,t));}return n;}}function m(t,e,i,n){if(t&&e){if(t.reduce&&t.reduce===V)return t.reduce(e,i,n);for(var r=0,o=t.length;o>r;r++){i=e.call(n,i,t[r],r,t);}return i;}}function v(t,e,i){if(t&&e){if(t.filter&&t.filter===R)return t.filter(e,i);for(var n=[],r=0,o=t.length;o>r;r++){e.call(i,t[r],r,t)&&n.push(t[r]);}return n;}}function y(t,e,i){if(t&&e)for(var n=0,r=t.length;r>n;n++){if(e.call(i,t[n],n,t))return t[n];}}function x(t,e){var i=B.call(arguments,2);return function(){return t.apply(e,i.concat(B.call(arguments)));};}function _(t){var e=B.call(arguments,1);return function(){return t.apply(this,e.concat(B.call(arguments)));};}function b(t){return "[object Array]"===O.call(t);}function w(t){return "function"==typeof t;}function M(t){return "[object String]"===O.call(t);}function S(t){var e=typeof t==="undefined"?"undefined":(0,_typeof3.default)(t);return "function"===e||!!t&&"object"==e;}function A(t){return !!P[O.call(t)]||t instanceof L;}function T(t){return t&&1===t.nodeType&&"string"==typeof t.nodeName;}function C(t){for(var e=0,i=arguments.length;i>e;e++){if(null!=arguments[e])return arguments[e];}}function I(){return Function.call.apply(B,arguments);}function k(t,e){if(!t)throw new Error(e);}var D,L=i(16),P={"[object Function]":1,"[object RegExp]":1,"[object Date]":1,"[object Error]":1,"[object CanvasGradient]":1},O=Object.prototype.toString,z=Array.prototype,E=z.forEach,R=z.filter,B=z.slice,N=z.map,V=z.reduce,F={inherits:u,mixin:d,clone:n,merge:r,mergeAll:o,extend:a,defaults:s,getContext:h,createCanvas:l,indexOf:c,slice:I,find:y,isArrayLike:f,each:p,map:g,reduce:m,filter:v,bind:x,curry:_,isArray:b,isString:M,isObject:S,isFunction:w,isBuildInObject:A,isDom:T,retrieve:C,assert:k,noop:function noop(){}};t.exports=F;},function(t,e,i){function n(t){return function(e,i,n){e=e&&e.toLowerCase(),k.prototype[t].call(this,e,i,n);};}function r(){k.call(this);}function o(t,e,i){i=i||{},"string"==typeof e&&(e=Z[e]),e&&D(G,function(t){t(e);}),this.id,this.group,this._dom=t,this._zr=A.init(t,{renderer:i.renderer||"canvas",devicePixelRatio:i.devicePixelRatio}),this._theme=T.clone(e),this._chartsViews=[],this._chartsMap={},this._componentsViews=[],this._componentsMap={},this._api=new v(this),this._coordSysMgr=new y(),k.call(this),this._messageCenter=new r(),this._initEvents(),this.resize=T.bind(this.resize,this);}function a(t,e){var i=this._model;i&&i.eachComponent({mainType:"series",query:e},function(n,r){var o=this._chartsMap[n.__viewId];o&&o.__alive&&o[t](n,i,this._api,e);},this);}function s(t,e,i){var n=this._api;D(this._componentsViews,function(r){var o=r.__model;r[t](o,e,n,i),p(o,r);},this),e.eachSeries(function(r,o){var a=this._chartsMap[r.__viewId];a[t](r,e,n,i),p(r,a);},this);}function l(t,e){for(var i="component"===t,n=i?this._componentsViews:this._chartsViews,r=i?this._componentsMap:this._chartsMap,o=this._zr,a=0;a<n.length;a++){n[a].__alive=!1;}e[i?"eachComponent":"eachSeries"](function(t,a){if(i){if("series"===t)return;}else a=t;var s=a.id+"_"+a.type,l=r[s];if(!l){var h=_.parseClassType(a.type),c=i?w.getClass(h.main,h.sub):M.getClass(h.sub);if(!c)return;l=new c(),l.init(e,this._api),r[s]=l,n.push(l),o.add(l.group);}a.__viewId=s,l.__alive=!0,l.__id=s,l.__model=a;},this);for(var a=0;a<n.length;){var s=n[a];s.__alive?a++:(o.remove(s.group),s.dispose(e,this._api),n.splice(a,1),delete r[s.__id]);}}function h(t,e){D(P,function(i){D(F[i]||[],function(i){i(t,e);});});}function c(t){var e={};t.eachSeries(function(t){var i=t.get("stack"),n=t.getData();if(i&&"list"===n.type){var r=e[i];r&&(n.stackedOn=r),e[i]=n;}});}function u(t,e){var i=this._api;D(V,function(n){n(t,i,e);});}function d(t,e){D(L,function(i){D(W[i]||[],function(i){i(t,e);});});}function f(t,e){var i=this._api;D(this._componentsViews,function(n){var r=n.__model;n.render(r,t,i,e),p(r,n);},this),D(this._chartsViews,function(t){t.__alive=!1;},this),t.eachSeries(function(n,r){var o=this._chartsMap[n.__viewId];o.__alive=!0,o.render(n,t,i,e),o.group.silent=!!n.get("silent"),p(n,o);},this),D(this._chartsViews,function(e){e.__alive||e.remove(t,i);},this);}function p(t,e){var i=t.get("z"),n=t.get("zlevel");e.group.traverse(function(t){null!=i&&(t.z=i),null!=n&&(t.zlevel=n);});}function g(t){function e(t,e){for(var i=0;i<t.length;i++){var n=t[i];n[o]=e;}}var i=0,n=1,r=2,o="__connectUpdateStatus";T.each(N,function(a,s){t._messageCenter.on(s,function(a){if(q[t.group]&&t[o]!==i){var s=t.makeActionFromEvent(a),l=[];for(var h in H){var c=H[h];c!==t&&c.group===t.group&&l.push(c);}e(l,i),D(l,function(t){t[o]!==n&&t.dispatchAction(s);}),e(l,r);}});});} /*!
		 * ECharts, a javascript interactive chart library.
		 *
		 * Copyright (c) 2015, Baidu Inc.
		 * All rights reserved.
		 *
		 * LICENSE
		 * https://github.com/ecomfe/echarts/blob/master/LICENSE.txt
		 */var m=i(112),v=i(78),y=i(28),x=i(113),_=i(10),b=i(13),w=i(54),M=i(25),S=i(3),A=i(67),T=i(1),C=i(22),I=i(15),k=i(21),D=T.each,L=["echarts","chart","component"],P=["transform","filter","statistic"];r.prototype.on=n("on"),r.prototype.off=n("off"),r.prototype.one=n("one"),T.mixin(r,k);var O=o.prototype;O.getDom=function(){return this._dom;},O.getZr=function(){return this._zr;},O.setOption=function(t,e,i){this._model&&!e||(this._model=new m(null,null,this._theme,new x(this._api))),this._model.setOption(t,G),z.prepareAndUpdate.call(this),!i&&this._zr.refreshImmediately();},O.setTheme=function(){console.log("ECharts#setTheme() is DEPRECATED in ECharts 3.0");},O.getModel=function(){return this._model;},O.getOption=function(){return this._model.getOption();},O.getWidth=function(){return this._zr.getWidth();},O.getHeight=function(){return this._zr.getHeight();},O.getRenderedCanvas=function(t){if(I.canvasSupported){t=t||{},t.pixelRatio=t.pixelRatio||1,t.backgroundColor=t.backgroundColor||this._model.get("backgroundColor");var e=this._zr,i=e.storage.getDisplayList();return T.each(i,function(t){t.stopAnimation(!0);}),e.painter.getRenderedCanvas(t);}},O.getDataURL=function(t){t=t||{};var e=t.excludeComponents,i=this._model,n=[],r=this;D(e,function(t){i.eachComponent({mainType:t},function(t){var e=r._componentsMap[t.__viewId];e.group.ignore||(n.push(e),e.group.ignore=!0);});});var o=this.getRenderedCanvas(t).toDataURL("image/"+(t&&t.type||"png"));return D(n,function(t){t.group.ignore=!1;}),o;},O.getConnectedDataURL=function(t){if(I.canvasSupported){var e=this.group,i=Math.min,n=Math.max,r=1/0;if(q[e]){var o=r,a=r,s=-r,l=-r,h=[],c=t&&t.pixelRatio||1;for(var u in H){var d=H[u];if(d.group===e){var f=d.getRenderedCanvas(T.clone(t)),p=d.getDom().getBoundingClientRect();o=i(p.left,o),a=i(p.top,a),s=n(p.right,s),l=n(p.bottom,l),h.push({dom:f,left:p.left,top:p.top});}}o*=c,a*=c,s*=c,l*=c;var g=s-o,m=l-a,v=T.createCanvas();v.width=g,v.height=m;var y=A.init(v);return D(h,function(t){var e=new S.Image({style:{x:t.left*c-o,y:t.top*c-a,image:t.dom}});y.add(e);}),y.refreshImmediately(),v.toDataURL("image/"+(t&&t.type||"png"));}return this.getDataURL(t);}};var z={update:function update(t){var e=this._model,i=this._api,n=this._coordSysMgr;if(e){e.restoreData(),n.create(this._model,this._api),h.call(this,e,i),c.call(this,e),n.update(e,i),u.call(this,e,t),d.call(this,e,t),f.call(this,e,t);var r=e.get("backgroundColor")||"transparent",o=this._zr.painter;if(o.isSingleCanvas&&o.isSingleCanvas())this._zr.configLayer(0,{clearColor:r});else {if(!I.canvasSupported){var a=C.parse(r);r=C.stringify(a,"rgb"),0===a[3]&&(r="transparent");}r=r,this._dom.style.backgroundColor=r;}}},updateView:function updateView(t){var e=this._model;e&&(u.call(this,e,t),d.call(this,e,t),s.call(this,"updateView",e,t));},updateVisual:function updateVisual(t){var e=this._model;e&&(d.call(this,e,t),s.call(this,"updateVisual",e,t));},updateLayout:function updateLayout(t){var e=this._model;e&&(u.call(this,e,t),s.call(this,"updateLayout",e,t));},highlight:function highlight(t){a.call(this,"highlight",t);},downplay:function downplay(t){a.call(this,"downplay",t);},prepareAndUpdate:function prepareAndUpdate(t){var e=this._model;l.call(this,"component",e),l.call(this,"chart",e),z.update.call(this,t);}};O.resize=function(){this._zr.resize();var t=this._model&&this._model.resetOption("media");z[t?"prepareAndUpdate":"update"].call(this),this._loadingFX&&this._loadingFX.resize();};var E=i(111);O.showLoading=function(t,e){T.isObject(t)&&(e=t,t="default"),this.hideLoading();var i=E(this._api,e),n=this._zr;this._loadingFX=i,n.add(i);},O.hideLoading=function(){this._loadingFX&&this._zr.remove(this._loadingFX),this._loadingFX=null;},O.makeActionFromEvent=function(t){var e=T.extend({},t);return e.type=N[t.type],e;},O.dispatchAction=function(t,e){var i=B[t.type];if(i){var n=i.actionInfo,r=n.update||"update",o=[t],a=!1;t.batch&&(a=!0,o=T.map(t.batch,function(e){return e=T.defaults(T.extend({},e),t),e.batch=null,e;}));for(var s,l=[],h="highlight"===t.type||"downplay"===t.type,c=0;c<o.length;c++){var u=o[c];s=i.action(u,this._model),s=s||T.extend({},u),s.type=n.event||s.type,l.push(s),h&&z[r].call(this,u);}"none"!==r&&!h&&z[r].call(this,t),e||(s=a?{type:n.event||t.type,batch:l}:l[0],this._messageCenter.trigger(s.type,s));}},O.on=n("on"),O.off=n("off"),O.one=n("one");var R=["click","dblclick","mouseover","mouseout","mousedown","mouseup","globalout"];O._initEvents=function(){var t=this._zr;D(R,function(e){t.on(e,function(t){var i=this.getModel(),n=t.target;if(n&&null!=n.dataIndex){var r=n.dataModel||i.getSeriesByIndex(n.seriesIndex),o=r&&r.getDataParams(n.dataIndex)||{};o.event=t,o.type=e,this.trigger(e,o);}else n&&n.eventData&&this.trigger(e,n.eventData);},this);},this),D(N,function(t,e){this._messageCenter.on(e,function(t){this.trigger(e,t);},this);},this);},O.isDisposed=function(){return this._disposed;},O.clear=function(){this.setOption({},!0);},O.dispose=function(){this._disposed=!0;var t=this._api,e=this._model;D(this._componentsViews,function(i){i.dispose(e,t);}),D(this._chartsViews,function(i){i.dispose(e,t);}),this._zr.dispose(),delete H[this.id];},T.mixin(o,k);var B=[],N={},V=[],F={},G=[],W={},Z={},H={},q={},j=new Date()-0,X=new Date()-0,U="_echarts_instance_",Y={version:"3.1.7",dependencies:{zrender:"3.0.8"}};Y.init=function(t,e,i){if(A.version.replace(".","")-0<Y.dependencies.zrender.replace(".","")-0)throw new Error("ZRender "+A.version+" is too old for ECharts "+Y.version+". Current version need ZRender "+Y.dependencies.zrender+"+");if(!t)throw new Error("Initialize failed: invalid dom.");var n=new o(t,e,i);return n.id="ec_"+j++,H[n.id]=n,t.setAttribute&&t.setAttribute(U,n.id),g(n),n;},Y.connect=function(t){if(T.isArray(t)){var e=t;t=null,T.each(e,function(e){null!=e.group&&(t=e.group);}),t=t||"g_"+X++,T.each(e,function(e){e.group=t;});}return q[t]=!0,t;},Y.disConnect=function(t){q[t]=!1;},Y.dispose=function(t){T.isDom(t)?t=Y.getInstanceByDom(t):"string"==typeof t&&(t=H[t]),t instanceof o&&!t.isDisposed()&&t.dispose();},Y.getInstanceByDom=function(t){var e=t.getAttribute(U);return H[e];},Y.getInstanceById=function(t){return H[t];},Y.registerTheme=function(t,e){Z[t]=e;},Y.registerPreprocessor=function(t){G.push(t);},Y.registerProcessor=function(t,e){if(T.indexOf(P,t)<0)throw new Error("stage should be one of "+P);var i=F[t]||(F[t]=[]);i.push(e);},Y.registerAction=function(t,e,i){"function"==typeof e&&(i=e,e="");var n=T.isObject(t)?t.type:[t,t={event:e}][0];t.event=(t.event||n).toLowerCase(),e=t.event,B[n]||(B[n]={action:i,actionInfo:t}),N[e]=n;},Y.registerCoordinateSystem=function(t,e){y.register(t,e);},Y.registerLayout=function(t){T.indexOf(V,t)<0&&V.push(t);},Y.registerVisualCoding=function(t,e){if(T.indexOf(L,t)<0)throw new Error("stage should be one of "+L);var i=W[t]||(W[t]=[]);i.push(e);},Y.extendChartView=function(t){return M.extend(t);},Y.extendComponentModel=function(t){return _.extend(t);},Y.extendSeriesModel=function(t){return b.extend(t);},Y.extendComponentView=function(t){return w.extend(t);},Y.setCanvasCreator=function(t){T.createCanvas=t;},Y.registerVisualCoding("echarts",T.curry(i(74),"","itemStyle")),Y.registerPreprocessor(i(120)),Y.registerAction({type:"highlight",event:"highlight",update:"highlight"},T.noop),Y.registerAction({type:"downplay",event:"downplay",update:"downplay"},T.noop),Y.graphic=i(3),Y.number=i(4),Y.format=i(9),Y.matrix=i(19),Y.vector=i(5),Y.util={},D(["map","each","filter","indexOf","inherits","reduce","filter","bind","curry","isArray","isString","isObject","isFunction","extend"],function(t){Y.util[t]=T[t];}),t.exports=Y;},function(t,e,i){"use strict";function n(t){if(!t.__isHover){if(t.__hoverStlDirty){var e=t.style.stroke,i=t.style.fill,n=t.__hoverStl,r=v.lift;n.fill=n.fill||i&&(i instanceof _?i:r(i,-.1)),n.stroke=n.stroke||e&&(e instanceof _?e:r(e,-.1));var o={};for(var a in n){n.hasOwnProperty(a)&&(o[a]=t.style[a]);}t.__normalStl=o,t.__hoverStlDirty=!1;}t.setStyle(t.__hoverStl),t.z2+=1,t.__isHover=!0;}}function r(t){if(t.__isHover){var e=t.__normalStl;e&&t.setStyle(e),t.z2-=1,t.__isHover=!1;}}function o(t){"group"===t.type?t.traverse(function(t){"group"!==t.type&&n(t);}):n(t);}function a(t){"group"===t.type?t.traverse(function(t){"group"!==t.type&&r(t);}):r(t);}function s(t,e){t.__hoverStl=t.hoverStyle||e||{},t.__hoverStlDirty=!0;}function l(){!this.__isEmphasis&&o(this);}function h(){!this.__isEmphasis&&a(this);}function c(){this.__isEmphasis=!0,o(this);}function u(){this.__isEmphasis=!1,a(this);}function d(t,e,i,n,r){var o=t?"Update":"",a=n&&n.getShallow("animationDuration"+o),s=n&&n.getShallow("animationEasing"+o);n&&n.getShallow("animation")?e.animateTo(i,a,s,r):(e.attr(i),r&&r());}var f=i(1),p=i(156),g=Math.round,m=i(6),v=i(22),y=i(19),x=i(5),_=i(16),b={};b.Group=i(26),b.Image=i(46),b.Text=i(65),b.Circle=i(147),b.Sector=i(153),b.Ring=i(152),b.Polygon=i(149),b.Polyline=i(150),b.Rect=i(151),b.Line=i(148),b.BezierCurve=i(146),b.Arc=i(145),b.LinearGradient=i(76),b.RadialGradient=i(141),b.BoundingRect=i(8),b.extendShape=function(t){return m.extend(t);},b.extendPath=function(t,e){return p.extendFromString(t,e);},b.makePath=function(t,e,i,n){var r=p.createFromString(t,e),o=r.getBoundingRect();if(i){var a=o.width/o.height;if("center"===n){var s,l=i.height*a;l<=i.width?s=i.height:(l=i.width,s=l/a);var h=i.x+i.width/2,c=i.y+i.height/2;i.x=h-l/2,i.y=c-s/2,i.width=l,i.height=s;}this.resizePath(r,i);}return r;},b.mergePath=p.mergePath,b.resizePath=function(t,e){if(t.applyTransform){var i=t.getBoundingRect(),n=i.calculateTransform(e);t.applyTransform(n);}},b.subPixelOptimizeLine=function(t){var e=b.subPixelOptimize,i=t.shape,n=t.style.lineWidth;return g(2*i.x1)===g(2*i.x2)&&(i.x1=i.x2=e(i.x1,n,!0)),g(2*i.y1)===g(2*i.y2)&&(i.y1=i.y2=e(i.y1,n,!0)),t;},b.subPixelOptimizeRect=function(t){var e=b.subPixelOptimize,i=t.shape,n=t.style.lineWidth,r=i.x,o=i.y,a=i.width,s=i.height;return i.x=e(i.x,n,!0),i.y=e(i.y,n,!0),i.width=Math.max(e(r+a,n,!1)-i.x,0===a?0:1),i.height=Math.max(e(o+s,n,!1)-i.y,0===s?0:1),t;},b.subPixelOptimize=function(t,e,i){var n=g(2*t);return (n+g(e))%2===0?n/2:(n+(i?1:-1))/2;},b.setHoverStyle=function(t,e){"group"===t.type?t.traverse(function(t){"group"!==t.type&&s(t,e);}):s(t,e),t.on("mouseover",l).on("mouseout",h),t.on("emphasis",c).on("normal",u);},b.setText=function(t,e,i){var n=e.getShallow("position")||"inside",r=n.indexOf("inside")>=0?"white":i,o=e.getModel("textStyle");f.extend(t,{textDistance:e.getShallow("distance")||5,textFont:o.getFont(),textPosition:n,textFill:o.getTextColor()||r});},b.updateProps=f.curry(d,!0),b.initProps=f.curry(d,!1),b.getTransform=function(t,e){for(var i=y.identity([]);t&&t!==e;){y.mul(i,t.getLocalTransform(),i),t=t.parent;}return i;},b.applyTransform=function(t,e,i){return i&&(e=y.invert([],e)),x.applyTransform([],t,e);},b.transformDirection=function(t,e,i){var n=0===e[4]||0===e[5]||0===e[0]?1:Math.abs(2*e[4]/e[0]),r=0===e[4]||0===e[5]||0===e[2]?1:Math.abs(2*e[4]/e[2]),o=["left"===t?-n:"right"===t?n:0,"top"===t?-r:"bottom"===t?r:0];return o=b.applyTransform(o,e,i),Math.abs(o[0])>Math.abs(o[1])?o[0]>0?"right":"left":o[1]>0?"bottom":"top";},t.exports=b;},function(t,e){function i(t){return t.replace(/^\s+/,"").replace(/\s+$/,"");}var n={},r=1e-4;n.linearMap=function(t,e,i,n){var r=e[1]-e[0];if(0===r)return (i[0]+i[1])/2;var o=(t-e[0])/r;return n&&(o=Math.min(Math.max(o,0),1)),o*(i[1]-i[0])+i[0];},n.parsePercent=function(t,e){switch(t){case "center":case "middle":t="50%";break;case "left":case "top":t="0%";break;case "right":case "bottom":t="100%";}return "string"==typeof t?i(t).match(/%$/)?parseFloat(t)/100*e:parseFloat(t):null==t?NaN:+t;},n.round=function(t){return +(+t).toFixed(10);},n.asc=function(t){return t.sort(function(t,e){return t-e;}),t;},n.getPrecision=function(t){if(isNaN(t))return 0;for(var e=1,i=0;Math.round(t*e)/e!==t;){e*=10,i++;}return i;},n.getPixelPrecision=function(t,e){var i=Math.log,n=Math.LN10,r=Math.floor(i(t[1]-t[0])/n),o=Math.round(i(Math.abs(e[1]-e[0]))/n);return Math.max(-r+o,0);},n.MAX_SAFE_INTEGER=9007199254740991,n.remRadian=function(t){var e=2*Math.PI;return (t%e+e)%e;},n.isRadianAroundZero=function(t){return t>-r&&r>t;},n.parseDate=function(t){return t instanceof Date?t:new Date("string"==typeof t?t.replace(/-/g,"/"):Math.round(t));},n.nice=function(t,e){var i,n=Math.floor(Math.log(t)/Math.LN10),r=Math.pow(10,n),o=t/r;return i=e?1.5>o?1:2.5>o?2:4>o?3:7>o?5:10:1>o?1:2>o?2:3>o?3:5>o?5:10,i*r;},t.exports=n;},function(t,e){var i="undefined"==typeof Float32Array?Array:Float32Array,n={create:function create(t,e){var n=new i(2);return n[0]=t||0,n[1]=e||0,n;},copy:function copy(t,e){return t[0]=e[0],t[1]=e[1],t;},clone:function clone(t){var e=new i(2);return e[0]=t[0],e[1]=t[1],e;},set:function set(t,e,i){return t[0]=e,t[1]=i,t;},add:function add(t,e,i){return t[0]=e[0]+i[0],t[1]=e[1]+i[1],t;},scaleAndAdd:function scaleAndAdd(t,e,i,n){return t[0]=e[0]+i[0]*n,t[1]=e[1]+i[1]*n,t;},sub:function sub(t,e,i){return t[0]=e[0]-i[0],t[1]=e[1]-i[1],t;},len:function len(t){return Math.sqrt(this.lenSquare(t));},lenSquare:function lenSquare(t){return t[0]*t[0]+t[1]*t[1];},mul:function mul(t,e,i){return t[0]=e[0]*i[0],t[1]=e[1]*i[1],t;},div:function div(t,e,i){return t[0]=e[0]/i[0],t[1]=e[1]/i[1],t;},dot:function dot(t,e){return t[0]*e[0]+t[1]*e[1];},scale:function scale(t,e,i){return t[0]=e[0]*i,t[1]=e[1]*i,t;},normalize:function normalize(t,e){var i=n.len(e);return 0===i?(t[0]=0,t[1]=0):(t[0]=e[0]/i,t[1]=e[1]/i),t;},distance:function distance(t,e){return Math.sqrt((t[0]-e[0])*(t[0]-e[0])+(t[1]-e[1])*(t[1]-e[1]));},distanceSquare:function distanceSquare(t,e){return (t[0]-e[0])*(t[0]-e[0])+(t[1]-e[1])*(t[1]-e[1]);},negate:function negate(t,e){return t[0]=-e[0],t[1]=-e[1],t;},lerp:function lerp(t,e,i,n){return t[0]=e[0]+n*(i[0]-e[0]),t[1]=e[1]+n*(i[1]-e[1]),t;},applyTransform:function applyTransform(t,e,i){var n=e[0],r=e[1];return t[0]=i[0]*n+i[2]*r+i[4],t[1]=i[1]*n+i[3]*r+i[5],t;},min:function min(t,e,i){return t[0]=Math.min(e[0],i[0]),t[1]=Math.min(e[1],i[1]),t;},max:function max(t,e,i){return t[0]=Math.max(e[0],i[0]),t[1]=Math.max(e[1],i[1]),t;}};n.length=n.len,n.lengthSquare=n.lenSquare,n.dist=n.distance,n.distSquare=n.distanceSquare,t.exports=n;},function(t,e,i){function n(t){var e=t.fill;return null!=e&&"none"!==e;}function r(t){var e=t.stroke;return null!=e&&"none"!==e&&t.lineWidth>0;}function o(t){a.call(this,t),this.path=new l();}var a=i(35),s=i(1),l=i(27),h=i(137),c=i(16),u=Math.abs;o.prototype={constructor:o,type:"path",__dirtyPath:!0,strokeContainThreshold:5,brush:function brush(t){t.save();var e=this.style,i=this.path,o=r(e),a=n(e);this.__dirtyPath&&(a&&e.fill instanceof c&&e.fill.updateCanvasGradient(this,t),o&&e.stroke instanceof c&&e.stroke.updateCanvasGradient(this,t)),e.bind(t,this),this.setTransform(t);var s=e.lineDash,l=e.lineDashOffset,h=!!t.setLineDash;this.__dirtyPath||s&&!h&&o?(i=this.path.beginPath(t),s&&!h&&(i.setLineDash(s),i.setLineDashOffset(l)),this.buildPath(i,this.shape),this.__dirtyPath=!1):(t.beginPath(),this.path.rebuildPath(t)),a&&i.fill(t),s&&h&&(t.setLineDash(s),t.lineDashOffset=l),o&&i.stroke(t),null!=e.text&&this.drawRectText(t,this.getBoundingRect()),t.restore();},buildPath:function buildPath(t,e){},getBoundingRect:function getBoundingRect(){var t=this._rect,e=this.style,i=!t;if(i){var o=this.path;this.__dirtyPath&&(o.beginPath(),this.buildPath(o,this.shape)),t=o.getBoundingRect();}if(this._rect=t,r(e)){var a=this._rectWithStroke;if(this.__dirty||i){var a=this._rectWithStroke||(this._rectWithStroke=t.clone());a.copy(t);var s=e.lineWidth,l=e.strokeNoScale?this.getLineScale():1;n(e)||(s=Math.max(s,this.strokeContainThreshold)),l>1e-10&&(a.width+=s/l,a.height+=s/l,a.x-=s/l/2,a.y-=s/l/2);}return a;}return t;},contain:function contain(t,e){var i=this.transformCoordToLocal(t,e),o=this.getBoundingRect(),a=this.style;if(t=i[0],e=i[1],o.contain(t,e)){var s=this.path.data;if(r(a)){var l=a.lineWidth,c=a.strokeNoScale?this.getLineScale():1;if(c>1e-10&&(n(a)||(l=Math.max(l,this.strokeContainThreshold)),h.containStroke(s,l/c,t,e)))return !0;}if(n(a))return h.contain(s,t,e);}return !1;},dirty:function dirty(t){0===arguments.length&&(t=!0),t&&(this.__dirtyPath=t,this._rect=null),this.__dirty=!0,this.__zr&&this.__zr.refresh(),this.__clipTarget&&this.__clipTarget.dirty();},animateShape:function animateShape(t){return this.animate("shape",t);},attrKV:function attrKV(t,e){"shape"===t?this.setShape(e):a.prototype.attrKV.call(this,t,e);},setShape:function setShape(t,e){var i=this.shape;if(i){if(s.isObject(t))for(var n in t){i[n]=t[n];}else i[t]=e;this.dirty(!0);}return this;},getLineScale:function getLineScale(){var t=this.transform;return t&&u(t[0]-1)>1e-10&&u(t[3]-1)>1e-10?Math.sqrt(u(t[0]*t[3]-t[2]*t[1])):1;}},o.extend=function(t){var e=function e(_e){o.call(this,_e),t.style&&this.style.extendFrom(t.style,!1);var i=t.shape;if(i){this.shape=this.shape||{};var n=this.shape;for(var r in i){!n.hasOwnProperty(r)&&i.hasOwnProperty(r)&&(n[r]=i[r]);}}t.init&&t.init.call(this,_e);};s.inherits(e,o);for(var i in t){"style"!==i&&"shape"!==i&&(e.prototype[i]=t[i]);}return e;},s.inherits(o,a),t.exports=o;},function(t,e,i){var n=i(9),r=i(4),o=i(1),a=i(12),s=["x","y","z","radius","angle"],l={};l.createNameEach=function(t,e){t=t.slice();var i=o.map(t,l.capitalFirst);e=(e||[]).slice();var n=o.map(e,l.capitalFirst);return function(r,a){o.each(t,function(t,o){for(var s={name:t,capital:i[o]},l=0;l<e.length;l++){s[e[l]]=t+n[l];}r.call(a,s);});};},l.capitalFirst=function(t){return t?t.charAt(0).toUpperCase()+t.substr(1):t;},l.eachAxisDim=l.createNameEach(s,["axisIndex","axis","index"]),l.normalizeToArray=function(t){return o.isArray(t)?t:null==t?[]:[t];},l.createLinkedNodesFinder=function(t,e,i){function n(t,e){return o.indexOf(e.nodes,t)>=0;}function r(t,n){var r=!1;return e(function(e){o.each(i(t,e)||[],function(t){n.records[e.name][t]&&(r=!0);});}),r;}function a(t,n){n.nodes.push(t),e(function(e){o.each(i(t,e)||[],function(t){n.records[e.name][t]=!0;});});}return function(i){function o(t){!n(t,s)&&r(t,s)&&(a(t,s),l=!0);}var s={nodes:[],records:{}};if(e(function(t){s.records[t.name]={};}),!i)return s;a(i,s);var l;do {l=!1,t(o);}while(l);return s;};},l.defaultEmphasis=function(t,e){if(t){var i=t.emphasis=t.emphasis||{},n=t.normal=t.normal||{};o.each(e,function(t){var e=o.retrieve(i[t],n[t]);null!=e&&(i[t]=e);});}},l.createDataFormatModel=function(t,e,i){var n=new a();return o.mixin(n,l.dataFormatMixin),n.seriesIndex=t.seriesIndex,n.name=t.name||"",n.getData=function(){return e;},n.getRawDataArray=function(){return i;},n;},l.getDataItemValue=function(t){return t&&(null==t.value?t:t.value);},l.converDataValue=function(t,e){var i=e&&e.type;return "ordinal"===i?t:("time"!==i||isFinite(t)||null==t||"-"===t||(t=+r.parseDate(t)),null==t||""===t?NaN:+t);},l.dataFormatMixin={getDataParams:function getDataParams(t){var e=this.getData(),i=this.seriesIndex,n=this.name,r=this.getRawValue(t),o=e.getRawIndex(t),a=e.getName(t,!0),s=this.getRawDataArray(),l=s&&s[o];return {componentType:"series",seriesType:this.subType,seriesIndex:i,seriesName:n,name:a,dataIndex:o,data:l,value:r,color:e.getItemVisual(t,"color"),$vars:["seriesName","name","value"]};},getFormattedLabel:function getFormattedLabel(t,e,i){e=e||"normal";var r=this.getData(),o=r.getItemModel(t),a=this.getDataParams(t);return null==i&&(i=o.get(["label",e,"formatter"])),"function"==typeof i?(a.status=e,i(a)):"string"==typeof i?n.formatTpl(i,a):void 0;},getRawValue:function getRawValue(t){var e=this.getData().getItemModel(t);if(e&&null!=e.option){var i=e.option;return o.isObject(i)&&!o.isArray(i)?i.value:i;}}},l.mappingToExists=function(t,e){e=(e||[]).slice();var i=o.map(t||[],function(t,e){return {exist:t};});return o.each(e,function(t,n){if(o.isObject(t))for(var r=0;r<i.length;r++){var a=i[r].exist;if(!i[r].option&&(null!=t.id&&a.id===t.id+""||null!=t.name&&!l.isIdInner(t)&&!l.isIdInner(a)&&a.name===t.name+"")){i[r].option=t,e[n]=null;break;}}}),o.each(e,function(t,e){if(o.isObject(t)){for(var n=0;n<i.length;n++){var r=i[n].exist;if(!i[n].option&&!l.isIdInner(r)&&null==t.id){i[n].option=t;break;}}n>=i.length&&i.push({option:t});}}),i;},l.isIdInner=function(t){return o.isObject(t)&&t.id&&0===(t.id+"").indexOf("\x00_ec_\x00");},t.exports=l;},function(t,e,i){"use strict";function n(t,e,i,n){this.x=t,this.y=e,this.width=i,this.height=n;}var r=i(5),o=i(19),a=r.applyTransform,s=Math.min,l=Math.abs,h=Math.max;n.prototype={constructor:n,union:function union(t){var e=s(t.x,this.x),i=s(t.y,this.y);this.width=h(t.x+t.width,this.x+this.width)-e,this.height=h(t.y+t.height,this.y+this.height)-i,this.x=e,this.y=i;},applyTransform:function(){var t=[],e=[];return function(i){i&&(t[0]=this.x,t[1]=this.y,e[0]=this.x+this.width,e[1]=this.y+this.height,a(t,t,i),a(e,e,i),this.x=s(t[0],e[0]),this.y=s(t[1],e[1]),this.width=l(e[0]-t[0]),this.height=l(e[1]-t[1]));};}(),calculateTransform:function calculateTransform(t){var e=this,i=t.width/e.width,n=t.height/e.height,r=o.create();return o.translate(r,r,[-e.x,-e.y]),o.scale(r,r,[i,n]),o.translate(r,r,[t.x,t.y]),r;},intersect:function intersect(t){var e=this,i=e.x,n=e.x+e.width,r=e.y,o=e.y+e.height,a=t.x,s=t.x+t.width,l=t.y,h=t.y+t.height;return !(a>n||i>s||l>o||r>h);},contain:function contain(t,e){var i=this;return t>=i.x&&t<=i.x+i.width&&e>=i.y&&e<=i.y+i.height;},clone:function clone(){return new n(this.x,this.y,this.width,this.height);},copy:function copy(t){this.x=t.x,this.y=t.y,this.width=t.width,this.height=t.height;}},t.exports=n;},function(t,e,i){function n(t){return isNaN(t)?"-":(t=(t+"").split("."),t[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g,"$1,")+(t.length>1?"."+t[1]:""));}function r(t){return t.toLowerCase().replace(/-(.)/g,function(t,e){return e.toUpperCase();});}function o(t){var e=t.length;return "number"==typeof t?[t,t,t,t]:2===e?[t[0],t[1],t[0],t[1]]:3===e?[t[0],t[1],t[2],t[1]]:t;}function a(t){return String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;");}function s(t,e){return "{"+t+(null==e?"":e)+"}";}function l(t,e){u.isArray(e)||(e=[e]);var i=e.length;if(!i)return "";for(var n=e[0].$vars,r=0;r<n.length;r++){var o=f[r];t=t.replace(s(o),s(o,0));}for(var a=0;i>a;a++){for(var l=0;l<n.length;l++){t=t.replace(s(f[l],a),e[a][n[l]]);}}return t;}function h(t,e){"week"!==t&&"month"!==t&&"quarter"!==t&&"half-year"!==t&&"year"!==t||(t="MM-dd\nyyyy");var i=d.parseDate(e),n=i.getFullYear(),r=i.getMonth()+1,o=i.getDate(),a=i.getHours(),s=i.getMinutes(),l=i.getSeconds();return t=t.replace("MM",c(r)).toLowerCase().replace("yyyy",n).replace("yy",n%100).replace("dd",c(o)).replace("d",o).replace("hh",c(a)).replace("h",a).replace("mm",c(s)).replace("m",s).replace("ss",c(l)).replace("s",l);}function c(t){return 10>t?"0"+t:t;}var u=i(1),d=i(4),f=["a","b","c","d","e","f","g"];t.exports={normalizeCssArray:o,addCommas:n,toCamelCase:r,encodeHTML:a,formatTpl:l,formatTime:h};},function(t,e,i){function n(t){var e=[];return o.each(c.getClassesByMainType(t),function(t){a.apply(e,t.prototype.dependencies||[]);}),o.map(e,function(t){return l.parseClassType(t).main;});}var r=i(12),o=i(1),a=Array.prototype.push,s=i(41),l=i(20),h=i(11),c=r.extend({type:"component",id:"",name:"",mainType:"",subType:"",componentIndex:0,defaultOption:null,ecModel:null,dependentModels:[],uid:null,layoutMode:null,init:function init(t,e,i,n){this.mergeDefaultAndTheme(this.option,this.ecModel);},mergeDefaultAndTheme:function mergeDefaultAndTheme(t,e){var i=this.layoutMode,n=i?h.getLayoutParams(t):{},r=e.getTheme();o.merge(t,r.get(this.mainType)),o.merge(t,this.getDefaultOption()),i&&h.mergeLayoutParam(t,n,i);},mergeOption:function mergeOption(t){o.merge(this.option,t,!0);var e=this.layoutMode;e&&h.mergeLayoutParam(this.option,t,e);},optionUpdated:function optionUpdated(t){},getDefaultOption:function getDefaultOption(){if(!this.hasOwnProperty("__defaultOption")){for(var t=[],e=this.constructor;e;){var i=e.prototype.defaultOption;i&&t.push(i),e=e.superClass;}for(var n={},r=t.length-1;r>=0;r--){n=o.merge(n,t[r],!0);}this.__defaultOption=n;}return this.__defaultOption;}});l.enableClassExtend(c,function(t,e,i,n){o.extend(this,n),this.uid=s.getUID("componentModel");}),l.enableClassManagement(c,{registerWhenExtend:!0}),s.enableSubTypeDefaulter(c),s.enableTopologicalTravel(c,n),o.mixin(c,i(116)),t.exports=c;},function(t,e,i){"use strict";function n(t,e,i,n,r){var o=0,a=0;null==n&&(n=1/0),null==r&&(r=1/0);var s=0;e.eachChild(function(l,h){var c,u,d=l.position,f=l.getBoundingRect(),p=e.childAt(h+1),g=p&&p.getBoundingRect();if("horizontal"===t){var m=f.width+(g?-g.x+f.x:0);c=o+m,c>n||l.newline?(o=0,c=m,a+=s+i,s=f.height):s=Math.max(s,f.height);}else {var v=f.height+(g?-g.y+f.y:0);u=a+v,u>r||l.newline?(o+=s+i,a=0,u=v,s=f.width):s=Math.max(s,f.width);}l.newline||(d[0]=o,d[1]=a,"horizontal"===t?o=c+i:a=u+i);});}var r=i(1),o=i(8),a=i(4),s=i(9),l=a.parsePercent,h=r.each,c={},u=["left","right","top","bottom","width","height"];c.box=n,c.vbox=r.curry(n,"vertical"),c.hbox=r.curry(n,"horizontal"),c.getAvailableSize=function(t,e,i){var n=e.width,r=e.height,o=l(t.x,n),a=l(t.y,r),h=l(t.x2,n),c=l(t.y2,r);return (isNaN(o)||isNaN(parseFloat(t.x)))&&(o=0),(isNaN(h)||isNaN(parseFloat(t.x2)))&&(h=n),(isNaN(a)||isNaN(parseFloat(t.y)))&&(a=0),(isNaN(c)||isNaN(parseFloat(t.y2)))&&(c=r),i=s.normalizeCssArray(i||0),{width:Math.max(h-o-i[1]-i[3],0),height:Math.max(c-a-i[0]-i[2],0)};},c.getLayoutRect=function(t,e,i){i=s.normalizeCssArray(i||0);var n=e.width,r=e.height,a=l(t.left,n),h=l(t.top,r),c=l(t.right,n),u=l(t.bottom,r),d=l(t.width,n),f=l(t.height,r),p=i[2]+i[0],g=i[1]+i[3],m=t.aspect;switch(isNaN(d)&&(d=n-c-g-a),isNaN(f)&&(f=r-u-p-h),isNaN(d)&&isNaN(f)&&(m>n/r?d=.8*n:f=.8*r),null!=m&&(isNaN(d)&&(d=m*f),isNaN(f)&&(f=d/m)),isNaN(a)&&(a=n-c-d-g),isNaN(h)&&(h=r-u-f-p),t.left||t.right){case "center":a=n/2-d/2-i[3];break;case "right":a=n-d-g;}switch(t.top||t.bottom){case "middle":case "center":h=r/2-f/2-i[0];break;case "bottom":h=r-f-p;}a=a||0,h=h||0,isNaN(d)&&(d=n-a-(c||0)),isNaN(f)&&(f=r-h-(u||0));var v=new o(a+i[3],h+i[0],d,f);return v.margin=i,v;},c.positionGroup=function(t,e,i,n){var o=t.getBoundingRect();e=r.extend(r.clone(e),{width:o.width,height:o.height}),e=c.getLayoutRect(e,i,n),t.position=[e.x-o.x,e.y-o.y];},c.mergeLayoutParam=function(t,e,i){function n(n){var r={},s=0,l={},c=0,u=i.ignoreSize?1:2;if(h(n,function(e){l[e]=t[e];}),h(n,function(t){o(e,t)&&(r[t]=l[t]=e[t]),a(r,t)&&s++,a(l,t)&&c++;}),c!==u&&s){if(s>=u)return r;for(var d=0;d<n.length;d++){var f=n[d];if(!o(r,f)&&o(t,f)){r[f]=t[f];break;}}return r;}return l;}function o(t,e){return t.hasOwnProperty(e);}function a(t,e){return null!=t[e]&&"auto"!==t[e];}function s(t,e,i){h(t,function(t){e[t]=i[t];});}!r.isObject(i)&&(i={});var l=["width","left","right"],c=["height","top","bottom"],u=n(l),d=n(c);s(l,t,u),s(c,t,d);},c.getLayoutParams=function(t){return c.copyLayoutParams({},t);},c.copyLayoutParams=function(t,e){return e&&t&&h(u,function(i){e.hasOwnProperty(i)&&(t[i]=e[i]);}),t;},t.exports=c;},function(t,e,i){function n(t,e,i,n){this.parentModel=e,this.ecModel=i,this.option=t,this.init&&(arguments.length<=4?this.init(t,e,i,n):this.init.apply(this,arguments));}var r=i(1),o=i(20);n.prototype={constructor:n,init:null,mergeOption:function mergeOption(t){r.merge(this.option,t,!0);},get:function get(t,e){if(!t)return this.option;"string"==typeof t&&(t=t.split("."));for(var i=this.option,n=this.parentModel,r=0;r<t.length&&(i=i&&"object"==(typeof i==="undefined"?"undefined":(0,_typeof3.default)(i))?i[t[r]]:null,null!=i);r++){}return null==i&&n&&!e&&(i=n.get(t)),i;},getShallow:function getShallow(t,e){var i=this.option,n=i&&i[t],r=this.parentModel;return null==n&&r&&!e&&(n=r.getShallow(t)),n;},getModel:function getModel(t,e){var i=this.get(t,!0),r=this.parentModel,o=new n(i,e||r&&r.getModel(t),this.ecModel);return o;},isEmpty:function isEmpty(){return null==this.option;},restoreData:function restoreData(){},clone:function clone(){var t=this.constructor;return new t(r.clone(this.option));},setReadOnly:function setReadOnly(t){o.setReadOnly(this,t);}},o.enableClassExtend(n);var a=r.mixin;a(n,i(118)),a(n,i(115)),a(n,i(119)),a(n,i(117)),t.exports=n;},function(t,e,i){"use strict";var n=i(1),r=i(9),o=i(7),a=i(10),s=r.encodeHTML,l=r.addCommas,h=a.extend({type:"series.__base__",seriesIndex:0,coordinateSystem:null,defaultOption:null,legendDataProvider:null,init:function init(t,e,i,n){this.seriesIndex=this.componentIndex,this.mergeDefaultAndTheme(t,i),this._dataBeforeProcessed=this.getInitialData(t,i),this._data=this._dataBeforeProcessed.cloneShallow();},mergeDefaultAndTheme:function mergeDefaultAndTheme(t,e){n.merge(t,e.getTheme().get(this.subType)),n.merge(t,this.getDefaultOption()),o.defaultEmphasis(t.label,["position","show","textStyle","distance","formatter"]);for(var i=t.data||[],r=0;r<i.length;r++){i[r]&&i[r].label&&o.defaultEmphasis(i[r].label,["position","show","textStyle","distance","formatter"]);}},mergeOption:function mergeOption(t,e){t=n.merge(this.option,t,!0);var i=this.getInitialData(t,e);i&&(this._data=i,this._dataBeforeProcessed=i.cloneShallow());},getInitialData:function getInitialData(){},getData:function getData(){return this._data;},setData:function setData(t){this._data=t;},getRawData:function getRawData(){return this._dataBeforeProcessed;},getRawDataArray:function getRawDataArray(){return this.option.data;},coordDimToDataDim:function coordDimToDataDim(t){return [t];},dataDimToCoordDim:function dataDimToCoordDim(t){return t;},getBaseAxis:function getBaseAxis(){var t=this.coordinateSystem;return t&&t.getBaseAxis&&t.getBaseAxis();},formatTooltip:function formatTooltip(t,e){var i=this._data,r=this.getRawValue(t),o=n.isArray(r)?n.map(r,l).join(", "):l(r),a=i.getName(t),h=i.getItemVisual(t,"color"),c='<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:'+h+'"></span>';return e?c+s(this.name)+" : "+o:s(this.name)+"<br />"+c+(a?s(a)+" : "+o:o);},restoreData:function restoreData(){this._data=this._dataBeforeProcessed.cloneShallow();}});n.mixin(h,o.dataFormatMixin),t.exports=h;},function(t,e,i){(function(e){function n(t){return d.isArray(t)||(t=[t]),t;}function r(t,e){var i=t.dimensions,n=new v(d.map(i,t.getDimensionInfo,t),t.hostModel);m(n,t,t._wrappedMethods);for(var r=n._storage={},o=t._storage,a=0;a<i.length;a++){var s=i[a],l=o[s];d.indexOf(e,s)>=0?r[s]=new l.constructor(o[s].length):r[s]=o[s];}return n;}var o="undefined",a="undefined"==typeof window?e:window,s=(0,_typeof3.default)(a.Float64Array)===o?Array:a.Float64Array,l=(0,_typeof3.default)(a.Int32Array)===o?Array:a.Int32Array,h={"float":s,"int":l,ordinal:Array,number:Array,time:Array},c=i(12),u=i(52),d=i(1),f=i(7),p=d.isObject,g=["stackedOn","_nameList","_idList","_rawData"],m=function m(t,e,i){d.each(g.concat(i||[]),function(i){e.hasOwnProperty(i)&&(t[i]=e[i]);});},v=function v(t,e){t=t||["x","y"];for(var i={},n=[],r=0;r<t.length;r++){var o,a={};"string"==typeof t[r]?(o=t[r],a={name:o,stackable:!1,type:"number"}):(a=t[r],o=a.name,a.type=a.type||"number"),n.push(o),i[o]=a;}this.dimensions=n,this._dimensionInfos=i,this.hostModel=e,this.indices=[],this._storage={},this._nameList=[],this._idList=[],this._optionModels=[],this.stackedOn=null,this._visual={},this._layout={},this._itemVisuals=[],this._itemLayouts=[],this._graphicEls=[],this._rawData,this._extent;},y=v.prototype;y.type="list",y.getDimension=function(t){return isNaN(t)||(t=this.dimensions[t]||t),t;},y.getDimensionInfo=function(t){return d.clone(this._dimensionInfos[this.getDimension(t)]);},y.initData=function(t,e,i){t=t||[],this._rawData=t;var n=this._storage={},r=this.indices=[],o=this.dimensions,a=t.length,s=this._dimensionInfos,l=[],c={};e=e||[];for(var u=0;u<o.length;u++){var p=s[o[u]],g=h[p.type];n[o[u]]=new g(a);}i=i||function(t,e,i,n){var r=f.getDataItemValue(t);return f.converDataValue(d.isArray(r)?r[n]:r,s[e]);};for(var m=0;m<t.length;m++){for(var v=t[m],y=0;y<o.length;y++){var x=o[y],_=n[x];_[m]=i(v,x,m,y);}r.push(m);}for(var u=0;u<t.length;u++){var b="";e[u]||(e[u]=t[u].name,b=t[u].id);var w=e[u]||"";!b&&w&&(c[w]=c[w]||0,b=w,c[w]>0&&(b+="__ec__"+c[w]),c[w]++),b&&(l[u]=b);}this._nameList=e,this._idList=l;},y.count=function(){return this.indices.length;},y.get=function(t,e,i){var n=this._storage,r=this.indices[e];if(null==r)return NaN;var o=n[t]&&n[t][r];if(i){var a=this._dimensionInfos[t];if(a&&a.stackable)for(var s=this.stackedOn;s;){var l=s.get(t,e);(o>=0&&l>0||0>=o&&0>l)&&(o+=l),s=s.stackedOn;}}return o;},y.getValues=function(t,e,i){var n=[];d.isArray(t)||(i=e,e=t,t=this.dimensions);for(var r=0,o=t.length;o>r;r++){n.push(this.get(t[r],e,i));}return n;},y.hasValue=function(t){for(var e=this.dimensions,i=this._dimensionInfos,n=0,r=e.length;r>n;n++){if("ordinal"!==i[e[n]].type&&isNaN(this.get(e[n],t)))return !1;}return !0;},y.getDataExtent=function(t,e){var i=this._storage[t],n=this.getDimensionInfo(t);e=n&&n.stackable&&e;var r,o=(this._extent||(this._extent={}))[t+!!e];if(o)return o;if(i){for(var a=1/0,s=-(1/0),l=0,h=this.count();h>l;l++){r=this.get(t,l,e),a>r&&(a=r),r>s&&(s=r);}return this._extent[t+e]=[a,s];}return [1/0,-(1/0)];},y.getSum=function(t,e){var i=this._storage[t],n=0;if(i)for(var r=0,o=this.count();o>r;r++){var a=this.get(t,r,e);isNaN(a)||(n+=a);}return n;},y.indexOf=function(t,e){var i=this._storage,n=i[t],r=this.indices;if(n)for(var o=0,a=r.length;a>o;o++){var s=r[o];if(n[s]===e)return o;}return -1;},y.indexOfName=function(t){for(var e=this.indices,i=this._nameList,n=0,r=e.length;r>n;n++){var o=e[n];if(i[o]===t)return n;}return -1;},y.indexOfNearest=function(t,e,i){var n=this._storage,r=n[t];if(r){for(var o=Number.MAX_VALUE,a=-1,s=0,l=this.count();l>s;s++){var h=e-this.get(t,s,i),c=Math.abs(h);(o>c||c===o&&h>0)&&(o=c,a=s);}return a;}return -1;},y.getRawIndex=function(t){var e=this.indices[t];return null==e?-1:e;},y.getName=function(t){return this._nameList[this.indices[t]]||"";},y.getId=function(t){return this._idList[this.indices[t]]||this.getRawIndex(t)+"";},y.each=function(t,e,i,r){"function"==typeof t&&(r=i,i=e,e=t,t=[]),t=d.map(n(t),this.getDimension,this);var o=[],a=t.length,s=this.indices;r=r||this;for(var l=0;l<s.length;l++){if(0===a)e.call(r,l);else if(1===a)e.call(r,this.get(t[0],l,i),l);else {for(var h=0;a>h;h++){o[h]=this.get(t[h],l,i);}o[h]=l,e.apply(r,o);}}},y.filterSelf=function(t,e,i,r){"function"==typeof t&&(r=i,i=e,e=t,t=[]),t=d.map(n(t),this.getDimension,this);var o=[],a=[],s=t.length,l=this.indices;r=r||this;for(var h=0;h<l.length;h++){var c;if(1===s)c=e.call(r,this.get(t[0],h,i),h);else {for(var u=0;s>u;u++){a[u]=this.get(t[u],h,i);}a[u]=h,c=e.apply(r,a);}c&&o.push(l[h]);}return this.indices=o,this._extent={},this;},y.mapArray=function(t,e,i,n){"function"==typeof t&&(n=i,i=e,e=t,t=[]);var r=[];return this.each(t,function(){r.push(e&&e.apply(this,arguments));},i,n),r;},y.map=function(t,e,i,o){t=d.map(n(t),this.getDimension,this);var a=r(this,t),s=a.indices=this.indices,l=a._storage,h=[];return this.each(t,function(){var i=arguments[arguments.length-1],n=e&&e.apply(this,arguments);if(null!=n){"number"==typeof n&&(h[0]=n,n=h);for(var r=0;r<n.length;r++){var o=t[r],a=l[o],c=s[i];a&&(a[c]=n[r]);}}},i,o),a;},y.downSample=function(t,e,i,n){for(var o=r(this,[t]),a=this._storage,s=o._storage,l=this.indices,h=o.indices=[],c=[],u=[],d=Math.floor(1/e),f=s[t],p=this.count(),g=0;g<a[t].length;g++){s[t][g]=a[t][g];}for(var g=0;p>g;g+=d){d>p-g&&(d=p-g,c.length=d);for(var m=0;d>m;m++){var v=l[g+m];c[m]=f[v],u[m]=v;}var y=i(c),v=u[n(c,y)||0];f[v]=y,h.push(v);}return o;},y.getItemModel=function(t){var e=this.hostModel;return t=this.indices[t],new c(this._rawData[t],e,e.ecModel);},y.diff=function(t){var e=this._idList,i=t&&t._idList;return new u(t?t.indices:[],this.indices,function(t){return i[t]||t+"";},function(t){return e[t]||t+"";});},y.getVisual=function(t){var e=this._visual;return e&&e[t];},y.setVisual=function(t,e){if(p(t))for(var i in t){t.hasOwnProperty(i)&&this.setVisual(i,t[i]);}else this._visual=this._visual||{},this._visual[t]=e;},y.setLayout=function(t,e){if(p(t))for(var i in t){t.hasOwnProperty(i)&&this.setLayout(i,t[i]);}else this._layout[t]=e;},y.getLayout=function(t){return this._layout[t];},y.getItemLayout=function(t){return this._itemLayouts[t];},y.setItemLayout=function(t,e,i){this._itemLayouts[t]=i?d.extend(this._itemLayouts[t]||{},e):e;},y.getItemVisual=function(t,e,i){var n=this._itemVisuals[t],r=n&&n[e];return null!=r||i?r:this.getVisual(e);},y.setItemVisual=function(t,e,i){var n=this._itemVisuals[t]||{};if(this._itemVisuals[t]=n,p(e))for(var r in e){e.hasOwnProperty(r)&&(n[r]=e[r]);}else n[e]=i;};var x=function x(t){t.seriesIndex=this.seriesIndex,t.dataIndex=this.dataIndex;};y.setItemGraphicEl=function(t,e){var i=this.hostModel;e&&(e.dataIndex=t,e.seriesIndex=i&&i.seriesIndex,"group"===e.type&&e.traverse(x,e)),this._graphicEls[t]=e;},y.getItemGraphicEl=function(t){return this._graphicEls[t];},y.eachItemGraphicEl=function(t,e){d.each(this._graphicEls,function(i,n){i&&t&&t.call(e,i,n);});},y.cloneShallow=function(){var t=d.map(this.dimensions,this.getDimensionInfo,this),e=new v(t,this.hostModel);return e._storage=this._storage,m(e,this,this._wrappedMethods),e.indices=this.indices.slice(),e;},y.wrapMethod=function(t,e){var i=this[t];"function"==typeof i&&(this._wrappedMethods=this._wrappedMethods||[],this._wrappedMethods.push(t),this[t]=function(){var t=i.apply(this,arguments);return e.call(this,t);});},t.exports=v;}).call(e,function(){return this;}());},function(t,e){function i(t){var e={},i={},n=t.match(/Web[kK]it[\/]{0,1}([\d.]+)/),r=t.match(/(Android);?[\s\/]+([\d.]+)?/),o=t.match(/(iPad).*OS\s([\d_]+)/),a=t.match(/(iPod)(.*OS\s([\d_]+))?/),s=!o&&t.match(/(iPhone\sOS)\s([\d_]+)/),l=t.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),h=l&&t.match(/TouchPad/),c=t.match(/Kindle\/([\d.]+)/),u=t.match(/Silk\/([\d._]+)/),d=t.match(/(BlackBerry).*Version\/([\d.]+)/),f=t.match(/(BB10).*Version\/([\d.]+)/),p=t.match(/(RIM\sTablet\sOS)\s([\d.]+)/),g=t.match(/PlayBook/),m=t.match(/Chrome\/([\d.]+)/)||t.match(/CriOS\/([\d.]+)/),v=t.match(/Firefox\/([\d.]+)/),y=n&&t.match(/Mobile\//)&&!m,x=t.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/)&&!m,_=t.match(/MSIE\s([\d.]+)/)||t.match(/Trident\/.+?rv:(([\d.]+))/),b=t.match(/Edge\/([\d.]+)/);return (i.webkit=!!n)&&(i.version=n[1]),r&&(e.android=!0,e.version=r[2]),s&&!a&&(e.ios=e.iphone=!0,e.version=s[2].replace(/_/g,".")),o&&(e.ios=e.ipad=!0,e.version=o[2].replace(/_/g,".")),a&&(e.ios=e.ipod=!0,e.version=a[3]?a[3].replace(/_/g,"."):null),l&&(e.webos=!0,e.version=l[2]),h&&(e.touchpad=!0),d&&(e.blackberry=!0,e.version=d[2]),f&&(e.bb10=!0,e.version=f[2]),p&&(e.rimtabletos=!0,e.version=p[2]),g&&(i.playbook=!0),c&&(e.kindle=!0,e.version=c[1]),u&&(i.silk=!0,i.version=u[1]),!u&&e.android&&t.match(/Kindle Fire/)&&(i.silk=!0),m&&(i.chrome=!0,i.version=m[1]),v&&(i.firefox=!0,i.version=v[1]),_&&(i.ie=!0,i.version=_[1]),y&&(t.match(/Safari/)||e.ios)&&(i.safari=!0),x&&(i.webview=!0),_&&(i.ie=!0,i.version=_[1]),b&&(i.edge=!0,i.version=b[1]),e.tablet=!!(o||g||r&&!t.match(/Mobile/)||v&&t.match(/Tablet/)||_&&!t.match(/Phone/)&&t.match(/Touch/)),e.phone=!(e.tablet||e.ipod||!(r||s||l||d||f||m&&t.match(/Android/)||m&&t.match(/CriOS\/([\d.]+)/)||v&&t.match(/Mobile/)||_&&t.match(/Touch/))),{browser:i,os:e,node:!1,canvasSupported:!!document.createElement("canvas").getContext,touchEventsSupported:"ontouchstart" in window&&!i.ie&&!i.edge,pointerEventsSupported:"onpointerdown" in window&&(i.edge||i.ie&&i.version>=10)};}var n={};n="undefined"==typeof navigator?{browser:{},os:{},node:!0,canvasSupported:!0}:i(navigator.userAgent),t.exports=n;},function(t,e){var i=function i(t){this.colorStops=t||[];};i.prototype={constructor:i,addColorStop:function addColorStop(t,e){this.colorStops.push({offset:t,color:e});}},t.exports=i;},function(t,e,i){function n(t,e){var i=t+":"+e;if(h[i])return h[i];for(var n=(t+"").split("\n"),r=0,o=0,a=n.length;a>o;o++){r=Math.max(p.measureText(n[o],e).width,r);}return c>u&&(c=0,h={}),c++,h[i]=r,r;}function r(t,e,i,r){var o=((t||"")+"").split("\n").length,a=n(t,e),s=n("国",e),l=o*s,h=new f(0,0,a,l);switch(h.lineHeight=s,r){case "bottom":case "alphabetic":h.y-=s;break;case "middle":h.y-=s/2;}switch(i){case "end":case "right":h.x-=h.width;break;case "center":h.x-=h.width/2;}return h;}function o(t,e,i,n){var r=e.x,o=e.y,a=e.height,s=e.width,l=i.height,h=a/2-l/2,c="left";switch(t){case "left":r-=n,o+=h,c="right";break;case "right":r+=n+s,o+=h,c="left";break;case "top":r+=s/2,o-=n+l,c="center";break;case "bottom":r+=s/2,o+=a+n,c="center";break;case "inside":r+=s/2,o+=h,c="center";break;case "insideLeft":r+=n,o+=h,c="left";break;case "insideRight":r+=s-n,o+=h,c="right";break;case "insideTop":r+=s/2,o+=n,c="center";break;case "insideBottom":r+=s/2,o+=a-l-n,c="center";break;case "insideTopLeft":r+=n,o+=n,c="left";break;case "insideTopRight":r+=s-n,o+=n,c="right";break;case "insideBottomLeft":r+=n,o+=a-l-n;break;case "insideBottomRight":r+=s-n,o+=a-l-n,c="right";}return {x:r,y:o,textAlign:c,textBaseline:"top"};}function a(t,e,i,r){if(!i)return "";r=d.defaults({ellipsis:"...",minCharacters:3,maxIterations:3,cnCharWidth:n("国",e),ascCharWidth:n("a",e)},r,!0),i-=n(r.ellipsis);for(var o=(t+"").split("\n"),a=0,l=o.length;l>a;a++){o[a]=s(o[a],e,i,r);}return o.join("\n");}function s(t,e,i,r){for(var o=0;;o++){var a=n(t,e);if(i>a||o>=r.maxIterations){t+=r.ellipsis;break;}var s=0===o?l(t,i,r):Math.floor(t.length*i/a);if(s<r.minCharacters){t="";break;}t=t.substr(0,s);}return t;}function l(t,e,i){for(var n=0,r=0,o=t.length;o>r&&e>n;r++){var a=t.charCodeAt(r);n+=a>=0&&127>=a?i.ascCharWidth:i.cnCharWidth;}return r;}var h={},c=0,u=5e3,d=i(1),f=i(8),p={getWidth:n,getBoundingRect:r,adjustTextPositionOnRect:o,ellipsis:a,measureText:function measureText(t,e){var i=d.getContext();return i.font=e,i.measureText(t);}};t.exports=p;},function(t,e,i){"use strict";function n(t){return t>-w&&w>t;}function r(t){return t>w||-w>t;}function o(t,e,i,n,r){var o=1-r;return o*o*(o*t+3*r*e)+r*r*(r*n+3*o*i);}function a(t,e,i,n,r){var o=1-r;return 3*(((e-t)*o+2*(i-e)*r)*o+(n-i)*r*r);}function s(t,e,i,r,o,a){var s=r+3*(e-i)-t,l=3*(i-2*e+t),h=3*(e-t),c=t-o,u=l*l-3*s*h,d=l*h-9*s*c,f=h*h-3*l*c,p=0;if(n(u)&&n(d)){if(n(l))a[0]=0;else {var g=-h/l;g>=0&&1>=g&&(a[p++]=g);}}else {var m=d*d-4*u*f;if(n(m)){var v=d/u,g=-l/s+v,y=-v/2;g>=0&&1>=g&&(a[p++]=g),y>=0&&1>=y&&(a[p++]=y);}else if(m>0){var x=b(m),w=u*l+1.5*s*(-d+x),M=u*l+1.5*s*(-d-x);w=0>w?-_(-w,A):_(w,A),M=0>M?-_(-M,A):_(M,A);var g=(-l-(w+M))/(3*s);g>=0&&1>=g&&(a[p++]=g);}else {var T=(2*u*l-3*s*d)/(2*b(u*u*u)),C=Math.acos(T)/3,I=b(u),k=Math.cos(C),g=(-l-2*I*k)/(3*s),y=(-l+I*(k+S*Math.sin(C)))/(3*s),D=(-l+I*(k-S*Math.sin(C)))/(3*s);g>=0&&1>=g&&(a[p++]=g),y>=0&&1>=y&&(a[p++]=y),D>=0&&1>=D&&(a[p++]=D);}}return p;}function l(t,e,i,o,a){var s=6*i-12*e+6*t,l=9*e+3*o-3*t-9*i,h=3*e-3*t,c=0;if(n(l)){if(r(s)){var u=-h/s;u>=0&&1>=u&&(a[c++]=u);}}else {var d=s*s-4*l*h;if(n(d))a[0]=-s/(2*l);else if(d>0){var f=b(d),u=(-s+f)/(2*l),p=(-s-f)/(2*l);u>=0&&1>=u&&(a[c++]=u),p>=0&&1>=p&&(a[c++]=p);}}return c;}function h(t,e,i,n,r,o){var a=(e-t)*r+t,s=(i-e)*r+e,l=(n-i)*r+i,h=(s-a)*r+a,c=(l-s)*r+s,u=(c-h)*r+h;o[0]=t,o[1]=a,o[2]=h,o[3]=u,o[4]=u,o[5]=c,o[6]=l,o[7]=n;}function c(t,e,i,n,r,a,s,l,h,c,u){var d,f,p,g,m,v=.005,y=1/0;T[0]=h,T[1]=c;for(var _=0;1>_;_+=.05){C[0]=o(t,i,r,s,_),C[1]=o(e,n,a,l,_),g=x(T,C),y>g&&(d=_,y=g);}y=1/0;for(var w=0;32>w&&!(M>v);w++){f=d-v,p=d+v,C[0]=o(t,i,r,s,f),C[1]=o(e,n,a,l,f),g=x(C,T),f>=0&&y>g?(d=f,y=g):(I[0]=o(t,i,r,s,p),I[1]=o(e,n,a,l,p),m=x(I,T),1>=p&&y>m?(d=p,y=m):v*=.5);}return u&&(u[0]=o(t,i,r,s,d),u[1]=o(e,n,a,l,d)),b(y);}function u(t,e,i,n){var r=1-n;return r*(r*t+2*n*e)+n*n*i;}function d(t,e,i,n){return 2*((1-n)*(e-t)+n*(i-e));}function f(t,e,i,o,a){var s=t-2*e+i,l=2*(e-t),h=t-o,c=0;if(n(s)){if(r(l)){var u=-h/l;u>=0&&1>=u&&(a[c++]=u);}}else {var d=l*l-4*s*h;if(n(d)){var u=-l/(2*s);u>=0&&1>=u&&(a[c++]=u);}else if(d>0){var f=b(d),u=(-l+f)/(2*s),p=(-l-f)/(2*s);u>=0&&1>=u&&(a[c++]=u),p>=0&&1>=p&&(a[c++]=p);}}return c;}function p(t,e,i){var n=t+i-2*e;return 0===n?.5:(t-e)/n;}function g(t,e,i,n,r){var o=(e-t)*n+t,a=(i-e)*n+e,s=(a-o)*n+o;r[0]=t,r[1]=o,r[2]=s,r[3]=s,r[4]=a,r[5]=i;}function m(t,e,i,n,r,o,a,s,l){var h,c=.005,d=1/0;T[0]=a,T[1]=s;for(var f=0;1>f;f+=.05){C[0]=u(t,i,r,f),C[1]=u(e,n,o,f);var p=x(T,C);d>p&&(h=f,d=p);}d=1/0;for(var g=0;32>g&&!(M>c);g++){var m=h-c,v=h+c;C[0]=u(t,i,r,m),C[1]=u(e,n,o,m);var p=x(C,T);if(m>=0&&d>p)h=m,d=p;else {I[0]=u(t,i,r,v),I[1]=u(e,n,o,v);var y=x(I,T);1>=v&&d>y?(h=v,d=y):c*=.5;}}return l&&(l[0]=u(t,i,r,h),l[1]=u(e,n,o,h)),b(d);}var v=i(5),y=v.create,x=v.distSquare,_=Math.pow,b=Math.sqrt,w=1e-8,M=1e-4,S=b(3),A=1/3,T=y(),C=y(),I=y();t.exports={cubicAt:o,cubicDerivativeAt:a,cubicRootAt:s,cubicExtrema:l,cubicSubdivide:h,cubicProjectPoint:c,quadraticAt:u,quadraticDerivativeAt:d,quadraticRootAt:f,quadraticExtremum:p,quadraticSubdivide:g,quadraticProjectPoint:m};},function(t,e){var i="undefined"==typeof Float32Array?Array:Float32Array,n={create:function create(){var t=new i(6);return n.identity(t),t;},identity:function identity(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=1,t[4]=0,t[5]=0,t;},copy:function copy(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t;},mul:function mul(t,e,i){var n=e[0]*i[0]+e[2]*i[1],r=e[1]*i[0]+e[3]*i[1],o=e[0]*i[2]+e[2]*i[3],a=e[1]*i[2]+e[3]*i[3],s=e[0]*i[4]+e[2]*i[5]+e[4],l=e[1]*i[4]+e[3]*i[5]+e[5];return t[0]=n,t[1]=r,t[2]=o,t[3]=a,t[4]=s,t[5]=l,t;},translate:function translate(t,e,i){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4]+i[0],t[5]=e[5]+i[1],t;},rotate:function rotate(t,e,i){var n=e[0],r=e[2],o=e[4],a=e[1],s=e[3],l=e[5],h=Math.sin(i),c=Math.cos(i);return t[0]=n*c+a*h,t[1]=-n*h+a*c,t[2]=r*c+s*h,t[3]=-r*h+c*s,t[4]=c*o+h*l,t[5]=c*l-h*o,t;},scale:function scale(t,e,i){var n=i[0],r=i[1];return t[0]=e[0]*n,t[1]=e[1]*r,t[2]=e[2]*n,t[3]=e[3]*r,t[4]=e[4]*n,t[5]=e[5]*r,t;},invert:function invert(t,e){var i=e[0],n=e[2],r=e[4],o=e[1],a=e[3],s=e[5],l=i*a-o*n;return l?(l=1/l,t[0]=a*l,t[1]=-o*l,t[2]=-n*l,t[3]=i*l,t[4]=(n*s-a*r)*l,t[5]=(o*r-i*s)*l,t):null;}};t.exports=n;},function(t,e,i){function n(t,e){var i=o.slice(arguments,2);return this.superClass.prototype[e].apply(t,i);}function r(t,e,i){return this.superClass.prototype[e].apply(t,i);}var o=i(1),a={},s=".",l="___EC__COMPONENT__CONTAINER___",h=a.parseClassType=function(t){var e={main:"",sub:""};return t&&(t=t.split(s),e.main=t[0]||"",e.sub=t[1]||""),e;};a.enableClassExtend=function(t,e){t.extend=function(i){var a=function a(){e&&e.apply(this,arguments),t.apply(this,arguments);};return o.extend(a.prototype,i),a.extend=this.extend,a.superCall=n,a.superApply=r,o.inherits(a,this),a.superClass=this,a;};},a.enableClassManagement=function(t,e){function i(t){var e=n[t.main];return e&&e[l]||(e=n[t.main]={},e[l]=!0),e;}e=e||{};var n={};if(t.registerClass=function(t,e){if(e)if(e=h(e),e.sub){if(e.sub!==l){var r=i(e);r[e.sub]=t;}}else {if(n[e.main])throw new Error(e.main+"exists.");n[e.main]=t;}return t;},t.getClass=function(t,e,i){var r=n[t];if(r&&r[l]&&(r=e?r[e]:null),i&&!r)throw new Error("Component "+t+"."+(e||"")+" not exists. Load it first.");return r;},t.getClassesByMainType=function(t){t=h(t);var e=[],i=n[t.main];return i&&i[l]?o.each(i,function(t,i){i!==l&&e.push(t);}):e.push(i),e;},t.hasClass=function(t){return t=h(t),!!n[t.main];},t.getAllClassMainTypes=function(){var t=[];return o.each(n,function(e,i){t.push(i);}),t;},t.hasSubTypes=function(t){t=h(t);var e=n[t.main];return e&&e[l];},t.parseClassType=h,e.registerWhenExtend){var r=t.extend;r&&(t.extend=function(e){var i=r.call(this,e);return t.registerClass(i,e.type);});}return t;},a.setReadOnly=function(t,e){},t.exports=a;},function(t,e,i){var n=Array.prototype.slice,r=i(1),o=r.indexOf,a=function a(){this._$handlers={};};a.prototype={constructor:a,one:function one(t,e,i){var n=this._$handlers;return e&&t?(n[t]||(n[t]=[]),o(n[t],t)>=0?this:(n[t].push({h:e,one:!0,ctx:i||this}),this)):this;},on:function on(t,e,i){var n=this._$handlers;return e&&t?(n[t]||(n[t]=[]),n[t].push({h:e,one:!1,ctx:i||this}),this):this;},isSilent:function isSilent(t){var e=this._$handlers;return e[t]&&e[t].length;},off:function off(t,e){var i=this._$handlers;if(!t)return this._$handlers={},this;if(e){if(i[t]){for(var n=[],r=0,o=i[t].length;o>r;r++){i[t][r].h!=e&&n.push(i[t][r]);}i[t]=n;}i[t]&&0===i[t].length&&delete i[t];}else delete i[t];return this;},trigger:function trigger(t){if(this._$handlers[t]){var e=arguments,i=e.length;i>3&&(e=n.call(e,1));for(var r=this._$handlers[t],o=r.length,a=0;o>a;){switch(i){case 1:r[a].h.call(r[a].ctx);break;case 2:r[a].h.call(r[a].ctx,e[1]);break;case 3:r[a].h.call(r[a].ctx,e[1],e[2]);break;default:r[a].h.apply(r[a].ctx,e);}r[a].one?(r.splice(a,1),o--):a++;}}return this;},triggerWithContext:function triggerWithContext(t){if(this._$handlers[t]){var e=arguments,i=e.length;i>4&&(e=n.call(e,1,e.length-1));for(var r=e[e.length-1],o=this._$handlers[t],a=o.length,s=0;a>s;){switch(i){case 1:o[s].h.call(r);break;case 2:o[s].h.call(r,e[1]);break;case 3:o[s].h.call(r,e[1],e[2]);break;default:o[s].h.apply(r,e);}o[s].one?(o.splice(s,1),a--):s++;}}return this;}},t.exports=a;},function(t,e){function i(t){return t=Math.round(t),0>t?0:t>255?255:t;}function n(t){return t=Math.round(t),0>t?0:t>360?360:t;}function r(t){return 0>t?0:t>1?1:t;}function o(t){return i(t.length&&"%"===t.charAt(t.length-1)?parseFloat(t)/100*255:parseInt(t,10));}function a(t){return r(t.length&&"%"===t.charAt(t.length-1)?parseFloat(t)/100:parseFloat(t));}function s(t,e,i){return 0>i?i+=1:i>1&&(i-=1),1>6*i?t+(e-t)*i*6:1>2*i?e:2>3*i?t+(e-t)*(2/3-i)*6:t;}function l(t,e,i){return t+(e-t)*i;}function h(t){if(t){t+="";var e=t.replace(/ /g,"").toLowerCase();if(e in _)return _[e].slice();if("#"!==e.charAt(0)){var i=e.indexOf("("),n=e.indexOf(")");if(-1!==i&&n+1===e.length){var r=e.substr(0,i),s=e.substr(i+1,n-(i+1)).split(","),l=1;switch(r){case "rgba":if(4!==s.length)return;l=a(s.pop());case "rgb":if(3!==s.length)return;return [o(s[0]),o(s[1]),o(s[2]),l];case "hsla":if(4!==s.length)return;return s[3]=a(s[3]),c(s);case "hsl":if(3!==s.length)return;return c(s);default:return;}}}else {if(4===e.length){var h=parseInt(e.substr(1),16);if(!(h>=0&&4095>=h))return;return [(3840&h)>>4|(3840&h)>>8,240&h|(240&h)>>4,15&h|(15&h)<<4,1];}if(7===e.length){var h=parseInt(e.substr(1),16);if(!(h>=0&&16777215>=h))return;return [(16711680&h)>>16,(65280&h)>>8,255&h,1];}}}}function c(t){var e=(parseFloat(t[0])%360+360)%360/360,n=a(t[1]),r=a(t[2]),o=.5>=r?r*(n+1):r+n-r*n,l=2*r-o,h=[i(255*s(l,o,e+1/3)),i(255*s(l,o,e)),i(255*s(l,o,e-1/3))];return 4===t.length&&(h[3]=t[3]),h;}function u(t){if(t){var e,i,n=t[0]/255,r=t[1]/255,o=t[2]/255,a=Math.min(n,r,o),s=Math.max(n,r,o),l=s-a,h=(s+a)/2;if(0===l)e=0,i=0;else {i=.5>h?l/(s+a):l/(2-s-a);var c=((s-n)/6+l/2)/l,u=((s-r)/6+l/2)/l,d=((s-o)/6+l/2)/l;n===s?e=d-u:r===s?e=1/3+c-d:o===s&&(e=2/3+u-c),0>e&&(e+=1),e>1&&(e-=1);}var f=[360*e,i,h];return null!=t[3]&&f.push(t[3]),f;}}function d(t,e){var i=h(t);if(i){for(var n=0;3>n;n++){0>e?i[n]=i[n]*(1-e)|0:i[n]=(255-i[n])*e+i[n]|0;}return x(i,4===i.length?"rgba":"rgb");}}function f(t,e){var i=h(t);return i?((1<<24)+(i[0]<<16)+(i[1]<<8)+ +i[2]).toString(16).slice(1):void 0;}function p(t,e,n){if(e&&e.length&&t>=0&&1>=t){n=n||[0,0,0,0];var r=t*(e.length-1),o=Math.floor(r),a=Math.ceil(r),s=e[o],h=e[a],c=r-o;return n[0]=i(l(s[0],h[0],c)),n[1]=i(l(s[1],h[1],c)),n[2]=i(l(s[2],h[2],c)),n[3]=i(l(s[3],h[3],c)),n;}}function g(t,e,n){if(e&&e.length&&t>=0&&1>=t){var o=t*(e.length-1),a=Math.floor(o),s=Math.ceil(o),c=h(e[a]),u=h(e[s]),d=o-a,f=x([i(l(c[0],u[0],d)),i(l(c[1],u[1],d)),i(l(c[2],u[2],d)),r(l(c[3],u[3],d))],"rgba");return n?{color:f,leftIndex:a,rightIndex:s,value:o}:f;}}function m(t,e){if(!(2!==t.length||t[1]<t[0])){for(var i=g(t[0],e,!0),n=g(t[1],e,!0),r=[{color:i.color,offset:0}],o=n.value-i.value,a=Math.max(i.value,i.rightIndex),s=Math.min(n.value,n.leftIndex),l=a;o>0&&s>=l;l++){r.push({color:e[l],offset:(l-i.value)/o});}return r.push({color:n.color,offset:1}),r;}}function v(t,e,i,r){return t=h(t),t?(t=u(t),null!=e&&(t[0]=n(e)),null!=i&&(t[1]=a(i)),null!=r&&(t[2]=a(r)),x(c(t),"rgba")):void 0;}function y(t,e){return t=h(t),t&&null!=e?(t[3]=r(e),x(t,"rgba")):void 0;}function x(t,e){return "rgb"!==e&&"hsv"!==e&&"hsl"!==e||(t=t.slice(0,3)),e+"("+t.join(",")+")";}var _={transparent:[0,0,0,0],aliceblue:[240,248,255,1],antiquewhite:[250,235,215,1],aqua:[0,255,255,1],aquamarine:[127,255,212,1],azure:[240,255,255,1],beige:[245,245,220,1],bisque:[255,228,196,1],black:[0,0,0,1],blanchedalmond:[255,235,205,1],blue:[0,0,255,1],blueviolet:[138,43,226,1],brown:[165,42,42,1],burlywood:[222,184,135,1],cadetblue:[95,158,160,1],chartreuse:[127,255,0,1],chocolate:[210,105,30,1],coral:[255,127,80,1],cornflowerblue:[100,149,237,1],cornsilk:[255,248,220,1],crimson:[220,20,60,1],cyan:[0,255,255,1],darkblue:[0,0,139,1],darkcyan:[0,139,139,1],darkgoldenrod:[184,134,11,1],darkgray:[169,169,169,1],darkgreen:[0,100,0,1],darkgrey:[169,169,169,1],darkkhaki:[189,183,107,1],darkmagenta:[139,0,139,1],darkolivegreen:[85,107,47,1],darkorange:[255,140,0,1],darkorchid:[153,50,204,1],darkred:[139,0,0,1],darksalmon:[233,150,122,1],darkseagreen:[143,188,143,1],darkslateblue:[72,61,139,1],darkslategray:[47,79,79,1],darkslategrey:[47,79,79,1],darkturquoise:[0,206,209,1],darkviolet:[148,0,211,1],deeppink:[255,20,147,1],deepskyblue:[0,191,255,1],dimgray:[105,105,105,1],dimgrey:[105,105,105,1],dodgerblue:[30,144,255,1],firebrick:[178,34,34,1],floralwhite:[255,250,240,1],forestgreen:[34,139,34,1],fuchsia:[255,0,255,1],gainsboro:[220,220,220,1],ghostwhite:[248,248,255,1],gold:[255,215,0,1],goldenrod:[218,165,32,1],gray:[128,128,128,1],green:[0,128,0,1],greenyellow:[173,255,47,1],grey:[128,128,128,1],honeydew:[240,255,240,1],hotpink:[255,105,180,1],indianred:[205,92,92,1],indigo:[75,0,130,1],ivory:[255,255,240,1],khaki:[240,230,140,1],lavender:[230,230,250,1],lavenderblush:[255,240,245,1],lawngreen:[124,252,0,1],lemonchiffon:[255,250,205,1],lightblue:[173,216,230,1],lightcoral:[240,128,128,1],lightcyan:[224,255,255,1],lightgoldenrodyellow:[250,250,210,1],lightgray:[211,211,211,1],lightgreen:[144,238,144,1],lightgrey:[211,211,211,1],lightpink:[255,182,193,1],lightsalmon:[255,160,122,1],lightseagreen:[32,178,170,1],lightskyblue:[135,206,250,1],lightslategray:[119,136,153,1],lightslategrey:[119,136,153,1],lightsteelblue:[176,196,222,1],lightyellow:[255,255,224,1],lime:[0,255,0,1],limegreen:[50,205,50,1],linen:[250,240,230,1],magenta:[255,0,255,1],maroon:[128,0,0,1],mediumaquamarine:[102,205,170,1],mediumblue:[0,0,205,1],mediumorchid:[186,85,211,1],mediumpurple:[147,112,219,1],mediumseagreen:[60,179,113,1],mediumslateblue:[123,104,238,1],mediumspringgreen:[0,250,154,1],mediumturquoise:[72,209,204,1],mediumvioletred:[199,21,133,1],midnightblue:[25,25,112,1],mintcream:[245,255,250,1],mistyrose:[255,228,225,1],moccasin:[255,228,181,1],navajowhite:[255,222,173,1],navy:[0,0,128,1],oldlace:[253,245,230,1],olive:[128,128,0,1],olivedrab:[107,142,35,1],orange:[255,165,0,1],orangered:[255,69,0,1],orchid:[218,112,214,1],palegoldenrod:[238,232,170,1],palegreen:[152,251,152,1],paleturquoise:[175,238,238,1],palevioletred:[219,112,147,1],papayawhip:[255,239,213,1],peachpuff:[255,218,185,1],peru:[205,133,63,1],pink:[255,192,203,1],plum:[221,160,221,1],powderblue:[176,224,230,1],purple:[128,0,128,1],red:[255,0,0,1],rosybrown:[188,143,143,1],royalblue:[65,105,225,1],saddlebrown:[139,69,19,1],salmon:[250,128,114,1],sandybrown:[244,164,96,1],seagreen:[46,139,87,1],seashell:[255,245,238,1],sienna:[160,82,45,1],silver:[192,192,192,1],skyblue:[135,206,235,1],slateblue:[106,90,205,1],slategray:[112,128,144,1],slategrey:[112,128,144,1],snow:[255,250,250,1],springgreen:[0,255,127,1],steelblue:[70,130,180,1],tan:[210,180,140,1],teal:[0,128,128,1],thistle:[216,191,216,1],tomato:[255,99,71,1],turquoise:[64,224,208,1],violet:[238,130,238,1],wheat:[245,222,179,1],white:[255,255,255,1],whitesmoke:[245,245,245,1],yellow:[255,255,0,1],yellowgreen:[154,205,50,1]};t.exports={parse:h,lift:d,toHex:f,fastMapToColor:p,mapToColor:g,mapIntervalToColor:m,modifyHSL:v,modifyAlpha:y,stringify:x};},function(t,e,i){var n=i(124),r=i(37);i(125),i(123);var o=i(32),a=i(4),s=i(1),l=i(17),h={};h.getScaleExtent=function(t,e){var i=t.scale,n=i.getExtent(),r=n[1]-n[0];if("ordinal"===i.type)return isFinite(r)?n:[0,0];var o=e.getMin?e.getMin():e.get("min"),l=e.getMax?e.getMax():e.get("max"),h=e.getNeedCrossZero?e.getNeedCrossZero():!e.get("scale"),c=e.get("boundaryGap");s.isArray(c)||(c=[c||0,c||0]),c[0]=a.parsePercent(c[0],1),c[1]=a.parsePercent(c[1],1);var u=!0,d=!0;return null==o&&(o=n[0]-c[0]*r,u=!1),null==l&&(l=n[1]+c[1]*r,d=!1),"dataMin"===o&&(o=n[0]),"dataMax"===l&&(l=n[1]),h&&(o>0&&l>0&&!u&&(o=0),0>o&&0>l&&!d&&(l=0)),[o,l];},h.niceScaleExtent=function(t,e){var i=t.scale,n=h.getScaleExtent(t,e),r=null!=(e.getMin?e.getMin():e.get("min")),o=null!=(e.getMax?e.getMax():e.get("max"));i.setExtent(n[0],n[1]),i.niceExtent(e.get("splitNumber"),r,o);var a=e.get("interval");null!=a&&i.setInterval&&i.setInterval(a);},h.createScaleByModel=function(t,e){if(e=e||t.get("type"))switch(e){case "category":return new n(t.getCategories(),[1/0,-(1/0)]);case "value":return new r();default:return (o.getClass(e)||r).create(t);}},h.ifAxisCrossZero=function(t){var e=t.scale.getExtent(),i=e[0],n=e[1];return !(i>0&&n>0||0>i&&0>n);},h.getAxisLabelInterval=function(t,e,i,n){var r,o=0,a=0,s=1;e.length>40&&(s=Math.round(e.length/40));for(var h=0;h<t.length;h+=s){var c=t[h],u=l.getBoundingRect(e[h],i,"center","top");u[n?"x":"y"]+=c,u[n?"width":"height"]*=1.5,r?r.intersect(u)?(a++,o=Math.max(o,a)):(r.union(u),a=0):r=u.clone();}return 0===o&&s>1?s:o*s;},h.getFormattedLabels=function(t,e){var i=t.scale,n=i.getTicksLabels(),r=i.getTicks();return "string"==typeof e?(e=function(t){return function(e){return t.replace("{value}",e);};}(e),s.map(n,e)):"function"==typeof e?s.map(r,function(n,r){return e("category"===t.type?i.getLabel(n):n,r);},this):n;},t.exports=h;},function(t,e,i){"use strict";var n=i(3),r=i(8),o=n.extendShape({type:"triangle",shape:{cx:0,cy:0,width:0,height:0},buildPath:function buildPath(t,e){var i=e.cx,n=e.cy,r=e.width/2,o=e.height/2;t.moveTo(i,n-o),t.lineTo(i+r,n+o),t.lineTo(i-r,n+o),t.closePath();}}),a=n.extendShape({type:"diamond",shape:{cx:0,cy:0,width:0,height:0},buildPath:function buildPath(t,e){var i=e.cx,n=e.cy,r=e.width/2,o=e.height/2;t.moveTo(i,n-o),t.lineTo(i+r,n),t.lineTo(i,n+o),t.lineTo(i-r,n),t.closePath();}}),s=n.extendShape({type:"pin",shape:{x:0,y:0,width:0,height:0},buildPath:function buildPath(t,e){var i=e.x,n=e.y,r=e.width/5*3,o=Math.max(r,e.height),a=r/2,s=a*a/(o-a),l=n-o+a+s,h=Math.asin(s/a),c=Math.cos(h)*a,u=Math.sin(h),d=Math.cos(h);t.arc(i,l,a,Math.PI-h,2*Math.PI+h);var f=.6*a,p=.7*a;t.bezierCurveTo(i+c-u*f,l+s+d*f,i,n-p,i,n),t.bezierCurveTo(i,n-p,i-c+u*f,l+s+d*f,i-c,l+s),t.closePath();}}),l=n.extendShape({type:"arrow",shape:{x:0,y:0,width:0,height:0},buildPath:function buildPath(t,e){var i=e.height,n=e.width,r=e.x,o=e.y,a=n/3*2;t.moveTo(r,o),t.lineTo(r+a,o+i),t.lineTo(r,o+i/4*3),t.lineTo(r-a,o+i),t.lineTo(r,o),t.closePath();}}),h={line:n.Line,rect:n.Rect,roundRect:n.Rect,square:n.Rect,circle:n.Circle,diamond:a,pin:s,arrow:l,triangle:o},c={line:function line(t,e,i,n,r){r.x1=t,r.y1=e+n/2,r.x2=t+i,r.y2=e+n/2;},rect:function rect(t,e,i,n,r){r.x=t,r.y=e,r.width=i,r.height=n;},roundRect:function roundRect(t,e,i,n,r){r.x=t,r.y=e,r.width=i,r.height=n,r.r=Math.min(i,n)/4;},square:function square(t,e,i,n,r){var o=Math.min(i,n);r.x=t,r.y=e,r.width=o,r.height=o;},circle:function circle(t,e,i,n,r){r.cx=t+i/2,r.cy=e+n/2,r.r=Math.min(i,n)/2;},diamond:function diamond(t,e,i,n,r){r.cx=t+i/2,r.cy=e+n/2,r.width=i,r.height=n;},pin:function pin(t,e,i,n,r){r.x=t+i/2,r.y=e+n/2,r.width=i,r.height=n;},arrow:function arrow(t,e,i,n,r){r.x=t+i/2,r.y=e+n/2,r.width=i,r.height=n;},triangle:function triangle(t,e,i,n,r){r.cx=t+i/2,r.cy=e+n/2,r.width=i,r.height=n;}},u={};for(var d in h){u[d]=new h[d]();}var f=n.extendShape({type:"symbol",shape:{symbolType:"",x:0,y:0,width:0,height:0},beforeBrush:function beforeBrush(){var t=this.style,e=this.shape;"pin"===e.symbolType&&"inside"===t.textPosition&&(t.textPosition=["50%","40%"],t.textAlign="center",t.textVerticalAlign="middle");},buildPath:function buildPath(t,e){var i=e.symbolType,n=u[i];"none"!==e.symbolType&&(n||(i="rect",n=u[i]),c[i](e.x,e.y,e.width,e.height,n.shape),n.buildPath(t,n.shape));}}),p=function p(t){if("image"!==this.type){var e=this.style,i=this.shape;i&&"line"===i.symbolType?e.stroke=t:this.__isEmptyBrush?(e.stroke=t,e.fill="#fff"):(e.fill&&(e.fill=t),e.stroke&&(e.stroke=t)),this.dirty();}},g={createSymbol:function createSymbol(t,e,i,o,a,s){var l=0===t.indexOf("empty");l&&(t=t.substr(5,1).toLowerCase()+t.substr(6));var h;return h=0===t.indexOf("image://")?new n.Image({style:{image:t.slice(8),x:e,y:i,width:o,height:a}}):0===t.indexOf("path://")?n.makePath(t.slice(7),{},new r(e,i,o,a)):new f({shape:{symbolType:t,x:e,y:i,width:o,height:a}}),h.__isEmptyBrush=l,h.setColor=p,h.setColor(s),h;}};t.exports=g;},function(t,e,i){function n(){this.group=new a(),this.uid=s.getUID("viewChart");}function r(t,e){if(t&&(t.trigger(e),"group"===t.type))for(var i=0;i<t.childCount();i++){r(t.childAt(i),e);}}function o(t,e,i){if(null!=e.dataIndex){var n=t.getItemGraphicEl(e.dataIndex);r(n,i);}else if(e.name){var o=t.indexOfName(e.name),n=t.getItemGraphicEl(o);r(n,i);}else t.eachItemGraphicEl(function(t){r(t,i);});}var a=i(26),s=i(41),l=i(20);n.prototype={type:"chart",init:function init(t,e){},render:function render(t,e,i,n){},highlight:function highlight(t,e,i,n){o(t.getData(),n,"emphasis");},downplay:function downplay(t,e,i,n){o(t.getData(),n,"normal");},remove:function remove(t,e){this.group.removeAll();},dispose:function dispose(){}};var h=n.prototype;h.updateView=h.updateLayout=h.updateVisual=function(t,e,i,n){this.render(t,e,i,n);},l.enableClassExtend(n),l.enableClassManagement(n,{registerWhenExtend:!0}),t.exports=n;},function(t,e,i){var n=i(1),r=i(55),o=i(8),a=function a(t){t=t||{},r.call(this,t);for(var e in t){this[e]=t[e];}this._children=[],this.__storage=null,this.__dirty=!0;};a.prototype={constructor:a,type:"group",silent:!1,children:function children(){return this._children.slice();},childAt:function childAt(t){return this._children[t];},childOfName:function childOfName(t){for(var e=this._children,i=0;i<e.length;i++){if(e[i].name===t)return e[i];}},childCount:function childCount(){return this._children.length;},add:function add(t){return t&&t!==this&&t.parent!==this&&(this._children.push(t),this._doAdd(t)),this;},addBefore:function addBefore(t,e){if(t&&t!==this&&t.parent!==this&&e&&e.parent===this){var i=this._children,n=i.indexOf(e);n>=0&&(i.splice(n,0,t),this._doAdd(t));}return this;},_doAdd:function _doAdd(t){t.parent&&t.parent.remove(t),t.parent=this;var e=this.__storage,i=this.__zr;e&&e!==t.__storage&&(e.addToMap(t),t instanceof a&&t.addChildrenToStorage(e)),i&&i.refresh();},remove:function remove(t){var e=this.__zr,i=this.__storage,r=this._children,o=n.indexOf(r,t);return 0>o?this:(r.splice(o,1),t.parent=null,i&&(i.delFromMap(t.id),t instanceof a&&t.delChildrenFromStorage(i)),e&&e.refresh(),this);},removeAll:function removeAll(){var t,e,i=this._children,n=this.__storage;for(e=0;e<i.length;e++){t=i[e],n&&(n.delFromMap(t.id),t instanceof a&&t.delChildrenFromStorage(n)),t.parent=null;}return i.length=0,this;},eachChild:function eachChild(t,e){for(var i=this._children,n=0;n<i.length;n++){var r=i[n];t.call(e,r,n);}return this;},traverse:function traverse(t,e){for(var i=0;i<this._children.length;i++){var n=this._children[i];t.call(e,n),"group"===n.type&&n.traverse(t,e);}return this;},addChildrenToStorage:function addChildrenToStorage(t){for(var e=0;e<this._children.length;e++){var i=this._children[e];t.addToMap(i),i instanceof a&&i.addChildrenToStorage(t);}},delChildrenFromStorage:function delChildrenFromStorage(t){for(var e=0;e<this._children.length;e++){var i=this._children[e];t.delFromMap(i.id),i instanceof a&&i.delChildrenFromStorage(t);}},dirty:function dirty(){return this.__dirty=!0,this.__zr&&this.__zr.refresh(),this;},getBoundingRect:function getBoundingRect(t){for(var e=null,i=new o(0,0,0,0),n=t||this._children,r=[],a=0;a<n.length;a++){var s=n[a];if(!s.ignore&&!s.invisible){var l=s.getBoundingRect(),h=s.getLocalTransform(r);h?(i.copy(l),i.applyTransform(h),e=e||i.clone(),e.union(i)):(e=e||l.clone(),e.union(l));}}return e||i;}},n.inherits(a,r),t.exports=a;},function(t,e,i){"use strict";var n=i(18),r=i(5),o=i(64),a=i(8),s={M:1,L:2,C:3,Q:4,A:5,Z:6,R:7},l=[],h=[],c=[],u=[],d=Math.min,f=Math.max,p=Math.cos,g=Math.sin,m=Math.sqrt,v="undefined"!=typeof Float32Array,y=function y(){this.data=[],this._len=0,this._ctx=null,this._xi=0,this._yi=0,this._x0=0,this._y0=0;};y.prototype={constructor:y,_lineDash:null,_dashOffset:0,_dashIdx:0,_dashSum:0,getContext:function getContext(){return this._ctx;},beginPath:function beginPath(t){return this._ctx=t,t&&t.beginPath(),this._len=0,this._lineDash&&(this._lineDash=null,this._dashOffset=0),this;},moveTo:function moveTo(t,e){return this.addData(s.M,t,e),this._ctx&&this._ctx.moveTo(t,e),this._x0=t,this._y0=e,this._xi=t,this._yi=e,this;},lineTo:function lineTo(t,e){return this.addData(s.L,t,e),this._ctx&&(this._needsDash()?this._dashedLineTo(t,e):this._ctx.lineTo(t,e)),this._xi=t,this._yi=e,this;},bezierCurveTo:function bezierCurveTo(t,e,i,n,r,o){return this.addData(s.C,t,e,i,n,r,o),this._ctx&&(this._needsDash()?this._dashedBezierTo(t,e,i,n,r,o):this._ctx.bezierCurveTo(t,e,i,n,r,o)),this._xi=r,this._yi=o,this;},quadraticCurveTo:function quadraticCurveTo(t,e,i,n){return this.addData(s.Q,t,e,i,n),this._ctx&&(this._needsDash()?this._dashedQuadraticTo(t,e,i,n):this._ctx.quadraticCurveTo(t,e,i,n)),this._xi=i,this._yi=n,this;},arc:function arc(t,e,i,n,r,o){return this.addData(s.A,t,e,i,i,n,r-n,0,o?0:1),this._ctx&&this._ctx.arc(t,e,i,n,r,o),this._xi=p(r)*i+t,this._xi=g(r)*i+t,this;},arcTo:function arcTo(t,e,i,n,r){return this._ctx&&this._ctx.arcTo(t,e,i,n,r),this;},rect:function rect(t,e,i,n){return this._ctx&&this._ctx.rect(t,e,i,n),this.addData(s.R,t,e,i,n),this;},closePath:function closePath(){this.addData(s.Z);var t=this._ctx,e=this._x0,i=this._y0;return t&&(this._needsDash()&&this._dashedLineTo(e,i),t.closePath()),this._xi=e,this._yi=i,this;},fill:function fill(t){t&&t.fill(),this.toStatic();},stroke:function stroke(t){t&&t.stroke(),this.toStatic();},setLineDash:function setLineDash(t){if(t instanceof Array){this._lineDash=t,this._dashIdx=0;for(var e=0,i=0;i<t.length;i++){e+=t[i];}this._dashSum=e;}return this;},setLineDashOffset:function setLineDashOffset(t){return this._dashOffset=t,this;},len:function len(){return this._len;},setData:function setData(t){var e=t.length;this.data&&this.data.length==e||!v||(this.data=new Float32Array(e));for(var i=0;e>i;i++){this.data[i]=t[i];}this._len=e;},appendPath:function appendPath(t){t instanceof Array||(t=[t]);for(var e=t.length,i=0,n=this._len,r=0;e>r;r++){i+=t[r].len();}v&&this.data instanceof Float32Array&&(this.data=new Float32Array(n+i));for(var r=0;e>r;r++){for(var o=t[r].data,a=0;a<o.length;a++){this.data[n++]=o[a];}}this._len=n;},addData:function addData(t){var e=this.data;this._len+arguments.length>e.length&&(this._expandData(),e=this.data);for(var i=0;i<arguments.length;i++){e[this._len++]=arguments[i];}this._prevCmd=t;},_expandData:function _expandData(){if(!(this.data instanceof Array)){for(var t=[],e=0;e<this._len;e++){t[e]=this.data[e];}this.data=t;}},_needsDash:function _needsDash(){return this._lineDash;},_dashedLineTo:function _dashedLineTo(t,e){var i,n,r=this._dashSum,o=this._dashOffset,a=this._lineDash,s=this._ctx,l=this._xi,h=this._yi,c=t-l,u=e-h,p=m(c*c+u*u),g=l,v=h,y=a.length;for(c/=p,u/=p,0>o&&(o=r+o),o%=r,g-=o*c,v-=o*u;c>=0&&t>=g||0>c&&g>t;){n=this._dashIdx,i=a[n],g+=c*i,v+=u*i,this._dashIdx=(n+1)%y,c>0&&l>g||0>c&&g>l||s[n%2?"moveTo":"lineTo"](c>=0?d(g,t):f(g,t),u>=0?d(v,e):f(v,e));}c=g-t,u=v-e,this._dashOffset=-m(c*c+u*u);},_dashedBezierTo:function _dashedBezierTo(t,e,i,r,o,a){var s,l,h,c,u,d=this._dashSum,f=this._dashOffset,p=this._lineDash,g=this._ctx,v=this._xi,y=this._yi,x=n.cubicAt,_=0,b=this._dashIdx,w=p.length,M=0;for(0>f&&(f=d+f),f%=d,s=0;1>s;s+=.1){l=x(v,t,i,o,s+.1)-x(v,t,i,o,s),h=x(y,e,r,a,s+.1)-x(y,e,r,a,s),_+=m(l*l+h*h);}for(;w>b&&(M+=p[b],!(M>f));b++){}for(s=(M-f)/_;1>=s;){c=x(v,t,i,o,s),u=x(y,e,r,a,s),b%2?g.moveTo(c,u):g.lineTo(c,u),s+=p[b]/_,b=(b+1)%w;}b%2!==0&&g.lineTo(o,a),l=o-c,h=a-u,this._dashOffset=-m(l*l+h*h);},_dashedQuadraticTo:function _dashedQuadraticTo(t,e,i,n){var r=i,o=n;i=(i+2*t)/3,n=(n+2*e)/3,t=(this._xi+2*t)/3,e=(this._yi+2*e)/3,this._dashedBezierTo(t,e,i,n,r,o);},toStatic:function toStatic(){var t=this.data;t instanceof Array&&(t.length=this._len,v&&(this.data=new Float32Array(t)));},getBoundingRect:function getBoundingRect(){l[0]=l[1]=c[0]=c[1]=Number.MAX_VALUE,h[0]=h[1]=u[0]=u[1]=-Number.MAX_VALUE;for(var t=this.data,e=0,i=0,n=0,d=0,f=0;f<t.length;){var m=t[f++];switch(1==f&&(e=t[f],i=t[f+1],n=e,d=i),m){case s.M:n=t[f++],d=t[f++],e=n,i=d,c[0]=n,c[1]=d,u[0]=n,u[1]=d;break;case s.L:o.fromLine(e,i,t[f],t[f+1],c,u),e=t[f++],i=t[f++];break;case s.C:o.fromCubic(e,i,t[f++],t[f++],t[f++],t[f++],t[f],t[f+1],c,u),e=t[f++],i=t[f++];break;case s.Q:o.fromQuadratic(e,i,t[f++],t[f++],t[f],t[f+1],c,u),e=t[f++],i=t[f++];break;case s.A:var v=t[f++],y=t[f++],x=t[f++],_=t[f++],b=t[f++],w=t[f++]+b,M=(t[f++],1-t[f++]);1==f&&(n=p(b)*x+v,d=g(b)*_+y),o.fromArc(v,y,x,_,b,w,M,c,u),e=p(w)*x+v,i=g(w)*_+y;break;case s.R:n=e=t[f++],d=i=t[f++];var S=t[f++],A=t[f++];o.fromLine(n,d,n+S,d+A,c,u);break;case s.Z:e=n,i=d;}r.min(l,l,c),r.max(h,h,u);}return 0===f&&(l[0]=l[1]=h[0]=h[1]=0),new a(l[0],l[1],h[0]-l[0],h[1]-l[1]);},rebuildPath:function rebuildPath(t){for(var e=this.data,i=0;i<this._len;){var n=e[i++];switch(n){case s.M:t.moveTo(e[i++],e[i++]);break;case s.L:t.lineTo(e[i++],e[i++]);break;case s.C:t.bezierCurveTo(e[i++],e[i++],e[i++],e[i++],e[i++],e[i++]);break;case s.Q:t.quadraticCurveTo(e[i++],e[i++],e[i++],e[i++]);break;case s.A:var r=e[i++],o=e[i++],a=e[i++],l=e[i++],h=e[i++],c=e[i++],u=e[i++],d=e[i++],f=a>l?a:l,p=a>l?1:a/l,g=a>l?l/a:1,m=Math.abs(a-l)>.001;m?(t.translate(r,o),t.rotate(u),t.scale(p,g),t.arc(0,0,f,h,h+c,1-d),t.scale(1/p,1/g),t.rotate(-u),t.translate(-r,-o)):t.arc(r,o,f,h,h+c,1-d);break;case s.R:t.rect(e[i++],e[i++],e[i++],e[i++]);break;case s.Z:t.closePath();}}}},y.CMD=s,t.exports=y;},function(t,e){"use strict";function i(){this._coordinateSystems=[];}var n={};i.prototype={constructor:i,create:function create(t,e){var i=[];for(var r in n){var o=n[r].create(t,e);o&&(i=i.concat(o));}this._coordinateSystems=i;},update:function update(t,e){for(var i=this._coordinateSystems,n=0;n<i.length;n++){i[n].update&&i[n].update(t,e);}}},i.register=function(t,e){n[t]=e;},i.get=function(t){return n[t];},t.exports=i;},function(t,e){"use strict";var i={};t.exports={register:function register(t,e){i[t]=e;},get:function get(t){return i[t];}};},function(t,e,i){var n=i(1);t.exports=function(t){for(var e=0;e<t.length;e++){t[e][1]||(t[e][1]=t[e][0]);}return function(e){for(var i={},r=0;r<t.length;r++){var o=t[r][1];if(!(e&&n.indexOf(e,o)>=0)){var a=this.getShallow(o);null!=a&&(i[t[r][0]]=a);}}return i;};};},function(t,e,i){function n(t,e,i,n){if(!e)return t;var s=o(e[0]),l=a.isArray(s)&&s.length||1;i=i||[],n=n||"extra";for(var h=0;l>h;h++){if(!t[h]){var c=i[h]||n+(h-i.length);t[h]=r(e,h)?{type:"ordinal",name:c}:c;}}return t;}function r(t,e){for(var i=0,n=t.length;n>i;i++){var r=o(t[i]);if(!a.isArray(r))return !1;var r=r[e];if(null!=r&&isFinite(r))return !1;if(a.isString(r)&&"-"!==r)return !0;}return !1;}function o(t){return a.isArray(t)?t:a.isObject(t)?t.value:t;}var a=i(1);t.exports=n;},function(t,e,i){function n(){this._extent=[1/0,-(1/0)],this._interval=0,this.init&&this.init.apply(this,arguments);}var r=i(20),o=n.prototype;o.parse=function(t){return t;},o.contain=function(t){var e=this._extent;return t>=e[0]&&t<=e[1];},o.normalize=function(t){var e=this._extent;return e[1]===e[0]?.5:(t-e[0])/(e[1]-e[0]);},o.scale=function(t){var e=this._extent;return t*(e[1]-e[0])+e[0];},o.unionExtent=function(t){var e=this._extent;t[0]<e[0]&&(e[0]=t[0]),t[1]>e[1]&&(e[1]=t[1]);},o.getExtent=function(){return this._extent.slice();},o.setExtent=function(t,e){var i=this._extent;isNaN(t)||(i[0]=t),isNaN(e)||(i[1]=e);},o.getTicksLabels=function(){for(var t=[],e=this.getTicks(),i=0;i<e.length;i++){t.push(this.getLabel(e[i]));}return t;},r.enableClassExtend(n),r.enableClassManagement(n,{registerWhenExtend:!0}),t.exports=n;},function(t,e,i){"use strict";function n(t){return t.getBoundingClientRect?t.getBoundingClientRect():{left:0,top:0};}function r(t,e){if(e=e||window.event,null!=e.zrX)return e;var i=e.type,r=i&&i.indexOf("touch")>=0;if(r){var o="touchend"!=i?e.targetTouches[0]:e.changedTouches[0];if(o){var a=n(t);e.zrX=o.clientX-a.left,e.zrY=o.clientY-a.top;}}else {var s=n(t);e.zrX=e.clientX-s.left,e.zrY=e.clientY-s.top,e.zrDelta=e.wheelDelta?e.wheelDelta/120:-(e.detail||0)/3;}return e;}function o(t,e,i){l?t.addEventListener(e,i):t.attachEvent("on"+e,i);}function a(t,e,i){l?t.removeEventListener(e,i):t.detachEvent("on"+e,i);}var s=i(21),l="undefined"!=typeof window&&!!window.addEventListener,h=l?function(t){t.preventDefault(),t.stopPropagation(),t.cancelBubble=!0;}:function(t){t.returnValue=!1,t.cancelBubble=!0;};t.exports={normalizeEvent:r,addEventListener:o,removeEventListener:a,stop:h,Dispatcher:s};},function(t,e,i){"use strict";var n=i(3),r=i(1);i(51),i(96),i(2).extendComponentView({type:"grid",render:function render(t,e){this.group.removeAll(),t.get("show")&&this.group.add(new n.Rect({shape:t.coordinateSystem.getRect(),style:r.defaults({fill:t.get("backgroundColor")},t.getItemStyle()),silent:!0}));}});},function(t,e,i){function n(t){t=t||{},a.call(this,t);for(var e in t){t.hasOwnProperty(e)&&"style"!==e&&(this[e]=t[e]);}this.style=new o(t.style),this._rect=null,this.__clipPaths=[];}var r=i(1),o=i(142),a=i(55),s=i(66);n.prototype={constructor:n,type:"displayable",__dirty:!0,invisible:!1,z:0,z2:0,zlevel:0,draggable:!1,dragging:!1,silent:!1,culling:!1,cursor:"pointer",rectHover:!1,beforeBrush:function beforeBrush(t){},afterBrush:function afterBrush(t){},brush:function brush(t){},getBoundingRect:function getBoundingRect(){},contain:function contain(t,e){return this.rectContain(t,e);},traverse:function traverse(t,e){t.call(e,this);},rectContain:function rectContain(t,e){var i=this.transformCoordToLocal(t,e),n=this.getBoundingRect();return n.contain(i[0],i[1]);},dirty:function dirty(){this.__dirty=!0,this._rect=null,this.__zr&&this.__zr.refresh();},animateStyle:function animateStyle(t){return this.animate("style",t);},attrKV:function attrKV(t,e){"style"!==t?a.prototype.attrKV.call(this,t,e):this.style.set(e);},setStyle:function setStyle(t,e){return this.style.set(t,e),this.dirty(!1),this;}},r.inherits(n,a),r.mixin(n,s),t.exports=n;},function(t,e,i){"use strict";function n(t){for(var e=0;e<t.length&&null==t[e];){e++;}return t[e];}function r(t){var e=n(t);return null!=e&&!u.isArray(p(e));}function o(t,e,i){t=t||[];var n=e.get("coordinateSystem"),o=m[n],a=f.get(n),s=o&&o(t,e,i),d=s&&s.dimensions;d||(d=a&&a.dimensions||["x","y"],d=c(d,t,d.concat(["value"])));var v,y=s&&s.categoryAxisModel,x="ordinal"===d[0].type?0:"ordinal"===d[1].type?1:-1,_=new h(d,e),b=l(s,t),w=y&&r(t)?function(t,e,i,n){return n===x?i:g(p(t),d[n]);}:function(t,e,i,n){var r=p(t),o=g(r&&r[n],d[n]);return x===n&&"string"==typeof o&&(v=v||y.getCategories(),o=u.indexOf(v,o),0>o&&!isNaN(o)&&(o=+o)),o;};return _.initData(t,b,w),_;}function a(t){return "category"!==t&&"time"!==t;}function s(t){return "category"===t?"ordinal":"time"===t?"time":"float";}function l(t,e){var i=[];if(t&&t.categoryAxisModel){var n=t.categoryAxisModel.getCategories();if(n){var r=e.length;if(u.isArray(e[0])&&e[0].length>1){i=[];for(var o=0;r>o;o++){i[o]=n[e[o][t.categoryIndex||0]];}}else i=n.slice(0);}}return i;}var h=i(14),c=i(31),u=i(1),d=i(7),f=i(28),p=d.getDataItemValue,g=d.converDataValue,m={cartesian2d:function cartesian2d(t,e,i){var n=i.getComponent("xAxis",e.get("xAxisIndex")),r=i.getComponent("yAxis",e.get("yAxisIndex")),o=n.get("type"),l=r.get("type"),h=[{name:"x",type:s(o),stackable:a(o)},{name:"y",type:s(l),stackable:a(l)}],u="category"===o;return c(h,t,["x","y","z"]),{dimensions:h,categoryIndex:u?0:1,categoryAxisModel:u?n:"category"===l?r:null};},polar:function polar(t,e,i){var n=e.get("polarIndex")||0,r=function r(t){return t.get("polarIndex")===n;},o=i.findComponents({mainType:"angleAxis",filter:r})[0],l=i.findComponents({mainType:"radiusAxis",filter:r})[0],h=l.get("type"),u=o.get("type"),d=[{name:"radius",type:s(h),stackable:a(h)},{name:"angle",type:s(u),stackable:a(u)}],f="category"===u;return c(d,t,["radius","angle","value"]),{dimensions:d,categoryIndex:f?1:0,categoryAxisModel:f?o:"category"===h?l:null};},geo:function geo(t,e,i){return {dimensions:c([{name:"lng"},{name:"lat"}],t,["lng","lat","value"])};}};t.exports=o;},function(t,e,i){var n=i(4),r=i(9),o=i(32),a=Math.floor,s=Math.ceil,l=o.extend({type:"interval",_interval:0,setExtent:function setExtent(t,e){var i=this._extent;isNaN(t)||(i[0]=parseFloat(t)),isNaN(e)||(i[1]=parseFloat(e));},unionExtent:function unionExtent(t){var e=this._extent;t[0]<e[0]&&(e[0]=t[0]),t[1]>e[1]&&(e[1]=t[1]),l.prototype.setExtent.call(this,e[0],e[1]);},getInterval:function getInterval(){return this._interval||this.niceTicks(),this._interval;},setInterval:function setInterval(t){this._interval=t,this._niceExtent=this._extent.slice();},getTicks:function getTicks(){this._interval||this.niceTicks();var t=this._interval,e=this._extent,i=[],r=1e4;if(t){var o=this._niceExtent;e[0]<o[0]&&i.push(e[0]);for(var a=o[0];a<=o[1];){if(i.push(a),a=n.round(a+t),i.length>r)return [];}e[1]>o[1]&&i.push(e[1]);}return i;},getTicksLabels:function getTicksLabels(){for(var t=[],e=this.getTicks(),i=0;i<e.length;i++){t.push(this.getLabel(e[i]));}return t;},getLabel:function getLabel(t){return r.addCommas(t);},niceTicks:function niceTicks(t){t=t||5;var e=this._extent,i=e[1]-e[0];if(isFinite(i)){0>i&&(i=-i,e.reverse());var r=n.nice(i/t,!0),o=[n.round(s(e[0]/r)*r),n.round(a(e[1]/r)*r)];this._interval=r,this._niceExtent=o;}},niceExtent:function niceExtent(t,e,i){var r=this._extent;if(r[0]===r[1])if(0!==r[0]){var o=r[0]/2;r[0]-=o,r[1]+=o;}else r[1]=1;var l=r[1]-r[0];isFinite(l)||(r[0]=0,r[1]=1),this.niceTicks(t);var h=this._interval;e||(r[0]=n.round(a(r[0]/h)*h)),i||(r[1]=n.round(s(r[1]/h)*h));}});l.create=function(){return new l();},t.exports=l;},function(t,e,i){function n(t){this.group=new o.Group(),this._symbolCtor=t||a;}function r(t,e,i){var n=t.getItemLayout(e);return n&&!isNaN(n[0])&&!isNaN(n[1])&&!(i&&i(e))&&"none"!==t.getItemVisual(e,"symbol");}var o=i(3),a=i(47),s=n.prototype;s.updateData=function(t,e){var i=this.group,n=t.hostModel,a=this._data,s=this._symbolCtor;t.diff(a).add(function(n){var o=t.getItemLayout(n);if(r(t,n,e)){var a=new s(t,n);a.attr("position",o),t.setItemGraphicEl(n,a),i.add(a);}}).update(function(l,h){var c=a.getItemGraphicEl(h),u=t.getItemLayout(l);return r(t,l,e)?(c?(c.updateData(t,l),o.updateProps(c,{position:u},n)):(c=new s(t,l),c.attr("position",u)),i.add(c),void t.setItemGraphicEl(l,c)):void i.remove(c);}).remove(function(t){var e=a.getItemGraphicEl(t);e&&e.fadeOut(function(){i.remove(e);});}).execute(),this._data=t;},s.updateLayout=function(){var t=this._data;t&&t.eachItemGraphicEl(function(e,i){e.attr("position",t.getItemLayout(i));});},s.remove=function(t){var e=this.group,i=this._data;i&&(t?i.eachItemGraphicEl(function(t){t.fadeOut(function(){e.remove(t);});}):e.removeAll());},t.exports=n;},function(t,e,i){function n(t){var e={};return c(["start","end","startValue","endValue"],function(i){e[i]=t[i];}),e;}function r(t,e,i,n){null!=i[e]&&null==i[t]&&(n[t]=null);}var o=i(1),a=i(15),s=i(2),l=i(7),h=i(167),c=o.each,u=l.eachAxisDim,d=s.extendComponentModel({type:"dataZoom",dependencies:["xAxis","yAxis","zAxis","radiusAxis","angleAxis","series"],defaultOption:{zlevel:0,z:4,orient:null,xAxisIndex:null,yAxisIndex:null,angleAxisIndex:null,radiusAxisIndex:null,filterMode:"filter",throttle:100,start:0,end:100,startValue:null,endValue:null},init:function init(t,e,i){this._dataIntervalByAxis={},this._dataInfo={},this._axisProxies={},this.textStyleModel;var r=n(t);this.mergeDefaultAndTheme(t,i),this.doInit(r);},mergeOption:function mergeOption(t){var e=n(t);o.merge(this.option,t,!0),this.doInit(e);},doInit:function doInit(t){var e=this.option;a.canvasSupported||(e.realtime=!1),r("start","startValue",t,e),r("end","endValue",t,e),this.textStyleModel=this.getModel("textStyle"),this._resetTarget(),this._giveAxisProxies();},_giveAxisProxies:function _giveAxisProxies(){var t=this._axisProxies;this.eachTargetAxis(function(e,i,n,r){var o=this.dependentModels[e.axis][i],a=o.__dzAxisProxy||(o.__dzAxisProxy=new h(e.name,i,this,r));t[e.name+"_"+i]=a;},this);},_resetTarget:function _resetTarget(){var t=this.option,e=this._judgeAutoMode();u(function(e){var i=e.axisIndex;t[i]=l.normalizeToArray(t[i]);},this),"axisIndex"===e?this._autoSetAxisIndex():"orient"===e&&this._autoSetOrient();},_judgeAutoMode:function _judgeAutoMode(){var t=this.option,e=!1;u(function(i){null!=t[i.axisIndex]&&(e=!0);},this);var i=t.orient;return null==i&&e?"orient":e?void 0:(null==i&&(t.orient="horizontal"),"axisIndex");},_autoSetAxisIndex:function _autoSetAxisIndex(){var t=!0,e=this.get("orient",!0),i=this.option;if(t){var n="vertical"===e?{dim:"y",axisIndex:"yAxisIndex",axis:"yAxis"}:{dim:"x",axisIndex:"xAxisIndex",axis:"xAxis"};this.dependentModels[n.axis].length&&(i[n.axisIndex]=[0],t=!1);}t&&u(function(e){if(t){var n=[],r=this.dependentModels[e.axis];if(r.length&&!n.length)for(var o=0,a=r.length;a>o;o++){"category"===r[o].get("type")&&n.push(o);}i[e.axisIndex]=n,n.length&&(t=!1);}},this),t&&this.ecModel.eachSeries(function(t){this._isSeriesHasAllAxesTypeOf(t,"value")&&u(function(e){var n=i[e.axisIndex],r=t.get(e.axisIndex);o.indexOf(n,r)<0&&n.push(r);});},this);},_autoSetOrient:function _autoSetOrient(){var t;this.eachTargetAxis(function(e){!t&&(t=e.name);},this),this.option.orient="y"===t?"vertical":"horizontal";},_isSeriesHasAllAxesTypeOf:function _isSeriesHasAllAxesTypeOf(t,e){var i=!0;return u(function(n){var r=t.get(n.axisIndex),o=this.dependentModels[n.axis][r];o&&o.get("type")===e||(i=!1);},this),i;},getFirstTargetAxisModel:function getFirstTargetAxisModel(){var t;return u(function(e){if(null==t){var i=this.get(e.axisIndex);i.length&&(t=this.dependentModels[e.axis][i[0]]);}},this),t;},eachTargetAxis:function eachTargetAxis(t,e){var i=this.ecModel;u(function(n){c(this.get(n.axisIndex),function(r){t.call(e,n,r,this,i);},this);},this);},getAxisProxy:function getAxisProxy(t,e){return this._axisProxies[t+"_"+e];},setRawRange:function setRawRange(t){c(["start","end","startValue","endValue"],function(e){this.option[e]=t[e];},this);},getPercentRange:function getPercentRange(){var t=this.findRepresentativeAxisProxy();return t?t.getDataPercentWindow():void 0;},getValueRange:function getValueRange(t,e){if(null!=t||null!=e)return this.getAxisProxy(t,e).getDataValueWindow();var i=this.findRepresentativeAxisProxy();return i?i.getDataValueWindow():void 0;},findRepresentativeAxisProxy:function findRepresentativeAxisProxy(){var t=this._axisProxies;for(var e in t){if(t.hasOwnProperty(e)&&t[e].hostedBy(this))return t[e];}for(var e in t){if(t.hasOwnProperty(e)&&!t[e].hostedBy(this))return t[e];}}});t.exports=d;},function(t,e,i){var n=i(54);t.exports=n.extend({type:"dataZoom",render:function render(t,e,i,n){this.dataZoomModel=t,this.ecModel=e,this.api=i;},getTargetInfo:function getTargetInfo(){function t(t,e,i,n){for(var r,o=0;o<i.length;o++){if(i[o].model===t){r=i[o];break;}}r||i.push(r={model:t,axisModels:[],coordIndex:n}),r.axisModels.push(e);}var e=this.dataZoomModel,i=this.ecModel,n=[],r=[],o=[];return e.eachTargetAxis(function(e,a){var s=i.getComponent(e.axis,a);if(s){o.push(s);var l=s.get("gridIndex"),h=s.get("polarIndex");if(null!=l){var c=i.getComponent("grid",l);t(c,s,n,l);}else if(null!=h){var c=i.getComponent("polar",h);t(c,s,r,h);}}},this),{cartesians:n,polars:r,axisModels:o};}});},function(t,e,i){var n=i(1),r=i(20),o=r.parseClassType,a=0,s={},l="_";s.getUID=function(t){return [t||"",a++,Math.random()].join(l);},s.enableSubTypeDefaulter=function(t){var e={};return t.registerSubTypeDefaulter=function(t,i){t=o(t),e[t.main]=i;},t.determineSubType=function(i,n){var r=n.type;if(!r){var a=o(i).main;t.hasSubTypes(i)&&e[a]&&(r=e[a](n));}return r;},t;},s.enableTopologicalTravel=function(t,e){function i(t){var i={},a=[];return n.each(t,function(s){var l=r(i,s),h=l.originalDeps=e(s),c=o(h,t);l.entryCount=c.length,0===l.entryCount&&a.push(s),n.each(c,function(t){n.indexOf(l.predecessor,t)<0&&l.predecessor.push(t);var e=r(i,t);n.indexOf(e.successor,t)<0&&e.successor.push(s);});}),{graph:i,noEntryList:a};}function r(t,e){return t[e]||(t[e]={predecessor:[],successor:[]}),t[e];}function o(t,e){var i=[];return n.each(t,function(t){n.indexOf(e,t)>=0&&i.push(t);}),i;}t.topologicalTravel=function(t,e,r,o){function a(t){h[t].entryCount--,0===h[t].entryCount&&c.push(t);}function s(t){u[t]=!0,a(t);}if(t.length){var l=i(e),h=l.graph,c=l.noEntryList,u={};for(n.each(t,function(t){u[t]=!0;});c.length;){var d=c.pop(),f=h[d],p=!!u[d];p&&(r.call(o,d,f.originalDeps.slice()),delete u[d]),n.each(f.successor,p?s:a);}n.each(u,function(){throw new Error("Circle dependency may exists");});}};},t.exports=s;},function(t,e){var i=1;"undefined"!=typeof window&&(i=Math.max(window.devicePixelRatio||1,1));var n={debugMode:0,devicePixelRatio:i};t.exports=n;},function(t,e,i){function n(t,e){var i=t[1]-t[0],n=e,r=i/n/2;t[0]+=r,t[1]-=r;}var r=i(4),o=r.linearMap,a=i(1),s=[0,1],l=function l(t,e,i){this.dim=t,this.scale=e,this._extent=i||[0,0],this.inverse=!1,this.onBand=!1;};l.prototype={constructor:l,contain:function contain(t){var e=this._extent,i=Math.min(e[0],e[1]),n=Math.max(e[0],e[1]);return t>=i&&n>=t;},containData:function containData(t){return this.contain(this.dataToCoord(t));},getExtent:function getExtent(){var t=this._extent.slice();return t;},getPixelPrecision:function getPixelPrecision(t){return r.getPixelPrecision(t||this.scale.getExtent(),this._extent);},setExtent:function setExtent(t,e){var i=this._extent;i[0]=t,i[1]=e;},dataToCoord:function dataToCoord(t,e){var i=this._extent,r=this.scale;return t=r.normalize(t),this.onBand&&"ordinal"===r.type&&(i=i.slice(),n(i,r.count())),o(t,s,i,e);},coordToData:function coordToData(t,e){var i=this._extent,r=this.scale;this.onBand&&"ordinal"===r.type&&(i=i.slice(),n(i,r.count()));var a=o(t,i,s,e);return this.scale.scale(a);},getTicksCoords:function getTicksCoords(){if(this.onBand){for(var t=this.getBands(),e=[],i=0;i<t.length;i++){e.push(t[i][0]);}return t[i-1]&&e.push(t[i-1][1]),e;}return a.map(this.scale.getTicks(),this.dataToCoord,this);},getLabelsCoords:function getLabelsCoords(){if(this.onBand){for(var t,e=this.getBands(),i=[],n=0;n<e.length;n++){t=e[n],i.push((t[0]+t[1])/2);}return i;}return a.map(this.scale.getTicks(),this.dataToCoord,this);},getBands:function getBands(){for(var t=this.getExtent(),e=[],i=this.scale.count(),n=t[0],r=t[1],o=r-n,a=0;i>a;a++){e.push([o*a/i+n,o*(a+1)/i+n]);}return e;},getBandWidth:function getBandWidth(){var t=this._extent,e=this.scale.getExtent(),i=e[1]-e[0]+(this.onBand?1:0);0===i&&(i=1);var n=Math.abs(t[1]-t[0]);return Math.abs(n)/i;}},t.exports=l;},function(t,e){t.exports=function(t,e,i,n,r){n.eachRawSeriesByType(t,function(t){var r=t.getData(),o=t.get("symbol")||e,a=t.get("symbolSize");r.setVisual({legendSymbol:i||o,symbol:o,symbolSize:a}),n.isSeriesFiltered(t)||("function"==typeof a&&r.each(function(e){var i=t.getRawValue(e),n=t.getDataParams(e);r.setItemVisual(e,"symbolSize",a(i,n));}),r.each(function(t){var e=r.getItemModel(t),i=e.get("symbol",!0),n=e.get("symbolSize",!0);null!=i&&r.setItemVisual(t,"symbol",i),null!=n&&r.setItemVisual(t,"symbolSize",n);}));});};},function(t,e,i){var n=i(42);t.exports=function(){if(0!==n.debugMode)if(1==n.debugMode)for(var t in arguments){throw new Error(arguments[t]);}else if(n.debugMode>1)for(var t in arguments){console.log(arguments[t]);}};},function(t,e,i){function n(t){r.call(this,t);}var r=i(35),o=i(8),a=i(1),s=i(60),l=i(140),h=new l(50);n.prototype={constructor:n,type:"image",brush:function brush(t){var e,i=this.style,n=i.image;if(e="string"==typeof n?this._image:n,!e&&n){var r=h.get(n);if(!r)return e=new Image(),e.onload=function(){e.onload=null;for(var t=0;t<r.pending.length;t++){r.pending[t].dirty();}},r={image:e,pending:[this]},e.src=n,h.put(n,r),void (this._image=e);if(e=r.image,this._image=e,!e.width||!e.height)return void r.pending.push(this);}if(e){var o=i.width||e.width,a=i.height||e.height,l=i.x||0,c=i.y||0;if(!e.width||!e.height)return;if(t.save(),i.bind(t),this.setTransform(t),i.r&&(t.beginPath(),s.buildPath(t,i),t.clip()),i.sWidth&&i.sHeight){var u=i.sx||0,d=i.sy||0;t.drawImage(e,u,d,i.sWidth,i.sHeight,l,c,o,a);}else if(i.sx&&i.sy){var u=i.sx,d=i.sy,f=o-u,p=a-d;t.drawImage(e,u,d,f,p,l,c,o,a);}else t.drawImage(e,l,c,o,a);null==i.width&&(i.width=o),null==i.height&&(i.height=a),null!=i.text&&this.drawRectText(t,this.getBoundingRect()),t.restore();}},getBoundingRect:function getBoundingRect(){var t=this.style;return this._rect||(this._rect=new o(t.x||0,t.y||0,t.width||0,t.height||0)),this._rect;}},a.inherits(n,r),t.exports=n;},function(t,e,i){function n(t){return a.isArray(t)||(t=[+t,+t]),t;}function r(t,e){l.Group.call(this),this.updateData(t,e);}function o(t,e){this.parent.drift(t,e);}var a=i(1),s=i(24),l=i(3),h=i(4),c=r.prototype;c._createSymbol=function(t,e,i){this.removeAll();var r=e.hostModel,a=e.getItemVisual(i,"color"),h=s.createSymbol(t,-.5,-.5,1,1,a);h.attr({style:{strokeNoScale:!0},z2:100,culling:!0,scale:[0,0]}),h.drift=o;var c=n(e.getItemVisual(i,"symbolSize"));l.initProps(h,{scale:c},r),this._symbolType=t,this.add(h);},c.stopSymbolAnimation=function(t){this.childAt(0).stopAnimation(t);},c.getScale=function(){return this.childAt(0).scale;},c.highlight=function(){this.childAt(0).trigger("emphasis");},c.downplay=function(){this.childAt(0).trigger("normal");},c.setZ=function(t,e){var i=this.childAt(0);i.zlevel=t,i.z=e;},c.setDraggable=function(t){var e=this.childAt(0);e.draggable=t,e.cursor=t?"move":"pointer";},c.updateData=function(t,e){var i=t.getItemVisual(e,"symbol")||"circle",r=t.hostModel,o=n(t.getItemVisual(e,"symbolSize"));if(i!==this._symbolType)this._createSymbol(i,t,e);else {var a=this.childAt(0);l.updateProps(a,{scale:o},r);}this._updateCommon(t,e,o),this._seriesModel=r;};var u=["itemStyle","normal"],d=["itemStyle","emphasis"],f=["label","normal"],p=["label","emphasis"];c._updateCommon=function(t,e,i){var r=this.childAt(0),o=t.hostModel,s=t.getItemModel(e),c=s.getModel(u),g=t.getItemVisual(e,"color"),m=r.style,v=s.getModel(d).getItemStyle();r.rotation=s.getShallow("symbolRotate")*Math.PI/180||0;var y=s.getShallow("symbolOffset");if(y){var x=r.position;x[0]=h.parsePercent(y[0],i[0]),x[1]=h.parsePercent(y[1],i[1]);}r.setColor(g),a.extend(m,c.getItemStyle(["color"]));var _=t.getItemVisual(e,"opacity");null!=_&&(m.opacity=_);for(var b,w=s.getModel(f),M=s.getModel(p),S=t.dimensions.slice(),A=S.pop();"ordinal"===(b=t.getDimensionInfo(A).type)||"time"===b;){A=S.pop();}w.get("show")?(l.setText(m,w,g),m.text=a.retrieve(o.getFormattedLabel(e,"normal"),t.get(A,e))):m.text="",M.getShallow("show")?(l.setText(v,M,g),v.text=a.retrieve(o.getFormattedLabel(e,"emphasis"),t.get(A,e))):v.text="";var T=n(t.getItemVisual(e,"symbolSize"));if(r.off("mouseover").off("mouseout").off("emphasis").off("normal"),l.setHoverStyle(r,v),s.getShallow("hoverAnimation")){var C=function C(){var t=T[1]/T[0];this.animateTo({scale:[Math.max(1.1*T[0],T[0]+3),Math.max(1.1*T[1],T[1]+3*t)]},400,"elasticOut");},I=function I(){this.animateTo({scale:T},400,"elasticOut");};r.on("mouseover",C).on("mouseout",I).on("emphasis",C).on("normal",I);}},c.fadeOut=function(t){var e=this.childAt(0);e.style.text="",l.updateProps(e,{scale:[0,0]},this._seriesModel,t);},a.inherits(r,l.Group),t.exports=r;},function(t,e,i){function n(t){var e={componentType:t.mainType};return e[t.mainType+"Index"]=t.componentIndex,e;}function r(t,e,i){var n,r,o=c(e-t.rotation);return u(o)?(r=i>0?"top":"bottom",n="center"):u(o-d)?(r=i>0?"bottom":"top",n="center"):(r="middle",n=o>0&&d>o?i>0?"right":"left":i>0?"left":"right"),{rotation:o,textAlign:n,verticalAlign:r};}function o(t,e,i){var n,r,o=c(-t.rotation),a=i[0]>i[1],s="start"===e&&!a||"start"!==e&&a;return u(o-d/2)?(r=s?"bottom":"top",n="center"):u(o-1.5*d)?(r=s?"top":"bottom",n="center"):(r="middle",n=1.5*d>o&&o>d/2?s?"left":"right":s?"right":"left"),{rotation:o,textAlign:n,verticalAlign:r};}var a=i(1),s=i(3),l=i(12),h=i(4),c=h.remRadian,u=h.isRadianAroundZero,d=Math.PI,f=function f(t,e){this.opt=e,this.axisModel=t,a.defaults(e,{labelOffset:0,nameDirection:1,tickDirection:1,labelDirection:1,silent:!0}),this.group=new s.Group({position:e.position.slice(),rotation:e.rotation});};f.prototype={constructor:f,hasBuilder:function hasBuilder(t){return !!p[t];},add:function add(t){p[t].call(this);},getGroup:function getGroup(){return this.group;}};var p={axisLine:function axisLine(){var t=this.opt,e=this.axisModel;if(e.get("axisLine.show")){var i=this.axisModel.axis.getExtent();this.group.add(new s.Line({shape:{x1:i[0],y1:0,x2:i[1],y2:0},style:a.extend({lineCap:"round"},e.getModel("axisLine.lineStyle").getLineStyle()),strokeContainThreshold:t.strokeContainThreshold,silent:!!t.axisLineSilent,z2:1}));}},axisTick:function axisTick(){var t=this.axisModel;if(t.get("axisTick.show")){for(var e=t.axis,i=t.getModel("axisTick"),n=this.opt,r=i.getModel("lineStyle"),o=i.get("length"),a=m(i,n.labelInterval),l=e.getTicksCoords(),h=[],c=0;c<l.length;c++){if(!g(e,c,a)){var u=l[c];h.push(new s.Line(s.subPixelOptimizeLine({shape:{x1:u,y1:0,x2:u,y2:n.tickDirection*o},style:{lineWidth:r.get("width")},silent:!0})));}}this.group.add(s.mergePath(h,{style:r.getLineStyle(),z2:2,silent:!0}));}},axisLabel:function axisLabel(){function t(t,e){var i=t&&t.getBoundingRect().clone(),n=e&&e.getBoundingRect().clone();return i&&n?(i.applyTransform(t.getLocalTransform()),n.applyTransform(e.getLocalTransform()),i.intersect(n)):void 0;}var e=this.axisModel;if(e.get("axisLabel.show")){var i=this.opt,o=e.axis,a=e.getModel("axisLabel"),h=a.getModel("textStyle"),c=a.get("margin"),u=o.scale.getTicks(),f=e.getFormattedLabels(),p=i.labelRotation;null==p&&(p=a.get("rotate")||0),p=p*d/180;for(var m=r(i,p,i.labelDirection),v=e.get("data"),y=[],x=e.get("silent"),_=0;_<u.length;_++){if(!g(o,_,i.labelInterval)){var b=h;v&&v[_]&&v[_].textStyle&&(b=new l(v[_].textStyle,h,e.ecModel));var w=b.getTextColor(),M=o.dataToCoord(u[_]),S=[M,i.labelOffset+i.labelDirection*c],A=o.scale.getLabel(u[_]),T=new s.Text({style:{text:f[_],textAlign:b.get("align",!0)||m.textAlign,textVerticalAlign:b.get("baseline",!0)||m.verticalAlign,textFont:b.getFont(),fill:"function"==typeof w?w(A):w},position:S,rotation:m.rotation,silent:x,z2:10});T.eventData=n(e),T.eventData.targetType="axisLabel",T.eventData.value=A,y.push(T),this.group.add(T);}}if("category"!==o.type){if(e.getMin?e.getMin():e.get("min")){var C=y[0],I=y[1];t(C,I)&&(C.ignore=!0);}if(e.getMax?e.getMax():e.get("max")){var k=y[y.length-1],D=y[y.length-2];t(D,k)&&(k.ignore=!0);}}}},axisName:function axisName(){var t=this.opt,e=this.axisModel,i=this.opt.axisName;if(null==i&&(i=e.get("name")),i){var a,l=e.get("nameLocation"),h=t.nameDirection,c=e.getModel("nameTextStyle"),u=e.get("nameGap")||0,d=this.axisModel.axis.getExtent(),f=d[0]>d[1]?-1:1,p=["start"===l?d[0]-f*u:"end"===l?d[1]+f*u:(d[0]+d[1])/2,"middle"===l?t.labelOffset+h*u:0];a="middle"===l?r(t,t.rotation,h):o(t,l,d);var g=new s.Text({style:{text:i,textFont:c.getFont(),fill:c.getTextColor()||e.get("axisLine.lineStyle.color"),textAlign:a.textAlign,textVerticalAlign:a.verticalAlign},position:p,rotation:a.rotation,silent:e.get("silent"),z2:1});g.eventData=n(e),g.eventData.targetType="axisName",g.eventData.name=i,this.group.add(g);}}},g=f.ifIgnoreOnTick=function(t,e,i){var n,r=t.scale;return "ordinal"===r.type&&("function"==typeof i?(n=r.getTicks()[e],!i(n,r.getLabel(n))):e%(i+1));},m=f.getInterval=function(t,e){var i=t.get("interval");return null!=i&&"auto"!=i||(i=e),i;};t.exports=f;},function(t,e,i){function n(t){return a.isObject(t)&&null!=t.value?t.value:t;}function r(){return "category"===this.get("type")&&a.map(this.get("data"),n);}function o(){return s.getFormattedLabels(this.axis,this.get("axisLabel.formatter"));}var a=i(1),s=i(23);t.exports={getFormattedLabels:o,getCategories:r};},function(t,e,i){"use strict";function n(t,e){return e.type||(e.data?"category":"value");}var r=i(10),o=i(1),a=i(61),s=r.extend({type:"cartesian2dAxis",axis:null,init:function init(){s.superApply(this,"init",arguments),this._resetRange();},mergeOption:function mergeOption(){s.superApply(this,"mergeOption",arguments),this._resetRange();},restoreData:function restoreData(){s.superApply(this,"restoreData",arguments),this._resetRange();},setRange:function setRange(t,e){this.option.rangeStart=t,this.option.rangeEnd=e;},getMin:function getMin(){var t=this.option;return null!=t.rangeStart?t.rangeStart:t.min;},getMax:function getMax(){var t=this.option;return null!=t.rangeEnd?t.rangeEnd:t.max;},getNeedCrossZero:function getNeedCrossZero(){var t=this.option;return null!=t.rangeStart||null!=t.rangeEnd?!1:!t.scale;},_resetRange:function _resetRange(){this.option.rangeStart=this.option.rangeEnd=null;}});o.merge(s.prototype,i(49));var l={gridIndex:0};a("x",s,n,l),a("y",s,n,l),t.exports=s;},function(t,e,i){function n(t,e,i){return i.getComponent("grid",t.get("gridIndex"))===e;}function r(t){var e,i=t.model,n=i.getFormattedLabels(),r=1,o=n.length;o>40&&(r=Math.ceil(o/40));for(var a=0;o>a;a+=r){if(!t.isLabelIgnored(a)){var s=i.getTextRect(n[a]);e?e.union(s):e=s;}}return e;}function o(t,e,i){this._coordsMap={},this._coordsList=[],this._axesMap={},this._axesList=[],this._initCartesian(t,e,i),this._model=t;}function a(t,e){var i=t.getExtent(),n=i[0]+i[1];t.toGlobalCoord="x"===t.dim?function(t){return t+e;}:function(t){return n-t+e;},t.toLocalCoord="x"===t.dim?function(t){return t-e;}:function(t){return n-t+e;};}var s=i(11),l=i(23),h=i(1),c=i(107),u=i(105),d=h.each,f=l.ifAxisCrossZero,p=l.niceScaleExtent;i(108);var g=o.prototype;g.type="grid",g.getRect=function(){return this._rect;},g.update=function(t,e){function i(t){var e=n[t];for(var i in e){var r=e[i];if(r&&("category"===r.type||!f(r)))return !0;}return !1;}var n=this._axesMap;this._updateScale(t,this._model),d(n.x,function(t){p(t,t.model);}),d(n.y,function(t){p(t,t.model);}),d(n.x,function(t){i("y")&&(t.onZero=!1);}),d(n.y,function(t){i("x")&&(t.onZero=!1);}),this.resize(this._model,e);},g.resize=function(t,e){function i(){d(o,function(t){var e=t.isHorizontal(),i=e?[0,n.width]:[0,n.height],r=t.inverse?1:0;t.setExtent(i[r],i[1-r]),a(t,e?n.x:n.y);});}var n=s.getLayoutRect(t.getBoxLayoutParams(),{width:e.getWidth(),height:e.getHeight()});this._rect=n;var o=this._axesList;i(),t.get("containLabel")&&(d(o,function(t){if(!t.model.get("axisLabel.inside")){var e=r(t);if(e){var i=t.isHorizontal()?"height":"width",o=t.model.get("axisLabel.margin");n[i]-=e[i]+o,"top"===t.position?n.y+=e.height+o:"left"===t.position&&(n.x+=e.width+o);}}}),i());},g.getAxis=function(t,e){var i=this._axesMap[t];if(null!=i){if(null==e)for(var n in i){return i[n];}return i[e];}},g.getCartesian=function(t,e){var i="x"+t+"y"+e;return this._coordsMap[i];},g._initCartesian=function(t,e,i){function r(i){return function(r,h){if(n(r,t,e)){var c=r.get("position");"x"===i?("top"!==c&&"bottom"!==c&&(c="bottom"),o[c]&&(c="top"===c?"bottom":"top")):("left"!==c&&"right"!==c&&(c="left"),o[c]&&(c="left"===c?"right":"left")),o[c]=!0;var d=new u(i,l.createScaleByModel(r),[0,0],r.get("type"),c),f="category"===d.type;d.onBand=f&&r.get("boundaryGap"),d.inverse=r.get("inverse"),d.onZero=r.get("axisLine.onZero"),r.axis=d,d.model=r,d.index=h,this._axesList.push(d),a[i][h]=d,s[i]++;}};}var o={left:!1,right:!1,top:!1,bottom:!1},a={x:{},y:{}},s={x:0,y:0};return e.eachComponent("xAxis",r("x"),this),e.eachComponent("yAxis",r("y"),this),s.x&&s.y?(this._axesMap=a,void d(a.x,function(t,e){d(a.y,function(i,n){var r="x"+e+"y"+n,o=new c(r);o.grid=this,this._coordsMap[r]=o,this._coordsList.push(o),o.addAxis(t),o.addAxis(i);},this);},this)):(this._axesMap={},void (this._axesList=[]));},g._updateScale=function(t,e){function i(t,e,i){d(i.coordDimToDataDim(e.dim),function(i){e.scale.unionExtent(t.getDataExtent(i,"ordinal"!==e.scale.type));});}h.each(this._axesList,function(t){t.scale.setExtent(1/0,-(1/0));}),t.eachSeries(function(r){if("cartesian2d"===r.get("coordinateSystem")){var o=r.get("xAxisIndex"),a=r.get("yAxisIndex"),s=t.getComponent("xAxis",o),l=t.getComponent("yAxis",a);if(!n(s,e,t)||!n(l,e,t))return;var h=this.getCartesian(o,a),c=r.getData(),u=h.getAxis("x"),d=h.getAxis("y");"list"===c.type&&(i(c,u,r),i(c,d,r));}},this);},o.create=function(t,e){var i=[];return t.eachComponent("grid",function(n,r){var a=new o(n,t,e);a.name="grid_"+r,a.resize(n,e),n.coordinateSystem=a,i.push(a);}),t.eachSeries(function(e){if("cartesian2d"===e.get("coordinateSystem")){var n=e.get("xAxisIndex"),r=t.getComponent("xAxis",n),o=i[r.get("gridIndex")];e.coordinateSystem=o.getCartesian(n,e.get("yAxisIndex"));}}),i;},o.dimensions=c.prototype.dimensions,i(28).register("cartesian2d",o),t.exports=o;},function(t,e){"use strict";function i(t){return t;}function n(t,e,n,r){this._old=t,this._new=e,this._oldKeyGetter=n||i,this._newKeyGetter=r||i;}function r(t,e,i){for(var n=0;n<t.length;n++){var r=i(t[n]),o=e[r];null==o?e[r]=n:(o.length||(e[r]=o=[o]),o.push(n));}}n.prototype={constructor:n,add:function add(t){return this._add=t,this;},update:function update(t){return this._update=t,this;},remove:function remove(t){return this._remove=t,this;},execute:function execute(){var t,e=this._old,i=this._new,n=this._oldKeyGetter,o=this._newKeyGetter,a={},s={};for(r(e,a,n),r(i,s,o),t=0;t<e.length;t++){var l=n(e[t]),h=s[l];if(null!=h){var c=h.length;c?(1===c&&(s[l]=null),h=h.unshift()):s[l]=null,this._update&&this._update(h,t);}else this._remove&&this._remove(t);}for(var l in s){if(s.hasOwnProperty(l)){var h=s[l];if(null==h)continue;if(h.length)for(var t=0,c=h.length;c>t;t++){this._add&&this._add(h[t]);}else this._add&&this._add(h);}}}},t.exports=n;},function(t,e){t.exports=function(t,e,i){e.eachSeriesByType(t,function(t){var e=t.getData(),i=t.coordinateSystem,n=i.dimensions;e.each(n,function(t,n,r){var o;o=isNaN(t)||isNaN(n)?[NaN,NaN]:i.dataToPoint([t,n]),e.setItemLayout(r,o);},!0);});};},function(t,e,i){var n=i(26),r=i(41),o=i(20),a=function a(){this.group=new n(),this.uid=r.getUID("viewComponent");};a.prototype={constructor:a,init:function init(t,e){},render:function render(t,e,i,n){},dispose:function dispose(){}};var s=a.prototype;s.updateView=s.updateLayout=s.updateVisual=function(t,e,i,n){},o.enableClassExtend(a),o.enableClassManagement(a,{registerWhenExtend:!0}),t.exports=a;},function(t,e,i){"use strict";var n=i(58),r=i(21),o=i(77),a=i(154),s=i(1),l=function l(t){o.call(this,t),r.call(this,t),a.call(this,t),this.id=t.id||n();};l.prototype={type:"element",name:"",__zr:null,ignore:!1,clipPath:null,drift:function drift(t,e){switch(this.draggable){case "horizontal":e=0;break;case "vertical":t=0;}var i=this.transform;i||(i=this.transform=[1,0,0,1,0,0]),i[4]+=t,i[5]+=e,this.decomposeTransform(),this.dirty();},beforeUpdate:function beforeUpdate(){},afterUpdate:function afterUpdate(){},update:function update(){this.updateTransform();},traverse:function traverse(t,e){},attrKV:function attrKV(t,e){if("position"===t||"scale"===t||"origin"===t){if(e){var i=this[t];i||(i=this[t]=[]),i[0]=e[0],i[1]=e[1];}}else this[t]=e;},hide:function hide(){this.ignore=!0,this.__zr&&this.__zr.refresh();},show:function show(){this.ignore=!1,this.__zr&&this.__zr.refresh();},attr:function attr(t,e){if("string"==typeof t)this.attrKV(t,e);else if(s.isObject(t))for(var i in t){t.hasOwnProperty(i)&&this.attrKV(i,t[i]);}return this.dirty(),this;},setClipPath:function setClipPath(t){var e=this.__zr;e&&t.addSelfToZr(e),this.clipPath&&this.clipPath!==t&&this.removeClipPath(),this.clipPath=t,t.__zr=e,t.__clipTarget=this,this.dirty();},removeClipPath:function removeClipPath(){var t=this.clipPath;t&&(t.__zr&&t.removeSelfFromZr(t.__zr),t.__zr=null,t.__clipTarget=null,this.clipPath=null,this.dirty());},addSelfToZr:function addSelfToZr(t){this.__zr=t;var e=this.animators;if(e)for(var i=0;i<e.length;i++){t.animation.addAnimator(e[i]);}this.clipPath&&this.clipPath.addSelfToZr(t);},removeSelfFromZr:function removeSelfFromZr(t){this.__zr=null;var e=this.animators;if(e)for(var i=0;i<e.length;i++){t.animation.removeAnimator(e[i]);}this.clipPath&&this.clipPath.removeSelfFromZr(t);}},s.mixin(l,a),s.mixin(l,o),s.mixin(l,r),t.exports=l;},function(t,e,i){function n(t,e){return t[e];}function r(t,e,i){t[e]=i;}function o(t,e,i){return (e-t)*i+t;}function a(t,e,i){return i>.5?e:t;}function s(t,e,i,n,r){var a=t.length;if(1==r)for(var s=0;a>s;s++){n[s]=o(t[s],e[s],i);}else for(var l=t[0].length,s=0;a>s;s++){for(var h=0;l>h;h++){n[s][h]=o(t[s][h],e[s][h],i);}}}function l(t,e,i){var n=t.length,r=e.length;if(n!==r){var o=n>r;if(o)t.length=r;else for(var a=n;r>a;a++){t.push(1===i?e[a]:x.call(e[a]));}}}function h(t,e,i){if(t===e)return !0;var n=t.length;if(n!==e.length)return !1;if(1===i){for(var r=0;n>r;r++){if(t[r]!==e[r])return !1;}}else for(var o=t[0].length,r=0;n>r;r++){for(var a=0;o>a;a++){if(t[r][a]!==e[r][a])return !1;}}return !0;}function c(t,e,i,n,r,o,a,s,l){var h=t.length;if(1==l)for(var c=0;h>c;c++){s[c]=u(t[c],e[c],i[c],n[c],r,o,a);}else for(var d=t[0].length,c=0;h>c;c++){for(var f=0;d>f;f++){s[c][f]=u(t[c][f],e[c][f],i[c][f],n[c][f],r,o,a);}}}function u(t,e,i,n,r,o,a){var s=.5*(i-t),l=.5*(n-e);return (2*(e-i)+s+l)*a+(-3*(e-i)-2*s-l)*o+s*r+e;}function d(t){if(y(t)){var e=t.length;if(y(t[0])){for(var i=[],n=0;e>n;n++){i.push(x.call(t[n]));}return i;}return x.call(t);}return t;}function f(t){return t[0]=Math.floor(t[0]),t[1]=Math.floor(t[1]),t[2]=Math.floor(t[2]),"rgba("+t.join(",")+")";}function p(t,e,i,n,r){var d=t._getter,p=t._setter,v="spline"===e,x=n.length;if(x){var _,b=n[0].value,w=y(b),M=!1,S=!1,A=w&&y(b[0])?2:1;n.sort(function(t,e){return t.time-e.time;}),_=n[x-1].time;for(var T=[],C=[],I=n[0].value,k=!0,D=0;x>D;D++){T.push(n[D].time/_);var L=n[D].value;if(w&&h(L,I,A)||!w&&L===I||(k=!1),I=L,"string"==typeof L){var P=m.parse(L);P?(L=P,M=!0):S=!0;}C.push(L);}if(!k){if(w){for(var O=C[x-1],D=0;x-1>D;D++){l(C[D],O,A);}l(d(t._target,r),O,A);}var z,E,R,B,N,V,F=0,G=0;if(M)var W=[0,0,0,0];var Z=function Z(t,e){var i;if(G>e){for(z=Math.min(F+1,x-1),i=z;i>=0&&!(T[i]<=e);i--){}i=Math.min(i,x-2);}else {for(i=F;x>i&&!(T[i]>e);i++){}i=Math.min(i-1,x-2);}F=i,G=e;var n=T[i+1]-T[i];if(0!==n)if(E=(e-T[i])/n,v){if(B=C[i],R=C[0===i?i:i-1],N=C[i>x-2?x-1:i+1],V=C[i>x-3?x-1:i+2],w)c(R,B,N,V,E,E*E,E*E*E,d(t,r),A);else {var l;if(M)l=c(R,B,N,V,E,E*E,E*E*E,W,1),l=f(W);else {if(S)return a(B,N,E);l=u(R,B,N,V,E,E*E,E*E*E);}p(t,r,l);}}else if(w)s(C[i],C[i+1],E,d(t,r),A);else {var l;if(M)s(C[i],C[i+1],E,W,1),l=f(W);else {if(S)return a(C[i],C[i+1],E);l=o(C[i],C[i+1],E);}p(t,r,l);}},H=new g({target:t._target,life:_,loop:t._loop,delay:t._delay,onframe:Z,ondestroy:i});return e&&"spline"!==e&&(H.easing=e),H;}}}var g=i(132),m=i(22),v=i(1),y=v.isArrayLike,x=Array.prototype.slice,_=function _(t,e,i,o){this._tracks={},this._target=t,this._loop=e||!1,this._getter=i||n,this._setter=o||r,this._clipCount=0,this._delay=0,this._doneList=[],this._onframeList=[],this._clipList=[];};_.prototype={when:function when(t,e){var i=this._tracks;for(var n in e){if(!i[n]){i[n]=[];var r=this._getter(this._target,n);if(null==r)continue;0!==t&&i[n].push({time:0,value:d(r)});}i[n].push({time:t,value:e[n]});}return this;},during:function during(t){return this._onframeList.push(t),this;},_doneCallback:function _doneCallback(){this._tracks={},this._clipList.length=0;for(var t=this._doneList,e=t.length,i=0;e>i;i++){t[i].call(this);}},start:function start(t){var e,i=this,n=0,r=function r(){n--,n||i._doneCallback();};for(var o in this._tracks){var a=p(this,t,r,this._tracks[o],o);a&&(this._clipList.push(a),n++,this.animation&&this.animation.addClip(a),e=a);}if(e){var s=e.onframe;e.onframe=function(t,e){s(t,e);for(var n=0;n<i._onframeList.length;n++){i._onframeList[n](t,e);}};}return n||this._doneCallback(),this;},stop:function stop(t){for(var e=this._clipList,i=this.animation,n=0;n<e.length;n++){var r=e[n];t&&r.onframe(this._target,1),i&&i.removeClip(r);}e.length=0;},delay:function delay(t){return this._delay=t,this;},done:function done(t){return t&&this._doneList.push(t),this;},getClips:function getClips(){return this._clipList;}},t.exports=_;},function(t,e){var i=2*Math.PI;t.exports={normalizeRadian:function normalizeRadian(t){return t%=i,0>t&&(t+=i),t;}};},function(t,e){var i=2311;t.exports=function(){return "zr_"+i++;};},function(t,e,i){var n=i(144),r=i(143);t.exports={buildPath:function buildPath(t,e,i){var o=e.points,a=e.smooth;if(o&&o.length>=2){if(a&&"spline"!==a){var s=r(o,a,i,e.smoothConstraint);t.moveTo(o[0][0],o[0][1]);for(var l=o.length,h=0;(i?l:l-1)>h;h++){var c=s[2*h],u=s[2*h+1],d=o[(h+1)%l];t.bezierCurveTo(c[0],c[1],u[0],u[1],d[0],d[1]);}}else {"spline"===a&&(o=n(o,i)),t.moveTo(o[0][0],o[0][1]);for(var h=1,f=o.length;f>h;h++){t.lineTo(o[h][0],o[h][1]);}}i&&t.closePath();}}};},function(t,e){t.exports={buildPath:function buildPath(t,e){var i,n,r,o,a=e.x,s=e.y,l=e.width,h=e.height,c=e.r;0>l&&(a+=l,l=-l),0>h&&(s+=h,h=-h),"number"==typeof c?i=n=r=o=c:c instanceof Array?1===c.length?i=n=r=o=c[0]:2===c.length?(i=r=c[0],n=o=c[1]):3===c.length?(i=c[0],n=o=c[1],r=c[2]):(i=c[0],n=c[1],r=c[2],o=c[3]):i=n=r=o=0;var u;i+n>l&&(u=i+n,i*=l/u,n*=l/u),r+o>l&&(u=r+o,r*=l/u,o*=l/u),n+r>h&&(u=n+r,n*=h/u,r*=h/u),i+o>h&&(u=i+o,i*=h/u,o*=h/u),t.moveTo(a+i,s),t.lineTo(a+l-n,s),0!==n&&t.quadraticCurveTo(a+l,s,a+l,s+n),t.lineTo(a+l,s+h-r),0!==r&&t.quadraticCurveTo(a+l,s+h,a+l-r,s+h),t.lineTo(a+o,s+h),0!==o&&t.quadraticCurveTo(a,s+h,a,s+h-o),t.lineTo(a,s+i),0!==i&&t.quadraticCurveTo(a,s,a+i,s);}};},function(t,e,i){var n=i(72),r=i(1),o=i(10),a=i(11),s=["value","category","time","log"];t.exports=function(t,e,i,l){r.each(s,function(o){e.extend({type:t+"Axis."+o,mergeDefaultAndTheme:function mergeDefaultAndTheme(e,n){var s=this.layoutMode,l=s?a.getLayoutParams(e):{},h=n.getTheme();r.merge(e,h.get(o+"Axis")),r.merge(e,this.getDefaultOption()),e.type=i(t,e),s&&a.mergeLayoutParam(e,l,s);},defaultOption:r.mergeAll([{},n[o+"Axis"],l],!0)});}),o.registerSubTypeDefaulter(t+"Axis",r.curry(i,t));};},function(t,e){t.exports=function(t,e){var i=e.findComponents({mainType:"legend"});i&&i.length&&e.eachSeriesByType(t,function(t){var e=t.getData();e.filterSelf(function(t){for(var n=e.getName(t),r=0;r<i.length;r++){if(!i[r].isSelected(n))return !1;}return !0;},this);},this);};},function(t,e){t.exports=function(t,e){var i=e.get("color"),n=0;e.eachRawSeriesByType(t,function(t){var r=t.get("color",!0),o=t.getRawData();if(!e.isSeriesFiltered(t)){var a=t.getData();a.each(function(t){var e=a.getItemModel(t),s=a.getRawIndex(t),l=a.getItemVisual(t,"color",!0);if(l)o.setItemVisual(s,"color",l);else {var h=r?r[s%r.length]:i[(s+n)%i.length],c=e.get("itemStyle.normal.color")||h;o.setItemVisual(s,"color",c),a.setItemVisual(t,"color",c);}});}n+=o.count();});};},function(t,e,i){var n=i(5),r=i(18),o={},a=Math.min,s=Math.max,l=Math.sin,h=Math.cos,c=n.create(),u=n.create(),d=n.create(),f=2*Math.PI;o.fromPoints=function(t,e,i){if(0!==t.length){var n,r=t[0],o=r[0],l=r[0],h=r[1],c=r[1];for(n=1;n<t.length;n++){r=t[n],o=a(o,r[0]),l=s(l,r[0]),h=a(h,r[1]),c=s(c,r[1]);}e[0]=o,e[1]=h,i[0]=l,i[1]=c;}},o.fromLine=function(t,e,i,n,r,o){r[0]=a(t,i),r[1]=a(e,n),o[0]=s(t,i),o[1]=s(e,n);};var p=[],g=[];o.fromCubic=function(t,e,i,n,o,l,h,c,u,d){var f,m=r.cubicExtrema,v=r.cubicAt,y=m(t,i,o,h,p);for(u[0]=1/0,u[1]=1/0,d[0]=-(1/0),d[1]=-(1/0),f=0;y>f;f++){var x=v(t,i,o,h,p[f]);u[0]=a(x,u[0]),d[0]=s(x,d[0]);}for(y=m(e,n,l,c,g),f=0;y>f;f++){var _=v(e,n,l,c,g[f]);u[1]=a(_,u[1]),d[1]=s(_,d[1]);}u[0]=a(t,u[0]),d[0]=s(t,d[0]),u[0]=a(h,u[0]),d[0]=s(h,d[0]),u[1]=a(e,u[1]),d[1]=s(e,d[1]),u[1]=a(c,u[1]),d[1]=s(c,d[1]);},o.fromQuadratic=function(t,e,i,n,o,l,h,c){var u=r.quadraticExtremum,d=r.quadraticAt,f=s(a(u(t,i,o),1),0),p=s(a(u(e,n,l),1),0),g=d(t,i,o,f),m=d(e,n,l,p);h[0]=a(t,o,g),h[1]=a(e,l,m),c[0]=s(t,o,g),c[1]=s(e,l,m);},o.fromArc=function(t,e,i,r,o,a,s,p,g){var m=n.min,v=n.max,y=Math.abs(o-a);if(1e-4>y%f&&y>1e-4)return p[0]=t-i,p[1]=e-r,g[0]=t+i,void (g[1]=e+r);if(c[0]=h(o)*i+t,c[1]=l(o)*r+e,u[0]=h(a)*i+t,u[1]=l(a)*r+e,m(p,c,u),v(g,c,u),o%=f,0>o&&(o+=f),a%=f,0>a&&(a+=f),o>a&&!s?a+=f:a>o&&s&&(o+=f),s){var x=a;a=o,o=x;}for(var _=0;a>_;_+=Math.PI/2){_>o&&(d[0]=h(_)*i+t,d[1]=l(_)*r+e,m(p,d,p),v(g,d,g));}},t.exports=o;},function(t,e,i){var n=i(35),r=i(1),o=i(17),a=function a(t){n.call(this,t);};a.prototype={constructor:a,type:"text",brush:function brush(t){var e=this.style,i=e.x||0,n=e.y||0,r=e.text,a=e.fill,s=e.stroke;if(null!=r&&(r+=""),r){if(t.save(),this.style.bind(t),this.setTransform(t),a&&(t.fillStyle=a),s&&(t.strokeStyle=s),t.font=e.textFont||e.font,t.textAlign=e.textAlign,e.textVerticalAlign){var l=o.getBoundingRect(r,t.font,e.textAlign,"top");switch(t.textBaseline="top",e.textVerticalAlign){case "middle":n-=l.height/2;break;case "bottom":n-=l.height;}}else t.textBaseline=e.textBaseline;for(var h=o.measureText("国",t.font).width,c=r.split("\n"),u=0;u<c.length;u++){a&&t.fillText(c[u],i,n),s&&t.strokeText(c[u],i,n),n+=h;}t.restore();}},getBoundingRect:function getBoundingRect(){if(!this._rect){var t=this.style,e=t.textVerticalAlign,i=o.getBoundingRect(t.text+"",t.textFont||t.font,t.textAlign,e?"top":t.textBaseline);switch(e){case "middle":i.y-=i.height/2;break;case "bottom":i.y-=i.height;}i.x+=t.x||0,i.y+=t.y||0,this._rect=i;}return this._rect;}},r.inherits(a,n),t.exports=a;},function(t,e,i){function n(t,e){return "string"==typeof t?t.lastIndexOf("%")>=0?parseFloat(t)/100*e:parseFloat(t):t;}function r(t,e){t.transform(e[0],e[1],e[2],e[3],e[4],e[5]);}var o=i(17),a=i(8),s=new a(),l=function l(){};l.prototype={constructor:l,drawRectText:function drawRectText(t,e,i){var a=this.style,l=a.text;if(null!=l&&(l+=""),l){var h,c,u=a.textPosition,d=a.textDistance,f=a.textAlign,p=a.textFont||a.font,g=a.textBaseline,m=a.textVerticalAlign;i=i||o.getBoundingRect(l,p,f,g);var v=this.transform,y=this.invTransform;if(v&&(s.copy(e),s.applyTransform(v),e=s,r(t,y)),u instanceof Array)h=e.x+n(u[0],e.width),c=e.y+n(u[1],e.height),f=f||"left",g=g||"top";else {var x=o.adjustTextPositionOnRect(u,e,i,d);h=x.x,c=x.y,f=f||x.textAlign,g=g||x.textBaseline;}if(t.textAlign=f,m){switch(m){case "middle":c-=i.height/2;break;case "bottom":c-=i.height;}t.textBaseline="top";}else t.textBaseline=g;var _=a.textFill,b=a.textStroke;_&&(t.fillStyle=_),b&&(t.strokeStyle=b),t.font=p,t.shadowColor=a.textShadowColor,t.shadowBlur=a.textShadowBlur,t.shadowOffsetX=a.textShadowOffsetX,t.shadowOffsetY=a.textShadowOffsetY;for(var w=l.split("\n"),M=0;M<w.length;M++){_&&t.fillText(w[M],h,c),b&&t.strokeText(w[M],h,c),c+=i.lineHeight;}v&&r(t,v);}}},t.exports=l;},function(t,e,i){function n(t){delete u[t];} /*!
		 * ZRender, a high performance 2d drawing library.
		 *
		 * Copyright (c) 2013, Baidu Inc.
		 * All rights reserved.
		 *
		 * LICENSE
		 * https://github.com/ecomfe/zrender/blob/master/LICENSE.txt
		 */var r=i(58),o=i(15),a=i(127),s=i(130),l=i(131),h=!o.canvasSupported,c={canvas:i(129)},u={},d={};d.version="3.0.8",d.init=function(t,e){var i=new f(r(),t,e);return u[i.id]=i,i;},d.dispose=function(t){if(t)t.dispose();else {for(var e in u){u[e].dispose();}u={};}return d;},d.getInstance=function(t){return u[t];},d.registerPainter=function(t,e){c[t]=e;};var f=function f(t,e,i){i=i||{},this.dom=e,this.id=t;var n=this,r=new s(),u=i.renderer;if(h){if(!c.vml)throw new Error("You need to require 'zrender/vml/vml' to support IE8");u="vml";}else u&&c[u]||(u="canvas");var d=new c[u](e,r,i);this.storage=r,this.painter=d,o.node||(this.handler=new a(d.getViewportRoot(),r,d)),this.animation=new l({stage:{update:function update(){n._needsRefresh&&n.refreshImmediately();}}}),this.animation.start(),this._needsRefresh;var f=r.delFromMap,p=r.addToMap;r.delFromMap=function(t){var e=r.get(t);f.call(r,t),e&&e.removeSelfFromZr(n);},r.addToMap=function(t){p.call(r,t),t.addSelfToZr(n);};};f.prototype={constructor:f,getId:function getId(){return this.id;},add:function add(t){this.storage.addRoot(t),this._needsRefresh=!0;},remove:function remove(t){this.storage.delRoot(t),this._needsRefresh=!0;},configLayer:function configLayer(t,e){this.painter.configLayer(t,e),this._needsRefresh=!0;},refreshImmediately:function refreshImmediately(){this._needsRefresh=!1,this.painter.refresh(),this._needsRefresh=!1;},refresh:function refresh(){this._needsRefresh=!0;},resize:function resize(){this.painter.resize(),this.handler&&this.handler.resize();},clearAnimation:function clearAnimation(){this.animation.clear();},getWidth:function getWidth(){return this.painter.getWidth();},getHeight:function getHeight(){return this.painter.getHeight();},toDataURL:function toDataURL(t,e,i){return this.painter.toDataURL(t,e,i);},pathToImage:function pathToImage(t,e,i){var n=r();return this.painter.pathToImage(n,t,e,i);},setDefaultCursorStyle:function setDefaultCursorStyle(t){this.handler.setDefaultCursorStyle(t);},on:function on(t,e,i){this.handler&&this.handler.on(t,e,i);},off:function off(t,e){this.handler&&this.handler.off(t,e);},trigger:function trigger(t,e){this.handler&&this.handler.trigger(t,e);},clear:function clear(){this.storage.delRoot(),this.painter.clear();},dispose:function dispose(){this.animation.stop(),this.clear(),this.storage.dispose(),this.painter.dispose(),this.handler&&this.handler.dispose(),this.animation=this.storage=this.painter=this.handler=null,n(this.id);}},t.exports=d;},function(t,e,i){var n=i(2),r=i(1);t.exports=function(t,e){r.each(e,function(e){e.update="updateView",n.registerAction(e,function(i,n){var r={};return n.eachComponent({mainType:"series",subType:t,query:i},function(t){t[e.method]&&t[e.method](i.name);var n=t.getData();n.each(function(e){var i=n.getName(e);r[i]=t.isSelected(i)||!1;});}),{name:i.name,selected:r};});});};},function(t,e,i){var n=i(1);t.exports={updateSelectedMap:function updateSelectedMap(){var t=this.option;this._dataOptMap=n.reduce(t.data,function(t,e){return t[e.name]=e,t;},{});},select:function select(t){var e=this._dataOptMap,i=e[t],r=this.get("selectedMode");"single"===r&&n.each(e,function(t){t.selected=!1;}),i&&(i.selected=!0);},unSelect:function unSelect(t){var e=this._dataOptMap[t];e&&(e.selected=!1);},toggleSelected:function toggleSelected(t){var e=this._dataOptMap[t];return null!=e?(this[e.selected?"unSelect":"select"](t),e.selected):void 0;},isSelected:function isSelected(t){var e=this._dataOptMap[t];return e&&e.selected;}};},function(t,e,i){function n(t){if(!t.target||!t.target.draggable){var e=t.offsetX,i=t.offsetY,n=this.rect;n&&n.contain(e,i)&&(this._x=e,this._y=i,this._dragging=!0);}}function r(t){if(this._dragging&&(d.stop(t.event),"pinch"!==t.gestureEvent)){if(f.isTaken("globalPan",this._zr))return;var e=t.offsetX,i=t.offsetY,n=e-this._x,r=i-this._y;this._x=e,this._y=i;var o=this.target;if(o){var a=o.position;a[0]+=n,a[1]+=r,o.dirty();}d.stop(t.event),this.trigger("pan",n,r);}}function o(t){this._dragging=!1;}function a(t){d.stop(t.event);var e=t.wheelDelta>0?1.1:1/1.1;l.call(this,t,e,t.offsetX,t.offsetY);}function s(t){if(!f.isTaken("globalPan",this._zr)){d.stop(t.event);var e=t.pinchScale>1?1.1:1/1.1;l.call(this,t,e,t.pinchX,t.pinchY);}}function l(t,e,i,n){var r=this.rect;if(r&&r.contain(i,n)){var o=this.target,a=this.zoomLimit;if(o){var s=o.position,l=o.scale,h=this.zoom=this.zoom||1;h*=e,a&&(h=Math.max(Math.min(a.max,h),a.min));var c=h/this.zoom;this.zoom=h,s[0]-=(i-s[0])*(c-1),s[1]-=(n-s[1])*(c-1),l[0]*=c,l[1]*=c,o.dirty();}this.trigger("zoom",e,i,n);}}function h(t,e,i){this.target=e,this.rect=i,this.zoomLimit,this.zoom,this._zr=t;var l=u.bind,h=l(n,this),d=l(r,this),f=l(o,this),p=l(a,this),g=l(s,this);c.call(this),this.enable=function(e){this.disable(),null==e&&(e=!0),e!==!0&&"move"!==e&&"pan"!==e||(t.on("mousedown",h),t.on("mousemove",d),t.on("mouseup",f)),e!==!0&&"scale"!==e&&"zoom"!==e||(t.on("mousewheel",p),t.on("pinch",g));},this.disable=function(){t.off("mousedown",h),t.off("mousemove",d),t.off("mouseup",f),t.off("mousewheel",p),t.off("pinch",g);},this.dispose=this.disable,this.isDragging=function(){return this._dragging;},this.isPinching=function(){return this._pinching;};}var c=i(21),u=i(1),d=i(33),f=i(102);u.mixin(h,c),t.exports=h;},function(t,e){t.exports=function(t,e,i,n,r){function o(t,e,i){var n=e.length?e.slice():[e,e];return e[0]>e[1]&&n.reverse(),0>t&&n[0]+t<i[0]&&(t=i[0]-n[0]),t>0&&n[1]+t>i[1]&&(t=i[1]-n[1]),t;}return t?("rigid"===n?(t=o(t,e,i),e[0]+=t,e[1]+=t):(t=o(t,e[r],i),e[r]+=t,"push"===n&&e[0]>e[1]&&(e[1-r]=e[r])),e):e;};},function(t,e,i){var n=i(1),r={show:!0,zlevel:0,z:0,inverse:!1,name:"",nameLocation:"end",nameTextStyle:{},nameGap:15,silent:!0,axisLine:{show:!0,onZero:!0,lineStyle:{color:"#333",width:1,type:"solid"}},axisTick:{show:!0,inside:!1,length:5,lineStyle:{color:"#333",width:1}},axisLabel:{show:!0,inside:!1,rotate:0,margin:8,textStyle:{color:"#333",fontSize:12}},splitLine:{show:!0,lineStyle:{color:["#ccc"],width:1,type:"solid"}},splitArea:{show:!1,areaStyle:{color:["rgba(250,250,250,0.3)","rgba(200,200,200,0.3)"]}}},o=n.merge({boundaryGap:!0,axisTick:{interval:"auto"},axisLabel:{interval:"auto"}},r),a=n.defaults({boundaryGap:[0,0],splitNumber:5},r),s=n.defaults({scale:!0,min:"dataMin",max:"dataMax"},a),l=n.defaults({},a);l.scale=!0,t.exports={categoryAxis:o,valueAxis:a,timeAxis:s,logAxis:l};},,function(t,e,i){var n=i(16);t.exports=function(t,e,i){function r(t){var r=[e,"normal","color"],o=i.get("color"),a=t.getData(),s=t.get(r)||o[t.seriesIndex%o.length];a.setVisual("color",s),i.isSeriesFiltered(t)||("function"!=typeof s||s instanceof n||a.each(function(e){a.setItemVisual(e,"color",s(t.getDataParams(e)));}),a.each(function(t){var e=a.getItemModel(t),i=e.get(r,!0);null!=i&&a.setItemVisual(t,"color",i);}));}t?i.eachSeriesByType(t,r):i.eachSeries(r);};},function(t,e){t.exports=function(t,e,i,n,r,o){if(o>e&&o>n||e>o&&n>o)return 0;if(n===e)return 0;var a=e>n?1:-1,s=(o-e)/(n-e),l=s*(i-t)+t;return l>r?a:0;};},function(t,e,i){"use strict";var n=i(1),r=i(16),o=function o(t,e,i,n,_o){this.x=null==t?0:t,this.y=null==e?0:e,this.x2=null==i?1:i,this.y2=null==n?0:n,r.call(this,_o);};o.prototype={constructor:o,type:"linear",updateCanvasGradient:function updateCanvasGradient(t,e){for(var i=t.getBoundingRect(),n=this.x*i.width+i.x,r=this.x2*i.width+i.x,o=this.y*i.height+i.y,a=this.y2*i.height+i.y,s=e.createLinearGradient(n,o,r,a),l=this.colorStops,h=0;h<l.length;h++){s.addColorStop(l[h].offset,l[h].color);}this.canvasGradient=s;}},n.inherits(o,r),t.exports=o;},function(t,e,i){"use strict";function n(t){return t>s||-s>t;}var r=i(19),o=i(5),a=r.identity,s=5e-5,l=function l(t){t=t||{},t.position||(this.position=[0,0]),null==t.rotation&&(this.rotation=0),t.scale||(this.scale=[1,1]),this.origin=this.origin||null;},h=l.prototype;h.transform=null,h.needLocalTransform=function(){return n(this.rotation)||n(this.position[0])||n(this.position[1])||n(this.scale[0]-1)||n(this.scale[1]-1);},h.updateTransform=function(){var t=this.parent,e=t&&t.transform,i=this.needLocalTransform(),n=this.transform;return i||e?(n=n||r.create(),i?this.getLocalTransform(n):a(n),e&&(i?r.mul(n,t.transform,n):r.copy(n,t.transform)),this.transform=n,this.invTransform=this.invTransform||r.create(),void r.invert(this.invTransform,n)):void (n&&a(n));},h.getLocalTransform=function(t){t=t||[],a(t);var e=this.origin,i=this.scale,n=this.rotation,o=this.position;return e&&(t[4]-=e[0],t[5]-=e[1]),r.scale(t,t,i),n&&r.rotate(t,t,n),e&&(t[4]+=e[0],t[5]+=e[1]),t[4]+=o[0],t[5]+=o[1],t;},h.setTransform=function(t){var e=this.transform;e&&t.transform(e[0],e[1],e[2],e[3],e[4],e[5]);};var c=[];h.decomposeTransform=function(){if(this.transform){var t=this.parent,e=this.transform;t&&t.transform&&(r.mul(c,t.invTransform,e),e=c);var i=e[0]*e[0]+e[1]*e[1],o=e[2]*e[2]+e[3]*e[3],a=this.position,s=this.scale;n(i-1)&&(i=Math.sqrt(i)),n(o-1)&&(o=Math.sqrt(o)),e[0]<0&&(i=-i),e[3]<0&&(o=-o),a[0]=e[4],a[1]=e[5],s[0]=i,s[1]=o,this.rotation=Math.atan2(-e[1]/o,e[0]/i);}},h.transformCoordToLocal=function(t,e){var i=[t,e],n=this.invTransform;return n&&o.applyTransform(i,i,n),i;},h.transformCoordToGlobal=function(t,e){var i=[t,e],n=this.transform;return n&&o.applyTransform(i,i,n),i;},t.exports=l;},function(t,e,i){"use strict";function n(t){r.each(o,function(e){this[e]=r.bind(t[e],t);},this);}var r=i(1),o=["getDom","getZr","getWidth","getHeight","dispatchAction","on","off","getDataURL","getConnectedDataURL","getModel","getOption"];t.exports=n;},function(t,e,i){var n=i(1);i(51),i(80),i(81);var r=i(110),o=i(2);o.registerLayout(n.curry(r,"bar")),o.registerVisualCoding("chart",function(t){t.eachSeriesByType("bar",function(t){var e=t.getData();e.setVisual("legendSymbol","roundRect");});}),i(34);},function(t,e,i){"use strict";var n=i(13),r=i(36);t.exports=n.extend({type:"series.bar",dependencies:["grid","polar"],getInitialData:function getInitialData(t,e){return r(t.data,this,e);},getMarkerPosition:function getMarkerPosition(t){var e=this.coordinateSystem;if(e){var i=e.dataToPoint(t),n=this.getData(),r=n.getLayout("offset"),o=n.getLayout("size"),a=e.getBaseAxis().isHorizontal()?0:1;return i[a]+=r+o/2,i;}return [NaN,NaN];},defaultOption:{zlevel:0,z:2,coordinateSystem:"cartesian2d",legendHoverLink:!0,xAxisIndex:0,yAxisIndex:0,barMinHeight:0,itemStyle:{normal:{barBorderColor:"#fff",barBorderWidth:0},emphasis:{barBorderColor:"#fff",barBorderWidth:0}}}});},function(t,e,i){"use strict";function n(t,e){var i=t.width>0?1:-1,n=t.height>0?1:-1;e=Math.min(e,Math.abs(t.width),Math.abs(t.height)),t.x+=i*e/2,t.y+=n*e/2,t.width-=i*e,t.height-=n*e;}var r=i(1),o=i(3);r.extend(i(12).prototype,i(82)),t.exports=i(2).extendChartView({type:"bar",render:function render(t,e,i){var n=t.get("coordinateSystem");return "cartesian2d"===n&&this._renderOnCartesian(t,e,i),this.group;},_renderOnCartesian:function _renderOnCartesian(t,e,i){function a(e,i){var a=l.getItemLayout(e),s=l.getItemModel(e).get(p)||0;n(a,s);var h=new o.Rect({shape:r.extend({},a)});if(f){var c=h.shape,u=d?"height":"width",g={};c[u]=0,g[u]=a[u],o[i?"updateProps":"initProps"](h,{shape:g},t);}return h;}var s=this.group,l=t.getData(),h=this._data,c=t.coordinateSystem,u=c.getBaseAxis(),d=u.isHorizontal(),f=t.get("animation"),p=["itemStyle","normal","barBorderWidth"];l.diff(h).add(function(t){if(l.hasValue(t)){var e=a(t);l.setItemGraphicEl(t,e),s.add(e);}}).update(function(e,i){var r=h.getItemGraphicEl(i);if(!l.hasValue(e))return void s.remove(r);r||(r=a(e,!0));var c=l.getItemLayout(e),u=l.getItemModel(e).get(p)||0;n(c,u),o.updateProps(r,{shape:c},t),l.setItemGraphicEl(e,r),s.add(r);}).remove(function(e){var i=h.getItemGraphicEl(e);i&&(i.style.text="",o.updateProps(i,{shape:{width:0}},t,function(){s.remove(i);}));}).execute(),this._updateStyle(t,l,d),this._data=l;},_updateStyle:function _updateStyle(t,e,i){function n(t,e,i,n,r){o.setText(t,e,i),t.text=n,"outside"===t.textPosition&&(t.textPosition=r);}e.eachItemGraphicEl(function(a,s){var l=e.getItemModel(s),h=e.getItemVisual(s,"color"),c=e.getItemVisual(s,"opacity"),u=e.getItemLayout(s),d=l.getModel("itemStyle.normal"),f=l.getModel("itemStyle.emphasis").getBarItemStyle();a.setShape("r",d.get("barBorderRadius")||0),a.setStyle(r.defaults({fill:h,opacity:c},d.getBarItemStyle()));var p=i?u.height>0?"bottom":"top":u.width>0?"left":"right",g=l.getModel("label.normal"),m=l.getModel("label.emphasis"),v=a.style;g.get("show")?n(v,g,h,r.retrieve(t.getFormattedLabel(s,"normal"),t.getRawValue(s)),p):v.text="",m.get("show")?n(f,m,h,r.retrieve(t.getFormattedLabel(s,"emphasis"),t.getRawValue(s)),p):f.text="",o.setHoverStyle(a,f);});},remove:function remove(t,e){var i=this.group;t.get("animation")?this._data&&this._data.eachItemGraphicEl(function(e){e.style.text="",o.updateProps(e,{shape:{width:0}},t,function(){i.remove(e);});}):i.removeAll();}});},function(t,e,i){t.exports={getBarItemStyle:i(30)([["fill","color"],["stroke","borderColor"],["lineWidth","borderWidth"],["stroke","barBorderColor"],["lineWidth","barBorderWidth"],["opacity"],["shadowBlur"],["shadowOffsetX"],["shadowOffsetY"],["shadowColor"]])};},function(t,e,i){function n(t,e,i){var n=e.getItemVisual(i,"color"),r=e.getItemVisual(i,"symbol"),o=e.getItemVisual(i,"symbolSize");if("none"!==r){p.isArray(o)||(o=[o,o]);var a=c.createSymbol(r,-o[0]/2,-o[1]/2,o[0],o[1],n);return a.name=t,a;}}function r(t){var e=new d({name:"line",style:{strokeNoScale:!0}});return o(e.shape,t),e;}function o(t,e){var i=e[0],n=e[1],r=e[2];t.x1=i[0],t.y1=i[1],t.x2=n[0],t.y2=n[1],t.percent=1,r&&(t.cpx1=r[0],t.cpy1=r[1]);}function a(t){return "symbol"===t.type&&"arrow"===t.shape.symbolType;}function s(){var t=this,e=t.childOfName("line");if(this.__dirty||e.__dirty){var i=t.childOfName("fromSymbol"),n=t.childOfName("toSymbol"),r=t.childOfName("label"),o=e.pointAt(0),s=e.pointAt(e.shape.percent),h=u.sub([],s,o);u.normalize(h,h),i&&(i.attr("position",o),a(i)&&i.attr("rotation",l(s,o))),n&&(n.attr("position",s),a(n)&&n.attr("rotation",l(o,s))),r.attr("position",s);var c,d,f;"end"===r.__position?(c=[5*h[0]+s[0],5*h[1]+s[1]],d=h[0]>.8?"left":h[0]<-.8?"right":"center",f=h[1]>.8?"top":h[1]<-.8?"bottom":"middle"):(c=[5*-h[0]+o[0],5*-h[1]+o[1]],d=h[0]>.8?"right":h[0]<-.8?"left":"center",f=h[1]>.8?"bottom":h[1]<-.8?"top":"middle"),r.attr({style:{textVerticalAlign:r.__verticalAlign||f,textAlign:r.__textAlign||d},position:c});}}function l(t,e){return -Math.PI/2-Math.atan2(e[1]-t[1],e[0]-t[0]);}function h(t,e,i,n){f.Group.call(this),this._createLine(t,e,i,n);}var c=i(24),u=i(5),d=i(162),f=i(3),p=i(1),g=i(4),m=h.prototype;m.beforeUpdate=s,m._createLine=function(t,e,i,o){var a=t.hostModel,s=t.getItemLayout(o),l=r(s);l.shape.percent=0,f.initProps(l,{shape:{percent:1}},a),this.add(l);var h=new f.Text({name:"label"});if(this.add(h),e){var c=n("fromSymbol",e,o);this.add(c),this._fromSymbolType=e.getItemVisual(o,"symbol");}if(i){var u=n("toSymbol",i,o);this.add(u),this._toSymbolType=i.getItemVisual(o,"symbol");}this._updateCommonStl(t,e,i,o);},m.updateData=function(t,e,i,r){var a=t.hostModel,s=this.childOfName("line"),l=t.getItemLayout(r),h={shape:{}};if(o(h.shape,l),f.updateProps(s,h,a),e){var c=e.getItemVisual(r,"symbol");if(this._fromSymbolType!==c){var u=n("fromSymbol",e,r);this.remove(this.childOfName("fromSymbol")),this.add(u);}this._fromSymbolType=c;}if(i){var d=i.getItemVisual(r,"symbol");if(d!==this._toSymbolType){var p=n("toSymbol",i,r);this.remove(this.childOfName("toSymbol")),this.add(p);}this._toSymbolType=d;}this._updateCommonStl(t,e,i,r);},m._updateCommonStl=function(t,e,i,n){var r=t.hostModel,o=this.childOfName("line"),a=t.getItemModel(n),s=a.getModel("label.normal"),l=s.getModel("textStyle"),h=a.getModel("label.emphasis"),c=h.getModel("textStyle"),u=g.round(r.getRawValue(n));isNaN(u)&&(u=t.getName(n)),o.setStyle(p.extend({stroke:t.getItemVisual(n,"color")},a.getModel("lineStyle.normal").getLineStyle()));var d=this.childOfName("label");d.setStyle({text:s.get("show")?p.retrieve(r.getFormattedLabel(n,"normal"),u):"",textFont:l.getFont(),fill:l.getTextColor()||t.getItemVisual(n,"color")}),d.hoverStyle={text:h.get("show")?p.retrieve(r.getFormattedLabel(n,"emphasis"),u):"",textFont:c.getFont(),fill:c.getTextColor()},d.__textAlign=l.get("align"),d.__verticalAlign=l.get("baseline"),d.__position=s.get("position"),f.setHoverStyle(this,a.getModel("lineStyle.emphasis").getLineStyle());},m.updateLayout=function(t,e,i,n){var r=t.getItemLayout(n),a=this.childOfName("line");o(a.shape,r),a.dirty(!0);},p.inherits(h,f.Group),t.exports=h;},function(t,e,i){function n(t){this._ctor=t||o,this.group=new r.Group();}var r=i(3),o=i(83),a=n.prototype;a.updateData=function(t,e,i){var n=this._lineData,r=this.group,o=this._ctor;t.diff(n).add(function(n){var a=new o(t,e,i,n);t.setItemGraphicEl(n,a),r.add(a);}).update(function(o,a){var s=n.getItemGraphicEl(a);s.updateData(t,e,i,o),t.setItemGraphicEl(o,s),r.add(s);}).remove(function(t){r.remove(n.getItemGraphicEl(t));}).execute(),this._lineData=t,this._fromData=e,this._toData=i;},a.updateLayout=function(){var t=this._lineData;t.eachItemGraphicEl(function(e,i){e.updateLayout(t,this._fromData,this._toData,i);},this);},a.remove=function(){this.group.removeAll();},t.exports=n;},function(t,e,i){var n=i(1),r=i(2);i(86),i(87),r.registerVisualCoding("chart",n.curry(i(44),"line","circle","line")),r.registerLayout(n.curry(i(53),"line")),r.registerProcessor("statistic",n.curry(i(122),"line")),i(34);},function(t,e,i){"use strict";var n=i(36),r=i(13);t.exports=r.extend({type:"series.line",dependencies:["grid","polar"],getInitialData:function getInitialData(t,e){return n(t.data,this,e);},defaultOption:{zlevel:0,z:2,coordinateSystem:"cartesian2d",legendHoverLink:!0,hoverAnimation:!0,xAxisIndex:0,yAxisIndex:0,polarIndex:0,clipOverflow:!0,label:{normal:{position:"top"}},lineStyle:{normal:{width:2,type:"solid"}},symbol:"emptyCircle",symbolSize:4,showSymbol:!0,animationEasing:"linear"}});},function(t,e,i){"use strict";function n(t,e){if(t.length===e.length){for(var i=0;i<t.length;i++){var n=t[i],r=e[i];if(n[0]!==r[0]||n[1]!==r[1])return;}return !0;}}function r(t){return "number"==typeof t?t:t?.3:0;}function o(t){var e=t.getGlobalExtent();if(t.onBand){var i=t.getBandWidth()/2-1,n=e[1]>e[0]?1:-1;e[0]+=n*i,e[1]-=n*i;}return e;}function a(t){return t>=0?1:-1;}function s(t,e){var i=t.getBaseAxis(),n=t.getOtherAxis(i),r=i.onZero?0:n.scale.getExtent()[0],o=n.dim,s="x"===o||"radius"===o?1:0;return e.mapArray([o],function(n,l){for(var h,c=e.stackedOn;c&&a(c.get(o,l))===a(n);){h=c;break;}var u=[];return u[s]=e.get(i.dim,l),u[1-s]=h?h.get(o,l,!0):r,t.dataToPoint(u);},!0);}function l(t,e){return null!=e.dataIndex?e.dataIndex:null!=e.name?t.indexOfName(e.name):void 0;}function h(t,e,i){var n=o(t.getAxis("x")),r=o(t.getAxis("y")),a=t.getBaseAxis().isHorizontal(),s=n[0],l=r[0],h=n[1]-s,c=r[1]-l;i.get("clipOverflow")||(a?(l-=c,c*=3):(s-=h,h*=3));var u=new m.Rect({shape:{x:s,y:l,width:h,height:c}});return e&&(u.shape[a?"width":"height"]=0,m.initProps(u,{shape:{width:h,height:c}},i)),u;}function c(t,e,i){var n=t.getAngleAxis(),r=t.getRadiusAxis(),o=r.getExtent(),a=n.getExtent(),s=Math.PI/180,l=new m.Sector({shape:{cx:t.cx,cy:t.cy,r0:o[0],r:o[1],startAngle:-a[0]*s,endAngle:-a[1]*s,clockwise:n.inverse}});return e&&(l.shape.endAngle=-a[0]*s,m.initProps(l,{shape:{endAngle:-a[1]*s}},i)),l;}function u(t,e,i){return "polar"===t.type?c(t,e,i):h(t,e,i);}var d=i(1),f=i(38),p=i(47),g=i(88),m=i(3),v=i(89),y=i(25);t.exports=y.extend({type:"line",init:function init(){var t=new m.Group(),e=new f();this.group.add(e.group),this._symbolDraw=e,this._lineGroup=t;},render:function render(t,e,i){var o=t.coordinateSystem,a=this.group,l=t.getData(),h=t.getModel("lineStyle.normal"),c=t.getModel("areaStyle.normal"),f=l.mapArray(l.getItemLayout,!0),p="polar"===o.type,g=this._coordSys,m=this._symbolDraw,v=this._polyline,y=this._polygon,x=this._lineGroup,_=t.get("animation"),b=!c.isEmpty(),w=s(o,l),M=t.get("showSymbol"),S=M&&!p&&!t.get("showAllSymbol")&&this._getSymbolIgnoreFunc(l,o),A=this._data;A&&A.eachItemGraphicEl(function(t,e){t.__temp&&(a.remove(t),A.setItemGraphicEl(e,null));}),M||m.remove(),a.add(x),v&&g.type===o.type?(b&&!y?y=this._newPolygon(f,w,o,_):y&&!b&&(x.remove(y),y=this._polygon=null),x.setClipPath(u(o,!1,t)),M&&m.updateData(l,S),l.eachItemGraphicEl(function(t){t.stopAnimation(!0);}),n(this._stackedOnPoints,w)&&n(this._points,f)||(_?this._updateAnimation(l,w,o,i):(v.setShape({points:f}),y&&y.setShape({points:f,stackedOnPoints:w})))):(M&&m.updateData(l,S),v=this._newPolyline(f,o,_),b&&(y=this._newPolygon(f,w,o,_)),x.setClipPath(u(o,!0,t))),v.setStyle(d.defaults(h.getLineStyle(),{stroke:l.getVisual("color"),lineJoin:"bevel"}));var T=t.get("smooth");if(T=r(t.get("smooth")),v.setShape({smooth:T,smoothMonotone:t.get("smoothMonotone")}),y){var C=l.stackedOn,I=0;if(y.style.opacity=.7,y.setStyle(d.defaults(c.getAreaStyle(),{fill:l.getVisual("color"),lineJoin:"bevel"})),C){var k=C.hostModel;I=r(k.get("smooth"));}y.setShape({smooth:T,stackedOnSmooth:I,smoothMonotone:t.get("smoothMonotone")});}this._data=l,this._coordSys=o,this._stackedOnPoints=w,this._points=f;},highlight:function highlight(t,e,i,n){var r=t.getData(),o=l(r,n);if(null!=o&&o>=0){var a=r.getItemGraphicEl(o);if(!a){var s=r.getItemLayout(o);a=new p(r,o,i),a.position=s,a.setZ(t.get("zlevel"),t.get("z")),a.ignore=isNaN(s[0])||isNaN(s[1]),a.__temp=!0,r.setItemGraphicEl(o,a),a.stopSymbolAnimation(!0),this.group.add(a);}a.highlight();}else y.prototype.highlight.call(this,t,e,i,n);},downplay:function downplay(t,e,i,n){var r=t.getData(),o=l(r,n);if(null!=o&&o>=0){var a=r.getItemGraphicEl(o);a&&(a.__temp?(r.setItemGraphicEl(o,null),this.group.remove(a)):a.downplay());}else y.prototype.downplay.call(this,t,e,i,n);},_newPolyline:function _newPolyline(t){var e=this._polyline;return e&&this._lineGroup.remove(e),e=new v.Polyline({shape:{points:t},silent:!0,z2:10}),this._lineGroup.add(e),this._polyline=e,e;},_newPolygon:function _newPolygon(t,e){var i=this._polygon;return i&&this._lineGroup.remove(i),i=new v.Polygon({shape:{points:t,stackedOnPoints:e},silent:!0}),this._lineGroup.add(i),this._polygon=i,i;},_getSymbolIgnoreFunc:function _getSymbolIgnoreFunc(t,e){var i=e.getAxesByScale("ordinal")[0];return i&&i.isLabelIgnored?d.bind(i.isLabelIgnored,i):void 0;},_updateAnimation:function _updateAnimation(t,e,i,n){var r=this._polyline,o=this._polygon,a=t.hostModel,s=g(this._data,t,this._stackedOnPoints,e,this._coordSys,i);r.shape.points=s.current,m.updateProps(r,{shape:{points:s.next}},a),o&&(o.setShape({points:s.current,stackedOnPoints:s.stackedOnCurrent}),m.updateProps(o,{shape:{points:s.next,stackedOnPoints:s.stackedOnNext}},a));for(var l=[],h=s.status,c=0;c<h.length;c++){var u=h[c].cmd;if("="===u){var d=t.getItemGraphicEl(h[c].idx1);d&&l.push({el:d,ptIdx:c});}}r.animators&&r.animators.length&&r.animators[0].during(function(){for(var t=0;t<l.length;t++){var e=l[t].el;e.attr("position",r.shape.points[l[t].ptIdx]);}});},remove:function remove(t){var e=this.group,i=this._data;this._lineGroup.removeAll(),this._symbolDraw.remove(!0),i&&i.eachItemGraphicEl(function(t,n){t.__temp&&(e.remove(t),i.setItemGraphicEl(n,null));}),this._polyline=this._polygon=this._coordSys=this._points=this._stackedOnPoints=this._data=null;}});},function(t,e){function i(t){return t>=0?1:-1;}function n(t,e,n){for(var r,o=t.getBaseAxis(),a=t.getOtherAxis(o),s=o.onZero?0:a.scale.getExtent()[0],l=a.dim,h="x"===l||"radius"===l?1:0,c=e.stackedOn,u=e.get(l,n);c&&i(c.get(l,n))===i(u);){r=c;break;}var d=[];return d[h]=e.get(o.dim,n),d[1-h]=r?r.get(l,n,!0):s,t.dataToPoint(d);}function r(t,e){var i=[];return e.diff(t).add(function(t){i.push({cmd:"+",idx:t});}).update(function(t,e){i.push({cmd:"=",idx:e,idx1:t});}).remove(function(t){i.push({cmd:"-",idx:t});}).execute(),i;}t.exports=function(t,e,i,o,a,s){for(var l=r(t,e),h=[],c=[],u=[],d=[],f=[],p=[],g=[],m=s.dimensions,v=0;v<l.length;v++){var y=l[v],x=!0;switch(y.cmd){case "=":var _=t.getItemLayout(y.idx),b=e.getItemLayout(y.idx1);(isNaN(_[0])||isNaN(_[1]))&&(_=b.slice()),h.push(_),c.push(b),u.push(i[y.idx]),d.push(o[y.idx1]),g.push(e.getRawIndex(y.idx1));break;case "+":var w=y.idx;h.push(a.dataToPoint([e.get(m[0],w,!0),e.get(m[1],w,!0)])),c.push(e.getItemLayout(w).slice()),u.push(n(a,e,w)),d.push(o[w]),g.push(e.getRawIndex(w));break;case "-":var w=y.idx,M=t.getRawIndex(w);M!==w?(h.push(t.getItemLayout(w)),c.push(s.dataToPoint([t.get(m[0],w,!0),t.get(m[1],w,!0)])),u.push(i[w]),d.push(n(s,t,w)),g.push(M)):x=!1;}x&&(f.push(y),p.push(p.length));}p.sort(function(t,e){return g[t]-g[e];});for(var S=[],A=[],T=[],C=[],I=[],v=0;v<p.length;v++){var w=p[v];S[v]=h[w],A[v]=c[w],T[v]=u[w],C[v]=d[w],I[v]=f[w];}return {current:S,next:A,stackedOnCurrent:T,stackedOnNext:C,status:I};};},function(t,e,i){function n(t,e,i,n,r,o,p,g,m,v){for(var y=i,x=0;r>x;x++){var _=e[y];if(y>=n||0>y||isNaN(_[0])||isNaN(_[1]))break;if(y===i)t[o>0?"moveTo":"lineTo"](_[0],_[1]),c(d,_);else if(m>0){var b=y-o,w=y+o,M=.5,S=e[b],A=e[w];if(o>0&&(y===r-1||isNaN(A[0])||isNaN(A[1]))||0>=o&&(0===y||isNaN(A[0])||isNaN(A[1])))c(f,_);else {(isNaN(A[0])||isNaN(A[1]))&&(A=_),a.sub(u,A,S);var T,C;if("x"===v||"y"===v){var I="x"===v?0:1;T=Math.abs(_[I]-S[I]),C=Math.abs(_[I]-A[I]);}else T=a.dist(_,S),C=a.dist(_,A);M=C/(C+T),h(f,_,u,-m*(1-M));}s(d,d,g),l(d,d,p),s(f,f,g),l(f,f,p),t.bezierCurveTo(d[0],d[1],f[0],f[1],_[0],_[1]),h(d,_,u,m*M);}else t.lineTo(_[0],_[1]);y+=o;}return x;}function r(t,e){var i=[1/0,1/0],n=[-(1/0),-(1/0)];if(e)for(var r=0;r<t.length;r++){var o=t[r];o[0]<i[0]&&(i[0]=o[0]),o[1]<i[1]&&(i[1]=o[1]),o[0]>n[0]&&(n[0]=o[0]),o[1]>n[1]&&(n[1]=o[1]);}return {min:e?i:n,max:e?n:i};}var o=i(6),a=i(5),s=a.min,l=a.max,h=a.scaleAndAdd,c=a.copy,u=[],d=[],f=[];t.exports={Polyline:o.extend({type:"ec-polyline",shape:{points:[],smooth:0,smoothConstraint:!0,smoothMonotone:null},style:{fill:null,stroke:"#000"},buildPath:function buildPath(t,e){for(var i=e.points,o=0,a=i.length,s=r(i,e.smoothConstraint);a>o;){o+=n(t,i,o,a,a,1,s.min,s.max,e.smooth,e.smoothMonotone)+1;}}}),Polygon:o.extend({type:"ec-polygon",shape:{points:[],stackedOnPoints:[],smooth:0,stackedOnSmooth:0,smoothConstraint:!0,smoothMonotone:null},buildPath:function buildPath(t,e){for(var i=e.points,o=e.stackedOnPoints,a=0,s=i.length,l=e.smoothMonotone,h=r(i,e.smoothConstraint),c=r(o,e.smoothConstraint);s>a;){var u=n(t,i,a,s,s,1,h.min,h.max,e.smooth,l);n(t,o,a+u-1,s,u,-1,c.min,c.max,e.stackedOnSmooth,l),a+=u+1,t.closePath();}}})};},function(t,e,i){var n=i(1),r=i(2);i(91),i(92),i(68)("pie",[{type:"pieToggleSelect",event:"pieselectchanged",method:"toggleSelected"},{type:"pieSelect",event:"pieselected",method:"select"},{type:"pieUnSelect",event:"pieunselected",method:"unSelect"}]),r.registerVisualCoding("chart",n.curry(i(63),"pie")),r.registerLayout(n.curry(i(94),"pie")),r.registerProcessor("filter",n.curry(i(62),"pie"));},function(t,e,i){"use strict";var n=i(14),r=i(1),o=i(7),a=i(31),s=i(69),l=i(2).extendSeriesModel({type:"series.pie",init:function init(t){l.superApply(this,"init",arguments),this.legendDataProvider=function(){return this._dataBeforeProcessed;},this.updateSelectedMap(),this._defaultLabelLine(t);},mergeOption:function mergeOption(t){l.superCall(this,"mergeOption",t),this.updateSelectedMap();},getInitialData:function getInitialData(t,e){var i=a(["value"],t.data),r=new n(i,this);return r.initData(t.data),r;},getDataParams:function getDataParams(t){var e=this._data,i=l.superCall(this,"getDataParams",t),n=e.getSum("value");return i.percent=n?+(e.get("value",t)/n*100).toFixed(2):0,i.$vars.push("percent"),i;},_defaultLabelLine:function _defaultLabelLine(t){o.defaultEmphasis(t.labelLine,["show"]);var e=t.labelLine.normal,i=t.labelLine.emphasis;e.show=e.show&&t.label.normal.show,i.show=i.show&&t.label.emphasis.show;},defaultOption:{zlevel:0,z:2,legendHoverLink:!0,hoverAnimation:!0,center:["50%","50%"],radius:[0,"75%"],clockwise:!0,startAngle:90,minAngle:0,selectedOffset:10,avoidLabelOverlap:!0,label:{normal:{rotate:!1,show:!0,position:"outer"},emphasis:{}},labelLine:{normal:{show:!0,length:15,length2:15,smooth:!1,lineStyle:{width:1,type:"solid"}}},itemStyle:{normal:{borderColor:"rgba(0,0,0,0)",borderWidth:1},emphasis:{borderColor:"rgba(0,0,0,0)",borderWidth:1}},animationEasing:"cubicOut",data:[]}});r.mixin(l,s),t.exports=l;},function(t,e,i){function n(t,e,i,n){var o=e.getData(),a=this.dataIndex,s=o.getName(a),l=e.get("selectedOffset");n.dispatchAction({type:"pieToggleSelect",from:t,name:s,seriesId:e.id}),o.each(function(t){r(o.getItemGraphicEl(t),o.getItemLayout(t),e.isSelected(o.getName(t)),l,i);});}function r(t,e,i,n,r){var o=(e.startAngle+e.endAngle)/2,a=Math.cos(o),s=Math.sin(o),l=i?n:0,h=[a*l,s*l];r?t.animate().when(200,{position:h}).start("bounceOut"):t.attr("position",h);}function o(t,e){function i(){o.ignore=o.hoverIgnore,a.ignore=a.hoverIgnore;}function n(){o.ignore=o.normalIgnore,a.ignore=a.normalIgnore;}s.Group.call(this);var r=new s.Sector({z2:2}),o=new s.Polyline(),a=new s.Text();this.add(r),this.add(o),this.add(a),this.updateData(t,e,!0),this.on("emphasis",i).on("normal",n).on("mouseover",i).on("mouseout",n);}function a(t,e,i,n,r){var o=n.getModel("textStyle"),a="inside"===r||"inner"===r;return {fill:o.getTextColor()||(a?"#fff":t.getItemVisual(e,"color")),textFont:o.getFont(),text:l.retrieve(t.hostModel.getFormattedLabel(e,i),t.getName(e))};}var s=i(3),l=i(1),h=o.prototype;h.updateData=function(t,e,i){function n(){a.stopAnimation(!0),a.animateTo({shape:{r:u.r+10}},300,"elasticOut");}function o(){a.stopAnimation(!0),a.animateTo({shape:{r:u.r}},300,"elasticOut");}var a=this.childAt(0),h=t.hostModel,c=t.getItemModel(e),u=t.getItemLayout(e),d=l.extend({},u);d.label=null,i?(a.setShape(d),a.shape.endAngle=u.startAngle,s.updateProps(a,{shape:{endAngle:u.endAngle}},h)):s.updateProps(a,{shape:d},h);var f=c.getModel("itemStyle"),p=t.getItemVisual(e,"color");a.setStyle(l.defaults({fill:p},f.getModel("normal").getItemStyle())),a.hoverStyle=f.getModel("emphasis").getItemStyle(),r(this,t.getItemLayout(e),c.get("selected"),h.get("selectedOffset"),h.get("animation")),a.off("mouseover").off("mouseout").off("emphasis").off("normal"),c.get("hoverAnimation")&&a.on("mouseover",n).on("mouseout",o).on("emphasis",n).on("normal",o),this._updateLabel(t,e),s.setHoverStyle(this);},h._updateLabel=function(t,e){var i=this.childAt(1),n=this.childAt(2),r=t.hostModel,o=t.getItemModel(e),l=t.getItemLayout(e),h=l.label,c=t.getItemVisual(e,"color");s.updateProps(i,{shape:{points:h.linePoints||[[h.x,h.y],[h.x,h.y],[h.x,h.y]]}},r),s.updateProps(n,{style:{x:h.x,y:h.y}},r),n.attr({style:{textVerticalAlign:h.verticalAlign,textAlign:h.textAlign,textFont:h.font},rotation:h.rotation,origin:[h.x,h.y],z2:10});var u=o.getModel("label.normal"),d=o.getModel("label.emphasis"),f=o.getModel("labelLine.normal"),p=o.getModel("labelLine.emphasis"),g=u.get("position")||d.get("position");n.setStyle(a(t,e,"normal",u,g)),n.ignore=n.normalIgnore=!u.get("show"),n.hoverIgnore=!d.get("show"),i.ignore=i.normalIgnore=!f.get("show"),i.hoverIgnore=!p.get("show"),i.setStyle({stroke:c}),i.setStyle(f.getModel("lineStyle").getLineStyle()),n.hoverStyle=a(t,e,"emphasis",d,g),i.hoverStyle=p.getModel("lineStyle").getLineStyle();var m=f.get("smooth");m&&m===!0&&(m=.4),i.setShape({smooth:m});},l.inherits(o,s.Group);var c=i(25).extend({type:"pie",init:function init(){var t=new s.Group();this._sectorGroup=t;},render:function render(t,e,i,r){if(!r||r.from!==this.uid){var a=t.getData(),s=this._data,h=this.group,c=e.get("animation"),u=!s,d=l.curry(n,this.uid,t,c,i),f=t.get("selectedMode");if(a.diff(s).add(function(t){var e=new o(a,t);u&&e.eachChild(function(t){t.stopAnimation(!0);}),f&&e.on("click",d),a.setItemGraphicEl(t,e),h.add(e);}).update(function(t,e){var i=s.getItemGraphicEl(e);i.updateData(a,t),i.off("click"),f&&i.on("click",d),h.add(i),a.setItemGraphicEl(t,i);}).remove(function(t){var e=s.getItemGraphicEl(t);h.remove(e);}).execute(),c&&u&&a.count()>0){var p=a.getItemLayout(0),g=Math.max(i.getWidth(),i.getHeight())/2,m=l.bind(h.removeClipPath,h);h.setClipPath(this._createClipPath(p.cx,p.cy,g,p.startAngle,p.clockwise,m,t));}this._data=a;}},_createClipPath:function _createClipPath(t,e,i,n,r,o,a){var l=new s.Sector({shape:{cx:t,cy:e,r0:0,r:i,startAngle:n,endAngle:n,clockwise:r}});return s.initProps(l,{shape:{endAngle:n+(r?1:-1)*Math.PI*2}},a,o),l;}});t.exports=c;},function(t,e,i){"use strict";function n(t,e,i,n,r,o,a){function s(e,i,n,r){for(var o=e;i>o;o++){if(t[o].y+=n,o>e&&i>o+1&&t[o+1].y>t[o].y+t[o].height)return void l(o,n/2);}l(i-1,n/2);}function l(e,i){for(var n=e;n>=0&&(t[n].y-=i,!(n>0&&t[n].y>t[n-1].y+t[n-1].height));n--){}}function h(t,e,i,n,r,o){for(var a=o>0?e?Number.MAX_VALUE:0:e?Number.MAX_VALUE:0,s=0,l=t.length;l>s;s++){if("center"!==t[s].position){var h=Math.abs(t[s].y-n),c=t[s].len,u=t[s].len2,d=r+c>h?Math.sqrt((r+c+u)*(r+c+u)-h*h):Math.abs(t[s].x-i);e&&d>=a&&(d=a-10),!e&&a>=d&&(d=a+10),t[s].x=i+d*o,a=d;}}}t.sort(function(t,e){return t.y-e.y;});for(var c,u=0,d=t.length,f=[],p=[],g=0;d>g;g++){c=t[g].y-u,0>c&&s(g,d,-c,r),u=t[g].y+t[g].height;}0>a-u&&l(d-1,u-a);for(var g=0;d>g;g++){t[g].y>=i?p.push(t[g]):f.push(t[g]);}h(f,!1,e,i,n,r),h(p,!0,e,i,n,r);}function r(t,e,i,r,o,a){for(var s=[],l=[],h=0;h<t.length;h++){t[h].x<e?s.push(t[h]):l.push(t[h]);}n(l,e,i,r,1,o,a),n(s,e,i,r,-1,o,a);for(var h=0;h<t.length;h++){var c=t[h].linePoints;if(c){var u=c[1][0]-c[2][0];t[h].x<e?c[2][0]=t[h].x+3:c[2][0]=t[h].x-3,c[1][1]=c[2][1]=t[h].y,c[1][0]=c[2][0]+u;}}}var o=i(17);t.exports=function(t,e,i,n){var a,s,l=t.getData(),h=[],c=!1;l.each(function(i){var n,r,u,d,f=l.getItemLayout(i),p=l.getItemModel(i),g=p.getModel("label.normal"),m=g.get("position")||p.get("label.emphasis.position"),v=p.getModel("labelLine.normal"),y=v.get("length"),x=v.get("length2"),_=(f.startAngle+f.endAngle)/2,b=Math.cos(_),w=Math.sin(_);a=f.cx,s=f.cy;var M="inside"===m||"inner"===m;if("center"===m)n=f.cx,r=f.cy,d="center";else {var S=(M?(f.r+f.r0)/2*b:f.r*b)+a,A=(M?(f.r+f.r0)/2*w:f.r*w)+s;if(n=S+3*b,r=A+3*w,!M){var T=S+b*(y+e-f.r),C=A+w*(y+e-f.r),I=T+(0>b?-1:1)*x,k=C;n=I+(0>b?-5:5),r=k,u=[[S,A],[T,C],[I,k]];}d=M?"center":b>0?"left":"right";}var D=g.getModel("textStyle").getFont(),L=g.get("rotate")?0>b?-_+Math.PI:-_:0,P=t.getFormattedLabel(i,"normal")||l.getName(i),O=o.getBoundingRect(P,D,d,"top");c=!!L,f.label={x:n,y:r,position:m,height:O.height,len:y,len2:x,linePoints:u,textAlign:d,verticalAlign:"middle",font:D,rotation:L},M||h.push(f.label);}),!c&&t.get("avoidLabelOverlap")&&r(h,a,s,e,i,n);};},function(t,e,i){var n=i(4),r=n.parsePercent,o=i(93),a=i(1),s=2*Math.PI,l=Math.PI/180;t.exports=function(t,e,i){e.eachSeriesByType(t,function(t){var e=t.get("center"),h=t.get("radius");a.isArray(h)||(h=[0,h]),a.isArray(e)||(e=[e,e]);var c=i.getWidth(),u=i.getHeight(),d=Math.min(c,u),f=r(e[0],c),p=r(e[1],u),g=r(h[0],d/2),m=r(h[1],d/2),v=t.getData(),y=-t.get("startAngle")*l,x=t.get("minAngle")*l,_=v.getSum("value"),b=Math.PI/(_||v.count())*2,w=t.get("clockwise"),M=t.get("roseType"),S=v.getDataExtent("value");S[0]=0;var A=s,T=0,C=y,I=w?1:-1;if(v.each("value",function(t,e){var i;i="area"!==M?0===_?b:t*b:s/(v.count()||1),x>i?(i=x,A-=x):T+=t;var r=C+I*i;v.setItemLayout(e,{angle:i,startAngle:C,endAngle:r,clockwise:w,cx:f,cy:p,r0:g,r:M?n.linearMap(t,S,[g,m]):m}),C=r;},!0),s>A)if(.001>=A){var k=s/v.count();v.each(function(t){var e=v.getItemLayout(t);e.startAngle=y+I*t*k,e.endAngle=y+I*(t+1)*k;});}else b=A/T,C=y,v.each("value",function(t,e){var i=v.getItemLayout(e),n=i.angle===x?x:t*b;i.startAngle=C,i.endAngle=C+I*n,C+=n;});o(t,m,c,u);});};},,function(t,e,i){"use strict";i(50),i(97);},function(t,e,i){function n(t,e){function i(t,e){var i=n.getAxis(t);return i.toGlobalCoord(i.dataToCoord(0));}var n=t.coordinateSystem,r=e.axis,o={},a=r.position,s=r.onZero?"onZero":a,l=r.dim,h=n.getRect(),c=[h.x,h.x+h.width,h.y,h.y+h.height],u={x:{top:c[2],bottom:c[3]},y:{left:c[0],right:c[1]}};u.x.onZero=Math.max(Math.min(i("y"),u.x.bottom),u.x.top),u.y.onZero=Math.max(Math.min(i("x"),u.y.right),u.y.left),o.position=["y"===l?u.y[s]:c[0],"x"===l?u.x[s]:c[3]];var d={x:0,y:1};o.rotation=Math.PI/2*d[l];var f={top:-1,bottom:1,left:-1,right:1};o.labelDirection=o.tickDirection=o.nameDirection=f[a],r.onZero&&(o.labelOffset=u[l][a]-u[l].onZero),e.getModel("axisTick").get("inside")&&(o.tickDirection=-o.tickDirection),e.getModel("axisLabel").get("inside")&&(o.labelDirection=-o.labelDirection);var p=e.getModel("axisLabel").get("rotate");return o.labelRotation="top"===s?-p:p,o.labelInterval=r.getLabelInterval(),o.z2=1,o;}var r=i(1),o=i(3),a=i(48),s=a.ifIgnoreOnTick,l=a.getInterval,h=["axisLine","axisLabel","axisTick","axisName"],c=["splitLine","splitArea"],u=i(2).extendComponentView({type:"axis",render:function render(t,e){if(this.group.removeAll(),t.get("show")){var i=e.getComponent("grid",t.get("gridIndex")),o=n(i,t),s=new a(t,o);r.each(h,s.add,s),this.group.add(s.getGroup()),r.each(c,function(e){t.get(e+".show")&&this["_"+e](t,i,o.labelInterval);},this);}},_splitLine:function _splitLine(t,e,i){var n=t.axis,a=t.getModel("splitLine"),h=a.getModel("lineStyle"),c=h.get("width"),u=h.get("color"),d=l(a,i);u=r.isArray(u)?u:[u];for(var f=e.coordinateSystem.getRect(),p=n.isHorizontal(),g=[],m=0,v=n.getTicksCoords(),y=[],x=[],_=0;_<v.length;_++){if(!s(n,_,d)){var b=n.toGlobalCoord(v[_]);p?(y[0]=b,y[1]=f.y,x[0]=b,x[1]=f.y+f.height):(y[0]=f.x,y[1]=b,x[0]=f.x+f.width,x[1]=b);var w=m++%u.length;g[w]=g[w]||[],g[w].push(new o.Line(o.subPixelOptimizeLine({shape:{x1:y[0],y1:y[1],x2:x[0],y2:x[1]},style:{lineWidth:c},silent:!0})));}}for(var M=h.getLineStyle(),_=0;_<g.length;_++){this.group.add(o.mergePath(g[_],{style:r.defaults({stroke:u[_%u.length]},M),silent:!0}));}},_splitArea:function _splitArea(t,e,i){var n=t.axis,a=t.getModel("splitArea"),h=a.getModel("areaStyle"),c=h.get("color"),u=e.coordinateSystem.getRect(),d=n.getTicksCoords(),f=n.toGlobalCoord(d[0]),p=n.toGlobalCoord(d[0]),g=[],m=0,v=l(a,i);c=r.isArray(c)?c:[c];for(var y=1;y<d.length;y++){if(!s(n,y,v)){var x,_,b,w,M=n.toGlobalCoord(d[y]);n.isHorizontal()?(x=f,_=u.y,b=M-x,w=u.height):(x=u.x,_=p,b=u.width,w=M-_);var S=m++%c.length;g[S]=g[S]||[],g[S].push(new o.Rect({shape:{x:x,y:_,width:b,height:w},silent:!0})),f=x+b,p=_+w;}}for(var A=h.getAreaStyle(),y=0;y<g.length;y++){this.group.add(o.mergePath(g[y],{style:r.defaults({fill:c[y%c.length]},A),silent:!0}));}}});u.extend({type:"xAxis"}),u.extend({type:"yAxis"});},function(t,e,i){var n=i(1),r=i(7),o=i(2);o.registerAction("dataZoom",function(t,e){var i=r.createLinkedNodesFinder(n.bind(e.eachComponent,e,"dataZoom"),r.eachAxisDim,function(t,e){return t.get(e.axisIndex);}),o=[];e.eachComponent({mainType:"dataZoom",query:t},function(t,e){o.push.apply(o,i(t).nodes);}),n.each(o,function(e,i){e.setRawRange({start:t.start,end:t.end,startValue:t.startValue,endValue:t.endValue});});});},function(t,e,i){function n(t,e,i){i.getAxisProxy(t.name,e).reset(i);}function r(t,e,i){i.getAxisProxy(t.name,e).filterData(i);}var o=i(2);o.registerProcessor("filter",function(t,e){t.eachComponent("dataZoom",function(t){t.eachTargetAxis(n),t.eachTargetAxis(r);}),t.eachComponent("dataZoom",function(t){var e=t.findRepresentativeAxisProxy(),i=e.getDataPercentWindow(),n=e.getDataValueWindow();t.setRawRange({start:i[0],end:i[1],startValue:n[0],endValue:n[1]});});});},function(t,e,i){function n(t){var e=t[a];return e||(e=t[a]=[{}]),e;}var r=i(1),o=r.each,a="\x00_ec_hist_store",s={push:function push(t,e){var i=n(t);o(e,function(e,n){for(var r=i.length-1;r>=0;r--){var o=i[r];if(o[n])break;}if(0>r){var a=t.queryComponents({mainType:"dataZoom",subType:"select",id:n})[0];if(a){var s=a.getPercentRange();i[0][n]={dataZoomId:n,start:s[0],end:s[1]};}}}),i.push(e);},pop:function pop(t){var e=n(t),i=e[e.length-1];e.length>1&&e.pop();var r={};return o(i,function(t,i){for(var n=e.length-1;n>=0;n--){var t=e[n][i];if(t){r[i]=t;break;}}}),r;},clear:function clear(t){t[a]=null;},count:function count(t){return n(t).length;}};t.exports=s;},function(t,e,i){i(10).registerSubTypeDefaulter("dataZoom",function(t){return "slider";});},function(t,e){function i(t){return t[n]||(t[n]={});}var n="\x00_ec_interaction_mutex",r={take:function take(t,e){i(e)[t]=!0;},release:function release(t,e){i(e)[t]=!1;},isTaken:function isTaken(t,e){return !!i(e)[t];}};t.exports=r;},function(t,e,i){function n(t,e,i){r.positionGroup(t,e.getBoxLayoutParams(),{width:i.getWidth(),height:i.getHeight()},e.get("padding"));}var r=i(11),o=i(9),a=i(3);t.exports={layout:function layout(t,e,i){var o=r.getLayoutRect(e.getBoxLayoutParams(),{width:i.getWidth(),height:i.getHeight()},e.get("padding"));r.box(e.get("orient"),t,e.get("itemGap"),o.width,o.height),n(t,e,i);},addBackground:function addBackground(t,e){var i=o.normalizeCssArray(e.get("padding")),n=t.getBoundingRect(),r=e.getItemStyle(["color","opacity"]);r.fill=e.get("backgroundColor");var s=new a.Rect({shape:{x:n.x-i[3],y:n.y-i[0],width:n.width+i[1]+i[3],height:n.height+i[0]+i[2]},style:r,silent:!0,z2:-1});a.subPixelOptimizeRect(s),t.add(s);}};},function(t,e,i){function n(t,e,i){var n=-1;do {n=Math.max(a.getPrecision(t.get(e,i)),n),t=t.stackedOn;}while(t);return n;}function r(t,e,i,r,o,a){var s=[],l=p(e,r,t),h=e.indexOfNearest(r,l,!0);s[o]=e.get(i,h,!0),s[a]=e.get(r,h,!0);var c=n(e,r,h);return c>=0&&(s[a]=+s[a].toFixed(c)),s;}var o=i(1),a=i(4),s=o.indexOf,l=o.curry,h={min:l(r,"min"),max:l(r,"max"),average:l(r,"average")},c=function c(t,e){var i=t.getData(),n=t.coordinateSystem;if((isNaN(e.x)||isNaN(e.y))&&!o.isArray(e.coord)&&n){var r=u(e,i,n,t);if(e=o.clone(e),e.type&&h[e.type]&&r.baseAxis&&r.valueAxis){var a=n.dimensions,l=s(a,r.baseAxis.dim),c=s(a,r.valueAxis.dim);e.coord=h[e.type](i,r.baseDataDim,r.valueDataDim,l,c),e.value=e.coord[c];}else e.coord=[null!=e.xAxis?e.xAxis:e.radiusAxis,null!=e.yAxis?e.yAxis:e.angleAxis];}return e;},u=function u(t,e,i,n){var r={};return null!=t.valueIndex||null!=t.valueDim?(r.valueDataDim=null!=t.valueIndex?e.getDimension(t.valueIndex):t.valueDim,r.valueAxis=i.getAxis(n.dataDimToCoordDim(r.valueDataDim)),r.baseAxis=i.getOtherAxis(r.valueAxis),r.baseDataDim=n.coordDimToDataDim(r.baseAxis.dim)[0]):(r.baseAxis=n.getBaseAxis(),r.valueAxis=i.getOtherAxis(r.baseAxis),r.baseDataDim=n.coordDimToDataDim(r.baseAxis.dim)[0],r.valueDataDim=n.coordDimToDataDim(r.valueAxis.dim)[0]),r;},d=function d(t,e){return t&&t.containData&&e.coord&&(null==e.x||null==e.y)?t.containData(e.coord):!0;},f=function f(t,e,i,n){return 2>n?t.coord&&t.coord[n]:t.value;},p=function p(t,e,i){return "average"===i?t.getSum(e,!0)/t.count():t.getDataExtent(e,!0)["max"===i?1:0];};t.exports={dataTransform:c,dataFilter:d,dimValueGetter:f,getAxisInfo:u,numCalculate:p};},function(t,e,i){var n=i(1),r=i(43),o=i(109),a=function a(t,e,i,n,o){r.call(this,t,e,i),this.type=n||"value",this.position=o||"bottom";};a.prototype={constructor:a,index:0,onZero:!1,model:null,isHorizontal:function isHorizontal(){var t=this.position;return "top"===t||"bottom"===t;},getGlobalExtent:function getGlobalExtent(){var t=this.getExtent();return t[0]=this.toGlobalCoord(t[0]),t[1]=this.toGlobalCoord(t[1]),t;},getLabelInterval:function getLabelInterval(){var t=this._labelInterval;return t||(t=this._labelInterval=o(this)),t;},isLabelIgnored:function isLabelIgnored(t){if("category"===this.type){var e=this.getLabelInterval();return "function"==typeof e&&!e(t,this.scale.getLabel(t))||t%(e+1);}},toLocalCoord:null,toGlobalCoord:null},n.inherits(a,r),t.exports=a;},function(t,e,i){"use strict";function n(t){return this._axes[t];}var r=i(1),o=function o(t){this._axes={},this._dimList=[],this.name=t||"";};o.prototype={constructor:o,type:"cartesian",getAxis:function getAxis(t){return this._axes[t];},getAxes:function getAxes(){return r.map(this._dimList,n,this);},getAxesByScale:function getAxesByScale(t){return t=t.toLowerCase(),r.filter(this.getAxes(),function(e){return e.scale.type===t;});},addAxis:function addAxis(t){var e=t.dim;this._axes[e]=t,this._dimList.push(e);},dataToCoord:function dataToCoord(t){return this._dataCoordConvert(t,"dataToCoord");},coordToData:function coordToData(t){return this._dataCoordConvert(t,"coordToData");},_dataCoordConvert:function _dataCoordConvert(t,e){for(var i=this._dimList,n=t instanceof Array?[]:{},r=0;r<i.length;r++){var o=i[r],a=this._axes[o];n[o]=a[e](t[o]);}return n;}},t.exports=o;},function(t,e,i){"use strict";function n(t){o.call(this,t);}var r=i(1),o=i(106);n.prototype={constructor:n,type:"cartesian2d",dimensions:["x","y"],getBaseAxis:function getBaseAxis(){return this.getAxesByScale("ordinal")[0]||this.getAxesByScale("time")[0]||this.getAxis("x");},containPoint:function containPoint(t){var e=this.getAxis("x"),i=this.getAxis("y");return e.contain(e.toLocalCoord(t[0]))&&i.contain(i.toLocalCoord(t[1]));},containData:function containData(t){return this.getAxis("x").containData(t[0])&&this.getAxis("y").containData(t[1]);},dataToPoints:function dataToPoints(t,e){return t.mapArray(["x","y"],function(t,e){return this.dataToPoint([t,e]);},e,this);},dataToPoint:function dataToPoint(t,e){var i=this.getAxis("x"),n=this.getAxis("y");return [i.toGlobalCoord(i.dataToCoord(t[0],e)),n.toGlobalCoord(n.dataToCoord(t[1],e))];},pointToData:function pointToData(t,e){var i=this.getAxis("x"),n=this.getAxis("y");return [i.coordToData(i.toLocalCoord(t[0]),e),n.coordToData(n.toLocalCoord(t[1]),e)];},getOtherAxis:function getOtherAxis(t){return this.getAxis("x"===t.dim?"y":"x");}},r.inherits(n,o),t.exports=n;},function(t,e,i){"use strict";i(50);var n=i(10);t.exports=n.extend({type:"grid",dependencies:["xAxis","yAxis"],layoutMode:"box",coordinateSystem:null,defaultOption:{show:!1,zlevel:0,z:0,left:"10%",top:60,right:"10%",bottom:60,containLabel:!1,backgroundColor:"rgba(0,0,0,0)",borderWidth:1,borderColor:"#ccc"}});},function(t,e,i){"use strict";var n=i(1),r=i(23);t.exports=function(t){var e=t.model,i=e.getModel("axisLabel"),o=i.get("interval");return "category"!==t.type||"auto"!==o?"auto"===o?0:o:r.getAxisLabelInterval(n.map(t.scale.getTicks(),t.dataToCoord,t),e.getFormattedLabels(),i.getModel("textStyle").getFont(),t.isHorizontal());};},function(t,e,i){"use strict";function n(t){return t.get("stack")||"__ec_stack_"+t.seriesIndex;}function r(t,e){var i={};a.each(t,function(t,e){var r=t.coordinateSystem,o=r.getBaseAxis(),a=i[o.index]||{remainedWidth:o.getBandWidth(),autoWidthCount:0,categoryGap:"20%",gap:"30%",axis:o,stacks:{}},s=a.stacks;i[o.index]=a;var l=n(t);s[l]||a.autoWidthCount++,s[l]=s[l]||{width:0,maxWidth:0};var h=t.get("barWidth"),c=t.get("barMaxWidth"),u=t.get("barGap"),d=t.get("barCategoryGap");h&&!s[l].width&&(h=Math.min(a.remainedWidth,h),s[l].width=h,a.remainedWidth-=h),c&&(s[l].maxWidth=c),null!=u&&(a.gap=u),null!=d&&(a.categoryGap=d);});var r={};return a.each(i,function(t,e){r[e]={};var i=t.stacks,n=t.axis,o=n.getBandWidth(),s=l(t.categoryGap,o),h=l(t.gap,1),c=t.remainedWidth,u=t.autoWidthCount,d=(c-s)/(u+(u-1)*h);d=Math.max(d,0),a.each(i,function(t,e){var i=t.maxWidth;!t.width&&i&&d>i&&(i=Math.min(i,c),c-=i,t.width=i,u--);}),d=(c-s)/(u+(u-1)*h),d=Math.max(d,0);var f,p=0;a.each(i,function(t,e){t.width||(t.width=d),f=t,p+=t.width*(1+h);}),f&&(p-=f.width*h);var g=-p/2;a.each(i,function(t,i){r[e][i]=r[e][i]||{offset:g,width:t.width},g+=t.width*(1+h);});}),r;}function o(t,e,i){var o=r(a.filter(e.getSeriesByType(t),function(t){return !e.isSeriesFiltered(t)&&t.coordinateSystem&&"cartesian2d"===t.coordinateSystem.type;})),s={};e.eachSeriesByType(t,function(t){var e=t.getData(),i=t.coordinateSystem,r=i.getBaseAxis(),a=n(t),l=o[r.index][a],h=l.offset,c=l.width,u=i.getOtherAxis(r),d=t.get("barMinHeight")||0,f=r.onZero?u.toGlobalCoord(u.dataToCoord(0)):u.getGlobalExtent()[0],p=i.dataToPoints(e,!0);s[a]=s[a]||[],e.setLayout({offset:h,size:c}),e.each(u.dim,function(t,i){if(!isNaN(t)){s[a][i]||(s[a][i]={p:f,n:f});var n,r,o,l,g=t>=0?"p":"n",m=p[i],v=s[a][i][g];u.isHorizontal()?(n=v,r=m[1]+h,o=m[0]-v,l=c,Math.abs(o)<d&&(o=(0>o?-1:1)*d),s[a][i][g]+=o):(n=m[0]+h,r=v,o=c,l=m[1]-v,Math.abs(l)<d&&(l=(0>=l?-1:1)*d),s[a][i][g]+=l),e.setItemLayout(i,{x:n,y:r,width:o,height:l});}},!0);},this);}var a=i(1),s=i(4),l=s.parsePercent;t.exports=o;},function(t,e,i){var n=i(3),r=i(1),o=Math.PI;t.exports=function(t,e){e=e||{},r.defaults(e,{text:"loading",color:"#c23531",textColor:"#000",maskColor:"rgba(255, 255, 255, 0.8)",zlevel:0});var i=new n.Rect({style:{fill:e.maskColor},zlevel:e.zlevel,z:1e4}),a=new n.Arc({shape:{startAngle:-o/2,endAngle:-o/2+.1,r:10},style:{stroke:e.color,lineCap:"round",lineWidth:5},zlevel:e.zlevel,z:10001}),s=new n.Rect({style:{fill:"none",text:e.text,textPosition:"right",textDistance:10,textFill:e.textColor},zlevel:e.zlevel,z:10001});a.animateShape(!0).when(1e3,{endAngle:3*o/2}).start("circularInOut"),a.animateShape(!0).when(1e3,{startAngle:3*o/2}).delay(300).start("circularInOut");var l=new n.Group();return l.add(a),l.add(s),l.add(i),l.resize=function(){var e=t.getWidth()/2,n=t.getHeight()/2;a.setShape({cx:e,cy:n});var r=a.shape.r;s.setShape({x:e-r,y:n-r,width:2*r,height:2*r}),i.setShape({x:0,y:0,width:t.getWidth(),height:t.getHeight()});},l.resize(),l;};},function(t,e,i){function n(t,e){for(var i in e){_.hasClass(i)||("object"==(0,_typeof3.default)(e[i])?t[i]=t[i]?u.merge(t[i],e[i],!1):u.clone(e[i]):null==t[i]&&(t[i]=e[i]));}}function r(t){t=t,this.option={},this.option[w]=1,this._componentsMap={},this._seriesIndices=null,n(t,this._theme.option),u.merge(t,b,!1),this.mergeOption(t);}function o(t,e){u.isArray(e)||(e=e?[e]:[]);var i={};return p(e,function(e){i[e]=(t[e]||[]).slice();}),i;}function a(t,e){var i={};p(e,function(t,e){var n=t.exist;n&&(i[n.id]=t);}),p(e,function(e,n){var r=e.option;if(u.assert(!r||null==r.id||!i[r.id]||i[r.id]===e,"id duplicates: "+(r&&r.id)),r&&null!=r.id&&(i[r.id]=e),x(r)){var o=s(t,r,e.exist);e.keyInfo={mainType:t,subType:o};}}),p(e,function(t,e){var n=t.exist,r=t.option,o=t.keyInfo;if(x(r)){if(o.name=null!=r.name?r.name+"":n?n.name:"\x00-",n)o.id=n.id;else if(null!=r.id)o.id=r.id+"";else {var a=0;do {o.id="\x00"+o.name+"\x00"+a++;}while(i[o.id]);}i[o.id]=t;}});}function s(t,e,i){var n=e.type?e.type:i?i.subType:_.determineSubType(t,e);return n;}function l(t){return m(t,function(t){return t.componentIndex;})||[];}function h(t,e){return e.hasOwnProperty("subType")?g(t,function(t){return t.subType===e.subType;}):t;}function c(t){if(!t._seriesIndices)throw new Error("Series has not been initialized yet.");}var u=i(1),d=i(7),f=i(12),p=u.each,g=u.filter,m=u.map,v=u.isArray,y=u.indexOf,x=u.isObject,_=i(10),b=i(114),w="\x00_ec_inner",M=f.extend({constructor:M,init:function init(t,e,i,n){i=i||{},this.option=null,this._theme=new f(i),this._optionManager=n;},setOption:function setOption(t,e){u.assert(!(w in t),"please use chart.getOption()"),this._optionManager.setOption(t,e),this.resetOption();},resetOption:function resetOption(t){var e=!1,i=this._optionManager;if(!t||"recreate"===t){var n=i.mountOption("recreate"===t);this.option&&"recreate"!==t?(this.restoreData(),this.mergeOption(n)):r.call(this,n),e=!0;}if("timeline"!==t&&"media"!==t||this.restoreData(),!t||"recreate"===t||"timeline"===t){var o=i.getTimelineOption(this);o&&(this.mergeOption(o),e=!0);}if(!t||"recreate"===t||"media"===t){var a=i.getMediaOption(this,this._api);a.length&&p(a,function(t){this.mergeOption(t,e=!0);},this);}return e;},mergeOption:function mergeOption(t){function e(e,r){var s=d.normalizeToArray(t[e]),h=d.mappingToExists(n[e],s);a(e,h);var c=o(n,r);i[e]=[],n[e]=[],p(h,function(t,r){var o=t.exist,a=t.option;if(u.assert(x(a)||o,"Empty component definition"),a){var s=_.getClass(e,t.keyInfo.subType,!0);o&&o instanceof s?(o.mergeOption(a,this),o.optionUpdated(this)):(o=new s(a,this,this,u.extend({dependentModels:c,componentIndex:r},t.keyInfo)),o.optionUpdated(this));}else o.mergeOption({},this),o.optionUpdated(this);n[e][r]=o,i[e][r]=o.option;},this),"series"===e&&(this._seriesIndices=l(n.series));}var i=this.option,n=this._componentsMap,r=[];p(t,function(t,e){null!=t&&(_.hasClass(e)?r.push(e):i[e]=null==i[e]?u.clone(t):u.merge(i[e],t,!0));}),_.topologicalTravel(r,_.getAllClassMainTypes(),e,this);},getOption:function getOption(){var t=u.clone(this.option);return p(t,function(e,i){if(_.hasClass(i)){for(var e=d.normalizeToArray(e),n=e.length-1;n>=0;n--){d.isIdInner(e[n])&&e.splice(n,1);}t[i]=e;}}),delete t[w],t;},getTheme:function getTheme(){return this._theme;},getComponent:function getComponent(t,e){var i=this._componentsMap[t];return i?i[e||0]:void 0;},queryComponents:function queryComponents(t){var e=t.mainType;if(!e)return [];var i=t.index,n=t.id,r=t.name,o=this._componentsMap[e];if(!o||!o.length)return [];var a;if(null!=i)v(i)||(i=[i]),a=g(m(i,function(t){return o[t];}),function(t){return !!t;});else if(null!=n){var s=v(n);a=g(o,function(t){return s&&y(n,t.id)>=0||!s&&t.id===n;});}else if(null!=r){var l=v(r);a=g(o,function(t){return l&&y(r,t.name)>=0||!l&&t.name===r;});}return h(a,t);},findComponents:function findComponents(t){function e(t){var e=r+"Index",i=r+"Id",n=r+"Name";return t&&(t.hasOwnProperty(e)||t.hasOwnProperty(i)||t.hasOwnProperty(n))?{mainType:r,index:t[e],id:t[i],name:t[n]}:null;}function i(e){return t.filter?g(e,t.filter):e;}var n=t.query,r=t.mainType,o=e(n),a=o?this.queryComponents(o):this._componentsMap[r];return i(h(a,t));},eachComponent:function eachComponent(t,e,i){var n=this._componentsMap;if("function"==typeof t)i=e,e=t,p(n,function(t,n){p(t,function(t,r){e.call(i,n,t,r);});});else if(u.isString(t))p(n[t],e,i);else if(x(t)){var r=this.findComponents(t);p(r,e,i);}},getSeriesByName:function getSeriesByName(t){var e=this._componentsMap.series;return g(e,function(e){return e.name===t;});},getSeriesByIndex:function getSeriesByIndex(t){return this._componentsMap.series[t];},getSeriesByType:function getSeriesByType(t){var e=this._componentsMap.series;return g(e,function(e){return e.subType===t;});},getSeries:function getSeries(){return this._componentsMap.series.slice();},eachSeries:function eachSeries(t,e){c(this),p(this._seriesIndices,function(i){var n=this._componentsMap.series[i];t.call(e,n,i);},this);},eachRawSeries:function eachRawSeries(t,e){p(this._componentsMap.series,t,e);},eachSeriesByType:function eachSeriesByType(t,e,i){c(this),p(this._seriesIndices,function(n){var r=this._componentsMap.series[n];r.subType===t&&e.call(i,r,n);},this);},eachRawSeriesByType:function eachRawSeriesByType(t,e,i){return p(this.getSeriesByType(t),e,i);},isSeriesFiltered:function isSeriesFiltered(t){return c(this),u.indexOf(this._seriesIndices,t.componentIndex)<0;},filterSeries:function filterSeries(t,e){c(this);var i=g(this._componentsMap.series,t,e);this._seriesIndices=l(i);},restoreData:function restoreData(){var t=this._componentsMap;this._seriesIndices=l(t.series);var e=[];p(t,function(t,i){e.push(i);}),_.topologicalTravel(e,_.getAllClassMainTypes(),function(e,i){p(t[e],function(t){t.restoreData();});});}});t.exports=M;},function(t,e,i){function n(t){this._api=t,this._timelineOptions=[],this._mediaList=[],this._mediaDefault,this._currentMediaIndices=[],this._optionBackup,this._newOptionBackup;}function r(t,e){var i,n,r=[],o=[],a=t.timeline;if(t.baseOption&&(n=t.baseOption),(a||t.options)&&(n=n||{},r=(t.options||[]).slice()),t.media){n=n||{};var s=t.media;d(s,function(t){t&&t.option&&(t.query?o.push(t):i||(i=t));});}return n||(n=t),n.timeline||(n.timeline=a),d([n].concat(r).concat(h.map(o,function(t){return t.option;})),function(t){d(e,function(e){e(t);});}),{baseOption:n,timelineOptions:r,mediaDefault:i,mediaList:o};}function o(t,e,i){var n={width:e,height:i,aspectratio:e/i},r=!0;return h.each(t,function(t,e){var i=e.match(m);if(i&&i[1]&&i[2]){var o=i[1],s=i[2].toLowerCase();a(n[s],t,o)||(r=!1);}}),r;}function a(t,e,i){return "min"===i?t>=e:"max"===i?e>=t:t===e;}function s(t,e){return t.join(",")===e.join(",");}function l(t,e){e=e||{},d(e,function(e,i){if(null!=e){var n=t[i];if(u.hasClass(i)){e=c.normalizeToArray(e),n=c.normalizeToArray(n);var r=c.mappingToExists(n,e);t[i]=p(r,function(t){return t.option&&t.exist?g(t.exist,t.option,!0):t.exist||t.option;});}else t[i]=g(n,e,!0);}});}var h=i(1),c=i(7),u=i(10),d=h.each,f=h.clone,p=h.map,g=h.merge,m=/^(min|max)?(.+)$/;n.prototype={constructor:n,setOption:function setOption(t,e){t=f(t,!0);var i=this._optionBackup,n=this._newOptionBackup=r.call(this,t,e);i?(l(i.baseOption,n.baseOption),n.timelineOptions.length&&(i.timelineOptions=n.timelineOptions),n.mediaList.length&&(i.mediaList=n.mediaList),n.mediaDefault&&(i.mediaDefault=n.mediaDefault)):this._optionBackup=n;},mountOption:function mountOption(t){var e=t?this._optionBackup:this._newOptionBackup;return this._timelineOptions=p(e.timelineOptions,f),this._mediaList=p(e.mediaList,f),this._mediaDefault=f(e.mediaDefault),this._currentMediaIndices=[],f(e.baseOption);},getTimelineOption:function getTimelineOption(t){var e,i=this._timelineOptions;if(i.length){var n=t.getComponent("timeline");n&&(e=f(i[n.getCurrentIndex()],!0));}return e;},getMediaOption:function getMediaOption(t){var e=this._api.getWidth(),i=this._api.getHeight(),n=this._mediaList,r=this._mediaDefault,a=[],l=[];if(!n.length&&!r)return l;for(var h=0,c=n.length;c>h;h++){o(n[h].query,e,i)&&a.push(h);}return !a.length&&r&&(a=[-1]),a.length&&!s(a,this._currentMediaIndices)&&(l=p(a,function(t){return f(-1===t?r.option:n[t].option);})),this._currentMediaIndices=a,l;}},t.exports=n;},function(t,e){var i="";"undefined"!=typeof navigator&&(i=navigator.platform||""),t.exports={color:["#c23531","#2f4554","#61a0a8","#d48265","#91c7ae","#749f83","#ca8622","#bda29a","#6e7074","#546570","#c4ccd3"],grid:{},textStyle:{fontFamily:i.match(/^Win/)?"Microsoft YaHei":"sans-serif",fontSize:12,fontStyle:"normal",fontWeight:"normal"},animation:!0,animationThreshold:2e3,animationDuration:1e3,animationDurationUpdate:300,animationEasing:"exponentialOut",animationEasingUpdate:"cubicOut"};},function(t,e,i){t.exports={getAreaStyle:i(30)([["fill","color"],["shadowBlur"],["shadowOffsetX"],["shadowOffsetY"],["opacity"],["shadowColor"]])};},function(t,e){t.exports={getBoxLayoutParams:function getBoxLayoutParams(){return {left:this.get("left"),top:this.get("top"),right:this.get("right"),bottom:this.get("bottom"),width:this.get("width"),height:this.get("height")};}};},function(t,e,i){t.exports={getItemStyle:i(30)([["fill","color"],["stroke","borderColor"],["lineWidth","borderWidth"],["opacity"],["shadowBlur"],["shadowOffsetX"],["shadowOffsetY"],["shadowColor"]])};},function(t,e,i){var n=i(30)([["lineWidth","width"],["stroke","color"],["opacity"],["shadowBlur"],["shadowOffsetX"],["shadowOffsetY"],["shadowColor"]]);t.exports={getLineStyle:function getLineStyle(t){var e=n.call(this,t),i=this.getLineDash();return i&&(e.lineDash=i),e;},getLineDash:function getLineDash(){var t=this.get("type");return "solid"===t||null==t?null:"dashed"===t?[5,5]:[1,1];}};},function(t,e,i){function n(t,e){return t&&t.getShallow(e);}var r=i(17);t.exports={getTextColor:function getTextColor(){var t=this.ecModel;return this.getShallow("color")||t&&t.get("textStyle.color");},getFont:function getFont(){var t=this.ecModel,e=t&&t.getModel("textStyle");return [this.getShallow("fontStyle")||n(e,"fontStyle"),this.getShallow("fontWeight")||n(e,"fontWeight"),(this.getShallow("fontSize")||n(e,"fontSize")||12)+"px",this.getShallow("fontFamily")||n(e,"fontFamily")||"sans-serif"].join(" ");},getTextRect:function getTextRect(t){var e=this.get("textStyle")||{};return r.getBoundingRect(t,this.getFont(),e.align,e.baseline);},ellipsis:function ellipsis(t,e,i){return r.ellipsis(t,this.getFont(),e,i);}};},function(t,e,i){function n(t,e){e=e.split(",");for(var i=t,n=0;n<e.length&&(i=i&&i[e[n]],null!=i);n++){}return i;}function r(t,e,i,n){e=e.split(",");for(var r,o=t,a=0;a<e.length-1;a++){r=e[a],null==o[r]&&(o[r]={}),o=o[r];}(n||null==o[e[a]])&&(o[e[a]]=i);}function o(t){u(l,function(e){e[0] in t&&!(e[1] in t)&&(t[e[1]]=t[e[0]]);});}var a=i(1),s=i(121),l=[["x","left"],["y","top"],["x2","right"],["y2","bottom"]],h=["grid","geo","parallel","legend","toolbox","title","visualMap","dataZoom","timeline"],c=["bar","boxplot","candlestick","chord","effectScatter","funnel","gauge","lines","graph","heatmap","line","map","parallel","pie","radar","sankey","scatter","treemap"],u=a.each;t.exports=function(t){u(t.series,function(t){if(a.isObject(t)){var e=t.type;if(s(t),"pie"!==e&&"gauge"!==e||null!=t.clockWise&&(t.clockwise=t.clockWise),"gauge"===e){var i=n(t,"pointer.color");null!=i&&r(t,"itemStyle.normal.color",i);}for(var l=0;l<c.length;l++){if(c[l]===t.type){o(t);break;}}}}),t.dataRange&&(t.visualMap=t.dataRange),u(h,function(e){var i=t[e];i&&(a.isArray(i)||(i=[i]),u(i,function(t){o(t);}));});};},function(t,e,i){function n(t){var e=t&&t.itemStyle;e&&r.each(o,function(i){var n=e.normal,o=e.emphasis;n&&n[i]&&(t[i]=t[i]||{},t[i].normal?r.merge(t[i].normal,n[i]):t[i].normal=n[i],n[i]=null),o&&o[i]&&(t[i]=t[i]||{},t[i].emphasis?r.merge(t[i].emphasis,o[i]):t[i].emphasis=o[i],o[i]=null);});}var r=i(1),o=["areaStyle","lineStyle","nodeStyle","linkStyle","chordStyle","label","labelLine"];t.exports=function(t){if(t){n(t),n(t.markPoint),n(t.markLine);var e=t.data;if(e){for(var i=0;i<e.length;i++){n(e[i]);}var o=t.markPoint;if(o&&o.data)for(var a=o.data,i=0;i<a.length;i++){n(a[i]);}var s=t.markLine;if(s&&s.data)for(var l=s.data,i=0;i<l.length;i++){r.isArray(l[i])?(n(l[i][0]),n(l[i][1])):n(l[i]);}}}};},function(t,e){var i={average:function average(t){for(var e=0,i=0,n=0;n<t.length;n++){isNaN(t[n])||(e+=t[n],i++);}return 0===i?NaN:e/i;},sum:function sum(t){for(var e=0,i=0;i<t.length;i++){e+=t[i]||0;}return e;},max:function max(t){for(var e=-(1/0),i=0;i<t.length;i++){t[i]>e&&(e=t[i]);}return e;},min:function min(t){for(var e=1/0,i=0;i<t.length;i++){t[i]<e&&(e=t[i]);}return e;},nearest:function nearest(t){return t[0];}},n=function n(t,e){return Math.round(t.length/2);};t.exports=function(t,e,r){e.eachSeriesByType(t,function(t){var e=t.getData(),r=t.get("sampling"),o=t.coordinateSystem;if("cartesian2d"===o.type&&r){var a=o.getBaseAxis(),s=o.getOtherAxis(a),l=a.getExtent(),h=l[1]-l[0],c=Math.round(e.count()/h);if(c>1){var u;"string"==typeof r?u=i[r]:"function"==typeof r&&(u=r),u&&(e=e.downSample(s.dim,1/c,u,n),t.setData(e));}}},this);};},function(t,e,i){var n=i(1),r=i(32),o=i(4),a=i(37),s=r.prototype,l=a.prototype,h=Math.floor,c=Math.ceil,u=Math.pow,d=10,f=Math.log,p=r.extend({type:"log",getTicks:function getTicks(){return n.map(l.getTicks.call(this),function(t){return o.round(u(d,t));});},getLabel:l.getLabel,scale:function scale(t){return t=s.scale.call(this,t),u(d,t);},setExtent:function setExtent(t,e){t=f(t)/f(d),e=f(e)/f(d),l.setExtent.call(this,t,e);},getExtent:function getExtent(){var t=s.getExtent.call(this);return t[0]=u(d,t[0]),t[1]=u(d,t[1]),t;},unionExtent:function unionExtent(t){t[0]=f(t[0])/f(d),t[1]=f(t[1])/f(d),s.unionExtent.call(this,t);},niceTicks:function niceTicks(t){t=t||10;var e=this._extent,i=e[1]-e[0];if(!(i===1/0||0>=i)){var n=u(10,h(f(i/t)/Math.LN10)),r=t/i*n;.5>=r&&(n*=10);var a=[o.round(c(e[0]/n)*n),o.round(h(e[1]/n)*n)];this._interval=n,this._niceExtent=a;}},niceExtent:l.niceExtent});n.each(["contain","normalize"],function(t){p.prototype[t]=function(e){return e=f(e)/f(d),s[t].call(this,e);};}),p.create=function(){return new p();},t.exports=p;},function(t,e,i){var n=i(1),r=i(32),o=r.prototype,a=r.extend({type:"ordinal",init:function init(t,e){this._data=t,this._extent=e||[0,t.length-1];},parse:function parse(t){return "string"==typeof t?n.indexOf(this._data,t):Math.round(t);},contain:function contain(t){return t=this.parse(t),o.contain.call(this,t)&&null!=this._data[t];},normalize:function normalize(t){return o.normalize.call(this,this.parse(t));},scale:function scale(t){return Math.round(o.scale.call(this,t));},getTicks:function getTicks(){for(var t=[],e=this._extent,i=e[0];i<=e[1];){t.push(i),i++;}return t;},getLabel:function getLabel(t){return this._data[t];},count:function count(){return this._extent[1]-this._extent[0]+1;},niceTicks:n.noop,niceExtent:n.noop});a.create=function(){return new a();},t.exports=a;},function(t,e,i){var n=i(1),r=i(4),o=i(9),a=i(37),s=a.prototype,l=Math.ceil,h=Math.floor,c=864e5,u=function u(t,e,i,n){for(;n>i;){var r=i+n>>>1;t[r][2]<e?i=r+1:n=r;}return i;},d=a.extend({type:"time",getLabel:function getLabel(t){var e=this._stepLvl,i=new Date(t);return o.formatTime(e[0],i);},niceExtent:function niceExtent(t,e,i){var n=this._extent;if(n[0]===n[1]&&(n[0]-=c,n[1]+=c),n[1]===-(1/0)&&n[0]===1/0){var o=new Date();n[1]=new Date(o.getFullYear(),o.getMonth(),o.getDate()),n[0]=n[1]-c;}this.niceTicks(t,e,i);var a=this._interval;e||(n[0]=r.round(h(n[0]/a)*a)),i||(n[1]=r.round(l(n[1]/a)*a));},niceTicks:function niceTicks(t){t=t||10;var e=this._extent,i=e[1]-e[0],n=i/t,o=f.length,a=u(f,n,0,o),s=f[Math.min(a,o-1)],c=s[2];if("year"===s[0]){var d=i/c,p=r.nice(d/t,!0);c*=p;}var g=[l(e[0]/c)*c,h(e[1]/c)*c];this._stepLvl=s,this._interval=c,this._niceExtent=g;},parse:function parse(t){return +r.parseDate(t);}});n.each(["contain","normalize"],function(t){d.prototype[t]=function(e){return s[t].call(this,this.parse(e));};});var f=[["hh:mm:ss",1,1e3],["hh:mm:ss",5,5e3],["hh:mm:ss",10,1e4],["hh:mm:ss",15,15e3],["hh:mm:ss",30,3e4],["hh:mm\nMM-dd",1,6e4],["hh:mm\nMM-dd",5,3e5],["hh:mm\nMM-dd",10,6e5],["hh:mm\nMM-dd",15,9e5],["hh:mm\nMM-dd",30,18e5],["hh:mm\nMM-dd",1,36e5],["hh:mm\nMM-dd",2,72e5],["hh:mm\nMM-dd",6,216e5],["hh:mm\nMM-dd",12,432e5],["MM-dd\nyyyy",1,c],["week",7,7*c],["month",1,31*c],["quarter",3,380*c/4],["half-year",6,380*c/2],["year",1,380*c]];d.create=function(){return new d();},t.exports=d;},function(t,e){var i={},n="\x00__throttleOriginMethod",r="\x00__throttleRate";i.throttle=function(t,e,i,n){function r(r){function f(){c=new Date().getTime(),u=null,(d?t:t[r]).apply(a,s||[]);}var p=function p(){l=new Date().getTime(),a=this,s=arguments,o=l-(n?h:c)-e,clearTimeout(u),n?i?u=setTimeout(f,e):o>=0&&f():o>=0?f():i&&(u=setTimeout(f,-o)),h=l;};return p.clear=function(){u&&(clearTimeout(u),u=null);},p;}var o,a,s,l=new Date().getTime(),h=0,c=0,u=null,d="function"==typeof t;if(e=e||0,d)return r();for(var f=[],p=0;p<t.length;p++){f[p]=r(p);}return f;},i.fixRate=function(t,e){return null!=e?i.throttle(t,e,!0,!1):t;},i.debounce=function(t,e){return null!=e?i.throttle(t,e,!0,!0):t;},i.createOrUpdate=function(t,e,o,a){var s=t[e];if(s&&null!=o&&a){var l=s[n]||s,h=s[r];h!==o&&(s=t[e]=i[a](l,o),s[n]=l,s[r]=o);}},i.clear=function(t,e){var i=t[e];i&&i[n]&&(t[e]=i[n]);},t.exports=i;},function(t,e,i){"use strict";function n(t,e,i){return {type:t,event:i,target:e,cancelBubble:!1,offsetX:i.zrX,offsetY:i.zrY,gestureEvent:i.gestureEvent,pinchX:i.pinchX,pinchY:i.pinchY,pinchScale:i.pinchScale,wheelDelta:i.zrDelta};}function r(t,e,i){var n=t._gestureMgr;"start"===i&&n.clear();var r=n.recognize(e,t.findHover(e.zrX,e.zrY,null));if("end"===i&&n.clear(),r){var o=r.type;e.gestureEvent=o,t._dispatchProxy(r.target,o,r.event);}}function o(t){function e(t,e){return function(){return e._touching?void 0:t.apply(e,arguments);};}for(var i=y.concat(x),n=0;n<i.length;n++){var r=i[n];t._handlers[r]=f.bind(S[r],t);}for(var n=0;n<v.length;n++){var r=v[n];t._handlers[r]=e(S[r],t);}}function a(t,e,i){if(t[t.rectHover?"rectContain":"contain"](e,i)){for(var n=t;n;){if(n.silent||n.clipPath&&!n.clipPath.contain(e,i))return !1;n=n.parent;}return !0;}return !1;}function s(t){t._touching=!0,clearTimeout(t._touchTimer),t._touchTimer=setTimeout(function(){t._touching=!1;},700);}function l(){return !1;}function h(){return u.touchEventsSupported;}function c(t){return "mousewheel"===t&&u.browser.firefox?"DOMMouseScroll":t;}var u=i(15),d=i(33),f=i(1),p=i(155),g=i(139),m=i(21),v=["click","dblclick","mousewheel","mouseout"];!l()&&v.push("mouseup","mousedown","mousemove");var y=["touchstart","touchend","touchmove"],x=["pointerdown","pointerup","pointermove"],_=300,b=d.addEventListener,w=d.removeEventListener,M=d.normalizeEvent,S={mousemove:function mousemove(t){t=M(this.root,t);var e=t.zrX,i=t.zrY,n=this.findHover(e,i,null),r=this._hovered;this._hovered=n,this.root.style.cursor=n?n.cursor:this._defaultCursorStyle,r&&n!==r&&r.__zr&&this._dispatchProxy(r,"mouseout",t),this._dispatchProxy(n,"mousemove",t),n&&n!==r&&this._dispatchProxy(n,"mouseover",t);},mouseout:function mouseout(t){t=M(this.root,t);var e=t.toElement||t.relatedTarget;if(e!=this.root)for(;e&&9!=e.nodeType;){if(e===this.root)return;e=e.parentNode;}this._dispatchProxy(this._hovered,"mouseout",t),this.trigger("globalout",{event:t});},touchstart:function touchstart(t){t=M(this.root,t),this._lastTouchMoment=new Date(),r(this,t,"start"),S.mousemove.call(this,t),S.mousedown.call(this,t),s(this);},touchmove:function touchmove(t){t=M(this.root,t),r(this,t,"change"),S.mousemove.call(this,t),s(this);},touchend:function touchend(t){t=M(this.root,t),r(this,t,"end"),S.mouseup.call(this,t),+new Date()-this._lastTouchMoment<_&&S.click.call(this,t),s(this);}};f.each(["click","mousedown","mouseup","mousewheel","dblclick"],function(t){S[t]=function(e){e=M(this.root,e);var i=this.findHover(e.zrX,e.zrY,null);this._dispatchProxy(i,t,e);};});var A=function A(t,e,i){function n(e,i){f.each(e,function(e){b(t,c(e),i._handlers[e]);},i);}m.call(this),this.root=t,this.storage=e,this.painter=i,this._hovered,this._lastTouchMoment,this._lastX,this._lastY,this._defaultCursorStyle="default",this._gestureMgr=new g(),this._handlers=[],this._touching=!1,this._touchTimer,o(this),l()?n(x,this):h()&&n(y,this),n(v,this),p.call(this);};A.prototype={constructor:A,resize:function resize(t){this._hovered=null;},dispatch:function dispatch(t,e){var i=this._handlers[t];i&&i.call(this,e);},dispose:function dispose(){for(var t=this.root,e=v.concat(y),i=0;i<e.length;i++){var n=e[i];w(t,c(n),this._handlers[n]);}this.root=this.storage=this.painter=null;},setDefaultCursorStyle:function setDefaultCursorStyle(t){this._defaultCursorStyle=t;},_dispatchProxy:function _dispatchProxy(t,e,i){for(var r="on"+e,o=n(e,t,i),a=t;a&&(a[r]&&(o.cancelBubble=a[r].call(a,o)),a.trigger(e,o),a=a.parent,!o.cancelBubble);){}o.cancelBubble||(this.trigger(e,o),this.painter&&this.painter.eachOtherLayer(function(t){"function"==typeof t[r]&&t[r].call(t,o),t.trigger&&t.trigger(e,o);}));},findHover:function findHover(t,e,i){for(var n=this.storage.getDisplayList(),r=n.length-1;r>=0;r--){if(!n[r].silent&&n[r]!==i&&!n[r].ignore&&a(n[r],t,e))return n[r];}}},f.mixin(A,m),f.mixin(A,p),t.exports=A;},function(t,e,i){function n(){return !1;}function r(t,e,i,n){var r=document.createElement(e),o=i.getWidth(),a=i.getHeight(),s=r.style;return s.position="absolute",s.left=0,s.top=0,s.width=o+"px",s.height=a+"px",r.width=o*n,r.height=a*n,r.setAttribute("data-zr-dom-id",t),r;}var o=i(1),a=i(42),s=function s(t,e,i){var s;i=i||a.devicePixelRatio,"string"==typeof t?s=r(t,"canvas",e,i):o.isObject(t)&&(s=t,t=s.id),this.id=t,this.dom=s;var l=s.style;l&&(s.onselectstart=n,l["-webkit-user-select"]="none",l["user-select"]="none",l["-webkit-touch-callout"]="none",l["-webkit-tap-highlight-color"]="rgba(0,0,0,0)"),this.domBack=null,this.ctxBack=null,this.painter=e,this.config=null,this.clearColor=0,this.motionBlur=!1,this.lastFrameAlpha=.7,this.dpr=i;};s.prototype={constructor:s,elCount:0,__dirty:!0,initContext:function initContext(){this.ctx=this.dom.getContext("2d");var t=this.dpr;1!=t&&this.ctx.scale(t,t);},createBackBuffer:function createBackBuffer(){var t=this.dpr;this.domBack=r("back-"+this.id,"canvas",this.painter,t),this.ctxBack=this.domBack.getContext("2d"),1!=t&&this.ctxBack.scale(t,t);},resize:function resize(t,e){var i=this.dpr,n=this.dom,r=n.style,o=this.domBack;r.width=t+"px",r.height=e+"px",n.width=t*i,n.height=e*i,1!=i&&this.ctx.scale(i,i),o&&(o.width=t*i,o.height=e*i,1!=i&&this.ctxBack.scale(i,i));},clear:function clear(t){var e=this.dom,i=this.ctx,n=e.width,r=e.height,o=this.clearColor,a=this.motionBlur&&!t,s=this.lastFrameAlpha,l=this.dpr;if(a&&(this.domBack||this.createBackBuffer(),this.ctxBack.globalCompositeOperation="copy",this.ctxBack.drawImage(e,0,0,n/l,r/l)),i.clearRect(0,0,n/l,r/l),o&&(i.save(),i.fillStyle=this.clearColor,i.fillRect(0,0,n/l,r/l),i.restore()),a){var h=this.domBack;i.save(),i.globalAlpha=s,i.drawImage(h,0,0,n/l,r/l),i.restore();}}},t.exports=s;},function(t,e,i){"use strict";function n(t){return parseInt(t,10);}function r(t){return t?t.isBuildin?!0:"function"==typeof t.resize&&"function"==typeof t.refresh:!1;}function o(t){t.__unusedCount++;}function a(t){t.__dirty=!1,1==t.__unusedCount&&t.clear();}function s(t,e,i){return g.copy(t.getBoundingRect()),t.transform&&g.applyTransform(t.transform),m.width=e,m.height=i,!g.intersect(m);}function l(t,e){if(!t||!e||t.length!==e.length)return !0;for(var i=0;i<t.length;i++){if(t[i]!==e[i])return !0;}}function h(t,e){for(var i=0;i<t.length;i++){var n,r=t[i];r.transform&&(n=r.transform,e.transform(n[0],n[1],n[2],n[3],n[4],n[5]));var o=r.path;o.beginPath(e),r.buildPath(o,r.shape),e.clip(),r.transform&&(n=r.invTransform,e.transform(n[0],n[1],n[2],n[3],n[4],n[5]));}}var c=i(42),u=i(1),d=i(45),f=i(8),p=i(128),g=new f(0,0,0,0),m=new f(0,0,0,0),v=function v(t,e,i){var n=!t.nodeName||"CANVAS"===t.nodeName.toUpperCase();i=i||{},this.dpr=i.devicePixelRatio||c.devicePixelRatio,this._singleCanvas=n,this.root=t;var r=t.style;if(r&&(r["-webkit-tap-highlight-color"]="transparent",r["-webkit-user-select"]="none",r["user-select"]="none",r["-webkit-touch-callout"]="none",t.innerHTML=""),this.storage=e,n){var o=t.width,a=t.height;this._width=o,this._height=a;var s=new p(t,this,1);s.initContext(),this._layers={0:s},this._zlevelList=[0];}else {var o=this._getWidth(),a=this._getHeight();this._width=o,this._height=a;var l=document.createElement("div");this._domRoot=l;var h=l.style;h.position="relative",h.overflow="hidden",h.width=this._width+"px",h.height=this._height+"px",t.appendChild(l),this._layers={},this._zlevelList=[];}this._layerConfig={},this.pathToImage=this._createPathToImage();};v.prototype={constructor:v,isSingleCanvas:function isSingleCanvas(){return this._singleCanvas;},getViewportRoot:function getViewportRoot(){return this._singleCanvas?this._layers[0].dom:this._domRoot;},refresh:function refresh(t){var e=this.storage.getDisplayList(!0),i=this._zlevelList;this._paintList(e,t);for(var n=0;n<i.length;n++){var r=i[n],o=this._layers[r];!o.isBuildin&&o.refresh&&o.refresh();}return this;},_paintList:function _paintList(t,e){null==e&&(e=!1),this._updateLayerStatus(t);var i,n,r,c=this._width,u=this._height;this.eachBuildinLayer(o);for(var f=null,p=0,g=t.length;g>p;p++){var m=t[p],v=this._singleCanvas?0:m.zlevel;if(n!==v&&(n=v,i=this.getLayer(n),i.isBuildin||d("ZLevel "+n+" has been used by unkown layer "+i.id),r=i.ctx,i.__unusedCount=0,(i.__dirty||e)&&i.clear()),(i.__dirty||e)&&!m.invisible&&0!==m.style.opacity&&m.scale[0]&&m.scale[1]&&(!m.culling||!s(m,c,u))){var y=m.__clipPaths;l(y,f)&&(f&&r.restore(),y&&(r.save(),h(y,r)),f=y),m.beforeBrush&&m.beforeBrush(r),m.brush(r,!1),m.afterBrush&&m.afterBrush(r);}m.__dirty=!1;}f&&r.restore(),this.eachBuildinLayer(a);},getLayer:function getLayer(t){if(this._singleCanvas)return this._layers[0];var e=this._layers[t];return e||(e=new p("zr_"+t,this,this.dpr),e.isBuildin=!0,this._layerConfig[t]&&u.merge(e,this._layerConfig[t],!0),this.insertLayer(t,e),e.initContext()),e;},insertLayer:function insertLayer(t,e){var i=this._layers,n=this._zlevelList,o=n.length,a=null,s=-1,l=this._domRoot;if(i[t])return void d("ZLevel "+t+" has been used already");if(!r(e))return void d("Layer of zlevel "+t+" is not valid");if(o>0&&t>n[0]){for(s=0;o-1>s&&!(n[s]<t&&n[s+1]>t);s++){}a=i[n[s]];}if(n.splice(s+1,0,t),a){var h=a.dom;h.nextSibling?l.insertBefore(e.dom,h.nextSibling):l.appendChild(e.dom);}else l.firstChild?l.insertBefore(e.dom,l.firstChild):l.appendChild(e.dom);i[t]=e;},eachLayer:function eachLayer(t,e){var i,n,r=this._zlevelList;for(n=0;n<r.length;n++){i=r[n],t.call(e,this._layers[i],i);}},eachBuildinLayer:function eachBuildinLayer(t,e){var i,n,r,o=this._zlevelList;for(r=0;r<o.length;r++){n=o[r],i=this._layers[n],i.isBuildin&&t.call(e,i,n);}},eachOtherLayer:function eachOtherLayer(t,e){var i,n,r,o=this._zlevelList;for(r=0;r<o.length;r++){n=o[r],i=this._layers[n],i.isBuildin||t.call(e,i,n);}},getLayers:function getLayers(){return this._layers;},_updateLayerStatus:function _updateLayerStatus(t){var e=this._layers,i={};this.eachBuildinLayer(function(t,e){i[e]=t.elCount,t.elCount=0;});for(var n=0,r=t.length;r>n;n++){var o=t[n],a=this._singleCanvas?0:o.zlevel,s=e[a];if(s){if(s.elCount++,s.__dirty)continue;s.__dirty=o.__dirty;}}this.eachBuildinLayer(function(t,e){i[e]!==t.elCount&&(t.__dirty=!0);});},clear:function clear(){return this.eachBuildinLayer(this._clearLayer),this;},_clearLayer:function _clearLayer(t){t.clear();},configLayer:function configLayer(t,e){if(e){var i=this._layerConfig;i[t]?u.merge(i[t],e,!0):i[t]=e;var n=this._layers[t];n&&u.merge(n,i[t],!0);}},delLayer:function delLayer(t){var e=this._layers,i=this._zlevelList,n=e[t];n&&(n.dom.parentNode.removeChild(n.dom),delete e[t],i.splice(u.indexOf(i,t),1));},resize:function resize(t,e){var i=this._domRoot;if(i.style.display="none",t=t||this._getWidth(),e=e||this._getHeight(),i.style.display="",this._width!=t||e!=this._height){i.style.width=t+"px",i.style.height=e+"px";for(var n in this._layers){this._layers[n].resize(t,e);}this.refresh(!0);}return this._width=t,this._height=e,this;},clearLayer:function clearLayer(t){var e=this._layers[t];e&&e.clear();},dispose:function dispose(){this.root.innerHTML="",this.root=this.storage=this._domRoot=this._layers=null;},getRenderedCanvas:function getRenderedCanvas(t){if(t=t||{},this._singleCanvas)return this._layers[0].dom;var e=new p("image",this,t.pixelRatio||this.dpr);e.initContext();var i=e.ctx;e.clearColor=t.backgroundColor,e.clear();for(var n=this.storage.getDisplayList(!0),r=0;r<n.length;r++){var o=n[r];o.invisible||(o.beforeBrush&&o.beforeBrush(i),o.brush(i,!1),o.afterBrush&&o.afterBrush(i));}return e.dom;},getWidth:function getWidth(){return this._width;},getHeight:function getHeight(){return this._height;},_getWidth:function _getWidth(){var t=this.root,e=document.defaultView.getComputedStyle(t);return (t.clientWidth||n(e.width)||n(t.style.width))-(n(e.paddingLeft)||0)-(n(e.paddingRight)||0)|0;},_getHeight:function _getHeight(){var t=this.root,e=document.defaultView.getComputedStyle(t);return (t.clientHeight||n(e.height)||n(t.style.height))-(n(e.paddingTop)||0)-(n(e.paddingBottom)||0)|0;},_pathToImage:function _pathToImage(t,e,n,r,o){var a=document.createElement("canvas"),s=a.getContext("2d");a.width=n*o,a.height=r*o,s.clearRect(0,0,n*o,r*o);var l={position:e.position,rotation:e.rotation,scale:e.scale};e.position=[0,0,0],e.rotation=0,e.scale=[1,1],e&&e.brush(s);var h=i(46),c=new h({id:t,style:{x:0,y:0,image:a}});return null!=l.position&&(c.position=e.position=l.position),null!=l.rotation&&(c.rotation=e.rotation=l.rotation),null!=l.scale&&(c.scale=e.scale=l.scale),c;},_createPathToImage:function _createPathToImage(){var t=this;return function(e,i,n,r){return t._pathToImage(e,i,n,r,t.dpr);};}},t.exports=v;},function(t,e,i){"use strict";function n(t,e){return t.zlevel===e.zlevel?t.z===e.z?t.z2===e.z2?t.__renderidx-e.__renderidx:t.z2-e.z2:t.z-e.z:t.zlevel-e.zlevel;}var r=i(1),o=i(26),a=function a(){this._elements={},this._roots=[],this._displayList=[],this._displayListLen=0;};a.prototype={constructor:a,getDisplayList:function getDisplayList(t,e){return e=e||!1,t&&this.updateDisplayList(e),this._displayList;},updateDisplayList:function updateDisplayList(t){this._displayListLen=0;for(var e=this._roots,i=this._displayList,r=0,o=e.length;o>r;r++){this._updateAndAddDisplayable(e[r],null,t);}i.length=this._displayListLen;for(var r=0,o=i.length;o>r;r++){i[r].__renderidx=r;}i.sort(n);},_updateAndAddDisplayable:function _updateAndAddDisplayable(t,e,i){if(!t.ignore||i){t.beforeUpdate(),t.update(),t.afterUpdate();var n=t.clipPath;if(n&&(n.parent=t,n.updateTransform(),e?(e=e.slice(),e.push(n)):e=[n]),"group"==t.type){for(var r=t._children,o=0;o<r.length;o++){var a=r[o];a.__dirty=t.__dirty||a.__dirty,this._updateAndAddDisplayable(a,e,i);}t.__dirty=!1;}else t.__clipPaths=e,this._displayList[this._displayListLen++]=t;}},addRoot:function addRoot(t){this._elements[t.id]||(t instanceof o&&t.addChildrenToStorage(this),this.addToMap(t),this._roots.push(t));},delRoot:function delRoot(t){if(null==t){for(var e=0;e<this._roots.length;e++){var i=this._roots[e];i instanceof o&&i.delChildrenFromStorage(this);}return this._elements={},this._roots=[],this._displayList=[],void (this._displayListLen=0);}if(t instanceof Array)for(var e=0,n=t.length;n>e;e++){this.delRoot(t[e]);}else {var a;a="string"==typeof t?this._elements[t]:t;var s=r.indexOf(this._roots,a);s>=0&&(this.delFromMap(a.id),this._roots.splice(s,1),a instanceof o&&a.delChildrenFromStorage(this));}},addToMap:function addToMap(t){return t instanceof o&&(t.__storage=this),t.dirty(),this._elements[t.id]=t,this;},get:function get(t){return this._elements[t];},delFromMap:function delFromMap(t){var e=this._elements,i=e[t];return i&&(delete e[t],i instanceof o&&(i.__storage=null)),this;},dispose:function dispose(){this._elements=this._renderList=this._roots=null;}},t.exports=a;},function(t,e,i){"use strict";var n=i(1),r=i(33).Dispatcher,o="undefined"!=typeof window&&(window.requestAnimationFrame||window.msRequestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame)||function(t){setTimeout(t,16);},a=i(56),s=function s(t){t=t||{},this.stage=t.stage||{},this.onframe=t.onframe||function(){},this._clips=[],this._running=!1,this._time=0,r.call(this);};s.prototype={constructor:s,addClip:function addClip(t){this._clips.push(t);},addAnimator:function addAnimator(t){t.animation=this;for(var e=t.getClips(),i=0;i<e.length;i++){this.addClip(e[i]);}},removeClip:function removeClip(t){var e=n.indexOf(this._clips,t);e>=0&&this._clips.splice(e,1);},removeAnimator:function removeAnimator(t){for(var e=t.getClips(),i=0;i<e.length;i++){this.removeClip(e[i]);}t.animation=null;},_update:function _update(){for(var t=new Date().getTime(),e=t-this._time,i=this._clips,n=i.length,r=[],o=[],a=0;n>a;a++){var s=i[a],l=s.step(t);l&&(r.push(l),o.push(s));}for(var a=0;n>a;){i[a]._needsRemove?(i[a]=i[n-1],i.pop(),n--):a++;}n=r.length;for(var a=0;n>a;a++){o[a].fire(r[a]);}this._time=t,this.onframe(e),this.trigger("frame",e),this.stage.update&&this.stage.update();},start:function start(){function t(){e._running&&(o(t),e._update());}var e=this;this._running=!0,this._time=new Date().getTime(),o(t);},stop:function stop(){this._running=!1;},clear:function clear(){this._clips=[];},animate:function animate(t,e){e=e||{};var i=new a(t,e.loop,e.getter,e.setter);return i;}},n.mixin(s,r),t.exports=s;},function(t,e,i){function n(t){this._target=t.target,this._life=t.life||1e3,this._delay=t.delay||0,this._initialized=!1,this.loop=null==t.loop?!1:t.loop,this.gap=t.gap||0,this.easing=t.easing||"Linear",this.onframe=t.onframe,this.ondestroy=t.ondestroy,this.onrestart=t.onrestart;}var r=i(133);n.prototype={constructor:n,step:function step(t){this._initialized||(this._startTime=new Date().getTime()+this._delay,this._initialized=!0);var e=(t-this._startTime)/this._life;if(!(0>e)){e=Math.min(e,1);var i=this.easing,n="string"==typeof i?r[i]:i,o="function"==typeof n?n(e):e;return this.fire("frame",o),1==e?this.loop?(this.restart(),"restart"):(this._needsRemove=!0,"destroy"):null;}},restart:function restart(){var t=new Date().getTime(),e=(t-this._startTime)%this._life;this._startTime=new Date().getTime()-e+this.gap,this._needsRemove=!1;},fire:function fire(t,e){t="on"+t,this[t]&&this[t](this._target,e);}},t.exports=n;},function(t,e){var i={linear:function linear(t){return t;},quadraticIn:function quadraticIn(t){return t*t;},quadraticOut:function quadraticOut(t){return t*(2-t);},quadraticInOut:function quadraticInOut(t){return (t*=2)<1?.5*t*t:-.5*(--t*(t-2)-1);},cubicIn:function cubicIn(t){return t*t*t;},cubicOut:function cubicOut(t){return --t*t*t+1;},cubicInOut:function cubicInOut(t){return (t*=2)<1?.5*t*t*t:.5*((t-=2)*t*t+2);},quarticIn:function quarticIn(t){return t*t*t*t;},quarticOut:function quarticOut(t){return 1- --t*t*t*t;},quarticInOut:function quarticInOut(t){return (t*=2)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2);},quinticIn:function quinticIn(t){return t*t*t*t*t;},quinticOut:function quinticOut(t){return --t*t*t*t*t+1;},quinticInOut:function quinticInOut(t){return (t*=2)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2);},sinusoidalIn:function sinusoidalIn(t){return 1-Math.cos(t*Math.PI/2);},sinusoidalOut:function sinusoidalOut(t){return Math.sin(t*Math.PI/2);},sinusoidalInOut:function sinusoidalInOut(t){return .5*(1-Math.cos(Math.PI*t));},exponentialIn:function exponentialIn(t){return 0===t?0:Math.pow(1024,t-1);},exponentialOut:function exponentialOut(t){return 1===t?1:1-Math.pow(2,-10*t);},exponentialInOut:function exponentialInOut(t){return 0===t?0:1===t?1:(t*=2)<1?.5*Math.pow(1024,t-1):.5*(-Math.pow(2,-10*(t-1))+2);},circularIn:function circularIn(t){return 1-Math.sqrt(1-t*t);},circularOut:function circularOut(t){return Math.sqrt(1- --t*t);},circularInOut:function circularInOut(t){return (t*=2)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1);},elasticIn:function elasticIn(t){var e,i=.1,n=.4;return 0===t?0:1===t?1:(!i||1>i?(i=1,e=n/4):e=n*Math.asin(1/i)/(2*Math.PI),-(i*Math.pow(2,10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/n)));},elasticOut:function elasticOut(t){var e,i=.1,n=.4;return 0===t?0:1===t?1:(!i||1>i?(i=1,e=n/4):e=n*Math.asin(1/i)/(2*Math.PI),i*Math.pow(2,-10*t)*Math.sin((t-e)*(2*Math.PI)/n)+1);},elasticInOut:function elasticInOut(t){var e,i=.1,n=.4;return 0===t?0:1===t?1:(!i||1>i?(i=1,e=n/4):e=n*Math.asin(1/i)/(2*Math.PI),(t*=2)<1?-.5*(i*Math.pow(2,10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/n)):i*Math.pow(2,-10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/n)*.5+1);},backIn:function backIn(t){var e=1.70158;return t*t*((e+1)*t-e);},backOut:function backOut(t){var e=1.70158;return --t*t*((e+1)*t+e)+1;},backInOut:function backInOut(t){var e=2.5949095;return (t*=2)<1?.5*(t*t*((e+1)*t-e)):.5*((t-=2)*t*((e+1)*t+e)+2);},bounceIn:function bounceIn(t){return 1-i.bounceOut(1-t);},bounceOut:function bounceOut(t){return 1/2.75>t?7.5625*t*t:2/2.75>t?7.5625*(t-=1.5/2.75)*t+.75:2.5/2.75>t?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375;},bounceInOut:function bounceInOut(t){return .5>t?.5*i.bounceIn(2*t):.5*i.bounceOut(2*t-1)+.5;}};t.exports=i;},function(t,e,i){var n=i(57).normalizeRadian,r=2*Math.PI;t.exports={containStroke:function containStroke(t,e,i,o,a,s,l,h,c){if(0===l)return !1;var u=l;h-=t,c-=e;var d=Math.sqrt(h*h+c*c);if(d-u>i||i>d+u)return !1;if(Math.abs(o-a)%r<1e-4)return !0;if(s){var f=o;o=n(a),a=n(f);}else o=n(o),a=n(a);o>a&&(a+=r);var p=Math.atan2(c,h);return 0>p&&(p+=r),p>=o&&a>=p||p+r>=o&&a>=p+r;}};},function(t,e,i){var n=i(18);t.exports={containStroke:function containStroke(t,e,i,r,o,a,s,l,h,c,u){if(0===h)return !1;var d=h;if(u>e+d&&u>r+d&&u>a+d&&u>l+d||e-d>u&&r-d>u&&a-d>u&&l-d>u||c>t+d&&c>i+d&&c>o+d&&c>s+d||t-d>c&&i-d>c&&o-d>c&&s-d>c)return !1;var f=n.cubicProjectPoint(t,e,i,r,o,a,s,l,c,u,null);return d/2>=f;}};},function(t,e){t.exports={containStroke:function containStroke(t,e,i,n,r,o,a){if(0===r)return !1;var s=r,l=0,h=t;if(a>e+s&&a>n+s||e-s>a&&n-s>a||o>t+s&&o>i+s||t-s>o&&i-s>o)return !1;if(t===i)return Math.abs(o-t)<=s/2;l=(e-n)/(t-i),h=(t*n-i*e)/(t-i);var c=l*o-a+h,u=c*c/(l*l+1);return s/2*s/2>=u;}};},function(t,e,i){"use strict";function n(t,e){return Math.abs(t-e)<x;}function r(){var t=b[0];b[0]=b[1],b[1]=t;}function o(t,e,i,n,o,a,s,l,h,c){if(c>e&&c>n&&c>a&&c>l||e>c&&n>c&&a>c&&l>c)return 0;var u=g.cubicRootAt(e,n,a,l,c,_);if(0===u)return 0;for(var d,f,p=0,m=-1,v=0;u>v;v++){var y=_[v],x=g.cubicAt(t,i,o,s,y);h>x||(0>m&&(m=g.cubicExtrema(e,n,a,l,b),b[1]<b[0]&&m>1&&r(),d=g.cubicAt(e,n,a,l,b[0]),m>1&&(f=g.cubicAt(e,n,a,l,b[1]))),p+=2==m?y<b[0]?e>d?1:-1:y<b[1]?d>f?1:-1:f>l?1:-1:y<b[0]?e>d?1:-1:d>l?1:-1);}return p;}function a(t,e,i,n,r,o,a,s){if(s>e&&s>n&&s>o||e>s&&n>s&&o>s)return 0;var l=g.quadraticRootAt(e,n,o,s,_);if(0===l)return 0;var h=g.quadraticExtremum(e,n,o);if(h>=0&&1>=h){for(var c=0,u=g.quadraticAt(e,n,o,h),d=0;l>d;d++){var f=g.quadraticAt(t,i,r,_[d]);a>f||(c+=_[d]<h?e>u?1:-1:u>o?1:-1);}return c;}var f=g.quadraticAt(t,i,r,_[0]);return a>f?0:e>o?1:-1;}function s(t,e,i,n,r,o,a,s){if(s-=e,s>i||-i>s)return 0;var l=Math.sqrt(i*i-s*s);_[0]=-l,_[1]=l;var h=Math.abs(n-r);if(1e-4>h)return 0;if(1e-4>h%y){n=0,r=y;var c=o?1:-1;return a>=_[0]+t&&a<=_[1]+t?c:0;}if(o){var l=n;n=p(r),r=p(l);}else n=p(n),r=p(r);n>r&&(r+=y);for(var u=0,d=0;2>d;d++){var f=_[d];if(f+t>a){var g=Math.atan2(s,f),c=o?1:-1;0>g&&(g=y+g),(g>=n&&r>=g||g+y>=n&&r>=g+y)&&(g>Math.PI/2&&g<1.5*Math.PI&&(c=-c),u+=c);}}return u;}function l(t,e,i,r,l){for(var c=0,p=0,g=0,y=0,x=0,_=0;_<t.length;){var b=t[_++];if(b===h.M&&_>1&&(i||(c+=m(p,g,y,x,r,l)),0!==c))return !0;switch(1==_&&(p=t[_],g=t[_+1],y=p,x=g),b){case h.M:y=t[_++],x=t[_++],p=y,g=x;break;case h.L:if(i){if(v(p,g,t[_],t[_+1],e,r,l))return !0;}else c+=m(p,g,t[_],t[_+1],r,l)||0;p=t[_++],g=t[_++];break;case h.C:if(i){if(u.containStroke(p,g,t[_++],t[_++],t[_++],t[_++],t[_],t[_+1],e,r,l))return !0;}else c+=o(p,g,t[_++],t[_++],t[_++],t[_++],t[_],t[_+1],r,l)||0;p=t[_++],g=t[_++];break;case h.Q:if(i){if(d.containStroke(p,g,t[_++],t[_++],t[_],t[_+1],e,r,l))return !0;}else c+=a(p,g,t[_++],t[_++],t[_],t[_+1],r,l)||0;p=t[_++],g=t[_++];break;case h.A:var w=t[_++],M=t[_++],S=t[_++],A=t[_++],T=t[_++],C=t[_++],I=(t[_++],1-t[_++]),k=Math.cos(T)*S+w,D=Math.sin(T)*A+M;_>1?c+=m(p,g,k,D,r,l):(y=k,x=D);var L=(r-w)*A/S+w;if(i){if(f.containStroke(w,M,A,T,T+C,I,e,L,l))return !0;}else c+=s(w,M,A,T,T+C,I,L,l);p=Math.cos(T+C)*S+w,g=Math.sin(T+C)*A+M;break;case h.R:y=p=t[_++],x=g=t[_++];var P=t[_++],O=t[_++],k=y+P,D=x+O;if(i){if(v(y,x,k,x,e,r,l)||v(k,x,k,D,e,r,l)||v(k,D,y,D,e,r,l)||v(y,D,k,D,e,r,l))return !0;}else c+=m(k,x,k,D,r,l),c+=m(y,D,y,x,r,l);break;case h.Z:if(i){if(v(p,g,y,x,e,r,l))return !0;}else if(c+=m(p,g,y,x,r,l),0!==c)return !0;p=y,g=x;}}return i||n(g,x)||(c+=m(p,g,y,x,r,l)||0),0!==c;}var h=i(27).CMD,c=i(136),u=i(135),d=i(138),f=i(134),p=i(57).normalizeRadian,g=i(18),m=i(75),v=c.containStroke,y=2*Math.PI,x=1e-4,_=[-1,-1,-1],b=[-1,-1];t.exports={contain:function contain(t,e,i){return l(t,0,!1,e,i);},containStroke:function containStroke(t,e,i,n){return l(t,e,!0,i,n);}};},function(t,e,i){var n=i(18);t.exports={containStroke:function containStroke(t,e,i,r,o,a,s,l,h){if(0===s)return !1;var c=s;if(h>e+c&&h>r+c&&h>a+c||e-c>h&&r-c>h&&a-c>h||l>t+c&&l>i+c&&l>o+c||t-c>l&&i-c>l&&o-c>l)return !1;var u=n.quadraticProjectPoint(t,e,i,r,o,a,l,h,null);return c/2>=u;}};},function(t,e){"use strict";function i(t){var e=t[1][0]-t[0][0],i=t[1][1]-t[0][1];return Math.sqrt(e*e+i*i);}function n(t){return [(t[0][0]+t[1][0])/2,(t[0][1]+t[1][1])/2];}var r=function r(){this._track=[];};r.prototype={constructor:r,recognize:function recognize(t,e){return this._doTrack(t,e),this._recognize(t);},clear:function clear(){return this._track.length=0,this;},_doTrack:function _doTrack(t,e){var i=t.touches;if(i){for(var n={points:[],touches:[],target:e,event:t},r=0,o=i.length;o>r;r++){var a=i[r];n.points.push([a.clientX,a.clientY]),n.touches.push(a);}this._track.push(n);}},_recognize:function _recognize(t){for(var e in o){if(o.hasOwnProperty(e)){var i=o[e](this._track,t);if(i)return i;}}}};var o={pinch:function pinch(t,e){var r=t.length;if(r){var o=(t[r-1]||{}).points,a=(t[r-2]||{}).points||o;if(a&&a.length>1&&o&&o.length>1){var s=i(o)/i(a);!isFinite(s)&&(s=1),e.pinchScale=s;var l=n(o);return e.pinchX=l[0],e.pinchY=l[1],{type:"pinch",target:t[0].target,event:e};}}}};t.exports=r;},function(t,e){var i=function i(){this.head=null,this.tail=null,this._len=0;},n=i.prototype;n.insert=function(t){var e=new r(t);return this.insertEntry(e),e;},n.insertEntry=function(t){this.head?(this.tail.next=t,t.prev=this.tail,this.tail=t):this.head=this.tail=t,this._len++;},n.remove=function(t){var e=t.prev,i=t.next;e?e.next=i:this.head=i,i?i.prev=e:this.tail=e,t.next=t.prev=null,this._len--;},n.len=function(){return this._len;};var r=function r(t){this.value=t,this.next,this.prev;},o=function o(t){this._list=new i(),this._map={},this._maxSize=t||10;},a=o.prototype;a.put=function(t,e){var i=this._list,n=this._map;if(null==n[t]){var r=i.len();if(r>=this._maxSize&&r>0){var o=i.head;i.remove(o),delete n[o.key];}var a=i.insert(e);a.key=t,n[t]=a;}},a.get=function(t){var e=this._map[t],i=this._list;return null!=e?(e!==i.tail&&(i.remove(e),i.insertEntry(e)),e.value):void 0;},a.clear=function(){this._list.clear(),this._map={};},t.exports=o;},function(t,e,i){"use strict";var n=i(1),r=i(16),o=function o(t,e,i,n){this.x=null==t?.5:t,this.y=null==e?.5:e,this.r=null==i?.5:i,r.call(this,n);};o.prototype={constructor:o,type:"radial",updateCanvasGradient:function updateCanvasGradient(t,e){for(var i=t.getBoundingRect(),n=i.width,r=i.height,o=Math.min(n,r),a=this.x*n+i.x,s=this.y*r+i.y,l=this.r*o,h=e.createRadialGradient(a,s,0,a,s,l),c=this.colorStops,u=0;u<c.length;u++){h.addColorStop(c[u].offset,c[u].color);}this.canvasGradient=h;}},n.inherits(o,r),t.exports=o;},function(t,e){var i=["lineCap","lineJoin","miterLimit","shadowBlur","shadowOffsetX","shadowOffsetY","shadowColor"],n=function n(t){this.extendFrom(t);};n.prototype={constructor:n,fill:"#000000",stroke:null,opacity:1,lineDash:null,lineDashOffset:0,shadowBlur:0,shadowOffsetX:0,shadowOffsetY:0,lineWidth:1,strokeNoScale:!1,text:null,textFill:"#000",textStroke:null,textPosition:"inside",textBaseline:null,textAlign:null,textVerticalAlign:null,textDistance:5,textShadowBlur:0,textShadowOffsetX:0,textShadowOffsetY:0,bind:function bind(t,e){for(var n=this.fill,r=this.stroke,o=0;o<i.length;o++){var a=i[o];null!=this[a]&&(t[a]=this[a]);}if(null!=r){var s=this.lineWidth;t.lineWidth=s/(this.strokeNoScale&&e&&e.getLineScale?e.getLineScale():1);}null!=n&&(t.fillStyle=n.canvasGradient?n.canvasGradient:n),null!=r&&(t.strokeStyle=r.canvasGradient?r.canvasGradient:r),null!=this.opacity&&(t.globalAlpha=this.opacity);},extendFrom:function extendFrom(t,e){if(t){var i=this;for(var n in t){!t.hasOwnProperty(n)||!e&&i.hasOwnProperty(n)||(i[n]=t[n]);}}},set:function set(t,e){"string"==typeof t?this[t]=e:this.extendFrom(t,!0);},clone:function clone(){var t=new this.constructor();return t.extendFrom(this,!0),t;}};var r,o,a=n.prototype;for(o=0;o<i.length;o++){r=i[o],r in a||(a[r]=null);}t.exports=n;},function(t,e,i){var n=i(5),r=n.min,o=n.max,a=n.scale,s=n.distance,l=n.add;t.exports=function(t,e,i,h){var c,u,d,f,p=[],g=[],m=[],v=[];if(h){d=[1/0,1/0],f=[-(1/0),-(1/0)];for(var y=0,x=t.length;x>y;y++){r(d,d,t[y]),o(f,f,t[y]);}r(d,d,h[0]),o(f,f,h[1]);}for(var y=0,x=t.length;x>y;y++){var _=t[y];if(i)c=t[y?y-1:x-1],u=t[(y+1)%x];else {if(0===y||y===x-1){p.push(n.clone(t[y]));continue;}c=t[y-1],u=t[y+1];}n.sub(g,u,c),a(g,g,e);var b=s(_,c),w=s(_,u),M=b+w;0!==M&&(b/=M,w/=M),a(m,g,-b),a(v,g,w);var S=l([],_,m),A=l([],_,v);h&&(o(S,S,d),r(S,S,f),o(A,A,d),r(A,A,f)),p.push(S),p.push(A);}return i&&p.push(p.shift()),p;};},function(t,e,i){function n(t,e,i,n,r,o,a){var s=.5*(i-t),l=.5*(n-e);return (2*(e-i)+s+l)*a+(-3*(e-i)-2*s-l)*o+s*r+e;}var r=i(5);t.exports=function(t,e){for(var i=t.length,o=[],a=0,s=1;i>s;s++){a+=r.distance(t[s-1],t[s]);}var l=a/2;l=i>l?i:l;for(var s=0;l>s;s++){var h,c,u,d=s/(l-1)*(e?i:i-1),f=Math.floor(d),p=d-f,g=t[f%i];e?(h=t[(f-1+i)%i],c=t[(f+1)%i],u=t[(f+2)%i]):(h=t[0===f?f:f-1],c=t[f>i-2?i-1:f+1],u=t[f>i-3?i-1:f+2]);var m=p*p,v=p*m;o.push([n(h[0],g[0],c[0],u[0],p,m,v),n(h[1],g[1],c[1],u[1],p,m,v)]);}return o;};},function(t,e,i){t.exports=i(6).extend({type:"arc",shape:{cx:0,cy:0,r:0,startAngle:0,endAngle:2*Math.PI,clockwise:!0},style:{stroke:"#000",fill:null},buildPath:function buildPath(t,e){var i=e.cx,n=e.cy,r=Math.max(e.r,0),o=e.startAngle,a=e.endAngle,s=e.clockwise,l=Math.cos(o),h=Math.sin(o);t.moveTo(l*r+i,h*r+n),t.arc(i,n,r,o,a,!s);}});},function(t,e,i){"use strict";var n=i(18),r=n.quadraticSubdivide,o=n.cubicSubdivide,a=n.quadraticAt,s=n.cubicAt,l=[];t.exports=i(6).extend({type:"bezier-curve",shape:{x1:0,y1:0,x2:0,y2:0,cpx1:0,cpy1:0,percent:1},style:{stroke:"#000",fill:null},buildPath:function buildPath(t,e){var i=e.x1,n=e.y1,a=e.x2,s=e.y2,h=e.cpx1,c=e.cpy1,u=e.cpx2,d=e.cpy2,f=e.percent;0!==f&&(t.moveTo(i,n),null==u||null==d?(1>f&&(r(i,h,a,f,l),h=l[1],a=l[2],r(n,c,s,f,l),c=l[1],s=l[2]),t.quadraticCurveTo(h,c,a,s)):(1>f&&(o(i,h,u,a,f,l),h=l[1],u=l[2],a=l[3],o(n,c,d,s,f,l),c=l[1],d=l[2],s=l[3]),t.bezierCurveTo(h,c,u,d,a,s)));},pointAt:function pointAt(t){var e=this.shape,i=e.cpx2,n=e.cpy2;return null===i||null===n?[a(e.x1,e.cpx1,e.x2,t),a(e.y1,e.cpy1,e.y2,t)]:[s(e.x1,e.cpx1,e.cpx1,e.x2,t),s(e.y1,e.cpy1,e.cpy1,e.y2,t)];}});},function(t,e,i){"use strict";t.exports=i(6).extend({type:"circle",shape:{cx:0,cy:0,r:0},buildPath:function buildPath(t,e){t.moveTo(e.cx+e.r,e.cy),t.arc(e.cx,e.cy,e.r,0,2*Math.PI,!0);}});},function(t,e,i){t.exports=i(6).extend({type:"line",shape:{x1:0,y1:0,x2:0,y2:0,percent:1},style:{stroke:"#000",fill:null},buildPath:function buildPath(t,e){var i=e.x1,n=e.y1,r=e.x2,o=e.y2,a=e.percent;0!==a&&(t.moveTo(i,n),1>a&&(r=i*(1-a)+r*a,o=n*(1-a)+o*a),t.lineTo(r,o));},pointAt:function pointAt(t){var e=this.shape;return [e.x1*(1-t)+e.x2*t,e.y1*(1-t)+e.y2*t];}});},function(t,e,i){var n=i(59);t.exports=i(6).extend({type:"polygon",shape:{points:null,smooth:!1,smoothConstraint:null},buildPath:function buildPath(t,e){n.buildPath(t,e,!0);}});},function(t,e,i){var n=i(59);t.exports=i(6).extend({type:"polyline",shape:{points:null,smooth:!1,smoothConstraint:null},style:{stroke:"#000",fill:null},buildPath:function buildPath(t,e){n.buildPath(t,e,!1);}});},function(t,e,i){var n=i(60);t.exports=i(6).extend({type:"rect",shape:{r:0,x:0,y:0,width:0,height:0},buildPath:function buildPath(t,e){var i=e.x,r=e.y,o=e.width,a=e.height;e.r?n.buildPath(t,e):t.rect(i,r,o,a),t.closePath();}});},function(t,e,i){t.exports=i(6).extend({type:"ring",shape:{cx:0,cy:0,r:0,r0:0},buildPath:function buildPath(t,e){var i=e.cx,n=e.cy,r=2*Math.PI;t.moveTo(i+e.r,n),t.arc(i,n,e.r,0,r,!1),t.moveTo(i+e.r0,n),t.arc(i,n,e.r0,0,r,!0);}});},function(t,e,i){t.exports=i(6).extend({type:"sector",shape:{cx:0,cy:0,r0:0,r:0,startAngle:0,endAngle:2*Math.PI,clockwise:!0},buildPath:function buildPath(t,e){var i=e.cx,n=e.cy,r=Math.max(e.r0||0,0),o=Math.max(e.r,0),a=e.startAngle,s=e.endAngle,l=e.clockwise,h=Math.cos(a),c=Math.sin(a);t.moveTo(h*r+i,c*r+n),t.lineTo(h*o+i,c*o+n),t.arc(i,n,o,a,s,!l),t.lineTo(Math.cos(s)*r+i,Math.sin(s)*r+n),0!==r&&t.arc(i,n,r,s,a,l),t.closePath();}});},function(t,e,i){"use strict";var n=i(56),r=i(1),o=r.isString,a=r.isFunction,s=r.isObject,l=i(45),h=function h(){this.animators=[];};h.prototype={constructor:h,animate:function animate(t,e){var i,o=!1,a=this,s=this.__zr;if(t){var h=t.split("."),c=a;o="shape"===h[0];for(var u=0,d=h.length;d>u;u++){c&&(c=c[h[u]]);}c&&(i=c);}else i=a;if(!i)return void l('Property "'+t+'" is not existed in element '+a.id);var f=a.animators,p=new n(i,e);return p.during(function(t){a.dirty(o);}).done(function(){f.splice(r.indexOf(f,p),1);}),f.push(p),s&&s.animation.addAnimator(p),p;},stopAnimation:function stopAnimation(t){for(var e=this.animators,i=e.length,n=0;i>n;n++){e[n].stop(t);}return e.length=0,this;},animateTo:function animateTo(t,e,i,n,r){function s(){h--,h||r&&r();}o(i)?(r=n,n=i,i=0):a(n)?(r=n,n="linear",i=0):a(i)?(r=i,i=0):a(e)?(r=e,e=500):e||(e=500),this.stopAnimation(),this._animateToShallow("",this,t,e,i,n,r);var l=this.animators.slice(),h=l.length;h||r&&r();for(var c=0;c<l.length;c++){l[c].done(s).start(n);}},_animateToShallow:function _animateToShallow(t,e,i,n,o){var a={},l=0;for(var h in i){if(null!=e[h])s(i[h])&&!r.isArrayLike(i[h])?this._animateToShallow(t?t+"."+h:h,e[h],i[h],n,o):(a[h]=i[h],l++);else if(null!=i[h])if(t){var c={};c[t]={},c[t][h]=i[h],this.attr(c);}else this.attr(h,i[h]);}return l>0&&this.animate(t,!1).when(null==n?500:n,a).delay(o||0),this;}},t.exports=h;},function(t,e){function i(){this.on("mousedown",this._dragStart,this),this.on("mousemove",this._drag,this),this.on("mouseup",this._dragEnd,this),this.on("globalout",this._dragEnd,this);}i.prototype={constructor:i,_dragStart:function _dragStart(t){var e=t.target;e&&e.draggable&&(this._draggingTarget=e,e.dragging=!0,this._x=t.offsetX,this._y=t.offsetY,this._dispatchProxy(e,"dragstart",t.event));},_drag:function _drag(t){var e=this._draggingTarget;if(e){var i=t.offsetX,n=t.offsetY,r=i-this._x,o=n-this._y;this._x=i,this._y=n,e.drift(r,o,t),this._dispatchProxy(e,"drag",t.event);var a=this.findHover(i,n,e),s=this._dropTarget;this._dropTarget=a,e!==a&&(s&&a!==s&&this._dispatchProxy(s,"dragleave",t.event),a&&a!==s&&this._dispatchProxy(a,"dragenter",t.event));}},_dragEnd:function _dragEnd(t){var e=this._draggingTarget;e&&(e.dragging=!1),this._dispatchProxy(e,"dragend",t.event),this._dropTarget&&this._dispatchProxy(this._dropTarget,"drop",t.event),this._draggingTarget=null,this._dropTarget=null;}},t.exports=i;},function(t,e,i){function n(t,e,i,n,r,o,a,s,l,h,c){var g=l*(p/180),y=f(g)*(t-i)/2+d(g)*(e-n)/2,x=-1*d(g)*(t-i)/2+f(g)*(e-n)/2,_=y*y/(a*a)+x*x/(s*s);_>1&&(a*=u(_),s*=u(_));var b=(r===o?-1:1)*u((a*a*(s*s)-a*a*(x*x)-s*s*(y*y))/(a*a*(x*x)+s*s*(y*y)))||0,w=b*a*x/s,M=b*-s*y/a,S=(t+i)/2+f(g)*w-d(g)*M,A=(e+n)/2+d(g)*w+f(g)*M,T=v([1,0],[(y-w)/a,(x-M)/s]),C=[(y-w)/a,(x-M)/s],I=[(-1*y-w)/a,(-1*x-M)/s],k=v(C,I);m(C,I)<=-1&&(k=p),m(C,I)>=1&&(k=0),0===o&&k>0&&(k-=2*p),1===o&&0>k&&(k+=2*p),c.addData(h,S,A,a,s,T,k,g,o);}function r(t){if(!t)return [];var e,i=t.replace(/-/g," -").replace(/  /g," ").replace(/ /g,",").replace(/,,/g,",");for(e=0;e<c.length;e++){i=i.replace(new RegExp(c[e],"g"),"|"+c[e]);}var r,o=i.split("|"),a=0,l=0,h=new s(),u=s.CMD;for(e=1;e<o.length;e++){var d,f=o[e],p=f.charAt(0),g=0,m=f.slice(1).replace(/e,-/g,"e-").split(",");m.length>0&&""===m[0]&&m.shift();for(var v=0;v<m.length;v++){m[v]=parseFloat(m[v]);}for(;g<m.length&&!isNaN(m[g])&&!isNaN(m[0]);){var y,x,_,b,w,M,S,A=a,T=l;switch(p){case "l":a+=m[g++],l+=m[g++],d=u.L,h.addData(d,a,l);break;case "L":a=m[g++],l=m[g++],d=u.L,h.addData(d,a,l);break;case "m":a+=m[g++],l+=m[g++],d=u.M,h.addData(d,a,l),p="l";break;case "M":a=m[g++],l=m[g++],d=u.M,h.addData(d,a,l),p="L";break;case "h":a+=m[g++],d=u.L,h.addData(d,a,l);break;case "H":a=m[g++],d=u.L,h.addData(d,a,l);break;case "v":l+=m[g++],d=u.L,h.addData(d,a,l);break;case "V":l=m[g++],d=u.L,h.addData(d,a,l);break;case "C":d=u.C,h.addData(d,m[g++],m[g++],m[g++],m[g++],m[g++],m[g++]),a=m[g-2],l=m[g-1];break;case "c":d=u.C,h.addData(d,m[g++]+a,m[g++]+l,m[g++]+a,m[g++]+l,m[g++]+a,m[g++]+l),a+=m[g-2],l+=m[g-1];break;case "S":y=a,x=l;var C=h.len(),I=h.data;r===u.C&&(y+=a-I[C-4],x+=l-I[C-3]),d=u.C,A=m[g++],T=m[g++],a=m[g++],l=m[g++],h.addData(d,y,x,A,T,a,l);break;case "s":y=a,x=l;var C=h.len(),I=h.data;r===u.C&&(y+=a-I[C-4],x+=l-I[C-3]),d=u.C,A=a+m[g++],T=l+m[g++],a+=m[g++],l+=m[g++],h.addData(d,y,x,A,T,a,l);break;case "Q":A=m[g++],T=m[g++],a=m[g++],l=m[g++],d=u.Q,h.addData(d,A,T,a,l);break;case "q":A=m[g++]+a,T=m[g++]+l,a+=m[g++],l+=m[g++],d=u.Q,h.addData(d,A,T,a,l);break;case "T":y=a,x=l;var C=h.len(),I=h.data;r===u.Q&&(y+=a-I[C-4],x+=l-I[C-3]),a=m[g++],l=m[g++],d=u.Q,h.addData(d,y,x,a,l);break;case "t":y=a,x=l;var C=h.len(),I=h.data;r===u.Q&&(y+=a-I[C-4],x+=l-I[C-3]),a+=m[g++],l+=m[g++],d=u.Q,h.addData(d,y,x,a,l);break;case "A":_=m[g++],b=m[g++],w=m[g++],M=m[g++],S=m[g++],A=a,T=l,a=m[g++],l=m[g++],d=u.A,n(A,T,a,l,M,S,_,b,w,d,h);break;case "a":_=m[g++],b=m[g++],w=m[g++],M=m[g++],S=m[g++],A=a,T=l,a+=m[g++],l+=m[g++],d=u.A,n(A,T,a,l,M,S,_,b,w,d,h);}}"z"!==p&&"Z"!==p||(d=u.Z,h.addData(d)),r=d;}return h.toStatic(),h;}function o(t,e){var i,n=r(t);return e=e||{},e.buildPath=function(t){t.setData(n.data),i&&l(t,i);var e=t.getContext();e&&t.rebuildPath(e);},e.applyTransform=function(t){i||(i=h.create()),h.mul(i,t,i);},e;}var a=i(6),s=i(27),l=i(157),h=i(19),c=["m","M","l","L","v","V","h","H","z","Z","c","C","q","Q","t","T","s","S","a","A"],u=Math.sqrt,d=Math.sin,f=Math.cos,p=Math.PI,g=function g(t){return Math.sqrt(t[0]*t[0]+t[1]*t[1]);},m=function m(t,e){return (t[0]*e[0]+t[1]*e[1])/(g(t)*g(e));},v=function v(t,e){return (t[0]*e[1]<t[1]*e[0]?-1:1)*Math.acos(m(t,e));};t.exports={createFromString:function createFromString(t,e){return new a(o(t,e));},extendFromString:function extendFromString(t,e){return a.extend(o(t,e));},mergePath:function mergePath(t,e){var i,n,r=[],o=t.length;for(n=0;o>n;n++){i=t[n],i.__dirty&&i.buildPath(i.path,i.shape),r.push(i.path);}var s=new a(e);return s.buildPath=function(t){t.appendPath(r);var e=t.getContext();e&&t.rebuildPath(e);},s;}};},function(t,e,i){function n(t,e){var i,n,o,c,u,d,f=t.data,p=r.M,g=r.C,m=r.L,v=r.R,y=r.A,x=r.Q;for(o=0,c=0;o<f.length;){switch(i=f[o++],c=o,n=0,i){case p:n=1;break;case m:n=1;break;case g:n=3;break;case x:n=2;break;case y:var _=e[4],b=e[5],w=l(e[0]*e[0]+e[1]*e[1]),M=l(e[2]*e[2]+e[3]*e[3]),S=h(-e[1]/M,e[0]/w);f[o++]+=_,f[o++]+=b,f[o++]*=w,f[o++]*=M,f[o++]+=S,f[o++]+=S,o+=2,c=o;break;case v:d[0]=f[o++],d[1]=f[o++],a(d,d,e),f[c++]=d[0],f[c++]=d[1],d[0]+=f[o++],d[1]+=f[o++],a(d,d,e),f[c++]=d[0],f[c++]=d[1];}for(u=0;n>u;u++){var d=s[u];d[0]=f[o++],d[1]=f[o++],a(d,d,e),f[c++]=d[0],f[c++]=d[1];}}}var r=i(27).CMD,o=i(5),a=o.applyTransform,s=[[],[],[]],l=Math.sqrt,h=Math.atan2;t.exports=n;},function(t,e,i){if(!i(15).canvasSupported){var n,r="urn:schemas-microsoft-com:vml",o=window,a=o.document,s=!1;try{!a.namespaces.zrvml&&a.namespaces.add("zrvml",r),n=function n(t){return a.createElement("<zrvml:"+t+' class="zrvml">');};}catch(l){n=function n(t){return a.createElement("<"+t+' xmlns="'+r+'" class="zrvml">');};}var h=function h(){if(!s){s=!0;var t=a.styleSheets;t.length<31?a.createStyleSheet().addRule(".zrvml","behavior:url(#default#VML)"):t[0].addRule(".zrvml","behavior:url(#default#VML)");}};t.exports={doc:a,initVML:h,createNode:n};}},,function(t,e,i){function n(t,e,i){v.call(this),this.type=t,this.zr=e,this.opt=y.clone(i),this.group=new x.Group(),this._containerRect=null,this._track=[],this._dragging,this._cover,this._disabled=!0,this._handlers={mousedown:_(s,this),mousemove:_(l,this),mouseup:_(h,this)},b(C,function(t){this.zr.on(t,this._handlers[t]);},this);}function r(t){t.traverse(function(t){t.z=A;});}function o(t,e){var i=this.group.transformCoordToLocal(t,e);return !this._containerRect||this._containerRect.contain(i[0],i[1]);}function a(t){var e=t.event;e.preventDefault&&e.preventDefault();}function s(t){if(!(this._disabled||t.target&&t.target.draggable)){a(t);var e=t.offsetX,i=t.offsetY;o.call(this,e,i)&&(this._dragging=!0,this._track=[[e,i]]);}}function l(t){this._dragging&&!this._disabled&&(a(t),c.call(this,t));}function h(t){this._dragging&&!this._disabled&&(a(t),c.call(this,t,!0),this._dragging=!1,this._track=[]);}function c(t,e){var i=t.offsetX,n=t.offsetY;if(o.call(this,i,n)){this._track.push([i,n]);var r=u.call(this)?I[this.type].getRanges.call(this):[];d.call(this,r),this.trigger("selected",y.clone(r)),e&&this.trigger("selectEnd",y.clone(r));}}function u(){var t=this._track;if(!t.length)return !1;var e=t[t.length-1],i=t[0],n=e[0]-i[0],r=e[1]-i[1],o=S(n*n+r*r,.5);return o>T;}function d(t){var e=I[this.type];t&&t.length?(this._cover||(this._cover=e.create.call(this),this.group.add(this._cover)),e.update.call(this,t)):(this.group.remove(this._cover),this._cover=null),r(this.group);}function f(){var t=this.group,e=t.parent;e&&e.remove(t);}function p(){var t=this.opt;return new x.Rect({style:{stroke:t.stroke,fill:t.fill,lineWidth:t.lineWidth,opacity:t.opacity}});}function g(){return y.map(this._track,function(t){return this.group.transformCoordToLocal(t[0],t[1]);},this);}function m(){var t=g.call(this),e=t.length-1;return 0>e&&(e=0),[t[0],t[e]];}var v=i(21),y=i(1),x=i(3),_=y.bind,b=y.each,w=Math.min,M=Math.max,S=Math.pow,A=1e4,T=2,C=["mousedown","mousemove","mouseup"];n.prototype={constructor:n,enable:function enable(t,e){this._disabled=!1,f.call(this),this._containerRect=e!==!1?e||t.getBoundingRect():null,t.add(this.group);},update:function update(t){d.call(this,t&&y.clone(t));},disable:function disable(){this._disabled=!0,f.call(this);},dispose:function dispose(){this.disable(),b(C,function(t){this.zr.off(t,this._handlers[t]);},this);}},y.mixin(n,v);var I={line:{create:p,getRanges:function getRanges(){var t=m.call(this),e=w(t[0][0],t[1][0]),i=M(t[0][0],t[1][0]);return [[e,i]];},update:function update(t){var e=t[0],i=this.opt.width;this._cover.setShape({x:e[0],y:-i/2,width:e[1]-e[0],height:i});}},rect:{create:p,getRanges:function getRanges(){var t=m.call(this),e=[w(t[1][0],t[0][0]),w(t[1][1],t[0][1])],i=[M(t[1][0],t[0][0]),M(t[1][1],t[0][1])];return [[[e[0],i[0]],[e[1],i[1]]]];},update:function update(t){var e=t[0];this._cover.setShape({x:e[0][0],y:e[1][0],width:e[0][1]-e[0][0],height:e[1][1]-e[1][0]});}}};t.exports=n;},function(t,e,i){function n(){this.group=new r.Group(),this._symbolEl=new s({silent:!0});}var r=i(3),o=i(24),a=i(1),s=r.extendShape({shape:{points:null,sizes:null},symbolProxy:null,buildPath:function buildPath(t,e){for(var i=e.points,n=e.sizes,r=this.symbolProxy,o=r.shape,a=0;a<i.length;a++){var s=i[a],l=n[a];l[0]<4?t.rect(s[0]-l[0]/2,s[1]-l[1]/2,l[0],l[1]):(o.x=s[0]-l[0]/2,o.y=s[1]-l[1]/2,o.width=l[0],o.height=l[1],r.buildPath(t,o));}}}),l=n.prototype;l.updateData=function(t){this.group.removeAll();var e=this._symbolEl,i=t.hostModel;e.setShape({points:t.mapArray(t.getItemLayout),sizes:t.mapArray(function(e){var i=t.getItemVisual(e,"symbolSize");return a.isArray(i)||(i=[i,i]),i;})}),e.symbolProxy=o.createSymbol(t.getVisual("symbol"),0,0,0,0),e.setColor=e.symbolProxy.setColor,e.setStyle(i.getModel("itemStyle.normal").getItemStyle(["color"]));var n=t.getVisual("color");n&&e.setColor(n),this.group.add(this._symbolEl);},l.updateLayout=function(t){var e=t.getData();this._symbolEl.setShape({points:e.mapArray(e.getItemLayout)});},l.remove=function(){this.group.removeAll();},t.exports=n;},function(t,e,i){var n=i(3),r=n.Line.prototype,o=n.BezierCurve.prototype;t.exports=n.extendShape({type:"ec-line",style:{stroke:"#000",fill:null},shape:{x1:0,y1:0,x2:0,y2:0,percent:1,cpx1:null,cpy1:null},buildPath:function buildPath(t,e){(null==e.cpx1||null==e.cpy1?r:o).buildPath(t,e);},pointAt:function pointAt(t){var e=this.shape;return null==e.cpx1||null==e.cpy1?r.pointAt.call(this,t):o.pointAt.call(this,t);}});},function(t,e,i){var n=i(1),r=i(2);i(164),i(165),r.registerVisualCoding("chart",n.curry(i(44),"scatter","circle",null)),r.registerLayout(n.curry(i(53),"scatter")),i(34);},function(t,e,i){"use strict";var n=i(36),r=i(13);t.exports=r.extend({type:"series.scatter",dependencies:["grid","polar"],getInitialData:function getInitialData(t,e){var i=n(t.data,this,e);return i;},defaultOption:{coordinateSystem:"cartesian2d",zlevel:0,z:2,legendHoverLink:!0,hoverAnimation:!0,xAxisIndex:0,yAxisIndex:0,polarIndex:0,geoIndex:0,symbolSize:10,large:!1,largeThreshold:2e3,itemStyle:{normal:{opacity:.8}}}});},function(t,e,i){var n=i(38),r=i(161);i(2).extendChartView({type:"scatter",init:function init(){this._normalSymbolDraw=new n(),this._largeSymbolDraw=new r();},render:function render(t,e,i){var n=t.getData(),r=this._largeSymbolDraw,o=this._normalSymbolDraw,a=this.group,s=t.get("large")&&n.count()>t.get("largeThreshold")?r:o;this._symbolDraw=s,s.updateData(n),a.add(s.group),a.remove(s===r?o.group:r.group);},updateLayout:function updateLayout(t){this._symbolDraw.updateLayout(t);},remove:function remove(t,e){this._symbolDraw&&this._symbolDraw.remove(e,!0);}});},function(t,e,i){i(101),i(39),i(40),i(172),i(173),i(168),i(169),i(99),i(98);},function(t,e,i){function n(t,e){var i=[1/0,-(1/0)];return h(e,function(e){var n=e.getData();n&&h(e.coordDimToDataDim(t),function(t){var e=n.getDataExtent(t);e[0]<i[0]&&(i[0]=e[0]),e[1]>i[1]&&(i[1]=e[1]);});},this),i;}function r(t,e,i){var n=i.getAxisModel(),r=n.axis.scale,a=[0,100],s=[t.start,t.end],u=[];return e=e.slice(),o(e,n,r),h(["startValue","endValue"],function(e){u.push(null!=t[e]?r.parse(t[e]):null);}),h([0,1],function(t){function i(e){return Math[0===t?"floor":"ceil"](1e12*e)/1e12;}var n=u[t],o=s[t];null!=o||null==n?(null==o&&(o=a[t]),n=r.parse(l.linearMap(o,a,e,!0))):o=l.linearMap(n,e,a,!0),u[t]=i(n),s[t]=i(o);}),{valueWindow:c(u),percentWindow:c(s)};}function o(t,e,i){return h(["min","max"],function(n,r){var o=e.get(n,!0);null!=o&&(o+"").toLowerCase()!=="data"+n&&(t[r]=i.parse(o));}),e.get("scale",!0)||(t[0]>0&&(t[0]=0),t[1]<0&&(t[1]=0)),t;}function a(t,e){var i=t.getAxisModel(),n=t._percentWindow,r=t._valueWindow;if(n){var o=e||0===n[0]&&100===n[1],a=!e&&l.getPixelPrecision(r,[0,500]),s=!(e||20>a&&a>=0),h=e||o||s;i.setRange&&i.setRange(h?null:+r[0].toFixed(a),h?null:+r[1].toFixed(a));}}var s=i(1),l=i(4),h=s.each,c=l.asc,u=function u(t,e,i,n){this._dimName=t,this._axisIndex=e,this._valueWindow,this._percentWindow,this._dataExtent,this.ecModel=n,this._dataZoomModel=i;};u.prototype={constructor:u,hostedBy:function hostedBy(t){return this._dataZoomModel===t;},getDataExtent:function getDataExtent(){return this._dataExtent.slice();},getDataValueWindow:function getDataValueWindow(){return this._valueWindow.slice();},getDataPercentWindow:function getDataPercentWindow(){return this._percentWindow.slice();},getTargetSeriesModels:function getTargetSeriesModels(){var t=[];return this.ecModel.eachSeries(function(e){this._axisIndex===e.get(this._dimName+"AxisIndex")&&t.push(e);},this),t;},getAxisModel:function getAxisModel(){return this.ecModel.getComponent(this._dimName+"Axis",this._axisIndex);},getOtherAxisModel:function getOtherAxisModel(){var t,e,i=this._dimName,n=this.ecModel,r=this.getAxisModel(),o="x"===i||"y"===i;o?(e="gridIndex",t="x"===i?"y":"x"):(e="polarIndex",t="angle"===i?"radius":"angle");var a;return n.eachComponent(t+"Axis",function(t){(t.get(e)||0)===(r.get(e)||0)&&(a=t);}),a;},reset:function reset(t){if(t===this._dataZoomModel){var e=this._dataExtent=n(this._dimName,this.getTargetSeriesModels()),i=r(t.option,e,this);this._valueWindow=i.valueWindow,this._percentWindow=i.percentWindow,a(this);}},restore:function restore(t){t===this._dataZoomModel&&(this._valueWindow=this._percentWindow=null,a(this,!0));},filterData:function filterData(t){function e(t){return t>=o[0]&&t<=o[1];}if(t===this._dataZoomModel){var i=this._dimName,n=this.getTargetSeriesModels(),r=t.get("filterMode"),o=this._valueWindow,a=this.getOtherAxisModel();t.get("$fromToolbox")&&a&&"category"===a.get("type")&&(r="empty"),h(n,function(t){var n=t.getData();n&&h(t.coordDimToDataDim(i),function(i){"empty"===r?t.setData(n.map(i,function(t){return e(t)?t:NaN;})):n.filterSelf(i,e);});});}}},t.exports=u;},function(t,e,i){t.exports=i(39).extend({type:"dataZoom.inside",defaultOption:{zoomLock:!1}});},function(t,e,i){function n(t,e,i,n){e=e.slice();var r=n.axisModels[0];if(r){var a=o(t,r,i),s=a.signal*(e[1]-e[0])*a.pixel/a.pixelLength;return h(s,e,[0,100],"rigid"),e;}}function r(t,e,i,n,r,s){i=i.slice();var l=r.axisModels[0];if(l){var h=o(e,l,n),c=h.pixel-h.pixelStart,u=c/h.pixelLength*(i[1]-i[0])+i[0];return t=Math.max(t,0),i[0]=(i[0]-u)*t+u,i[1]=(i[1]-u)*t+u,a(i);}}function o(t,e,i){var n=e.axis,r=i.rect,o={};return "x"===n.dim?(o.pixel=t[0],o.pixelLength=r.width,o.pixelStart=r.x,o.signal=n.inverse?1:-1):(o.pixel=t[1],o.pixelLength=r.height,o.pixelStart=r.y,o.signal=n.inverse?-1:1),o;}function a(t){var e=[0,100];return !(t[0]<=e[1])&&(t[0]=e[1]),!(t[1]<=e[1])&&(t[1]=e[1]),!(t[0]>=e[0])&&(t[0]=e[0]),!(t[1]>=e[0])&&(t[1]=e[0]),t;}var s=i(40),l=i(1),h=i(71),c=i(174),u=l.bind,d=s.extend({type:"dataZoom.inside",init:function init(t,e){this._range;},render:function render(t,e,i,n){d.superApply(this,"render",arguments),c.shouldRecordRange(n,t.id)&&(this._range=t.getPercentRange());var r=this.getTargetInfo().cartesians,o=l.map(r,function(t){return c.generateCoordId(t.model);});l.each(r,function(e){var n=e.model;c.register(i,{coordId:c.generateCoordId(n),allCoordIds:o,coordinateSystem:n.coordinateSystem,dataZoomId:t.id,throttleRage:t.get("throttle",!0),panGetRange:u(this._onPan,this,e),zoomGetRange:u(this._onZoom,this,e)});},this);},remove:function remove(){c.unregister(this.api,this.dataZoomModel.id),d.superApply(this,"remove",arguments),this._range=null;},dispose:function dispose(){c.unregister(this.api,this.dataZoomModel.id),d.superApply(this,"dispose",arguments),this._range=null;},_onPan:function _onPan(t,e,i,r){return this._range=n([i,r],this._range,e,t);},_onZoom:function _onZoom(t,e,i,n,o){var a=this.dataZoomModel;return a.option.zoomLock?this._range:this._range=r(1/i,[n,o],this._range,e,t,a);}});t.exports=d;},function(t,e,i){var n=i(39);t.exports=n.extend({type:"dataZoom.select"});},function(t,e,i){t.exports=i(40).extend({type:"dataZoom.select"});},function(t,e,i){var n=i(39),r=(i(11),i(1),n.extend({type:"dataZoom.slider",layoutMode:"box",defaultOption:{show:!0,right:"ph",top:"ph",width:"ph",height:"ph",left:null,bottom:null,backgroundColor:"rgba(47,69,84,0)",dataBackgroundColor:"#ddd",fillerColor:"rgba(47,69,84,0.15)",handleColor:"rgba(148,164,165,0.95)",handleSize:10,labelPrecision:null,labelFormatter:null,showDetail:!0,showDataShadow:"auto",realtime:!0,zoomLock:!1,textStyle:{color:"#333"}},mergeOption:function mergeOption(t){r.superApply(this,"mergeOption",arguments);}}));t.exports=r;},function(t,e,i){function n(t){return "x"===t?"y":"x";}var r=i(1),o=i(3),a=i(126),s=i(40),l=o.Rect,h=i(4),c=h.linearMap,u=i(11),d=i(71),f=h.asc,p=r.bind,g=Math.round,m=Math.max,v=r.each,y=7,x=1,_=30,b="horizontal",w="vertical",M=5,S=["line","bar","candlestick","scatter"],A=s.extend({type:"dataZoom.slider",init:function init(t,e){this._displayables={},this._orient,this._range,this._handleEnds,this._size,this._halfHandleSize,this._location,this._dragging,this._dataShadowInfo,this.api=e;},render:function render(t,e,i,n){return A.superApply(this,"render",arguments),a.createOrUpdate(this,"_dispatchZoomAction",this.dataZoomModel.get("throttle"),"fixRate"),this._orient=t.get("orient"),this._halfHandleSize=g(t.get("handleSize")/2),this.dataZoomModel.get("show")===!1?void this.group.removeAll():(n&&"dataZoom"===n.type&&n.from===this.uid||this._buildView(),void this._updateView());},remove:function remove(){A.superApply(this,"remove",arguments),a.clear(this,"_dispatchZoomAction");},dispose:function dispose(){A.superApply(this,"dispose",arguments),a.clear(this,"_dispatchZoomAction");},_buildView:function _buildView(){var t=this.group;t.removeAll(),this._resetLocation(),this._resetInterval();var e=this._displayables.barGroup=new o.Group();this._renderBackground(),this._renderDataShadow(),this._renderHandle(),t.add(e),this._positionGroup();},_resetLocation:function _resetLocation(){var t=this.dataZoomModel,e=this.api,i=this._findCoordRect(),n={width:e.getWidth(),height:e.getHeight()},o=this._orient===b?{right:n.width-i.x-i.width,top:n.height-_-y,width:i.width,height:_}:{right:y,top:i.y,width:_,height:i.height},a=u.getLayoutParams(t.option);r.each(["right","top","width","height"],function(t){"ph"===a[t]&&(a[t]=o[t]);});var s=u.getLayoutRect(a,n,t.padding);this._location={x:s.x,y:s.y},this._size=[s.width,s.height],this._orient===w&&this._size.reverse();},_positionGroup:function _positionGroup(){var t=this.group,e=this._location,i=this._orient,n=this.dataZoomModel.getFirstTargetAxisModel(),r=n&&n.get("inverse"),o=this._displayables.barGroup,a=(this._dataShadowInfo||{}).otherAxisInverse;o.attr(i!==b||r?i===b&&r?{scale:a?[-1,1]:[-1,-1]}:i!==w||r?{scale:a?[-1,-1]:[-1,1],rotation:Math.PI/2}:{scale:a?[1,-1]:[1,1],rotation:Math.PI/2}:{scale:a?[1,1]:[1,-1]});var s=t.getBoundingRect([o]);t.position[0]=e.x-s.x,t.position[1]=e.y-s.y;},_getViewExtent:function _getViewExtent(){var t=this._halfHandleSize,e=m(this._size[0],4*t),i=[t,e-t];return i;},_renderBackground:function _renderBackground(){var t=this.dataZoomModel,e=this._size;this._displayables.barGroup.add(new l({silent:!0,shape:{x:0,y:0,width:e[0],height:e[1]},style:{fill:t.get("backgroundColor")}}));},_renderDataShadow:function _renderDataShadow(){var t=this._dataShadowInfo=this._prepareDataShadowInfo();if(t){var e=this._size,i=t.series,n=i.getRawData(),r=i.getShadowDim?i.getShadowDim():t.otherDim,a=n.getDataExtent(r),s=.3*(a[1]-a[0]);a=[a[0]-s,a[1]+s];var l=[0,e[1]],h=[0,e[0]],u=[[e[0],0],[0,0]],d=h[1]/(n.count()-1),f=0,p=Math.round(n.count()/e[0]);n.each([r],function(t,e){if(p>0&&e%p)return void (f+=d);var i=null==t||isNaN(t)||""===t?null:c(t,a,l,!0);null!=i&&u.push([f,i]),f+=d;}),this._displayables.barGroup.add(new o.Polyline({shape:{points:u},style:{fill:this.dataZoomModel.get("dataBackgroundColor"),lineWidth:0},silent:!0,z2:-20}));}},_prepareDataShadowInfo:function _prepareDataShadowInfo(){var t=this.dataZoomModel,e=t.get("showDataShadow");if(e!==!1){var i,o=this.ecModel;return t.eachTargetAxis(function(a,s){var l=t.getAxisProxy(a.name,s).getTargetSeriesModels();r.each(l,function(t){if(!(i||e!==!0&&r.indexOf(S,t.get("type"))<0)){var l=n(a.name),h=o.getComponent(a.axis,s).axis;i={thisAxis:h,series:t,thisDim:a.name,otherDim:l,otherAxisInverse:t.coordinateSystem.getOtherAxis(h).inverse};}},this);},this),i;}},_renderHandle:function _renderHandle(){var t=this._displayables,e=t.handles=[],i=t.handleLabels=[],n=this._displayables.barGroup,r=this._size;n.add(t.filler=new l({draggable:!0,cursor:"move",drift:p(this._onDragMove,this,"all"),ondragend:p(this._onDragEnd,this),onmouseover:p(this._showDataInfo,this,!0),onmouseout:p(this._showDataInfo,this,!1),style:{fill:this.dataZoomModel.get("fillerColor"),textPosition:"inside"}})),n.add(new l(o.subPixelOptimizeRect({silent:!0,shape:{x:0,y:0,width:r[0],height:r[1]},style:{stroke:this.dataZoomModel.get("dataBackgroundColor"),lineWidth:x,fill:"rgba(0,0,0,0)"}}))),v([0,1],function(t){n.add(e[t]=new l({style:{fill:this.dataZoomModel.get("handleColor")},cursor:"move",draggable:!0,drift:p(this._onDragMove,this,t),ondragend:p(this._onDragEnd,this),onmouseover:p(this._showDataInfo,this,!0),onmouseout:p(this._showDataInfo,this,!1)}));var r=this.dataZoomModel.textStyleModel;this.group.add(i[t]=new o.Text({silent:!0,invisible:!0,style:{x:0,y:0,text:"",textVerticalAlign:"middle",textAlign:"center",fill:r.getTextColor(),textFont:r.getFont()}}));},this);},_resetInterval:function _resetInterval(){var t=this._range=this.dataZoomModel.getPercentRange(),e=this._getViewExtent();this._handleEnds=[c(t[0],[0,100],e,!0),c(t[1],[0,100],e,!0)];},_updateInterval:function _updateInterval(t,e){var i=this._handleEnds,n=this._getViewExtent();d(e,i,n,"all"===t||this.dataZoomModel.get("zoomLock")?"rigid":"cross",t),this._range=f([c(i[0],n,[0,100],!0),c(i[1],n,[0,100],!0)]);},_updateView:function _updateView(){var t=this._displayables,e=this._handleEnds,i=f(e.slice()),n=this._size,r=this._halfHandleSize;v([0,1],function(i){var o=t.handles[i];o.setShape({x:e[i]-r,y:-1,width:2*r,height:n[1]+2,r:1});},this),t.filler.setShape({x:i[0],y:0,width:i[1]-i[0],height:this._size[1]}),this._updateDataInfo();},_updateDataInfo:function _updateDataInfo(){function t(t){var e=o.getTransform(i.handles[t],this.group),s=o.transformDirection(0===t?"right":"left",e),l=this._halfHandleSize+M,c=o.applyTransform([h[t]+(0===t?-l:l),this._size[1]/2],e);n[t].setStyle({x:c[0],y:c[1],textVerticalAlign:r===b?"middle":s,textAlign:r===b?s:"center",text:a[t]});}var e=this.dataZoomModel,i=this._displayables,n=i.handleLabels,r=this._orient,a=["",""];if(e.get("showDetail")){var s,l;e.eachTargetAxis(function(t,i){s||(s=e.getAxisProxy(t.name,i).getDataValueWindow(),l=this.ecModel.getComponent(t.axis,i).axis);},this),s&&(a=[this._formatLabel(s[0],l),this._formatLabel(s[1],l)]);}var h=f(this._handleEnds.slice());t.call(this,0),t.call(this,1);},_formatLabel:function _formatLabel(t,e){var i=this.dataZoomModel,n=i.get("labelFormatter");if(r.isFunction(n))return n(t);var o=i.get("labelPrecision");return null!=o&&"auto"!==o||(o=e.getPixelPrecision()),t=null==t&&isNaN(t)?"":"category"===e.type||"time"===e.type?e.scale.getLabel(Math.round(t)):t.toFixed(Math.min(o,20)),r.isString(n)&&(t=n.replace("{value}",t)),t;},_showDataInfo:function _showDataInfo(t){t=this._dragging||t;var e=this._displayables.handleLabels;e[0].attr("invisible",!t),e[1].attr("invisible",!t);},_onDragMove:function _onDragMove(t,e,i){this._dragging=!0;var n=this._applyBarTransform([e,i],!0);this._updateInterval(t,n[0]),this._updateView(),this.dataZoomModel.get("realtime")&&this._dispatchZoomAction();},_onDragEnd:function _onDragEnd(){this._dragging=!1,this._showDataInfo(!1),this._dispatchZoomAction();},_dispatchZoomAction:function _dispatchZoomAction(){var t=this._range;this.api.dispatchAction({type:"dataZoom",from:this.uid,dataZoomId:this.dataZoomModel.id,start:t[0],end:t[1]});},_applyBarTransform:function _applyBarTransform(t,e){var i=this._displayables.barGroup.getLocalTransform();return o.applyTransform(t,i,e);},_findCoordRect:function _findCoordRect(){var t,e=this.getTargetInfo();if(e.cartesians.length)t=e.cartesians[0].model.coordinateSystem.getRect();else {var i=this.api.getWidth(),n=this.api.getHeight();t={x:.2*i,y:.2*n,width:.6*i,height:.6*n};}return t;}});t.exports=A;},function(t,e,i){function n(t){var e=t.getZr();return e[p]||(e[p]={});}function r(t,e,i){var n=new u(t.getZr());return n.enable(),n.on("pan",f(a,i)),n.on("zoom",f(s,i)),n;}function o(t){c.each(t,function(e,i){e.count||(e.controller.off("pan").off("zoom"),delete t[i]);});}function a(t,e,i){l(t,function(n){return n.panGetRange(t.controller,e,i);});}function s(t,e,i,n){l(t,function(r){return r.zoomGetRange(t.controller,e,i,n);});}function l(t,e){var i=[];c.each(t.dataZoomInfos,function(t){var n=e(t);n&&i.push({dataZoomId:t.dataZoomId,start:n[0],end:n[1]});}),t.dispatchAction(i);}function h(t,e){t.dispatchAction({type:"dataZoom",batch:e});}var c=i(1),u=i(70),d=i(126),f=c.curry,p="\x00_ec_dataZoom_roams",g={register:function register(t,e){var i=n(t),a=e.dataZoomId,s=e.coordId;c.each(i,function(t,i){var n=t.dataZoomInfos;n[a]&&c.indexOf(e.allCoordIds,s)<0&&(delete n[a],t.count--);}),o(i);var l=i[s];l||(l=i[s]={coordId:s,dataZoomInfos:{},count:0},l.controller=r(t,e,l),l.dispatchAction=c.curry(h,t)),l.controller.rect=e.coordinateSystem.getRect().clone(),d.createOrUpdate(l,"dispatchAction",e.throttleRate,"fixRate"),!l.dataZoomInfos[a]&&l.count++,l.dataZoomInfos[a]=e;},unregister:function unregister(t,e){var i=n(t);c.each(i,function(t){var i=t.dataZoomInfos;i[e]&&(delete i[e],t.count--);}),o(i);},shouldRecordRange:function shouldRecordRange(t,e){if(t&&"dataZoom"===t.type&&t.batch)for(var i=0,n=t.batch.length;n>i;i++){if(t.batch[i].dataZoomId===e)return !1;}return !0;},generateCoordId:function generateCoordId(t){return t.type+"\x00_"+t.id;}};t.exports=g;},function(t,e,i){i(101),i(39),i(40),i(170),i(171),i(99),i(98);},function(t,e,i){i(177),i(179),i(178);var n=i(2);n.registerProcessor("filter",i(180));},function(t,e,i){"use strict";var n=i(1),r=i(12),o=i(2).extendComponentModel({type:"legend",dependencies:["series"],layoutMode:{type:"box",ignoreSize:!0},init:function init(t,e,i){this.mergeDefaultAndTheme(t,i),t.selected=t.selected||{},this._updateData(i);var n=this._data,r=this.option.selected;if(n[0]&&"single"===this.get("selectedMode")){var o=!1;for(var a in r){r[a]&&(this.select(a),o=!0);}!o&&this.select(n[0].get("name"));}},mergeOption:function mergeOption(t){o.superCall(this,"mergeOption",t),this._updateData(this.ecModel);},_updateData:function _updateData(t){var e=n.map(this.get("data")||[],function(t){return "string"==typeof t&&(t={name:t}),new r(t,this,this.ecModel);},this);this._data=e;var i=n.map(t.getSeries(),function(t){return t.name;});t.eachSeries(function(t){if(t.legendDataProvider){var e=t.legendDataProvider();i=i.concat(e.mapArray(e.getName));}}),this._availableNames=i;},getData:function getData(){return this._data;},select:function select(t){var e=this.option.selected,i=this.get("selectedMode");if("single"===i){var r=this._data;n.each(r,function(t){e[t.get("name")]=!1;});}e[t]=!0;},unSelect:function unSelect(t){"single"!==this.get("selectedMode")&&(this.option.selected[t]=!1);},toggleSelected:function toggleSelected(t){var e=this.option.selected;t in e||(e[t]=!0),this[e[t]?"unSelect":"select"](t);},isSelected:function isSelected(t){var e=this.option.selected;return !(t in e&&!e[t])&&n.indexOf(this._availableNames,t)>=0;},defaultOption:{zlevel:0,z:4,show:!0,orient:"horizontal",left:"center",top:"top",align:"auto",backgroundColor:"rgba(0,0,0,0)",borderColor:"#ccc",borderWidth:0,padding:5,itemGap:10,itemWidth:25,itemHeight:14,textStyle:{color:"#333"},selectedMode:!0}});t.exports=o;},function(t,e,i){function n(t,e){e.dispatchAction({type:"legendToggleSelect",name:t});}function r(t,e,i){t.get("legendHoverLink")&&i.dispatchAction({type:"highlight",seriesName:t.name,name:e});}function o(t,e,i){t.get("legendHoverLink")&&i.dispatchAction({type:"downplay",seriesName:t.name,name:e});}var a=i(1),s=i(24),l=i(3),h=i(103),c=a.curry,u="#ccc";t.exports=i(2).extendComponentView({type:"legend",init:function init(){this._symbolTypeStore={};},render:function render(t,e,i){var s=this.group;if(s.removeAll(),t.get("show")){var u=t.get("selectedMode"),d=t.get("align");"auto"===d&&(d="right"===t.get("left")&&"vertical"===t.get("orient")?"right":"left");var f={};a.each(t.getData(),function(a){var h=a.get("name");if(""===h||"\n"===h)return void s.add(new l.Group({newline:!0}));var p=e.getSeriesByName(h)[0];if(!f[h])if(p){var g=p.getData(),m=g.getVisual("color");"function"==typeof m&&(m=m(p.getDataParams(0)));var v=g.getVisual("legendSymbol")||"roundRect",y=g.getVisual("symbol"),x=this._createItem(h,a,t,v,y,d,m,u);x.on("click",c(n,h,i)).on("mouseover",c(r,p,"",i)).on("mouseout",c(o,p,"",i)),f[h]=!0;}else e.eachRawSeries(function(e){if(!f[h]&&e.legendDataProvider){var s=e.legendDataProvider(),l=s.indexOfName(h),p=s.getItemVisual(l,"color"),g="roundRect",m=this._createItem(h,a,t,g,null,d,p,u);m.on("click",c(n,h,i)).on("mouseover",c(r,e,h,i)).on("mouseout",c(o,e,h,i)),f[h]=!0;}},this);},this),h.layout(s,t,i),h.addBackground(s,t);}},_createItem:function _createItem(t,e,i,n,r,o,a,h){var c=i.get("itemWidth"),d=i.get("itemHeight"),f=i.isSelected(t),p=new l.Group(),g=e.getModel("textStyle"),m=e.get("icon");if(n=m||n,p.add(s.createSymbol(n,0,0,c,d,f?a:u)),!m&&r&&(r!==n||"none"==r)){var v=.8*d;"none"===r&&(r="circle"),p.add(s.createSymbol(r,(c-v)/2,(d-v)/2,v,v,f?a:u));}var y="left"===o?c+5:-5,x=o,_=i.get("formatter");"string"==typeof _&&_?t=_.replace("{name}",t):"function"==typeof _&&(t=_(t));var b=new l.Text({style:{text:t,x:y,y:d/2,fill:f?g.getTextColor():u,textFont:g.getFont(),textAlign:x,textVerticalAlign:"middle"}});return p.add(b),p.add(new l.Rect({shape:p.getBoundingRect(),invisible:!0})),p.eachChild(function(t){t.silent=!h;}),this.group.add(p),l.setHoverStyle(p),p;}});},function(t,e,i){function n(t,e,i){var n,r={},a="toggleSelected"===t;return i.eachComponent("legend",function(i){a&&null!=n?i[n?"select":"unSelect"](e.name):(i[t](e.name),n=i.isSelected(e.name));var s=i.getData();o.each(s,function(t){var e=t.get("name");if("\n"!==e&&""!==e){var n=i.isSelected(e);e in r?r[e]=r[e]&&n:r[e]=n;}});}),{name:e.name,selected:r};}var r=i(2),o=i(1);r.registerAction("legendToggleSelect","legendselectchanged",o.curry(n,"toggleSelected")),r.registerAction("legendSelect","legendselected",o.curry(n,"select")),r.registerAction("legendUnSelect","legendunselected",o.curry(n,"unSelect"));},function(t,e){t.exports=function(t){var e=t.findComponents({mainType:"legend"});e&&e.length&&t.filterSeries(function(t){for(var i=0;i<e.length;i++){if(!e[i].isSelected(t.name))return !1;}return !0;});};},function(t,e,i){i(183),i(184),i(2).registerPreprocessor(function(t){t.markLine=t.markLine||{};});},function(t,e,i){i(185),i(186),i(2).registerPreprocessor(function(t){t.markPoint=t.markPoint||{};});},function(t,e,i){var n=i(7),r=i(2).extendComponentModel({type:"markLine",dependencies:["series","grid","polar"],init:function init(t,e,i,n){this.mergeDefaultAndTheme(t,i),this.mergeOption(t,i,n.createdBySelf,!0);},mergeOption:function mergeOption(t,e,i,o){i||e.eachSeries(function(t){var i=t.get("markLine"),a=t.markLineModel;if(!i||!i.data)return void (t.markLineModel=null);if(a)a.mergeOption(i,e,!0);else {o&&n.defaultEmphasis(i.label,["position","show","textStyle","distance","formatter"]);var s={seriesIndex:t.seriesIndex,name:t.name,createdBySelf:!0};a=new r(i,this,e,s);}t.markLineModel=a;},this);},defaultOption:{zlevel:0,z:5,symbol:["circle","arrow"],symbolSize:[8,16],precision:2,tooltip:{trigger:"item"},label:{normal:{show:!0,position:"end"},emphasis:{show:!0}},lineStyle:{normal:{type:"dashed"},emphasis:{width:3}},animationEasing:"linear"}});t.exports=r;},function(t,e,i){function n(t,e){return f.dataFilter(t,e[0])&&f.dataFilter(t,e[1]);}function r(t,e,i,n,r,o,a){var s,l=o.coordinateSystem,h=t.getItemModel(e),u=h.get("x"),d=h.get("y");if(null!=u&&null!=d)s=[c.parsePercent(u,a.getWidth()),c.parsePercent(d,a.getHeight())];else {if(o.getMarkerPosition)s=o.getMarkerPosition(t.getValues(t.dimensions,e));else {var f=l.dimensions,p=t.get(f[0],e),g=t.get(f[1],e);s=l.dataToPoint([p,g]);}if(n&&"cartesian2d"===l.type){var m=null!=r?l.getAxis(1===r?"x":"y"):l.getAxesByScale("ordinal")[0];m&&m.onBand&&(s["x"===m.dim?0:1]=m.toGlobalCoord(m.getExtent()[i?0:1]));}}t.setItemLayout(e,s);}function o(t,e,i){var r;r=t?a.map(t&&t.dimensions,function(t){var i=e.getData().getDimensionInfo(e.coordDimToDataDim(t)[0])||{};return i.name=t,i;}):[{name:"value",type:"float"}];var o=new s(r,i),l=new s(r,i),h=new s([],i),c=a.map(i.get("data"),a.curry(g,e,t,i));t&&(c=a.filter(c,a.curry(n,t)));var u=t?f.dimValueGetter:function(t){return t.value;};return o.initData(a.map(c,function(t){return t[0];}),null,u),l.initData(a.map(c,function(t){return t[1];}),null,u),h.initData(a.map(c,function(t){return t[2];})),{from:o,to:l,line:h};}var a=i(1),s=i(14),l=i(9),h=i(7),c=i(4),u=l.addCommas,d=l.encodeHTML,f=i(104),p=i(84),g=function g(t,e,i,n){var r=t.getData(),o=n.type;if(!a.isArray(n)&&("min"===o||"max"===o||"average"===o)){var s=f.getAxisInfo(n,r,e,t),l=s.baseAxis.dim+"Axis",h=s.valueAxis.dim+"Axis",c=s.baseAxis.scale.getExtent(),u=a.clone(n),d={};u.type=null,u[l]=c[0],d[l]=c[1];var p=f.numCalculate(r,s.valueDataDim,o);p=s.valueAxis.coordToData(s.valueAxis.dataToCoord(p));var g=i.get("precision");g>=0&&(p=+p.toFixed(g)),u[h]=d[h]=p,n=[u,d,{type:o,valueIndex:n.valueIndex,value:p}];}return n=[f.dataTransform(t,n[0]),f.dataTransform(t,n[1]),a.extend({},n[2])],n[2].type=n[2].type||"",a.merge(n[2],n[0]),a.merge(n[2],n[1]),n;},m={formatTooltip:function formatTooltip(t){var e=this._data,i=this.getRawValue(t),n=a.isArray(i)?a.map(i,u).join(", "):u(i),r=e.getName(t);return this.name+"<br />"+((r?d(r)+" : ":"")+n);},getRawDataArray:function getRawDataArray(){return this.option.data;},getData:function getData(){return this._data;},setData:function setData(t){this._data=t;}};a.defaults(m,h.dataFormatMixin),i(2).extendComponentView({type:"markLine",init:function init(){this._markLineMap={};},render:function render(t,e,i){var n=this._markLineMap;for(var r in n){n[r].__keep=!1;}e.eachSeries(function(t){var n=t.markLineModel;n&&this._renderSeriesML(t,n,e,i);},this);for(var r in n){n[r].__keep||this.group.remove(n[r].group);}},updateLayout:function updateLayout(t,e,i){e.eachSeries(function(t){var e=t.markLineModel;if(e){var n=e.getData(),o=e.__from,a=e.__to;o.each(function(e){var s=n.getItemModel(e),l=s.get("type"),h=s.get("valueIndex");r(o,e,!0,l,h,t,i),r(a,e,!1,l,h,t,i);}),n.each(function(t){n.setItemLayout(t,[o.getItemLayout(t),a.getItemLayout(t)]);}),this._markLineMap[t.name].updateLayout();}},this);},_renderSeriesML:function _renderSeriesML(t,e,i,n){function s(e,i,o,a,s){var l=e.getItemModel(i);r(e,i,o,a,s,t,n),e.setItemVisual(i,{symbolSize:l.get("symbolSize")||_[o?0:1],symbol:l.get("symbol",!0)||x[o?0:1],color:l.get("itemStyle.normal.color")||c.getVisual("color")});}var l=t.coordinateSystem,h=t.name,c=t.getData(),u=this._markLineMap,d=u[h];d||(d=u[h]=new p()),this.group.add(d.group);var f=o(l,t,e),g=f.from,v=f.to,y=f.line;e.__from=g,e.__to=v,a.extend(e,m),e.setData(y);var x=e.get("symbol"),_=e.get("symbolSize");a.isArray(x)||(x=[x,x]),"number"==typeof _&&(_=[_,_]),f.from.each(function(t){var e=y.getItemModel(t),i=e.get("type"),n=e.get("valueIndex");s(g,t,!0,i,n),s(v,t,!1,i,n);}),y.each(function(t){var e=y.getItemModel(t).get("lineStyle.normal.color");y.setItemVisual(t,{color:e||g.getItemVisual(t,"color")}),y.setItemLayout(t,[g.getItemLayout(t),v.getItemLayout(t)]);}),d.updateData(y,g,v),f.line.eachItemGraphicEl(function(t,i){t.traverse(function(t){t.dataModel=e;});}),d.__keep=!0;}});},function(t,e,i){var n=i(7),r=i(2).extendComponentModel({type:"markPoint",dependencies:["series","grid","polar"],init:function init(t,e,i,n){this.mergeDefaultAndTheme(t,i),this.mergeOption(t,i,n.createdBySelf,!0);},mergeOption:function mergeOption(t,e,i,o){i||e.eachSeries(function(t){var i=t.get("markPoint"),a=t.markPointModel;if(!i||!i.data)return void (t.markPointModel=null);if(a)a.mergeOption(i,e,!0);else {o&&n.defaultEmphasis(i.label,["position","show","textStyle","distance","formatter"]);var s={seriesIndex:t.seriesIndex,name:t.name,createdBySelf:!0};a=new r(i,this,e,s);}t.markPointModel=a;},this);},defaultOption:{zlevel:0,z:5,symbol:"pin",symbolSize:50,tooltip:{trigger:"item"},label:{normal:{show:!0,position:"inside"},emphasis:{show:!0}},itemStyle:{normal:{borderWidth:2},emphasis:{}}}});t.exports=r;},function(t,e,i){function n(t,e,i){var n=e.coordinateSystem;t.each(function(r){var o,a=t.getItemModel(r),s=a.getShallow("x"),l=a.getShallow("y");if(null!=s&&null!=l)o=[h.parsePercent(s,i.getWidth()),h.parsePercent(l,i.getHeight())];else if(e.getMarkerPosition)o=e.getMarkerPosition(t.getValues(t.dimensions,r));else if(n){var c=t.get(n.dimensions[0],r),u=t.get(n.dimensions[1],r);o=n.dataToPoint([c,u]);}t.setItemLayout(r,o);});}function r(t,e,i){var n;n=t?a.map(t&&t.dimensions,function(t){var i=e.getData().getDimensionInfo(e.coordDimToDataDim(t)[0])||{};return i.name=t,i;}):[{name:"value",type:"float"}];var r=new d(n,i),o=a.map(i.get("data"),a.curry(f.dataTransform,e));return t&&(o=a.filter(o,a.curry(f.dataFilter,t))),r.initData(o,null,t?f.dimValueGetter:function(t){return t.value;}),r;}var o=i(38),a=i(1),s=i(9),l=i(7),h=i(4),c=s.addCommas,u=s.encodeHTML,d=i(14),f=i(104),p={getRawDataArray:function getRawDataArray(){return this.option.data;},formatTooltip:function formatTooltip(t){var e=this.getData(),i=this.getRawValue(t),n=a.isArray(i)?a.map(i,c).join(", "):c(i),r=e.getName(t);return this.name+"<br />"+((r?u(r)+" : ":"")+n);},getData:function getData(){return this._data;},setData:function setData(t){this._data=t;}};a.defaults(p,l.dataFormatMixin),i(2).extendComponentView({type:"markPoint",init:function init(){this._symbolDrawMap={};},render:function render(t,e,i){var n=this._symbolDrawMap;for(var r in n){n[r].__keep=!1;}e.eachSeries(function(t){var e=t.markPointModel;e&&this._renderSeriesMP(t,e,i);},this);for(var r in n){n[r].__keep||(n[r].remove(),this.group.remove(n[r].group));}},updateLayout:function updateLayout(t,e,i){e.eachSeries(function(t){var e=t.markPointModel;e&&(n(e.getData(),t,i),this._symbolDrawMap[t.name].updateLayout(e));},this);},_renderSeriesMP:function _renderSeriesMP(t,e,i){var s=t.coordinateSystem,l=t.name,h=t.getData(),c=this._symbolDrawMap,u=c[l];u||(u=c[l]=new o());var d=r(s,t,e);a.mixin(e,p),e.setData(d),n(e.getData(),t,i),d.each(function(t){var i=d.getItemModel(t),n=i.getShallow("symbolSize");"function"==typeof n&&(n=n(e.getRawValue(t),e.getDataParams(t))),d.setItemVisual(t,{symbolSize:n,color:i.get("itemStyle.normal.color")||h.getVisual("color"),symbol:i.getShallow("symbol")});}),u.updateData(d),this.group.add(u.group),d.eachItemGraphicEl(function(t){t.traverse(function(t){t.dataModel=e;});}),u.__keep=!0;}});},function(t,e,i){"use strict";var n=i(2),r=i(3),o=i(11);n.extendComponentModel({type:"title",layoutMode:{type:"box",ignoreSize:!0},defaultOption:{zlevel:0,z:6,show:!0,text:"",target:"blank",subtext:"",subtarget:"blank",left:0,top:0,backgroundColor:"rgba(0,0,0,0)",borderColor:"#ccc",borderWidth:0,padding:5,itemGap:10,textStyle:{fontSize:18,fontWeight:"bolder",color:"#333"},subtextStyle:{color:"#aaa"}}}),n.extendComponentView({type:"title",render:function render(t,e,i){if(this.group.removeAll(),t.get("show")){var n=this.group,a=t.getModel("textStyle"),s=t.getModel("subtextStyle"),l=t.get("textAlign"),h=new r.Text({style:{text:t.get("text"),textFont:a.getFont(),fill:a.getTextColor(),textBaseline:"top"},z2:10}),c=h.getBoundingRect(),u=t.get("subtext"),d=new r.Text({style:{text:u,textFont:s.getFont(),fill:s.getTextColor(),y:c.height+t.get("itemGap"),textBaseline:"top"},z2:10}),f=t.get("link"),p=t.get("sublink");h.silent=!f,d.silent=!p,f&&h.on("click",function(){window.open(f,"_"+t.get("target"));}),p&&d.on("click",function(){window.open(p,"_"+t.get("subtarget"));}),n.add(h),u&&n.add(d);var g=n.getBoundingRect(),m=t.getBoxLayoutParams();m.width=g.width,m.height=g.height;var v=o.getLayoutRect(m,{width:i.getWidth(),height:i.getHeight()},t.get("padding"));l||(l=t.get("left")||t.get("right"),"middle"===l&&(l="center"),"right"===l?v.x+=v.width:"center"===l&&(v.x+=v.width/2)),n.position=[v.x,v.y],h.setStyle("textAlign",l),d.setStyle("textAlign",l),g=n.getBoundingRect();var y=v.margin,x=t.getItemStyle(["color","opacity"]);x.fill=t.get("backgroundColor");var _=new r.Rect({shape:{x:g.x-y[3],y:g.y-y[0],width:g.width+y[1]+y[3],height:g.height+y[0]+y[2]},style:x,silent:!0});r.subPixelOptimizeRect(_),n.add(_);}}});},function(t,e,i){i(189),i(190),i(195),i(193),i(191),i(192),i(194);},function(t,e,i){var n=i(29),r=i(1),o=i(2).extendComponentModel({type:"toolbox",layoutMode:{type:"box",ignoreSize:!0},mergeDefaultAndTheme:function mergeDefaultAndTheme(t){o.superApply(this,"mergeDefaultAndTheme",arguments),r.each(this.option.feature,function(t,e){var i=n.get(e);i&&r.merge(t,i.defaultOption);});},defaultOption:{show:!0,z:6,zlevel:0,orient:"horizontal",left:"right",top:"top",backgroundColor:"transparent",borderColor:"#ccc",borderWidth:0,padding:5,itemSize:15,itemGap:8,showTitle:!0,iconStyle:{normal:{borderColor:"#666",color:"none"},emphasis:{borderColor:"#3E98C5"}}}});t.exports=o;},function(t,e,i){(function(e){function n(t){return 0===t.indexOf("my");}var r=i(29),o=i(1),a=i(3),s=i(12),l=i(52),h=i(103),c=i(17);t.exports=i(2).extendComponentView({type:"toolbox",render:function render(t,e,i){function u(o,a){var l,h=v[o],c=v[a],u=g[h],f=new s(u,t,t.ecModel);if(h&&!c){if(n(h))l={model:f,onclick:f.option.onclick,featureName:h};else {var p=r.get(h);if(!p)return;l=new p(f);}m[h]=l;}else {if(l=m[c],!l)return;l.model=f;}return !h&&c?void (l.dispose&&l.dispose(e,i)):!f.get("show")||l.unusable?void (l.remove&&l.remove(e,i)):(d(f,l,h),f.setIconStatus=function(t,e){var i=this.option,n=this.iconPaths;i.iconStatus=i.iconStatus||{},i.iconStatus[t]=e,n[t]&&n[t].trigger(e);},void (l.render&&l.render(f,e,i)));}function d(n,r,s){var l=n.getModel("iconStyle"),h=r.getIcons?r.getIcons():n.get("icon"),c=n.get("title")||{};if("string"==typeof h){var u=h,d=c;h={},c={},h[s]=u,c[s]=d;}var g=n.iconPaths={};o.each(h,function(s,h){var u=l.getModel("normal").getItemStyle(),d=l.getModel("emphasis").getItemStyle(),m={x:-p/2,y:-p/2,width:p,height:p},v=0===s.indexOf("image://")?(m.image=s.slice(8),new a.Image({style:m})):a.makePath(s.replace("path://",""),{style:u,hoverStyle:d,rectHover:!0},m,"center");a.setHoverStyle(v),t.get("showTitle")&&(v.__title=c[h],v.on("mouseover",function(){v.setStyle({text:c[h],textPosition:d.textPosition||"bottom",textFill:d.fill||d.stroke||"#000",textAlign:d.textAlign||"center"});}).on("mouseout",function(){v.setStyle({textFill:null});})),v.trigger(n.get("iconStatus."+h)||"normal"),f.add(v),v.on("click",o.bind(r.onclick,r,e,i,h)),g[h]=v;});}var f=this.group;if(f.removeAll(),t.get("show")){var p=+t.get("itemSize"),g=t.get("feature")||{},m=this._features||(this._features={}),v=[];o.each(g,function(t,e){v.push(e);}),new l(this._featureNames||[],v).add(u).update(u).remove(o.curry(u,null)).execute(),this._featureNames=v,h.layout(f,t,i),h.addBackground(f,t),f.eachChild(function(t){var e=t.__title,n=t.hoverStyle;if(n&&e){var r=c.getBoundingRect(e,n.font),o=t.position[0]+f.position[0],a=t.position[1]+f.position[1]+p,s=!1;a+r.height>i.getHeight()&&(n.textPosition="top",s=!0);var l=s?-5-r.height:p+8;o+r.width/2>i.getWidth()?(n.textPosition=["100%",l],n.textAlign="right"):o-r.width/2<0&&(n.textPosition=[0,l],n.textAlign="left");}});}},remove:function remove(t,e){o.each(this._features,function(i){i.remove&&i.remove(t,e);}),this.group.removeAll();},dispose:function dispose(t,e){o.each(this._features,function(i){i.dispose&&i.dispose(t,e);});}});}).call(e,i(201));},function(t,e,i){function n(t){var e={},i=[],n=[];return t.eachRawSeries(function(t){var r=t.coordinateSystem;if(!r||"cartesian2d"!==r.type&&"polar"!==r.type)i.push(t);else {var o=r.getBaseAxis();if("category"===o.type){var a=o.dim+"_"+o.index;e[a]||(e[a]={categoryAxis:o,valueAxis:r.getOtherAxis(o),series:[]},n.push({axisDim:o.dim,axisIndex:o.index})),e[a].series.push(t);}else i.push(t);}}),{seriesGroupByCategoryAxis:e,other:i,meta:n};}function r(t){var e=[];return p.each(t,function(t,i){var n=t.categoryAxis,r=t.valueAxis,o=r.dim,a=[" "].concat(p.map(t.series,function(t){return t.name;})),s=[n.model.getCategories()];p.each(t.series,function(t){s.push(t.getRawData().mapArray(o,function(t){return t;}));});for(var l=[a.join(v)],h=0;h<s[0].length;h++){for(var c=[],u=0;u<s.length;u++){c.push(s[u][h]);}l.push(c.join(v));}e.push(l.join("\n"));}),e.join("\n\n"+m+"\n\n");}function o(t){return p.map(t,function(t){var e=t.getRawData(),i=[t.name],n=[];return e.each(e.dimensions,function(){for(var t=arguments.length,r=arguments[t-1],o=e.getName(r),a=0;t-1>a;a++){n[a]=arguments[a];}i.push((o?o+v:"")+n.join(v));}),i.join("\n");}).join("\n\n"+m+"\n\n");}function a(t){var e=n(t);return {value:p.filter([r(e.seriesGroupByCategoryAxis),o(e.other)],function(t){return t.replace(/[\n\t\s]/g,"");}).join("\n\n"+m+"\n\n"),meta:e.meta};}function s(t){return t.replace(/^\s\s*/,"").replace(/\s\s*$/,"");}function l(t){var e=t.slice(0,t.indexOf("\n"));return e.indexOf(v)>=0?!0:void 0;}function h(t){for(var e=t.split(/\n+/g),i=s(e.shift()).split(y),n=[],r=p.map(i,function(t){return {name:t,data:[]};}),o=0;o<e.length;o++){var a=s(e[o]).split(y);n.push(a.shift());for(var l=0;l<a.length;l++){r[l]&&(r[l].data[o]=a[l]);}}return {series:r,categories:n};}function c(t){for(var e=t.split(/\n+/g),i=s(e.shift()),n=[],r=0;r<e.length;r++){var o,a=s(e[r]).split(y),l="",h=!1;isNaN(a[0])?(h=!0,l=a[0],a=a.slice(1),n[r]={name:l,value:[]},o=n[r].value):o=n[r]=[];for(var c=0;c<a.length;c++){o.push(+a[c]);}1===o.length&&(h?n[r].value=o[0]:n[r]=o[0]);}return {name:i,data:n};}function u(t,e){var i=t.split(new RegExp("\n*"+m+"\n*","g")),n={series:[]};return p.each(i,function(t,i){if(l(t)){var r=h(t),o=e[i],a=o.axisDim+"Axis";o&&(n[a]=n[a]||[],n[a][o.axisIndex]={data:r.categories},n.series=n.series.concat(r.series));}else {var r=c(t);n.series.push(r);}}),n;}function d(t){this._dom=null,this.model=t;}function f(t,e){return p.map(t,function(t,i){var n=e&&e[i];return p.isObject(n)&&!p.isArray(n)?(p.isObject(t)&&!p.isArray(t)&&(t=t.value),p.defaults({value:t},n)):t;});}var p=i(1),g=i(33),m=new Array(60).join("-"),v="	",y=new RegExp("["+v+"]+","g");d.defaultOption={show:!0,readOnly:!1,optionToContent:null,contentToOption:null,icon:"M17.5,17.3H33 M17.5,17.3H33 M45.4,29.5h-28 M11.5,2v56H51V14.8L38.4,2H11.5z M38.4,2.2v12.7H51 M45.4,41.7h-28",title:"数据视图",lang:["数据视图","关闭","刷新"],backgroundColor:"#fff",textColor:"#000",textareaColor:"#fff",textareaBorderColor:"#333",buttonColor:"#c23531",buttonTextColor:"#fff"},d.prototype.onclick=function(t,e){function i(){n.removeChild(o),S._dom=null;}var n=e.getDom(),r=this.model;this._dom&&n.removeChild(this._dom);var o=document.createElement("div");o.style.cssText="position:absolute;left:5px;top:5px;bottom:5px;right:5px;",o.style.backgroundColor=r.get("backgroundColor")||"#fff";var s=document.createElement("h4"),l=r.get("lang")||[];s.innerHTML=l[0]||r.get("title"),s.style.cssText="margin: 10px 20px;",s.style.color=r.get("textColor");var h=document.createElement("div"),c=document.createElement("textarea");h.style.cssText="display:block;width:100%;overflow:hidden;";var d=r.get("optionToContent"),f=r.get("contentToOption"),m=a(t);if("function"==typeof d){var y=d(e.getOption());"string"==typeof y?h.innerHTML=y:p.isDom(y)&&h.appendChild(y);}else h.appendChild(c),c.readOnly=r.get("readOnly"),c.style.cssText="width:100%;height:100%;font-family:monospace;font-size:14px;line-height:1.6rem;",c.style.color=r.get("textColor"),c.style.borderColor=r.get("textareaBorderColor"),c.style.backgroundColor=r.get("textareaColor"),c.value=m.value;var x=m.meta,_=document.createElement("div");_.style.cssText="position:absolute;bottom:0;left:0;right:0;";var b="float:right;margin-right:20px;border:none;cursor:pointer;padding:2px 5px;font-size:12px;border-radius:3px",w=document.createElement("div"),M=document.createElement("div");b+=";background-color:"+r.get("buttonColor"),b+=";color:"+r.get("buttonTextColor");var S=this;g.addEventListener(w,"click",i),g.addEventListener(M,"click",function(){var t;try{t="function"==typeof f?f(h,e.getOption()):u(c.value,x);}catch(n){throw i(),new Error("Data view format error "+n);}t&&e.dispatchAction({type:"changeDataView",newOption:t}),i();}),w.innerHTML=l[1],M.innerHTML=l[2],M.style.cssText=b,w.style.cssText=b,!r.get("readOnly")&&_.appendChild(M),_.appendChild(w),g.addEventListener(c,"keydown",function(t){if(9===(t.keyCode||t.which)){var e=this.value,i=this.selectionStart,n=this.selectionEnd;this.value=e.substring(0,i)+v+e.substring(n),this.selectionStart=this.selectionEnd=i+1,g.stop(t);}}),o.appendChild(s),o.appendChild(h),o.appendChild(_),h.style.height=n.clientHeight-80+"px",n.appendChild(o),this._dom=o;},d.prototype.remove=function(t,e){this._dom&&e.getDom().removeChild(this._dom);},d.prototype.dispose=function(t,e){this.remove(t,e);},i(29).register("dataView",d),i(2).registerAction({type:"changeDataView",event:"dataViewChanged",update:"prepareAndUpdate"},function(t,e){var i=[];p.each(t.newOption.series,function(t){var n=e.getSeriesByName(t.name)[0];if(n){var r=n.get("data");i.push({name:t.name,data:f(t.data,r)});}else i.push(p.extend({type:"scatter"},t));}),e.mergeOption(p.defaults({series:i},t.newOption));}),t.exports=d;},function(t,e,i){"use strict";function n(t){this.model=t,this._controllerGroup,this._controller,this._isZoomActive;}function r(t,e){var i=[{axisModel:t.getAxis("x").model,axisIndex:0},{axisModel:t.getAxis("y").model,axisIndex:0}];return i.grid=t,e.eachComponent({mainType:"dataZoom",subType:"select"},function(t,n){o("xAxis",i[0].axisModel,t,e)&&(i[0].dataZoomModel=t),o("yAxis",i[1].axisModel,t,e)&&(i[1].dataZoomModel=t);}),i;}function o(t,e,i,n){var r=i.get(t+"Index");return null!=r&&n.getComponent(t,r)===e;}function a(t,e){var i=e.grid,n=new d(t[0][0],t[1][0],t[0][1]-t[0][0],t[1][1]-t[1][0]);if(n.intersect(i.getRect())){var r=i.getCartesian(e[0].axisIndex,e[1].axisIndex),o=r.pointToData([t[0][0],t[1][0]],!0),a=r.pointToData([t[0][1],t[1][1]],!0);return [v([o[0],a[0]]),v([o[1],a[1]])];}}function s(t,e,i,n){var r=e[i],o=r.dataZoomModel;return o?{dataZoomId:o.id,startValue:t[i][0],endValue:t[i][1]}:void 0;}function l(t,e){t.setIconStatus("back",p.count(e)>1?"emphasis":"normal");}var h=i(1),c=i(4),u=i(160),d=i(8),f=i(26),p=i(100),g=i(102),m=h.each,v=c.asc;i(175);var y="\x00_ec_\x00toolbox-dataZoom_";n.defaultOption={show:!0,icon:{zoom:"M0,13.5h26.9 M13.5,26.9V0 M32.1,13.5H58V58H13.5 V32.1",back:"M22,1.4L9.9,13.5l12.3,12.3 M10.3,13.5H54.9v44.6 H10.3v-26"},title:{zoom:"区域缩放",back:"区域缩放还原"}};var x=n.prototype;x.render=function(t,e,i){l(t,e);},x.onclick=function(t,e,i){var n=this._controllerGroup;this._controllerGroup||(n=this._controllerGroup=new f(),e.getZr().add(n)),_[i].call(this,n,this.model,t,e);},x.remove=function(t,e){this._disposeController(),g.release("globalPan",e.getZr());},x.dispose=function(t,e){var i=e.getZr();g.release("globalPan",i),this._disposeController(),this._controllerGroup&&i.remove(this._controllerGroup);};var _={zoom:function zoom(t,e,i,n){var r=this._isZoomActive=!this._isZoomActive,o=n.getZr();g[r?"take":"release"]("globalPan",o),e.setIconStatus("zoom",r?"emphasis":"normal"),r?(o.setDefaultCursorStyle("crosshair"),this._createController(t,e,i,n)):(o.setDefaultCursorStyle("default"),this._disposeController());},back:function back(t,e,i,n){this._dispatchAction(p.pop(i),n);}};x._createController=function(t,e,i,n){var r=this._controller=new u("rect",n.getZr(),{lineWidth:3,stroke:"#333",fill:"rgba(0,0,0,0.2)"});r.on("selectEnd",h.bind(this._onSelected,this,r,e,i,n)),r.enable(t,!1);},x._disposeController=function(){var t=this._controller;t&&(t.off("selected"),t.dispose());},x._onSelected=function(t,e,i,n,o){if(o.length){var l=o[0];t.update();var h={};i.eachComponent("grid",function(t,e){var n=t.coordinateSystem,o=r(n,i),c=a(l,o);if(c){var u=s(c,o,0,"x"),d=s(c,o,1,"y");u&&(h[u.dataZoomId]=u),d&&(h[d.dataZoomId]=d);}},this),p.push(i,h),this._dispatchAction(h,n);}},x._dispatchAction=function(t,e){var i=[];m(t,function(t){i.push(t);}),i.length&&e.dispatchAction({type:"dataZoom",from:this.uid,batch:h.clone(i,!0)});},i(29).register("dataZoom",n),i(2).registerPreprocessor(function(t){function e(t,e){if(e){var r=t+"Index",o=e[r];null==o||h.isArray(o)||(o=o===!1?[]:[o]),i(t,function(e,i){if(null==o||-1!==h.indexOf(o,i)){var a={type:"select",$fromToolbox:!0,id:y+t+i};a[r]=i,n.push(a);}});}}function i(e,i){var n=t[e];h.isArray(n)||(n=n?[n]:[]),m(n,i);}if(t){var n=t.dataZoom||(t.dataZoom=[]);h.isArray(n)||(n=[n]);var r=t.toolbox;if(r&&(h.isArray(r)&&(r=r[0]),r&&r.feature)){var o=r.feature.dataZoom;e("xAxis",o),e("yAxis",o);}}}),t.exports=n;},function(t,e,i){"use strict";function n(t){this.model=t;}var r=i(1);n.defaultOption={show:!0,type:[],icon:{line:"M4.1,28.9h7.1l9.3-22l7.4,38l9.7-19.7l3,12.8h14.9M4.1,58h51.4",bar:"M6.7,22.9h10V48h-10V22.9zM24.9,13h10v35h-10V13zM43.2,2h10v46h-10V2zM3.1,58h53.7",stack:"M8.2,38.4l-8.4,4.1l30.6,15.3L60,42.5l-8.1-4.1l-21.5,11L8.2,38.4z M51.9,30l-8.1,4.2l-13.4,6.9l-13.9-6.9L8.2,30l-8.4,4.2l8.4,4.2l22.2,11l21.5-11l8.1-4.2L51.9,30z M51.9,21.7l-8.1,4.2L35.7,30l-5.3,2.8L24.9,30l-8.4-4.1l-8.3-4.2l-8.4,4.2L8.2,30l8.3,4.2l13.9,6.9l13.4-6.9l8.1-4.2l8.1-4.1L51.9,21.7zM30.4,2.2L-0.2,17.5l8.4,4.1l8.3,4.2l8.4,4.2l5.5,2.7l5.3-2.7l8.1-4.2l8.1-4.2l8.1-4.1L30.4,2.2z",tiled:"M2.3,2.2h22.8V25H2.3V2.2z M35,2.2h22.8V25H35V2.2zM2.3,35h22.8v22.8H2.3V35z M35,35h22.8v22.8H35V35z"},title:{line:"切换为折线图",bar:"切换为柱状图",stack:"切换为堆叠",tiled:"切换为平铺"},option:{},seriesIndex:{}};var o=n.prototype;o.getIcons=function(){var t=this.model,e=t.get("icon"),i={};return r.each(t.get("type"),function(t){e[t]&&(i[t]=e[t]);}),i;};var a={line:function line(t,e,i,n){return "bar"===t?r.merge({id:e,type:"line",data:i.get("data"),stack:i.get("stack"),markPoint:i.get("markPoint"),markLine:i.get("markLine")},n.get("option.line")||{},!0):void 0;},bar:function bar(t,e,i,n){return "line"===t?r.merge({id:e,type:"bar",data:i.get("data"),stack:i.get("stack"),markPoint:i.get("markPoint"),markLine:i.get("markLine")},n.get("option.bar")||{},!0):void 0;},stack:function stack(t,e,i,n){return "line"===t||"bar"===t?r.merge({id:e,stack:"__ec_magicType_stack__"},n.get("option.stack")||{},!0):void 0;},tiled:function tiled(t,e,i,n){return "line"===t||"bar"===t?r.merge({id:e,stack:""},n.get("option.tiled")||{},!0):void 0;}},s=[["line","bar"],["stack","tiled"]];o.onclick=function(t,e,i){var n=this.model,o=n.get("seriesIndex."+i);if(a[i]){var l={series:[]},h=function h(t){var e=t.subType,o=t.id,s=a[i](e,o,t,n);s&&(r.defaults(s,t.option),l.series.push(s));var h=t.coordinateSystem;if(h&&"cartesian2d"===h.type&&("line"===i||"bar"===i)){var c=h.getAxesByScale("ordinal")[0];if(c){var u=c.dim,d=t.get(u+"AxisIndex"),f=u+"Axis";l[f]=l[f]||[];for(var p=0;d>=p;p++){l[f][d]=l[f][d]||{};}l[f][d].boundaryGap="bar"===i;}}};r.each(s,function(t){r.indexOf(t,i)>=0&&r.each(t,function(t){n.setIconStatus(t,"normal");});}),n.setIconStatus(i,"emphasis"),t.eachComponent({mainType:"series",query:null==o?null:{seriesIndex:o}},h),e.dispatchAction({type:"changeMagicType",currentType:i,newOption:l});}};var l=i(2);l.registerAction({type:"changeMagicType",event:"magicTypeChanged",update:"prepareAndUpdate"},function(t,e){e.mergeOption(t.newOption);}),i(29).register("magicType",n),t.exports=n;},function(t,e,i){"use strict";function n(t){this.model=t;}var r=i(100);n.defaultOption={show:!0,icon:"M3.8,33.4 M47,18.9h9.8V8.7 M56.3,20.1 C52.1,9,40.5,0.6,26.8,2.1C12.6,3.7,1.6,16.2,2.1,30.6 M13,41.1H3.1v10.2 M3.7,39.9c4.2,11.1,15.8,19.5,29.5,18 c14.2-1.6,25.2-14.1,24.7-28.5",title:"还原"};var o=n.prototype;o.onclick=function(t,e,i){r.clear(t),e.dispatchAction({type:"restore",from:this.uid});},i(29).register("restore",n),i(2).registerAction({type:"restore",event:"restore",update:"prepareAndUpdate"},function(t,e){e.resetOption("recreate");}),t.exports=n;},function(t,e,i){function n(t){this.model=t;}var r=i(15);n.defaultOption={show:!0,icon:"M4.7,22.9L29.3,45.5L54.7,23.4M4.6,43.6L4.6,58L53.8,58L53.8,43.6M29.2,45.1L29.2,0",title:"保存为图片",type:"png",name:"",excludeComponents:["toolbox"],pixelRatio:1,lang:["右键另存为图片"]},n.prototype.unusable=!r.canvasSupported;var o=n.prototype;o.onclick=function(t,e){var i=this.model,n=i.get("name")||t.get("title.0.text")||"echarts",r=document.createElement("a"),o=i.get("type",!0)||"png";r.download=n+"."+o,r.target="_blank";var a=e.getConnectedDataURL({type:o,backgroundColor:i.get("backgroundColor",!0)||t.get("backgroundColor")||"#fff",excludeComponents:i.get("excludeComponents"),pixelRatio:i.get("pixelRatio")});if(r.href=a,"function"==typeof MouseEvent){var s=new MouseEvent("click",{view:window,bubbles:!0,cancelable:!1});r.dispatchEvent(s);}else {var l=i.get("lang"),h='<body style="margin:0;"><img src="'+a+'" style="max-width:100%;" title="'+(l&&l[0]||"")+'" /></body>',c=window.open();c.document.write(h);}},i(29).register("saveAsImage",n),t.exports=n;},function(t,e,i){i(198),i(199),i(2).registerAction({type:"showTip",event:"showTip",update:"none"},function(){}),i(2).registerAction({type:"hideTip",event:"hideTip",update:"none"},function(){});},function(t,e,i){function n(t){var e="cubic-bezier(0.23, 1, 0.32, 1)",i="left "+t+"s "+e+",top "+t+"s "+e;return l.map(p,function(t){return t+"transition:"+i;}).join(";");}function r(t){var e=[],i=t.get("fontSize"),n=t.getTextColor();return n&&e.push("color:"+n),e.push("font:"+t.getFont()),i&&e.push("line-height:"+Math.round(3*i/2)+"px"),d(["decoration","align"],function(i){var n=t.get(i);n&&e.push("text-"+i+":"+n);}),e.join(";");}function o(t){t=t;var e=[],i=t.get("transitionDuration"),o=t.get("backgroundColor"),a=t.getModel("textStyle"),s=t.get("padding");return i&&e.push(n(i)),o&&(e.push("background-Color:"+h.toHex(o)),e.push("filter:alpha(opacity=70)"),e.push("background-Color:"+o)),d(["width","color","radius"],function(i){var n="border-"+i,r=f(n),o=t.get(r);null!=o&&e.push(n+":"+o+("color"===i?"":"px"));}),e.push(r(a)),null!=s&&e.push("padding:"+u.normalizeCssArray(s).join("px ")+"px"),e.join(";")+";";}function a(t,e){var i=document.createElement("div"),n=e.getZr();this.el=i,this._x=e.getWidth()/2,this._y=e.getHeight()/2,t.appendChild(i),this._container=t,this._show=!1,this._hideTimeout;var r=this;i.onmouseenter=function(){r.enterable&&(clearTimeout(r._hideTimeout),r._show=!0),r._inContent=!0;},i.onmousemove=function(e){if(!r.enterable){var i=n.handler;c.normalizeEvent(t,e),i.dispatch("mousemove",e);}},i.onmouseleave=function(){r.enterable&&r._show&&r.hideLater(r._hideDelay),r._inContent=!1;},s(i,t);}function s(t,e){function i(t){n(t.target)&&t.preventDefault();}function n(i){for(;i&&i!==e;){if(i===t)return !0;i=i.parentNode;}}c.addEventListener(e,"touchstart",i),c.addEventListener(e,"touchmove",i),c.addEventListener(e,"touchend",i);}var l=i(1),h=i(22),c=i(33),u=i(9),d=l.each,f=u.toCamelCase,p=["","-webkit-","-moz-","-o-"],g="position:absolute;display:block;border-style:solid;white-space:nowrap;z-index:9999999;";a.prototype={constructor:a,enterable:!0,update:function update(){var t=this._container,e=t.currentStyle||document.defaultView.getComputedStyle(t),i=t.style;"absolute"!==i.position&&"absolute"!==e.position&&(i.position="relative");},show:function show(t){clearTimeout(this._hideTimeout),this.el.style.cssText=g+o(t)+";left:"+this._x+"px;top:"+this._y+"px;"+(t.get("extraCssText")||""),this._show=!0;},setContent:function setContent(t){var e=this.el;e.innerHTML=t,e.style.display=t?"block":"none";},moveTo:function moveTo(t,e){var i=this.el.style;i.left=t+"px",i.top=e+"px",this._x=t,this._y=e;},hide:function hide(){this.el.style.display="none",this._show=!1;},hideLater:function hideLater(t){!this._show||this._inContent&&this.enterable||(t?(this._hideDelay=t,this._show=!1,this._hideTimeout=setTimeout(l.bind(this.hide,this),t)):this.hide());},isShow:function isShow(){return this._show;}},t.exports=a;},function(t,e,i){i(2).extendComponentModel({type:"tooltip",defaultOption:{zlevel:0,z:8,show:!0,showContent:!0,trigger:"item",triggerOn:"mousemove",alwaysShowContent:!1,showDelay:0,hideDelay:100,transitionDuration:.4,enterable:!1,backgroundColor:"rgba(50,50,50,0.7)",borderColor:"#333",borderRadius:4,borderWidth:0,padding:5,extraCssText:"",axisPointer:{type:"line",axis:"auto",animation:!0,animationDurationUpdate:200,animationEasingUpdate:"exponentialOut",lineStyle:{color:"#555",width:1,type:"solid"},crossStyle:{color:"#555",width:1,type:"dashed",textStyle:{}},shadowStyle:{color:"rgba(150,150,150,0.3)"}},textStyle:{color:"#fff",fontSize:14}}});},function(t,e,i){function n(t,e){if(!t||!e)return !1;var i=g.round;return i(t[0])===i(e[0])&&i(t[1])===i(e[1]);}function r(t,e,i,n){return {x1:t,y1:e,x2:i,y2:n};}function o(t,e,i,n){return {x:t,y:e,width:i,height:n};}function a(t,e,i,n,r,o){return {cx:t,cy:e,r0:i,r:n,startAngle:r,endAngle:o,clockwise:!0};}function s(t,e,i,n,r){var o=i.clientWidth,a=i.clientHeight,s=20;return t+o+s>n?t-=o+s:t+=s,e+a+s>r?e-=a+s:e+=s,[t,e];}function l(t,e,i){var n=i.clientWidth,r=i.clientHeight,o=5,a=0,s=0,l=e.width,h=e.height;switch(t){case "inside":a=e.x+l/2-n/2,s=e.y+h/2-r/2;break;case "top":a=e.x+l/2-n/2,s=e.y-r-o;break;case "bottom":a=e.x+l/2-n/2,s=e.y+h+o;break;case "left":a=e.x-n-o,s=e.y+h/2-r/2;break;case "right":a=e.x+l+o,s=e.y+h/2-r/2;}return [a,s];}function h(t,e,i,n,r,o,a){var h=a.getWidth(),c=a.getHeight(),u=o&&o.getBoundingRect().clone();if(o&&u.applyTransform(o.transform),"function"==typeof t&&(t=t([e,i],r,u)),f.isArray(t))e=m(t[0],h),i=m(t[1],c);else if("string"==typeof t&&o){var d=l(t,u,n.el);e=d[0],i=d[1];}else {var d=s(e,i,n.el,h,c);e=d[0],i=d[1];}n.moveTo(e,i);}function c(t){var e=t.coordinateSystem,i=t.get("tooltip.trigger",!0);return !(!e||"cartesian2d"!==e.type&&"polar"!==e.type&&"single"!==e.type||"item"===i);}var u=i(197),d=i(3),f=i(1),p=i(9),g=i(4),m=g.parsePercent,v=i(15);i(2).extendComponentView({type:"tooltip",_axisPointers:{},init:function init(t,e){if(!v.node){var i=new u(e.getDom(),e);this._tooltipContent=i,e.on("showTip",this._manuallyShowTip,this),e.on("hideTip",this._manuallyHideTip,this);}},render:function render(t,e,i){if(!v.node){this.group.removeAll(),this._axisPointers={},this._tooltipModel=t,this._ecModel=e,this._api=i,this._lastHover={};var n=this._tooltipContent;n.update(),n.enterable=t.get("enterable"),this._alwaysShowContent=t.get("alwaysShowContent"),this._seriesGroupByAxis=this._prepareAxisTriggerData(t,e);var r=this._crossText;if(r&&this.group.add(r),null!=this._lastX&&null!=this._lastY){var o=this;clearTimeout(this._refreshUpdateTimeout),this._refreshUpdateTimeout=setTimeout(function(){o._manuallyShowTip({x:o._lastX,y:o._lastY});});}var a=this._api.getZr();a.off("click",this._tryShow),a.off("mousemove",this._mousemove),a.off("mouseout",this._hide),a.off("globalout",this._hide),"click"===t.get("triggerOn")?a.on("click",this._tryShow,this):(a.on("mousemove",this._mousemove,this),a.on("mouseout",this._hide,this),a.on("globalout",this._hide,this));}},_mousemove:function _mousemove(t){var e=this._tooltipModel.get("showDelay"),i=this;clearTimeout(this._showTimeout),e>0?this._showTimeout=setTimeout(function(){i._tryShow(t);},e):this._tryShow(t);},_manuallyShowTip:function _manuallyShowTip(t){if(t.from!==this.uid){var e=this._ecModel,i=t.seriesIndex,n=t.dataIndex,r=e.getSeriesByIndex(i),o=this._api;if(null==t.x||null==t.y){if(r||e.eachSeries(function(t){c(t)&&!r&&(r=t);}),r){var a=r.getData();null==n&&(n=a.indexOfName(t.name));var s,l,h=a.getItemGraphicEl(n),u=r.coordinateSystem;if(u&&u.dataToPoint){var d=u.dataToPoint(a.getValues(f.map(u.dimensions,function(t){return r.coordDimToDataDim(t)[0];}),n,!0));s=d&&d[0],l=d&&d[1];}else if(h){var p=h.getBoundingRect().clone();p.applyTransform(h.transform),s=p.x+p.width/2,l=p.y+p.height/2;}null!=s&&null!=l&&this._tryShow({offsetX:s,offsetY:l,target:h,event:{}});}}else {var h=o.getZr().handler.findHover(t.x,t.y);this._tryShow({offsetX:t.x,offsetY:t.y,target:h,event:{}});}}},_manuallyHideTip:function _manuallyHideTip(t){t.from!==this.uid&&this._hide();},_prepareAxisTriggerData:function _prepareAxisTriggerData(t,e){var i={};return e.eachSeries(function(t){if(c(t)){var e,n,r=t.coordinateSystem;"cartesian2d"===r.type?(e=r.getBaseAxis(),n=e.dim+e.index):"single"===r.type?(e=r.getAxis(),n=e.dim+e.type):(e=r.getBaseAxis(),n=e.dim+r.name),i[n]=i[n]||{coordSys:[],series:[]},i[n].coordSys.push(r),i[n].series.push(t);}},this),i;},_tryShow:function _tryShow(t){var e=t.target,i=this._tooltipModel,n=i.get("trigger"),r=this._ecModel,o=this._api;if(i)if(this._lastX=t.offsetX,this._lastY=t.offsetY,e&&null!=e.dataIndex){var a=e.dataModel||r.getSeriesByIndex(e.seriesIndex),s=e.dataIndex,l=a.getData().getItemModel(s);"axis"===(l.get("tooltip.trigger")||n)?this._showAxisTooltip(i,r,t):(this._ticket="",this._hideAxisPointer(),this._resetLastHover(),this._showItemTooltipContent(a,s,t)),o.dispatchAction({type:"showTip",from:this.uid,dataIndex:e.dataIndex,seriesIndex:e.seriesIndex});}else "item"===n?this._hide():this._showAxisTooltip(i,r,t),"cross"===i.get("axisPointer.type")&&o.dispatchAction({type:"showTip",from:this.uid,x:t.offsetX,y:t.offsetY});},_showAxisTooltip:function _showAxisTooltip(t,e,i){var r=t.getModel("axisPointer"),o=r.get("type");if("cross"===o){var a=i.target;if(a&&null!=a.dataIndex){var s=e.getSeriesByIndex(a.seriesIndex),l=a.dataIndex;this._showItemTooltipContent(s,l,i);}}this._showAxisPointer();var h=!0;f.each(this._seriesGroupByAxis,function(t){var e=t.coordSys,a=e[0],s=[i.offsetX,i.offsetY];if(!a.containPoint(s))return void this._hideAxisPointer(a.name);h=!1;var l=a.dimensions,c=a.pointToData(s,!0);s=a.dataToPoint(c);var u=a.getBaseAxis(),d=r.get("axis");"auto"===d&&(d=u.dim);var p=!1,g=this._lastHover;if("cross"===o)n(g.data,c)&&(p=!0),g.data=c;else {var m=f.indexOf(l,d);g.data===c[m]&&(p=!0),g.data=c[m];}"cartesian2d"!==a.type||p?"polar"!==a.type||p?"single"!==a.type||p||this._showSinglePointer(r,a,d,s):this._showPolarPointer(r,a,d,s):this._showCartesianPointer(r,a,d,s),"cross"!==o&&this._dispatchAndShowSeriesTooltipContent(a,t.series,s,c,p);},this),h&&this._hide();},_showCartesianPointer:function _showCartesianPointer(t,e,i,n){function a(i,n,o){var a="x"===i?r(n[0],o[0],n[0],o[1]):r(o[0],n[1],o[1],n[1]),s=l._getPointerElement(e,t,i,a);c?d.updateProps(s,{shape:a},t):s.attr({shape:a});}function s(i,n,r){var a=e.getAxis(i),s=a.getBandWidth(),h=r[1]-r[0],u="x"===i?o(n[0]-s/2,r[0],s,h):o(r[0],n[1]-s/2,h,s),f=l._getPointerElement(e,t,i,u);c?d.updateProps(f,{shape:u},t):f.attr({shape:u});}var l=this,h=t.get("type"),c="cross"!==h;if("cross"===h)a("x",n,e.getAxis("y").getGlobalExtent()),a("y",n,e.getAxis("x").getGlobalExtent()),this._updateCrossText(e,n,t);else {var u=e.getAxis("x"===i?"y":"x"),f=u.getGlobalExtent();"cartesian2d"===e.type&&("line"===h?a:s)(i,n,f);}},_showSinglePointer:function _showSinglePointer(t,e,i,n){function o(i,n,o){var s=e.getAxis(),h=s.orient,c="horizontal"===h?r(n[0],o[0],n[0],o[1]):r(o[0],n[1],o[1],n[1]),u=a._getPointerElement(e,t,i,c);l?d.updateProps(u,{shape:c},t):u.attr({shape:c});}var a=this,s=t.get("type"),l="cross"!==s,h=e.getRect(),c=[h.y,h.y+h.height];o(i,n,c);},_showPolarPointer:function _showPolarPointer(t,e,i,n){function o(i,n,o){var a,s=e.pointToCoord(n);if("angle"===i){var h=e.coordToPoint([o[0],s[1]]),c=e.coordToPoint([o[1],s[1]]);a=r(h[0],h[1],c[0],c[1]);}else a={cx:e.cx,cy:e.cy,r:s[0]};var u=l._getPointerElement(e,t,i,a);f?d.updateProps(u,{shape:a},t):u.attr({shape:a});}function s(i,n,r){var o,s=e.getAxis(i),h=s.getBandWidth(),c=e.pointToCoord(n),u=Math.PI/180;o="angle"===i?a(e.cx,e.cy,r[0],r[1],(-c[1]-h/2)*u,(-c[1]+h/2)*u):a(e.cx,e.cy,c[0]-h/2,c[0]+h/2,0,2*Math.PI);var p=l._getPointerElement(e,t,i,o);f?d.updateProps(p,{shape:o},t):p.attr({shape:o});}var l=this,h=t.get("type"),c=e.getAngleAxis(),u=e.getRadiusAxis(),f="cross"!==h;if("cross"===h)o("angle",n,u.getExtent()),o("radius",n,c.getExtent()),this._updateCrossText(e,n,t);else {var p=e.getAxis("radius"===i?"angle":"radius"),g=p.getExtent();("line"===h?o:s)(i,n,g);}},_updateCrossText:function _updateCrossText(t,e,i){var n=i.getModel("crossStyle"),r=n.getModel("textStyle"),o=this._tooltipModel,a=this._crossText;a||(a=this._crossText=new d.Text({style:{textAlign:"left",textVerticalAlign:"bottom"}}),this.group.add(a));var s=t.pointToData(e),l=t.dimensions;s=f.map(s,function(e,i){var n=t.getAxis(l[i]);return e="category"===n.type||"time"===n.type?n.scale.getLabel(e):p.addCommas(e.toFixed(n.getPixelPrecision()));}),a.setStyle({fill:r.getTextColor()||n.get("color"),textFont:r.getFont(),text:s.join(", "),x:e[0]+5,y:e[1]-5}),a.z=o.get("z"),a.zlevel=o.get("zlevel");},_getPointerElement:function _getPointerElement(t,e,i,n){var r=this._tooltipModel,o=r.get("z"),a=r.get("zlevel"),s=this._axisPointers,l=t.name;if(s[l]=s[l]||{},s[l][i])return s[l][i];var h=e.get("type"),c=e.getModel(h+"Style"),u="shadow"===h,f=c[u?"getAreaStyle":"getLineStyle"](),p="polar"===t.type?u?"Sector":"radius"===i?"Circle":"Line":u?"Rect":"Line";u?f.stroke=null:f.fill=null;var g=s[l][i]=new d[p]({style:f,z:o,zlevel:a,silent:!0,shape:n});return this.group.add(g),g;},_dispatchAndShowSeriesTooltipContent:function _dispatchAndShowSeriesTooltipContent(t,e,i,n,r){var o=this._tooltipModel,a=this._tooltipContent,s=t.getBaseAxis(),l=f.map(e,function(t){return {seriesIndex:t.seriesIndex,dataIndex:t.getAxisTooltipDataIndex?t.getAxisTooltipDataIndex(t.coordDimToDataDim(s.dim),n,s):t.getData().indexOfNearest(t.coordDimToDataDim(s.dim)[0],n["x"===s.dim||"radius"===s.dim?0:1])};}),c=this._lastHover,u=this._api;if(c.payloadBatch&&!r&&u.dispatchAction({type:"downplay",batch:c.payloadBatch}),r||(u.dispatchAction({type:"highlight",batch:l}),c.payloadBatch=l),u.dispatchAction({type:"showTip",dataIndex:l[0].dataIndex,seriesIndex:l[0].seriesIndex,from:this.uid}),s&&o.get("showContent")){var d,g=o.get("formatter"),m=o.get("position"),v=f.map(e,function(t,e){return t.getDataParams(l[e].dataIndex);});a.show(o);var y=l[0].dataIndex;if(!r){if(this._ticket="",g){if("string"==typeof g)d=p.formatTpl(g,v);else if("function"==typeof g){var x=this,_="axis_"+t.name+"_"+y,b=function b(t,e){t===x._ticket&&(a.setContent(e),h(m,i[0],i[1],a,v,null,u));};x._ticket=_,d=g(v,_,b);}}else {var w=e[0].getData().getName(y);d=(w?w+"<br />":"")+f.map(e,function(t,e){return t.formatTooltip(l[e].dataIndex,!0);}).join("<br />");}a.setContent(d);}h(m,i[0],i[1],a,v,null,u);}},_showItemTooltipContent:function _showItemTooltipContent(t,e,i){var n=this._api,r=t.getData(),o=r.getItemModel(e),a=this._tooltipModel,s=this._tooltipContent,l=o.getModel("tooltip");if(l.parentModel?l.parentModel.parentModel=a:l.parentModel=this._tooltipModel,l.get("showContent")){var c,u=l.get("formatter"),d=l.get("position"),f=t.getDataParams(e);if(u){if("string"==typeof u)c=p.formatTpl(u,f);else if("function"==typeof u){var g=this,m="item_"+t.name+"_"+e,v=function v(t,e){t===g._ticket&&(s.setContent(e),h(d,i.offsetX,i.offsetY,s,f,i.target,n));};g._ticket=m,c=u(f,m,v);}}else c=t.formatTooltip(e);s.show(l),s.setContent(c),h(d,i.offsetX,i.offsetY,s,f,i.target,n);}},_showAxisPointer:function _showAxisPointer(t){if(t){var e=this._axisPointers[t];e&&f.each(e,function(t){t.show();});}else this.group.eachChild(function(t){t.show();}),this.group.show();},_resetLastHover:function _resetLastHover(){var t=this._lastHover;t.payloadBatch&&this._api.dispatchAction({type:"downplay",batch:t.payloadBatch}),this._lastHover={};},_hideAxisPointer:function _hideAxisPointer(t){if(t){var e=this._axisPointers[t];e&&f.each(e,function(t){t.hide();});}else this.group.hide();},_hide:function _hide(){clearTimeout(this._showTimeout),this._hideAxisPointer(),this._resetLastHover(),this._alwaysShowContent||this._tooltipContent.hideLater(this._tooltipModel.get("hideDelay")),this._api.dispatchAction({type:"hideTip",from:this.uid}),this._lastX=this._lastY=null;},dispose:function dispose(t,e){if(!v.node){var i=e.getZr();this._tooltipContent.hide(),i.off("click",this._tryShow),i.off("mousemove",this._mousemove),i.off("mouseout",this._hide),i.off("globalout",this._hide),e.off("showTip",this._manuallyShowTip),e.off("hideTip",this._manuallyHideTip);}}});},,function(t,e){function i(){h=!1,a.length?l=a.concat(l):c=-1,l.length&&n();}function n(){if(!h){var t=setTimeout(i);h=!0;for(var e=l.length;e;){for(a=l,l=[];++c<e;){a&&a[c].run();}c=-1,e=l.length;}a=null,h=!1,clearTimeout(t);}}function r(t,e){this.fun=t,this.array=e;}function o(){}var a,s=t.exports={},l=[],h=!1,c=-1;s.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var i=1;i<arguments.length;i++){e[i-1]=arguments[i];}l.push(new r(t,e)),1!==l.length||h||setTimeout(n,0);},r.prototype.run=function(){this.fun.apply(null,this.array);},s.title="browser",s.browser=!0,s.env={},s.argv=[],s.version="",s.versions={},s.on=o,s.addListener=o,s.once=o,s.off=o,s.removeListener=o,s.removeAllListeners=o,s.emit=o,s.binding=function(t){throw new Error("process.binding is not supported");},s.cwd=function(){return "/";},s.chdir=function(t){throw new Error("process.chdir is not supported");},s.umask=function(){return 0;};},function(t,e,i){function n(t){return parseInt(t,10);}function r(t,e){s.initVML(),this.root=t,this.storage=e;var i=document.createElement("div"),n=document.createElement("div");i.style.cssText="display:inline-block;overflow:hidden;position:relative;width:300px;height:150px;",n.style.cssText="position:absolute;left:0;top:0;",t.appendChild(i),this._vmlRoot=n,this._vmlViewport=i,this.resize();var r=e.delFromMap,o=e.addToMap;e.delFromMap=function(t){var i=e.get(t);r.call(e,t),i&&i.onRemove&&i.onRemove(n);},e.addToMap=function(t){t.onAdd&&t.onAdd(n),o.call(e,t);},this._firstPaint=!0;}function o(t){return function(){a('In IE8.0 VML mode painter not support method "'+t+'"');};}var a=i(45),s=i(158);r.prototype={constructor:r,getViewportRoot:function getViewportRoot(){return this._vmlViewport;},refresh:function refresh(){var t=this.storage.getDisplayList(!0,!0);this._paintList(t);},_paintList:function _paintList(t){for(var e=this._vmlRoot,i=0;i<t.length;i++){var n=t[i];n.invisible||n.ignore?(n.__alreadyNotVisible||n.onRemove(e),n.__alreadyNotVisible=!0):(n.__alreadyNotVisible&&n.onAdd(e),n.__alreadyNotVisible=!1,n.__dirty&&(n.beforeBrush&&n.beforeBrush(),(n.brushVML||n.brush).call(n,e),n.afterBrush&&n.afterBrush())),n.__dirty=!1;}this._firstPaint&&(this._vmlViewport.appendChild(e),this._firstPaint=!1);},resize:function resize(){var t=this._getWidth(),e=this._getHeight();if(this._width!=t&&this._height!=e){this._width=t,this._height=e;var i=this._vmlViewport.style;i.width=t+"px",i.height=e+"px";}},dispose:function dispose(){this.root.innerHTML="",this._vmlRoot=this._vmlViewport=this.storage=null;},getWidth:function getWidth(){return this._width;},getHeight:function getHeight(){return this._height;},_getWidth:function _getWidth(){var t=this.root,e=t.currentStyle;return (t.clientWidth||n(e.width))-n(e.paddingLeft)-n(e.paddingRight)|0;},_getHeight:function _getHeight(){var t=this.root,e=t.currentStyle;return (t.clientHeight||n(e.height))-n(e.paddingTop)-n(e.paddingBottom)|0;}};for(var l=["getLayer","insertLayer","eachLayer","eachBuildinLayer","eachOtherLayer","getLayers","modLayer","delLayer","clearLayer","toDataURL","pathToImage"],h=0;h<l.length;h++){var c=l[h];r.prototype[c]=o(c);}t.exports=r;},function(t,e,i){if(!i(15).canvasSupported){var n=i(5),r=i(8),o=i(27).CMD,a=i(22),s=i(17),l=i(66),h=i(35),c=i(46),u=i(65),d=i(6),f=i(16),p=i(158),g=Math.round,m=Math.sqrt,v=Math.abs,y=Math.cos,x=Math.sin,_=Math.max,b=n.applyTransform,w=",",M="progid:DXImageTransform.Microsoft",S=21600,A=S/2,T=1e5,C=1e3,I=function I(t){t.style.cssText="position:absolute;left:0;top:0;width:1px;height:1px;",t.coordsize=S+","+S,t.coordorigin="0,0";},k=function k(t){return String(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;");},D=function D(t,e,i){return "rgb("+[t,e,i].join(",")+")";},L=function L(t,e){e&&t&&e.parentNode!==t&&t.appendChild(e);},P=function P(t,e){e&&t&&e.parentNode===t&&t.removeChild(e);},O=function O(t,e,i){return (parseFloat(t)||0)*T+(parseFloat(e)||0)*C+i;},z=function z(t,e){return "string"==typeof t?t.lastIndexOf("%")>=0?parseFloat(t)/100*e:parseFloat(t):t;},E=function E(t,e,i){var n=a.parse(e);i=+i,isNaN(i)&&(i=1),n&&(t.color=D(n[0],n[1],n[2]),t.opacity=i*n[3]);},R=function R(t){var e=a.parse(t);return [D(e[0],e[1],e[2]),e[3]];},B=function B(t,e,i){var n=e.fill;if(null!=n)if(n instanceof f){var r,o=0,a=[0,0],s=0,l=1,h=i.getBoundingRect(),c=h.width,u=h.height;if("linear"===n.type){r="gradient";var d=i.transform,p=[n.x*c,n.y*u],g=[n.x2*c,n.y2*u];d&&(b(p,p,d),b(g,g,d));var m=g[0]-p[0],v=g[1]-p[1];o=180*Math.atan2(m,v)/Math.PI,0>o&&(o+=360),1e-6>o&&(o=0);}else {r="gradientradial";var p=[n.x*c,n.y*u],d=i.transform,y=i.scale,x=c,w=u;a=[(p[0]-h.x)/x,(p[1]-h.y)/w],d&&b(p,p,d),x/=y[0]*S,w/=y[1]*S;var M=_(x,w);s=0/M,l=2*n.r/M-s;}var A=n.colorStops.slice();A.sort(function(t,e){return t.offset-e.offset;});for(var T=A.length,C=[],I=[],k=0;T>k;k++){var D=A[k],L=R(D.color);I.push(D.offset*l+s+" "+L[0]),0!==k&&k!==T-1||C.push(L);}if(T>=2){var P=C[0][0],O=C[1][0],z=C[0][1]*e.opacity,B=C[1][1]*e.opacity;t.type=r,t.method="none",t.focus="100%",t.angle=o,t.color=P,t.color2=O,t.colors=I.join(","),t.opacity=B,t.opacity2=z;}"radial"===r&&(t.focusposition=a.join(","));}else E(t,n,e.opacity);},N=function N(t,e){null!=e.lineJoin&&(t.joinstyle=e.lineJoin),null!=e.miterLimit&&(t.miterlimit=e.miterLimit*S),null!=e.lineCap&&(t.endcap=e.lineCap),null!=e.lineDash&&(t.dashstyle=e.lineDash.join(" ")),null==e.stroke||e.stroke instanceof f||E(t,e.stroke,e.opacity);},V=function V(t,e,i,n){var r="fill"==e,o=t.getElementsByTagName(e)[0];null!=i[e]&&"none"!==i[e]&&(r||!r&&i.lineWidth)?(t[r?"filled":"stroked"]="true",i[e] instanceof f&&P(t,o),o||(o=p.createNode(e)),r?B(o,i,n):N(o,i),L(t,o)):(t[r?"filled":"stroked"]="false",P(t,o));},F=[[],[],[]],G=function G(t,e){var i,n,r,a,s,l,h=o.M,c=o.C,u=o.L,d=o.A,f=o.Q,p=[];for(a=0;a<t.length;){switch(r=t[a++],n="",i=0,r){case h:n=" m ",i=1,s=t[a++],l=t[a++],F[0][0]=s,F[0][1]=l;break;case u:n=" l ",i=1,s=t[a++],l=t[a++],F[0][0]=s,F[0][1]=l;break;case f:case c:n=" c ",i=3;var v,_,M=t[a++],T=t[a++],C=t[a++],I=t[a++];r===f?(v=C,_=I,C=(C+2*M)/3,I=(I+2*T)/3,M=(s+2*M)/3,T=(l+2*T)/3):(v=t[a++],_=t[a++]),F[0][0]=M,F[0][1]=T,F[1][0]=C,F[1][1]=I,F[2][0]=v,F[2][1]=_,s=v,l=_;break;case d:var k=0,D=0,L=1,P=1,O=0;e&&(k=e[4],D=e[5],L=m(e[0]*e[0]+e[1]*e[1]),P=m(e[2]*e[2]+e[3]*e[3]),O=Math.atan2(-e[1]/P,e[0]/L));var z=t[a++],E=t[a++],R=t[a++],B=t[a++],N=t[a++]+O,V=t[a++]+N+O;a++;var G=t[a++],W=z+y(N)*R,Z=E+x(N)*B,M=z+y(V)*R,T=E+x(V)*B,H=G?" wa ":" at ";Math.abs(W-M)<1e-10&&G&&(W+=270/S),p.push(H,g(((z-R)*L+k)*S-A),w,g(((E-B)*P+D)*S-A),w,g(((z+R)*L+k)*S-A),w,g(((E+B)*P+D)*S-A),w,g((W*L+k)*S-A),w,g((Z*P+D)*S-A),w,g((M*L+k)*S-A),w,g((T*P+D)*S-A)),s=M,l=T;break;case o.R:var q=F[0],j=F[1];q[0]=t[a++],q[1]=t[a++],j[0]=q[0]+t[a++],j[1]=q[1]+t[a++],e&&(b(q,q,e),b(j,j,e)),q[0]=g(q[0]*S-A),j[0]=g(j[0]*S-A),q[1]=g(q[1]*S-A),j[1]=g(j[1]*S-A),p.push(" m ",q[0],w,q[1]," l ",j[0],w,q[1]," l ",j[0],w,j[1]," l ",q[0],w,j[1]);break;case o.Z:p.push(" x ");}if(i>0){p.push(n);for(var X=0;i>X;X++){var U=F[X];e&&b(U,U,e),p.push(g(U[0]*S-A),w,g(U[1]*S-A),i-1>X?w:"");}}}return p.join("");};d.prototype.brushVML=function(t){var e=this.style,i=this._vmlEl;i||(i=p.createNode("shape"),I(i),this._vmlEl=i),V(i,"fill",e,this),V(i,"stroke",e,this);var n=this.transform,r=null!=n,o=i.getElementsByTagName("stroke")[0];if(o){var a=e.lineWidth;if(r&&!e.strokeNoScale){var s=n[0]*n[3]-n[1]*n[2];a*=m(v(s));}o.weight=a+"px";}var l=this.path;this.__dirtyPath&&(l.beginPath(),this.buildPath(l,this.shape),l.toStatic(),this.__dirtyPath=!1),i.path=G(l.data,this.transform),i.style.zIndex=O(this.zlevel,this.z,this.z2),L(t,i),e.text&&this.drawRectText(t,this.getBoundingRect());},d.prototype.onRemove=function(t){P(t,this._vmlEl),this.removeRectText(t);},d.prototype.onAdd=function(t){L(t,this._vmlEl),this.appendRectText(t);};var W=function W(t){return "object"==(typeof t==="undefined"?"undefined":(0,_typeof3.default)(t))&&t.tagName&&"IMG"===t.tagName.toUpperCase();};c.prototype.brushVML=function(t){var e,i,n=this.style,r=n.image;if(W(r)){var o=r.src;if(o===this._imageSrc)e=this._imageWidth,i=this._imageHeight;else {var a=r.runtimeStyle,s=a.width,l=a.height;a.width="auto",a.height="auto",e=r.width,i=r.height,a.width=s,a.height=l,this._imageSrc=o,this._imageWidth=e,this._imageHeight=i;}r=o;}else r===this._imageSrc&&(e=this._imageWidth,i=this._imageHeight);if(r){var h=n.x||0,c=n.y||0,u=n.width,d=n.height,f=n.sWidth,v=n.sHeight,y=n.sx||0,x=n.sy||0,S=f&&v,A=this._vmlEl;A||(A=p.doc.createElement("div"),I(A),this._vmlEl=A);var T,C=A.style,k=!1,D=1,P=1;if(this.transform&&(T=this.transform,D=m(T[0]*T[0]+T[1]*T[1]),P=m(T[2]*T[2]+T[3]*T[3]),k=T[1]||T[2]),k){var z=[h,c],E=[h+u,c],R=[h,c+d],B=[h+u,c+d];b(z,z,T),b(E,E,T),b(R,R,T),b(B,B,T);var N=_(z[0],E[0],R[0],B[0]),V=_(z[1],E[1],R[1],B[1]),F=[];F.push("M11=",T[0]/D,w,"M12=",T[2]/P,w,"M21=",T[1]/D,w,"M22=",T[3]/P,w,"Dx=",g(h*D+T[4]),w,"Dy=",g(c*P+T[5])),C.padding="0 "+g(N)+"px "+g(V)+"px 0",C.filter=M+".Matrix("+F.join("")+", SizingMethod=clip)";}else T&&(h=h*D+T[4],c=c*P+T[5]),C.filter="",C.left=g(h)+"px",C.top=g(c)+"px";var G=this._imageEl,Z=this._cropEl;G||(G=p.doc.createElement("div"),this._imageEl=G);var H=G.style;if(S){if(e&&i)H.width=g(D*e*u/f)+"px",H.height=g(P*i*d/v)+"px";else {var q=new Image(),j=this;q.onload=function(){q.onload=null,e=q.width,i=q.height,H.width=g(D*e*u/f)+"px",H.height=g(P*i*d/v)+"px",j._imageWidth=e,j._imageHeight=i,j._imageSrc=r;},q.src=r;}Z||(Z=p.doc.createElement("div"),Z.style.overflow="hidden",this._cropEl=Z);var X=Z.style;X.width=g((u+y*u/f)*D),X.height=g((d+x*d/v)*P),X.filter=M+".Matrix(Dx="+-y*u/f*D+",Dy="+-x*d/v*P+")",Z.parentNode||A.appendChild(Z),G.parentNode!=Z&&Z.appendChild(G);}else H.width=g(D*u)+"px",H.height=g(P*d)+"px",A.appendChild(G),Z&&Z.parentNode&&(A.removeChild(Z),this._cropEl=null);var U="",Y=n.opacity;1>Y&&(U+=".Alpha(opacity="+g(100*Y)+") "),U+=M+".AlphaImageLoader(src="+r+", SizingMethod=scale)",H.filter=U,A.style.zIndex=O(this.zlevel,this.z,this.z2),L(t,A),n.text&&this.drawRectText(t,this.getBoundingRect());}},c.prototype.onRemove=function(t){P(t,this._vmlEl),this._vmlEl=null,this._cropEl=null,this._imageEl=null,this.removeRectText(t);},c.prototype.onAdd=function(t){L(t,this._vmlEl),this.appendRectText(t);};var Z,H="normal",q={},j=0,X=100,U=document.createElement("div"),Y=function Y(t){var e=q[t];if(!e){j>X&&(j=0,q={});var i,n=U.style;try{n.font=t,i=n.fontFamily.split(",")[0];}catch(r){}e={style:n.fontStyle||H,variant:n.fontVariant||H,weight:n.fontWeight||H,size:0|parseFloat(n.fontSize||12),family:i||"Microsoft YaHei"},q[t]=e,j++;}return e;};s.measureText=function(t,e){var i=p.doc;Z||(Z=i.createElement("div"),Z.style.cssText="position:absolute;top:-20000px;left:0;padding:0;margin:0;border:none;white-space:pre;",p.doc.body.appendChild(Z));try{Z.style.font=e;}catch(n){}return Z.innerHTML="",Z.appendChild(i.createTextNode(t)),{width:Z.offsetWidth};};for(var $=new r(),Q=function Q(t,e,i,n){var r=this.style,o=r.text;if(o){var a,l,h=r.textAlign,c=Y(r.textFont),u=c.style+" "+c.variant+" "+c.weight+" "+c.size+'px "'+c.family+'"',d=r.textBaseline,f=r.textVerticalAlign;i=i||s.getBoundingRect(o,u,h,d);var m=this.transform;if(m&&!n&&($.copy(e),$.applyTransform(m),e=$),n)a=e.x,l=e.y;else {var v=r.textPosition,y=r.textDistance;if(v instanceof Array)a=e.x+z(v[0],e.width),l=e.y+z(v[1],e.height),h=h||"left",d=d||"top";else {var x=s.adjustTextPositionOnRect(v,e,i,y);a=x.x,l=x.y,h=h||x.textAlign,d=d||x.textBaseline;}}if(f){switch(f){case "middle":l-=i.height/2;break;case "bottom":l-=i.height;}d="top";}var _=c.size;switch(d){case "hanging":case "top":l+=_/1.75;break;case "middle":break;default:l-=_/2.25;}switch(h){case "left":break;case "center":a-=i.width/2;break;case "right":a-=i.width;}var M,S,A,T=p.createNode,C=this._textVmlEl;C?(A=C.firstChild,M=A.nextSibling,S=M.nextSibling):(C=T("line"),M=T("path"),S=T("textpath"),A=T("skew"),S.style["v-text-align"]="left",I(C),M.textpathok=!0,S.on=!0,C.from="0 0",C.to="1000 0.05",L(C,A),L(C,M),L(C,S),this._textVmlEl=C);var D=[a,l],P=C.style;m&&n?(b(D,D,m),A.on=!0,A.matrix=m[0].toFixed(3)+w+m[2].toFixed(3)+w+m[1].toFixed(3)+w+m[3].toFixed(3)+",0,0",A.offset=(g(D[0])||0)+","+(g(D[1])||0),A.origin="0 0",P.left="0px",P.top="0px"):(A.on=!1,P.left=g(a)+"px",P.top=g(l)+"px"),S.string=k(o);try{S.style.font=u;}catch(E){}V(C,"fill",{fill:n?r.fill:r.textFill,opacity:r.opacity},this),V(C,"stroke",{stroke:n?r.stroke:r.textStroke,opacity:r.opacity,lineDash:r.lineDash},this),C.style.zIndex=O(this.zlevel,this.z,this.z2),L(t,C);}},K=function K(t){P(t,this._textVmlEl),this._textVmlEl=null;},J=function J(t){L(t,this._textVmlEl);},tt=[l,h,c,d,u],et=0;et<tt.length;et++){var it=tt[et].prototype;it.drawRectText=Q,it.removeRectText=K,it.appendRectText=J;}u.prototype.brushVML=function(t){var e=this.style;e.text&&this.drawRectText(t,{x:e.x||0,y:e.y||0,width:0,height:0},this.getBoundingRect(),!0);},u.prototype.onRemove=function(t){this.removeRectText(t);},u.prototype.onAdd=function(t){this.appendRectText(t);};}},function(t,e,i){i(203),i(67).registerPainter("vml",i(202));}]);});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(78)(module)))

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _vue = __webpack_require__(25);
	
	var _vue2 = _interopRequireDefault(_vue);
	
	var _vueRouter = __webpack_require__(20);
	
	var _vueRouter2 = _interopRequireDefault(_vueRouter);
	
	var _app = __webpack_require__(21);
	
	var _app2 = _interopRequireDefault(_app);
	
	var _list = __webpack_require__(23);
	
	var _list2 = _interopRequireDefault(_list);
	
	var _creat = __webpack_require__(22);
	
	var _creat2 = _interopRequireDefault(_creat);
	
	var _see = __webpack_require__(24);
	
	var _see2 = _interopRequireDefault(_see);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_vue2.default.config.debug = true;
	
	_vue2.default.use(_vueRouter2.default);
	
	var router = new _vueRouter2.default();
	
	router.map({
	    '/': {
	        component: _list2.default
	    },
	    'creat': {
	        name: 'creat',
	        component: _creat2.default
	    },
	    '/see/:id': {
	        name: 'see',
	        component: _see2.default
	    },
	    '/edit/:id': {
	        name: 'edit',
	        component: _creat2.default
	    }
	});
	
	router.beforeEach(function () {
	    window.scrollTo(0, 0);
	});
	
	router.start(_app2.default, '#app');

/***/ },
/* 28 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var data = function data(op) {
	
	    var titles = [],
	        datas = [];
	
	    op.content.forEach(function (key, i) {
	        titles.push(key.text);
	        datas.push(key.pic);
	    });
	
	    var option = {
	        tooltip: {
	            trigger: 'axis',
	            axisPointer: { // 坐标轴指示器，坐标轴触发有效
	                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
	            }
	        },
	        color: ['#42b983'],
	        legend: {
	            data: [op.title]
	        },
	        grid: {
	            left: '3%',
	            right: '4%',
	            bottom: '3%',
	            containLabel: true
	        },
	        xAxis: {
	            type: 'value'
	        },
	        yAxis: {
	            type: 'category',
	            data: titles
	        },
	        series: [{
	            name: op.title,
	            type: 'bar',
	            stack: '总量',
	            label: {
	                normal: {
	                    show: true,
	                    position: 'insideRight'
	                }
	            },
	            data: datas
	        }]
	    };
	    return option;
	};
	
	exports.default = data;

/***/ },
/* 29 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var data = function data(op) {
	
	    var titels = [],
	        datas = [];
	
	    op.content.forEach(function (key, i) {
	        titels.push(key.text);
	
	        datas.push({
	            name: key.text,
	            value: key.pic
	        });
	    });
	
	    var option = {
	        color: ['#42b983', '#52C5FF', '#ff6e5c', '#c08'],
	        tooltip: {
	            trigger: 'item',
	            formatter: "{a} <br/>{b}: {c} ({d}%)"
	        },
	        legend: {
	            orient: 'vertical',
	            x: 'left',
	            data: titels
	        },
	        series: [{
	            name: '投票指数',
	            type: 'pie',
	            radius: ['50%', '70%'],
	            avoidLabelOverlap: false,
	            label: {
	                normal: {
	                    show: false,
	                    position: 'center'
	                },
	                emphasis: {
	                    show: true,
	                    textStyle: {
	                        fontSize: '18',
	                        fontWeight: '100'
	                    }
	                }
	            },
	            labelLine: {
	                normal: {
	                    show: false
	                }
	            },
	            data: datas
	        }]
	    };
	    return option;
	};
	exports.default = data;

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _echartsCommon = __webpack_require__(26);
	
	var _echartsCommon2 = _interopRequireDefault(_echartsCommon);
	
	var _liner = __webpack_require__(28);
	
	var _liner2 = _interopRequireDefault(_liner);
	
	var _pice = __webpack_require__(29);
	
	var _pice2 = _interopRequireDefault(_pice);
	
	var _pice3 = __webpack_require__(80);
	
	var _pice4 = _interopRequireDefault(_pice3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	Vue.directive('map', function (value) {
	
	    setTimeout(function () {
	
	        var dom = _echartsCommon2.default.init(this.el);
	
	        switch (value.type) {
	            case 'checkbox':
	                dom.setOption((0, _liner2.default)(value));
	                break;
	            case 'radio':
	                dom.setOption((0, _pice2.default)(value));
	                break;
	            case 'textarea':
	                dom.setOption((0, _pice4.default)(value));
	                break;
	        }
	    }.bind(this), 300);
	});
	
	//地图配置

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _store = __webpack_require__(2);
	
	var _store2 = _interopRequireDefault(_store);
	
	var _nav = __webpack_require__(76);
	
	var _nav2 = _interopRequireDefault(_nav);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	//
	// <template>
	//     <div>
	//         <navt :user="user"></navt>
	//         <div class="container">
	//             <router-view keep-alive></router-view>      
	//         </div>
	//     </div>
	// </template>
	//
	//
	// <script>
	exports.default = {
	    data: function data() {
	        var serverData = _store2.default.fetch();
	
	        return {
	            user: serverData.user
	        };
	    },
	
	
	    components: {
	        navt: _nav2.default
	    }
	};
	
	// </script>
	/* generated by vue-loader */

/***/ },
/* 32 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// <template id="tem-ui-date">
	//         <div class="ui-date" v-if="datec.isShow">
	//             <div class="ui-date-head">
	//                 <b class="ui-data-pre" @click="change('-')"></b>
	//                 <b class="ui-data-next" @click="change('+')"></b>
	//
	//                 <div class="ui-data-select ui-year"
	//                    :class="[slider.year? 'active': '']" >
	//                     <div class="data-hd">
	//                         <b class="data-icon" @click="active('year')"></b>
	//                         <span>{{date.year}}</span>
	//                     </div>
	//                     <div class="data-bd">
	//                         <ul>
	//                             <li v-for="year in years"
	//                                 track-by="$index"
	//                                 @click="changeDay(year, '')">
	//                                 <a href="javascript:;">{{year}}</a>
	//                             </li>
	//                         </ul>
	//                     </div>
	//                 </div>
	//
	//                 <div class="ui-data-select ui-month"
	//                    :class="[slider.month? 'active': '']" >
	//                     <div class="data-hd">
	//                         <b class="data-icon" @click="active('month')"></b>
	//                         <span>{{date.month}}</span>
	//                     </div>
	//                     <div class="data-bd">
	//                         <ul>
	//                             <li v-for="month in months"
	//                                 track-by="$index"
	//                                 @click="changeDay('', month)">
	//                                 <a href="javascript:;">{{month}}</a></li> 
	//                         </ul>
	//                     </div>
	//                 </div>
	//
	//             </div>
	//             <div class="ui-date-title">
	//                 <ul>
	//                     <li v-for="week in weeks">{{week}}</li>
	//                 </ul>
	//             </div>
	//             <div class="ui-date-body" id="j-data-day">
	//                 <ul class="clearfix">
	//                     <li v-for="day in days"  track-by="$index" :class="[day == date.day? 'active': '']">
	//                         <a href="javascript:;" @click="chengeOther(day)">{{day}}</a>
	//                     </li>
	//                 </ul>
	//             </div>
	//         </div>
	//     </template>
	//
	//
	// <script>
	/*
	    添加数据
	*/
	
	var _data = {
	    weeks: ['日', '一', '二', '三', '四', '五', '六'],
	    date: {
	        year: moment().year,
	        month: moment().month,
	        day: moment().day
	    },
	    slider: {
	        year: false,
	        month: false
	    },
	    months: _month(),
	    years: _yearTem(),
	    days: _day()
	};
	
	function _yearTem() {
	    var nowYear = moment().year;
	
	    var arr = [];
	
	    for (var i = nowYear - 30; i < nowYear; i++) {
	        arr.push(i);
	    }
	
	    for (var k = nowYear; k < nowYear + 30; k++) {
	        arr.push(i);
	    }
	    return arr;
	};
	
	function _month() {
	    var arr = [];
	    for (var i = 0; i < 12; i++) {
	        arr.push(i + 1);
	    }
	    return arr;
	};
	
	function _day(time) {
	    var time = time || +Date.now();
	    var date = moment(time);
	    var dayAll = date.getDay + 1;
	    var day = date.day;
	
	    var posTime = date.formate('YYYY-MM') + '-01';
	    var pos = new Date(posTime).getDay();
	
	    var arr = [];
	
	    for (var i = 0; i < pos; i++) {
	        arr.push('');
	    }
	
	    for (var i = 1; i < dayAll; i++) {
	        arr.push(i);
	    }
	
	    return arr;
	}
	
	/*
	    定义组件
	*/
	
	exports.default = {
	
	    props: ['datec'],
	
	    data: function data() {
	
	        return _data;
	    },
	
	    ready: function ready() {
	        var das = this.datec.time;
	        if (!das) return false;
	
	        var newDate = moment(das);
	
	        this.date = {
	            year: newDate.year,
	            month: newDate.month,
	            day: newDate.day
	        };
	    },
	
	
	    methods: {
	
	        //改变下拉状态
	        active: function active(state) {
	            this.$data.slider[state] = !this.$data.slider[state];
	        },
	
	        //上下点击变换
	        change: function change(type) {
	
	            var data = this.$data.date;
	            if (type == '-') {
	                data.month--;
	                if (data.month < 1) {
	                    data.month = 12;
	                    data.year--;
	                }
	            } else {
	                data.month++;
	                if (data.month > 12) {
	                    data.month = 1;
	                    data.year++;
	                }
	            }
	
	            //注入
	            this.render(data.year + '-' + data.month + '-1');
	        },
	
	        //点击年月变换日期
	        changeDay: function changeDay(year, month) {
	
	            var year = year || this.date.year;
	            var month = month || this.date.month;
	
	            this.$data.date.year = year;
	            this.$data.date.month = month;
	
	            this.render(year + '-' + month + '-1');
	
	            this.sliderUp();
	        },
	
	        //改变日程 传递消息给实例
	        chengeOther: function chengeOther(num) {
	            this.$data.date.day = num;
	            var day = this.date.year + '-' + this.date.month + '-' + this.date.day;
	            var value = moment().analysis(day);
	            this.datec.time = value;
	            this.datec.fn && this.datec.fn(value);
	            this.datec.isShow = false;
	        },
	
	        //下拉关闭
	        sliderUp: function sliderUp() {
	            this.$data.slider.year = this.$data.slider.month = false;
	        },
	
	        //重新注入
	        render: function render(str) {
	            return false;
	            this.date.day = 1;
	            var time = moment().analysis(str);
	            this.days = _day(time);
	        }
	    }
	};
	
	// </script>
	/* generated by vue-loader */

/***/ },
/* 33 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// <template>
	//     <nav class="navbar navbar-inverse">
	//       <div class="navbar-header">
	//           <a class="navbar-brand" href="javascript:;">{{user.name}}</a>
	//         </div>
	//     </nav>
	// </template>
	//
	//
	// <script>
	exports.default = {
	    props: ['user']
	};
	// </script>
	/* generated by vue-loader */

/***/ },
/* 34 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// <template>
	// <div class="pop-mark" @click="close"></div>
	// <div class="modal-content">
	//     <div class="modal-header">
	//         <span @click="close">×</span>
	//         <h4 class="modal-title" id="gridModalLabel">提示：</h4>
	//     </div>
	//     <div class="modal-body">
	//         <div class="col-md-4">你确定要删除吗？</div>
	//     </div>
	//     <div class="modal-footer center">
	//         <button type="button" class="btn btn-default" @click="close">关闭</button>
	//         <button type="button" class="btn btn-primary" @click="del">删除</button>
	//     </div>
	// </div>
	// </template>
	//
	//
	// <script>
	exports.default = {
	    props: ['pop', 'formList'],
	    methods: {
	        del: function del() {
	            var self = this;
	
	            this.formList.forEach(function (key, i) {
	
	                if (self.pop.id == key.id) {
	                    self.formList.splice(i, 1);
	                }
	            });
	
	            this.close();
	        },
	        close: function close() {
	            this.pop.id = 0;
	            this.pop.isShowPop = false;
	        }
	    }
	};
	// </script>
	//
	//
	// <style lang="less">
	//
	//     .modal-transition{
	//         transition: all .3s ease;
	//     }
	//     .modal-enter, .modal-leave {
	//       opacity: 0;
	//     }
	//
	//     .modal-enter .modal-container,
	//     .modal-leave .modal-container {
	//       -webkit-transform: scale(1.1);
	//       transform: scale(1.1);
	//     }
	// </style>
	/* generated by vue-loader */

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _store = __webpack_require__(2);
	
	var _store2 = _interopRequireDefault(_store);
	
	var _filter = __webpack_require__(4);
	
	var _filter2 = _interopRequireDefault(_filter);
	
	var _date = __webpack_require__(75);
	
	var _date2 = _interopRequireDefault(_date);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    data: function data() {
	        var serverData = _store2.default.fetch();
	
	        return {
	            formList: serverData.formList,
	            datec: {
	                isShow: false,
	                time: '',
	                error: false,
	                fn: function fn(i) {
	                    var oldTime = Date.now();
	
	                    if (oldTime > i) {
	                        this.time = '';
	                        this.error = true;
	                    } else {
	                        this.error = false;
	                    }
	                }
	            },
	            proInfo: [],
	            allId: serverData.allId,
	            headTitle: '',
	            user: serverData.user,
	            proType: {
	                text: ['Checkbox', 'Radio', 'Textarea'],
	                type: '',
	                title: '',
	                checkbox: [],
	                radio: [],
	                textarea: []
	            }
	        };
	    },
	
	
	    computed: {
	        ymd: function ymd() {
	            return moment(this.datec.time).formate('YYYY-MM-DD');
	        }
	    },
	
	    watch: {
	        formList: {
	            deep: true,
	            handler: function handler() {
	                _store2.default.save({
	                    allId: this.allId,
	                    user: this.user,
	                    formList: this.formList
	                });
	            }
	        }
	    },
	
	    filters: _filter2.default,
	
	    methods: {
	        changeType: function changeType(value) {
	            var newVal = value.toLowerCase();
	            var data = this.proType;
	            data.type = newVal;
	
	            data.checkbox = data.textarea = data.radio = [];
	            data.title = '';
	        },
	        addPro: function addPro() {
	            var type = this.proType.type;
	            this.proType[type].push({ text: '' });
	        },
	        delPro: function delPro(i) {
	
	            var type = this.proType.type;
	            this.proType[type].splice(i, 1);
	        },
	        creat: function creat() {
	            var type = this.proType.type;
	
	            if (!this.proType.title) return false;
	
	            if (this.proInfo.length >= 10) return false;
	
	            this.proInfo.push({
	                title: this.proType.title,
	                type: type,
	                content: this.proType[type]
	            });
	
	            //清空
	            this.changeType(type);
	        },
	        upList: function upList(i) {
	
	            var oldData = this.proInfo[i];
	
	            this.proInfo.splice(i, 1);
	            this.proInfo.splice(i - 1, 0, oldData);
	        },
	        downList: function downList(i) {
	            var oldData = this.proInfo[i];
	
	            this.proInfo.splice(i, 1);
	            this.proInfo.splice(i + 1, 0, oldData);
	        },
	        delList: function delList(i) {
	            this.proInfo.splice(i, 1);
	        },
	        copyList: function copyList(i) {
	            var cl = this.proInfo[i];
	            //console.log(this.proInfo)
	            this.proInfo.splice(i, 0, cl);
	        },
	        end: function end() {
	            var serverData = _store2.default.fetch();
	
	            if (!this.headTitle || !this.proInfo || this.datec.error) return false;
	
	            this.allId++;
	
	            this.formList.push({
	                id: this.allId,
	                title: this.headTitle,
	                state: 'draft',
	                end: this.datec.time,
	                now: Date.now(),
	                form: this.proInfo
	            });
	
	            this.changeType('no');
	            this.headTitle = '';
	        },
	        edit: function edit() {
	            var serverData = _store2.default.fetch();
	            var self = this;
	
	            if (!this.headTitle || !this.proInfo || this.datec.error) return false;
	
	            console.log(this.datec.time);
	
	            this.formList.forEach(function (key, i) {
	                if (key.id == self.$route.params.id) {
	
	                    self.formList.splice(i, 1);
	                    self.formList.splice(i, 0, {
	                        id: key.id,
	                        title: self.headTitle,
	                        state: 'draft',
	                        end: self.datec.time,
	                        now: Date.now(),
	                        form: self.proInfo
	                    });
	                }
	            });
	
	            this.headTitle = '';
	        }
	    },
	
	    route: {
	        data: function data(transition) {
	            var id = transition.to.params.id;
	            var serverData = _store2.default.fetch();
	            var self = this;
	
	            if (!id) {
	                this.proInfo = [];
	                this.headTitle = [];
	                this.time = '';
	                this.datec.time = '';
	                this.proType.type = '';
	                return false;
	            };
	
	            this.formList.forEach(function (key, i) {
	                if (key.id == id) {
	                    self.headTitle = key.title;
	                    self.proInfo = key.form;
	                    self.datec.time = key.end;
	                }
	            });
	        }
	    },
	
	    components: {
	        date: _date2.default
	    }
	
	};
	// </script>
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	/* generated by vue-loader */
	// <template>
	//     <div class="container">
	//        <div class="container form-title">
	//            <h2>表单名称</h2>
	//            <span>
	//                <input class="ipt center" type="text" v-model="headTitle">
	//            </span>
	//        </div>
	//         <ul class="form-list-info" v-for="item in proInfo" track-by="$index">
	//             <li>
	//                 <h2>{{$index + 1}}:{{item.title}}</h2>
	//                 <ol v-if=" item.type !== 'textarea' ">
	//                     <li v-for="list in item.content">
	//                         <b>{{$index+1}}:{{list.text}}</b>
	//                         <input type="{{ item.type }}" :name="item.title + Date.now()">
	//                     </li>
	//                 </ol>
	//                 <ol v-else>
	//                     <li>
	//                         <textarea class="trea" cols="70" rows="2"></textarea>
	//                     </li>
	//                 </ol>
	//
	//                 <div class="btn-group">
	//                     <button class="btn btn-default" @click="delList($index)">
	//                         删除
	//                     </button>
	//                     <button class="btn btn-default" @click="upList($index)">
	//                         上移
	//                     </button>
	//                     <button class="btn btn-default" @click="downList($index)">
	//                         下移
	//                     </button>
	//                     <button class="btn btn-default" @click="copyList($index)">
	//                         复用
	//                     </button>
	//                 </div>
	//             </li>
	//         </ul>
	//     </div>
	//     <div v-for="item in formList.form" :class="item.type">
	//         <h3>{{item.title}}</h3>
	//         <ul class="list-unstyled">
	//             <li v-for="list in item.faq" >
	//                 <label v-if="item.type !== 'textarea'">
	//                     <input type="{{item.type}}" name="{{item.title}}">
	//                     <span>{{list}}</span>
	//                 </label>
	//                 <label v-else>
	//                     <textarea v-model="list" style="width:400px; height:120px"></textarea>
	//                 </label>
	//             </li>
	//         </ul>
	//     </div>
	//     <div class="container form-pro center">
	//         <h3>选择你的问答类型</h3>
	//         <div class="checkType">
	//             <ul>
	//                 <li v-for="type in proType.text">
	//                     <label>
	//                         <b>{{ type | cktype}}</b>
	//                         <span>
	//                             <input type="radio" name="proType"
	//                             @click="changeType(type)">
	//                         </span>
	//                     </label>
	//                 </li>
	//             </ul>
	//         </div>
	//         <!-- checkbox -->
	//         <div class="contentInfo" v-if=" proType.type && proType.type != 'textarea' ">
	//             <div class="form-pro-title">
	//                 <h4>标题</h4>
	//                 <input class="ipt ipt-s" type="text" v-model=" proType.title ">
	//             </div>
	//             <div class="form-pro-info">
	//                 <h6>问题</h6>
	//                 <ul class="form-item">
	//                     <li v-for="item in proType[proType.type]">
	//                         <input class="ipt ipt-s" type="text" v-model="item.text">
	//                         <button class="btn btn-default" @click="delPro($index)">-</button>
	//                     </li>
	//                 </ul>
	//             </div>
	//             <button class="btn btn-primary" @click="addPro">+</button>
	//         </div>
	//
	//         <!-- radio -->
	//         <div class="contentInfo" v-if=" proType.type && proType.type == 'textarea' ">
	//             <div class="form-pro-title">
	//                 <h4>标题</h4>
	//                 <input class="ipt ipt-s" type="text" v-model="proType.title">
	//             </div>
	//         </div>
	//
	//     </div>
	//     <div class="container form-creat center">
	//         <button class="btn btn-primary" @click="creat">
	//             创建问题
	//         </button>
	//
	//     </div>
	//     <div class="container form-data">
	//         <div class="form-data-info">
	//             <input type="text" class="ipt" placeholder="YYYY-MM-DD" :value="ymd" @focus="datec.isShow = true;">
	//             <b>选择结束日期</b>
	//             <em class="error" v-if="datec.error"><span>*</span><i>选择日期不能晚于当前时间.</i></em>
	//         </div>
	//         <date :datec.sync="datec"></date>
	//     </div>
	//     <div class="container center form-bottom otherp">
	//         <button class="btn btn-primary" @click="end" v-link="'/'" v-if="$route.name == 'creat'">
	//             问答创建完成
	//         </button>
	//         <button class="btn btn-primary" @click="edit" v-link="'/'" v-else>
	//             问答编辑完成
	//         </button>
	//         <a class="btn btn-default" @click="changeType('q')" role="button" v-link="'/'">
	//             返回列表页
	//         </a>
	//     </div>
	// </template>
	//
	// <script>

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _store = __webpack_require__(2);
	
	var _store2 = _interopRequireDefault(_store);
	
	var _pop = __webpack_require__(77);
	
	var _pop2 = _interopRequireDefault(_pop);
	
	var _filter = __webpack_require__(4);
	
	var _filter2 = _interopRequireDefault(_filter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    data: function data() {
	
	        var serverData = _store2.default.fetch();
	
	        return {
	            user: serverData.user,
	            allId: serverData.allId,
	            formList: serverData.formList,
	            pop: {
	                isShowPop: false,
	                id: 0
	            }
	        };
	    },
	
	
	    methods: {
	        showPop: function showPop(item) {
	            this.pop.id = item.id;
	            this.pop.isShowPop = true;
	        },
	        sents: function sents(i, item) {
	            this.formList[i].state = 'sent';
	        }
	    },
	
	    watch: {
	        formList: {
	            deep: true,
	            handler: function handler() {
	
	                //检测时否已经结束
	                this.formList.forEach(function (key, i) {
	                    if (key.end <= key.now) {
	                        key.state = 'end';
	                    }
	                });
	
	                _store2.default.save({
	                    allId: this.allId,
	                    user: this.user,
	                    formList: this.formList
	                });
	            }
	        }
	    },
	
	    filters: _filter2.default,
	
	    route: {
	        data: function data(transition) {
	            var serverData = _store2.default.fetch().formList;
	
	            if (serverData != this.formList) {
	                this.formList = serverData;
	            }
	        }
	    },
	
	    components: {
	        pop: _pop2.default
	    }
	
	};
	
	// </script>
	/* generated by vue-loader */
	// <template>
	//     <table class="table center">
	//       <caption>Optional table caption.</caption>
	//       <thead>
	//         <tr>
	//           <th height="50">ID</th>
	//           <th>Title</th>
	//           <th>State</th>
	//           <th>Satr Time</th>
	//           <th>End Time</th>
	//           <th>
	//               <a class="btn btn-other" v-link="'creat'" role="button">Creat</a>
	//           </th>
	//         </tr>
	//       </thead>
	//       <tbody> 
	//         <tr v-for="item in formList">
	//           <td height="45">{{item.id}}</th>
	//           <td>{{item.title}}</td>
	//           <td>{{item.state}}</td>
	//           <td>{{item.now | times }}</td>
	//           <td>{{item.end | times }}</td>
	//           <td>
	//               <a
	//                   class="btn btn-primary"
	//                   v-link="{name:'see', params:{ id: item.id } }"
	//                   v-if=" item.state !== 'draft' " 
	//                   role="button">
	//                   查看
	//               </a>
	//
	//               <button
	//                  class="btn btn-primary"
	//                  v-link="{name:'edit', params:{id: item.id }}"
	//                  v-if=" item.state === 'draft' ">
	//                   编辑
	//               </button>
	//
	//               <button
	//                  class="btn btn-other"
	//                  v-if=" item.state === 'draft' "
	//                  @click="sents($index, item)">
	//                   发表
	//               </button>
	//
	//               <button
	//                  class="btn btn-default"
	//                  @click="showPop(item)"
	//                  v-if="item.state !== 'sent'">
	//                   删除
	//               </button>
	//
	//           </td> 
	//         </tr>
	//       </tbody>
	//     </table>
	//
	//     <pop :pop.sync="pop" :form-list.sync="formList" v-if="pop.isShowPop"></pop>
	//
	// </template>
	//
	//
	// <script>

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _store = __webpack_require__(2);
	
	var _store2 = _interopRequireDefault(_store);
	
	var _filter = __webpack_require__(4);
	
	var _filter2 = _interopRequireDefault(_filter);
	
	var _vLoad = __webpack_require__(30);
	
	var _vLoad2 = _interopRequireDefault(_vLoad);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    data: function data() {
	        return {
	            formList: {}
	        };
	    },
	
	    route: {
	        data: function data(transition) {
	            var id = transition.to.params.id;
	            var data = _store2.default.fetch().formList;
	
	            var self = this;
	
	            data.forEach(function (key, i) {
	                if (key.id == id) {
	                    self.$data.formList = key;
	                }
	            });
	        }
	    },
	
	    filters: _filter2.default
	};
	
	// </script>
	/* generated by vue-loader */
	// <template>
	//     <div class="container seeBox center">
	//         <div data-map="{{item.type}}" v-for="item in formList.form">
	//             <h3>{{item.title}}</h3>
	//             <div class="mapBox" id="{{'map' + $index}}" v-map="item">
	//             </div>   
	//         </div>
	//     </div>
	//     <div class="container form-bottom center">
	//         <a class="btn btn-primary" v-link="'/'">
	//             返回
	//         </a>
	//     </div>
	// </template>
	//
	//
	// <script>

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(43), __esModule: true };

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(44), __esModule: true };

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(45), __esModule: true };

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(46), __esModule: true };

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	var core = __webpack_require__(1);
	module.exports = function stringify(it){ // eslint-disable-line no-unused-vars
	  return (core.JSON && core.JSON.stringify || JSON.stringify).apply(JSON, arguments);
	};

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(0);
	module.exports = function create(P, D){
	  return $.create(P, D);
	};

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(60);
	module.exports = __webpack_require__(1).Object.freeze;

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(61);
	module.exports = __webpack_require__(1).Object.keys;

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(63);
	__webpack_require__(62);
	module.exports = __webpack_require__(1).Symbol;

/***/ },
/* 47 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(14);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(47);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var $ = __webpack_require__(0);
	module.exports = function(it){
	  var keys       = $.getKeys(it)
	    , getSymbols = $.getSymbols;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = $.isEnum
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))keys.push(key);
	  }
	  return keys;
	};

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(6)
	  , getNames  = __webpack_require__(0).getNames
	  , toString  = {}.toString;
	
	var windowNames = typeof window == 'object' && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];
	
	var getWindowNames = function(it){
	  try {
	    return getNames(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};
	
	module.exports.get = function getOwnPropertyNames(it){
	  if(windowNames && toString.call(it) == '[object Window]')return getWindowNames(it);
	  return getNames(toIObject(it));
	};

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	var $          = __webpack_require__(0)
	  , createDesc = __webpack_require__(16);
	module.exports = __webpack_require__(11) ? function(object, key, value){
	  return $.setDesc(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(9);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(9);
	module.exports = Array.isArray || function(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	var $         = __webpack_require__(0)
	  , toIObject = __webpack_require__(6);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = $.getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 56 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(52);

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(0).setDesc
	  , has = __webpack_require__(13)
	  , TAG = __webpack_require__(19)('toStringTag');
	
	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(10);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.5 Object.freeze(O)
	var isObject = __webpack_require__(14);
	
	__webpack_require__(15)('freeze', function($freeze){
	  return function freeze(it){
	    return $freeze && isObject(it) ? $freeze(it) : it;
	  };
	});

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(59);
	
	__webpack_require__(15)('keys', function($keys){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 62 */
/***/ function(module, exports) {



/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var $              = __webpack_require__(0)
	  , global         = __webpack_require__(3)
	  , has            = __webpack_require__(13)
	  , DESCRIPTORS    = __webpack_require__(11)
	  , $export        = __webpack_require__(12)
	  , redefine       = __webpack_require__(57)
	  , $fails         = __webpack_require__(5)
	  , shared         = __webpack_require__(17)
	  , setToStringTag = __webpack_require__(58)
	  , uid            = __webpack_require__(18)
	  , wks            = __webpack_require__(19)
	  , keyOf          = __webpack_require__(55)
	  , $names         = __webpack_require__(51)
	  , enumKeys       = __webpack_require__(50)
	  , isArray        = __webpack_require__(54)
	  , anObject       = __webpack_require__(48)
	  , toIObject      = __webpack_require__(6)
	  , createDesc     = __webpack_require__(16)
	  , getDesc        = $.getDesc
	  , setDesc        = $.setDesc
	  , _create        = $.create
	  , getNames       = $names.get
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , setter         = false
	  , HIDDEN         = wks('_hidden')
	  , isEnum         = $.isEnum
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , useNative      = typeof $Symbol == 'function'
	  , ObjectProto    = Object.prototype;
	
	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(setDesc({}, 'a', {
	    get: function(){ return setDesc(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = getDesc(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  setDesc(it, key, D);
	  if(protoDesc && it !== ObjectProto)setDesc(ObjectProto, key, protoDesc);
	} : setDesc;
	
	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol.prototype);
	  sym._k = tag;
	  DESCRIPTORS && setter && setSymbolDesc(ObjectProto, tag, {
	    configurable: true,
	    set: function(value){
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    }
	  });
	  return sym;
	};
	
	var isSymbol = function(it){
	  return typeof it == 'symbol';
	};
	
	var $defineProperty = function defineProperty(it, key, D){
	  if(D && has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))setDesc(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return setDesc(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key);
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key]
	    ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  var D = getDesc(it = toIObject(it), key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = getNames(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i)if(!has(AllSymbols, key = names[i++]) && key != HIDDEN)result.push(key);
	  return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var names  = getNames(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i)if(has(AllSymbols, key = names[i++]))result.push(AllSymbols[key]);
	  return result;
	};
	var $stringify = function stringify(it){
	  if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	  var args = [it]
	    , i    = 1
	    , $$   = arguments
	    , replacer, $replacer;
	  while($$.length > i)args.push($$[i++]);
	  replacer = args[1];
	  if(typeof replacer == 'function')$replacer = replacer;
	  if($replacer || !isArray(replacer))replacer = function(key, value){
	    if($replacer)value = $replacer.call(this, key, value);
	    if(!isSymbol(value))return value;
	  };
	  args[1] = replacer;
	  return _stringify.apply($JSON, args);
	};
	var buggyJSON = $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	});
	
	// 19.4.1.1 Symbol([description])
	if(!useNative){
	  $Symbol = function Symbol(){
	    if(isSymbol(this))throw TypeError('Symbol is not a constructor');
	    return wrap(uid(arguments.length > 0 ? arguments[0] : undefined));
	  };
	  redefine($Symbol.prototype, 'toString', function toString(){
	    return this._k;
	  });
	
	  isSymbol = function(it){
	    return it instanceof $Symbol;
	  };
	
	  $.create     = $create;
	  $.isEnum     = $propertyIsEnumerable;
	  $.getDesc    = $getOwnPropertyDescriptor;
	  $.setDesc    = $defineProperty;
	  $.setDescs   = $defineProperties;
	  $.getNames   = $names.get = $getOwnPropertyNames;
	  $.getSymbols = $getOwnPropertySymbols;
	
	  if(DESCRIPTORS && !__webpack_require__(56)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }
	}
	
	var symbolStatics = {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    return keyOf(SymbolRegistry, key);
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	};
	// 19.4.2.2 Symbol.hasInstance
	// 19.4.2.3 Symbol.isConcatSpreadable
	// 19.4.2.4 Symbol.iterator
	// 19.4.2.6 Symbol.match
	// 19.4.2.8 Symbol.replace
	// 19.4.2.9 Symbol.search
	// 19.4.2.10 Symbol.species
	// 19.4.2.11 Symbol.split
	// 19.4.2.12 Symbol.toPrimitive
	// 19.4.2.13 Symbol.toStringTag
	// 19.4.2.14 Symbol.unscopables
	$.each.call((
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,' +
	  'species,split,toPrimitive,toStringTag,unscopables'
	).split(','), function(it){
	  var sym = wks(it);
	  symbolStatics[it] = useNative ? sym : wrap(sym);
	});
	
	setter = true;
	
	$export($export.G + $export.W, {Symbol: $Symbol});
	
	$export($export.S, 'Symbol', symbolStatics);
	
	$export($export.S + $export.F * !useNative, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});
	
	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!useNative || buggyJSON), 'JSON', {stringify: $stringify});
	
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(65)();
	// imports
	
	
	// module
	exports.push([module.id, ".modal-transition {\n  -webkit-transition: all .3s ease;\n  transition: all .3s ease;\n}\n.modal-enter,\n.modal-leave {\n  opacity: 0;\n}\n.modal-enter .modal-container,\n.modal-leave .modal-container {\n  -webkit-transform: scale(1.1);\n  transform: scale(1.1);\n}\n", "", {"version":3,"sources":["/../../../../../../vue-loader/lib/style-rewriter.js?id=_v-60a66392&file=pop.vue!/Users/lay/aboutWeb/webstrom/node_modules/less-loader/index.js!/Users/lay/aboutWeb/webstrom/node_modules/vue-loader/lib/selector.js?type=style&index=0!/Users/lay/aboutWeb/webstrom/baiduClass/classTo50/src/components/pop.vue.style"],"names":[],"mappings":"AAAA;EACE,iCAAyB;EAAzB,yBAAyB;CAC1B;AACD;;EAEE,WAAW;CACZ;AACD;;EAEE,8BAA8B;EAC9B,sBAAsB;CACvB","file":"pop.vue","sourcesContent":[".modal-transition {\n  transition: all .3s ease;\n}\n.modal-enter,\n.modal-leave {\n  opacity: 0;\n}\n.modal-enter .modal-container,\n.modal-leave .modal-container {\n  -webkit-transform: scale(1.1);\n  transform: scale(1.1);\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 65 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 66 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0;
	
	module.exports = function(list, options) {
		if(typeof DEBUG !== "undefined" && DEBUG) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function createStyleElement() {
		var styleElement = document.createElement("style");
		var head = getHeadElement();
		styleElement.type = "text/css";
		head.appendChild(styleElement);
		return styleElement;
	}
	
	function createLinkElement() {
		var linkElement = document.createElement("link");
		var head = getHeadElement();
		linkElement.rel = "stylesheet";
		head.appendChild(linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement());
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement();
			update = updateLink.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement();
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(64);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(66)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js?sourceMap!./../../../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-60a66392&file=pop.vue!./../../../../node_modules/less-loader/index.js!./../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./pop.vue", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js?sourceMap!./../../../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-60a66392&file=pop.vue!./../../../../node_modules/less-loader/index.js!./../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./pop.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 68 */
/***/ function(module, exports) {

	module.exports = "\r\n    <div>\r\n        <navt :user=\"user\"></navt>\r\n        <div class=\"container\"> \r\n            <router-view keep-alive></router-view>       \r\n        </div>\r\n    </div>\r\n";

/***/ },
/* 69 */
/***/ function(module, exports) {

	module.exports = "\r\n        <div class=\"ui-date\" v-if=\"datec.isShow\">\r\n            <div class=\"ui-date-head\">\r\n                <b class=\"ui-data-pre\" @click=\"change('-')\"></b>\r\n                <b class=\"ui-data-next\" @click=\"change('+')\"></b>\r\n\r\n                <div class=\"ui-data-select ui-year\" \r\n                   :class=\"[slider.year? 'active': '']\" >\r\n                    <div class=\"data-hd\">\r\n                        <b class=\"data-icon\" @click=\"active('year')\"></b>\r\n                        <span>{{date.year}}</span>\r\n                    </div>\r\n                    <div class=\"data-bd\">\r\n                        <ul>\r\n                            <li v-for=\"year in years\" \r\n                                track-by=\"$index\" \r\n                                @click=\"changeDay(year, '')\">\r\n                                <a href=\"javascript:;\">{{year}}</a>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"ui-data-select ui-month\" \r\n                   :class=\"[slider.month? 'active': '']\" >\r\n                    <div class=\"data-hd\">\r\n                        <b class=\"data-icon\" @click=\"active('month')\"></b>\r\n                        <span>{{date.month}}</span> \r\n                    </div>\r\n                    <div class=\"data-bd\">\r\n                        <ul>\r\n                            <li v-for=\"month in months\" \r\n                                track-by=\"$index\" \r\n                                @click=\"changeDay('', month)\">\r\n                                <a href=\"javascript:;\">{{month}}</a></li>  \r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n            <div class=\"ui-date-title\"> \r\n                <ul>\r\n                    <li v-for=\"week in weeks\">{{week}}</li>\r\n                </ul>\r\n            </div>\r\n            <div class=\"ui-date-body\" id=\"j-data-day\"> \r\n                <ul class=\"clearfix\">\r\n                    <li v-for=\"day in days\"  track-by=\"$index\" :class=\"[day == date.day? 'active': '']\">\r\n                        <a href=\"javascript:;\" @click=\"chengeOther(day)\">{{day}}</a>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    ";

/***/ },
/* 70 */
/***/ function(module, exports) {

	module.exports = "\r\n    <nav class=\"navbar navbar-inverse\">\r\n      <div class=\"navbar-header\">\r\n          <a class=\"navbar-brand\" href=\"javascript:;\">{{user.name}}</a>\r\n        </div>\r\n    </nav>\r\n";

/***/ },
/* 71 */
/***/ function(module, exports) {

	module.exports = "\r\n<div class=\"pop-mark\" @click=\"close\"></div>\r\n<div class=\"modal-content\">\r\n    <div class=\"modal-header\">\r\n        <span @click=\"close\">×</span>\r\n        <h4 class=\"modal-title\" id=\"gridModalLabel\">提示：</h4>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n        <div class=\"col-md-4\">你确定要删除吗？</div>\r\n    </div>\r\n    <div class=\"modal-footer center\">\r\n        <button type=\"button\" class=\"btn btn-default\" @click=\"close\">关闭</button>\r\n        <button type=\"button\" class=\"btn btn-primary\" @click=\"del\">删除</button>\r\n    </div>\r\n</div>\r\n";

/***/ },
/* 72 */
/***/ function(module, exports) {

	module.exports = "\r\n    <div class=\"container\">\r\n       <div class=\"container form-title\">\r\n           <h2>表单名称</h2>\r\n           <span>\r\n               <input class=\"ipt center\" type=\"text\" v-model=\"headTitle\">\r\n           </span>\r\n       </div>\r\n        <ul class=\"form-list-info\" v-for=\"item in proInfo\" track-by=\"$index\">\r\n            <li>\r\n                <h2>{{$index + 1}}:{{item.title}}</h2> \r\n                <ol v-if=\" item.type !== 'textarea' \">\r\n                    <li v-for=\"list in item.content\">\r\n                        <b>{{$index+1}}:{{list.text}}</b>\r\n                        <input type=\"{{ item.type }}\" :name=\"item.title + Date.now()\">\r\n                    </li>\r\n                </ol>\r\n                <ol v-else>\r\n                    <li>\r\n                        <textarea class=\"trea\" cols=\"70\" rows=\"2\"></textarea>\r\n                    </li>\r\n                </ol>\r\n                \r\n                <div class=\"btn-group\">\r\n                    <button class=\"btn btn-default\" @click=\"delList($index)\">\r\n                        删除\r\n                    </button>\r\n                    <button class=\"btn btn-default\" @click=\"upList($index)\">\r\n                        上移\r\n                    </button>\r\n                    <button class=\"btn btn-default\" @click=\"downList($index)\">\r\n                        下移\r\n                    </button>\r\n                    <button class=\"btn btn-default\" @click=\"copyList($index)\">\r\n                        复用\r\n                    </button>\r\n                </div>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n    <div v-for=\"item in formList.form\" :class=\"item.type\">\r\n        <h3>{{item.title}}</h3>\r\n        <ul class=\"list-unstyled\">\r\n            <li v-for=\"list in item.faq\" >\r\n                <label v-if=\"item.type !== 'textarea'\"> \r\n                    <input type=\"{{item.type}}\" name=\"{{item.title}}\">\r\n                    <span>{{list}}</span>\r\n                </label>\r\n                <label v-else>\r\n                    <textarea v-model=\"list\" style=\"width:400px; height:120px\"></textarea>\r\n                </label>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n    <div class=\"container form-pro center\">\r\n        <h3>选择你的问答类型</h3>\r\n        <div class=\"checkType\">\r\n            <ul>\r\n                <li v-for=\"type in proType.text\">\r\n                    <label>\r\n                        <b>{{ type | cktype}}</b>\r\n                        <span>\r\n                            <input type=\"radio\" name=\"proType\" \r\n                            @click=\"changeType(type)\">\r\n                        </span>\r\n                    </label>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n        <!-- checkbox -->\r\n        <div class=\"contentInfo\" v-if=\" proType.type && proType.type != 'textarea' \">\r\n            <div class=\"form-pro-title\">\r\n                <h4>标题</h4>\r\n                <input class=\"ipt ipt-s\" type=\"text\" v-model=\" proType.title \">\r\n            </div>\r\n            <div class=\"form-pro-info\">\r\n                <h6>问题</h6>\r\n                <ul class=\"form-item\">\r\n                    <li v-for=\"item in proType[proType.type]\">\r\n                        <input class=\"ipt ipt-s\" type=\"text\" v-model=\"item.text\">\r\n                        <button class=\"btn btn-default\" @click=\"delPro($index)\">-</button>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n            <button class=\"btn btn-primary\" @click=\"addPro\">+</button>\r\n        </div>\r\n        \r\n        <!-- radio -->\r\n        <div class=\"contentInfo\" v-if=\" proType.type && proType.type == 'textarea' \">\r\n            <div class=\"form-pro-title\">\r\n                <h4>标题</h4>\r\n                <input class=\"ipt ipt-s\" type=\"text\" v-model=\"proType.title\">\r\n            </div>\r\n        </div>\r\n        \r\n    </div>\r\n    <div class=\"container form-creat center\">\r\n        <button class=\"btn btn-primary\" @click=\"creat\">\r\n            创建问题\r\n        </button>\r\n        \r\n    </div>\r\n    <div class=\"container form-data\">\r\n        <div class=\"form-data-info\">\r\n            <input type=\"text\" class=\"ipt\" placeholder=\"YYYY-MM-DD\" :value=\"ymd\" @focus=\"datec.isShow = true;\">\r\n            <b>选择结束日期</b>\r\n            <em class=\"error\" v-if=\"datec.error\"><span>*</span><i>选择日期不能晚于当前时间.</i></em>\r\n        </div>\r\n        <date :datec.sync=\"datec\"></date>\r\n    </div>\r\n    <div class=\"container center form-bottom otherp\">\r\n        <button class=\"btn btn-primary\" @click=\"end\" v-link=\"'/'\" v-if=\"$route.name == 'creat'\">\r\n            问答创建完成\r\n        </button>\r\n        <button class=\"btn btn-primary\" @click=\"edit\" v-link=\"'/'\" v-else>\r\n            问答编辑完成\r\n        </button>\r\n        <a class=\"btn btn-default\" @click=\"changeType('q')\" role=\"button\" v-link=\"'/'\">\r\n            返回列表页\r\n        </a>\r\n    </div>\r\n";

/***/ },
/* 73 */
/***/ function(module, exports) {

	module.exports = " \r\n    <table class=\"table center\">\r\n      <caption>Optional table caption.</caption>\r\n      <thead>\r\n        <tr>\r\n          <th height=\"50\">ID</th>\r\n          <th>Title</th>\r\n          <th>State</th>\r\n          <th>Satr Time</th>\r\n          <th>End Time</th>\r\n          <th>\r\n              <a class=\"btn btn-other\" v-link=\"'creat'\" role=\"button\">Creat</a> \r\n          </th> \r\n        </tr>\r\n      </thead>\r\n      <tbody>  \r\n        <tr v-for=\"item in formList\">\r\n          <td height=\"45\">{{item.id}}</th>\r\n          <td>{{item.title}}</td>\r\n          <td>{{item.state}}</td>\r\n          <td>{{item.now | times }}</td>\r\n          <td>{{item.end | times }}</td>\r\n          <td>\r\n              <a \r\n                  class=\"btn btn-primary\"\r\n                  v-link=\"{name:'see', params:{ id: item.id } }\"\r\n                  v-if=\" item.state !== 'draft' \"  \r\n                  role=\"button\">\r\n                  查看\r\n              </a>\r\n              \r\n              <button \r\n                 class=\"btn btn-primary\" \r\n                 v-link=\"{name:'edit', params:{id: item.id }}\" \r\n                 v-if=\" item.state === 'draft' \">\r\n                  编辑\r\n              </button>\r\n              \r\n              <button \r\n                 class=\"btn btn-other\" \r\n                 v-if=\" item.state === 'draft' \" \r\n                 @click=\"sents($index, item)\">\r\n                  发表\r\n              </button>\r\n              \r\n              <button \r\n                 class=\"btn btn-default\" \r\n                 @click=\"showPop(item)\" \r\n                 v-if=\"item.state !== 'sent'\">\r\n                  删除\r\n              </button>\r\n               \r\n          </td>  \r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n    \r\n    <pop :pop.sync=\"pop\" :form-list.sync=\"formList\" v-if=\"pop.isShowPop\"></pop>\r\n    \r\n";

/***/ },
/* 74 */
/***/ function(module, exports) {

	module.exports = "\r\n    <div class=\"container seeBox center\">\r\n        <div data-map=\"{{item.type}}\" v-for=\"item in formList.form\">\r\n            <h3>{{item.title}}</h3>\r\n            <div class=\"mapBox\" id=\"{{'map' + $index}}\" v-map=\"item\">\r\n            </div>    \r\n        </div>\r\n    </div>\r\n    <div class=\"container form-bottom center\">\r\n        <a class=\"btn btn-primary\" v-link=\"'/'\">\r\n            返回 \r\n        </a>\r\n    </div>\r\n";

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(32)
	__vue_template__ = __webpack_require__(69)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/lay/aboutWeb/webstrom/baiduClass/classTo50/src/components/date.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(33)
	__vue_template__ = __webpack_require__(70)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/lay/aboutWeb/webstrom/baiduClass/classTo50/src/components/nav.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(67)
	__vue_script__ = __webpack_require__(34)
	__vue_template__ = __webpack_require__(71)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/lay/aboutWeb/webstrom/baiduClass/classTo50/src/components/pop.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 78 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 79 */
/***/ function(module, exports) {

	// shim for using process in browser
	
	var process = module.exports = {};
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = setTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    clearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        setTimeout(drainQueue, 0);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 80 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var data = function data(op) {
	
	    var datas = op.content[0];
	
	    var option = {
	        color: ['#42b983', '#ccc'],
	        title: {
	            subtext: op.title,
	            x: 'center'
	        },
	        tooltip: {
	            trigger: 'item',
	            formatter: "{a} <br/>{b} : {c} ({d}%)"
	        },
	        legend: {
	            orient: 'vertical',
	            left: 'left',
	            data: ['有效', '无效']
	        },
	        series: [{
	            name: '类型',
	            type: 'pie',
	            radius: '55%',
	            center: ['50%', '60%'],
	            data: [{ value: datas.yes, name: '有效' }, { value: datas.no, name: '无效' }],
	            itemStyle: {
	                emphasis: {
	                    shadowBlur: 10,
	                    shadowOffsetX: 0,
	                    shadowColor: 'rgba(0, 0, 0, 0.5)'
	                }
	            }
	        }]
	    };
	    return option;
	};
	
	exports.default = data;

/***/ }
/******/ ]);
//# sourceMappingURL=main.js.map