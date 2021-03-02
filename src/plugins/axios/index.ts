import axios from 'axios'
import reqAddHeader from "./request/reqAddHeader";
import resSuccessHandler from './response/resSuccessHandler'
import resErrorHandler from "./response/resErrorHandler"
const axiosInstance = axios.create();

axiosInstance.defaults.timeout = 10000;


// request
axiosInstance.interceptors.request.use(reqAddHeader)

// response
axiosInstance.interceptors.response.use(resSuccessHandler, resErrorHandler)

export default axiosInstance