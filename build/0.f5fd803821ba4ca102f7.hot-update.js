"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 42:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddTimeForm": () => (/* binding */ AddTimeForm),
/* harmony export */   "NewOperationForm": () => (/* binding */ NewOperationForm)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
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

var AddTimeForm = function AddTimeForm(_ref) {
  var cancelAddTime = _ref.cancelAddTime;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "input-group input-group-sm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "number",
    className: "form-control",
    placeholder: "Spent time in minutes",
    style: {
      width: "12rem"
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "input-group-append"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btn btn-outline-success"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: "fas fa-save"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btn btn-outline-dark"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: "fas fa-times false",
    onClick: function onClick() {
      return cancelAddTime();
    }
  }))))));
};
var NewOperationForm = function NewOperationForm() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      description: "",
      status: "open"
    }),
    _useState2 = _slicedToArray(_useState, 2),
    newOperationformData = _useState2[0],
    setNewOperationFormData = _useState2[1];
  var formSubmitHandler = function formSubmitHandler(e) {
    e.preventDefault();
    if (newOperationformData.title !== "") {
      AddTasks(newOperationformData);
    }
    setNewOperationFormData({
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
    className: "card-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: formSubmitHandler
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "input-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    className: "form-control",
    placeholder: "Operation description",
    value: newOperationformData.description,
    onChange: function onChange(e, type) {
      return inputHandler(e, "title");
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "input-group-append"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btn btn-info",
    type: "submit"
  }, "Add", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: "fas fa-plus-circle ml-1"
  })))))));
};

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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "list-group-item d-flex justify-content-between align-items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, Operation.description, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "badge badge-success badge-pill ml-2"
  }, "2h 15m")), showForm ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_forms__WEBPACK_IMPORTED_MODULE_2__.AddTimeForm, {
    cancelAddTime: HideAddTimeHandler
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "card mt-5 shadow-sm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "card-header d-flex justify-content-between align-items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h5", null, task.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h6", {
    className: "card-subtitle text-muted"
  }, task.description)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_buttons__WEBPACK_IMPORTED_MODULE_1__.AddOperationButton, {
    switcher: AddOpertaionSwitch
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_buttons__WEBPACK_IMPORTED_MODULE_1__.FinishTaskButton, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_buttons__WEBPACK_IMPORTED_MODULE_1__.TrashButton, null))), addNewOperation ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_forms__WEBPACK_IMPORTED_MODULE_4__.NewOperationForm, null) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
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
/******/ 	__webpack_require__.h = () => ("9839fc786554696b11b7")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFBU08sU0FBUyxFQUFDO0VBQXFCLGdCQUNwQ1AsMERBQUE7SUFBS08sU0FBUyxFQUFDO0VBQStELGdCQUMxRVAsMERBQUEsMkJBQ0lBLDBEQUFBLGFBQUtpRCxJQUFJLENBQUN6QixLQUFVLENBQUMsZUFDckJ4QiwwREFBQTtJQUFJTyxTQUFTLEVBQUM7RUFBMEIsR0FBRTBDLElBQUksQ0FBQ2xDLFdBQWdCLENBQzlELENBQUMsZUFFTmYsMERBQUEsMkJBQ0lBLDBEQUFBLENBQUM4Qyx3REFBa0I7SUFBQ1ksUUFBUSxFQUFFRDtFQUFtQixDQUFDLENBQUMsZUFDbkR6RCwwREFBQSxDQUFDNkMsc0RBQWdCLE1BQUUsQ0FBQyxlQUNwQjdDLDBEQUFBLENBQUM0QyxpREFBVyxNQUFFLENBQ2IsQ0FDSixDQUFDLEVBRUxXLGVBQWUsZ0JBQUd2RCwwREFBQSxDQUFDYSxvREFBZ0IsTUFBRSxDQUFDLEdBQUcsSUFBSSxlQUU5Q2IsMERBQUE7SUFBSU8sU0FBUyxFQUFDO0VBQTZCLEdBQ3RDMkMsYUFBYSxHQUFHQSxhQUFhLENBQUNTLEdBQUcsQ0FBQyxVQUFDdEIsU0FBUztJQUFBLG9CQUFLckMsMERBQUEsQ0FBQ29DLHVEQUFjO01BQUN3QixHQUFHLEVBQUV2QixTQUFTLENBQUNlLEVBQUc7TUFBQ2YsU0FBUyxFQUFFQTtJQUFVLENBQUMsQ0FBQztFQUFBLEVBQUMsR0FBRSxJQUMvRyxDQUNDLENBQ1gsQ0FBQztBQUVYLENBQUM7QUFFRCxpRUFBZVcsU0FBUzs7Ozs7Ozs7VUM5Q3hCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vanMvY29tcG9uZW50cy9mb3Jtcy5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9qcy9jb21wb25lbnRzL3Nob3dvcGVyYXRpb25zLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uL2pzL2NvbXBvbmVudHMvc2hvd3Rhc2tzLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFkZFRpbWVGb3JtID0gKHsgY2FuY2VsQWRkVGltZSB9KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxmb3JtPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cCBpbnB1dC1ncm91cC1zbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTcGVudCB0aW1lIGluIG1pbnV0ZXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMnJlbVwiIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC1hcHBlbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtc3VjY2Vzc1wiPjxpIGNsYXNzTmFtZT1cImZhcyBmYS1zYXZlXCI+PC9pPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1kYXJrXCI+PGkgY2xhc3NOYW1lPVwiZmFzIGZhLXRpbWVzIGZhbHNlXCIgb25DbGljaz17KCkgPT4gY2FuY2VsQWRkVGltZSgpfT48L2k+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgTmV3T3BlcmF0aW9uRm9ybSA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBbbmV3T3BlcmF0aW9uZm9ybURhdGEsIHNldE5ld09wZXJhdGlvbkZvcm1EYXRhXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJcIixcclxuICAgICAgICBzdGF0dXM6IFwib3BlblwiXHJcbiAgICAgIH0pXHJcblxyXG4gICAgY29uc3QgZm9ybVN1Ym1pdEhhbmRsZXIgPSAoZSkgPT4gIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICBpZiAobmV3T3BlcmF0aW9uZm9ybURhdGEudGl0bGUgIT09IFwiXCIpIHtcclxuICAgICAgICAgICAgQWRkVGFza3MobmV3T3BlcmF0aW9uZm9ybURhdGEpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXROZXdPcGVyYXRpb25Gb3JtRGF0YShcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBzdGF0dXM6IFwib3BlblwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjb25zdCBpbnB1dEhhbmRsZXIgPSAoZSwgdHlwZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJ0aXRsZVwiOlxyXG4gICAgICAgICAgICAgICAgc2V0TmV3VGFza0Zvcm1EYXRhKChwcmV2U3RhdGUpPT4oey4uLnByZXZTdGF0ZSx0aXRsZTp2YWx1ZX0pKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiZGVzY3JpcHRpb25cIjpcclxuICAgICAgICAgICAgICAgIHNldE5ld1Rhc2tGb3JtRGF0YSgocHJldlN0YXRlKT0+KHsuLi5wcmV2U3RhdGUsZGVzY3JpcHRpb246dmFsdWV9KSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2Zvcm1TdWJtaXRIYW5kbGVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJPcGVyYXRpb24gZGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB7bmV3T3BlcmF0aW9uZm9ybURhdGEuZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUsIHR5cGUpID0+IGlucHV0SGFuZGxlcihlLCBcInRpdGxlXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLWFwcGVuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWluZm9cIiB0eXBlPSdzdWJtaXQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFkZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1wbHVzLWNpcmNsZSBtbC0xXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufSIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBBZGRUaW1lQnV0dG9uLCBEZWxldGVPcGVyYXRpb25CdXR0b24gfSBmcm9tIFwiLi9idXR0b25zXCJcclxuaW1wb3J0IHsgQWRkVGltZUZvcm0gfSBmcm9tIFwiLi9mb3Jtc1wiXHJcblxyXG5cclxuY29uc3QgU2hvd09wZXJhdGlvbnMgPSAoeyBPcGVyYXRpb24gfSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtzaG93Rm9ybSwgc2V0U2hvd0Zvcm1dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IFNob3dBZGRUaW1lSGFuZGxlciA9ICgpID0+IHtcclxuICAgICAgICBzZXRTaG93Rm9ybSh0cnVlKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IEhpZGVBZGRUaW1lSGFuZGxlciA9ICgpID0+IHtcclxuICAgICAgICBzZXRTaG93Rm9ybShmYWxzZSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW0gZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICB7T3BlcmF0aW9uLmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJhZGdlIGJhZGdlLXN1Y2Nlc3MgYmFkZ2UtcGlsbCBtbC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDJoIDE1bVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIHtzaG93Rm9ybSA/IDxBZGRUaW1lRm9ybSBjYW5jZWxBZGRUaW1lPXtIaWRlQWRkVGltZUhhbmRsZXJ9Lz4gOlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBZGRUaW1lQnV0dG9uIG9uQWN0aW9uPXtTaG93QWRkVGltZUhhbmRsZXJ9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPERlbGV0ZU9wZXJhdGlvbkJ1dHRvbiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hvd09wZXJhdGlvbnM7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtUcmFzaEJ1dHRvbiwgRmluaXNoVGFza0J1dHRvbiwgQWRkT3BlcmF0aW9uQnV0dG9ufSBmcm9tIFwiLi9idXR0b25zXCJcclxuaW1wb3J0IHsgZ2V0T3BlcmF0aW9ucyB9IGZyb20gXCIuL29wZXJhdGlvblwiO1xyXG5pbXBvcnQgU2hvd09wZXJhdGlvbnMgZnJvbSBcIi4vc2hvd29wZXJhdGlvbnNcIjtcclxuaW1wb3J0IHtOZXdPcGVyYXRpb25Gb3JtfSBmcm9tIFwiLi9mb3Jtc1wiXHJcblxyXG5jb25zdCBTaG93VGFza3MgPSAoe3Rhc2t9KSA9PiB7XHJcblxyXG4gICAgY29uc3QgW2FsbE9wZXJhdGlvbnMsIHNldEFsbE9wZXJhdGlvbnNdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBnZXRPcGVyYXRpb25zKHRhc2suaWQsc2V0QWxsT3BlcmF0aW9ucylcclxuICAgIH0sW2FsbE9wZXJhdGlvbnNdKVxyXG5cclxuICAgIGNvbnN0IFthZGROZXdPcGVyYXRpb24sIHNldEFkZE5ld09wZXJhdGlvbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBcclxuICAgIGNvbnN0IEFkZE9wZXJ0YWlvblN3aXRjaCA9ICgpID0+IHtcclxuICAgICAgICBzZXRBZGROZXdPcGVyYXRpb24oIWFkZE5ld09wZXJhdGlvbilcclxuICAgIH1cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjYXJkIG10LTUgc2hhZG93LXNtXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDU+e3Rhc2sudGl0bGV9PC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cImNhcmQtc3VidGl0bGUgdGV4dC1tdXRlZFwiPnt0YXNrLmRlc2NyaXB0aW9ufTwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBZGRPcGVyYXRpb25CdXR0b24gc3dpdGNoZXI9e0FkZE9wZXJ0YWlvblN3aXRjaH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RmluaXNoVGFza0J1dHRvbiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhc2hCdXR0b24gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIHthZGROZXdPcGVyYXRpb24gPyA8TmV3T3BlcmF0aW9uRm9ybSAvPiA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LWdyb3VwIGxpc3QtZ3JvdXAtZmx1c2hcIj5cclxuICAgICAgICAgICAgICAgICAgICB7YWxsT3BlcmF0aW9ucyA/IGFsbE9wZXJhdGlvbnMubWFwKChPcGVyYXRpb24pID0+IDxTaG93T3BlcmF0aW9ucyBrZXk9e09wZXJhdGlvbi5pZH0gT3BlcmF0aW9uPXtPcGVyYXRpb259Lz4pOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaG93VGFza3M7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiOTgzOWZjNzg2NTU0Njk2YjExYjdcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkFkZFRpbWVGb3JtIiwiX3JlZiIsImNhbmNlbEFkZFRpbWUiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJjbGFzc05hbWUiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJzdHlsZSIsIndpZHRoIiwib25DbGljayIsIk5ld09wZXJhdGlvbkZvcm0iLCJfdXNlU3RhdGUiLCJkZXNjcmlwdGlvbiIsInN0YXR1cyIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsIm5ld09wZXJhdGlvbmZvcm1EYXRhIiwic2V0TmV3T3BlcmF0aW9uRm9ybURhdGEiLCJmb3JtU3VibWl0SGFuZGxlciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRpdGxlIiwiQWRkVGFza3MiLCJpbnB1dEhhbmRsZXIiLCJ2YWx1ZSIsInRhcmdldCIsInNldE5ld1Rhc2tGb3JtRGF0YSIsInByZXZTdGF0ZSIsIl9vYmplY3RTcHJlYWQiLCJvblN1Ym1pdCIsIm9uQ2hhbmdlIiwiQWRkVGltZUJ1dHRvbiIsIkRlbGV0ZU9wZXJhdGlvbkJ1dHRvbiIsIlNob3dPcGVyYXRpb25zIiwiT3BlcmF0aW9uIiwic2hvd0Zvcm0iLCJzZXRTaG93Rm9ybSIsIlNob3dBZGRUaW1lSGFuZGxlciIsIkhpZGVBZGRUaW1lSGFuZGxlciIsIm9uQWN0aW9uIiwidXNlRWZmZWN0IiwiVHJhc2hCdXR0b24iLCJGaW5pc2hUYXNrQnV0dG9uIiwiQWRkT3BlcmF0aW9uQnV0dG9uIiwiZ2V0T3BlcmF0aW9ucyIsIlNob3dUYXNrcyIsInRhc2siLCJhbGxPcGVyYXRpb25zIiwic2V0QWxsT3BlcmF0aW9ucyIsImlkIiwiX3VzZVN0YXRlMyIsIl91c2VTdGF0ZTQiLCJhZGROZXdPcGVyYXRpb24iLCJzZXRBZGROZXdPcGVyYXRpb24iLCJBZGRPcGVydGFpb25Td2l0Y2giLCJzd2l0Y2hlciIsIm1hcCIsImtleSJdLCJzb3VyY2VSb290IjoiIn0=