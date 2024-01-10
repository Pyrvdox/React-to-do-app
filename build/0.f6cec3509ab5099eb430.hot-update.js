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
  var cancelAddTime = _ref.cancelAddTime;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    timer = _useState2[0],
    setTimer = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setTimer(taskID, setAllOperations);
  }, [allOperations]);
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
/******/ 	__webpack_require__.h = () => ("cbd91499ffd03a29763c")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bkIsMERBQUE7SUFBTTBDLFFBQVEsRUFBRVQ7RUFBa0IsZ0JBQzlCakMsMERBQUE7SUFBS21CLFNBQVMsRUFBQztFQUFhLGdCQUN4Qm5CLDBEQUFBO0lBQU9vQixJQUFJLEVBQUMsTUFBTTtJQUNkRCxTQUFTLEVBQUMsY0FBYztJQUN4QkUsV0FBVyxFQUFDLHVCQUF1QjtJQUNuQ2lCLEtBQUssRUFBSVAsb0JBQW9CLENBQUNILFdBQVk7SUFDMUNlLFFBQVEsRUFBRU47RUFBYSxDQUNyQixDQUFDLGVBRVByQywwREFBQTtJQUFLbUIsU0FBUyxFQUFDO0VBQW9CLGdCQUMvQm5CLDBEQUFBO0lBQVFtQixTQUFTLEVBQUMsY0FBYztJQUFDQyxJQUFJLEVBQUM7RUFBUSxHQUFDLEtBRTNDLGVBQUFwQiwwREFBQTtJQUFHbUIsU0FBUyxFQUFDO0VBQXlCLENBQUksQ0FDdEMsQ0FDUCxDQUNKLENBQ0gsQ0FDTCxDQUNQLENBQUM7QUFFWCxDQUFDOzs7Ozs7OztVQ2pGRCIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uL2pzL2NvbXBvbmVudHMvZm9ybXMuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQWRkT3BlcmF0aW9ucyB9IGZyb20gXCIuL29wZXJhdGlvblwiO1xyXG5pbXBvcnQgeyBnZXRPcGVyYXRpb25zIH0gZnJvbSBcIi4vb3BlcmF0aW9uXCI7XHJcbmltcG9ydCB7IFVwZGF0ZU9wZXJhdGlvbnMgfSBmcm9tIFwiLi9vcGVyYXRpb25cIjtcclxuXHJcbmV4cG9ydCBjb25zdCBBZGRUaW1lRm9ybSA9ICh7IGNhbmNlbEFkZFRpbWUgfSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFt0aW1lciwgc2V0VGltZXJdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNldFRpbWVyKHRhc2tJRCxzZXRBbGxPcGVyYXRpb25zKVxyXG4gICAgfSxbYWxsT3BlcmF0aW9uc10pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAgaW5wdXQtZ3JvdXAtc21cIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU3BlbnQgdGltZSBpbiBtaW51dGVzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTJyZW1cIiB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtYXBwZW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXN1Y2Nlc3NcIj48aSBjbGFzc05hbWU9XCJmYXMgZmEtc2F2ZVwiIHR5cGU9J3N1Ym1pdCc+PC9pPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1kYXJrXCI+PGkgY2xhc3NOYW1lPVwiZmFzIGZhLXRpbWVzIGZhbHNlXCIgb25DbGljaz17KCkgPT4gY2FuY2VsQWRkVGltZSgpfT48L2k+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgTmV3T3BlcmF0aW9uRm9ybSA9ICh7dGFza0lEfSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtuZXdPcGVyYXRpb25mb3JtRGF0YSwgc2V0TmV3T3BlcmF0aW9uRm9ybURhdGFdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlwiLFxyXG4gICAgICAgIHN0YXR1czogXCJvcGVuXCJcclxuICAgICAgfSlcclxuXHJcbiAgICBjb25zdCBmb3JtU3VibWl0SGFuZGxlciA9IChlKSA9PiAge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgIGlmIChuZXdPcGVyYXRpb25mb3JtRGF0YS50aXRsZSAhPT0gXCJcIikge1xyXG4gICAgICAgICAgICBBZGRPcGVyYXRpb25zKG5ld09wZXJhdGlvbmZvcm1EYXRhLCB0YXNrSUQpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXROZXdPcGVyYXRpb25Gb3JtRGF0YShcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBzdGF0dXM6IFwib3BlblwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjb25zdCBpbnB1dEhhbmRsZXIgPSAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgc2V0TmV3T3BlcmF0aW9uRm9ybURhdGEoKHByZXZTdGF0ZSk9Pih7Li4ucHJldlN0YXRlLGRlc2NyaXB0aW9uOnZhbHVlfSkpOyAgICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICBcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17Zm9ybVN1Ym1pdEhhbmRsZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk9wZXJhdGlvbiBkZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHtuZXdPcGVyYXRpb25mb3JtRGF0YS5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtpbnB1dEhhbmRsZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtYXBwZW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4taW5mb1wiIHR5cGU9J3N1Ym1pdCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQWRkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXBsdXMtY2lyY2xlIG1sLTFcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiY2JkOTE0OTlmZmQwM2EyOTc2M2NcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkFkZE9wZXJhdGlvbnMiLCJnZXRPcGVyYXRpb25zIiwiVXBkYXRlT3BlcmF0aW9ucyIsIkFkZFRpbWVGb3JtIiwiX3JlZiIsImNhbmNlbEFkZFRpbWUiLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJ0aW1lciIsInNldFRpbWVyIiwidGFza0lEIiwic2V0QWxsT3BlcmF0aW9ucyIsImFsbE9wZXJhdGlvbnMiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJjbGFzc05hbWUiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJzdHlsZSIsIndpZHRoIiwib25DbGljayIsIk5ld09wZXJhdGlvbkZvcm0iLCJfcmVmMiIsIl91c2VTdGF0ZTMiLCJkZXNjcmlwdGlvbiIsInN0YXR1cyIsIl91c2VTdGF0ZTQiLCJuZXdPcGVyYXRpb25mb3JtRGF0YSIsInNldE5ld09wZXJhdGlvbkZvcm1EYXRhIiwiZm9ybVN1Ym1pdEhhbmRsZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJ0aXRsZSIsImlucHV0SGFuZGxlciIsInZhbHVlIiwidGFyZ2V0IiwicHJldlN0YXRlIiwiX29iamVjdFNwcmVhZCIsIm9uU3VibWl0Iiwib25DaGFuZ2UiXSwic291cmNlUm9vdCI6IiJ9