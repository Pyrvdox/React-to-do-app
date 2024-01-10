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
    addNewOperation = _ref.addNewOperation;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btn btn-info btn-sm mr-2",
    onClick: function onClick() {
      return switcher();
    }
  }, addNewOperation ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, "Discard changes ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: "fas fa-minus-circle"
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, "Add operation ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: "fas fa-plus-circle ml-1"
  })));
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
/******/ 	__webpack_require__.h = () => ("fc39fda92433c6a0e9fb")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUM3REQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9qcy9jb21wb25lbnRzL2J1dHRvbnMuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IE5ld1Rhc2tCdXR0b24gPSAoKSA9PiB7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidG4gYnRuLWluZm9cIj5cclxuICAgICAgICAgICAgICAgIEFkZCB0YXNrXHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtcGx1cy1jaXJjbGUgbWwtMVwiPjwvaT5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBBZGRPcGVyYXRpb25CdXR0b24gPSAoe3N3aXRjaGVyLCBhZGROZXdPcGVyYXRpb259KSA9PiB7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4taW5mbyBidG4tc20gbXItMlwiIG9uQ2xpY2s9eygpPT4gc3dpdGNoZXIoKX0+ICAgICAgXHJcbiAgICAgICAge2FkZE5ld09wZXJhdGlvbiA/IFxyXG4gICAgICAgIDw+RGlzY2FyZCBjaGFuZ2VzIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1taW51cy1jaXJjbGVcIj48L2k+PC8+XHJcbiAgICAgICAgOiBcclxuICAgICAgICA8PkFkZCBvcGVyYXRpb24gPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXBsdXMtY2lyY2xlIG1sLTFcIj48L2k+PC8+XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIFxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgRmluaXNoVGFza0J1dHRvbiA9ICh7ZmluaXNofSkgPT4ge1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWRhcmsgYnRuLXNtXCIgb25DbGljaz17KCkgPT4gZmluaXNoKCl9PlxyXG4gICAgICAgICAgICBGaW5pc2hcclxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWFyY2hpdmUgbWwtMVwiPjwvaT5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFRyYXNoQnV0dG9uID0gKHtkZWxldGVBY3Rpb259KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLWRhbmdlciBidG4tc20gbWwtMlwiIG9uQ2xpY2s9eygpPT4gZGVsZXRlQWN0aW9uKCl9PlxyXG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtdHJhc2ggZmFsc2VcIj48L2k+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBBZGRUaW1lQnV0dG9uID0gKHtvbkFjdGlvbn0pID0+IHtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXN1Y2Nlc3MgYnRuLXNtIG1yLTJcIiBvbkNsaWNrPXsoKT0+IG9uQWN0aW9uKCl9PlxyXG4gICAgICAgICAgICBBZGQgdGltZVxyXG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtY2xvY2sgbWwtMVwiPjwvaT5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IERlbGV0ZU9wZXJhdGlvbkJ1dHRvbiA9ICh7ZGVsZXRlT3BBY3Rpb259KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLWRhbmdlciBidG4tc21cIiBvbkNsaWNrPXsoKT0+IGRlbGV0ZU9wQWN0aW9uKCl9PjxpIGNsYXNzTmFtZT1cImZhcyBmYS10cmFzaFwiID48L2k+PC9idXR0b24+XHJcbiAgICApXHJcbn1cclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZmMzOWZkYTkyNDMzYzZhMGU5ZmJcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJOZXdUYXNrQnV0dG9uIiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwidHlwZSIsImNsYXNzTmFtZSIsIkFkZE9wZXJhdGlvbkJ1dHRvbiIsIl9yZWYiLCJzd2l0Y2hlciIsImFkZE5ld09wZXJhdGlvbiIsIm9uQ2xpY2siLCJGaW5pc2hUYXNrQnV0dG9uIiwiX3JlZjIiLCJmaW5pc2giLCJUcmFzaEJ1dHRvbiIsIl9yZWYzIiwiZGVsZXRlQWN0aW9uIiwiQWRkVGltZUJ1dHRvbiIsIl9yZWY0Iiwib25BY3Rpb24iLCJEZWxldGVPcGVyYXRpb25CdXR0b24iLCJfcmVmNSIsImRlbGV0ZU9wQWN0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==