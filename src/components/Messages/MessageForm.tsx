import React, { ChangeEvent, useState } from 'react';
import { Segment, Button, Input } from 'semantic-ui-react';
import { createMessage, IMessage } from '../../api/MessageAPI';
import { Channel } from '../../store/ducks/channel/types';
import { User } from '../../store/ducks/user/types';

import classes from './Messages.module.scss';

interface IMessageFormProps {
  setMessages: any;
  currentChannel: Channel;
  currentUser: User;
  // scrollToBottom: any;
}

const MessageForm = (props: IMessageFormProps) => {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState([] as { message: string }[]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  const sendMessage = async () => {
    setLoading(true);
    setMessage('');
    if (message !== '') {
      const newMessage: IMessage = {
        _id: '',
        authorId: props.currentUser._id,
        channelId: props.currentChannel._id,
        content: message
      };

      try {
        setErrors([]);
        const res = await createMessage(newMessage);
        newMessage._id = res.data.data._id;
        props.setMessages(newMessage);
        setLoading(false);
      } catch (err) {
        setErrors([...errors, { message: err.response }]);
      }
    }
    setLoading(false);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <Segment className={classes.MessageForm}>
      <Input
        fluid
        name="message"
        style={{ marginBottom: '0.7em' }}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        labelPosition="left"
        placeholder="Write your message"
        value={message}
      />
      <Button
        color="orange"
        content="Add Reply"
        labelPosition="left"
        icon="edit"
        disabled={loading}
        onClick={sendMessage}
      />
    </Segment>
  );
};

export default MessageForm;
