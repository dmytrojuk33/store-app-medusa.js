"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/layout/nav-bar.jsx":
/*!***************************************!*\
  !*** ./components/layout/nav-bar.jsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"NavBar\": function() { return /* binding */ NavBar; }\n/* harmony export */ });\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/bi */ \"./node_modules/react-icons/bi/index.esm.js\");\n/* harmony import */ var _context_display_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context/display-context */ \"./context/display-context.js\");\n/* harmony import */ var _context_store_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/store-context */ \"./context/store-context.js\");\n/* harmony import */ var _styles_nav_bar_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../styles/nav-bar.module.css */ \"./styles/nav-bar.module.css\");\n/* harmony import */ var _styles_nav_bar_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_nav_bar_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _styles_landing_page_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../styles/landing-page.module.css */ \"./styles/landing-page.module.css\");\n/* harmony import */ var _styles_landing_page_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_landing_page_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _utils_helper_functions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/helper-functions */ \"./utils/helper-functions.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/akarshjain/Downloads/Pixelz-Ark/my-store-front/components/layout/nav-bar.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nvar NavBar = function NavBar() {\n  _s();\n\n  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_display_context__WEBPACK_IMPORTED_MODULE_2__.default),\n      updateCartViewDisplay = _useContext.updateCartViewDisplay;\n\n  var _useContext2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_store_context__WEBPACK_IMPORTED_MODULE_3__.default),\n      cart = _useContext2.cart;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true),\n      isCheckout = _useState[0],\n      setIsCheckout = _useState[1];\n\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    if (router.pathname === \"/checkout\" || router.pathname === \"/payment\") {\n      setIsCheckout(true);\n    } else {\n      setIsCheckout(false);\n    }\n  }, [router.pathname]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"section\", {\n    \"class\": \"nav-bar sticky-top\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"nav\", {\n      \"class\": \"\".concat((_styles_nav_bar_module_css__WEBPACK_IMPORTED_MODULE_6___default().navbar), \" navbar-expand-lg navbar-light\"),\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n        \"class\": \"container-fluid mt-3\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"h5\", {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"a\", {\n            \"class\": \"navbar-brand mx-4\",\n            href: \"/\",\n            children: \"BookStore\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 29,\n            columnNumber: 21\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 17\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"button\", {\n          \"class\": \"navbar-toggler\",\n          type: \"button\",\n          \"data-bs-toggle\": \"collapse\",\n          \"data-bs-target\": \"#navbarNav\",\n          \"aria-controls\": \"navbarNav\",\n          \"aria-expanded\": \"false\",\n          \"aria-label\": \"Toggle navigation\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"span\", {\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"i\", {\n              \"class\": \"fas fa-bars\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 31,\n              columnNumber: 28\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 31,\n            columnNumber: 21\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 17\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n          \"class\": \"collapse navbar-collapse\",\n          id: \"navbarNav\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"ul\", {\n            \"class\": \"navbar-nav ms-auto mx-4 \",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"button\", {\n              \"class\": \"\".concat((_styles_nav_bar_module_css__WEBPACK_IMPORTED_MODULE_6___default().btn), \" text-white\"),\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"a\", {\n                \"class\": \"\".concat((_styles_nav_bar_module_css__WEBPACK_IMPORTED_MODULE_6___default().nav_link), \" text-white\"),\n                href: \"#\".concat((_styles_landing_page_module_css__WEBPACK_IMPORTED_MODULE_7___default().aboutus)),\n                children: \"ABOUT US\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 36,\n                columnNumber: 25\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 35,\n              columnNumber: 21\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"li\", {\n              \"class\": \"nav-item mx-2\",\n              children: !isCheckout ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"button\", {\n                className: \"\".concat((_styles_nav_bar_module_css__WEBPACK_IMPORTED_MODULE_6___default().btn), \" \").concat((_styles_nav_bar_module_css__WEBPACK_IMPORTED_MODULE_6___default().nav_link), \" text-white\"),\n                onClick: function onClick() {\n                  return updateCartViewDisplay();\n                },\n                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_icons_bi__WEBPACK_IMPORTED_MODULE_8__.BiShoppingBag, {}, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 44,\n                  columnNumber: 25\n                }, _this), \" \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"span\", {\n                  children: cart.items.length > 0 ? cart.items.map(_utils_helper_functions__WEBPACK_IMPORTED_MODULE_4__.quantity).reduce(_utils_helper_functions__WEBPACK_IMPORTED_MODULE_4__.sum) : 0\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 45,\n                  columnNumber: 25\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 40,\n                columnNumber: 23\n              }, _this) : null\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 38,\n              columnNumber: 21\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 34,\n            columnNumber: 19\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 33,\n          columnNumber: 17\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 15\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 11\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 26,\n    columnNumber: 8\n  }, _this);\n};\n\n_s(NavBar, \"T6LbLtO1ptXTOqPLiS8/2AxHbP0=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter];\n});\n\n_c = NavBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavBar);\n\nvar _c;\n\n$RefreshReg$(_c, \"NavBar\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREw7QUFnQ0QsQ0EvQ007O0dBQU1DO1VBS0laOzs7S0FMSlk7QUFpRGIsK0RBQWVBLE1BQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvbmF2LWJhci5qc3g/ZGVmYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBCaVNob3BwaW5nQmFnIH0gZnJvbSBcInJlYWN0LWljb25zL2JpXCI7XG5pbXBvcnQgRGlzcGxheUNvbnRleHQgZnJvbSBcIi4uLy4uL2NvbnRleHQvZGlzcGxheS1jb250ZXh0XCI7XG5pbXBvcnQgU3RvcmVDb250ZXh0IGZyb20gXCIuLi8uLi9jb250ZXh0L3N0b3JlLWNvbnRleHRcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uL3N0eWxlcy9uYXYtYmFyLm1vZHVsZS5jc3NcIjtcbmltcG9ydCBhYm91dF9zdHlsZSBmcm9tIFwiLi4vLi4vc3R5bGVzL2xhbmRpbmctcGFnZS5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgeyBxdWFudGl0eSwgc3VtIH0gZnJvbSBcIi4uLy4uL3V0aWxzL2hlbHBlci1mdW5jdGlvbnNcIjtcblxuZXhwb3J0IGNvbnN0IE5hdkJhciA9ICgpID0+IHtcbiAgY29uc3QgeyB1cGRhdGVDYXJ0Vmlld0Rpc3BsYXkgfSA9IHVzZUNvbnRleHQoRGlzcGxheUNvbnRleHQpO1xuICBjb25zdCB7IGNhcnQgfSA9IHVzZUNvbnRleHQoU3RvcmVDb250ZXh0KTtcbiAgY29uc3QgW2lzQ2hlY2tvdXQsIHNldElzQ2hlY2tvdXRdID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAocm91dGVyLnBhdGhuYW1lID09PSBcIi9jaGVja291dFwiIHx8IHJvdXRlci5wYXRobmFtZSA9PT0gXCIvcGF5bWVudFwiKSB7XG4gICAgICBzZXRJc0NoZWNrb3V0KHRydWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRJc0NoZWNrb3V0KGZhbHNlKTtcbiAgICB9XG4gIH0sIFtyb3V0ZXIucGF0aG5hbWVdKTtcblxuICByZXR1cm4gKFxuICAgICAgIDxzZWN0aW9uIGNsYXNzPVwibmF2LWJhciBzdGlja3ktdG9wXCI+XG4gICAgICAgICAgPG5hdiBjbGFzcz17YCR7c3R5bGVzLm5hdmJhcn0gbmF2YmFyLWV4cGFuZC1sZyBuYXZiYXItbGlnaHRgfT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lci1mbHVpZCBtdC0zXCI+XG4gICAgICAgICAgICAgICAgPGg1PjxhIGNsYXNzPVwibmF2YmFyLWJyYW5kIG14LTRcIiBocmVmPVwiL1wiPkJvb2tTdG9yZTwvYT48L2g1PlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJuYXZiYXItdG9nZ2xlclwiIHR5cGU9XCJidXR0b25cIiBkYXRhLWJzLXRvZ2dsZT1cImNvbGxhcHNlXCIgZGF0YS1icy10YXJnZXQ9XCIjbmF2YmFyTmF2XCIgYXJpYS1jb250cm9scz1cIm5hdmJhck5hdlwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiIGFyaWEtbGFiZWw9XCJUb2dnbGUgbmF2aWdhdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiA+PGkgY2xhc3M9XCJmYXMgZmEtYmFyc1wiPjwvaT48L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbGxhcHNlIG5hdmJhci1jb2xsYXBzZVwiIGlkPVwibmF2YmFyTmF2XCI+XG4gICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJuYXZiYXItbmF2IG1zLWF1dG8gbXgtNCBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz17YCR7c3R5bGVzLmJ0bn0gdGV4dC13aGl0ZWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9e2Ake3N0eWxlcy5uYXZfbGlua30gdGV4dC13aGl0ZWB9IGhyZWY9e2AjJHthYm91dF9zdHlsZS5hYm91dHVzfWB9PkFCT1VUIFVTPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibmF2LWl0ZW0gbXgtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgIHshaXNDaGVja291dCA/IChcbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5idG59ICR7c3R5bGVzLm5hdl9saW5rfSB0ZXh0LXdoaXRlYH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHVwZGF0ZUNhcnRWaWV3RGlzcGxheSgpfVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCaVNob3BwaW5nQmFnIC8+e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtjYXJ0Lml0ZW1zLmxlbmd0aCA+IDAgPyBjYXJ0Lml0ZW1zLm1hcChxdWFudGl0eSkucmVkdWNlKHN1bSkgOiAwfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvbmF2PlxuICAgICAgPC9zZWN0aW9uPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTmF2QmFyO1xuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsIlJlYWN0IiwidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQmlTaG9wcGluZ0JhZyIsIkRpc3BsYXlDb250ZXh0IiwiU3RvcmVDb250ZXh0Iiwic3R5bGVzIiwiYWJvdXRfc3R5bGUiLCJxdWFudGl0eSIsInN1bSIsIk5hdkJhciIsInVwZGF0ZUNhcnRWaWV3RGlzcGxheSIsImNhcnQiLCJpc0NoZWNrb3V0Iiwic2V0SXNDaGVja291dCIsInJvdXRlciIsInBhdGhuYW1lIiwibmF2YmFyIiwiYnRuIiwibmF2X2xpbmsiLCJhYm91dHVzIiwiaXRlbXMiLCJsZW5ndGgiLCJtYXAiLCJyZWR1Y2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/layout/nav-bar.jsx\n");

/***/ })

});