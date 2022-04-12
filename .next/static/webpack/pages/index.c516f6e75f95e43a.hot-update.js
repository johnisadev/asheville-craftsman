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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProductGrid; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\nfunction _objectWithoutProperties(source, excluded) {\n    if (source == null) return {};\n    var target = _objectWithoutPropertiesLoose(source, excluded);\n    var key, i;\n    if (Object.getOwnPropertySymbols) {\n        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);\n        for(i = 0; i < sourceSymbolKeys.length; i++){\n            key = sourceSymbolKeys[i];\n            if (excluded.indexOf(key) >= 0) continue;\n            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;\n            target[key] = source[key];\n        }\n    }\n    return target;\n}\nfunction _objectWithoutPropertiesLoose(source, excluded) {\n    if (source == null) return {};\n    var target = {};\n    var sourceKeys = Object.keys(source);\n    var key, i;\n    for(i = 0; i < sourceKeys.length; i++){\n        key = sourceKeys[i];\n        if (excluded.indexOf(key) >= 0) continue;\n        target[key] = source[key];\n    }\n    return target;\n}\n\n\n\nfunction ProductGrid(_param) {\n    var _this = this;\n    var categories = _param.categories, props = _objectWithoutProperties(_param, [\n        \"categories\"\n    ]);\n    // if(!categories || categories.length === 0) return null;\n    // console.log(categories)\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"grid grid-cols-2 grid-flow-row-dense md:grid-cols-3\",\n        children: categories.map(function(category) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"shadow-lg rounded-md\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    href: \"#\",\n                    passHref: true,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                src: category.assets[0].url,\n                                alt: category.name,\n                                width: \"300px\",\n                                height: \"300px\",\n                                className: \"rounded-tl-lg rounded-tr-lg\"\n                            }, void 0, false, {\n                                fileName: \"/Users/johnknowles/Documents/repos/asheville-craftsman/components/ProductGrid.js\",\n                                lineNumber: 15,\n                                columnNumber: 15\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: category.name\n                            }, void 0, false, {\n                                fileName: \"/Users/johnknowles/Documents/repos/asheville-craftsman/components/ProductGrid.js\",\n                                lineNumber: 22,\n                                columnNumber: 17\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/johnknowles/Documents/repos/asheville-craftsman/components/ProductGrid.js\",\n                        lineNumber: 14,\n                        columnNumber: 13\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/johnknowles/Documents/repos/asheville-craftsman/components/ProductGrid.js\",\n                    lineNumber: 13,\n                    columnNumber: 11\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/johnknowles/Documents/repos/asheville-craftsman/components/ProductGrid.js\",\n                lineNumber: 12,\n                columnNumber: 9\n            }, _this);\n        })\n    }, void 0, false, {\n        fileName: \"/Users/johnknowles/Documents/repos/asheville-craftsman/components/ProductGrid.js\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, this);\n};\n_c = ProductGrid;\nvar _c;\n$RefreshReg$(_c, \"ProductGrid\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2R1Y3RHcmlkLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE2QjtBQUNFO0FBRWhCLFNBQVNFLFdBQVcsQ0FBQyxNQUF3QixFQUFFOztRQUF4QkMsVUFBVSxHQUFaLE1BQXdCLENBQXRCQSxVQUFVLEVBQUtDLEtBQUssNEJBQXRCLE1BQXdCO1FBQXRCRCxZQUFVOztJQUM5QywwREFBMEQ7SUFDMUQsMEJBQTBCO0lBRTFCLHFCQUNFLDhEQUFDRSxLQUFHO1FBQUNDLFNBQVMsRUFBQyxxREFBcUQ7a0JBQ2pFSCxVQUFVLENBQUNJLEdBQUcsQ0FBQyxTQUFDQyxRQUFRO2lDQUV2Qiw4REFBQ0gsS0FBRztnQkFBQ0MsU0FBUyxFQUFDLHNCQUFzQjswQkFDbkMsNEVBQUNOLGtEQUFJO29CQUFDUyxJQUFJLEVBQUMsR0FBRztvQkFBQ0MsUUFBUTs4QkFDckIsNEVBQUNDLEdBQUM7OzBDQUNBLDhEQUFDVixtREFBSztnQ0FDSlcsR0FBRyxFQUFFSixRQUFRLENBQUNLLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQ0MsR0FBRztnQ0FDM0JDLEdBQUcsRUFBRVAsUUFBUSxDQUFDUSxJQUFJO2dDQUNsQkMsS0FBSyxFQUFFLE9BQU87Z0NBQ2RDLE1BQU0sRUFBRSxPQUFPO2dDQUNmWixTQUFTLEVBQUMsNkJBQTZCOzs7OztxQ0FDckM7MENBQ0YsOERBQUNhLE1BQUk7MENBQUVYLFFBQVEsQ0FBQ1EsSUFBSTs7Ozs7cUNBQVE7Ozs7Ozs2QkFDNUI7Ozs7O3lCQUNDOzs7OztxQkFDSDtTQUNQLENBQUM7Ozs7O1lBQ0UsQ0FDTjtDQUNIO0FBekJ1QmQsS0FBQUEsV0FBVyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1Byb2R1Y3RHcmlkLmpzPzE4OTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2R1Y3RHcmlkKHsgY2F0ZWdvcmllcywgLi4ucHJvcHMgfSkge1xuICAvLyBpZighY2F0ZWdvcmllcyB8fCBjYXRlZ29yaWVzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIG51bGw7XG4gIC8vIGNvbnNvbGUubG9nKGNhdGVnb3JpZXMpXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgZ3JpZC1mbG93LXJvdy1kZW5zZSBtZDpncmlkLWNvbHMtM1wiPlxuICAgICAge2NhdGVnb3JpZXMubWFwKChjYXRlZ29yeSkgPT4gKFxuICAgICAgICAgIFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoYWRvdy1sZyByb3VuZGVkLW1kXCIgPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCIgcGFzc0hyZWY+XG4gICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgc3JjPXtjYXRlZ29yeS5hc3NldHNbMF0udXJsfVxuICAgICAgICAgICAgICAgIGFsdD17Y2F0ZWdvcnkubmFtZX1cbiAgICAgICAgICAgICAgICB3aWR0aD17XCIzMDBweFwifVxuICAgICAgICAgICAgICAgIGhlaWdodD17XCIzMDBweFwifVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtdGwtbGcgcm91bmRlZC10ci1sZ1wiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8c3Bhbj57Y2F0ZWdvcnkubmFtZX08L3NwYW4+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkpfVxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkxpbmsiLCJJbWFnZSIsIlByb2R1Y3RHcmlkIiwiY2F0ZWdvcmllcyIsInByb3BzIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwiY2F0ZWdvcnkiLCJocmVmIiwicGFzc0hyZWYiLCJhIiwic3JjIiwiYXNzZXRzIiwidXJsIiwiYWx0IiwibmFtZSIsIndpZHRoIiwiaGVpZ2h0Iiwic3BhbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ProductGrid.js\n");

/***/ })

});