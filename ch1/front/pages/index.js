import React, { useEffect } from 'react';
import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';
import { useDispatch, useSelector } from 'react-redux';
import { loginAction, logoutAction } from '../reducers/user';

const dummy = {
  isLoggedIn : true,
  imagePaths : [],
  mainPosts : [{
    User: {
      id: 1,
      nickname: '윤민수',
    },
    content: '첫 번째 게시글',
    img: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=http%3A%2F%2Fcfile23.uf.tistory.com%2Fimage%2F2657B9505809B4B634FF66'
  }]
}

const Home = () => {
  //dispatch는 setState의 역할을 함
  const dispatch = useDispatch();
  //useState의 역할을 함 
  const { isLoggedIn, user } = useSelector( state => state.user );
  useEffect( () => {
    dispatch(loginAction);
    dispatch(logoutAction);
  },[]);

  return (
    <>
    { user ? <div>로그인 되었습니다</div> : <div>로그아웃 되었습니다.</div>}
    {dummy.isLoggedIn && <PostForm dummy={dummy}/>}
    {dummy.mainPosts.map( (c) => {
          return (<PostCard post={c} key={c}/>)
        })}
    </>
  );
};

export default Home;