"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 42:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddTimeForm": () => (/* binding */ AddTimeForm),
/* harmony export */   "NewOperationForm": () => (/* binding */ NewOperationForm)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _operation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(40);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var AddTimeForm = function AddTimeForm(_ref) {
  var cancelAddTime = _ref.cancelAddTime,
    operationID = _ref.operationID;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    operationtimer = _useState2[0],
    setOperationTimer = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    (0,_operation__WEBPACK_IMPORTED_MODULE_1__.getSingleOperations)(operationID, setOperationTimer);
  }, [operationtimer]);
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState4 = _slicedToArray(_useState3, 2),
    timer = _useState4[0],
    setTimer = _useState4[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setTimer(operationtimer.timeSpent);
  }, [operationtimer]);
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState6 = _slicedToArray(_useState5, 2),
    newTimeInput = _useState6[0],
    setNewTimeInput = _useState6[1];
  var UpdateInput = function UpdateInput(e) {
    var value = e.target.value;
    setNewTimeInput(value);
    console.log(value);
  };
  var timeSubmitHandler = function timeSubmitHandler(e) {
    e.preventDefault();
    if (newTimeInput > 0) {
      (0,_operation__WEBPACK_IMPORTED_MODULE_1__.UpdateOperations)(_objectSpread(_objectSpread({}, operationtimer), {}, {
        timeSpent: timer + parseInt(newTimeInput)
      }), operationID);
    }
    setNewTimeInput('');
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: timeSubmitHandler
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "input-group input-group-sm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "number",
    className: "form-control",
    placeholder: "Spent time in minutes",
    style: {
      width: "12rem"
    },
    value: newTimeInput,
    onChange: UpdateInput
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "input-group-append"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btn btn-outline-success"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: "fas fa-save",
    type: "submit"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btn btn-outline-dark",
    onClick: function onClick() {
      return cancelAddTime();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: "fas fa-times false"
  }))))));
};
var NewOperationForm = function NewOperationForm(_ref2) {
  var taskID = _ref2.taskID;
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      description: "",
      status: "open"
    }),
    _useState8 = _slicedToArray(_useState7, 2),
    newOperationformData = _useState8[0],
    setNewOperationFormData = _useState8[1];
  var formSubmitHandler = function formSubmitHandler(e) {
    e.preventDefault();
    if (newOperationformData.title !== "") {
      (0,_operation__WEBPACK_IMPORTED_MODULE_1__.AddOperations)(newOperationformData, taskID);
    }
    setNewOperationFormData({
      description: "",
      status: "open"
    });
  };
  var inputHandler = function inputHandler(e) {
    var value = e.target.value;
    setNewOperationFormData(function (prevState) {
      return _objectSpread(_objectSpread({}, prevState), {}, {
        description: value
      });
    });
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "card-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: formSubmitHandler
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "input-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    className: "form-control",
    placeholder: "Operation description",
    value: newOperationformData.description,
    onChange: inputHandler
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "input-group-append"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btn btn-info",
    type: "submit"
  }, "Add", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: "fas fa-plus-circle ml-1"
  })))))));
};

/***/ }),

/***/ 40:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddOperations": () => (/* binding */ AddOperations),
/* harmony export */   "UpdateOperations": () => (/* binding */ UpdateOperations),
/* harmony export */   "deleteSingleOperations": () => (/* binding */ deleteSingleOperations),
/* harmony export */   "getOperations": () => (/* binding */ getOperations),
/* harmony export */   "getSingleOperations": () => (/* binding */ getSingleOperations)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


/**
 * Fetch all operations
 * @param {string} id - ID of task
 * @param {function} successCallback - Function that saves incoming data
 */
var getOperations = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(id, successCallback) {
    var response, data;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return fetch("".concat(_constants__WEBPACK_IMPORTED_MODULE_0__.API_URL, "/tasks/").concat(id, "/operations"), {
            headers: {
              Authorization: _constants__WEBPACK_IMPORTED_MODULE_0__.API_KEY
            }
          });
        case 3:
          response = _context.sent;
          _context.next = 6;
          return response.json();
        case 6:
          data = _context.sent;
          if (!(data.error || typeof successCallback !== "function")) {
            _context.next = 9;
            break;
          }
          throw new Error("Błąd!");
        case 9:
          successCallback(data.data);
          _context.next = 15;
          break;
        case 12:
          _context.prev = 12;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);
        case 15:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 12]]);
  }));
  return function getOperations(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var AddOperations = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(obj, taskID) {
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return fetch("".concat(_constants__WEBPACK_IMPORTED_MODULE_0__.API_URL, "/tasks/").concat(taskID, "/operations"), {
            method: "POST",
            body: JSON.stringify(obj),
            headers: {
              Authorization: _constants__WEBPACK_IMPORTED_MODULE_0__.API_KEY,
              "Content-Type": "application/json"
            }
          });
        case 3:
          _context2.next = 8;
          break;
        case 5:
          _context2.prev = 5;
          _context2.t0 = _context2["catch"](0);
          console.log(_context2.t0);
        case 8:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 5]]);
  }));
  return function AddOperations(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var UpdateOperations = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(obj, operationID) {
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return fetch("".concat(_constants__WEBPACK_IMPORTED_MODULE_0__.API_URL, "/operations/").concat(operationID), {
            method: "PUT",
            body: JSON.stringify(obj),
            headers: {
              Authorization: _constants__WEBPACK_IMPORTED_MODULE_0__.API_KEY,
              "Content-Type": "application/json"
            }
          });
        case 3:
          _context3.next = 8;
          break;
        case 5:
          _context3.prev = 5;
          _context3.t0 = _context3["catch"](0);
          console.log(_context3.t0);
        case 8:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 5]]);
  }));
  return function UpdateOperations(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var getSingleOperations = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(operationID, successCallback) {
    var response, data;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return fetch("".concat(_constants__WEBPACK_IMPORTED_MODULE_0__.API_URL, "/operations/").concat(operationID), {
            headers: {
              Authorization: _constants__WEBPACK_IMPORTED_MODULE_0__.API_KEY
            }
          });
        case 3:
          response = _context4.sent;
          _context4.next = 6;
          return response.json();
        case 6:
          data = _context4.sent;
          if (!(data.error || typeof successCallback !== "function")) {
            _context4.next = 9;
            break;
          }
          throw new Error("Błąd!");
        case 9:
          successCallback(data.data);
          _context4.next = 15;
          break;
        case 12:
          _context4.prev = 12;
          _context4.t0 = _context4["catch"](0);
          console.log(_context4.t0);
        case 15:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 12]]);
  }));
  return function getSingleOperations(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
var deleteSingleOperations = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(opID) {
    var response, data;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return fetch("".concat(_constants__WEBPACK_IMPORTED_MODULE_0__.API_URL, "/operations/").concat(opID), {
            method: "DELETE",
            headers: {
              Authorization: _constants__WEBPACK_IMPORTED_MODULE_0__.API_KEY
            }
          });
        case 3:
          response = _context5.sent;
          _context5.next = 6;
          return response.json();
        case 6:
          data = _context5.sent;
          if (!(data.error || typeof successCallback !== "function")) {
            _context5.next = 9;
            break;
          }
          throw new Error("Błąd!");
        case 9:
          _context5.next = 14;
          break;
        case 11:
          _context5.prev = 11;
          _context5.t0 = _context5["catch"](0);
          console.log(_context5.t0);
        case 14:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 11]]);
  }));
  return function deleteSingleOperations(_x9) {
    return _ref5.apply(this, arguments);
  };
}();

/***/ }),

/***/ 41:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35);
/* harmony import */ var _forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(42);
/* harmony import */ var _operation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(40);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var ShowOperations = function ShowOperations(_ref) {
  var Operation = _ref.Operation;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    showForm = _useState2[0],
    setShowForm = _useState2[1];
  var ShowAddTimeHandler = function ShowAddTimeHandler() {
    setShowForm(true);
  };
  var HideAddTimeHandler = function HideAddTimeHandler() {
    setShowForm(false);
  };
  var DeleteOperation = function DeleteOperation() {
    (0,_operation__WEBPACK_IMPORTED_MODULE_3__.deleteSingleOperations)(Operation.id);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "list-group-item d-flex justify-content-between align-items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, Operation.description, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "badge badge-success badge-pill ml-2"
  }, Operation.timeSpent)), showForm ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_forms__WEBPACK_IMPORTED_MODULE_2__.AddTimeForm, {
    cancelAddTime: HideAddTimeHandler,
    operationID: Operation.id
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_buttons__WEBPACK_IMPORTED_MODULE_1__.AddTimeButton, {
    onAction: ShowAddTimeHandler
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_buttons__WEBPACK_IMPORTED_MODULE_1__.DeleteOperationButton, {
    deleteOpAction: DeleteOperation
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShowOperations);

/***/ }),

/***/ 36:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35);
/* harmony import */ var _operation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40);
/* harmony import */ var _showoperations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41);
/* harmony import */ var _forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(42);
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(37);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var ShowTasks = function ShowTasks(_ref) {
  var task = _ref.task;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    allOperations = _useState2[0],
    setAllOperations = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    (0,_operation__WEBPACK_IMPORTED_MODULE_2__.getOperations)(task.id, setAllOperations);
  }, [allOperations]);
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    addNewOperation = _useState4[0],
    setAddNewOperation = _useState4[1];
  var AddOpertaionSwitch = function AddOpertaionSwitch() {
    setAddNewOperation(!addNewOperation);
  };
  var DeleteTask = function DeleteTask() {
    (0,_task__WEBPACK_IMPORTED_MODULE_5__.deleteTasks)(task.id);
  };
  var UpdateTaskStatus = function UpdateTaskStatus() {
    (0,_task__WEBPACK_IMPORTED_MODULE_5__.UpdateTasks)({
      status: "closed"
    }, task.id);
    console.log("da button", task.status);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "card mt-5 shadow-sm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "card-header d-flex justify-content-between align-items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h5", null, task.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h6", {
    className: "card-subtitle text-muted"
  }, task.description)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_buttons__WEBPACK_IMPORTED_MODULE_1__.AddOperationButton, {
    switcher: AddOpertaionSwitch
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_buttons__WEBPACK_IMPORTED_MODULE_1__.FinishTaskButton, {
    finish: UpdateTaskStatus
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_buttons__WEBPACK_IMPORTED_MODULE_1__.TrashButton, {
    deleteAction: DeleteTask
  }))), addNewOperation ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_forms__WEBPACK_IMPORTED_MODULE_4__.NewOperationForm, {
    taskID: task.id
  }) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "list-group list-group-flush"
  }, allOperations ? allOperations.map(function (Operation) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_showoperations__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: Operation.id,
      Operation: Operation
    });
  }) : null)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShowTasks);

/***/ }),

/***/ 39:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_newtask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34);
/* harmony import */ var _components_showtasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(36);
/* harmony import */ var _components_task__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(37);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var MainApp = function MainApp() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    allTasks = _useState2[0],
    setAllTasks = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    (0,_components_task__WEBPACK_IMPORTED_MODULE_3__.getTasks)(setAllTasks);
  }, [allTasks]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_newtask__WEBPACK_IMPORTED_MODULE_1__["default"], null), allTasks ? allTasks.map(function (task) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_showtasks__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: task.id,
      task: task
    });
  }) : null);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainApp);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("e0a06a890bd8d995e998")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUEsRUFBQyxHQUFHLElBQzlFLENBQUM7QUFHVCxDQUFDO0FBRUQsaUVBQWVhLE9BQU87Ozs7Ozs7O1VDdkJ0QiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uL2pzL2NvbXBvbmVudHMvZm9ybXMuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vanMvY29tcG9uZW50cy9vcGVyYXRpb24uanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vanMvY29tcG9uZW50cy9zaG93b3BlcmF0aW9ucy5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9qcy9jb21wb25lbnRzL3Nob3d0YXNrcy5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9qcy9tYWluYXBwLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEFkZE9wZXJhdGlvbnMgfSBmcm9tIFwiLi9vcGVyYXRpb25cIjtcclxuaW1wb3J0IHsgZ2V0T3BlcmF0aW9ucyB9IGZyb20gXCIuL29wZXJhdGlvblwiO1xyXG5pbXBvcnQgeyBVcGRhdGVPcGVyYXRpb25zIH0gZnJvbSBcIi4vb3BlcmF0aW9uXCI7XHJcbmltcG9ydCB7IGdldFNpbmdsZU9wZXJhdGlvbnMgfSBmcm9tIFwiLi9vcGVyYXRpb25cIjtcclxuXHJcbmV4cG9ydCBjb25zdCBBZGRUaW1lRm9ybSA9ICh7IGNhbmNlbEFkZFRpbWUsb3BlcmF0aW9uSUQgfSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtvcGVyYXRpb250aW1lciwgc2V0T3BlcmF0aW9uVGltZXJdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGdldFNpbmdsZU9wZXJhdGlvbnMob3BlcmF0aW9uSUQsc2V0T3BlcmF0aW9uVGltZXIpXHJcbiAgICB9LFtvcGVyYXRpb250aW1lcl0pXHJcblxyXG4gICAgY29uc3QgW3RpbWVyLCBzZXRUaW1lcl0gPSB1c2VTdGF0ZSgwKVxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzZXRUaW1lcihvcGVyYXRpb250aW1lci50aW1lU3BlbnQpXHJcbiAgICB9LFtvcGVyYXRpb250aW1lcl0pXHJcblxyXG4gICAgY29uc3QgW25ld1RpbWVJbnB1dCwgc2V0TmV3VGltZUlucHV0XSA9IHVzZVN0YXRlKCcnKVxyXG5cclxuICAgIGNvbnN0IFVwZGF0ZUlucHV0ID0gKGUpID0+IHtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgIHNldE5ld1RpbWVJbnB1dCh2YWx1ZSlcclxuICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB0aW1lU3VibWl0SGFuZGxlciA9IChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgaWYobmV3VGltZUlucHV0ID4gMCl7XHJcbiAgICAgICAgICAgIFVwZGF0ZU9wZXJhdGlvbnMoey4uLm9wZXJhdGlvbnRpbWVyLCB0aW1lU3BlbnQ6dGltZXIgKyBwYXJzZUludChuZXdUaW1lSW5wdXQpfSwgb3BlcmF0aW9uSUQpICBcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0TmV3VGltZUlucHV0KCcnKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RpbWVTdWJtaXRIYW5kbGVyfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAgaW5wdXQtZ3JvdXAtc21cIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU3BlbnQgdGltZSBpbiBtaW51dGVzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTJyZW1cIiB9fSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e25ld1RpbWVJbnB1dH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e1VwZGF0ZUlucHV0fSAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC1hcHBlbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtc3VjY2Vzc1wiPjxpIGNsYXNzTmFtZT1cImZhcyBmYS1zYXZlXCIgdHlwZT0nc3VibWl0Jz48L2k+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLWRhcmtcIiBvbkNsaWNrPXsoKSA9PiBjYW5jZWxBZGRUaW1lKCl9PjxpIGNsYXNzTmFtZT1cImZhcyBmYS10aW1lcyBmYWxzZVwiID48L2k+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgTmV3T3BlcmF0aW9uRm9ybSA9ICh7dGFza0lEfSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtuZXdPcGVyYXRpb25mb3JtRGF0YSwgc2V0TmV3T3BlcmF0aW9uRm9ybURhdGFdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlwiLFxyXG4gICAgICAgIHN0YXR1czogXCJvcGVuXCJcclxuICAgICAgfSlcclxuXHJcbiAgICBjb25zdCBmb3JtU3VibWl0SGFuZGxlciA9IChlKSA9PiAge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgIGlmIChuZXdPcGVyYXRpb25mb3JtRGF0YS50aXRsZSAhPT0gXCJcIikge1xyXG4gICAgICAgICAgICBBZGRPcGVyYXRpb25zKG5ld09wZXJhdGlvbmZvcm1EYXRhLCB0YXNrSUQpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXROZXdPcGVyYXRpb25Gb3JtRGF0YShcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBzdGF0dXM6IFwib3BlblwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjb25zdCBpbnB1dEhhbmRsZXIgPSAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgc2V0TmV3T3BlcmF0aW9uRm9ybURhdGEoKHByZXZTdGF0ZSk9Pih7Li4ucHJldlN0YXRlLGRlc2NyaXB0aW9uOnZhbHVlfSkpOyAgICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICBcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17Zm9ybVN1Ym1pdEhhbmRsZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk9wZXJhdGlvbiBkZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHtuZXdPcGVyYXRpb25mb3JtRGF0YS5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtpbnB1dEhhbmRsZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtYXBwZW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4taW5mb1wiIHR5cGU9J3N1Ym1pdCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQWRkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXBsdXMtY2lyY2xlIG1sLTFcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IHsgQVBJX0tFWSwgQVBJX1VSTCB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xyXG5cclxuLyoqXHJcbiAqIEZldGNoIGFsbCBvcGVyYXRpb25zXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBpZCAtIElEIG9mIHRhc2tcclxuICogQHBhcmFtIHtmdW5jdGlvbn0gc3VjY2Vzc0NhbGxiYWNrIC0gRnVuY3Rpb24gdGhhdCBzYXZlcyBpbmNvbWluZyBkYXRhXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZ2V0T3BlcmF0aW9ucyA9IGFzeW5jIChpZCwgc3VjY2Vzc0NhbGxiYWNrKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7QVBJX1VSTH0vdGFza3MvJHtpZH0vb3BlcmF0aW9uc2AsIHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIEF1dGhvcml6YXRpb246IEFQSV9LRVksXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cclxuICAgIGlmIChkYXRhLmVycm9yIHx8IHR5cGVvZiBzdWNjZXNzQ2FsbGJhY2sgIT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJCxYLEhWQhXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHN1Y2Nlc3NDYWxsYmFjayhkYXRhLmRhdGEpO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5sb2coZXJyKTtcclxuICB9XHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IEFkZE9wZXJhdGlvbnMgPSBhc3luYyAob2JqLHRhc2tJRCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgYXdhaXQgZmV0Y2goYCR7QVBJX1VSTH0vdGFza3MvJHt0YXNrSUR9L29wZXJhdGlvbnNgLCB7XHJcbiAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkob2JqKSxcclxuICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBBUElfS0VZLFxyXG4gICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gIFxyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpXHJcbiAgfVxyXG4gIH1cclxuXHJcbmV4cG9ydCBjb25zdCBVcGRhdGVPcGVyYXRpb25zID0gYXN5bmMgKG9iaixvcGVyYXRpb25JRCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgYXdhaXQgZmV0Y2goYCR7QVBJX1VSTH0vb3BlcmF0aW9ucy8ke29wZXJhdGlvbklEfWAsIHtcclxuICAgICAgICAgIG1ldGhvZDogXCJQVVRcIixcclxuICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KG9iaiksXHJcbiAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogQVBJX0tFWSxcclxuICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgIH1cclxuICAgICAgfSlcclxuICBcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKVxyXG4gIH1cclxuICB9XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNpbmdsZU9wZXJhdGlvbnMgPSBhc3luYyAob3BlcmF0aW9uSUQsIHN1Y2Nlc3NDYWxsYmFjaykgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtBUElfVVJMfS9vcGVyYXRpb25zLyR7b3BlcmF0aW9uSUR9YCwge1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgIEF1dGhvcml6YXRpb246IEFQSV9LRVksXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgXHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgXHJcbiAgICAgIGlmIChkYXRhLmVycm9yIHx8IHR5cGVvZiBzdWNjZXNzQ2FsbGJhY2sgIT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkLFgsSFZCFcIik7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgc3VjY2Vzc0NhbGxiYWNrKGRhdGEuZGF0YSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuZXhwb3J0IGNvbnN0IGRlbGV0ZVNpbmdsZU9wZXJhdGlvbnMgPSBhc3luYyAob3BJRCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtBUElfVVJMfS9vcGVyYXRpb25zLyR7b3BJRH1gLCB7XHJcbiAgICAgICAgbWV0aG9kOiBcIkRFTEVURVwiLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgIEF1dGhvcml6YXRpb246IEFQSV9LRVksXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgXHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgXHJcbiAgICAgIGlmIChkYXRhLmVycm9yIHx8IHR5cGVvZiBzdWNjZXNzQ2FsbGJhY2sgIT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkLFgsSFZCFcIik7XHJcbiAgICAgIH1cclxuICBcclxuICAgIFxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9XHJcbiAgfTsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQWRkVGltZUJ1dHRvbiwgRGVsZXRlT3BlcmF0aW9uQnV0dG9uIH0gZnJvbSBcIi4vYnV0dG9uc1wiXHJcbmltcG9ydCB7IEFkZFRpbWVGb3JtIH0gZnJvbSBcIi4vZm9ybXNcIlxyXG5pbXBvcnQgeyBkZWxldGVTaW5nbGVPcGVyYXRpb25zIH0gZnJvbSBcIi4vb3BlcmF0aW9uXCI7XHJcblxyXG5jb25zdCBTaG93T3BlcmF0aW9ucyA9ICh7IE9wZXJhdGlvbiB9KSA9PiB7XHJcblxyXG4gICAgY29uc3QgW3Nob3dGb3JtLCBzZXRTaG93Rm9ybV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgU2hvd0FkZFRpbWVIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgICAgIHNldFNob3dGb3JtKHRydWUpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgSGlkZUFkZFRpbWVIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgICAgIHNldFNob3dGb3JtKGZhbHNlKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IERlbGV0ZU9wZXJhdGlvbiA9ICgpID0+IHtcclxuICAgICAgICBkZWxldGVTaW5nbGVPcGVyYXRpb25zKE9wZXJhdGlvbi5pZClcclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbSBkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHtPcGVyYXRpb24uZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmFkZ2UgYmFkZ2Utc3VjY2VzcyBiYWRnZS1waWxsIG1sLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge09wZXJhdGlvbi50aW1lU3BlbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAge3Nob3dGb3JtID8gPEFkZFRpbWVGb3JtIGNhbmNlbEFkZFRpbWU9e0hpZGVBZGRUaW1lSGFuZGxlcn0gb3BlcmF0aW9uSUQ9e09wZXJhdGlvbi5pZH0vPiA6XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEFkZFRpbWVCdXR0b24gb25BY3Rpb249e1Nob3dBZGRUaW1lSGFuZGxlcn0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RGVsZXRlT3BlcmF0aW9uQnV0dG9uIGRlbGV0ZU9wQWN0aW9uPXtEZWxldGVPcGVyYXRpb259Lz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNob3dPcGVyYXRpb25zOyIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7VHJhc2hCdXR0b24sIEZpbmlzaFRhc2tCdXR0b24sIEFkZE9wZXJhdGlvbkJ1dHRvbn0gZnJvbSBcIi4vYnV0dG9uc1wiXHJcbmltcG9ydCB7IGdldE9wZXJhdGlvbnMgfSBmcm9tIFwiLi9vcGVyYXRpb25cIjtcclxuaW1wb3J0IFNob3dPcGVyYXRpb25zIGZyb20gXCIuL3Nob3dvcGVyYXRpb25zXCI7XHJcbmltcG9ydCB7TmV3T3BlcmF0aW9uRm9ybX0gZnJvbSBcIi4vZm9ybXNcIlxyXG5pbXBvcnQgeyBkZWxldGVUYXNrcyB9IGZyb20gXCIuL3Rhc2tcIjtcclxuaW1wb3J0IHsgVXBkYXRlVGFza3MgfSBmcm9tIFwiLi90YXNrXCI7XHJcblxyXG5jb25zdCBTaG93VGFza3MgPSAoe3Rhc2t9KSA9PiB7XHJcbiAgICBcclxuICAgIGNvbnN0IFthbGxPcGVyYXRpb25zLCBzZXRBbGxPcGVyYXRpb25zXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZ2V0T3BlcmF0aW9ucyh0YXNrLmlkLHNldEFsbE9wZXJhdGlvbnMpXHJcbiAgICB9LFthbGxPcGVyYXRpb25zXSlcclxuXHJcbiAgICBjb25zdCBbYWRkTmV3T3BlcmF0aW9uLCBzZXRBZGROZXdPcGVyYXRpb25dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgXHJcbiAgICBjb25zdCBBZGRPcGVydGFpb25Td2l0Y2ggPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0QWRkTmV3T3BlcmF0aW9uKCFhZGROZXdPcGVyYXRpb24pXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgRGVsZXRlVGFzayA9ICgpID0+IHtcclxuICAgICAgICBkZWxldGVUYXNrcyh0YXNrLmlkKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IFVwZGF0ZVRhc2tTdGF0dXMgPSAoKSA9PiB7XHJcbiAgICAgICAgVXBkYXRlVGFza3Moe3N0YXR1czpcImNsb3NlZFwifSx0YXNrLmlkKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZGEgYnV0dG9uXCIsIHRhc2suc3RhdHVzKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY2FyZCBtdC01IHNoYWRvdy1zbVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlciBkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg1Pnt0YXNrLnRpdGxlfTwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJjYXJkLXN1YnRpdGxlIHRleHQtbXV0ZWRcIj57dGFzay5kZXNjcmlwdGlvbn08L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QWRkT3BlcmF0aW9uQnV0dG9uIHN3aXRjaGVyPXtBZGRPcGVydGFpb25Td2l0Y2h9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZpbmlzaFRhc2tCdXR0b24gZmluaXNoPXtVcGRhdGVUYXNrU3RhdHVzfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFzaEJ1dHRvbiBkZWxldGVBY3Rpb249e0RlbGV0ZVRhc2t9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAge2FkZE5ld09wZXJhdGlvbiA/IDxOZXdPcGVyYXRpb25Gb3JtIHRhc2tJRD17dGFzay5pZH0vPiA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LWdyb3VwIGxpc3QtZ3JvdXAtZmx1c2hcIj5cclxuICAgICAgICAgICAgICAgICAgICB7YWxsT3BlcmF0aW9ucyA/IGFsbE9wZXJhdGlvbnMubWFwKChPcGVyYXRpb24pID0+IDxTaG93T3BlcmF0aW9ucyBrZXk9e09wZXJhdGlvbi5pZH0gT3BlcmF0aW9uPXtPcGVyYXRpb259Lz4pOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaG93VGFza3M7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IE5ld1Rhc2sgZnJvbSBcIi4vY29tcG9uZW50cy9uZXd0YXNrXCI7XHJcbmltcG9ydCBTaG93VGFza3MgZnJvbSBcIi4vY29tcG9uZW50cy9zaG93dGFza3NcIjtcclxuaW1wb3J0IHsgZ2V0VGFza3MgfSBmcm9tIFwiLi9jb21wb25lbnRzL3Rhc2tcIjtcclxuXHJcbmNvbnN0IE1haW5BcHAgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgW2FsbFRhc2tzLCBzZXRBbGxUYXNrc10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBnZXRUYXNrcyhzZXRBbGxUYXNrcylcclxuICAgIH0sW2FsbFRhc2tzXSlcclxuXHJcbiAgICBcclxuICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPE5ld1Rhc2sgLz5cclxuICAgICAgICB7YWxsVGFza3MgPyBhbGxUYXNrcy5tYXAoKHRhc2spID0+IDxTaG93VGFza3Mga2V5PXt0YXNrLmlkfSB0YXNrPXt0YXNrfSAvPikgOiBudWxsfVxyXG4gICAgICA8Lz5cclxuICAgIClcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1haW5BcHA7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZTBhMDZhODkwYmQ4ZDk5NWU5OThcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkFkZE9wZXJhdGlvbnMiLCJnZXRPcGVyYXRpb25zIiwiVXBkYXRlT3BlcmF0aW9ucyIsImdldFNpbmdsZU9wZXJhdGlvbnMiLCJBZGRUaW1lRm9ybSIsIl9yZWYiLCJjYW5jZWxBZGRUaW1lIiwib3BlcmF0aW9uSUQiLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJvcGVyYXRpb250aW1lciIsInNldE9wZXJhdGlvblRpbWVyIiwiX3VzZVN0YXRlMyIsIl91c2VTdGF0ZTQiLCJ0aW1lciIsInNldFRpbWVyIiwidGltZVNwZW50IiwiX3VzZVN0YXRlNSIsIl91c2VTdGF0ZTYiLCJuZXdUaW1lSW5wdXQiLCJzZXROZXdUaW1lSW5wdXQiLCJVcGRhdGVJbnB1dCIsImUiLCJ2YWx1ZSIsInRhcmdldCIsImNvbnNvbGUiLCJsb2ciLCJ0aW1lU3VibWl0SGFuZGxlciIsInByZXZlbnREZWZhdWx0IiwiX29iamVjdFNwcmVhZCIsInBhcnNlSW50IiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50Iiwib25TdWJtaXQiLCJjbGFzc05hbWUiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJzdHlsZSIsIndpZHRoIiwib25DaGFuZ2UiLCJvbkNsaWNrIiwiTmV3T3BlcmF0aW9uRm9ybSIsIl9yZWYyIiwidGFza0lEIiwiX3VzZVN0YXRlNyIsImRlc2NyaXB0aW9uIiwic3RhdHVzIiwiX3VzZVN0YXRlOCIsIm5ld09wZXJhdGlvbmZvcm1EYXRhIiwic2V0TmV3T3BlcmF0aW9uRm9ybURhdGEiLCJmb3JtU3VibWl0SGFuZGxlciIsInRpdGxlIiwiaW5wdXRIYW5kbGVyIiwicHJldlN0YXRlIiwiX3JlZ2VuZXJhdG9yUnVudGltZSIsInQiLCJyIiwiT2JqZWN0IiwicHJvdG90eXBlIiwibiIsImhhc093blByb3BlcnR5IiwibyIsImRlZmluZVByb3BlcnR5IiwiaSIsIlN5bWJvbCIsImEiLCJpdGVyYXRvciIsImMiLCJhc3luY0l0ZXJhdG9yIiwidSIsInRvU3RyaW5nVGFnIiwiZGVmaW5lIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwid3JhcCIsIkdlbmVyYXRvciIsImNyZWF0ZSIsIkNvbnRleHQiLCJtYWtlSW52b2tlTWV0aG9kIiwidHJ5Q2F0Y2giLCJhcmciLCJjYWxsIiwiaCIsImwiLCJmIiwicyIsInkiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwicCIsImQiLCJnZXRQcm90b3R5cGVPZiIsInYiLCJ2YWx1ZXMiLCJnIiwiZGVmaW5lSXRlcmF0b3JNZXRob2RzIiwiZm9yRWFjaCIsIl9pbnZva2UiLCJBc3luY0l0ZXJhdG9yIiwiaW52b2tlIiwiX3R5cGVvZiIsInJlc29sdmUiLCJfX2F3YWl0IiwidGhlbiIsImNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnIiwiRXJyb3IiLCJkb25lIiwibWV0aG9kIiwiZGVsZWdhdGUiLCJtYXliZUludm9rZURlbGVnYXRlIiwic2VudCIsIl9zZW50IiwiZGlzcGF0Y2hFeGNlcHRpb24iLCJhYnJ1cHQiLCJUeXBlRXJyb3IiLCJyZXN1bHROYW1lIiwibmV4dCIsIm5leHRMb2MiLCJwdXNoVHJ5RW50cnkiLCJ0cnlMb2MiLCJjYXRjaExvYyIsImZpbmFsbHlMb2MiLCJhZnRlckxvYyIsInRyeUVudHJpZXMiLCJwdXNoIiwicmVzZXRUcnlFbnRyeSIsImNvbXBsZXRpb24iLCJyZXNldCIsImlzTmFOIiwibGVuZ3RoIiwiZGlzcGxheU5hbWUiLCJpc0dlbmVyYXRvckZ1bmN0aW9uIiwiY29uc3RydWN0b3IiLCJuYW1lIiwibWFyayIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiYXdyYXAiLCJhc3luYyIsIlByb21pc2UiLCJrZXlzIiwicmV2ZXJzZSIsInBvcCIsInByZXYiLCJjaGFyQXQiLCJzbGljZSIsInN0b3AiLCJydmFsIiwiaGFuZGxlIiwiY29tcGxldGUiLCJmaW5pc2giLCJfY2F0Y2giLCJkZWxlZ2F0ZVlpZWxkIiwiYXN5bmNHZW5lcmF0b3JTdGVwIiwiZ2VuIiwicmVqZWN0IiwiX25leHQiLCJfdGhyb3ciLCJrZXkiLCJpbmZvIiwiZXJyb3IiLCJfYXN5bmNUb0dlbmVyYXRvciIsImZuIiwic2VsZiIsImFyZ3MiLCJhcmd1bWVudHMiLCJhcHBseSIsImVyciIsInVuZGVmaW5lZCIsIkFQSV9LRVkiLCJBUElfVVJMIiwiX2NhbGxlZSIsImlkIiwic3VjY2Vzc0NhbGxiYWNrIiwicmVzcG9uc2UiLCJkYXRhIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsImZldGNoIiwiY29uY2F0IiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJqc29uIiwidDAiLCJfeCIsIl94MiIsIl9jYWxsZWUyIiwib2JqIiwiX2NhbGxlZTIkIiwiX2NvbnRleHQyIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJfeDMiLCJfeDQiLCJfcmVmMyIsIl9jYWxsZWUzIiwiX2NhbGxlZTMkIiwiX2NvbnRleHQzIiwiX3g1IiwiX3g2IiwiX3JlZjQiLCJfY2FsbGVlNCIsIl9jYWxsZWU0JCIsIl9jb250ZXh0NCIsIl94NyIsIl94OCIsImRlbGV0ZVNpbmdsZU9wZXJhdGlvbnMiLCJfcmVmNSIsIl9jYWxsZWU1Iiwib3BJRCIsIl9jYWxsZWU1JCIsIl9jb250ZXh0NSIsIl94OSIsIkFkZFRpbWVCdXR0b24iLCJEZWxldGVPcGVyYXRpb25CdXR0b24iLCJTaG93T3BlcmF0aW9ucyIsIk9wZXJhdGlvbiIsInNob3dGb3JtIiwic2V0U2hvd0Zvcm0iLCJTaG93QWRkVGltZUhhbmRsZXIiLCJIaWRlQWRkVGltZUhhbmRsZXIiLCJEZWxldGVPcGVyYXRpb24iLCJvbkFjdGlvbiIsImRlbGV0ZU9wQWN0aW9uIiwiVHJhc2hCdXR0b24iLCJGaW5pc2hUYXNrQnV0dG9uIiwiQWRkT3BlcmF0aW9uQnV0dG9uIiwiZGVsZXRlVGFza3MiLCJVcGRhdGVUYXNrcyIsIlNob3dUYXNrcyIsInRhc2siLCJhbGxPcGVyYXRpb25zIiwic2V0QWxsT3BlcmF0aW9ucyIsImFkZE5ld09wZXJhdGlvbiIsInNldEFkZE5ld09wZXJhdGlvbiIsIkFkZE9wZXJ0YWlvblN3aXRjaCIsIkRlbGV0ZVRhc2siLCJVcGRhdGVUYXNrU3RhdHVzIiwic3dpdGNoZXIiLCJkZWxldGVBY3Rpb24iLCJtYXAiLCJOZXdUYXNrIiwiZ2V0VGFza3MiLCJNYWluQXBwIiwiYWxsVGFza3MiLCJzZXRBbGxUYXNrcyJdLCJzb3VyY2VSb290IjoiIn0=