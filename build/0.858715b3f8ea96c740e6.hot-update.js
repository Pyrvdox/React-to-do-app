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
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
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
    _task__WEBPACK_IMPORTED_MODULE_5__.UpdateTasks.apply(void 0, _toConsumableArray(task).concat([{
      status: "open"
    }]));
    console.log("da button", task.status);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "card mt-5 shadow-sm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "card-header d-flex justify-content-between align-items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h5", null, task.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h6", {
    className: "card-subtitle text-muted"
  }, task.description)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_buttons__WEBPACK_IMPORTED_MODULE_1__.AddOperationButton, {
    switcher: AddOpertaionSwitch
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_buttons__WEBPACK_IMPORTED_MODULE_1__.FinishTaskButton, {
    finish: UpdateTaskStatus
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_buttons__WEBPACK_IMPORTED_MODULE_1__.TrashButton, {
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
/******/ 	__webpack_require__.h = () => ("ede1c51548d34435ed5f")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Y2s6Ly9lczYtcmVhY3QvLi9qcy9jb21wb25lbnRzL3Nob3d0YXNrcy5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7VHJhc2hCdXR0b24sIEZpbmlzaFRhc2tCdXR0b24sIEFkZE9wZXJhdGlvbkJ1dHRvbn0gZnJvbSBcIi4vYnV0dG9uc1wiXHJcbmltcG9ydCB7IGdldE9wZXJhdGlvbnMgfSBmcm9tIFwiLi9vcGVyYXRpb25cIjtcclxuaW1wb3J0IFNob3dPcGVyYXRpb25zIGZyb20gXCIuL3Nob3dvcGVyYXRpb25zXCI7XHJcbmltcG9ydCB7TmV3T3BlcmF0aW9uRm9ybX0gZnJvbSBcIi4vZm9ybXNcIlxyXG5pbXBvcnQgeyBkZWxldGVUYXNrcyB9IGZyb20gXCIuL3Rhc2tcIjtcclxuaW1wb3J0IHsgVXBkYXRlVGFza3MgfSBmcm9tIFwiLi90YXNrXCI7XHJcblxyXG5jb25zdCBTaG93VGFza3MgPSAoe3Rhc2t9KSA9PiB7XHJcbiAgICBcclxuICAgIGNvbnN0IFthbGxPcGVyYXRpb25zLCBzZXRBbGxPcGVyYXRpb25zXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZ2V0T3BlcmF0aW9ucyh0YXNrLmlkLHNldEFsbE9wZXJhdGlvbnMpXHJcbiAgICB9LFthbGxPcGVyYXRpb25zXSlcclxuXHJcbiAgICBjb25zdCBbYWRkTmV3T3BlcmF0aW9uLCBzZXRBZGROZXdPcGVyYXRpb25dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgXHJcbiAgICBjb25zdCBBZGRPcGVydGFpb25Td2l0Y2ggPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0QWRkTmV3T3BlcmF0aW9uKCFhZGROZXdPcGVyYXRpb24pXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgRGVsZXRlVGFzayA9ICgpID0+IHtcclxuICAgICAgICBkZWxldGVUYXNrcyh0YXNrLmlkKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IFVwZGF0ZVRhc2tTdGF0dXMgPSAoKSA9PiB7XHJcbiAgICAgICAgVXBkYXRlVGFza3MoLi4udGFzayx7c3RhdHVzOiBcIm9wZW5cIn0pXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJkYSBidXR0b25cIiwgdGFzay5zdGF0dXMpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjYXJkIG10LTUgc2hhZG93LXNtXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDU+e3Rhc2sudGl0bGV9PC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cImNhcmQtc3VidGl0bGUgdGV4dC1tdXRlZFwiPnt0YXNrLmRlc2NyaXB0aW9ufTwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBZGRPcGVyYXRpb25CdXR0b24gc3dpdGNoZXI9e0FkZE9wZXJ0YWlvblN3aXRjaH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RmluaXNoVGFza0J1dHRvbiBmaW5pc2g9e1VwZGF0ZVRhc2tTdGF0dXN9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYXNoQnV0dG9uIGRlbGV0ZUFjdGlvbj17RGVsZXRlVGFza30vPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7YWRkTmV3T3BlcmF0aW9uID8gPE5ld09wZXJhdGlvbkZvcm0gdGFza0lEPXt0YXNrLmlkfS8+IDogbnVsbH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAgbGlzdC1ncm91cC1mbHVzaFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHthbGxPcGVyYXRpb25zID8gYWxsT3BlcmF0aW9ucy5tYXAoKE9wZXJhdGlvbikgPT4gPFNob3dPcGVyYXRpb25zIGtleT17T3BlcmF0aW9uLmlkfSBPcGVyYXRpb249e09wZXJhdGlvbn0vPik6IG51bGx9XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNob3dUYXNrczsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJlZGUxYzUxNTQ4ZDM0NDM1ZWQ1ZlwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiVHJhc2hCdXR0b24iLCJGaW5pc2hUYXNrQnV0dG9uIiwiQWRkT3BlcmF0aW9uQnV0dG9uIiwiZ2V0T3BlcmF0aW9ucyIsIlNob3dPcGVyYXRpb25zIiwiTmV3T3BlcmF0aW9uRm9ybSIsImRlbGV0ZVRhc2tzIiwiVXBkYXRlVGFza3MiLCJTaG93VGFza3MiLCJfcmVmIiwidGFzayIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsImFsbE9wZXJhdGlvbnMiLCJzZXRBbGxPcGVyYXRpb25zIiwiaWQiLCJfdXNlU3RhdGUzIiwiX3VzZVN0YXRlNCIsImFkZE5ld09wZXJhdGlvbiIsInNldEFkZE5ld09wZXJhdGlvbiIsIkFkZE9wZXJ0YWlvblN3aXRjaCIsIkRlbGV0ZVRhc2siLCJVcGRhdGVUYXNrU3RhdHVzIiwiYXBwbHkiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJjb25jYXQiLCJzdGF0dXMiLCJjb25zb2xlIiwibG9nIiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwiY2xhc3NOYW1lIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInN3aXRjaGVyIiwiZmluaXNoIiwiZGVsZXRlQWN0aW9uIiwidGFza0lEIiwibWFwIiwiT3BlcmF0aW9uIiwia2V5Il0sInNvdXJjZVJvb3QiOiIifQ==