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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var _lib_queries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/queries */ \"./lib/queries.ts\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/icons */ \"./node_modules/@chakra-ui/icons/dist/index.mjs\");\n/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/debounce */ \"./node_modules/lodash/debounce.js\");\n/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst NoteDetail = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { id } = router.query;\n    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [body, setBody] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { data, loading, error } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_5__.useQuery)(_lib_queries__WEBPACK_IMPORTED_MODULE_3__.GET_NOTE, {\n        variables: {\n            id\n        },\n        skip: !id\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (data === null || data === void 0 ? void 0 : data.note) {\n            setTitle(data.note.title);\n            setBody(data.note.body);\n        }\n    }, [\n        data\n    ]);\n    const [updateNote, { error: updateError }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_5__.useMutation)(_lib_queries__WEBPACK_IMPORTED_MODULE_3__.UPDATE_NOTE);\n    const saveChanges = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(lodash_debounce__WEBPACK_IMPORTED_MODULE_4___default()(()=>{\n        if (id) {\n            updateNote({\n                variables: {\n                    id,\n                    title,\n                    body\n                }\n            });\n        }\n    }, 1000), [\n        title,\n        body,\n        id,\n        updateNote\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        saveChanges();\n    }, [\n        title,\n        body,\n        saveChanges\n    ]);\n    if (!id) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"Waiting for note ID...\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\lenovo\\\\magang-dibimbing\\\\frontend-next\\\\pages\\\\note\\\\[id].tsx\",\n        lineNumber: 49,\n        columnNumber: 19\n    }, undefined);\n    if (loading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\lenovo\\\\magang-dibimbing\\\\frontend-next\\\\pages\\\\note\\\\[id].tsx\",\n        lineNumber: 50,\n        columnNumber: 23\n    }, undefined);\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: [\n            \"Error: \",\n            error.message\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\lenovo\\\\magang-dibimbing\\\\frontend-next\\\\pages\\\\note\\\\[id].tsx\",\n        lineNumber: 51,\n        columnNumber: 21\n    }, undefined);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Box, {\n        position: \"relative\",\n        pt: 10,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.IconButton, {\n                \"aria-label\": \"Back\",\n                icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_7__.ArrowBackIcon, {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\lenovo\\\\magang-dibimbing\\\\frontend-next\\\\pages\\\\note\\\\[id].tsx\",\n                    lineNumber: 57,\n                    columnNumber: 15\n                }, void 0),\n                position: \"absolute\",\n                top: 9,\n                left: 4,\n                variant: \"ghost\",\n                _hover: {\n                    bg: \"gray.200\"\n                },\n                onClick: ()=>router.push(\"/\")\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\lenovo\\\\magang-dibimbing\\\\frontend-next\\\\pages\\\\note\\\\[id].tsx\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Container, {\n                maxW: \"container.md\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Box, {\n                    p: 0,\n                    children: [\n                        updateError && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                \"Error updating note: \",\n                                updateError.message\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\lenovo\\\\magang-dibimbing\\\\frontend-next\\\\pages\\\\note\\\\[id].tsx\",\n                            lineNumber: 67,\n                            columnNumber: 25\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Input, {\n                            variant: \"unstyled\",\n                            placeholder: \"Judul\",\n                            value: title,\n                            onChange: (e)=>setTitle(e.target.value),\n                            size: \"lg\",\n                            fontWeight: \"bold\",\n                            fontSize: \"2xl\",\n                            mb: 4\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\lenovo\\\\magang-dibimbing\\\\frontend-next\\\\pages\\\\note\\\\[id].tsx\",\n                            lineNumber: 68,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Textarea, {\n                            variant: \"unstyled\",\n                            placeholder: \"Mulai mengetik...\",\n                            value: body,\n                            onChange: (e)=>setBody(e.target.value),\n                            minHeight: \"200px\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\lenovo\\\\magang-dibimbing\\\\frontend-next\\\\pages\\\\note\\\\[id].tsx\",\n                            lineNumber: 78,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\lenovo\\\\magang-dibimbing\\\\frontend-next\\\\pages\\\\note\\\\[id].tsx\",\n                    lineNumber: 66,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\lenovo\\\\magang-dibimbing\\\\frontend-next\\\\pages\\\\note\\\\[id].tsx\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\lenovo\\\\magang-dibimbing\\\\frontend-next\\\\pages\\\\note\\\\[id].tsx\",\n        lineNumber: 54,\n        columnNumber: 5\n    }, undefined);\n};\n_s(NoteDetail, \"Xw5HvGRg5FOfZ1KcnBBttjGEdio=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        _apollo_client__WEBPACK_IMPORTED_MODULE_5__.useQuery,\n        _apollo_client__WEBPACK_IMPORTED_MODULE_5__.useMutation\n    ];\n});\n_c = NoteDetail;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NoteDetail);\nvar _c;\n$RefreshReg$(_c, \"NoteDetail\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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b3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbm90ZS9baWRdLnRzeD82NGU4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDYWxsYmFjayB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgdXNlUXVlcnksIHVzZU11dGF0aW9uIH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XHJcbmltcG9ydCB7IEdFVF9OT1RFLCBVUERBVEVfTk9URSB9IGZyb20gXCJAL2xpYi9xdWVyaWVzXCI7XHJcbmltcG9ydCB7IEJveCwgSW5wdXQsIFRleHRhcmVhLCBDb250YWluZXIsIEljb25CdXR0b24gfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5pbXBvcnQgeyBBcnJvd0JhY2tJY29uIH0gZnJvbSBcIkBjaGFrcmEtdWkvaWNvbnNcIjtcclxuaW1wb3J0IGRlYm91bmNlIGZyb20gXCJsb2Rhc2gvZGVib3VuY2VcIjtcclxuXHJcbmNvbnN0IE5vdGVEZXRhaWw6IFJlYWN0LkZDID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHsgaWQgfSA9IHJvdXRlci5xdWVyeTtcclxuXHJcbiAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbYm9keSwgc2V0Qm9keV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgY29uc3QgeyBkYXRhLCBsb2FkaW5nLCBlcnJvciB9ID0gdXNlUXVlcnkoR0VUX05PVEUsIHtcclxuICAgIHZhcmlhYmxlczogeyBpZCB9LFxyXG4gICAgc2tpcDogIWlkLFxyXG4gIH0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGRhdGE/Lm5vdGUpIHtcclxuICAgICAgc2V0VGl0bGUoZGF0YS5ub3RlLnRpdGxlKTtcclxuICAgICAgc2V0Qm9keShkYXRhLm5vdGUuYm9keSk7XHJcbiAgICB9XHJcbiAgfSwgW2RhdGFdKTtcclxuXHJcbiAgY29uc3QgW3VwZGF0ZU5vdGUsIHsgZXJyb3I6IHVwZGF0ZUVycm9yIH1dID0gdXNlTXV0YXRpb24oVVBEQVRFX05PVEUpO1xyXG5cclxuICBjb25zdCBzYXZlQ2hhbmdlcyA9IHVzZUNhbGxiYWNrKFxyXG4gICAgZGVib3VuY2UoKCkgPT4ge1xyXG4gICAgICBpZiAoaWQpIHtcclxuICAgICAgICB1cGRhdGVOb3RlKHtcclxuICAgICAgICAgIHZhcmlhYmxlczoge1xyXG4gICAgICAgICAgICBpZCxcclxuICAgICAgICAgICAgdGl0bGUsXHJcbiAgICAgICAgICAgIGJvZHksXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9LCAxMDAwKSxcclxuICAgIFt0aXRsZSwgYm9keSwgaWQsIHVwZGF0ZU5vdGVdXHJcbiAgKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNhdmVDaGFuZ2VzKCk7XHJcbiAgfSwgW3RpdGxlLCBib2R5LCBzYXZlQ2hhbmdlc10pO1xyXG5cclxuICBpZiAoIWlkKSByZXR1cm4gPHA+V2FpdGluZyBmb3Igbm90ZSBJRC4uLjwvcD47XHJcbiAgaWYgKGxvYWRpbmcpIHJldHVybiA8cD5Mb2FkaW5nLi4uPC9wPjtcclxuICBpZiAoZXJyb3IpIHJldHVybiA8cD5FcnJvcjoge2Vycm9yLm1lc3NhZ2V9PC9wPjtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3ggcG9zaXRpb249XCJyZWxhdGl2ZVwiIHB0PXsxMH0+XHJcbiAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgYXJpYS1sYWJlbD1cIkJhY2tcIlxyXG4gICAgICAgIGljb249ezxBcnJvd0JhY2tJY29uIC8+fVxyXG4gICAgICAgIHBvc2l0aW9uPVwiYWJzb2x1dGVcIlxyXG4gICAgICAgIHRvcD17OX1cclxuICAgICAgICBsZWZ0PXs0fVxyXG4gICAgICAgIHZhcmlhbnQ9XCJnaG9zdFwiXHJcbiAgICAgICAgX2hvdmVyPXt7IGJnOiBcImdyYXkuMjAwXCIgfX1cclxuICAgICAgICBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChcIi9cIil9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxDb250YWluZXIgbWF4Vz1cImNvbnRhaW5lci5tZFwiPlxyXG4gICAgICAgIDxCb3ggcD17MH0+XHJcbiAgICAgICAge3VwZGF0ZUVycm9yICYmIDxwPkVycm9yIHVwZGF0aW5nIG5vdGU6IHt1cGRhdGVFcnJvci5tZXNzYWdlfTwvcD59XHJcbiAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgdmFyaWFudD1cInVuc3R5bGVkXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJKdWR1bFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXt0aXRsZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRUaXRsZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgIHNpemU9XCJsZ1wiXHJcbiAgICAgICAgICAgIGZvbnRXZWlnaHQ9XCJib2xkXCJcclxuICAgICAgICAgICAgZm9udFNpemU9XCIyeGxcIlxyXG4gICAgICAgICAgICBtYj17NH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8VGV4dGFyZWFcclxuICAgICAgICAgICAgdmFyaWFudD1cInVuc3R5bGVkXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJNdWxhaSBtZW5nZXRpay4uLlwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtib2R5fVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEJvZHkoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICBtaW5IZWlnaHQ9XCIyMDBweFwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOb3RlRGV0YWlsO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZUNhbGxiYWNrIiwidXNlUm91dGVyIiwidXNlUXVlcnkiLCJ1c2VNdXRhdGlvbiIsIkdFVF9OT1RFIiwiVVBEQVRFX05PVEUiLCJCb3giLCJJbnB1dCIsIlRleHRhcmVhIiwiQ29udGFpbmVyIiwiSWNvbkJ1dHRvbiIsIkFycm93QmFja0ljb24iLCJkZWJvdW5jZSIsIk5vdGVEZXRhaWwiLCJyb3V0ZXIiLCJpZCIsInF1ZXJ5IiwidGl0bGUiLCJzZXRUaXRsZSIsImJvZHkiLCJzZXRCb2R5IiwiZGF0YSIsImxvYWRpbmciLCJlcnJvciIsInZhcmlhYmxlcyIsInNraXAiLCJub3RlIiwidXBkYXRlTm90ZSIsInVwZGF0ZUVycm9yIiwic2F2ZUNoYW5nZXMiLCJwIiwibWVzc2FnZSIsInBvc2l0aW9uIiwicHQiLCJhcmlhLWxhYmVsIiwiaWNvbiIsInRvcCIsImxlZnQiLCJ2YXJpYW50IiwiX2hvdmVyIiwiYmciLCJvbkNsaWNrIiwicHVzaCIsIm1heFciLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0Iiwic2l6ZSIsImZvbnRXZWlnaHQiLCJmb250U2l6ZSIsIm1iIiwibWluSGVpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/note/[id].tsx\n"));

/***/ })

});