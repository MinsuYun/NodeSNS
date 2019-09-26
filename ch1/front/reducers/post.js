const initialState = {
  mainPost: [],
}

const Add_Post = "Add_Post";
const Add_Dummy = "Add_Dummy";

const addPostAction = {
  type: Add_Post
};

const addDummyAction = {
  type: Add_Dummy
};

const reducer = ( state = initialState, action) => {
  switch(action.type) {
    case Add_Post : {
      return {
        mainPost : []
      }
    }
    case Add_Dummy: {
      return {
        mainPost: []
      }
    };
  };
};