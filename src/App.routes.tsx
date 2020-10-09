import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from './components/Auth/Login/Login';
import Register from './components/Auth/Register/Register';
import Home from './containers/Home/Home';
import ProtectedRoute from './Protect.routes';
import { AppState } from './store/store';

const AppRoutes = () => (
  <Switch>
    <Route exact path="/" component={Login} />
    <ProtectedRoute exact path="/home" component={Home} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/register" component={Register} />
    <Redirect from="*" to="/home" />
  </Switch>
);

const mapStateToProps = (state: AppState) => ({
  isLoading: state.user.loading,
  user: state.user.currentUser
});

export default connect(mapStateToProps, null)(AppRoutes);
