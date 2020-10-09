import axios from 'axios';

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
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default instance;
