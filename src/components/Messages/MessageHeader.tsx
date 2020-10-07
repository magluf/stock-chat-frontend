import React from 'react';
import { Header, Segment, Icon } from 'semantic-ui-react';
import classes from './Messages.module.scss';

interface IMessageHeaderProps {
  channelName: string;
}

const MessageHeader = (props: IMessageHeaderProps) => {
  return (
    <Segment className={classes.Header} padded clearing>
      <Header fluid="true" as="h2">
        <span>
          <Icon name="chart line" color="orange" /> # {props.channelName}
        </span>
      </Header>
    </Segment>
  );
};

export default MessageHeader;
