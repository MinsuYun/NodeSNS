webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./sagas/user.js":
/*!***********************!*\
  !*** ./sagas/user.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return userSaga; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");


var _marked =
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(login),
    _marked2 =
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLogin),
    _marked3 =
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(userSaga);


 //put은 dispatch = action을 받아서 실행하는 놈
//take는 action을 받는 놈
//takeEvery 는 모든 action을 다 받고 실행
//takeLatest는 이전 요청이 끝나지 않은게 있다면 이전 요청을 취소함
//--> 보통 로그인 버튼 여러번 클릭하면 서버에 계속 전송 되는 걸 막을 때 사용 됨
//takeEvery VS takeLatest
//--> takeEvery의 경우 모든 이벤트를 모두 유효처리 할 때, takeLatest는 앞선 이벤트들은 모두 실수라 보고 마지막 이벤트만 유효처리할 때
//call과 fork 모두 함수 실행 메서드
//call은 동기호출(보통 서버와 통신할 때 주로 쓰임)
//fork는 비동기호출

var HELLO_SAGA = 'HELLO_SAGA'; //서버에 요청 보내는 부분

function loginAPI() {}

function login() {
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function login$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["delay"])(2000);

        case 3:
          _context.next = 5;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_SUCCESS"]
          });

        case 5:
          _context.next = 12;
          break;

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          console.error(_context.t0);
          _context.next = 12;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_FAILURE"]
          });

        case 12:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[0, 7]]);
}

function watchLogin() {
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLogin$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["take"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN"]);

        case 2:
          _context2.next = 4;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_SUCCESS"]
          });

        case 4:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2);
}

;
function userSaga() {
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function userSaga$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])(watchLogin(), watchSignUp());

        case 2:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3);
}

/***/ })

})
//# sourceMappingURL=_app.js.035a32f919e9be6ca43c.hot-update.js.map