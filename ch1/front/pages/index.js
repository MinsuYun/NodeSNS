import React, { useEffect } from 'react';
import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';
import {  useSelector, useDispatch } from 'react-redux';
import userSaga from '../sagas/user'
 

//index.js 모든 page들 중에서 첫 화면을 나타낸다.

//useEffect는 hooks 에서 componentDidMount역할을 한다.
//dispatch는 redux에서 setState를 하기 위해 필요한 action을 실행시켜주는 함수이다.
//이 dispatch를 쓰기 위해서는 useDispatch 를 import 해와야 한다.
//useSelector는 store에서 원하는 state값을 불러올 때 쓰는 함수이다.

const Home = () => {
  //dispatch는 action을 실행시키는 역할을 함
  //useSelector는 store에서 원하는 state값을 불러오는 역할을 한다.
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector( state => state.user );
  const { mainPosts } = useSelector( state => state.post );

  useEffect(()=>{
    
  },[])

  return (
    <>
    { isLoggedIn && <PostForm />}
    { mainPosts.map( (c) => {
          return (<PostCard post={c} key={c}/>)
        })}
    </>
  );
};


export default Home;