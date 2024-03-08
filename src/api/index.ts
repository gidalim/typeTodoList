import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
});

instance.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    console.error(error);
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    console.error(error);
    return Promise.reject(error);
  }
);

export default instance;
