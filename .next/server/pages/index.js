"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./lib/commerce.js":
/*!*************************!*\
  !*** ./lib/commerce.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"commerce\": () => (/* binding */ commerce)\n/* harmony export */ });\n/* harmony import */ var _chec_commerce_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chec/commerce.js */ \"@chec/commerce.js\");\n/* harmony import */ var _chec_commerce_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chec_commerce_js__WEBPACK_IMPORTED_MODULE_0__);\n\nconst checAPIKey = \"pk_test_41901b6c5a13334acf8683f07ef4132d9fc225c40a3e5\";\nconst devEnvironment = \"development\" === \"development\";\n// Commerce.js constructor options\nconst commerceConfig = {\n    axiosConfig: {\n        headers: {\n            \"X-Chec-Agent\": \"commerce.js/v2\",\n            \"Chec-Version\": \"2021-03-10\"\n        }\n    }\n};\nif (devEnvironment && !checAPIKey) {\n    throw Error(\"Your public API key must be provided as an environment variable named `NEXT_PUBLIC_CHEC_PUBLIC_API_KEY`. Obtain your Chec public key by logging into your Chec account and navigate to Setup > Developer, or can be obtained with the Chec CLI via with the command chec whoami\");\n}\nconst commerce = new (_chec_commerce_js__WEBPACK_IMPORTED_MODULE_0___default())(checAPIKey, devEnvironment, commerceConfig);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvY29tbWVyY2UuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQzRDO0FBRTVDLE1BQU1DLFVBQVUsR0FBR0MsdURBQTJDO0FBQzlELE1BQU1HLGNBQWMsR0FBR0gsYUFKVixLQUltQyxhQUFhO0FBRTdELGtDQUFrQztBQUNsQyxNQUFNSSxjQUFjLEdBQUc7SUFDckJDLFdBQVcsRUFBRTtRQUNYQyxPQUFPLEVBQUU7WUFDUCxjQUFjLEVBQUUsZ0JBQWdCO1lBQ2hDLGNBQWMsRUFBRSxZQUFZO1NBQzdCO0tBQ0Y7Q0FDRjtBQUVELElBQUlILGNBQWMsSUFBSSxDQUFDSixVQUFVLEVBQUU7SUFDakMsTUFBTVEsS0FBSyxDQUFDLGlSQUFpUixDQUFDLENBQUM7Q0FDaFM7QUFFTSxNQUFNQyxRQUFRLEdBQUcsSUFBSVYsMERBQVcsQ0FDckNDLFVBQVUsRUFDVkksY0FBYyxFQUNkQyxjQUFjLENBQ2YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2FzaGV2aWxsZS1jcmFmdHNtYW4vLi9saWIvY29tbWVyY2UuanM/NzU0ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBDb21tZXJjZVNESyBmcm9tIFwiQGNoZWMvY29tbWVyY2UuanNcIjtcblxuY29uc3QgY2hlY0FQSUtleSA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0NIRUNfUFVCTElDX0FQSV9LRVk7XG5jb25zdCBkZXZFbnZpcm9ubWVudCA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnO1xuXG4vLyBDb21tZXJjZS5qcyBjb25zdHJ1Y3RvciBvcHRpb25zXG5jb25zdCBjb21tZXJjZUNvbmZpZyA9IHtcbiAgYXhpb3NDb25maWc6IHtcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnWC1DaGVjLUFnZW50JzogJ2NvbW1lcmNlLmpzL3YyJyxcbiAgICAgICdDaGVjLVZlcnNpb24nOiAnMjAyMS0wMy0xMCcsXG4gICAgfSxcbiAgfSxcbn07XG5cbmlmIChkZXZFbnZpcm9ubWVudCAmJiAhY2hlY0FQSUtleSkge1xuICB0aHJvdyBFcnJvcignWW91ciBwdWJsaWMgQVBJIGtleSBtdXN0IGJlIHByb3ZpZGVkIGFzIGFuIGVudmlyb25tZW50IHZhcmlhYmxlIG5hbWVkIGBORVhUX1BVQkxJQ19DSEVDX1BVQkxJQ19BUElfS0VZYC4gT2J0YWluIHlvdXIgQ2hlYyBwdWJsaWMga2V5IGJ5IGxvZ2dpbmcgaW50byB5b3VyIENoZWMgYWNjb3VudCBhbmQgbmF2aWdhdGUgdG8gU2V0dXAgPiBEZXZlbG9wZXIsIG9yIGNhbiBiZSBvYnRhaW5lZCB3aXRoIHRoZSBDaGVjIENMSSB2aWEgd2l0aCB0aGUgY29tbWFuZCBjaGVjIHdob2FtaScpO1xufVxuXG5leHBvcnQgY29uc3QgY29tbWVyY2UgPSBuZXcgQ29tbWVyY2VTREsoXG4gIGNoZWNBUElLZXksXG4gIGRldkVudmlyb25tZW50LFxuICBjb21tZXJjZUNvbmZpZyxcbik7Il0sIm5hbWVzIjpbIkNvbW1lcmNlU0RLIiwiY2hlY0FQSUtleSIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19DSEVDX1BVQkxJQ19BUElfS0VZIiwiZGV2RW52aXJvbm1lbnQiLCJjb21tZXJjZUNvbmZpZyIsImF4aW9zQ29uZmlnIiwiaGVhZGVycyIsIkVycm9yIiwiY29tbWVyY2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/commerce.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps),\n/* harmony export */   \"default\": () => (/* binding */ HomePage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_commerce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/commerce */ \"./lib/commerce.js\");\n\n\nasync function getStaticProps() {\n    console.log(_lib_commerce__WEBPACK_IMPORTED_MODULE_1__.commerce);\n    const { data  } = await _lib_commerce__WEBPACK_IMPORTED_MODULE_1__.commerce.products.list();\n    const products = data.filter(({ active  })=>active\n    );\n    return {\n        props: {\n            products\n        },\n        revalidate: 60\n    };\n}\nfunction HomePage({ products  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pre\", {\n            children: JSON.stringify(products, null, 2)\n        }, void 0, false, {\n            fileName: \"/Users/johnknowles/Documents/repos/asheville-craftsman/pages/index.js\",\n            lineNumber: 21,\n            columnNumber: 13\n        }, this)\n    }, void 0, false);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQTJDO0FBRXBDLGVBQWVDLGNBQWMsR0FBRztJQUNuQ0MsT0FBTyxDQUFDQyxHQUFHLENBQUNILG1EQUFRLENBQUM7SUFDckIsTUFBTSxFQUFFSSxJQUFJLEdBQUUsR0FBRyxNQUFNSixpRUFBc0IsRUFBRTtJQUUvQyxNQUFNSyxRQUFRLEdBQUdELElBQUksQ0FBQ0csTUFBTSxDQUFDLENBQUMsRUFBRUMsTUFBTSxHQUFFLEdBQUtBLE1BQU07SUFBQSxDQUFDO0lBRXBELE9BQU87UUFDTEMsS0FBSyxFQUFFO1lBQ0xKLFFBQVE7U0FDVDtRQUNESyxVQUFVLEVBQUUsRUFBRTtLQUNmLENBQUM7Q0FDSDtBQUVZLFNBQVNDLFFBQVEsQ0FBQyxFQUFFTixRQUFRLEdBQUUsRUFBRTtJQUUzQyxxQkFDSTtrQkFDSSw0RUFBQ08sS0FBRztzQkFBRUMsSUFBSSxDQUFDQyxTQUFTLENBQUNULFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDOzs7OztnQkFBTztxQkFDL0MsQ0FDTjtDQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXNoZXZpbGxlLWNyYWZ0c21hbi8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29tbWVyY2UgfSBmcm9tICcuLi9saWIvY29tbWVyY2UnO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gICAgY29uc29sZS5sb2coY29tbWVyY2UpXG4gICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBjb21tZXJjZS5wcm9kdWN0cy5saXN0KCk7XG4gIFxuICAgIGNvbnN0IHByb2R1Y3RzID0gZGF0YS5maWx0ZXIoKHsgYWN0aXZlIH0pID0+IGFjdGl2ZSk7XG4gIFxuICAgIHJldHVybiB7XG4gICAgICBwcm9wczoge1xuICAgICAgICBwcm9kdWN0cyxcbiAgICAgIH0sXG4gICAgICByZXZhbGlkYXRlOiA2MCxcbiAgICB9O1xuICB9XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWVQYWdlKHsgcHJvZHVjdHMgfSkge1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxwcmU+e0pTT04uc3RyaW5naWZ5KHByb2R1Y3RzLCBudWxsLCAyKX08L3ByZT5cbiAgICAgICAgPC8+XG4gICAgKVxufSJdLCJuYW1lcyI6WyJjb21tZXJjZSIsImdldFN0YXRpY1Byb3BzIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJwcm9kdWN0cyIsImxpc3QiLCJmaWx0ZXIiLCJhY3RpdmUiLCJwcm9wcyIsInJldmFsaWRhdGUiLCJIb21lUGFnZSIsInByZSIsIkpTT04iLCJzdHJpbmdpZnkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "@chec/commerce.js":
/*!************************************!*\
  !*** external "@chec/commerce.js" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("@chec/commerce.js");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();