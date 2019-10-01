import React from 'react';
import Head from 'next/head';
import AppLayout from '../components/AppLayout';
//redux 연결하기
import { createStore, compose, applyMiddleware } from 'redux';
import  { Provider } from 'react-redux';
import reducer from '../reducers';
import withRedux from 'next-redux-wrapper';

const NodeBird = ({ Component, store }) => {
  return (
    <>
    {/* 모든 페이지에서 리덕스 스토어에 접근하기 위해서는 Provider를 import 하여 감싸줘야한다. */}
    <Provider store={store}>
      {/* Head부분은 모든 페이지에 공통적으로 적용 되는 부분이다. 앤트디자인 또는 여러 cdn을 적용하기 위해서는 이곳에 넣으면 된다 */}
     <Head>
      <title>NodeBird</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.23.3/antd.css" />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/antd/3.23.3/antd.js" />
     </Head>
     {/* <Component />는 모든 페이지들을 의미한다. 이렇게 Head태그 아래 Component태그를 삽입하면 Next가 알아서 페이지들을 인식하여 해당페이지들만 화면에 띄우게 된다.  */}
     {/* 그리고 모든 페이지들은 내가 디자인한 기본 레이아웃에 영향을 받게 된다. 따라서 AppLayout 을 import 해와 이렇게 component를 감싸게 되면 각각의 페이지들 마다 자동적으로 레이아웃이 적용받게 된다. */}
     <AppLayout>
       <Component />
    </AppLayout>
    </Provider>
    </>
  );
};

//그냥 외우는 부분이다. redux 에서 조금 더 강화된 기능들을 쓰고 싶다면 이 작업을 시행히야 한다. 리덕스 dev tools , Redux Saga 등을 사용하기 위해서는 이렇게 Redux 기본 기능에 여러 기능들을 합성시켜줘야한다.
//그리고 해당 부분에서 stroe를 생성해줘야 const store = createStore( reducer, initialState, enhancer )을 생성하여 return 까지 해줘야 전체 페이지에서 Store에 접근할 수 있게 된다.
export default withRedux((initialState, options) => {
  const middlewares = [];
  const enhancer = compose(
    applyMiddleware(...middlewares),
    !options.isServer && window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f,
  )
  //store를 여기서 맨들어야함
  const store = createStore( reducer, initialState, enhancer );
  return store;
})(NodeBird);

