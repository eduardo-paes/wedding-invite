import axios from "axios"

const axiosInstance = axios.create({ 
  baseURL: 'https://eduardo-giovana.herokuapp.com/api/',
});
axiosInstance.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

export default axiosInstance;