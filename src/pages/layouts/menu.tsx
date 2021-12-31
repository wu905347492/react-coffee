import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import { DesktopOutlined, PieChartOutlined, UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Sider } = Layout;
const { SubMenu } = Menu;

const Menus = () => {
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = (collapsed: boolean) => {
    console.log(collapsed);
    setCollapsed(collapsed);
  };

  return (
    <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
      <div className="logo" />
      <Menu theme="dark" defaultOpenKeys={['sub1']} defaultSelectedKeys={['3']} mode="inline">
        <Menu.Item key="1" icon={<PieChartOutlined />}>
          <Link to="/">Dashboard</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<DesktopOutlined />}>
          <Link to="/user">User</Link>
        </Menu.Item>
        <SubMenu key="sub1" icon={<UserOutlined />} title="Tools">
          <Menu.Item key="3">
            <Link to="/tools/upload">Upload</Link>
          </Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  );
};

export { Menus };
