import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.1.17:5000/api/v1",
  // timeout: 1000 * 10,
});

errorHandler = (error) => {
  console.error(`error generated by axios intercepter`);
  if (error.response) {
    console.error(`status: ${error.response.status}\n`, error.response.data);
  } else {
    console.error(error);
  }
  return Promise.reject(error);
};

api.interceptors.response.use(undefined, (error) => {
  return errorHandler(error);
});

export default api;
