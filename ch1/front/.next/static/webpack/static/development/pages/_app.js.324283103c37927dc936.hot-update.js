webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, Add_Post, Add_Dummy, addPostAction, addDummyAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Add_Post", function() { return Add_Post; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Add_Dummy", function() { return Add_Dummy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPostAction", function() { return addPostAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addDummyAction", function() { return addDummyAction; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");


var initialState = {
  mainPosts: [{
    User: {
      id: 1,
      nickname: '윤민수'
    },
    content: '첫 번째 게시글',
    img: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=http%3A%2F%2Fcfile23.uf.tistory.com%2Fimage%2F2657B9505809B4B634FF66'
  }],
  imagePaths: []
};
var Add_Post = "Add_Post";
var Add_Dummy = "Add_Dummy";
var addPostAction = {
  type: Add_Post
};
var addDummyAction = {
  type: Add_Dummy,
  data: {
    content: 'Hello',
    UserId: 1,
    User: {
      nickname: '윤종환'
    }
  }
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case Add_Post:
      {
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, {
          mainPost: Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.mainPost)
        });
      }

    case Add_Dummy:
      {
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, {
          mainPost: Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.mainPost)
        });
      }
      ;

    default:
      {
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state);
      }
  }

  ;
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ })

})
//# sourceMappingURL=_app.js.324283103c37927dc936.hot-update.js.map