import React from 'react';
import { connect } from 'react-redux';

import AppRoutes from './App.routes';
import { AppState } from './store/store';

const App = () => {
  return <AppRoutes />;
};

const mapStateToProps = (state: AppState) => ({
  isLoading: state.user.loading
});

export default connect(mapStateToProps, null)(App);
