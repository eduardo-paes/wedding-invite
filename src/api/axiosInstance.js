import axios from "axios"

const axiosInstance = axios.create({ 
  // baseURL: 'https://eduardo-giovana.herokuapp.com/api/',
  baseURL: 'http://localhost:5000/api/',
});
axiosInstance.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

export default axiosInstance;