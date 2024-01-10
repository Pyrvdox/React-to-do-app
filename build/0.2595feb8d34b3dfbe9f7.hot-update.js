"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 39:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_newtask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34);
/* harmony import */ var _components_showtasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(36);
/* harmony import */ var _components_task__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(37);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var MainApp = function MainApp() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    allTasks = _useState2[0],
    setAllTasks = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    (0,_components_task__WEBPACK_IMPORTED_MODULE_3__.getTasks)(setAllTasks);
  }, [allTasks]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_newtask__WEBPACK_IMPORTED_MODULE_1__["default"], null), allTasks ? allTasks.map(function (task) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_showtasks__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: task.id
    });
  }) : null);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainApp);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("bda6802e14d0e31dff85")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4yNTk1ZmViOGQzNGIzZGZiZTlmNy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFtRDtBQUNSO0FBQ0k7QUFDRjtBQUU3QyxJQUFNTSxPQUFPLEdBQUcsU0FBVkEsT0FBT0EsQ0FBQSxFQUFTO0VBRWxCLElBQUFDLFNBQUEsR0FBZ0NMLCtDQUFRLENBQUMsS0FBSyxDQUFDO0lBQUFNLFVBQUEsR0FBQUMsY0FBQSxDQUFBRixTQUFBO0lBQXhDRyxRQUFRLEdBQUFGLFVBQUE7SUFBRUcsV0FBVyxHQUFBSCxVQUFBO0VBQzVCUCxnREFBUyxDQUFDLFlBQU07SUFDZEksMERBQVEsQ0FBQ00sV0FBVyxDQUFDO0VBQ3ZCLENBQUMsRUFBQyxDQUFDRCxRQUFRLENBQUMsQ0FBQztFQUViLG9CQUNFViwwREFBQSxDQUFBQSx1REFBQSxxQkFDRUEsMERBQUEsQ0FBQ0csMkRBQU8sTUFBRSxDQUFDLEVBQ1ZPLFFBQVEsR0FBR0EsUUFBUSxDQUFDSSxHQUFHLENBQUMsVUFBQ0MsSUFBSTtJQUFBLG9CQUFLZiwwREFBQSxDQUFDSSw2REFBUztNQUFDWSxHQUFHLEVBQUVELElBQUksQ0FBQ0U7SUFBRyxDQUFDLENBQUM7RUFBQSxFQUFDLEdBQUcsSUFDakUsQ0FBQztBQUdULENBQUM7QUFFRCxpRUFBZVgsT0FBTzs7Ozs7Ozs7VUNyQnRCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vanMvbWFpbmFwcC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBOZXdUYXNrIGZyb20gXCIuL2NvbXBvbmVudHMvbmV3dGFza1wiO1xyXG5pbXBvcnQgU2hvd1Rhc2tzIGZyb20gXCIuL2NvbXBvbmVudHMvc2hvd3Rhc2tzXCI7XHJcbmltcG9ydCB7IGdldFRhc2tzIH0gZnJvbSBcIi4vY29tcG9uZW50cy90YXNrXCI7XHJcblxyXG5jb25zdCBNYWluQXBwID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFthbGxUYXNrcywgc2V0QWxsVGFza3NdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgZ2V0VGFza3Moc2V0QWxsVGFza3MpXHJcbiAgICB9LFthbGxUYXNrc10pXHJcbiAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxOZXdUYXNrIC8+XHJcbiAgICAgICAge2FsbFRhc2tzID8gYWxsVGFza3MubWFwKCh0YXNrKSA9PiA8U2hvd1Rhc2tzIGtleT17dGFzay5pZH0vPikgOiBudWxsfVxyXG4gICAgICA8Lz5cclxuICAgIClcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1haW5BcHA7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYmRhNjgwMmUxNGQwZTMxZGZmODVcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIk5ld1Rhc2siLCJTaG93VGFza3MiLCJnZXRUYXNrcyIsIk1haW5BcHAiLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJhbGxUYXNrcyIsInNldEFsbFRhc2tzIiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwibWFwIiwidGFzayIsImtleSIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==