import React, { useEffect, useState } from 'react';
import { Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { bindActionCreators, Dispatch } from 'redux';
import SidePanel from '../SidePanel/SidePanel';
import { AppState } from '../../store/store';
import * as UserActions from '../../store/ducks/user/actions';
import { User } from '../../store/ducks/user/types';
import { isLoggedIn } from '../../api/AuthAPI';
import Spinner from '../../components/UI/Spinner';
import { Channel } from '../../store/ducks/channel/types';

import classes from './Home.module.scss';
import MessagesContainer from '../MessagesContainer/MessagesContainer';

interface IHomeProps {
  currentUser: User | null;
  currentChannel: Channel | null;
  channels: Channel[];
  clearUser: any;
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
      <Grid columns="equal">
        <Grid.Column width={3} className={classes.Column}>
          <SidePanel
            key={props.currentUser._id}
            clearUser={props.clearUser}
            currentUser={props.currentUser}
            channels={props.channels}
          />
        </Grid.Column>
        <Grid.Column width={13}>
          <Grid.Column className={classes.MessagesColumn}>
            <MessagesContainer
              key={props.currentChannel?._id}
              currentChannel={props.currentChannel as Channel}
              currentUser={props.currentUser}
            />
          </Grid.Column>
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
  currentUser: state.user.currentUser,
  channels: state.channel.channels,
  currentChannel: state.channel.currentChannel
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(UserActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
