import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Layout, Tabs, Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useLoginContext } from '@/provider/login-provider';

import './login.scss';

const { Content, Footer } = Layout;
const { TabPane } = Tabs;

interface StateProps {
  from: {
    pathname: string;
  };
}

interface FormValueProps {
  username: string;
  password: string;
}

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as StateProps;
  const from = state?.from?.pathname || '/';
  console.log(useLoginContext());

  // useEffect(() => {
  //   navigate('/', { replace: true });
  // }, [navigate]);

  const onFinish = (values: FormValueProps) => {
    console.log(values);
  };

  return (
    <div className="login">
      <Layout className="layout">
        <Content className="layout-content">
          <div className="login-content">
            <Tabs defaultActiveKey="1">
              <TabPane tab="账号密码登录" key="1">
                <Form name="login" className="login-form" onFinish={onFinish}>
                  <Form.Item name="username" rules={[{ required: true, message: 'Please input your Username!' }]}>
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                  </Form.Item>
                  <Form.Item name="password" rules={[{ required: true, message: 'Please input your Password!' }]}>
                    <Input
                      prefix={<LockOutlined className="site-form-item-icon" />}
                      type="password"
                      placeholder="Password"
                    />
                  </Form.Item>
                  <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                      登录
                    </Button>
                  </Form.Item>
                </Form>
              </TabPane>
            </Tabs>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>©2022 Created by Coffee</Footer>
      </Layout>
    </div>
  );
};

export { Login };
