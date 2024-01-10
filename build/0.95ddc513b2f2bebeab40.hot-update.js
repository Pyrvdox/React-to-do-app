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
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
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
    (0,_task__WEBPACK_IMPORTED_MODULE_5__.UpdateTasks)(_objectSpread({}, task), {
      status: "closed"
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
/******/ 	__webpack_require__.h = () => ("34f65b93e72690e1d330")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Y3QvLi9qcy9jb21wb25lbnRzL3Nob3d0YXNrcy5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7VHJhc2hCdXR0b24sIEZpbmlzaFRhc2tCdXR0b24sIEFkZE9wZXJhdGlvbkJ1dHRvbn0gZnJvbSBcIi4vYnV0dG9uc1wiXHJcbmltcG9ydCB7IGdldE9wZXJhdGlvbnMgfSBmcm9tIFwiLi9vcGVyYXRpb25cIjtcclxuaW1wb3J0IFNob3dPcGVyYXRpb25zIGZyb20gXCIuL3Nob3dvcGVyYXRpb25zXCI7XHJcbmltcG9ydCB7TmV3T3BlcmF0aW9uRm9ybX0gZnJvbSBcIi4vZm9ybXNcIlxyXG5pbXBvcnQgeyBkZWxldGVUYXNrcyB9IGZyb20gXCIuL3Rhc2tcIjtcclxuaW1wb3J0IHsgVXBkYXRlVGFza3MgfSBmcm9tIFwiLi90YXNrXCI7XHJcblxyXG5jb25zdCBTaG93VGFza3MgPSAoe3Rhc2t9KSA9PiB7XHJcbiAgICBcclxuICAgIGNvbnN0IFthbGxPcGVyYXRpb25zLCBzZXRBbGxPcGVyYXRpb25zXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZ2V0T3BlcmF0aW9ucyh0YXNrLmlkLHNldEFsbE9wZXJhdGlvbnMpXHJcbiAgICB9LFthbGxPcGVyYXRpb25zXSlcclxuXHJcbiAgICBjb25zdCBbYWRkTmV3T3BlcmF0aW9uLCBzZXRBZGROZXdPcGVyYXRpb25dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgXHJcbiAgICBjb25zdCBBZGRPcGVydGFpb25Td2l0Y2ggPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0QWRkTmV3T3BlcmF0aW9uKCFhZGROZXdPcGVyYXRpb24pXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgRGVsZXRlVGFzayA9ICgpID0+IHtcclxuICAgICAgICBkZWxldGVUYXNrcyh0YXNrLmlkKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IFVwZGF0ZVRhc2tTdGF0dXMgPSAoKSA9PiB7XHJcbiAgICAgICAgVXBkYXRlVGFza3Moey4uLnRhc2t9LHtzdGF0dXM6IFwiY2xvc2VkXCJ9KVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZGEgYnV0dG9uXCIsIHRhc2suc3RhdHVzKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY2FyZCBtdC01IHNoYWRvdy1zbVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlciBkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg1Pnt0YXNrLnRpdGxlfTwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJjYXJkLXN1YnRpdGxlIHRleHQtbXV0ZWRcIj57dGFzay5kZXNjcmlwdGlvbn08L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QWRkT3BlcmF0aW9uQnV0dG9uIHN3aXRjaGVyPXtBZGRPcGVydGFpb25Td2l0Y2h9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZpbmlzaFRhc2tCdXR0b24gZmluaXNoPXtVcGRhdGVUYXNrU3RhdHVzfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFzaEJ1dHRvbiBkZWxldGVBY3Rpb249e0RlbGV0ZVRhc2t9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAge2FkZE5ld09wZXJhdGlvbiA/IDxOZXdPcGVyYXRpb25Gb3JtIHRhc2tJRD17dGFzay5pZH0vPiA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LWdyb3VwIGxpc3QtZ3JvdXAtZmx1c2hcIj5cclxuICAgICAgICAgICAgICAgICAgICB7YWxsT3BlcmF0aW9ucyA/IGFsbE9wZXJhdGlvbnMubWFwKChPcGVyYXRpb24pID0+IDxTaG93T3BlcmF0aW9ucyBrZXk9e09wZXJhdGlvbi5pZH0gT3BlcmF0aW9uPXtPcGVyYXRpb259Lz4pOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaG93VGFza3M7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMzRmNjViOTNlNzI2OTBlMWQzMzBcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlRyYXNoQnV0dG9uIiwiRmluaXNoVGFza0J1dHRvbiIsIkFkZE9wZXJhdGlvbkJ1dHRvbiIsImdldE9wZXJhdGlvbnMiLCJTaG93T3BlcmF0aW9ucyIsIk5ld09wZXJhdGlvbkZvcm0iLCJkZWxldGVUYXNrcyIsIlVwZGF0ZVRhc2tzIiwiU2hvd1Rhc2tzIiwiX3JlZiIsInRhc2siLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJhbGxPcGVyYXRpb25zIiwic2V0QWxsT3BlcmF0aW9ucyIsImlkIiwiX3VzZVN0YXRlMyIsIl91c2VTdGF0ZTQiLCJhZGROZXdPcGVyYXRpb24iLCJzZXRBZGROZXdPcGVyYXRpb24iLCJBZGRPcGVydGFpb25Td2l0Y2giLCJEZWxldGVUYXNrIiwiVXBkYXRlVGFza1N0YXR1cyIsIl9vYmplY3RTcHJlYWQiLCJzdGF0dXMiLCJjb25zb2xlIiwibG9nIiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwiY2xhc3NOYW1lIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInN3aXRjaGVyIiwiZmluaXNoIiwiZGVsZXRlQWN0aW9uIiwidGFza0lEIiwibWFwIiwiT3BlcmF0aW9uIiwia2V5Il0sInNvdXJjZVJvb3QiOiIifQ==