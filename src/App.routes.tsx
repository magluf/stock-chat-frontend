import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './components/Auth/Login/Login';
import Register from './components/Auth/Register/Register';

const AppRoutes = () => (
  <Switch>
    <Route path="/" exact component={Login} />
    <Route exact path="/register" component={Register} />
  </Switch>
);

export default AppRoutes;
