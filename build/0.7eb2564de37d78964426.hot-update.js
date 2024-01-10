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
  var UpdateTaskStatus = function UpdateTaskStatus() {
    (0,_task__WEBPACK_IMPORTED_MODULE_5__.UpdateTasks)(task, {
      status: "open"
    });
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
/******/ 	__webpack_require__.h = () => ("858715b3f8ea96c740e6")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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c2hvd3Rhc2tzLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtUcmFzaEJ1dHRvbiwgRmluaXNoVGFza0J1dHRvbiwgQWRkT3BlcmF0aW9uQnV0dG9ufSBmcm9tIFwiLi9idXR0b25zXCJcclxuaW1wb3J0IHsgZ2V0T3BlcmF0aW9ucyB9IGZyb20gXCIuL29wZXJhdGlvblwiO1xyXG5pbXBvcnQgU2hvd09wZXJhdGlvbnMgZnJvbSBcIi4vc2hvd29wZXJhdGlvbnNcIjtcclxuaW1wb3J0IHtOZXdPcGVyYXRpb25Gb3JtfSBmcm9tIFwiLi9mb3Jtc1wiXHJcbmltcG9ydCB7IGRlbGV0ZVRhc2tzIH0gZnJvbSBcIi4vdGFza1wiO1xyXG5pbXBvcnQgeyBVcGRhdGVUYXNrcyB9IGZyb20gXCIuL3Rhc2tcIjtcclxuXHJcbmNvbnN0IFNob3dUYXNrcyA9ICh7dGFza30pID0+IHtcclxuICAgIFxyXG4gICAgY29uc3QgW2FsbE9wZXJhdGlvbnMsIHNldEFsbE9wZXJhdGlvbnNdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBnZXRPcGVyYXRpb25zKHRhc2suaWQsc2V0QWxsT3BlcmF0aW9ucylcclxuICAgIH0sW2FsbE9wZXJhdGlvbnNdKVxyXG5cclxuICAgIGNvbnN0IFthZGROZXdPcGVyYXRpb24sIHNldEFkZE5ld09wZXJhdGlvbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBcclxuICAgIGNvbnN0IEFkZE9wZXJ0YWlvblN3aXRjaCA9ICgpID0+IHtcclxuICAgICAgICBzZXRBZGROZXdPcGVyYXRpb24oIWFkZE5ld09wZXJhdGlvbilcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBEZWxldGVUYXNrID0gKCkgPT4ge1xyXG4gICAgICAgIGRlbGV0ZVRhc2tzKHRhc2suaWQpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgVXBkYXRlVGFza1N0YXR1cyA9ICgpID0+IHtcclxuICAgICAgICBVcGRhdGVUYXNrcyh0YXNrLHtzdGF0dXM6IFwib3BlblwifSlcclxuICAgICAgICBjb25zb2xlLmxvZyhcImRhIGJ1dHRvblwiLCB0YXNrLnN0YXR1cylcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNhcmQgbXQtNSBzaGFkb3ctc21cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXIgZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNT57dGFzay50aXRsZX08L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwiY2FyZC1zdWJ0aXRsZSB0ZXh0LW11dGVkXCI+e3Rhc2suZGVzY3JpcHRpb259PC9oNj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEFkZE9wZXJhdGlvbkJ1dHRvbiBzd2l0Y2hlcj17QWRkT3BlcnRhaW9uU3dpdGNofS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGaW5pc2hUYXNrQnV0dG9uIGZpbmlzaD17VXBkYXRlVGFza1N0YXR1c30vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhc2hCdXR0b24gZGVsZXRlQWN0aW9uPXtEZWxldGVUYXNrfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHthZGROZXdPcGVyYXRpb24gPyA8TmV3T3BlcmF0aW9uRm9ybSB0YXNrSUQ9e3Rhc2suaWR9Lz4gOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC1ncm91cCBsaXN0LWdyb3VwLWZsdXNoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2FsbE9wZXJhdGlvbnMgPyBhbGxPcGVyYXRpb25zLm1hcCgoT3BlcmF0aW9uKSA9PiA8U2hvd09wZXJhdGlvbnMga2V5PXtPcGVyYXRpb24uaWR9IE9wZXJhdGlvbj17T3BlcmF0aW9ufS8+KTogbnVsbH1cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hvd1Rhc2tzOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjg1ODcxNWIzZjhlYTk2Yzc0MGU2XCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJUcmFzaEJ1dHRvbiIsIkZpbmlzaFRhc2tCdXR0b24iLCJBZGRPcGVyYXRpb25CdXR0b24iLCJnZXRPcGVyYXRpb25zIiwiU2hvd09wZXJhdGlvbnMiLCJOZXdPcGVyYXRpb25Gb3JtIiwiZGVsZXRlVGFza3MiLCJVcGRhdGVUYXNrcyIsIlNob3dUYXNrcyIsIl9yZWYiLCJ0YXNrIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwiYWxsT3BlcmF0aW9ucyIsInNldEFsbE9wZXJhdGlvbnMiLCJpZCIsIl91c2VTdGF0ZTMiLCJfdXNlU3RhdGU0IiwiYWRkTmV3T3BlcmF0aW9uIiwic2V0QWRkTmV3T3BlcmF0aW9uIiwiQWRkT3BlcnRhaW9uU3dpdGNoIiwiRGVsZXRlVGFzayIsIlVwZGF0ZVRhc2tTdGF0dXMiLCJzdGF0dXMiLCJjb25zb2xlIiwibG9nIiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwiY2xhc3NOYW1lIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInN3aXRjaGVyIiwiZmluaXNoIiwiZGVsZXRlQWN0aW9uIiwidGFza0lEIiwibWFwIiwiT3BlcmF0aW9uIiwia2V5Il0sInNvdXJjZVJvb3QiOiIifQ==