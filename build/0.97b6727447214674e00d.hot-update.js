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
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var ShowTasks = function ShowTasks(_ref) {
  var task = _ref.task;
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    allOperations = _useState2[0],
    setAllOperations = _useState2[1];
  useEffect(function () {
    (0,_operation__WEBPACK_IMPORTED_MODULE_2__.getOperations)(setAllOperations);
  }, [allOperations]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "card mt-5 shadow-sm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "card-header d-flex justify-content-between align-items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h5", null, task.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h6", {
    className: "card-subtitle text-muted"
  }, task.description)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_buttons__WEBPACK_IMPORTED_MODULE_1__.AddOperationButton, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_buttons__WEBPACK_IMPORTED_MODULE_1__.FinishTaskButton, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_buttons__WEBPACK_IMPORTED_MODULE_1__.TrashButton, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, allOperations ? allOperations.map(function (Operation) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      key: Operation.id
    }, Operation);
  }) : null)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShowTasks);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("a8a5a0ea92cc206e615e")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC45N2I2NzI3NDQ3MjE0Njc0ZTAwZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ2lEO0FBQy9CO0FBRTVDLElBQU1LLFNBQVMsR0FBRyxTQUFaQSxTQUFTQSxDQUFBQyxJQUFBLEVBQWU7RUFBQSxJQUFWQyxJQUFJLEdBQUFELElBQUEsQ0FBSkMsSUFBSTtFQUVwQixJQUFBQyxTQUFBLEdBQTBDQyxRQUFRLENBQUMsS0FBSyxDQUFDO0lBQUFDLFVBQUEsR0FBQUMsY0FBQSxDQUFBSCxTQUFBO0lBQWxESSxhQUFhLEdBQUFGLFVBQUE7SUFBRUcsZ0JBQWdCLEdBQUFILFVBQUE7RUFDdENJLFNBQVMsQ0FBQyxZQUFNO0lBQ1pWLHlEQUFhLENBQUNTLGdCQUFnQixDQUFDO0VBQ25DLENBQUMsRUFBQyxDQUFDRCxhQUFhLENBQUMsQ0FBQztFQUVsQixvQkFDSVosMERBQUEsQ0FBQUEsdURBQUEscUJBQ0lBLDBEQUFBO0lBQVNpQixTQUFTLEVBQUM7RUFBcUIsZ0JBQ3BDakIsMERBQUE7SUFBS2lCLFNBQVMsRUFBQztFQUErRCxnQkFDMUVqQiwwREFBQSwyQkFDSUEsMERBQUEsYUFBS08sSUFBSSxDQUFDVyxLQUFVLENBQUMsZUFDckJsQiwwREFBQTtJQUFJaUIsU0FBUyxFQUFDO0VBQTBCLEdBQUVWLElBQUksQ0FBQ1ksV0FBZ0IsQ0FDOUQsQ0FBQyxlQUVObkIsMERBQUEsMkJBQ0lBLDBEQUFBLENBQUNHLHdEQUFrQixNQUFFLENBQUMsZUFDdEJILDBEQUFBLENBQUNFLHNEQUFnQixNQUFFLENBQUMsZUFDcEJGLDBEQUFBLENBQUNDLGlEQUFXLE1BQUUsQ0FDYixDQUNKLENBQUMsZUFDTkQsMERBQUEsYUFDS1ksYUFBYSxHQUFHQSxhQUFhLENBQUNRLEdBQUcsQ0FBQyxVQUFDQyxTQUFTO0lBQUEsb0JBQUtyQiwwREFBQTtNQUFJc0IsR0FBRyxFQUFFRCxTQUFTLENBQUNFO0lBQUcsR0FBRUYsU0FBYyxDQUFDO0VBQUEsRUFBQyxHQUFFLElBQzVGLENBQ0MsQ0FDWCxDQUFDO0FBRVgsQ0FBQztBQUVELGlFQUFlaEIsU0FBUzs7Ozs7Ozs7VUNsQ3hCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vanMvY29tcG9uZW50cy9zaG93dGFza3MuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7VHJhc2hCdXR0b24sIEZpbmlzaFRhc2tCdXR0b24sIEFkZE9wZXJhdGlvbkJ1dHRvbn0gZnJvbSBcIi4vYnV0dG9uc1wiXHJcbmltcG9ydCB7IGdldE9wZXJhdGlvbnMgfSBmcm9tIFwiLi9vcGVyYXRpb25cIjtcclxuXHJcbmNvbnN0IFNob3dUYXNrcyA9ICh7dGFza30pID0+IHtcclxuXHJcbiAgICBjb25zdCBbYWxsT3BlcmF0aW9ucywgc2V0QWxsT3BlcmF0aW9uc10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGdldE9wZXJhdGlvbnMoc2V0QWxsT3BlcmF0aW9ucylcclxuICAgIH0sW2FsbE9wZXJhdGlvbnNdKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY2FyZCBtdC01IHNoYWRvdy1zbVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlciBkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg1Pnt0YXNrLnRpdGxlfTwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJjYXJkLXN1YnRpdGxlIHRleHQtbXV0ZWRcIj57dGFzay5kZXNjcmlwdGlvbn08L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QWRkT3BlcmF0aW9uQnV0dG9uIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGaW5pc2hUYXNrQnV0dG9uIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFzaEJ1dHRvbiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAge2FsbE9wZXJhdGlvbnMgPyBhbGxPcGVyYXRpb25zLm1hcCgoT3BlcmF0aW9uKSA9PiA8bGkga2V5PXtPcGVyYXRpb24uaWR9PntPcGVyYXRpb259PC9saT4pOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaG93VGFza3M7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYThhNWEwZWE5MmNjMjA2ZTYxNWVcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJUcmFzaEJ1dHRvbiIsIkZpbmlzaFRhc2tCdXR0b24iLCJBZGRPcGVyYXRpb25CdXR0b24iLCJnZXRPcGVyYXRpb25zIiwiU2hvd1Rhc2tzIiwiX3JlZiIsInRhc2siLCJfdXNlU3RhdGUiLCJ1c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsImFsbE9wZXJhdGlvbnMiLCJzZXRBbGxPcGVyYXRpb25zIiwidXNlRWZmZWN0IiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwiY2xhc3NOYW1lIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsIm1hcCIsIk9wZXJhdGlvbiIsImtleSIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==