"use strict";
self["webpackHotUpdatees6_react"](0,{

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

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("f4038a46a05a566c3363")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FDTCxDQUNKLENBQ1AsQ0FBQztBQUVYLENBQUM7QUFFRCxpRUFBZUUsT0FBTzs7Ozs7Ozs7VUN4RXRCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vanMvY29tcG9uZW50cy9uZXd0YXNrLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBOZXdUYXNrQnV0dG9uIH0gZnJvbSBcIi4vYnV0dG9uc1wiO1xyXG5pbXBvcnQgeyBBZGRUYXNrcyB9IGZyb20gXCIuL3Rhc2tcIjtcclxuXHJcbmNvbnN0IE5ld1Rhc2sgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgW25ld1Rhc2tmb3JtRGF0YSwgc2V0TmV3VGFza0Zvcm1EYXRhXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICB0aXRsZTogXCJcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJcIixcclxuICAgICAgICBzdGF0dXM6IFwib3BlblwiXHJcbiAgICAgIH0pXHJcblxyXG4gICAgY29uc3QgZm9ybVN1Ym1pdEhhbmRsZXIgPSAoZSkgPT4gIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICBpZiAobmV3VGFza2Zvcm1EYXRhLnRpdGxlICE9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIEFkZFRhc2tzKG5ld1Rhc2tmb3JtRGF0YSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldE5ld1Rhc2tGb3JtRGF0YShcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJcIixcclxuICAgICAgICAgICAgICAgIHN0YXR1czogXCJvcGVuXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxuXHJcbiAgICBjb25zdCBpbnB1dEhhbmRsZXIgPSAoZSwgdHlwZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJ0aXRsZVwiOlxyXG4gICAgICAgICAgICAgICAgc2V0TmV3VGFza0Zvcm1EYXRhKChwcmV2U3RhdGUpPT4oey4uLnByZXZTdGF0ZSx0aXRsZTp2YWx1ZX0pKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiZGVzY3JpcHRpb25cIjpcclxuICAgICAgICAgICAgICAgIHNldE5ld1Rhc2tGb3JtRGF0YSgocHJldlN0YXRlKT0+KHsuLi5wcmV2U3RhdGUsZGVzY3JpcHRpb246dmFsdWV9KSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgc2hhZG93XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+TmV3IHRhc2s8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtmb3JtU3VibWl0SGFuZGxlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ0aXRsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUaXRsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e25ld1Rhc2tmb3JtRGF0YS50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUsIHR5cGUpID0+IGlucHV0SGFuZGxlcihlLCBcInRpdGxlXCIpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkRlc2NyaXB0aW9uXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e25ld1Rhc2tmb3JtRGF0YS5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUsIHR5cGUpID0+IGlucHV0SGFuZGxlcihlLCBcImRlc2NyaXB0aW9uXCIpfSAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE5ld1Rhc2tCdXR0b24vPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmV3VGFzazsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJmNDAzOGE0NmEwNWE1NjZjMzM2M1wiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiTmV3VGFza0J1dHRvbiIsIkFkZFRhc2tzIiwiTmV3VGFzayIsIl91c2VTdGF0ZSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJzdGF0dXMiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJuZXdUYXNrZm9ybURhdGEiLCJzZXROZXdUYXNrRm9ybURhdGEiLCJmb3JtU3VibWl0SGFuZGxlciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImlucHV0SGFuZGxlciIsInR5cGUiLCJ2YWx1ZSIsInRhcmdldCIsInByZXZTdGF0ZSIsIl9vYmplY3RTcHJlYWQiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJjbGFzc05hbWUiLCJvblN1Ym1pdCIsIm5hbWUiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIl0sInNvdXJjZVJvb3QiOiIifQ==