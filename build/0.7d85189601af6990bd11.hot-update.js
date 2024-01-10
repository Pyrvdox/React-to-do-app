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
/******/ 	__webpack_require__.h = () => ("0034d14b8013495133d0")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC43ZDg1MTg5NjAxYWY2OTkwYmQxMS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFtRDtBQUNSO0FBQ0k7QUFDRjtBQUU3QyxJQUFNTSxPQUFPLEdBQUcsU0FBVkEsT0FBT0EsQ0FBQSxFQUFTO0VBRWxCLElBQUFDLFNBQUEsR0FBZ0NMLCtDQUFRLENBQUMsS0FBSyxDQUFDO0lBQUFNLFVBQUEsR0FBQUMsY0FBQSxDQUFBRixTQUFBO0lBQXhDRyxRQUFRLEdBQUFGLFVBQUE7SUFBRUcsV0FBVyxHQUFBSCxVQUFBO0VBQzVCUCxnREFBUyxDQUFDLFlBQU07SUFDZEksMERBQVEsQ0FBQ00sV0FBVyxDQUFDO0VBQ3ZCLENBQUMsRUFBQyxDQUFDRCxRQUFRLENBQUMsQ0FBQztFQUliLG9CQUNFViwwREFBQSxDQUFBQSx1REFBQSxxQkFDRUEsMERBQUEsQ0FBQ0csMkRBQU8sTUFBRSxDQUFDLEVBQ1ZPLFFBQVEsR0FBR0EsUUFBUSxDQUFDSSxHQUFHLENBQUMsVUFBQ0MsSUFBSTtJQUFBLG9CQUFLZiwwREFBQSxDQUFDSSw2REFBUztNQUFDWSxHQUFHLEVBQUVELElBQUksQ0FBQ0UsRUFBRztNQUFDRixJQUFJLEVBQUVBO0lBQUssQ0FBRSxDQUFDO0VBQUEsRUFBQyxHQUFHLElBQzlFLENBQUM7QUFHVCxDQUFDO0FBRUQsaUVBQWVULE9BQU87Ozs7Ozs7O1VDdkJ0QiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uL2pzL21haW5hcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTmV3VGFzayBmcm9tIFwiLi9jb21wb25lbnRzL25ld3Rhc2tcIjtcclxuaW1wb3J0IFNob3dUYXNrcyBmcm9tIFwiLi9jb21wb25lbnRzL3Nob3d0YXNrc1wiO1xyXG5pbXBvcnQgeyBnZXRUYXNrcyB9IGZyb20gXCIuL2NvbXBvbmVudHMvdGFza1wiO1xyXG5cclxuY29uc3QgTWFpbkFwcCA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBbYWxsVGFza3MsIHNldEFsbFRhc2tzXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIGdldFRhc2tzKHNldEFsbFRhc2tzKVxyXG4gICAgfSxbYWxsVGFza3NdKVxyXG5cclxuICAgIFxyXG4gIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICA8TmV3VGFzayAvPlxyXG4gICAgICAgIHthbGxUYXNrcyA/IGFsbFRhc2tzLm1hcCgodGFzaykgPT4gPFNob3dUYXNrcyBrZXk9e3Rhc2suaWR9IHRhc2s9e3Rhc2t9IC8+KSA6IG51bGx9XHJcbiAgICAgIDwvPlxyXG4gICAgKVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFpbkFwcDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIwMDM0ZDE0YjgwMTM0OTUxMzNkMFwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTmV3VGFzayIsIlNob3dUYXNrcyIsImdldFRhc2tzIiwiTWFpbkFwcCIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsImFsbFRhc2tzIiwic2V0QWxsVGFza3MiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJtYXAiLCJ0YXNrIiwia2V5IiwiaWQiXSwic291cmNlUm9vdCI6IiJ9