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
  }, addNewOperation ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, "Close ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: "fas fa-minus-circle ml-1"
  }), " ") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, "Add operation ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: "fas fa-plus-circle ml-1"
  })));
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
/******/ 	__webpack_require__.h = () => ("e70b4cb28eea102f725f")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMxQixTQUFTO0lBQUEsb0JBQUtqRCwwREFBQSxDQUFDZ0QsdURBQWM7TUFBQzRCLEdBQUcsRUFBRTNCLFNBQVMsQ0FBQ00sRUFBRztNQUFDTixTQUFTLEVBQUVBO0lBQVUsQ0FBQyxDQUFDO0VBQUEsRUFBQyxHQUFFLElBQy9HLENBQ0MsQ0FDWCxDQUFDO0FBRVgsQ0FBQztBQUVELGlFQUFlZ0IsU0FBUzs7Ozs7Ozs7VUM1RHhCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vanMvY29tcG9uZW50cy9idXR0b25zLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uL2pzL2NvbXBvbmVudHMvbmV3dGFzay5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9qcy9jb21wb25lbnRzL3Nob3dvcGVyYXRpb25zLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uL2pzL2NvbXBvbmVudHMvc2hvd3Rhc2tzLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBOZXdUYXNrQnV0dG9uID0gKCkgPT4ge1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1pbmZvXCI+XHJcbiAgICAgICAgICAgICAgICBBZGQgdGFza1xyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXBsdXMtY2lyY2xlIG1sLTFcIj48L2k+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQWRkT3BlcmF0aW9uQnV0dG9uID0gKHtzd2l0Y2hlciwgYWRkTmV3T3BlcmF0aW9ufSkgPT4ge1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWluZm8gYnRuLXNtIG1yLTJcIiBvbkNsaWNrPXsoKT0+IHN3aXRjaGVyKCl9PlxyXG4gICAgICAgIFxyXG4gICAgICAgIHthZGROZXdPcGVyYXRpb24gPyBcclxuICAgICAgICA8PkNsb3NlIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1taW51cy1jaXJjbGUgbWwtMVwiPjwvaT4gPC8+XHJcbiAgICAgICAgOiBcclxuICAgICAgICA8PkFkZCBvcGVyYXRpb24gPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXBsdXMtY2lyY2xlIG1sLTFcIj48L2k+PC8+XHJcbiAgICAgICAgfVxyXG4gICAgICBcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICBcclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEZpbmlzaFRhc2tCdXR0b24gPSAoe2ZpbmlzaH0pID0+IHtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYXJrIGJ0bi1zbVwiIG9uQ2xpY2s9eygpID0+IGZpbmlzaCgpfT5cclxuICAgICAgICAgICAgRmluaXNoXHJcbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1hcmNoaXZlIG1sLTFcIj48L2k+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBUcmFzaEJ1dHRvbiA9ICh7ZGVsZXRlQWN0aW9ufSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1kYW5nZXIgYnRuLXNtIG1sLTJcIiBvbkNsaWNrPXsoKT0+IGRlbGV0ZUFjdGlvbigpfT5cclxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXRyYXNoIGZhbHNlXCI+PC9pPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQWRkVGltZUJ1dHRvbiA9ICh7b25BY3Rpb259KSA9PiB7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1zdWNjZXNzIGJ0bi1zbSBtci0yXCIgb25DbGljaz17KCk9PiBvbkFjdGlvbigpfT5cclxuICAgICAgICAgICAgQWRkIHRpbWVcclxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWNsb2NrIG1sLTFcIj48L2k+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBEZWxldGVPcGVyYXRpb25CdXR0b24gPSAoe2RlbGV0ZU9wQWN0aW9ufSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1kYW5nZXIgYnRuLXNtXCIgb25DbGljaz17KCk9PiBkZWxldGVPcEFjdGlvbigpfT48aSBjbGFzc05hbWU9XCJmYXMgZmEtdHJhc2hcIiA+PC9pPjwvYnV0dG9uPlxyXG4gICAgKVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTmV3VGFza0J1dHRvbiB9IGZyb20gXCIuL2J1dHRvbnNcIjtcclxuaW1wb3J0IHsgQWRkVGFza3MgfSBmcm9tIFwiLi90YXNrXCI7XHJcblxyXG5jb25zdCBOZXdUYXNrID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtuZXdUYXNrZm9ybURhdGEsIHNldE5ld1Rhc2tGb3JtRGF0YV0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgdGl0bGU6IFwiXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiXCIsXHJcbiAgICAgICAgc3RhdHVzOiBcIm9wZW5cIlxyXG4gICAgICB9KVxyXG5cclxuICAgIGNvbnN0IGZvcm1TdWJtaXRIYW5kbGVyID0gKGUpID0+ICB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgaWYgKG5ld1Rhc2tmb3JtRGF0YS50aXRsZSAhPT0gXCJcIikge1xyXG4gICAgICAgICAgICBBZGRUYXNrcyhuZXdUYXNrZm9ybURhdGEpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXROZXdUYXNrRm9ybURhdGEoXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBzdGF0dXM6IFwib3BlblwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcblxyXG4gICAgY29uc3QgaW5wdXRIYW5kbGVyID0gKGUsIHR5cGUpID0+IHtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwidGl0bGVcIjpcclxuICAgICAgICAgICAgICAgIHNldE5ld1Rhc2tGb3JtRGF0YSgocHJldlN0YXRlKT0+KHsuLi5wcmV2U3RhdGUsdGl0bGU6dmFsdWV9KSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImRlc2NyaXB0aW9uXCI6XHJcbiAgICAgICAgICAgICAgICBzZXROZXdUYXNrRm9ybURhdGEoKHByZXZTdGF0ZSk9Pih7Li4ucHJldlN0YXRlLGRlc2NyaXB0aW9uOnZhbHVlfSkpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIHNoYWRvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPk5ldyB0YXNrPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17Zm9ybVN1Ym1pdEhhbmRsZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtuZXdUYXNrZm9ybURhdGEudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlLCB0eXBlKSA9PiBpbnB1dEhhbmRsZXIoZSwgXCJ0aXRsZVwiKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJEZXNjcmlwdGlvblwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtuZXdUYXNrZm9ybURhdGEuZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlLCB0eXBlKSA9PiBpbnB1dEhhbmRsZXIoZSwgXCJkZXNjcmlwdGlvblwiKX0gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxOZXdUYXNrQnV0dG9uLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5ld1Rhc2s7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEFkZFRpbWVCdXR0b24sIERlbGV0ZU9wZXJhdGlvbkJ1dHRvbiB9IGZyb20gXCIuL2J1dHRvbnNcIlxyXG5pbXBvcnQgeyBBZGRUaW1lRm9ybSB9IGZyb20gXCIuL2Zvcm1zXCJcclxuaW1wb3J0IHsgZGVsZXRlU2luZ2xlT3BlcmF0aW9ucyB9IGZyb20gXCIuL29wZXJhdGlvblwiO1xyXG5cclxuY29uc3QgU2hvd09wZXJhdGlvbnMgPSAoeyBPcGVyYXRpb24gfSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtzaG93Rm9ybSwgc2V0U2hvd0Zvcm1dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IFNob3dBZGRUaW1lSGFuZGxlciA9ICgpID0+IHtcclxuICAgICAgICBzZXRTaG93Rm9ybSh0cnVlKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IEhpZGVBZGRUaW1lSGFuZGxlciA9ICgpID0+IHtcclxuICAgICAgICBzZXRTaG93Rm9ybShmYWxzZSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBEZWxldGVPcGVyYXRpb24gPSAoKSA9PiB7XHJcbiAgICAgICAgZGVsZXRlU2luZ2xlT3BlcmF0aW9ucyhPcGVyYXRpb24uaWQpXHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW0gZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICB7T3BlcmF0aW9uLmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJhZGdlIGJhZGdlLXN1Y2Nlc3MgYmFkZ2UtcGlsbCBtbC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtPcGVyYXRpb24udGltZVNwZW50fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAge09wZXJhdGlvbi50YXNrLnN0YXR1cyA9PSBcIm9wZW5cIiA/XHJcbiAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Nob3dGb3JtID8gPEFkZFRpbWVGb3JtIGNhbmNlbEFkZFRpbWU9e0hpZGVBZGRUaW1lSGFuZGxlcn0gb3BlcmF0aW9uSUQ9e09wZXJhdGlvbi5pZH0gLz4gOlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFkZFRpbWVCdXR0b24gb25BY3Rpb249e1Nob3dBZGRUaW1lSGFuZGxlcn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGVsZXRlT3BlcmF0aW9uQnV0dG9uIGRlbGV0ZU9wQWN0aW9uPXtEZWxldGVPcGVyYXRpb259IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICBudWxsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaG93T3BlcmF0aW9uczsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1RyYXNoQnV0dG9uLCBGaW5pc2hUYXNrQnV0dG9uLCBBZGRPcGVyYXRpb25CdXR0b259IGZyb20gXCIuL2J1dHRvbnNcIlxyXG5pbXBvcnQgeyBnZXRPcGVyYXRpb25zIH0gZnJvbSBcIi4vb3BlcmF0aW9uXCI7XHJcbmltcG9ydCBTaG93T3BlcmF0aW9ucyBmcm9tIFwiLi9zaG93b3BlcmF0aW9uc1wiO1xyXG5pbXBvcnQge05ld09wZXJhdGlvbkZvcm19IGZyb20gXCIuL2Zvcm1zXCJcclxuaW1wb3J0IHsgZGVsZXRlVGFza3MgfSBmcm9tIFwiLi90YXNrXCI7XHJcbmltcG9ydCB7IFVwZGF0ZVRhc2tzIH0gZnJvbSBcIi4vdGFza1wiO1xyXG5cclxuY29uc3QgU2hvd1Rhc2tzID0gKHt0YXNrfSkgPT4ge1xyXG4gICAgXHJcbiAgICBjb25zdCBbYWxsT3BlcmF0aW9ucywgc2V0QWxsT3BlcmF0aW9uc10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGdldE9wZXJhdGlvbnModGFzay5pZCxzZXRBbGxPcGVyYXRpb25zKVxyXG4gICAgfSxbYWxsT3BlcmF0aW9uc10pXHJcblxyXG4gICAgY29uc3QgW2FkZE5ld09wZXJhdGlvbiwgc2V0QWRkTmV3T3BlcmF0aW9uXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIFxyXG4gICAgY29uc3QgQWRkT3BlcnRhaW9uU3dpdGNoID0gKCkgPT4ge1xyXG4gICAgICAgIHNldEFkZE5ld09wZXJhdGlvbighYWRkTmV3T3BlcmF0aW9uKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IERlbGV0ZVRhc2sgPSAoKSA9PiB7XHJcbiAgICAgICAgZGVsZXRlVGFza3ModGFzay5pZClcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBVcGRhdGVUYXNrU3RhdHVzID0gKCkgPT4ge1xyXG4gICAgICAgIFVwZGF0ZVRhc2tzKHsuLi50YXNrLCBzdGF0dXM6XCJjbG9zZWRcIn0sdGFzay5pZClcclxuICAgICAgICBzZXRBZGROZXdPcGVyYXRpb24oZmFsc2UpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjYXJkIG10LTUgc2hhZG93LXNtXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDU+e3Rhc2sudGl0bGV9PC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cImNhcmQtc3VidGl0bGUgdGV4dC1tdXRlZFwiPnt0YXNrLmRlc2NyaXB0aW9ufTwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHt0YXNrLnN0YXR1cyA9PSBcIm9wZW5cIiA/IFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBZGRPcGVyYXRpb25CdXR0b24gc3dpdGNoZXI9e0FkZE9wZXJ0YWlvblN3aXRjaH0gYWRkTmV3T3BlcmF0aW9uPXthZGROZXdPcGVyYXRpb259Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZpbmlzaFRhc2tCdXR0b24gZmluaXNoPXtVcGRhdGVUYXNrU3RhdHVzfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFzaEJ1dHRvbiBkZWxldGVBY3Rpb249e0RlbGV0ZVRhc2t9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgPFRyYXNoQnV0dG9uIGRlbGV0ZUFjdGlvbj17RGVsZXRlVGFza30vPlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHthZGROZXdPcGVyYXRpb24gPyA8TmV3T3BlcmF0aW9uRm9ybSB0YXNrSUQ9e3Rhc2suaWR9Lz4gOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC1ncm91cCBsaXN0LWdyb3VwLWZsdXNoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2FsbE9wZXJhdGlvbnMgPyBhbGxPcGVyYXRpb25zLm1hcCgoT3BlcmF0aW9uKSA9PiA8U2hvd09wZXJhdGlvbnMga2V5PXtPcGVyYXRpb24uaWR9IE9wZXJhdGlvbj17T3BlcmF0aW9ufS8+KTogbnVsbH1cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hvd1Rhc2tzOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImU3MGI0Y2IyOGVlYTEwMmY3MjVmXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiTmV3VGFza0J1dHRvbiIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsInR5cGUiLCJjbGFzc05hbWUiLCJBZGRPcGVyYXRpb25CdXR0b24iLCJfcmVmIiwic3dpdGNoZXIiLCJhZGROZXdPcGVyYXRpb24iLCJvbkNsaWNrIiwiRmluaXNoVGFza0J1dHRvbiIsIl9yZWYyIiwiZmluaXNoIiwiVHJhc2hCdXR0b24iLCJfcmVmMyIsImRlbGV0ZUFjdGlvbiIsIkFkZFRpbWVCdXR0b24iLCJfcmVmNCIsIm9uQWN0aW9uIiwiRGVsZXRlT3BlcmF0aW9uQnV0dG9uIiwiX3JlZjUiLCJkZWxldGVPcEFjdGlvbiIsInVzZVN0YXRlIiwiQWRkVGFza3MiLCJOZXdUYXNrIiwiX3VzZVN0YXRlIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInN0YXR1cyIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsIm5ld1Rhc2tmb3JtRGF0YSIsInNldE5ld1Rhc2tGb3JtRGF0YSIsImZvcm1TdWJtaXRIYW5kbGVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwiaW5wdXRIYW5kbGVyIiwidmFsdWUiLCJ0YXJnZXQiLCJwcmV2U3RhdGUiLCJfb2JqZWN0U3ByZWFkIiwib25TdWJtaXQiLCJuYW1lIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsIkFkZFRpbWVGb3JtIiwiZGVsZXRlU2luZ2xlT3BlcmF0aW9ucyIsIlNob3dPcGVyYXRpb25zIiwiT3BlcmF0aW9uIiwic2hvd0Zvcm0iLCJzZXRTaG93Rm9ybSIsIlNob3dBZGRUaW1lSGFuZGxlciIsIkhpZGVBZGRUaW1lSGFuZGxlciIsIkRlbGV0ZU9wZXJhdGlvbiIsImlkIiwidGltZVNwZW50IiwidGFzayIsImNhbmNlbEFkZFRpbWUiLCJvcGVyYXRpb25JRCIsInVzZUVmZmVjdCIsImdldE9wZXJhdGlvbnMiLCJOZXdPcGVyYXRpb25Gb3JtIiwiZGVsZXRlVGFza3MiLCJVcGRhdGVUYXNrcyIsIlNob3dUYXNrcyIsImFsbE9wZXJhdGlvbnMiLCJzZXRBbGxPcGVyYXRpb25zIiwiX3VzZVN0YXRlMyIsIl91c2VTdGF0ZTQiLCJzZXRBZGROZXdPcGVyYXRpb24iLCJBZGRPcGVydGFpb25Td2l0Y2giLCJEZWxldGVUYXNrIiwiVXBkYXRlVGFza1N0YXR1cyIsInRhc2tJRCIsIm1hcCIsImtleSJdLCJzb3VyY2VSb290IjoiIn0=