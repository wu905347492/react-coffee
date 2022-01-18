import React, { useState } from 'react';
import { Layout, Menu } from 'antd';

import { Link, useLocation } from 'react-router-dom';
import { routes } from '../../routers/config';

const { Sider } = Layout;

const Menus = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { pathname } = useLocation();
  console.log(pathname);

  const onCollapse = (collapsed: boolean) => {
    setCollapsed(collapsed);
  };

  return (
    <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
      <div className="logo" />
      <Menu theme="dark" defaultSelectedKeys={[pathname]} selectedKeys={[pathname]} mode="inline">
        {/* {privateRoutes.map((item) => {
          return (
            <Menu.Item key={menuMap.get(item.key)}>
              <Link to={item.path || '/'}>{item.name}</Link>
            </Menu.Item>
          );
        })} */}
      </Menu>
    </Sider>
  );
};

export { Menus };
