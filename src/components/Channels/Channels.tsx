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
    '5f7ce99e430700baa6e31f2f'
  );

  // const [channels, setChannels] = useState([]);
  // const [modal, setModal] = useState(false);

  // const [channelName, setChannelName] = useState('');

  // const [channelDetails, setChannelDetails] = useState('');

  // const closeModal = () => {
  //   setModal(false);
  // };

  // const openModal = () => {
  //   setModal(true);
  // };

  // const handleChangeChannelName = (event: ChangeEvent<HTMLInputElement>) => {
  //   setChannelName(event.target.value);
  // };

  // const handleChangeChannelDetails = (event: ChangeEvent<HTMLInputElement>) => {
  //   setChannelDetails(event.target.value);
  // };

  // const isFormValid = () => {
  //   return channelName !== '' && channelDetails !== '';
  // };

  // const addChannel = () => {};

  // const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   if (isFormValid()) {
  //     const newChannel: IChannel = {
  //       creator: props.currentUser._id as string,
  //       details: channelDetails,
  //       name: channelName
  //     };

  //     try {
  //       const res = await createChannel(newChannel);
  //       const createdChannel: Channel = res.data.data;
  //       // setLoading(false);
  //     } catch (err) {
  //       // setLoading(false);
  //       // setErrors([
  //       //   {
  //       //     type: ErrorTypes.APIError,
  //       //     message: err.response
  //       //       ? err.response.data.message
  //       //       : `Error registering user.`
  //       //   }
  //       // ]);
  //     }
  //   }
  // };

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
          {/* <Icon className="pointer" name="add" onClick={openModal} /> */}
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

      {/* <Modal basic open={modal} onClose={closeModal}>
        <Modal.Header>Add a Channel</Modal.Header>
        <Modal.Content>
          <Form>
            <Form.Field>
              <Input
                fluid
                label="Name of Channel"
                name="channelName"
                onChange={handleChangeChannelName}
                value={channelName}
              />
            </Form.Field>

            <Form.Field>
              <Input
                fluid
                label="Channel details"
                name="channelDetails"
                onChange={handleChangeChannelDetails}
                value={channelDetails}
              />
            </Form.Field>
          </Form>
        </Modal.Content>

        <Modal.Actions>
          <Button color="green" inverted>
            <Icon name="checkmark" /> Add
          </Button>
          <Button onClick={closeModal} color="red" inverted>
            <Icon name="remove" /> Cancel
          </Button>
        </Modal.Actions>
      </Modal> */}
    </>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(ChannelActions, dispatch);

export default connect(null, mapDispatchToProps)(Channels);
