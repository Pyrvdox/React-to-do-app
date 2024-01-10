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
      AddTask(newTaskformData);
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
    value: title,
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
    value: description,
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
/******/ 	__webpack_require__.h = () => ("8ce01b1de44eacb8d3df")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WSxDQUFDTCxDQUFDLEVBQUUsYUFBYSxDQUFDO0lBQUE7RUFBQyxDQUNyRCxDQUNKLENBQUMsZUFDTmQsMERBQUEsQ0FBQ0UsbURBQWEsTUFBQyxDQUNiLENBQ0wsQ0FDSixDQUNQLENBQUM7QUFFWCxDQUFDO0FBRUQsaUVBQWVFLE9BQU87Ozs7Ozs7O1VDN0V0QiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uL2pzL2NvbXBvbmVudHMvbmV3dGFzay5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTmV3VGFza0J1dHRvbiB9IGZyb20gXCIuL2J1dHRvbnNcIjtcclxuaW1wb3J0IHsgQWRkVGFza3MgfSBmcm9tIFwiLi90YXNrXCI7XHJcblxyXG5jb25zdCBOZXdUYXNrID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtuZXdUYXNrZm9ybURhdGEsIHNldE5ld1Rhc2tGb3JtRGF0YV0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgdGl0bGU6IFwiXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiXCIsXHJcbiAgICAgICAgc3RhdHVzOiBcIm9wZW5cIlxyXG4gICAgICB9KVxyXG5cclxuICAgIGNvbnN0IGZvcm1TdWJtaXRIYW5kbGVyID0gKGUpID0+ICB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgaWYgKHRpdGxlICE9PSBcIlwiICYmIHR5cGVvZiBvbk5ld1Rhc2sgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICBjb25zdCBuZXdUYXNrID0ge1xyXG4gICAgICAgICAgICB0aXRsZTogdGl0bGUsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgc3RhdHVzOiBcIm9wZW5cIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIEFkZFRhc2sobmV3VGFza2Zvcm1EYXRhKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0TmV3VGFza0Zvcm1EYXRhKFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJcIixcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgc3RhdHVzOiBcIm9wZW5cIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIFxyXG5cclxuICAgIGNvbnN0IGlucHV0SGFuZGxlciA9IChlLCB0eXBlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBcInRpdGxlXCI6XHJcbiAgICAgICAgICAgICAgICBzZXROZXdUYXNrRm9ybURhdGEoKHByZXZTdGF0ZSk9Pih7Li4ucHJldlN0YXRlLHRpdGxlOnZhbHVlfSkpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJkZXNjcmlwdGlvblwiOlxyXG4gICAgICAgICAgICAgICAgc2V0TmV3VGFza0Zvcm1EYXRhKChwcmV2U3RhdGUpPT4oey4uLnByZXZTdGF0ZSxkZXNjcmlwdGlvbjp2YWx1ZX0pKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBzaGFkb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj5OZXcgdGFzazwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2Zvcm1TdWJtaXRIYW5kbGVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInRpdGxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlRpdGxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlLCB0eXBlKSA9PiBpbnB1dEhhbmRsZXIoZSwgXCJ0aXRsZVwiKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJEZXNjcmlwdGlvblwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUsIHR5cGUpID0+IGlucHV0SGFuZGxlcihlLCBcImRlc2NyaXB0aW9uXCIpfSAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE5ld1Rhc2tCdXR0b24vPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmV3VGFzazsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI4Y2UwMWIxZGU0NGVhY2I4ZDNkZlwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiTmV3VGFza0J1dHRvbiIsIkFkZFRhc2tzIiwiTmV3VGFzayIsIl91c2VTdGF0ZSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJzdGF0dXMiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJuZXdUYXNrZm9ybURhdGEiLCJzZXROZXdUYXNrRm9ybURhdGEiLCJmb3JtU3VibWl0SGFuZGxlciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIm9uTmV3VGFzayIsIm5ld1Rhc2siLCJBZGRUYXNrIiwiaW5wdXRIYW5kbGVyIiwidHlwZSIsInZhbHVlIiwidGFyZ2V0IiwicHJldlN0YXRlIiwiX29iamVjdFNwcmVhZCIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsImNsYXNzTmFtZSIsIm9uU3VibWl0IiwibmFtZSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiXSwic291cmNlUm9vdCI6IiJ9