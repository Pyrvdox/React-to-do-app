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
    //deleteSingleOperations(Operation.id, console.log(Operation.id))
    console.log("h3h3");
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
/******/ 	__webpack_require__.h = () => ("98c7fa8af08e08d592b4")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC45N2MyMTFiYWM4ZDZkNWQ0ZjE1Yy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF3QztBQUN3QjtBQUMzQjtBQUNnQjtBQUVyRCxJQUFNTSxjQUFjLEdBQUcsU0FBakJBLGNBQWNBLENBQUFDLElBQUEsRUFBc0I7RUFBQSxJQUFoQkMsU0FBUyxHQUFBRCxJQUFBLENBQVRDLFNBQVM7RUFFL0IsSUFBQUMsU0FBQSxHQUFnQ1IsK0NBQVEsQ0FBQyxLQUFLLENBQUM7SUFBQVMsVUFBQSxHQUFBQyxjQUFBLENBQUFGLFNBQUE7SUFBeENHLFFBQVEsR0FBQUYsVUFBQTtJQUFFRyxXQUFXLEdBQUFILFVBQUE7RUFFNUIsSUFBTUksa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFrQkEsQ0FBQSxFQUFTO0lBQzdCRCxXQUFXLENBQUMsSUFBSSxDQUFDO0VBQ3JCLENBQUM7RUFFRCxJQUFNRSxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQWtCQSxDQUFBLEVBQVM7SUFDN0JGLFdBQVcsQ0FBQyxLQUFLLENBQUM7RUFDdEIsQ0FBQztFQUVELElBQU1HLGVBQWUsR0FBRyxTQUFsQkEsZUFBZUEsQ0FBQSxFQUFTO0lBQzFCO0lBQ0FDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLE1BQU0sQ0FBQztFQUN2QixDQUFDO0VBR0Qsb0JBQ0lsQiwwREFBQSxDQUFBQSx1REFBQSxxQkFDSUEsMERBQUE7SUFBSXFCLFNBQVMsRUFBQztFQUFtRSxnQkFDN0VyQiwwREFBQSxjQUNLUSxTQUFTLENBQUNjLFdBQVcsZUFDdEJ0QiwwREFBQTtJQUFNcUIsU0FBUyxFQUFDO0VBQXFDLEdBQ2hEYixTQUFTLENBQUNlLFNBQ1QsQ0FDTCxDQUFDLEVBRUxYLFFBQVEsZ0JBQUdaLDBEQUFBLENBQUNJLCtDQUFXO0lBQUNvQixhQUFhLEVBQUVULGtCQUFtQjtJQUFDVSxXQUFXLEVBQUVqQixTQUFTLENBQUNrQjtFQUFHLENBQUMsQ0FBQyxnQkFDcEYxQiwwREFBQSwyQkFDSUEsMERBQUEsQ0FBQ0UsbURBQWE7SUFBQ3lCLFFBQVEsRUFBRWI7RUFBbUIsQ0FBQyxDQUFDLGVBQzlDZCwwREFBQSxDQUFDRywyREFBcUI7SUFBQ3lCLGNBQWMsRUFBRVo7RUFBZ0IsQ0FBQyxDQUN2RCxDQUVULENBQ04sQ0FBQztBQUdYLENBQUM7QUFFRCxpRUFBZVYsY0FBYzs7Ozs7Ozs7VUM3QzdCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vanMvY29tcG9uZW50cy9zaG93b3BlcmF0aW9ucy5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBBZGRUaW1lQnV0dG9uLCBEZWxldGVPcGVyYXRpb25CdXR0b24gfSBmcm9tIFwiLi9idXR0b25zXCJcclxuaW1wb3J0IHsgQWRkVGltZUZvcm0gfSBmcm9tIFwiLi9mb3Jtc1wiXHJcbmltcG9ydCB7IGRlbGV0ZVNpbmdsZU9wZXJhdGlvbnMgfSBmcm9tIFwiLi9vcGVyYXRpb25cIjtcclxuXHJcbmNvbnN0IFNob3dPcGVyYXRpb25zID0gKHsgT3BlcmF0aW9uIH0pID0+IHtcclxuXHJcbiAgICBjb25zdCBbc2hvd0Zvcm0sIHNldFNob3dGb3JtXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCBTaG93QWRkVGltZUhhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0U2hvd0Zvcm0odHJ1ZSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBIaWRlQWRkVGltZUhhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0U2hvd0Zvcm0oZmFsc2UpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgRGVsZXRlT3BlcmF0aW9uID0gKCkgPT4ge1xyXG4gICAgICAgIC8vZGVsZXRlU2luZ2xlT3BlcmF0aW9ucyhPcGVyYXRpb24uaWQsIGNvbnNvbGUubG9nKE9wZXJhdGlvbi5pZCkpXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJoM2gzXCIpXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbSBkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHtPcGVyYXRpb24uZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmFkZ2UgYmFkZ2Utc3VjY2VzcyBiYWRnZS1waWxsIG1sLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge09wZXJhdGlvbi50aW1lU3BlbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAge3Nob3dGb3JtID8gPEFkZFRpbWVGb3JtIGNhbmNlbEFkZFRpbWU9e0hpZGVBZGRUaW1lSGFuZGxlcn0gb3BlcmF0aW9uSUQ9e09wZXJhdGlvbi5pZH0vPiA6XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEFkZFRpbWVCdXR0b24gb25BY3Rpb249e1Nob3dBZGRUaW1lSGFuZGxlcn0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RGVsZXRlT3BlcmF0aW9uQnV0dG9uIGRlbGV0ZU9wQWN0aW9uPXtEZWxldGVPcGVyYXRpb259Lz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNob3dPcGVyYXRpb25zOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjk4YzdmYThhZjA4ZTA4ZDU5MmI0XCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJBZGRUaW1lQnV0dG9uIiwiRGVsZXRlT3BlcmF0aW9uQnV0dG9uIiwiQWRkVGltZUZvcm0iLCJkZWxldGVTaW5nbGVPcGVyYXRpb25zIiwiU2hvd09wZXJhdGlvbnMiLCJfcmVmIiwiT3BlcmF0aW9uIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5Iiwic2hvd0Zvcm0iLCJzZXRTaG93Rm9ybSIsIlNob3dBZGRUaW1lSGFuZGxlciIsIkhpZGVBZGRUaW1lSGFuZGxlciIsIkRlbGV0ZU9wZXJhdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJjbGFzc05hbWUiLCJkZXNjcmlwdGlvbiIsInRpbWVTcGVudCIsImNhbmNlbEFkZFRpbWUiLCJvcGVyYXRpb25JRCIsImlkIiwib25BY3Rpb24iLCJkZWxldGVPcEFjdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=