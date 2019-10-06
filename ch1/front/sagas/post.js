import { all, delay, fork, call, takeEvery, takeLatest, put } from 'redux-saga/effects';
//무엇을 Import 해와야 하는지 생각할 것
import {
  ADD_POST_REQUEST,
  ADD_POST_SUCCESS,
  ADD_POST_FAILURE,
  ADD_COMMENT_REQUEST,
  ADD_COMMENT_SUCCESS,
  ADD_COMMENT_FAILURE
} from '../reducers/post';

function addPostAPI() {

}

function* addPost() {
  try {
    // yield call(addPostAPI);
    yield delay(2000);
    yield put({
      type: ADD_POST_SUCCESS
    })
  } catch(e) {
    console.log(e);
    yield put({
      type: ADD_POST_FAILURE,
      error: e
    })
  }
}

function* watchAddPost() {
  yield takeLatest(ADD_POST_REQUEST, addPost)
}

function addCommentAPI () {

}

function* addComment(action) {
  try {
    yield call(addCommentAPI)
    yield dalay(2000);
    yield put({
      type: ADD_COMMENT_SUCCESS,
      data: {
        postId: action.data.postId
      }
    })
  } catch(e) {
    yield put({
      type: ADD_COMMENT_FAILURE,
      error: e
    })
  }
}

function* watchAddComment() {
  yield takeEvery(ADD_COMMENT_REQUEST, addComment)
}

export default function* postSaga() {
  yield all([
    fork(watchAddPost),
    fork(watchAddComment)
  ]);
}