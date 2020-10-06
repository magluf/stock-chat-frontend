import { action } from 'typesafe-actions';
import { ChannelActionTypes, Channel } from './types';

export const setChannel = (channel: Channel) =>
  action(ChannelActionTypes.SET_CHANNEL, channel);
