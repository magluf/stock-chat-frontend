import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from './components/Auth/Login/Login';
import Register from './components/Auth/Register/Register';
import Home from './containers/Home/Home';

const AppRoutes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/register" component={Register} />
    <Redirect from="*" to="/login" />
  </Switch>
);

export default AppRoutes;
