"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 35:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddOperationButton": () => (/* binding */ AddOperationButton),
/* harmony export */   "AddTimeButton": () => (/* binding */ AddTimeButton),
/* harmony export */   "DeleteOperationButton": () => (/* binding */ DeleteOperationButton),
/* harmony export */   "FinishTaskButton": () => (/* binding */ FinishTaskButton),
/* harmony export */   "NewTaskButton": () => (/* binding */ NewTaskButton),
/* harmony export */   "TrashButton": () => (/* binding */ TrashButton)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var NewTaskButton = function NewTaskButton() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "submit",
    className: "btn btn-info"
  }, "Add task", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: "fas fa-plus-circle ml-1"
  })));
};
var AddOperationButton = function AddOperationButton(_ref) {
  var switcher = _ref.switcher,
    switcherState = _ref.switcherState;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btn btn-info btn-sm mr-2",
    onClick: function onClick() {
      return switcher();
    }
  }, "Add operation", switcherState ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: "fas fa-plus-circle ml-1"
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: "fas fa-minus-circle ml-1"
  }, "Hide"));
};
var FinishTaskButton = function FinishTaskButton(_ref2) {
  var finish = _ref2.finish;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btn btn-dark btn-sm",
    onClick: function onClick() {
      return finish();
    }
  }, "Finish", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: "fas fa-archive ml-1"
  }));
};
var TrashButton = function TrashButton(_ref3) {
  var deleteAction = _ref3.deleteAction;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btn btn-outline-danger btn-sm ml-2",
    onClick: function onClick() {
      return deleteAction();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: "fas fa-trash false"
  }));
};
var AddTimeButton = function AddTimeButton(_ref4) {
  var onAction = _ref4.onAction;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btn btn-outline-success btn-sm mr-2",
    onClick: function onClick() {
      return onAction();
    }
  }, "Add time", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: "fas fa-clock ml-1"
  }));
};
var DeleteOperationButton = function DeleteOperationButton(_ref5) {
  var deleteOpAction = _ref5.deleteOpAction;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btn btn-outline-danger btn-sm",
    onClick: function onClick() {
      return deleteOpAction();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: "fas fa-trash"
  }));
};

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("db3a4f7fbd1aa11d05b3")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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d2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBOZXdUYXNrQnV0dG9uID0gKCkgPT4ge1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1pbmZvXCI+XHJcbiAgICAgICAgICAgICAgICBBZGQgdGFza1xyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXBsdXMtY2lyY2xlIG1sLTFcIj48L2k+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQWRkT3BlcmF0aW9uQnV0dG9uID0gKHtzd2l0Y2hlciwgc3dpdGNoZXJTdGF0ZX0pID0+IHtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1pbmZvIGJ0bi1zbSBtci0yXCIgb25DbGljaz17KCk9PiBzd2l0Y2hlcigpfT5cclxuICAgICAgICAgICAgQWRkIG9wZXJhdGlvblxyXG4gICAgICAgICAgICB7c3dpdGNoZXJTdGF0ZSA/IDxpIGNsYXNzTmFtZT1cImZhcyBmYS1wbHVzLWNpcmNsZSBtbC0xXCI+PC9pPiA6IDxpIGNsYXNzTmFtZT1cImZhcyBmYS1taW51cy1jaXJjbGUgbWwtMVwiPkhpZGU8L2k+fVxyXG4gICAgICAgICAgICBcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEZpbmlzaFRhc2tCdXR0b24gPSAoe2ZpbmlzaH0pID0+IHtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYXJrIGJ0bi1zbVwiIG9uQ2xpY2s9eygpID0+IGZpbmlzaCgpfT5cclxuICAgICAgICAgICAgRmluaXNoXHJcbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1hcmNoaXZlIG1sLTFcIj48L2k+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBUcmFzaEJ1dHRvbiA9ICh7ZGVsZXRlQWN0aW9ufSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1kYW5nZXIgYnRuLXNtIG1sLTJcIiBvbkNsaWNrPXsoKT0+IGRlbGV0ZUFjdGlvbigpfT5cclxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXRyYXNoIGZhbHNlXCI+PC9pPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQWRkVGltZUJ1dHRvbiA9ICh7b25BY3Rpb259KSA9PiB7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1zdWNjZXNzIGJ0bi1zbSBtci0yXCIgb25DbGljaz17KCk9PiBvbkFjdGlvbigpfT5cclxuICAgICAgICAgICAgQWRkIHRpbWVcclxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWNsb2NrIG1sLTFcIj48L2k+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBEZWxldGVPcGVyYXRpb25CdXR0b24gPSAoe2RlbGV0ZU9wQWN0aW9ufSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1kYW5nZXIgYnRuLXNtXCIgb25DbGljaz17KCk9PiBkZWxldGVPcEFjdGlvbigpfT48aSBjbGFzc05hbWU9XCJmYXMgZmEtdHJhc2hcIiA+PC9pPjwvYnV0dG9uPlxyXG4gICAgKVxyXG59XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImRiM2E0ZjdmYmQxYWExMWQwNWIzXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiTmV3VGFza0J1dHRvbiIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsInR5cGUiLCJjbGFzc05hbWUiLCJBZGRPcGVyYXRpb25CdXR0b24iLCJfcmVmIiwic3dpdGNoZXIiLCJzd2l0Y2hlclN0YXRlIiwib25DbGljayIsIkZpbmlzaFRhc2tCdXR0b24iLCJfcmVmMiIsImZpbmlzaCIsIlRyYXNoQnV0dG9uIiwiX3JlZjMiLCJkZWxldGVBY3Rpb24iLCJBZGRUaW1lQnV0dG9uIiwiX3JlZjQiLCJvbkFjdGlvbiIsIkRlbGV0ZU9wZXJhdGlvbkJ1dHRvbiIsIl9yZWY1IiwiZGVsZXRlT3BBY3Rpb24iXSwic291cmNlUm9vdCI6IiJ9