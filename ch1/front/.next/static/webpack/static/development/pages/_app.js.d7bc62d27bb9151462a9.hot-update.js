webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/AppLayout.js":
/*!*********************************!*\
  !*** ./components/AppLayout.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/minsu/\uBC14\uD0D5\uD654\uBA74/sns/ch1/front/components/AppLayout.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var dummy = {
  nickname: "윤민수",
  Post: [],
  Followings: ['민수', '민아', '아빠'],
  Followers: []
};

var AppLayout = function AppLayout(_ref) {
  var children = _ref.children;
  // const onChangeId = () => {}
  // const onChangePassword = () => {}
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"], {
    mode: "horizontal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "home",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "\uB178\uB4DC\uBC84\uB4DC"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "profile",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/profile",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "\uD504\uB85C\uD544"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "mail",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"].Search, {
    enterButton: true,
    style: {
      verticalAlign: 'middle'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "signup",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/signup",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "\uD68C\uC6D0\uAC00\uC785"))))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 24,
    md: 8,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, dummy.isLoggedIn ? __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    actions: [__jsx("div", {
      key: "twit",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, "\uC9F9\uC9F9", __jsx("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }), dummy.Post.length), __jsx("div", {
      key: "following",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, "\uD314\uB85C\uC789", __jsx("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }), dummy.Followings.length), __jsx("div", {
      key: "follower",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, "\uD314\uB85C\uC6CC", __jsx("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }), dummy.Followers.length)],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
    avatar: __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, dummy.nickname[0]),
    title: dummy.nickname,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  })) : __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, __jsx("label", {
    htmlFor: "user-id",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "\uC544\uC774\uB514"), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    name: "user-id",
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  })), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, __jsx("label", {
    htmlFor: "user-password",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, "\uBE44\uBC00\uBC88\uD638"), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    name: "user-password",
    type: "password",
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  })), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    type: "primary",
    htmlType: "submit",
    loading: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, "\uB85C\uADF8\uC778"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/signup",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, "\uD68C\uC6D0\uAC00\uC785")))))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 24,
    md: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, children), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 24,
    md: 8,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, "3\uBC88\uC9F8")));
};

/* harmony default export */ __webpack_exports__["default"] = (AppLayout);

/***/ })

})
//# sourceMappingURL=_app.js.d7bc62d27bb9151462a9.hot-update.js.map