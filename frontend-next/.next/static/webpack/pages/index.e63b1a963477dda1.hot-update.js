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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_queries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/queries */ \"./lib/queries.ts\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/icons */ \"./node_modules/@chakra-ui/icons/dist/index.mjs\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\n\n\nconst formatDate = (timestamp)=>{\n    const date = new Date(parseInt(timestamp));\n    const day = date.getDate().toString().padStart(2, \"0\");\n    const month = (date.getMonth() + 1).toString().padStart(2, \"0\");\n    const year = date.getFullYear();\n    return \"\".concat(day, \"-\").concat(month, \"-\").concat(year);\n};\nconst NotesList = ()=>{\n    _s();\n    const { loading, error, data } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_4__.useQuery)(_lib_queries__WEBPACK_IMPORTED_MODULE_2__.GET_NOTES);\n    const [deleteNote] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_4__.useMutation)(_lib_queries__WEBPACK_IMPORTED_MODULE_2__.DELETE_NOTE, {\n        update (cache, param) {\n            let { data: { deleteNote } } = param;\n            cache.modify({\n                fields: {\n                    notes (existingNotesRefs, param) {\n                        let { readField } = param;\n                        return existingNotesRefs.filter((noteRef)=>deleteNote !== readField(\"id\", noteRef));\n                    }\n                }\n            });\n        }\n    });\n    const handleDelete = async (noteId, e)=>{\n        e.stopPropagation();\n        e.nativeEvent.stopImmediatePropagation();\n        try {\n            await deleteNote({\n                variables: {\n                    id: noteId\n                }\n            });\n        } catch (error) {\n            console.error(\"Error deleting note:\", error);\n        }\n    };\n    if (loading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\lenovo\\\\magang-dibimbing\\\\frontend-next\\\\pages\\\\index.tsx\",\n        lineNumber: 59,\n        columnNumber: 23\n    }, undefined);\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: [\n            \"Error: \",\n            error.message\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\lenovo\\\\magang-dibimbing\\\\frontend-next\\\\pages\\\\index.tsx\",\n        lineNumber: 60,\n        columnNumber: 21\n    }, undefined);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: data.notes.map((note)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                href: \"/note/\".concat(note.id),\n                passHref: true,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n                        p: 5,\n                        shadow: \"md\",\n                        borderWidth: \"1px\",\n                        mb: 4,\n                        borderRadius: \"md\",\n                        position: \"relative\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Heading, {\n                                fontSize: \"xl\",\n                                children: note.title\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\lenovo\\\\magang-dibimbing\\\\frontend-next\\\\pages\\\\index.tsx\",\n                                lineNumber: 74,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Text, {\n                                mt: 4,\n                                children: note.body\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\lenovo\\\\magang-dibimbing\\\\frontend-next\\\\pages\\\\index.tsx\",\n                                lineNumber: 75,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Text, {\n                                mt: 4,\n                                color: \"gray.600\",\n                                children: formatDate(note.createdat)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\lenovo\\\\magang-dibimbing\\\\frontend-next\\\\pages\\\\index.tsx\",\n                                lineNumber: 76,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\lenovo\\\\magang-dibimbing\\\\frontend-next\\\\pages\\\\index.tsx\",\n                        lineNumber: 66,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.IconButton, {\n                        \"aria-label\": \"Delete note\",\n                        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_6__.DeleteIcon, {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\lenovo\\\\magang-dibimbing\\\\frontend-next\\\\pages\\\\index.tsx\",\n                            lineNumber: 82,\n                            columnNumber: 19\n                        }, void 0),\n                        position: \"absolute\",\n                        top: 2,\n                        right: 2,\n                        onClick: (e)=>{\n                            handleDelete(note.id, e);\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\lenovo\\\\magang-dibimbing\\\\frontend-next\\\\pages\\\\index.tsx\",\n                        lineNumber: 80,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, note.id, true, {\n                fileName: \"C:\\\\Users\\\\lenovo\\\\magang-dibimbing\\\\frontend-next\\\\pages\\\\index.tsx\",\n                lineNumber: 65,\n                columnNumber: 9\n            }, undefined))\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\lenovo\\\\magang-dibimbing\\\\frontend-next\\\\pages\\\\index.tsx\",\n        lineNumber: 63,\n        columnNumber: 5\n    }, undefined);\n};\n_s(NotesList, \"xKdRDFBlko2ur6xHHW1AlmbXe0A=\", false, function() {\n    return [\n        _apollo_client__WEBPACK_IMPORTED_MODULE_4__.useQuery,\n        _apollo_client__WEBPACK_IMPORTED_MODULE_4__.useMutation\n    ];\n});\n_c = NotesList;\nconst HomePage = ()=>{\n    _s1();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const [addNote] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_4__.useMutation)(_lib_queries__WEBPACK_IMPORTED_MODULE_2__.ADD_NOTE);\n    const handleAddNote = async ()=>{\n        try {\n            const { data } = await addNote({\n                variables: {\n                    title: \"\",\n                    body: \"\"\n                }\n            });\n            const newNoteId = data.addNote.id;\n            router.push(\"/note/\".concat(newNoteId));\n        } catch (error) {\n            console.error(\"Error creating a new note:\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Container, {\n        maxW: \"container.xl\",\n        p: 4,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n                display: \"flex\",\n                justifyContent: \"space-between\",\n                alignItems: \"center\",\n                mb: 6,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Heading, {\n                        fontSize: \"x-large\",\n                        children: \"Daftar Catatan\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\lenovo\\\\magang-dibimbing\\\\frontend-next\\\\pages\\\\index.tsx\",\n                        lineNumber: 123,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                        leftIcon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_6__.AddIcon, {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\lenovo\\\\magang-dibimbing\\\\frontend-next\\\\pages\\\\index.tsx\",\n                            lineNumber: 125,\n                            columnNumber: 21\n                        }, void 0),\n                        colorScheme: \"teal\",\n                        onClick: handleAddNote,\n                        children: \"Tambah Catatan\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\lenovo\\\\magang-dibimbing\\\\frontend-next\\\\pages\\\\index.tsx\",\n                        lineNumber: 124,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\lenovo\\\\magang-dibimbing\\\\frontend-next\\\\pages\\\\index.tsx\",\n                lineNumber: 117,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NotesList, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\lenovo\\\\magang-dibimbing\\\\frontend-next\\\\pages\\\\index.tsx\",\n                lineNumber: 132,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\lenovo\\\\magang-dibimbing\\\\frontend-next\\\\pages\\\\index.tsx\",\n        lineNumber: 116,\n        columnNumber: 5\n    }, undefined);\n};\n_s1(HomePage, \"gv76SZJFCXYDhTZ6xmm6A350ZCo=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter,\n        _apollo_client__WEBPACK_IMPORTED_MODULE_4__.useMutation\n    ];\n});\n_c1 = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c, _c1;\n$RefreshReg$(_c, \"NotesList\");\n$RefreshReg$(_c1, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFNQyxTQUFTekUsc0RBQVNBO0lBQ3hCLE1BQU0sQ0FBQzBFLFFBQVEsR0FBRzNFLDJEQUFXQSxDQUFDSSxrREFBUUE7SUFFdEMsTUFBTXdFLGdCQUFnQjtRQUNwQixJQUFJO1lBQ0YsTUFBTSxFQUFFOUMsSUFBSSxFQUFFLEdBQUcsTUFBTTZDLFFBQVE7Z0JBQzdCNUIsV0FBVztvQkFDVGdCLE9BQU87b0JBQ1BFLE1BQU07Z0JBQ1I7WUFDRjtZQUNBLE1BQU1ZLFlBQVkvQyxLQUFLNkMsT0FBTyxDQUFDM0IsRUFBRTtZQUNqQzBCLE9BQU9JLElBQUksQ0FBQyxTQUFtQixPQUFWRDtRQUN2QixFQUFFLE9BQU9oRCxPQUFPO1lBQ2RvQixRQUFRcEIsS0FBSyxDQUFDLDhCQUE4QkE7UUFDOUM7SUFDRjtJQUVBLHFCQUNFLDhEQUFDckIsdURBQVNBO1FBQUN1RSxNQUFLO1FBQWU3QixHQUFHOzswQkFDaEMsOERBQUM3QyxpREFBR0E7Z0JBQ0YyRSxTQUFRO2dCQUNSQyxnQkFBZTtnQkFDZkMsWUFBVztnQkFDWHZCLElBQUk7O2tDQUVKLDhEQUFDcEQscURBQU9BO3dCQUFDdUQsVUFBUztrQ0FBVTs7Ozs7O2tDQUM1Qiw4REFBQ3BELG9EQUFNQTt3QkFDTHlFLHdCQUFVLDhEQUFDdkUscURBQU9BOzs7Ozt3QkFDbEJ3RSxhQUFZO3dCQUNaWixTQUFTSTtrQ0FDVjs7Ozs7Ozs7Ozs7OzBCQUlILDhEQUFDakQ7Ozs7Ozs7Ozs7O0FBR1A7SUF2Q004Qzs7UUFDV3hFLGtEQUFTQTtRQUNORCx1REFBV0E7OztNQUZ6QnlFO0FBeUNOLCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVF1ZXJ5LCB1c2VNdXRhdGlvbiB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyBHRVRfTk9URVMsIERFTEVURV9OT1RFLCBBRERfTk9URSB9IGZyb20gXCIuLi9saWIvcXVlcmllc1wiO1xuaW1wb3J0IHtcbiAgQm94LFxuICBUZXh0LFxuICBIZWFkaW5nLFxuICBDb250YWluZXIsXG4gIEljb25CdXR0b24sXG4gIExpbmssXG4gIEJ1dHRvbixcbiAgSWNvbixcbn0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmltcG9ydCB7IERlbGV0ZUljb24sIEFkZEljb24gfSBmcm9tIFwiQGNoYWtyYS11aS9pY29uc1wiO1xuaW1wb3J0IE5leHRMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuY29uc3QgZm9ybWF0RGF0ZSA9ICh0aW1lc3RhbXA6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShwYXJzZUludCh0aW1lc3RhbXApKTtcbiAgY29uc3QgZGF5ID0gZGF0ZS5nZXREYXRlKCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCBcIjBcIik7XG4gIGNvbnN0IG1vbnRoID0gKGRhdGUuZ2V0TW9udGgoKSArIDEpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgXCIwXCIpO1xuICBjb25zdCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICByZXR1cm4gYCR7ZGF5fS0ke21vbnRofS0ke3llYXJ9YDtcbn07XG5cbnR5cGUgTm90ZSA9IHtcbiAgaWQ6IHN0cmluZztcbiAgdGl0bGU6IHN0cmluZztcbiAgYm9keTogc3RyaW5nO1xuICBjcmVhdGVkYXQ6IHN0cmluZztcbn07XG5cbmNvbnN0IE5vdGVzTGlzdDogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnN0IHsgbG9hZGluZywgZXJyb3IsIGRhdGEgfSA9IHVzZVF1ZXJ5KEdFVF9OT1RFUyk7XG4gIGNvbnN0IFtkZWxldGVOb3RlXSA9IHVzZU11dGF0aW9uKERFTEVURV9OT1RFLCB7XG4gICAgdXBkYXRlKGNhY2hlLCB7IGRhdGE6IHsgZGVsZXRlTm90ZSB9IH0pIHtcbiAgICAgIGNhY2hlLm1vZGlmeSh7XG4gICAgICAgIGZpZWxkczoge1xuICAgICAgICAgIG5vdGVzKGV4aXN0aW5nTm90ZXNSZWZzLCB7IHJlYWRGaWVsZCB9KSB7XG4gICAgICAgICAgICByZXR1cm4gZXhpc3RpbmdOb3Rlc1JlZnMuZmlsdGVyKFxuICAgICAgICAgICAgICAobm90ZVJlZjogYW55KSA9PiBkZWxldGVOb3RlICE9PSByZWFkRmllbGQoXCJpZFwiLCBub3RlUmVmKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfSxcbiAgfSk7XG5cbiAgY29uc3QgaGFuZGxlRGVsZXRlID0gYXN5bmMgKG5vdGVJZDogc3RyaW5nLCBlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBlLm5hdGl2ZUV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuXG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IGRlbGV0ZU5vdGUoeyB2YXJpYWJsZXM6IHsgaWQ6IG5vdGVJZCB9IH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZGVsZXRpbmcgbm90ZTpcIiwgZXJyb3IpO1xuICAgIH1cbiAgfTtcblxuICBpZiAobG9hZGluZykgcmV0dXJuIDxwPkxvYWRpbmcuLi48L3A+O1xuICBpZiAoZXJyb3IpIHJldHVybiA8cD5FcnJvcjoge2Vycm9yLm1lc3NhZ2V9PC9wPjtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICB7ZGF0YS5ub3Rlcy5tYXAoKG5vdGU6IE5vdGUpID0+IChcbiAgICAgICAgPE5leHRMaW5rIGtleT17bm90ZS5pZH0gaHJlZj17YC9ub3RlLyR7bm90ZS5pZH1gfSBwYXNzSHJlZj5cbiAgICAgICAgICA8Qm94XG4gICAgICAgICAgICBwPXs1fVxuICAgICAgICAgICAgc2hhZG93PVwibWRcIlxuICAgICAgICAgICAgYm9yZGVyV2lkdGg9XCIxcHhcIlxuICAgICAgICAgICAgbWI9ezR9XG4gICAgICAgICAgICBib3JkZXJSYWRpdXM9XCJtZFwiXG4gICAgICAgICAgICBwb3NpdGlvbj1cInJlbGF0aXZlXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8SGVhZGluZyBmb250U2l6ZT1cInhsXCI+e25vdGUudGl0bGV9PC9IZWFkaW5nPlxuICAgICAgICAgICAgPFRleHQgbXQ9ezR9Pntub3RlLmJvZHl9PC9UZXh0PlxuICAgICAgICAgICAgPFRleHQgbXQ9ezR9IGNvbG9yPVwiZ3JheS42MDBcIj5cbiAgICAgICAgICAgICAge2Zvcm1hdERhdGUobm90ZS5jcmVhdGVkYXQpfVxuICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICBhcmlhLWxhYmVsPVwiRGVsZXRlIG5vdGVcIlxuICAgICAgICAgICAgaWNvbj17PERlbGV0ZUljb24gLz59XG4gICAgICAgICAgICBwb3NpdGlvbj1cImFic29sdXRlXCJcbiAgICAgICAgICAgIHRvcD17Mn1cbiAgICAgICAgICAgIHJpZ2h0PXsyfVxuICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgaGFuZGxlRGVsZXRlKG5vdGUuaWQsIGUpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L05leHRMaW5rPlxuICAgICAgKSl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCBIb21lUGFnZTogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBbYWRkTm90ZV0gPSB1c2VNdXRhdGlvbihBRERfTk9URSk7XG5cbiAgY29uc3QgaGFuZGxlQWRkTm90ZSA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBhZGROb3RlKHtcbiAgICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgICAgdGl0bGU6IFwiXCIsXG4gICAgICAgICAgYm9keTogXCJcIixcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgICAgY29uc3QgbmV3Tm90ZUlkID0gZGF0YS5hZGROb3RlLmlkO1xuICAgICAgcm91dGVyLnB1c2goYC9ub3RlLyR7bmV3Tm90ZUlkfWApO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgY3JlYXRpbmcgYSBuZXcgbm90ZTpcIiwgZXJyb3IpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXIgbWF4Vz1cImNvbnRhaW5lci54bFwiIHA9ezR9PlxuICAgICAgPEJveFxuICAgICAgICBkaXNwbGF5PVwiZmxleFwiXG4gICAgICAgIGp1c3RpZnlDb250ZW50PVwic3BhY2UtYmV0d2VlblwiXG4gICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgICBtYj17Nn1cbiAgICAgID5cbiAgICAgICAgPEhlYWRpbmcgZm9udFNpemU9XCJ4LWxhcmdlXCI+RGFmdGFyIENhdGF0YW48L0hlYWRpbmc+XG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBsZWZ0SWNvbj17PEFkZEljb24gLz59XG4gICAgICAgICAgY29sb3JTY2hlbWU9XCJ0ZWFsXCJcbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVBZGROb3RlfVxuICAgICAgICA+XG4gICAgICAgICAgVGFtYmFoIENhdGF0YW5cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L0JveD5cbiAgICAgIDxOb3Rlc0xpc3QgLz5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlO1xuIl0sIm5hbWVzIjpbInVzZVF1ZXJ5IiwidXNlTXV0YXRpb24iLCJ1c2VSb3V0ZXIiLCJHRVRfTk9URVMiLCJERUxFVEVfTk9URSIsIkFERF9OT1RFIiwiQm94IiwiVGV4dCIsIkhlYWRpbmciLCJDb250YWluZXIiLCJJY29uQnV0dG9uIiwiQnV0dG9uIiwiRGVsZXRlSWNvbiIsIkFkZEljb24iLCJOZXh0TGluayIsImZvcm1hdERhdGUiLCJ0aW1lc3RhbXAiLCJkYXRlIiwiRGF0ZSIsInBhcnNlSW50IiwiZGF5IiwiZ2V0RGF0ZSIsInRvU3RyaW5nIiwicGFkU3RhcnQiLCJtb250aCIsImdldE1vbnRoIiwieWVhciIsImdldEZ1bGxZZWFyIiwiTm90ZXNMaXN0IiwibG9hZGluZyIsImVycm9yIiwiZGF0YSIsImRlbGV0ZU5vdGUiLCJ1cGRhdGUiLCJjYWNoZSIsIm1vZGlmeSIsImZpZWxkcyIsIm5vdGVzIiwiZXhpc3RpbmdOb3Rlc1JlZnMiLCJyZWFkRmllbGQiLCJmaWx0ZXIiLCJub3RlUmVmIiwiaGFuZGxlRGVsZXRlIiwibm90ZUlkIiwiZSIsInN0b3BQcm9wYWdhdGlvbiIsIm5hdGl2ZUV2ZW50Iiwic3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uIiwidmFyaWFibGVzIiwiaWQiLCJjb25zb2xlIiwicCIsIm1lc3NhZ2UiLCJkaXYiLCJtYXAiLCJub3RlIiwiaHJlZiIsInBhc3NIcmVmIiwic2hhZG93IiwiYm9yZGVyV2lkdGgiLCJtYiIsImJvcmRlclJhZGl1cyIsInBvc2l0aW9uIiwiZm9udFNpemUiLCJ0aXRsZSIsIm10IiwiYm9keSIsImNvbG9yIiwiY3JlYXRlZGF0IiwiYXJpYS1sYWJlbCIsImljb24iLCJ0b3AiLCJyaWdodCIsIm9uQ2xpY2siLCJIb21lUGFnZSIsInJvdXRlciIsImFkZE5vdGUiLCJoYW5kbGVBZGROb3RlIiwibmV3Tm90ZUlkIiwicHVzaCIsIm1heFciLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwibGVmdEljb24iLCJjb2xvclNjaGVtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});