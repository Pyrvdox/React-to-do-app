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
    setTimer = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    (0,_operation__WEBPACK_IMPORTED_MODULE_1__.getSingleOperations)(operationID, setTimer);
  }, [operationtimer]);
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
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      description: "",
      status: "open"
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    newOperationformData = _useState4[0],
    setNewOperationFormData = _useState4[1];
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
/******/ 	__webpack_require__.h = () => ("7d49f24024509c5cd8bd")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFBO0lBQUtrQixTQUFTLEVBQUM7RUFBVyxnQkFDdEJsQiwwREFBQTtJQUFNMEMsUUFBUSxFQUFFVDtFQUFrQixnQkFDOUJqQywwREFBQTtJQUFLa0IsU0FBUyxFQUFDO0VBQWEsZ0JBQ3hCbEIsMERBQUE7SUFBT21CLElBQUksRUFBQyxNQUFNO0lBQ2RELFNBQVMsRUFBQyxjQUFjO0lBQ3hCRSxXQUFXLEVBQUMsdUJBQXVCO0lBQ25Da0IsS0FBSyxFQUFJUCxvQkFBb0IsQ0FBQ0gsV0FBWTtJQUMxQ2UsUUFBUSxFQUFFTjtFQUFhLENBQ3JCLENBQUMsZUFFUHJDLDBEQUFBO0lBQUtrQixTQUFTLEVBQUM7RUFBb0IsZ0JBQy9CbEIsMERBQUE7SUFBUWtCLFNBQVMsRUFBQyxjQUFjO0lBQUNDLElBQUksRUFBQztFQUFRLEdBQUMsS0FFM0MsZUFBQW5CLDBEQUFBO0lBQUdrQixTQUFTLEVBQUM7RUFBeUIsQ0FBSSxDQUN0QyxDQUNQLENBQ0osQ0FDSCxDQUNMLENBQ1AsQ0FBQztBQUVYLENBQUM7Ozs7Ozs7O1VDckZEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vanMvY29tcG9uZW50cy9mb3Jtcy5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBBZGRPcGVyYXRpb25zIH0gZnJvbSBcIi4vb3BlcmF0aW9uXCI7XHJcbmltcG9ydCB7IGdldE9wZXJhdGlvbnMgfSBmcm9tIFwiLi9vcGVyYXRpb25cIjtcclxuaW1wb3J0IHsgVXBkYXRlT3BlcmF0aW9ucyB9IGZyb20gXCIuL29wZXJhdGlvblwiO1xyXG5pbXBvcnQgeyBnZXRTaW5nbGVPcGVyYXRpb25zIH0gZnJvbSBcIi4vb3BlcmF0aW9uXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQWRkVGltZUZvcm0gPSAoeyBjYW5jZWxBZGRUaW1lLG9wZXJhdGlvbklEIH0pID0+IHtcclxuXHJcbiAgICBjb25zdCBbb3BlcmF0aW9udGltZXIsIHNldFRpbWVyXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBnZXRTaW5nbGVPcGVyYXRpb25zKG9wZXJhdGlvbklELHNldFRpbWVyKVxyXG4gICAgfSxbb3BlcmF0aW9udGltZXJdKVxyXG5cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAgaW5wdXQtZ3JvdXAtc21cIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU3BlbnQgdGltZSBpbiBtaW51dGVzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTJyZW1cIiB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLWFwcGVuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1zdWNjZXNzXCI+PGkgY2xhc3NOYW1lPVwiZmFzIGZhLXNhdmVcIiB0eXBlPSdzdWJtaXQnPjwvaT48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtZGFya1wiPjxpIGNsYXNzTmFtZT1cImZhcyBmYS10aW1lcyBmYWxzZVwiIG9uQ2xpY2s9eygpID0+IGNhbmNlbEFkZFRpbWUoKX0+PC9pPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IE5ld09wZXJhdGlvbkZvcm0gPSAoe3Rhc2tJRH0pID0+IHtcclxuXHJcbiAgICBjb25zdCBbbmV3T3BlcmF0aW9uZm9ybURhdGEsIHNldE5ld09wZXJhdGlvbkZvcm1EYXRhXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJcIixcclxuICAgICAgICBzdGF0dXM6IFwib3BlblwiXHJcbiAgICAgIH0pXHJcblxyXG4gICAgY29uc3QgZm9ybVN1Ym1pdEhhbmRsZXIgPSAoZSkgPT4gIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICBpZiAobmV3T3BlcmF0aW9uZm9ybURhdGEudGl0bGUgIT09IFwiXCIpIHtcclxuICAgICAgICAgICAgQWRkT3BlcmF0aW9ucyhuZXdPcGVyYXRpb25mb3JtRGF0YSwgdGFza0lEKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0TmV3T3BlcmF0aW9uRm9ybURhdGEoXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgc3RhdHVzOiBcIm9wZW5cIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgY29uc3QgaW5wdXRIYW5kbGVyID0gKGUpID0+IHtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgIHNldE5ld09wZXJhdGlvbkZvcm1EYXRhKChwcmV2U3RhdGUpPT4oey4uLnByZXZTdGF0ZSxkZXNjcmlwdGlvbjp2YWx1ZX0pKTsgICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2Zvcm1TdWJtaXRIYW5kbGVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJPcGVyYXRpb24gZGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB7bmV3T3BlcmF0aW9uZm9ybURhdGEuZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aW5wdXRIYW5kbGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLWFwcGVuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWluZm9cIiB0eXBlPSdzdWJtaXQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFkZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1wbHVzLWNpcmNsZSBtbC0xXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjdkNDlmMjQwMjQ1MDljNWNkOGJkXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJBZGRPcGVyYXRpb25zIiwiZ2V0T3BlcmF0aW9ucyIsIlVwZGF0ZU9wZXJhdGlvbnMiLCJnZXRTaW5nbGVPcGVyYXRpb25zIiwiQWRkVGltZUZvcm0iLCJfcmVmIiwiY2FuY2VsQWRkVGltZSIsIm9wZXJhdGlvbklEIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5Iiwib3BlcmF0aW9udGltZXIiLCJzZXRUaW1lciIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsImNsYXNzTmFtZSIsInR5cGUiLCJwbGFjZWhvbGRlciIsInN0eWxlIiwid2lkdGgiLCJvbkNsaWNrIiwiTmV3T3BlcmF0aW9uRm9ybSIsIl9yZWYyIiwidGFza0lEIiwiX3VzZVN0YXRlMyIsImRlc2NyaXB0aW9uIiwic3RhdHVzIiwiX3VzZVN0YXRlNCIsIm5ld09wZXJhdGlvbmZvcm1EYXRhIiwic2V0TmV3T3BlcmF0aW9uRm9ybURhdGEiLCJmb3JtU3VibWl0SGFuZGxlciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRpdGxlIiwiaW5wdXRIYW5kbGVyIiwidmFsdWUiLCJ0YXJnZXQiLCJwcmV2U3RhdGUiLCJfb2JqZWN0U3ByZWFkIiwib25TdWJtaXQiLCJvbkNoYW5nZSJdLCJzb3VyY2VSb290IjoiIn0=