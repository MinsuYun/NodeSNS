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
    <Provider store={store}>
     <Head>
      <title>NodeBird</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.23.3/antd.css" />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/antd/3.23.3/antd.js" />
     </Head>
     <AppLayout>
     <Component />
    </AppLayout>
    </Provider>
    </>
  );
};

export default withRedux((initialState, options) => {
  const middlewares = [];
  const enhancer = compose(
    applyMiddleware(...middlewares),
    !options.isServer && window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f,
  )
  const store = createStore( reducer, initialState, enhancer );
  return store;
})(NodeBird);

