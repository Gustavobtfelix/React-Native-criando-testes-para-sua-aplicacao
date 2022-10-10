import axios from 'axios';

// create axios
const instance = axios.create({
  baseURL: 'http://172.26.22.146:3000/',
  timeout: 1000,
});

export default instance;
