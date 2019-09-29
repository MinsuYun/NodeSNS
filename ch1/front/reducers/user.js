//intial State
export const inisitalState = {
  isLoggedIn : false,
  user: {}
}

//Action 이름정하기
const Log_In = 'Log_In'
const Log_Out = 'Log_Out'

//Action 의 결과 적기
export const loginAction = {
  type: Log_In,
  data: { nickname: "윤민수" }
}

export const logoutAction = {
  type : Log_Out,
}

//reducer 생성
const reducer = ( state = inisitalState, action ) => {
  switch(action.type) {
    case Log_In : {
      return {
        ...state,
      isLoggedIn: true,
      user: action.data
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