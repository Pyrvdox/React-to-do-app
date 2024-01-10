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
  var inputHandler = function inputHandler(e) {
    var value = e.target.value;
    setNewOperationFormData(function (prevState) {
      return _objectSpread(_objectSpread({}, prevState), {}, {
        description: value
      });
    });
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
    onChange: inputHandler
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "input-group-append"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btn btn-info",
    type: "submit"
  }, "Add", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: "fas fa-plus-circle ml-1"
  })))))));
};

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("9481f4750ae09e1a391b")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVMsRUFBQztFQUF5QixDQUFJLENBQ3RDLENBQ1AsQ0FDSixDQUNILENBQ0wsQ0FDUCxDQUFDO0FBRVgsQ0FBQzs7Ozs7Ozs7VUN4RUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9qcy9jb21wb25lbnRzL2Zvcm1zLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFkZFRpbWVGb3JtID0gKHsgY2FuY2VsQWRkVGltZSB9KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxmb3JtPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cCBpbnB1dC1ncm91cC1zbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTcGVudCB0aW1lIGluIG1pbnV0ZXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMnJlbVwiIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC1hcHBlbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtc3VjY2Vzc1wiPjxpIGNsYXNzTmFtZT1cImZhcyBmYS1zYXZlXCI+PC9pPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1kYXJrXCI+PGkgY2xhc3NOYW1lPVwiZmFzIGZhLXRpbWVzIGZhbHNlXCIgb25DbGljaz17KCkgPT4gY2FuY2VsQWRkVGltZSgpfT48L2k+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgTmV3T3BlcmF0aW9uRm9ybSA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBbbmV3T3BlcmF0aW9uZm9ybURhdGEsIHNldE5ld09wZXJhdGlvbkZvcm1EYXRhXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJcIixcclxuICAgICAgICBzdGF0dXM6IFwib3BlblwiXHJcbiAgICAgIH0pXHJcblxyXG4gICAgY29uc3QgZm9ybVN1Ym1pdEhhbmRsZXIgPSAoZSkgPT4gIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICBpZiAobmV3T3BlcmF0aW9uZm9ybURhdGEudGl0bGUgIT09IFwiXCIpIHtcclxuICAgICAgICAgICAgQWRkVGFza3MobmV3T3BlcmF0aW9uZm9ybURhdGEpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXROZXdPcGVyYXRpb25Gb3JtRGF0YShcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBzdGF0dXM6IFwib3BlblwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjb25zdCBpbnB1dEhhbmRsZXIgPSAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgc2V0TmV3T3BlcmF0aW9uRm9ybURhdGEoKHByZXZTdGF0ZSk9Pih7Li4ucHJldlN0YXRlLGRlc2NyaXB0aW9uOnZhbHVlfSkpOyAgICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICBcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17Zm9ybVN1Ym1pdEhhbmRsZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk9wZXJhdGlvbiBkZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHtuZXdPcGVyYXRpb25mb3JtRGF0YS5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtpbnB1dEhhbmRsZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtYXBwZW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4taW5mb1wiIHR5cGU9J3N1Ym1pdCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQWRkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXBsdXMtY2lyY2xlIG1sLTFcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiOTQ4MWY0NzUwYWUwOWUxYTM5MWJcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkFkZFRpbWVGb3JtIiwiX3JlZiIsImNhbmNlbEFkZFRpbWUiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJjbGFzc05hbWUiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJzdHlsZSIsIndpZHRoIiwib25DbGljayIsIk5ld09wZXJhdGlvbkZvcm0iLCJfdXNlU3RhdGUiLCJkZXNjcmlwdGlvbiIsInN0YXR1cyIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsIm5ld09wZXJhdGlvbmZvcm1EYXRhIiwic2V0TmV3T3BlcmF0aW9uRm9ybURhdGEiLCJmb3JtU3VibWl0SGFuZGxlciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRpdGxlIiwiQWRkVGFza3MiLCJpbnB1dEhhbmRsZXIiLCJ2YWx1ZSIsInRhcmdldCIsInByZXZTdGF0ZSIsIl9vYmplY3RTcHJlYWQiLCJvblN1Ym1pdCIsIm9uQ2hhbmdlIl0sInNvdXJjZVJvb3QiOiIifQ==