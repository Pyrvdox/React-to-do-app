self["webpackHotUpdatees6_react"](0,{

/***/ 34:
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: C:\\REACT\\ONL_FSB_E_29_React_Warsztat-main\\js\\components\\newtask.js: 'return' outside of function. (29:4)\n\n\u001b[0m \u001b[90m 27 |\u001b[39m     }\u001b[0m\n\u001b[0m \u001b[90m 28 |\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 29 |\u001b[39m     \u001b[36mreturn\u001b[39m (\u001b[0m\n\u001b[0m \u001b[90m    |\u001b[39m     \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 30 |\u001b[39m         \u001b[33m<\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 31 |\u001b[39m             \u001b[33m<\u001b[39m\u001b[33mdiv\u001b[39m className\u001b[33m=\u001b[39m\u001b[32m\"card shadow\"\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 32 |\u001b[39m                 \u001b[33m<\u001b[39m\u001b[33mdiv\u001b[39m className\u001b[33m=\u001b[39m\u001b[32m\"card-body\"\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n    at constructor (C:\\REACT\\ONL_FSB_E_29_React_Warsztat-main\\node_modules\\@babel\\parser\\lib\\index.js:356:19)\n    at JSXParserMixin.raise (C:\\REACT\\ONL_FSB_E_29_React_Warsztat-main\\node_modules\\@babel\\parser\\lib\\index.js:3223:19)\n    at JSXParserMixin.parseReturnStatement (C:\\REACT\\ONL_FSB_E_29_React_Warsztat-main\\node_modules\\@babel\\parser\\lib\\index.js:12995:12)\n    at JSXParserMixin.parseStatementContent (C:\\REACT\\ONL_FSB_E_29_React_Warsztat-main\\node_modules\\@babel\\parser\\lib\\index.js:12621:21)\n    at JSXParserMixin.parseStatementLike (C:\\REACT\\ONL_FSB_E_29_React_Warsztat-main\\node_modules\\@babel\\parser\\lib\\index.js:12588:17)\n    at JSXParserMixin.parseModuleItem (C:\\REACT\\ONL_FSB_E_29_React_Warsztat-main\\node_modules\\@babel\\parser\\lib\\index.js:12565:17)\n    at JSXParserMixin.parseBlockOrModuleBlockBody (C:\\REACT\\ONL_FSB_E_29_React_Warsztat-main\\node_modules\\@babel\\parser\\lib\\index.js:13189:36)\n    at JSXParserMixin.parseBlockBody (C:\\REACT\\ONL_FSB_E_29_React_Warsztat-main\\node_modules\\@babel\\parser\\lib\\index.js:13182:10)\n    at JSXParserMixin.parseProgram (C:\\REACT\\ONL_FSB_E_29_React_Warsztat-main\\node_modules\\@babel\\parser\\lib\\index.js:12464:10)\n    at JSXParserMixin.parseTopLevel (C:\\REACT\\ONL_FSB_E_29_React_Warsztat-main\\node_modules\\@babel\\parser\\lib\\index.js:12454:25)");

/***/ }),

/***/ 39:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_newtask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34);
/* harmony import */ var _components_newtask__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_newtask__WEBPACK_IMPORTED_MODULE_1__);
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_components_newtask__WEBPACK_IMPORTED_MODULE_1___default()), null), allTasks ? allTasks.map(function (task) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_showtasks__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: task.id,
      task: task
    });
  }) : null);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainApp);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("ed5621b7179c032ce745")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4zMDJmOTZhNDMyZDRhODU0MDQyOS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ1I7QUFDSTtBQUNGO0FBRTdDLElBQU1NLE9BQU8sR0FBRyxTQUFWQSxPQUFPQSxDQUFBLEVBQVM7RUFFbEIsSUFBQUMsU0FBQSxHQUFnQ0wsK0NBQVEsQ0FBQyxLQUFLLENBQUM7SUFBQU0sVUFBQSxHQUFBQyxjQUFBLENBQUFGLFNBQUE7SUFBeENHLFFBQVEsR0FBQUYsVUFBQTtJQUFFRyxXQUFXLEdBQUFILFVBQUE7RUFDNUJQLGdEQUFTLENBQUMsWUFBTTtJQUNkSSwwREFBUSxDQUFDTSxXQUFXLENBQUM7RUFDdkIsQ0FBQyxFQUFDLENBQUNELFFBQVEsQ0FBQyxDQUFDO0VBRWIsb0JBQ0VWLDBEQUFBLENBQUFBLHVEQUFBLHFCQUNFQSwwREFBQSxDQUFDRyw0REFBTyxNQUFFLENBQUMsRUFDVk8sUUFBUSxHQUFHQSxRQUFRLENBQUNJLEdBQUcsQ0FBQyxVQUFDQyxJQUFJO0lBQUEsb0JBQUtmLDBEQUFBLENBQUNJLDZEQUFTO01BQUNZLEdBQUcsRUFBRUQsSUFBSSxDQUFDRSxFQUFHO01BQUNGLElBQUksRUFBRUE7SUFBSyxDQUFFLENBQUM7RUFBQSxFQUFDLEdBQUcsSUFDOUUsQ0FBQztBQUdULENBQUM7QUFFRCxpRUFBZVQsT0FBTzs7Ozs7Ozs7VUNyQnRCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vanMvbWFpbmFwcC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBOZXdUYXNrIGZyb20gXCIuL2NvbXBvbmVudHMvbmV3dGFza1wiO1xyXG5pbXBvcnQgU2hvd1Rhc2tzIGZyb20gXCIuL2NvbXBvbmVudHMvc2hvd3Rhc2tzXCI7XHJcbmltcG9ydCB7IGdldFRhc2tzIH0gZnJvbSBcIi4vY29tcG9uZW50cy90YXNrXCI7XHJcblxyXG5jb25zdCBNYWluQXBwID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFthbGxUYXNrcywgc2V0QWxsVGFza3NdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgZ2V0VGFza3Moc2V0QWxsVGFza3MpXHJcbiAgICB9LFthbGxUYXNrc10pXHJcbiAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxOZXdUYXNrIC8+XHJcbiAgICAgICAge2FsbFRhc2tzID8gYWxsVGFza3MubWFwKCh0YXNrKSA9PiA8U2hvd1Rhc2tzIGtleT17dGFzay5pZH0gdGFzaz17dGFza30gLz4pIDogbnVsbH1cclxuICAgICAgPC8+XHJcbiAgICApXHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYWluQXBwOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImVkNTYyMWI3MTc5YzAzMmNlNzQ1XCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJOZXdUYXNrIiwiU2hvd1Rhc2tzIiwiZ2V0VGFza3MiLCJNYWluQXBwIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwiYWxsVGFza3MiLCJzZXRBbGxUYXNrcyIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsIm1hcCIsInRhc2siLCJrZXkiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=