import React from 'react';
import { Route } from 'react-router-dom';

const Main = () => <h1>Hello world</h1>;


export default (
  <Route path="/" breadcrumbName="主页" component={Main}>

  </Route>
);
