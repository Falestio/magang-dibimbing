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

/***/ "./lib/queries.ts":
/*!************************!*\
  !*** ./lib/queries.ts ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ADD_NOTE: function() { return /* binding */ ADD_NOTE; },\n/* harmony export */   DELETE_NOTE: function() { return /* binding */ DELETE_NOTE; },\n/* harmony export */   GET_NOTE: function() { return /* binding */ GET_NOTE; },\n/* harmony export */   GET_NOTES: function() { return /* binding */ GET_NOTES; },\n/* harmony export */   UPDATE_NOTE: function() { return /* binding */ UPDATE_NOTE; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  query GetNotes {\\n    notes {\\n      id\\n      title\\n      body\\n      createdat\\n    }\\n  }\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  query GetNote($id: String!) {\\n    note(id: $id) {\\n      id\\n      title\\n      body\\n      createdat\\n    }\\n  }\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  mutation AddNote($title: String!, $body: String!) {\\n    addNote(title: $title, body: $body) {\\n      id\\n      title\\n      body\\n      createdat\\n    }\\n  }\\n\"\n    ]);\n    _templateObject2 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\nmutation UpdateNote($id: String!, $title: String!, $body: String!) {\\n  updateNote(id: $id, title: $title, body: $body) {\\n    id\\n    title\\n    body\\n  }\\n}\\n\"\n    ]);\n    _templateObject3 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  mutation DeleteNote($id: String!) {\\n    deleteNote(id: $id)\\n  }\\n\"\n    ]);\n    _templateObject4 = function() {\n        return data;\n    };\n    return data;\n}\n\nconst GET_NOTES = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql)(_templateObject());\nconst GET_NOTE = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql)(_templateObject1());\nconst ADD_NOTE = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql)(_templateObject2());\nconst UPDATE_NOTE = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql)(_templateObject3());\nconst DELETE_NOTE = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql)(_templateObject4());\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvcXVlcmllcy50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFxQztBQUU5QixNQUFNQyxZQUFZRCxtREFBR0Esb0JBUzFCO0FBRUssTUFBTUUsV0FBV0YsbURBQUdBLHFCQVN6QjtBQUVLLE1BQU1HLFdBQVdILG1EQUFHQSxxQkFTekI7QUFFSyxNQUFNSSxjQUFjSixtREFBR0EscUJBUTVCO0FBRUssTUFBTUssY0FBY0wsbURBQUdBLHFCQUk1QiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9saWIvcXVlcmllcy50cz84YTgxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdxbCB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcclxuXHJcbmV4cG9ydCBjb25zdCBHRVRfTk9URVMgPSBncWxgXHJcbiAgcXVlcnkgR2V0Tm90ZXMge1xyXG4gICAgbm90ZXMge1xyXG4gICAgICBpZFxyXG4gICAgICB0aXRsZVxyXG4gICAgICBib2R5XHJcbiAgICAgIGNyZWF0ZWRhdFxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBHRVRfTk9URSA9IGdxbGBcclxuICBxdWVyeSBHZXROb3RlKCRpZDogU3RyaW5nISkge1xyXG4gICAgbm90ZShpZDogJGlkKSB7XHJcbiAgICAgIGlkXHJcbiAgICAgIHRpdGxlXHJcbiAgICAgIGJvZHlcclxuICAgICAgY3JlYXRlZGF0XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9OT1RFID0gZ3FsYFxyXG4gIG11dGF0aW9uIEFkZE5vdGUoJHRpdGxlOiBTdHJpbmchLCAkYm9keTogU3RyaW5nISkge1xyXG4gICAgYWRkTm90ZSh0aXRsZTogJHRpdGxlLCBib2R5OiAkYm9keSkge1xyXG4gICAgICBpZFxyXG4gICAgICB0aXRsZVxyXG4gICAgICBib2R5XHJcbiAgICAgIGNyZWF0ZWRhdFxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBVUERBVEVfTk9URSA9IGdxbGBcclxubXV0YXRpb24gVXBkYXRlTm90ZSgkaWQ6IFN0cmluZyEsICR0aXRsZTogU3RyaW5nISwgJGJvZHk6IFN0cmluZyEpIHtcclxuICB1cGRhdGVOb3RlKGlkOiAkaWQsIHRpdGxlOiAkdGl0bGUsIGJvZHk6ICRib2R5KSB7XHJcbiAgICBpZFxyXG4gICAgdGl0bGVcclxuICAgIGJvZHlcclxuICB9XHJcbn1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBERUxFVEVfTk9URSA9IGdxbGBcclxuICBtdXRhdGlvbiBEZWxldGVOb3RlKCRpZDogU3RyaW5nISkge1xyXG4gICAgZGVsZXRlTm90ZShpZDogJGlkKVxyXG4gIH1cclxuYDsiXSwibmFtZXMiOlsiZ3FsIiwiR0VUX05PVEVTIiwiR0VUX05PVEUiLCJBRERfTk9URSIsIlVQREFURV9OT1RFIiwiREVMRVRFX05PVEUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/queries.ts\n"));

/***/ })

});