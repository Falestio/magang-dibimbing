"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/note/[id]",{

/***/ "./pages/note/[id].tsx":
/*!*****************************!*\
  !*** ./pages/note/[id].tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var _lib_queries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/queries */ \"./lib/queries.ts\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/icons */ \"./node_modules/@chakra-ui/icons/dist/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst NoteDetail = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { id } = router.query;\n    const { data, loading, error } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_4__.useQuery)(_lib_queries__WEBPACK_IMPORTED_MODULE_3__.GET_NOTE, {\n        variables: {\n            id\n        },\n        skip: !id\n    });\n    if (loading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\lenovo\\\\magang-dibimbing\\\\frontend-next\\\\pages\\\\note\\\\[id].tsx\",\n        lineNumber: 18,\n        columnNumber: 23\n    }, undefined);\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: [\n            \"Error: \",\n            error.message\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\lenovo\\\\magang-dibimbing\\\\frontend-next\\\\pages\\\\note\\\\[id].tsx\",\n        lineNumber: 19,\n        columnNumber: 21\n    }, undefined);\n    const note = data === null || data === void 0 ? void 0 : data.note;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n        position: \"relative\",\n        pt: 10,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.IconButton, {\n                \"aria-label\": \"Back\",\n                icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_6__.ArrowBackIcon, {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\lenovo\\\\magang-dibimbing\\\\frontend-next\\\\pages\\\\note\\\\[id].tsx\",\n                    lineNumber: 27,\n                    columnNumber: 15\n                }, void 0),\n                position: \"absolute\",\n                top: 9,\n                left: 4,\n                variant: \"ghost\",\n                _hover: {\n                    bg: \"gray.200\"\n                },\n                onClick: ()=>router.push(\"/\")\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\lenovo\\\\magang-dibimbing\\\\frontend-next\\\\pages\\\\note\\\\[id].tsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Container, {\n                maxW: \"container.md\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n                    p: 0,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Input, {\n                            variant: \"unstyled\",\n                            placeholder: \"Judul\",\n                            defaultValue: note === null || note === void 0 ? void 0 : note.title,\n                            size: \"lg\",\n                            fontWeight: \"bold\",\n                            fontSize: \"2xl\",\n                            mb: 4\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\lenovo\\\\magang-dibimbing\\\\frontend-next\\\\pages\\\\note\\\\[id].tsx\",\n                            lineNumber: 37,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Textarea, {\n                            variant: \"unstyled\",\n                            placeholder: \"Mulai mengetik...\",\n                            defaultValue: note === null || note === void 0 ? void 0 : note.body,\n                            minHeight: \"200px\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\lenovo\\\\magang-dibimbing\\\\frontend-next\\\\pages\\\\note\\\\[id].tsx\",\n                            lineNumber: 46,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\lenovo\\\\magang-dibimbing\\\\frontend-next\\\\pages\\\\note\\\\[id].tsx\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\lenovo\\\\magang-dibimbing\\\\frontend-next\\\\pages\\\\note\\\\[id].tsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\lenovo\\\\magang-dibimbing\\\\frontend-next\\\\pages\\\\note\\\\[id].tsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, undefined);\n};\n_s(NoteDetail, \"iceLXWjNxjNDYEEqU/kIP9QHhY0=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        _apollo_client__WEBPACK_IMPORTED_MODULE_4__.useQuery\n    ];\n});\n_c = NoteDetail;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NoteDetail);\nvar _c;\n$RefreshReg$(_c, \"NoteDetail\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ub3RlL1tpZF0udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBZ0U7QUFDeEI7QUFDZTtBQUNEO0FBQ3lCO0FBQzlCO0FBR2pELE1BQU1VLGFBQXVCOztJQUMzQixNQUFNQyxTQUFTVixzREFBU0E7SUFDeEIsTUFBTSxFQUFFVyxFQUFFLEVBQUUsR0FBR0QsT0FBT0UsS0FBSztJQUUzQixNQUFNLEVBQUVDLElBQUksRUFBRUMsT0FBTyxFQUFFQyxLQUFLLEVBQUUsR0FBR2Qsd0RBQVFBLENBQUNDLGtEQUFRQSxFQUFFO1FBQ2xEYyxXQUFXO1lBQUVMO1FBQUc7UUFDaEJNLE1BQU0sQ0FBQ047SUFDVDtJQUVBLElBQUlHLFNBQVMscUJBQU8sOERBQUNJO2tCQUFFOzs7Ozs7SUFDdkIsSUFBSUgsT0FBTyxxQkFBTyw4REFBQ0c7O1lBQUU7WUFBUUgsTUFBTUksT0FBTzs7Ozs7OztJQUUxQyxNQUFNQyxPQUFPUCxpQkFBQUEsMkJBQUFBLEtBQU1PLElBQUk7SUFFdkIscUJBQ0UsOERBQUNqQixpREFBR0E7UUFBQ2tCLFVBQVM7UUFBV0MsSUFBSTs7MEJBQzNCLDhEQUFDZix3REFBVUE7Z0JBQ1RnQixjQUFXO2dCQUNYQyxvQkFBTSw4REFBQ2hCLDJEQUFhQTs7Ozs7Z0JBQ3BCYSxVQUFTO2dCQUNUSSxLQUFLO2dCQUNMQyxNQUFNO2dCQUNOQyxTQUFRO2dCQUNSQyxRQUFRO29CQUFFQyxJQUFJO2dCQUFXO2dCQUN6QkMsU0FBUyxJQUFNcEIsT0FBT3FCLElBQUksQ0FBQzs7Ozs7OzBCQUU3Qiw4REFBQ3pCLHVEQUFTQTtnQkFBQzBCLE1BQUs7MEJBQ2QsNEVBQUM3QixpREFBR0E7b0JBQUNlLEdBQUc7O3NDQUNOLDhEQUFDZCxtREFBS0E7NEJBQ0p1QixTQUFROzRCQUNSTSxhQUFZOzRCQUNaQyxZQUFZLEVBQUVkLGlCQUFBQSwyQkFBQUEsS0FBTWUsS0FBSzs0QkFDekJDLE1BQUs7NEJBQ0xDLFlBQVc7NEJBQ1hDLFVBQVM7NEJBQ1RDLElBQUk7Ozs7OztzQ0FFTiw4REFBQ2xDLHNEQUFRQTs0QkFDUHNCLFNBQVE7NEJBQ1JNLGFBQVk7NEJBQ1pDLFlBQVksRUFBRWQsaUJBQUFBLDJCQUFBQSxLQUFNb0IsSUFBSTs0QkFDeEJDLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXRCO0dBL0NNaEM7O1FBQ1dULGtEQUFTQTtRQUdTQyxvREFBUUE7OztLQUpyQ1E7QUFpRE4sK0RBQWVBLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbm90ZS9baWRdLnRzeD82NGU4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHVzZVF1ZXJ5LCB1c2VNdXRhdGlvbiB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xyXG5pbXBvcnQgeyBHRVRfTk9URSwgVVBEQVRFX05PVEUgfSBmcm9tIFwiQC9saWIvcXVlcmllc1wiO1xyXG5pbXBvcnQgeyBCb3gsIElucHV0LCBUZXh0YXJlYSwgQ29udGFpbmVyLCBJY29uQnV0dG9uIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuaW1wb3J0IHsgQXJyb3dCYWNrSWNvbiB9IGZyb20gXCJAY2hha3JhLXVpL2ljb25zXCI7XHJcbmltcG9ydCBkZWJvdW5jZSBmcm9tICdsb2Rhc2gvZGVib3VuY2UnO1xyXG5cclxuY29uc3QgTm90ZURldGFpbDogUmVhY3QuRkMgPSAoKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgeyBpZCB9ID0gcm91dGVyLnF1ZXJ5O1xyXG5cclxuICBjb25zdCB7IGRhdGEsIGxvYWRpbmcsIGVycm9yIH0gPSB1c2VRdWVyeShHRVRfTk9URSwge1xyXG4gICAgdmFyaWFibGVzOiB7IGlkIH0sXHJcbiAgICBza2lwOiAhaWQsXHJcbiAgfSk7XHJcblxyXG4gIGlmIChsb2FkaW5nKSByZXR1cm4gPHA+TG9hZGluZy4uLjwvcD47XHJcbiAgaWYgKGVycm9yKSByZXR1cm4gPHA+RXJyb3I6IHtlcnJvci5tZXNzYWdlfTwvcD47XHJcblxyXG4gIGNvbnN0IG5vdGUgPSBkYXRhPy5ub3RlO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEJveCBwb3NpdGlvbj1cInJlbGF0aXZlXCIgcHQ9ezEwfT5cclxuICAgICAgPEljb25CdXR0b25cclxuICAgICAgICBhcmlhLWxhYmVsPVwiQmFja1wiXHJcbiAgICAgICAgaWNvbj17PEFycm93QmFja0ljb24gLz59XHJcbiAgICAgICAgcG9zaXRpb249XCJhYnNvbHV0ZVwiXHJcbiAgICAgICAgdG9wPXs5fVxyXG4gICAgICAgIGxlZnQ9ezR9XHJcbiAgICAgICAgdmFyaWFudD1cImdob3N0XCJcclxuICAgICAgICBfaG92ZXI9e3sgYmc6IFwiZ3JheS4yMDBcIiB9fVxyXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKFwiL1wiKX1cclxuICAgICAgLz5cclxuICAgICAgPENvbnRhaW5lciBtYXhXPVwiY29udGFpbmVyLm1kXCI+XHJcbiAgICAgICAgPEJveCBwPXswfT5cclxuICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICB2YXJpYW50PVwidW5zdHlsZWRcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkp1ZHVsXCJcclxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtub3RlPy50aXRsZX1cclxuICAgICAgICAgICAgc2l6ZT1cImxnXCJcclxuICAgICAgICAgICAgZm9udFdlaWdodD1cImJvbGRcIlxyXG4gICAgICAgICAgICBmb250U2l6ZT1cIjJ4bFwiXHJcbiAgICAgICAgICAgIG1iPXs0fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxUZXh0YXJlYVxyXG4gICAgICAgICAgICB2YXJpYW50PVwidW5zdHlsZWRcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk11bGFpIG1lbmdldGlrLi4uXCJcclxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtub3RlPy5ib2R5fVxyXG4gICAgICAgICAgICBtaW5IZWlnaHQ9XCIyMDBweFwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOb3RlRGV0YWlsO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VSb3V0ZXIiLCJ1c2VRdWVyeSIsIkdFVF9OT1RFIiwiQm94IiwiSW5wdXQiLCJUZXh0YXJlYSIsIkNvbnRhaW5lciIsIkljb25CdXR0b24iLCJBcnJvd0JhY2tJY29uIiwiTm90ZURldGFpbCIsInJvdXRlciIsImlkIiwicXVlcnkiLCJkYXRhIiwibG9hZGluZyIsImVycm9yIiwidmFyaWFibGVzIiwic2tpcCIsInAiLCJtZXNzYWdlIiwibm90ZSIsInBvc2l0aW9uIiwicHQiLCJhcmlhLWxhYmVsIiwiaWNvbiIsInRvcCIsImxlZnQiLCJ2YXJpYW50IiwiX2hvdmVyIiwiYmciLCJvbkNsaWNrIiwicHVzaCIsIm1heFciLCJwbGFjZWhvbGRlciIsImRlZmF1bHRWYWx1ZSIsInRpdGxlIiwic2l6ZSIsImZvbnRXZWlnaHQiLCJmb250U2l6ZSIsIm1iIiwiYm9keSIsIm1pbkhlaWdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/note/[id].tsx\n"));

/***/ })

});