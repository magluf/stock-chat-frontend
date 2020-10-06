import React, { useEffect, useState } from 'react';
import { Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { bindActionCreators, Dispatch } from 'redux';
import ColorPanel from '../../components/ColorPanel/ColorPanel';
import SidePanel from '../SidePanel/SidePanel';
import Messages from '../../components/Messages/Messages';
import MetaPanel from '../../components/MetaPanel/MetaPanel';
import { AppState } from '../../store/store';
import * as UserActions from '../../store/ducks/user/actions';
import { User } from '../../store/ducks/user/types';
import { isLoggedIn } from '../../api/AuthAPI';
import Spinner from '../../components/UI/Spinner';

interface IHomeProps {
  currentUser: User | null;
  clearUser: () => void;
  setUser: (user: User) => void;
}

const Home = (props: IHomeProps) => {
  const [checkedIfLoggedIn, setCheckedIfLoggedIn] = useState(false);

  useEffect(() => {
    let checked = false;
    async function checkLoggedIn() {
      try {
        const res = await isLoggedIn();
        const currentUser: User = res.data.data;
        if (!props.currentUser) {
          props.setUser(currentUser);
        }
        if (!checked) setCheckedIfLoggedIn(true);
      } catch (err) {
        props.clearUser();
        if (!checked) setCheckedIfLoggedIn(true);
      }
    }

    checkLoggedIn();
    return () => {
      checked = true;
    };
  }, [props]);

  if (props.currentUser) {
    return (
      <Grid columns="equal" style={{ backgroud: '#eee' }}>
        <Grid.Column>
          <ColorPanel />
        </Grid.Column>
        <Grid.Column>
          <SidePanel
            clearUser={props.clearUser}
            currentUser={props.currentUser}
          />
        </Grid.Column>
        <Grid.Column style={{ marginLeft: 320 }}>
          <Messages />
        </Grid.Column>
        <Grid.Column width={4}>
          <MetaPanel />
        </Grid.Column>
      </Grid>
    );
  }
  if (!checkedIfLoggedIn) {
    return <Spinner />;
  }
  return <Redirect to="/login" />;
};

const mapStateToProps = (state: AppState) => ({
  currentUser: state.user.currentUser
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(UserActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
