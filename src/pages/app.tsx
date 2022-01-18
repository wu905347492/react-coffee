import React from 'react';
import { Outlet } from 'react-router-dom';
import { LoginProvider } from '../provider';

console.log('env:', NODE_ENV);

function App() {
  return (
    <LoginProvider>
      <Outlet />
    </LoginProvider>
  );
}

export default App;
