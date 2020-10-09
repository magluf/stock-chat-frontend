import React, { useState } from 'react';
import { Message as MessageModel } from '../../store/ducks/message/types';
import { Channel } from '../../store/ducks/channel/types';
import { User } from '../../store/ducks/user/types';
import { useInterval } from '../../hooks/useInterval';
import { getMessages } from '../../api/MessageAPI';
import Spinner from '../../components/UI/Spinner';
import Messages from '../../components/Messages/Messages';

interface IMessages {
  currentChannel: Channel;
  currentUser: User;
}

const MessagesContainer = (props: IMessages) => {
  const [messages, setMessages] = useState([] as MessageModel[]);

  useInterval(async () => {
    const res = await getMessages(props.currentChannel._id);
    const messagesArray: any[] = res.data.data;
    if (messagesArray && messagesArray.length > 0) messagesArray.reverse();
    setMessages(messagesArray);
  }, 1000); // It's dangerous to have it any shorter.

  return messages.length > 0 ? (
    <Messages
      messages={messages}
      key={props.currentChannel?._id}
      currentChannel={props.currentChannel as Channel}
      currentUser={props.currentUser}
    />
  ) : (
    <Spinner />
  );
};

export default MessagesContainer;
