import React, { useState } from 'react';
import { Layout, Menu } from 'antd';

import { Link, useLocation } from 'react-router-dom';
import { privateRoutes } from '../../routers';

const { Sider } = Layout;

const menuMap = new Map([
  ['dashboard', '/'],
  ['user', '/user'],
  ['upload', '/tools/upload'],
]);

const Menus = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { pathname } = useLocation();

  const onCollapse = (collapsed: boolean) => {
    setCollapsed(collapsed);
  };

  return (
    <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
      <div className="logo" />
      <Menu theme="dark" defaultSelectedKeys={[pathname]} selectedKeys={[pathname]} mode="inline">
        {privateRoutes.map((item) => {
          return (
            <Menu.Item key={menuMap.get(item.key)}>
              <Link to={item.path || '/'}>{item.name}</Link>
            </Menu.Item>
          );
        })}
      </Menu>
    </Sider>
  );
};

export { Menus };
