import React from 'react';
import { Menu } from 'semantic-ui-react';
import { User } from '../../store/ducks/user/types';
import UserPanel from '../../components/UserPanel/UserPanel';
import Channels from '../../components/Channels/Channels';
import { Channel } from '../../store/ducks/channel/types';

interface ISidePanelProps {
  currentUser: User | null;
  channels: Channel[];
  clearUser: () => void;
}

const SidePanel = (props: ISidePanelProps) => (
  <Menu
    size="large"
    inverted
    fluid
    vertical
    style={{
      background: '#4c3c4c',
      fontSize: '1.2rem',
      height: '100vh',
      borderRadius: '0'
    }}
  >
    <UserPanel currentUser={props.currentUser} clearUser={props.clearUser} />
    <Channels channels={props.channels} />
  </Menu>
);

export default SidePanel;
