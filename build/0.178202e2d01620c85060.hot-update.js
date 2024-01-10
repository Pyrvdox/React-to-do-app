"use strict";
self["webpackHotUpdatees6_react"](0,{

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
    console.log("da button", task.status);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "card mt-5 shadow-sm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "card-header d-flex justify-content-between align-items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h5", null, task.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h6", {
    className: "card-subtitle text-muted"
  }, task.description)), task.status == "open" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_buttons__WEBPACK_IMPORTED_MODULE_1__.AddOperationButton, {
    switcher: AddOpertaionSwitch
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_buttons__WEBPACK_IMPORTED_MODULE_1__.FinishTaskButton, {
    finish: UpdateTaskStatus
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_buttons__WEBPACK_IMPORTED_MODULE_1__.TrashButton, {
    deleteAction: DeleteTask
  })) : null), addNewOperation ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_forms__WEBPACK_IMPORTED_MODULE_4__.NewOperationForm, {
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
/******/ 	__webpack_require__.h = () => ("2d132abbb9d5782695f1")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUM7QUFFRCxpRUFBZTlCLFNBQVM7Ozs7Ozs7O1VDNUR4QiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uL2pzL2NvbXBvbmVudHMvc2hvd3Rhc2tzLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtUcmFzaEJ1dHRvbiwgRmluaXNoVGFza0J1dHRvbiwgQWRkT3BlcmF0aW9uQnV0dG9ufSBmcm9tIFwiLi9idXR0b25zXCJcclxuaW1wb3J0IHsgZ2V0T3BlcmF0aW9ucyB9IGZyb20gXCIuL29wZXJhdGlvblwiO1xyXG5pbXBvcnQgU2hvd09wZXJhdGlvbnMgZnJvbSBcIi4vc2hvd29wZXJhdGlvbnNcIjtcclxuaW1wb3J0IHtOZXdPcGVyYXRpb25Gb3JtfSBmcm9tIFwiLi9mb3Jtc1wiXHJcbmltcG9ydCB7IGRlbGV0ZVRhc2tzIH0gZnJvbSBcIi4vdGFza1wiO1xyXG5pbXBvcnQgeyBVcGRhdGVUYXNrcyB9IGZyb20gXCIuL3Rhc2tcIjtcclxuXHJcbmNvbnN0IFNob3dUYXNrcyA9ICh7dGFza30pID0+IHtcclxuICAgIFxyXG4gICAgY29uc3QgW2FsbE9wZXJhdGlvbnMsIHNldEFsbE9wZXJhdGlvbnNdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBnZXRPcGVyYXRpb25zKHRhc2suaWQsc2V0QWxsT3BlcmF0aW9ucylcclxuICAgIH0sW2FsbE9wZXJhdGlvbnNdKVxyXG5cclxuICAgIGNvbnN0IFthZGROZXdPcGVyYXRpb24sIHNldEFkZE5ld09wZXJhdGlvbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBcclxuICAgIGNvbnN0IEFkZE9wZXJ0YWlvblN3aXRjaCA9ICgpID0+IHtcclxuICAgICAgICBzZXRBZGROZXdPcGVyYXRpb24oIWFkZE5ld09wZXJhdGlvbilcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBEZWxldGVUYXNrID0gKCkgPT4ge1xyXG4gICAgICAgIGRlbGV0ZVRhc2tzKHRhc2suaWQpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgVXBkYXRlVGFza1N0YXR1cyA9ICgpID0+IHtcclxuICAgICAgICBVcGRhdGVUYXNrcyh7Li4udGFzaywgc3RhdHVzOlwiY2xvc2VkXCJ9LHRhc2suaWQpXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJkYSBidXR0b25cIiwgdGFzay5zdGF0dXMpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjYXJkIG10LTUgc2hhZG93LXNtXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDU+e3Rhc2sudGl0bGV9PC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cImNhcmQtc3VidGl0bGUgdGV4dC1tdXRlZFwiPnt0YXNrLmRlc2NyaXB0aW9ufTwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHt0YXNrLnN0YXR1cyA9PSBcIm9wZW5cIiA/IFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBZGRPcGVyYXRpb25CdXR0b24gc3dpdGNoZXI9e0FkZE9wZXJ0YWlvblN3aXRjaH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RmluaXNoVGFza0J1dHRvbiBmaW5pc2g9e1VwZGF0ZVRhc2tTdGF0dXN9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYXNoQnV0dG9uIGRlbGV0ZUFjdGlvbj17RGVsZXRlVGFza30vPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAge2FkZE5ld09wZXJhdGlvbiA/IDxOZXdPcGVyYXRpb25Gb3JtIHRhc2tJRD17dGFzay5pZH0vPiA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LWdyb3VwIGxpc3QtZ3JvdXAtZmx1c2hcIj5cclxuICAgICAgICAgICAgICAgICAgICB7YWxsT3BlcmF0aW9ucyA/IGFsbE9wZXJhdGlvbnMubWFwKChPcGVyYXRpb24pID0+IDxTaG93T3BlcmF0aW9ucyBrZXk9e09wZXJhdGlvbi5pZH0gT3BlcmF0aW9uPXtPcGVyYXRpb259Lz4pOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaG93VGFza3M7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMmQxMzJhYmJiOWQ1NzgyNjk1ZjFcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlRyYXNoQnV0dG9uIiwiRmluaXNoVGFza0J1dHRvbiIsIkFkZE9wZXJhdGlvbkJ1dHRvbiIsImdldE9wZXJhdGlvbnMiLCJTaG93T3BlcmF0aW9ucyIsIk5ld09wZXJhdGlvbkZvcm0iLCJkZWxldGVUYXNrcyIsIlVwZGF0ZVRhc2tzIiwiU2hvd1Rhc2tzIiwiX3JlZiIsInRhc2siLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJhbGxPcGVyYXRpb25zIiwic2V0QWxsT3BlcmF0aW9ucyIsImlkIiwiX3VzZVN0YXRlMyIsIl91c2VTdGF0ZTQiLCJhZGROZXdPcGVyYXRpb24iLCJzZXRBZGROZXdPcGVyYXRpb24iLCJBZGRPcGVydGFpb25Td2l0Y2giLCJEZWxldGVUYXNrIiwiVXBkYXRlVGFza1N0YXR1cyIsIl9vYmplY3RTcHJlYWQiLCJzdGF0dXMiLCJjb25zb2xlIiwibG9nIiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwiY2xhc3NOYW1lIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInN3aXRjaGVyIiwiZmluaXNoIiwiZGVsZXRlQWN0aW9uIiwidGFza0lEIiwibWFwIiwiT3BlcmF0aW9uIiwia2V5Il0sInNvdXJjZVJvb3QiOiIifQ==