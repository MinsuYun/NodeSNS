webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/AppLayout */ "./components/AppLayout.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers */ "./reducers/index.js");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next-redux-wrapper */ "./node_modules/next-redux-wrapper/es6/index.js");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! redux-saga */ "./node_modules/redux-saga/dist/redux-saga-core-npm-proxy.esm.js");
/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../sagas */ "./sagas/index.js");
var _jsxFileName = "/home/minsu/\uBC14\uD0D5\uD654\uBA74/sns/ch1/front/pages/_app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


 //redux 연결하기








var NodeBird = function NodeBird(_ref) {
  var Component = _ref.Component,
      store = _ref.store;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(react_redux__WEBPACK_IMPORTED_MODULE_4__["Provider"], {
    store: store,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "NodeBird"), __jsx("link", {
    rel: "stylesheet",
    href: "https://cdnjs.cloudflare.com/ajax/libs/antd/3.23.3/antd.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), __jsx("script", {
    src: "https://cdnjs.cloudflare.com/ajax/libs/antd/3.23.3/antd.js",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  })), __jsx(_components_AppLayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx(Component, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }))));
}; //그냥 외우는 부분이다. redux 에서 조금 더 강화된 기능들을 쓰고 싶다면 이 작업을 시행히야 한다. 리덕스 dev tools , Redux Saga 등을 사용하기 위해서는 이렇게 Redux 기본 기능에 여러 기능들을 합성시켜줘야한다.
//그리고 해당 부분에서 stroe를 생성해줘야 const store = createStore( reducer, initialState, enhancer )을 생성하여 return 까지 해줘야 전체 페이지에서 Store에 접근할 수 있게 된다.


/* harmony default export */ __webpack_exports__["default"] = (Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_6__["default"])(function (initialState, options) {
  var middlewares = [sagaMiddleware];
  var enhancer =  false ? undefined : Object(redux__WEBPACK_IMPORTED_MODULE_3__["compose"])(redux__WEBPACK_IMPORTED_MODULE_3__["applyMiddleware"].apply(void 0, middlewares)); //store를 여기서 맨들어야함

  var store = Object(redux__WEBPACK_IMPORTED_MODULE_3__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_5__["default"], initialState, enhancer);
  sagaMiddleware.run(_sagas__WEBPACK_IMPORTED_MODULE_8__["default"]);
  return store;
})(NodeBird));

/***/ })

})
//# sourceMappingURL=_app.js.8a3a17e0c1a905b1be30.hot-update.js.map