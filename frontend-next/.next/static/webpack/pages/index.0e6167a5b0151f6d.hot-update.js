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

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_queries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/queries */ \"./lib/queries.ts\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/icons */ \"./node_modules/@chakra-ui/icons/dist/index.mjs\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\n\n\nconst formatDate = (timestamp)=>{\n    const date = new Date(parseInt(timestamp));\n    const day = date.getDate().toString().padStart(2, \"0\");\n    const month = (date.getMonth() + 1).toString().padStart(2, \"0\");\n    const year = date.getFullYear();\n    return \"\".concat(day, \"-\").concat(month, \"-\").concat(year);\n};\nconst NotesList = ()=>{\n    _s();\n    const { loading, error, data } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_4__.useQuery)(_lib_queries__WEBPACK_IMPORTED_MODULE_2__.GET_NOTES);\n    const [deleteNote] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_4__.useMutation)(_lib_queries__WEBPACK_IMPORTED_MODULE_2__.DELETE_NOTE, {\n        update (cache, param) {\n            let { data: { deleteNote } } = param;\n            cache.modify({\n                fields: {\n                    notes (existingNotesRefs, param) {\n                        let { readField } = param;\n                        return existingNotesRefs.filter((noteRef)=>deleteNote !== readField(\"id\", noteRef));\n                    }\n                }\n            });\n        }\n    });\n    const handleDelete = async (noteId, e)=>{\n        e.stopPropagation();\n        try {\n            await deleteNote({\n                variables: {\n                    id: noteId\n                }\n            });\n        } catch (error) {\n            console.error(\"Error deleting note:\", error);\n        }\n    };\n    if (loading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\lenovo\\\\magang-dibimbing\\\\frontend-next\\\\pages\\\\index.tsx\",\n        lineNumber: 58,\n        columnNumber: 23\n    }, undefined);\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: [\n            \"Error: \",\n            error.message\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\lenovo\\\\magang-dibimbing\\\\frontend-next\\\\pages\\\\index.tsx\",\n        lineNumber: 59,\n        columnNumber: 21\n    }, undefined);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: data.notes.map((note)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                href: \"/note/\".concat(note.id),\n                passHref: true,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Link, {\n                        style: {\n                            textDecoration: \"none\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n                            p: 5,\n                            shadow: \"md\",\n                            borderWidth: \"1px\",\n                            mb: 4,\n                            borderRadius: \"md\",\n                            position: \"relative\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Heading, {\n                                    fontSize: \"xl\",\n                                    children: note.title\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\lenovo\\\\magang-dibimbing\\\\frontend-next\\\\pages\\\\index.tsx\",\n                                    lineNumber: 74,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Text, {\n                                    mt: 4,\n                                    children: note.body\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\lenovo\\\\magang-dibimbing\\\\frontend-next\\\\pages\\\\index.tsx\",\n                                    lineNumber: 75,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Text, {\n                                    mt: 4,\n                                    color: \"gray.600\",\n                                    children: formatDate(note.createdat)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\lenovo\\\\magang-dibimbing\\\\frontend-next\\\\pages\\\\index.tsx\",\n                                    lineNumber: 76,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\lenovo\\\\magang-dibimbing\\\\frontend-next\\\\pages\\\\index.tsx\",\n                            lineNumber: 66,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\lenovo\\\\magang-dibimbing\\\\frontend-next\\\\pages\\\\index.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.IconButton, {\n                        \"aria-label\": \"Delete note\",\n                        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_6__.DeleteIcon, {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\lenovo\\\\magang-dibimbing\\\\frontend-next\\\\pages\\\\index.tsx\",\n                            lineNumber: 83,\n                            columnNumber: 19\n                        }, void 0),\n                        position: \"absolute\",\n                        top: 2,\n                        right: 2,\n                        onClick: (e)=>{\n                            handleDelete(note.id, e);\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\lenovo\\\\magang-dibimbing\\\\frontend-next\\\\pages\\\\index.tsx\",\n                        lineNumber: 81,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, note.id, true, {\n                fileName: \"C:\\\\Users\\\\lenovo\\\\magang-dibimbing\\\\frontend-next\\\\pages\\\\index.tsx\",\n                lineNumber: 64,\n                columnNumber: 9\n            }, undefined))\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\lenovo\\\\magang-dibimbing\\\\frontend-next\\\\pages\\\\index.tsx\",\n        lineNumber: 62,\n        columnNumber: 5\n    }, undefined);\n};\n_s(NotesList, \"xKdRDFBlko2ur6xHHW1AlmbXe0A=\", false, function() {\n    return [\n        _apollo_client__WEBPACK_IMPORTED_MODULE_4__.useQuery,\n        _apollo_client__WEBPACK_IMPORTED_MODULE_4__.useMutation\n    ];\n});\n_c = NotesList;\nconst HomePage = ()=>{\n    _s1();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const [addNote] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_4__.useMutation)(_lib_queries__WEBPACK_IMPORTED_MODULE_2__.ADD_NOTE);\n    const handleAddNote = async ()=>{\n        try {\n            const { data } = await addNote({\n                variables: {\n                    title: \"\",\n                    body: \"\"\n                }\n            });\n            const newNoteId = data.addNote.id;\n            router.push(\"/note/\".concat(newNoteId));\n        } catch (error) {\n            console.error(\"Error creating a new note:\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Container, {\n        maxW: \"container.xl\",\n        p: 4,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n                display: \"flex\",\n                justifyContent: \"space-between\",\n                alignItems: \"center\",\n                mb: 6,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Heading, {\n                        fontSize: \"x-large\",\n                        children: \"Daftar Catatan\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\lenovo\\\\magang-dibimbing\\\\frontend-next\\\\pages\\\\index.tsx\",\n                        lineNumber: 124,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                        leftIcon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_6__.AddIcon, {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\lenovo\\\\magang-dibimbing\\\\frontend-next\\\\pages\\\\index.tsx\",\n                            lineNumber: 126,\n                            columnNumber: 21\n                        }, void 0),\n                        colorScheme: \"teal\",\n                        onClick: handleAddNote,\n                        children: \"Tambah Catatan\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\lenovo\\\\magang-dibimbing\\\\frontend-next\\\\pages\\\\index.tsx\",\n                        lineNumber: 125,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\lenovo\\\\magang-dibimbing\\\\frontend-next\\\\pages\\\\index.tsx\",\n                lineNumber: 118,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NotesList, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\lenovo\\\\magang-dibimbing\\\\frontend-next\\\\pages\\\\index.tsx\",\n                lineNumber: 133,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\lenovo\\\\magang-dibimbing\\\\frontend-next\\\\pages\\\\index.tsx\",\n        lineNumber: 117,\n        columnNumber: 5\n    }, undefined);\n};\n_s1(HomePage, \"gv76SZJFCXYDhTZ6xmm6A350ZCo=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter,\n        _apollo_client__WEBPACK_IMPORTED_MODULE_4__.useMutation\n    ];\n});\n_c1 = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c, _c1;\n$RefreshReg$(_c, \"NotesList\");\n$RefreshReg$(_c1, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUF1RDtBQUNmO0FBQzBCO0FBVXhDO0FBQzZCO0FBQ3RCO0FBRWpDLE1BQU1nQixhQUFhLENBQUNDO0lBQ2xCLE1BQU1DLE9BQU8sSUFBSUMsS0FBS0MsU0FBU0g7SUFDL0IsTUFBTUksTUFBTUgsS0FBS0ksT0FBTyxHQUFHQyxRQUFRLEdBQUdDLFFBQVEsQ0FBQyxHQUFHO0lBQ2xELE1BQU1DLFFBQVEsQ0FBQ1AsS0FBS1EsUUFBUSxLQUFLLEdBQUdILFFBQVEsR0FBR0MsUUFBUSxDQUFDLEdBQUc7SUFDM0QsTUFBTUcsT0FBT1QsS0FBS1UsV0FBVztJQUM3QixPQUFPLEdBQVVILE9BQVBKLEtBQUksS0FBWU0sT0FBVEYsT0FBTSxLQUFRLE9BQUxFO0FBQzVCO0FBU0EsTUFBTUUsWUFBc0I7O0lBQzFCLE1BQU0sRUFBRUMsT0FBTyxFQUFFQyxLQUFLLEVBQUVDLElBQUksRUFBRSxHQUFHaEMsd0RBQVFBLENBQUNHLG1EQUFTQTtJQUNuRCxNQUFNLENBQUM4QixXQUFXLEdBQUdoQywyREFBV0EsQ0FBQ0cscURBQVdBLEVBQUU7UUFDNUM4QixRQUFPQyxLQUFLLEVBQUUsS0FBd0I7Z0JBQXhCLEVBQUVILE1BQU0sRUFBRUMsVUFBVSxFQUFFLEVBQUUsR0FBeEI7WUFDWkUsTUFBTUMsTUFBTSxDQUFDO2dCQUNYQyxRQUFRO29CQUNOQyxPQUFNQyxpQkFBaUIsRUFBRSxLQUFhOzRCQUFiLEVBQUVDLFNBQVMsRUFBRSxHQUFiO3dCQUN2QixPQUFPRCxrQkFBa0JFLE1BQU0sQ0FDN0IsQ0FBQ0MsVUFBaUJULGVBQWVPLFVBQVUsTUFBTUU7b0JBRXJEO2dCQUNGO1lBQ0Y7UUFDRjtJQUNGO0lBRUEsTUFBTUMsZUFBZSxPQUFPQyxRQUFnQkM7UUFDMUNBLEVBQUVDLGVBQWU7UUFFakIsSUFBSTtZQUNGLE1BQU1iLFdBQVc7Z0JBQUVjLFdBQVc7b0JBQUVDLElBQUlKO2dCQUFPO1lBQUU7UUFDL0MsRUFBRSxPQUFPYixPQUFPO1lBQ2RrQixRQUFRbEIsS0FBSyxDQUFDLHdCQUF3QkE7UUFDeEM7SUFDRjtJQUVBLElBQUlELFNBQVMscUJBQU8sOERBQUNvQjtrQkFBRTs7Ozs7O0lBQ3ZCLElBQUluQixPQUFPLHFCQUFPLDhEQUFDbUI7O1lBQUU7WUFBUW5CLE1BQU1vQixPQUFPOzs7Ozs7O0lBRTFDLHFCQUNFLDhEQUFDQztrQkFDRXBCLEtBQUtNLEtBQUssQ0FBQ2UsR0FBRyxDQUFDLENBQUNDLHFCQUNmLDhEQUFDdkMsa0RBQVFBO2dCQUFld0MsTUFBTSxTQUFpQixPQUFSRCxLQUFLTixFQUFFO2dCQUFJUSxRQUFROztrQ0FDeEQsOERBQUM3QyxrREFBSUE7d0JBQUM4QyxPQUFPOzRCQUFFQyxnQkFBZ0I7d0JBQU87a0NBQ3BDLDRFQUFDcEQsaURBQUdBOzRCQUNGNEMsR0FBRzs0QkFDSFMsUUFBTzs0QkFDUEMsYUFBWTs0QkFDWkMsSUFBSTs0QkFDSkMsY0FBYTs0QkFDYkMsVUFBUzs7OENBRVQsOERBQUN2RCxxREFBT0E7b0NBQUN3RCxVQUFTOzhDQUFNVixLQUFLVyxLQUFLOzs7Ozs7OENBQ2xDLDhEQUFDMUQsa0RBQUlBO29DQUFDMkQsSUFBSTs4Q0FBSVosS0FBS2EsSUFBSTs7Ozs7OzhDQUN2Qiw4REFBQzVELGtEQUFJQTtvQ0FBQzJELElBQUk7b0NBQUdFLE9BQU07OENBQ2hCcEQsV0FBV3NDLEtBQUtlLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUloQyw4REFBQzNELHdEQUFVQTt3QkFDVDRELGNBQVc7d0JBQ1hDLG9CQUFNLDhEQUFDMUQsd0RBQVVBOzs7Ozt3QkFDakJrRCxVQUFTO3dCQUNUUyxLQUFLO3dCQUNMQyxPQUFPO3dCQUNQQyxTQUFTLENBQUM3Qjs0QkFDUkYsYUFBYVcsS0FBS04sRUFBRSxFQUFFSDt3QkFDeEI7Ozs7Ozs7ZUF6QldTLEtBQUtOLEVBQUU7Ozs7Ozs7Ozs7QUErQjlCO0dBL0RNbkI7O1FBQzZCN0Isb0RBQVFBO1FBQ3BCQyx1REFBV0E7OztLQUY1QjRCO0FBaUVOLE1BQU04QyxXQUFxQjs7SUFDekIsTUFBTUMsU0FBUzFFLHNEQUFTQTtJQUN4QixNQUFNLENBQUMyRSxRQUFRLEdBQUc1RSwyREFBV0EsQ0FBQ0ksa0RBQVFBO0lBRXRDLE1BQU15RSxnQkFBZ0I7UUFDcEIsSUFBSTtZQUNGLE1BQU0sRUFBRTlDLElBQUksRUFBRSxHQUFHLE1BQU02QyxRQUFRO2dCQUM3QjlCLFdBQVc7b0JBQ1RrQixPQUFPO29CQUNQRSxNQUFNO2dCQUNSO1lBQ0Y7WUFDQSxNQUFNWSxZQUFZL0MsS0FBSzZDLE9BQU8sQ0FBQzdCLEVBQUU7WUFDakM0QixPQUFPSSxJQUFJLENBQUMsU0FBbUIsT0FBVkQ7UUFDdkIsRUFBRSxPQUFPaEQsT0FBTztZQUNka0IsUUFBUWxCLEtBQUssQ0FBQyw4QkFBOEJBO1FBQzlDO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ3RCLHVEQUFTQTtRQUFDd0UsTUFBSztRQUFlL0IsR0FBRzs7MEJBQ2hDLDhEQUFDNUMsaURBQUdBO2dCQUNGNEUsU0FBUTtnQkFDUkMsZ0JBQWU7Z0JBQ2ZDLFlBQVc7Z0JBQ1h2QixJQUFJOztrQ0FFSiw4REFBQ3JELHFEQUFPQTt3QkFBQ3dELFVBQVM7a0NBQVU7Ozs7OztrQ0FDNUIsOERBQUNwRCxvREFBTUE7d0JBQ0x5RSx3QkFBVSw4REFBQ3ZFLHFEQUFPQTs7Ozs7d0JBQ2xCd0UsYUFBWTt3QkFDWlosU0FBU0k7a0NBQ1Y7Ozs7Ozs7Ozs7OzswQkFJSCw4REFBQ2pEOzs7Ozs7Ozs7OztBQUdQO0lBdkNNOEM7O1FBQ1d6RSxrREFBU0E7UUFDTkQsdURBQVdBOzs7TUFGekIwRTtBQXlDTiwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VRdWVyeSwgdXNlTXV0YXRpb24gfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgR0VUX05PVEVTLCBERUxFVEVfTk9URSwgQUREX05PVEUgfSBmcm9tIFwiLi4vbGliL3F1ZXJpZXNcIjtcbmltcG9ydCB7XG4gIEJveCxcbiAgVGV4dCxcbiAgSGVhZGluZyxcbiAgQ29udGFpbmVyLFxuICBJY29uQnV0dG9uLFxuICBMaW5rLFxuICBCdXR0b24sXG4gIEljb24sXG59IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5pbXBvcnQgeyBEZWxldGVJY29uLCBBZGRJY29uIH0gZnJvbSBcIkBjaGFrcmEtdWkvaWNvbnNcIjtcbmltcG9ydCBOZXh0TGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmNvbnN0IGZvcm1hdERhdGUgPSAodGltZXN0YW1wOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICBjb25zdCBkYXRlID0gbmV3IERhdGUocGFyc2VJbnQodGltZXN0YW1wKSk7XG4gIGNvbnN0IGRheSA9IGRhdGUuZ2V0RGF0ZSgpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgXCIwXCIpO1xuICBjb25zdCBtb250aCA9IChkYXRlLmdldE1vbnRoKCkgKyAxKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsIFwiMFwiKTtcbiAgY29uc3QgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgcmV0dXJuIGAke2RheX0tJHttb250aH0tJHt5ZWFyfWA7XG59O1xuXG50eXBlIE5vdGUgPSB7XG4gIGlkOiBzdHJpbmc7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGJvZHk6IHN0cmluZztcbiAgY3JlYXRlZGF0OiBzdHJpbmc7XG59O1xuXG5jb25zdCBOb3Rlc0xpc3Q6IFJlYWN0LkZDID0gKCkgPT4ge1xuICBjb25zdCB7IGxvYWRpbmcsIGVycm9yLCBkYXRhIH0gPSB1c2VRdWVyeShHRVRfTk9URVMpO1xuICBjb25zdCBbZGVsZXRlTm90ZV0gPSB1c2VNdXRhdGlvbihERUxFVEVfTk9URSwge1xuICAgIHVwZGF0ZShjYWNoZSwgeyBkYXRhOiB7IGRlbGV0ZU5vdGUgfSB9KSB7XG4gICAgICBjYWNoZS5tb2RpZnkoe1xuICAgICAgICBmaWVsZHM6IHtcbiAgICAgICAgICBub3RlcyhleGlzdGluZ05vdGVzUmVmcywgeyByZWFkRmllbGQgfSkge1xuICAgICAgICAgICAgcmV0dXJuIGV4aXN0aW5nTm90ZXNSZWZzLmZpbHRlcihcbiAgICAgICAgICAgICAgKG5vdGVSZWY6IGFueSkgPT4gZGVsZXRlTm90ZSAhPT0gcmVhZEZpZWxkKFwiaWRcIiwgbm90ZVJlZilcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH0sXG4gIH0pO1xuXG4gIGNvbnN0IGhhbmRsZURlbGV0ZSA9IGFzeW5jIChub3RlSWQ6IHN0cmluZywgZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICB0cnkge1xuICAgICAgYXdhaXQgZGVsZXRlTm90ZSh7IHZhcmlhYmxlczogeyBpZDogbm90ZUlkIH0gfSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBkZWxldGluZyBub3RlOlwiLCBlcnJvcik7XG4gICAgfVxuICB9O1xuXG4gIGlmIChsb2FkaW5nKSByZXR1cm4gPHA+TG9hZGluZy4uLjwvcD47XG4gIGlmIChlcnJvcikgcmV0dXJuIDxwPkVycm9yOiB7ZXJyb3IubWVzc2FnZX08L3A+O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIHtkYXRhLm5vdGVzLm1hcCgobm90ZTogTm90ZSkgPT4gKFxuICAgICAgICA8TmV4dExpbmsga2V5PXtub3RlLmlkfSBocmVmPXtgL25vdGUvJHtub3RlLmlkfWB9IHBhc3NIcmVmPlxuICAgICAgICAgIDxMaW5rIHN0eWxlPXt7IHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIiB9fT5cbiAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgcD17NX1cbiAgICAgICAgICAgICAgc2hhZG93PVwibWRcIlxuICAgICAgICAgICAgICBib3JkZXJXaWR0aD1cIjFweFwiXG4gICAgICAgICAgICAgIG1iPXs0fVxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM9XCJtZFwiXG4gICAgICAgICAgICAgIHBvc2l0aW9uPVwicmVsYXRpdmVcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8SGVhZGluZyBmb250U2l6ZT1cInhsXCI+e25vdGUudGl0bGV9PC9IZWFkaW5nPlxuICAgICAgICAgICAgICA8VGV4dCBtdD17NH0+e25vdGUuYm9keX08L1RleHQ+XG4gICAgICAgICAgICAgIDxUZXh0IG10PXs0fSBjb2xvcj1cImdyYXkuNjAwXCI+XG4gICAgICAgICAgICAgICAge2Zvcm1hdERhdGUobm90ZS5jcmVhdGVkYXQpfVxuICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJEZWxldGUgbm90ZVwiXG4gICAgICAgICAgICBpY29uPXs8RGVsZXRlSWNvbiAvPn1cbiAgICAgICAgICAgIHBvc2l0aW9uPVwiYWJzb2x1dGVcIlxuICAgICAgICAgICAgdG9wPXsyfVxuICAgICAgICAgICAgcmlnaHQ9ezJ9XG4gICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICBoYW5kbGVEZWxldGUobm90ZS5pZCwgZSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvTmV4dExpbms+XG4gICAgICApKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IEhvbWVQYWdlOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IFthZGROb3RlXSA9IHVzZU11dGF0aW9uKEFERF9OT1RFKTtcblxuICBjb25zdCBoYW5kbGVBZGROb3RlID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGFkZE5vdGUoe1xuICAgICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgICB0aXRsZTogXCJcIixcbiAgICAgICAgICBib2R5OiBcIlwiLCBcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgICAgY29uc3QgbmV3Tm90ZUlkID0gZGF0YS5hZGROb3RlLmlkO1xuICAgICAgcm91dGVyLnB1c2goYC9ub3RlLyR7bmV3Tm90ZUlkfWApO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgY3JlYXRpbmcgYSBuZXcgbm90ZTpcIiwgZXJyb3IpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXIgbWF4Vz1cImNvbnRhaW5lci54bFwiIHA9ezR9PlxuICAgICAgPEJveFxuICAgICAgICBkaXNwbGF5PVwiZmxleFwiXG4gICAgICAgIGp1c3RpZnlDb250ZW50PVwic3BhY2UtYmV0d2VlblwiXG4gICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgICBtYj17Nn1cbiAgICAgID5cbiAgICAgICAgPEhlYWRpbmcgZm9udFNpemU9XCJ4LWxhcmdlXCI+RGFmdGFyIENhdGF0YW48L0hlYWRpbmc+XG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBsZWZ0SWNvbj17PEFkZEljb24gLz59XG4gICAgICAgICAgY29sb3JTY2hlbWU9XCJ0ZWFsXCJcbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVBZGROb3RlfVxuICAgICAgICA+XG4gICAgICAgICAgVGFtYmFoIENhdGF0YW5cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L0JveD5cbiAgICAgIDxOb3Rlc0xpc3QgLz5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlO1xuIl0sIm5hbWVzIjpbInVzZVF1ZXJ5IiwidXNlTXV0YXRpb24iLCJ1c2VSb3V0ZXIiLCJHRVRfTk9URVMiLCJERUxFVEVfTk9URSIsIkFERF9OT1RFIiwiQm94IiwiVGV4dCIsIkhlYWRpbmciLCJDb250YWluZXIiLCJJY29uQnV0dG9uIiwiTGluayIsIkJ1dHRvbiIsIkRlbGV0ZUljb24iLCJBZGRJY29uIiwiTmV4dExpbmsiLCJmb3JtYXREYXRlIiwidGltZXN0YW1wIiwiZGF0ZSIsIkRhdGUiLCJwYXJzZUludCIsImRheSIsImdldERhdGUiLCJ0b1N0cmluZyIsInBhZFN0YXJ0IiwibW9udGgiLCJnZXRNb250aCIsInllYXIiLCJnZXRGdWxsWWVhciIsIk5vdGVzTGlzdCIsImxvYWRpbmciLCJlcnJvciIsImRhdGEiLCJkZWxldGVOb3RlIiwidXBkYXRlIiwiY2FjaGUiLCJtb2RpZnkiLCJmaWVsZHMiLCJub3RlcyIsImV4aXN0aW5nTm90ZXNSZWZzIiwicmVhZEZpZWxkIiwiZmlsdGVyIiwibm90ZVJlZiIsImhhbmRsZURlbGV0ZSIsIm5vdGVJZCIsImUiLCJzdG9wUHJvcGFnYXRpb24iLCJ2YXJpYWJsZXMiLCJpZCIsImNvbnNvbGUiLCJwIiwibWVzc2FnZSIsImRpdiIsIm1hcCIsIm5vdGUiLCJocmVmIiwicGFzc0hyZWYiLCJzdHlsZSIsInRleHREZWNvcmF0aW9uIiwic2hhZG93IiwiYm9yZGVyV2lkdGgiLCJtYiIsImJvcmRlclJhZGl1cyIsInBvc2l0aW9uIiwiZm9udFNpemUiLCJ0aXRsZSIsIm10IiwiYm9keSIsImNvbG9yIiwiY3JlYXRlZGF0IiwiYXJpYS1sYWJlbCIsImljb24iLCJ0b3AiLCJyaWdodCIsIm9uQ2xpY2siLCJIb21lUGFnZSIsInJvdXRlciIsImFkZE5vdGUiLCJoYW5kbGVBZGROb3RlIiwibmV3Tm90ZUlkIiwicHVzaCIsIm1heFciLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwibGVmdEljb24iLCJjb2xvclNjaGVtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});