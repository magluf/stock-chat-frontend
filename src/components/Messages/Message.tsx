import React from 'react';
import moment from 'moment';
import { Comment } from 'semantic-ui-react';
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

  const isOwnMessage = (messageAuthorID: string, currentUserID: string) => {
    return messageAuthorID === currentUserID ? classes.OwnMessage : '';
  };

  return (
    <Comment>
      <Comment.Content
        className={isOwnMessage(props.author._id, props.currentUser._id)}
      >
        <Comment.Author as="a">{props.author.username}</Comment.Author>
        <Comment.Metadata>{date}</Comment.Metadata>
        <Comment.Text>{props.content}</Comment.Text>
      </Comment.Content>
    </Comment>
  );
};

export default Message;
