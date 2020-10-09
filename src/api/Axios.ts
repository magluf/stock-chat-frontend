import axios from 'axios';
import store from '../store/store';

const instance = axios.create({
  baseURL:
    process.env.NODE_ENV === 'production'
      ? process.env.REACT_APP_PROD_API
      : process.env.REACT_APP_DEV_API
});

instance.defaults.withCredentials = true;

instance.interceptors.request.use(
  (config) => {
    if (config.baseURL?.includes('herokuapp')) {
      config.params = { ...config.params, heroku: true };
      const token = store.getState().user.currentUser.token;
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default instance;
