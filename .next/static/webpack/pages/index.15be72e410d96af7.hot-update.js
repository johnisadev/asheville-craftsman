"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ HomePage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_ProductGrid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/ProductGrid */ \"./components/ProductGrid.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Hero__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Hero */ \"./components/Hero.js\");\n/* harmony import */ var _components_FeaturedSection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/FeaturedSection */ \"./components/FeaturedSection.js\");\n\n\n\n\n\n\nvar __N_SSG = true;\nfunction HomePage(param) {\n    var products = param.products;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Hero__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/johnknowles/Documents/repos/asheville-craftsman/pages/index.js\",\n                lineNumber: 28,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FeaturedSection__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                products: products,\n                category: \"Kitchen\"\n            }, void 0, false, {\n                fileName: \"/Users/johnknowles/Documents/repos/asheville-craftsman/pages/index.js\",\n                lineNumber: 29,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FeaturedSection__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                products: products,\n                category: \"Home Decor\"\n            }, void 0, false, {\n                fileName: \"/Users/johnknowles/Documents/repos/asheville-craftsman/pages/index.js\",\n                lineNumber: 30,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ProductGrid__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/johnknowles/Documents/repos/asheville-craftsman/pages/index.js\",\n                lineNumber: 31,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n};\n_c = HomePage;\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQW9EO0FBRTFCO0FBQ0c7QUFFUztBQUNzQjs7QUFpQjdDLFNBQVNLLFFBQVEsQ0FBQyxLQUFZLEVBQUU7UUFBZCxRQUFVLEdBQVYsS0FBWSxDQUFWQyxRQUFRO0lBRXZDLHFCQUNJOzswQkFDSSw4REFBQ0gsd0RBQUk7Ozs7b0JBQUc7MEJBQ1IsOERBQUNDLG1FQUFlO2dCQUFDRSxRQUFRLEVBQUVBLFFBQVE7Z0JBQUVDLFFBQVEsRUFBQyxTQUFTOzs7OztvQkFBRzswQkFDMUQsOERBQUNILG1FQUFlO2dCQUFDRSxRQUFRLEVBQUVBLFFBQVE7Z0JBQUVDLFFBQVEsRUFBQyxZQUFZOzs7OztvQkFBRzswQkFDN0QsOERBQUNQLCtEQUFXOzs7O29CQUFHOztvQkFDaEIsQ0FDTjtDQUNKO0FBVnVCSyxLQUFBQSxRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb2R1Y3RHcmlkIGZyb20gJy4uL2NvbXBvbmVudHMvUHJvZHVjdEdyaWQnO1xuaW1wb3J0IHsgY29tbWVyY2UgfSBmcm9tICcuLi9saWIvY29tbWVyY2UnO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuXG5pbXBvcnQgSGVybyBmcm9tICcuLi9jb21wb25lbnRzL0hlcm8nO1xuaW1wb3J0IEZlYXR1cmVkU2VjdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL0ZlYXR1cmVkU2VjdGlvbic7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcblxuICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgY29tbWVyY2UucHJvZHVjdHMubGlzdCgpO1xuICAgIGNvbnN0IHsgY2F0ZWdvcmllcyB9ID0gYXdhaXQgY29tbWVyY2UuY2F0ZWdvcmllcy5saXN0KCk7XG4gICAgY29uc3QgcHJvZHVjdHMgPSBkYXRhLmZpbHRlcigoeyBhY3RpdmUgfSkgPT4gYWN0aXZlKTtcbiAgICBjb25zb2xlLmxvZyhjYXRlZ29yaWVzKVxuICBcbiAgICByZXR1cm4ge1xuICAgICAgcHJvcHM6IHtcbiAgICAgICAgcHJvZHVjdHMsXG4gICAgICB9LFxuICAgICAgcmV2YWxpZGF0ZTogNjAsXG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZVBhZ2UoeyBwcm9kdWN0cyB9KSB7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPEhlcm8gLz5cbiAgICAgICAgICAgIDxGZWF0dXJlZFNlY3Rpb24gcHJvZHVjdHM9e3Byb2R1Y3RzfSBjYXRlZ29yeT1cIktpdGNoZW5cIiAvPlxuICAgICAgICAgICAgPEZlYXR1cmVkU2VjdGlvbiBwcm9kdWN0cz17cHJvZHVjdHN9IGNhdGVnb3J5PVwiSG9tZSBEZWNvclwiIC8+XG4gICAgICAgICAgICA8UHJvZHVjdEdyaWQgLz5cbiAgICAgICAgPC8+XG4gICAgKVxufSJdLCJuYW1lcyI6WyJQcm9kdWN0R3JpZCIsIlJlYWN0IiwiSGVhZCIsIkhlcm8iLCJGZWF0dXJlZFNlY3Rpb24iLCJIb21lUGFnZSIsInByb2R1Y3RzIiwiY2F0ZWdvcnkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});