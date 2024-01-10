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
var NewOperationForm = function NewOperationForm(_ref2) {
  var key = _ref2.key;
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
      (0,_operation__WEBPACK_IMPORTED_MODULE_1__.AddOperations)(newOperationformData, key);
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
/******/ 	__webpack_require__.h = () => ("f49abbb1538f3966743b")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFTLEVBQUMsY0FBYztJQUFDQyxJQUFJLEVBQUM7RUFBUSxHQUFDLEtBRTNDLGVBQUFULDBEQUFBO0lBQUdRLFNBQVMsRUFBQztFQUF5QixDQUFJLENBQ3RDLENBQ1AsQ0FDSixDQUNILENBQ0wsQ0FDUCxDQUFDO0FBRVgsQ0FBQzs7Ozs7Ozs7VUN6RUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9qcy9jb21wb25lbnRzL2Zvcm1zLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBBZGRPcGVyYXRpb25zIH0gZnJvbSBcIi4vb3BlcmF0aW9uXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQWRkVGltZUZvcm0gPSAoeyBjYW5jZWxBZGRUaW1lIH0pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwIGlucHV0LWdyb3VwLXNtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNwZW50IHRpbWUgaW4gbWludXRlc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEycmVtXCIgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLWFwcGVuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1zdWNjZXNzXCI+PGkgY2xhc3NOYW1lPVwiZmFzIGZhLXNhdmVcIj48L2k+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLWRhcmtcIj48aSBjbGFzc05hbWU9XCJmYXMgZmEtdGltZXMgZmFsc2VcIiBvbkNsaWNrPXsoKSA9PiBjYW5jZWxBZGRUaW1lKCl9PjwvaT48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBOZXdPcGVyYXRpb25Gb3JtID0gKHtrZXl9KSA9PiB7XHJcblxyXG4gICAgY29uc3QgW25ld09wZXJhdGlvbmZvcm1EYXRhLCBzZXROZXdPcGVyYXRpb25Gb3JtRGF0YV0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiXCIsXHJcbiAgICAgICAgc3RhdHVzOiBcIm9wZW5cIlxyXG4gICAgICB9KVxyXG5cclxuICAgIGNvbnN0IGZvcm1TdWJtaXRIYW5kbGVyID0gKGUpID0+ICB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgaWYgKG5ld09wZXJhdGlvbmZvcm1EYXRhLnRpdGxlICE9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIEFkZE9wZXJhdGlvbnMobmV3T3BlcmF0aW9uZm9ybURhdGEsIGtleSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldE5ld09wZXJhdGlvbkZvcm1EYXRhKFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJcIixcclxuICAgICAgICAgICAgICAgIHN0YXR1czogXCJvcGVuXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbnN0IGlucHV0SGFuZGxlciA9IChlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgICAgICBzZXROZXdPcGVyYXRpb25Gb3JtRGF0YSgocHJldlN0YXRlKT0+KHsuLi5wcmV2U3RhdGUsZGVzY3JpcHRpb246dmFsdWV9KSk7ICAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIFxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtmb3JtU3VibWl0SGFuZGxlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiT3BlcmF0aW9uIGRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0ge25ld09wZXJhdGlvbmZvcm1EYXRhLmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2lucHV0SGFuZGxlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC1hcHBlbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1pbmZvXCIgdHlwZT0nc3VibWl0Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBZGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtcGx1cy1jaXJjbGUgbWwtMVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn0iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJmNDlhYmJiMTUzOGYzOTY2NzQzYlwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiQWRkT3BlcmF0aW9ucyIsIkFkZFRpbWVGb3JtIiwiX3JlZiIsImNhbmNlbEFkZFRpbWUiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJjbGFzc05hbWUiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJzdHlsZSIsIndpZHRoIiwib25DbGljayIsIk5ld09wZXJhdGlvbkZvcm0iLCJfcmVmMiIsImtleSIsIl91c2VTdGF0ZSIsImRlc2NyaXB0aW9uIiwic3RhdHVzIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwibmV3T3BlcmF0aW9uZm9ybURhdGEiLCJzZXROZXdPcGVyYXRpb25Gb3JtRGF0YSIsImZvcm1TdWJtaXRIYW5kbGVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwidGl0bGUiLCJpbnB1dEhhbmRsZXIiLCJ2YWx1ZSIsInRhcmdldCIsInByZXZTdGF0ZSIsIl9vYmplY3RTcHJlYWQiLCJvblN1Ym1pdCIsIm9uQ2hhbmdlIl0sInNvdXJjZVJvb3QiOiIifQ==