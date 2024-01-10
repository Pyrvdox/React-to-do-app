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
    (0,_operation__WEBPACK_IMPORTED_MODULE_3__.deleteSingleOperations)(Operation.id, console.log(Operation.id));
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
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_buttons__WEBPACK_IMPORTED_MODULE_1__.DeleteOperationButton, null))));
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
    (0,_task__WEBPACK_IMPORTED_MODULE_5__.deleteTasks)(console.log(task.id), task.id);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "card mt-5 shadow-sm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "card-header d-flex justify-content-between align-items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h5", null, task.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h6", {
    className: "card-subtitle text-muted"
  }, task.description)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_buttons__WEBPACK_IMPORTED_MODULE_1__.AddOperationButton, {
    switcher: AddOpertaionSwitch
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_buttons__WEBPACK_IMPORTED_MODULE_1__.FinishTaskButton, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_buttons__WEBPACK_IMPORTED_MODULE_1__.TrashButton, {
    deleteAction: DeleteTask
  }))), addNewOperation ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_forms__WEBPACK_IMPORTED_MODULE_4__.NewOperationForm, {
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
/******/ 	__webpack_require__.h = () => ("da18f17cc14c3b5f2045")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4wZGJmOGM1OGFjODg2MzY3MDE2Yi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF3QztBQUN3QjtBQUMzQjtBQUNnQjtBQUVyRCxJQUFNTSxjQUFjLEdBQUcsU0FBakJBLGNBQWNBLENBQUFDLElBQUEsRUFBc0I7RUFBQSxJQUFoQkMsU0FBUyxHQUFBRCxJQUFBLENBQVRDLFNBQVM7RUFFL0IsSUFBQUMsU0FBQSxHQUFnQ1IsK0NBQVEsQ0FBQyxLQUFLLENBQUM7SUFBQVMsVUFBQSxHQUFBQyxjQUFBLENBQUFGLFNBQUE7SUFBeENHLFFBQVEsR0FBQUYsVUFBQTtJQUFFRyxXQUFXLEdBQUFILFVBQUE7RUFFNUIsSUFBTUksa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFrQkEsQ0FBQSxFQUFTO0lBQzdCRCxXQUFXLENBQUMsSUFBSSxDQUFDO0VBQ3JCLENBQUM7RUFFRCxJQUFNRSxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQWtCQSxDQUFBLEVBQVM7SUFDN0JGLFdBQVcsQ0FBQyxLQUFLLENBQUM7RUFDdEIsQ0FBQztFQUVELElBQU1HLGVBQWUsR0FBRyxTQUFsQkEsZUFBZUEsQ0FBQSxFQUFTO0lBQzFCWCxrRUFBc0IsQ0FBQ0csU0FBUyxDQUFDUyxFQUFFLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDWCxTQUFTLENBQUNTLEVBQUUsQ0FBQyxDQUFDO0VBQ25FLENBQUM7RUFFRCxvQkFDSWpCLDBEQUFBLENBQUFBLHVEQUFBLHFCQUNJQSwwREFBQTtJQUFJc0IsU0FBUyxFQUFDO0VBQW1FLGdCQUM3RXRCLDBEQUFBLGNBQ0tRLFNBQVMsQ0FBQ2UsV0FBVyxlQUN0QnZCLDBEQUFBO0lBQU1zQixTQUFTLEVBQUM7RUFBcUMsR0FDaERkLFNBQVMsQ0FBQ2dCLFNBQ1QsQ0FDTCxDQUFDLEVBRUxaLFFBQVEsZ0JBQUdaLDBEQUFBLENBQUNJLCtDQUFXO0lBQUNxQixhQUFhLEVBQUVWLGtCQUFtQjtJQUFDVyxXQUFXLEVBQUVsQixTQUFTLENBQUNTO0VBQUcsQ0FBQyxDQUFDLGdCQUNwRmpCLDBEQUFBLDJCQUNJQSwwREFBQSxDQUFDRSxtREFBYTtJQUFDeUIsUUFBUSxFQUFFYjtFQUFtQixDQUFDLENBQUMsZUFDOUNkLDBEQUFBLENBQUNHLDJEQUFxQixNQUFFLENBQ3ZCLENBRVQsQ0FDTixDQUFDO0FBR1gsQ0FBQztBQUVELGlFQUFlRyxjQUFjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQ3NCO0FBQ3dCO0FBQy9CO0FBQ0U7QUFDTjtBQUNIO0FBRXJDLElBQU02QixTQUFTLEdBQUcsU0FBWkEsU0FBU0EsQ0FBQTVCLElBQUEsRUFBZTtFQUFBLElBQVY2QixJQUFJLEdBQUE3QixJQUFBLENBQUo2QixJQUFJO0VBRXBCLElBQUEzQixTQUFBLEdBQTBDUiwrQ0FBUSxDQUFDLEtBQUssQ0FBQztJQUFBUyxVQUFBLEdBQUFDLGNBQUEsQ0FBQUYsU0FBQTtJQUFsRDRCLGFBQWEsR0FBQTNCLFVBQUE7SUFBRTRCLGdCQUFnQixHQUFBNUIsVUFBQTtFQUN0Q2tCLGdEQUFTLENBQUMsWUFBTTtJQUNaSSx5REFBYSxDQUFDSSxJQUFJLENBQUNuQixFQUFFLEVBQUNxQixnQkFBZ0IsQ0FBQztFQUMzQyxDQUFDLEVBQUMsQ0FBQ0QsYUFBYSxDQUFDLENBQUM7RUFFbEIsSUFBQUUsVUFBQSxHQUE4Q3RDLCtDQUFRLENBQUMsS0FBSyxDQUFDO0lBQUF1QyxVQUFBLEdBQUE3QixjQUFBLENBQUE0QixVQUFBO0lBQXRERSxlQUFlLEdBQUFELFVBQUE7SUFBRUUsa0JBQWtCLEdBQUFGLFVBQUE7RUFFMUMsSUFBTUcsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFrQkEsQ0FBQSxFQUFTO0lBQzdCRCxrQkFBa0IsQ0FBQyxDQUFDRCxlQUFlLENBQUM7RUFDeEMsQ0FBQztFQUVELElBQU1HLFVBQVUsR0FBRyxTQUFiQSxVQUFVQSxDQUFBLEVBQVM7SUFDckJWLGtEQUFXLENBQUNoQixPQUFPLENBQUNDLEdBQUcsQ0FBQ2lCLElBQUksQ0FBQ25CLEVBQUUsQ0FBQyxFQUFDbUIsSUFBSSxDQUFDbkIsRUFBRSxDQUFDO0VBQzdDLENBQUM7RUFHRCxvQkFDSWpCLDBEQUFBLENBQUFBLHVEQUFBLHFCQUNJQSwwREFBQTtJQUFTc0IsU0FBUyxFQUFDO0VBQXFCLGdCQUNwQ3RCLDBEQUFBO0lBQUtzQixTQUFTLEVBQUM7RUFBK0QsZ0JBQzFFdEIsMERBQUEsMkJBQ0lBLDBEQUFBLGFBQUtvQyxJQUFJLENBQUNTLEtBQVUsQ0FBQyxlQUNyQjdDLDBEQUFBO0lBQUlzQixTQUFTLEVBQUM7RUFBMEIsR0FBRWMsSUFBSSxDQUFDYixXQUFnQixDQUM5RCxDQUFDLGVBRU52QiwwREFBQSwyQkFDSUEsMERBQUEsQ0FBQytCLHdEQUFrQjtJQUFDZSxRQUFRLEVBQUVIO0VBQW1CLENBQUMsQ0FBQyxlQUNuRDNDLDBEQUFBLENBQUM4QixzREFBZ0IsTUFBRSxDQUFDLGVBQ3BCOUIsMERBQUEsQ0FBQzZCLGlEQUFXO0lBQUNrQixZQUFZLEVBQUVIO0VBQVcsQ0FBQyxDQUN0QyxDQUNKLENBQUMsRUFDTEgsZUFBZSxnQkFBR3pDLDBEQUFBLENBQUNpQyxvREFBZ0I7SUFBQ2UsTUFBTSxFQUFFWixJQUFJLENBQUNuQjtFQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksZUFFOURqQiwwREFBQTtJQUFJc0IsU0FBUyxFQUFDO0VBQTZCLEdBQ3RDZSxhQUFhLEdBQUdBLGFBQWEsQ0FBQ1ksR0FBRyxDQUFDLFVBQUN6QyxTQUFTO0lBQUEsb0JBQUtSLDBEQUFBLENBQUNNLHVEQUFjO01BQUM0QyxHQUFHLEVBQUUxQyxTQUFTLENBQUNTLEVBQUc7TUFBQ1QsU0FBUyxFQUFFQTtJQUFVLENBQUMsQ0FBQztFQUFBLEVBQUMsR0FBRSxJQUMvRyxDQUNDLENBQ1gsQ0FBQztBQUVYLENBQUM7QUFFRCxpRUFBZTJCLFNBQVM7Ozs7Ozs7O1VDbER4QiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uL2pzL2NvbXBvbmVudHMvc2hvd29wZXJhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vanMvY29tcG9uZW50cy9zaG93dGFza3MuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQWRkVGltZUJ1dHRvbiwgRGVsZXRlT3BlcmF0aW9uQnV0dG9uIH0gZnJvbSBcIi4vYnV0dG9uc1wiXHJcbmltcG9ydCB7IEFkZFRpbWVGb3JtIH0gZnJvbSBcIi4vZm9ybXNcIlxyXG5pbXBvcnQgeyBkZWxldGVTaW5nbGVPcGVyYXRpb25zIH0gZnJvbSBcIi4vb3BlcmF0aW9uXCI7XHJcblxyXG5jb25zdCBTaG93T3BlcmF0aW9ucyA9ICh7IE9wZXJhdGlvbiB9KSA9PiB7XHJcblxyXG4gICAgY29uc3QgW3Nob3dGb3JtLCBzZXRTaG93Rm9ybV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgU2hvd0FkZFRpbWVIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgICAgIHNldFNob3dGb3JtKHRydWUpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgSGlkZUFkZFRpbWVIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgICAgIHNldFNob3dGb3JtKGZhbHNlKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IERlbGV0ZU9wZXJhdGlvbiA9ICgpID0+IHtcclxuICAgICAgICBkZWxldGVTaW5nbGVPcGVyYXRpb25zKE9wZXJhdGlvbi5pZCwgY29uc29sZS5sb2coT3BlcmF0aW9uLmlkKSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW0gZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICB7T3BlcmF0aW9uLmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJhZGdlIGJhZGdlLXN1Y2Nlc3MgYmFkZ2UtcGlsbCBtbC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtPcGVyYXRpb24udGltZVNwZW50fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIHtzaG93Rm9ybSA/IDxBZGRUaW1lRm9ybSBjYW5jZWxBZGRUaW1lPXtIaWRlQWRkVGltZUhhbmRsZXJ9IG9wZXJhdGlvbklEPXtPcGVyYXRpb24uaWR9Lz4gOlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBZGRUaW1lQnV0dG9uIG9uQWN0aW9uPXtTaG93QWRkVGltZUhhbmRsZXJ9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPERlbGV0ZU9wZXJhdGlvbkJ1dHRvbiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hvd09wZXJhdGlvbnM7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtUcmFzaEJ1dHRvbiwgRmluaXNoVGFza0J1dHRvbiwgQWRkT3BlcmF0aW9uQnV0dG9ufSBmcm9tIFwiLi9idXR0b25zXCJcclxuaW1wb3J0IHsgZ2V0T3BlcmF0aW9ucyB9IGZyb20gXCIuL29wZXJhdGlvblwiO1xyXG5pbXBvcnQgU2hvd09wZXJhdGlvbnMgZnJvbSBcIi4vc2hvd29wZXJhdGlvbnNcIjtcclxuaW1wb3J0IHtOZXdPcGVyYXRpb25Gb3JtfSBmcm9tIFwiLi9mb3Jtc1wiXHJcbmltcG9ydCB7IGRlbGV0ZVRhc2tzIH0gZnJvbSBcIi4vdGFza1wiO1xyXG5cclxuY29uc3QgU2hvd1Rhc2tzID0gKHt0YXNrfSkgPT4ge1xyXG4gICAgXHJcbiAgICBjb25zdCBbYWxsT3BlcmF0aW9ucywgc2V0QWxsT3BlcmF0aW9uc10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGdldE9wZXJhdGlvbnModGFzay5pZCxzZXRBbGxPcGVyYXRpb25zKVxyXG4gICAgfSxbYWxsT3BlcmF0aW9uc10pXHJcblxyXG4gICAgY29uc3QgW2FkZE5ld09wZXJhdGlvbiwgc2V0QWRkTmV3T3BlcmF0aW9uXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIFxyXG4gICAgY29uc3QgQWRkT3BlcnRhaW9uU3dpdGNoID0gKCkgPT4ge1xyXG4gICAgICAgIHNldEFkZE5ld09wZXJhdGlvbighYWRkTmV3T3BlcmF0aW9uKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IERlbGV0ZVRhc2sgPSAoKSA9PiB7XHJcbiAgICAgICAgZGVsZXRlVGFza3MoY29uc29sZS5sb2codGFzay5pZCksdGFzay5pZClcclxuICAgIH1cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjYXJkIG10LTUgc2hhZG93LXNtXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDU+e3Rhc2sudGl0bGV9PC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cImNhcmQtc3VidGl0bGUgdGV4dC1tdXRlZFwiPnt0YXNrLmRlc2NyaXB0aW9ufTwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBZGRPcGVyYXRpb25CdXR0b24gc3dpdGNoZXI9e0FkZE9wZXJ0YWlvblN3aXRjaH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RmluaXNoVGFza0J1dHRvbiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhc2hCdXR0b24gZGVsZXRlQWN0aW9uPXtEZWxldGVUYXNrfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHthZGROZXdPcGVyYXRpb24gPyA8TmV3T3BlcmF0aW9uRm9ybSB0YXNrSUQ9e3Rhc2suaWR9Lz4gOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC1ncm91cCBsaXN0LWdyb3VwLWZsdXNoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2FsbE9wZXJhdGlvbnMgPyBhbGxPcGVyYXRpb25zLm1hcCgoT3BlcmF0aW9uKSA9PiA8U2hvd09wZXJhdGlvbnMga2V5PXtPcGVyYXRpb24uaWR9IE9wZXJhdGlvbj17T3BlcmF0aW9ufS8+KTogbnVsbH1cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hvd1Rhc2tzOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImRhMThmMTdjYzE0YzNiNWYyMDQ1XCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJBZGRUaW1lQnV0dG9uIiwiRGVsZXRlT3BlcmF0aW9uQnV0dG9uIiwiQWRkVGltZUZvcm0iLCJkZWxldGVTaW5nbGVPcGVyYXRpb25zIiwiU2hvd09wZXJhdGlvbnMiLCJfcmVmIiwiT3BlcmF0aW9uIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5Iiwic2hvd0Zvcm0iLCJzZXRTaG93Rm9ybSIsIlNob3dBZGRUaW1lSGFuZGxlciIsIkhpZGVBZGRUaW1lSGFuZGxlciIsIkRlbGV0ZU9wZXJhdGlvbiIsImlkIiwiY29uc29sZSIsImxvZyIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsImNsYXNzTmFtZSIsImRlc2NyaXB0aW9uIiwidGltZVNwZW50IiwiY2FuY2VsQWRkVGltZSIsIm9wZXJhdGlvbklEIiwib25BY3Rpb24iLCJ1c2VFZmZlY3QiLCJUcmFzaEJ1dHRvbiIsIkZpbmlzaFRhc2tCdXR0b24iLCJBZGRPcGVyYXRpb25CdXR0b24iLCJnZXRPcGVyYXRpb25zIiwiTmV3T3BlcmF0aW9uRm9ybSIsImRlbGV0ZVRhc2tzIiwiU2hvd1Rhc2tzIiwidGFzayIsImFsbE9wZXJhdGlvbnMiLCJzZXRBbGxPcGVyYXRpb25zIiwiX3VzZVN0YXRlMyIsIl91c2VTdGF0ZTQiLCJhZGROZXdPcGVyYXRpb24iLCJzZXRBZGROZXdPcGVyYXRpb24iLCJBZGRPcGVydGFpb25Td2l0Y2giLCJEZWxldGVUYXNrIiwidGl0bGUiLCJzd2l0Y2hlciIsImRlbGV0ZUFjdGlvbiIsInRhc2tJRCIsIm1hcCIsImtleSJdLCJzb3VyY2VSb290IjoiIn0=