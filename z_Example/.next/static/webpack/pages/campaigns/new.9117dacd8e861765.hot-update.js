"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/campaigns/new",{

/***/ "./pages/campaigns/new.js":
/*!********************************!*\
  !*** ./pages/campaigns/new.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_assert_this_initialized_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/src/_assert_this_initialized.mjs */ \"./node_modules/@swc/helpers/src/_assert_this_initialized.mjs\");\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_class_call_check_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_class_call_check.mjs */ \"./node_modules/@swc/helpers/src/_class_call_check.mjs\");\n/* harmony import */ var _swc_helpers_src_create_class_mjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @swc/helpers/src/_create_class.mjs */ \"./node_modules/@swc/helpers/src/_create_class.mjs\");\n/* harmony import */ var _swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @swc/helpers/src/_define_property.mjs */ \"./node_modules/@swc/helpers/src/_define_property.mjs\");\n/* harmony import */ var _swc_helpers_src_inherits_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_inherits.mjs */ \"./node_modules/@swc/helpers/src/_inherits.mjs\");\n/* harmony import */ var _swc_helpers_src_create_super_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_create_super.mjs */ \"./node_modules/@swc/helpers/src/_create_super.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ethereum/web3 */ \"./ethereum/web3.js\");\n/* harmony import */ var _ethereum_factory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ethereum/factory */ \"./ethereum/factory.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../routes */ \"./routes.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar CampaignNew = /*#__PURE__*/ function(Component) {\n    \"use strict\";\n    (0,_swc_helpers_src_inherits_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(CampaignNew, Component);\n    var _super = (0,_swc_helpers_src_create_super_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(CampaignNew);\n    function CampaignNew() {\n        (0,_swc_helpers_src_class_call_check_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(this, CampaignNew);\n        var _this;\n        _this = _super.apply(this, arguments);\n        var _this1 = (0,_swc_helpers_src_assert_this_initialized_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(_this);\n        (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"])((0,_swc_helpers_src_assert_this_initialized_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(_this), \"onSubmit\", function() {\n            var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_11__[\"default\"])(function(event) {\n                var accounts, err;\n                return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_12__[\"default\"])(this, function(_state) {\n                    switch(_state.label){\n                        case 0:\n                            event.preventDefault();\n                            _this1.setState({\n                                loading: true,\n                                errorMessage: \"\"\n                            });\n                            _state.label = 1;\n                        case 1:\n                            _state.trys.push([\n                                1,\n                                4,\n                                ,\n                                5\n                            ]);\n                            return [\n                                4,\n                                _ethereum_web3__WEBPACK_IMPORTED_MODULE_3__[\"default\"].eth.getAccounts()\n                            ];\n                        case 2:\n                            accounts = _state.sent();\n                            return [\n                                4,\n                                _ethereum_factory__WEBPACK_IMPORTED_MODULE_4__[\"default\"].methods.createCampaign(_this1.state.minimumContribution).send({\n                                    from: accounts[0]\n                                })\n                            ];\n                        case 3:\n                            _state.sent();\n                            _routes__WEBPACK_IMPORTED_MODULE_5__.Router.pushRoute;\n                            return [\n                                3,\n                                5\n                            ];\n                        case 4:\n                            err = _state.sent();\n                            _this1.setState({\n                                errorMessage: err.message\n                            });\n                            return [\n                                3,\n                                5\n                            ];\n                        case 5:\n                            _this1.setState({\n                                loading: false\n                            });\n                            return [\n                                2\n                            ];\n                    }\n                });\n            });\n            return function(event) {\n                return _ref.apply(this, arguments);\n            };\n        }());\n        return _this;\n    }\n    (0,_swc_helpers_src_create_class_mjs__WEBPACK_IMPORTED_MODULE_13__[\"default\"])(CampaignNew, [\n        {\n            key: \"state\",\n            value: function state() {\n                minimumContribution: \"\";\n                errorMessage: \"\";\n                loading: false;\n            }\n        },\n        {\n            key: \"render\",\n            value: function render() {\n                var _this = this;\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            children: \" Create a new Campaign\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ADMIN\\\\Ethereum_and_Solidity_The_Complete_Developer's_Guide\\\\kickstart\\\\pages\\\\campaigns\\\\new.js\",\n                            lineNumber: 36,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__.Form, {\n                            onSubmit: this.onSubmit,\n                            error: this.state.errorMessage,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__.Form.Field, {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                            children: \"Minimum Contribution\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\ADMIN\\\\Ethereum_and_Solidity_The_Complete_Developer's_Guide\\\\kickstart\\\\pages\\\\campaigns\\\\new.js\",\n                                            lineNumber: 39,\n                                            columnNumber: 13\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__.Input, {\n                                            label: \"wei\",\n                                            labelPosition: \"right\",\n                                            value: this.state.minimumContribution,\n                                            onChange: function(event) {\n                                                _this.setState({\n                                                    minimumContribution: event.target.value\n                                                });\n                                            }\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\ADMIN\\\\Ethereum_and_Solidity_The_Complete_Developer's_Guide\\\\kickstart\\\\pages\\\\campaigns\\\\new.js\",\n                                            lineNumber: 40,\n                                            columnNumber: 13\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\ADMIN\\\\Ethereum_and_Solidity_The_Complete_Developer's_Guide\\\\kickstart\\\\pages\\\\campaigns\\\\new.js\",\n                                    lineNumber: 38,\n                                    columnNumber: 11\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__.Message, {\n                                    error: true,\n                                    header: \"Error\",\n                                    content: this.state.errorMessage\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ADMIN\\\\Ethereum_and_Solidity_The_Complete_Developer's_Guide\\\\kickstart\\\\pages\\\\campaigns\\\\new.js\",\n                                    lineNumber: 51,\n                                    columnNumber: 11\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__.Button, {\n                                    primary: true,\n                                    loading: this.state.loading,\n                                    children: \"Create\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ADMIN\\\\Ethereum_and_Solidity_The_Complete_Developer's_Guide\\\\kickstart\\\\pages\\\\campaigns\\\\new.js\",\n                                    lineNumber: 56,\n                                    columnNumber: 11\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\ADMIN\\\\Ethereum_and_Solidity_The_Complete_Developer's_Guide\\\\kickstart\\\\pages\\\\campaigns\\\\new.js\",\n                            lineNumber: 37,\n                            columnNumber: 9\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\ADMIN\\\\Ethereum_and_Solidity_The_Complete_Developer's_Guide\\\\kickstart\\\\pages\\\\campaigns\\\\new.js\",\n                    lineNumber: 35,\n                    columnNumber: 7\n                }, this);\n            }\n        }\n    ]);\n    return CampaignNew;\n}(react__WEBPACK_IMPORTED_MODULE_1__.Component);\n/* harmony default export */ __webpack_exports__[\"default\"] = (CampaignNew);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixDQXZEeUJULDRDQUFTLENBdURsQztBQUVELCtEQUFlUyxXQUFXLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FtcGFpZ25zL25ldy5qcz9iZDVkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcclxuaW1wb3J0IHsgRm9ybSwgQnV0dG9uLCBJbnB1dCwgTWVzc2FnZSB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5pbXBvcnQgd2ViMyBmcm9tIFwiLi4vLi4vZXRoZXJldW0vd2ViM1wiO1xyXG5pbXBvcnQgZmFjdG9yeSBmcm9tIFwiLi4vLi4vZXRoZXJldW0vZmFjdG9yeVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiLi4vLi4vcm91dGVzXCI7XHJcblxyXG5jbGFzcyBDYW1wYWlnbk5ldyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgc3RhdGUoKSB7XHJcbiAgICBtaW5pbXVtQ29udHJpYnV0aW9uOiBcIlwiO1xyXG4gICAgZXJyb3JNZXNzYWdlOiBcIlwiO1xyXG4gICAgbG9hZGluZzogZmFsc2U7XHJcbiAgfVxyXG5cclxuICBvblN1Ym1pdCA9IGFzeW5jIChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogdHJ1ZSwgZXJyb3JNZXNzYWdlOiBcIlwiIH0pO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcclxuICAgICAgYXdhaXQgZmFjdG9yeS5tZXRob2RzXHJcbiAgICAgICAgLmNyZWF0ZUNhbXBhaWduKHRoaXMuc3RhdGUubWluaW11bUNvbnRyaWJ1dGlvbilcclxuICAgICAgICAuc2VuZCh7IGZyb206IGFjY291bnRzWzBdIH0pO1xyXG4gICAgICBSb3V0ZXIucHVzaFJvdXRlO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvck1lc3NhZ2U6IGVyci5tZXNzYWdlIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSB9KTtcclxuICB9O1xyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8TGF5b3V0PlxyXG4gICAgICAgIDxoMz4gQ3JlYXRlIGEgbmV3IENhbXBhaWduPC9oMz5cclxuICAgICAgICA8Rm9ybSBvblN1Ym1pdD17dGhpcy5vblN1Ym1pdH0gZXJyb3I9e3RoaXMuc3RhdGUuZXJyb3JNZXNzYWdlfT5cclxuICAgICAgICAgIDxGb3JtLkZpZWxkPlxyXG4gICAgICAgICAgICA8bGFiZWw+TWluaW11bSBDb250cmlidXRpb248L2xhYmVsPlxyXG4gICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICBsYWJlbD1cIndlaVwiXHJcbiAgICAgICAgICAgICAgbGFiZWxQb3NpdGlvbj1cInJpZ2h0XCJcclxuICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5taW5pbXVtQ29udHJpYnV0aW9ufVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICBtaW5pbXVtQ29udHJpYnV0aW9uOiBldmVudC50YXJnZXQudmFsdWUsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+PC9JbnB1dD5cclxuICAgICAgICAgIDwvRm9ybS5GaWVsZD5cclxuICAgICAgICAgIDxNZXNzYWdlXHJcbiAgICAgICAgICAgIGVycm9yXHJcbiAgICAgICAgICAgIGhlYWRlcj1cIkVycm9yXCJcclxuICAgICAgICAgICAgY29udGVudD17dGhpcy5zdGF0ZS5lcnJvck1lc3NhZ2V9XHJcbiAgICAgICAgICA+PC9NZXNzYWdlPlxyXG4gICAgICAgICAgPEJ1dHRvbiBwcmltYXJ5IGxvYWRpbmc9e3RoaXMuc3RhdGUubG9hZGluZ30+XHJcbiAgICAgICAgICAgIENyZWF0ZVxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9Gb3JtPlxyXG4gICAgICA8L0xheW91dD5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYW1wYWlnbk5ldztcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiTGF5b3V0IiwiRm9ybSIsIkJ1dHRvbiIsIklucHV0IiwiTWVzc2FnZSIsIndlYjMiLCJmYWN0b3J5IiwiUm91dGVyIiwiQ2FtcGFpZ25OZXciLCJvblN1Ym1pdCIsImV2ZW50IiwiYWNjb3VudHMiLCJlcnIiLCJwcmV2ZW50RGVmYXVsdCIsInNldFN0YXRlIiwibG9hZGluZyIsImVycm9yTWVzc2FnZSIsImV0aCIsImdldEFjY291bnRzIiwibWV0aG9kcyIsImNyZWF0ZUNhbXBhaWduIiwic3RhdGUiLCJtaW5pbXVtQ29udHJpYnV0aW9uIiwic2VuZCIsImZyb20iLCJwdXNoUm91dGUiLCJtZXNzYWdlIiwicmVuZGVyIiwiaDMiLCJlcnJvciIsIkZpZWxkIiwibGFiZWwiLCJsYWJlbFBvc2l0aW9uIiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsImhlYWRlciIsImNvbnRlbnQiLCJwcmltYXJ5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/campaigns/new.js\n"));

/***/ })

});