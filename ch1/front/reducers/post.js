export const initialState = {
  mainPost: [],
}

const Add_Post = "Add_Post";
const Add_Dummy = "Add_Dummy";

const addPostAction = {
  type: Add_Post
};

const addDummyAction = {
  type: Add_Dummy,
  data: {
    content : 'Hello',
    UserId: 1,
    User: {
      nickname: '윤종환'
    }
  }
};

const reducer = ( state = initialState, action) => {
  switch(action.type) {
    case Add_Post : {
      return {
        ...state,
        mainPost : [...state.mainPost]
      }
    }
    case Add_Dummy: {
      return {
        ...state,
        mainPost: [...state.mainPost]
      }
    };
    default: {
      return {
        ...state,
      }
    }
  };
};

export default reducer;