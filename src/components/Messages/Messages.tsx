import React, { useState } from 'react';
import { Segment, Comment } from 'semantic-ui-react';

import { Message } from '../../store/ducks/message/types';
import classes from './Messages.module.scss';
import MessagesHeader from './MessageHeader';
import MessageForm from './MessageForm';
import { Channel } from '../../store/ducks/channel/types';
import { User } from '../../store/ducks/user/types';

interface IMessages {
  currentChannel: Channel;
  currentUser: User;
}

const Messages = (props: IMessages) => {
  const [messages, setMessages] = useState([] as Message[]);

  const handleSetMessages = (message: Message) => {
    setMessages([...messages, message]);
    console.log('sendMessage -> message', message);
  };

  return (
    <>
      <MessagesHeader />

      <Segment className={classes.MessagesMR}>
        <Comment.Group className={classes.Messages}>
          {messages.map((message) => {
            console.log('Messages -> message', message);
            return <p key={message._id}>{message.content}</p>;
          })}
        </Comment.Group>
      </Segment>

      <MessageForm
        currentUser={props.currentUser}
        currentChannel={props.currentChannel}
        setMessages={handleSetMessages}
      />
    </>
  );
};

export default Messages;
