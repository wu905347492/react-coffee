import React from 'react';
import { Layout } from 'antd';
import { Menus } from './menu';
import { Headers } from './header';
import { Contents } from './content';

const layoutStyle = {
  minHeight: '100vh',
};

const Layouts = function () {
  return (
    <Layout style={layoutStyle}>
      <Menus></Menus>
      <Layout>
        <Headers></Headers>
        <Contents></Contents>
      </Layout>
    </Layout>
  );
};

export default Layouts;
