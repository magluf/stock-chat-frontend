import axios from './Axios';

export interface ILoginInfo {
  username: string;
  password: string;
}

export const login = (loginInfo: ILoginInfo) => {
  axios.defaults.withCredentials = true;
  return axios.post('/auth/login', loginInfo);
};
