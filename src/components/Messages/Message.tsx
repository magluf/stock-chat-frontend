import React from 'react';
import moment from 'moment';
import { Comment, Icon } from 'semantic-ui-react';
import { User } from '../../store/ducks/user/types';
import classes from './Messages.module.scss';

interface IMessageProps {
  content: string;
  createdAt: string;
  username: string;
  currentUser: User;
}

const Message = (props: IMessageProps) => {
  const date = moment(props.createdAt).fromNow();

  const styleMessage = (authorUsername: string, currentUsername: string) => {
    if (authorUsername === currentUsername) {
      return classes.OwnMessage;
    }
    if (authorUsername === 'StockBot') return classes.BotMessage;
    return classes.RandoMessage;
  };

  return (
    <Comment>
      <Comment.Content
        className={styleMessage(props.username, props.currentUser.username)}
      >
        {props.username === 'StockBot' ? (
          <Icon name="btc" color="purple" />
        ) : null}
        <Comment.Author as="a">{props.username}</Comment.Author>
        <Comment.Metadata>{date}</Comment.Metadata>
        <Comment.Text>{props.content}</Comment.Text>
      </Comment.Content>
    </Comment>
  );
};

export default Message;
