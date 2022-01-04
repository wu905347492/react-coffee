import React from 'react';
import { Dashboard } from '@/pages/dashboard';
import { User } from '@/pages/user';
import { UploadFile } from '@/pages/tools';
import { DesktopOutlined, PieChartOutlined, UserOutlined } from '@ant-design/icons';

const routes = [
  { path: '/', element: <Dashboard />, name: '首页', icon: <DesktopOutlined /> },
  { path: '/user', element: <User />, name: '用户中心', icon: <UserOutlined /> },
  { path: '/tools/upload', element: <UploadFile />, name: '上传文件', icon: <PieChartOutlined /> },
];
export { routes };
