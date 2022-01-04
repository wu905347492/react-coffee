import React, { useState } from 'react';
import { Layout, Menu } from 'antd';

import { Link, useLocation } from 'react-router-dom';
import { routes } from '../../routers';

const { Sider } = Layout;
const { SubMenu } = Menu;

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
        <SubMenu key="123" title="Tools">
          <Menu.Item key="3">3</Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  );
};

export { Menus };
