import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { bindActionCreators, Dispatch } from 'redux';
import { isLoggedIn } from './api/AuthAPI';
import Spinner from './components/UI/Spinner';
import { User } from './store/ducks/user/types';
import { AppState } from './store/store';
import * as UserActions from './store/ducks/user/actions';

interface IProtect {
  component: React.FC;
  path: string;
  exact: boolean;
  isLoading?: boolean;
  user?: User;
  setUser: (user: User) => void;
  clearUser: () => void;
}

const Protect = (props: IProtect) => {
  const { component, exact, isLoading, path, user, setUser, clearUser } = props;
  useEffect(() => {
    async function checkLoggedIn() {
      try {
        const res = await isLoggedIn();
        const newCurrentUser: User = res.data.data;
        if (isLoading) {
          setUser(newCurrentUser);
        }
      } catch (err) {
        clearUser();
      }
    }

    checkLoggedIn();
  });

  return isLoading ? (
    <Spinner />
  ) : user?.username !== '' ? (
    <Route path={path} exact={exact} component={component} />
  ) : (
    <Redirect to="/login" />
  );
};

const mapStateToProps = (state: AppState) => ({
  isLoading: state.user.loading,
  user: state.user.currentUser
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(UserActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Protect);
