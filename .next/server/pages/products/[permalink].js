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
exports.id = "pages/products/[permalink]";
exports.ids = ["pages/products/[permalink]"];
exports.modules = {

/***/ "./lib/commerce.js":
/*!*************************!*\
  !*** ./lib/commerce.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"commerce\": () => (/* binding */ commerce)\n/* harmony export */ });\n/* harmony import */ var _chec_commerce_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chec/commerce.js */ \"@chec/commerce.js\");\n/* harmony import */ var _chec_commerce_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chec_commerce_js__WEBPACK_IMPORTED_MODULE_0__);\n\nconst checAPIKey = \"pk_test_41901b6c5a13334acf8683f07ef4132d9fc225c40a3e5\";\nconst devEnvironment = \"development\" === \"development\";\n// Commerce.js constructor options\nconst commerceConfig = {\n    axiosConfig: {\n        headers: {\n            \"X-Chec-Agent\": \"commerce.js/v2\",\n            \"Chec-Version\": \"2021-03-10\"\n        }\n    }\n};\nif (devEnvironment && !checAPIKey) {\n    throw Error(\"Your public API key must be provided as an environment variable named `NEXT_PUBLIC_CHEC_PUBLIC_API_KEY`. Obtain your Chec public key by logging into your Chec account and navigate to Setup > Developer, or can be obtained with the Chec CLI via with the command chec whoami\");\n}\nconst commerce = new (_chec_commerce_js__WEBPACK_IMPORTED_MODULE_0___default())(checAPIKey, devEnvironment, commerceConfig);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvY29tbWVyY2UuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQzRDO0FBRTVDLE1BQU1DLFVBQVUsR0FBR0MsdURBQTJDO0FBQzlELE1BQU1HLGNBQWMsR0FBR0gsYUFKVixLQUltQyxhQUFhO0FBRTdELGtDQUFrQztBQUNsQyxNQUFNSSxjQUFjLEdBQUc7SUFDckJDLFdBQVcsRUFBRTtRQUNYQyxPQUFPLEVBQUU7WUFDUCxjQUFjLEVBQUUsZ0JBQWdCO1lBQ2hDLGNBQWMsRUFBRSxZQUFZO1NBQzdCO0tBQ0Y7Q0FDRjtBQUVELElBQUlILGNBQWMsSUFBSSxDQUFDSixVQUFVLEVBQUU7SUFDakMsTUFBTVEsS0FBSyxDQUFDLGlSQUFpUixDQUFDLENBQUM7Q0FDaFM7QUFFTSxNQUFNQyxRQUFRLEdBQUcsSUFBSVYsMERBQVcsQ0FDckNDLFVBQVUsRUFDVkksY0FBYyxFQUNkQyxjQUFjLENBQ2YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2FzaGV2aWxsZS1jcmFmdHNtYW4vLi9saWIvY29tbWVyY2UuanM/NzU0ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBDb21tZXJjZVNESyBmcm9tIFwiQGNoZWMvY29tbWVyY2UuanNcIjtcblxuY29uc3QgY2hlY0FQSUtleSA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0NIRUNfUFVCTElDX0FQSV9LRVk7XG5jb25zdCBkZXZFbnZpcm9ubWVudCA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnO1xuXG4vLyBDb21tZXJjZS5qcyBjb25zdHJ1Y3RvciBvcHRpb25zXG5jb25zdCBjb21tZXJjZUNvbmZpZyA9IHtcbiAgYXhpb3NDb25maWc6IHtcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnWC1DaGVjLUFnZW50JzogJ2NvbW1lcmNlLmpzL3YyJyxcbiAgICAgICdDaGVjLVZlcnNpb24nOiAnMjAyMS0wMy0xMCcsXG4gICAgfSxcbiAgfSxcbn07XG5cbmlmIChkZXZFbnZpcm9ubWVudCAmJiAhY2hlY0FQSUtleSkge1xuICB0aHJvdyBFcnJvcignWW91ciBwdWJsaWMgQVBJIGtleSBtdXN0IGJlIHByb3ZpZGVkIGFzIGFuIGVudmlyb25tZW50IHZhcmlhYmxlIG5hbWVkIGBORVhUX1BVQkxJQ19DSEVDX1BVQkxJQ19BUElfS0VZYC4gT2J0YWluIHlvdXIgQ2hlYyBwdWJsaWMga2V5IGJ5IGxvZ2dpbmcgaW50byB5b3VyIENoZWMgYWNjb3VudCBhbmQgbmF2aWdhdGUgdG8gU2V0dXAgPiBEZXZlbG9wZXIsIG9yIGNhbiBiZSBvYnRhaW5lZCB3aXRoIHRoZSBDaGVjIENMSSB2aWEgd2l0aCB0aGUgY29tbWFuZCBjaGVjIHdob2FtaScpO1xufVxuXG5leHBvcnQgY29uc3QgY29tbWVyY2UgPSBuZXcgQ29tbWVyY2VTREsoXG4gIGNoZWNBUElLZXksXG4gIGRldkVudmlyb25tZW50LFxuICBjb21tZXJjZUNvbmZpZyxcbik7Il0sIm5hbWVzIjpbIkNvbW1lcmNlU0RLIiwiY2hlY0FQSUtleSIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19DSEVDX1BVQkxJQ19BUElfS0VZIiwiZGV2RW52aXJvbm1lbnQiLCJjb21tZXJjZUNvbmZpZyIsImF4aW9zQ29uZmlnIiwiaGVhZGVycyIsIkVycm9yIiwiY29tbWVyY2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/commerce.js\n");

/***/ }),

/***/ "./pages/products/[permalink].js":
/*!***************************************!*\
  !*** ./pages/products/[permalink].js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps),\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"default\": () => (/* binding */ ProductPage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_commerce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/commerce */ \"./lib/commerce.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nasync function getStaticProps({ params  }) {\n    const { permalink  } = params;\n    const product = await _lib_commerce__WEBPACK_IMPORTED_MODULE_1__.commerce.products.retrieve(permalink, {\n        type: \"permalink\"\n    });\n    return {\n        props: {\n            product\n        },\n        revalidate: 60\n    };\n}\nasync function getStaticPaths() {\n    const { data: products  } = await _lib_commerce__WEBPACK_IMPORTED_MODULE_1__.commerce.products.list();\n    return {\n        paths: products.map(({ permalink  })=>({\n                params: {\n                    permalink\n                }\n            })\n        ),\n        fallback: false\n    };\n}\nfunction ProductPage({ product  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: product.seo.title\n                    }, void 0, false, {\n                        fileName: \"/Users/johnknowles/Documents/repos/asheville-craftsman/pages/products/[permalink].js\",\n                        lineNumber: 37,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: product.seo.description\n                    }, void 0, false, {\n                        fileName: \"/Users/johnknowles/Documents/repos/asheville-craftsman/pages/products/[permalink].js\",\n                        lineNumber: 38,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/johnknowles/Documents/repos/asheville-craftsman/pages/products/[permalink].js\",\n                lineNumber: 36,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"md:min-h-screen md:flex md:items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: product.name\n                    }, void 0, false, {\n                        fileName: \"/Users/johnknowles/Documents/repos/asheville-craftsman/pages/products/[permalink].js\",\n                        lineNumber: 42,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        dangerouslySetInnerHTML: {\n                            __html: product.description\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/johnknowles/Documents/repos/asheville-craftsman/pages/products/[permalink].js\",\n                        lineNumber: 45,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/johnknowles/Documents/repos/asheville-craftsman/pages/products/[permalink].js\",\n                lineNumber: 41,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9kdWN0cy9bcGVybWFsaW5rXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQThDO0FBQ2pCO0FBR3RCLGVBQWVFLGNBQWMsQ0FBQyxFQUFFQyxNQUFNLEdBQUUsRUFBRTtJQUM3QyxNQUFNLEVBQUVDLFNBQVMsR0FBRSxHQUFHRCxNQUFNO0lBQzVCLE1BQU1FLE9BQU8sR0FBRyxNQUFNTCxxRUFBMEIsQ0FBQ0ksU0FBUyxFQUFFO1FBQ3hESSxJQUFJLEVBQUUsV0FBVztLQUNwQixDQUFDO0lBRUYsT0FBTztRQUNIQyxLQUFLLEVBQUU7WUFDSEosT0FBTztTQUNWO1FBQ0RLLFVBQVUsRUFBRyxFQUFFO0tBQ2xCLENBQUM7Q0FDTDtBQUVNLGVBQWVDLGNBQWMsR0FBRztJQUNuQyxNQUFNLEVBQUVDLElBQUksRUFBRU4sUUFBUSxHQUFFLEdBQUcsTUFBTU4saUVBQXNCLEVBQUU7SUFFekQsT0FBTztRQUNIYyxLQUFLLEVBQUVSLFFBQVEsQ0FBQ1MsR0FBRyxDQUFDLENBQUMsRUFBRVgsU0FBUyxHQUFFLEdBQUssQ0FBQztnQkFDcENELE1BQU0sRUFBRTtvQkFDSkMsU0FBUztpQkFDWjthQUNKLENBQUM7UUFBQSxDQUFDO1FBQ0hZLFFBQVEsRUFBRSxLQUFLO0tBQ2xCO0NBQ0o7QUFFYyxTQUFTQyxXQUFXLENBQUMsRUFBRVosT0FBTyxHQUFFLEVBQUU7SUFFN0MscUJBQ0k7OzBCQUNJLDhEQUFDSixrREFBSTs7a0NBQ0QsOERBQUNpQixPQUFLO2tDQUFFYixPQUFPLENBQUNjLEdBQUcsQ0FBQ0QsS0FBSzs7Ozs7NEJBQVM7a0NBQ2xDLDhEQUFDRSxNQUFJO3dCQUFDQyxJQUFJLEVBQUMsYUFBYTt3QkFBQ0MsT0FBTyxFQUFFakIsT0FBTyxDQUFDYyxHQUFHLENBQUNJLFdBQVc7Ozs7OzRCQUFTOzs7Ozs7b0JBQy9EOzBCQUVQLDhEQUFDQyxLQUFHO2dCQUFDQyxTQUFTLEVBQUMseUNBQXlDOztrQ0FDcEQsOERBQUNDLElBQUU7a0NBQ0VyQixPQUFPLENBQUNnQixJQUFJOzs7Ozs0QkFDWjtrQ0FDTCw4REFBQ0csS0FBRzt3QkFBQ0csdUJBQXVCLEVBQUU7NEJBQUVDLE1BQU0sRUFBRXZCLE9BQU8sQ0FBQ2tCLFdBQVc7eUJBQUM7Ozs7OzRCQUFJOzs7Ozs7b0JBQzlEOztvQkFDUCxDQUNOO0NBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hc2hldmlsbGUtY3JhZnRzbWFuLy4vcGFnZXMvcHJvZHVjdHMvW3Blcm1hbGlua10uanM/ZjU2MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb21tZXJjZSB9IGZyb20gXCIuLi8uLi9saWIvY29tbWVyY2VcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcblxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoeyBwYXJhbXMgfSkge1xuICAgIGNvbnN0IHsgcGVybWFsaW5rIH0gPSBwYXJhbXM7XG4gICAgY29uc3QgcHJvZHVjdCA9IGF3YWl0IGNvbW1lcmNlLnByb2R1Y3RzLnJldHJpZXZlKHBlcm1hbGluaywge1xuICAgICAgICB0eXBlOiBcInBlcm1hbGlua1wiLFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIHByb2R1Y3QsXG4gICAgICAgIH0sXG4gICAgICAgIHJldmFsaWRhdGU6ICA2MCxcbiAgICB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XG4gICAgY29uc3QgeyBkYXRhOiBwcm9kdWN0cyB9ID0gYXdhaXQgY29tbWVyY2UucHJvZHVjdHMubGlzdCgpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcGF0aHM6IHByb2R1Y3RzLm1hcCgoeyBwZXJtYWxpbmsgfSkgPT4gKHtcbiAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgIHBlcm1hbGluayxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pKSxcbiAgICAgICAgZmFsbGJhY2s6IGZhbHNlLFxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZHVjdFBhZ2UoeyBwcm9kdWN0IH0pIHtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgICA8dGl0bGU+e3Byb2R1Y3Quc2VvLnRpdGxlfTwvdGl0bGU+XG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17cHJvZHVjdC5zZW8uZGVzY3JpcHRpb259PjwvbWV0YT5cbiAgICAgICAgICAgIDwvSGVhZD5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZDptaW4taC1zY3JlZW4gbWQ6ZmxleCBtZDppdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8aDE+XG4gICAgICAgICAgICAgICAgICAgIHtwcm9kdWN0Lm5hbWV9XG4gICAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICAgICA8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogcHJvZHVjdC5kZXNjcmlwdGlvbn19IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgKVxufSJdLCJuYW1lcyI6WyJjb21tZXJjZSIsIkhlYWQiLCJnZXRTdGF0aWNQcm9wcyIsInBhcmFtcyIsInBlcm1hbGluayIsInByb2R1Y3QiLCJwcm9kdWN0cyIsInJldHJpZXZlIiwidHlwZSIsInByb3BzIiwicmV2YWxpZGF0ZSIsImdldFN0YXRpY1BhdGhzIiwiZGF0YSIsImxpc3QiLCJwYXRocyIsIm1hcCIsImZhbGxiYWNrIiwiUHJvZHVjdFBhZ2UiLCJ0aXRsZSIsInNlbyIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImRlc2NyaXB0aW9uIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/products/[permalink].js\n");

/***/ }),

/***/ "@chec/commerce.js":
/*!************************************!*\
  !*** external "@chec/commerce.js" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("@chec/commerce.js");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/products/[permalink].js"));
module.exports = __webpack_exports__;

})();