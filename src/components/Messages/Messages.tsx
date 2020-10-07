import React from 'react';
import { Segment, Comment } from 'semantic-ui-react';

import classes from './Messages.module.scss';
import MessagesHeader from './MessageHeader';
import MessageForm from './MessageForm';

const Messages = () => {
  return (
    <>
      <MessagesHeader />

      <Segment className={classes.MessagesMR}>
        <Comment.Group className={classes.Messages}>
          {/* Messages */}
        </Comment.Group>
      </Segment>

      <MessageForm />
    </>
  );
};

export default Messages;
