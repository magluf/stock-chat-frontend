import React from 'react';
import { Menu } from 'semantic-ui-react';
import { User } from '../../store/ducks/user/types';
import UserPanel from '../../components/UserPanel/UserPanel';
import Channels from '../../components/Channels/Channels';

interface ISidePanelProps {
  currentUser: User | null;
  clearUser: () => void;
}

const SidePanel = (props: ISidePanelProps) => (
  <Menu
    size="large"
    inverted
    fixed="left"
    vertical
    style={{ background: '#4c3c4c', fontSize: '1.2rem' }}
  >
    <UserPanel currentUser={props.currentUser} clearUser={props.clearUser} />
    <Channels />
  </Menu>
);

export default SidePanel;