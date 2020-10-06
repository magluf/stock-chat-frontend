import React, { useState } from 'react';
import { Form, Icon, Input, Menu, Modal } from 'semantic-ui-react';

const Channels = () => {
  const [channels, setChannels] = useState([]);
  const [modal, setModal] = useState(false);

  const closeModal = () => {
    setModal(false);
  };

  const handleChange = () => {};

  return (
    <>
      <Menu.Menu style={{ paddingBottom: '2em' }}>
        <Menu.Item>
          <span>
            <Icon name="exchange" /> CHANNELS
          </span>{' '}
          ({channels.length}) <Icon name="add" />
        </Menu.Item>
        {/* Channels */}
      </Menu.Menu>

      <Modal basic open={modal} onClose={closeModal}>
        <Modal.Header>Add a Channel</Modal.Header>
        <Modal.Content>
          <Form>
            <Form.Field>
              <Input
                fluid
                label="Name of Channel"
                name="channelName"
                onChange={handleChange}
              />
            </Form.Field>
          </Form>
        </Modal.Content>
      </Modal>
    </>
  );
};

export default Channels;
