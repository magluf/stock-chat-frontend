import React from 'react';
import { Header, Segment, Icon } from 'semantic-ui-react';
import classes from './Messages.module.scss';

const MessageHeader = () => {
  return (
    <Segment className={classes.Header} padded clearing>
      <Header fluid="true" as="h2">
        <span>
          Channel
          <Icon name="star outline" color="black" />
        </span>
      </Header>
    </Segment>
  );
};

export default MessageHeader;
