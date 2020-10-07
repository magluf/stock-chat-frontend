import React, { ChangeEvent, FormEvent, useState } from 'react';
import { Segment, Button, Input } from 'semantic-ui-react';
import { createMessage, IMessage } from '../../api/MessageAPI';
import { Channel } from '../../store/ducks/channel/types';
import { Message } from '../../store/ducks/message/types';
import { User } from '../../store/ducks/user/types';

import classes from './Messages.module.scss';

interface IMessageFormProps {
  setMessages: any;
  currentChannel: Channel;
  currentUser: User;
}

const MessageForm = (props: IMessageFormProps) => {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  const sendMessage = async () => {
    console.log('sendMessage -> message', message);
    if (message !== '') {
      setLoading(true);

      console.log('sendMessage -> props.currentUser', props.currentUser);
      const newMessage: IMessage = {
        _id: '',
        author: props.currentUser._id,
        channel: props.currentChannel._id,
        content: message
      };
      console.log('sendMessage -> newMessage', newMessage);

      try {
        const res = await createMessage(newMessage);
        newMessage._id = res.data.data._id;
        props.setMessages(newMessage);
        setLoading(false);
      } catch (err) {
        setLoading(false);
      }
    }
  };

  return (
    <Segment className={classes.MessageForm}>
      <Input
        fluid
        name="message"
        style={{ marginBottom: '0.7em' }}
        onChange={handleChange}
        labelPosition="left"
        placeholder="Write your message"
        value={message}
      />
      <Button
        color="orange"
        content="Add Reply"
        labelPosition="left"
        icon="edit"
        onClick={sendMessage}
      />
    </Segment>
  );
};

export default MessageForm;
