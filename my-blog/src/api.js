import axios from 'axios';

// axios.defaults.baseURL = 'https://www.runoob.com';
const instance = axios.create({
  baseURL: 'http://localhost:3000/',
  timeout: 5000,
  withCredentials: false
});

instance.interceptors.request.use((config) => {
  return config
}, (error) => {
  return Promise.reject(error)
})

instance.interceptors.response.use(({
  data
}) => {
  return data;
}, (error) => {
  return Promise.reject(error)
});

export default {
  getJSON() {
    return instance.get("getJson");
  },

  getMsg(data) {
    return instance.post("getMsg", data);
  },

  login(data) {
    return instance.post("login", data);
  },

  submitInfo(data) {
    return instance.post("submitInfo", data);
  }
}