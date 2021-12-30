import React from 'react';
import { Layout } from 'antd';
import { Menus } from './menu';
import { Headers } from './header';
import { Contents } from './content';

const Layouts = function () {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Menus></Menus>
      <Layout className="site-layout">
        <Headers></Headers>
        <Contents></Contents>
      </Layout>
    </Layout>
  );
};

export default Layouts;
