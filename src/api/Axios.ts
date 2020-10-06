import axios from 'axios';

const instance = axios.create({
  baseURL:
    process.env.NODE_ENV === 'production'
      ? process.env.REACT_APP_PROD_API
      : process.env.REACT_APP_DEV_API
});

export default instance;
