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

/***/ "./components/ProductGrid.js":
/*!***********************************!*\
  !*** ./components/ProductGrid.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProductGrid; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\nfunction _objectWithoutProperties(source, excluded) {\n    if (source == null) return {};\n    var target = _objectWithoutPropertiesLoose(source, excluded);\n    var key, i;\n    if (Object.getOwnPropertySymbols) {\n        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);\n        for(i = 0; i < sourceSymbolKeys.length; i++){\n            key = sourceSymbolKeys[i];\n            if (excluded.indexOf(key) >= 0) continue;\n            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;\n            target[key] = source[key];\n        }\n    }\n    return target;\n}\nfunction _objectWithoutPropertiesLoose(source, excluded) {\n    if (source == null) return {};\n    var target = {};\n    var sourceKeys = Object.keys(source);\n    var key, i;\n    for(i = 0; i < sourceKeys.length; i++){\n        key = sourceKeys[i];\n        if (excluded.indexOf(key) >= 0) continue;\n        target[key] = source[key];\n    }\n    return target;\n}\n\n\n\nfunction ProductGrid(_param) {\n    var _this = this;\n    var categories = _param.categories, props = _objectWithoutProperties(_param, [\n        \"categories\"\n    ]);\n    // if(!categories || categories.length === 0) return null;\n    // console.log(categories)\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"grid grid-cols-2 grid-flow-row-dense md:grid-cols-3\",\n        children: categories.map(function(category) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    category.name,\n                    \" \"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/johnknowles/Documents/repos/asheville-craftsman/components/ProductGrid.js\",\n                lineNumber: 11,\n                columnNumber: 11\n            }, _this);\n        })\n    }, void 0, false, {\n        fileName: \"/Users/johnknowles/Documents/repos/asheville-craftsman/components/ProductGrid.js\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, this);\n};\n_c = ProductGrid;\nvar _c;\n$RefreshReg$(_c, \"ProductGrid\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2R1Y3RHcmlkLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE2QjtBQUNFO0FBRWhCLFNBQVNFLFdBQVcsQ0FBQyxNQUF3QixFQUFFOztRQUF4QkMsVUFBVSxHQUFaLE1BQXdCLENBQXRCQSxVQUFVLEVBQUtDLEtBQUssNEJBQXRCLE1BQXdCO1FBQXRCRCxZQUFVOztJQUM5QywwREFBMEQ7SUFDMUQsMEJBQTBCO0lBRTFCLHFCQUNFLDhEQUFDRSxLQUFHO1FBQUNDLFNBQVMsRUFBQyxxREFBcUQ7a0JBQ2pFSCxVQUFVLENBQUNJLEdBQUcsQ0FBQyxTQUFDQyxRQUFRO2lDQUNyQiw4REFBQ0gsS0FBRzs7b0JBQUdHLFFBQVEsQ0FBQ0MsSUFBSTtvQkFBQyxHQUFDOzs7Ozs7cUJBQU07U0FlL0IsQ0FBQzs7Ozs7WUFDRSxDQUNOO0NBQ0g7QUF6QnVCUCxLQUFBQSxXQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUHJvZHVjdEdyaWQuanM/MTg5MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZHVjdEdyaWQoeyBjYXRlZ29yaWVzLCAuLi5wcm9wcyB9KSB7XG4gIC8vIGlmKCFjYXRlZ29yaWVzIHx8IGNhdGVnb3JpZXMubGVuZ3RoID09PSAwKSByZXR1cm4gbnVsbDtcbiAgLy8gY29uc29sZS5sb2coY2F0ZWdvcmllcylcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiBncmlkLWZsb3ctcm93LWRlbnNlIG1kOmdyaWQtY29scy0zXCI+XG4gICAgICB7Y2F0ZWdvcmllcy5tYXAoKGNhdGVnb3J5KSA9PiAoXG4gICAgICAgICAgPGRpdj57IGNhdGVnb3J5Lm5hbWV9IDwvZGl2PlxuICAgICAgICAvLyA8ZGl2IGNsYXNzTmFtZT1cInNoYWRvdy1sZyByb3VuZGVkLW1kXCIgPlxuICAgICAgICAvLyAgIDxMaW5rIGhyZWY9XCIjXCIgcGFzc0hyZWY+XG4gICAgICAgIC8vICAgICA8YT5cbiAgICAgICAgLy8gICAgICAgPEltYWdlXG4gICAgICAgIC8vICAgICAgICAgc3JjPXtjYXRlZ29yeS5hc3NldHNbMF0udXJsfVxuICAgICAgICAvLyAgICAgICAgIGFsdD17Y2F0ZWdvcnkubmFtZX1cbiAgICAgICAgLy8gICAgICAgICB3aWR0aD17XCIzMDBweFwifVxuICAgICAgICAvLyAgICAgICAgIGhlaWdodD17XCIzMDBweFwifVxuICAgICAgICAvLyAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtdGwtbGcgcm91bmRlZC10ci1sZ1wiXG4gICAgICAgIC8vICAgICAgICAgLz5cbiAgICAgICAgLy8gICAgICAgICA8c3Bhbj57Y2F0ZWdvcnkubmFtZX08L3NwYW4+XG4gICAgICAgIC8vICAgICA8L2E+XG4gICAgICAgIC8vICAgPC9MaW5rPlxuICAgICAgICAvLyA8L2Rpdj47XG4gICAgICApKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJMaW5rIiwiSW1hZ2UiLCJQcm9kdWN0R3JpZCIsImNhdGVnb3JpZXMiLCJwcm9wcyIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsImNhdGVnb3J5IiwibmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ProductGrid.js\n");

/***/ })

});