import { combineReducers } from 'redux';
import user from './user';
import post from './post';

//각 파일에 있는 Reducer들을 combineReducer로 묶어서 rootReducer에서 관리 함
const rootReducer = combineReducers({user, post});

export default rootReducer;