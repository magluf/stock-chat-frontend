import React from 'react';
import { Segment, Button, Input } from 'semantic-ui-react';

import classes from './Messages.module.scss';

const MessageForm = () => {
  return (
    <Segment className={classes.MessageForm}>
      <Input
        fluid
        name="message"
        style={{ marginBottom: '0.7em' }}
        labelPosition="left"
        placeholder="Write your message"
      />
      <Button
        color="orange"
        content="Add Reply"
        labelPosition="left"
        icon="edit"
      />
    </Segment>
  );
};

export default MessageForm;
