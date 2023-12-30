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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_queries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/queries */ \"./lib/queries.ts\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/icons */ \"./node_modules/@chakra-ui/icons/dist/index.mjs\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\n\n\nconst formatDate = (timestamp)=>{\n    const date = new Date(parseInt(timestamp));\n    const day = date.getDate().toString().padStart(2, \"0\");\n    const month = (date.getMonth() + 1).toString().padStart(2, \"0\");\n    const year = date.getFullYear();\n    return \"\".concat(day, \"-\").concat(month, \"-\").concat(year);\n};\nconst NotesList = ()=>{\n    _s();\n    const { loading, error, data } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_4__.useQuery)(_lib_queries__WEBPACK_IMPORTED_MODULE_2__.GET_NOTES);\n    const [deleteNote] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_4__.useMutation)(_lib_queries__WEBPACK_IMPORTED_MODULE_2__.DELETE_NOTE, {\n        update (cache, param) {\n            let { data: { deleteNote } } = param;\n            cache.modify({\n                fields: {\n                    notes (existingNotesRefs, param) {\n                        let { readField } = param;\n                        return existingNotesRefs.filter((noteRef)=>deleteNote !== readField(\"id\", noteRef));\n                    }\n                }\n            });\n        }\n    });\n    const handleDelete = async (noteId, e)=>{\n        e.stopPropagation();\n        try {\n            await deleteNote({\n                variables: {\n                    id: noteId\n                }\n            });\n        } catch (error) {\n            console.error(\"Error deleting note:\", error);\n        }\n    };\n    if (loading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\lenovo\\\\magang-dibimbing\\\\frontend-next\\\\pages\\\\index.tsx\",\n        lineNumber: 58,\n        columnNumber: 23\n    }, undefined);\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: [\n            \"Error: \",\n            error.message\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\lenovo\\\\magang-dibimbing\\\\frontend-next\\\\pages\\\\index.tsx\",\n        lineNumber: 59,\n        columnNumber: 21\n    }, undefined);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: data.notes.map((note)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                href: \"/note/\".concat(note.id),\n                passHref: true,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Link, {\n                    style: {\n                        textDecoration: \"none\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n                        p: 5,\n                        shadow: \"md\",\n                        borderWidth: \"1px\",\n                        mb: 4,\n                        borderRadius: \"md\",\n                        position: \"relative\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Heading, {\n                                fontSize: \"xl\",\n                                children: note.title\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\lenovo\\\\magang-dibimbing\\\\frontend-next\\\\pages\\\\index.tsx\",\n                                lineNumber: 74,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Text, {\n                                mt: 4,\n                                children: note.body\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\lenovo\\\\magang-dibimbing\\\\frontend-next\\\\pages\\\\index.tsx\",\n                                lineNumber: 75,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Text, {\n                                mt: 4,\n                                color: \"gray.600\",\n                                children: formatDate(note.createdat)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\lenovo\\\\magang-dibimbing\\\\frontend-next\\\\pages\\\\index.tsx\",\n                                lineNumber: 76,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.IconButton, {\n                                \"aria-label\": \"Delete note\",\n                                icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_6__.DeleteIcon, {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\lenovo\\\\magang-dibimbing\\\\frontend-next\\\\pages\\\\index.tsx\",\n                                    lineNumber: 81,\n                                    columnNumber: 23\n                                }, void 0),\n                                position: \"absolute\",\n                                top: 2,\n                                right: 2,\n                                onClick: (e)=>{\n                                    handleDelete(note.id, e);\n                                }\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\lenovo\\\\magang-dibimbing\\\\frontend-next\\\\pages\\\\index.tsx\",\n                                lineNumber: 79,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\lenovo\\\\magang-dibimbing\\\\frontend-next\\\\pages\\\\index.tsx\",\n                        lineNumber: 66,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\lenovo\\\\magang-dibimbing\\\\frontend-next\\\\pages\\\\index.tsx\",\n                    lineNumber: 65,\n                    columnNumber: 11\n                }, undefined)\n            }, note.id, false, {\n                fileName: \"C:\\\\Users\\\\lenovo\\\\magang-dibimbing\\\\frontend-next\\\\pages\\\\index.tsx\",\n                lineNumber: 64,\n                columnNumber: 9\n            }, undefined))\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\lenovo\\\\magang-dibimbing\\\\frontend-next\\\\pages\\\\index.tsx\",\n        lineNumber: 62,\n        columnNumber: 5\n    }, undefined);\n};\n_s(NotesList, \"xKdRDFBlko2ur6xHHW1AlmbXe0A=\", false, function() {\n    return [\n        _apollo_client__WEBPACK_IMPORTED_MODULE_4__.useQuery,\n        _apollo_client__WEBPACK_IMPORTED_MODULE_4__.useMutation\n    ];\n});\n_c = NotesList;\nconst HomePage = ()=>{\n    _s1();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const [addNote] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_4__.useMutation)(_lib_queries__WEBPACK_IMPORTED_MODULE_2__.ADD_NOTE);\n    const handleAddNote = async ()=>{\n        try {\n            const { data } = await addNote({\n                variables: {\n                    title: \"\",\n                    body: \"\"\n                }\n            });\n            const newNoteId = data.addNote.id;\n            router.push(\"/note/\".concat(newNoteId));\n        } catch (error) {\n            console.error(\"Error creating a new note:\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Container, {\n        maxW: \"container.xl\",\n        p: 4,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n                display: \"flex\",\n                justifyContent: \"space-between\",\n                alignItems: \"center\",\n                mb: 6,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Heading, {\n                        fontSize: \"x-large\",\n                        children: \"Daftar Catatan\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\lenovo\\\\magang-dibimbing\\\\frontend-next\\\\pages\\\\index.tsx\",\n                        lineNumber: 124,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                        leftIcon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_6__.AddIcon, {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\lenovo\\\\magang-dibimbing\\\\frontend-next\\\\pages\\\\index.tsx\",\n                            lineNumber: 126,\n                            columnNumber: 21\n                        }, void 0),\n                        colorScheme: \"teal\",\n                        onClick: handleAddNote,\n                        children: \"Tambah Catatan\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\lenovo\\\\magang-dibimbing\\\\frontend-next\\\\pages\\\\index.tsx\",\n                        lineNumber: 125,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\lenovo\\\\magang-dibimbing\\\\frontend-next\\\\pages\\\\index.tsx\",\n                lineNumber: 118,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NotesList, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\lenovo\\\\magang-dibimbing\\\\frontend-next\\\\pages\\\\index.tsx\",\n                lineNumber: 133,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\lenovo\\\\magang-dibimbing\\\\frontend-next\\\\pages\\\\index.tsx\",\n        lineNumber: 117,\n        columnNumber: 5\n    }, undefined);\n};\n_s1(HomePage, \"gv76SZJFCXYDhTZ6xmm6A350ZCo=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter,\n        _apollo_client__WEBPACK_IMPORTED_MODULE_4__.useMutation\n    ];\n});\n_c1 = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c, _c1;\n$RefreshReg$(_c, \"NotesList\");\n$RefreshReg$(_c1, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWlFTixNQUFNOEMsV0FBcUI7O0lBQ3pCLE1BQU1DLFNBQVMxRSxzREFBU0E7SUFDeEIsTUFBTSxDQUFDMkUsUUFBUSxHQUFHNUUsMkRBQVdBLENBQUNJLGtEQUFRQTtJQUV0QyxNQUFNeUUsZ0JBQWdCO1FBQ3BCLElBQUk7WUFDRixNQUFNLEVBQUU5QyxJQUFJLEVBQUUsR0FBRyxNQUFNNkMsUUFBUTtnQkFDN0I5QixXQUFXO29CQUNUa0IsT0FBTztvQkFDUEUsTUFBTTtnQkFDUjtZQUNGO1lBQ0EsTUFBTVksWUFBWS9DLEtBQUs2QyxPQUFPLENBQUM3QixFQUFFO1lBQ2pDNEIsT0FBT0ksSUFBSSxDQUFDLFNBQW1CLE9BQVZEO1FBQ3ZCLEVBQUUsT0FBT2hELE9BQU87WUFDZGtCLFFBQVFsQixLQUFLLENBQUMsOEJBQThCQTtRQUM5QztJQUNGO0lBRUEscUJBQ0UsOERBQUN0Qix1REFBU0E7UUFBQ3dFLE1BQUs7UUFBZS9CLEdBQUc7OzBCQUNoQyw4REFBQzVDLGlEQUFHQTtnQkFDRjRFLFNBQVE7Z0JBQ1JDLGdCQUFlO2dCQUNmQyxZQUFXO2dCQUNYdkIsSUFBSTs7a0NBRUosOERBQUNyRCxxREFBT0E7d0JBQUN3RCxVQUFTO2tDQUFVOzs7Ozs7a0NBQzVCLDhEQUFDcEQsb0RBQU1BO3dCQUNMeUUsd0JBQVUsOERBQUN2RSxxREFBT0E7Ozs7O3dCQUNsQndFLGFBQVk7d0JBQ1paLFNBQVNJO2tDQUNWOzs7Ozs7Ozs7Ozs7MEJBSUgsOERBQUNqRDs7Ozs7Ozs7Ozs7QUFHUDtJQXZDTThDOztRQUNXekUsa0RBQVNBO1FBQ05ELHVEQUFXQTs7O01BRnpCMEU7QUF5Q04sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUXVlcnksIHVzZU11dGF0aW9uIH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IEdFVF9OT1RFUywgREVMRVRFX05PVEUsIEFERF9OT1RFIH0gZnJvbSBcIi4uL2xpYi9xdWVyaWVzXCI7XG5pbXBvcnQge1xuICBCb3gsXG4gIFRleHQsXG4gIEhlYWRpbmcsXG4gIENvbnRhaW5lcixcbiAgSWNvbkJ1dHRvbixcbiAgTGluayxcbiAgQnV0dG9uLFxuICBJY29uLFxufSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IHsgRGVsZXRlSWNvbiwgQWRkSWNvbiB9IGZyb20gXCJAY2hha3JhLXVpL2ljb25zXCI7XG5pbXBvcnQgTmV4dExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5jb25zdCBmb3JtYXREYXRlID0gKHRpbWVzdGFtcDogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHBhcnNlSW50KHRpbWVzdGFtcCkpO1xuICBjb25zdCBkYXkgPSBkYXRlLmdldERhdGUoKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsIFwiMFwiKTtcbiAgY29uc3QgbW9udGggPSAoZGF0ZS5nZXRNb250aCgpICsgMSkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCBcIjBcIik7XG4gIGNvbnN0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gIHJldHVybiBgJHtkYXl9LSR7bW9udGh9LSR7eWVhcn1gO1xufTtcblxudHlwZSBOb3RlID0ge1xuICBpZDogc3RyaW5nO1xuICB0aXRsZTogc3RyaW5nO1xuICBib2R5OiBzdHJpbmc7XG4gIGNyZWF0ZWRhdDogc3RyaW5nO1xufTtcblxuY29uc3QgTm90ZXNMaXN0OiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgY29uc3QgeyBsb2FkaW5nLCBlcnJvciwgZGF0YSB9ID0gdXNlUXVlcnkoR0VUX05PVEVTKTtcbiAgY29uc3QgW2RlbGV0ZU5vdGVdID0gdXNlTXV0YXRpb24oREVMRVRFX05PVEUsIHtcbiAgICB1cGRhdGUoY2FjaGUsIHsgZGF0YTogeyBkZWxldGVOb3RlIH0gfSkge1xuICAgICAgY2FjaGUubW9kaWZ5KHtcbiAgICAgICAgZmllbGRzOiB7XG4gICAgICAgICAgbm90ZXMoZXhpc3RpbmdOb3Rlc1JlZnMsIHsgcmVhZEZpZWxkIH0pIHtcbiAgICAgICAgICAgIHJldHVybiBleGlzdGluZ05vdGVzUmVmcy5maWx0ZXIoXG4gICAgICAgICAgICAgIChub3RlUmVmOiBhbnkpID0+IGRlbGV0ZU5vdGUgIT09IHJlYWRGaWVsZChcImlkXCIsIG5vdGVSZWYpXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9LFxuICB9KTtcblxuICBjb25zdCBoYW5kbGVEZWxldGUgPSBhc3luYyAobm90ZUlkOiBzdHJpbmcsIGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IGRlbGV0ZU5vdGUoeyB2YXJpYWJsZXM6IHsgaWQ6IG5vdGVJZCB9IH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZGVsZXRpbmcgbm90ZTpcIiwgZXJyb3IpO1xuICAgIH1cbiAgfTtcblxuICBpZiAobG9hZGluZykgcmV0dXJuIDxwPkxvYWRpbmcuLi48L3A+O1xuICBpZiAoZXJyb3IpIHJldHVybiA8cD5FcnJvcjoge2Vycm9yLm1lc3NhZ2V9PC9wPjtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICB7ZGF0YS5ub3Rlcy5tYXAoKG5vdGU6IE5vdGUpID0+IChcbiAgICAgICAgPE5leHRMaW5rIGtleT17bm90ZS5pZH0gaHJlZj17YC9ub3RlLyR7bm90ZS5pZH1gfSBwYXNzSHJlZj5cbiAgICAgICAgICA8TGluayBzdHlsZT17eyB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIgfX0+XG4gICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgIHA9ezV9XG4gICAgICAgICAgICAgIHNoYWRvdz1cIm1kXCJcbiAgICAgICAgICAgICAgYm9yZGVyV2lkdGg9XCIxcHhcIlxuICAgICAgICAgICAgICBtYj17NH1cbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzPVwibWRcIlxuICAgICAgICAgICAgICBwb3NpdGlvbj1cInJlbGF0aXZlXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEhlYWRpbmcgZm9udFNpemU9XCJ4bFwiPntub3RlLnRpdGxlfTwvSGVhZGluZz5cbiAgICAgICAgICAgICAgPFRleHQgbXQ9ezR9Pntub3RlLmJvZHl9PC9UZXh0PlxuICAgICAgICAgICAgICA8VGV4dCBtdD17NH0gY29sb3I9XCJncmF5LjYwMFwiPlxuICAgICAgICAgICAgICAgIHtmb3JtYXREYXRlKG5vdGUuY3JlYXRlZGF0KX1cbiAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJEZWxldGUgbm90ZVwiXG4gICAgICAgICAgICAgICAgaWNvbj17PERlbGV0ZUljb24gLz59XG4gICAgICAgICAgICAgICAgcG9zaXRpb249XCJhYnNvbHV0ZVwiXG4gICAgICAgICAgICAgICAgdG9wPXsyfVxuICAgICAgICAgICAgICAgIHJpZ2h0PXsyfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICBoYW5kbGVEZWxldGUobm90ZS5pZCwgZSk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9OZXh0TGluaz5cbiAgICAgICkpfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgSG9tZVBhZ2U6IFJlYWN0LkZDID0gKCkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgW2FkZE5vdGVdID0gdXNlTXV0YXRpb24oQUREX05PVEUpO1xuXG4gIGNvbnN0IGhhbmRsZUFkZE5vdGUgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYWRkTm90ZSh7XG4gICAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICAgIHRpdGxlOiBcIlwiLFxuICAgICAgICAgIGJvZHk6IFwiXCIsXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICAgIGNvbnN0IG5ld05vdGVJZCA9IGRhdGEuYWRkTm90ZS5pZDtcbiAgICAgIHJvdXRlci5wdXNoKGAvbm90ZS8ke25ld05vdGVJZH1gKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGNyZWF0aW5nIGEgbmV3IG5vdGU6XCIsIGVycm9yKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyIG1heFc9XCJjb250YWluZXIueGxcIiBwPXs0fT5cbiAgICAgIDxCb3hcbiAgICAgICAgZGlzcGxheT1cImZsZXhcIlxuICAgICAgICBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWJldHdlZW5cIlxuICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgICAgbWI9ezZ9XG4gICAgICA+XG4gICAgICAgIDxIZWFkaW5nIGZvbnRTaXplPVwieC1sYXJnZVwiPkRhZnRhciBDYXRhdGFuPC9IZWFkaW5nPlxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgbGVmdEljb249ezxBZGRJY29uIC8+fVxuICAgICAgICAgIGNvbG9yU2NoZW1lPVwidGVhbFwiXG4gICAgICAgICAgb25DbGljaz17aGFuZGxlQWRkTm90ZX1cbiAgICAgICAgPlxuICAgICAgICAgIFRhbWJhaCBDYXRhdGFuXG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9Cb3g+XG4gICAgICA8Tm90ZXNMaXN0IC8+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTtcbiJdLCJuYW1lcyI6WyJ1c2VRdWVyeSIsInVzZU11dGF0aW9uIiwidXNlUm91dGVyIiwiR0VUX05PVEVTIiwiREVMRVRFX05PVEUiLCJBRERfTk9URSIsIkJveCIsIlRleHQiLCJIZWFkaW5nIiwiQ29udGFpbmVyIiwiSWNvbkJ1dHRvbiIsIkxpbmsiLCJCdXR0b24iLCJEZWxldGVJY29uIiwiQWRkSWNvbiIsIk5leHRMaW5rIiwiZm9ybWF0RGF0ZSIsInRpbWVzdGFtcCIsImRhdGUiLCJEYXRlIiwicGFyc2VJbnQiLCJkYXkiLCJnZXREYXRlIiwidG9TdHJpbmciLCJwYWRTdGFydCIsIm1vbnRoIiwiZ2V0TW9udGgiLCJ5ZWFyIiwiZ2V0RnVsbFllYXIiLCJOb3Rlc0xpc3QiLCJsb2FkaW5nIiwiZXJyb3IiLCJkYXRhIiwiZGVsZXRlTm90ZSIsInVwZGF0ZSIsImNhY2hlIiwibW9kaWZ5IiwiZmllbGRzIiwibm90ZXMiLCJleGlzdGluZ05vdGVzUmVmcyIsInJlYWRGaWVsZCIsImZpbHRlciIsIm5vdGVSZWYiLCJoYW5kbGVEZWxldGUiLCJub3RlSWQiLCJlIiwic3RvcFByb3BhZ2F0aW9uIiwidmFyaWFibGVzIiwiaWQiLCJjb25zb2xlIiwicCIsIm1lc3NhZ2UiLCJkaXYiLCJtYXAiLCJub3RlIiwiaHJlZiIsInBhc3NIcmVmIiwic3R5bGUiLCJ0ZXh0RGVjb3JhdGlvbiIsInNoYWRvdyIsImJvcmRlcldpZHRoIiwibWIiLCJib3JkZXJSYWRpdXMiLCJwb3NpdGlvbiIsImZvbnRTaXplIiwidGl0bGUiLCJtdCIsImJvZHkiLCJjb2xvciIsImNyZWF0ZWRhdCIsImFyaWEtbGFiZWwiLCJpY29uIiwidG9wIiwicmlnaHQiLCJvbkNsaWNrIiwiSG9tZVBhZ2UiLCJyb3V0ZXIiLCJhZGROb3RlIiwiaGFuZGxlQWRkTm90ZSIsIm5ld05vdGVJZCIsInB1c2giLCJtYXhXIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImxlZnRJY29uIiwiY29sb3JTY2hlbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});