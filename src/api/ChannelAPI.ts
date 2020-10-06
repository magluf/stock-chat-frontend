import axios from './Axios';

export interface IChannel {
  name: string;
  details: string;
  creator: string;
}

export const createChannel = (channel: IChannel) => {
  return axios.post('/channel', channel);
};
