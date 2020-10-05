import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from './components/Auth/Login/Login';
import Register from './components/Auth/Register/Register';

const AppRoutes = () => (
  <Switch>
    <Route path="/login" exact component={Login} />
    <Route exact path="/register" component={Register} />
    <Redirect from="/" to="/login" />
  </Switch>
);

export default AppRoutes;
