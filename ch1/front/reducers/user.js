//dummy User
const dummyUser = {
  nickname: "윤민수",
  Post: [],
  Followings: [],
  Followers: [],
  id: 1
}

//intial State
export const initialState = {
  isLoggedIn : false, //로그인 여부
  isLoggingIn : false, // 로그인 시도중
  logInErrorReason: '', // 로그인 실패 사유
  isLoggingOut: false, // 로그아웃 시도중
  isSignedUp: false, //회원가입 성공,
  isSigningUp : false, //회원가입 시도중,
  signUpErrorReason: '', //회원가입 실패 사유
  me: null, //내 정보
  followingList: [], //팔로잉 리스트
  followerList: [], //팔로워 리스트
  userInfo: null, //남의 정보
}

//Action 이름 정하기
//보통 비동기처리를 하는 Action들은 Request/Success/Failure 총 3개로 나눈다

//회원가입
export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST'
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS'
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE'

//로그인
export const LOG_IN_REQUEST = 'LOG_IN_REQUEST'
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS'
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE'

//유저정보 서버로부터 받아들이기
export const LOAD_USER_REQUEST = 'LOAD_USER_REQUEST'
export const LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS'
export const LOAD_USER_FAILURE = 'LOAD_USER_FAILURE'

//로그아웃
export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST'
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS'
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE'

//팔로잉, 팔로워 정보 서버로부터 받아들이기
export const LOAD_FOLLOW_REQUEST = 'LOAD_FOLLOW_REQUEST'
export const LOAD_FOLLOW_SUCCESS = 'LOAD_FOLLOW_SUCCESS'
export const LOAD_FOLLOW_FAILURE = 'LOAD_FOLLOW_FAILURE'

//팔로우 요청
export const FOLLOW_USER_REQUEST = 'FOLLOW_USER_REQUEST'
export const FOLLOW_USER_SUCCESS = 'FOLLOW_USER_SUCCESS'
export const FOLLOW_USER_FAILURE = 'FOLLOW_USER_FAILURE'

//팔로우 취소요청
export const UNFOLLOW_USER_REQUEST = 'UNFOLLOW_USER_REQUEST'
export const UNFOLLOW_USER_SUCCESS = 'UNFOLLOW_USER_SUCCESS'
export const UNFOLLOW_USER_FAILURE = 'UNFOLLOW_USER_FAILURE'

//팔로워 삭제 요청
export const REMOVE_FOLLOWER_REQUEST = 'REMOVE_FOLLOWER_REQUEST'
export const REMOVE_FOLLOWER_SUCCESS = 'REMOVE_FOLLOWER_SUCCESS'
export const REMOVE_FOLLOWER_FAILURE = 'REMOVE_FOLLOWER_FAILURE'

//아직 뭐하는 녀석인지는 모름
export const ADD_POST_TO_ME = 'ADD_POST_TO_ME'

//reducer 부분
//반드시 reducer는 action의 값을 받아 initialState를 바꿔주는 역할을 하기에 인자로써, initialState와 action을 넣어준다
export default (state = initialState, action ) => {
  switch(action.type) {
    case LOG_IN_REQUEST: {
      return {
        ...state,
        isLoggingIn : true
      }
    }
    case LOG_IN_SUCCESS: {
      return {
        ...state,
        isLoggingIn: false,
        isLoggedIn: true,
        me: dummyUser,
      }
    }
    case LOG_IN_FAILURE: {
      return {
        ...state,
        isLoggingIn: false,
        isLoggedIn: false,
        logInErrorReason : action.error,
        me: null
      }
    }
    case LOG_OUT_REQUEST: {
      return {
        ...state,
        isLoggedIn: false,
        me: null,
      }
    }
    case SIGN_UP_REQUEST: {
      return {
        ...state,
        isSigningUp: true,
        isSignedUp: false,
        signUpErrorReason: ''
      }
    }
    case SIGN_UP_SUCCESS: {
      return {
        ...state,
        isSigningUp: false,
        isSignedUp: true,
        signUpErrorReason: ''
      }
    }
    case SIGN_UP_FAILURE: {
      return {
        ...state,
        isSigningUp: false,
        signUpErrorReason: action.error
      }
    }
    default: {
      return {
        ...state
      }
    }
  }
}


