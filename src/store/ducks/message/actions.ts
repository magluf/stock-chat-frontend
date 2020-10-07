import { action } from 'typesafe-actions';
import { MessageActionTypes, Message } from './types';

export const setGeneralMessages = (messages: Message[]) =>
  action(MessageActionTypes.SET_MESSAGES_GENERAL, messages);

export const setTrivialMessages = (messages: Message[]) =>
  action(MessageActionTypes.SET_MESSAGES_TRIVIAL, messages);
