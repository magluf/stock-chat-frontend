import axios from './Axios';

export interface IMessage {
  _id: string;
  author: string;
  channel: string;
  content: string;
}

export const createMessage = (message: IMessage) => {
  return axios.post('/messages', message);
};

export const getMessages = (channelId: string) => {
  return axios.get(`/messages/${channelId}`);
};
