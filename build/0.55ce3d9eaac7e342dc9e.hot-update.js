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
/* harmony import */ var _buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35);
/* harmony import */ var _forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(42);
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "list-group-item d-flex justify-content-between align-items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, Operation.description, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "badge badge-success badge-pill ml-2"
  }, Operation.timeSpent)), showForm ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_forms__WEBPACK_IMPORTED_MODULE_2__.AddTimeForm, {
    cancelAddTime: HideAddTimeHandler
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_buttons__WEBPACK_IMPORTED_MODULE_1__.AddTimeButton, {
    onAction: ShowAddTimeHandler
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_buttons__WEBPACK_IMPORTED_MODULE_1__.DeleteOperationButton, null))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShowOperations);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("f94733f42a99f6b592e4")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC41NWNlM2Q5ZWFhYzdlMzQyZGM5ZS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXdDO0FBQ3dCO0FBQzNCO0FBR3JDLElBQU1LLGNBQWMsR0FBRyxTQUFqQkEsY0FBY0EsQ0FBQUMsSUFBQSxFQUFzQjtFQUFBLElBQWhCQyxTQUFTLEdBQUFELElBQUEsQ0FBVEMsU0FBUztFQUUvQixJQUFBQyxTQUFBLEdBQWdDUCwrQ0FBUSxDQUFDLEtBQUssQ0FBQztJQUFBUSxVQUFBLEdBQUFDLGNBQUEsQ0FBQUYsU0FBQTtJQUF4Q0csUUFBUSxHQUFBRixVQUFBO0lBQUVHLFdBQVcsR0FBQUgsVUFBQTtFQUU1QixJQUFNSSxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQWtCQSxDQUFBLEVBQVM7SUFDN0JELFdBQVcsQ0FBQyxJQUFJLENBQUM7RUFDckIsQ0FBQztFQUVELElBQU1FLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBa0JBLENBQUEsRUFBUztJQUM3QkYsV0FBVyxDQUFDLEtBQUssQ0FBQztFQUN0QixDQUFDO0VBRUQsb0JBQ0laLDBEQUFBLENBQUFBLHVEQUFBLHFCQUNJQSwwREFBQTtJQUFJaUIsU0FBUyxFQUFDO0VBQW1FLGdCQUM3RWpCLDBEQUFBLGNBQ0tPLFNBQVMsQ0FBQ1csV0FBVyxlQUN0QmxCLDBEQUFBO0lBQU1pQixTQUFTLEVBQUM7RUFBcUMsR0FDaERWLFNBQVMsQ0FBQ1ksU0FDVCxDQUNMLENBQUMsRUFFTFIsUUFBUSxnQkFBR1gsMERBQUEsQ0FBQ0ksK0NBQVc7SUFBQ2dCLGFBQWEsRUFBRU47RUFBbUIsQ0FBQyxDQUFDLGdCQUN6RGQsMERBQUEsMkJBQ0lBLDBEQUFBLENBQUNFLG1EQUFhO0lBQUNtQixRQUFRLEVBQUVSO0VBQW1CLENBQUMsQ0FBQyxlQUM5Q2IsMERBQUEsQ0FBQ0csMkRBQXFCLE1BQUUsQ0FDdkIsQ0FFVCxDQUNOLENBQUM7QUFHWCxDQUFDO0FBRUQsaUVBQWVFLGNBQWM7Ozs7Ozs7O1VDdkM3QiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uL2pzL2NvbXBvbmVudHMvc2hvd29wZXJhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQWRkVGltZUJ1dHRvbiwgRGVsZXRlT3BlcmF0aW9uQnV0dG9uIH0gZnJvbSBcIi4vYnV0dG9uc1wiXHJcbmltcG9ydCB7IEFkZFRpbWVGb3JtIH0gZnJvbSBcIi4vZm9ybXNcIlxyXG5cclxuXHJcbmNvbnN0IFNob3dPcGVyYXRpb25zID0gKHsgT3BlcmF0aW9uIH0pID0+IHtcclxuXHJcbiAgICBjb25zdCBbc2hvd0Zvcm0sIHNldFNob3dGb3JtXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCBTaG93QWRkVGltZUhhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0U2hvd0Zvcm0odHJ1ZSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBIaWRlQWRkVGltZUhhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0U2hvd0Zvcm0oZmFsc2UpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAge09wZXJhdGlvbi5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiYWRnZSBiYWRnZS1zdWNjZXNzIGJhZGdlLXBpbGwgbWwtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7T3BlcmF0aW9uLnRpbWVTcGVudH1cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICB7c2hvd0Zvcm0gPyA8QWRkVGltZUZvcm0gY2FuY2VsQWRkVGltZT17SGlkZUFkZFRpbWVIYW5kbGVyfS8+IDpcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QWRkVGltZUJ1dHRvbiBvbkFjdGlvbj17U2hvd0FkZFRpbWVIYW5kbGVyfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxEZWxldGVPcGVyYXRpb25CdXR0b24gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNob3dPcGVyYXRpb25zOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImY5NDczM2Y0MmE5OWY2YjU5MmU0XCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJBZGRUaW1lQnV0dG9uIiwiRGVsZXRlT3BlcmF0aW9uQnV0dG9uIiwiQWRkVGltZUZvcm0iLCJTaG93T3BlcmF0aW9ucyIsIl9yZWYiLCJPcGVyYXRpb24iLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJzaG93Rm9ybSIsInNldFNob3dGb3JtIiwiU2hvd0FkZFRpbWVIYW5kbGVyIiwiSGlkZUFkZFRpbWVIYW5kbGVyIiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwiY2xhc3NOYW1lIiwiZGVzY3JpcHRpb24iLCJ0aW1lU3BlbnQiLCJjYW5jZWxBZGRUaW1lIiwib25BY3Rpb24iXSwic291cmNlUm9vdCI6IiJ9