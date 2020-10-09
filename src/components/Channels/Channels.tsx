import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Icon, Menu } from 'semantic-ui-react';
import { bindActionCreators, Dispatch } from 'redux';
import { Channel } from '../../store/ducks/channel/types';
import * as ChannelActions from '../../store/ducks/channel/actions';

interface IChannelProps {
  setChannel: (channel: Channel) => void;
  channels: Channel[];
}

const Channels = (props: IChannelProps) => {
  const [activeChannel, setActiveChannel] = useState(
    '5f7d63d29672610b98fe42cc'
  );

  const changeChannel = (channel: Channel) => {
    setActiveChannel(channel._id);
    props.setChannel(channel);
  };

  return (
    <>
      <Menu.Menu style={{ paddingBottom: '2em' }}>
        <Menu.Item>
          <span>
            <Icon name="exchange" /> CHANNELS
          </span>{' '}
          ({props.channels.length}){' '}
        </Menu.Item>
        {props.channels.map((channel) => {
          return (
            <Menu.Item
              key={channel._id}
              onClick={() => changeChannel(channel)}
              name={channel.channelName}
              style={{ opacity: 0.7 }}
              active={channel._id === activeChannel}
            >
              # {channel.channelName}
            </Menu.Item>
          );
        })}
      </Menu.Menu>
    </>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(ChannelActions, dispatch);

export default connect(null, mapDispatchToProps)(Channels);
