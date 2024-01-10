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
    (0,_operation__WEBPACK_IMPORTED_MODULE_3__.deleteSingleOperations)(console.log(Operation.id), Operation.id);
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
/******/ 	__webpack_require__.h = () => ("835e72f59ad474b5af73")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC43MDQ3YmUzZjA2MDRmYjc1ZWQzYy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF3QztBQUN3QjtBQUMzQjtBQUNnQjtBQUVyRCxJQUFNTSxjQUFjLEdBQUcsU0FBakJBLGNBQWNBLENBQUFDLElBQUEsRUFBc0I7RUFBQSxJQUFoQkMsU0FBUyxHQUFBRCxJQUFBLENBQVRDLFNBQVM7RUFFL0IsSUFBQUMsU0FBQSxHQUFnQ1IsK0NBQVEsQ0FBQyxLQUFLLENBQUM7SUFBQVMsVUFBQSxHQUFBQyxjQUFBLENBQUFGLFNBQUE7SUFBeENHLFFBQVEsR0FBQUYsVUFBQTtJQUFFRyxXQUFXLEdBQUFILFVBQUE7RUFFNUIsSUFBTUksa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFrQkEsQ0FBQSxFQUFTO0lBQzdCRCxXQUFXLENBQUMsSUFBSSxDQUFDO0VBQ3JCLENBQUM7RUFFRCxJQUFNRSxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQWtCQSxDQUFBLEVBQVM7SUFDN0JGLFdBQVcsQ0FBQyxLQUFLLENBQUM7RUFDdEIsQ0FBQztFQUVELElBQU1HLGVBQWUsR0FBRyxTQUFsQkEsZUFBZUEsQ0FBQSxFQUFTO0lBQzFCWCxrRUFBc0IsQ0FBQ1ksT0FBTyxDQUFDQyxHQUFHLENBQUNWLFNBQVMsQ0FBQ1csRUFBRSxDQUFDLEVBQUVYLFNBQVMsQ0FBQ1csRUFBRSxDQUFDO0VBRW5FLENBQUM7RUFHRCxvQkFDSW5CLDBEQUFBLENBQUFBLHVEQUFBLHFCQUNJQSwwREFBQTtJQUFJc0IsU0FBUyxFQUFDO0VBQW1FLGdCQUM3RXRCLDBEQUFBLGNBQ0tRLFNBQVMsQ0FBQ2UsV0FBVyxlQUN0QnZCLDBEQUFBO0lBQU1zQixTQUFTLEVBQUM7RUFBcUMsR0FDaERkLFNBQVMsQ0FBQ2dCLFNBQ1QsQ0FDTCxDQUFDLEVBRUxaLFFBQVEsZ0JBQUdaLDBEQUFBLENBQUNJLCtDQUFXO0lBQUNxQixhQUFhLEVBQUVWLGtCQUFtQjtJQUFDVyxXQUFXLEVBQUVsQixTQUFTLENBQUNXO0VBQUcsQ0FBQyxDQUFDLGdCQUNwRm5CLDBEQUFBLDJCQUNJQSwwREFBQSxDQUFDRSxtREFBYTtJQUFDeUIsUUFBUSxFQUFFYjtFQUFtQixDQUFDLENBQUMsZUFDOUNkLDBEQUFBLENBQUNHLDJEQUFxQjtJQUFDeUIsY0FBYyxFQUFFWjtFQUFnQixDQUFDLENBQ3ZELENBRVQsQ0FDTixDQUFDO0FBR1gsQ0FBQztBQUVELGlFQUFlVixjQUFjOzs7Ozs7OztVQzdDN0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9qcy9jb21wb25lbnRzL3Nob3dvcGVyYXRpb25zLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEFkZFRpbWVCdXR0b24sIERlbGV0ZU9wZXJhdGlvbkJ1dHRvbiB9IGZyb20gXCIuL2J1dHRvbnNcIlxyXG5pbXBvcnQgeyBBZGRUaW1lRm9ybSB9IGZyb20gXCIuL2Zvcm1zXCJcclxuaW1wb3J0IHsgZGVsZXRlU2luZ2xlT3BlcmF0aW9ucyB9IGZyb20gXCIuL29wZXJhdGlvblwiO1xyXG5cclxuY29uc3QgU2hvd09wZXJhdGlvbnMgPSAoeyBPcGVyYXRpb24gfSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtzaG93Rm9ybSwgc2V0U2hvd0Zvcm1dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IFNob3dBZGRUaW1lSGFuZGxlciA9ICgpID0+IHtcclxuICAgICAgICBzZXRTaG93Rm9ybSh0cnVlKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IEhpZGVBZGRUaW1lSGFuZGxlciA9ICgpID0+IHtcclxuICAgICAgICBzZXRTaG93Rm9ybShmYWxzZSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBEZWxldGVPcGVyYXRpb24gPSAoKSA9PiB7XHJcbiAgICAgICAgZGVsZXRlU2luZ2xlT3BlcmF0aW9ucyhjb25zb2xlLmxvZyhPcGVyYXRpb24uaWQpLCBPcGVyYXRpb24uaWQpXHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW0gZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICB7T3BlcmF0aW9uLmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJhZGdlIGJhZGdlLXN1Y2Nlc3MgYmFkZ2UtcGlsbCBtbC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtPcGVyYXRpb24udGltZVNwZW50fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIHtzaG93Rm9ybSA/IDxBZGRUaW1lRm9ybSBjYW5jZWxBZGRUaW1lPXtIaWRlQWRkVGltZUhhbmRsZXJ9IG9wZXJhdGlvbklEPXtPcGVyYXRpb24uaWR9Lz4gOlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBZGRUaW1lQnV0dG9uIG9uQWN0aW9uPXtTaG93QWRkVGltZUhhbmRsZXJ9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPERlbGV0ZU9wZXJhdGlvbkJ1dHRvbiBkZWxldGVPcEFjdGlvbj17RGVsZXRlT3BlcmF0aW9ufS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaG93T3BlcmF0aW9uczsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI4MzVlNzJmNTlhZDQ3NGI1YWY3M1wiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiQWRkVGltZUJ1dHRvbiIsIkRlbGV0ZU9wZXJhdGlvbkJ1dHRvbiIsIkFkZFRpbWVGb3JtIiwiZGVsZXRlU2luZ2xlT3BlcmF0aW9ucyIsIlNob3dPcGVyYXRpb25zIiwiX3JlZiIsIk9wZXJhdGlvbiIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsInNob3dGb3JtIiwic2V0U2hvd0Zvcm0iLCJTaG93QWRkVGltZUhhbmRsZXIiLCJIaWRlQWRkVGltZUhhbmRsZXIiLCJEZWxldGVPcGVyYXRpb24iLCJjb25zb2xlIiwibG9nIiwiaWQiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJjbGFzc05hbWUiLCJkZXNjcmlwdGlvbiIsInRpbWVTcGVudCIsImNhbmNlbEFkZFRpbWUiLCJvcGVyYXRpb25JRCIsIm9uQWN0aW9uIiwiZGVsZXRlT3BBY3Rpb24iXSwic291cmNlUm9vdCI6IiJ9