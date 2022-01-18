import React from 'react';

import App from '@/pages/app';
import { Login } from '@/pages/login';

import { Layouts } from '@/pages/layouts';
import { User } from '@/pages/user';
import { Dashboard } from '@/pages/dashboard';
import { UploadFileComponent } from '@/pages/tools';

interface routesProps {
  path: string;
  element: React.ReactNode;
  children?: routesProps[];
}

const routes: routesProps = {
  path: '/',
  element: <App />,
  children: [
    {
      path: 'data-center',
      element: <Layouts />,
      children: [
        {
          path: '',
          element: <Dashboard />,
        },
        {
          path: 'user',
          element: <User />,
        },
        {
          path: 'tool',
          element: <UploadFileComponent />,
        },
      ],
    },
    {
      path: 'login',
      element: <Login />,
    },
    {
      path: '*',
      element: <>Not found</>,
    },
  ],
};

export type { routesProps };
export { routes };
