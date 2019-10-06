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
import { all, fork, call, takeLatest, takeEvery, put, take, delay } from 'redux-saga/effects';

//서버로 갔다 와야하는 비동기처리 Action들은 SAGA에서 모두 처리 해준다
import { 
  LOG_IN_REQUEST, 
  LOG_IN_SUCCESS,
  LOG_IN_FAILURE,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE } from '../reducers/user';
  
import axios from 'axios';

//서버에 요청 보내는 부분
function loginAPI() {
  return axios.post('/login')
}

function* logIn(action) {
  try {
    // yield call(loginAPI);
    console.log(1122221)
    yield delay(2000)
    yield put({
      type: LOG_IN_SUCCESS,
    })
  } catch(e) {
    console.log(e)
    yield put({
      type: LOG_IN_FAILURE,
    })
  }
}

function* watchLogIn() {
  yield takeEvery(LOG_IN_REQUEST, logIn);
};

function signUpAPI() {
  //서버에 요청을 보내는 부분
  return axios.post('/signup')
}

function* signUp() {
  try {
    // yield call(signUpAPI)
    yield delay(2000);
    yield put({
      type: SIGN_UP_SUCCESS
    })
  } catch(e) {
    yield put({
      type: SIGN_UP_FAILURE,
      error: e
    })
  }
}

function* watchSignUp() {
  yield takeEvery( SIGN_UP_REQUEST, signUp )
}

export default function* userSaga() {
  yield all([
    fork(watchLogIn),
    fork(watchSignUp),
  ])
}

