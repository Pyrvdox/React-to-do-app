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

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("b683b316fc5f0a50adef")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4wMTk1YTI5ZjRmOTdmOTZiODk5MS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF3QztBQUN3QjtBQUMzQjtBQUNnQjtBQUVyRCxJQUFNTSxjQUFjLEdBQUcsU0FBakJBLGNBQWNBLENBQUFDLElBQUEsRUFBc0I7RUFBQSxJQUFoQkMsU0FBUyxHQUFBRCxJQUFBLENBQVRDLFNBQVM7RUFFL0IsSUFBQUMsU0FBQSxHQUFnQ1IsK0NBQVEsQ0FBQyxLQUFLLENBQUM7SUFBQVMsVUFBQSxHQUFBQyxjQUFBLENBQUFGLFNBQUE7SUFBeENHLFFBQVEsR0FBQUYsVUFBQTtJQUFFRyxXQUFXLEdBQUFILFVBQUE7RUFFNUIsSUFBTUksa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFrQkEsQ0FBQSxFQUFTO0lBQzdCRCxXQUFXLENBQUMsSUFBSSxDQUFDO0VBQ3JCLENBQUM7RUFFRCxJQUFNRSxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQWtCQSxDQUFBLEVBQVM7SUFDN0JGLFdBQVcsQ0FBQyxLQUFLLENBQUM7RUFDdEIsQ0FBQztFQUVELElBQU1HLGVBQWUsR0FBRyxTQUFsQkEsZUFBZUEsQ0FBQSxFQUFTO0lBQzFCWCxrRUFBc0IsQ0FBQ0csU0FBUyxDQUFDUyxFQUFFLENBQUM7RUFFeEMsQ0FBQztFQUdELG9CQUNJakIsMERBQUEsQ0FBQUEsdURBQUEscUJBQ0lBLDBEQUFBO0lBQUlvQixTQUFTLEVBQUM7RUFBbUUsZ0JBQzdFcEIsMERBQUEsY0FDS1EsU0FBUyxDQUFDYSxXQUFXLGVBQ3RCckIsMERBQUE7SUFBTW9CLFNBQVMsRUFBQztFQUFxQyxHQUNoRFosU0FBUyxDQUFDYyxTQUNULENBQ0wsQ0FBQyxFQUVMVixRQUFRLGdCQUFHWiwwREFBQSxDQUFDSSwrQ0FBVztJQUFDbUIsYUFBYSxFQUFFUixrQkFBbUI7SUFBQ1MsV0FBVyxFQUFFaEIsU0FBUyxDQUFDUztFQUFHLENBQUMsQ0FBQyxnQkFDcEZqQiwwREFBQSwyQkFDSUEsMERBQUEsQ0FBQ0UsbURBQWE7SUFBQ3VCLFFBQVEsRUFBRVg7RUFBbUIsQ0FBQyxDQUFDLGVBQzlDZCwwREFBQSxDQUFDRywyREFBcUI7SUFBQ3VCLGNBQWMsRUFBRVY7RUFBZ0IsQ0FBQyxDQUN2RCxDQUVULENBQ04sQ0FBQztBQUdYLENBQUM7QUFFRCxpRUFBZVYsY0FBYzs7Ozs7Ozs7VUM3QzdCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vanMvY29tcG9uZW50cy9zaG93b3BlcmF0aW9ucy5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBBZGRUaW1lQnV0dG9uLCBEZWxldGVPcGVyYXRpb25CdXR0b24gfSBmcm9tIFwiLi9idXR0b25zXCJcclxuaW1wb3J0IHsgQWRkVGltZUZvcm0gfSBmcm9tIFwiLi9mb3Jtc1wiXHJcbmltcG9ydCB7IGRlbGV0ZVNpbmdsZU9wZXJhdGlvbnMgfSBmcm9tIFwiLi9vcGVyYXRpb25cIjtcclxuXHJcbmNvbnN0IFNob3dPcGVyYXRpb25zID0gKHsgT3BlcmF0aW9uIH0pID0+IHtcclxuXHJcbiAgICBjb25zdCBbc2hvd0Zvcm0sIHNldFNob3dGb3JtXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCBTaG93QWRkVGltZUhhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0U2hvd0Zvcm0odHJ1ZSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBIaWRlQWRkVGltZUhhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0U2hvd0Zvcm0oZmFsc2UpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgRGVsZXRlT3BlcmF0aW9uID0gKCkgPT4ge1xyXG4gICAgICAgIGRlbGV0ZVNpbmdsZU9wZXJhdGlvbnMoT3BlcmF0aW9uLmlkKVxyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAge09wZXJhdGlvbi5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiYWRnZSBiYWRnZS1zdWNjZXNzIGJhZGdlLXBpbGwgbWwtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7T3BlcmF0aW9uLnRpbWVTcGVudH1cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICB7c2hvd0Zvcm0gPyA8QWRkVGltZUZvcm0gY2FuY2VsQWRkVGltZT17SGlkZUFkZFRpbWVIYW5kbGVyfSBvcGVyYXRpb25JRD17T3BlcmF0aW9uLmlkfS8+IDpcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QWRkVGltZUJ1dHRvbiBvbkFjdGlvbj17U2hvd0FkZFRpbWVIYW5kbGVyfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxEZWxldGVPcGVyYXRpb25CdXR0b24gZGVsZXRlT3BBY3Rpb249e0RlbGV0ZU9wZXJhdGlvbn0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hvd09wZXJhdGlvbnM7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYjY4M2IzMTZmYzVmMGE1MGFkZWZcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkFkZFRpbWVCdXR0b24iLCJEZWxldGVPcGVyYXRpb25CdXR0b24iLCJBZGRUaW1lRm9ybSIsImRlbGV0ZVNpbmdsZU9wZXJhdGlvbnMiLCJTaG93T3BlcmF0aW9ucyIsIl9yZWYiLCJPcGVyYXRpb24iLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJzaG93Rm9ybSIsInNldFNob3dGb3JtIiwiU2hvd0FkZFRpbWVIYW5kbGVyIiwiSGlkZUFkZFRpbWVIYW5kbGVyIiwiRGVsZXRlT3BlcmF0aW9uIiwiaWQiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJjbGFzc05hbWUiLCJkZXNjcmlwdGlvbiIsInRpbWVTcGVudCIsImNhbmNlbEFkZFRpbWUiLCJvcGVyYXRpb25JRCIsIm9uQWN0aW9uIiwiZGVsZXRlT3BBY3Rpb24iXSwic291cmNlUm9vdCI6IiJ9