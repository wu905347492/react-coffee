import React from 'react';
import { Dashboard } from '@/pages/dashboard';
import { User } from '@/pages/user';
import { UploadFile } from '@/pages/tools';

const routes = [
  { path: '/', element: <Dashboard /> },
  { path: '/user', element: <User /> },
  { path: '/tools/upload', element: <UploadFile /> },
];
export { routes };
