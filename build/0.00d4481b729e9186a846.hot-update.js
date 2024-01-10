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
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(operationtimer.timeSpent),
    _useState4 = _slicedToArray(_useState3, 2),
    timer = _useState4[0],
    setTimer = _useState4[1];
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
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      description: "",
      status: "open"
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    newOperationformData = _useState6[0],
    setNewOperationFormData = _useState6[1];
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
/******/ 	__webpack_require__.h = () => ("ae749d375ed577762b4c")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUMsVUFBQ1EsU0FBUztNQUFBLE9BQUFDLGFBQUEsQ0FBQUEsYUFBQSxLQUFRRCxTQUFTO1FBQUNaLFdBQVcsRUFBQ1U7TUFBSztJQUFBLENBQUUsQ0FBQztFQUN4RSxDQUFDO0VBR0wsb0JBQ0kzQywwREFBQSxDQUFBQSx1REFBQSxxQkFDSUEsMERBQUE7SUFBS3VCLFNBQVMsRUFBQztFQUFXLGdCQUN0QnZCLDBEQUFBO0lBQU0rQyxRQUFRLEVBQUVUO0VBQWtCLGdCQUM5QnRDLDBEQUFBO0lBQUt1QixTQUFTLEVBQUM7RUFBYSxnQkFDeEJ2QiwwREFBQTtJQUFPd0IsSUFBSSxFQUFDLE1BQU07SUFDZEQsU0FBUyxFQUFDLGNBQWM7SUFDeEJFLFdBQVcsRUFBQyx1QkFBdUI7SUFDbkNrQixLQUFLLEVBQUlQLG9CQUFvQixDQUFDSCxXQUFZO0lBQzFDZSxRQUFRLEVBQUVOO0VBQWEsQ0FDckIsQ0FBQyxlQUVQMUMsMERBQUE7SUFBS3VCLFNBQVMsRUFBQztFQUFvQixnQkFDL0J2QiwwREFBQTtJQUFRdUIsU0FBUyxFQUFDLGNBQWM7SUFBQ0MsSUFBSSxFQUFDO0VBQVEsR0FBQyxLQUUzQyxlQUFBeEIsMERBQUE7SUFBR3VCLFNBQVMsRUFBQztFQUF5QixDQUFJLENBQ3RDLENBQ1AsQ0FDSixDQUNILENBQ0wsQ0FDUCxDQUFDO0FBRVgsQ0FBQzs7Ozs7Ozs7VUNyRkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9qcy9jb21wb25lbnRzL2Zvcm1zLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEFkZE9wZXJhdGlvbnMgfSBmcm9tIFwiLi9vcGVyYXRpb25cIjtcclxuaW1wb3J0IHsgZ2V0T3BlcmF0aW9ucyB9IGZyb20gXCIuL29wZXJhdGlvblwiO1xyXG5pbXBvcnQgeyBVcGRhdGVPcGVyYXRpb25zIH0gZnJvbSBcIi4vb3BlcmF0aW9uXCI7XHJcbmltcG9ydCB7IGdldFNpbmdsZU9wZXJhdGlvbnMgfSBmcm9tIFwiLi9vcGVyYXRpb25cIjtcclxuXHJcbmV4cG9ydCBjb25zdCBBZGRUaW1lRm9ybSA9ICh7IGNhbmNlbEFkZFRpbWUsb3BlcmF0aW9uSUQgfSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtvcGVyYXRpb250aW1lciwgc2V0T3BlcmF0aW9uVGltZXJdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGdldFNpbmdsZU9wZXJhdGlvbnMob3BlcmF0aW9uSUQsc2V0T3BlcmF0aW9uVGltZXIpXHJcbiAgICB9LFtvcGVyYXRpb250aW1lcl0pXHJcblxyXG4gICAgY29uc3QgW3RpbWVyLCBzZXRUaW1lcl0gPSB1c2VTdGF0ZShvcGVyYXRpb250aW1lci50aW1lU3BlbnQpXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAgaW5wdXQtZ3JvdXAtc21cIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU3BlbnQgdGltZSBpbiBtaW51dGVzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTJyZW1cIiB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLWFwcGVuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1zdWNjZXNzXCI+PGkgY2xhc3NOYW1lPVwiZmFzIGZhLXNhdmVcIiB0eXBlPSdzdWJtaXQnPjwvaT48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtZGFya1wiPjxpIGNsYXNzTmFtZT1cImZhcyBmYS10aW1lcyBmYWxzZVwiIG9uQ2xpY2s9eygpID0+IGNhbmNlbEFkZFRpbWUoKX0+PC9pPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IE5ld09wZXJhdGlvbkZvcm0gPSAoe3Rhc2tJRH0pID0+IHtcclxuXHJcbiAgICBjb25zdCBbbmV3T3BlcmF0aW9uZm9ybURhdGEsIHNldE5ld09wZXJhdGlvbkZvcm1EYXRhXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJcIixcclxuICAgICAgICBzdGF0dXM6IFwib3BlblwiXHJcbiAgICAgIH0pXHJcblxyXG4gICAgY29uc3QgZm9ybVN1Ym1pdEhhbmRsZXIgPSAoZSkgPT4gIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICBpZiAobmV3T3BlcmF0aW9uZm9ybURhdGEudGl0bGUgIT09IFwiXCIpIHtcclxuICAgICAgICAgICAgQWRkT3BlcmF0aW9ucyhuZXdPcGVyYXRpb25mb3JtRGF0YSwgdGFza0lEKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0TmV3T3BlcmF0aW9uRm9ybURhdGEoXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgc3RhdHVzOiBcIm9wZW5cIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgY29uc3QgaW5wdXRIYW5kbGVyID0gKGUpID0+IHtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgIHNldE5ld09wZXJhdGlvbkZvcm1EYXRhKChwcmV2U3RhdGUpPT4oey4uLnByZXZTdGF0ZSxkZXNjcmlwdGlvbjp2YWx1ZX0pKTsgICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2Zvcm1TdWJtaXRIYW5kbGVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJPcGVyYXRpb24gZGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB7bmV3T3BlcmF0aW9uZm9ybURhdGEuZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aW5wdXRIYW5kbGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLWFwcGVuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWluZm9cIiB0eXBlPSdzdWJtaXQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFkZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1wbHVzLWNpcmNsZSBtbC0xXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImFlNzQ5ZDM3NWVkNTc3NzYyYjRjXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJBZGRPcGVyYXRpb25zIiwiZ2V0T3BlcmF0aW9ucyIsIlVwZGF0ZU9wZXJhdGlvbnMiLCJnZXRTaW5nbGVPcGVyYXRpb25zIiwiQWRkVGltZUZvcm0iLCJfcmVmIiwiY2FuY2VsQWRkVGltZSIsIm9wZXJhdGlvbklEIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5Iiwib3BlcmF0aW9udGltZXIiLCJzZXRPcGVyYXRpb25UaW1lciIsIl91c2VTdGF0ZTMiLCJ0aW1lU3BlbnQiLCJfdXNlU3RhdGU0IiwidGltZXIiLCJzZXRUaW1lciIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsImNsYXNzTmFtZSIsInR5cGUiLCJwbGFjZWhvbGRlciIsInN0eWxlIiwid2lkdGgiLCJvbkNsaWNrIiwiTmV3T3BlcmF0aW9uRm9ybSIsIl9yZWYyIiwidGFza0lEIiwiX3VzZVN0YXRlNSIsImRlc2NyaXB0aW9uIiwic3RhdHVzIiwiX3VzZVN0YXRlNiIsIm5ld09wZXJhdGlvbmZvcm1EYXRhIiwic2V0TmV3T3BlcmF0aW9uRm9ybURhdGEiLCJmb3JtU3VibWl0SGFuZGxlciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRpdGxlIiwiaW5wdXRIYW5kbGVyIiwidmFsdWUiLCJ0YXJnZXQiLCJwcmV2U3RhdGUiLCJfb2JqZWN0U3ByZWFkIiwib25TdWJtaXQiLCJvbkNoYW5nZSJdLCJzb3VyY2VSb290IjoiIn0=