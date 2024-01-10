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
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var ShowTasks = function ShowTasks(_ref) {
  var task = _ref.task;
  console.log(task.id);
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "card mt-5 shadow-sm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "card-header d-flex justify-content-between align-items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h5", null, task.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h6", {
    className: "card-subtitle text-muted"
  }, task.description)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_buttons__WEBPACK_IMPORTED_MODULE_1__.AddOperationButton, {
    switcher: AddOpertaionSwitch
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_buttons__WEBPACK_IMPORTED_MODULE_1__.FinishTaskButton, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_buttons__WEBPACK_IMPORTED_MODULE_1__.TrashButton, null))), addNewOperation ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_forms__WEBPACK_IMPORTED_MODULE_4__.NewOperationForm, {
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
/******/ 	__webpack_require__.h = () => ("471acc7832c1405379b1")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5mOTQ3MzNmNDJhOTlmNmI1OTJlNC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDd0I7QUFDL0I7QUFDRTtBQUNOO0FBRXhDLElBQU1TLFNBQVMsR0FBRyxTQUFaQSxTQUFTQSxDQUFBQyxJQUFBLEVBQWU7RUFBQSxJQUFWQyxJQUFJLEdBQUFELElBQUEsQ0FBSkMsSUFBSTtFQUNwQkMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLElBQUksQ0FBQ0csRUFBRSxDQUFDO0VBQ3BCLElBQUFDLFNBQUEsR0FBMENiLCtDQUFRLENBQUMsS0FBSyxDQUFDO0lBQUFjLFVBQUEsR0FBQUMsY0FBQSxDQUFBRixTQUFBO0lBQWxERyxhQUFhLEdBQUFGLFVBQUE7SUFBRUcsZ0JBQWdCLEdBQUFILFVBQUE7RUFDdENmLGdEQUFTLENBQUMsWUFBTTtJQUNaSyx5REFBYSxDQUFDSyxJQUFJLENBQUNHLEVBQUUsRUFBQ0ssZ0JBQWdCLENBQUM7RUFDM0MsQ0FBQyxFQUFDLENBQUNELGFBQWEsQ0FBQyxDQUFDO0VBRWxCLElBQUFFLFVBQUEsR0FBOENsQiwrQ0FBUSxDQUFDLEtBQUssQ0FBQztJQUFBbUIsVUFBQSxHQUFBSixjQUFBLENBQUFHLFVBQUE7SUFBdERFLGVBQWUsR0FBQUQsVUFBQTtJQUFFRSxrQkFBa0IsR0FBQUYsVUFBQTtFQUUxQyxJQUFNRyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQWtCQSxDQUFBLEVBQVM7SUFDN0JELGtCQUFrQixDQUFDLENBQUNELGVBQWUsQ0FBQztFQUN4QyxDQUFDO0VBR0Qsb0JBQ0l0QiwwREFBQSxDQUFBQSx1REFBQSxxQkFDSUEsMERBQUE7SUFBUzJCLFNBQVMsRUFBQztFQUFxQixnQkFDcEMzQiwwREFBQTtJQUFLMkIsU0FBUyxFQUFDO0VBQStELGdCQUMxRTNCLDBEQUFBLDJCQUNJQSwwREFBQSxhQUFLVyxJQUFJLENBQUNpQixLQUFVLENBQUMsZUFDckI1QiwwREFBQTtJQUFJMkIsU0FBUyxFQUFDO0VBQTBCLEdBQUVoQixJQUFJLENBQUNrQixXQUFnQixDQUM5RCxDQUFDLGVBRU43QiwwREFBQSwyQkFDSUEsMERBQUEsQ0FBQ0ssd0RBQWtCO0lBQUN5QixRQUFRLEVBQUVOO0VBQW1CLENBQUMsQ0FBQyxlQUNuRHhCLDBEQUFBLENBQUNJLHNEQUFnQixNQUFFLENBQUMsZUFDcEJKLDBEQUFBLENBQUNHLGlEQUFXLE1BQUUsQ0FDYixDQUNKLENBQUMsRUFFTG1CLGVBQWUsZ0JBQUd0QiwwREFBQSxDQUFDUSxvREFBZ0I7SUFBQ3VCLE1BQU0sRUFBRXBCLElBQUksQ0FBQ0c7RUFBRyxDQUFDLENBQUMsR0FBRyxJQUFJLGVBRTlEZCwwREFBQTtJQUFJMkIsU0FBUyxFQUFDO0VBQTZCLEdBQ3RDVCxhQUFhLEdBQUdBLGFBQWEsQ0FBQ2MsR0FBRyxDQUFDLFVBQUNDLFNBQVM7SUFBQSxvQkFBS2pDLDBEQUFBLENBQUNPLHVEQUFjO01BQUMyQixHQUFHLEVBQUVELFNBQVMsQ0FBQ25CLEVBQUc7TUFBQ21CLFNBQVMsRUFBRUE7SUFBVSxDQUFDLENBQUM7RUFBQSxFQUFDLEdBQUUsSUFDL0csQ0FDQyxDQUNYLENBQUM7QUFFWCxDQUFDO0FBRUQsaUVBQWV4QixTQUFTOzs7Ozs7OztVQzlDeEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9qcy9jb21wb25lbnRzL3Nob3d0YXNrcy5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7VHJhc2hCdXR0b24sIEZpbmlzaFRhc2tCdXR0b24sIEFkZE9wZXJhdGlvbkJ1dHRvbn0gZnJvbSBcIi4vYnV0dG9uc1wiXHJcbmltcG9ydCB7IGdldE9wZXJhdGlvbnMgfSBmcm9tIFwiLi9vcGVyYXRpb25cIjtcclxuaW1wb3J0IFNob3dPcGVyYXRpb25zIGZyb20gXCIuL3Nob3dvcGVyYXRpb25zXCI7XHJcbmltcG9ydCB7TmV3T3BlcmF0aW9uRm9ybX0gZnJvbSBcIi4vZm9ybXNcIlxyXG5cclxuY29uc3QgU2hvd1Rhc2tzID0gKHt0YXNrfSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2codGFzay5pZClcclxuICAgIGNvbnN0IFthbGxPcGVyYXRpb25zLCBzZXRBbGxPcGVyYXRpb25zXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZ2V0T3BlcmF0aW9ucyh0YXNrLmlkLHNldEFsbE9wZXJhdGlvbnMpXHJcbiAgICB9LFthbGxPcGVyYXRpb25zXSlcclxuXHJcbiAgICBjb25zdCBbYWRkTmV3T3BlcmF0aW9uLCBzZXRBZGROZXdPcGVyYXRpb25dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgXHJcbiAgICBjb25zdCBBZGRPcGVydGFpb25Td2l0Y2ggPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0QWRkTmV3T3BlcmF0aW9uKCFhZGROZXdPcGVyYXRpb24pXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY2FyZCBtdC01IHNoYWRvdy1zbVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlciBkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg1Pnt0YXNrLnRpdGxlfTwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJjYXJkLXN1YnRpdGxlIHRleHQtbXV0ZWRcIj57dGFzay5kZXNjcmlwdGlvbn08L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QWRkT3BlcmF0aW9uQnV0dG9uIHN3aXRjaGVyPXtBZGRPcGVydGFpb25Td2l0Y2h9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZpbmlzaFRhc2tCdXR0b24gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYXNoQnV0dG9uIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICB7YWRkTmV3T3BlcmF0aW9uID8gPE5ld09wZXJhdGlvbkZvcm0gdGFza0lEPXt0YXNrLmlkfS8+IDogbnVsbH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAgbGlzdC1ncm91cC1mbHVzaFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHthbGxPcGVyYXRpb25zID8gYWxsT3BlcmF0aW9ucy5tYXAoKE9wZXJhdGlvbikgPT4gPFNob3dPcGVyYXRpb25zIGtleT17T3BlcmF0aW9uLmlkfSBPcGVyYXRpb249e09wZXJhdGlvbn0vPik6IG51bGx9XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNob3dUYXNrczsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI0NzFhY2M3ODMyYzE0MDUzNzliMVwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiVHJhc2hCdXR0b24iLCJGaW5pc2hUYXNrQnV0dG9uIiwiQWRkT3BlcmF0aW9uQnV0dG9uIiwiZ2V0T3BlcmF0aW9ucyIsIlNob3dPcGVyYXRpb25zIiwiTmV3T3BlcmF0aW9uRm9ybSIsIlNob3dUYXNrcyIsIl9yZWYiLCJ0YXNrIiwiY29uc29sZSIsImxvZyIsImlkIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwiYWxsT3BlcmF0aW9ucyIsInNldEFsbE9wZXJhdGlvbnMiLCJfdXNlU3RhdGUzIiwiX3VzZVN0YXRlNCIsImFkZE5ld09wZXJhdGlvbiIsInNldEFkZE5ld09wZXJhdGlvbiIsIkFkZE9wZXJ0YWlvblN3aXRjaCIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsImNsYXNzTmFtZSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJzd2l0Y2hlciIsInRhc2tJRCIsIm1hcCIsIk9wZXJhdGlvbiIsImtleSJdLCJzb3VyY2VSb290IjoiIn0=