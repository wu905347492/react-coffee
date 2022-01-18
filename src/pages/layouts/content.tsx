import React from 'react';
import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
const { Content } = Layout;

const contentStyle = {
  margin: '16px',
};

const Contents = () => {
  return (
    <Content style={contentStyle}>
      <Outlet />
    </Content>
  );
};

export { Contents };
