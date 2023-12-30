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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var _lib_queries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/queries */ \"./lib/queries.ts\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/icons */ \"./node_modules/@chakra-ui/icons/dist/index.mjs\");\n/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/debounce */ \"./node_modules/lodash/debounce.js\");\n/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst NoteDetail = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { id } = router.query;\n    const { data, loading, error } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_5__.useQuery)(_lib_queries__WEBPACK_IMPORTED_MODULE_3__.GET_NOTE, {\n        variables: {\n            id\n        },\n        skip: !id\n    });\n    if (loading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\lenovo\\\\magang-dibimbing\\\\frontend-next\\\\pages\\\\note\\\\[id].tsx\",\n        lineNumber: 18,\n        columnNumber: 23\n    }, undefined);\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: [\n            \"Error: \",\n            error.message\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\lenovo\\\\magang-dibimbing\\\\frontend-next\\\\pages\\\\note\\\\[id].tsx\",\n        lineNumber: 19,\n        columnNumber: 21\n    }, undefined);\n    const note = data === null || data === void 0 ? void 0 : data.note;\n    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [body, setBody] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [updateNote] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_5__.useMutation)(_lib_queries__WEBPACK_IMPORTED_MODULE_3__.UPDATE_NOTE);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (note) {\n            setTitle(note.title);\n            setBody(note.body);\n        }\n    }, [\n        note\n    ]);\n    const saveChanges = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(lodash_debounce__WEBPACK_IMPORTED_MODULE_4___default()(()=>{\n        updateNote({\n            variables: {\n                id,\n                title,\n                body\n            }\n        });\n    }, 1000), [\n        title,\n        body,\n        id,\n        updateNote\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (title !== (note === null || note === void 0 ? void 0 : note.title) || body !== (note === null || note === void 0 ? void 0 : note.body)) {\n            saveChanges();\n        }\n    }, [\n        title,\n        body,\n        note,\n        saveChanges\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Box, {\n        position: \"relative\",\n        pt: 10,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.IconButton, {\n                \"aria-label\": \"Back\",\n                icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_7__.ArrowBackIcon, {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\lenovo\\\\magang-dibimbing\\\\frontend-next\\\\pages\\\\note\\\\[id].tsx\",\n                    lineNumber: 57,\n                    columnNumber: 15\n                }, void 0),\n                position: \"absolute\",\n                top: 9,\n                left: 4,\n                variant: \"ghost\",\n                _hover: {\n                    bg: \"gray.200\"\n                },\n                onClick: ()=>router.push(\"/\")\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\lenovo\\\\magang-dibimbing\\\\frontend-next\\\\pages\\\\note\\\\[id].tsx\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Container, {\n                maxW: \"container.md\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Box, {\n                    p: 0,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Input, {\n                            variant: \"unstyled\",\n                            placeholder: \"Judul\",\n                            value: title,\n                            onChange: (e)=>setTitle(e.target.value),\n                            size: \"lg\",\n                            fontWeight: \"bold\",\n                            fontSize: \"2xl\",\n                            mb: 4\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\lenovo\\\\magang-dibimbing\\\\frontend-next\\\\pages\\\\note\\\\[id].tsx\",\n                            lineNumber: 67,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Textarea, {\n                            variant: \"unstyled\",\n                            placeholder: \"Mulai mengetik...\",\n                            value: body,\n                            onChange: (e)=>setBody(e.target.value),\n                            minHeight: \"200px\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\lenovo\\\\magang-dibimbing\\\\frontend-next\\\\pages\\\\note\\\\[id].tsx\",\n                            lineNumber: 77,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\lenovo\\\\magang-dibimbing\\\\frontend-next\\\\pages\\\\note\\\\[id].tsx\",\n                    lineNumber: 66,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\lenovo\\\\magang-dibimbing\\\\frontend-next\\\\pages\\\\note\\\\[id].tsx\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\lenovo\\\\magang-dibimbing\\\\frontend-next\\\\pages\\\\note\\\\[id].tsx\",\n        lineNumber: 54,\n        columnNumber: 5\n    }, undefined);\n};\n_s(NoteDetail, \"Q9tmXKG2qor0VWuV9/KZ3Wvf9gc=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        _apollo_client__WEBPACK_IMPORTED_MODULE_5__.useQuery,\n        _apollo_client__WEBPACK_IMPORTED_MODULE_5__.useMutation\n    ];\n});\n_c = NoteDetail;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NoteDetail);\nvar _c;\n$RefreshReg$(_c, \"NoteDetail\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyB1c2VRdWVyeSwgdXNlTXV0YXRpb24gfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcclxuaW1wb3J0IHsgR0VUX05PVEUsIFVQREFURV9OT1RFIH0gZnJvbSBcIkAvbGliL3F1ZXJpZXNcIjtcclxuaW1wb3J0IHsgQm94LCBJbnB1dCwgVGV4dGFyZWEsIENvbnRhaW5lciwgSWNvbkJ1dHRvbiB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XHJcbmltcG9ydCB7IEFycm93QmFja0ljb24gfSBmcm9tIFwiQGNoYWtyYS11aS9pY29uc1wiO1xyXG5pbXBvcnQgZGVib3VuY2UgZnJvbSBcImxvZGFzaC9kZWJvdW5jZVwiO1xyXG5cclxuY29uc3QgTm90ZURldGFpbDogUmVhY3QuRkMgPSAoKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgeyBpZCB9ID0gcm91dGVyLnF1ZXJ5O1xyXG5cclxuICBjb25zdCB7IGRhdGEsIGxvYWRpbmcsIGVycm9yIH0gPSB1c2VRdWVyeShHRVRfTk9URSwge1xyXG4gICAgdmFyaWFibGVzOiB7IGlkIH0sXHJcbiAgICBza2lwOiAhaWQsXHJcbiAgfSk7XHJcblxyXG4gIGlmIChsb2FkaW5nKSByZXR1cm4gPHA+TG9hZGluZy4uLjwvcD47XHJcbiAgaWYgKGVycm9yKSByZXR1cm4gPHA+RXJyb3I6IHtlcnJvci5tZXNzYWdlfTwvcD47XHJcblxyXG4gIGNvbnN0IG5vdGUgPSBkYXRhPy5ub3RlO1xyXG5cclxuICBjb25zdCBbdGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtib2R5LCBzZXRCb2R5XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFt1cGRhdGVOb3RlXSA9IHVzZU11dGF0aW9uKFVQREFURV9OT1RFKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChub3RlKSB7XHJcbiAgICAgIHNldFRpdGxlKG5vdGUudGl0bGUpO1xyXG4gICAgICBzZXRCb2R5KG5vdGUuYm9keSk7XHJcbiAgICB9XHJcbiAgfSwgW25vdGVdKTtcclxuXHJcbiAgY29uc3Qgc2F2ZUNoYW5nZXMgPSB1c2VDYWxsYmFjayhcclxuICAgIGRlYm91bmNlKCgpID0+IHtcclxuICAgICAgdXBkYXRlTm90ZSh7XHJcbiAgICAgICAgdmFyaWFibGVzOiB7XHJcbiAgICAgICAgICBpZCxcclxuICAgICAgICAgIHRpdGxlLFxyXG4gICAgICAgICAgYm9keSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICAgIH0sIDEwMDApLFxyXG4gICAgW3RpdGxlLCBib2R5LCBpZCwgdXBkYXRlTm90ZV1cclxuICApO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHRpdGxlICE9PSBub3RlPy50aXRsZSB8fCBib2R5ICE9PSBub3RlPy5ib2R5KSB7XHJcbiAgICAgIHNhdmVDaGFuZ2VzKCk7XHJcbiAgICB9XHJcbiAgfSwgW3RpdGxlLCBib2R5LCBub3RlLCBzYXZlQ2hhbmdlc10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEJveCBwb3NpdGlvbj1cInJlbGF0aXZlXCIgcHQ9ezEwfT5cclxuICAgICAgPEljb25CdXR0b25cclxuICAgICAgICBhcmlhLWxhYmVsPVwiQmFja1wiXHJcbiAgICAgICAgaWNvbj17PEFycm93QmFja0ljb24gLz59XHJcbiAgICAgICAgcG9zaXRpb249XCJhYnNvbHV0ZVwiXHJcbiAgICAgICAgdG9wPXs5fVxyXG4gICAgICAgIGxlZnQ9ezR9XHJcbiAgICAgICAgdmFyaWFudD1cImdob3N0XCJcclxuICAgICAgICBfaG92ZXI9e3sgYmc6IFwiZ3JheS4yMDBcIiB9fVxyXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKFwiL1wiKX1cclxuICAgICAgLz5cclxuICAgICAgPENvbnRhaW5lciBtYXhXPVwiY29udGFpbmVyLm1kXCI+XHJcbiAgICAgICAgPEJveCBwPXswfT5cclxuICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICB2YXJpYW50PVwidW5zdHlsZWRcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkp1ZHVsXCJcclxuICAgICAgICAgICAgdmFsdWU9e3RpdGxlfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFRpdGxlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgc2l6ZT1cImxnXCJcclxuICAgICAgICAgICAgZm9udFdlaWdodD1cImJvbGRcIlxyXG4gICAgICAgICAgICBmb250U2l6ZT1cIjJ4bFwiXHJcbiAgICAgICAgICAgIG1iPXs0fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxUZXh0YXJlYVxyXG4gICAgICAgICAgICB2YXJpYW50PVwidW5zdHlsZWRcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk11bGFpIG1lbmdldGlrLi4uXCJcclxuICAgICAgICAgICAgdmFsdWU9e2JvZHl9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Qm9keShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgIG1pbkhlaWdodD1cIjIwMHB4XCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5vdGVEZXRhaWw7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlQ2FsbGJhY2siLCJ1c2VSb3V0ZXIiLCJ1c2VRdWVyeSIsInVzZU11dGF0aW9uIiwiR0VUX05PVEUiLCJVUERBVEVfTk9URSIsIkJveCIsIklucHV0IiwiVGV4dGFyZWEiLCJDb250YWluZXIiLCJJY29uQnV0dG9uIiwiQXJyb3dCYWNrSWNvbiIsImRlYm91bmNlIiwiTm90ZURldGFpbCIsInJvdXRlciIsImlkIiwicXVlcnkiLCJkYXRhIiwibG9hZGluZyIsImVycm9yIiwidmFyaWFibGVzIiwic2tpcCIsInAiLCJtZXNzYWdlIiwibm90ZSIsInRpdGxlIiwic2V0VGl0bGUiLCJib2R5Iiwic2V0Qm9keSIsInVwZGF0ZU5vdGUiLCJzYXZlQ2hhbmdlcyIsInBvc2l0aW9uIiwicHQiLCJhcmlhLWxhYmVsIiwiaWNvbiIsInRvcCIsImxlZnQiLCJ2YXJpYW50IiwiX2hvdmVyIiwiYmciLCJvbkNsaWNrIiwicHVzaCIsIm1heFciLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0Iiwic2l6ZSIsImZvbnRXZWlnaHQiLCJmb250U2l6ZSIsIm1iIiwibWluSGVpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/note/[id].tsx\n"));

/***/ })

});