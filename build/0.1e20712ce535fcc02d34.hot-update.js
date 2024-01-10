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
/******/ 	__webpack_require__.h = () => ("d8ca5266c95328a3c4aa")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4xZTIwNzEyY2U1MzVmY2MwMmQzNC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ3dCO0FBQy9CO0FBQ0U7QUFDTjtBQUNIO0FBRXJDLElBQU1VLFNBQVMsR0FBRyxTQUFaQSxTQUFTQSxDQUFBQyxJQUFBLEVBQWU7RUFBQSxJQUFWQyxJQUFJLEdBQUFELElBQUEsQ0FBSkMsSUFBSTtFQUVwQixJQUFBQyxTQUFBLEdBQTBDWCwrQ0FBUSxDQUFDLEtBQUssQ0FBQztJQUFBWSxVQUFBLEdBQUFDLGNBQUEsQ0FBQUYsU0FBQTtJQUFsREcsYUFBYSxHQUFBRixVQUFBO0lBQUVHLGdCQUFnQixHQUFBSCxVQUFBO0VBQ3RDYixnREFBUyxDQUFDLFlBQU07SUFDWksseURBQWEsQ0FBQ00sSUFBSSxDQUFDTSxFQUFFLEVBQUNELGdCQUFnQixDQUFDO0VBQzNDLENBQUMsRUFBQyxDQUFDRCxhQUFhLENBQUMsQ0FBQztFQUVsQixJQUFBRyxVQUFBLEdBQThDakIsK0NBQVEsQ0FBQyxLQUFLLENBQUM7SUFBQWtCLFVBQUEsR0FBQUwsY0FBQSxDQUFBSSxVQUFBO0lBQXRERSxlQUFlLEdBQUFELFVBQUE7SUFBRUUsa0JBQWtCLEdBQUFGLFVBQUE7RUFFMUMsSUFBTUcsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFrQkEsQ0FBQSxFQUFTO0lBQzdCRCxrQkFBa0IsQ0FBQyxDQUFDRCxlQUFlLENBQUM7RUFDeEMsQ0FBQztFQUVELElBQU1HLFVBQVUsR0FBRyxTQUFiQSxVQUFVQSxDQUFBLEVBQVM7SUFDckJmLGtEQUFXLENBQUNHLElBQUksQ0FBQ00sRUFBRSxDQUFDO0VBQ3hCLENBQUM7RUFHRCxvQkFDSWxCLDBEQUFBLENBQUFBLHVEQUFBLHFCQUNJQSwwREFBQTtJQUFTMkIsU0FBUyxFQUFDO0VBQXFCLGdCQUNwQzNCLDBEQUFBO0lBQUsyQixTQUFTLEVBQUM7RUFBK0QsZ0JBQzFFM0IsMERBQUEsMkJBQ0lBLDBEQUFBLGFBQUtZLElBQUksQ0FBQ2dCLEtBQVUsQ0FBQyxlQUNyQjVCLDBEQUFBO0lBQUkyQixTQUFTLEVBQUM7RUFBMEIsR0FBRWYsSUFBSSxDQUFDaUIsV0FBZ0IsQ0FDOUQsQ0FBQyxlQUVON0IsMERBQUEsMkJBQ0lBLDBEQUFBLENBQUNLLHdEQUFrQjtJQUFDeUIsUUFBUSxFQUFFUDtFQUFtQixDQUFDLENBQUMsZUFDbkR2QiwwREFBQSxDQUFDSSxzREFBZ0IsTUFBRSxDQUFDLGVBQ3BCSiwwREFBQSxDQUFDRyxpREFBVyxNQUFFLENBQ2IsQ0FDSixDQUFDLEVBQ0xrQixlQUFlLGdCQUFHckIsMERBQUEsQ0FBQ1Esb0RBQWdCO0lBQUN1QixNQUFNLEVBQUVuQixJQUFJLENBQUNNO0VBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxlQUU5RGxCLDBEQUFBO0lBQUkyQixTQUFTLEVBQUM7RUFBNkIsR0FDdENYLGFBQWEsR0FBR0EsYUFBYSxDQUFDZ0IsR0FBRyxDQUFDLFVBQUNDLFNBQVM7SUFBQSxvQkFBS2pDLDBEQUFBLENBQUNPLHVEQUFjO01BQUMyQixHQUFHLEVBQUVELFNBQVMsQ0FBQ2YsRUFBRztNQUFDZSxTQUFTLEVBQUVBO0lBQVUsQ0FBQyxDQUFDO0VBQUEsRUFBQyxHQUFFLElBQy9HLENBQ0MsQ0FDWCxDQUFDO0FBRVgsQ0FBQztBQUVELGlFQUFldkIsU0FBUzs7Ozs7Ozs7VUNsRHhCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vanMvY29tcG9uZW50cy9zaG93dGFza3MuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1RyYXNoQnV0dG9uLCBGaW5pc2hUYXNrQnV0dG9uLCBBZGRPcGVyYXRpb25CdXR0b259IGZyb20gXCIuL2J1dHRvbnNcIlxyXG5pbXBvcnQgeyBnZXRPcGVyYXRpb25zIH0gZnJvbSBcIi4vb3BlcmF0aW9uXCI7XHJcbmltcG9ydCBTaG93T3BlcmF0aW9ucyBmcm9tIFwiLi9zaG93b3BlcmF0aW9uc1wiO1xyXG5pbXBvcnQge05ld09wZXJhdGlvbkZvcm19IGZyb20gXCIuL2Zvcm1zXCJcclxuaW1wb3J0IHsgZGVsZXRlVGFza3MgfSBmcm9tIFwiLi90YXNrXCI7XHJcblxyXG5jb25zdCBTaG93VGFza3MgPSAoe3Rhc2t9KSA9PiB7XHJcbiAgICBcclxuICAgIGNvbnN0IFthbGxPcGVyYXRpb25zLCBzZXRBbGxPcGVyYXRpb25zXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZ2V0T3BlcmF0aW9ucyh0YXNrLmlkLHNldEFsbE9wZXJhdGlvbnMpXHJcbiAgICB9LFthbGxPcGVyYXRpb25zXSlcclxuXHJcbiAgICBjb25zdCBbYWRkTmV3T3BlcmF0aW9uLCBzZXRBZGROZXdPcGVyYXRpb25dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgXHJcbiAgICBjb25zdCBBZGRPcGVydGFpb25Td2l0Y2ggPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0QWRkTmV3T3BlcmF0aW9uKCFhZGROZXdPcGVyYXRpb24pXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgRGVsZXRlVGFzayA9ICgpID0+IHtcclxuICAgICAgICBkZWxldGVUYXNrcyh0YXNrLmlkKVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNhcmQgbXQtNSBzaGFkb3ctc21cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXIgZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNT57dGFzay50aXRsZX08L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwiY2FyZC1zdWJ0aXRsZSB0ZXh0LW11dGVkXCI+e3Rhc2suZGVzY3JpcHRpb259PC9oNj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEFkZE9wZXJhdGlvbkJ1dHRvbiBzd2l0Y2hlcj17QWRkT3BlcnRhaW9uU3dpdGNofS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGaW5pc2hUYXNrQnV0dG9uIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFzaEJ1dHRvbiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7YWRkTmV3T3BlcmF0aW9uID8gPE5ld09wZXJhdGlvbkZvcm0gdGFza0lEPXt0YXNrLmlkfS8+IDogbnVsbH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAgbGlzdC1ncm91cC1mbHVzaFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHthbGxPcGVyYXRpb25zID8gYWxsT3BlcmF0aW9ucy5tYXAoKE9wZXJhdGlvbikgPT4gPFNob3dPcGVyYXRpb25zIGtleT17T3BlcmF0aW9uLmlkfSBPcGVyYXRpb249e09wZXJhdGlvbn0vPik6IG51bGx9XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNob3dUYXNrczsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJkOGNhNTI2NmM5NTMyOGEzYzRhYVwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiVHJhc2hCdXR0b24iLCJGaW5pc2hUYXNrQnV0dG9uIiwiQWRkT3BlcmF0aW9uQnV0dG9uIiwiZ2V0T3BlcmF0aW9ucyIsIlNob3dPcGVyYXRpb25zIiwiTmV3T3BlcmF0aW9uRm9ybSIsImRlbGV0ZVRhc2tzIiwiU2hvd1Rhc2tzIiwiX3JlZiIsInRhc2siLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJhbGxPcGVyYXRpb25zIiwic2V0QWxsT3BlcmF0aW9ucyIsImlkIiwiX3VzZVN0YXRlMyIsIl91c2VTdGF0ZTQiLCJhZGROZXdPcGVyYXRpb24iLCJzZXRBZGROZXdPcGVyYXRpb24iLCJBZGRPcGVydGFpb25Td2l0Y2giLCJEZWxldGVUYXNrIiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwiY2xhc3NOYW1lIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInN3aXRjaGVyIiwidGFza0lEIiwibWFwIiwiT3BlcmF0aW9uIiwia2V5Il0sInNvdXJjZVJvb3QiOiIifQ==