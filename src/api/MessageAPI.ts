import axios from './Axios';

export interface IMessage {
  _id: string;
  author: string;
  channel: string;
  content: string;
}

export const createMessage = (channel: IMessage) => {
  return axios.post('/message', channel);
};
