"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 41:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var ShowOperations = function ShowOperations() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    "class": "list-group-item d-flex justify-content-between align-items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "Opis operacji", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    "class": "badge badge-success badge-pill ml-2"
  }, "2h 15m")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    "class": "input-group input-group-sm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "number",
    "class": "form-control",
    placeholder: "Spent time in minutes",
    style: "width: 12rem"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    "class": "input-group-append"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    "class": "btn btn-outline-success"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    "class": "fas fa-save"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    "class": "btn btn-outline-dark"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    "class": "fas fa-times false"
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    "class": "btn btn-outline-success btn-sm mr-2"
  }, "Add time", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    "class": "fas fa-clock ml-1"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    "class": "btn btn-outline-danger btn-sm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    "class": "fas fa-trash"
  })))));
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
    (0,_operation__WEBPACK_IMPORTED_MODULE_2__.getOperations)(setAllOperations);
  }, [allOperations]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "card mt-5 shadow-sm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "card-header d-flex justify-content-between align-items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h5", null, task.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h6", {
    className: "card-subtitle text-muted"
  }, task.description)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_buttons__WEBPACK_IMPORTED_MODULE_1__.AddOperationButton, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_buttons__WEBPACK_IMPORTED_MODULE_1__.FinishTaskButton, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_buttons__WEBPACK_IMPORTED_MODULE_1__.TrashButton, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, allOperations ? allOperations.map(function (Operation) {
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
/******/ 	__webpack_require__.h = () => ("bfb5fbb3ba8d696673c8")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Y29tcG9uZW50cy9zaG93b3BlcmF0aW9ucy5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9qcy9jb21wb25lbnRzL3Nob3d0YXNrcy5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IFNob3dPcGVyYXRpb25zID0gKCkgPT4ge1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGxpIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgT3BpcyBvcGVyYWNqaVxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYmFkZ2UgYmFkZ2Utc3VjY2VzcyBiYWRnZS1waWxsIG1sLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgMmggMTVtXHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwIGlucHV0LWdyb3VwLXNtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU3BlbnQgdGltZSBpbiBtaW51dGVzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVwid2lkdGg6IDEycmVtXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwLWFwcGVuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1zdWNjZXNzXCI+PGkgY2xhc3M9XCJmYXMgZmEtc2F2ZVwiPjwvaT48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtZGFya1wiPjxpIGNsYXNzPVwiZmFzIGZhLXRpbWVzIGZhbHNlXCI+PC9pPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXN1Y2Nlc3MgYnRuLXNtIG1yLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQWRkIHRpbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtY2xvY2sgbWwtMVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1kYW5nZXIgYnRuLXNtXCI+PGkgY2xhc3M9XCJmYXMgZmEtdHJhc2hcIj48L2k+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNob3dPcGVyYXRpb25zOyIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7VHJhc2hCdXR0b24sIEZpbmlzaFRhc2tCdXR0b24sIEFkZE9wZXJhdGlvbkJ1dHRvbn0gZnJvbSBcIi4vYnV0dG9uc1wiXHJcbmltcG9ydCB7IGdldE9wZXJhdGlvbnMgfSBmcm9tIFwiLi9vcGVyYXRpb25cIjtcclxuaW1wb3J0IFNob3dPcGVyYXRpb25zIGZyb20gXCIuL3Nob3dvcGVyYXRpb25zXCI7XHJcblxyXG5jb25zdCBTaG93VGFza3MgPSAoe3Rhc2t9KSA9PiB7XHJcblxyXG4gICAgY29uc3QgW2FsbE9wZXJhdGlvbnMsIHNldEFsbE9wZXJhdGlvbnNdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBnZXRPcGVyYXRpb25zKHNldEFsbE9wZXJhdGlvbnMpXHJcbiAgICB9LFthbGxPcGVyYXRpb25zXSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNhcmQgbXQtNSBzaGFkb3ctc21cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXIgZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNT57dGFzay50aXRsZX08L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwiY2FyZC1zdWJ0aXRsZSB0ZXh0LW11dGVkXCI+e3Rhc2suZGVzY3JpcHRpb259PC9oNj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEFkZE9wZXJhdGlvbkJ1dHRvbiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RmluaXNoVGFza0J1dHRvbiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhc2hCdXR0b24gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgIHthbGxPcGVyYXRpb25zID8gYWxsT3BlcmF0aW9ucy5tYXAoKE9wZXJhdGlvbikgPT4gPFNob3dPcGVyYXRpb25zIGtleT17T3BlcmF0aW9uLmlkfSBPcGVyYXRpb249e09wZXJhdGlvbn0vPik6IG51bGx9XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNob3dUYXNrczsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJiZmI1ZmJiM2JhOGQ2OTY2NzNjOFwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsIlNob3dPcGVyYXRpb25zIiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwidHlwZSIsInBsYWNlaG9sZGVyIiwic3R5bGUiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlRyYXNoQnV0dG9uIiwiRmluaXNoVGFza0J1dHRvbiIsIkFkZE9wZXJhdGlvbkJ1dHRvbiIsImdldE9wZXJhdGlvbnMiLCJTaG93VGFza3MiLCJfcmVmIiwidGFzayIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsImFsbE9wZXJhdGlvbnMiLCJzZXRBbGxPcGVyYXRpb25zIiwiY2xhc3NOYW1lIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsIm1hcCIsIk9wZXJhdGlvbiIsImtleSIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==