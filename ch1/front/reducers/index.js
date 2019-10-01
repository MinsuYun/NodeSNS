//react-redux에서 기본적인 redux flow는 아래와 같다

//1. initialState에서 state 초기값을 셋팅해준다.
//2. action은 "~~했을 때, state값을 ~~ 로 바꿔라" 라고 하는 주문서 역할을 한다.
//3. action을 실행하기 위해서는 dispatch함수가 필요하다
//4. dispatch가 action 주문서에 담긴 내용을 reducer에게 전달해준다.
//5. 최종적으로 reducer가 store에 initialState값에 있던 각각의 state값을 action에 적혀있던 주문서 내용대로 setState하게 된다.

//각각의 기능별로 분리되어있던 initialState, action, reducer 중에서 reducer들을 한곳으로 묶는 역할을 한다.
import { combineReducers } from 'redux';
import user from './user';
import post from './post';

//각 파일에 있는 Reducer들을 combineReducer로 묶어서 rootReducer에서 관리 함
const rootReducer = combineReducers({user, post});

export default rootReducer;