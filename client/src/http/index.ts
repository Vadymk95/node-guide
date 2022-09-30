import axios, { AxiosRequestConfig, AxiosInstance } from 'axios';

const $host = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

const $authHost = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

const authInterceptor = (config: AxiosRequestConfig): AxiosRequestConfig => {
  config.headers!.authorization = `Bearer ${localStorage.getItem('token')}`;
  return config;
};

($authHost as unknown as AxiosInstance).interceptors.request.use(authInterceptor);
export { $host, $authHost };
