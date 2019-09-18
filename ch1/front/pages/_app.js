import React from 'react';
import Head from 'next/head';
import AppLayout from '../components/AppLayout';

const NodeBird = ({ Component }) => {
  return (
    <>
    <Head>
      <title>NodeBird</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.23.3/antd.css" />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/antd/3.23.3/antd.js" />
    </Head>
    <AppLayout>
     <Component />
    </AppLayout>
    </>
  );
};

export default NodeBird;