self["webpackHotUpdatees6_react"](0,{

/***/ 41:
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: C:\\REACT\\ONL_FSB_E_29_React_Warsztat-main\\js\\components\\showoperations.js: Unexpected keyword 'return'. (20:4)\n\n\u001b[0m \u001b[90m 18 |\u001b[39m     \u001b[36mconst\u001b[39m \u001b[0m\n\u001b[0m \u001b[90m 19 |\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 20 |\u001b[39m     \u001b[36mreturn\u001b[39m (\u001b[0m\n\u001b[0m \u001b[90m    |\u001b[39m     \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 21 |\u001b[39m         \u001b[33m<\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 22 |\u001b[39m             \u001b[33m<\u001b[39m\u001b[33mli\u001b[39m className\u001b[33m=\u001b[39m\u001b[32m\"list-group-item d-flex justify-content-between align-items-center\"\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 23 |\u001b[39m                 \u001b[33m<\u001b[39m\u001b[33mdiv\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n    at constructor (C:\\REACT\\ONL_FSB_E_29_React_Warsztat-main\\node_modules\\@babel\\parser\\lib\\index.js:356:19)\n    at JSXParserMixin.raise (C:\\REACT\\ONL_FSB_E_29_React_Warsztat-main\\node_modules\\@babel\\parser\\lib\\index.js:3223:19)\n    at JSXParserMixin.checkReservedWord (C:\\REACT\\ONL_FSB_E_29_React_Warsztat-main\\node_modules\\@babel\\parser\\lib\\index.js:12064:12)\n    at JSXParserMixin.parseIdentifierName (C:\\REACT\\ONL_FSB_E_29_React_Warsztat-main\\node_modules\\@babel\\parser\\lib\\index.js:12051:12)\n    at JSXParserMixin.parseIdentifier (C:\\REACT\\ONL_FSB_E_29_React_Warsztat-main\\node_modules\\@babel\\parser\\lib\\index.js:12026:23)\n    at JSXParserMixin.parseBindingAtom (C:\\REACT\\ONL_FSB_E_29_React_Warsztat-main\\node_modules\\@babel\\parser\\lib\\index.js:7294:17)\n    at JSXParserMixin.parseVarId (C:\\REACT\\ONL_FSB_E_29_React_Warsztat-main\\node_modules\\@babel\\parser\\lib\\index.js:13279:21)\n    at JSXParserMixin.parseVar (C:\\REACT\\ONL_FSB_E_29_React_Warsztat-main\\node_modules\\@babel\\parser\\lib\\index.js:13258:12)\n    at JSXParserMixin.parseVarStatement (C:\\REACT\\ONL_FSB_E_29_React_Warsztat-main\\node_modules\\@babel\\parser\\lib\\index.js:13100:10)\n    at JSXParserMixin.parseStatementContent (C:\\REACT\\ONL_FSB_E_29_React_Warsztat-main\\node_modules\\@babel\\parser\\lib\\index.js:12683:23)");

/***/ }),

/***/ 36:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35);
/* harmony import */ var _operation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40);
/* harmony import */ var _showoperations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41);
/* harmony import */ var _showoperations__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_showoperations__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(42);
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(37);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var ShowTasks = function ShowTasks(_ref) {
  var task = _ref.task;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    allOperations = _useState2[0],
    setAllOperations = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    (0,_operation__WEBPACK_IMPORTED_MODULE_2__.getOperations)(task.id, setAllOperations);
  }, [allOperations]);
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    addNewOperation = _useState4[0],
    setAddNewOperation = _useState4[1];
  var AddOpertaionSwitch = function AddOpertaionSwitch() {
    setAddNewOperation(!addNewOperation);
  };
  var DeleteTask = function DeleteTask() {
    (0,_task__WEBPACK_IMPORTED_MODULE_5__.deleteTasks)(console.log(task.id), task.id);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "card mt-5 shadow-sm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "card-header d-flex justify-content-between align-items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h5", null, task.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h6", {
    className: "card-subtitle text-muted"
  }, task.description)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_buttons__WEBPACK_IMPORTED_MODULE_1__.AddOperationButton, {
    switcher: AddOpertaionSwitch
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_buttons__WEBPACK_IMPORTED_MODULE_1__.FinishTaskButton, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_buttons__WEBPACK_IMPORTED_MODULE_1__.TrashButton, {
    deleteAction: DeleteTask
  }))), addNewOperation ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_forms__WEBPACK_IMPORTED_MODULE_4__.NewOperationForm, {
    taskID: task.id
  }) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "list-group list-group-flush"
  }, allOperations ? allOperations.map(function (Operation) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_showoperations__WEBPACK_IMPORTED_MODULE_3___default()), {
      key: Operation.id,
      Operation: Operation
    });
  }) : null)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShowTasks);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("0dbf8c58ac886367016b")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC40YmJmNzMwMjVmYWIxMzQ3MGFmZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDd0I7QUFDL0I7QUFDRTtBQUNOO0FBQ0g7QUFFckMsSUFBTVUsU0FBUyxHQUFHLFNBQVpBLFNBQVNBLENBQUFDLElBQUEsRUFBZTtFQUFBLElBQVZDLElBQUksR0FBQUQsSUFBQSxDQUFKQyxJQUFJO0VBRXBCLElBQUFDLFNBQUEsR0FBMENYLCtDQUFRLENBQUMsS0FBSyxDQUFDO0lBQUFZLFVBQUEsR0FBQUMsY0FBQSxDQUFBRixTQUFBO0lBQWxERyxhQUFhLEdBQUFGLFVBQUE7SUFBRUcsZ0JBQWdCLEdBQUFILFVBQUE7RUFDdENiLGdEQUFTLENBQUMsWUFBTTtJQUNaSyx5REFBYSxDQUFDTSxJQUFJLENBQUNNLEVBQUUsRUFBQ0QsZ0JBQWdCLENBQUM7RUFDM0MsQ0FBQyxFQUFDLENBQUNELGFBQWEsQ0FBQyxDQUFDO0VBRWxCLElBQUFHLFVBQUEsR0FBOENqQiwrQ0FBUSxDQUFDLEtBQUssQ0FBQztJQUFBa0IsVUFBQSxHQUFBTCxjQUFBLENBQUFJLFVBQUE7SUFBdERFLGVBQWUsR0FBQUQsVUFBQTtJQUFFRSxrQkFBa0IsR0FBQUYsVUFBQTtFQUUxQyxJQUFNRyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQWtCQSxDQUFBLEVBQVM7SUFDN0JELGtCQUFrQixDQUFDLENBQUNELGVBQWUsQ0FBQztFQUN4QyxDQUFDO0VBRUQsSUFBTUcsVUFBVSxHQUFHLFNBQWJBLFVBQVVBLENBQUEsRUFBUztJQUNyQmYsa0RBQVcsQ0FBQ2dCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDZCxJQUFJLENBQUNNLEVBQUUsQ0FBQyxFQUFDTixJQUFJLENBQUNNLEVBQUUsQ0FBQztFQUM3QyxDQUFDO0VBR0Qsb0JBQ0lsQiwwREFBQSxDQUFBQSx1REFBQSxxQkFDSUEsMERBQUE7SUFBUzZCLFNBQVMsRUFBQztFQUFxQixnQkFDcEM3QiwwREFBQTtJQUFLNkIsU0FBUyxFQUFDO0VBQStELGdCQUMxRTdCLDBEQUFBLDJCQUNJQSwwREFBQSxhQUFLWSxJQUFJLENBQUNrQixLQUFVLENBQUMsZUFDckI5QiwwREFBQTtJQUFJNkIsU0FBUyxFQUFDO0VBQTBCLEdBQUVqQixJQUFJLENBQUNtQixXQUFnQixDQUM5RCxDQUFDLGVBRU4vQiwwREFBQSwyQkFDSUEsMERBQUEsQ0FBQ0ssd0RBQWtCO0lBQUMyQixRQUFRLEVBQUVUO0VBQW1CLENBQUMsQ0FBQyxlQUNuRHZCLDBEQUFBLENBQUNJLHNEQUFnQixNQUFFLENBQUMsZUFDcEJKLDBEQUFBLENBQUNHLGlEQUFXO0lBQUM4QixZQUFZLEVBQUVUO0VBQVcsQ0FBQyxDQUN0QyxDQUNKLENBQUMsRUFDTEgsZUFBZSxnQkFBR3JCLDBEQUFBLENBQUNRLG9EQUFnQjtJQUFDMEIsTUFBTSxFQUFFdEIsSUFBSSxDQUFDTTtFQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksZUFFOURsQiwwREFBQTtJQUFJNkIsU0FBUyxFQUFDO0VBQTZCLEdBQ3RDYixhQUFhLEdBQUdBLGFBQWEsQ0FBQ21CLEdBQUcsQ0FBQyxVQUFDQyxTQUFTO0lBQUEsb0JBQUtwQywwREFBQSxDQUFDTyx3REFBYztNQUFDOEIsR0FBRyxFQUFFRCxTQUFTLENBQUNsQixFQUFHO01BQUNrQixTQUFTLEVBQUVBO0lBQVUsQ0FBQyxDQUFDO0VBQUEsRUFBQyxHQUFFLElBQy9HLENBQ0MsQ0FDWCxDQUFDO0FBRVgsQ0FBQztBQUVELGlFQUFlMUIsU0FBUzs7Ozs7Ozs7VUNsRHhCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vanMvY29tcG9uZW50cy9zaG93dGFza3MuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1RyYXNoQnV0dG9uLCBGaW5pc2hUYXNrQnV0dG9uLCBBZGRPcGVyYXRpb25CdXR0b259IGZyb20gXCIuL2J1dHRvbnNcIlxyXG5pbXBvcnQgeyBnZXRPcGVyYXRpb25zIH0gZnJvbSBcIi4vb3BlcmF0aW9uXCI7XHJcbmltcG9ydCBTaG93T3BlcmF0aW9ucyBmcm9tIFwiLi9zaG93b3BlcmF0aW9uc1wiO1xyXG5pbXBvcnQge05ld09wZXJhdGlvbkZvcm19IGZyb20gXCIuL2Zvcm1zXCJcclxuaW1wb3J0IHsgZGVsZXRlVGFza3MgfSBmcm9tIFwiLi90YXNrXCI7XHJcblxyXG5jb25zdCBTaG93VGFza3MgPSAoe3Rhc2t9KSA9PiB7XHJcbiAgICBcclxuICAgIGNvbnN0IFthbGxPcGVyYXRpb25zLCBzZXRBbGxPcGVyYXRpb25zXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZ2V0T3BlcmF0aW9ucyh0YXNrLmlkLHNldEFsbE9wZXJhdGlvbnMpXHJcbiAgICB9LFthbGxPcGVyYXRpb25zXSlcclxuXHJcbiAgICBjb25zdCBbYWRkTmV3T3BlcmF0aW9uLCBzZXRBZGROZXdPcGVyYXRpb25dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgXHJcbiAgICBjb25zdCBBZGRPcGVydGFpb25Td2l0Y2ggPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0QWRkTmV3T3BlcmF0aW9uKCFhZGROZXdPcGVyYXRpb24pXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgRGVsZXRlVGFzayA9ICgpID0+IHtcclxuICAgICAgICBkZWxldGVUYXNrcyhjb25zb2xlLmxvZyh0YXNrLmlkKSx0YXNrLmlkKVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNhcmQgbXQtNSBzaGFkb3ctc21cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXIgZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNT57dGFzay50aXRsZX08L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwiY2FyZC1zdWJ0aXRsZSB0ZXh0LW11dGVkXCI+e3Rhc2suZGVzY3JpcHRpb259PC9oNj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEFkZE9wZXJhdGlvbkJ1dHRvbiBzd2l0Y2hlcj17QWRkT3BlcnRhaW9uU3dpdGNofS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGaW5pc2hUYXNrQnV0dG9uIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFzaEJ1dHRvbiBkZWxldGVBY3Rpb249e0RlbGV0ZVRhc2t9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAge2FkZE5ld09wZXJhdGlvbiA/IDxOZXdPcGVyYXRpb25Gb3JtIHRhc2tJRD17dGFzay5pZH0vPiA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LWdyb3VwIGxpc3QtZ3JvdXAtZmx1c2hcIj5cclxuICAgICAgICAgICAgICAgICAgICB7YWxsT3BlcmF0aW9ucyA/IGFsbE9wZXJhdGlvbnMubWFwKChPcGVyYXRpb24pID0+IDxTaG93T3BlcmF0aW9ucyBrZXk9e09wZXJhdGlvbi5pZH0gT3BlcmF0aW9uPXtPcGVyYXRpb259Lz4pOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaG93VGFza3M7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMGRiZjhjNThhYzg4NjM2NzAxNmJcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlRyYXNoQnV0dG9uIiwiRmluaXNoVGFza0J1dHRvbiIsIkFkZE9wZXJhdGlvbkJ1dHRvbiIsImdldE9wZXJhdGlvbnMiLCJTaG93T3BlcmF0aW9ucyIsIk5ld09wZXJhdGlvbkZvcm0iLCJkZWxldGVUYXNrcyIsIlNob3dUYXNrcyIsIl9yZWYiLCJ0YXNrIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwiYWxsT3BlcmF0aW9ucyIsInNldEFsbE9wZXJhdGlvbnMiLCJpZCIsIl91c2VTdGF0ZTMiLCJfdXNlU3RhdGU0IiwiYWRkTmV3T3BlcmF0aW9uIiwic2V0QWRkTmV3T3BlcmF0aW9uIiwiQWRkT3BlcnRhaW9uU3dpdGNoIiwiRGVsZXRlVGFzayIsImNvbnNvbGUiLCJsb2ciLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJjbGFzc05hbWUiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwic3dpdGNoZXIiLCJkZWxldGVBY3Rpb24iLCJ0YXNrSUQiLCJtYXAiLCJPcGVyYXRpb24iLCJrZXkiXSwic291cmNlUm9vdCI6IiJ9