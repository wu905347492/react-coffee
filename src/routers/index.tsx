import React from 'react';
import { Dashboard } from '@/pages/dashboard';
import { User } from '@/pages/user';

const routes = [
  { path: '/', element: <Dashboard /> },
  { path: '/user', element: <User /> },
];
export { routes };
