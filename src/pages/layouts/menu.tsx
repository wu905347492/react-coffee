import React, { useState } from 'react';
import { Layout, Menu } from 'antd';

import { Link, useLocation } from 'react-router-dom';
import { routes } from '../../routers';

const { Sider } = Layout;

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
        {routes.map((item) => {
          return (
            <Menu.Item key={item.path} icon={item.icon}>
              <Link to={item.path}>{item.name}</Link>
            </Menu.Item>
          );
        })}
      </Menu>
    </Sider>
  );
};

export { Menus };
