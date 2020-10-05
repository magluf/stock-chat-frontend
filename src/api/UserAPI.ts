import axios from './Axios';

export interface IUser {
  username: string;
  email: string;
  password: string;
}

export const createUser = (user: IUser) => {
  return axios.post('/users', user);
};
