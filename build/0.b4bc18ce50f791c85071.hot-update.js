self["webpackHotUpdatees6_react"](0,{

/***/ 35:
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: C:\\REACT\\ONL_FSB_E_29_React_Warsztat-main\\js\\components\\buttons.js: Unexpected token, expected \",\" (23:8)\n\n\u001b[0m \u001b[90m 21 |\u001b[39m             \u001b[33m<\u001b[39m\u001b[33mi\u001b[39m className\u001b[33m=\u001b[39m\u001b[32m\"fas fa-plus-circle ml-1\"\u001b[39m\u001b[33m>\u001b[39m\u001b[33m<\u001b[39m\u001b[33m/\u001b[39m\u001b[33mi\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 22 |\u001b[39m         \u001b[33m<\u001b[39m\u001b[33m/\u001b[39m\u001b[33mbutton\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 23 |\u001b[39m         {addNewOperation}\u001b[0m\n\u001b[0m \u001b[90m    |\u001b[39m         \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 24 |\u001b[39m     )\u001b[0m\n\u001b[0m \u001b[90m 25 |\u001b[39m }\u001b[0m\n\u001b[0m \u001b[90m 26 |\u001b[39m\u001b[0m\n    at constructor (C:\\REACT\\ONL_FSB_E_29_React_Warsztat-main\\node_modules\\@babel\\parser\\lib\\index.js:356:19)\n    at JSXParserMixin.raise (C:\\REACT\\ONL_FSB_E_29_React_Warsztat-main\\node_modules\\@babel\\parser\\lib\\index.js:3223:19)\n    at JSXParserMixin.unexpected (C:\\REACT\\ONL_FSB_E_29_React_Warsztat-main\\node_modules\\@babel\\parser\\lib\\index.js:3253:16)\n    at JSXParserMixin.expect (C:\\REACT\\ONL_FSB_E_29_React_Warsztat-main\\node_modules\\@babel\\parser\\lib\\index.js:3585:28)\n    at JSXParserMixin.parseParenAndDistinguishExpression (C:\\REACT\\ONL_FSB_E_29_React_Warsztat-main\\node_modules\\@babel\\parser\\lib\\index.js:11485:14)\n    at JSXParserMixin.parseExprAtom (C:\\REACT\\ONL_FSB_E_29_React_Warsztat-main\\node_modules\\@babel\\parser\\lib\\index.js:11137:23)\n    at JSXParserMixin.parseExprAtom (C:\\REACT\\ONL_FSB_E_29_React_Warsztat-main\\node_modules\\@babel\\parser\\lib\\index.js:6932:20)\n    at JSXParserMixin.parseExprSubscripts (C:\\REACT\\ONL_FSB_E_29_React_Warsztat-main\\node_modules\\@babel\\parser\\lib\\index.js:10857:23)\n    at JSXParserMixin.parseUpdate (C:\\REACT\\ONL_FSB_E_29_React_Warsztat-main\\node_modules\\@babel\\parser\\lib\\index.js:10840:21)\n    at JSXParserMixin.parseMaybeUnary (C:\\REACT\\ONL_FSB_E_29_React_Warsztat-main\\node_modules\\@babel\\parser\\lib\\index.js:10816:23)");

/***/ }),

/***/ 34:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35);
/* harmony import */ var _buttons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_buttons__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37);
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



var NewTask = function NewTask() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      title: "",
      description: "",
      status: "open"
    }),
    _useState2 = _slicedToArray(_useState, 2),
    newTaskformData = _useState2[0],
    setNewTaskFormData = _useState2[1];
  var formSubmitHandler = function formSubmitHandler(e) {
    e.preventDefault();
    if (newTaskformData.title !== "") {
      (0,_task__WEBPACK_IMPORTED_MODULE_2__.AddTasks)(newTaskformData);
    }
    setNewTaskFormData({
      title: "",
      description: "",
      status: "open"
    });
  };
  var inputHandler = function inputHandler(e, type) {
    var value = e.target.value;
    switch (type) {
      case "title":
        setNewTaskFormData(function (prevState) {
          return _objectSpread(_objectSpread({}, prevState), {}, {
            title: value
          });
        });
        break;
      case "description":
        setNewTaskFormData(function (prevState) {
          return _objectSpread(_objectSpread({}, prevState), {}, {
            description: value
          });
        });
        break;
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "card shadow"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "card-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "card-title"
  }, "New task"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: formSubmitHandler
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    className: "form-control",
    name: "title",
    placeholder: "Title",
    value: newTaskformData.title,
    onChange: function onChange(e, type) {
      return inputHandler(e, "title");
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    className: "form-control",
    name: "description",
    placeholder: "Description",
    value: newTaskformData.description,
    onChange: function onChange(e, type) {
      return inputHandler(e, "description");
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_buttons__WEBPACK_IMPORTED_MODULE_1__.NewTaskButton, null)))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewTask);

/***/ }),

/***/ 41:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35);
/* harmony import */ var _buttons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_buttons__WEBPACK_IMPORTED_MODULE_1__);
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
  }, Operation.timeSpent)), Operation.task.status == "open" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, showForm ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_forms__WEBPACK_IMPORTED_MODULE_2__.AddTimeForm, {
    cancelAddTime: HideAddTimeHandler,
    operationID: Operation.id
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_buttons__WEBPACK_IMPORTED_MODULE_1__.AddTimeButton, {
    onAction: ShowAddTimeHandler
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_buttons__WEBPACK_IMPORTED_MODULE_1__.DeleteOperationButton, {
    deleteOpAction: DeleteOperation
  }))) : null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShowOperations);

/***/ }),

/***/ 36:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35);
/* harmony import */ var _buttons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_buttons__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _operation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40);
/* harmony import */ var _showoperations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41);
/* harmony import */ var _forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(42);
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(37);
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
    (0,_task__WEBPACK_IMPORTED_MODULE_5__.UpdateTasks)(_objectSpread(_objectSpread({}, task), {}, {
      status: "closed"
    }), task.id);
    setAddNewOperation(false);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "card mt-5 shadow-sm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "card-header d-flex justify-content-between align-items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h5", null, task.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h6", {
    className: "card-subtitle text-muted"
  }, task.description)), task.status == "open" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_buttons__WEBPACK_IMPORTED_MODULE_1__.AddOperationButton, {
    switcher: AddOpertaionSwitch,
    addNewOperation: addNewOperation
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_buttons__WEBPACK_IMPORTED_MODULE_1__.FinishTaskButton, {
    finish: UpdateTaskStatus
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_buttons__WEBPACK_IMPORTED_MODULE_1__.TrashButton, {
    deleteAction: DeleteTask
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_buttons__WEBPACK_IMPORTED_MODULE_1__.TrashButton, {
    deleteAction: DeleteTask
  })), addNewOperation ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_forms__WEBPACK_IMPORTED_MODULE_4__.NewOperationForm, {
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

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("a7976ce442ff9847d638")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUksZUFFOUR6QywwREFBQTtJQUFJd0IsU0FBUyxFQUFDO0VBQTZCLEdBQ3RDaUMsYUFBYSxHQUFHQSxhQUFhLENBQUNhLEdBQUcsQ0FBQyxVQUFDbkMsU0FBUztJQUFBLG9CQUFLbkMsMERBQUEsQ0FBQ2lDLHVEQUFjO01BQUNzQyxHQUFHLEVBQUVwQyxTQUFTLENBQUNNLEVBQUc7TUFBQ04sU0FBUyxFQUFFQTtJQUFVLENBQUMsQ0FBQztFQUFBLEVBQUMsR0FBRSxJQUMvRyxDQUNDLENBQ1gsQ0FBQztBQUVYLENBQUM7QUFFRCxpRUFBZXFCLFNBQVM7Ozs7Ozs7O1VDNUR4QiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uL2pzL2NvbXBvbmVudHMvbmV3dGFzay5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9qcy9jb21wb25lbnRzL3Nob3dvcGVyYXRpb25zLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uL2pzL2NvbXBvbmVudHMvc2hvd3Rhc2tzLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBOZXdUYXNrQnV0dG9uIH0gZnJvbSBcIi4vYnV0dG9uc1wiO1xyXG5pbXBvcnQgeyBBZGRUYXNrcyB9IGZyb20gXCIuL3Rhc2tcIjtcclxuXHJcbmNvbnN0IE5ld1Rhc2sgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgW25ld1Rhc2tmb3JtRGF0YSwgc2V0TmV3VGFza0Zvcm1EYXRhXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICB0aXRsZTogXCJcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJcIixcclxuICAgICAgICBzdGF0dXM6IFwib3BlblwiXHJcbiAgICAgIH0pXHJcblxyXG4gICAgY29uc3QgZm9ybVN1Ym1pdEhhbmRsZXIgPSAoZSkgPT4gIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICBpZiAobmV3VGFza2Zvcm1EYXRhLnRpdGxlICE9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIEFkZFRhc2tzKG5ld1Rhc2tmb3JtRGF0YSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldE5ld1Rhc2tGb3JtRGF0YShcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJcIixcclxuICAgICAgICAgICAgICAgIHN0YXR1czogXCJvcGVuXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxuXHJcbiAgICBjb25zdCBpbnB1dEhhbmRsZXIgPSAoZSwgdHlwZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJ0aXRsZVwiOlxyXG4gICAgICAgICAgICAgICAgc2V0TmV3VGFza0Zvcm1EYXRhKChwcmV2U3RhdGUpPT4oey4uLnByZXZTdGF0ZSx0aXRsZTp2YWx1ZX0pKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiZGVzY3JpcHRpb25cIjpcclxuICAgICAgICAgICAgICAgIHNldE5ld1Rhc2tGb3JtRGF0YSgocHJldlN0YXRlKT0+KHsuLi5wcmV2U3RhdGUsZGVzY3JpcHRpb246dmFsdWV9KSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgc2hhZG93XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+TmV3IHRhc2s8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtmb3JtU3VibWl0SGFuZGxlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ0aXRsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUaXRsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e25ld1Rhc2tmb3JtRGF0YS50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUsIHR5cGUpID0+IGlucHV0SGFuZGxlcihlLCBcInRpdGxlXCIpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkRlc2NyaXB0aW9uXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e25ld1Rhc2tmb3JtRGF0YS5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUsIHR5cGUpID0+IGlucHV0SGFuZGxlcihlLCBcImRlc2NyaXB0aW9uXCIpfSAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE5ld1Rhc2tCdXR0b24vPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmV3VGFzazsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQWRkVGltZUJ1dHRvbiwgRGVsZXRlT3BlcmF0aW9uQnV0dG9uIH0gZnJvbSBcIi4vYnV0dG9uc1wiXHJcbmltcG9ydCB7IEFkZFRpbWVGb3JtIH0gZnJvbSBcIi4vZm9ybXNcIlxyXG5pbXBvcnQgeyBkZWxldGVTaW5nbGVPcGVyYXRpb25zIH0gZnJvbSBcIi4vb3BlcmF0aW9uXCI7XHJcblxyXG5jb25zdCBTaG93T3BlcmF0aW9ucyA9ICh7IE9wZXJhdGlvbiB9KSA9PiB7XHJcblxyXG4gICAgY29uc3QgW3Nob3dGb3JtLCBzZXRTaG93Rm9ybV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgU2hvd0FkZFRpbWVIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgICAgIHNldFNob3dGb3JtKHRydWUpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgSGlkZUFkZFRpbWVIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgICAgIHNldFNob3dGb3JtKGZhbHNlKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IERlbGV0ZU9wZXJhdGlvbiA9ICgpID0+IHtcclxuICAgICAgICBkZWxldGVTaW5nbGVPcGVyYXRpb25zKE9wZXJhdGlvbi5pZClcclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbSBkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHtPcGVyYXRpb24uZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmFkZ2UgYmFkZ2Utc3VjY2VzcyBiYWRnZS1waWxsIG1sLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge09wZXJhdGlvbi50aW1lU3BlbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7T3BlcmF0aW9uLnRhc2suc3RhdHVzID09IFwib3BlblwiID9cclxuICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7c2hvd0Zvcm0gPyA8QWRkVGltZUZvcm0gY2FuY2VsQWRkVGltZT17SGlkZUFkZFRpbWVIYW5kbGVyfSBvcGVyYXRpb25JRD17T3BlcmF0aW9uLmlkfSAvPiA6XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWRkVGltZUJ1dHRvbiBvbkFjdGlvbj17U2hvd0FkZFRpbWVIYW5kbGVyfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEZWxldGVPcGVyYXRpb25CdXR0b24gZGVsZXRlT3BBY3Rpb249e0RlbGV0ZU9wZXJhdGlvbn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgIG51bGxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNob3dPcGVyYXRpb25zOyIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7VHJhc2hCdXR0b24sIEZpbmlzaFRhc2tCdXR0b24sIEFkZE9wZXJhdGlvbkJ1dHRvbn0gZnJvbSBcIi4vYnV0dG9uc1wiXHJcbmltcG9ydCB7IGdldE9wZXJhdGlvbnMgfSBmcm9tIFwiLi9vcGVyYXRpb25cIjtcclxuaW1wb3J0IFNob3dPcGVyYXRpb25zIGZyb20gXCIuL3Nob3dvcGVyYXRpb25zXCI7XHJcbmltcG9ydCB7TmV3T3BlcmF0aW9uRm9ybX0gZnJvbSBcIi4vZm9ybXNcIlxyXG5pbXBvcnQgeyBkZWxldGVUYXNrcyB9IGZyb20gXCIuL3Rhc2tcIjtcclxuaW1wb3J0IHsgVXBkYXRlVGFza3MgfSBmcm9tIFwiLi90YXNrXCI7XHJcblxyXG5jb25zdCBTaG93VGFza3MgPSAoe3Rhc2t9KSA9PiB7XHJcbiAgICBcclxuICAgIGNvbnN0IFthbGxPcGVyYXRpb25zLCBzZXRBbGxPcGVyYXRpb25zXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZ2V0T3BlcmF0aW9ucyh0YXNrLmlkLHNldEFsbE9wZXJhdGlvbnMpXHJcbiAgICB9LFthbGxPcGVyYXRpb25zXSlcclxuXHJcbiAgICBjb25zdCBbYWRkTmV3T3BlcmF0aW9uLCBzZXRBZGROZXdPcGVyYXRpb25dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgXHJcbiAgICBjb25zdCBBZGRPcGVydGFpb25Td2l0Y2ggPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0QWRkTmV3T3BlcmF0aW9uKCFhZGROZXdPcGVyYXRpb24pXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgRGVsZXRlVGFzayA9ICgpID0+IHtcclxuICAgICAgICBkZWxldGVUYXNrcyh0YXNrLmlkKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IFVwZGF0ZVRhc2tTdGF0dXMgPSAoKSA9PiB7XHJcbiAgICAgICAgVXBkYXRlVGFza3Moey4uLnRhc2ssIHN0YXR1czpcImNsb3NlZFwifSx0YXNrLmlkKVxyXG4gICAgICAgIHNldEFkZE5ld09wZXJhdGlvbihmYWxzZSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNhcmQgbXQtNSBzaGFkb3ctc21cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXIgZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNT57dGFzay50aXRsZX08L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwiY2FyZC1zdWJ0aXRsZSB0ZXh0LW11dGVkXCI+e3Rhc2suZGVzY3JpcHRpb259PC9oNj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAge3Rhc2suc3RhdHVzID09IFwib3BlblwiID8gXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEFkZE9wZXJhdGlvbkJ1dHRvbiBzd2l0Y2hlcj17QWRkT3BlcnRhaW9uU3dpdGNofSBhZGROZXdPcGVyYXRpb249e2FkZE5ld09wZXJhdGlvbn0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RmluaXNoVGFza0J1dHRvbiBmaW5pc2g9e1VwZGF0ZVRhc2tTdGF0dXN9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYXNoQnV0dG9uIGRlbGV0ZUFjdGlvbj17RGVsZXRlVGFza30vPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICA8VHJhc2hCdXR0b24gZGVsZXRlQWN0aW9uPXtEZWxldGVUYXNrfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAge2FkZE5ld09wZXJhdGlvbiA/IDxOZXdPcGVyYXRpb25Gb3JtIHRhc2tJRD17dGFzay5pZH0vPiA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LWdyb3VwIGxpc3QtZ3JvdXAtZmx1c2hcIj5cclxuICAgICAgICAgICAgICAgICAgICB7YWxsT3BlcmF0aW9ucyA/IGFsbE9wZXJhdGlvbnMubWFwKChPcGVyYXRpb24pID0+IDxTaG93T3BlcmF0aW9ucyBrZXk9e09wZXJhdGlvbi5pZH0gT3BlcmF0aW9uPXtPcGVyYXRpb259Lz4pOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaG93VGFza3M7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYTc5NzZjZTQ0MmZmOTg0N2Q2MzhcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIk5ld1Rhc2tCdXR0b24iLCJBZGRUYXNrcyIsIk5ld1Rhc2siLCJfdXNlU3RhdGUiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwic3RhdHVzIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwibmV3VGFza2Zvcm1EYXRhIiwic2V0TmV3VGFza0Zvcm1EYXRhIiwiZm9ybVN1Ym1pdEhhbmRsZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJpbnB1dEhhbmRsZXIiLCJ0eXBlIiwidmFsdWUiLCJ0YXJnZXQiLCJwcmV2U3RhdGUiLCJfb2JqZWN0U3ByZWFkIiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwiY2xhc3NOYW1lIiwib25TdWJtaXQiLCJuYW1lIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsIkFkZFRpbWVCdXR0b24iLCJEZWxldGVPcGVyYXRpb25CdXR0b24iLCJBZGRUaW1lRm9ybSIsImRlbGV0ZVNpbmdsZU9wZXJhdGlvbnMiLCJTaG93T3BlcmF0aW9ucyIsIl9yZWYiLCJPcGVyYXRpb24iLCJzaG93Rm9ybSIsInNldFNob3dGb3JtIiwiU2hvd0FkZFRpbWVIYW5kbGVyIiwiSGlkZUFkZFRpbWVIYW5kbGVyIiwiRGVsZXRlT3BlcmF0aW9uIiwiaWQiLCJ0aW1lU3BlbnQiLCJ0YXNrIiwiY2FuY2VsQWRkVGltZSIsIm9wZXJhdGlvbklEIiwib25BY3Rpb24iLCJkZWxldGVPcEFjdGlvbiIsInVzZUVmZmVjdCIsIlRyYXNoQnV0dG9uIiwiRmluaXNoVGFza0J1dHRvbiIsIkFkZE9wZXJhdGlvbkJ1dHRvbiIsImdldE9wZXJhdGlvbnMiLCJOZXdPcGVyYXRpb25Gb3JtIiwiZGVsZXRlVGFza3MiLCJVcGRhdGVUYXNrcyIsIlNob3dUYXNrcyIsImFsbE9wZXJhdGlvbnMiLCJzZXRBbGxPcGVyYXRpb25zIiwiX3VzZVN0YXRlMyIsIl91c2VTdGF0ZTQiLCJhZGROZXdPcGVyYXRpb24iLCJzZXRBZGROZXdPcGVyYXRpb24iLCJBZGRPcGVydGFpb25Td2l0Y2giLCJEZWxldGVUYXNrIiwiVXBkYXRlVGFza1N0YXR1cyIsInN3aXRjaGVyIiwiZmluaXNoIiwiZGVsZXRlQWN0aW9uIiwidGFza0lEIiwibWFwIiwia2V5Il0sInNvdXJjZVJvb3QiOiIifQ==