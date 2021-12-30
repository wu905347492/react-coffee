import React from 'react';
import { Layout } from 'antd';
import { useRoutes } from 'react-router-dom';
import { routes } from '../../routers';
const { Content } = Layout;

const contentStyle = {
  margin: '16px',
};

const Routers = () => useRoutes(routes);

const Contents = () => {
  return (
    <Content style={contentStyle}>
      <Routers></Routers>
    </Content>
  );
};

export { Contents };
