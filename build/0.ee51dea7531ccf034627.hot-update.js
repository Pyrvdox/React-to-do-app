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
  var timeSubmitHandler = function timeSubmitHandler(e) {
    e.preventDefault();
    if (newTimeInput > 0) {
      (0,_operation__WEBPACK_IMPORTED_MODULE_1__.UpdateOperations)(_objectSpread(_objectSpread({}, operationtimer), {}, {
        timeSpent: operationtimer + newTimeInput
      }), operationID);
    }
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
/******/ 	__webpack_require__.h = () => ("819ecd0e608df2cab718")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0lBQUtvQyxTQUFTLEVBQUM7RUFBYSxnQkFDeEJwQywwREFBQTtJQUFPcUMsSUFBSSxFQUFDLE1BQU07SUFDZEQsU0FBUyxFQUFDLGNBQWM7SUFDeEJFLFdBQVcsRUFBQyx1QkFBdUI7SUFDbkNYLEtBQUssRUFBSXVCLG9CQUFvQixDQUFDSCxXQUFZO0lBQzFDTixRQUFRLEVBQUVhO0VBQWEsQ0FDckIsQ0FBQyxlQUVQdEQsMERBQUE7SUFBS29DLFNBQVMsRUFBQztFQUFvQixnQkFDL0JwQywwREFBQTtJQUFRb0MsU0FBUyxFQUFDLGNBQWM7SUFBQ0MsSUFBSSxFQUFDO0VBQVEsR0FBQyxLQUUzQyxlQUFBckMsMERBQUE7SUFBR29DLFNBQVMsRUFBQztFQUF5QixDQUFJLENBQ3RDLENBQ1AsQ0FDSixDQUNILENBQ0wsQ0FDUCxDQUFDO0FBRVgsQ0FBQzs7Ozs7Ozs7VUMxR0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9qcy9jb21wb25lbnRzL2Zvcm1zLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEFkZE9wZXJhdGlvbnMgfSBmcm9tIFwiLi9vcGVyYXRpb25cIjtcclxuaW1wb3J0IHsgZ2V0T3BlcmF0aW9ucyB9IGZyb20gXCIuL29wZXJhdGlvblwiO1xyXG5pbXBvcnQgeyBVcGRhdGVPcGVyYXRpb25zIH0gZnJvbSBcIi4vb3BlcmF0aW9uXCI7XHJcbmltcG9ydCB7IGdldFNpbmdsZU9wZXJhdGlvbnMgfSBmcm9tIFwiLi9vcGVyYXRpb25cIjtcclxuXHJcbmV4cG9ydCBjb25zdCBBZGRUaW1lRm9ybSA9ICh7IGNhbmNlbEFkZFRpbWUsb3BlcmF0aW9uSUQgfSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtvcGVyYXRpb250aW1lciwgc2V0T3BlcmF0aW9uVGltZXJdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGdldFNpbmdsZU9wZXJhdGlvbnMob3BlcmF0aW9uSUQsc2V0T3BlcmF0aW9uVGltZXIpXHJcbiAgICB9LFtvcGVyYXRpb250aW1lcl0pXHJcblxyXG4gICAgY29uc3QgW3RpbWVyLCBzZXRUaW1lcl0gPSB1c2VTdGF0ZSgwKVxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzZXRUaW1lcihvcGVyYXRpb250aW1lci50aW1lU3BlbnQpXHJcbiAgICB9LFtvcGVyYXRpb250aW1lcl0pXHJcblxyXG4gICAgY29uc3QgW25ld1RpbWVJbnB1dCwgc2V0TmV3VGltZUlucHV0XSA9IHVzZVN0YXRlKCcnKVxyXG5cclxuICAgIGNvbnN0IFVwZGF0ZUlucHV0ID0gKGUpID0+IHtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgIHNldE5ld1RpbWVJbnB1dCh2YWx1ZSlcclxuICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB0aW1lU3VibWl0SGFuZGxlciA9IChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgaWYobmV3VGltZUlucHV0ID4gMCl7XHJcbiAgICAgICAgICAgIFVwZGF0ZU9wZXJhdGlvbnMoey4uLm9wZXJhdGlvbnRpbWVyLCB0aW1lU3BlbnQ6b3BlcmF0aW9udGltZXIgKyBuZXdUaW1lSW5wdXR9LCBvcGVyYXRpb25JRClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAgaW5wdXQtZ3JvdXAtc21cIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU3BlbnQgdGltZSBpbiBtaW51dGVzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTJyZW1cIiB9fSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e25ld1RpbWVJbnB1dH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e1VwZGF0ZUlucHV0fSAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC1hcHBlbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtc3VjY2Vzc1wiPjxpIGNsYXNzTmFtZT1cImZhcyBmYS1zYXZlXCIgdHlwZT0nc3VibWl0Jz48L2k+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLWRhcmtcIj48aSBjbGFzc05hbWU9XCJmYXMgZmEtdGltZXMgZmFsc2VcIiBvbkNsaWNrPXsoKSA9PiBjYW5jZWxBZGRUaW1lKCl9PjwvaT48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBOZXdPcGVyYXRpb25Gb3JtID0gKHt0YXNrSUR9KSA9PiB7XHJcblxyXG4gICAgY29uc3QgW25ld09wZXJhdGlvbmZvcm1EYXRhLCBzZXROZXdPcGVyYXRpb25Gb3JtRGF0YV0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiXCIsXHJcbiAgICAgICAgc3RhdHVzOiBcIm9wZW5cIlxyXG4gICAgICB9KVxyXG5cclxuICAgIGNvbnN0IGZvcm1TdWJtaXRIYW5kbGVyID0gKGUpID0+ICB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgaWYgKG5ld09wZXJhdGlvbmZvcm1EYXRhLnRpdGxlICE9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIEFkZE9wZXJhdGlvbnMobmV3T3BlcmF0aW9uZm9ybURhdGEsIHRhc2tJRClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldE5ld09wZXJhdGlvbkZvcm1EYXRhKFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJcIixcclxuICAgICAgICAgICAgICAgIHN0YXR1czogXCJvcGVuXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbnN0IGlucHV0SGFuZGxlciA9IChlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgICAgICBzZXROZXdPcGVyYXRpb25Gb3JtRGF0YSgocHJldlN0YXRlKT0+KHsuLi5wcmV2U3RhdGUsZGVzY3JpcHRpb246dmFsdWV9KSk7ICAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIFxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtmb3JtU3VibWl0SGFuZGxlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiT3BlcmF0aW9uIGRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0ge25ld09wZXJhdGlvbmZvcm1EYXRhLmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2lucHV0SGFuZGxlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC1hcHBlbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1pbmZvXCIgdHlwZT0nc3VibWl0Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBZGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtcGx1cy1jaXJjbGUgbWwtMVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn0iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI4MTllY2QwZTYwOGRmMmNhYjcxOFwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQWRkT3BlcmF0aW9ucyIsImdldE9wZXJhdGlvbnMiLCJVcGRhdGVPcGVyYXRpb25zIiwiZ2V0U2luZ2xlT3BlcmF0aW9ucyIsIkFkZFRpbWVGb3JtIiwiX3JlZiIsImNhbmNlbEFkZFRpbWUiLCJvcGVyYXRpb25JRCIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsIm9wZXJhdGlvbnRpbWVyIiwic2V0T3BlcmF0aW9uVGltZXIiLCJfdXNlU3RhdGUzIiwiX3VzZVN0YXRlNCIsInRpbWVyIiwic2V0VGltZXIiLCJ0aW1lU3BlbnQiLCJfdXNlU3RhdGU1IiwiX3VzZVN0YXRlNiIsIm5ld1RpbWVJbnB1dCIsInNldE5ld1RpbWVJbnB1dCIsIlVwZGF0ZUlucHV0IiwiZSIsInZhbHVlIiwidGFyZ2V0IiwiY29uc29sZSIsImxvZyIsInRpbWVTdWJtaXRIYW5kbGVyIiwicHJldmVudERlZmF1bHQiLCJfb2JqZWN0U3ByZWFkIiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwiY2xhc3NOYW1lIiwidHlwZSIsInBsYWNlaG9sZGVyIiwic3R5bGUiLCJ3aWR0aCIsIm9uQ2hhbmdlIiwib25DbGljayIsIk5ld09wZXJhdGlvbkZvcm0iLCJfcmVmMiIsInRhc2tJRCIsIl91c2VTdGF0ZTciLCJkZXNjcmlwdGlvbiIsInN0YXR1cyIsIl91c2VTdGF0ZTgiLCJuZXdPcGVyYXRpb25mb3JtRGF0YSIsInNldE5ld09wZXJhdGlvbkZvcm1EYXRhIiwiZm9ybVN1Ym1pdEhhbmRsZXIiLCJ0aXRsZSIsImlucHV0SGFuZGxlciIsInByZXZTdGF0ZSIsIm9uU3VibWl0Il0sInNvdXJjZVJvb3QiOiIifQ==