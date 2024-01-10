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
  var _useState = useState({
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
      onNewTask(newTask);
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

/***/ }),

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
/******/ 	__webpack_require__.h = () => ("cc37a7a0f63990c3fe38")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4xYjRjNGVjYzg4ZThhZDA4NWFhZi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ2dCO0FBQ1I7QUFFbEMsSUFBTUcsT0FBTyxHQUFHLFNBQVZBLE9BQU9BLENBQUEsRUFBUztFQUVsQixJQUFBQyxTQUFBLEdBQThDQyxRQUFRLENBQUM7TUFDbkRDLEtBQUssRUFBRSxFQUFFO01BQ1RDLFdBQVcsRUFBRSxFQUFFO01BQ2ZDLE1BQU0sRUFBRTtJQUNWLENBQUMsQ0FBQztJQUFBQyxVQUFBLEdBQUFDLGNBQUEsQ0FBQU4sU0FBQTtJQUpHTyxlQUFlLEdBQUFGLFVBQUE7SUFBRUcsa0JBQWtCLEdBQUFILFVBQUE7RUFNMUMsSUFBTUksaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFpQkEsQ0FBSUMsQ0FBQyxFQUFNO0lBQzlCQSxDQUFDLENBQUNDLGNBQWMsQ0FBQyxDQUFDO0lBQ2xCLElBQUlULEtBQUssS0FBSyxFQUFFLElBQUksT0FBT1UsU0FBUyxLQUFLLFVBQVUsRUFBRTtNQUNqRCxJQUFNQyxPQUFPLEdBQUc7UUFDaEJYLEtBQUssRUFBRUEsS0FBSztRQUNaQyxXQUFXLEVBQUVBLFdBQVc7UUFDeEJDLE1BQU0sRUFBRTtNQUNSLENBQUM7TUFDRFEsU0FBUyxDQUFDQyxPQUFPLENBQUM7SUFDdEI7SUFFQUwsa0JBQWtCLENBQ2Q7TUFDSU4sS0FBSyxFQUFFLEVBQUU7TUFDVEMsV0FBVyxFQUFFLEVBQUU7TUFDZkMsTUFBTSxFQUFFO0lBQ1osQ0FDSixDQUFDO0VBRUwsQ0FBQztFQUdELElBQU1VLFlBQVksR0FBRyxTQUFmQSxZQUFZQSxDQUFJSixDQUFDLEVBQUVLLElBQUksRUFBSztJQUM5QixJQUFNQyxLQUFLLEdBQUdOLENBQUMsQ0FBQ08sTUFBTSxDQUFDRCxLQUFLO0lBQzVCLFFBQVFELElBQUk7TUFDUixLQUFLLE9BQU87UUFDUlAsa0JBQWtCLENBQUMsVUFBQ1UsU0FBUztVQUFBLE9BQUFDLGFBQUEsQ0FBQUEsYUFBQSxLQUFRRCxTQUFTO1lBQUNoQixLQUFLLEVBQUNjO1VBQUs7UUFBQSxDQUFFLENBQUM7UUFDN0Q7TUFDSixLQUFLLGFBQWE7UUFDZFIsa0JBQWtCLENBQUMsVUFBQ1UsU0FBUztVQUFBLE9BQUFDLGFBQUEsQ0FBQUEsYUFBQSxLQUFRRCxTQUFTO1lBQUNmLFdBQVcsRUFBQ2E7VUFBSztRQUFBLENBQUUsQ0FBQztRQUNuRTtJQUNSO0VBQ0osQ0FBQztFQUVELG9CQUNJcEIsMERBQUEsQ0FBQUEsdURBQUEscUJBQ0lBLDBEQUFBO0lBQUswQixTQUFTLEVBQUM7RUFBYSxnQkFDeEIxQiwwREFBQTtJQUFLMEIsU0FBUyxFQUFDO0VBQVcsZ0JBQ3RCMUIsMERBQUE7SUFBSTBCLFNBQVMsRUFBQztFQUFZLEdBQUMsVUFBWSxDQUFDLGVBQ3hDMUIsMERBQUEsNEJBQ0lBLDBEQUFBO0lBQUswQixTQUFTLEVBQUM7RUFBWSxnQkFDdkIxQiwwREFBQTtJQUFPbUIsSUFBSSxFQUFDLE1BQU07SUFDZE8sU0FBUyxFQUFDLGNBQWM7SUFDeEJDLElBQUksRUFBQyxPQUFPO0lBQ1pDLFdBQVcsRUFBQyxPQUFPO0lBQ25CUixLQUFLLEVBQUVULGVBQWUsQ0FBQ0wsS0FBTTtJQUM3QnVCLFFBQVEsRUFBRSxTQUFBQSxTQUFDZixDQUFDLEVBQUVLLElBQUk7TUFBQSxPQUFLRCxZQUFZLENBQUNKLENBQUMsRUFBRSxPQUFPLENBQUM7SUFBQTtFQUFDLENBQUUsQ0FDckQsQ0FBQyxlQUNOZCwwREFBQTtJQUFLMEIsU0FBUyxFQUFDO0VBQVksZ0JBQ3ZCMUIsMERBQUE7SUFBT21CLElBQUksRUFBQyxNQUFNO0lBQ2RPLFNBQVMsRUFBQyxjQUFjO0lBQ3hCQyxJQUFJLEVBQUMsYUFBYTtJQUNsQkMsV0FBVyxFQUFDLGFBQWE7SUFDekJSLEtBQUssRUFBRVQsZUFBZSxDQUFDSixXQUFZO0lBQ25Dc0IsUUFBUSxFQUFFLFNBQUFBLFNBQUNmLENBQUMsRUFBRUssSUFBSTtNQUFBLE9BQUtELFlBQVksQ0FBQ0osQ0FBQyxFQUFFLGFBQWEsQ0FBQztJQUFBO0VBQUMsQ0FDckQsQ0FDSixDQUFDLGVBQ05kLDBEQUFBLENBQUNDLG1EQUFhLE1BQUUsQ0FDZCxDQUNMLENBQ0osQ0FDUCxDQUFDO0FBRVgsQ0FBQztBQUVELGlFQUFlRSxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0U2QjtBQUNSO0FBQ0k7QUFDRjtBQUU3QyxJQUFNOEIsT0FBTyxHQUFHLFNBQVZBLE9BQU9BLENBQUEsRUFBUztFQUVsQixJQUFBN0IsU0FBQSxHQUFnQ0MsK0NBQVEsQ0FBQyxLQUFLLENBQUM7SUFBQUksVUFBQSxHQUFBQyxjQUFBLENBQUFOLFNBQUE7SUFBeEM4QixRQUFRLEdBQUF6QixVQUFBO0lBQUUwQixXQUFXLEdBQUExQixVQUFBO0VBQzVCcUIsZ0RBQVMsQ0FBQyxZQUFNO0lBQ2RFLDBEQUFRLENBQUNHLFdBQVcsQ0FBQztFQUN2QixDQUFDLEVBQUMsQ0FBQ0QsUUFBUSxDQUFDLENBQUM7RUFFYixvQkFDRWxDLDBEQUFBLENBQUFBLHVEQUFBLHFCQUNFQSwwREFBQSxDQUFDRywyREFBTyxNQUFFLENBQUMsRUFDVitCLFFBQVEsR0FBR0EsUUFBUSxDQUFDRSxHQUFHLENBQUMsVUFBQ0MsSUFBSTtJQUFBLG9CQUFLckMsMERBQUEsQ0FBQytCLDZEQUFTO01BQUNPLEdBQUcsRUFBRUQsSUFBSSxDQUFDRSxFQUFHO01BQUNGLElBQUksRUFBRUE7SUFBSyxDQUFFLENBQUM7RUFBQSxFQUFDLEdBQUcsSUFDOUUsQ0FBQztBQUdULENBQUM7QUFFRCxpRUFBZUosT0FBTzs7Ozs7Ozs7VUNyQnRCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vanMvY29tcG9uZW50cy9uZXd0YXNrLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uL2pzL21haW5hcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IE5ld1Rhc2tCdXR0b24gfSBmcm9tIFwiLi9idXR0b25zXCI7XHJcbmltcG9ydCB7IEFkZFRhc2tzIH0gZnJvbSBcIi4vdGFza1wiO1xyXG5cclxuY29uc3QgTmV3VGFzayA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBbbmV3VGFza2Zvcm1EYXRhLCBzZXROZXdUYXNrRm9ybURhdGFdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIHRpdGxlOiBcIlwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlwiLFxyXG4gICAgICAgIHN0YXR1czogXCJvcGVuXCJcclxuICAgICAgfSlcclxuXHJcbiAgICBjb25zdCBmb3JtU3VibWl0SGFuZGxlciA9IChlKSA9PiAge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgIGlmICh0aXRsZSAhPT0gXCJcIiAmJiB0eXBlb2Ygb25OZXdUYXNrID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgICAgY29uc3QgbmV3VGFzayA9IHtcclxuICAgICAgICAgICAgdGl0bGU6IHRpdGxlLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgIHN0YXR1czogXCJvcGVuXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvbk5ld1Rhc2sobmV3VGFzaylcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldE5ld1Rhc2tGb3JtRGF0YShcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJcIixcclxuICAgICAgICAgICAgICAgIHN0YXR1czogXCJvcGVuXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxuXHJcbiAgICBjb25zdCBpbnB1dEhhbmRsZXIgPSAoZSwgdHlwZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJ0aXRsZVwiOlxyXG4gICAgICAgICAgICAgICAgc2V0TmV3VGFza0Zvcm1EYXRhKChwcmV2U3RhdGUpPT4oey4uLnByZXZTdGF0ZSx0aXRsZTp2YWx1ZX0pKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiZGVzY3JpcHRpb25cIjpcclxuICAgICAgICAgICAgICAgIHNldE5ld1Rhc2tGb3JtRGF0YSgocHJldlN0YXRlKT0+KHsuLi5wcmV2U3RhdGUsZGVzY3JpcHRpb246dmFsdWV9KSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgc2hhZG93XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+TmV3IHRhc2s8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDxmb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtuZXdUYXNrZm9ybURhdGEudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlLCB0eXBlKSA9PiBpbnB1dEhhbmRsZXIoZSwgXCJ0aXRsZVwiKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJEZXNjcmlwdGlvblwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtuZXdUYXNrZm9ybURhdGEuZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlLCB0eXBlKSA9PiBpbnB1dEhhbmRsZXIoZSwgXCJkZXNjcmlwdGlvblwiKX0gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxOZXdUYXNrQnV0dG9uIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOZXdUYXNrOyIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBOZXdUYXNrIGZyb20gXCIuL2NvbXBvbmVudHMvbmV3dGFza1wiO1xyXG5pbXBvcnQgU2hvd1Rhc2tzIGZyb20gXCIuL2NvbXBvbmVudHMvc2hvd3Rhc2tzXCI7XHJcbmltcG9ydCB7IGdldFRhc2tzIH0gZnJvbSBcIi4vY29tcG9uZW50cy90YXNrXCI7XHJcblxyXG5jb25zdCBNYWluQXBwID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFthbGxUYXNrcywgc2V0QWxsVGFza3NdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgZ2V0VGFza3Moc2V0QWxsVGFza3MpXHJcbiAgICB9LFthbGxUYXNrc10pXHJcbiAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxOZXdUYXNrIC8+XHJcbiAgICAgICAge2FsbFRhc2tzID8gYWxsVGFza3MubWFwKCh0YXNrKSA9PiA8U2hvd1Rhc2tzIGtleT17dGFzay5pZH0gdGFzaz17dGFza30gLz4pIDogbnVsbH1cclxuICAgICAgPC8+XHJcbiAgICApXHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYWluQXBwOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImNjMzdhN2EwZjYzOTkwYzNmZTM4XCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiTmV3VGFza0J1dHRvbiIsIkFkZFRhc2tzIiwiTmV3VGFzayIsIl91c2VTdGF0ZSIsInVzZVN0YXRlIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInN0YXR1cyIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsIm5ld1Rhc2tmb3JtRGF0YSIsInNldE5ld1Rhc2tGb3JtRGF0YSIsImZvcm1TdWJtaXRIYW5kbGVyIiwiZSIsInByZXZlbnREZWZhdWx0Iiwib25OZXdUYXNrIiwibmV3VGFzayIsImlucHV0SGFuZGxlciIsInR5cGUiLCJ2YWx1ZSIsInRhcmdldCIsInByZXZTdGF0ZSIsIl9vYmplY3RTcHJlYWQiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJjbGFzc05hbWUiLCJuYW1lIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsInVzZUVmZmVjdCIsIlNob3dUYXNrcyIsImdldFRhc2tzIiwiTWFpbkFwcCIsImFsbFRhc2tzIiwic2V0QWxsVGFza3MiLCJtYXAiLCJ0YXNrIiwia2V5IiwiaWQiXSwic291cmNlUm9vdCI6IiJ9