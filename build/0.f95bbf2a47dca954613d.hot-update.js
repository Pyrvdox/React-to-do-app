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
    (0,_task__WEBPACK_IMPORTED_MODULE_5__.UpdateTasks)({
      status: "open"
    });
    console.log("da button", task.id);
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
/******/ 	__webpack_require__.h = () => ("59867a53260d5d7bbac6")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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anMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1RyYXNoQnV0dG9uLCBGaW5pc2hUYXNrQnV0dG9uLCBBZGRPcGVyYXRpb25CdXR0b259IGZyb20gXCIuL2J1dHRvbnNcIlxyXG5pbXBvcnQgeyBnZXRPcGVyYXRpb25zIH0gZnJvbSBcIi4vb3BlcmF0aW9uXCI7XHJcbmltcG9ydCBTaG93T3BlcmF0aW9ucyBmcm9tIFwiLi9zaG93b3BlcmF0aW9uc1wiO1xyXG5pbXBvcnQge05ld09wZXJhdGlvbkZvcm19IGZyb20gXCIuL2Zvcm1zXCJcclxuaW1wb3J0IHsgZGVsZXRlVGFza3MgfSBmcm9tIFwiLi90YXNrXCI7XHJcbmltcG9ydCB7IFVwZGF0ZVRhc2tzIH0gZnJvbSBcIi4vdGFza1wiO1xyXG5cclxuY29uc3QgU2hvd1Rhc2tzID0gKHt0YXNrfSkgPT4ge1xyXG4gICAgXHJcbiAgICBjb25zdCBbYWxsT3BlcmF0aW9ucywgc2V0QWxsT3BlcmF0aW9uc10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGdldE9wZXJhdGlvbnModGFzay5pZCxzZXRBbGxPcGVyYXRpb25zKVxyXG4gICAgfSxbYWxsT3BlcmF0aW9uc10pXHJcblxyXG4gICAgY29uc3QgW2FkZE5ld09wZXJhdGlvbiwgc2V0QWRkTmV3T3BlcmF0aW9uXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIFxyXG4gICAgY29uc3QgQWRkT3BlcnRhaW9uU3dpdGNoID0gKCkgPT4ge1xyXG4gICAgICAgIHNldEFkZE5ld09wZXJhdGlvbighYWRkTmV3T3BlcmF0aW9uKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IERlbGV0ZVRhc2sgPSAoKSA9PiB7XHJcbiAgICAgICAgZGVsZXRlVGFza3ModGFzay5pZClcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBVcGRhdGVUYXNrU3RhdHVzID0gKCkgPT4ge1xyXG4gICAgICAgIFVwZGF0ZVRhc2tzKHtzdGF0dXM6IFwib3BlblwifSlcclxuICAgICAgICBjb25zb2xlLmxvZyhcImRhIGJ1dHRvblwiLCB0YXNrLmlkKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY2FyZCBtdC01IHNoYWRvdy1zbVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlciBkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg1Pnt0YXNrLnRpdGxlfTwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJjYXJkLXN1YnRpdGxlIHRleHQtbXV0ZWRcIj57dGFzay5kZXNjcmlwdGlvbn08L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QWRkT3BlcmF0aW9uQnV0dG9uIHN3aXRjaGVyPXtBZGRPcGVydGFpb25Td2l0Y2h9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZpbmlzaFRhc2tCdXR0b24gZmluaXNoPXtVcGRhdGVUYXNrU3RhdHVzfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFzaEJ1dHRvbiBkZWxldGVBY3Rpb249e0RlbGV0ZVRhc2t9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAge2FkZE5ld09wZXJhdGlvbiA/IDxOZXdPcGVyYXRpb25Gb3JtIHRhc2tJRD17dGFzay5pZH0vPiA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LWdyb3VwIGxpc3QtZ3JvdXAtZmx1c2hcIj5cclxuICAgICAgICAgICAgICAgICAgICB7YWxsT3BlcmF0aW9ucyA/IGFsbE9wZXJhdGlvbnMubWFwKChPcGVyYXRpb24pID0+IDxTaG93T3BlcmF0aW9ucyBrZXk9e09wZXJhdGlvbi5pZH0gT3BlcmF0aW9uPXtPcGVyYXRpb259Lz4pOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaG93VGFza3M7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNTk4NjdhNTMyNjBkNWQ3YmJhYzZcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlRyYXNoQnV0dG9uIiwiRmluaXNoVGFza0J1dHRvbiIsIkFkZE9wZXJhdGlvbkJ1dHRvbiIsImdldE9wZXJhdGlvbnMiLCJTaG93T3BlcmF0aW9ucyIsIk5ld09wZXJhdGlvbkZvcm0iLCJkZWxldGVUYXNrcyIsIlVwZGF0ZVRhc2tzIiwiU2hvd1Rhc2tzIiwiX3JlZiIsInRhc2siLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJhbGxPcGVyYXRpb25zIiwic2V0QWxsT3BlcmF0aW9ucyIsImlkIiwiX3VzZVN0YXRlMyIsIl91c2VTdGF0ZTQiLCJhZGROZXdPcGVyYXRpb24iLCJzZXRBZGROZXdPcGVyYXRpb24iLCJBZGRPcGVydGFpb25Td2l0Y2giLCJEZWxldGVUYXNrIiwiVXBkYXRlVGFza1N0YXR1cyIsInN0YXR1cyIsImNvbnNvbGUiLCJsb2ciLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJjbGFzc05hbWUiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwic3dpdGNoZXIiLCJmaW5pc2giLCJkZWxldGVBY3Rpb24iLCJ0YXNrSUQiLCJtYXAiLCJPcGVyYXRpb24iLCJrZXkiXSwic291cmNlUm9vdCI6IiJ9