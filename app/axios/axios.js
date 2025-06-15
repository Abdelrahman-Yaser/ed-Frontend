import axios from 'axios';

const AxiosInstance = axios.create({
  baseURL: 'http://localhost:5000',
});

AxiosInstance.interceptors.request.use((config) => {
  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default AxiosInstance;
