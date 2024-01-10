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
/* harmony import */ var _operation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(40);
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
  var cancelAddTime = _ref.cancelAddTime,
    operationID = _ref.operationID;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    operationtimer = _useState2[0],
    setOperationTimer = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    (0,_operation__WEBPACK_IMPORTED_MODULE_1__.getSingleOperations)(operationID, setOperationTimer);
  }, [operationtimer]);
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState4 = _slicedToArray(_useState3, 2),
    timer = _useState4[0],
    setTimer = _useState4[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setTimer(operationtimer.timeSpent);
  }, [operationtimer]);
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState6 = _slicedToArray(_useState5, 2),
    newTimeInput = _useState6[0],
    setNewTimeInput = _useState6[1];
  var UpdateInput = function UpdateInput(e) {
    var value = e.target.value;
    setNewTimeInput(value);
    console.log(value);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "input-group input-group-sm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "number",
    className: "form-control",
    placeholder: "Spent time in minutes",
    style: {
      width: "12rem"
    },
    value: newTimeInput,
    onChange: UpdateInput
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "input-group-append"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btn btn-outline-success"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: "fas fa-save",
    type: "submit"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btn btn-outline-dark"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: "fas fa-times false",
    onClick: function onClick() {
      return cancelAddTime();
    }
  }))))));
};
var NewOperationForm = function NewOperationForm(_ref2) {
  var taskID = _ref2.taskID;
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      description: "",
      status: "open"
    }),
    _useState8 = _slicedToArray(_useState7, 2),
    newOperationformData = _useState8[0],
    setNewOperationFormData = _useState8[1];
  var formSubmitHandler = function formSubmitHandler(e) {
    e.preventDefault();
    if (newOperationformData.title !== "") {
      (0,_operation__WEBPACK_IMPORTED_MODULE_1__.AddOperations)(newOperationformData, taskID);
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
/******/ 	__webpack_require__.h = () => ("ee51dea7531ccf034627")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UyxFQUFDLGNBQWM7SUFBQ0MsSUFBSSxFQUFDO0VBQVEsR0FBQyxLQUUzQyxlQUFBbEMsMERBQUE7SUFBR2lDLFNBQVMsRUFBQztFQUF5QixDQUFJLENBQ3RDLENBQ1AsQ0FDSixDQUNILENBQ0wsQ0FDUCxDQUFDO0FBRVgsQ0FBQzs7Ozs7Ozs7VUNuR0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9qcy9jb21wb25lbnRzL2Zvcm1zLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEFkZE9wZXJhdGlvbnMgfSBmcm9tIFwiLi9vcGVyYXRpb25cIjtcclxuaW1wb3J0IHsgZ2V0T3BlcmF0aW9ucyB9IGZyb20gXCIuL29wZXJhdGlvblwiO1xyXG5pbXBvcnQgeyBVcGRhdGVPcGVyYXRpb25zIH0gZnJvbSBcIi4vb3BlcmF0aW9uXCI7XHJcbmltcG9ydCB7IGdldFNpbmdsZU9wZXJhdGlvbnMgfSBmcm9tIFwiLi9vcGVyYXRpb25cIjtcclxuXHJcbmV4cG9ydCBjb25zdCBBZGRUaW1lRm9ybSA9ICh7IGNhbmNlbEFkZFRpbWUsb3BlcmF0aW9uSUQgfSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtvcGVyYXRpb250aW1lciwgc2V0T3BlcmF0aW9uVGltZXJdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGdldFNpbmdsZU9wZXJhdGlvbnMob3BlcmF0aW9uSUQsc2V0T3BlcmF0aW9uVGltZXIpXHJcbiAgICB9LFtvcGVyYXRpb250aW1lcl0pXHJcblxyXG4gICAgY29uc3QgW3RpbWVyLCBzZXRUaW1lcl0gPSB1c2VTdGF0ZSgwKVxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzZXRUaW1lcihvcGVyYXRpb250aW1lci50aW1lU3BlbnQpXHJcbiAgICB9LFtvcGVyYXRpb250aW1lcl0pXHJcblxyXG4gICAgY29uc3QgW25ld1RpbWVJbnB1dCwgc2V0TmV3VGltZUlucHV0XSA9IHVzZVN0YXRlKCcnKVxyXG5cclxuICAgIGNvbnN0IFVwZGF0ZUlucHV0ID0gKGUpID0+IHtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgIHNldE5ld1RpbWVJbnB1dCh2YWx1ZSlcclxuICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxmb3JtPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cCBpbnB1dC1ncm91cC1zbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTcGVudCB0aW1lIGluIG1pbnV0ZXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMnJlbVwiIH19IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bmV3VGltZUlucHV0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17VXBkYXRlSW5wdXR9ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLWFwcGVuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1zdWNjZXNzXCI+PGkgY2xhc3NOYW1lPVwiZmFzIGZhLXNhdmVcIiB0eXBlPSdzdWJtaXQnPjwvaT48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtZGFya1wiPjxpIGNsYXNzTmFtZT1cImZhcyBmYS10aW1lcyBmYWxzZVwiIG9uQ2xpY2s9eygpID0+IGNhbmNlbEFkZFRpbWUoKX0+PC9pPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IE5ld09wZXJhdGlvbkZvcm0gPSAoe3Rhc2tJRH0pID0+IHtcclxuXHJcbiAgICBjb25zdCBbbmV3T3BlcmF0aW9uZm9ybURhdGEsIHNldE5ld09wZXJhdGlvbkZvcm1EYXRhXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJcIixcclxuICAgICAgICBzdGF0dXM6IFwib3BlblwiXHJcbiAgICAgIH0pXHJcblxyXG4gICAgY29uc3QgZm9ybVN1Ym1pdEhhbmRsZXIgPSAoZSkgPT4gIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICBpZiAobmV3T3BlcmF0aW9uZm9ybURhdGEudGl0bGUgIT09IFwiXCIpIHtcclxuICAgICAgICAgICAgQWRkT3BlcmF0aW9ucyhuZXdPcGVyYXRpb25mb3JtRGF0YSwgdGFza0lEKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0TmV3T3BlcmF0aW9uRm9ybURhdGEoXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgc3RhdHVzOiBcIm9wZW5cIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgY29uc3QgaW5wdXRIYW5kbGVyID0gKGUpID0+IHtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgIHNldE5ld09wZXJhdGlvbkZvcm1EYXRhKChwcmV2U3RhdGUpPT4oey4uLnByZXZTdGF0ZSxkZXNjcmlwdGlvbjp2YWx1ZX0pKTsgICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2Zvcm1TdWJtaXRIYW5kbGVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJPcGVyYXRpb24gZGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB7bmV3T3BlcmF0aW9uZm9ybURhdGEuZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aW5wdXRIYW5kbGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLWFwcGVuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWluZm9cIiB0eXBlPSdzdWJtaXQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFkZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1wbHVzLWNpcmNsZSBtbC0xXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImVlNTFkZWE3NTMxY2NmMDM0NjI3XCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJBZGRPcGVyYXRpb25zIiwiZ2V0T3BlcmF0aW9ucyIsIlVwZGF0ZU9wZXJhdGlvbnMiLCJnZXRTaW5nbGVPcGVyYXRpb25zIiwiQWRkVGltZUZvcm0iLCJfcmVmIiwiY2FuY2VsQWRkVGltZSIsIm9wZXJhdGlvbklEIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5Iiwib3BlcmF0aW9udGltZXIiLCJzZXRPcGVyYXRpb25UaW1lciIsIl91c2VTdGF0ZTMiLCJfdXNlU3RhdGU0IiwidGltZXIiLCJzZXRUaW1lciIsInRpbWVTcGVudCIsIl91c2VTdGF0ZTUiLCJfdXNlU3RhdGU2IiwibmV3VGltZUlucHV0Iiwic2V0TmV3VGltZUlucHV0IiwiVXBkYXRlSW5wdXQiLCJlIiwidmFsdWUiLCJ0YXJnZXQiLCJjb25zb2xlIiwibG9nIiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwiY2xhc3NOYW1lIiwidHlwZSIsInBsYWNlaG9sZGVyIiwic3R5bGUiLCJ3aWR0aCIsIm9uQ2hhbmdlIiwib25DbGljayIsIk5ld09wZXJhdGlvbkZvcm0iLCJfcmVmMiIsInRhc2tJRCIsIl91c2VTdGF0ZTciLCJkZXNjcmlwdGlvbiIsInN0YXR1cyIsIl91c2VTdGF0ZTgiLCJuZXdPcGVyYXRpb25mb3JtRGF0YSIsInNldE5ld09wZXJhdGlvbkZvcm1EYXRhIiwiZm9ybVN1Ym1pdEhhbmRsZXIiLCJwcmV2ZW50RGVmYXVsdCIsInRpdGxlIiwiaW5wdXRIYW5kbGVyIiwicHJldlN0YXRlIiwiX29iamVjdFNwcmVhZCIsIm9uU3VibWl0Il0sInNvdXJjZVJvb3QiOiIifQ==