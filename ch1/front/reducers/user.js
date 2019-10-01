//dummy User
const dummyUser = {
  nickname: "윤민수",
  Post: [],
  Followings: [],
  Followers: [],
}

//intial State
export const initialState = {
  isLoggedIn : false,
  user: null
}

//Action 이름정하기
const Log_In = 'Log_In'
const Log_Out = 'Log_Out'

//Action 의 결과 적기
//여기서 type이 정말 중요하다.
//data 는 state값에 들어갈 데이터들을 정의해주는 곳이다.
export const loginAction = {
  type: Log_In
}

export const logoutAction = {
  type : Log_Out,
}

//reducer 생성
//반드시 reducer는 action의 값을 받아 initialState를 바꿔주는 역할을 하기에 인자로써, initialState와 action을 넣어준다
const reducer = ( state = initialState, action ) => {
  switch(action.type) {
    case Log_In : {
      return {
        ...state,
      isLoggedIn: true,
      user: dummyUser
    }
  } 
    case Log_Out : {
      return {
        ...state,
        isLoggedIn: false,
        user : null
      }
    }
    default: {
      return {
        ...state,
      }
    }  
  }
}

export default reducer;