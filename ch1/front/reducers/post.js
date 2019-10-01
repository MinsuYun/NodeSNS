export const initialState = {
  mainPosts:[{
    User: {
      id: 1,
      nickname: '윤민수',
    },
    content: '첫 번째 게시글',
    img: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=http%3A%2F%2Fcfile23.uf.tistory.com%2Fimage%2F2657B9505809B4B634FF66'
  }],
  imagePaths: []
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