"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 35:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddOperationButton": () => (/* binding */ AddOperationButton),
/* harmony export */   "AddTimeButton": () => (/* binding */ AddTimeButton),
/* harmony export */   "DeleteOperationButton": () => (/* binding */ DeleteOperationButton),
/* harmony export */   "FinishTaskButton": () => (/* binding */ FinishTaskButton),
/* harmony export */   "NewTaskButton": () => (/* binding */ NewTaskButton),
/* harmony export */   "TrashButton": () => (/* binding */ TrashButton)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var NewTaskButton = function NewTaskButton() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "submit",
    className: "btn btn-info"
  }, "Add task", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: "fas fa-plus-circle ml-1"
  })));
};
var AddOperationButton = function AddOperationButton(_ref) {
  var switcher = _ref.switcher,
    addNewOperation = _ref.addNewOperation;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btn btn-info btn-sm mr-2",
    onClick: function onClick() {
      return switcher();
    }
  }, "Add operation", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: "fas fa-plus-circle ml-1"
  }), addNewOperation);
};
var FinishTaskButton = function FinishTaskButton(_ref2) {
  var finish = _ref2.finish;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btn btn-dark btn-sm",
    onClick: function onClick() {
      return finish();
    }
  }, "Finish", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: "fas fa-archive ml-1"
  }));
};
var TrashButton = function TrashButton(_ref3) {
  var deleteAction = _ref3.deleteAction;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btn btn-outline-danger btn-sm ml-2",
    onClick: function onClick() {
      return deleteAction();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: "fas fa-trash false"
  }));
};
var AddTimeButton = function AddTimeButton(_ref4) {
  var onAction = _ref4.onAction;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btn btn-outline-success btn-sm mr-2",
    onClick: function onClick() {
      return onAction();
    }
  }, "Add time", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: "fas fa-clock ml-1"
  }));
};
var DeleteOperationButton = function DeleteOperationButton(_ref5) {
  var deleteOpAction = _ref5.deleteOpAction;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btn btn-outline-danger btn-sm",
    onClick: function onClick() {
      return deleteOpAction();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: "fas fa-trash"
  }));
};

/***/ }),

/***/ 34:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35);
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37);
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



var NewTask = function NewTask() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      title: "",
      description: "",
      status: "open"
    }),
    _useState2 = _slicedToArray(_useState, 2),
    newTaskformData = _useState2[0],
    setNewTaskFormData = _useState2[1];
  var formSubmitHandler = function formSubmitHandler(e) {
    e.preventDefault();
    if (newTaskformData.title !== "") {
      (0,_task__WEBPACK_IMPORTED_MODULE_2__.AddTasks)(newTaskformData);
    }
    setNewTaskFormData({
      title: "",
      description: "",
      status: "open"
    });
  };
  var inputHandler = function inputHandler(e, type) {
    var value = e.target.value;
    switch (type) {
      case "title":
        setNewTaskFormData(function (prevState) {
          return _objectSpread(_objectSpread({}, prevState), {}, {
            title: value
          });
        });
        break;
      case "description":
        setNewTaskFormData(function (prevState) {
          return _objectSpread(_objectSpread({}, prevState), {}, {
            description: value
          });
        });
        break;
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "card shadow"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "card-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "card-title"
  }, "New task"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: formSubmitHandler
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    className: "form-control",
    name: "title",
    placeholder: "Title",
    value: newTaskformData.title,
    onChange: function onChange(e, type) {
      return inputHandler(e, "title");
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    className: "form-control",
    name: "description",
    placeholder: "Description",
    value: newTaskformData.description,
    onChange: function onChange(e, type) {
      return inputHandler(e, "description");
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_buttons__WEBPACK_IMPORTED_MODULE_1__.NewTaskButton, null)))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewTask);

/***/ }),

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
    (0,_operation__WEBPACK_IMPORTED_MODULE_3__.deleteSingleOperations)(Operation.id);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "list-group-item d-flex justify-content-between align-items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, Operation.description, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "badge badge-success badge-pill ml-2"
  }, Operation.timeSpent)), Operation.task.status == "open" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, showForm ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_forms__WEBPACK_IMPORTED_MODULE_2__.AddTimeForm, {
    cancelAddTime: HideAddTimeHandler,
    operationID: Operation.id
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_buttons__WEBPACK_IMPORTED_MODULE_1__.AddTimeButton, {
    onAction: ShowAddTimeHandler
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_buttons__WEBPACK_IMPORTED_MODULE_1__.DeleteOperationButton, {
    deleteOpAction: DeleteOperation
  }))) : null));
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
    (0,_task__WEBPACK_IMPORTED_MODULE_5__.UpdateTasks)(_objectSpread(_objectSpread({}, task), {}, {
      status: "closed"
    }), task.id);
    setAddNewOperation(false);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "card mt-5 shadow-sm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "card-header d-flex justify-content-between align-items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h5", null, task.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h6", {
    className: "card-subtitle text-muted"
  }, task.description)), task.status == "open" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_buttons__WEBPACK_IMPORTED_MODULE_1__.AddOperationButton, {
    switcher: AddOpertaionSwitch,
    addNewOperation: addNewOperation
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_buttons__WEBPACK_IMPORTED_MODULE_1__.FinishTaskButton, {
    finish: UpdateTaskStatus
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_buttons__WEBPACK_IMPORTED_MODULE_1__.TrashButton, {
    deleteAction: DeleteTask
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_buttons__WEBPACK_IMPORTED_MODULE_1__.TrashButton, {
    deleteAction: DeleteTask
  })), addNewOperation ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_forms__WEBPACK_IMPORTED_MODULE_4__.NewOperationForm, {
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
/******/ 	__webpack_require__.h = () => ("066b0c2a4f85a4082620")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RSxJQUMvRyxDQUNDLENBQ1gsQ0FBQztBQUVYLENBQUM7QUFFRCxpRUFBZWdCLFNBQVM7Ozs7Ozs7O1VDNUR4QiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uL2pzL2NvbXBvbmVudHMvYnV0dG9ucy5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9qcy9jb21wb25lbnRzL25ld3Rhc2suanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vanMvY29tcG9uZW50cy9zaG93b3BlcmF0aW9ucy5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9qcy9jb21wb25lbnRzL3Nob3d0YXNrcy5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgTmV3VGFza0J1dHRvbiA9ICgpID0+IHtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0biBidG4taW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgQWRkIHRhc2tcclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1wbHVzLWNpcmNsZSBtbC0xXCI+PC9pPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEFkZE9wZXJhdGlvbkJ1dHRvbiA9ICh7c3dpdGNoZXIsIGFkZE5ld09wZXJhdGlvbn0pID0+IHtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1pbmZvIGJ0bi1zbSBtci0yXCIgb25DbGljaz17KCk9PiBzd2l0Y2hlcigpfT5cclxuICAgICAgICAgICAgQWRkIG9wZXJhdGlvbiBcclxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXBsdXMtY2lyY2xlIG1sLTFcIj48L2k+XHJcbiAgICAgICAgICAgIHthZGROZXdPcGVyYXRpb259ICAgIFxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIFxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgRmluaXNoVGFza0J1dHRvbiA9ICh7ZmluaXNofSkgPT4ge1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWRhcmsgYnRuLXNtXCIgb25DbGljaz17KCkgPT4gZmluaXNoKCl9PlxyXG4gICAgICAgICAgICBGaW5pc2hcclxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWFyY2hpdmUgbWwtMVwiPjwvaT5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFRyYXNoQnV0dG9uID0gKHtkZWxldGVBY3Rpb259KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLWRhbmdlciBidG4tc20gbWwtMlwiIG9uQ2xpY2s9eygpPT4gZGVsZXRlQWN0aW9uKCl9PlxyXG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtdHJhc2ggZmFsc2VcIj48L2k+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBBZGRUaW1lQnV0dG9uID0gKHtvbkFjdGlvbn0pID0+IHtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXN1Y2Nlc3MgYnRuLXNtIG1yLTJcIiBvbkNsaWNrPXsoKT0+IG9uQWN0aW9uKCl9PlxyXG4gICAgICAgICAgICBBZGQgdGltZVxyXG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtY2xvY2sgbWwtMVwiPjwvaT5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IERlbGV0ZU9wZXJhdGlvbkJ1dHRvbiA9ICh7ZGVsZXRlT3BBY3Rpb259KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLWRhbmdlciBidG4tc21cIiBvbkNsaWNrPXsoKT0+IGRlbGV0ZU9wQWN0aW9uKCl9PjxpIGNsYXNzTmFtZT1cImZhcyBmYS10cmFzaFwiID48L2k+PC9idXR0b24+XHJcbiAgICApXHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBOZXdUYXNrQnV0dG9uIH0gZnJvbSBcIi4vYnV0dG9uc1wiO1xyXG5pbXBvcnQgeyBBZGRUYXNrcyB9IGZyb20gXCIuL3Rhc2tcIjtcclxuXHJcbmNvbnN0IE5ld1Rhc2sgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgW25ld1Rhc2tmb3JtRGF0YSwgc2V0TmV3VGFza0Zvcm1EYXRhXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICB0aXRsZTogXCJcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJcIixcclxuICAgICAgICBzdGF0dXM6IFwib3BlblwiXHJcbiAgICAgIH0pXHJcblxyXG4gICAgY29uc3QgZm9ybVN1Ym1pdEhhbmRsZXIgPSAoZSkgPT4gIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICBpZiAobmV3VGFza2Zvcm1EYXRhLnRpdGxlICE9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIEFkZFRhc2tzKG5ld1Rhc2tmb3JtRGF0YSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldE5ld1Rhc2tGb3JtRGF0YShcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJcIixcclxuICAgICAgICAgICAgICAgIHN0YXR1czogXCJvcGVuXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxuXHJcbiAgICBjb25zdCBpbnB1dEhhbmRsZXIgPSAoZSwgdHlwZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJ0aXRsZVwiOlxyXG4gICAgICAgICAgICAgICAgc2V0TmV3VGFza0Zvcm1EYXRhKChwcmV2U3RhdGUpPT4oey4uLnByZXZTdGF0ZSx0aXRsZTp2YWx1ZX0pKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiZGVzY3JpcHRpb25cIjpcclxuICAgICAgICAgICAgICAgIHNldE5ld1Rhc2tGb3JtRGF0YSgocHJldlN0YXRlKT0+KHsuLi5wcmV2U3RhdGUsZGVzY3JpcHRpb246dmFsdWV9KSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgc2hhZG93XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+TmV3IHRhc2s8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtmb3JtU3VibWl0SGFuZGxlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ0aXRsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUaXRsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e25ld1Rhc2tmb3JtRGF0YS50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUsIHR5cGUpID0+IGlucHV0SGFuZGxlcihlLCBcInRpdGxlXCIpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkRlc2NyaXB0aW9uXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e25ld1Rhc2tmb3JtRGF0YS5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUsIHR5cGUpID0+IGlucHV0SGFuZGxlcihlLCBcImRlc2NyaXB0aW9uXCIpfSAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE5ld1Rhc2tCdXR0b24vPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmV3VGFzazsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQWRkVGltZUJ1dHRvbiwgRGVsZXRlT3BlcmF0aW9uQnV0dG9uIH0gZnJvbSBcIi4vYnV0dG9uc1wiXHJcbmltcG9ydCB7IEFkZFRpbWVGb3JtIH0gZnJvbSBcIi4vZm9ybXNcIlxyXG5pbXBvcnQgeyBkZWxldGVTaW5nbGVPcGVyYXRpb25zIH0gZnJvbSBcIi4vb3BlcmF0aW9uXCI7XHJcblxyXG5jb25zdCBTaG93T3BlcmF0aW9ucyA9ICh7IE9wZXJhdGlvbiB9KSA9PiB7XHJcblxyXG4gICAgY29uc3QgW3Nob3dGb3JtLCBzZXRTaG93Rm9ybV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgU2hvd0FkZFRpbWVIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgICAgIHNldFNob3dGb3JtKHRydWUpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgSGlkZUFkZFRpbWVIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgICAgIHNldFNob3dGb3JtKGZhbHNlKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IERlbGV0ZU9wZXJhdGlvbiA9ICgpID0+IHtcclxuICAgICAgICBkZWxldGVTaW5nbGVPcGVyYXRpb25zKE9wZXJhdGlvbi5pZClcclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbSBkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHtPcGVyYXRpb24uZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmFkZ2UgYmFkZ2Utc3VjY2VzcyBiYWRnZS1waWxsIG1sLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge09wZXJhdGlvbi50aW1lU3BlbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7T3BlcmF0aW9uLnRhc2suc3RhdHVzID09IFwib3BlblwiID9cclxuICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7c2hvd0Zvcm0gPyA8QWRkVGltZUZvcm0gY2FuY2VsQWRkVGltZT17SGlkZUFkZFRpbWVIYW5kbGVyfSBvcGVyYXRpb25JRD17T3BlcmF0aW9uLmlkfSAvPiA6XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWRkVGltZUJ1dHRvbiBvbkFjdGlvbj17U2hvd0FkZFRpbWVIYW5kbGVyfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEZWxldGVPcGVyYXRpb25CdXR0b24gZGVsZXRlT3BBY3Rpb249e0RlbGV0ZU9wZXJhdGlvbn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgIG51bGxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNob3dPcGVyYXRpb25zOyIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7VHJhc2hCdXR0b24sIEZpbmlzaFRhc2tCdXR0b24sIEFkZE9wZXJhdGlvbkJ1dHRvbn0gZnJvbSBcIi4vYnV0dG9uc1wiXHJcbmltcG9ydCB7IGdldE9wZXJhdGlvbnMgfSBmcm9tIFwiLi9vcGVyYXRpb25cIjtcclxuaW1wb3J0IFNob3dPcGVyYXRpb25zIGZyb20gXCIuL3Nob3dvcGVyYXRpb25zXCI7XHJcbmltcG9ydCB7TmV3T3BlcmF0aW9uRm9ybX0gZnJvbSBcIi4vZm9ybXNcIlxyXG5pbXBvcnQgeyBkZWxldGVUYXNrcyB9IGZyb20gXCIuL3Rhc2tcIjtcclxuaW1wb3J0IHsgVXBkYXRlVGFza3MgfSBmcm9tIFwiLi90YXNrXCI7XHJcblxyXG5jb25zdCBTaG93VGFza3MgPSAoe3Rhc2t9KSA9PiB7XHJcbiAgICBcclxuICAgIGNvbnN0IFthbGxPcGVyYXRpb25zLCBzZXRBbGxPcGVyYXRpb25zXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZ2V0T3BlcmF0aW9ucyh0YXNrLmlkLHNldEFsbE9wZXJhdGlvbnMpXHJcbiAgICB9LFthbGxPcGVyYXRpb25zXSlcclxuXHJcbiAgICBjb25zdCBbYWRkTmV3T3BlcmF0aW9uLCBzZXRBZGROZXdPcGVyYXRpb25dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgXHJcbiAgICBjb25zdCBBZGRPcGVydGFpb25Td2l0Y2ggPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0QWRkTmV3T3BlcmF0aW9uKCFhZGROZXdPcGVyYXRpb24pXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgRGVsZXRlVGFzayA9ICgpID0+IHtcclxuICAgICAgICBkZWxldGVUYXNrcyh0YXNrLmlkKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IFVwZGF0ZVRhc2tTdGF0dXMgPSAoKSA9PiB7XHJcbiAgICAgICAgVXBkYXRlVGFza3Moey4uLnRhc2ssIHN0YXR1czpcImNsb3NlZFwifSx0YXNrLmlkKVxyXG4gICAgICAgIHNldEFkZE5ld09wZXJhdGlvbihmYWxzZSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNhcmQgbXQtNSBzaGFkb3ctc21cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXIgZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNT57dGFzay50aXRsZX08L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwiY2FyZC1zdWJ0aXRsZSB0ZXh0LW11dGVkXCI+e3Rhc2suZGVzY3JpcHRpb259PC9oNj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAge3Rhc2suc3RhdHVzID09IFwib3BlblwiID8gXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEFkZE9wZXJhdGlvbkJ1dHRvbiBzd2l0Y2hlcj17QWRkT3BlcnRhaW9uU3dpdGNofSBhZGROZXdPcGVyYXRpb249e2FkZE5ld09wZXJhdGlvbn0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RmluaXNoVGFza0J1dHRvbiBmaW5pc2g9e1VwZGF0ZVRhc2tTdGF0dXN9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYXNoQnV0dG9uIGRlbGV0ZUFjdGlvbj17RGVsZXRlVGFza30vPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICA8VHJhc2hCdXR0b24gZGVsZXRlQWN0aW9uPXtEZWxldGVUYXNrfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAge2FkZE5ld09wZXJhdGlvbiA/IDxOZXdPcGVyYXRpb25Gb3JtIHRhc2tJRD17dGFzay5pZH0vPiA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LWdyb3VwIGxpc3QtZ3JvdXAtZmx1c2hcIj5cclxuICAgICAgICAgICAgICAgICAgICB7YWxsT3BlcmF0aW9ucyA/IGFsbE9wZXJhdGlvbnMubWFwKChPcGVyYXRpb24pID0+IDxTaG93T3BlcmF0aW9ucyBrZXk9e09wZXJhdGlvbi5pZH0gT3BlcmF0aW9uPXtPcGVyYXRpb259Lz4pOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaG93VGFza3M7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMDY2YjBjMmE0Zjg1YTQwODI2MjBcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJOZXdUYXNrQnV0dG9uIiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwidHlwZSIsImNsYXNzTmFtZSIsIkFkZE9wZXJhdGlvbkJ1dHRvbiIsIl9yZWYiLCJzd2l0Y2hlciIsImFkZE5ld09wZXJhdGlvbiIsIm9uQ2xpY2siLCJGaW5pc2hUYXNrQnV0dG9uIiwiX3JlZjIiLCJmaW5pc2giLCJUcmFzaEJ1dHRvbiIsIl9yZWYzIiwiZGVsZXRlQWN0aW9uIiwiQWRkVGltZUJ1dHRvbiIsIl9yZWY0Iiwib25BY3Rpb24iLCJEZWxldGVPcGVyYXRpb25CdXR0b24iLCJfcmVmNSIsImRlbGV0ZU9wQWN0aW9uIiwidXNlU3RhdGUiLCJBZGRUYXNrcyIsIk5ld1Rhc2siLCJfdXNlU3RhdGUiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwic3RhdHVzIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwibmV3VGFza2Zvcm1EYXRhIiwic2V0TmV3VGFza0Zvcm1EYXRhIiwiZm9ybVN1Ym1pdEhhbmRsZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJpbnB1dEhhbmRsZXIiLCJ2YWx1ZSIsInRhcmdldCIsInByZXZTdGF0ZSIsIl9vYmplY3RTcHJlYWQiLCJvblN1Ym1pdCIsIm5hbWUiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwiQWRkVGltZUZvcm0iLCJkZWxldGVTaW5nbGVPcGVyYXRpb25zIiwiU2hvd09wZXJhdGlvbnMiLCJPcGVyYXRpb24iLCJzaG93Rm9ybSIsInNldFNob3dGb3JtIiwiU2hvd0FkZFRpbWVIYW5kbGVyIiwiSGlkZUFkZFRpbWVIYW5kbGVyIiwiRGVsZXRlT3BlcmF0aW9uIiwiaWQiLCJ0aW1lU3BlbnQiLCJ0YXNrIiwiY2FuY2VsQWRkVGltZSIsIm9wZXJhdGlvbklEIiwidXNlRWZmZWN0IiwiZ2V0T3BlcmF0aW9ucyIsIk5ld09wZXJhdGlvbkZvcm0iLCJkZWxldGVUYXNrcyIsIlVwZGF0ZVRhc2tzIiwiU2hvd1Rhc2tzIiwiYWxsT3BlcmF0aW9ucyIsInNldEFsbE9wZXJhdGlvbnMiLCJfdXNlU3RhdGUzIiwiX3VzZVN0YXRlNCIsInNldEFkZE5ld09wZXJhdGlvbiIsIkFkZE9wZXJ0YWlvblN3aXRjaCIsIkRlbGV0ZVRhc2siLCJVcGRhdGVUYXNrU3RhdHVzIiwidGFza0lEIiwibWFwIiwia2V5Il0sInNvdXJjZVJvb3QiOiIifQ==