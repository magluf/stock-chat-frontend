import React from 'react';
import { Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import SidePanel from '../SidePanel/SidePanel';
import { AppState } from '../../store/store';
import * as UserActions from '../../store/ducks/user/actions';
import { User } from '../../store/ducks/user/types';
import { Channel } from '../../store/ducks/channel/types';
import MessagesContainer from '../MessagesContainer/MessagesContainer';
import classes from './Home.module.scss';

interface IHomeProps {
  currentUser: User | null;
  currentChannel: Channel | null;
  channels: Channel[];
  clearUser: any;
}

const Home = (props: IHomeProps) => {
  const { currentUser, clearUser, channels, currentChannel } = props;

  return (
    <Grid columns="equal">
      <Grid.Column width={3} className={classes.Column}>
        <SidePanel
          key={currentUser?._id}
          clearUser={clearUser}
          currentUser={currentUser}
          channels={channels}
        />
      </Grid.Column>
      <Grid.Column width={13}>
        <Grid.Column className={classes.MessagesColumn}>
          <MessagesContainer
            key={currentChannel?._id}
            currentChannel={currentChannel as Channel}
            currentUser={currentUser as User}
          />
        </Grid.Column>
      </Grid.Column>
    </Grid>
  );
};

const mapStateToProps = (state: AppState) => ({
  currentUser: state.user.currentUser,
  channels: state.channel.channels,
  currentChannel: state.channel.currentChannel
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(UserActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
