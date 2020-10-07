import React, { MutableRefObject, useRef, useState } from 'react';
import { Segment, Comment } from 'semantic-ui-react';
import { Message as MessageModel } from '../../store/ducks/message/types';
import classes from './Messages.module.scss';
import MessagesHeader from './MessageHeader';
import MessageForm from './MessageForm';
import { Channel } from '../../store/ducks/channel/types';
import { User } from '../../store/ducks/user/types';
import { useInterval } from '../../hooks/useInterval';
import { getMessages } from '../../api/MessageAPI';
import Message from './Message';

interface IMessages {
  currentChannel: Channel;
  currentUser: User;
}

const Messages = (props: IMessages) => {
  const [messages, setMessages] = useState([] as MessageModel[]);

  const messagesEndRef = (useRef(null) as unknown) as MutableRefObject<
    HTMLDivElement
  >;

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSetMessages = (message: MessageModel) => {
    setMessages([...messages, message]);
  };

  useInterval(async () => {
    scrollToBottom();
    const res = await getMessages(props.currentChannel._id);
    const messagesArray: any[] = res.data.data;
    if (messagesArray && messagesArray.length > 0) messagesArray.reverse();
    setMessages(messagesArray);
  }, 1000); // It's dangerous to have it any shorter.

  return (
    <>
      <MessagesHeader channelName={props.currentChannel.channelName} />

      <Segment className={classes.MessagesMR}>
        <Comment.Group className={classes.Messages}>
          {messages
            ? messages.length > 0
              ? messages.map((message) => {
                  return (
                    <Message
                      key={message._id}
                      _id={message._id}
                      content={message.content}
                      createdAt={message.createdAt}
                      author={message.author}
                      currentUser={props.currentUser}
                    />
                  );
                })
              : null
            : null}
          <div ref={messagesEndRef} />
        </Comment.Group>
      </Segment>

      <MessageForm
        scrollToBottom={scrollToBottom}
        currentUser={props.currentUser}
        currentChannel={props.currentChannel}
        setMessages={handleSetMessages}
      />
    </>
  );
};

export default Messages;
