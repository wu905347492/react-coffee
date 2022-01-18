import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { Routers } from './routers';

ReactDOM.render(
  <HashRouter>
    <Routers></Routers>
  </HashRouter>,
  document.querySelector('#root'),
);
