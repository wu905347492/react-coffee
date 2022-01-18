import React from 'react';

// Public Component
import { Login } from '@/pages/login';

// Private Component
import { User } from '@/pages/user';
import { Dashboard } from '@/pages/dashboard';
import { UploadFileComponent } from '@/pages/tools';

const publicRoutes = [{ key: 'login', path: '/login', element: <Login />, name: '登录' }];
const privateRoutes = [
  { key: 'dashboard', index: true, element: <Dashboard />, name: '后台中心' },
  { key: 'user', path: '/user', element: <User />, name: '用户中心' },
  {
    key: 'upload',
    path: '/tools/upload',
    element: <UploadFileComponent />,
    name: '上传文件',
  },
];

export { publicRoutes, privateRoutes };
