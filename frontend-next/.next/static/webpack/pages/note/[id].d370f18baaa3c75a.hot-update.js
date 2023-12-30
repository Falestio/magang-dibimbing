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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var _lib_queries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/queries */ \"./lib/queries.ts\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/icons */ \"./node_modules/@chakra-ui/icons/dist/index.mjs\");\n/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/debounce */ \"./node_modules/lodash/debounce.js\");\n/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst NoteDetail = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { id } = router.query;\n    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [body, setBody] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [updateNote] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_5__.useMutation)(_lib_queries__WEBPACK_IMPORTED_MODULE_3__.UPDATE_NOTE);\n    const { data, loading, error } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_5__.useQuery)(_lib_queries__WEBPACK_IMPORTED_MODULE_3__.GET_NOTE, {\n        variables: {\n            id\n        },\n        skip: !id\n    });\n    if (loading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\lenovo\\\\magang-dibimbing\\\\frontend-next\\\\pages\\\\note\\\\[id].tsx\",\n        lineNumber: 22,\n        columnNumber: 23\n    }, undefined);\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: [\n            \"Error: \",\n            error.message\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\lenovo\\\\magang-dibimbing\\\\frontend-next\\\\pages\\\\note\\\\[id].tsx\",\n        lineNumber: 23,\n        columnNumber: 21\n    }, undefined);\n    const note = data === null || data === void 0 ? void 0 : data.note;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (note) {\n            setTitle(note.title);\n            setBody(note.body);\n        }\n    }, [\n        note\n    ]);\n    const saveChanges = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(lodash_debounce__WEBPACK_IMPORTED_MODULE_4___default()(()=>{\n        updateNote({\n            variables: {\n                id,\n                title,\n                body\n            }\n        });\n    }, 1000), [\n        title,\n        body,\n        id,\n        updateNote\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (title !== (note === null || note === void 0 ? void 0 : note.title) || body !== (note === null || note === void 0 ? void 0 : note.body)) {\n            saveChanges();\n        }\n    }, [\n        title,\n        body,\n        note,\n        saveChanges\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Box, {\n        position: \"relative\",\n        pt: 10,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.IconButton, {\n                \"aria-label\": \"Back\",\n                icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_7__.ArrowBackIcon, {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\lenovo\\\\magang-dibimbing\\\\frontend-next\\\\pages\\\\note\\\\[id].tsx\",\n                    lineNumber: 58,\n                    columnNumber: 15\n                }, void 0),\n                position: \"absolute\",\n                top: 9,\n                left: 4,\n                variant: \"ghost\",\n                _hover: {\n                    bg: \"gray.200\"\n                },\n                onClick: ()=>router.push(\"/\")\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\lenovo\\\\magang-dibimbing\\\\frontend-next\\\\pages\\\\note\\\\[id].tsx\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Container, {\n                maxW: \"container.md\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Box, {\n                    p: 0,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Input, {\n                            variant: \"unstyled\",\n                            placeholder: \"Judul\",\n                            value: title,\n                            onChange: (e)=>setTitle(e.target.value),\n                            size: \"lg\",\n                            fontWeight: \"bold\",\n                            fontSize: \"2xl\",\n                            mb: 4\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\lenovo\\\\magang-dibimbing\\\\frontend-next\\\\pages\\\\note\\\\[id].tsx\",\n                            lineNumber: 68,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Textarea, {\n                            variant: \"unstyled\",\n                            placeholder: \"Mulai mengetik...\",\n                            value: body,\n                            onChange: (e)=>setBody(e.target.value),\n                            minHeight: \"200px\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\lenovo\\\\magang-dibimbing\\\\frontend-next\\\\pages\\\\note\\\\[id].tsx\",\n                            lineNumber: 78,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\lenovo\\\\magang-dibimbing\\\\frontend-next\\\\pages\\\\note\\\\[id].tsx\",\n                    lineNumber: 67,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\lenovo\\\\magang-dibimbing\\\\frontend-next\\\\pages\\\\note\\\\[id].tsx\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\lenovo\\\\magang-dibimbing\\\\frontend-next\\\\pages\\\\note\\\\[id].tsx\",\n        lineNumber: 55,\n        columnNumber: 5\n    }, undefined);\n};\n_s(NoteDetail, \"41MpFLPiNWpqPF2fqLi1c8mY+58=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        _apollo_client__WEBPACK_IMPORTED_MODULE_5__.useMutation,\n        _apollo_client__WEBPACK_IMPORTED_MODULE_5__.useQuery\n    ];\n});\n_c = NoteDetail;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NoteDetail);\nvar _c;\n$RefreshReg$(_c, \"NoteDetail\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyB1c2VRdWVyeSwgdXNlTXV0YXRpb24gfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcclxuaW1wb3J0IHsgR0VUX05PVEUsIFVQREFURV9OT1RFIH0gZnJvbSBcIkAvbGliL3F1ZXJpZXNcIjtcclxuaW1wb3J0IHsgQm94LCBJbnB1dCwgVGV4dGFyZWEsIENvbnRhaW5lciwgSWNvbkJ1dHRvbiB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XHJcbmltcG9ydCB7IEFycm93QmFja0ljb24gfSBmcm9tIFwiQGNoYWtyYS11aS9pY29uc1wiO1xyXG5pbXBvcnQgZGVib3VuY2UgZnJvbSBcImxvZGFzaC9kZWJvdW5jZVwiO1xyXG5cclxuY29uc3QgTm90ZURldGFpbDogUmVhY3QuRkMgPSAoKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgeyBpZCB9ID0gcm91dGVyLnF1ZXJ5O1xyXG4gIFxyXG4gIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2JvZHksIHNldEJvZHldID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3VwZGF0ZU5vdGVdID0gdXNlTXV0YXRpb24oVVBEQVRFX05PVEUpO1xyXG4gIFxyXG4gIGNvbnN0IHsgZGF0YSwgbG9hZGluZywgZXJyb3IgfSA9IHVzZVF1ZXJ5KEdFVF9OT1RFLCB7XHJcbiAgICB2YXJpYWJsZXM6IHsgaWQgfSxcclxuICAgIHNraXA6ICFpZCxcclxuICB9KTtcclxuXHJcbiAgaWYgKGxvYWRpbmcpIHJldHVybiA8cD5Mb2FkaW5nLi4uPC9wPjtcclxuICBpZiAoZXJyb3IpIHJldHVybiA8cD5FcnJvcjoge2Vycm9yLm1lc3NhZ2V9PC9wPjtcclxuXHJcbiAgY29uc3Qgbm90ZSA9IGRhdGE/Lm5vdGU7XHJcblxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKG5vdGUpIHtcclxuICAgICAgc2V0VGl0bGUobm90ZS50aXRsZSk7XHJcbiAgICAgIHNldEJvZHkobm90ZS5ib2R5KTtcclxuICAgIH1cclxuICB9LCBbbm90ZV0pO1xyXG5cclxuICBjb25zdCBzYXZlQ2hhbmdlcyA9IHVzZUNhbGxiYWNrKFxyXG4gICAgZGVib3VuY2UoKCkgPT4ge1xyXG4gICAgICB1cGRhdGVOb3RlKHtcclxuICAgICAgICB2YXJpYWJsZXM6IHtcclxuICAgICAgICAgIGlkLFxyXG4gICAgICAgICAgdGl0bGUsXHJcbiAgICAgICAgICBib2R5LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgfSwgMTAwMCksXHJcbiAgICBbdGl0bGUsIGJvZHksIGlkLCB1cGRhdGVOb3RlXVxyXG4gICk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAodGl0bGUgIT09IG5vdGU/LnRpdGxlIHx8IGJvZHkgIT09IG5vdGU/LmJvZHkpIHtcclxuICAgICAgc2F2ZUNoYW5nZXMoKTtcclxuICAgIH1cclxuICB9LCBbdGl0bGUsIGJvZHksIG5vdGUsIHNhdmVDaGFuZ2VzXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94IHBvc2l0aW9uPVwicmVsYXRpdmVcIiBwdD17MTB9PlxyXG4gICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgIGFyaWEtbGFiZWw9XCJCYWNrXCJcclxuICAgICAgICBpY29uPXs8QXJyb3dCYWNrSWNvbiAvPn1cclxuICAgICAgICBwb3NpdGlvbj1cImFic29sdXRlXCJcclxuICAgICAgICB0b3A9ezl9XHJcbiAgICAgICAgbGVmdD17NH1cclxuICAgICAgICB2YXJpYW50PVwiZ2hvc3RcIlxyXG4gICAgICAgIF9ob3Zlcj17eyBiZzogXCJncmF5LjIwMFwiIH19XHJcbiAgICAgICAgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goXCIvXCIpfVxyXG4gICAgICAvPlxyXG4gICAgICA8Q29udGFpbmVyIG1heFc9XCJjb250YWluZXIubWRcIj5cclxuICAgICAgICA8Qm94IHA9ezB9PlxyXG4gICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJ1bnN0eWxlZFwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSnVkdWxcIlxyXG4gICAgICAgICAgICB2YWx1ZT17dGl0bGV9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VGl0bGUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICBzaXplPVwibGdcIlxyXG4gICAgICAgICAgICBmb250V2VpZ2h0PVwiYm9sZFwiXHJcbiAgICAgICAgICAgIGZvbnRTaXplPVwiMnhsXCJcclxuICAgICAgICAgICAgbWI9ezR9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPFRleHRhcmVhXHJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJ1bnN0eWxlZFwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTXVsYWkgbWVuZ2V0aWsuLi5cIlxyXG4gICAgICAgICAgICB2YWx1ZT17Ym9keX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRCb2R5KGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgbWluSGVpZ2h0PVwiMjAwcHhcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTm90ZURldGFpbDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VDYWxsYmFjayIsInVzZVJvdXRlciIsInVzZVF1ZXJ5IiwidXNlTXV0YXRpb24iLCJHRVRfTk9URSIsIlVQREFURV9OT1RFIiwiQm94IiwiSW5wdXQiLCJUZXh0YXJlYSIsIkNvbnRhaW5lciIsIkljb25CdXR0b24iLCJBcnJvd0JhY2tJY29uIiwiZGVib3VuY2UiLCJOb3RlRGV0YWlsIiwicm91dGVyIiwiaWQiLCJxdWVyeSIsInRpdGxlIiwic2V0VGl0bGUiLCJib2R5Iiwic2V0Qm9keSIsInVwZGF0ZU5vdGUiLCJkYXRhIiwibG9hZGluZyIsImVycm9yIiwidmFyaWFibGVzIiwic2tpcCIsInAiLCJtZXNzYWdlIiwibm90ZSIsInNhdmVDaGFuZ2VzIiwicG9zaXRpb24iLCJwdCIsImFyaWEtbGFiZWwiLCJpY29uIiwidG9wIiwibGVmdCIsInZhcmlhbnQiLCJfaG92ZXIiLCJiZyIsIm9uQ2xpY2siLCJwdXNoIiwibWF4VyIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJzaXplIiwiZm9udFdlaWdodCIsImZvbnRTaXplIiwibWIiLCJtaW5IZWlnaHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/note/[id].tsx\n"));

/***/ })

});