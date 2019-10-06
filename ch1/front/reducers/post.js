export const initialState = {
  mainPosts: [{
    id: 1,
    User: {
      id:1,
      nickname: '윤민수'
    },
    content: '첫 번째 게시글',
    img: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=http%3A%2F%2Fcfile23.uf.tistory.com%2Fimage%2F2657B9505809B4B634FF66',
    Comments: [],
  }], //화면에 보일 포스트들
  imagePaths: [],
  addPostErrorReason: '', //포스트업로드 실패사유
  isAddingPost: false, //포스트업로딩 중
  postAdded: false, //포스트 업로드 성공
  addCommentErrorReason: '', //코멘트 업로드 실패사유
  isAddingComment: false, //코멘트 업로딩중
  commentAdded: false, //코멘트 업로드 성공
}


const dummyPost = {
  id: 2,
  User : {
    id: 1,
    nickname: '윤민수'
  },
  content: '나는 더미입니다.',
  Comment: [],
}

const dummyComment = {
  id: 1,
  User: {
    id: 1,
    nickname: '윤민수'
  },
  content: '더미 댓글입니다',
  createdAt: new Date()
};

//메인포스트 로드
export const LOAD_MAIN_POSTS_REQUEST = 'LOAD_MAIN_POSTS_REQUEST';
export const LOAD_MAIN_POSTS_SUCCESS = 'LOAD_MAIN_POSTS_SUCCESS';
export const LOAD_MAIN_POSTS_FAILURE = 'LOAD_MAIN_POSTS_FAILURE';
//해쉬태그 로드
export const LOAD_HASHTAG_POSTS_REQUEST = 'LOAD_HASHTAG_POSTS_REQUEST';
export const LOAD_HASHTAG_POSTS_SUCCESS = 'LOAD_HASHTAG_POSTS_SUCCESS';
export const LOAD_HASHTAG_POSTS_FAILURE = 'LOAD_HASHTAG_POSTS_FAILURE';
//유저가 올린 포스트 로드
export const LOAD_USER_POSTS_REQUEST = 'LOAD_USER_POSTS_REQUEST';
export const LOAD_USER_POSTS_SUCCESS = 'LOAD_USER_POSTS_SUCCESS';
export const LOAD_USER_POSTS_FAILURE = 'LOAD_USER_POSTS_FAILURE';
//이미지 업로드
export const UPLOAD_IMAGES_REQUEST = 'UPLOAD_IMAGES_REQUEST';
export const UPLOAD_IMAGES_SUCCESS = 'UPLOAD_IMAGES_SUCCESS';
export const UPLOAD_IMAGES_FAILURE = 'UPLOAD_IMAGES_FAILURE';
//이미지 삭제
export const REMOVE_IMAGE = 'REMOVE_IMAGE';
//포스트 추가
export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';
//포스트삭제
export const REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
export const REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
export const REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';
//좋아요 누르기
export const LIKE_POST_REQUEST = 'LIKE_POST_REQUEST';
export const LIKE_POST_SUCCESS = 'LIKE_POST_SUCCESS';
export const LIKE_POST_FAILURE = 'LIKE_POST_FAILURE';
//좋아요 해지
export const UNLIKE_POST_REQUEST = 'UNLIKE_POST_REQUEST';
export const UNLIKE_POST_SUCCESS = 'UNLIKE_POST_SUCCESS';
export const UNLIKE_POST_FAILURE = 'UNLIKE_POST_FAILURE';
//코멘트 추가
export const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
export const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';
//코멘트 로딩
export const LOAD_COMMENTS_REQUEST = 'LOAD_COMMENTS_REQUEST';
export const LOAD_COMMENTS_SUCCESS = 'LOAD_COMMENTS_SUCCESS';
export const LOAD_COMMENTS_FAILURE = 'LOAD_COMMENTS_FAILURE';
//리트윗
export const RETWEET_REQUEST = 'RETWEET_REQUEST';
export const RETWEET_SUCCESS = 'RETWEET_SUCCESS';
export const RETWEET_FAILURE = 'RETWEET_FAILURE';

export default  ( state = initialState, action ) => {
  switch(action.type) {
    case ADD_POST_REQUEST : {
      return {
        ...state,
        isAddingPost : true,
        addPostErrorReason: '',
        postAdded: false, 
      }
    }
    case ADD_POST_SUCCESS : {
      return {
        ...state,
        isAddingPost : false,
        addPostErrorReason: '',
        postAdded: true,
        mainPosts: [dummyPost, ...state.mainPosts,]
      }
    }
    case ADD_POST_FAILURE : {
      return {
        ...state,
        isAddingPost : false,
        addPostErrorReason: action.error,
        postAdded: false, 
      }
    }
    case ADD_COMMENT_REQUEST: {
      return {
        ...state,
        isAddingComment: true,
        addCommentErrorReason: '',
        commentAdded: false,
      };
    }
    case ADD_COMMENT_SUCCESS: {
      const postIndex = state.mainPosts.findIndex(v => v.id === action.data.postId);
      const post = state.mainPosts[postIndex];
      const Comments = [...post.Comments, dummyComment];
      const mainPosts = [...state.mainPosts];
      mainPosts[postIndex] = { ...post, Comments };
      return {
        ...state,
        isAddingComment: false,
        mainPosts,
        commentAdded: true,
      };
    }
    case ADD_COMMENT_FAILURE: {
      return {
        ...state,
        isAddingComment: false,
        addCommentErrorReason: action.error,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
}
