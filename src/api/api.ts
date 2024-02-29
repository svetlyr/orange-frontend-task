import axios, { AxiosError } from 'axios';

import { API_KEY, API_URL } from '../config';

const $api = axios.create({
  // withCredentials: true,
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const setAuthorizationHeader = (token: string) => {
  $api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

// ** Set api key url param for
$api.interceptors.request.use((config) => {
  config.params = {
    ...config.params,
    key: API_KEY,
  };

  return config;
});

$api.interceptors.response.use(
  (res) => {
    return res;
  },
  async (error: AxiosError) => {
    if (!error.config) {
      return Promise.reject(error);
    }

    return Promise.reject(error);
  }
);

export default $api;
