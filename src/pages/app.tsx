import React from 'react';
import { Layouts } from '@/pages/layouts';
import { Routes, Route } from 'react-router-dom';
import { publicRoutes, privateRoutes } from '../routers';
import { LoginProvider } from '../provider';

console.log('env:', NODE_ENV);

function App() {
  return (
    <LoginProvider>
      <Routes>
        {publicRoutes.map((value) => (
          <Route key={value.key} path={value.path} element={value.element}></Route>
        ))}
        <Route key="home" path="/" element={<Layouts />}>
          {privateRoutes.map((value) => {
            if (value.index) {
              return <Route index key={value.key} element={value.element}></Route>;
            }
            return <Route key={value.key} path={value.path} element={value.element}></Route>;
          })}
        </Route>
      </Routes>
    </LoginProvider>
  );
}

export default App;
