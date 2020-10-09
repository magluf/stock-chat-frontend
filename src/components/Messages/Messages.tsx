import React, { useEffect, useRef, useState } from 'react';
import { Segment, Comment } from 'semantic-ui-react';
import { Message as MessageModel } from '../../store/ducks/message/types';
import classes from './Messages.module.scss';
import MessagesHeader from './MessageHeader';
import MessageForm from './MessageForm';
import { Channel } from '../../store/ducks/channel/types';
import { User } from '../../store/ducks/user/types';
import Message from './Message';

interface IMessages {
  currentChannel: Channel;
  currentUser: User;
  messages: any[];
}

const Messages = (props: IMessages) => {
  const [messages, setMessages] = useState([] as MessageModel[]);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'auto' });
    }
  };

  useEffect(scrollToBottom, [props.messages]);

  const handleSetMessages = (message: MessageModel) => {
    setMessages([...messages, message]);
  };

  return (
    <>
      <MessagesHeader channelName={props.currentChannel.channelName} />

      <Segment className={classes.MessagesMR}>
        <Comment.Group className={classes.Messages}>
          {props.messages.map((message) => {
            return (
              <Message
                key={message._id}
                content={message.content}
                createdAt={message.createdAt}
                username={message.username}
                currentUser={props.currentUser}
              />
            );
          })}
          <div ref={messagesEndRef} />
        </Comment.Group>
      </Segment>

      <MessageForm
        // scrollToBottom={scrollToBottom} // TODO: only needed if message not sent routine implemented..
        currentUser={props.currentUser}
        currentChannel={props.currentChannel}
        setMessages={handleSetMessages}
      />
    </>
  );
};

export default Messages;
