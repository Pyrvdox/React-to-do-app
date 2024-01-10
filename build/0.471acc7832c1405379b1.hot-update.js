"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 36:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35);
/* harmony import */ var _operation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40);
/* harmony import */ var _showoperations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41);
/* harmony import */ var _forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(42);
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "card mt-5 shadow-sm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "card-header d-flex justify-content-between align-items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h5", null, task.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h6", {
    className: "card-subtitle text-muted"
  }, task.description)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_buttons__WEBPACK_IMPORTED_MODULE_1__.AddOperationButton, {
    switcher: AddOpertaionSwitch
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_buttons__WEBPACK_IMPORTED_MODULE_1__.FinishTaskButton, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_buttons__WEBPACK_IMPORTED_MODULE_1__.TrashButton, null))), addNewOperation ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_forms__WEBPACK_IMPORTED_MODULE_4__.NewOperationForm, {
    taskID: task.id
  }) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "list-group list-group-flush"
  }, allOperations ? allOperations.map(function (Operation) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_showoperations__WEBPACK_IMPORTED_MODULE_3__["default"], {
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
/******/ 	__webpack_require__.h = () => ("aa2d108eabf080e1de55")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC40NzFhY2M3ODMyYzE0MDUzNzliMS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDd0I7QUFDL0I7QUFDRTtBQUNOO0FBRXhDLElBQU1TLFNBQVMsR0FBRyxTQUFaQSxTQUFTQSxDQUFBQyxJQUFBLEVBQWU7RUFBQSxJQUFWQyxJQUFJLEdBQUFELElBQUEsQ0FBSkMsSUFBSTtFQUVwQixJQUFBQyxTQUFBLEdBQTBDViwrQ0FBUSxDQUFDLEtBQUssQ0FBQztJQUFBVyxVQUFBLEdBQUFDLGNBQUEsQ0FBQUYsU0FBQTtJQUFsREcsYUFBYSxHQUFBRixVQUFBO0lBQUVHLGdCQUFnQixHQUFBSCxVQUFBO0VBQ3RDWixnREFBUyxDQUFDLFlBQU07SUFDWksseURBQWEsQ0FBQ0ssSUFBSSxDQUFDTSxFQUFFLEVBQUNELGdCQUFnQixDQUFDO0VBQzNDLENBQUMsRUFBQyxDQUFDRCxhQUFhLENBQUMsQ0FBQztFQUVsQixJQUFBRyxVQUFBLEdBQThDaEIsK0NBQVEsQ0FBQyxLQUFLLENBQUM7SUFBQWlCLFVBQUEsR0FBQUwsY0FBQSxDQUFBSSxVQUFBO0lBQXRERSxlQUFlLEdBQUFELFVBQUE7SUFBRUUsa0JBQWtCLEdBQUFGLFVBQUE7RUFFMUMsSUFBTUcsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFrQkEsQ0FBQSxFQUFTO0lBQzdCRCxrQkFBa0IsQ0FBQyxDQUFDRCxlQUFlLENBQUM7RUFDeEMsQ0FBQztFQUdELG9CQUNJcEIsMERBQUEsQ0FBQUEsdURBQUEscUJBQ0lBLDBEQUFBO0lBQVN5QixTQUFTLEVBQUM7RUFBcUIsZ0JBQ3BDekIsMERBQUE7SUFBS3lCLFNBQVMsRUFBQztFQUErRCxnQkFDMUV6QiwwREFBQSwyQkFDSUEsMERBQUEsYUFBS1csSUFBSSxDQUFDZSxLQUFVLENBQUMsZUFDckIxQiwwREFBQTtJQUFJeUIsU0FBUyxFQUFDO0VBQTBCLEdBQUVkLElBQUksQ0FBQ2dCLFdBQWdCLENBQzlELENBQUMsZUFFTjNCLDBEQUFBLDJCQUNJQSwwREFBQSxDQUFDSyx3REFBa0I7SUFBQ3VCLFFBQVEsRUFBRU47RUFBbUIsQ0FBQyxDQUFDLGVBQ25EdEIsMERBQUEsQ0FBQ0ksc0RBQWdCLE1BQUUsQ0FBQyxlQUNwQkosMERBQUEsQ0FBQ0csaURBQVcsTUFBRSxDQUNiLENBQ0osQ0FBQyxFQUVMaUIsZUFBZSxnQkFBR3BCLDBEQUFBLENBQUNRLG9EQUFnQjtJQUFDcUIsTUFBTSxFQUFFbEIsSUFBSSxDQUFDTTtFQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksZUFFOURqQiwwREFBQTtJQUFJeUIsU0FBUyxFQUFDO0VBQTZCLEdBQ3RDVixhQUFhLEdBQUdBLGFBQWEsQ0FBQ2UsR0FBRyxDQUFDLFVBQUNDLFNBQVM7SUFBQSxvQkFBSy9CLDBEQUFBLENBQUNPLHVEQUFjO01BQUN5QixHQUFHLEVBQUVELFNBQVMsQ0FBQ2QsRUFBRztNQUFDYyxTQUFTLEVBQUVBO0lBQVUsQ0FBQyxDQUFDO0VBQUEsRUFBQyxHQUFFLElBQy9HLENBQ0MsQ0FDWCxDQUFDO0FBRVgsQ0FBQztBQUVELGlFQUFldEIsU0FBUzs7Ozs7Ozs7VUM5Q3hCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vanMvY29tcG9uZW50cy9zaG93dGFza3MuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1RyYXNoQnV0dG9uLCBGaW5pc2hUYXNrQnV0dG9uLCBBZGRPcGVyYXRpb25CdXR0b259IGZyb20gXCIuL2J1dHRvbnNcIlxyXG5pbXBvcnQgeyBnZXRPcGVyYXRpb25zIH0gZnJvbSBcIi4vb3BlcmF0aW9uXCI7XHJcbmltcG9ydCBTaG93T3BlcmF0aW9ucyBmcm9tIFwiLi9zaG93b3BlcmF0aW9uc1wiO1xyXG5pbXBvcnQge05ld09wZXJhdGlvbkZvcm19IGZyb20gXCIuL2Zvcm1zXCJcclxuXHJcbmNvbnN0IFNob3dUYXNrcyA9ICh7dGFza30pID0+IHtcclxuICAgIFxyXG4gICAgY29uc3QgW2FsbE9wZXJhdGlvbnMsIHNldEFsbE9wZXJhdGlvbnNdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBnZXRPcGVyYXRpb25zKHRhc2suaWQsc2V0QWxsT3BlcmF0aW9ucylcclxuICAgIH0sW2FsbE9wZXJhdGlvbnNdKVxyXG5cclxuICAgIGNvbnN0IFthZGROZXdPcGVyYXRpb24sIHNldEFkZE5ld09wZXJhdGlvbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBcclxuICAgIGNvbnN0IEFkZE9wZXJ0YWlvblN3aXRjaCA9ICgpID0+IHtcclxuICAgICAgICBzZXRBZGROZXdPcGVyYXRpb24oIWFkZE5ld09wZXJhdGlvbilcclxuICAgIH1cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjYXJkIG10LTUgc2hhZG93LXNtXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDU+e3Rhc2sudGl0bGV9PC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cImNhcmQtc3VidGl0bGUgdGV4dC1tdXRlZFwiPnt0YXNrLmRlc2NyaXB0aW9ufTwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBZGRPcGVyYXRpb25CdXR0b24gc3dpdGNoZXI9e0FkZE9wZXJ0YWlvblN3aXRjaH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RmluaXNoVGFza0J1dHRvbiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhc2hCdXR0b24gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIHthZGROZXdPcGVyYXRpb24gPyA8TmV3T3BlcmF0aW9uRm9ybSB0YXNrSUQ9e3Rhc2suaWR9Lz4gOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC1ncm91cCBsaXN0LWdyb3VwLWZsdXNoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2FsbE9wZXJhdGlvbnMgPyBhbGxPcGVyYXRpb25zLm1hcCgoT3BlcmF0aW9uKSA9PiA8U2hvd09wZXJhdGlvbnMga2V5PXtPcGVyYXRpb24uaWR9IE9wZXJhdGlvbj17T3BlcmF0aW9ufS8+KTogbnVsbH1cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hvd1Rhc2tzOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImFhMmQxMDhlYWJmMDgwZTFkZTU1XCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJUcmFzaEJ1dHRvbiIsIkZpbmlzaFRhc2tCdXR0b24iLCJBZGRPcGVyYXRpb25CdXR0b24iLCJnZXRPcGVyYXRpb25zIiwiU2hvd09wZXJhdGlvbnMiLCJOZXdPcGVyYXRpb25Gb3JtIiwiU2hvd1Rhc2tzIiwiX3JlZiIsInRhc2siLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJhbGxPcGVyYXRpb25zIiwic2V0QWxsT3BlcmF0aW9ucyIsImlkIiwiX3VzZVN0YXRlMyIsIl91c2VTdGF0ZTQiLCJhZGROZXdPcGVyYXRpb24iLCJzZXRBZGROZXdPcGVyYXRpb24iLCJBZGRPcGVydGFpb25Td2l0Y2giLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJjbGFzc05hbWUiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwic3dpdGNoZXIiLCJ0YXNrSUQiLCJtYXAiLCJPcGVyYXRpb24iLCJrZXkiXSwic291cmNlUm9vdCI6IiJ9