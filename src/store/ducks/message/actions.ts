import { action } from 'typesafe-actions';
import { MessageActionTypes, Message } from './types';

export const createMessage = (message: Message) =>
  action(MessageActionTypes.CREATE_MESSAGE, message);
