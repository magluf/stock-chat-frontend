import React from 'react';
import moment from 'moment';
import { Comment, Icon } from 'semantic-ui-react';
import { User } from '../../store/ducks/user/types';
import classes from './Messages.module.scss';

interface IMessageProps {
  _id: string;
  content: string;
  createdAt: string;
  author: User;
  currentUser: User;
}

const Message = (props: IMessageProps) => {
  const date = moment(props.createdAt).fromNow();

  const styleMessage = (messageAuthor: any, currentUserID: string) => {
    if (messageAuthor._id === currentUserID) {
      return classes.OwnMessage;
    }
    if (messageAuthor.username === 'StockBot') return classes.BotMessage;
    return classes.RandoMessage;
  };

  return (
    <Comment>
      <Comment.Content
        className={styleMessage(props.author, props.currentUser._id)}
      >
        {props.author.username === 'StockBot' ? (
          <Icon name="btc" color="purple" />
        ) : null}
        <Comment.Author as="a">{props.author.username}</Comment.Author>
        <Comment.Metadata>{date}</Comment.Metadata>
        <Comment.Text>{props.content}</Comment.Text>
      </Comment.Content>
    </Comment>
  );
};

export default Message;
