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
    if (title !== "" && typeof onNewTask === "function") {
      var newTask = {
        title: title,
        description: description,
        status: "open"
      };
      AddTask(newTask);
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
  }, "New task"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
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
/******/ 	__webpack_require__.h = () => ("e0756bf7eba2b9a18ff4")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQ0wsQ0FBQyxFQUFFLGFBQWEsQ0FBQztJQUFBO0VBQUMsQ0FDckQsQ0FDSixDQUFDLGVBQ05kLDBEQUFBLENBQUNFLG1EQUFhLE1BQUUsQ0FDZCxDQUNMLENBQ0osQ0FDUCxDQUFDO0FBRVgsQ0FBQztBQUVELGlFQUFlRSxPQUFPOzs7Ozs7OztVQzdFdEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9qcy9jb21wb25lbnRzL25ld3Rhc2suanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IE5ld1Rhc2tCdXR0b24gfSBmcm9tIFwiLi9idXR0b25zXCI7XHJcbmltcG9ydCB7IEFkZFRhc2tzIH0gZnJvbSBcIi4vdGFza1wiO1xyXG5cclxuY29uc3QgTmV3VGFzayA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBbbmV3VGFza2Zvcm1EYXRhLCBzZXROZXdUYXNrRm9ybURhdGFdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIHRpdGxlOiBcIlwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlwiLFxyXG4gICAgICAgIHN0YXR1czogXCJvcGVuXCJcclxuICAgICAgfSlcclxuXHJcbiAgICBjb25zdCBmb3JtU3VibWl0SGFuZGxlciA9IChlKSA9PiAge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgIGlmICh0aXRsZSAhPT0gXCJcIiAmJiB0eXBlb2Ygb25OZXdUYXNrID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgICAgY29uc3QgbmV3VGFzayA9IHtcclxuICAgICAgICAgICAgdGl0bGU6IHRpdGxlLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgIHN0YXR1czogXCJvcGVuXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBBZGRUYXNrKG5ld1Rhc2spXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXROZXdUYXNrRm9ybURhdGEoXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBzdGF0dXM6IFwib3BlblwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcblxyXG4gICAgY29uc3QgaW5wdXRIYW5kbGVyID0gKGUsIHR5cGUpID0+IHtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwidGl0bGVcIjpcclxuICAgICAgICAgICAgICAgIHNldE5ld1Rhc2tGb3JtRGF0YSgocHJldlN0YXRlKT0+KHsuLi5wcmV2U3RhdGUsdGl0bGU6dmFsdWV9KSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImRlc2NyaXB0aW9uXCI6XHJcbiAgICAgICAgICAgICAgICBzZXROZXdUYXNrRm9ybURhdGEoKHByZXZTdGF0ZSk9Pih7Li4ucHJldlN0YXRlLGRlc2NyaXB0aW9uOnZhbHVlfSkpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIHNoYWRvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPk5ldyB0YXNrPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInRpdGxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlRpdGxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bmV3VGFza2Zvcm1EYXRhLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSwgdHlwZSkgPT4gaW5wdXRIYW5kbGVyKGUsIFwidGl0bGVcIil9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRGVzY3JpcHRpb25cIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bmV3VGFza2Zvcm1EYXRhLmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSwgdHlwZSkgPT4gaW5wdXRIYW5kbGVyKGUsIFwiZGVzY3JpcHRpb25cIil9ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TmV3VGFza0J1dHRvbiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmV3VGFzazsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJlMDc1NmJmN2ViYTJiOWExOGZmNFwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiTmV3VGFza0J1dHRvbiIsIkFkZFRhc2tzIiwiTmV3VGFzayIsIl91c2VTdGF0ZSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJzdGF0dXMiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJuZXdUYXNrZm9ybURhdGEiLCJzZXROZXdUYXNrRm9ybURhdGEiLCJmb3JtU3VibWl0SGFuZGxlciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIm9uTmV3VGFzayIsIm5ld1Rhc2siLCJBZGRUYXNrIiwiaW5wdXRIYW5kbGVyIiwidHlwZSIsInZhbHVlIiwidGFyZ2V0IiwicHJldlN0YXRlIiwiX29iamVjdFNwcmVhZCIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsImNsYXNzTmFtZSIsIm5hbWUiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIl0sInNvdXJjZVJvb3QiOiIifQ==