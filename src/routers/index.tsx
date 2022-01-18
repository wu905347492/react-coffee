import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { routes, routesProps } from './config';

const Routers = () => {
  const recursionRoutes = (route: routesProps) => {
    return (
      <Route key={route.path} path={route.path} element={route.element}>
        {route.children ? route.children.map(recursionRoutes) : null}
      </Route>
    );
  };

  return <Routes>{recursionRoutes(routes)}</Routes>;
};

export { Routers };
